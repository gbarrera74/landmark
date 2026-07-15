import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in New Mexico",
  description:
    "Customizable New Mexico field trips and student tours: safe, guided, and built around your curriculum. Plan your New Mexico educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/new-mexico-tours/" },
  openGraph: {
    title: "Educational Field Trips in New Mexico | Landmark Educational Tours",
    description: "Customizable, safe, guided New Mexico student trips built around your curriculum and group.",
    url: "/usa-trips/new-mexico-tours/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
