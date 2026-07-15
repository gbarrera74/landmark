/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import Link from 'next/link'
import HomeHeroSlider from '@/components/home/HomeHeroSlider'
import ReviewsCarousel from '@/components/home/ReviewsCarousel'
import BrochurePopup from '@/components/home/BrochurePopup'
import BrochureBand from '@/components/BrochureBand'
import { SITE } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

const TOP_TOURS_INTRO =
  'Explore Washington, D.C.’s monuments, New York City’s museums and Broadway stages, and Boston’s colonial trails: expertly designed student trips that blend hands-on learning, adventure, and fun.'

const TOP_TOURS = [
  {
    badge: '3D/2N',
    location: 'Washington, D.C.',
    title: 'History in the Nation’s Capital',
    blurb: 'Get ready for an unforgettable journey through the history, landmarks, and legacy of Washington, D.C.!',
    img: '/images/landmark/mlk-memorial-washington-dc.jpg',
    alt: 'Martin Luther King Jr. Memorial in Washington, D.C.',
    href: '/usa-trips/washington-dc/8th-grade-washington-dc-trip-itinerary/',
  },
  {
    badge: '3D/2N',
    location: 'New York City',
    title: 'The Art of New York',
    blurb: 'Immerse yourself in the vibrant world of art and creativity across New York City’s iconic galleries and museums!',
    img: '/images/landmark/broadway-sign-nyc.jpg',
    alt: 'Broadway signs in New York City',
    href: '/usa-trips/new-york-city/art-focused-tour-nyc/',
  },
  {
    badge: '3D/2N',
    location: 'Boston',
    title: 'Freedom Trail Adventures',
    blurb: 'Step back in time and walk the paths of revolution in the historic heart of Boston exploring iconic landmarks!',
    img: '/images/landmark/ethical-culture-boston.jpg',
    alt: 'Historic Boston landmark',
    href: '/usa-trips/boston/historic-boston/',
  },
]

const DESTINATIONS = [
  { name: 'Washington, D.C.', href: '/usa-trips/washington-dc/', img: '/images/landmark/fall-in-washington-dc.jpeg' },
  { name: 'New York City', href: '/usa-trips/new-york-city/', img: '/images/landmark/broadway-sign-nyc.jpg' },
  { name: 'Boston', href: '/usa-trips/boston/', img: '/images/landmark/ethical-culture-boston.jpg' },
  { name: 'Atlanta', href: '/usa-trips/atlanta/', img: '/images/landmark/atlanta-skyline.jpg' },
]

// New: international educational journeys (global expansion)
// One row (4) to match the USA row. Italy/Norway/Costa Rica use REAL Landmark student-group
// photos (Colosseum · Bergen Bryggen · Costa Rica waterfall). Ireland has no student photo
// (deferred by Ben) so it intentionally uses the live site's own Ireland hero image.
const INTERNATIONAL = [
  { name: 'Italy', href: '/europe/italy/', img: '/images/landmark/intl-italy-group.jpg' },
  { name: 'Ireland', href: '/europe/ireland/', img: '/images/landmark/intl-ireland-live.jpg' },
  { name: 'Norway', href: '/europe/norway/', img: '/images/landmark/intl-norway-group.jpg' },
  { name: 'Costa Rica', href: '/central-south-america/costa-rica/', img: '/images/landmark/intl-costa-rica-group.jpg' },
]

const THEMED_INTRO =
  'From STEM and civics in Washington, D.C. to French immersion in Quebec City and the Broadway stage in New York, every Landmark theme is crafted around your subject and your students: hands-on, age-appropriate, and unforgettable.'

const THEMED = [
  { location: 'Washington, D.C.', theme: 'AP History', img: '/images/landmark/fdr-memorial-dc.jpg', href: '/usa-trips/washington-dc/4-day-washington-dc-school-trip/' },
  { location: 'Quebec City, Canada', theme: 'French Immersion', img: '/images/landmark/quebec-city-french-immersion-bridge.jpg', href: '/canada/quebec-city/5-day-quebec-city-itinerary/' },
  { location: 'New York City, New York', theme: 'Performing Arts', img: '/images/landmark/murray-high-school-nyc.jpg', href: '/usa-trips/new-york-city/nyc-performing-arts-tour/' },
]

const GALLERY = [
  { img: '/images/landmark/smithsonian-national-museum-american-history.jpg', alt: 'Students at the Smithsonian National Museum of American History', cls: ' ilm-gallery-item--wide' },
  { img: '/images/landmark/independence-hall.jpeg', alt: 'Independence Hall in Philadelphia', cls: '' },
  { img: '/images/landmark/boston-duck-boat-tour.jpeg', alt: 'Students on a Boston Duck Boat tour', cls: ' ilm-gallery-item--tall' },
  { img: '/images/landmark/emms-nyc.jpg', alt: 'Student group exploring New York City', cls: ' ilm-gallery-item--wide' },
  { img: '/images/landmark/traveler-highlight-img-3406.jpg', alt: 'Travelers enjoying an educational field trip', cls: '' },
]

