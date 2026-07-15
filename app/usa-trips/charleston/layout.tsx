import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in Charleston",
  description:
    "Customizable Charleston field trips and student tours: safe, guided, and built around your curriculum. Plan your Charleston educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/charleston/" },
  openGraph: {
    title: "Educational Field Trips in Charleston | Landmark Educational Tours",
    description: "Customizable, safe, guided Charleston student trips built around your curriculum and group.",
    url: "/usa-trips/charleston/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
