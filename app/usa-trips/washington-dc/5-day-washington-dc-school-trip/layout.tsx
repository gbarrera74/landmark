import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "5 Day Washington, DC School Trip | Washington, D.C.",
  description:
    "Give students five immersive days exploring the monuments, museums, and living history at the heart of the nation's capital. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/washington-dc/5-day-washington-dc-school-trip/" },
  openGraph: { title: "5 Day Washington, DC School Trip | Landmark Educational Tours", description: "Give students five immersive days exploring the monuments, museums, and living history at the heart of the nation's capital.", url: "/usa-trips/washington-dc/5-day-washington-dc-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
