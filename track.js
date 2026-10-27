/* Campaign link logging (BLANCHARD-2026-10).
   A link in a Moonshot leasing email carries one short code: ?t=...
   This file sends that code to the campaign tracker (a Google Apps Script web app)
   one time, then removes it from the address bar. It sets no cookie, sends no cookie and
   stores nothing in the browser. Without ?t= in the address, this file does nothing. */
(function () {
  var m = /[?&]t=([A-Za-z0-9_-]{8,200})(?:&|$)/.exec(location.search);
  if (!m) { return; }
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbxVEnmbNg_CHDSsAVXK5M7H9MXbnfSGJCto13hWAH9YEHoIWc0Hd0KphTegkIEEir4n/exec';
  var img = new Image();
  img.referrerPolicy = 'no-referrer';  // Google does not learn which page sent it
  img.crossOrigin = 'anonymous';       // no Google cookies are sent with the request
  img.src = ENDPOINT + '?t=' + m[1];
  try { history.replaceState(null, '', location.pathname + location.hash); } catch (e) {}
}());
