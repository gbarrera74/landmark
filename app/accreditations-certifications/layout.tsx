import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Accreditations & Certifications",
  description: "The professional standards and affiliations that keep our educational travel safe, transparent, and academically sound.",
  alternates: { canonical: "/accreditations-certifications/" },
  openGraph: { title: "Accreditations & Certifications | Landmark Educational Tours", description: "The professional standards and affiliations that keep our educational travel safe, transparent, and academically sound.", url: "/accreditations-certifications/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
