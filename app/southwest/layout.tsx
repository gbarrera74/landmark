import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Southwest Destinations",
  description:
    "Educational field trips and student tours across the Southwest: San Antonio and New Mexico. Customizable, safe, and curriculum-aligned student travel.",
  alternates: { canonical: "/southwest/" },
  openGraph: {
    title: "Southwest Destinations | Landmark Educational Tours",
    description: "Missions, deserts, and frontier history: customizable, curriculum-aligned student trips through the American Southwest.",
    url: "/southwest/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
