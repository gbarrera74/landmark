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
  { title: "Day 1: Arrival & Memorials Tour", acts: ["Travel to Washington, D.C., or Baltimore, Maryland", "Visit Lincoln, Korean War, Vietnam War, and WWII Memorials", "Group sit-down dinner", "Check-in to Hotel Accommodations"] },
  { title: "Day 2: United States Capitol & White House", acts: ["Breakfast at the hotel", "Visit the U.S. Capitol", "Lunch and group exploration of Smithsonian Museum of choice", "Group photo at The White House and Lafayette Park", "Evening Memorial visits and dinner", "Return to Hotel Accommodations"] },
  { title: "Day 3: Bowie State & Howard University", acts: ["Breakfast at the hotel", "Campus Tour of Bowie State University", "Lunch Included", "Campus Tour of Howard University", "Group exploration of Smithsonian Museum of choice", "Group sit-down dinner", "Return to Hotel Accommodations"] },
  { title: "Day 4: Virginia State & Norfolk University", acts: ["Breakfast at the hotel", "Campus Tour of Virginia State University", "Lunch Included", "Campus Tour of Norfolk University", "Group sit-down dinner", "Evening activity", "Return to Hotel Accommodations"] },
  { title: "Day 5: Hampton University & University of Maryland Eastern Shore", acts: ["Breakfast at the hotel", "Campus Tour of Hampton University", "Lunch Included", "Campus Tour of University of Maryland Eastern Shore", "Dinner Included", "Two hour drive to next city"] },
  { title: "Day 6: Delaware State & Coppin State University", acts: ["Breakfast at the hotel", "Campus Tour of Delaware State University", "Lunch Included", "Campus Tour of Coppin State University", "Dinner Included", "Pro-tip: Request for your group to enjoy a night of bowling and pizza dinner"] },
  { title: "Day 7: Morgan State University & Departure", acts: ["Breakfast at the hotel", "Campus Tour of Morgan State University", "Lunch Included", "Depart for Home"] },
]

const WHY = [
  { label: "Interactive Learning", text: "Engage with history through guided tours and museum visits." },
  { label: "Iconic Landmarks", text: "Visit renowned sites like the U.S. Capitol, Lincoln Memorial, and Smithsonian Museums." },
  { label: "Civic Understanding", text: "Gain a deeper appreciation for democracy and government." },
  { label: "Memorable Experiences", text: "Create lifelong memories while exploring this historic city." },
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
  { title: "Class Trip Programs for Middle School Students", img: "/images/landmark/dc-capitol.jpg", href: "/usa-trips/washington-d-c/class-trip-programs-for-middle-school-students/" },
  { title: "Civics Focused Washington, DC School Trip", img: "/images/landmark/thomas-jefferson-memorial.jpg", href: "/usa-trips/washington-d-c/washington-dc-civics-student-tour/" },
  { title: "African American History Washington, DC School Trip", img: "/images/landmark/dc-nmaahc.jpg", href: "/usa-trips/washington-d-c/african-american-history-dc-student-tour/" },
]

const DESC_P1 = "Embark on an unforgettable four-day educational adventure in Washington, DC, designed for students of all grade levels! Discover the rich history, iconic landmarks, and cultural treasures of the nation’s capital. From touring historic monuments and visiting world-famous museums to experiencing the heart of American democracy, this trip promises an immersive, hands-on learning experience that will leave students inspired and excited about history, government, and culture."
const DESC_P2 = "Exposure shapes ambition. Our HBCU tours give students the opportunity to step onto campuses that are rich in history, achievement, and cultural pride. During each HBCU field trip, students meet admissions teams, explore academic programs, and learn about scholarship pathways that support their future aspirations."
const DESC_P3 = "These experiences go beyond traditional college visits. They provide representation, inspiration, and a tangible sense of belonging in higher education spaces. Landmark Educational Tours works alongside schools to coordinate every detail, from transportation to structured campus engagement, ensuring a purposeful and organized experience."
const DESC_P4 = "Students leave informed and motivated to pursue their options. An HBCU campus tour is a defining moment that expands vision, confidence, and possibility."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your HBCU Campus Tours itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore HBCU Campus Tours Itinerary</h2>
    <p>{DESC_P1}</p>
    <p>{DESC_P2}</p>
    <p>{DESC_P3}</p>
    <p>{DESC_P4}</p>
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
      Work with our expert Destination Landmark Specialist team to design a trip that fits your group&rsquo;s unique needs! Our packages start fully customizable and typically include:
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

