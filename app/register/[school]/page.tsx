/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import DOMPurify from 'isomorphic-dompurify'
import { getRegistration, getAllRegistrationSlugs } from '@/lib/register'
import { SITE } from '@/lib/seo/schemas'

export function generateStaticParams() {
  return getAllRegistrationSlugs().map((school) => ({ school }))
}

export async function generateMetadata({ params }: { params: Promise<{ school: string }> }): Promise<Metadata> {
  const { school } = await params
  const reg = getRegistration(school)
  if (!reg) return {}
  return {
    title: { absolute: `${reg.title} — Trip Registration | Landmark Educational Tours` },
    description: `Private trip registration for ${reg.title}${reg.subtitle ? ` — ${reg.subtitle}` : ''}.`,
    // Private per-school funnel: never index.
    robots: { index: false, follow: false },
    alternates: { canonical: `/register/${school}/` },
  }
}

// Sanitize again at render (defense-in-depth); allow target for the portal CTA links.
const ALLOWED_TAGS = ['h2', 'h3', 'h4', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'blockquote', 'figure', 'figcaption', 'img', 'br', 'hr']
const ALLOWED_ATTR = ['href', 'rel', 'src', 'alt', 'loading', 'target']

export default async function RegisterPage({ params }: { params: Promise<{ school: string }> }) {
  const { school } = await params
  const reg = getRegistration(school)
  if (!reg) notFound()

  const clean = DOMPurify.sanitize(reg.bodyHtml, { ALLOWED_TAGS, ALLOWED_ATTR })

  return (
    <>
      <header className="lm-article-hero has-photo lm-register-hero">
        <div className="lm-article-hero-scrim" />
        <div className="ile-container lm-article-hero-inner">
          <nav className="lm-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>Trip Registration</span>
          </nav>
          <span className="lm-article-cat">Private Trip Registration</span>
          <h1>{reg.title}</h1>
          {reg.subtitle && <p className="lm-article-meta">{reg.subtitle}</p>}
          <p className="lm-register-hero-cta">
            <a href={reg.portal} className="ile-btn ile-btn--gold" target="_blank" rel="noopener noreferrer">Register for This Trip</a>
          </p>
        </div>
      </header>

      <section className="ile-section ile-section--white">
        <div className="ile-container lm-article-wrap">
          <article className="lm-article" dangerouslySetInnerHTML={{ __html: clean }} />

          <div className="lm-article-cta">
            <h3>Ready to secure your spot?</h3>
            <p>Registration is first come, first served. Reserve your place on the trip through our secure travel portal.</p>
            <a href={reg.portal} className="ile-btn ile-btn--primary" target="_blank" rel="noopener noreferrer">Register Now</a>
            <p className="lm-register-help">
              Questions? Call <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a> or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
