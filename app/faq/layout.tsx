import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers about planning, traveling, and staying safe on your Landmark group tour.",
  alternates: { canonical: "/faq/" },
  openGraph: { title: "FAQ | Landmark Educational Tours", description: "Find answers about planning, traveling, and staying safe on your Landmark group tour.", url: "/faq/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
