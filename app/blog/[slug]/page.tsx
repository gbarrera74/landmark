/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import DOMPurify from 'isomorphic-dompurify'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'
import { getPost, getAllSlugs, getRelated, getAdjacent, formatDate, categorySlug } from '@/lib/blog'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    // seoTitle (from WP/Yoast) already includes the brand — use `absolute` so the
    // root title template doesn't append the brand a second time.
    title: post.seoTitle ? { absolute: post.seoTitle } : post.title,
    description: post.seoDescription,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription,
      url: `/blog/${slug}/`,
      type: 'article',
      images: post.hero ? [{ url: post.hero }] : undefined,
      publishedTime: post.date,
      modifiedTime: post.modified,
    },
  }
}

// Allow-listed already at import time; sanitize again here as defense-in-depth
// (content originates from WordPress). Build-time only, so cost is irrelevant.
const ALLOWED_TAGS = ['h2', 'h3', 'h4', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'blockquote', 'figure', 'figcaption', 'img', 'br', 'hr']
const ALLOWED_ATTR = ['href', 'rel', 'src', 'alt', 'loading']

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const clean = DOMPurify.sanitize(post.html, { ALLOWED_TAGS, ALLOWED_ATTR })
  const related = getRelated(slug, 3)
  const { prev, next } = getAdjacent(slug)
  const category = post.categories[0]

  return (
    <>
      <header className={`lm-article-hero${post.hero ? ' has-photo' : ''}`}>
        {post.hero && <img className="lm-article-hero-img" src={post.hero} alt="" />}
        <div className="lm-article-hero-scrim" />
        <div className="ile-container lm-article-hero-inner">
          <nav className="lm-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <Link href="/blog/">Blog</Link>
          </nav>
          {category && (categorySlug(category)
            ? <Link href={`/blog/category/${categorySlug(category)}/`} className="lm-article-cat">{category}</Link>
            : <span className="lm-article-cat">{category}</span>)}
          <h1>{post.title}</h1>
          <p className="lm-article-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </p>
        </div>
      </header>

      <section className="ile-section ile-section--white">
        <div className="ile-container lm-article-wrap">
          <article className="lm-article" dangerouslySetInnerHTML={{ __html: clean }} />

          <div className="lm-article-cta">
            <h3>Ready to plan your group&rsquo;s trip?</h3>
            <p>Our Travel Consultants build safe, custom, curriculum-aligned itineraries around your school.</p>
            <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Get a Free Quote</Link>
          </div>

          {(prev || next) && (
            <nav className="lm-article-nav" aria-label="More posts">
              {prev ? <Link href={`/blog/${prev.slug}/`} className="lm-article-nav-link prev"><span>Previous</span><strong>{prev.title}</strong></Link> : <span />}
              {next ? <Link href={`/blog/${next.slug}/`} className="lm-article-nav-link next"><span>Next</span><strong>{next.title}</strong></Link> : <span />}
            </nav>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="ile-section ile-section--cream" aria-labelledby="related-h">
          <div className="ile-container">
            <div className="ile-center lm-narrow">
              <span className="ile-eyebrow">Keep Reading</span>
              <h2 id="related-h" className="lm-h2-amber">MORE FROM THE BLOG</h2>
            </div>
            <div className="ilm-blog-grid">
              {related.map((r) => (
                <Link href={`/blog/${r.slug}/`} className="ilm-post" key={r.slug}>
                  <div className="ilm-post-img"><img src={r.hero || '/images/landmark/dc-hero.jpg'} alt="" loading="lazy" /></div>
                  <div className="ilm-post-body">
                    <h3>{r.title}</h3>
                    <span className="ilm-post-more">Read More {ArrowR}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <BrochureBand />

      <JsonLd data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog/' },
        { name: post.title, path: `/blog/${slug}/` },
      ])} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.seoDescription,
        image: post.hero ? `https://landmarkeducationaltours.com${post.hero}` : undefined,
        datePublished: post.date,
        dateModified: post.modified,
        author: { '@type': 'Organization', name: 'Landmark Educational Tours' },
        publisher: { '@type': 'Organization', name: 'Landmark Educational Tours' },
        mainEntityOfPage: `https://landmarkeducationaltours.com/blog/${slug}/`,
      }} />
    </>
  )
}
