import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Private School Class Trips | Landmark Educational Tours",
  description: "Landmark builds fully managed, completely custom class trips for private, faith-based, and independent schools across the country and abroad..",
  alternates: { canonical: "/private-school-class-trips/" },
  openGraph: { title: "Private School Class Trips | Landmark Educational Tours", description: "Landmark builds fully managed, completely custom class trips for private, faith-based, and independent schools across the country and abroad.", url: "/private-school-class-trips/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
