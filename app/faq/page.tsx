/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import FaqAccordion from '@/components/FaqAccordion'
import BrochureBand from '@/components/BrochureBand'
import JsonLd from '@/lib/seo/JsonLd'
import { breadcrumb } from '@/lib/seo/schemas'

const FAQS = [
  { q: "What is the trip planning process like?", a: "First, trip organizers contact Landmark to request a private group tour. Our Landmark Travel Consultants reach back to collect information regarding the trip; i.e dates, destination, passenger breakdown. Next, our team personalizes a trip itinerary to match the group’s wants and needs. We provide a trip quote to mimic the inclusions of the itinerary. You have the ability to personalize your trip to include practically anything you want. If you haven’t never traveled before, our Landmark Travel Consultants can provide a number of suggestions on the itinerary for you. This is all free until you agree to proceed with a trip." },
  { q: "Does Landmark offer private or public tours?", a: "We offer private group tours at this time. This means YOU decide who travels on your trip. No other group will interfere with your group. Your itinerary is entirely your own, and your tour manager will be assigned exclusively to you for the entirety of your trip." },
  { q: "Can I customize a tour?", a: "Absolutely! Our Landmark Travel Consultants are experts in customizing and personalizing a trip itinerary with your desired wants and needs!" },
  { q: "When is the latest I can plan a trip?", a: "We prefer that you book a trip 60 days before departure. Depending on what you are looking for, we may be able to help. Don’t hesitate to shoot us an email or give us a call." },
  { q: "Does Landmark have passenger minimums?", a: "It is ultimately dependent on what you are willing to pay. Most vendors require a minimum of 10 travelers to qualify as a group, so it would make sense to maintain that standard." },
  { q: "How are the hotel accommodations situated?", a: "Hotel availability isn’t confirmed until the time of group deposit. During the trip planning process, your Landmark Travel Consultant will provide a tour quote featuring the inclusion of the hotel. You can even request a specific hotel for us to quote, if you wish. By default, we usually situate the students in quads and all parents, teachers and other adult chaperones in singles. Of course, depending on your budget, you can decide what kind of rooms you want to situate everyone in. This is to be discussed with your Landmark Travel Consultant during the trip planning process. Closer to the trip departure, we will request a rooming list from you. You decide which travelers will dorm with who! We do our best to keep everyone on the same floor and/or same wing. We can also request to have female travelers by one wing, and male travelers on the other wing or floor, however this is entirely dependent on the hotel’s design and availability. There is no guarantee the hotel can accommodate all those specific requests. We will do our best to keep you in the loop of what can and cannot be accommodated." },
  { q: "Do Landmark trips offer overnight security?", a: "We can provide you with overnight security if you wish! If not, just let your Landmark Travel Consultant know." },
  { q: "Can the group use public transportation?", a: "Yes! In some cases, this can actually be the most efficient and affordable way to travel! Your Landmark Travel Consultant can help determine when it is best to use public transportation (depending on the destination)." },
  { q: "How are dietary restrictions dealt with?", a: "When your travelers create accounts on our portal system, they will have an opportunity for them to state any and all dietary restrictions. Landmark will collect the dietary restrictions before the trip, and report all restrictions and allergies to designated restaurants. Landmark Leaders will also ask who specifically has any dietary restrictions on the trip to better direct the servers at sit down meals. When travelers use a meal voucher or cash allocation, however, it will be the students’ responsibility to report their restrictions and allergies." },
  { q: "Can we stop at a designated souvenir shop?", a: "During the trip planning process, it is important to communicate all desired stops you wish to make while traveling. Whatever is not exclusively noted on the itinerary cannot be assumed to considered because the logistics and timing on the itinerary is meticulously considered. Long story short, yes you can! Just be sure to let your Landmark Travel Consultant know your expectations!" },
  { q: "How do groups pay for the trip?", a: "Landmark Educational Tours has created their own portal system. Travelers can access their account at anytime with their login information. We operate through the payment processor Stripe. Organizers can also opt into paying by school check." },
  { q: "What happens after I commit to a trip?", a: "Your Landmark Travel Consultant will send you your personalized trip agreement to confirm the terms and conditions, and payment schedules of the trip. Then, we can share instructions for how your group will register on the portal." },
  { q: "Do travelers need extra money for tips and gratuities?", a: "All tips and gratuities are included in the trip cost! Of course, you can choose to tip additionally, it is to your own discretion." },
  { q: "Dress Codes?", a: "Students are free to dress however they wish. If certain schools or organizations follow a dress code, they often continue this standard on the trip. This is to the organizer’s discretion, not Landmark. Depending on the attraction, it may be more appropriate to dress up (Ex. Touring the United Nations Headquarters, Wreath Laying at Arlington National Cemetery, etc.) , but any questions regarding dress code should be redirected to the trip organizer or your Landmark Travel Consultant. The most important tidbit for us is to dress for the weather!" },
  { q: "What if my child loses an item on the trip?", a: "Landmark Leaders do their best to inform students on the safest ways to travel. They are also the last to leave any dining room and meeting location to ensure all belongings have been collected, while frequently reminding students to check for their wallet, keys, phone and bags. This doesn’t mean, however, students won’t lose an item regardless. Have the student notify the Landmark Leader and they will contact whoever they can to attempt to track down the item. If the Leaders can manage a few free moments to return to the last visited attraction, they will, but understand that it will not be their primary concern. Ultimately, Landmark Leaders will do their best to locate any and all lost items, but its not their responsibility. Students should refrain from packing anything but the essentials, while storing them safely in their bag when not in use." },
  { q: "Can I get in touch with my traveler on the trip?", a: "Yes! If your student has a cell phone, you can text your student periodically throughout the trip. You can also arrange to call your student during our free time on the trip (Ex. motorcoach ride back to the hotel, at the hotel, etc.). If students are too young to own cell phones, it’s the responsibility of the trip organizers and chaperones to determine what the best option is to communicate between students and their parents." },
  { q: "What happens if we are running late on the trip?", a: "Running late isn’t unheard of in the travel industry. This can be because of vendor mistakes, tardiness from appointments before us or traffic. Your itinerary is created to prepare for such events, but we can’t anticipate everything. Your Landmark Leader will navigate all timing logistics on the trip so you don’t need to worry! Tardiness may mean that time spent at an attraction or meal may be cut short, but this will all be communicated with the head chaperone on the trip. This is why it’s very important to arrive to designated meeting points on time." },
  { q: "Does Landmark offer travel protection plans?", a: "Please visit our Travel Protection page." },
  { q: "What about saftey on the trip?", a: "Safety is our top priority. Students will be given safety bracelets upon their first interaction with their Landmark Leader, along with the first of multiple safety briefings. When given free exploration, groups will always be traveling in chaperone groups or following the buddy system (depending on the age of the group, but to the discretion of the trip organizer). The group will not leave an attraction until at least two formal headcounts are done (one by a Landmark Leader, and final one conducted by head chaperone) ." },
  { q: "Can Landmark control the weather on my trip?", a: "Nope! That is why it is crucial to follow our suggested Packing List. Landmark Leaders can do their best to modify itineraries on spot weather permitting, but some things are set in stone. Consider this part of the adventure! Check your trusty weather app while packing for your trip, and in the hotel in the morning. Always pack an umbrella, sunscreen, layers and good walking shoes ." },
]

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="We're here to help"
        title={<>Frequently Asked <em>Questions</em></>}
        subtitle="Find answers about planning, traveling, and staying safe on your Landmark group tour."
        image="/images/landmark/hero-nyc.jpg"
        breadcrumb={[{ label: 'FAQ' }]}
      />
      <section className="ile-section ile-section--white">
        <div className="ile-container lm-faq-wrap">
          <div className="ile-center lm-narrow"><p className="ile-lead lm-center-lead">Our Travel Consultants are always ready to answer your questions. Look below to find how to contact us as well as some answers to our most frequently asked questions.</p></div>
          <div style={{ marginTop: 28 }}>
            <FaqAccordion items={FAQS} />
          </div>
          <div className="ile-center lm-after-grid">
            <Link href="/get-a-quote/" className="ile-btn ile-btn--primary">Still have questions? Get a Quote</Link>
          </div>
        </div>
      </section>
      <BrochureBand />
      <JsonLd data={breadcrumb([
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq/" },
      ])} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }} />
    </>
  )
}
