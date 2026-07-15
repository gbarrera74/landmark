import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plan a Trip',
  description:
    'Book a call with a Landmark Educational Tours specialist to plan your student trip, or request a customized quote. Expertise when you need it, fun when you want it.',
  alternates: { canonical: '/plan-a-trip/' },
  openGraph: {
    title: 'Plan a Trip | Landmark Educational Tours',
    description: 'Book a planning call with a Landmark specialist for your student group.',
    url: '/plan-a-trip/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
