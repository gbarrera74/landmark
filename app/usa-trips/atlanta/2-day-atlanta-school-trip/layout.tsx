import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "2 Day Atlanta School Trip | Atlanta",
  description:
    "Discover Atlanta's civil rights history, dynamic museums, and lively attractions on a two day journey built for student groups. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/atlanta/2-day-atlanta-school-trip/" },
  openGraph: { title: "2 Day Atlanta School Trip | Landmark Educational Tours", description: "Discover Atlanta's civil rights history, dynamic museums, and lively attractions on a two day journey built for student groups.", url: "/usa-trips/atlanta/2-day-atlanta-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
