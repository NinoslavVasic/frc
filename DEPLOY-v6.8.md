# v6.8 — 10/27/2026 — Campaign links land on the website

Problem: tracked email links pointed at script.google.com. Brokers saw Google's banner
"This application was created by a Google Apps Script user", and iPhone Mail showed
"Sorry, unable to open the file at this time".

Change:
- track.js (new): reads ?t= from the address, sends it once to the campaign web app as an
  image request, then removes ?t= from the address bar. No cookie, no storage.
- blanchard.html: loads track.js; CSP adds script-src 'self' and img-src for
  script.google.com and script.googleusercontent.com.
- unsubscribe.html (new, noindex): confirms the opt-out and logs it through track.js.
- privacy.html: new section "Links in our leasing emails".
- Campaign.gs v3: track_() builds links to TARGET_URL / UNSUB_URL on this site.

Check after deploy: open blanchard.html?t=<test token>; a TEST click row shows on the Events tab.
