/**
 * Shared standard content for the per-school registration pages.
 *
 * These sections are IDENTICAL for every school (they were duplicated into each
 * WordPress page). Keeping them here means Briana/Michaela can change the FAQ,
 * inclusions, registration steps or cancellation policy ONCE and it updates on
 * all 35+ school pages at the same time.
 *
 * Copy mirrors the live Landmark registration pages (e.g. Bennett Venture Academy).
 */

/** Packing-list infographic (shared image, snapshotted from the live site). */
export const PACKING_LIST_IMAGE = '/register/Packling-List-for-Website-Trial.webp'
export const PACKING_LIST_ALT =
  'Landmark Educational Tours packing list infographic — what to bring on your school trip'

export const INCLUSIONS_HTML = `
<p>Please refer to your trip organizer or sample itinerary for your group&rsquo;s specific inclusions.</p>
<p>At Landmark Educational Tours, every school trip is thoughtfully designed to give students a meaningful, educational, and memorable experience. Each school chooses the inclusions that best fit their goals, schedule, and budget, which means trip details may vary from group to group. No matter what your school selects, all Landmark trips feature a well-planned itinerary, engaging attractions, and educational experiences that bring each destination to life.</p>
<p>Your student will also be supported by a Landmark Tour Director, who helps coordinate logistics and ensures the trip runs smoothly from start to finish.</p>
<p>Our team works closely with your school to design a trip that is safe, enriching, and enjoyable for every traveler. No matter the destination, Landmark Educational Tours is committed to delivering high-quality experiences that inspire learning beyond the classroom.</p>
`

export const HOW_TO_REGISTER_HTML = `
<h3>Landmark Educational Tours Registration Process</h3>
<p>Registering for your Landmark Educational Tours trip is simple, secure, and designed to give families complete flexibility. Our online traveler portal allows you to easily sign up, manage traveler details, and make payments &mdash; all in one convenient place.</p>
<ol>
  <li><strong>Access the Registration Portal.</strong> Visit your school&rsquo;s unique registration link to begin the sign-up process. The link will take you directly to Landmark Educational Tours&rsquo; secure online registration page.</li>
  <li><strong>Create Your Account.</strong> On the Sign Up page, you&rsquo;ll create a new traveler account. Choose whether you are registering your student or yourself as a paying parent, then enter all required traveler information. This helps us ensure accurate rosters, rooming lists, and travel details.</li>
  <li><strong>Explore Your Account Dashboard.</strong> Once registered, you&rsquo;ll gain access to a personalized dashboard that includes your trip itinerary and package details, traveler information, payment schedule, and payment methods and receipts. For the best experience, we recommend accessing the dashboard from a desktop or laptop.</li>
  <li><strong>Make a Payment.</strong> Your dashboard includes a dedicated payment page in the left-hand sidebar. Before checking out, all participants must agree to Landmark&rsquo;s terms and conditions. We encourage families to review the recommended payment schedule and stay current with all deadlines to ensure smooth processing for flights, hotels, and reservations.</li>
  <li><strong>Flexible Payments with Affirm.</strong> Landmark Educational Tours has partnered with Affirm to make travel more accessible for families. Affirm allows you to break your trip cost into manageable monthly payments &mdash; with no hidden fees and transparent terms. If you choose Affirm at checkout, simply follow the steps provided during registration; Affirm will provide instant approval decisions and your customized repayment plan.</li>
</ol>
`

export const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'How are dietary restrictions dealt with?',
    a: 'When registering your students on the portal, there will be an opportunity to include dietary restrictions. Landmark will notify all meal vendors prior to the group&rsquo;s visit, and the Tour Directors will reconfirm with the restaurant before and during the meal. There will be a few instances in which students are given meal vouchers and can decide which meal vendors they want to eat at &mdash; at that point, students are also encouraged to communicate their own dietary restrictions.',
  },
  {
    q: 'Can I get in touch with my traveler on the trip?',
    a: 'Yes! If your student has a cell phone, you can text them periodically throughout the trip. You can also arrange to call your student during free time on the trip (for example, the motorcoach ride back to the hotel, or at the hotel). If students are too young to own cell phones, it&rsquo;s the responsibility of the trip organizers and chaperones to determine the best option for communication between students and their parents.',
  },
  {
    q: 'What about safety on the trip?',
    a: 'Safety is our top priority. Students are given safety bracelets upon their first interaction with their Tour Director, along with the first of multiple safety briefings. During free exploration, groups always travel in chaperone groups or follow the buddy system (depending on the age of the group and at the discretion of the trip organizer). The group will not leave an attraction until at least two formal head counts are done &mdash; one by a Tour Director and a final one conducted by the head chaperone.',
  },
  {
    q: 'What if my child loses an item on the trip?',
    a: 'Tour Directors do their best to inform students on the safest ways to travel. They are also the last to leave any dining room or meeting location to ensure all belongings have been collected, while frequently reminding students to check for their wallet, keys, phone, and bags. Have the student notify the Tour Director and they will contact whoever they can to attempt to track down the item.',
  },
]

export const HOW_TO_CANCEL_HTML = `
<p>To cancel a trip with Landmark Educational Tours, please send an email to <a href="mailto:Hello@landmarkeducationaltours.com">Hello@landmarkeducationaltours.com</a> with your cancellation request. Be sure to include the student&rsquo;s full name, the school or group name, and the reason for cancellation so our team can locate the reservation and process the request accurately.</p>
<p>Once we receive your email, we will review the details, apply any applicable policies, and follow up with next steps regarding your trip status and any potential refunds or credits.</p>
`
