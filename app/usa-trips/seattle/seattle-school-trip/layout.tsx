import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Seattle School Trip | Seattle",
  description:
    "Explore Seattle's science, technology, and culture through hands-on museums, iconic landmarks, and inspiring real-world learning for student groups. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/seattle/seattle-school-trip/" },
  openGraph: { title: "Seattle School Trip | Landmark Educational Tours", description: "Explore Seattle's science, technology, and culture through hands-on museums, iconic landmarks, and inspiring real-world learning for student groups.", url: "/usa-trips/seattle/seattle-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
