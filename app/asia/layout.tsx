import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Asia Destinations",
  description:
    "Educational tours to Asia for students: Japan and South Korea. Safe, guided, curriculum-aligned, and fully customizable.",
  alternates: { canonical: "/asia/" },
  openGraph: {
    title: "Asia Destinations | Landmark Educational Tours",
    description: "Ancient temples, modern cities, and living traditions: safe, fully customized educational trips across Asia, curriculum-aligned and expertly guided.",
    url: "/asia/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
