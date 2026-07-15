import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "HBCU Campus Tours | Washington, D.C.",
  description:
    "Take students on a multi-day journey through historic HBCU campuses and the landmarks of the nation's capital. A customizable 7 Day / 6 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-dc/hbcu-campus-tours/" },
  openGraph: { title: "HBCU Campus Tours | Landmark Educational Tours", description: "Take students on a multi-day journey through historic HBCU campuses and the landmarks of the nation's capital.", url: "/usa-trips/washington-dc/hbcu-campus-tours/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
