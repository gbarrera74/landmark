import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "4 Day New York City School Trip | New York City",
  description:
    "Explore the Big Apple over four days as students discover iconic landmarks, world-class museums, Broadway, and vibrant neighborhoods. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-york-city-tours/4-day-new-york-city-school-trip/" },
  openGraph: { title: "4 Day New York City School Trip | Landmark Educational Tours", description: "Explore the Big Apple over four days as students discover iconic landmarks, world-class museums, Broadway, and vibrant neighborhoods.", url: "/usa-trips/new-york-city-tours/4-day-new-york-city-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
