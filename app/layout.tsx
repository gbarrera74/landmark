import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleFonts from '@/components/GoogleFonts'
import TrackingScripts from '@/components/TrackingScripts'
import JsonLd from '@/lib/seo/JsonLd'
import { organization, website } from '@/lib/seo/schemas'

// Canonical/OG URLs always use the real prod domain, even on staging.
// Use || (not ??) so an empty-string SITE_URL also falls back instead of
// crashing new URL('') below; unset and real-URL behavior is unchanged.
const SITE_URL = (process.env.SITE_URL || 'https://landmarkeducationaltours.com').replace(/\/$/, '')

const PRODUCTION_ORIGINS = new Set([
  'https://landmarkeducationaltours.com',
  'https://www.landmarkeducationaltours.com',
])
// Robots gate is FAIL-SAFE: read the raw env (NOT the prod-defaulted SITE_URL),
// so an unset SITE_URL (staging) => non-production => noindex, matching
// robots.ts + next.config's X-Robots-Tag. Prod must set SITE_URL explicitly.
const isProduction = PRODUCTION_ORIGINS.has((process.env.SITE_URL ?? '').replace(/\/$/, ''))

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Landmark Educational Tours | Student Travel & Educational Field Trips',
    template: '%s | Landmark Educational Tours',
  },
  description:
    'Travel the world and let Landmark Educational Tours perfectly customize your educational field trip to help students experience the great wonders of the world.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Landmark Educational Tours',
    title: 'Landmark Educational Tours | Educational Travel, Customized for You',
    description:
      'Curated, safe, customized educational field trips and student tours across the U.S. and abroad. Educational Travel, Customized for You.',
    // OG image is auto-generated from app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landmark Educational Tours | Educational Travel, Customized for You',
    description: 'Curated, safe, customized educational field trips and student tours across the U.S. and abroad.',
  },
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <GoogleFonts />
        <a href="#main-content" className="lm-skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <TrackingScripts />
        <JsonLd data={organization()} />
        <JsonLd data={website()} />
      </body>
    </html>
  )
}
