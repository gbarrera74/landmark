import type { Metadata } from 'next'
import BlogListing from '@/components/BlogListing'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Destination guides, trip-planning tips, and educational travel ideas for teachers and group leaders planning student trips with Landmark Educational Tours.',
  alternates: { canonical: '/blog/' },
  openGraph: { title: 'Blog | Landmark Educational Tours', description: 'Destination guides and planning tips for student group travel.', url: '/blog/' },
}

export default function BlogIndex() {
  return <BlogListing page={1} />
}
