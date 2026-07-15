import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Williamsburg Field Trip | Williamsburg",
  description:
    "Students step into early American life in Williamsburg through interactive programs, guided explorations, and thoughtfully preserved historic settings. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/williamsburg/williamsburg-field-trip/" },
  openGraph: { title: "Williamsburg Field Trip | Landmark Educational Tours", description: "Students step into early American life in Williamsburg through interactive programs, guided explorations, and thoughtfully preserved historic settings.", url: "/usa-trips/williamsburg/williamsburg-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
