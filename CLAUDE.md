# CLAUDE.md — Working rules for the Landmark website

These rules apply to every session. Follow them exactly.

## How to work with Briana
- Go one step at a time, in plain English. Tell her exactly what to click.
- If a command needs typing or clicking (sign-in, passwords, anything interactive),
  do NOT run it. Give her the exact command to paste into her own Terminal and wait
  until she says it's done.
- Never leave a long-running command in the foreground. Start the website preview in
  the background so the chat doesn't freeze.
- If something fails, explain it plainly and ask. Never work around it.

## Git & GitHub
- Repo lives at `~/landmark-site` (in HOME, NOT Documents/Desktop — those sync to
  iCloud and break it).
- Briana now has **Write access to `gbarrera74/landmark` directly**. The old
  fork-and-PR workflow is retired. If `~/landmark-site` still points at the fork
  (`brianarose94/landmark`), re-clone from `gbarrera74/landmark` — the fork's `main`
  is months behind and will conflict with everything.
- Work on a NEW branch, never commit straight to `main`.
- Open a pull request to `gbarrera74/landmark` for every change:
  `gh pr create --repo gbarrera74/landmark`.
- Briana may merge her own PRs. The PR still gets opened first — it is the record of
  what changed and why, and it is what makes a mistake easy to undo.

## Deploying
Briana has full deploy authority. She does not need to ask anyone's permission to
push her own work live. Deploy when the work is ready.

- **Briana does not run deploy commands herself. Claude runs them.** Just say
  "deploy" in the chat. No Terminal, no server commands.
- For Claude: the deploy is `ssh briana@67.205.138.250 deploy-landmark`,
  pre-approved in `.claude/settings.json`. Run it when asked. Do not ask Ben for
  permission — that is Briana's call, not his.
- A deploy ships whatever is on `main`, so **merge the PR first**. Deploying before
  merging just re-ships the current live site.
- It takes about two minutes. Success ends with `✓ Deployment complete.` Anything
  else means it did NOT deploy — read the error out rather than retrying blindly.
- **Always check the live page afterwards.** A deploy reporting success is not proof
  the change is live: on 2026-08-10 a deploy reported success and the site kept
  serving the previous day's build for hours. Load the page, confirm the change,
  then call it done.
- Flag to Ben AFTER the fact, not before — he wants to know what shipped, not to
  approve it.

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
