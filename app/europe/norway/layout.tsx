import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Tours to Norway",
  description:
    "Customizable Norway educational tours and student trips: safe, guided, curriculum-aligned, and handled end to end. Plan your Norway school trip with Landmark.",
  alternates: { canonical: "/europe/norway/" },
  openGraph: {
    title: "Educational Tours to Norway | Landmark Educational Tours",
    description: "Customizable, safe, guided Norway student trips built around your curriculum and group.",
    url: "/europe/norway/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
