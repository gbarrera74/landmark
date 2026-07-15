import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Class Trip Programs for Middle School Students | Washington, D.C.",
  description:
    "A three day educational journey through the nation's capital, blending iconic memorials, the U.S. Capitol, and Smithsonian museums for middle school groups. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-d-c/class-trip-programs-for-middle-school-students/" },
  openGraph: { title: "Class Trip Programs for Middle School Students | Landmark Educational Tours", description: "A three day educational journey through the nation's capital, blending iconic memorials, the U.S. Capitol, and Smithsonian museums for middle school groups.", url: "/usa-trips/washington-d-c/class-trip-programs-for-middle-school-students/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
