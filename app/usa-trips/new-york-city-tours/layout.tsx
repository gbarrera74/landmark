import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Educational Trips in NYC | New York City Field Trips',
  description:
    'Customizable New York City field trips and student tours, Ellis Island, the United Nations, Broadway workshops, Wall Street, and the world-class museums. Safe, guided, and built around your curriculum.',
  alternates: { canonical: '/usa-trips/new-york-city-tours/' },
  openGraph: {
    title: 'Educational Trips in NYC | Landmark Educational Tours',
    description: 'Customizable, safe, guided New York City field trips built around your curriculum and group.',
    url: '/usa-trips/new-york-city-tours/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
