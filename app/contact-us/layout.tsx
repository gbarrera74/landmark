import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Landmark Educational Tours. Call 888-886-2781, email Hello@landmarkeducationaltours.com, or send us a message. Based in Middleton, MA.',
  alternates: { canonical: '/contact-us/' },
  openGraph: {
    title: 'Contact Us | Landmark Educational Tours',
    description: 'Questions about a trip or a quote? Reach out and a real person will get back to you.',
    url: '/contact-us/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
