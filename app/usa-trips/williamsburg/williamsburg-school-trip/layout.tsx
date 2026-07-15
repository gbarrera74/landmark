import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Williamsburg School Trip | Williamsburg",
  description:
    "Bring early American history to life for students with interactive programs and guided explorations through colonial Williamsburg. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/williamsburg/williamsburg-school-trip/" },
  openGraph: { title: "Williamsburg School Trip | Landmark Educational Tours", description: "Bring early American history to life for students with interactive programs and guided explorations through colonial Williamsburg.", url: "/usa-trips/williamsburg/williamsburg-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
