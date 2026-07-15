import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in Philadelphia",
  description:
    "Customizable Philadelphia field trips and student tours: safe, guided, and built around your curriculum. Plan your Philadelphia educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/philadelphia-tours/" },
  openGraph: {
    title: "Educational Field Trips in Philadelphia | Landmark Educational Tours",
    description: "Customizable, safe, guided Philadelphia student trips built around your curriculum and group.",
    url: "/usa-trips/philadelphia-tours/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
