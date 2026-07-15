import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Savannah Field Trip | Savannah",
  description:
    "Take students beyond the classroom with a customizable Savannah journey through preserved historic sites, guided tours, and hands on learning. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/savannah/savannah-field-trip/" },
  openGraph: { title: "Savannah Field Trip | Landmark Educational Tours", description: "Take students beyond the classroom with a customizable Savannah journey through preserved historic sites, guided tours, and hands on learning.", url: "/usa-trips/savannah/savannah-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
