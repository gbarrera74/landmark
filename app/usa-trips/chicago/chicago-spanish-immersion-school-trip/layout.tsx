import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Chicago Spanish Immersion School Trip | Chicago",
  description:
    "A two-day Spanish immersion adventure through Chicago's vibrant Latino neighborhoods, cultural landmarks, and interactive language experiences for student groups. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/chicago/chicago-spanish-immersion-school-trip/" },
  openGraph: { title: "Chicago Spanish Immersion School Trip | Landmark Educational Tours", description: "A two-day Spanish immersion adventure through Chicago's vibrant Latino neighborhoods, cultural landmarks, and interactive language experiences for student groups.", url: "/usa-trips/chicago/chicago-spanish-immersion-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
