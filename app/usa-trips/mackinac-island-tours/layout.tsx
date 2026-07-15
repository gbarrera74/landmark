import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in Mackinac Island",
  description:
    "Customizable Mackinac Island field trips and student tours: safe, guided, and built around your curriculum. Plan your Mackinac Island educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/mackinac-island-tours/" },
  openGraph: {
    title: "Educational Field Trips in Mackinac Island | Landmark Educational Tours",
    description: "Customizable, safe, guided Mackinac Island student trips built around your curriculum and group.",
    url: "/usa-trips/mackinac-island-tours/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
