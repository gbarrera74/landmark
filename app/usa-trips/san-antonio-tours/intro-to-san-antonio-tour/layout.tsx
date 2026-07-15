import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Intro to San Antonio Tour | San Antonio",
  description:
    "Spend five days discovering San Antonio's landmarks, missions, and River Walk on an immersive educational adventure for student groups. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/san-antonio-tours/intro-to-san-antonio-tour/" },
  openGraph: { title: "Intro to San Antonio Tour | Landmark Educational Tours", description: "Spend five days discovering San Antonio's landmarks, missions, and River Walk on an immersive educational adventure for student groups.", url: "/usa-trips/san-antonio-tours/intro-to-san-antonio-tour/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
