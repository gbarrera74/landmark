import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Resources",
  description: "Everything you need to feel ready and confident before your group departs on its next adventure.",
  alternates: { canonical: "/resources/" },
  openGraph: { title: "Resources | Landmark Educational Tours", description: "Everything you need to feel ready and confident before your group departs on its next adventure.", url: "/resources/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
