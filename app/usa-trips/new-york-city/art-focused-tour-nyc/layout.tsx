import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Art-Focused Tour of NYC | New York City",
  description:
    "Immerse student groups in New York City's art scene through world-class museums, gallery tours, and hands-on creative workshops. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-york-city/art-focused-tour-nyc/" },
  openGraph: { title: "Art-Focused Tour of NYC | Landmark Educational Tours", description: "Immerse student groups in New York City's art scene through world-class museums, gallery tours, and hands-on creative workshops.", url: "/usa-trips/new-york-city/art-focused-tour-nyc/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
