(function () {
  'use strict';

  /* ---- Listings: the table, the phone cards and the form's Space menu all come from here ---- */
  var LN = 'https://www.loopnet.com/Listing/33-02-Skillman-Ave-Long-Island-City-NY/42041673/';
  var SUITE = 'Second-floor suite with black-framed industrial windows on several exposures and light all day. Open loft layout with exposed ceilings, spiral ductwork and new LED linear lighting. HVAC, power, lighting and a wet sprinkler system are in place, so fit-out is layout and finishes only. Sealed concrete floors and a private double-door entry.';
  var SUITE_FEATS = ["13' ceilings", 'Private double-door entry', 'HVAC in place', 'Loading dock'];
  var LNB = 'https://www.loopnet.com/Listing/21-09-Borden-Ave-Long-Island-City-NY/42735303/';
  var PHOTOS = {
    '102': [['bla-102-1', 'Suite 102 reception desk with a copper-panel wall'], ['bla-102-2', 'Suite 102 open area with glass-walled offices'], ['bla-102-3', 'Suite 102 corner of the open area']],
    '103': [['bla-103-1', 'Suite 103 open space with black walls and concrete floor'], ['bla-103-2', 'Suite 103 roll-up door to the loading dock'], ['bla-103-3', 'Suite 103 corridor with a steel stair to the upper platform']],
    '201': [['bla-201-1', 'Suite 201 open office toward the windows'], ['bla-201-2', 'Suite 201 glass-walled private offices'], ['bla-201-3', 'Suite 201 pantry with black cabinets']],
    '202': [['bla-202-1', 'Suite 202 open office along the windows'], ['bla-202-2', 'Suite 202 private office with a glass front'], ['bla-202-3', 'Suite 202 pantry beside the open office']]
  };
  function bla(id, space, sub, size, use, build, desc, feats) {
    return { id: 'b' + id, b: 'blanchard', bn: 'The Blanchard', space: space, sub: sub, size: size, rate: 43, rent: '$43.00 gross', use: use, st: 'Available now', build: build, term: 'Negotiable', desc: desc, feats: feats.concat(['Energy rating A']), loopnet: LNB, photos: PHOTOS[id] };
  }
  function r2(id, size, fits, sub, extra) {
    return { id: id, b: 'rawson', bn: 'The Rawson', space: 'Suite ' + id + ' · 2nd floor', sub: sub, size: size, rate: 35, rent: '$35.00', use: 'Office', st: 'Available now', build: 'Partial build-out', term: '1–10 years', fits: fits, desc: SUITE + (extra || ''), feats: SUITE_FEATS, loopnet: LN };
  }
  var LISTINGS = [
    { id: 'retail1', b: 'rawson', bn: 'The Rawson', space: 'Retail 1 · ground floor', sub: 'Corner, long window frontage, original mushroom columns', size: 10000, rate: 40, rent: '$40.00', use: 'Retail', st: 'Available now', build: 'Open plate', term: '1–10 years', desc: 'A large, open ground-floor space with long window frontage and light deep into the floor. Exposed ceilings, original mushroom columns and concrete floors. Suits retail, showroom, studio, creative, production or light-commercial use, subject to use requirements. The plate takes private offices, conference rooms or work zones, and a raised platform can be worked into the design. It has its own entrance area.', feats: ["13' finished ceilings", 'Corner space', 'After-hours HVAC available', 'Energy rating A', 'Emergency lighting'], loopnet: LN },
    { id: '203', b: 'rawson', bn: 'The Rawson', space: 'Suite 203 · 2nd floor', sub: 'Corner suite, skyline views, private double door', size: 2035, rate: 35, rent: '$35.00 NNN', use: 'Office', st: 'Available now', build: 'Partial build-out', term: '1–10 years', fits: '6–17 people', desc: 'Corner suite with black-framed industrial windows on several exposures and direct views of the Midtown skyline. Open loft layout with columns, exposed ceilings, spiral ductwork and new LED linear lighting. HVAC, a dedicated electrical panel, lighting and a wet sprinkler system are in place, so fit-out is layout and finishes only. Sealed concrete floors and a private double-door entry.', feats: ["13' ceilings", 'Corner, wraparound windows', 'Dedicated panel', 'Loading dock'], loopnet: LN },
    r2('204', 525, '2–5 people', 'Move-in-ready, natural light'),
    r2('205', 775, '2–9 people', 'Move-in-ready, natural light'),
    r2('206', 985, '2–10 people', 'Move-in-ready, natural light'),
    r2('207', 1170, '4–12 people', 'Larger suite, natural light'),
    r2('208', 660, '2–6 people', 'Open layout, private entrance'),
    r2('209', 755, '2–9 people', 'Corner suite, open layout', ' This is a corner suite.'),
    { id: '210', b: 'rawson', bn: 'The Rawson', space: 'Suite 210 · 2nd floor', sub: 'Largest suite on the floor, long window lines', size: 4870, rate: 35, rent: '$35.00', use: 'Office', st: 'Available now', build: 'Partial build-out', term: '1–10 years', fits: '10–40 people', desc: 'A large office suite with long window lines and strong natural light throughout. Polished concrete floors and exposed architectural details. The open plan suits creative, professional, showroom or studio users.', feats: ["13' finished ceilings", 'Open plan', 'Loading dock'], loopnet: LN },
    { id: '4th', b: 'rawson', bn: 'The Rawson', space: '4th floor office suites', sub: 'Move-in-ready suites, shared kitchen and restrooms', sizeLabel: '500–10,000', min: 500, max: 10000, rent: 'On request', use: 'Office', st: 'In design', build: 'In design', desc: 'Office suites from 500 to 10,000 RSF, with a shared kitchen and restrooms. Register now and Joe will send plans and rents before the floor is listed.', feats: [] },
    { id: '6th', b: 'rawson', bn: 'The Rawson', space: '6th floor · full floor', sub: 'Open plate, no build-out, windows on every side', sizeLabel: 'Full floor', rent: 'On request', use: 'Office', st: 'Available', build: 'None', desc: 'A full open floor with windows on every side, delivered without build-out.', feats: [] },
    bla('102', 'Suite 102 · ground floor', 'Office, showroom or retail · partial build-out', 10000, 'Office/Retail', 'Partial build-out', 'A ground-floor suite for an office, showroom or retail user. It is partly built out as a standard office, with a reception area and a mostly open floor plan. Natural light, and HVAC is available after hours.', ['Reception area', 'Mostly open plan', 'Natural light', 'After-hours HVAC']),
    bla('103', 'Suite 103 · ground floor', 'Flex suite with its own loading dock', 6000, 'Flex', 'Full build-out', 'A ground-floor flex suite with its own loading dock. Built out, with a reception area. Suits office, showroom or retail use.', ['Own loading dock', 'Reception area', 'After-hours HVAC']),
    bla('201', 'Suite 201 · 2nd floor', 'Flex suite, built out, private restrooms', 8000, 'Flex', 'Full build-out', 'A second-floor flex suite for creative, studio or office use. Partitioned offices, central air conditioning and private restrooms are in place.', ['Partitioned offices', 'Central A/C', 'Private restrooms']),
    bla('202', 'Suite 202 · 2nd floor', '14,500 SF on one floor, built out', 14500, 'Flex', 'Full build-out', 'A large second-floor flex suite on one floor for creative, studio or office use. Partitioned offices, central air conditioning and private restrooms are in place.', ['One floor', 'Partitioned offices', 'Central A/C', 'Private restrooms'])
  ];
  var PINK_WAITLIST = 'The Pink Building · waitlist';

  function n(x) { return x.toLocaleString('en-US'); }
  function money(x) { return '$' + x.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function sizeLabel(l) { return l.size ? n(l.size) : l.sizeLabel; }
  function label(l) { return l.bn + ' · ' + l.space.split(' · ')[0] + ' · ' + (l.size ? n(l.size) + ' RSF' : /\d/.test(l.sizeLabel) ? l.sizeLabel + ' RSF' : l.sizeLabel.toLowerCase()); }
  function monthly(l) { return l.rate ? money(l.size * l.rate / 12) : ''; }

  var state = { b: 'all', sz: 'all', open: null };
  var RANGES = { all: [0, Infinity], s: [0, 999], m: [1000, 4999], l: [5000, Infinity] };
  var rowsEl = document.getElementById('rows'), cardsEl = document.getElementById('cards'), countEl = document.getElementById('count');

  function detailHtml(l) {
    var specs = [['Term', l.term], ['Build-out', l.build], ['Available', l.st === 'Available now' ? 'Now' : l.st], ['Fits', l.fits], ['Monthly base', monthly(l)]]
      .filter(function (s) { return s[1]; })
      .map(function (s) { return '<div><dt>' + s[0] + '</dt><dd>' + esc(s[1]) + '</dd></div>'; }).join('');
    var chips = (l.feats || []).map(function (f) { return '<span>' + esc(f) + '</span>'; }).join('');
    var shots = (l.photos || []).map(function (ph) { return '<img src="images/' + ph[0] + '.webp" alt="' + esc(ph[1]) + '" width="1200" height="900" loading="lazy" decoding="async">'; }).join('');
    return '<div class="detail-grid"><div><p>' + esc(l.desc) + '</p>' + (chips ? '<div class="chips">' + chips + '</div>' : '') + (shots ? '<div class="shots">' + shots + '</div>' : '') + '</div>' +
      '<div><dl class="specs num">' + specs + '</dl><div class="btn-row">' +
      '<a class="btn btn-light" href="#contact" data-tour-id="' + l.id + '">Tour this space</a>' +
      (l.loopnet ? '<a class="btn btn-outline-light" href="' + l.loopnet + '" target="_blank" rel="noopener">View on LoopNet ↗</a>' : '') +
      '</div></div></div>';
  }

  function render() {
    var lo = RANGES[state.sz][0], hi = RANGES[state.sz][1];
    var list = LISTINGS.filter(function (l) {
      if (state.b !== 'all' && l.b !== state.b) return false;
      if (state.sz === 'all') return true;
      return l.size ? (l.size >= lo && l.size <= hi) : (l.min != null && l.min <= hi && l.max >= lo);
    });
    var total = list.reduce(function (a, l) { return a + (l.size || 0); }, 0);
    countEl.textContent = list.length + (list.length === 1 ? ' space' : ' spaces') + (total ? ' · ' + n(total) + ' RSF listed' : '');
    rowsEl.innerHTML = list.map(function (l) {
      var open = state.open === l.id, rent = monthly(l);
      return '<tr class="row' + (open ? ' open' : '') + '" data-id="' + l.id + '">' +
        '<td class="bldg">' + l.bn + '</td>' +
        '<td>' + esc(l.space) + (l.sub ? '<small>' + esc(l.sub) + '</small>' : '') + '</td>' +
        '<td class="r">' + sizeLabel(l) + '</td>' +
        '<td>' + l.rent + (rent ? '<small>' + rent + '/mo base</small>' : '') + '</td>' +
        '<td>' + l.use + '</td>' +
        '<td><span class="st' + (l.st === 'In design' ? ' design' : '') + '">' + l.st + '</span></td>' +
        '<td class="act"><button type="button" class="toggle" aria-expanded="' + open + '">' + (open ? 'Close' : 'Details') + '</button></td></tr>' +
        (open ? '<tr class="detail"><td colspan="7">' + detailHtml(l) + '</td></tr>' : '');
    }).join('');
    cardsEl.innerHTML = list.map(function (l) {
      var open = state.open === l.id;
      return '<div class="card' + (open ? ' open' : '') + '"><button type="button" class="card-head" data-id="' + l.id + '" aria-expanded="' + open + '">' +
        '<span class="t"><span class="bn">' + l.bn + '</span><span class="st' + (l.st === 'In design' ? ' design' : '') + '">' + l.st + '</span></span>' +
        '<span>' + esc(l.space) + '</span><span class="meta">' + sizeLabel(l) + ' RSF · ' + l.rent + ' · ' + l.use + '</span></button>' +
        (open ? detailHtml(l) : '') + '</div>';
    }).join('');
  }

  function toggle(id) { state.open = state.open === id ? null : id; render(); }
  rowsEl.addEventListener('click', function (e) { if (e.target.closest('a')) return; var tr = e.target.closest('tr.row'); if (tr) toggle(tr.dataset.id); });
  cardsEl.addEventListener('click', function (e) { var h = e.target.closest('.card-head'); if (h) toggle(h.dataset.id); });

  function bindSeg(id, key) {
    var btns = document.querySelectorAll('#' + id + ' button');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        state[key] = b.dataset.v; state.open = null; render();
      });
    });
  }
  bindSeg('f-building', 'b'); bindSeg('f-size', 'sz');
  /* "See the suites" links set the building filter before the page scrolls to the table */
  document.querySelectorAll('[data-filter]').forEach(function (a) {
    a.addEventListener('click', function () { var b = document.querySelector('#f-building button[data-v="' + a.dataset.filter + '"]'); if (b) b.click(); });
  });
  render();

  /* ---- Form Space menu + "Tour" buttons ---- */
  var spaceSel = document.getElementById('f-space');
  ['Not decided, send what fits'].concat(LISTINGS.map(label), [PINK_WAITLIST]).forEach(function (v) {
    var o = document.createElement('option'); o.textContent = v; o.value = v; spaceSel.appendChild(o);
  });
  function pick(v) { spaceSel.value = v; }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-tour-id],[data-tour]');
    if (!a) return;
    if (a.dataset.tour === 'pink') return pick(PINK_WAITLIST);
    var id = a.dataset.tourId || a.dataset.tour;
    var l = LISTINGS.filter(function (x) { return x.id === id; })[0];
    if (l) pick(label(l));
  });

  /* ---- Mobile menu ---- */
  var bar = document.getElementById('top-bar'), menuBtn = document.getElementById('menu-btn');
  function setMenu(open) { bar.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open); menuBtn.textContent = open ? 'Close' : 'Menu'; }
  menuBtn.addEventListener('click', function () { setMenu(!bar.classList.contains('open')); });
  document.querySelectorAll('#mobile-nav a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  /* ---- Copy buttons ---- */
  document.querySelectorAll('.copy').forEach(function (c) {
    c.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(c.dataset.copy).then(function () { c.textContent = 'Copied'; setTimeout(function () { c.textContent = 'Copy'; }, 1500); });
    });
  });

  /* ---- Location: 7-line diagram / street map (Leaflet loads on first use) ---- */
  var SITES = [
    { id: 'pink', name: 'The Pink Building', addr: '10-15 46th Avenue', ll: [40.74707, -73.95180], color: '#c4217a' },
    { id: 'blanchard', name: 'The Blanchard', addr: '21-10 51st Avenue', ll: [40.74055, -73.94921] },
    { id: 'rawson', name: 'The Rawson', addr: '33-02 Skillman Avenue', ll: [40.74658, -73.92968] }
  ];
  var STATIONS = [['Grand Central', [40.7514, -73.9760]], ['Vernon–Jackson', [40.7426, -73.9536]], ['Hunters Point Av', [40.7422, -73.9489]], ['Court Sq', [40.7470, -73.9453]], ['Queensboro Plaza', [40.7506, -73.9402]], ['33 St–Rawson St', [40.7446, -73.9310]]];
  var LINE = [[40.7514, -73.9760], [40.7499, -73.9725], [40.7482, -73.9688], [40.7455, -73.9610], [40.7426, -73.9536], [40.7422, -73.9489], [40.7440, -73.9466], [40.7470, -73.9453], [40.7506, -73.9402], [40.7488, -73.9370], [40.7466, -73.9340], [40.7446, -73.9310]];
  var BOUNDS = (function () {
    var pts = LINE.concat(SITES.map(function (s) { return s.ll; }));
    var la = pts.map(function (p) { return p[0]; }), lo = pts.map(function (p) { return p[1]; });
    var s = Math.min.apply(0, la), nn = Math.max.apply(0, la), w = Math.min.apply(0, lo), e = Math.max.apply(0, lo);
    return [[s - (nn - s) * .1, w - (e - w) * .06], [nn + (nn - s) * .1, e + (e - w) * .06]];
  })();
  var frame = document.getElementById('map-frame'), mapEl = document.getElementById('map');
  var modeBtns = document.querySelectorAll('.map-seg button'), stopBtns = document.querySelectorAll('.stop');
  var map = null, line = null, loading = null, drawn = false;

  function loadAsset(tag, attrs) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement(tag);
      Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
      el.onload = resolve; el.onerror = reject; document.head.appendChild(el);
    });
  }
  function ensureMap() {
    if (loading) return loading;
    loading = Promise.all([
      loadAsset('link', { rel: 'stylesheet', href: 'leaflet.css' }),
      loadAsset('script', { src: 'leaflet.js' })
    ]).then(function () {
      var dark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
      var ink = dark ? '#f5f4f2' : '#111111', muted = dark ? '#a8a8a8' : '#6b6b6b', halo = dark ? 'rgba(17,17,17,.88)' : 'rgba(255,255,255,.92)', base = dark ? '#111111' : '#ffffff', g = dark ? 'Dark' : 'Light';
      map = L.map(mapEl, { zoomControl: false, scrollWheelZoom: false, dragging: !L.Browser.mobile });
      L.control.zoom({ position: 'bottomright' }).addTo(map);
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_' + g + '_Gray_Base/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles &copy; Esri', maxZoom: 19, maxNativeZoom: 16 }).addTo(map);
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_' + g + '_Gray_Reference/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, maxNativeZoom: 16, opacity: .8 }).addTo(map);
      line = L.polyline(LINE, { color: '#b933ad', weight: 6, lineJoin: 'round', lineCap: 'round', interactive: false }).addTo(map);
      STATIONS.forEach(function (st) {
        L.circleMarker(st[1], { radius: 6, color: '#b933ad', weight: 3, fillColor: base, fillOpacity: 1, interactive: false }).addTo(map);
        var pos = st[0] === 'Vernon–Jackson' ? 'translate(calc(-100% - 10px),6px)' : 'translate(10px,-22px)';
        L.marker(st[1], { interactive: false, keyboard: false, icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div style="transform:' + pos + ';white-space:nowrap;font:500 10.5px/1 Montserrat,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:' + muted + '">' + st[0] + '</div>' }) }).addTo(map);
      });
      SITES.forEach(function (s) {
        var left = s.id === 'pink';
        L.marker(s.ll, { title: s.name, alt: s.name, icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div style="display:flex;' + (left ? 'flex-direction:row-reverse;transform:translate(calc(-100% + 9px),-9px)' : 'transform:translate(-9px,-9px)') + ';align-items:center;gap:10px;white-space:nowrap;cursor:pointer"><span style="width:18px;height:18px;background:' + (s.color || ink) + ';outline:2px solid ' + base + ';display:block;flex:none"></span><span style="background:' + halo + ';padding:6px 9px 7px;color:' + ink + '"><span style="display:block;font:500 19px/1.05 \'Cormorant Garamond\',serif">' + s.name + '</span><span style="display:block;font:400 11.5px/1.3 Montserrat,sans-serif;color:' + muted + ';margin-top:2px">' + s.addr + '</span></span></div>' }) })
          .on('click', function () { focus(s.id); }).addTo(map);
      });
      map.fitBounds(BOUNDS, { animate: false });
      if ('ResizeObserver' in window) new ResizeObserver(function () { map.invalidateSize({ animate: false }); }).observe(mapEl);
      return map;
    })['catch'](function () { loading = null; });
    return loading;
  }
  function drawIn() {
    if (drawn || !line) return; drawn = true;
    var el = line.getElement && line.getElement(); if (!el || !el.getTotalLength || !el.animate) return;
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var len = el.getTotalLength(); el.style.strokeDasharray = len;
    var a = el.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], { duration: 2000, easing: 'cubic-bezier(.6,0,.2,1)' });
    a.onfinish = function () { el.style.strokeDasharray = ''; };
  }
  function setStop(id) { stopBtns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.site === id ? 'true' : 'false'); }); }
  function setMode(mode, then) {
    modeBtns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.mode === mode ? 'true' : 'false'); });
    frame.classList.toggle('street', mode === 'street');
    if (mode === 'line') { setStop(null); return; }
    ensureMap().then(function (m) {
      if (!m) return;
      requestAnimationFrame(function () { m.invalidateSize({ animate: false }); drawIn(); if (then) then(m); });
    });
  }
  function focus(id) {
    var s = SITES.filter(function (x) { return x.id === id; })[0];
    setStop(id);
    setMode('street', function (m) { m.stop(); m.flyTo(s.ll, 16, { duration: 1.4 }); });
  }
  modeBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.dataset.mode === 'street') { setStop(null); setMode('street', function (m) { m.stop(); m.fitBounds(BOUNDS, { animate: false }); }); }
      else setMode('line');
    });
  });
  stopBtns.forEach(function (b) { b.addEventListener('click', function () { focus(b.dataset.site); }); });

  /* ---- Inquiry form → Web3Forms ---- */
  var FORM_ENDPOINT = 'https://api.web3forms.com/submit';
  var ACCESS_KEY = 'f9aa7fe3-ab43-44f7-abaf-0a7cc50cd074';
  var form = document.getElementById('inquiry-form'), statusEl = document.getElementById('f-status'), submit = document.getElementById('f-submit');
  var role = 'Tenant', sending = false;
  var roleBtns = document.querySelectorAll('.role button');
  roleBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      role = b.dataset.role;
      roleBtns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      document.getElementById('company-label').textContent = role === 'Broker' ? 'Brokerage' : 'Company';
    });
  });
  function say(msg, err) { statusEl.textContent = msg; statusEl.classList.toggle('err', !!err); }
  function val(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (sending || val('f-bot')) return;
    var name = val('f-name'), email = val('f-email');
    if (!name) { say('Please give your name.', true); document.getElementById('f-name').focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { say('Please check the email address.', true); document.getElementById('f-email').focus(); return; }
    sending = true; submit.disabled = true; submit.textContent = 'Sending…'; say('');
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: 'Space requirement (' + role + ') — ' + val('f-space'),
        from_name: 'Moonshot Properties website',
        role: role, name: name, company: val('f-company'), email: email, phone: val('f-phone'),
        space: val('f-space'), use: val('f-use'), size: val('f-size-need'), date_needed: val('f-date'), message: val('f-message')
      })
    }).then(function (r) { return r.json(); }).then(function (json) {
      sending = false;
      if (json && json.success) { form.reset(); submit.textContent = 'Sent'; say('Thank you. Joe will reply shortly.'); }
      else { submit.disabled = false; submit.textContent = 'Send requirement'; say('The form did not send. Please write to joe@moonshot-properties.nyc.', true); }
    })['catch'](function () {
      sending = false; submit.disabled = false; submit.textContent = 'Send requirement';
      say('The network did not respond. Please write to joe@moonshot-properties.nyc.', true);
    });
  });
})();