const PARTNERS = [
  { name: 'SYTA', logo: '/images/landmark/syta-logo.png' },
  { name: 'battleface Travel Insurance', logo: '/images/landmark/battleface-logo.png' },
  { name: 'Juniper Tours', logo: '/images/landmark/juniper-logo.png' },
  { name: 'Irish Life Experience', logo: '/images/landmark/irish-life-experience-logo.png' },
  { name: 'Ever Blue Expeditions', logo: '/images/landmark/everblue-tours-logo.png' },
  { name: 'Go Blue Tours', logo: '/images/landmark/go-blue-logo.png' },
]

const REVIEWS = [
  { name: 'Christopher Harris', text: `We took 15 high school students. amazing experience. Extremely accommodating and informative. due to weather and time constraints we had to adjust the itinerary and landmark was extremely flexible in the moment.` },
  { name: 'Sean Duffy', text: `Landmark did a fantastic job organising our school trip from Dubai. Hugh, our tour guide, was exceptionally knowledgeable and professional throughout. It was a real pleasure working with such a competent and dedicated team.` },
  { name: 'Coleman Ray Clark', text: `I was so impressed by the entire Landmark team. I booked a tour to NYC for my high school students from San Diego. We wanted a theater/Broadway-oriented trip and Landmark hit a home run for my group. We traveled with 17 people total (12 students, two teachers, and three chaperones) on a five day trip. Landmark helped me customize every single aspect of the trip, including what we did, how we traveled, and provided day-to-day comparisons for costs at different levels before we booked. They worked with me to revise the itinerary multiple times before we booked, so that the trip was specific to my students' interests. (I am originally from NYC so I had a lot of opinions about what to do and see, and Landmark was happy to adjust anything we asked for.) The tour guide, Billy, was experienced, charming, and extremely knowledgeable. When we arrived to the airport at 4:30am to learn that our flight to NYC was cancelled, the Landmark 24/7 hotline had us rebooked almost immediately and we made it to NYC without missing a beat. The staff was friendly at every step of the process, and I couldn't have asked for a better team (shout out to Angela, Carly, and Maya who worked together to make this trip possible for my students). This was by far a memory that our group will never forget. It was slightly more expensive than their competitors and I'm glad I convinced the parents to pay the extra money for the totally bespoke experience. HIGHLY RECOMMEND LANDMARK.` },
  { name: 'Stephen Hequembourg', text: `Landmark makes planning field trips so much easier and less stressful. They work with you on every aspect from flights and buses to meals and hotels, and they were very flexible and accommodating. We made lots of last minute changes and they were always great about it. Definitely recommend!` },
  { name: 'Jillian Field', text: `Our experience with Landmark Educational Tours was nothing short of amazing! From start to finish, everything was handled with the utmost professionalism, flexibility, and care. We were able to fully customize our itinerary to match our group’s specific needs, thanks to the incredible support and guidance from Maya, who made the planning process smooth and stress-free. Our tour leader, Madison, was absolutely outstanding! She was knowledgeable, energetic, and made sure every part of our trip ran seamlessly. Her passion and organization truly elevated the entire experience for everyone involved. A huge shoutout to Angela and Carly, who were fantastic with communication and handled every detail — even last-minute changes — with grace and efficiency. Knowing we had such a responsive and dedicated team behind the scenes made all the difference. This was more than just a trip — it was a meaningful, memorable experience that our group will never forget. We can’t thank Landmark enough for helping us create it. Highly recommended for any educational travel needs!` },
  { name: 'Robert Dupont', text: `Landmark planned the most amazing international trip for our school to Costa Rica. The attention to detail based on the request for an “adventure trip” was incredible. Not only did the Landmark guides, Michaela and Tara, lead the trip with professionalism but they both made fantastic connections with the students making the experience truly special! They made my job as a chaperone extremely easy! I know we will solely use Landmark going forward with ANY trips for our school. I can’t wait for the next one!` },
  { name: 'Emily Santiago', text: `This was the first time my daughter went on an international trip without us and she had a fantastic time! Landmark tours did an amazing job planning and leading the Costa Rica trip, it was the trip of a lifetime. Thank you for taking good care of her!` },
  { name: 'Sarah James', text: `Michaela and Landmark Tours just planned the most beautiful week in Costa Rica for my students. The care and intention that was put into providing multiple excursions, great hotels, local food, bonding time for our kids, and so much more was beyond what I have ever experienced. Michaela and Tara from Landmark joined the tour as well as a local tour guide. Every child was well taken care of. Micahela knew all their names, helped foster friendships, and helped take care of their every need throughout the trip. This company is clearly built from a passion for traveling and hospitality as all details are thought about and if and when things don't go as planned, Michaela jumped in and made adjustments as needed. When traveling with large groups, there are a lot of uncontrollables with weather, sickness, tired kids, and more and I'd trust Michaela and her crew through it all. I give the highest recommendation to Michaela and Landmark Tours for every big group tour needed. From business vacations to large girls weekends and even larger school trips, she will customize a trip for you!` },
  { name: 'Raya Soberal', text: `We used this company for our school's 8th grade trip in May of 2023. We had not done this trip since before covid and were excited to be able to bring this back. This company went above and beyond to make this a wonderful experience for our kids and we couldnt have been happier. One special highlight of our trip was our tour guide Jonah! He was knowledgeable and so friendly. The planning process went so smoothly--even with some changes that occurred. In the end Savannah was wonderful to work with and Michaela was a lifesaver....especially when she was able to get us last minute into the Holocaust Museum when we didn't think we were going to be able to! We cant wait to take our kids again this upcoming year.` },
  { name: 'Jennifer Martinez', text: `I worked with Maya to plan a Black History/Culture Tour of Washington DC. I knew instantly that she was extremely knowledgeable in her field and was at the ready with any question I had. We worked closely together for a couple months and was very crucial in my decision to work with this company.` },
]

