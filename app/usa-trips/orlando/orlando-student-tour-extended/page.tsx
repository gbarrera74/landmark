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
  { title: "Day 1: Arrival & Disney Adventure", acts: ["Travel to Orlando, FL", "Walt Disney Admission: 1 Park, 1 Day Admission", "Group Dinner: Park Voucher", "Check-in to Hotel Accommodations"] },
  { title: "Day 2: Universal Studios & Exploration", acts: ["Hotel Breakfast", "Universal Studios and Islands of Adventure: 2 Park, 1 Day Admission", "Lunch: Park Voucher", "Dinner: Park Voucher", "Universal Boardwalk: Group Exploration"] },
  { title: "Day 3: Disney Day & Exploration", acts: ["Walt Disney Admission: 1 Park, 1 Day Admission", "Lunch: Park Voucher", "Dinner: Park Voucher", "Group Exploration"] },
  { title: "Day 4: Universal Studios Day & Exploration", acts: ["Universal Studios Park Admission", "Lunch: Park Voucher", "Dinner: Park Voucher", "Group Exploration"] },
  { title: "Day 5: Disney Day & Departure", acts: ["Walt Disney Admission: 1 Park, 1 Day Admission", "Lunch: Park Voucher", "Depart for Home"] },
]

const WHY = [
  { label: "World-Class Theme Parks", text: "Experience Walt Disney World and Universal Studios, including Islands of Adventure." },
  { label: "STEM & Learning Opportunities", text: "Ask about adding educational programs like Disney's Imagineering Program to your trip." },
  { label: "All-Inclusive Convenience", text: "Enjoy included transportation, accommodations, park admission, meals, and more!" },
  { label: "Seamless Travel Experience", text: "Travel stress-free with a dedicated." },
]

const INCLUSIONS = [
  ["Private Group Tour", "Personalized experiences for your group only."],
  ["Custom Itinerary", "Built around your educational goals and preferences."],
  ["Transportation", "Safe, reliable, and comfortable travel."],
  ["Hotel Accommodations", "Convenient and student-friendly lodging."],
  ["Attractions", "Access to top-rated sites and experiences."],
  ["Meals", "Delicious and well-balanced dining options."],
  ["Tour Manager", "Professional support throughout your journey."],
  ["Restaurant & Driver Gratuities", "Taken care of for your convenience."],
]

const RELATED = [
  { title: "Orlando Student Trip", img: "/images/landmark/orlando-eye.jpg", href: "/usa-trips/orlando/orlando-student-tour/" },
  { title: "Disney Educational Tour", img: "/images/landmark/orlando-skyline.jpg", href: "/usa-trips/orlando/disney-educational-tours/" },
]

