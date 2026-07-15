/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import ItineraryTabs from '@/components/home/ItineraryTabs'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb, touristTrip } from '@/lib/seo/schemas'

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const DAYS = [
  { title: "Washington, DC, Day 1: Arrival & Memorial Tours", acts: ["Travel to Washington, D.C.", "Explore Lincoln, Korean War, and World War II Memorials", "Enjoy a sit-down dinner", "Check-in to hotel accommodations"] },
  { title: "Washington, DC, Day 2: United States Capitol & The White House", acts: ["Breakfast at the hotel", "Guided tour of the United States Capitol Building", "Lunch and explore Library of Congress and National Archives Museum", "Group photo at the White House and Lafayette Park", "Evening memorial visits and dinner"] },
  { title: "Washington, DC, Day 3: Arlington National Cemetery & Departure", acts: ["Breakfast at the hotel", "Visit U.S. Marine Corps Memorial", "Guided tour of Arlington National Cemetery (Changing of the Guard, Kennedy gravesite)", "Lunch voucher or boxed sandwich lunch", "Depart for home"] },
  { title: "New York City, Day 1: Arrival & Times Square Exploration", acts: ["Travel to New York City", "Walking tour of 5th Avenue, Rockefeller Plaza, and St. Patrick's Cathedral", "Group sit-down dinner", "Times Square exploration", "Hotel check-in"] },
  { title: "New York City, Day 2: Statue of Liberty & Brooklyn Bridge", acts: ["Hotel breakfast", "Ferry to the Statue of Liberty and Ellis Island", "Lunch included", "9/11 Memorial & Museum", "Walk across the Brooklyn Bridge", "Group sit-down dinner", "Top of the Rock Observatory"] },
  { title: "New York City, Day 3: United Nations & Broadway", acts: ["Hotel breakfast", "Guided tour of United Nations Headquarters", "Lunch included", "The Metropolitan Museum of Art", "Group sit-down dinner", "Attend a Broadway show"] },
  { title: "New York City, Day 4: Greenwich Village & Departure", acts: ["Hotel breakfast", "Exploration of the High Line and Chelsea Market / Hudson Yards", "Greenwich Village food tour", "Depart for home"] },
  { title: "Orlando, Day 1: Arrival & Disney Adventure", acts: ["Travel to Orlando, FL", "Walt Disney World admission, 1 park, 1 day", "Group dinner: park voucher", "Hotel check-in"] },
  { title: "Orlando, Day 2: Universal Studios & Exploration", acts: ["Hotel breakfast", "Universal Studios & Islands of Adventure, 2 parks, 1 day", "Lunch and dinner: park vouchers", "Universal Boardwalk group exploration"] },
  { title: "Orlando, Day 3: Disney Day", acts: ["Walt Disney World admission, 1 park, 1 day", "Lunch and dinner: park vouchers", "Group exploration"] },
  { title: "Orlando, Day 4: Universal Studios Day", acts: ["Universal Studios park admission", "Lunch and dinner: park vouchers", "Group exploration"] },
  { title: "Orlando, Day 5: Disney Day & Departure", acts: ["Walt Disney World admission, 1 park, 1 day", "Lunch: park voucher", "Depart for home"] },
]

const WHY = [
  { label: "100% Custom Itineraries", text: "No catalog trips. We start with your curriculum goals, grade level, group size, and budget, then design the trip around them. Unlimited revisions until it's exactly right." },
  { label: "Travel Consultant & Account Manager", text: "You'll work with the same Landmark Travel Consultant from the first conversation through the post-trip debrief. Your dedicated Account Manager knows your school, your faculty leads, and the parents asking questions." },
  { label: "Duty of Care, Done Right", text: "24/7 emergency hotline. Vetted hotels. Background-checked tour managers. Comprehensive travel protection. The protocols Heads of School ask about, covered." },
  { label: "Fully Accredited", text: "SYTA Member #13443, IATA #22576046, ABA #84360, BBB Accredited, CST 2168995-50, ETOA Member. The compliance documentation your business office needs, already filed." },
  { label: "Landmark Leaders Travel With You", text: "Our trip managers are not contracted strangers, they're our employees. Friendly, knowledgeable, and on the ground with your group every day. Your chaperones get to enjoy the trip too." },
  { label: "Faith & Mission Alignment", text: "For schools with religious affiliations or faith-based traditions, we build itineraries that honor your mission. Worship arrangements, heritage destinations, and service learning, coordinated quietly and respectfully." },
]

