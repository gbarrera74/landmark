import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Educational Field Trips in Atlanta',
  description:
    'Customizable Atlanta field trips and student tours: the Civil Rights Movement, HBCU campus visits, Southern culture, and history. Safe, guided, and built around your curriculum.',
  alternates: { canonical: '/usa-trips/atlanta/' },
  openGraph: {
    title: 'Educational Field Trips in Atlanta | Landmark Educational Tours',
    description: 'Customizable, safe, guided Atlanta field trips built around your curriculum and group.',
    url: '/usa-trips/atlanta/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
