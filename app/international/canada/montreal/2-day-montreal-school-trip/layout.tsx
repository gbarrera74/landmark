import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "2 Day Montreal School Trip | Montreal",
  description:
    "Explore Old Montreal, French-Canadian culture, and iconic landmarks on an immersive two-day educational adventure for student groups. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/international/canada/montreal/2-day-montreal-school-trip/" },
  openGraph: { title: "2 Day Montreal School Trip | Landmark Educational Tours", description: "Explore Old Montreal, French-Canadian culture, and iconic landmarks on an immersive two-day educational adventure for student groups.", url: "/international/canada/montreal/2-day-montreal-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
