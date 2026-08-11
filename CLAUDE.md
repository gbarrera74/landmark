# CLAUDE.md — Working rules for the Landmark website

These rules apply to every session. Follow them exactly.

## How to work with Briana
- Go one step at a time, in plain English. No jargon.
- **Run the commands yourself.** She should not be typing anything into a Terminal.
  The only exception is something genuinely interactive that you cannot do for her
  (a password prompt, a browser sign-in) — then give her one line at a time, on its
  own, and wait. Never hand her two commands at once: the second gets pasted into
  the first one's prompt and breaks it.
- Never leave a long-running command in the foreground. Start the preview in the
  background so the chat doesn't freeze.
- If something fails, explain it plainly and say what you are doing about it. Never
  work around it silently.

## How to make a change

Four steps. Claude does all of them — Briana never needs Terminal.

1. **Make the change.** Ask for what you want in plain English.
2. **Look at it.** Claude starts the local preview so you can see the change on a
   copy of the site running on this Mac. Nothing is public yet.
3. **Confirm it is right.** If it is not, say so and go back to step 1.
4. **Deploy.** Say "deploy" and Claude ships it to the live website.

Briana has full deploy authority. She does not need anyone's permission.

### For Claude
- Work directly on `main`. No feature branches, no pull requests — Briana reviews
  the change in the preview, and that IS the review.
- Before deploying: commit, push to `main`, THEN run the deploy. A deploy ships
  whatever is on `main`, so an unpushed change will not go live.
- Start the preview with the `landmark-dev` config (port 3057). Always show her the
  actual page the change affects, not just a description of what you did.
- Deploy with `ssh briana@67.205.138.250 deploy-landmark` — pre-approved in
  `.claude/settings.json`. Do NOT ask Ben; that is Briana's call.
- It takes about two minutes. Success ends with `✓ Deployment complete.` Anything
  else means it did NOT deploy — read the error out rather than retrying blindly.
- **Check the live page afterwards.** A deploy reporting success is not proof: on
  2026-08-10 a deploy reported success while the site served the previous day's
  build for hours. Load the real page and confirm before saying it is done.
- If something goes wrong, `git revert` the commit and deploy again. The server also
  keeps the previous build for rollback.

## Repo
- Lives at `~/landmark-site` (in HOME, NOT Documents/Desktop — those sync to iCloud
  and break it).
- It is `gbarrera74/landmark`. Briana has write access.

## Hard "never" rules
- NEVER fill in or submit any form on the site or a preview, and never book a time in
  any calendar. They hit the real live CRM and create real leads. If asked to test a
  form, REFUSE. (HubSpot's Collected Forms captures submissions even when the network
  request is mocked — five fake leads leaked this way once.)
- Never use `--force`, `git reset --hard`, or `--dangerously-skip-permissions`.
- Never use sudo, force flags, or skip-permission flags to work around an error.
- Never edit `package.json`, `next.config`, or any config file just to make an error
  go away.
- Never touch anything belonging to the other companies (Juniper Tours, Go Blue
  Tours, GO Educational, Irish Life Experience). Separate repos, separate servers,
  separate sites — they must not reference each other.

## Things that will catch you out
- **Blog posts need registering.** Adding `content/blog/<slug>.json` is not enough —
  the post also needs an entry in `content/blog/index.json` (slug, title, date,
  excerpt, hero, categories, readingMinutes) or it silently will not build. No error
  is shown; the page just will not exist.
- **The quote form is a HubSpot form inside an iframe.** Field labels, options and
  validation are controlled in HubSpot, not in this repo. Styling is injected into
  the iframe by `lib/hubspotFormEnhance.ts`.
- **Internal links should point at the final URL**, not one that redirects. If a link
  goes through a 301 it wastes the SEO signal. Check with:
  `curl -s -o /dev/null -w '%{http_code}' https://landmarkeducationaltours.com/your-path/`
  — 200 is good, 308 means find the real URL.
- **Images must exist before you reference them.** A missing hero image does not fail
  the build, it just renders broken on the live site.

## Environment notes
- Node and GitHub CLI live in `/usr/local/bin`. If a tool reports "command not found,"
  it's a PATH issue — check `/usr/local/bin` and `/opt/homebrew/bin` first.
- `npm install` takes several minutes and can look frozen — that's normal. Yellow
  "deprecated" warnings are normal, not errors.
- Build with `npm run build`. Preview with the dev server on port 3057.
