import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Atlanta & AL HBCU Field Trip | Atlanta",
  description:
    "Explore historic HBCU campuses across Atlanta and Alabama on a four day journey through Civil Rights history and higher education. A customizable 5 Day / 4 Night Landmark educational itinerary.",
  alternates: { canonical: "/usa-trips/atlanta/atlanta-and-alabama-hbcu-field-trip/" },
  openGraph: { title: "Atlanta & AL HBCU Field Trip | Landmark Educational Tours", description: "Explore historic HBCU campuses across Atlanta and Alabama on a four day journey through Civil Rights history and higher education.", url: "/usa-trips/atlanta/atlanta-and-alabama-hbcu-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
