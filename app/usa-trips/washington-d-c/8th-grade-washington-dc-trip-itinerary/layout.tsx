import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Washington DC Trip for 8th Graders',
  description:
    'A sample 3-day / 2-night 8th grade Washington, D.C. itinerary — Smithsonian museums, Arlington National Cemetery, the U.S. Capitol, and Mount Vernon. Fully customizable to your group.',
  alternates: { canonical: '/usa-trips/washington-d-c/8th-grade-washington-dc-trip-itinerary/' },
  openGraph: {
    title: 'Washington DC Trip for 8th Graders | Landmark Educational Tours',
    description: 'A customizable 3-day / 2-night 8th grade Washington, D.C. itinerary built around your curriculum.',
    url: '/usa-trips/washington-d-c/8th-grade-washington-dc-trip-itinerary/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
