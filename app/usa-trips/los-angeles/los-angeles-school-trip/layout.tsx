import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Los Angeles School Trip | Los Angeles",
  description:
    "Discover the creativity, science, and entertainment of Los Angeles on an unforgettable student journey through the city's iconic landmarks. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/los-angeles/los-angeles-school-trip/" },
  openGraph: { title: "Los Angeles School Trip | Landmark Educational Tours", description: "Discover the creativity, science, and entertainment of Los Angeles on an unforgettable student journey through the city's iconic landmarks.", url: "/usa-trips/los-angeles/los-angeles-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
