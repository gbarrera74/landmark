import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "England Theatre, Literature & Culture | Landmark Educational Tours" },
  description:
    "Eight days of theatre, literature, and history in England, with two West End performances, Shakespeare's Globe, the Tower of London, Stratford-upon-Avon, and Oxford. A customizable 8 Day / 7 Night Landmark educational itinerary.",
  alternates: { canonical: "/europe/england/england-theatre-literature-culture/" },
  openGraph: { title: "England Theatre, Literature & Culture | Landmark Educational Tours", description: "Eight days of theatre, literature, and history in England, with two West End performances, Shakespeare's Globe, the Tower of London, Stratford-upon-Avon, and Oxford.", url: "/europe/england/england-theatre-literature-culture/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
