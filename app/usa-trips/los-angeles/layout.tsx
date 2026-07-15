import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in Los Angeles",
  description:
    "Customizable Los Angeles field trips and student tours: safe, guided, and built around your curriculum. Plan your Los Angeles educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/los-angeles/" },
  openGraph: {
    title: "Educational Field Trips in Los Angeles | Landmark Educational Tours",
    description: "Customizable, safe, guided Los Angeles student trips built around your curriculum and group.",
    url: "/usa-trips/los-angeles/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
