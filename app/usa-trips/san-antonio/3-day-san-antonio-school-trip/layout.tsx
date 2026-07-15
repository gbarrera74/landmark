import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "3 Day San Antonio School Trip | San Antonio",
  description:
    "Discover the Alamo, SeaWorld, and the River Walk on a three day journey through the history and culture of San Antonio. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/san-antonio/3-day-san-antonio-school-trip/" },
  openGraph: { title: "3 Day San Antonio School Trip | Landmark Educational Tours", description: "Discover the Alamo, SeaWorld, and the River Walk on a three day journey through the history and culture of San Antonio.", url: "/usa-trips/san-antonio/3-day-san-antonio-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