const DESC_P1 = "Experience the magic of Orlando, Florida, on an unforgettable five-day student adventure! With thrilling visits to Walt Disney World and Universal Studios, this itinerary blends excitement, entertainment, and education for a once-in-a-lifetime trip. From exploring iconic theme parks to immersive group activities, students will create memories that last forever."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Orlando Extended Student Tour itinerary with our team.</p>
    <div className="ilp-timeline lm-day-timeline">
      {DAYS.map((d, i) => (
        <div className="ilp-step" key={d.title}>
          <span className="ilp-step-num">{i + 1}</span>
          <h3>{d.title}</h3>
          <ul className="lm-day-acts">
            {d.acts.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
)

const descriptionTab = (
  <div className="ilp-prose">
    <h2 style={{ marginTop: 0 }}>The Ultimate Orlando Extended Student Tour</h2>
    <p>{DESC_P1}</p>
    <h3>Why Choose This Trip?</h3>
    <ul>
      {WHY.map((w) => (
        <li key={w.label}><strong>{w.label}:</strong> {w.text}</li>
      ))}
    </ul>
    <p className="lm-sample-note">
      <em>Note: This is a SAMPLE itinerary provided for inspiration only. (Unless you love it!) Every trip we offer is fully customizable, ensuring a personalized experience tailored to your school&rsquo;s educational goals.</em>
    </p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Plan Your Custom Trip Today</Link>
  </div>
)

const inclusionsTab = (
  <div className="ilp-infocard ilp-check">
    <h3>Trip Inclusions: Tailored Just for You</h3>
    <p style={{ marginBottom: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>
      Work with our expert team of Landmark Travel Consultants to design a trip that fits your group&rsquo;s unique needs! Our packages start fully customizable and typically include:
    </p>
    <ul>
      {INCLUSIONS.map(([label, text]) => (
        <li key={label}><strong>{label}</strong>: {text}</li>
      ))}
      <li><strong>&amp; More!</strong></li>
    </ul>
    <p style={{ marginTop: 20, color: 'var(--lm-ink-muted)', fontSize: 15, lineHeight: 1.7 }}>
      You have the flexibility to include or exclude specific services based on your group&rsquo;s preferences. While we recommend the value of an all-inclusive travel experience, the final decision is yours!
    </p>
    <Link href="/get-a-quote/" className="ile-btn ile-btn--primary" style={{ marginTop: 8 }}>Get a Custom Quote</Link>
  </div>
)

export default function Itin_usa_trips__orlando_schooltrips__orlando_student_tour_extended() {
  return (
    <>
      <PageHero
        eyebrow="Orlando · 5 Day / 4 Night"
        title={<>Orlando Extended Student Tour</>}
        subtitle="A five day Orlando adventure pairing Walt Disney World and Universal Studios with immersive group activities students will remember forever."
        image="/images/landmark/orlando-2.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Orlando", href: "/usa-trips/orlando/" },
        { label: "Orlando Extended Student Tour" },
      ]}
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
                <div><dt>Duration</dt><dd>5 Day / 4 Night</dd></div>
                <div><dt>Destination</dt><dd>Orlando, Florida</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/orlando/" className="lm-summary-link">More Orlando packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Orlando Travel Tips</span>
              <h3>Tip: Book Early!</h3>
              <p>Booking early secures the best rates, preferred accommodations, and prime access to popular attractions. It also allows more time for trip planning, ensuring a smooth and stress-free travel experience.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Other Travel Packages */}
      <section className="ile-section ile-section--cream" aria-labelledby="related-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">More Packages</span>
            <h2 id="related-h" className="lm-h2-amber">OTHER TRAVEL PACKAGES</h2>
            <p className="ile-lead lm-center-lead">Discover more customizable Orlando travel packages designed for educational tours and student groups.</p>
          </div>
          <div className="ilp-grid-3">
            {RELATED.map((r) => (
              <Link href={r.href} className="ilm-post" key={r.title}>
                <div className="ilm-post-img"><img src={r.img} alt="" loading="lazy" /></div>
                <div className="ilm-post-body">
                  <h3>{r.title}</h3>
                  <span className="ilm-post-more">View Itinerary {ArrowR}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BrochureBand />

      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations/" },
        { name: "Orlando", path: "/usa-trips/orlando/" },
        { name: "Orlando Extended Student Tour", path: "/usa-trips/orlando/orlando-student-tour-extended/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Orlando Extended Student Tour",
        description: "A five day Orlando adventure pairing Walt Disney World and Universal Studios with immersive group activities students will remember forever.",
        path: "/usa-trips/orlando/orlando-student-tour-extended/",
        days: [{ name: "Day 1: Arrival & Disney Adventure", description: "Travel to Orlando, FL; Walt Disney Admission: 1 Park, 1 Day Admission; Group Dinner: Park Voucher; Check-in to Hotel Accommodations" }, { name: "Day 2: Universal Studios & Exploration", description: "Hotel Breakfast; Universal Studios and Islands of Adventure: 2 Park, 1 Day Admission; Lunch: Park Voucher; Dinner: Park Voucher; Universal Boardwalk: Group Exploration" }, { name: "Day 3: Disney Day & Exploration", description: "Walt Disney Admission: 1 Park, 1 Day Admission; Lunch: Park Voucher; Dinner: Park Voucher; Group Exploration" }, { name: "Day 4: Universal Studios Day & Exploration", description: "Universal Studios Park Admission; Lunch: Park Voucher; Dinner: Park Voucher; Group Exploration" }, { name: "Day 5: Disney Day & Departure", description: "Walt Disney Admission: 1 Park, 1 Day Admission; Lunch: Park Voucher; Depart for Home" }],
      })} />
    </>
  )
}
