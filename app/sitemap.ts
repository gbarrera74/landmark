import type { MetadataRoute } from 'next'

const SITE_URL = (process.env.SITE_URL ?? 'https://landmarkeducationaltours.com').replace(/\/$/, '')

/**
 * Only list routes that actually resolve to a real page. This grows one wave at
 * a time as pages are built, so the sitemap never advertises 404s.
 *
 * Planned additions (add as each is built):
 *   /destinations/ /east-coast/ /midwest/ /southwest/ /west-coast/ /international/
 *   /usa-trips/<city>/ + itineraries · /international/<country>/ + itineraries
 *   /themes/ · /about-landmark/ /accreditations-certifications/ /careers/
 *   /travel-safety-support/ · /resources/ /faq/ /testimonials/ /blog/ (+ posts)
 *   /get-a-quote/ /plan-a-trip/ /contact-us/ · /privacy-policy/
 */
const ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/usa-trips/washington-d-c/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/usa-trips/washington-d-c/8th-grade-washington-dc-trip-itinerary/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/international/italy/', priority: 0.8, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
