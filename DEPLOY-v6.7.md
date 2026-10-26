# Deploy v6.7: The Blanchard reel page; rent shown as gross (10/26/2026)

## Files changed

```
blanchard.html                 NEW: reel page for the broker email (video, 4 suites, LoopNet button, tour)
media/blanchard-reel.mp4       NEW: reel v3, 720 x 1280, 38.5 s, no audio, 2.3 MB
media/blanchard-reel-poster.webp NEW: poster frame
index.html                     Blanchard suite card: "$43.00 per SF per year, gross"; Utilities: separate submeter
site.js                        Blanchard listings: rent "$43.00 gross"
sitemap.xml                    blanchard.html added
DEPLOY-v6.7.md                 this file
```

## Security

blanchard.html has its own CSP. It is the privacy.html policy plus `media-src 'self'` so the self-hosted video can play.
No third-party host. The home page CSP does not change.

## Check after it is live

- [ ] https://www.moonshot-properties.nyc/blanchard.html plays the reel (muted, loops) on desktop and phone.
- [ ] "Photos and details on LoopNet" opens listing 42735303.
- [ ] Home page: Blanchard suites show "$43.00 gross"; suite card shows "Utilities: Separate submeter".
- [ ] DevTools → Console is clean on both pages.