/* ---- v6.3 / v6.6: hero intro (The Rawson 24 s, then The Blanchard 24 s) and the arrival sequence in The Rawson section ---- */
(function () {
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sec = document.getElementById('rawson');

  function countUp(el, delay) {
    if (reduce || !el) return;
    var n = +el.getAttribute('data-count'), start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, Math.max(0, (ts - start - (delay || 0)) / 1400)), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(n * e).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function arrive() {
    if (!sec || reduce) return;
    sec.classList.remove('arrive'); void sec.offsetWidth; sec.classList.add('arrive');
    countUp(sec.querySelector('.facts-list [data-count]'), 1100);
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href="#rawson"]');
    if (a) arrive();
  });

  var root = document.querySelector('[data-ri]');
  if (!root) return;
  root.classList.add('ri-js');
  var sc = [].slice.call(root.querySelectorAll('.ri-sc'));
  var ms = sc.map(function (s) { return +s.getAttribute('data-ms'); });
  var total = ms.reduce(function (a, b) { return a + b; }, 0);
  var bar = root.querySelector('.ri-prog i'), btn = root.querySelector('.ri-pause');
  var view = root.querySelector('.ri-view'), cap = document.getElementById('ri-cap');
  function target(s) { return s.getAttribute('data-href') || root.getAttribute('data-href'); }
  var cur = 0, el = 0, last = performance.now(), userPaused = false, visible = true;

  function running() { return !userPaused && visible && !document.hidden; }
  function show(i) {
    sc.forEach(function (s, j) { if (j !== i) s.classList.remove('ri-on'); });
    var s = sc[i]; s.classList.remove('ri-on'); void s.offsetWidth; s.classList.add('ri-on');
    [].forEach.call(s.querySelectorAll('[data-count]'), function (b) { countUp(b, 0); });
    if (view) { view.href = target(s); view.textContent = 'View ' + (s.getAttribute('data-name') || 'The Rawson'); }
    if (cap && s.getAttribute('data-cap')) cap.textContent = s.getAttribute('data-cap');
  }
  function go(i) { cur = i; el = 0; show(i); }
  function tick(now) {
    if (running()) { el += now - last; if (el >= ms[cur]) go((cur + 1) % sc.length); }
    last = now;
    var before = 0; for (var k = 0; k < cur; k++) before += ms[k];
    bar.style.width = Math.min(100, (before + el) / total * 100) + '%';
    requestAnimationFrame(tick);
  }
  function setPaused(p) {
    userPaused = p; btn.textContent = p ? 'Play' : 'Pause';
    btn.setAttribute('aria-label', p ? 'Play animation' : 'Pause animation');
  }
  btn.addEventListener('click', function (e) { e.stopPropagation(); setPaused(!userPaused); });
  root.addEventListener('click', function (e) {
    if (e.target.closest('a,button')) return;
    var h = target(sc[cur]), dest = document.querySelector(h);
    if (!dest) return;
    dest.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    if (history.replaceState) history.replaceState(null, '', h);
    if (h === '#rawson') arrive();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(root);
  }
  if (reduce) { setPaused(true); }
  requestAnimationFrame(tick);
})();
