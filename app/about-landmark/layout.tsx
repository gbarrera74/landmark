import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Landmark",
  description: "We are an employee-owned team crafting educational group journeys that inspire, educate, and connect travelers of every age.",
  alternates: { canonical: "/about-landmark/" },
  openGraph: { title: "About Landmark | Landmark Educational Tours", description: "We are an employee-owned team crafting educational group journeys that inspire, educate, and connect travelers of every age.", url: "/about-landmark/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
