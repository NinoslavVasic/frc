# Deploy v6.3: The Rawson hero intro (10/16/2026)

## Upload to the repo root (replace when asked)

```
index.html        hero photo replaced by The Rawson intro (24 s loop); CSS for the intro and for the arrival sequence in The Rawson section
site.js           new block at the end: intro player and arrival sequence
README.md         hero intro notes
DEPLOY-v6.3.md    this file
```

No new images. The intro uses the files that are already in `images/`:
`rawson-entrance.webp`, `rawson-building.webp`, `suite-203-skyline.webp`.
No change to the CSP: the script is in `site.js`, and the page loads nothing from other sites.

## What changes

- Hero: the photo frame shows 5 scenes in a loop: title, building facts, available space, Suite 203, book a tour. The first frame is the old hero photo.
- A click on the intro, on "View The Rawson", or on any "The Rawson" link scrolls to The Rawson section. The heading, the 5 photos, the 8 facts and the Suite 203 card then come in over about 2.5 seconds.
- The intro stops when it is off screen or when the tab is hidden.
- Pause / Play button in the frame.
- Visitors who turn off motion in their system settings see the first scene only. They can push Play.
- Without JavaScript, the first scene shows as a still image.

## Check after it is live

- [ ] Desktop: the intro runs in the hero frame; scenes change every 4 to 6 seconds.
- [ ] Click the intro: the page goes to The Rawson section and the arrival sequence plays.
- [ ] Menu "The Rawson" (desktop and phone menu): same result.
- [ ] Phone: the frame is 4:5 and no text is cut off.
- [ ] DevTools → Console is clean (no CSP errors).

## Data in the intro (same as the page, 10/16/2026)

101,500 SF · 6 floors plus cellar · 1931 / 2020 · 1 block to the 7 · Retail 1 10,000 RSF $40.00 · Suite 203 2,035 RSF $35.00 NNN, $5,935.42 / mo, fits 6–17 · Suites 204–210 525–4,870 RSF $35.00 · 4th floor 500–10,000 RSF in design.
If a listing changes in `LISTINGS` (site.js), also change the intro text in the hero of `index.html`.
