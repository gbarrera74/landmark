import type { MetadataRoute } from 'next'

// Fail-safe: default to an EMPTY origin so an unset SITE_URL is treated as
// non-production (noindex). Production MUST set SITE_URL=https://landmarkeducationaltours.com.
const SITE_URL = (process.env.SITE_URL ?? '').replace(/\/$/, '')
const PRODUCTION_ORIGINS = new Set([
  'https://landmarkeducationaltours.com',
  'https://www.landmarkeducationaltours.com',
])

export default function robots(): MetadataRoute.Robots {
  const isProduction = PRODUCTION_ORIGINS.has(SITE_URL)
  if (!isProduction) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    // NOTHING is disallowed here on purpose.
    //
    // /register/ holds the private per-school funnels, which must stay out of
    // search. They carry `robots: { index: false }` from the page's metadata,
    // and that is the ONLY mechanism that reliably keeps them out. A
    // `Disallow: /register/` line actively BREAKS it: a blocked URL is never
    // fetched, so Googlebot never reads the noindex tag, and any /register/ URL
    // that picks up an external link gets indexed anyway as a bare, contentless
    // result. Search Console reported exactly that on 2026-08-08 -- 10 URLs
    // "Blocked by robots.txt" plus 1 "Indexed, though blocked by robots.txt".
    //
    // Letting Googlebot crawl these pages is what makes the noindex enforceable.
    // Crawled-and-noindexed is the goal; blocked-and-guessed-at is not.
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
