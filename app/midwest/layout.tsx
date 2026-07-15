import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Midwest Destinations",
  description:
    "Educational field trips and student tours across the Midwest: Chicago and Mackinac Island. Customizable, safe, and curriculum-aligned student travel.",
  alternates: { canonical: "/midwest/" },
  openGraph: {
    title: "Midwest Destinations | Landmark Educational Tours",
    description: "World-class museums and Great Lakes history: customizable, safe student trips through the heart of the country.",
    url: "/midwest/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
