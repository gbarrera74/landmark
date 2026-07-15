import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Yellowstone National Park School Trip | Landmark Educational Tours",
  description: "Explore geysers, wildlife, and wild landscapes on a fully customizable Yellowstone adventure built for student groups..",
  alternates: { canonical: "/yellowstone-national-park-school-trip/" },
  openGraph: { title: "Yellowstone National Park School Trip | Landmark Educational Tours", description: "Explore geysers, wildlife, and wild landscapes on a fully customizable Yellowstone adventure built for student groups.", url: "/yellowstone-national-park-school-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
