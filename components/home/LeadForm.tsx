'use client'

import { useState } from 'react'

// NOTE: submission is not yet wired to a backend (HubSpot/email). For now it
// validates client-side and shows a success state. Wire the POST handler before
// launch, see POST-LAUNCH-BACKLOG.
export default function LeadForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="ilm-form">
        <div className="ilm-form-success">
          <span className="chk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          </span>
          <h3>Go raibh maith agat!</h3>
          <p>Thank you, your request is on its way. A member of our team will be in touch within 1–2 business days.</p>
        </div>
      </div>
    )
  }

  return (
    <form className="ilm-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
      <h3>Request Program Info</h3>
      <p className="ilm-form-sub">Tell us a little about your student and we&apos;ll send the details.</p>

      <div className="ilm-form-row">
        <div className="ilm-field">
          <label htmlFor="lf-first">First Name <span className="req">*</span></label>
          <input id="lf-first" name="firstName" className="ilm-input" required autoComplete="given-name" />
        </div>
        <div className="ilm-field">
          <label htmlFor="lf-last">Last Name <span className="req">*</span></label>
          <input id="lf-last" name="lastName" className="ilm-input" required autoComplete="family-name" />
        </div>
      </div>

      <div className="ilm-form-row">
        <div className="ilm-field">
          <label htmlFor="lf-email">Email <span className="req">*</span></label>
          <input id="lf-email" name="email" type="email" className="ilm-input" required autoComplete="email" />
        </div>
        <div className="ilm-field">
          <label htmlFor="lf-phone">Phone <span className="req">*</span></label>
          <input id="lf-phone" name="phone" type="tel" className="ilm-input" required autoComplete="tel" />
        </div>
      </div>

      <div className="ilm-form-row">
        <div className="ilm-field">
          <label htmlFor="lf-year">Program Year <span className="req">*</span></label>
          <select id="lf-year" name="programYear" className="ilm-input" required defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Summer 2026</option>
            <option>Summer 2027</option>
            <option>Summer 2028</option>
          </select>
        </div>
        <div className="ilm-field">
          <label htmlFor="lf-grade">Student Grade <span className="req">*</span></label>
          <select id="lf-grade" name="grade" className="ilm-input" required defaultValue="">
            <option value="" disabled>Select…</option>
            <option>8th</option>
            <option>9th</option>
            <option>10th</option>
            <option>11th</option>
            <option>12th</option>
          </select>
        </div>
      </div>

      {/* honeypot, bots fill hidden fields; humans never see it */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />

      <button type="submit" className="ile-btn ile-btn--primary">Send My Request</button>
      <p className="ilm-form-note">We respect your privacy. Your information is never shared or sold.</p>
    </form>
  )
}
