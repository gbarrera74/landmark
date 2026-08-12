import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "England School Trip | Landmark Educational Tours" },
  description:
    "Eight days across England, from London's landmarks and the West End to Stratford-upon-Avon, Bath, and Oxford. A customizable 8 Day / 7 Night Landmark educational itinerary.",
  alternates: { canonical: "/europe/england/england-school-trip/" },
  openGraph: { title: "England School Trip | Landmark Educational Tours", description: "Eight days across England, from London's landmarks and the West End to Stratford-upon-Avon, Bath, and Oxford.", url: "/europe/england/england-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
