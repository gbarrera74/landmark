import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "3 Day Atlanta Field Trip | Atlanta",
  description:
    "Discover Atlanta's civil rights legacy, historic HBCUs, and standout science and culture stops on a three day student adventure. A customizable 3 Day / 2 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/atlanta/3-day-atlanta-field-trip/" },
  openGraph: { title: "3 Day Atlanta Field Trip | Landmark Educational Tours", description: "Discover Atlanta's civil rights legacy, historic HBCUs, and standout science and culture stops on a three day student adventure.", url: "/usa-trips/atlanta/3-day-atlanta-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
