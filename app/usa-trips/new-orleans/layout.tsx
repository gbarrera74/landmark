import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in New Orleans",
  description:
    "Customizable New Orleans field trips and student tours: safe, guided, and built around your curriculum. Plan your New Orleans educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/new-orleans/" },
  openGraph: {
    title: "Educational Field Trips in New Orleans | Landmark Educational Tours",
    description: "Customizable, safe, guided New Orleans student trips built around your curriculum and group.",
    url: "/usa-trips/new-orleans/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
