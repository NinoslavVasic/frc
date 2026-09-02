# Deploy checklist

Everything below is manual. Nothing in this repo runs a build.

Files are currently set to **www.moonshot-properties.nyc** as the canonical host.
Section 4 has the one-line change if you decide on the bare domain instead.

---

## 1. Commit these to NinoslavVasic/frc (repo root)

```
index.html
404.html
CNAME
_headers
robots.txt
sitemap.xml
site.webmanifest
README.md
DEPLOY.md
.nojekyll
.gitignore
.well-known/security.txt
favicon.ico
favicon.svg
favicon-16.png
favicon-32.png
favicon-180.png
favicon-192.png
favicon-512.png
favicon-maskable-512.png
images/blanchard.webp
images/blanchard-card.webp
images/skillman.webp
images/46th-ave.webp
images/og-image.jpg
```

## 2. Delete these from the repo

```
images/skillman.jpg          replaced by skillman.webp
images/46th-ave.jpg          replaced by 46th-ave.webp
images/eight_properties_signature_logo.png   old brand, unused by the page
```

The old `images/blanchard.webp` is overwritten by the resized one (2560 px down
to 1600 px). Same filename, so it is a normal commit.

Do not skip the two `.jpg` deletions. `index.html` asks for `.webp` only, so
leaving them costs 746 KB of dead weight in the repo.

## 3. Settings → Pages

1. Source: **Deploy from a branch** → `main` → `/ (root)`.
2. Custom domain: type `www.moonshot-properties.nyc` and save. It must match the
   `CNAME` file exactly or Pages will overwrite one with the other.
3. Wait for "DNS check successful". The TLS certificate takes a few minutes.
4. Tick **Enforce HTTPS** once the certificate is issued. Not before — it greys
   out until then.

## 4. DNS at your registrar

| Type  | Name | Value |
| ----- | ---- | ----- |
| CNAME | www  | `ninoslavvasic.github.io` |
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |

The CNAME target is GitHub's Pages edge for your whole account, not a pointer to
the `NinoslavVasic.github.io` repo. GitHub picks the repo by matching the
incoming hostname to the Custom domain field, which only `frc` will hold.

**If you would rather the bare domain be canonical:** change `CNAME` to
`moonshot-properties.nyc`, set the same value in Settings → Pages, keep only
the four A records, and drop the www CNAME. Then run this find-and-replace
across `index.html`, `robots.txt`, `sitemap.xml` and `README.md`:
`https://www.moonshot-properties.nyc` → `https://moonshot-properties.nyc`.

## 5. Security headers

`.nojekyll` is now required, not optional. Pages runs Jekyll by default, and
Jekyll silently drops any file or folder whose name starts with `_` or `.` —
that is `_headers` and the whole `.well-known/` folder. An empty `.nojekyll`
in the repo root turns Jekyll off and publishes them verbatim.

The Content-Security-Policy now ships as a `<meta http-equiv>` tag in
`index.html` and `404.html`, because that is the only mechanism Pages honours.
It covers the injection-facing directives: `default-src`, `script-src`,
`style-src`, `img-src`, `connect-src`, `form-action`, `base-uri`,
`object-src` and `upgrade-insecure-requests`.

Four headers cannot be set from a meta tag at all and are still inert on Pages:
`Strict-Transport-Security`, `X-Frame-Options` / `frame-ancestors`,
`Permissions-Policy` and `Cross-Origin-Opener-Policy`. Clickjacking and HSTS
are the two that actually matter. Two ways to make them real:

- **Cloudflare in front of Pages.** Point DNS at Cloudflare, set the record to
  Proxied (orange cloud), then Rules → Transform Rules → Modify Response Header,
  matching `hostname eq "www.moonshot-properties.nyc"`, and add each header from
  `_headers` by hand.
- **Move hosting to Cloudflare Pages or Netlify.** Both read `_headers`
  directly, no rules to write.

Until one of those is in place the site ships with CSP but no HSTS and no
framing protection. Pages does send its own HSTS header once **Enforce HTTPS**
is ticked, so that gap is mostly covered; `frame-ancestors` is not.

Do not submit the domain to hstspreload.org yet. That needs the `preload`
directive on the response, which Pages does not send.

## 6. Check after it is live

- [ ] `https://www.moonshot-properties.nyc/` loads over HTTPS with the padlock
- [ ] The bare domain redirects to the www host
- [ ] Favicon appears in the tab
- [ ] The map draws when you scroll to the neighborhood section
- [ ] Submit the form once with your own address and confirm the email arrives
- [ ] Paste the URL into a Slack or iMessage window and check the share card
- [ ] Open it on a phone: nav links hide, the leasing card stacks under the listings
- [ ] `https://www.moonshot-properties.nyc/nonsense` shows the 404 page
- [ ] `/.well-known/security.txt` returns plain text, not a 404 — if it 404s,
      `.nojekyll` is missing or was not committed
- [ ] DevTools → Console is clean. A CSP violation there means the meta policy
      is blocking something the page needs. Note that OSM is served from the
      bare host `tile.openstreetmap.org`, and a CSP wildcard like
      `https://*.tile.openstreetmap.org` does NOT match a bare host — both
      forms must stay listed in `img-src` or the map loads with blank tiles
- [ ] Run the URL through securityheaders.com and observatory.mozilla.org
- [ ] Lighthouse: install prompt works, icons resolve, no manifest warnings

## 7. Still outstanding

- Interior photography and floor plans for Suites 100 and 201 at The Blanchard
- Photographs of the finished second floor at Skillman
- Real URLs for tenant portal, maintenance requests and rent payment. The footer
  links currently open a pre-addressed email to admin@ instead.
- ~~Confirm the three map pin coordinates~~ Done 2026-09-02. Owner-supplied
  DMS readings converted to decimal in `SITES`:
  Blanchard 40.740942, -73.949336 / 10-15 46th Ave 40.747111, -73.951894 /
  33-02 Skillman 40.746553, -73.930789
