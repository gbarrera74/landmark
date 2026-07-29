import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "Boston School Trip | Landmark Educational Tours" },
  description:
    "Walk the Freedom Trail, tour the USS Constitution, and bring the American Revolution to life for your students. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/boston/boston-school-trip/" },
  openGraph: { title: "Boston School Trip | Landmark Educational Tours", description: "Walk the Freedom Trail, tour the USS Constitution, and bring the American Revolution to life for your students.", url: "/usa-trips/boston/boston-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
