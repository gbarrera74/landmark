/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import TeamGrid from '@/components/TeamGrid'
import CtaBand from '@/components/CtaBand'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

// Leadership first, then consultants & operations.
const TEAM = [
  { name: `Gerardo Barrera`, title: `Co-Founder & Finance Director`, bio: `Gerardo Barrera began his journey in the travel industry 20+ years ago when he joined as a Finance Director for StudentCity.com. He gradually became the Chief Financial Officer of the parent company, TUI Education North America, whose portfolio includes Brightspark, Educational Tours, Jumpstreet, Educatours, Travel Adventures, and New Horizons. Now, Gerardo lives in Boston with his wife and two sons. He is also the Co-Founder of Go Blue Tours, Juniper Tours, and Landmark Educational Tours.`, photo: `/images/landmark/team/gerardo.jpg` },
  { name: `Michaela Ruffino`, title: `Managing Director`, bio: `Currently residing in Rhode Island, Michaela is an accomplished leader in the hospitality industry. With a rich background and experience, she has honed her expertise in the field and possesses an impressive portfolio of travel knowledge. Michaela holds a bachelor's degree in Travel and Tourism Hospitality Management from Johnson & Wales University, which has equipped her with the skills and knowledge necessary to excel in her career. In her spare time, Michaela likes to spend time with her beloved dogs and indulges in baking. She also has an insatiable appetite for travel and has set her sights on visiting some of the most breathtaking countries in the world. Her current bucket list includes Japan, Greece, Maldives, and many more. Michaela is passionate about exploring new cultures and experiencing everything the world has to offer.`, photo: `/images/landmark/team/michaela.jpg` },
  { name: `Ericka Montano`, title: `Operations Director`, bio: `Ericka is our Director of Operations at Landmark Educational Tours. She has never stopped learning and is about to graduate from Tourism Business Administration. Ericka is fully bilingual and has more than 20 years of experience working in operations activities such as group management, financial management, contract management, logistics, and customer service. Her experience working with large corporations such as TUI and First Choice has given her the knowledge and skills to help improve our product. Ericka's signature is her strong service philosophy and focuses on achieving all aspects of our elite service.` },
  { name: `Josh Segedy`, title: `Accounting Executive`, bio: `Josh serves as a key member of the Landmark accounting team, handling the financial side of things from our Middleton, MA office. With a Finance degree from UMass Amherst, he enjoys the challenge of managing the complex logistics and financial details that allow our tours to run without a hitch. In his free time, Josh enjoys working out, watching sports, and spending time at the beach. Dream Destinations: Greece, Iceland, and Japan!`, photo: `/images/landmark/team/josh.jpg` },
  { name: `Maren Eramo`, title: `Human Resources Manager`, bio: `My name is Maren, and I am part of the Human Resources team, based in Haverhill, Massachusetts. I am passionate about supporting others and being a reliable resource for employees whenever they need assistance. Always looking at the glass half full, I take pride in being dependable, hardworking, and collaborative. I enjoy working with teams to help create a smooth and supportive work environment. Outside of work, I enjoy surfing, working out, and spending time with the people I love. Dream Destinations: Bali, British Columbia, Greece, St. Croix!`, photo: `/images/landmark/team/maren.jpg` },
  { name: `Edwin Yip`, title: `IT Specialist`, bio: `Edwin Yip has decades of commerce system experience. Most recent is his 15 years of building systems for the travel industry. This experience began with First Choice in the United Kingdom, which merged with TUI Travel PLC to become the largest tour operator in the world with over 60 thousand employees. As the Director of Application Development at TUI Student Travel, he worked with Brightspark, Jumpstreet, Education Tours, and other student brands of the company in building out their commerce platforms.`, photo: `/images/landmark/team/edwin.jpg` },
  { name: `Maya Slavkin`, title: `Travel Consultant`, bio: `Originally from Los Angeles, CA, Maya has a profound passion for travel and has spent the past three years working in international education, holding teaching positions in Spain and New Zealand. She has various hospitality and sales experience that she is excited to bring to Landmark Educational Tours. She graduated from George Washington University in 2020 with a B.A. in Sociology. Maya's love of travel has taken her to 28 countries, and some of her dream destinations include Iceland, Brazil, and Colombia! In her free time, Maya enjoys reading, spending time at the beach, cycling, and of course, traveling!`, photo: `/images/landmark/team/maya.jpg` },
  { name: `Maggie Shelton`, title: `Travel Consultant and Landmark Leader`, bio: `Maggie is originally from Richmond, VA! She enjoys traveling, hiking, yoga, and history. In her free time she loves going on walks or reading! She loves helping people discover new places and learning new things. She is super passionate about forever learning and trying new things! Dream Destinations: Greece or Australia one day, and spend the whole day on the beach!`, photo: `/images/landmark/team/maggie.jpg` },
  { name: `Tara Marcucci`, title: `Travel Consultant and Senior Landmark Leader`, bio: `Tara is one of our Travel Consultants and Trip Leaders. Currently living in Rhode Island, Tara shares her passion for travel and experience in trip management with every trip. Boasting her U.S. National Parks pass, Tara hopes to one day visit every U.S. National Park with her dogs.`, photo: `/images/landmark/team/tara.jpg` },
  { name: `Katherine Faucher`, title: `Travel Consultant`, bio: `Katherine is originally from Hubbardston, Massachusetts, and is currently finishing her senior year at Johnson & Wales University, where she is earning a bachelor's degree in Hospitality Management. She enjoys traveling, thrifting, sewing, and attending concerts. In her free time, Katherine loves cooking and going on long walks. Her dream travel destinations include Iceland, the Philippines, and Brazil!`, photo: `/images/landmark/team/katherine.jpg` },
  { name: `Angela Gallagher`, title: `Account Manager`, bio: `Hi, my name is Angela and I am so excited to be a part of the Landmark team. I currently live in Phoenix, AZ with my husband and golden doodle puppy named Stella! I graduated from the University of Arizona with a degree in Elementary Education. During my time at Arizona I studied Art History abroad in Prague, Czech Republic, where my love for travel and history began. I have been to 25 different states and 12 countries. In my free time I love to go for walks, go to Orangetheory, and be with friends and family.`, photo: `/images/landmark/team/angela.jpg` },
  { name: `Emily Wilson`, title: `Account Manager`, bio: `Currently residing in Atlanta, GA, Emily brings years of experience as an elementary educator and community engagement leader. She is deeply passionate about travel, education, and enhancing client experiences. Emily excels in sharing ideas and fostering collaboration to achieve common goals. Outside of work, Emily enjoys live music, teaching Pure Barre classes, and spending quality time with her husband, son, and two dogs. Dream Destinations: Italy, Japan, New Zealand, and Tanzania!`, photo: `/images/landmark/team/emily.jpg` },
  { name: `Briana Kotchen`, title: `Marketing Specialist`, bio: `Currently in Minneapolis, Minnesota, Briana is part of our marketing team! She is passionate about marketing, social media, and traveling. Briana is a creative individual; she enjoys sharing her ideas with others and coming together as a team to achieve different goals. In her free time, she enjoys watching sports, baking, and spending time with her family and friends. Dream Destinations: Greece, Australia, London, and Puerto Rico!`, photo: `/images/landmark/team/briana.jpg` },
  { name: `Martha Montano`, title: `Operations Specialist`, bio: `Martha, hailing all the way from Cancún, México, is a true globetrotter with a passion for travel and a thirst for cultural exploration. Over the past 16 years, she has embarked on extraordinary adventures, living on the ocean and visiting over 48 countries and counting. With a dream of completing the seven wonders of the world, Martha has already checked off five and eagerly anticipates visiting Petra and the Taj Mahal to fulfill her goal. Her experience working for a cruise line has honed her skills in understanding diverse customer needs and providing unique and unforgettable experiences. Martha is known for her dedication, organization, trustworthiness, and ability to work efficiently under pressure. Thriving in a culture of positive customer service, Martha enjoys engaging with customers and delivering exceptional experiences.` },
  { name: `Lupita Ramirez`, title: `Operations Specialist`, bio: `28 years of experience as a travel consultant, in sales, supervision, coordination, group logistics, and operations for a receptive travel company. I think that tourism in general has the most magical vibe: people, as tourists and travelers, look for the best and safest option to go out and see the world, and one receives all that positive emotion that keeps us giving our best every day.`, photo: `/images/landmark/team/lupita.jpg` },
  { name: `Iliana Arista`, title: `Operations Specialist`, bio: `From Cancún, México to the world! Iliana has been passionate about traveling for as long as she can remember. With nineteen years of experience in the tourism field, she is able to identify the best options for an unforgettable, lifetime trip. Her professional background spans restaurants, hotels, and cruise ships. She likes to spend time with friends and family, and enjoys exploring new destinations and returning to her favorite spots such as Mexico City, Disney parks, NY, Las Vegas, Madrid, and London. Bucket List: Japan, Thailand, Cambodia, and the list goes on!`, photo: `/images/landmark/team/iliana.jpg` },
]

