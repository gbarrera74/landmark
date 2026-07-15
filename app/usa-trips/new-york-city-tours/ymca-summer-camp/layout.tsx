import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "YMCA Summer Camp | New York City",
  description:
    "A three day New York City summer camp adventure packed with iconic landmarks, hands on learning, and team building for student groups. A customizable Summer Program Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/new-york-city-tours/ymca-summer-camp/" },
  openGraph: { title: "YMCA Summer Camp | Landmark Educational Tours", description: "A three day New York City summer camp adventure packed with iconic landmarks, hands on learning, and team building for student groups.", url: "/usa-trips/new-york-city-tours/ymca-summer-camp/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
