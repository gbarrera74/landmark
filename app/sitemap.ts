import type { MetadataRoute } from 'next'

const SITE_URL = (process.env.SITE_URL ?? 'https://irishlifeexperience.com').replace(/\/$/, '')

const ROUTES = [
  '/',
  '/programs/',
  '/students/',
  '/students/classes/',
  '/students/workshops/',
  '/students/tours/',
  '/parents/',
  '/parents/faq/',
  '/parents/accommodations/',
  '/parents/travel/',
  '/about-us/',
  '/meet-the-team/',
  '/testimonials/',
  '/alumni/',
  '/apply/',
  '/contact/',
  '/blog/',
  '/privacy-policy/',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/apply/' || path === '/programs/' ? 0.9 : 0.7,
  }))
}
