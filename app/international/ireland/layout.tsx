import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Tours to Ireland",
  description:
    "Customizable Ireland educational tours and student trips: safe, guided, curriculum-aligned, and handled end to end. Plan your Ireland school trip with Landmark.",
  alternates: { canonical: "/international/ireland/" },
  openGraph: {
    title: "Educational Tours to Ireland | Landmark Educational Tours",
    description: "Customizable, safe, guided Ireland student trips built around your curriculum and group.",
    url: "/international/ireland/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