const INCLUSIONS = [
  ["Private Group Tour", "Personalized experiences for your group only"],
  ["Custom Itinerary", "Built around your educational goals and preferences"],
  ["Transportation", "Safe, reliable, and comfortable travel"],
  ["Hotel Accommodations", "Convenient and student-friendly lodging"],
  ["Attractions", "Access to top-rated sites and experiences"],
  ["Meals", "Delicious and well-balanced dining options"],
  ["Tour Manager", "Professional support throughout your journey"],
  ["Restaurant & Driver Gratuities", "Taken care of for your convenience"],
  ["& More!", ""],
]

const DESC_P1 = "Fully-managed, completely custom educational travel for private, religious, prep, and independent schools, designed around your curriculum, your standards, and your families' expectations."
const DESC_P2 = "Private and independent schools choose Landmark because we don't operate like a mass-market tour company. Every itinerary is built from a blank page. Every group has a dedicated planner. Every detail is held to the standard your community expects."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Sample programs, each fully customizable to your group.</p>
    {(() => {
      type Grp = { dest: string; items: { label: string; acts: string[] }[] }
      const groups: Grp[] = []
      DAYS.forEach((d) => {
        const dest = d.title.split(/,\s*Day/i)[0]
        const rest = d.title.replace(/^.*?,\s*/, '')
        let g = groups.find((x) => x.dest === dest)
        if (!g) { g = { dest, items: [] }; groups.push(g) }
        g.items.push({ label: rest, acts: d.acts })
      })
      return groups.map((g) => (
        <div className="lm-day-group" key={g.dest}>
          <h3 className="lm-h2-amber lm-day-group-h">{g.dest}</h3>
          <div className="ilp-timeline lm-day-timeline">
            {g.items.map((d, i) => (
              <div className="ilp-step" key={d.label}>
                <span className="ilp-step-num">{i + 1}</span>
                <h3>{d.label}</h3>
                <ul className="lm-day-acts">{d.acts.map((a) => (<li key={a}>{a}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      ))
    })()}
  </>
)

const descriptionTab = (
  <div className="ilp-prose">
    <h2 style={{ marginTop: 0 }}>About This Trip</h2>
    <p>{DESC_P1}</p>
    <p>{DESC_P2}</p>
    <h3>Why Choose This Trip?</h3>
    <ul>
      {WHY.map((w) => (<li key={w.label}><strong>{w.label}:</strong> {w.text}</li>))}
    </ul>
    <p className="lm-sample-note"><em>Note: This is a SAMPLE provided for inspiration only. (Unless you love it!) Every trip we offer is fully customizable.</em></p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Plan Your Custom Trip Today</Link>
  </div>
)

const inclusionsTab = (
  <div className="ilp-infocard ilp-check">
    <h3>Trip Inclusions: Tailored Just for You</h3>
    <p style={{ marginBottom: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>Our packages start fully customizable and typically include:</p>
    <ul>
      {INCLUSIONS.map(([label, text]) => (<li key={label}><strong>{label}</strong>: {text}</li>))}
      <li><strong>&amp; More!</strong></li>
    </ul>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Get a Custom Quote</Link>
  </div>
)

export default function PrivateSchoolClass() {
  return (
    <>
      <PageHero
        eyebrow="For Private & Independent Schools"
        title={<>Private School <em>Class Trips</em></>}
        subtitle="Landmark builds fully managed, completely custom class trips for private, faith-based, and independent schools across the country and abroad."
        image="/images/landmark/private-school-students.jpg"
        breadcrumb={[{ label: 'Themes', href: '/themes/' }, { label: "Private School Class Trips" }]}
      />
      <section className="ile-section ile-section--white">
        <div className="ile-container lm-itin-grid">
          <div className="lm-itin-main">
            <ItineraryTabs
              tabs={[
                { id: 'itinerary', label: 'Sample Itinerary', content: sampleTab },
                { id: 'description', label: 'Description', content: descriptionTab },
                { id: 'inclusions', label: 'Trip Inclusions', content: inclusionsTab },
              ]}
            />
          </div>
          <aside className="lm-itin-side">
            <div className="lm-summary-card">
              <h2 className="lm-summary-title">Trip Snapshot</h2>
              <dl className="lm-summary-list">
                <div><dt>Duration</dt><dd>Varies by program</dd></div>
                <div><dt>Destination</dt><dd>United States &amp; International</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/themes/" className="lm-summary-link">More trip themes {ArrowR}</Link>
            </div>
          </aside>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Themes", path: "/themes/" },
        { name: "Private School Class Trips", path: "/private-school-class-trips/" },
      ])} />
      <JsonLd data={touristTrip({ name: "Private School Class Trips", description: "Landmark builds fully managed, completely custom class trips for private, faith-based, and independent schools across the country and abroad.", path: "/private-school-class-trips/", days: [{ name: "Washington, DC, Day 1: Arrival & Memorial Tours", description: "Travel to Washington, D.C.; Explore Lincoln, Korean War, and World War II Memorials; Enjoy a sit-down dinner; Check-in to hotel accommodations" }, { name: "Washington, DC, Day 2: United States Capitol & The White House", description: "Breakfast at the hotel; Guided tour of the United States Capitol Building; Lunch and explore Library of Congress and National Archives Museum; Group photo at the White House and Lafayette Park; Evening memorial visits and dinner" }, { name: "Washington, DC, Day 3: Arlington National Cemetery & Departure", description: "Breakfast at the hotel; Visit U.S. Marine Corps Memorial; Guided tour of Arlington National Cemetery (Changing of the Guard, Kennedy gravesite); Lunch voucher or boxed sandwich lunch; Depart for home" }, { name: "New York City, Day 1: Arrival & Times Square Exploration", description: "Travel to New York City; Walking tour of 5th Avenue, Rockefeller Plaza, and St. Patrick's Cathedral; Group sit-down dinner; Times Square exploration; Hotel check-in" }, { name: "New York City, Day 2: Statue of Liberty & Brooklyn Bridge", description: "Hotel breakfast; Ferry to the Statue of Liberty and Ellis Island; Lunch included; 9/11 Memorial & Museum; Walk across the Brooklyn Bridge; Group sit-down dinner; Top of the Rock Observatory" }, { name: "New York City, Day 3: United Nations & Broadway", description: "Hotel breakfast; Guided tour of United Nations Headquarters; Lunch included; The Metropolitan Museum of Art; Group sit-down dinner; Attend a Broadway show" }, { name: "New York City, Day 4: Greenwich Village & Departure", description: "Hotel breakfast; Exploration of the High Line and Chelsea Market / Hudson Yards; Greenwich Village food tour; Depart for home" }, { name: "Orlando, Day 1: Arrival & Disney Adventure", description: "Travel to Orlando, FL; Walt Disney World admission, 1 park, 1 day; Group dinner: park voucher; Hotel check-in" }, { name: "Orlando, Day 2: Universal Studios & Exploration", description: "Hotel breakfast; Universal Studios & Islands of Adventure, 2 parks, 1 day; Lunch and dinner: park vouchers; Universal Boardwalk group exploration" }, { name: "Orlando, Day 3: Disney Day", description: "Walt Disney World admission, 1 park, 1 day; Lunch and dinner: park vouchers; Group exploration" }, { name: "Orlando, Day 4: Universal Studios Day", description: "Universal Studios park admission; Lunch and dinner: park vouchers; Group exploration" }, { name: "Orlando, Day 5: Disney Day & Departure", description: "Walt Disney World admission, 1 park, 1 day; Lunch: park voucher; Depart for home" }] })} />
    </>
  )
}
