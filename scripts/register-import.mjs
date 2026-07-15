#!/usr/bin/env node
/**
 * Register-page import — snapshot the per-school registration funnels out of the
 * live WordPress site into local JSON, exactly like blog-import but for the
 * private /register/<school>/ pages.
 *
 * Each school page is a private, NOINDEXED funnel served directly to one school:
 * hero (school + destination + dates), a "Register Now" CTA to the secure portal,
 * and a day-by-day itinerary. We sanitize the Elementor markup to clean semantic
 * HTML, self-host images, and write content/register/<slug>.json.
 *
 * The Next site reads ONLY those JSON files (zero WP at build/runtime).
 * Re-run + commit to publish new/edited school pages.
 *
 *   node scripts/register-import.mjs               # all
 *   REG_LIMIT=3 node scripts/register-import.mjs   # first 3 (validation)
 */
import fs from 'fs'
import path from 'path'
import { parse } from 'node-html-parser'

const WP_BASE = process.env.WP_BASE || 'https://landmarkeducationaltours.com'
const LIMIT = process.env.REG_LIMIT ? Number(process.env.REG_LIMIT) : Infinity
const ROOT = path.resolve(process.cwd())
const OUT_DIR = path.join(ROOT, 'content', 'register')
const IMG_DIR = path.join(ROOT, 'public', 'register')
const IMG_PUBLIC = '/register'
const UA = 'Mozilla/5.0 (register-import) AppleWebKit/537.36 Chrome/125.0'
const PORTAL = 'https://secureportal.landmarkeducationaltours.com/site/public/landmark'

// The 32 true per-school registration funnels (school name + dates + itinerary).
const SLUGS = [
  'alvin-college', 'apex-friendship-high-school', 'bennett-venture-academy',
  'black-pine-circle-school', 'bondurant-middle-school', 'bristol-grade-school',
  'christ-the-king-high-school-11th-grade', 'east-jessamine-middle-school',
  'east-northport-middle-school', 'epping-middle-school', 'fort-bragg-high-school',
  'franklin-road-academy', 'freeport-high-school', 'glen-rock-middle-school',
  'greater-latrobe-wildcats', 'lithonia-middle-school', 'mayfield-senior-school',
  'merion-mercy-academy', 'mevers-school-of-excellence', 'pathfinder-regional-tech-high-2027',
  'pulliam-elementary-school', 'registration-eton-academy', 'salem-high-school',
  'seaside-neighborhood-school', 'simon-fortin-quebec-school-trips', 'stagg-high-school',
  'upperman-high-school', 'warren-central-high-school', 'webster-central-schools',
  'weldon-valley-schools', 'wheeler-high-school', 'wood-ridge-jr-sr-high-school',
]

fs.mkdirSync(OUT_DIR, { recursive: true })
fs.mkdirSync(IMG_DIR, { recursive: true })

