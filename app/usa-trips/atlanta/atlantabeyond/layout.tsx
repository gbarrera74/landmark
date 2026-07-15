import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Atlanta & Beyond | Atlanta",
  description:
    "Discover Atlanta's Civil Rights legacy, world-class museums, and iconic attractions on a customizable tour built for student groups. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/atlanta/atlantabeyond/" },
  openGraph: { title: "Atlanta & Beyond | Landmark Educational Tours", description: "Discover Atlanta's Civil Rights legacy, world-class museums, and iconic attractions on a customizable tour built for student groups.", url: "/usa-trips/atlanta/atlantabeyond/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
