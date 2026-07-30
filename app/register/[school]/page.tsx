/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import DOMPurify from 'isomorphic-dompurify'
import { getRegistration, getAllRegistrationSlugs, accountManagerEmail, accountManagerPhoto } from '@/lib/register'
import { SITE } from '@/lib/seo/schemas'
import RegisterTabs from '@/components/RegisterTabs'
import RegisterGallery from '@/components/RegisterGallery'

const BATTLEFACE_URL = 'https://www.battleface.com/en-us/'

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
  const amEmail = reg.accountManager ? accountManagerEmail(reg.accountManager) : null
  const amPhoto = reg.accountManager ? accountManagerPhoto(reg.accountManager) : null

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
          {reg.subtitle && <p className="lm-register-hero-sub">{reg.subtitle}</p>}
        </div>
      </header>

      <section className="ile-section ile-section--white">
        <div className="ile-container lm-register-layout">
          <main className="lm-register-main">
            <span className="ile-eyebrow">Trip Details</span>
            <h2 className={`lm-h2-amber${reg.introHeading ? ' lm-reg-welcome' : ''}`}>
              {reg.introHeading || (reg.destination ? `${reg.destination} Trip` : 'Your Trip')}
            </h2>
            {reg.introText && <p className="lm-reg-intro">{reg.introText}</p>}
            {reg.costPerStudent && (
              <p className="lm-reg-cost">
                For this trip, the cost per student is <strong>{reg.costPerStudent}</strong>.
              </p>
            )}
            <RegisterTabs itineraryHtml={clean} portal={reg.portal} />
          </main>

          <aside className="lm-register-side">
            <div className="lm-reg-card lm-reg-card--register">
              <h3>Ready to Register?</h3>
              <p>Secure your spot below — trips fill on a first-come, first-served basis.</p>
              <dl className="lm-reg-facts">
                <div><dt>Registration Opens</dt><dd>{reg.registrationOpens || 'TBD'}</dd></div>
                <div><dt>Enrollment Ends</dt><dd>{reg.enrollmentEnds || 'TBD'}</dd></div>
                <div><dt>Trip Deposit / Traveler</dt><dd>{reg.deposit || 'TBD'}</dd></div>
              </dl>
              <a href={reg.portal} className="ile-btn ile-btn--gold lm-reg-btn" target="_blank" rel="noopener noreferrer">Register Here</a>
            </div>

            {reg.accountManager && amEmail && (
              <div className="lm-reg-card lm-reg-card--am">
                <h3>Meet Your Account Manager</h3>
                {amPhoto ? (
                  <img className="lm-reg-am-photo" src={amPhoto} alt={`${reg.accountManager}, Landmark account manager`} loading="lazy" />
                ) : (
                  <span className="lm-reg-am-initial" aria-hidden="true">{reg.accountManager.charAt(0)}</span>
                )}
                <p className="lm-reg-am-name">{reg.accountManager}</p>
                <p className="lm-reg-am-contact">
                  Contact {reg.accountManager} with any questions about your trip:
                  <br />
                  <a href={`mailto:${amEmail}`}>{amEmail}</a>
                  <br />
                  <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
                </p>
              </div>
            )}

            <div className="lm-reg-card lm-reg-card--protection">
              <h3>Travel Protection</h3>
              <p>Add a travel protection policy for extra peace of mind before you depart.</p>
              <a href={BATTLEFACE_URL} className="ile-btn ile-btn--ghost lm-reg-btn" target="_blank" rel="noopener noreferrer">Purchase Coverage</a>
            </div>

            <p className="lm-register-help">
              Questions? Call <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a> or email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </aside>
        </div>
      </section>

      {reg.photos && reg.photos.length > 0 && (
        <section className="ile-section ile-section--cream">
          <div className="ile-container">
            <RegisterGallery photos={reg.photos} destination={reg.destination} />
          </div>
        </section>
      )}
    </>
  )
}
