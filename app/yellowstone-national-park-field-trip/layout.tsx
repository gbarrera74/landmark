import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Yellowstone National Park Field Trip | Landmark Educational Tours",
  description: "Explore geysers, hot springs, and wildlife on an unforgettable Yellowstone adventure built for curious students..",
  alternates: { canonical: "/yellowstone-national-park-field-trip/" },
  openGraph: { title: "Yellowstone National Park Field Trip | Landmark Educational Tours", description: "Explore geysers, hot springs, and wildlife on an unforgettable Yellowstone adventure built for curious students.", url: "/yellowstone-national-park-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
