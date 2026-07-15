import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Los Angeles Field Trip | Los Angeles",
  description:
    "Students explore Los Angeles through iconic attractions, world-class museums, and hands-on cultural experiences that spark creativity and learning. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/los-angeles-tours/los-angeles-field-trip/" },
  openGraph: { title: "Los Angeles Field Trip | Landmark Educational Tours", description: "Students explore Los Angeles through iconic attractions, world-class museums, and hands-on cultural experiences that spark creativity and learning.", url: "/usa-trips/los-angeles-tours/los-angeles-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
