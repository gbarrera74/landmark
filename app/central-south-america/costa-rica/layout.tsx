import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Tours to Costa Rica",
  description:
    "Customizable Costa Rica educational tours and student trips: safe, guided, curriculum-aligned, and handled end to end. Plan your Costa Rica school trip with Landmark.",
  alternates: { canonical: "/central-south-america/costa-rica/" },
  openGraph: {
    title: "Educational Tours to Costa Rica | Landmark Educational Tours",
    description: "Customizable, safe, guided Costa Rica student trips built around your curriculum and group.",
    url: "/central-south-america/costa-rica/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
