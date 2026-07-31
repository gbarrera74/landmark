/**
 * Third-party partner links that appear in more than one place.
 *
 * The battleface quote URL carries Landmark's partner ID, so a quote started
 * from our site is attributed to us. It is defined once here because it is used
 * on both the public travel-protection page and every school registration page —
 * if those two ever drifted apart, half our quotes would silently stop being
 * credited and nothing on the page would show it.
 */

/** Guided quote flow, tagged with Landmark's battleface partner ID. */
export const BATTLEFACE_QUOTE_URL =
  'https://app.battleface.com/en-us/guided-quote/country-of-residence?partner=1107'

/** Claims portal for travellers who already hold a policy. */
export const BATTLEFACE_CLAIM_URL = 'https://robinassist.com/claims/LandmarkEducationalTours'
