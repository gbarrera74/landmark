import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Tours to France",
  description:
    "Customizable France educational tours and student trips: safe, guided, curriculum-aligned, and handled end to end. Plan your France school trip with Landmark.",
  alternates: { canonical: "/international/france/" },
  openGraph: {
    title: "Educational Tours to France | Landmark Educational Tours",
    description: "Customizable, safe, guided France student trips built around your curriculum and group.",
    url: "/international/france/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
