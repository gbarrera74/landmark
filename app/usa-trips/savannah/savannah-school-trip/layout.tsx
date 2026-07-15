import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Savannah School Trip | Savannah",
  description:
    "Bring learning to life with a customizable Savannah journey through preserved historic sites and interactive experiences built for student groups. A customizable 2 Day / 1 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/savannah/savannah-school-trip/" },
  openGraph: { title: "Savannah School Trip | Landmark Educational Tours", description: "Bring learning to life with a customizable Savannah journey through preserved historic sites and interactive experiences built for student groups.", url: "/usa-trips/savannah/savannah-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
