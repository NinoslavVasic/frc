# Moonshot Properties

Marketing site for Moonshot Properties, a privately held portfolio of three
commercial buildings in Long Island City.

**Live:** https://www.moonshot-properties.nyc/

## Portfolio

- **The Rawson** — 33-02 Skillman Avenue (101,500 SF, flex / office)
- **The Blanchard** — 21-10 51st Avenue / 21-09 Borden Avenue (220,000 SF, creative office)
- **The Pink Building** — 10-15 46th Avenue, Hunters Point (60,000 SF, loft; fully leased)

## Stack

- HTML with one `<style>`; the page script is `js/site.js`. No build step, no dependencies to install.
- Fonts (Cormorant Garamond, Montserrat, Fraunces) are self-hosted in `fonts/`.
- Light and dark mode follow the visitor's system setting.
- Hero: The Rawson intro, a 24-second loop of 5 scenes in the photo frame (HTML and CSS in `index.html`, player at the end of `site.js`). Its text is typed in the hero markup: when a Rawson listing changes, change it there too. See `DEPLOY-v6.3.md`.
- Location: 7-line diagram (inline SVG) with a switch to a street map. Leaflet 1.9.4
  is self-hosted in `vendor/leaflet/` and loads only when the street map is first opened. Tiles: Esri World Light/Dark Gray Canvas.
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
├── favicon.ico         # + favicon-16 / -32 / -180 / -192 / -512 .png, favicon.svg
└── images/
    ├── rawson-entrance.webp      1125×844 — hero
    ├── rawson-building.webp      791×629
    ├── rawson-lobby.webp         1200×900
    ├── rawson-loft-floor.webp    1200×800
    ├── suite-203-skyline.webp    1125×844
    ├── suite-203-floor.webp      1125×844
    ├── blanchard-storefront.webp 512×512
    ├── pink-building.webp        1350×900
    └── og-image.jpg              1200×630 — social share card
```

## Updating

**Listings** live in the `LISTINGS` array in `js/site.js`. The table, the phone cards and the form's Space menu are all built
from it, so one edit updates all three. Fields: `size` (RSF), `rate` ($/SF/yr,
used for the monthly base), `rent` (as shown), `st` (status), `loopnet` (link).

**Photos:** replace a file in `images/` and keep the filename. Resize to
1600 px wide or less and save as WebP before committing; the `width` and
`height` attributes in `index.html` must match the new file, or the page
will shift as images load.

**Map pins:** `SITES` in `js/site.js`. Coordinates are from the owner's Google Earth links (10/16/2026).

## Privacy rule

The site sets no cookies and loads no analytics, pixels or third-party code on page load. Keep it that way. **Before adding analytics, a Meta/LinkedIn/TikTok pixel, Google Tag Manager, a chat widget or an embedded video, add a consent banner first and make sure the tag does not fire until the visitor agrees**, then update `privacy.html` and the CSP. See `AUDIT-2026-10-16.md`.

## Performance and security notes

- Images are WebP with intrinsic `width`/`height`; everything below the hero uses `loading="lazy"`.
- Leaflet (about 150 KB) is requested only when someone opens the street map.
- The Content-Security-Policy ships as a `<meta http-equiv>` tag because GitHub
  Pages cannot set headers. Headers that a meta tag cannot set (HSTS,
  `frame-ancestors`, `Permissions-Policy`) are in `_headers` and only apply behind
  Cloudflare. See `DEPLOY.md`.
- The form carries a hidden honeypot field and validates name and email before
  it posts. The Web3Forms access key is public by design.

## DNS for the custom domain

Unchanged. See `DEPLOY.md`, section 4.

## Open items

- [ ] Interior photography and floor plans for Units 100, 201 and 402 at The Blanchard; list them on LoopNet
- [ ] Larger Blanchard storefront image (current file is 512 px)
- [ ] 6th floor size and rent at The Rawson; 4th floor rents
- [ ] Tenant portal URL (footer shows "coming soon")
- [ ] Matterport 3D tour link for The Rawson
