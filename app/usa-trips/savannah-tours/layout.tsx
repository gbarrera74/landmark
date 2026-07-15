import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in Savannah",
  description:
    "Customizable Savannah field trips and student tours: safe, guided, and built around your curriculum. Plan your Savannah educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/savannah-tours/" },
  openGraph: {
    title: "Educational Field Trips in Savannah | Landmark Educational Tours",
    description: "Customizable, safe, guided Savannah student trips built around your curriculum and group.",
    url: "/usa-trips/savannah-tours/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
