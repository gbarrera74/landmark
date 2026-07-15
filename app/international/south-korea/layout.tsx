import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Tours to South Korea",
  description:
    "Customizable South Korea educational tours and student trips: safe, guided, curriculum-aligned, and handled end to end. Plan your South Korea school trip with Landmark.",
  alternates: { canonical: "/international/south-korea/" },
  openGraph: {
    title: "Educational Tours to South Korea | Landmark Educational Tours",
    description: "Customizable, safe, guided South Korea student trips built around your curriculum and group.",
    url: "/international/south-korea/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
