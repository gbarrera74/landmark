import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Field Trips in Orlando",
  description:
    "Customizable Orlando field trips and student tours: safe, guided, and built around your curriculum. Plan your Orlando educational trip with Landmark Educational Tours.",
  alternates: { canonical: "/usa-trips/orlando/" },
  openGraph: {
    title: "Educational Field Trips in Orlando | Landmark Educational Tours",
    description: "Customizable, safe, guided Orlando student trips built around your curriculum and group.",
    url: "/usa-trips/orlando/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
