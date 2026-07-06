import type { MetadataRoute } from 'next'

const SITE_URL = (process.env.SITE_URL ?? 'https://landmarkeducationaltours.com').replace(/\/$/, '')
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
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
