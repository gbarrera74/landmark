import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in Williamsburg",
  description:
    "Customizable Williamsburg field trips and student tours: safe, guided, and built around your curriculum. Plan your Williamsburg educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/williamsburg/" },
  openGraph: {
    title: "Educational Field Trips in Williamsburg | Landmark Educational Tours",
    description: "Customizable, safe, guided Williamsburg student trips built around your curriculum and group.",
    url: "/usa-trips/williamsburg/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
