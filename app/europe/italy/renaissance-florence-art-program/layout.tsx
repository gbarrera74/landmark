import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Renaissance Florence Art & History Program | Italy",
  description:
    "The Uffizi, the Duomo, and the Accademia: a hands-on study of Renaissance art, humanism, and innovation. A customizable 6 Day / 5 Night Landmark educational itinerary.",
  alternates: { canonical: "/europe/italy/renaissance-florence-art-program/" },
  openGraph: { title: "Renaissance Florence Art & History Program | Landmark Educational Tours", description: "The Uffizi, the Duomo, and the Accademia: a hands-on study of Renaissance art, humanism, and innovation.", url: "/europe/italy/renaissance-florence-art-program/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
