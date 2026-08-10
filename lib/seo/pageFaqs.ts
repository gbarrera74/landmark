import type { Faq } from '@/components/FaqAccordion'

/**
 * Page-level FAQ content, keyed by route.
 *
 * SOURCING RULE — every answer here is grounded in something Landmark already
 * states publicly: the policies on /faq/ (planning process, group minimums,
 * gratuities, rooming, safety, payment) or the destination page's own copy
 * (which programs exist and how long they run). Nothing is invented.
 *
 * In particular there are NO prices, NO claims about availability or seasonal
 * "best times", and NO named suppliers or hotels — those vary per group and are
 * the Travel Consultant's to quote, not the website's to promise. If a question
 * cannot be answered from existing public copy, it does not belong here.
 *
 * These exist for AEO as much as for readers: they are the answer-shaped blocks
 * that AI Overviews, AI Mode, and assistant answers can lift directly. Keep
 * answers self-contained — an answer that only makes sense after reading the
 * rest of the page is useless once it is extracted.
 */

// Facts true of every Landmark trip, reused so the wording stays consistent.
const PRIVATE_GROUP =
  'Every Landmark trip is private to your group. No other group is merged with yours, the itinerary is entirely your own, and your Tour Director is assigned exclusively to you for the whole trip.'
const CUSTOMIZE =
  'Yes. Every itinerary is built around your group, and our Travel Consultants customize the stops, pacing, and inclusions to your curriculum, grade level, dates, and budget. Planning is free until you decide to proceed with a trip.'
const LEAD_TIME =
  'We prefer that trips are booked at least 60 days before departure. Shorter timelines are sometimes possible depending on what you are looking for, so it is always worth calling or emailing to ask.'
const GROUP_MIN =
  'Most vendors require a minimum of 10 travelers to qualify as a group, so that is the practical minimum we plan around. Beyond that, group size is largely a question of what your budget supports.'
const GRATUITIES =
  'Gratuities for your Landmark Tour Director, and for any step-on guides, are not included in the trip cost and should be budgeted for separately.'
const SAFETY =
  'Safety is our first priority. Students receive safety bracelets and a safety briefing at their first meeting with their Tour Director, groups move in chaperone groups or on the buddy system, and the group does not leave an attraction until two separate headcounts have been completed — one by a Tour Director and a final one by the head chaperone. Overnight security at the hotel is available on request.'
const ROOMING =
  'By default we place students in quads and adult chaperones in singles, though you can choose a different arrangement with your Travel Consultant. You submit the rooming list and decide who rooms together. We do our best to keep a group on the same floor or wing, subject to the hotel’s layout and availability.'
const DIETARY =
  'Travelers record dietary restrictions and allergies when they create their account on our portal. Landmark collects those before departure and passes them to the restaurants on your itinerary, and Tour Directors confirm them again at sit-down meals. For meal vouchers or cash allocations, students report their own restrictions at the counter.'
const PAYMENT =
  'Travelers pay through the Landmark portal, where each traveler has their own login and payments run through Stripe. Organizers can also choose to pay by school check.'

/** Shared closers used on the hub/conversion pages. */
const HUB_COMMON: Faq[] = [
  { q: 'Are Landmark trips private to my group?', a: PRIVATE_GROUP },
  { q: 'Can we customize the itinerary?', a: CUSTOMIZE },
  { q: 'How far in advance should we book?', a: LEAD_TIME },
  { q: 'Is there a minimum group size?', a: GROUP_MIN },
]

/** Builds the standard destination set, with the destination-specific bits injected. */
function destinationFaqs(o: {
  place: string
  lengths: string
  seeing: string
  programs: string
}): Faq[] {
  return [
    {
      q: `How long is a typical school trip to ${o.place}?`,
      a: `${o.programs} ${o.lengths} Length is not fixed, though — if none of the published programs fits your calendar, your Travel Consultant will build one that does.`,
    },
    {
      q: `What do students see on a ${o.place} school trip?`,
      a: o.seeing,
    },
    { q: `Can we customize our ${o.place} itinerary?`, a: CUSTOMIZE },
    { q: `Is our ${o.place} trip private to our group?`, a: PRIVATE_GROUP },
    { q: `How far in advance should we book a ${o.place} trip?`, a: LEAD_TIME },
    { q: `What is included in the cost of a ${o.place} trip?`, a: `A Landmark trip is quoted as a package: the private group tour, your custom itinerary, transportation, hotels, attractions, meals, and a professional Tour Director. ${GRATUITIES} Your Travel Consultant will walk you through exactly what your trip includes before you commit to anything.` },
    { q: `How do you keep students safe in ${o.place}?`, a: SAFETY },
  ]
}

