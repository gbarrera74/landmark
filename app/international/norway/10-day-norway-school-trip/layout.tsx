import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "10 Day Norway School Trip | Norway",
  description:
    "Ten days across Oslo, Bergen, and Norway's fjords, where students explore Viking heritage, glaciers, and sustainability up close. A customizable 10 Day / 9 Night Landmark educational itinerary.",
  alternates: { canonical: "/international/norway/10-day-norway-school-trip/" },
  openGraph: { title: "10 Day Norway School Trip | Landmark Educational Tours", description: "Ten days across Oslo, Bergen, and Norway's fjords, where students explore Viking heritage, glaciers, and sustainability up close.", url: "/international/norway/10-day-norway-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