export default function Itin_usa_trips__washington_d_c__hbcu_campus_tours() {
  return (
    <>
      <PageHero
        eyebrow="Washington, D.C. · 7 Day / 6 Night"
        title={<>HBCU Campus Tours</>}
        subtitle="Take students on a multi-day journey through historic HBCU campuses and the landmarks of the nation's capital."
        image="/images/landmark/dc-howard-university.jpg"
        breadcrumb={[
        { label: "Destinations", href: "/destinations/" },
        { label: "Washington, D.C.", href: "/usa-trips/washington-d-c/" },
        { label: "HBCU Campus Tours" },
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
                <div><dt>Duration</dt><dd>7 Day / 6 Night</dd></div>
                <div><dt>Destination</dt><dd>Washington, DC</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/usa-trips/washington-d-c/" className="lm-summary-link">More Washington, D.C. packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">Washington, D.C. Travel Tips</span>
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
            <p className="ile-lead lm-center-lead">Discover more customizable Washington, D.C. travel packages designed for educational tours and student groups.</p>
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
        { name: "Washington, D.C.", path: "/usa-trips/washington-d-c/" },
        { name: "HBCU Campus Tours", path: "/usa-trips/washington-d-c/hbcu-campus-tours/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "HBCU Campus Tours",
        description: "Take students on a multi-day journey through historic HBCU campuses and the landmarks of the nation's capital.",
        path: "/usa-trips/washington-d-c/hbcu-campus-tours/",
        days: [{ name: "Day 1: Arrival & Memorials Tour", description: "Travel to Washington, D.C., or Baltimore, Maryland; Visit Lincoln, Korean War, Vietnam War, and WWII Memorials; Group sit-down dinner; Check-in to Hotel Accommodations" }, { name: "Day 2: United States Capitol & White House", description: "Breakfast at the hotel; Visit the U.S. Capitol; Lunch and group exploration of Smithsonian Museum of choice; Group photo at The White House and Lafayette Park; Evening Memorial visits and dinner; Return to Hotel Accommodations" }, { name: "Day 3: Bowie State & Howard University", description: "Breakfast at the hotel; Campus Tour of Bowie State University; Lunch Included; Campus Tour of Howard University; Group exploration of Smithsonian Museum of choice; Group sit-down dinner; Return to Hotel Accommodations" }, { name: "Day 4: Virginia State & Norfolk University", description: "Breakfast at the hotel; Campus Tour of Virginia State University; Lunch Included; Campus Tour of Norfolk University; Group sit-down dinner; Evening activity; Return to Hotel Accommodations" }, { name: "Day 5: Hampton University & University of Maryland Eastern Shore", description: "Breakfast at the hotel; Campus Tour of Hampton University; Lunch Included; Campus Tour of University of Maryland Eastern Shore; Dinner Included; Two hour drive to next city" }, { name: "Day 6: Delaware State & Coppin State University", description: "Breakfast at the hotel; Campus Tour of Delaware State University; Lunch Included; Campus Tour of Coppin State University; Dinner Included; Pro-tip: Request for your group to enjoy a night of bowling and pizza dinner" }, { name: "Day 7: Morgan State University & Departure", description: "Breakfast at the hotel; Campus Tour of Morgan State University; Lunch Included; Depart for Home" }],
      })} />
    </>
  )
}
