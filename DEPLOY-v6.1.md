# Deploy v6.1: privacy and security update (10/16/2026)

## Upload to the repo root (replace when asked)

```
index.html          fonts and map code now served from this site; script moved to js/site.js; tighter CSP; privacy notes
404.html            local fonts; tighter CSP
privacy.html        new
js/site.js          new (the page script, moved out of index.html)
fonts/              new folder: fonts.css + 9 .woff2 files
vendor/leaflet/     new folder: leaflet.js, leaflet.css (1.9.4)
sitemap.xml         adds privacy.html
robots.txt          drops two pages that no longer exist
site.webmanifest    white background to match the new site
_headers            new CSP; for Cloudflare only
README.md           privacy rule, new file layout
AUDIT-2026-10-16.md audit report
```

## Check after it is live

- [ ] DevTools → Network on first load: every request goes to www.moonshot-properties.nyc. No Google, unpkg or other third party.
- [ ] Open "Street map": requests to server.arcgisonline.com appear only then.
- [ ] Submit the form once; the only outside request is api.web3forms.com.
- [ ] DevTools → Console is clean (no CSP errors).
- [ ] /privacy.html loads; footer link works.
