import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Windy City Tour | Chicago",
  description:
    "Discover Chicago's iconic skyline, world-class museums, and vibrant culture on a five-day adventure built for student groups. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/chicago/the-windy-city-tour/" },
  openGraph: { title: "The Windy City Tour | Landmark Educational Tours", description: "Discover Chicago's iconic skyline, world-class museums, and vibrant culture on a five-day adventure built for student groups.", url: "/usa-trips/chicago/the-windy-city-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
