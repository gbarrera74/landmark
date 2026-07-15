import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Disney Educational Tour | Orlando",
  description:
    "Spark curiosity at Walt Disney World with hands-on STEM workshops and behind-the-scenes learning built for student groups. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/orlando-schooltrips/disney-educational-tours/" },
  openGraph: { title: "Disney Educational Tour | Landmark Educational Tours", description: "Spark curiosity at Walt Disney World with hands-on STEM workshops and behind-the-scenes learning built for student groups.", url: "/usa-trips/orlando-schooltrips/disney-educational-tours/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
