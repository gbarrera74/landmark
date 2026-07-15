import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "United States Destinations",
  description:
    "Educational field trips and student tours across the United States, organized by region: East Coast, Midwest, Southwest, and West Coast. Customizable and curriculum-aligned.",
  alternates: { canonical: "/usa-trips/" },
  openGraph: {
    title: "United States Destinations | Landmark Educational Tours",
    description: "From coast to coast: customizable, curriculum-aligned student trips to the cities and landmarks that shaped America.",
    url: "/usa-trips/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
