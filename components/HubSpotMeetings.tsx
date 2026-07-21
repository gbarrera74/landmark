// Embeds a HubSpot Meetings scheduler (the "book a call" widget the live
// Plan-a-Trip page uses). We render the scheduler as a direct iframe rather than
// relying on MeetingsEmbedCode.js — that script only auto-hydrates containers
// present at initial page load, so in an App-Router SPA a late-injected
// container is often skipped. A plain iframe with ?embed=true is the documented,
// reliable equivalent.

export default function HubSpotMeetings({
  slug = 'marc462/round-robin-intro-sales-meeting',
}: {
  slug?: string
}) {
  return (
    <iframe
      className="lm-meetings"
      src={`https://meetings.hubspot.com/${slug}?embed=true`}
      title="Book a call with a Landmark Travel Consultant"
      loading="lazy"
    />
  )
}
