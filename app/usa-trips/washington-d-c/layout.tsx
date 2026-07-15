import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Educational Trips to Washington, DC',
  description:
    'Customizable Washington, D.C. field trips and student tours, the National Mall, Smithsonian museums, the U.S. Capitol, Arlington, and more. Safe, guided, and built around your curriculum.',
  alternates: { canonical: '/usa-trips/washington-d-c/' },
  openGraph: {
    title: 'Educational Trips to Washington, DC | Landmark Educational Tours',
    description: 'Customizable, safe, guided Washington, D.C. field trips built around your curriculum and group.',
    url: '/usa-trips/washington-d-c/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