const POSTS_INTRO =
  'Expert tips, destination guides, and itinerary ideas to help you plan an unforgettable student trip.'

const POSTS = [
  { title: 'Colonial Williamsburg Field Trip', href: '/blog/colonial-williamsburg-field-trip/', img: '/images/landmark/jamestown-settlement-va.jpg', alt: 'Jamestown Settlement in Virginia' },
  { title: 'Williamsburg School Trip', href: '/blog/williamsburg-school-trip/', img: '/images/landmark/williamsburg-brick-building.jpg', alt: 'Historic brick building in Colonial Williamsburg' },
  { title: 'Top 10 things to do on a Seattle Field Trip', href: '/blog/top-10-things-to-do-on-a-seattle-field-trip/', img: '/images/landmark/seattle-skyline-sunset.jpg', alt: 'Seattle skyline at sunset' },
]

const MISSION =
  'Our mission at Landmark Educational Tours is customizing and personalizing safe and elite educational travel experiences for all, with passion, transparency and ingenuity, to landmarks worldwide.'

export default function Home() {
  return (
    <>
      <HomeHeroSlider />

      {/* Welcome intro */}
      <section className="ile-section ile-section--white ile-section--tight" aria-labelledby="intro-h">
        <div className="ile-container ile-center lm-narrow">
          <span className="ile-eyebrow">Explore Great Places</span>
          <h1 id="intro-h" className="lm-h2-amber">EDUCATIONAL FIELD TRIPS</h1>
          <p className="ile-lead lm-center-lead">Landmark designs safe, fully-customized educational trips, from the monuments of Washington, D.C. to the streets of Rome and Kyoto, built around your students, your curriculum, and your budget.</p>
          <ul className="lm-welcome-pills">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6" /><path d="M8.2 13.5 7 22l5-3 5 3-1.2-8.5" /></svg>
              SYTA Member
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>
              Fully Customizable
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
              Safe &amp; Supervised
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
              24/7 On-Trip Support
            </li>
          </ul>
        </div>
      </section>

      {/* Our Top Tours */}
      <section className="ile-section ile-section--cream" aria-labelledby="tours-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <h2 id="tours-h" className="lm-h2-amber">OUR TOP TOURS</h2>
            <p className="ile-lead lm-center-lead">{TOP_TOURS_INTRO}</p>
          </div>
          <div className="lm-tour-grid">
            {TOP_TOURS.map((t) => (
              <article className="lm-tour" key={t.title}>
                <div className="lm-tour-media">
                  <img src={t.img} alt={t.alt} loading="lazy" />
                  <span className="lm-tour-badge">{t.badge}</span>
                </div>
                <div className="lm-tour-body">
                  <span className="lm-tour-loc">{t.location}</span>
                  <h3>{t.title}</h3>
                  <p>{t.blurb}</p>
                  <Link href={t.href} className="ile-btn ile-btn--primary lm-btn-sm">View Itinerary</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/usa-trips/" className="ile-btn ile-btn--ghost">View Other Tours</Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="ile-section ile-section--white" aria-labelledby="dest-h">
        <div className="ile-container">
          <div className="ile-center"><h2 id="dest-h" className="lm-h2-amber">POPULAR DESTINATIONS</h2></div>
          <div className="lm-dest-grid">
            {DESTINATIONS.map((d) => (
              <Link href={d.href} className="lm-dest" key={d.name} aria-label={`${d.name} student tours`}>
                <img src={d.img} alt="" loading="lazy" />
                <span className="lm-dest-label">{d.name} <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/destinations/" className="ile-btn ile-btn--ghost">More Destinations</Link>
          </div>
        </div>
      </section>

      {/* International destinations (global expansion) */}
      <section className="ile-section ile-section--cream-deep" aria-labelledby="intl-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">New · Around the Globe</span>
            <h2 id="intl-h" className="lm-h2-amber">INTERNATIONAL DESTINATIONS</h2>
            <p className="ile-lead lm-center-lead">Landmark now takes students beyond the U.S.: immersive, safe, and fully customized educational trips across Europe, Asia, and Central America.</p>
          </div>
          <div className="lm-intl-grid">
            {INTERNATIONAL.map((d) => (
              <Link href={d.href} className="lm-dest" key={d.name} aria-label={`${d.name} educational tours`}>
                <img src={d.img} alt="" loading="lazy" />
                <span className="lm-dest-label">{d.name} <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/destinations/" className="ile-btn ile-btn--ghost">Explore All International Trips</Link>
          </div>
        </div>
      </section>

      {/* Themed Travel */}
      <section className="ile-section ile-section--cream" aria-labelledby="themed-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">EMBARK WITH LANDMARK</span>
            <h2 id="themed-h" className="lm-h2-amber">THEMED TRAVEL</h2>
            <p className="ile-lead lm-center-lead">{THEMED_INTRO}</p>
            <div className="lm-after-grid" style={{ marginTop: 8 }}>
              <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Plan A Trip</Link>
            </div>
          </div>
          <div className="lm-tour-grid lm-theme-grid">
            {THEMED.map((c) => (
              <Link href={c.href} className="lm-theme" key={c.theme} aria-label={`${c.theme} — ${c.location}`}>
                <img src={c.img} alt="" loading="lazy" />
                <span className="lm-theme-label">
                  <small>{c.location}</small>
                  <strong>{c.theme}</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler Highlights */}
      <section className="ile-section ile-section--white" aria-labelledby="gal-h">
        <div className="ile-container ile-center lm-narrow">
          <h2 id="gal-h" className="lm-h2-amber">TRAVELER HIGHLIGHTS</h2>
          <p className="ile-lead lm-center-lead">Explore our shared photos from travelers, capturing unforgettable moments from their educational journeys!</p>
        </div>
        <div className="ile-container">
          <ul className="ilm-gallery lm-gallery-reset">
            {GALLERY.map((g, i) => (
              <li key={i} className={`ilm-gallery-item${g.cls}`}>
                <img src={g.img} alt={g.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Partners */}
      <section className="ile-section ile-section--cream ile-section--tight" aria-labelledby="partners-h">
        <div className="ile-container ile-center">
          <h2 id="partners-h" className="lm-h2-amber">OUR PARTNERS</h2>
          <p className="ile-lead lm-center-lead">Building a community that works with you and your group in mind.</p>
          <div className="ilm-partners-row">
            {PARTNERS.map((p) => (
              <span className="ilm-partner" key={p.name}>
                <img src={p.logo} alt={p.name} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trustindex reviews */}
      <section className="ile-section ile-section--white" aria-labelledby="reviews-h">
        <div className="ile-container ile-center"><h2 id="reviews-h" className="lm-h2-amber">WHAT TRAVELERS SAY</h2></div>
        <div className="ile-container">
          <ReviewsCarousel variant="reviews" items={REVIEWS} />
        </div>
      </section>

      {/* Recent posts */}
      <section className="ile-section ile-section--cream" aria-labelledby="posts-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">FROM OUR BLOG</span>
            <h2 id="posts-h" className="lm-h2-amber">OUR RECENT POSTS</h2>
            <p className="ile-lead lm-center-lead">{POSTS_INTRO}</p>
          </div>
          <div className="ilm-blog-grid">
            {POSTS.map((p) => (
              <Link href={p.href} className="ilm-post" key={p.title}>
                <div className="ilm-post-img"><img src={p.img} alt={p.alt} loading="lazy" /></div>
                <div className="ilm-post-body">
                  <h3>{p.title}</h3>
                  <span className="ilm-post-more">Read article {ArrowR}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="ile-section ile-section--white" aria-labelledby="about-h">
        <div className="ile-container">
          <div className="ilm-intro-grid">
            <div className="ilm-intro-media">
              <img src="/images/landmark/about-team.jpg" alt="The Landmark Educational Tours team" />
            </div>
            <div className="ilm-intro-body">
              <span className="ile-eyebrow">WHO WE ARE</span>
              <h2 id="about-h">About Us</h2>
              <p>{MISSION}</p>
              <Link href="/about-landmark/" className="ile-btn ile-btn--ghost">Learn More About Landmark</Link>
            </div>
          </div>
        </div>
      </section>

      <BrochureBand />

      <BrochurePopup />
    </>
  )
}
