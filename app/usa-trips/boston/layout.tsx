import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Educational Trips to Boston | Boston Field Trips',
  description:
    'Customizable Boston field trips and student tours, the Freedom Trail, historic meeting houses, world-class universities, plus Salem and Newport add-ons. Safe, guided, and built around your curriculum.',
  alternates: { canonical: '/usa-trips/boston/' },
  openGraph: {
    title: 'Educational Trips to Boston | Landmark Educational Tours',
    description: 'Customizable, safe, guided Boston field trips built around your curriculum and group.',
    url: '/usa-trips/boston/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
