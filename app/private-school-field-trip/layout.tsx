import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Private School Field Trip | Landmark Educational Tours",
  description: "Take learning beyond the classroom with a private school field trip built around your students and your goals..",
  alternates: { canonical: "/private-school-field-trip/" },
  openGraph: { title: "Private School Field Trip | Landmark Educational Tours", description: "Take learning beyond the classroom with a private school field trip built around your students and your goals.", url: "/private-school-field-trip/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