const strip = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const decodeEnt = (s) => (s || '')
  .replace(/&amp;/g, '&').replace(/&#8217;/g, '’').replace(/&#8216;/g, '‘')
  .replace(/&#8220;/g, '“').replace(/&#8221;/g, '”').replace(/&#8211;/g, '–')
  .replace(/&#8212;/g, '—').replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…').replace(/&#039;/g, "'")

const UA_H = { 'User-Agent': UA }
async function fetchJson(url) {
  const r = await fetch(url, { headers: UA_H })
  if (!r.ok) throw new Error(`${r.status} ${url}`)
  return r.json()
}

const imgCache = new Map()
function imgFilename(url) {
  const clean = url.split('?')[0]
  let base = path.basename(clean).replace(/[^a-zA-Z0-9._-]/g, '-')
  if (!/\.(jpe?g|png|webp|gif|avif)$/i.test(base)) base += '.jpg'
  return base
}
async function localizeImage(url) {
  if (!url) return null
  if (!/^https?:\/\//i.test(url)) return url
  if (imgCache.has(url)) return imgCache.get(url)
  const dest = path.join(IMG_DIR, imgFilename(url))
  const publicPath = `${IMG_PUBLIC}/${imgFilename(url)}`
  if (!fs.existsSync(dest)) {
    try {
      const r = await fetch(url, { headers: UA_H })
      if (!r.ok) { imgCache.set(url, url); return url }
      const buf = Buffer.from(await r.arrayBuffer())
      if (buf.length < 500) { imgCache.set(url, url); return url }
      fs.writeFileSync(dest, buf)
    } catch { imgCache.set(url, url); return url }
  }
  imgCache.set(url, publicPath)
  return publicPath
}

// Full-content Elementor -> clean semantic HTML (keeps interleaved images + the
// secure-portal register links; drops scripts/buttons/iframes/forms/maps).
const ALLOWED = new Set(['h2', 'h3', 'h4', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'blockquote', 'figure', 'figcaption', 'img', 'br', 'hr'])
const H_DEMOTE = { h1: 'h2' }

async function normalizeBody(contentHtml) {
  const body = parse(contentHtml)
  for (const img of body.querySelectorAll('img')) {
    const src = img.getAttribute('src') || img.getAttribute('data-src')
    img.setAttribute('src', (await localizeImage(src)) || '')
  }
  const DROP = new Set(['script', 'style', 'button', 'svg', 'iframe', 'form', 'noscript', 'input', 'nav'])
  const clean = (node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === 3) continue
      if (child.nodeType !== 1) { child.remove(); continue }
      const raw = child.rawTagName?.toLowerCase()
      if (DROP.has(raw)) { child.remove(); continue }
      const tag = H_DEMOTE[raw] || raw
      clean(child)
      if (!ALLOWED.has(tag)) { child.replaceWith(...child.childNodes); continue }
      const keep = {}
      if (tag === 'a') {
        let h = child.getAttribute('href') || ''
        h = h.replace(WP_BASE, '')
        if (h) keep.href = h
        if (/^https?:/i.test(h)) { keep.rel = 'noopener'; keep.target = '_blank' }
      }
      if (tag === 'img') { keep.src = child.getAttribute('src') || ''; keep.alt = child.getAttribute('alt') || ''; keep.loading = 'lazy' }
      child.setAttributes(keep)
      if (raw !== tag) child.rawTagName = tag
    }
  }
  clean(body)
  for (const p of body.querySelectorAll('p')) if (!strip(p.innerHTML) && !p.querySelector('img')) p.remove()
  return body.innerHTML.replace(/\s+\n/g, '\n').trim()
}

async function run() {
  const slugs = SLUGS.slice(0, LIMIT)
  const index = []
  for (const slug of slugs) {
    let data
    try {
      data = await fetchJson(`${WP_BASE}/wp-json/wp/v2/pages?slug=${slug}&_fields=id,slug,title,content,date,modified`)
    } catch (e) { console.log(`  SKIP ${slug}: ${e.message}`); continue }
    if (!Array.isArray(data) || !data.length) { console.log(`  SKIP ${slug}: not found`); continue }
    const p = data[0]
    const title = decodeEnt(p.title?.rendered || slug)
    const rawHtml = p.content?.rendered || ''
    // hero subtitle = first <h1> text minus the school name
    const h1 = strip((rawHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '')
    let subtitle = decodeEnt(h1)
    if (subtitle.toLowerCase().startsWith(title.toLowerCase())) subtitle = subtitle.slice(title.length).trim()
    subtitle = subtitle.replace(/^[\s,–—-]+/, '').trim()
    let bodyHtml = await normalizeBody(rawHtml)
    // strip the leading hero-duplicate heading (short first <h2> that repeats the school name;
    // the real intro <h2> starts with the name too but is much longer, so keep it)
    bodyHtml = bodyHtml.replace(/^(<h2>[\s\S]*?<\/h2>)\s*/i, (m, h) => {
      const t = strip(h)
      return t.toLowerCase().startsWith(title.toLowerCase().slice(0, 12)) && t.length < title.length + 70 ? '' : m
    }).trim()
    const record = {
      slug, title, subtitle, portal: PORTAL, bodyHtml,
      wpId: p.id, modified: p.modified || p.date || null,
      importedAt: new Date().toISOString().slice(0, 10),
    }
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.json`), JSON.stringify(record, null, 1))
    index.push({ slug, title, subtitle })
    console.log(`  ${slug}  "${title}" — ${strip(bodyHtml).split(' ').length} words, sub="${subtitle}"`)
  }
  fs.writeFileSync(path.join(OUT_DIR, 'index.json'), JSON.stringify(index, null, 1))
  console.log(`\nWrote ${index.length} register pages to content/register/`)
}
run()
