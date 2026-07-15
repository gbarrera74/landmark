import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore every Landmark Educational Tours destination across the United States and internationally. Customizable, safe, and curriculum-aligned student travel.",
  alternates: { canonical: "/destinations/" },
  openGraph: {
    title: "Destinations | Landmark Educational Tours",
    description: "Every Landmark destination in one place: customizable, safe, curriculum-aligned educational trips across the U.S. and around the world.",
    url: "/destinations/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
