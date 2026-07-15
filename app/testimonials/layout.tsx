import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Hear directly from the teachers and group leaders who have traveled with Landmark Educational Tours.",
  alternates: { canonical: "/testimonials/" },
  openGraph: { title: "Testimonials | Landmark Educational Tours", description: "Hear directly from the teachers and group leaders who have traveled with Landmark Educational Tours.", url: "/testimonials/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
