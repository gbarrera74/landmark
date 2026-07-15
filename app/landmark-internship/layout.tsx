import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Landmark Internship",
  description: "Grow your career while helping bring learning to life through hands, on educational travel with our internship program.",
  alternates: { canonical: "/landmark-internship/" },
  openGraph: { title: "Landmark Internship | Landmark Educational Tours", description: "Grow your career while helping bring learning to life through hands, on educational travel with our internship program.", url: "/landmark-internship/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
