import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Chicago Student Tour | Chicago",
  description:
    "Give students an immersive three day adventure through Chicago's iconic landmarks, world class museums, and legendary architecture. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/chicago-tours/chicago-student-tour/" },
  openGraph: { title: "Chicago Student Tour | Landmark Educational Tours", description: "Give students an immersive three day adventure through Chicago's iconic landmarks, world class museums, and legendary architecture.", url: "/usa-trips/chicago-tours/chicago-student-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
