import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "4 Day Washington, DC School Trip | Washington, D.C.",
  description:
    "Explore the nation's capital over four days of monuments, museums, and hands-on lessons in American history and government. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-d-c/4-day-washington-dc-school-trip/" },
  openGraph: { title: "4 Day Washington, DC School Trip | Landmark Educational Tours", description: "Explore the nation's capital over four days of monuments, museums, and hands-on lessons in American history and government.", url: "/usa-trips/washington-d-c/4-day-washington-dc-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
