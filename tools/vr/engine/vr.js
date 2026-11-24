/* G3 Social Studies VR · Build the Diorama engine. No week words: everything comes from window.VR (built from week.json). */
(function () {
  var V = window.VR || {}, G = V.game || {}, PRE = V.pre || 'g3ss-vr';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function load() { try { return JSON.parse(localStorage.getItem(PRE) || '{}'); } catch (e) { return {}; } }
  var st = load();
  st.steps = st.steps || []; st.m = st.m || []; st.p = st.p || []; st.w = st.w || ['', ''];
  function save() { try { localStorage.setItem(PRE, JSON.stringify(st)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function words(s) { return (String(s).replace(/___/g, ' ').match(/[A-Za-z0-9’']+/g) || []).length; }

  /* details pill */
  var db = $('#wl-details-btn'), dd = $('#wl-details');
  if (db && dd) db.addEventListener('click', function () { var o = dd.classList.toggle('open'); db.setAttribute('aria-expanded', o); });

  /* audio */
  var audio = null, playing = null;
  $$('.vr-play').forEach(function (b) {
    b.addEventListener('click', function () {
      var c = b.getAttribute('data-clip');
      if (audio) { audio.pause(); }
      $$('.vr-play').forEach(function (x) { x.classList.remove('on'); });
      if (playing === b) { playing = null; return; }
      audio = new Audio(V.clips[c]); playing = b; b.classList.add('on');
      audio.onended = function () { b.classList.remove('on'); playing = null; };
      audio.play().catch(function () { b.classList.remove('on'); });
    });
  });

  /* teacher video: shown only when the file exists */
  if (V.video && window.fetch) {
    fetch(V.video, { method: 'HEAD' }).then(function (r) {
      if (r.ok) { var w = $('#vr-video'); $('video', w).src = V.video; w.hidden = false; }
    }).catch(function () {});
  }

  /* path toggle */
  function showPath(id) {
    $$('.vr-path').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-path') === id); });
    $$('.vr-pane').forEach(function (p) { p.classList.toggle('on', p.id === id); });
    st.path = id; save();
  }
  $$('.vr-path').forEach(function (b) {
    b.addEventListener('click', function () {
      showPath(b.getAttribute('data-path'));
      var p = $('#' + b.getAttribute('data-path')); if (p) p.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  if (st.path) showPath(st.path);

  /* checklist */
  var steps = $$('.vr-step');
  function paintSteps() {
    var n = 0;
    steps.forEach(function (s, i) {
      var d = !!st.steps[i]; if (d) n++;
      s.classList.toggle('done', d);
      var b = $('.vr-chk', s); b.textContent = d ? '✓' : ''; b.setAttribute('aria-pressed', d);
    });
    var t = $('#vr-prog-t'), bar = $('#vr-prog-b');
    if (t) t.textContent = n + ' of ' + steps.length + ' steps done';
    if (bar) bar.style.width = (100 * n / steps.length) + '%';
    var sent = $('#vr-sent'); if (sent) sent.checked = !!st.sent;
    var bd = $('#vr-badge'); if (bd) bd.classList.toggle('on', n === steps.length && !!st.sent);
  }
  steps.forEach(function (s, i) {
    $('.vr-chk', s).addEventListener('click', function () { st.steps[i] = !st.steps[i]; save(); paintSteps(); });
  });
  var sent = $('#vr-sent');
  if (sent) sent.addEventListener('change', function () {
    st.sent = sent.checked;
    try { if (sent.checked) localStorage.setItem('oao.g3ss.vr.' + V.week, 'vr'); } catch (e) {}
    if (sent.checked) steps.forEach(function (s, i) { st.steps[i] = true; });
    save(); paintSteps();
  });
  paintSteps();

  /* help drawer: load the video and images only when opened */
  var help = $('#vr-help');
  if (help) help.addEventListener('toggle', function () {
    if (!help.open) return;
    var f = $('iframe[data-src]', help); if (f && !f.src) f.src = f.getAttribute('data-src');
  });

  /* ---------- 30-second practice timer (data-secs on .vr-timer) ---------- */
  $$('.vr-timer').forEach(function (t) {
    var secs = +t.getAttribute('data-secs') || 30, btn = $('button', t), clk = $('.clock', t), bar = $('.bar i', t), id = null, left = secs;
    function paint() { clk.textContent = '0:' + (left < 10 ? '0' : '') + left; clk.classList.toggle('low', left <= 5); bar.style.width = (100 * left / secs) + '%'; }
    btn.addEventListener('click', function () {
      if (id) { clearInterval(id); id = null; left = secs; paint(); btn.textContent = btn.getAttribute('data-start'); return; }
      left = secs; paint(); btn.textContent = '■ Stop';
      id = setInterval(function () { left--; paint(); if (left <= 0) { clearInterval(id); id = null; btn.textContent = btn.getAttribute('data-start'); clk.textContent = 'Time!'; } }, 1000);
    });
    btn.setAttribute('data-start', btn.textContent); paint();
  });

  /* ---------- Collections Day: put each card on the timeline (G.type = "timeline") ---------- */
  var game = $('#vr-game'), K = G.cards || [], SL = G.slots || [];
  st.t = st.t || [];
  function cur() { for (var i = 0; i < K.length; i++) if (!st.t[i]) return i; return -1; }
  function slotsHtml(active) {
    return '<div class="vr-tl" style="--n:' + SL.length + '" aria-label="Timeline">' + SL.map(function (s) {
      var chips = K.map(function (c, i) { return st.t[i] && c.slot === s.key ? '<span class="chip"><img src="' + c.img + '" alt="">' + esc(c.name) + '</span>' : ''; }).join('');
      return (active ? '<button type="button" class="vr-slot" data-s="' + s.key + '">' : '<div class="vr-slot">') + '<span class="when">' + esc(s.when) + '</span>' + chips + (active ? '</button>' : '</div>');
    }).join('') + '</div>';
  }
  function render() {
    var i = cur();
    if (i < 0) {
      game.innerHTML = slotsHtml(false) + '<div class="vr-fb ok">' + esc(G.done) + '</div>';
      $('#vr-write').hidden = false; checkStamp(); return;
    }
    $('#vr-write').hidden = true;
    var c = K[i];
    game.innerHTML = '<div class="vr-gstep">Card ' + (i + 1) + ' of ' + K.length + '</div>' +
      '<div class="vr-card" draggable="true" id="vr-cardnow"><img src="' + c.img + '" alt="' + esc(c.alt) + '"><div><b>' + esc(c.name) + '</b>' + esc(c.what) +
      '<br><span class="clue">🕰️ ' + esc(c.clue) + '</span></div></div>' + slotsHtml(true) + '<div class="vr-fb" id="vr-fb" aria-live="polite"></div>';
    var fb = $('#vr-fb');
    function pick(k, el) {
      if (k === c.slot) { st.t[i] = true; save(); fb.className = 'vr-fb ok'; fb.textContent = c.ok; $$('.vr-slot', game).forEach(function (b) { b.disabled = true; }); setTimeout(render, 1600); }
      else { fb.className = 'vr-fb no'; fb.textContent = G.miss; if (el) { el.classList.remove('no'); void el.offsetWidth; el.classList.add('no'); } }
    }
    $$('.vr-slot[data-s]', game).forEach(function (b) {
      b.addEventListener('click', function () { pick(b.getAttribute('data-s'), b); });
      b.addEventListener('dragover', function (e) { e.preventDefault(); b.classList.add('drop'); });
      b.addEventListener('dragleave', function () { b.classList.remove('drop'); });
      b.addEventListener('drop', function (e) { e.preventDefault(); b.classList.remove('drop'); pick(b.getAttribute('data-s'), b); });
    });
    var cd = $('#vr-cardnow');
    if (cd) cd.addEventListener('dragstart', function (e) { try { e.dataTransfer.setData('text/plain', 'c'); } catch (x) {} });
  }

  /* writing */
  var tas = $$('#vr-write textarea');
  var last = tas[0];
  tas.forEach(function (t, i) {
    t.value = st.w[i] || '';
    t.addEventListener('focus', function () { last = t; });
    t.addEventListener('input', function () { st.w[i] = t.value; save(); count(); });
  });
  $$('#vr-write .vr-chips button').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = last || tas[0]; if (!t) return;
      t.value = (t.value && !/\s$/.test(t.value) ? t.value + ' ' : t.value) + b.textContent;
      t.dispatchEvent(new Event('input')); t.focus();
    });
  });
  function total() { return tas.reduce(function (a, t) { return a + words(t.value); }, 0); }
  function eachStarted() { return tas.every(function (t) { return words(t.value) >= 4; }); }
  function count() {
    var n = total(), c = $('#vr-count');
    if (c) { c.textContent = n >= G.min ? (eachStarted() ? n + ' words ✓' : n + ' words · finish both sentences') : n + ' of ' + G.min + ' words'; c.classList.toggle('ok', n >= G.min && eachStarted()); }
    checkStamp();
  }
  function studioDone() { return cur() < 0 && total() >= G.min && eachStarted(); }
  function checkStamp() { var s = $('#vr-stamp'); var d = studioDone(); if (s) s.classList.toggle('on', d); if (d) { try { if (localStorage.getItem('oao.g3ss.vr.' + V.week) !== 'vr') localStorage.setItem('oao.g3ss.vr.' + V.week, 'collections'); } catch (e) {} } }

  /* first name with a kind filter */
  var BAD = /(stupid|dumb|idiot|hate|kill|poop|butt|fart|ugly|loser|sex|damn|hell|crap|shit|fuck|bitch|ass\b)/i;
  var nm = $('#vr-name'), nmMsg = $('#vr-name-msg');
  if (nm) {
    nm.value = st.name || '';
    nm.addEventListener('input', function () {
      var v = nm.value.trim();
      if (BAD.test(v) || /[^A-Za-zÀ-ÿ' -]/.test(v)) { nmMsg.textContent = 'Please type just your first name.'; }
      else { nmMsg.textContent = ''; st.name = v; save(); }
    });
  }

  /* PDF */
  var pdf = $('#vr-pdf');
  if (pdf) pdf.addEventListener('click', function () {
    var name = (st.name || '').trim();
    if (!name) { nmMsg.textContent = 'Type your first name first.'; nm.focus(); return; }
    var rows = SL.map(function (sl) {
      var who = K.filter(function (c, i) { return st.t[i] && c.slot === sl.key; }).map(function (c) { return esc(c.name); }).join(', ');
      return '<tr><td>' + esc(sl.when) + '</td><td>' + (who || '<i>nothing placed yet</i>') + '</td></tr>';
    }).join('');
    var sents = tas.map(function (t, i) { return '<p><b>' + esc(G.frames[i]) + '</b><br>' + (t.value ? esc(t.value) : '<i>(not written yet)</i>') + '</p>'; }).join('');
    var h = '<!doctype html><html><head><meta charset="utf-8"><title>' + esc(V.canvas) + ' · ' + esc(name) + '</title><style>body{font:16px/1.5 Arial,sans-serif;max-width:720px;margin:24px auto;padding:0 16px;color:#222}h1{font-size:22px;margin:4px 0}.k{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#7E5A16}table{border-collapse:collapse;width:100%}th{background:#22312F;color:#fff;text-align:left;padding:5px 8px;font-size:13px}td{border:1px solid #ddd;padding:6px 8px}.st{display:inline-block;border:3px solid #1B4332;color:#1B4332;font-weight:900;letter-spacing:2px;padding:3px 12px;border-radius:8px;transform:rotate(-3deg);text-transform:uppercase}@media print{button{display:none}}</style></head><body>' +
      '<div class="k">Optima Academy Online · 3rd Grade Social Studies · Week ' + V.week + '</div><h1>' + esc(V.canvas) + ' (Collections Day)</h1>' +
      '<p><b>Name:</b> ' + esc(name) + ' &nbsp; <b>Date:</b> ' + new Date().toLocaleDateString() + '</p>' +
      '<h2>' + esc(G.title) + '</h2><table><tr><th>When</th><th>Who</th></tr>' + rows + '</table>' +
      '<h2>What I think (' + total() + ' words)</h2>' + sents + (studioDone() ? '<div class="st">' + esc(V.stamp) + '</div>' : '') +
      '<p style="margin-top:24px"><button onclick="print()">🖨 Print or save as PDF</button></p></body></html>';
    var w = null; try { w = window.open('', '_blank'); } catch (e) {}
    if (w && w.document) { w.document.open(); w.document.write(h); w.document.close(); setTimeout(function () { try { w.print(); } catch (e) {} }, 400); }
    else {
      var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([h], { type: 'text/html' }));
      a.download = 'week-' + V.week + '-vr-collections-' + name.replace(/\s+/g, '-') + '.html'; document.body.appendChild(a); a.click(); a.remove();
    }
  });

  if (game) render();
  count();
  window.VR_TEST = { state: st, render: render };
})();
