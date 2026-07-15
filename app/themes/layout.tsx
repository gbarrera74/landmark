import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Themes',
  description: 'Explore Landmark Educational Tours by theme: HBCU campus tours, US history and civics, performing arts, Spanish and French immersion, African American history, Scouts, Yellowstone, and more.',
  alternates: { canonical: '/themes/' },
  openGraph: { title: 'Themes | Landmark Educational Tours', description: 'Curriculum-focused student travel themes, fully customizable.', url: '/themes/' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
