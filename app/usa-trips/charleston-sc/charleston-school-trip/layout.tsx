import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Charleston School Trip | Charleston",
  description:
    "Students explore Charleston's historic streets, preserved landmarks, and engaging museums while connecting classroom lessons to the real places that shaped America. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/charleston-sc/charleston-school-trip/" },
  openGraph: { title: "Charleston School Trip | Landmark Educational Tours", description: "Students explore Charleston's historic streets, preserved landmarks, and engaging museums while connecting classroom lessons to the real places that shaped America.", url: "/usa-trips/charleston-sc/charleston-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
