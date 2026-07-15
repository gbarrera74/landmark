import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Presidential Inauguration 2029 School Trip | Washington, D.C.",
  description:
    "Witness the historic 2029 Presidential Inauguration and explore Washington D.C. landmarks on this four day student journey through American democracy. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-dc/2029-presidential-inauguration-class-trips/" },
  openGraph: { title: "Presidential Inauguration 2029 School Trip | Landmark Educational Tours", description: "Witness the historic 2029 Presidential Inauguration and explore Washington D.C. landmarks on this four day student journey through American democracy.", url: "/usa-trips/washington-dc/2029-presidential-inauguration-class-trips/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
