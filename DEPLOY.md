# Deploy — Landmark Educational Tours (Next.js rebuild)

Pull `main`, build on the server, serve. The build script runs its own
`npm install`, so no separate install step is needed.

```bash
git pull origin main
npm run build      # runs `npm install --no-audit --no-fund --prefer-offline && next build`
npm start          # or serve the built app behind your web server / process manager
```

## The one env var that matters: `SITE_URL`

Indexability is controlled entirely by `SITE_URL`, and it is **fail-safe (defaults
to noindex)**. Set it correctly per environment:

| Environment | `SITE_URL` | Result |
|---|---|---|
| **Staging** | **unset** (or the staging URL) | `robots.txt` = `Disallow: /` **and** `X-Robots-Tag: noindex, nofollow` on every response. Not indexable. |
| **Production** | `https://landmarkeducationaltours.com` | Indexable; `/register/` still disallowed; no noindex header. |

> ⚠️ Do **not** set `SITE_URL=https://landmarkeducationaltours.com` on staging — that
> is the only way to accidentally make staging indexable. When in doubt, leave it unset.

Production analytics/Ads/HubSpot tracking is separately gated to the exact
`landmarkeducationaltours.com` / `www.` host, so it never fires on staging.

## Staging must be password-protected

The HubSpot lead forms are **live** on staging (kept 1:1 with production). Put
**HTTP Basic Auth** on the staging vhost before sharing the URL — otherwise a
stray visitor could submit a real lead into the CRM (HubSpot portal 9241531).

## Production cutover (later, separate step)

Only when going live: set `SITE_URL` as above, point `landmarkeducationaltours.com`
DNS/origin at this app, then purge the Cloudflare cache. Full checklist lives in
the (local) `CUTOVER-RUNBOOK.md`.
