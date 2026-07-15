import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "West Coast Destinations",
  description:
    "Educational field trips and student tours across the West Coast: Los Angeles and Seattle. Customizable, safe, and curriculum-aligned student travel.",
  alternates: { canonical: "/west-coast/" },
  openGraph: {
    title: "West Coast Destinations | Landmark Educational Tours",
    description: "Innovation, entertainment, and Pacific coast culture: customizable, safe student trips along the West Coast.",
    url: "/west-coast/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
