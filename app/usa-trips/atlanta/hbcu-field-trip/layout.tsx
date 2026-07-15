import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "HBCU Field Trip | Atlanta",
  description:
    "Take students across historic HBCU campuses in Atlanta and Alabama for guided tours, admissions sessions, and unforgettable cultural experiences. A customizable 4 Day / 3 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/atlanta/hbcu-field-trip/" },
  openGraph: { title: "HBCU Field Trip | Landmark Educational Tours", description: "Take students across historic HBCU campuses in Atlanta and Alabama for guided tours, admissions sessions, and unforgettable cultural experiences.", url: "/usa-trips/atlanta/hbcu-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
