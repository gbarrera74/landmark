import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Travel Safety & Support",
  description: "Traveler safety comes first, so your group can explore the world with confidence and peace of mind.",
  alternates: { canonical: "/travel-safety-support/" },
  openGraph: { title: "Travel Safety & Support | Landmark Educational Tours", description: "Traveler safety comes first, so your group can explore the world with confidence and peace of mind.", url: "/travel-safety-support/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
