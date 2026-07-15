import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore our current openings and help us make educational travel possible for every student.",
  alternates: { canonical: "/careers/" },
  openGraph: { title: "Careers | Landmark Educational Tours", description: "Explore our current openings and help us make educational travel possible for every student.", url: "/careers/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
