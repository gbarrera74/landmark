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

export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return ''
  }
}
