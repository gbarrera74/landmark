import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "6 Day Boston Field Trip | Boston",
  description:
    "A six-day journey through Boston's revolutionary history, world-class museums, and iconic university campuses built for student groups. A customizable 6 Day / 5 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/boston/6-day-boston-field-trip/" },
  openGraph: { title: "6 Day Boston Field Trip | Landmark Educational Tours", description: "A six-day journey through Boston's revolutionary history, world-class museums, and iconic university campuses built for student groups.", url: "/usa-trips/boston/6-day-boston-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
