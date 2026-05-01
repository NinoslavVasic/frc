# FRC

Marketing site for FRC, a Long Island City commercial real estate owner-operator.

**Live:** [your GitHub Pages URL goes here once deployed]

## Portfolio (3 buildings, all in LIC)

- **The Blanchard** — 2110 51st Avenue / 2109 Borden Ave (220,000 SF, office)
- **10-15 46th Avenue** — Hunters Point (60,000 SF, loft / creative)
- **33-02 Skillman Avenue** — acquiring 2026 (104,000 SF, flex / office)

## Stack

- Single-file HTML + inline CSS + vanilla JS
- No build step, no dependencies
- Fonts via Google Fonts (Fraunces + Inter Tight)
- Hosted on GitHub Pages

## Files

```
.
├── index.html          # The site
├── images/             # Building photography
│   ├── blanchard.jpg
│   ├── skillman.webp
│   └── 46th-ave.jpg
└── README.md           # This file
```

## Updating

Replace any photo in `images/` (keep the same filename) and commit. To edit
copy or layout, edit `index.html` directly. No build needed.

## TODO

- [ ] Replace placeholder available-spaces data with live leasing inventory
- [ ] Wire the inquiry form to a real endpoint (Formspree, Netlify Forms)
- [ ] Add tenant portal links once selected
- [ ] Replace Skillman photo with FRC's own photography post-acquisition
