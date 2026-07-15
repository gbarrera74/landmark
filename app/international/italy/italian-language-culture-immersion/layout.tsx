import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Italian Language & Culture Immersion | Italy",
  description:
    "Conversational Italian in the field: markets, cafés, and hill towns, with guided cultural workshops. A customizable 9 Day / 8 Night Landmark educational itinerary.",
  alternates: { canonical: "/international/italy/italian-language-culture-immersion/" },
  openGraph: { title: "Italian Language & Culture Immersion | Landmark Educational Tours", description: "Conversational Italian in the field: markets, cafés, and hill towns, with guided cultural workshops.", url: "/international/italy/italian-language-culture-immersion/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
