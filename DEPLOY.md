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
favicon.ico
favicon-16.png
favicon-32.png
favicon-180.png
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

GitHub Pages cannot set response headers, so `_headers` does nothing on Pages
alone. Two ways to make it real:

- **Cloudflare in front of Pages.** Point DNS at Cloudflare, set the record to
  Proxied (orange cloud), then Rules → Transform Rules → Modify Response Header,
  matching `hostname eq "www.moonshot-properties.nyc"`, and add each header from
  `_headers` by hand.
- **Move hosting to Cloudflare Pages or Netlify.** Both read `_headers`
  directly, no rules to write.

Until one of those is in place the site is still fine — it just ships without
CSP, HSTS and the rest.

## 6. Check after it is live

- [ ] `https://www.moonshot-properties.nyc/` loads over HTTPS with the padlock
- [ ] The bare domain redirects to the www host
- [ ] Favicon appears in the tab
- [ ] The map draws when you scroll to the neighborhood section
- [ ] Submit the form once with your own address and confirm the email arrives
- [ ] Paste the URL into a Slack or iMessage window and check the share card
- [ ] Open it on a phone: nav links hide, the leasing card stacks under the listings
- [ ] `https://www.moonshot-properties.nyc/nonsense` shows the 404 page

## 7. Still outstanding

- Interior photography and floor plans for Suites 100 and 201 at The Blanchard
- Photographs of the finished second floor at Skillman
- Real URLs for tenant portal, maintenance requests and rent payment. The footer
  links currently open a pre-addressed email to admin@ instead.
- Confirm the three map pin coordinates against the recorded addresses:
  `SITES` near the top of the `<script>` block in `index.html`
