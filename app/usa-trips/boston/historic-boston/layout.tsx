import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Historic Boston | Boston",
  description:
    "Walk the Freedom Trail and explore revolutionary landmarks on a three day Boston tour built for student groups. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/boston/historic-boston/" },
  openGraph: { title: "Historic Boston | Landmark Educational Tours", description: "Walk the Freedom Trail and explore revolutionary landmarks on a three day Boston tour built for student groups.", url: "/usa-trips/boston/historic-boston/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