export const PAGE_FAQS: Record<string, Faq[]> = {
  '/usa-trips/washington-dc/': destinationFaqs({
    place: 'Washington, D.C.',
    programs: 'Our published Washington, D.C. programs run from',
    lengths:
      '3 days / 2 nights up to 7 days / 6 nights, with 4- and 5-day options in between; the 3-day/2-night format is the most common for a first school trip.',
    seeing:
      'Our D.C. programs center on the National Mall, the Smithsonian museums, and the U.S. Capitol, with the Jefferson and MLK memorials and the National Museum of African American History and Culture among the most-visited stops. Which sites you see depends on your program — we run civics-focused, STEM/STEAM, African American history, 8th grade, and HBCU campus tour itineraries, and each one weights the city differently.',
  }),

  '/usa-trips/new-york-city/': destinationFaqs({
    place: 'New York City',
    programs: 'Our published New York City programs run from',
    lengths: '3 days / 2 nights up to 5 days / 4 nights, plus a summer program.',
    seeing:
      'New York trips are built around Ellis Island and its immigration story, a guided tour of the United Nations, Broadway theater workshops, Wall Street, and the city’s museums and performing arts. Which of those anchor your itinerary depends on whether your group is coming for history, the arts, or global studies.',
  }),

  '/usa-trips/boston/': destinationFaqs({
    place: 'Boston',
    programs: 'Our published Boston programs run from',
    lengths:
      '2 days / 1 night up to 6 days / 5 nights, so Boston works as either a short regional trip or a full week.',
    seeing:
      'Boston trips are anchored by the Freedom Trail and the Revolutionary-era meeting houses, and most groups add tours of the area’s renowned universities. Newport, Rhode Island and Salem, Massachusetts are common add-ons for groups with an extra day.',
  }),

  '/usa-trips/atlanta/': destinationFaqs({
    place: 'Atlanta',
    programs: 'Our published Atlanta programs run from',
    lengths: '2 days / 1 night up to 5 days / 4 nights.',
    seeing:
      'Atlanta trips center on the landmark sites of the Civil Rights Movement, with guided discussions at historic landmarks and interactive museum experiences. HBCU campus visits and Southern history and culture are frequent additions.',
  }),

  '/usa-trips/philadelphia/': destinationFaqs({
    place: 'Philadelphia',
    programs: 'Our Philadelphia student tour is published as a',
    lengths:
      '2-day / 1-night program, which suits groups traveling from the Northeast; longer versions are available on request.',
    seeing:
      'Philadelphia trips focus on Independence Hall, where the Declaration was debated, the Liberty Bell, and the National Constitution Center, along with the city’s historic districts and curated exhibits.',
  }),

  '/usa-trips/orlando/': destinationFaqs({
    place: 'Orlando',
    programs: 'Our Orlando student trip is published as a',
    lengths: '3-day / 2-night program, and can be extended for groups that want more time.',
    seeing:
      'Orlando trips blend hands-on STEM engineering workshops with behind-the-scenes creative programs and leadership and performance opportunities — it is the destination we recommend when a group wants technology and creativity in the same trip.',
  }),

  '/usa-trips/chicago/': destinationFaqs({
    place: 'Chicago',
    programs: 'Our Chicago programs are published starting at',
    lengths: '3 days / 2 nights, and extend for groups that want more time in the city.',
    seeing:
      'Chicago trips draw on the Museum of Science and Industry, the Field Museum, and the Art Institute of Chicago, with architecture boat tours along the Chicago River and the city’s historic neighborhoods rounding out most itineraries.',
  }),

  '/canada/': [
    {
      q: 'Where in Canada does Landmark run school trips?',
      a: 'Our Canada programs center on Quebec City and Montreal, where students practice French, trace colonial history, and experience a culture that feels a world away while staying within easy reach of the Northeast.',
    },
    {
      q: 'Do students need a passport for a school trip to Canada?',
      a: 'Canada is an international destination, so travel documents are required and the requirements differ for students, chaperones, and non-U.S. citizens in your group. We walk every group through exactly what each traveler needs, well ahead of departure — and our blog post on passports for student trips to Quebec covers the common cases in detail.',
    },
    {
      q: 'Is a Canada trip suitable for a French class?',
      a: 'Yes — French immersion is one of the main reasons groups choose Quebec City and Montreal. Students practice the language in a working French-speaking city rather than a classroom, which is the point of the destination.',
    },
    { q: 'Is our Canada trip private to our group?', a: PRIVATE_GROUP },
    { q: 'Can we customize our Canada itinerary?', a: CUSTOMIZE },
    { q: 'How far in advance should we book a Canada trip?', a: `${LEAD_TIME} International trips benefit from more lead time than domestic ones, since every traveler needs valid documents before departure.` },
    { q: 'How do you keep students safe in Canada?', a: SAFETY },
  ],

  '/europe/italy/': [
    {
      q: 'How long is a school trip to Italy?',
      a: 'Our published Italy programs start at 8 days / 7 nights. International trips are longer by necessity — the flights alone consume the better part of two days — and the extra time is what lets a group see more than one city.',
    },
    {
      q: 'What do students see on an Italy school trip?',
      a: 'Italy programs are built around the Roman Forum and the Colosseum, Florence’s Renaissance masterpieces, the ruins of Pompeii, the Uffizi, and the canals of Venice. Groups studying the language also get to practice Italian in the markets, which is often the part students remember.',
    },
    { q: 'Can we customize our Italy itinerary?', a: CUSTOMIZE },
    { q: 'Is our Italy trip private to our group?', a: PRIVATE_GROUP },
    {
      q: 'How far in advance should we book an Italy trip?',
      a: `${LEAD_TIME} For Italy and other international destinations we recommend starting considerably earlier, because every traveler needs a valid passport and international air is easier to secure well ahead of the date.`,
    },
    { q: 'What is included in the cost of an Italy trip?', a: `A Landmark trip is quoted as a package: the private group tour, your custom itinerary, transportation, hotels, attractions, meals, and a professional Tour Director. ${GRATUITIES} Your Travel Consultant will confirm exactly what the trip includes — including how international air is handled — before you commit.` },
    { q: 'How do you keep students safe in Italy?', a: SAFETY },
  ],

  '/central-south-america/costa-rica/': [
    {
      q: 'How long is a school trip to Costa Rica?',
      a: 'Our published Costa Rica program runs 7 days / 6 nights, which is the length that makes the cloud forests, volcanoes, and conservation sites reachable in one trip without rushing students between them.',
    },
    {
      q: 'What do students do on a Costa Rica school trip?',
      a: 'Costa Rica programs are built around hiking lush cloud forests, seeing active volcanoes up close, and learning directly from local conservationists in one of the world’s most biodiverse countries. It is the destination we recommend when a group wants environmental science and sustainability to be the trip rather than a unit.',
    },
    {
      q: 'Is Costa Rica a good fit for a science or environmental class?',
      a: 'It is the most direct fit in our catalog. The country is built around sustainability, and the itinerary puts students in front of conservationists and ecosystems rather than exhibits about them.',
    },
    { q: 'Can we customize our Costa Rica itinerary?', a: CUSTOMIZE },
    { q: 'Is our Costa Rica trip private to our group?', a: PRIVATE_GROUP },
    {
      q: 'How far in advance should we book a Costa Rica trip?',
      a: `${LEAD_TIME} For international destinations we recommend starting considerably earlier, since every traveler needs a valid passport before departure.`,
    },
    { q: 'How do you keep students safe in Costa Rica?', a: SAFETY },
  ],

  '/get-a-quote/': [
    {
      q: 'Does a quote cost anything?',
      a: 'No. You tell us about your group and we build a custom, no-obligation quote. The entire planning process — collecting your dates and destination, personalizing an itinerary, and quoting it — is free until you agree to proceed with a trip.',
    },
    {
      q: 'What do you need from me to build a quote?',
      a: 'The essentials are your destination, your travel dates, and a passenger breakdown — how many students, teachers, and chaperones. From there a Travel Consultant will follow up to fill in the details. If you have never organized a trip before, they can suggest what a sensible itinerary looks like.',
    },
    {
      q: 'What is included in the quote?',
      a: `The quote is built from your itinerary and covers: the private group tour, transportation, hotels, attractions, meals, and a professional Tour Director. ${GRATUITIES}`,
    },
    {
      q: 'What happens after I accept a quote?',
      a: `Your Travel Consultant sends a personalized trip agreement confirming the terms and the payment schedule. Once that is signed, we set up your group's portal and share registration instructions for your travelers. ${PAYMENT}`,
    },
    // Carried over when /plan-a-trip/ was retired into this page (2026-08-10).
    // That page answered the "how does this work" half of the decision while
    // this one answered the "what will it cost" half; the merged page has to
    // cover both or the retirement loses content that was ranking.
    {
      q: 'What does the trip planning process look like?',
      a: 'Trip organizers contact Landmark to request a private group tour. A Travel Consultant collects the basics — dates, destination, passenger breakdown — then personalizes an itinerary to match what the group wants, and provides a quote that mirrors it. You can customize practically anything, and all of it is free until you agree to proceed.',
    },
    {
      q: 'What if I have never organized a school trip before?',
      a: 'That is common, and it is what the Travel Consultants are for. They will suggest what belongs on the itinerary for your destination, grade level, and time frame rather than expecting you to arrive with a plan.',
    },
    { q: 'How are hotel rooms assigned?', a: ROOMING },
    ...HUB_COMMON,
  ],

  '/destinations/': [
    {
      q: 'Where does Landmark run student trips?',
      a: 'We run school trips across the United States — Washington D.C., New York City, Boston, Philadelphia, Atlanta, Orlando, Chicago and more — and internationally to Canada, Italy, Costa Rica, and other destinations. Every destination is offered as a private, customizable group program.',
    },
    {
      q: 'How do we choose a destination for our group?',
      a: 'Start from what you are teaching. Civics and American history point to Washington D.C. or Philadelphia; the Revolution and higher education to Boston; immigration and the arts to New York; the Civil Rights Movement to Atlanta; environmental science to Costa Rica; classical and Renaissance studies to Italy; French language to Quebec City and Montreal. A Travel Consultant can talk it through if more than one fits.',
    },
    ...HUB_COMMON,
    { q: 'How do you keep students safe on a trip?', a: SAFETY },
  ],

  '/usa-trips/': [
    {
      q: 'Which U.S. cities does Landmark run school trips to?',
      a: 'Our U.S. programs include Washington D.C., New York City, Boston, Philadelphia, Atlanta, Orlando, Chicago, New Orleans, San Antonio, Charleston, Savannah, Williamsburg, Mackinac Island, New Mexico, Los Angeles, and Seattle.',
    },
    {
      q: 'How long is a typical domestic school trip?',
      a: 'Most domestic programs run between 2 days / 1 night and 5 days / 4 nights, with longer formats available in destinations like Washington D.C. and Boston. The right length usually comes down to how far your group is traveling and how many school days you can use.',
    },
    ...HUB_COMMON,
    { q: 'What is included in the cost of a domestic trip?', a: `A Landmark trip is quoted as a package: the private group tour, your custom itinerary, transportation, hotels, attractions, meals, and a professional Tour Director. ${GRATUITIES} Your Travel Consultant will confirm exactly what is included before you commit.` },
    { q: 'How are dietary restrictions handled?', a: DIETARY },
  ],

  '/themes/': [
    {
      q: 'What is a themed student trip?',
      a: 'A themed trip is built around a subject rather than a city — the destination is chosen to serve the curriculum. Our themes include HBCU campus tours, U.S. history and civics, performing arts, Spanish and French immersion, African American history, Scouts programs, Yellowstone, and private-school programs.',
    },
    {
      q: 'Can a theme be combined with a specific destination?',
      a: 'Yes, and that is usually how it works. A civics theme most often lands in Washington D.C., African American history in Atlanta or D.C., French immersion in Quebec City or Montreal. If you have both a theme and a destination in mind, your Travel Consultant will build to both.',
    },
    ...HUB_COMMON,
    { q: 'How do you keep students safe on a themed trip?', a: SAFETY },
  ],
}
