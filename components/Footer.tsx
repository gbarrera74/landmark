import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/seo/schemas'

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
    </svg>
  )
}
function IconFacebook() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" /></svg>
}
function IconInstagram() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-10.4a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" /></svg>
}
function IconLinkedIn() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
}
function IconTikTok() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.05.86.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1Z" /></svg>
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="ilef">
      <div className="ilef-cta-band">
        <span className="ile-script">Educational Travel, Customized for You</span>
        <h2>Let&apos;s Plan Your Next Adventure</h2>
        <p>Tell us your destination, dates, and group size, and we&apos;ll build a safe, fully customized itinerary and a free quote, with a real person guiding you every step of the way.</p>
        <div className="ilef-cta-actions">
          <Link href="/get-a-quote/" className="ile-btn ile-btn--gold">Get a Free Quote</Link>
          <Link href="/contact-us/" className="ile-btn ile-btn--outline-light">Talk to a Travel Consultant</Link>
        </div>
      </div>

      <div className="ilef-main">
        <div className="ilef-brand-col">
          <Image className="ilef-logo" src="/images/landmark-logo.png" alt="Landmark Educational Tours" width={320} height={96} />
          <p className="ilef-about">
            Curated, safe, and fully customized educational field trips and student tours across the
            United States and around the world, built around your students, your goals, and your budget.
          </p>
          <div className="ilef-contact">
            <span><IconPin /> {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}</span>
            <a href={`tel:${SITE.phone}`}><IconPhone /> {SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`}><IconMail /> {SITE.email}</a>
          </div>
          <div className="ilef-social">
            <a href={SITE.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><IconFacebook /></a>
            <a href={SITE.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><IconInstagram /></a>
            <a href={SITE.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><IconLinkedIn /></a>
            <a href={SITE.social.tiktok} aria-label="TikTok" target="_blank" rel="noopener noreferrer"><IconTikTok /></a>
          </div>
        </div>

        <div className="ilef-col">
          <h4>Destinations</h4>
          <div className="ilef-links">
            <Link href="/east-coast/">East Coast</Link>
            <Link href="/midwest/">Midwest</Link>
            <Link href="/southwest/">Southwest</Link>
            <Link href="/west-coast/">West Coast</Link>
            <Link href="/destinations/">International</Link>
          </div>
        </div>

        <div className="ilef-col">
          <h4>Explore</h4>
          <div className="ilef-links">
            <Link href="/themes/">Themes</Link>
            <Link href="/plan-a-trip/">Plan a Trip</Link>
            <Link href="/get-a-quote/">Get a Quote</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/faq/">FAQ</Link>
          </div>
        </div>

        <div className="ilef-col">
          <h4>Company</h4>
          <div className="ilef-links">
            <Link href="/about-landmark/">About Landmark</Link>
            <Link href="/accreditations-certifications/">Accreditations</Link>
            <Link href="/testimonials/">Testimonials</Link>
            <Link href="/travel-safety-support/">Travel Safety</Link>
            <Link href="/careers/">Careers</Link>
            <Link href="/contact-us/">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="ilef-bottom">
        <span>© {year} Landmark Educational Tours. All rights reserved. · CST {SITE.cst}</span>
        <Link href="/privacy-policy/">Privacy Policy</Link>
      </div>
    </footer>
  )
}
