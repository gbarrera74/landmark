#!/usr/bin/env node
/**
 * Blog import — the "snapshot" step of the decoupled-blog architecture.
 *
 * Pulls every WordPress post ONCE, extracts the real article body out of the
 * Elementor markup, sanitizes it to clean semantic HTML, downloads every image
 * so nothing loads from the CMS host, and writes the result to content/blog/*.json.
 *
 * The Next.js site reads ONLY those local JSON files — it never calls WordPress
 * at build or runtime. To publish new/edited posts, re-run this script and commit.
 *
 *   node scripts/blog-import.mjs            # all posts
 *   BLOG_LIMIT=8 node scripts/blog-import.mjs   # first 8 (validation)
 *
 * This is the reference implementation intended to be shared across
 * junipertours / gobluetours by swapping WP_BASE.
 */
import fs from 'fs'
import path from 'path'
import { parse } from 'node-html-parser'

const WP_BASE = process.env.WP_BASE || 'https://landmarkeducationaltours.com'
const LIMIT = process.env.BLOG_LIMIT ? Number(process.env.BLOG_LIMIT) : Infinity
const ROOT = path.resolve(process.cwd())
const OUT_DIR = path.join(ROOT, 'content', 'blog')
const IMG_DIR = path.join(ROOT, 'public', 'blog')
const IMG_PUBLIC = '/blog'
const UA = 'Mozilla/5.0 (blog-import) AppleWebKit/537.36 Chrome/125.0'

fs.mkdirSync(OUT_DIR, { recursive: true })
fs.mkdirSync(IMG_DIR, { recursive: true })

const strip = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const decodeEnt = (s) => (s || '')
  .replace(/&amp;/g, '&').replace(/&#8217;/g, '’').replace(/&#8216;/g, '‘')
  .replace(/&#8220;/g, '“').replace(/&#8221;/g, '”').replace(/&#8211;/g, ',').replace(/&#8212;/g, ',')
  .replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…').replace(/&#039;/g, "'")

async function fetchJson(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!r.ok) throw new Error(`${r.status} ${url}`)
  return r.json()
}

async function fetchCategoryMap() {
  const map = {}
  try {
    for (let page = 1; page <= 5; page++) {
      const cats = await fetchJson(`${WP_BASE}/wp-json/wp/v2/categories?per_page=100&page=${page}&_fields=id,name,slug`)
      if (!Array.isArray(cats) || !cats.length) break
      for (const c of cats) map[c.id] = decodeEnt(c.name)
      if (cats.length < 100) break
    }
  } catch { /* categories optional */ }
  return map
}

async function fetchAllPosts() {
  const posts = []
  const per = 25 // lighter page size — _embed=100 500s this WP server
  const fields = 'id,slug,date,modified,title,excerpt,content,categories,yoast_head_json'
  for (let page = 1; ; page++) {
    const url = `${WP_BASE}/wp-json/wp/v2/posts?per_page=${per}&page=${page}&_fields=${fields}`
    let batch
    try { batch = await fetchJson(url) } catch (e) { if (/\b40[04]\b/.test(String(e))) break; throw e }
    if (!Array.isArray(batch) || !batch.length) break
    posts.push(...batch)
    process.stdout.write(`\r  fetched ${posts.length} posts...`)
    if (batch.length < per || posts.length >= LIMIT) break
  }
  process.stdout.write('\n')
  return posts.slice(0, LIMIT)
}

// ---- image self-hosting ----
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
  const file = imgFilename(url)
  const dest = path.join(IMG_DIR, file)
  const publicPath = `${IMG_PUBLIC}/${file}`
  if (!fs.existsSync(dest)) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA } })
      if (!r.ok) { imgCache.set(url, url); return url }
      const buf = Buffer.from(await r.arrayBuffer())
      if (buf.length < 500) { imgCache.set(url, url); return url }
      fs.writeFileSync(dest, buf)
    } catch { imgCache.set(url, url); return url }
  }
  imgCache.set(url, publicPath)
  return publicPath
}

// ---- Elementor -> clean semantic HTML ----
const ALLOWED = new Set(['h2', 'h3', 'h4', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'blockquote', 'figure', 'figcaption', 'img', 'br', 'hr'])
const H_DEMOTE = { h1: 'h2' } // never allow a second h1 in the article body

