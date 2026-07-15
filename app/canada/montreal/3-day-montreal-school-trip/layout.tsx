import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "3 Day Montreal School Trip | Montreal",
  description:
    "Explore Old Montreal, world class museums, and French Canadian culture on an immersive three day educational adventure built for student groups. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/canada/montreal/3-day-montreal-school-trip/" },
  openGraph: { title: "3 Day Montreal School Trip | Landmark Educational Tours", description: "Explore Old Montreal, world class museums, and French Canadian culture on an immersive three day educational adventure built for student groups.", url: "/canada/montreal/3-day-montreal-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
