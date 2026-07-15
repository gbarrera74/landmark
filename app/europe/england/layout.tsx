import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Tours to England",
  description:
    "Customizable England educational tours and student trips: safe, guided, curriculum-aligned, and handled end to end. Plan your England school trip with Landmark.",
  alternates: { canonical: "/europe/england/" },
  openGraph: {
    title: "Educational Tours to England | Landmark Educational Tours",
    description: "Customizable, safe, guided England student trips built around your curriculum and group.",
    url: "/europe/england/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
