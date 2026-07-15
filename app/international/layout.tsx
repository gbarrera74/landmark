import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "International Destinations",
  description:
    "International educational tours and student trips: Canada, Italy, Costa Rica, Norway, England, France, Ireland, Japan, and South Korea. Safe, guided, and curriculum-aligned.",
  alternates: { canonical: "/international/" },
  openGraph: {
    title: "International Destinations | Landmark Educational Tours",
    description: "Landmark takes students beyond the U.S.: immersive, safe, fully customized educational trips across North America, Europe, Asia, and Central America.",
    url: "/international/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
