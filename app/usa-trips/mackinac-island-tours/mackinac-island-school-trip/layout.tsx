import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mackinac Island School Trip | Mackinac Island",
  description:
    "Explore historic Mackinac Island on a customizable educational field trip that connects students to real places and living traditions. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/mackinac-island-tours/mackinac-island-school-trip/" },
  openGraph: { title: "Mackinac Island School Trip | Landmark Educational Tours", description: "Explore historic Mackinac Island on a customizable educational field trip that connects students to real places and living traditions.", url: "/usa-trips/mackinac-island-tours/mackinac-island-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
