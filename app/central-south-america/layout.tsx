import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Central & South America Destinations",
  description:
    "Educational tours to Central & South America for students, starting with Costa Rica. Safe, guided, curriculum-aligned, and fully customizable.",
  alternates: { canonical: "/central-south-america/" },
  openGraph: {
    title: "Central & South America Destinations | Landmark Educational Tours",
    description: "Rainforests, volcanoes, and vibrant cultures: safe, fully customized educational trips across Central and South America, curriculum-aligned and expertly guided.",
    url: "/central-south-america/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
