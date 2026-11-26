/* ═══ THE MUSEUM · Exhibit Studio (G3 SS 3.11_02, Nov 2026) ═══════════════════════════════════════════════════════
   The Grade 3 course's final presentation tool. Ported from G4 SS's assets/sparkle/ff-studio.js (4.13.01, itself a port
   of G3 science 32.02's wf-studio.js). Bethany (22 Nov 2026): every G3 to G5 course ends with a presentation like 32.02.
   3.11_02 BUILDS the exhibit: five slides (Welcome, Map, Source, Community, Virtue), one at a time, three steps each
   (pick the picture, write your words, slide ready). Every picture is real and comes from the place pack the student
   chose in 3.11_01 (DATA.packs). Download .pptx (PptxGenJS, MIT, loaded only on Download).
   One key, oao.ms.studio: .plan comes from 3.11_01 (or is picked right here when it is missing), .slides are added here.
   3.11_03 can PRESENT the same slides (cfg.mode 'show', cfg.present: present mode, a voice per slide kept in memory
   only, Make my video), ported unchanged from ff-studio.js.
   No lesson content lives here: everything comes from the lesson's DATA (module type "exhibitstudio").
   Mounted by the Museum layer: MSStudio.mount(root, cfg, hooks) → {done, n, lines, slides, plan, download, …}.
   ════════════════════════════════════════════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (window.MSStudio) return;
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function words(t) { return ((t || '').trim().match(/[A-Za-z0-9'’$,.]+/g) || []).filter(function (w) { return /[A-Za-z0-9]/.test(w); }).length; }

  function mount(root, ST, H) {
    H = H || {};
    var KEY = ST.key || 'oao.ms.studio', CR = ST.criteria || [], MAXW = ST.words || 25, MINW = ST.minWords || 6, PK = ST.packs || [];
    function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
    var S = load(), warned = false, editing = false, cur = 0;
    var IMGF = typeof H.img === 'function' ? H.img : function (n) { return (H.img || 'images/') + n; };
    function pack() { var p = S.plan; return p ? PK.filter(function (x) { return x.k === p.place; })[0] || null : null; }
    /* the picture bank of one pack: its real sources + its two maps (ringed by us) */
    var BYID = {};
    function bank(p) { if (!p) return []; var out = [];
      (p.maps || []).forEach(function (m) { var id = 'map-' + p.k + '-' + m.k; out.push(BYID[id] = { id: id, kind: 'map', file: 'map-3-11-02-' + p.k + '-' + m.k + '.jpg', thumbFile: 'th-3-11-02-map-' + p.k + '-' + m.k + '.jpg', cap: m.t, credit: (ST.mapCredit || {})[m.k] || '', short: m.k === 'phys' ? (ST.physT || 'Physical map') : (ST.polT || 'Political map') }); });
      (p.sources || []).forEach(function (s) { out.push(BYID[s.id] = { id: s.id, kind: 'src', file: s.file, thumbFile: 'th-3-11-01-' + s.id + '.jpg', cap: s.t + ', ' + s.meta, credit: s.credit, short: s.t }); });
      return out; }
    PK.forEach(bank);
    function opts(i) { var c = CR[i], b = bank(pack()); return b.filter(function (x) { return c.k === 'map' ? x.kind === 'map' : x.kind === 'src'; }); }
    function idxOf(arr, t) { for (var j = 0; j < arr.length; j++) if (arr[j] === t || (arr[j] && t && arr[j].v && arr[j].v === t.v)) return j; return 0; }
    /* first picture for each slide, from the plan */
    function defaults() { var p = pack(), pl = S.plan; if (!p) return [];
      var ci = idxOf(p.comms, pl.comm), vi = idxOf(p.virtues, pl.virtue);
      return CR.map(function (c) {
        if (c.k === 'welcome') return p.hero;
        if (c.k === 'map') return 'map-' + p.k + '-' + ((pl.map && pl.map.k) || p.maps[0].k);
        if (c.k === 'source') return (pl.source && pl.source.id) || p.sources[0].id;
        if (c.k === 'comm') return (p.commPic || [])[ci] || p.sources[0].id;
        if (c.k === 'virtue') return (p.virtuePic || [])[vi] || p.sources[0].id;
        return null; }); }
    function fresh() { var d = defaults(); S.slides = CR.map(function (c, i) { return { text: '', img: d[i] || null, st: 1 }; }); S.slidesFor = S.plan.place; S.cur = 0; S.dl = false; }
    function ready() { return !!(S.plan && pack()); }
    if (ready() && (!S.slides || S.slides.length !== CR.length || S.slidesFor !== S.plan.place)) fresh();
    cur = Math.min(S.cur || 0, CR.length - 1);
    function hasAny() { return !!(S.slides && S.slides.some(function (s) { return (s.text || '').trim(); })); }
    function save() { S.v = 2; S.lesson = ST.lesson || ''; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { if (!warned) { warned = true; toast(ST.fullT || 'Your slides could not be saved in this browser. Download them before you close the page.'); } } if (H.change) H.change(); }
    function toast(m) { var t = document.createElement('div'); t.className = 'msst-toast'; t.setAttribute('role', 'status'); t.innerHTML = esc(m) + '<button type="button" aria-label="Close">✕</button>'; document.body.appendChild(t); t.querySelector('button').onclick = function () { t.remove(); }; setTimeout(function () { t.remove(); }, 6000); }
    function name() { return (H.name && H.name()) || ''; }
    function src(b) { return b ? IMGF(b.file) : ''; }
    function thumb(b) { return b ? IMGF(b.thumbFile || b.file) : ''; }
    function picSrc(s) { return s ? src(BYID[s.img]) : ''; }
    function capOf(s) { var b = s && BYID[s.img]; return b ? b.cap : ''; }
    function credOf(s) { var b = s && BYID[s.img]; return b ? b.credit : ''; }
    function fill(t) { var p = pack(), pl = S.plan || {}; return String(t || '').replace(/\{place\}/g, p ? p.name.replace(/^The /, 'the ') : '').replace(/\{Place\}/g, p ? p.name : '').replace(/\{virtue\}/g, pl.virtue ? pl.virtue.v : '').replace(/\{kind\}/g, pl.source ? pl.source.kind : 'photo'); }
    /* the checks: Bethany's mix-ups "more words = better" (a word limit) and "a picture says it all" (words are needed) */
    function has(k, t) { var p = pack(), pl = S.plan || {};
      if (k === 'place') return !!(p && new RegExp(p.re, 'i').test(t || ''));
      if (k === 'name') return !!name();
      if (k === 'virtue') return !!(pl.virtue && new RegExp('\\b' + pl.virtue.v, 'i').test(t || ''));
      var R = (ST.rx || {})[k]; return R ? new RegExp(R, 'i').test(t || '') : true; }
    function checks(i) { var c = CR[i], s = S.slides[i], w = words(s.text);
      return (c.checks || ['words', 'pic']).map(function (k) {
        var ok = k === 'words' ? (w >= MINW && w <= MAXW) : k === 'pic' ? !!picSrc(s) : has(k, s.text);
        var lab = k === 'words' ? fill((ST.checkT || {}).words || '{min} to {max} words').replace('{min}', MINW).replace('{max}', MAXW) : fill((ST.checkT || {})[k] || k);
        return { k: k, ok: ok, lab: lab }; }); }
    function slideOk(i) { return !!(S.slides && S.slides[i]) && checks(i).every(function (c) { return c.ok; }); }
    function nDone() { return S.slides ? CR.filter(function (c, i) { return slideOk(i); }).length : 0; }
    function lines() { return S.slides ? CR.map(function (c, i) { var t = S.slides[i].text.trim(); return t ? [c.name, t] : null; }).filter(Boolean) : []; }
    function title() { var p = pack(); return p ? p.name : ''; }

    /* ---------- one slide (editor preview, present mode and print all use this) ---------- */
    function slideHTML(i) {
      var c = CR[i], s = S.slides[i], pic = picSrc(s), cap = capOf(s), t = esc(s.text.trim()), nm = esc(name());
      if (c.title) return '<div class="msst-sl msst-title">' + (pic ? '<img class="bg" src="' + esc(pic) + '" alt="' + esc(cap) + '">' : '') +
        '<div class="tt"><small>' + esc(ST.deckKicker || '') + '</small><h4>' + esc(title()) + '</h4><p>' + (t || '<i>' + esc(fill(c.hint)) + '</i>') + '</p><em>' + esc(ST.byT || 'by') + ' ' + (nm || '<u>' + esc(ST.yourNameT || 'your name') + '</u>') + ', ' + esc(ST.roleT || 'Exhibit Designer') + '</em></div>' + (cap ? '<span class="cap">📷 ' + esc(cap) + '</span>' : '') + '</div>';
      return '<div class="msst-sl msst-std" style="--pc:' + esc(c.color || '#1E8C8C') + '"><div class="pic">' + (pic ? '<img src="' + esc(pic) + '" alt="' + esc(cap) + '">' + (cap ? '<span class="cap">📷 ' + esc(cap) + '</span>' : '') : '<span class="nopic">📷 ' + esc(ST.pickPicT || 'Pick a picture') + '</span>') + '</div>' +
        '<div class="side"><div class="k">' + esc(c.icon || '') + ' ' + esc(c.name) + '</div><p class="tx">' + (t || '<i>' + esc(fill(c.hint)) + '</i>') + '</p></div></div>';
    }

    /* ---------- no plan on this computer: pick the five cards right here (the same cards as 3.11_01) ---------- */
    function drawPlan() { var P = S.pick = S.pick || { n: 1 }, p = P.place ? PK.filter(function (x) { return x.k === P.place; })[0] : null, T = ST.planT || {}, N = 5;
      function card(n, h, lead, inner) { var dots = ''; for (var j = 1; j <= N; j++) dots += '<i class="' + (j < n ? 'done' : j === n ? 'on' : '') + '"></i>';
        return '<div class="msst-none"><span class="ic" aria-hidden="true">🗂️</span><h4>' + esc(T.h || 'No plan on this computer yet') + '</h4><p>' + esc(T.t || '') + '</p></div><div class="msst-step"><div class="top"><span>' + esc((ST.stepT || 'Step {n} of {t}').replace('{n}', n).replace('{t}', N)) + '</span><span class="dots">' + dots + '</span></div><h5>' + esc(h) + '</h5><p>' + esc(lead) + '</p>' + inner + (n > 1 ? '<div class="msst-acts"><button type="button" class="msst-btn ghost" data-back>⬅️ ' + esc(ST.backT || 'Back') + '</button></div>' : '') + '</div>'; }
      function list(items) { return '<div class="msst-pick">' + items.map(function (h, j) { return '<button type="button" class="msst-opt" data-j="' + j + '">' + h + '</button>'; }).join('') + '</div>'; }
      var h = '';
      if (P.n === 1) h = card(1, T.s1 || 'Pick your place', T.l1 || '', '<div class="msst-packs">' + PK.map(function (x) { return '<button type="button" class="msst-pk" data-k="' + esc(x.k) + '"><span class="ic">' + x.ic + '</span><b>' + esc(x.name) + '</b><span>' + esc(x.line) + '</span></button>'; }).join('') + '</div>');
      else if (P.n === 2) h = card(2, T.s2 || 'Pick your map', T.l2 || '', list(p.maps.map(function (m) { return '<img src="' + esc(IMGF('th-3-11-02-map-' + p.k + '-' + m.k + '.jpg')) + '" alt=""><span><b>' + esc(m.t) + '.</b> ' + esc(m.d) + '</span>'; })));
      else if (P.n === 3) h = card(3, T.s3 || 'Pick your source', T.l3 || '', list(p.sources.map(function (s) { return '<img src="' + esc(IMGF('th-3-11-01-' + s.id + '.jpg')) + '" alt=""><span><b>' + esc(s.t) + '</b><i>' + esc(s.meta) + '</i></span>'; })));
      else if (P.n === 4) h = card(4, T.s4 || 'Pick a community fact', T.l4 || '', list(p.comms.map(function (c) { return '<span>👪 ' + esc(c) + '</span>'; })));
      else h = card(5, T.s5 || 'Pick a virtue', T.l5 || '', list(p.virtues.map(function (v) { return '<span>🏛️ <b>' + esc(v.v.charAt(0).toUpperCase() + v.v.slice(1)) + ':</b> ' + esc(v.d) + '</span>'; })));
      root.innerHTML = h;
      var bk = root.querySelector('[data-back]'); if (bk) bk.onclick = function () { P.n--; save(); draw(); };
      [].forEach.call(root.querySelectorAll('.msst-pk'), function (b) { b.onclick = function () { if (P.place !== b.dataset.k) { P.map = P.src = P.comm = P.virt = null; } P.place = b.dataset.k; P.n = 2; save(); draw(); top(); if (H.sfx) H.sfx('click'); }; });
      [].forEach.call(root.querySelectorAll('.msst-opt'), function (b) { b.onclick = function () { var j = +b.dataset.j; if (H.sfx) H.sfx('click');
        if (P.n === 2) P.map = j; else if (P.n === 3) P.src = j; else if (P.n === 4) P.comm = j; else P.virt = j;
        if (P.n < 5) { P.n++; save(); draw(); top(); return; }
        var s = p.sources[P.src]; S.plan = { lesson: ST.lesson || '', place: p.k, placeName: p.name, map: p.maps[P.map], source: { id: s.id, t: s.t, meta: s.meta, kind: s.kind, credit: s.credit }, comm: p.comms[P.comm], virtue: p.virtues[P.virt], text: '', at: Date.now(), here: true };
        delete S.pick; fresh(); save(); draw(); top(); }; }); }
    function top() { var r = root.getBoundingClientRect(); if (r.top < 0 || r.top > innerHeight * .6) root.scrollIntoView({ block: 'start', behavior: H.calm && H.calm() ? 'auto' : 'smooth' }); }

    /* ---------- the studio: five slides, three steps each, one step at a time ---------- */
    function draw() {
      if (ST.mode === 'show' && !editing) { drawShow(); return; }
      if (!ready()) { drawPlan(); return; }
      var s = S.slides[cur], c = CR[cur], n = nDone(), st = s.st || 1, T = ST.stepsT || ['Pick the picture', 'Write your words', 'Slide ready'];
      var meter = '<div class="msst-meter" role="img" aria-label="' + n + ' of ' + CR.length + ' slides ready">' + CR.map(function (x, i) { return '<i class="' + (slideOk(i) ? 'on' : '') + '" title="' + esc(x.name) + '">' + esc(x.icon || '') + '</i>'; }).join('') + '<span>' + n + ' of ' + CR.length + ' ' + esc(ST.readyT || 'slides ready') + '</span></div>';
      var rail = '<div class="msst-rail" role="tablist" aria-label="My slides">' + CR.map(function (x, i) { return '<button type="button" role="tab" class="msst-th' + (i === cur ? ' cur' : '') + (slideOk(i) ? ' ok' : '') + '" data-i="' + i + '" aria-selected="' + (i === cur) + '"><span>' + (slideOk(i) ? '✓' : i + 1) + '</span>' + esc(x.icon || '') + '<small>' + esc(x.short || x.name) + '</small></button>'; }).join('') + '</div>';
      var dots = ''; for (var j = 1; j <= 3; j++) dots += '<i class="' + (j < st ? 'done' : j === st ? 'on' : '') + '"></i>';
      var head = '<div class="top"><span>' + esc((ST.slideT || 'Slide') + ' ' + (cur + 1) + ' · ' + (ST.stepT || 'Step {n} of {t}').replace('{n}', st).replace('{t}', 3)) + '</span><span class="dots">' + dots + '</span></div><h5>' + esc(c.icon || '') + ' ' + esc(c.name) + ': ' + esc(T[st - 1]) + '</h5>';
      var pl = S.plan, fromPlan = c.k === 'map' ? (pl.map ? pl.map.t + '. ' + pl.map.d : '') : c.k === 'source' ? (pl.source ? pl.source.t + ', ' + pl.source.meta : '') : c.k === 'comm' ? pl.comm || '' : c.k === 'virtue' ? (pl.virtue ? pl.virtue.v.charAt(0).toUpperCase() + pl.virtue.v.slice(1) + ': ' + pl.virtue.d : '') : (pack() ? pack().name : '');
      var note = fromPlan ? '<p class="msst-plan">📌 <b>' + esc(ST.fromPlanT || 'From your plan:') + '</b> ' + esc(fromPlan) + '</p>' : '';
      var body = '';
      if (st === 1) { var O = opts(cur);
        body = '<p>' + esc(fill(c.picAsk || ST.picAskT || 'Which real picture goes on this slide?')) + '</p><div class="msst-bank" role="listbox" aria-label="' + esc(ST.bankT || 'Pictures') + '">' + O.map(function (b) { var on = s.img === b.id; return '<button type="button" role="option" class="msst-ph' + (on ? ' on' : '') + '" data-k="' + esc(b.id) + '" aria-selected="' + on + '"><img src="' + esc(thumb(b)) + '" alt="' + esc(b.cap) + '"><span>' + esc(b.short || b.cap) + '</span></button>'; }).join('') + '</div>' +
          '<div class="msst-acts"><button type="button" class="msst-btn gold" data-go="2">' + esc(ST.usePicT || 'Use this picture') + ' ➡️</button></div>'; }
      else if (st === 2) { var w = words(s.text), ck = checks(cur);
        var nameRow = c.k === 'welcome' ? '<label class="msst-lab" for="msst-name">✏️ ' + esc(ST.nameAskT || 'Your first name') + '</label><input id="msst-name" class="msst-name" maxlength="24" autocomplete="off" value="' + esc(name()) + '" placeholder="' + esc(ST.namePhT || 'Your first name') + '">' : '';
        body = note + nameRow + '<label class="msst-lab" for="msst-text">' + esc(fill(c.ask)) + '</label><textarea id="msst-text" rows="3" placeholder="' + esc(fill(c.hint)) + '">' + esc(s.text) + '</textarea>' +
          (!s.text.trim() && c.starter ? '<button type="button" class="msst-mini" id="msst-start">✏️ ' + esc(fill(c.starter)) + '</button>' : '') +
          '<div class="msst-count' + (w > MAXW ? ' over' : w >= MINW ? ' good' : '') + '">📝 ' + w + ' of ' + MAXW + ' ' + esc(ST.wordsT || 'words') + (w > MAXW ? ' · ' + esc((ST.overT || 'Too many! Cut {n}.').replace('{n}', w - MAXW)) : w < MINW ? ' · ' + esc((ST.underT || 'Write at least {n}.').replace('{n}', MINW)) : ' ✓') + '</div>' +
          '<ul class="msst-checks" aria-label="' + esc(ST.checksT || 'Strong slide checks') + '">' + ck.map(function (x) { return '<li class="' + (x.ok ? 'ok' : '') + '">' + esc(x.lab) + '</li>'; }).join('') + '</ul><div class="msst-fb" aria-live="polite"></div>' +
          '<div class="msst-acts"><button type="button" class="msst-btn ghost" data-go="1">⬅️ ' + esc(ST.picBackT || 'Picture') + '</button><button type="button" class="msst-btn gold' + (slideOk(cur) ? '' : ' notready') + '" data-check>' + esc(ST.checkBT || 'Check my slide') + ' ➡️</button></div>'; }
      else { body = '<p class="msst-ok">✅ ' + esc(fill(ST.okT || 'This slide is ready. A visitor can read it in a few seconds.')) + '</p>' +
          '<div class="msst-acts"><button type="button" class="msst-btn ghost" data-go="2">✏️ ' + esc(ST.editT || 'Change my words') + '</button>' + (cur < CR.length - 1 ? '<button type="button" class="msst-btn gold" data-next>' + esc(ST.nextT || 'Next: slide') + ' ' + (cur + 2) + ' ▸</button>' : (n === CR.length ? '<span class="msst-alldone">⭐ ' + esc(ST.allT || '') + '</span>' : '<button type="button" class="msst-btn gold" data-todo>' + esc(ST.todoT || 'Finish my other slides') + ' ▸</button>')) + '</div>'; }
      root.innerHTML = '<div class="msst-top"><b>' + esc(fill(ST.deckT || 'My exhibit')) + '</b>' + meter + '</div>' + rail +
        '<div class="msst-main"><div class="msst-view" aria-live="polite">' + slideHTML(cur) + '</div><div class="msst-step">' + head + body + '</div></div>' +
        (ST.mode === 'show' ? '<div class="msst-acts"><button type="button" class="msst-btn gold" id="msst-back">✅ ' + esc(ST.backShowT || 'Done: back to my show') + '</button></div>' : '') +
        '<p class="msst-foot">' + esc(ST.keepT || 'Your slides save in this browser.') + ' <button type="button" class="msst-link" id="msst-replan">↩️ ' + esc(ST.replanT || 'Change my place') + '</button></p>';
      wire();
    }
    function preview() { var v = root.querySelector('.msst-view'); if (v) v.innerHTML = slideHTML(cur); }
    function paintChecks() { var s = S.slides[cur], w = words(s.text), ck = checks(cur), q = function (x) { return root.querySelector(x); };
      var cn = q('.msst-count'); if (cn) { cn.className = 'msst-count' + (w > MAXW ? ' over' : w >= MINW ? ' good' : ''); cn.textContent = '📝 ' + w + ' of ' + MAXW + ' ' + (ST.wordsT || 'words') + (w > MAXW ? ' · ' + (ST.overT || 'Too many! Cut {n}.').replace('{n}', w - MAXW) : w < MINW ? ' · ' + (ST.underT || 'Write at least {n}.').replace('{n}', MINW) : ' ✓'); }
      var ul = q('.msst-checks'); if (ul) ul.innerHTML = ck.map(function (x) { return '<li class="' + (x.ok ? 'ok' : '') + '">' + esc(x.lab) + '</li>'; }).join('');
      var b = q('[data-check]'); if (b) b.classList.toggle('notready', !slideOk(cur));
      var fb = q('.msst-fb'); if (fb && fb.innerHTML) fb.innerHTML = miss(); }
    function miss() { var ck = checks(cur).filter(function (x) { return !x.ok; }); if (!ck.length) return '';
      var w = words(S.slides[cur].text), N = ST.nudgeT || {};
      return '<div class="msst-notyet">🔎 <b>' + esc(ST.almostT || 'Almost!') + '</b> ' + ck.map(function (x) { return esc(fill(x.k === 'words' ? (w > MAXW ? (N.over || 'Cut {n} words.').replace('{n}', w - MAXW) : (N.under || 'Add {n} more words.').replace('{n}', MINW - w)) : (N[x.k] || x.lab))); }).join(' ') + '</div>'; }
    function wire() {
      var s = S.slides[cur], q = function (sel) { return root.querySelector(sel); };
      [].forEach.call(root.querySelectorAll('.msst-th'), function (b) { b.onclick = function () { go(+b.dataset.i); }; });
      [].forEach.call(root.querySelectorAll('.msst-ph'), function (b) { b.onclick = function () { s.img = b.dataset.k; save(); draw(); if (H.sfx) H.sfx('click'); }; });
      [].forEach.call(root.querySelectorAll('[data-go]'), function (b) { b.onclick = function () { s.st = +b.dataset.go; save(); draw(); if (H.sfx) H.sfx('click'); var t = q('#msst-text'); if (t && !s.text) t.focus({ preventScroll: true }); }; });
      var ta = q('#msst-text'); if (ta) ta.addEventListener('input', function () { s.text = ta.value; preview(); paintChecks(); clearTimeout(ta._t); ta._t = setTimeout(save, 500); });
      var nm = q('#msst-name'); if (nm) nm.addEventListener('input', function () { if (H.setName) H.setName(nm.value.trim()); preview(); paintChecks(); clearTimeout(nm._t); nm._t = setTimeout(save, 500); });
      var sb = q('#msst-start'); if (sb) sb.onclick = function () { s.text = fill(CR[cur].starter); save(); draw(); var t2 = q('#msst-text'); if (t2) { t2.focus({ preventScroll: true }); t2.setSelectionRange(t2.value.length, t2.value.length); } };
      var ck = q('[data-check]'); if (ck) ck.onclick = function () { save(); if (slideOk(cur)) { s.st = 3; save(); draw(); if (H.sfx) H.sfx('win'); if (H.slideDone) H.slideDone(cur); return; } if (H.sfx) H.sfx('miss'); q('.msst-fb').innerHTML = miss(); };
      var nx = q('[data-next]'); if (nx) nx.onclick = function () { go(cur + 1); };
      var td = q('[data-todo]'); if (td) td.onclick = function () { for (var i = 0; i < CR.length; i++) if (!slideOk(i)) return go(i); };
      var bk = q('#msst-back'); if (bk) bk.onclick = function () { editing = false; draw(); if (H.change) H.change(); };
      var rp = q('#msst-replan'); rp.onclick = function () { if (!rp.dataset.sure) { rp.dataset.sure = 1; rp.textContent = ST.replanSureT || 'Tap again: you will pick a new place and start new slides'; setTimeout(function () { if (rp.isConnected) { delete rp.dataset.sure; rp.textContent = '↩️ ' + (ST.replanT || 'Change my place'); } }, 5000); return; }
        S.plan = null; S.slides = null; S.slidesFor = null; S.pick = { n: 1 }; cur = 0; save(); draw(); top(); };
    }
    function go(i) { if (i < 0 || i >= CR.length) return; cur = S.cur = i; save(); draw(); var t = root.querySelector('.msst-rail'); if (t && t.getBoundingClientRect().top < 0) t.scrollIntoView({ block: 'start' }); }

    /* ---------- the show view (4.13.02, cfg.mode 'show'): the deck, a voice per slide, Present, Make my video ---------- */
    function drawShow() {
      var n = nDone(), all = n === CR.length, any = hasAny(), recN = Object.keys(REC).length;
      if (!any) { root.innerHTML = '<div class="msst-none"><span class="ic" aria-hidden="true">🗂️</span><h4>' + esc(ST.noneH || 'Your slides aren’t on this computer.') + '</h4><p>' + esc(ST.noneT || '') + '</p><div class="msst-acts"><button type="button" class="msst-btn gold" id="msst-build">✏️ ' + esc(ST.buildT || 'Build my six slides here') + '</button></div>' + (ST.backLink ? '<p class="msst-foot">' + esc(ST.backLinkT || '') + ' <a class="msst-link" href="' + esc(ST.backLink) + '" target="_blank" rel="noopener">' + esc(ST.backLinkA || 'Open the last lesson') + '</a></p>' : '') + '</div>';
        root.querySelector('#msst-build').onclick = function () { editing = true; draw(); if (H.change) H.change(); }; return; }
      var meter = '<div class="msst-meter" role="img" aria-label="' + n + ' of ' + CR.length + ' slides ready">' + CR.map(function (x, i) { return '<i class="' + (slideOk(i) ? 'on' : '') + '" title="' + esc(x.name) + '">' + esc(x.icon || '') + '</i>'; }).join('') + '<span>' + n + ' of ' + CR.length + ' ' + esc(ST.readyT || 'slides ready') + '</span></div>';
      var rail = '<div class="msst-rail" role="tablist" aria-label="My slides">' + CR.map(function (x, i) { return '<button type="button" role="tab" class="msst-th' + (i === cur ? ' cur' : '') + (slideOk(i) ? ' ok' : '') + (REC[i] ? ' rec' : '') + '" data-i="' + i + '" aria-selected="' + (i === cur) + '"><span>' + (i + 1) + '</span>' + esc(x.icon || '') + '<small>' + esc(x.short || x.name) + '</small>' + (REC[i] ? '<em aria-label="voice recorded">🎙️</em>' : '') + '</button>'; }).join('') + '</div>';
      var warn = all ? '' : '<p class="msst-ev">🔧 ' + esc((ST.fixT || '{n} of 6 slides are ready. Fix the others before you present: tap Edit my slides.').replace('{n}', n)) + '</p>';
      root.innerHTML = '<div class="msst-top"><b>' + esc(ST.deckT || 'My exhibit') + (name() ? ' <small>' + esc(ST.byT || 'by') + ' ' + esc(name()) + '</small>' : '') + '</b>' + meter + '</div>' + rail +
        '<div class="msst-main"><div class="msst-view" aria-live="polite">' + slideHTML(cur) + '</div><div class="msst-tools"><p class="msst-lab">' + esc((ST.slideT || 'Slide') + ' ' + (cur + 1) + ' of ' + CR.length + ': ' + CR[cur].name) + '</p>' + warn + rec() +
        '<div class="msst-navrow">' + (cur ? '<button type="button" class="msst-mini" id="msst-prev">◂ ' + esc(ST.slideT || 'Slide') + ' ' + cur + '</button>' : '') + (cur < CR.length - 1 ? '<button type="button" class="msst-mini" id="msst-next">' + esc(ST.nextT || 'Next: slide') + ' ' + (cur + 2) + ' ▸</button>' : '') + '</div></div></div>' +
        '<div class="msst-acts"><button type="button" class="msst-btn gold" id="msst-show"' + (all ? '' : ' aria-disabled="true"') + '>▶ ' + esc(ST.presentT || 'Present') + '</button><button type="button" class="msst-btn" id="msst-vid"' + (all ? '' : ' aria-disabled="true"') + '>🎬 ' + esc(ST.videoT || 'Make my video') + '</button><button type="button" class="msst-btn ghost" id="msst-edit">✏️ ' + esc(ST.editT || 'Edit my slides') + '</button><button type="button" class="msst-btn ghost" id="msst-dl">⬇️ ' + esc(ST.dlT || 'Download my slides') + '</button></div>' +
        '<p class="msst-foot">' + (S.shown ? '✅ ' + esc(ST.shownT || 'You presented your exhibit.') + ' ' : '') + (recN ? '🎙️ ' + esc((ST.recCountT || '{n} of 6 slides have your voice.').replace('{n}', recN)) + ' ' : '') + esc(ST.showFootT || '') + '</p>';
      var q = function (sel) { return root.querySelector(sel); };
      [].forEach.call(root.querySelectorAll('.msst-th'), function (b) { b.onclick = function () { cur = S.cur = +b.dataset.i; save(); draw(); }; });
      var pv = q('#msst-prev'), nx = q('#msst-next'); if (pv) pv.onclick = function () { cur = S.cur = cur - 1; save(); draw(); }; if (nx) nx.onclick = function () { cur = S.cur = cur + 1; save(); draw(); };
      q('#msst-show').onclick = function () { if (!all) { toast((ST.fixT || '').replace('{n}', n)); return; } show(); };
      q('#msst-vid').onclick = function () { if (!all) { toast((ST.fixT || '').replace('{n}', n)); return; } movie(); };
      q('#msst-edit').onclick = function () { editing = true; draw(); if (H.change) H.change(); };
      q('#msst-dl').onclick = download;
      var rg = q('#msst-recgo'), rs = q('#msst-recstop'), rd = q('#msst-recdel'), ix = cur;
      if (rg) rg.onclick = function () { record(ix); }; if (rs) rs.onclick = function () { if (recNow) recNow.stop(); }; if (rd) rd.onclick = function () { if (REC[ix]) URL.revokeObjectURL(REC[ix].url); delete REC[ix]; draw(); };
    }

    /* ---------- voice per slide (4.13.02 only: cfg.present). Kept in memory, never saved or sent anywhere. ---------- */
    var REC = {}, recNow = null, MAXREC = ST.maxRecord || 30;
    function rec() { if (!ST.present || ST.record === false) return ''; var r = REC[cur];
      return '<div class="msst-rec"><p class="msst-lab">🎙️ ' + esc(ST.recT || 'Your voice (optional)') + '</p>' + (recNow ? '<button type="button" class="msst-mini on" id="msst-recstop">⏹ Stop <span id="msst-rect">0</span>s</button>' :
        r ? '<audio controls src="' + r.url + '"></audio><div><button type="button" class="msst-mini" id="msst-recgo">↻ Record again</button><button type="button" class="msst-mini" id="msst-recdel">✕ Delete</button></div>' :
        '<button type="button" class="msst-mini" id="msst-recgo">🎙️ ' + esc(ST.recGoT || 'Record my voice for this slide') + '</button>') + '<p class="msst-note">' + esc((ST.recNoteT || 'Talk for up to {n} seconds. Your voice is not saved anywhere else, so download before you close this page.').replace('{n}', MAXREC)) + '</p><p class="msst-ev" id="msst-recmsg" hidden></p></div>'; }
    function record(ix) { var blocked = ST.micT || 'The microphone is blocked here. Your slides still work.';
      var m = function (t) { var e = root.querySelector('#msst-recmsg'); if (e) { e.hidden = false; e.textContent = t; } };
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) { m(blocked); return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) { var chunks = [], mr; try { mr = new MediaRecorder(stream); } catch (e) { stream.getTracks().forEach(function (t) { t.stop(); }); m(blocked); return; }
        var t0 = Date.now(), tm = setInterval(function () { var s = Math.floor((Date.now() - t0) / 1000), e = root.querySelector('#msst-rect'); if (e) e.textContent = s; if (s >= MAXREC && mr.state === 'recording') mr.stop(); }, 250);
        mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
        mr.onstop = function () { clearInterval(tm); stream.getTracks().forEach(function (t) { t.stop(); }); recNow = null; var blob = new Blob(chunks, { type: mr.mimeType || 'audio/webm' }); if (REC[ix]) URL.revokeObjectURL(REC[ix].url); if (blob.size) REC[ix] = { blob: blob, url: URL.createObjectURL(blob) }; draw(); };
        recNow = mr; mr.start(); draw(); }, function () { m(blocked); }); }

    /* ---------- present mode (4.13.02) ---------- */
    function show() { var i = 0, left = (ST.minutes || 3) * 60, o = document.createElement('div'); o.className = 'msst-show'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', ST.presentT || 'Present');
      o.innerHTML = '<div class="stage"></div>' + (H.react ? '<div class="door" aria-live="polite"><span class="av" aria-hidden="true">👩‍🏫</span><span class="tx"></span></div>' : '') + '<div class="bar"><button type="button" data-a="prev" aria-label="Previous slide">◂</button><span class="n"></span><button type="button" data-a="next" aria-label="Next slide">▸</button><button type="button" data-a="say" class="say" hidden>🔊 ' + esc(ST.myVoiceT || 'My voice') + '</button><span class="clock"></span><button type="button" data-a="x">✕ Done</button></div>';
      document.body.appendChild(o); var stage = o.querySelector('.stage'), clock = o.querySelector('.clock');
      var door = o.querySelector('.door'), dt = 0, au = null, seen = {};
      function paint() { stage.innerHTML = slideHTML(i); o.querySelector('.n').textContent = (ST.slideT || 'Slide') + ' ' + (i + 1) + ' of ' + CR.length;
        if (au) { au.pause(); au = null; } var sb = o.querySelector('.say'); sb.hidden = !REC[i]; sb.textContent = '🔊 ' + (ST.myVoiceT || 'My voice');
        seen[i] = 1; if (door) { door.classList.remove('on'); clearTimeout(dt); var t = H.react(i, S.slides[i], CR[i]); if (t) dt = setTimeout(function () { door.querySelector('.tx').textContent = t; door.classList.add('on'); }, 1100); }
        if (i === CR.length - 1 && Object.keys(seen).length === CR.length && !S.shown) { S.shown = true; save(); if (H.shown) H.shown(); } }
      function tick() { left--; var m = Math.max(0, left); clock.textContent = '⏱ ' + Math.floor(m / 60) + ':' + ('0' + m % 60).slice(-2); clock.classList.toggle('low', m <= 20); if (left === 0) clock.textContent = '⏰ ' + (ST.timeT || 'Time!'); }
      function close() { clearInterval(tm); clearTimeout(dt); if (au) au.pause(); if (ST.mode === 'show') draw(); document.removeEventListener('keydown', key); if (document.fullscreenElement) document.exitFullscreen().catch(function () {}); o.remove(); }
      function key(e) { if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); i = Math.min(CR.length - 1, i + 1); paint(); } else if (e.key === 'ArrowLeft') { i = Math.max(0, i - 1); paint(); } else if (e.key === 'Escape') close(); }
      o.addEventListener('click', function (e) { var a = e.target.closest('[data-a]'); if (!a) return; if (a.dataset.a === 'say') { if (!REC[i]) return; if (au) { au.pause(); au = null; a.textContent = '🔊 ' + (ST.myVoiceT || 'My voice'); return; } au = new Audio(REC[i].url); au.onended = function () { au = null; a.textContent = '🔊 ' + (ST.myVoiceT || 'My voice'); }; var pr = au.play(); if (pr && pr.catch) pr.catch(function () {}); a.textContent = '⏸ ' + (ST.myVoiceT || 'My voice'); return; } if (a.dataset.a === 'x') close(); else { i = Math.max(0, Math.min(CR.length - 1, i + (a.dataset.a === 'next' ? 1 : -1))); paint(); } });
      document.addEventListener('keydown', key); paint(); left++; tick(); var tm = setInterval(tick, 1000); try { if (o.requestFullscreen) o.requestFullscreen().catch(function () {}); } catch (e) {} }


    /* ---------- 🎬 Make my video (4.13.02; ported from G3 science 32.02's wf-studio.js movie()): the slides play in order
       on a canvas, each with the student's own recording (or about 6 seconds without one), and the browser records it as
       an .mp4 (Chrome, Edge, Safari) or .webm. It takes as long as the video. Nothing is uploaded. ---------- */
    function loadImg(u) { return new Promise(function (ok) { if (!u) return ok(null); var im = new Image(); im.crossOrigin = 'anonymous'; im.onload = function () { ok(im); }; im.onerror = function () { ok(null); }; im.src = u; }); }
    function cover(x, im, X0, Y0, W, Hh) { var r = W / Hh, iw = im.naturalWidth, ih = im.naturalHeight, sw = iw, sh = ih; if (iw / ih > r) sw = ih * r; else sh = iw / r; x.drawImage(im, (iw - sw) / 2, (ih - sh) / 2, sw, sh, X0, Y0, W, Hh); }
    function wrapT(x, t, X0, Y0, W, maxH, size, font, lh) { var s = size, L;
      for (;;) { x.font = font.replace('{s}', s); L = []; var line = ''; t.split(/\s+/).forEach(function (w) { var tt = line ? line + ' ' + w : w; if (x.measureText(tt).width > W && line) { L.push(line); line = w; } else line = tt; }); if (line) L.push(line);
        if (L.length * s * lh <= maxH || s <= 16) break; s -= 2; }
      L.forEach(function (l, j) { x.fillText(l, X0, Y0 + s + j * s * lh); }); return Y0 + L.length * s * lh; }
    function paintV(x, i, im) { var c = CR[i], s = S.slides[i], t = s.text.trim() || c.hint, G = c.color || '#1E8C8C', cap = capOf(s), nm = name();
      x.fillStyle = '#14213D'; x.fillRect(0, 0, 1280, 720); x.textBaseline = 'alphabetic'; x.textAlign = 'left';
      if (c.title) { if (im) cover(x, im, 0, 0, 1280, 720); var g = x.createLinearGradient(0, 300, 0, 720); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(.35, 'rgba(0,0,0,.78)'); g.addColorStop(1, 'rgba(0,0,0,.86)'); x.fillStyle = g; x.fillRect(0, 300, 1280, 420);
        x.fillStyle = '#FFD25E'; x.font = 'bold 24px Arial'; x.fillText((ST.deckKicker || '').toUpperCase(), 60, 470); x.fillStyle = '#fff'; x.font = 'bold 58px Georgia'; x.fillText(c.name, 60, 535);
        var y = wrapT(x, t, 60, 552, 1160, 110, 32, '{s}px Arial', 1.3); if (nm) { x.fillStyle = '#FFD25E'; x.font = 'italic 26px Georgia'; x.fillText((ST.byT || 'by') + ' ' + nm, 60, Math.min(700, y + 34)); } }
      else { if (im) cover(x, im, 0, 0, 666, 720); else { x.fillStyle = '#0b1020'; x.fillRect(0, 0, 666, 720); } x.fillStyle = G; x.fillRect(666, 0, 10, 720);
        x.fillStyle = '#FFD25E'; x.font = 'bold 26px Arial'; x.fillText(((c.icon ? c.icon + '  ' : '') + c.name).toUpperCase(), 712, 90); x.fillStyle = '#fff'; wrapT(x, t, 712, 120, 520, 560, 40, '{s}px Arial', 1.32); }
      if (cap) { x.font = '16px Arial'; var w = x.measureText('📷 ' + cap).width + 16, X0 = c.title ? 1264 - w : 12; x.fillStyle = 'rgba(0,0,0,.6)'; x.fillRect(X0, 690, w, 24); x.fillStyle = '#fff'; x.fillText('📷 ' + cap, X0 + 8, 708); } }
    function movie() {
      var cant = ST.noVideoT || 'This browser can’t make videos. Use Download my slides instead.';
      if (!window.MediaRecorder || !HTMLCanvasElement.prototype.captureStream) { toast(cant); return; }
      var types = ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/mp4;codecs=avc1,mp4a.40.2', 'video/mp4;codecs=avc1,opus', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm'], type = types.filter(function (t) { return MediaRecorder.isTypeSupported(t); })[0];
      if (!type) { toast(cant); return; }
      var o = document.createElement('div'); o.className = 'msst-show msst-making'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', ST.makingVidT || 'Making my video');
      o.innerHTML = '<div class="mk"><h4>🎬 ' + esc(ST.makingVidT || 'Making your video…') + '</h4><canvas width="1280" height="720"></canvas><div class="bar2"><i></i></div><p class="mkt">' + esc(ST.readyingT || 'Getting ready…') + '</p><p class="msst-note">' + esc(ST.keepOpenT || 'Keep this page open. Your video is made on this computer and isn’t uploaded anywhere.') + '</p><button type="button" class="msst-btn ghost" data-x>' + esc(ST.cancelT || 'Cancel') + '</button></div>';
      document.body.appendChild(o); var cv = o.querySelector('canvas'), x = cv.getContext('2d'), bar = o.querySelector('.bar2 i'), msg = o.querySelector('.mkt'), stop = false, mr = null, AC = null, tk = 0;
      o.querySelector('[data-x]').onclick = function () { stop = true; clearInterval(tk); if (mr && mr.state === 'recording') mr.stop(); o.remove(); try { AC && AC.close(); } catch (e) {} };
      var AudioC = window.AudioContext || window.webkitAudioContext; try { AC = AudioC ? new AudioC() : null; } catch (e) { AC = null; } var dest = AC && AC.createMediaStreamDestination ? AC.createMediaStreamDestination() : null;
      Promise.all(CR.map(function (c, i) { return loadImg(picSrc(S.slides[i])); })).then(function (ims) {
        return Promise.all(CR.map(function (c, i) { var r = REC[i]; return r && AC ? r.blob.arrayBuffer().then(function (b) { return AC.decodeAudioData(b); }).catch(function () { return null; }) : Promise.resolve(null); })).then(function (bufs) { return [ims, bufs]; });
      }).then(function (res) { if (stop) return; var ims = res[0], bufs = res[1];
        var durs = CR.map(function (c, i) { return bufs[i] ? bufs[i].duration + 1.2 : (ST.silentSec || 6); }), total = durs.reduce(function (a, b) { return a + b; }, 0) + 1;
        try { paintV(x, 0, ims[0]); } catch (e) {}
        var stream = cv.captureStream(30); if (dest) dest.stream.getAudioTracks().forEach(function (t) { stream.addTrack(t); });
        var chunks = []; try { mr = new MediaRecorder(stream, { mimeType: type, videoBitsPerSecond: 2500000 }); } catch (e) { o.remove(); toast(cant); return; }
        mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
        mr.onstop = function () { clearInterval(tk); if (stop) return; try { AC && AC.close(); } catch (e) {} var ext = /mp4/.test(type) ? 'mp4' : 'webm', blob = new Blob(chunks, { type: type.split(';')[0] }), a = document.createElement('a');
          a.href = URL.createObjectURL(blob); a.download = (ST.fileName || 'My-Museum-Exhibit') + '-video.' + ext; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 5000);
          o.remove(); S.video = true; save(); draw(); toast(ST.videoDoneT || '🎬 Your video is in your Downloads. You can upload it to Canvas too.'); if (H.video) H.video(); if (H.sfx) H.sfx('win'); };
        if (AC && AC.state === 'suspended') AC.resume();
        mr.start(1000); var t0 = performance.now(), cu = -1, starts = [], acc = 0; durs.forEach(function (v) { starts.push(acc); acc += v; });
        tk = setInterval(function () { var t = (performance.now() - t0) / 1000, i = 0; while (i < CR.length - 1 && t >= starts[i + 1]) i++;
          if (i !== cu) { cu = i; if (bufs[i] && AC && dest) { var src = AC.createBufferSource(); src.buffer = bufs[i]; src.connect(dest); src.start(AC.currentTime + .4); } msg.textContent = (ST.slideT || 'Slide') + ' ' + (i + 1) + ' of ' + CR.length + (bufs[i] ? ' · ' + (ST.withVoiceT || 'with your voice') : ''); }
          try { paintV(x, i, ims[i]); } catch (e) {} bar.style.width = Math.min(100, t / total * 100) + '%'; if (t >= total && mr.state === 'recording') mr.stop(); }, 100);
      });
    }

    /* ---------- print / save as PDF ---------- */
    function print() { var w = window.open(''); if (!w) { toast(ST.popupT || 'Your browser blocked the print window. Allow pop-ups, then try again.'); return; }
      var css = [].slice.call(document.styleSheets).map(function (sh) { try { return [].slice.call(sh.cssRules).map(function (r) { return r.cssText; }).join('\n'); } catch (e) { return ''; } }).join('\n');
      w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>' + esc(ST.deckT || 'My exhibit') + '</title><style>' + css + '\nbody{margin:0;background:#fff}.msst-print{width:960px;margin:0 auto}.msst-print .msst-sl{margin:0 0 18px;page-break-inside:avoid;break-inside:avoid}@page{size:landscape;margin:10mm}</style></head><body><div class="msst-print">' +
        CR.map(function (c, i) { return slideHTML(i); }).join('') + '</div></body></html>');
      w.document.close(); setTimeout(function () { w.focus(); w.print(); }, 900); }


    /* ---------- a real PowerPoint file (PptxGenJS, loaded only now). Pictures are fitted whole (never cropped: they are evidence). ---------- */
    function lib(cb) { if (window.PptxGenJS) return cb(); var sc = document.createElement('script'), inl = document.getElementById('msst-pptx-src');
      if (inl) { sc.textContent = inl.textContent; document.head.appendChild(sc); return window.PptxGenJS ? cb() : (toast(ST.libT || 'The slide maker could not load. Use Print or save as PDF instead.'), done(false)); }
      sc.src = new URL(ST.lib, document.baseURI).href; sc.onload = cb; sc.onerror = function () { toast(ST.libT || 'The slide maker could not load. Use Print or save as PDF instead.'); done(false); }; document.head.appendChild(sc); }
    function boxed(u, bw, bh, mode, cb) { if (!u) return cb(null); var im = new Image(); im.crossOrigin = 'anonymous';
      im.onload = function () { var r = bw / bh, W = im.naturalWidth, Hh = im.naturalHeight, c = document.createElement('canvas'), px = 1400; c.width = px; c.height = Math.round(px / r); var x = c.getContext('2d');
        if (mode === 'cover') { var sw = W, sh = Hh; if (W / Hh > r) sw = Hh * r; else sh = W / r; x.drawImage(im, (W - sw) / 2, (Hh - sh) / 2, sw, sh, 0, 0, c.width, c.height); }
        else { x.fillStyle = '#0E1730'; x.fillRect(0, 0, c.width, c.height); var k = Math.min(c.width / W, c.height / Hh), dw = W * k, dh = Hh * k; x.drawImage(im, (c.width - dw) / 2, (c.height - dh) / 2, dw, dh); }
        try { cb(c.toDataURL('image/jpeg', .86)); } catch (e) { cb(null); } }; im.onerror = function () { cb(null); }; im.src = u; }
    var busy = false;
    function done(ok) { busy = false; if (H.dl) H.dl(ok ? 'done' : 'fail'); if (ok) { S.dl = true; save(); toast(ST.dlToastT || 'Downloaded! Find the file in your Downloads.'); if (H.sfx) H.sfx('win'); } }
    function download() { if (busy || !ready()) return; busy = true; if (H.dl) H.dl('busy');
      var pics = [], left = CR.length; CR.forEach(function (c, i) { boxed(picSrc(S.slides[i]), c.title ? 10 : 5.6, 5.625, c.title ? 'cover' : 'fit', function (u) { pics[i] = u; if (!--left) lib(function () { try { make(pics).then(function () { done(true); }, function () { toast(ST.failT || 'The file did not save. Try again, or use Print or save as PDF.'); done(false); }); } catch (e) { toast(ST.failT || 'The file did not save.'); done(false); } }); }); }); }
    function make(pics) { var X = new window.PptxGenJS(), nm = name(); X.layout = 'LAYOUT_16x9'; X.title = fill(ST.deckT || 'My exhibit'); X.author = nm || (ST.authorT || 'Exhibit Designer');
      CR.forEach(function (c, i) { var s = S.slides[i], sl = X.addSlide(), tx = s.text.trim() || fill(c.hint), cr = credOf(s), cap = capOf(s), G = (c.color || '#1E8C8C').replace('#', '');
        sl.background = { color: '14213D' };
        if (c.title) { if (pics[i]) sl.addImage({ data: pics[i], x: 0, y: 0, w: 10, h: 5.625 });
          sl.addShape('rect', { x: 0, y: 2.6, w: 10, h: 3.025, fill: { color: '000000', transparency: 28 }, line: { color: '000000', transparency: 100 } });
          sl.addText((ST.deckKicker || '').toUpperCase(), { x: .5, y: 2.7, w: 9, h: .35, fontFace: 'Arial', fontSize: 12, bold: true, color: 'FFD25E', charSpacing: 2 });
          sl.addText(title(), { x: .5, y: 3.0, w: 9, h: .75, fontFace: 'Georgia', fontSize: 34, bold: true, color: 'FFFFFF', fit: 'shrink' });
          sl.addText(tx, { x: .5, y: 3.75, w: 9, h: .9, fontFace: 'Arial', fontSize: 20, color: 'FFFFFF', fit: 'shrink', valign: 'top' });
          sl.addText((ST.byT || 'by') + ' ' + (nm || '________') + ', ' + (ST.roleT || 'Exhibit Designer'), { x: .5, y: 4.65, w: 6, h: .4, fontFace: 'Georgia', fontSize: 16, italic: true, color: 'FFD25E' }); }
        else { if (pics[i]) sl.addImage({ data: pics[i], x: 0, y: 0, w: 5.6, h: 5.625 });
          sl.addShape('rect', { x: 5.6, y: 0, w: .08, h: 5.625, fill: { color: G }, line: { color: G } });
          sl.addText(c.name.toUpperCase(), { x: 5.95, y: .4, w: 3.8, h: .6, fontFace: 'Arial', fontSize: 16, bold: true, color: 'FFD25E', fit: 'shrink' });
          sl.addText(tx, { x: 5.95, y: 1.1, w: 3.75, h: 3.6, fontFace: 'Arial', fontSize: 24, color: 'FFFFFF', valign: 'top', fit: 'shrink' });
          if (cap) sl.addText(cap, { x: 5.95, y: 4.75, w: 3.75, h: .45, fontFace: 'Arial', fontSize: 11, italic: true, color: 'C9D3EA', fit: 'shrink', valign: 'top' }); }
        if (cr) sl.addText(cr, { x: .15, y: 5.3, w: c.title ? 9.7 : 5.3, h: .28, fontFace: 'Arial', fontSize: 8, color: 'FFFFFF', align: c.title ? 'right' : 'left', fit: 'shrink' });
        sl.addNotes(c.name + ': ' + fill(c.ask)); });
      return X.writeFile({ fileName: (ST.fileName || 'My-Museum-Exhibit') + '.pptx' }); }

    draw(); if (H.change) setTimeout(H.change, 0);
    return { done: function () { return ready() && nDone() === CR.length; }, n: nDone, ok: slideOk, ready: ready, shown: function () { return !!S.shown; }, video: function () { return !!S.video; }, hasAny: hasAny, editing: function () { return editing; }, present: show, movie: movie, print: print, download: download, lines: lines,
      slides: function () { return S.slides || []; }, plan: function () { return S.plan || null; }, pack: pack, picSrc: function (i) { return S.slides ? picSrc(S.slides[i]) : ''; }, slideHTML: slideHTML, downloaded: function () { return !!S.dl; }, go: go, redraw: draw,
      text: function () { return lines().map(function (l) { return l[0] + ': ' + l[1]; }).join('\n'); }, root: root };
  }
  window.MSStudio = { mount: mount };
})();
