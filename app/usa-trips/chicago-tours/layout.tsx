import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in Chicago",
  description:
    "Customizable Chicago field trips and student tours: safe, guided, and built around your curriculum. Plan your Chicago educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/chicago-tours/" },
  openGraph: {
    title: "Educational Field Trips in Chicago | Landmark Educational Tours",
    description: "Customizable, safe, guided Chicago student trips built around your curriculum and group.",
    url: "/usa-trips/chicago-tours/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
