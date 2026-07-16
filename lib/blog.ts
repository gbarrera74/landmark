import fs from 'fs'
import path from 'path'

// The blog reads ONLY these local snapshot files (produced by scripts/blog-import.mjs).
// No WordPress / CMS call happens at build or request time — the whole point of the
// decoupled architecture. To publish, re-run the import and redeploy.
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export type PostCard = {
  slug: string
  title: string
  date: string
  excerpt: string
  hero: string | null
  categories: string[]
  readingMinutes: number
}

export type Post = PostCard & {
  modified: string
  seoTitle: string
  seoDescription: string
  html: string
}

let _index: PostCard[] | null = null

export function getIndex(): PostCard[] {
  if (_index) return _index
  try {
    const raw = fs.readFileSync(path.join(BLOG_DIR, 'index.json'), 'utf8')
    _index = JSON.parse(raw) as PostCard[]
  } catch {
    _index = []
  }
  return _index
}

export function getPost(slug: string): Post | null {
  try {
    const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.json`), 'utf8')
    return JSON.parse(raw) as Post
  } catch {
    return null
  }
}

export function getAllSlugs(): string[] {
  return getIndex().map((p) => p.slug)
}

export const PER_PAGE = 12
export function getPageCount(): number {
  return Math.max(1, Math.ceil(getIndex().length / PER_PAGE))
}
export function getPage(n: number): PostCard[] {
  const start = (n - 1) * PER_PAGE
  return getIndex().slice(start, start + PER_PAGE)
}

export function getRelated(slug: string, n = 3): PostCard[] {
  const all = getIndex()
  const self = all.find((p) => p.slug === slug)
  const cat = self?.categories?.[0]
  const pool = all.filter((p) => p.slug !== slug)
  const sameCat = cat ? pool.filter((p) => p.categories.includes(cat)) : []
  const rest = pool.filter((p) => !sameCat.includes(p))
  return [...sameCat, ...rest].slice(0, n)
}

export function getAdjacent(slug: string): { prev: PostCard | null; next: PostCard | null } {
  const all = getIndex() // newest first
  const i = all.findIndex((p) => p.slug === slug)
  if (i === -1) return { prev: null, next: null }
  return { next: i > 0 ? all[i - 1] : null, prev: i < all.length - 1 ? all[i + 1] : null }
}

// --- Category archives ---------------------------------------------------
// Only categories with real depth get a topic-hub archive page. Thin categories
// (1-3 posts) would be low-value/thin pages, so they are intentionally NOT
// archived (evidence: most WP categories have <=3 posts). Clean slugs are fixed
// here so the URLs stay tidy (e.g. "Washington, D.C." -> washington-dc).
const CATEGORY_SLUGS: Record<string, string> = {
  'Washington, D.C.': 'washington-dc',
  'Quebec City': 'quebec-city',
  'Boston, MA': 'boston',
  'Travel Tips': 'travel-tips',
  'New York City, New York': 'new-york-city',
}

export type CategoryInfo = { name: string; slug: string; count: number }

export function getCategories(): CategoryInfo[] {
  const counts = new Map<string, number>()
  for (const p of getIndex()) for (const c of p.categories || []) counts.set(c, (counts.get(c) || 0) + 1)
  return Object.entries(CATEGORY_SLUGS)
    .map(([name, slug]) => ({ name, slug, count: counts.get(name) || 0 }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count)
}

export function getCategoryBySlug(slug: string): CategoryInfo | null {
  return getCategories().find((c) => c.slug === slug) || null
}

export function getCategoryPosts(slug: string): PostCard[] {
  const cat = getCategoryBySlug(slug)
  if (!cat) return []
  return getIndex().filter((p) => (p.categories || []).includes(cat.name))
}

// For linking a post's category label -> its archive, only when one exists.
export function categorySlug(name: string): string | null {
  const cat = getCategories().find((c) => c.name === name)
  return cat ? cat.slug : null
}

export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return ''
  }
}
