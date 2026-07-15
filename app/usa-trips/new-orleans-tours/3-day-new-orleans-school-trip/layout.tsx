import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "3 Day New Orleans School Trip | New Orleans",
  description:
    "A three day journey through New Orleans jazz, cemeteries, and Creole culture built for student groups of every grade. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-orleans-tours/3-day-new-orleans-school-trip/" },
  openGraph: { title: "3 Day New Orleans School Trip | Landmark Educational Tours", description: "A three day journey through New Orleans jazz, cemeteries, and Creole culture built for student groups of every grade.", url: "/usa-trips/new-orleans-tours/3-day-new-orleans-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
