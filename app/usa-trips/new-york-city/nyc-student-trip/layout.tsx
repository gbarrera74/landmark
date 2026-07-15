import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "New York City Student Trip | New York City",
  description:
    "Explore New York City with your students through iconic landmarks, world-class culture, and unforgettable behind the scenes experiences. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-york-city/nyc-student-trip/" },
  openGraph: { title: "New York City Student Trip | Landmark Educational Tours", description: "Explore New York City with your students through iconic landmarks, world-class culture, and unforgettable behind the scenes experiences.", url: "/usa-trips/new-york-city/nyc-student-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
