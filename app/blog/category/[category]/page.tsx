/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, itemList } from '@/lib/seo/schemas'
import { getCategories, getCategoryBySlug, getCategoryPosts, formatDate, type PostCard } from '@/lib/blog'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

function Card({ p }: { p: PostCard }) {
  return (
    <Link href={`/blog/${p.slug}/`} className="lm-blog-card">
      <div className="lm-blog-card-img">
        <img src={p.hero || '/images/landmark/dc-hero.jpg'} alt="" loading="lazy" />
        {p.categories[0] && <span className="lm-blog-card-cat">{p.categories[0]}</span>}
      </div>
      <div className="lm-blog-card-body">
        <div className="lm-blog-card-meta"><time dateTime={p.date}>{formatDate(p.date)}</time><span aria-hidden="true">·</span><span>{p.readingMinutes} min</span></div>
        <h3>{p.title}</h3>
        <p>{p.excerpt}</p>
        <span className="ilm-post-more">Read More {ArrowR}</span>
      </div>
    </Link>
  )
}

export function generateStaticParams() {
  return getCategories().map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) return {}
  return {
    title: `${cat.name} Student Trip Guides & Tips`,
    description: `Destination guides, planning tips, and itinerary ideas for ${cat.name} student trips, from the Landmark Educational Tours blog.`,
    alternates: { canonical: `/blog/category/${category}/` },
    openGraph: {
      title: `${cat.name} | Landmark Educational Tours Blog`,
      description: `Guides and tips for ${cat.name} student trips.`,
      url: `/blog/category/${category}/`,
    },
  }
}

export default async function BlogCategory({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const cat = getCategoryBySlug(category)
  if (!cat) notFound()
  const posts = getCategoryPosts(category)

  return (
    <>
      <PageHero
        eyebrow="Blog Topic"
        title={<>{cat.name} <em>Guides &amp; Tips</em></>}
        subtitle={`${cat.count} article${cat.count === 1 ? '' : 's'} to help you plan an unforgettable ${cat.name} student trip.`}
        image={posts[0]?.hero || '/images/landmark/hero-nyc.jpg'}
        breadcrumb={[{ label: 'Blog', href: '/blog/' }, { label: cat.name }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="lm-blog-grid-cards">
            {posts.map((p) => <Card key={p.slug} p={p} />)}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/blog/" className="ile-btn ile-btn--ghost">Back to all articles</Link>
          </div>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }, { name: cat.name, path: `/blog/category/${category}/` }])} />
      <JsonLd data={itemList(`${cat.name} articles`, posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}/` })))} />
    </>
  )
}
