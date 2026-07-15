import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "8th Grade Washington, DC Trip Itinerary | Washington, D.C.",
  description:
    "Give your 8th graders three days exploring the nation's capital, from Smithsonian museums and national memorials to Mount Vernon. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-d-c/8th-grade-washington-dc-trip-itinerary/" },
  openGraph: { title: "8th Grade Washington, DC Trip Itinerary | Landmark Educational Tours", description: "Give your 8th graders three days exploring the nation's capital, from Smithsonian museums and national memorials to Mount Vernon.", url: "/usa-trips/washington-d-c/8th-grade-washington-dc-trip-itinerary/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
