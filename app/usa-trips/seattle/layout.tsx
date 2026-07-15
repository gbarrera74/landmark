import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in Seattle",
  description:
    "Customizable Seattle field trips and student tours: safe, guided, and built around your curriculum. Plan your Seattle educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/seattle/" },
  openGraph: {
    title: "Educational Field Trips in Seattle | Landmark Educational Tours",
    description: "Customizable, safe, guided Seattle student trips built around your curriculum and group.",
    url: "/usa-trips/seattle/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
