import fs from 'fs'
import path from 'path'

// Private per-school registration funnels — decoupled from WordPress, exactly like
// the blog. Content lives in content/register/*.json (snapshot via
// scripts/register-import.mjs). These pages are NOINDEXED: served directly to
// specific schools, not public SEO pages.

const REG_DIR = path.join(process.cwd(), 'content', 'register')

export type Registration = {
  slug: string
  title: string
  subtitle: string
  portal: string
  bodyHtml: string
  destination?: string
  dates?: string
  /** Account manager first name; email is derived as <name>@landmarkeducationaltours.com */
  accountManager?: string
  deposit?: string
  enrollmentEnds?: string
  registrationOpens?: string
  /** Cost per student, if the school publishes it (e.g. "$500.00"). */
  costPerStudent?: string
  /** Welcome line, e.g. "<School>, get ready for an unforgettable ... adventure!" */
  introHeading?: string
  /** Supporting paragraph under the welcome line (body copy, not a heading). */
  introText?: string
  /** Trip-highlight carousel — Briana's convention is 6 photos of the attractions. */
  photos?: { src: string; alt: string }[]
  /**
   * Full-bleed hero photo. The template always rendered the hero scrim and the
   * `has-photo` class but never emitted an <img>, so every school page showed a
   * scrim over a flat gradient. When this is unset the first carousel photo is
   * used, so every page gets a real hero.
   */
  heroImage?: string
  wpId?: number
  modified?: string | null
  importedAt?: string
}

/** Derive the account manager's email from their first name. */
export function accountManagerEmail(name: string): string {
  return `${name.trim().toLowerCase()}@landmarkeducationaltours.com`
}

/**
 * Account-manager headshots. Add a file to /public/register/ and map it here to
 * show a photo; anyone without one falls back to an initial avatar.
 */
const AM_PHOTOS: Record<string, string> = {
  emily: '/register/EWilsonHeadshot-221x300.webp',
  angela: '/register/AngelaHeadshot-336x336.webp',
}

export function accountManagerPhoto(name: string): string | null {
  return AM_PHOTOS[name.trim().toLowerCase()] ?? null
}

export function getRegistration(slug: string): Registration | null {
  try {
    return JSON.parse(fs.readFileSync(path.join(REG_DIR, `${slug}.json`), 'utf8')) as Registration
  } catch {
    return null
  }
}

export function getAllRegistrationSlugs(): string[] {
  try {
    return fs
      .readdirSync(REG_DIR)
      .filter((f) => f.endsWith('.json') && f !== 'index.json')
      .map((f) => f.replace(/\.json$/, ''))
  } catch {
    return []
  }
}