const STATS = [
  { n: '100%', l: 'Employee-Owned' },
  { n: '16', l: 'Travel Experts on Staff' },
  { n: '48+', l: 'Countries Our Team Has Explored' },
  { n: '20+', l: 'Years in Educational Travel' },
]

const VALUES = [
  { title: 'Employee-Owned', text: 'Every member of our team has a real stake in your trip’s success — not just a job.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
  { title: 'Educator DNA', text: 'Former classroom teachers on our team build curriculum-aligned itineraries that actually teach.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>) },
  { title: 'Safety First', text: 'Trained leaders, vetted partners, and a duty-of-care mindset on every single departure.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>) },
  { title: 'Hospitality-Rooted', text: 'Decades of hospitality experience means top-tier service from the first call to the homecoming.', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>) },
]

const PARTNERS = [
  { name: 'Student & Youth Travel Association (SYTA)', logo: '/images/landmark/accred-syta.png' },
  { name: 'American Bus Association (ABA)', logo: '/images/landmark/accred-aba.png' },
  { name: 'Better Business Bureau (BBB)', logo: '/images/landmark/accred-bbb.png' },
  { name: 'International Air Transport Association (IATA)', logo: '/images/landmark/accred-iata.png' },
]

const ArrowR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
)

export default function AboutLandmark() {
  return (
    <>
      <PageHero
        eyebrow="Our passion for travel is indescribable"
        title={<>About <em>Landmark</em></>}
        subtitle="We are an employee-owned team crafting educational group journeys that inspire, educate, and connect travelers of every age."
        image="/images/landmark/about-team.jpg"
        breadcrumb={[{ label: "About Landmark" }]}
      />

      {/* Who we are — two-column editorial */}
      <section className="ile-section ile-section--white">
        <div className="ile-container">
          <div className="ilm-intro-grid">
            <div className="ilm-intro-media">
              <img src="/images/landmark/intl-italy-group.jpg" alt="A Landmark student group on tour" />
            </div>
            <div className="ilm-intro-body">
              <span className="ile-eyebrow">Who We Are</span>
              <h2 className="lm-h2-amber">Educational travel, employee-owned</h2>
              <p>Discover the world&rsquo;s most iconic destinations with Landmark Educational Tours. As an employee-owned travel company, we specialize in creating exceptional group tours designed to inspire, educate, and connect. Our passionate team of travel experts is committed to delivering top-tier educational experiences rooted in hospitality. Whether you&rsquo;re a student, educator, or lifelong learner, join us for unforgettable journeys that bring history, culture, and adventure to life.</p>
              <Link href="#team" className="ile-btn ile-btn--ghost">Meet the team {ArrowR}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="ile-section ile-section--cream" aria-labelledby="about-stats-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">By the numbers</span>
            <h2 id="about-stats-h" className="lm-h2-amber">A TEAM BUILT ON EXPERIENCE</h2>
          </div>
          <div className="ilp-stats" style={{ marginTop: 40 }}>
            {STATS.map((s) => (
              <div className="ilp-stat-box" key={s.l}>
                <span className="n">{s.n}</span>
                <span className="l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="ile-section ile-section--white" aria-labelledby="about-values-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Why Landmark</span>
            <h2 id="about-values-h" className="lm-h2-amber">WHAT SETS US APART</h2>
            <p className="ile-lead lm-center-lead">We work with only the best — and build every journey around a community that keeps you and your group in mind.</p>
          </div>
          <div className="ilp-grid-4" style={{ marginTop: 44 }}>
            {VALUES.map((v) => (
              <div className="ilm-card" key={v.title}>
                <div className="ilm-card-ico">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="ile-section ile-section--cream" id="team" aria-labelledby="about-team-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">The people behind your trip</span>
            <h2 id="about-team-h" className="lm-h2-amber">MEET OUR TEAM</h2>
            <p className="ile-lead lm-center-lead">Click any team member to read their story. Many are former educators and lifelong travelers.</p>
          </div>
          <div style={{ marginTop: 40 }}>
            <TeamGrid members={TEAM} />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="ile-section ile-section--white" aria-labelledby="about-trust-h">
        <div className="ile-container">
          <div className="ile-center lm-narrow">
            <span className="ile-eyebrow">Trusted &amp; accredited</span>
            <h2 id="about-trust-h" className="lm-h2-amber">CREDENTIALS YOU CAN VERIFY</h2>
            <p className="ile-lead lm-center-lead">Third-party memberships and accreditations that schools and parents can check for themselves.</p>
          </div>
          <div className="ilm-partners-row" style={{ marginTop: 32 }}>
            {PARTNERS.map((p) => (
              <span className="ilm-partner" key={p.name}>
                <img src={p.logo} alt={p.name} loading="lazy" />
              </span>
            ))}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/accreditations-certifications/" className="ile-btn ile-btn--ghost">See our accreditations {ArrowR}</Link>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Let’s get started"
        title="Ready to travel with Landmark?"
        text="Tell us about your group and goals, and a Landmark Travel Consultant will build a safe, custom itinerary from the ground up."
        primary={{ label: 'Start Planning Your Trip', href: '/get-a-quote/' }}
        secondary={{ label: 'Talk to a Consultant', href: '/contact-us/' }}
      />

      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "About Landmark", path: "/about-landmark/" },
      ])} />
    </>
  )
}
