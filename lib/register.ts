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
  wpId?: number
  modified?: string | null
  importedAt?: string
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
