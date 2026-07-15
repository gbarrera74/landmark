import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in San Antonio",
  description:
    "Customizable San Antonio field trips and student tours: safe, guided, and built around your curriculum. Plan your San Antonio educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/san-antonio/" },
  openGraph: {
    title: "Educational Field Trips in San Antonio | Landmark Educational Tours",
    description: "Customizable, safe, guided San Antonio student trips built around your curriculum and group.",
    url: "/usa-trips/san-antonio/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
