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
  { title: "Day 1: Departure", acts: ["Depart to Seoul, South Korea"] },
  { title: "Day 2: Arrival in Seoul", acts: ["Arrival at ICN Airport", "Meet your local tour guide and Landmark Leader", "Return to Hotel Accommodations"] },
  { title: "Day 3: Seoul", acts: ["Breakfast at the hotel", "Visit Gwangjang Market", "See the Guard Changing Ceremony at Gwanghwamun", "Wear a traditional Korean hanbok", "Visit Gyeongbokgung Palace", "Visit Bukchon Hanok Village", "Visit the National Folk Museum of Korea", "Explore Insadong", "Lunch included", "Return to Hotel Accommodations"] },
  { title: "Day 4: The DMZ", acts: ["Breakfast at the hotel", "Full-day tour of the Korean Demilitarized Zone", "Visit Imjingak Park", "Walk to Freedom Bridge", "Visit the 3rd Infiltration Tunnel", "Visit the DMZ Exhibition Hall", "View North Korea from Dora Observatory", "Lunch included", "Return to Hotel Accommodations"] },
  { title: "Day 5: Travel to Busan", acts: ["Breakfast at the hotel", "Travel to Busan", "Return to Hotel Accommodations"] },
  { title: "Day 6: Busan", acts: ["Breakfast at the hotel", "Visit Gamcheon Culture Village", "Visit Jagalchi Fish Market", "Ride the Songdo Cable Car", "Walk the Songdo Yonggung Suspension Bridge", "Lunch included", "Return to Hotel Accommodations"] },
  { title: "Day 7: Busan Coast", acts: ["Breakfast at the hotel", "Visit Haeundae Beach", "Visit APEC Naru Park", "Visit Haedong Yonggungsa Temple", "Ride the Sky Capsule", "Lunch included", "Return to Hotel Accommodations"] },
  { title: "Day 8: Travel to Shanghai", acts: ["Breakfast at the hotel", "Travel to Shanghai", "Return to Hotel Accommodations"] },
  { title: "Day 9: Shanghai", acts: ["Breakfast at the hotel", "Visit Yuyuan Garden", "Visit the Bund", "Visit Shanghai Tower, including the 118th floor observation deck", "Walking tour of the former French Concession", "Lunch included", "Return to Hotel Accommodations"] },
  { title: "Day 10: Zhujiajiao Water Town", acts: ["Breakfast at the hotel", "Visit Zhujiajiao Water Town", "Lunch included", "Evening cruise on the Huangpu River", "Return to Hotel Accommodations"] },
  { title: "Day 11: Travel to Beijing", acts: ["Breakfast at the hotel", "Travel to Beijing", "Return to Hotel Accommodations"] },
  { title: "Day 12: Beijing", acts: ["Breakfast at the hotel", "Visit Tiananmen Square", "Visit the Forbidden City", "Visit Jingshan Park", "Lunch included", "Return to Hotel Accommodations"] },
  { title: "Day 13: The Great Wall", acts: ["Breakfast at the hotel", "Visit the Mutianyu section of the Great Wall, with a chairlift up and a toboggan ride down", "Visit the Temple of Heaven", "Lunch included", "Return to Hotel Accommodations"] },
  { title: "Day 14: Summer Palace & the Hutongs", acts: ["Breakfast at the hotel", "Visit the Summer Palace and the Garden of Virtue and Harmony", "Visit a hutong family in a traditional courtyard", "Practice Chinese brush calligraphy", "Play with a Chinese yo-yo", "Try sugar painting", "Lunch included", "Return to Hotel Accommodations"] },
  { title: "Day 15: Return Home", acts: ["Depart for Home"] },
]

const WHY = [
  { label: "Two Countries, One Trip", text: "Seoul, Busan, Shanghai, and Beijing across fifteen days." },
  { label: "Language in Practice", text: "A local guide and a Landmark Leader travel with the group throughout." },
  { label: "Living History", text: "Gyeongbokgung Palace, the DMZ, the Forbidden City, and the Great Wall." },
  { label: "Hands-On Culture", text: "Wear a hanbok, practice calligraphy, and visit a hutong family." },
]

const INCLUSIONS = [
  ["Private Group Tour", "Personalized experiences for your group only."],
  ["Custom Itinerary", "Built around your educational goals and preferences."],
  ["Transportation", "Safe, reliable, and comfortable travel."],
  ["Hotel Accommodations", "Convenient and student-friendly lodging."],
  ["Attractions", "Access to top-rated sites and experiences."],
  ["Meals", "Meals as specified in the itinerary."],
  ["Tour Director", "A Landmark Leader and a local guide throughout."],
  ["Taxes & Gratuities", "Taken care of for your convenience."],
]

