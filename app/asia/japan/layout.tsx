import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Tours to Japan",
  description:
    "Customizable Japan educational tours and student trips: safe, guided, curriculum-aligned, and handled end to end. Plan your Japan school trip with Landmark.",
  alternates: { canonical: "/asia/japan/" },
  openGraph: {
    title: "Educational Tours to Japan | Landmark Educational Tours",
    description: "Customizable, safe, guided Japan student trips built around your curriculum and group.",
    url: "/asia/japan/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