async function normalizeBody(contentHtml) {
  const root = parse(contentHtml)
  // The article prose lives in the text-editor widget container(s). Grab them in order.
  const containers = root.querySelectorAll('.elementor-widget-text-editor .elementor-widget-container')
  const source = containers.length ? containers.map(c => c.innerHTML).join('\n') : contentHtml
  const body = parse(source)

  // Collect + localize images first (await), then clean synchronously.
  for (const img of body.querySelectorAll('img')) {
    const src = img.getAttribute('src') || img.getAttribute('data-src')
    const local = await localizeImage(src)
    img.setAttribute('src', local || '')
  }

  const DROP = new Set(['script', 'style', 'button', 'svg', 'iframe', 'form', 'noscript', 'input', 'nav'])
  const clean = (node) => {
    for (const child of [...node.childNodes]) {
      if (child.nodeType === 3) continue // keep text
      if (child.nodeType !== 1) { child.remove(); continue }
      const raw = child.rawTagName?.toLowerCase()
      if (DROP.has(raw)) { child.remove(); continue }
      let tag = H_DEMOTE[raw] || raw
      // Clean the subtree FIRST so a kept element promoted out of an unwrapped
      // container (e.g. <a> inside a <span>) still gets its attributes stripped.
      clean(child)
      if (!ALLOWED.has(tag)) { child.replaceWith(...child.childNodes); continue } // unwrap span/div/etc.
      const keep = {}
      if (tag === 'a') {
        let h = child.getAttribute('href') || ''
        h = h.replace(WP_BASE, '') // internal absolute -> relative (redirects handle old paths)
        if (h) keep.href = h
        if (/^https?:/i.test(h)) keep.rel = 'noopener'
      }
      if (tag === 'img') { keep.src = child.getAttribute('src') || ''; keep.alt = child.getAttribute('alt') || ''; keep.loading = 'lazy'; }
      child.setAttributes(keep) // replaces ALL attributes with just the allow-listed ones
      if (raw !== tag) child.rawTagName = tag
    }
  }
  clean(body)
  // collapse empty paragraphs
  for (const p of body.querySelectorAll('p')) if (!strip(p.innerHTML) && !p.querySelector('img')) p.remove()
  return body.innerHTML.replace(/\s+\n/g, '\n').trim()
}

function mapCategories(post, catMap) {
  return (post.categories || []).map(id => catMap[id]).filter(c => c && c.toLowerCase() !== 'uncategorized')
}
const firstImg = (html) => (html.match(/<img[^>]+src="([^"]+)"/) || [])[1] || null

async function run() {
  console.log(`Fetching posts from ${WP_BASE} ...`)
  const catMap = await fetchCategoryMap()
  const posts = await fetchAllPosts()
  console.log(`Got ${posts.length} posts. Normalizing + downloading images...`)
  const index = []
  let i = 0
  for (const post of posts) {
    i++
    const slug = post.slug
    const title = decodeEnt(strip(post.title?.rendered))
    const html = await normalizeBody(post.content?.rendered || '')
    let hero = post.yoast_head_json?.og_image?.[0]?.url || firstImg(html) || null
    // og_image may be a remote URL; body images are already localized. Localize hero too.
    hero = /^https?:/i.test(hero || '') ? await localizeImage(hero) : hero
    const words = strip(html).split(/\s+/).filter(Boolean).length
    const record = {
      slug,
      title,
      date: post.date,
      modified: post.modified,
      excerpt: decodeEnt(strip(post.excerpt?.rendered)),
      hero,
      categories: mapCategories(post, catMap),
      seoTitle: decodeEnt(post.yoast_head_json?.title || title),
      seoDescription: decodeEnt(post.yoast_head_json?.description || strip(post.excerpt?.rendered)),
      readingMinutes: Math.max(1, Math.round(words / 200)),
      html,
    }
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.json`), JSON.stringify(record, null, 1))
    index.push({ slug, title, date: post.date, excerpt: record.excerpt, hero, categories: record.categories, readingMinutes: record.readingMinutes })
    if (i % 20 === 0 || i === posts.length) console.log(`  ${i}/${posts.length}  (${imgCache.size} images)`)
  }
  index.sort((a, b) => (a.date < b.date ? 1 : -1))
  fs.writeFileSync(path.join(OUT_DIR, 'index.json'), JSON.stringify(index, null, 1))
  console.log(`\nDone. ${index.length} posts, ${imgCache.size} images -> public/blog/`)
}
run().catch(e => { console.error(e); process.exit(1) })
