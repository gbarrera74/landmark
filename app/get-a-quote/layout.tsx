import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    'Request a free, no-obligation quote for your student group. A Landmark Travel Consultant hand-builds a custom, curriculum-aligned itinerary around your destination, dates, grade level, and budget.',
  alternates: { canonical: '/get-a-quote/' },
  openGraph: {
    title: 'Get a Quote | Landmark Educational Tours',
    description: 'Tell us about your trip and get a free, customized quote for your student group.',
    url: '/get-a-quote/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
