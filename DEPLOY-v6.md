# Deploy v6 to NinoslavVasic/frc

Hosting, DNS, `CNAME`, `_headers`, `.nojekyll`, favicons, `robots.txt` and `.well-known/` do not change. Follow the existing `DEPLOY.md` for those.

## 1. Commit (repo root)

```
index.html                      replaced: v6 site
404.html                        replaced: new brand (white, Cormorant, square button)
sitemap.xml                     lastmod 2026-10-16
images/rawson-entrance.webp     new
images/rawson-building.webp     new
images/rawson-lobby.webp        new
images/rawson-loft-floor.webp   new
images/suite-203-skyline.webp   new
images/suite-203-floor.webp     new
images/blanchard-storefront.webp new (512×512; replace with a larger file when available)
images/pink-building.webp       new
```

Keep `images/og-image.jpg`; the share card still uses it.

## 2. Delete (no longer used by index.html)

```
images/blanchard.webp
images/blanchard-card.webp
images/skillman.webp
images/46th-ave.webp
images/rawson-entrance.jpg
images/rawson-lobby.jpg
images/suite-203-entry.jpg
images/suite-203-hero.jpg
images/suite-203-plate.jpg
images/suite-203-skyline.jpg
```

## 3. What changed for the CSP

The street map now uses Esri grey tiles instead of OpenStreetMap. `img-src` in `index.html` allows `https://server.arcgisonline.com` and no longer lists `tile.openstreetmap.org`. If you keep a policy in `_headers` (Cloudflare), make the same change there.

## 4. Check after it is live

- [ ] Available space: 14 spaces; filters work; each row opens; "Tour this space" picks the space in the form
- [ ] Location: "Street map" draws the 7 line and all three buildings; clicking a building zooms to it
- [ ] Submit the form once with your own address and confirm the email arrives (Web3Forms, same key as before; it now also sends role and company)
- [ ] Phone width: Menu button opens the links; the table shows as cards
- [ ] DevTools → Console is clean (a CSP violation means a source is missing from the policy)
- [ ] Update the LoopNet "Moonshot Properties Web page" link from `#spaces` to `#available`
