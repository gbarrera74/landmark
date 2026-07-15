import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Trips to Montreal",
  description:
    "Customizable Montreal school trips and itineraries: Old Montreal, French immersion, museums, and culture. Safe, guided, curriculum-aligned student travel.",
  alternates: { canonical: "/canada/montreal/" },
  openGraph: {
    title: "Educational Trips to Montreal | Landmark Educational Tours",
    description: "European charm meets modern creativity: Old Montreal, world-class museums, and French language and culture in a vibrant bilingual city.",
    url: "/canada/montreal/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