const DESC_P1 = "Embark on an unforgettable fifteen-day journey from Seoul to Beijing! This itinerary pairs South Korea and China in a single trip, taking students from the palaces and markets of Seoul to the Korean Demilitarized Zone, down the coast to Busan, and on to Shanghai and Beijing. Along the way they walk the Great Wall, stand in Tiananmen Square, and explore the Forbidden City."
const DESC_P2 = "This is a cultural and language immersion experience as much as a sightseeing trip. Students wear a traditional Korean hanbok, practice Chinese brush calligraphy, and spend time with a family in a Beijing hutong. A local guide and a Landmark Leader travel with the group from start to finish, adding context at every stop. Landmark Educational Tours coordinates every detail, from international flights to on-the-ground logistics, so educators can focus on the learning."

const sampleTab = (
  <>
    <p className="lm-itin-note">*Customize and personalize your Cultural &amp; Language Immersion Experience itinerary with our team.</p>
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
    <h2 style={{ marginTop: 0 }}>Explore the Seoul to Beijing Itinerary</h2>
    <p>{DESC_P1}</p>
    <p>{DESC_P2}</p>
    <h3>Why Choose This Trip?</h3>
    <ul>
      {WHY.map((w) => (
        <li key={w.label}><strong>{w.label}:</strong> {w.text}</li>
      ))}
    </ul>
    <p className="lm-sample-note">
      <em>Note: This is a SAMPLE itinerary provided for inspiration only. (Unless you love it!) Every trip we offer is fully customizable, ensuring a personalized experience tailored to your school&rsquo;s educational goals. Full itinerary is subject to availability.</em>
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

export default function Itin_asia__south_korea__cultural_language_immersion_seoul_to_beijing() {
  return (
    <>
      <PageHero
        eyebrow="South Korea & China · 15 Day / 14 Night"
        title={<>Cultural &amp; Language Immersion Experience: Seoul to Beijing</>}
        subtitle="Fifteen days from Seoul to Beijing, taking in Gyeongbokgung Palace, the DMZ, Busan, Shanghai, the Forbidden City, and the Great Wall."
        image="/images/landmark/korea-seoul-beijing-yonggungsa.jpg"
        breadcrumb={[
          { label: "Destinations", href: "/destinations/" },
          { label: "Asia", href: "/asia/" },
          { label: "South Korea", href: "/asia/south-korea/" },
          { label: "Cultural & Language Immersion Experience: Seoul to Beijing" },
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
                <div><dt>Duration</dt><dd>15 Day / 14 Night</dd></div>
                <div><dt>Destination</dt><dd>South Korea &amp; China</dd></div>
                <div><dt>Best for</dt><dd>All grade levels</dd></div>
                <div><dt>Style</dt><dd>Private, fully customizable</dd></div>
              </dl>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary lm-summary-cta">Get a Quote</Link>
              <Link href="/asia/south-korea/" className="lm-summary-link">More South Korea packages {ArrowR}</Link>
            </div>

            <div className="lm-tip-card">
              <span className="ile-eyebrow">South Korea Travel Tips</span>
              <h3>Tip: Book Early!</h3>
              <p>Booking early secures the best rates, preferred accommodations, and prime access to popular attractions. It also allows more time for trip planning, ensuring a smooth and stress-free travel experience.</p>
            </div>
          </aside>
        </div>
      </section>

      <BrochureBand />

      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations/" },
        { name: "Asia", path: "/asia/" },
        { name: "South Korea", path: "/asia/south-korea/" },
        { name: "Cultural & Language Immersion Experience: Seoul to Beijing", path: "/asia/south-korea/cultural-language-immersion-seoul-to-beijing/" },
      ])} />
      <JsonLd data={touristTrip({
        name: "Cultural & Language Immersion Experience: Seoul to Beijing",
        description: "Fifteen days from Seoul to Beijing, taking in Gyeongbokgung Palace, the DMZ, Busan, Shanghai, the Forbidden City, and the Great Wall.",
        path: "/asia/south-korea/cultural-language-immersion-seoul-to-beijing/",
        days: DAYS.map((d) => ({ name: d.title, description: d.acts.join('; ') })),
      })} />
    </>
  )
}
