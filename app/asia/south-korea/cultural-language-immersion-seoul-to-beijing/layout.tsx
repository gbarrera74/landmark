import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "Cultural & Language Immersion Experience: Seoul to Beijing | Landmark Educational Tours" },
  description:
    "Fifteen days from Seoul to Beijing, taking in Gyeongbokgung Palace, the DMZ, Busan, Shanghai, the Forbidden City, and the Great Wall. A customizable 15 Day / 14 Night Landmark educational itinerary.",
  alternates: { canonical: "/asia/south-korea/cultural-language-immersion-seoul-to-beijing/" },
  openGraph: { title: "Cultural & Language Immersion Experience: Seoul to Beijing | Landmark Educational Tours", description: "Fifteen days from Seoul to Beijing, taking in Gyeongbokgung Palace, the DMZ, Busan, Shanghai, the Forbidden City, and the Great Wall.", url: "/asia/south-korea/cultural-language-immersion-seoul-to-beijing/" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
