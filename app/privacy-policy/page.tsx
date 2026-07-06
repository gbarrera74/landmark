import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { SITE } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How the Irish Life Experience collects, uses, and protects your personal information.',
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="Legal" title="Privacy Policy" breadcrumb={[{ label: 'Privacy Policy' }]} />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="ilp-prose ilp-prose--center">
            <p style={{ color: 'var(--lm-ink-muted)' }}>Last updated: {new Date().getFullYear()}</p>
            <p>The Irish Life Experience (&ldquo;ILE,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your privacy. This policy explains what information we collect, how we use it, and the choices you have.</p>

            <h2>Information We Collect</h2>
            <p>When you submit a form, apply to the program, or contact us, we may collect information such as your name, email address, phone number, your student&apos;s grade and program year, and any details you choose to share. We also collect basic, non-identifying analytics about how visitors use our website.</p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and provide program information</li>
              <li>To process applications, deposits, and enrollment</li>
              <li>To communicate important updates about the program</li>
              <li>To improve our website and services</li>
            </ul>

            <h2>How We Share Information</h2>
            <p>We do not sell or rent your personal information. We share it only with trusted service providers who help us operate the program (for example, payment and communication tools), and only as needed to deliver our services or comply with the law.</p>

            <h2>Data Security</h2>
            <p>We take reasonable measures to protect your information. No method of transmission over the internet is completely secure, but we work to safeguard your data appropriately.</p>

            <h2>Your Choices</h2>
            <p>You may request to access, update, or delete your personal information, or opt out of marketing communications, at any time by contacting us.</p>

            <h2>Contact Us</h2>
            <p>Questions about this policy? Reach us at <strong>{SITE.email}</strong> or <strong>{SITE.phoneDisplay}</strong>, or by mail at {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
