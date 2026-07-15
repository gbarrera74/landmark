import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "San Antonio Field Trip | San Antonio",
  description:
    "A four-day educational journey through San Antonio's historic missions, iconic Alamo, and scenic River Walk for student groups. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/san-antonio/san-antonio-field-trip/" },
  openGraph: { title: "San Antonio Field Trip | Landmark Educational Tours", description: "A four-day educational journey through San Antonio's historic missions, iconic Alamo, and scenic River Walk for student groups.", url: "/usa-trips/san-antonio/san-antonio-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
