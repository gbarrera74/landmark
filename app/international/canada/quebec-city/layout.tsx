import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Educational Trips to Quebec City",
  description:
    "Customizable Quebec City school trips and itineraries: Old Quebec, French immersion, the Citadelle, and Winter Carnival. Safe, guided, curriculum-aligned student travel.",
  alternates: { canonical: "/international/canada/quebec-city/" },
  openGraph: {
    title: "Educational Trips to Quebec City | Landmark Educational Tours",
    description: "The only walled city north of Mexico: cobblestone streets, the Chateau Frontenac, French immersion, and a world-famous Winter Carnival.",
    url: "/international/canada/quebec-city/",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
