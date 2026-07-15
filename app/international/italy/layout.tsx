import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Educational Trips to Italy | Student Tours',
  description:
    'Customizable educational tours to Italy for students, Rome, Florence, Venice, and Pompeii. Guided, curriculum-aligned, and fully supported, from group flights to licensed local guides.',
  alternates: { canonical: '/international/italy/' },
  openGraph: {
    title: 'Educational Trips to Italy | Landmark Educational Tours',
    description: 'Guided, curriculum-aligned student tours to Rome, Florence, Venice, and Pompeii, fully customizable, fully supported.',
    url: '/international/italy/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
