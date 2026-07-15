/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const REVIEWS = [
  { quote: "Just wanted to thank you for another amazing class trip to NYC!!! We had a fabulous time as always. Our Landmark Tour Manager was absolutely fantastic! Thank you so very much!", author: "-C.C" },
  { quote: "I believe I speak for all of the chaperones when I say that the trip was great! I especially appreciated you rearranging your schedule to host our visit at a short notice. In addition, the overnight security in the hotel, monitoring the students was much appreciated and I am sure it provided an extra sense of assurance for all of the parents. Looking forward to the next adventure!", author: "-W.H" },
  { quote: "We had a great trip. Our Landmark Tour Manager was very good and informative. She was able to flex our schedule to our needs at the last minute and make changes without any hesitation. This was my first trip with you guys and I enjoyed it! Thanks. If I am in charge of next year’s trip, I will definitely use your company.", author: "-M." },
  { quote: "Thanks so much for another great trip! As always, you and your staff were wonderful and the kids had an amazing experience. Thanks for all you do", author: "-A.B" },
  { quote: "The whole package is excellent. (Tour guide, locations, communication, the hotel was excellent).", author: "-A.B" },
  { quote: "We had such a great time. Our Landmark Tour Manager was AMAZING- I hope she is there in two years so we can request her! I left a few notes on the link. Thanks again for everything.", author: "-B." },
  { quote: "I have traveled with several companies trying to find the right fit. My search is over. I was pleased with every aspect of the experience from the beginning planning stages all the way through our return home. Timing at memorials was excellent. Kids were kept occupied and interested, no time to get bored. Thank you to your team for everything. As long as I am teaching, you will be my travel company.", author: "-L.C" },
  { quote: "Your travel team was fantastic. I have been an educator for over 25 years and have taken many field trips, and this was the first field trip that went off without a hitch. Not only was everything prepared but the relationships formed with the students was amazing. Your team interacted with all of our students and chaperones. From the first email until we said good-bye from the bus there were absolutely no problems. I would highly recommend your company!", author: "-B.H" },
  { quote: "Just a note of thanks to you and your entire team! We had an amazing time in NYC and Carolina and Maggy were wonderful to us and to our students. They were extremely professional and fun! They made the trip easy and were open to any changes that we needed in an instant! Happy and cheerful all the time. Know that we will be booking any additional trips with Landmark Educational Tours in the future. My best to our tour guides and your company.", author: "-I.O" },
]

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={<>What Educators <em>Say</em></>}
        subtitle="Hear directly from the teachers and group leaders who have traveled with Landmark Educational Tours."
        image="/images/landmark/savannah-hero.jpg"
        breadcrumb={[{ label: 'Testimonials' }]}
      />
      <section className="ile-section ile-section--cream">
        <div className="ile-container">
          <div className="ile-center lm-narrow"><span className="ile-eyebrow">In their words</span><h2 className="lm-h2-amber">Read what our customers have to say about us</h2></div>
          <div className="lm-testimonial-grid">
            {REVIEWS.map((r, i) => (
              <figure className="lm-testimonial" key={i}>
                <div className="lm-quote-mark" aria-hidden="true">&ldquo;</div>
                <blockquote>{r.quote}</blockquote>
                <figcaption>{r.author}</figcaption>
              </figure>
            ))}
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Plan Your Trip</Link>
          </div>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "Testimonials", path: "/testimonials/" },
      ])} />
    </>
  )
}
