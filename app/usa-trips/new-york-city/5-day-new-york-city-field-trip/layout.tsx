import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "5 Day New York City Field Trip | New York City",
  description:
    "Students explore five days of iconic New York City landmarks, world-class museums, Broadway theater, and vibrant neighborhoods on this fully customizable educational adventure. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-york-city/5-day-new-york-city-field-trip/" },
  openGraph: { title: "5 Day New York City Field Trip | Landmark Educational Tours", description: "Students explore five days of iconic New York City landmarks, world-class museums, Broadway theater, and vibrant neighborhoods on this fully customizable educational adventure.", url: "/usa-trips/new-york-city/5-day-new-york-city-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
