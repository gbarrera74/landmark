import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "Historic Ireland | Landmark Educational Tours" },
  description:
    "Nine days across Ireland, from the Book of Kells and the Giant's Causeway to Blarney Castle, the Ring of Kerry, and the Cliffs of Moher. A customizable 9 Day / 8 Night Landmark educational itinerary.",
  alternates: { canonical: "/europe/ireland/historic-ireland/" },
  openGraph: { title: "Historic Ireland | Landmark Educational Tours", description: "Nine days across Ireland, from the Book of Kells and the Giant's Causeway to Blarney Castle, the Ring of Kerry, and the Cliffs of Moher.", url: "/europe/ireland/historic-ireland/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
