import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Europe Destinations",
  description:
    "Educational tours to Europe for students: Italy, Ireland, England, France, and Norway. Safe, guided, curriculum-aligned, and fully customizable.",
  alternates: { canonical: "/europe/" },
  openGraph: {
    title: "Europe Destinations | Landmark Educational Tours",
    description: "From ancient Rome to the Norwegian fjords: immersive, safe, fully customized educational trips across Europe, curriculum-aligned and expertly guided.",
    url: "/europe/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
