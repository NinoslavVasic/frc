# Moonshot Properties

Marketing site for Moonshot Properties, a privately held portfolio of three
commercial buildings in Long Island City.

**Live:** https://www.moonshot-properties.nyc/

## Portfolio

- **The Blanchard** — 21-10 51st Avenue / 2109 Borden Avenue (220,000 SF, creative office)
- **33-02 Skillman Avenue** — acquired June 2026 (104,000 SF, flex / office)
- **10-15 46th Avenue** — Hunters Point (60,000 SF, loft / creative)

## Stack

- Single-file HTML with one `<style>` and one `<script>`. No build step, no dependencies to install.
- Fonts from Google Fonts (Fraunces + Inter Tight), `display=swap`.
- Map: Leaflet 1.9.4 + OpenStreetMap tiles, loaded from unpkg with SRI hashes,
  injected only when the map scrolls into view.
- Inquiry form posts to Web3Forms.
- Hosted on GitHub Pages.

## Files

```
.
├── index.html          # the site
├── 404.html            # GitHub Pages not-found page
├── CNAME               # custom domain
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── favicon.ico         # + favicon-16 / -32 / -180.png
└── images/
    ├── blanchard.webp        1600×1200, 275 KB
    ├── blanchard-card.webp   900×675, 99 KB — flagship card background
    ├── skillman.webp         791×629, 74 KB
    ├── 46th-ave.webp         1350×900, 206 KB
    └── og-image.jpg          1200×630 — social share card
```

## Updating

**Listings** live in the `.list` block inside `index.html`, and the space
dropdown lives in the form directly below. Change both together — the dropdown
value is what arrives in the inquiry email.

**Photos:** replace a file in `images/` and keep the filename. Resize to
1600 px wide or less and save as WebP before committing; the `width` and
`height` attributes in `index.html` must match the new file, or the page
will shift as images load.

## Performance and security notes

- Images are WebP, sized down, with intrinsic `width`/`height` and
  `loading="lazy"`. Total image weight on first paint is under 400 KB.
- Leaflet (about 150 KB) is not requested until the map is 300 px from the
  viewport, so it costs nothing on load.
- Security headers live in `_headers`, not in the HTML. A
  `Content-Security-Policy` meta tag inside `index.html` would also apply to
  any editor or preview tool that opens the file, which breaks them; a header
  applies only to the served page. `_headers` covers CSP, HSTS,
  `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy` and long cache lifetimes for `/images/*`.
- The CSP restricts scripts, styles, fonts, images and `fetch` to the origins
  this page actually uses. It permits `'unsafe-inline'` for the inline
  `<style>` and `<script>`, which a single-file no-build site requires.
  Moving the CSS and JS into their own files and adding hashes would remove
  that allowance.
- **GitHub Pages ignores `_headers`** and cannot set custom headers at all. To
  get the policy live, put Cloudflare in front of the Pages origin (proxied DNS,
  orange cloud) and add a Transform Rule → Modify Response Header for
  `hostname eq "www.moonshot-properties.nyc"`, copying each name and value out of
  `_headers`. Cloudflare Pages and Netlify read the file directly and need no
  extra step. Enable **Enforce HTTPS** in the Pages settings either way.
- The form carries a hidden honeypot field and validates name and email before
  it posts. The Web3Forms access key is public by design; it identifies the
  destination inbox and cannot read anything.
- `referrer` is `strict-origin-when-cross-origin`.

## DNS for the custom domain

The canonical host is **www.moonshot-properties.nyc**. The `CNAME` file in this
repo holds that hostname, and it must match what is set under
Settings → Pages → Custom domain exactly, or Pages will keep resetting it.

| Type  | Name | Value |
| ----- | ---- | ----- |
| CNAME | www  | `ninoslavvasic.github.io` |
| A     | @    | 185.199.108.153 |
| A     | @    | 185.199.109.153 |
| A     | @    | 185.199.110.153 |
| A     | @    | 185.199.111.153 |

The four apex A records exist so that `moonshot-properties.nyc` without the
`www` still resolves; GitHub Pages then redirects it to the `www` host it was
given. Add the domain under Settings → Pages, wait for the certificate, then
turn on **Enforce HTTPS**.

## Open items

- [ ] Interior photography and floor plans for Suites 100 and 201 at The Blanchard
- [ ] Photographs of the finished second floor at Skillman, used as the white-box reference
- [ ] Real URLs for tenant portal, maintenance requests and rent payment — the
      footer links currently open a pre-addressed email to admin@ instead
- [ ] Confirm the map pin coordinates against the recorded addresses
- [ ] Replace `images/eight_properties_signature_logo.png` with the Moonshot mark
      (the wordmark on the page is inline SVG text and needs no file)
