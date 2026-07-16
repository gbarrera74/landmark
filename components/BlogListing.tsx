/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, itemList } from '@/lib/seo/schemas'
import { getPage, getPageCount, getCategories, formatDate, type PostCard } from '@/lib/blog'

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

function Pagination({ page, total }: { page: number; total: number }) {
  if (total <= 1) return null
  const href = (n: number) => (n === 1 ? '/blog/' : `/blog/page/${n}/`)
  const nums: number[] = []
  for (let n = 1; n <= total; n++) {
    if (n === 1 || n === total || Math.abs(n - page) <= 1) nums.push(n)
    else if (nums[nums.length - 1] !== -1) nums.push(-1)
  }
  return (
    <nav className="lm-pagination" aria-label="Blog pagination">
      {page > 1 && <Link href={href(page - 1)} className="lm-page-arrow" aria-label="Previous page">‹ Prev</Link>}
      {nums.map((n, i) => n === -1
        ? <span key={`e${i}`} className="lm-page-ellipsis">…</span>
        : <Link key={n} href={href(n)} className={`lm-page-num${n === page ? ' is-active' : ''}`} aria-current={n === page ? 'page' : undefined}>{n}</Link>)}
      {page < total && <Link href={href(page + 1)} className="lm-page-arrow" aria-label="Next page">Next ›</Link>}
    </nav>
  )
}

export default function BlogListing({ page }: { page: number }) {
  const posts = getPage(page)
  const total = getPageCount()
  return (
    <>
      <PageHero
        eyebrow="The Landmark Blog"
        title={<>Travel Inspiration &amp; <em>Trip Ideas</em></>}
        subtitle="Destination guides, planning tips, and classroom-to-landmark ideas for educators leading student groups."
        image="/images/landmark/hero-nyc.jpg"
        breadcrumb={page === 1 ? [{ label: 'Blog' }] : [{ label: 'Blog', href: '/blog/' }, { label: `Page ${page}` }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          {page === 1 && getCategories().length > 0 && (
            <nav className="lm-blog-topics" aria-label="Browse the blog by topic">
              <span className="lm-blog-topics-label">Browse by topic:</span>
              {getCategories().map((c) => (
                <Link key={c.slug} href={`/blog/category/${c.slug}/`} className="lm-blog-topic">{c.name}</Link>
              ))}
            </nav>
          )}
          <div className="lm-blog-grid-cards">
            {posts.map((p) => <Card key={p.slug} p={p} />)}
          </div>
          <Pagination page={page} total={total} />
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog/' }])} />
      <JsonLd data={itemList('Landmark Educational Tours blog', posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}/` })))} />
    </>
  )
}
