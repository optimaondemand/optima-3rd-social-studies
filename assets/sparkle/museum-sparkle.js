/* ═══════════════════════════════════════════════════════════════
   OAO Grade 3 Social Studies · Museum Sparkle layer (ms-)  v4
   Guide: Opti the owl docent. The four tabs are four museum rooms.
   Holds NO lesson content: reads the lesson's #ms-data JSON.
   window.MS_IMG / window.MS_AUDIO hold embedded files (data URIs);
   otherwise images/<name> and audio/guide/<name>.

   The visit, in one line: unpack real specimens → run the Time-Lapse
   Case → study the evidence → try the wind → shelve the specimens →
   check yourself → install and open your own exhibit.

   Modules
   - top        one header row; 🔊 Read aloud, ⓘ Lesson details, ✨ Motion,
                🏛️ Museum view pills; banner + Big Question in room 1 only
   - tabs       four numbered room tabs, sticky; ✓ only when the room's job is done;
                first visit to a room: the lights come up and the sign settles
   - opti       voice notes, opt-in read-along (word highlight), gentle head tilt,
                points at the thing he names (DATA.optiCues), nods when a room is done
   - glossary   hover / tap / Tab a dotted word → its meaning
   - specimens  one illustrated object per resource (DATA.specimens), used in
                every room: crate → inspect → case → the student's exhibit
   - crates     Lobby: hold or crowbar → warm light → specimen rises → tag unfolds
                → "what people make from it" machine → log it
   - inspect    lightbox: tilt the specimen, tap numbered details, see the photo
                of where it came from
   - timecase   Gallery: predict → use the resources → time lever; forest seedlings,
                two fish tanks (some left / all caught), oil pumped into a barrel
   - dial       Gallery: Three Views of the Great Plains (place + date always on),
                thumbnails, look closely, side by side
   - wind       Gallery: two soil trays, predict, Try the wind, explain
   - cases      Gallery: shelve the specimens; the object flies into its case
   - onequiz    Workroom: one question at a time
   - exhibit    Exhibit Floor: pick a specimen, the label fills as you write,
                Open my exhibit (cover lifts, light warms, label settles)
   Added for 3.06.01 (all DATA-driven; DATA.map / DATA.size hold the projected shapes):
   - globe      Lobby: a real NASA-picture globe turns to North America, zooms in,
                and the new gallery's doors open
   - wallmap    Gallery: hang each place's label from a clue (one at a time), then
                turn over each postcard and pin it where the photo was taken
   - spacemap   Gallery source room: Earth from space; a slider adds the map lines
   - sizescale  Gallery: lay the U.S. over Canada (same size), then show the people
   Lesson specimens can be postcards (specimen.card = image); DATA.galleryNeeds names
   the Gallery jobs; an Opti note's "at" may be a CSS selector.
   Added for 3.06.02 (DATA.geo holds the projected slice, rivers, borders and label points):
   - cart       Lobby: a cart of covered labels rolls in; lift each cloth, read the clue,
                put the label in its drawer (mountain / river / plain / island)
   - relief     Gallery main attraction: the Relief Table; tilt the map into 3-D,
                cut a slice west to east, walk across the side view, compare two parts
   - reliefsrc  Gallery source room: a real physical map, a color key, borders on/off
   - rain       Gallery: rain on the mountains; the rivers carry it downhill to the sea
   ═══════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  var root = document.documentElement;
  var DATA = {};
  try { DATA = JSON.parse((document.getElementById('ms-data')||{}).textContent || '{}'); } catch(e){ console.warn('ms-data JSON error', e); }
  if (!DATA.lesson) return;

  var LKEY = 'oao.ms.' + DATA.lesson, OFF = 'oao.ms.off', CALM = 'oao.ms.calm', NAMEK = 'oao.ms.curator';
  function sget(k,d){ try{ var v = localStorage.getItem(k); return v==null ? d : JSON.parse(v); }catch(e){ return d; } }
  function sset(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
  var ST = sget(LKEY, {}) || {};
  function save(){ sset(LKEY, ST); }

  var OWL = (window.MS_IMG && window.MS_IMG['opti-owl.png']) || 'images/opti-owl.png';
  var AUDIO = DATA.audioBase || 'audio/guide/';
  var WORDS = DATA.wordBase || 'audio/words/';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function calm(){ return reduce || root.classList.contains('ms-calm'); }

  function el(tag, cls, html){ var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function img(name){ return (window.MS_IMG && window.MS_IMG[name]) || ((DATA.imgBase||'images/') + name); }
  function $(s, r){ return (r||document).querySelector(s); }
  function $$(s, r){ return [].slice.call((r||document).querySelectorAll(s)); }
  function after(a,n){ a.parentNode.insertBefore(n, a.nextSibling); }
  function wait(ms){ return new Promise(function(r){ setTimeout(r, calm() ? Math.min(ms, 60) : ms); }); }

  /* ── sound (WebAudio, generated, quiet, never on load) ─────── */
  var AC = null;
  function ac(){ if (!AC) { try { AC = new (window.AudioContext||window.webkitAudioContext)(); } catch(e){} } return AC; }
  function tone(f, d, type, vol, slide){ var c = ac(); if (!c) return; var o = c.createOscillator(), g = c.createGain();
    o.type = type||'sine'; o.frequency.setValueAtTime(f, c.currentTime); if (slide) o.frequency.exponentialRampToValueAtTime(slide, c.currentTime+d);
    g.gain.setValueAtTime(vol||.08, c.currentTime); g.gain.exponentialRampToValueAtTime(.0001, c.currentTime+d);
    o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime+d); }
  function noise(d, vol, f){ var c = ac(); if (!c) return; var n = c.createBuffer(1, c.sampleRate*d, c.sampleRate), ch = n.getChannelData(0);
    for (var i=0;i<ch.length;i++) ch[i] = (Math.random()*2-1) * (1 - i/ch.length);
    var s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(); s.buffer = n; fl.type = 'bandpass'; fl.frequency.value = f||900; g.gain.value = vol||.05;
    s.connect(fl); fl.connect(g); g.connect(c.destination); s.start(); }
  var SFX = {
    creak: function(){ tone(140, .16, 'sawtooth', .025, 190); },
    pop:   function(){ tone(90, .25, 'triangle', .14, 45); setTimeout(function(){ tone(520,.08,'square',.03); }, 40); },
    chime: function(){ tone(784,.35,'sine',.07); setTimeout(function(){ tone(1175,.45,'sine',.06); }, 110); },
    stamp: function(){ tone(70,.12,'square',.08,40); },
    hoot:  function(){ tone(420,.22,'sine',.06,360); setTimeout(function(){ tone(400,.3,'sine',.05,330); }, 260); },
    miss:  function(){ tone(220,.18,'triangle',.05,170); },
    click: function(){ tone(900,.05,'square',.03); },
    glass: function(){ tone(1568,.25,'sine',.05); setTimeout(function(){ tone(2093,.3,'sine',.04); }, 70); },
    tick:  function(){ tone(1200,.04,'triangle',.04); },
    whir:  function(){ tone(180,.5,'sawtooth',.02,260); },
    wind:  function(){ noise(1.4,.08,700); },
    pour:  function(){ noise(.9,.05,1800); },
    fanfare: function(){ [523,659,784,1047].forEach(function(f,i){ setTimeout(function(){ tone(f,.4,'triangle',.06); }, i*120); }); }
  };
  var lastHoot = 0;
  function hoot(){ var n = Date.now(); if (n - lastHoot > 8000) { lastHoot = n; SFX.hoot(); } }

  if (!sget(OFF,false)) root.classList.add('ms-on');
  if (sget(CALM,false)) root.classList.add('ms-calm');

  /* ── rooms ─────────────────────────────────────────────────── */
  var ROOMS = DATA.rooms || [
    {tab:'scene', icon:'🚪', name:'Lobby', short:'Lobby', sub:'Open the crates'},
    {tab:'explore', icon:'🖼️', name:'Gallery', short:'Gallery', sub:'Learn, look & sort'},
    {tab:'check', icon:'🔎', name:'Workroom', short:'Workroom', sub:'Check yourself'},
    {tab:'assignment', icon:'🏷️', name:'Exhibit Floor', short:'Exhibit', sub:'Write your label'}
  ];
  ST.done = ST.done || {}; ST.entered = ST.entered || {};
  function current(){ var p = $('.tab-panel.active'); return p ? p.id.replace('panel-','') : 'scene'; }
  function go(tab){ if (typeof window.switchTab === 'function') window.switchTab(tab); }

  /* ── THE TOP ───────────────────────────────────────────────── */
  /* ── the museum hall around the page (wide screens only): wall, checkered floor, columns, a plant on each side ── */
  function buildHall(){
    if ($('.ms-hallbg')) return;
    function plant(flip){
      return '<svg class="ms-hplant" viewBox="0 0 140 230" aria-hidden="true"'+(flip?' style="transform:scaleX(-1)"':'')+'>' +
        '<g class="ms-leaves">' +
        '<path d="M70 150 C40 120 18 96 10 60 C38 74 58 104 70 150Z" fill="#3E8A55"/>' +
        '<path d="M70 150 C98 116 122 98 132 66 C104 78 82 104 70 150Z" fill="#4E9E62"/>' +
        '<path d="M70 150 C58 100 52 56 66 12 C84 54 82 104 70 150Z" fill="#5DB072"/>' +
        '<path d="M70 150 C46 110 24 104 2 104 C26 122 48 136 70 150Z" fill="#2F7446"/>' +
        '<path d="M70 150 C94 112 116 108 138 112 C114 128 92 140 70 150Z" fill="#3B8150"/>' +
        '<path d="M66 12 C70 60 70 110 70 150" stroke="#2C6B40" stroke-width="2" fill="none"/>' +
        '</g>' +
        '<path d="M34 146 H106 L96 218 H44Z" fill="#B86A3C"/><rect x="28" y="140" width="84" height="16" rx="4" fill="#CF8250"/>' +
        '<path d="M40 176 H100" stroke="#A35B30" stroke-width="3"/>' +
        '<ellipse cx="70" cy="222" rx="38" ry="6" fill="rgba(0,0,0,.18)"/></svg>';
    }
    function column(){
      return '<svg class="ms-hcol" viewBox="0 0 60 600" preserveAspectRatio="none" aria-hidden="true">' +
        '<rect x="4" y="0" width="52" height="22" fill="#EFE5D2"/><rect x="0" y="22" width="60" height="10" fill="#F7F0E1"/>' +
        '<rect x="8" y="32" width="44" height="532" fill="#F7F0E1"/>' +
        '<path d="M18 36 V560 M30 36 V560 M42 36 V560" stroke="#DCCFB2" stroke-width="3"/>' +
        '<rect x="0" y="564" width="60" height="12" fill="#F7F0E1"/><rect x="4" y="576" width="52" height="24" fill="#E6DAC2"/></svg>';
    }
    function sconce(){
      return '<svg class="ms-hsconce" viewBox="0 0 60 90" aria-hidden="true"><circle cx="30" cy="34" r="30" fill="rgba(255,226,150,.35)"/>' +
        '<rect x="26" y="40" width="8" height="34" rx="2" fill="#B8892E"/><path d="M14 74 H46 L40 84 H20Z" fill="#B8892E"/>' +
        '<path d="M18 22 H42 L38 42 H22Z" fill="#FFF1C9" stroke="#B8892E" stroke-width="2"/></svg>';
    }
    var h = el('div','ms-hallbg ms-only');
    h.setAttribute('aria-hidden','true');
    h.innerHTML = '<div class="ms-hwall"></div><div class="ms-hrail"></div><div class="ms-hfloor"><i></i></div>' +
      '<div class="ms-hside l">'+column()+sconce()+plant(false)+'</div><div class="ms-hside r">'+column()+sconce()+plant(true)+'</div>';
    document.body.insertBefore(h, document.body.firstChild);
  }

  function buildTop(){
    var hd = $('.header'); if (!hd) return;
    var hero = $('svg.ms-banner'); if (hero) hero.classList.add('ms-hero');
    var cells = $$('.info-strip .info-cell'), vals = cells.map(function(c){ var v = $('.info-value', c); return v ? v.textContent.trim() : ''; });
    var title = $('.header-title', hd);
    if (title && vals.length >= 3) title.appendChild(el('div','ms-only ms-hd-meta','Unit: <b>'+esc(vals[0])+'</b> · <b>'+esc(vals[1])+'</b> · Focus: <b>'+esc(vals[2])+'</b>'));
    var tools = el('div','ms-only ms-hd-tools'), panels = [], anchor = hd;
    function pill(label, panel){ var b = el('button','ms-pill',label); b.type='button'; b.setAttribute('aria-expanded','false');
      b.onclick = function(){ var o = !panel.classList.contains('open'); panels.forEach(function(p){ p[1].classList.remove('open'); p[0].setAttribute('aria-expanded','false'); }); panel.classList.toggle('open',o); b.setAttribute('aria-expanded',o); };
      panels.push([b,panel]); tools.appendChild(b); }
    var ra = document.getElementById('optima-read-aloud');
    if (ra) { var rp = el('div','ms-hd-panel ms-only'); after(anchor, rp); anchor = rp; pill('🔊 Read aloud', rp);
      var home = document.createComment('ora-home'); ra.parentNode.insertBefore(home, ra);
      var place = function(){ if (root.classList.contains('ms-on')) rp.appendChild(ra); else home.parentNode.insertBefore(ra, home.nextSibling); };
      place(); new MutationObserver(place).observe(root, {attributes:true, attributeFilter:['class']}); }
    var std = cells[3] && $('.info-value', cells[3]);
    var dp = el('div','ms-hd-panel ms-only','<div class="row"><b>Standards</b><span>'+(std?std.innerHTML:'')+'</span></div><div class="row"><b>Unit</b><span>'+esc(vals[0]||'')+'</span><b>Week</b><span>'+esc(vals[1]||'')+'</span></div>');
    after(anchor, dp); pill('ⓘ Lesson details', dp);
    var mv = el('button','ms-pill ms-motion'); mv.type = 'button';
    function mlab(){ mv.textContent = root.classList.contains('ms-calm') ? '✨ Motion: still' : '✨ Motion: on'; mv.setAttribute('aria-pressed', root.classList.contains('ms-calm')); }
    mv.onclick = function(){ root.classList.toggle('ms-calm'); sset(CALM, root.classList.contains('ms-calm')); mlab(); };
    mlab(); tools.appendChild(mv);
    var tg = el('button','ms-pill ms-toggle'); tg.type='button';
    function lab(){ tg.textContent = root.classList.contains('ms-on') ? '🏛️ Museum view: on' : '🏛️ Museum view: off'; }
    tg.onclick = function(){ root.classList.toggle('ms-on'); sset(OFF, !root.classList.contains('ms-on')); lab(); };
    lab(); hd.appendChild(tools); hd.appendChild(tg);
  }

  /* room emblems for the tabs: brass line drawings (doors, a framed picture, a desk lamp, a pedestal) */
  var EMB = {
    scene: '<svg viewBox="0 0 32 32"><path d="M4 29h24"/><path d="M7 29V12a9 9 0 0 1 18 0v17"/><path d="M16 4v25"/><path d="M10 14h4M18 14h4"/><circle cx="14" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>',
    explore: '<svg viewBox="0 0 32 32"><path d="M11 4h10"/><path d="M16 4v3"/><rect x="5" y="8" width="22" height="18" rx="1"/><rect x="9" y="12" width="14" height="10"/><path d="M10 21l4-5 3 3 2-2 3 4"/><circle cx="19.5" cy="14.5" r="1.2"/></svg>',
    check: '<svg viewBox="0 0 32 32"><path d="M4 29h24"/><path d="M8 29l4-11 7-6"/><path d="M17 8.5l6-3.5 4 6.5-6.5 2.5z"/><path d="M22 14l1 3"/><rect x="14" y="23" width="10" height="3" rx="1"/></svg>',
    assignment: '<svg viewBox="0 0 32 32"><path d="M9 29h14"/><path d="M11 29V19h10v10"/><path d="M9 19h14"/><path d="M16 5l5 5-5 6-5-6z"/><path d="M11 10h10"/></svg>'
  };
  /* ── tabs ──────────────────────────────────────────────────── */
  var tabsEl;
  function buildTabs(){
    var bar = document.getElementById('tabBar'); if (!bar) return;
    tabsEl = el('nav','ms-tabs ms-only'); tabsEl.setAttribute('aria-label','Museum rooms');
    tabsEl.innerHTML = '<div class="ms-tabs-top"><span class="ms-hall">🏛️ '+esc(DATA.hall||'')+'</span><span class="ms-count"></span></div><div class="ms-tabrow" role="tablist"></div>';
    var row = $('.ms-tabrow', tabsEl);
    ROOMS.forEach(function(r, i){
      var b = el('button','ms-tab'); b.type='button'; b.dataset.tab = r.tab; b.setAttribute('role','tab');
      b.classList.add('ms-tab-'+r.tab);
      b.innerHTML = '<span class="ms-tlamp" aria-hidden="true"></span><span class="ms-temb" aria-hidden="true">'+(EMB[r.tab]||'')+'<span class="ms-tn"><i>'+(i+1)+'</i><em>✓</em></span></span><span class="ms-tl"><span class="ms-tname"><span class="full">'+esc(r.name)+'</span><span class="short">'+esc(r.short||r.name)+'</span></span><span class="ms-tsub">'+esc(r.sub)+'</span><span class="ms-here">You are here</span></span>';
      b.setAttribute('aria-label','Room '+(i+1)+', '+r.name+': '+r.sub);
      b.onclick = function(){ go(r.tab); };
      row.appendChild(b);
    });
    bar.parentNode.insertBefore(tabsEl, bar);
    paint();
  }
  function paint(){
    var here = current(), n = 0;
    root.setAttribute('data-ms-tab', here);
    if (tabsEl) $$('.ms-tab', tabsEl).forEach(function(b){
      var t = b.dataset.tab; b.classList.toggle('is-here', t===here); b.setAttribute('aria-selected', t===here);
      b.classList.toggle('is-done', !!ST.done[t]); if (ST.done[t]) n++;
    });
    if (tabsEl) $('.ms-count', tabsEl).textContent = n + ' of ' + ROOMS.length + ' rooms done';
    $$('.ms-nextdoor').forEach(function(d){ d.classList.toggle('ready', !!ST.done[d.dataset.from]); });
  }
  function markDone(tab){ if (ST.done[tab]) return; ST.done[tab] = true; save(); paint(); SFX.chime(); optiNod(tab); }
  window.msMarkDone = markDone;
  function enterRoom(t){
    var p = document.getElementById('panel-'+t); if (!p) return;
    if (ST.entered[t] || calm()) { ST.entered[t] = 1; return; }
    ST.entered[t] = 1; save();
    p.classList.remove('ms-enter'); void p.offsetWidth; p.classList.add('ms-enter');
    setTimeout(function(){ p.classList.remove('ms-enter'); }, 1100);
  }
  function hookTabs(){
    var orig = window.switchTab; if (typeof orig !== 'function') return;
    window.switchTab = function(t){
      orig.apply(this, arguments); paint(); enterRoom(t);
      if (!root.classList.contains('ms-on') || !tabsEl) return;
      function land(){ var p = $('.tab-panel.active'); if (!p) return;
        var y = (t === 'scene') ? 0 : p.getBoundingClientRect().top + window.pageYOffset - tabsEl.offsetHeight;
        window.scrollTo({top: Math.max(0, y), behavior: 'auto'}); }
      setTimeout(land, 30); setTimeout(land, 400);
    };
  }

  /* ══ ROOM SCENES: each room sign is a little picture of the room (no words, no people) ══ */
  function sceneSVG(tab){
    var defs = '<defs><linearGradient id="msSkyLt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF4D6"/><stop offset="1" stop-color="#FFE0A0"/></linearGradient>'+
      '<radialGradient id="msBeam" cx=".5" cy="0" r="1"><stop offset="0" stop-color="#FFE7B0" stop-opacity=".85"/><stop offset="1" stop-color="#FFE7B0" stop-opacity="0"/></radialGradient>'+
      '<pattern id="msTile" width="36" height="18" patternUnits="userSpaceOnUse"><rect width="36" height="18" fill="#EDE3CF"/><path d="M0 9 L18 0 L36 9 L18 18Z" fill="#D9CCB0"/></pattern>'+
      '<pattern id="msPlank" width="60" height="12" patternUnits="userSpaceOnUse"><rect width="60" height="12" fill="#A7774A"/><path d="M0 11.5 H60 M30 0 V12" stroke="#7E5430" stroke-width="1"/></pattern></defs>';
    var out = '';
    if (tab === 'scene') {
      out = '<rect width="900" height="180" fill="#E8DCC2"/><rect width="900" height="16" fill="#D3C3A2"/><rect y="98" width="900" height="34" fill="#D9C9A8"/><rect y="96" width="900" height="3" fill="#B8892E"/>'+
        '<rect y="132" width="900" height="48" fill="url(#msTile)"/><rect y="132" width="900" height="2" fill="#B8A57E"/>'+
        // columns
        [470,700].map(function(x){ return '<g><rect x="'+(x-20)+'" y="16" width="40" height="8" fill="#F3EAD6"/><rect x="'+(x-16)+'" y="24" width="32" height="100" fill="#F7F0E1"/><path d="M'+(x-8)+' 26 V122 M'+x+' 26 V122 M'+(x+8)+' 26 V122" stroke="#DCCFB2" stroke-width="2"/><rect x="'+(x-22)+'" y="124" width="44" height="10" fill="#EFE5D2"/></g>'; }).join('')+
        // grand doors with daylight in the arch window
        '<path d="M545 133 V64 A40 40 0 0 1 625 64 V133 Z" fill="#6B4423" stroke="#4A2E14" stroke-width="3"/><path class="ms-sc-glow" d="M551 64 A34 34 0 0 1 619 64 Z" fill="url(#msSkyLt)"/><path d="M585 30 V64 M556 64 H614" stroke="#4A2E14" stroke-width="2"/>'+
        '<path d="M585 64 V133" stroke="#4A2E14" stroke-width="2"/><rect x="555" y="72" width="24" height="54" rx="2" fill="#7E5430"/><rect x="591" y="72" width="24" height="54" rx="2" fill="#7E5430"/><circle cx="580" cy="102" r="2.4" fill="#E9C878"/><circle cx="590" cy="102" r="2.4" fill="#E9C878"/>'+
        // hanging banners
        '<path d="M515 16 h28 v54 l-14 -9 l-14 9z" fill="#1A8A7D"/><path d="M630 16 h28 v54 l-14 -9 l-14 9z" fill="#B23A2E"/><circle cx="529" cy="36" r="6" fill="#E9C878"/><circle cx="644" cy="36" r="6" fill="#E9C878"/>'+
        // velvet rope
        '<g fill="#B8892E"><rect x="503" y="112" width="4" height="26"/><rect x="663" y="112" width="4" height="26"/><circle cx="505" cy="111" r="4"/><circle cx="665" cy="111" r="4"/><rect x="498" y="136" width="14" height="4" rx="2"/><rect x="658" y="136" width="14" height="4" rx="2"/></g><path d="M505 114 Q585 140 665 114" stroke="#8A1E2A" stroke-width="4" fill="none"/>'+
        // welcome desk with a bell, and a museum map on an easel
        '<rect x="750" y="102" width="130" height="34" rx="3" fill="#8A5A2B" stroke="#5E3D1C" stroke-width="2"/><rect x="744" y="98" width="142" height="7" rx="2" fill="#A7774A"/><path d="M806 98 a8 8 0 0 1 16 0 z" fill="#E9C878"/><rect x="812" y="88" width="4" height="4" fill="#E9C878"/>'+
        '<path d="M445 136 l12 -60 M471 136 l-12 -60" stroke="#6B4423" stroke-width="3"/><rect x="434" y="60" width="50" height="38" fill="#FBF5E6" stroke="#6B4423" stroke-width="2"/><rect x="440" y="66" width="16" height="12" fill="#9DC9B0"/><rect x="458" y="66" width="20" height="12" fill="#E9C878"/><rect x="440" y="80" width="38" height="12" fill="#A9C7E6"/>'+
        '<g><path d="M860 132 h24 l-4 -18 h-16z" fill="#B0412E"/><path d="M872 114 q-14 -22 -4 -40 q6 20 4 40 q8 -20 20 -28 q-6 22 -20 28" fill="#3F8F52"/></g>';
    } else if (tab === 'explore') {
      out = '<rect width="900" height="180" fill="#24433B"/><rect width="900" height="10" fill="#1B332D"/><rect y="28" width="900" height="2" fill="#B8892E" opacity=".7"/><rect y="140" width="900" height="40" fill="url(#msPlank)"/><rect y="136" width="900" height="5" fill="#3A2D1E"/>'+
        // three framed pictures with picture lights
        [[470,'wheat'],[600,'sea'],[730,'hills']].map(function(f){ var x = f[0], inner = f[1]==='wheat' ? '<rect x="'+(x-34)+'" y="62" width="68" height="20" fill="#9CC8E8"/><rect x="'+(x-34)+'" y="82" width="68" height="22" fill="#E2B13F"/><circle cx="'+(x+18)+'" cy="70" r="5" fill="#FFE07A"/>' :
          f[1]==='sea' ? '<rect x="'+(x-34)+'" y="62" width="68" height="24" fill="#B9DDF2"/><rect x="'+(x-34)+'" y="86" width="68" height="18" fill="#3E86B8"/><path d="M'+(x-20)+' 86 l8 -12 l8 12z" fill="#fff"/>' :
          '<rect x="'+(x-34)+'" y="62" width="68" height="42" fill="#CFE6F2"/><path d="M'+(x-34)+' 104 L'+(x-14)+' 74 L'+(x+4)+' 92 L'+(x+18)+' 70 L'+(x+34)+' 104Z" fill="#4C8A5C"/>';
          return '<path class="ms-sc-glow" d="M'+(x-20)+' 44 L'+(x+20)+' 44 L'+(x+46)+' 120 L'+(x-46)+' 120Z" fill="url(#msBeam)" opacity=".55"/><rect x="'+(x-16)+'" y="40" width="32" height="5" rx="2" fill="#E9C878"/>'+
          '<rect x="'+(x-42)+'" y="54" width="84" height="58" fill="#B8892E" stroke="#7E5A16" stroke-width="3"/>'+inner; }).join('')+
        // a glass case on a plinth and a bench
        '<rect x="826" y="82" width="56" height="44" fill="rgba(220,240,255,.18)" stroke="rgba(220,240,255,.6)" stroke-width="2"/><path d="M846 120 q8 -26 16 0z" fill="#C8733A"/><rect x="822" y="126" width="64" height="14" fill="#5E4223"/>'+
        '<rect x="540" y="124" width="120" height="8" rx="2" fill="#7E5430"/><rect x="550" y="132" width="6" height="10" fill="#5E3D1C"/><rect x="644" y="132" width="6" height="10" fill="#5E3D1C"/>';
    } else if (tab === 'check') {
      out = '<rect width="900" height="180" fill="#6E4C2C"/>'+'<g opacity=".18">'+[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(function(i){ return '<rect x="'+(i*60)+'" y="0" width="58" height="120" fill="#000" opacity="'+(i%2?.25:.1)+'"/>'; }).join('')+'</g>'+
        // shelves with boxes and jars
        '<rect x="440" y="40" width="200" height="6" fill="#4A2E14"/><rect x="440" y="84" width="200" height="6" fill="#4A2E14"/>'+
        '<rect x="452" y="18" width="34" height="22" fill="#C9A574"/><rect x="490" y="24" width="26" height="16" fill="#B98A55"/><rect x="524" y="20" width="18" height="20" rx="3" fill="#BFE3F2" stroke="#7FA9BF"/><rect x="548" y="14" width="40" height="26" fill="#D9C39A"/><path d="M600 40 v-20 h14 v20" fill="#8FB89A"/>'+
        '<rect x="456" y="62" width="22" height="22" rx="2" fill="#E2B13F"/><rect x="484" y="58" width="44" height="26" fill="#C9A574"/><circle cx="548" cy="74" r="10" fill="#7A7065"/><rect x="566" y="62" width="30" height="22" fill="#B98A55"/>'+
        // window
        '<rect x="700" y="20" width="90" height="70" fill="#CFE6F2" stroke="#4A2E14" stroke-width="5"/><path d="M745 20 V90 M700 55 H790" stroke="#4A2E14" stroke-width="4"/>'+
        // the desk, the lamp, the worksheet, the magnifier, the pencils
        '<rect x="420" y="120" width="480" height="14" fill="#8A5A2B"/><rect x="420" y="134" width="480" height="46" fill="#6B4423"/><rect x="460" y="146" width="80" height="22" rx="2" fill="#7E5430" stroke="#4A2E14"/><circle cx="500" cy="157" r="3" fill="#E9C878"/>'+
        '<path class="ms-sc-glow" d="M612 86 L592 120 H700 L680 86Z" fill="url(#msBeam)" opacity=".8"/><rect x="636" y="112" width="20" height="8" rx="2" fill="#B8892E"/><path d="M646 112 V92" stroke="#B8892E" stroke-width="3"/><path d="M622 92 Q646 70 670 92 Z" fill="#1F6B4A" stroke="#14492F" stroke-width="2"/>'+
        '<rect x="700" y="106" width="64" height="16" fill="#FFFDF6" transform="rotate(-4 732 114)"/><path d="M706 110 h50 M706 115 h40" stroke="#B9C6DA" stroke-width="1.5" transform="rotate(-4 732 114)"/>'+
        '<circle cx="800" cy="112" r="9" fill="rgba(200,230,255,.5)" stroke="#B8892E" stroke-width="3"/><path d="M807 119 l12 8" stroke="#6B4423" stroke-width="4" stroke-linecap="round"/>'+
        '<rect x="846" y="96" width="16" height="24" fill="#2D4C8C"/><path d="M850 96 l-2 -16 M855 96 l1 -18 M859 96 l3 -14" stroke="#E2B13F" stroke-width="3"/>';
    } else {
      out = '<rect width="900" height="180" fill="#4A1C28"/><rect width="900" height="12" fill="#35121C"/><rect y="146" width="900" height="34" fill="#2A1E16"/><rect y="146" width="900" height="3" fill="#B8892E"/><path d="M0 162 H900" stroke="#4A3A2A" stroke-width="1"/>'+
        // three spotlit pedestals: a vase, a rock, and an empty one waiting for the student's exhibit
        [[480,'vase'],[620,'yours'],[760,'rock']].map(function(f){ var x = f[0], top = f[1]==='vase' ? '<path d="M'+(x-10)+' 90 q-8 -16 4 -26 h12 q12 10 4 26z" fill="#2F7B8C" stroke="#1A4A55" stroke-width="2"/>' :
          f[1]==='rock' ? '<path d="M'+(x-16)+' 90 l6 -16 l14 -6 l12 8 l2 14z" fill="#7A7065" stroke="#3B3733" stroke-width="2"/><circle cx="'+(x+2)+'" cy="82" r="3" fill="#C8733A"/>' :
          '<path class="ms-sc-sparkle" d="M'+x+' 62 l3 10 l10 3 l-10 3 l-3 10 l-3 -10 l-10 -3 l10 -3z" fill="#FFE7A0"/>';
          return '<path class="ms-sc-glow" d="M'+(x-10)+' 0 L'+(x+10)+' 0 L'+(x+52)+' 146 L'+(x-52)+' 146Z" fill="url(#msBeam)" opacity="'+(f[1]==='yours'?.9:.55)+'"/>'+
          '<rect x="'+(x-30)+'" y="90" width="60" height="7" rx="2" fill="#F7F0E1"/><rect x="'+(x-24)+'" y="97" width="48" height="52" fill="#E9DDC4"/>'+top; }).join('')+
        '<g fill="#B8892E"><rect x="548" y="128" width="4" height="22"/><rect x="688" y="128" width="4" height="22"/><circle cx="550" cy="127" r="4"/><circle cx="690" cy="127" r="4"/></g><path d="M550 130 Q620 150 690 130" stroke="#C0392B" stroke-width="4" fill="none"/>';
    }
    // ids are made unique per room: a gradient inside a hidden room would not paint in the room that is showing
    var all = (defs+out).replace(/msSkyLt|msBeam|msTile|msPlank/g, function(m){ return m+'-'+tab; });
    return '<svg class="ms-scene" viewBox="0 0 900 180" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">'+all+'</svg>';
  }

  /* ── room signs + next-room doors ──────────────────────────── */
  function buildSigns(){
    ROOMS.forEach(function(r, i){
      var p = document.getElementById('panel-'+r.tab); if (!p) return;
      p.classList.add('ms-room-'+r.tab);
      var line = (DATA.signs && DATA.signs[r.tab]) || r.sub;
      p.insertBefore(el('div','ms-sign ms-sign-'+r.tab+' ms-only', sceneSVG(r.tab)+'<div class="ms-plaque"><span class="ms-sign-n">Room '+(i+1)+' of '+ROOMS.length+'</span><span class="ms-sign-t">'+esc(r.name)+'</span><span class="ms-sign-l">'+line+'</span></div>'), p.firstChild);
      var nx = ROOMS[i+1], d = el('div','ms-nextdoor ms-only'); d.dataset.from = r.tab;
      var hint = (DATA.doorHints && DATA.doorHints[r.tab]) || 'Finish this room, then walk through the door.';
      if (nx) {
        d.innerHTML = '<p class="ms-nd-hint">'+esc(hint)+'</p><button type="button" class="ms-door"><span class="ms-arch">'+nx.icon+'</span><span class="ms-dt"><small>Next room · Room '+(i+2)+'</small><b>'+esc(nx.name)+'</b><i>'+esc(nx.sub)+' →</i></span></button>';
        $('.ms-door', d).onclick = function(){ go(nx.tab); };
      } else d.innerHTML = '<p class="ms-nd-hint">'+esc(hint)+'</p>';
      p.appendChild(d);
    });
  }

  /* ══ SPECIMENS: one illustrated object per resource ═══════════
     Same object in every room. DATA.specimens[id] = {name, short, art, acc, from, foundIn,
     photo, photoCredit, details:[{x,y,t}]}. art = a key in ART below. */
  function wheatArt(){
    var s = '', i, a;
    for (i=-3;i<=3;i++){ a = i*9; var x2 = 60 + i*11, y2 = 26 + Math.abs(i)*4;
      s += '<path d="M'+(60+i*1.5)+' 88 Q'+(60+i*4)+' 60 '+x2+' '+y2+'" stroke="#B88A2A" stroke-width="2.2" fill="none"/>';
      for (var k=0;k<5;k++){ var yy = y2 - 3 + k*4.2, dx = (k%2?3:-3);
        s += '<ellipse cx="'+(x2+dx*0.8)+'" cy="'+yy+'" rx="2.8" ry="4.4" fill="#E9B949" stroke="#9A6D12" stroke-width=".8" transform="rotate('+(a+dx*6)+' '+(x2+dx*0.8)+' '+yy+')"/>'; }
      s += '<path d="M'+x2+' '+(y2-6)+' l'+(i*1.5)+' -12" stroke="#D9A93A" stroke-width=".9"/>'; }
    return '<svg viewBox="0 0 120 100" class="ms-spec"><ellipse class="sh" cx="60" cy="93" rx="30" ry="4"/>'+s+
      '<rect x="48" y="62" width="24" height="7" rx="3" fill="#B0412E" stroke="#6E2416" stroke-width="1.2"/><path d="M60 69 l-6 8 M60 69 l5 9" stroke="#B0412E" stroke-width="2.4" stroke-linecap="round"/>'+
      '<g class="grains"><ellipse class="grain g1" cx="44" cy="90" rx="2.4" ry="1.6" fill="#D9A93A"/><ellipse class="grain g2" cx="76" cy="91" rx="2.4" ry="1.6" fill="#D9A93A"/><ellipse class="grain g3" cx="84" cy="89" rx="2.4" ry="1.6" fill="#D9A93A"/></g></svg>';
  }
  var ART = {
    timber: function(){ return '<svg viewBox="0 0 120 100" class="ms-spec"><ellipse class="sh" cx="64" cy="90" rx="46" ry="5"/>'+
      '<path d="M30 38 H96 A12 24 0 0 1 96 86 H30 Z" fill="#8B5A2B" stroke="#4A2E14" stroke-width="2"/>'+
      '<path d="M42 45 C60 42 78 47 95 43 M42 57 C60 54 78 59 97 55 M42 70 C62 67 78 72 97 69 M44 80 C60 78 76 82 94 80" stroke="#6B421E" stroke-width="2" fill="none"/>'+
      '<ellipse cx="30" cy="62" rx="15" ry="24" fill="#EBC48C" stroke="#4A2E14" stroke-width="2"/>'+
      '<g fill="none" stroke="#C08A4E" stroke-width="1.3"><ellipse cx="30" cy="62" rx="11.8" ry="19.5"/><ellipse cx="30" cy="62" rx="9" ry="15"/><ellipse cx="30" cy="62" rx="6.4" ry="10.6"/><ellipse cx="30" cy="62" rx="3.8" ry="6.3"/></g><circle cx="30" cy="62" r="1.3" fill="#8B5A2B"/>'+
      '<path d="M22 46 q-3 6 -3 12" stroke="#fff" stroke-width="2" opacity=".45" fill="none"/></svg>'; },
    wheat: wheatArt,
    water: function(){ return '<svg viewBox="0 0 120 100" class="ms-spec"><ellipse class="sh" cx="60" cy="93" rx="32" ry="4"/>'+
      '<rect x="44" y="10" width="32" height="13" rx="3" fill="#B98A55" stroke="#6B4A2B" stroke-width="2"/><path d="M48 14 h24 M48 18 h24" stroke="#8A6236" stroke-width="1"/>'+
      '<path d="M40 23 H80 V29 C92 35 94 46 94 56 V82 C94 88 90 92 84 92 H36 C30 92 26 88 26 82 V56 C26 46 28 35 40 29 Z" fill="#EEF8FC" stroke="#4E7EA0" stroke-width="2.5"/>'+
      '<g class="liquid"><path d="M28 52 Q44 47 60 52 T92 52 V82 C92 87 88 90 84 90 H36 C32 90 28 87 28 82 Z" fill="#69B8E2" opacity=".88"/><path class="surf" d="M30 52 Q44 48 60 52 T90 52" stroke="#BDE6F7" stroke-width="2" fill="none"/></g>'+
      '<path d="M35 38 V82" stroke="#fff" stroke-width="4" opacity=".65" stroke-linecap="round"/></svg>'; },
    fish: function(){ var dots=''; [[34,38],[42,34],[50,36],[58,33],[66,36],[74,38],[46,41],[62,40],[54,39],[38,43]].forEach(function(p){ dots+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.5" fill="#5E5238"/>'; });
      return '<svg viewBox="0 0 120 100" class="ms-spec"><ellipse class="sh" cx="60" cy="94" rx="34" ry="4"/>'+
      '<rect x="56" y="62" width="8" height="26" fill="#6B4A2B"/><rect x="38" y="87" width="44" height="6" rx="2" fill="#8A6236" stroke="#5E4223"/>'+
      '<path d="M46 31 L52 20 L58 30 Z M62 30 L70 21 L75 32 Z M78 34 L84 26 L86 37 Z" fill="#94A3AD" stroke="#3E4C57" stroke-width="1.5"/>'+
      '<path d="M10 48 C24 26 72 24 94 46 C72 68 24 68 10 48 Z" fill="#BCC7CE" stroke="#3E4C57" stroke-width="2"/>'+
      '<path d="M13 46 C28 30 70 28 92 44 C70 40 30 40 13 46 Z" fill="#8F7F5E" opacity=".6"/>'+dots+
      '<path d="M94 46 L112 30 L107 46 L112 63 Z" fill="#9AA8B2" stroke="#3E4C57" stroke-width="2"/>'+
      '<path d="M48 60 L54 70 L60 61 Z" fill="#94A3AD" stroke="#3E4C57" stroke-width="1.5"/>'+
      '<path d="M34 39 Q41 48 34 57" stroke="#5E6E7A" stroke-width="2" fill="none"/>'+
      '<circle cx="22" cy="45" r="3.6" fill="#1D2A36"/><circle cx="21" cy="44" r="1.1" fill="#fff"/><path d="M12 52 q2 4 -1 7" stroke="#3E4C57" stroke-width="1.2" fill="none"/></svg>'; },
    copper: function(){ return '<svg viewBox="0 0 120 100" class="ms-spec"><ellipse class="sh" cx="60" cy="90" rx="42" ry="5"/>'+
      '<path d="M18 78 L25 51 L44 35 L71 31 L93 43 L102 66 L91 84 L56 88 L29 86 Z" fill="#6E655C" stroke="#2F2A25" stroke-width="2"/>'+
      '<path d="M25 51 L44 35 L56 50 L37 62 Z" fill="#857A6E"/><path d="M71 31 L93 43 L80 56 L64 46 Z" fill="#7A7065"/><path d="M56 88 L60 70 L91 84 Z" fill="#5E564E"/>'+
      '<path d="M40 64 C46 56 58 57 62 64 C58 72 46 72 40 64 Z" fill="#C8733A" stroke="#8A4A1E" stroke-width="1"/><path d="M45 61 C49 58 55 59 57 62" stroke="#F0B080" stroke-width="2" fill="none"/>'+
      '<path d="M66 54 C70 49 78 50 80 55 C77 60 70 60 66 54 Z" fill="#C8733A" stroke="#8A4A1E" stroke-width="1"/><path d="M70 74 C73 70 79 71 80 75 C78 78 72 78 70 74 Z" fill="#B8662F"/>'+
      '<g fill="#3E9C7A"><circle cx="72" cy="66" r="3.2"/><circle cx="34" cy="74" r="2.6"/><circle cx="84" cy="62" r="2.2"/><circle cx="52" cy="44" r="2.4"/></g>'+
      '<g class="glint"><path d="M58 58 l2.2 -8 l2.2 8 l8 2.2 l-8 2.2 l-2.2 8 l-2.2 -8 l-8 -2.2 z" fill="#FFF6CF"/></g></svg>'; },
    oil: function(){ return '<svg viewBox="0 0 120 100" class="ms-spec"><ellipse class="sh" cx="60" cy="93" rx="34" ry="4"/>'+
      '<rect x="47" y="5" width="26" height="9" rx="2" fill="#8A6236" stroke="#5E4223"/>'+
      '<path d="M50 12 H70 V36 L94 82 C97 88 93 92 87 92 H33 C27 92 23 88 26 82 L50 36 Z" fill="#F4F7F9" stroke="#4A5560" stroke-width="2.5"/>'+
      '<path class="liquid" d="M37 60 H83 L94 82 C97 88 93 92 87 92 H33 C27 92 23 88 26 82 Z" fill="#17120E"/>'+
      '<path d="M40 64 H80" stroke="#6A5A48" stroke-width="2" opacity=".7"/>'+
      '<rect x="45" y="70" width="30" height="13" rx="2" fill="#F3DFA9" stroke="#8A6236"/><text x="60" y="79" font-family="Courier New,monospace" font-size="6.3" font-weight="700" text-anchor="middle" fill="#3A2A14">CRUDE OIL</text>'+
      '<path d="M55 16 V36" stroke="#fff" stroke-width="3" opacity=".7"/></svg>'; }
  };
  var SPEC = DATA.specimens || {};
  function specArt(id){ var s = SPEC[id]; if (s && s.card) return '<span class="ms-pcart"><img alt="" src="'+img(s.card)+'"></span>'; return s && ART[s.art] ? ART[s.art]() : ''; }

  /* ── fly helper: a copy of an element travels from A to B ─── */
  function fly(fromEl, toEl, html, ms){
    return new Promise(function(res){
      if (calm() || !fromEl || !toEl) return res();
      var a = fromEl.getBoundingClientRect(), b = toEl.getBoundingClientRect(), g = el('div','ms-flyer', html);
      g.style.cssText = 'left:'+a.left+'px;top:'+a.top+'px;width:'+a.width+'px;height:'+a.height+'px;';
      document.body.appendChild(g); void g.offsetWidth;
      g.style.transition = 'transform '+(ms||520)+'ms cubic-bezier(.4,.1,.3,1), opacity .2s '+((ms||520)-120)+'ms';
      var sx = b.width / Math.max(1,a.width), sy = b.height / Math.max(1,a.height), s = Math.min(sx, sy);
      g.style.transform = 'translate('+(b.left + b.width/2 - (a.left + a.width/2))+'px,'+(b.top + b.height/2 - (a.top + a.height/2))+'px) scale('+s+')';
      setTimeout(function(){ g.remove(); res(); }, (ms||520)+40);
    });
  }

  /* ══ INSPECT: lightbox for a specimen or a photo ════════════ */
  var lb;
  var lbAfter = null;
  function lightbox(html, onOpen, onClose){
    if (!lb) { lb = el('div','ms-lb ms-only'); lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true'); document.body.appendChild(lb);
      lb.addEventListener('click', function(e){ if (e.target === lb || e.target.closest('.ms-lb-x')) closeLb(); });
      document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && lb.classList.contains('open')) closeLb(); }); }
    lb.innerHTML = '<div class="ms-lb-card"><button type="button" class="ms-lb-x" aria-label="Close">✕</button>'+html+'</div>';
    lbAfter = onClose || null;
    lb.classList.add('open'); var x = $('.ms-lb-x', lb); if (x) x.focus();
    if (onOpen) onOpen($('.ms-lb-card', lb));
  }
  function closeLb(){ if (!lb || !lb.classList.contains('open')) return; lb.classList.remove('open'); var f = lbAfter; lbAfter = null; if (f) setTimeout(f, 60); }
  function inspect(id, opt){
    opt = opt || {}; var s = SPEC[id]; if (!s) return;
    var det = (s.details||[]).map(function(d,i){ return '<button type="button" class="ms-det" data-k="'+i+'" style="left:'+d.x+'%;top:'+d.y+'%">'+(i+1)+'</button>'; }).join('');
    lightbox('<div class="ms-lb-k">Specimen '+esc(s.acc)+'</div><h3>'+esc(s.name)+'</h3>'+
      '<div class="ms-ins"><div class="ms-ins-stage"><div class="ms-ins-tilt">'+specArt(id)+det+'</div><div class="ms-velvet"></div></div>'+
      '<div class="ms-ins-side">'+(opt.onClose?'<div class="ms-lb-done top"></div>':'')+'<p class="ms-ins-how">👆 Tap a number to look closer. Move your finger or mouse over the specimen to turn it.</p><div class="ms-ins-note" aria-live="polite"></div>'+
      (s.photo && !opt.noPhoto ? '<button type="button" class="ms-btn alt ms-seeph">📷 See where it came from</button><figure class="ms-frame ms-ins-ph" hidden><img alt="'+esc(s.photoAlt||'')+'" src="'+img(s.photo)+'"><figcaption>'+esc(s.photoCap||'')+'<br><small>'+esc(s.photoCredit||'')+'</small></figcaption></figure>' : '')+
      '</div></div>'+(opt.onClose?'<div class="ms-lb-done"><button type="button" class="ms-btn ms-lb-ok">Done inspecting ✓</button></div>':''), function(card){
        var okB = $('.ms-lb-ok', card); if (okB) okB.onclick = closeLb;
        var tilt = $('.ms-ins-tilt', card), stage = $('.ms-ins-stage', card), note = $('.ms-ins-note', card);
        stage.addEventListener('pointermove', function(e){ if (calm()) return; var r = stage.getBoundingClientRect(), x = (e.clientX - r.left)/r.width - .5, y = (e.clientY - r.top)/r.height - .5;
          tilt.style.transform = 'rotateY('+(x*22)+'deg) rotateX('+(-y*14)+'deg)'; });
        stage.addEventListener('pointerleave', function(){ tilt.style.transform = ''; });
        $$('.ms-det', card).forEach(function(b){ b.onclick = function(){ $$('.ms-det', card).forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on','seen');
          note.innerHTML = '<b>'+(+b.dataset.k+1)+'</b> '+esc(s.details[+b.dataset.k].t); SFX.click(); }; });
        var sp = $('.ms-seeph', card); if (sp) sp.onclick = function(){ var f = $('.ms-ins-ph', card); f.hidden = !f.hidden; sp.textContent = f.hidden ? '📷 See where it came from' : '📷 Hide the photo'; };
      }, opt.onClose);
  }
  // just the photo of where a specimen came from
  function placePhoto(id, onClose){
    var s = SPEC[id]; if (!s || !s.photo) { if (onClose) onClose(); return; }
    lightbox('<div class="ms-lb-k">Specimen '+esc(s.acc)+' · where it came from</div><h3>'+esc(s.name)+'</h3>'+
      '<figure class="ms-frame ms-place-ph"><img alt="'+esc(s.photoAlt||'')+'" src="'+img(s.photo)+'"><figcaption>'+esc(s.photoCap||'')+'<br><small>'+esc(s.photoCredit||'')+'</small></figcaption></figure>'+
      '<div class="ms-lb-done"><button type="button" class="ms-btn ms-lb-ok">Done looking ✓</button></div>', function(card){ $('.ms-lb-ok', card).onclick = closeLb; }, onClose);
  }

  /* ── Opti: voice, read-along, pointing, nodding ────────────── */
  var ALL_OPTI = [];
  // a short voiced clip (an instruction or a vocabulary word). Plays one at a time.
  var clipA = null, clipBtn = null;
  function playClip(file, base, btn){
    if (clipA && !clipA.paused) { clipA.pause(); if (clipBtn) clipBtn.classList.remove('on'); if (clipBtn === btn) { clipBtn = null; return; } }
    ALL_OPTI.forEach(function(o){ if (!o.paused) o.pause(); });
    clipA = new Audio((window.MS_AUDIO && window.MS_AUDIO[file]) || (base + file)); clipBtn = btn;
    if (btn) { btn.classList.add('on'); clipA.addEventListener('ended', function(){ btn.classList.remove('on'); }); clipA.addEventListener('error', function(){ btn.classList.remove('on'); btn.disabled = true; btn.title = 'Sound not found'; }); }
    clipA.play().catch(function(){ if (btn) btn.classList.remove('on'); });
  }
  function slug(t){ return String(t).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
  function opti(note){
    var script = note.script || String(note.text||'').replace(/<[^>]+>/g,'');
    var toks = script.split(/(\s+)/), wi = 0;
    var trHTML = toks.map(function(w){ if (/^\s+$/.test(w)) return /\n\s*\n/.test(w) ? '<br><br>' : w; return '<span data-w="'+(wi++)+'">'+esc(w)+'</span>'; }).join('');
    var c = el('div','ms-opti ms-only'+(note.big?' big':'')); c.dataset.room = note.room || '';
    c.innerHTML = '<div class="ms-perch"><img alt="Opti the owl" src="'+OWL+'"></div><div class="ms-ob"><div class="ms-on">Opti · your museum guide</div>' +
      '<div class="ms-ctl"><button type="button" class="ms-play">▶ Listen to Opti</button><button type="button" class="ms-ra" aria-expanded="false">📄 Read along</button><span class="ms-onair" aria-hidden="true"><i></i><i></i><i></i> Opti is talking</span></div>' +
      '<div class="ms-tr">'+trHTML+'</div></div>';
    var b = $('.ms-play', c), ra = $('.ms-ra', c), tr = $('.ms-tr', c), wEls = $$('[data-w]', tr), last = -1, raf = 0;
    $('img', c).onclick = hoot;
    function openTr(o){ tr.classList.toggle('open', o); ra.setAttribute('aria-expanded', o); ra.textContent = o ? '📄 Hide words' : '📄 Read along'; }
    ra.onclick = function(){ openTr(!tr.classList.contains('open')); };
    function textOnly(){ c.classList.add('no-audio'); openTr(true); }
    var cues = ((DATA.optiCues||{})[note.slot]||[]).map(function(q){ var re = new RegExp(q.w,'i'), k = -1; for (var i=0;i<wEls.length;i++) if (re.test(wEls[i].textContent)) { k = i; break; } return {k:k, sel:q.sel, done:false}; });
    function setWord(k){ if (k === last) return; for (var i=0;i<wEls.length;i++){ wEls[i].classList.toggle('said', i < k); wEls[i].classList.toggle('now', i === k); } last = k;
      cues.forEach(function(q){ if (!q.done && q.k >= 0 && k >= q.k) { q.done = true; point(c, q.sel); } }); }
    var CW = (DATA.cueWords||{})[note.slot];
    if (!note.slot) { textOnly(); return c; }
    var name = 'g3ss-' + DATA.lesson.replace(/\./g,'-') + '-' + note.slot + '.mp3';
    var a = new Audio(); a.preload = 'auto';
    a.addEventListener('error', textOnly);
    a.src = (window.MS_AUDIO && window.MS_AUDIO[name]) || (AUDIO + name);
    function frame(){
      if (a.duration) {
        if (CW && CW.length === wEls.length) { var t = a.currentTime, k = -1; for (var q=0;q<CW.length;q++) if (CW[q][0] <= t + 0.05) k = q; setWord(k); }
        else setWord(Math.floor(a.currentTime / a.duration * wEls.length));
      }
      if (!a.paused) raf = requestAnimationFrame(frame);
    }
    a.addEventListener('play', function(){ ALL_OPTI.forEach(function(o){ if (o !== a && !o.paused) o.pause(); }); if (clipA && !clipA.paused) { clipA.pause(); if (clipBtn) clipBtn.classList.remove('on'); } c.classList.add('playing'); b.textContent = '❚❚ Pause'; raf = requestAnimationFrame(frame); });
    a.addEventListener('pause', function(){ c.classList.remove('playing'); cancelAnimationFrame(raf); if (!a.ended) b.textContent = '▶ Keep listening'; });
    a.addEventListener('ended', function(){ c.classList.remove('playing'); cancelAnimationFrame(raf); setWord(wEls.length); b.textContent = '▶ Listen again'; });
    b.onclick = function(){ if (a.paused) { if (a.ended || a.currentTime >= (a.duration||1) - 0.05) { a.currentTime = 0; last = -1; setWord(-1); cues.forEach(function(q){ q.done = false; }); } a.play(); } else a.pause(); };
    ALL_OPTI.push(a);
    return c;
  }
  // Opti turns and points; the thing he names glows (only if it's on screen; the page never scrolls by itself)
  function point(card, sel){
    var t = $(sel); if (!t) return;
    card.classList.remove('pointing'); void card.offsetWidth; card.classList.add('pointing');
    setTimeout(function(){ card.classList.remove('pointing'); }, 1800);
    var r = t.getBoundingClientRect(); if (r.bottom < 0 || r.top > window.innerHeight) return;
    t.classList.remove('ms-cue'); void t.offsetWidth; t.classList.add('ms-cue'); setTimeout(function(){ t.classList.remove('ms-cue'); }, 1800);
  }
  function optiNod(tab){ $$('#panel-'+tab+' .ms-opti').forEach(function(c){ c.classList.remove('nod'); void c.offsetWidth; c.classList.add('nod'); setTimeout(function(){ c.classList.remove('nod'); }, 1400); }); }
  var ANCHORS = {
    lobby:    function(){ return $('#panel-scene .ms-sign'); },
    crates:   function(){ return $('#panel-scene .ms-crates-mod'); },
    gallery:  function(){ return $('#panel-explore .ms-sign'); },
    source:   function(){ return $('#panel-explore .ms-dial-mod'); },
    sort:     function(){ return $('#panel-explore .ms-cases-mod'); },
    wind:     function(){ return $('#panel-explore .ms-wind-mod'); },
    workroom: function(){ return $('#panel-check .ms-sign'); },
    exhibit:  function(){ return $('#panel-assignment .ms-sign'); }
  };
  function placeOpti(){
    (DATA.opti || []).forEach(function(n){
      var a = ANCHORS[n.at] ? ANCHORS[n.at]() : (/^[#.]/.test(n.at||'') ? $(n.at) : null); if (!a) return;
      var c = opti(n); if (n.id) c.id = 'ms-opti-' + n.id;
      if (n.after) after(a, c); else a.parentNode.insertBefore(c, a);
      if (n.hidden && !(n.id && ST.shown && ST.shown[n.id])) c.style.display = 'none';
    });
  }
  function showOpti(id){ var o = document.getElementById('ms-opti-'+id); if (o) { o.style.display=''; ST.shown = ST.shown||{}; ST.shown[id]=1; save(); } }

  function buildLens(){
    if (!DATA.lens) return;
    var v = $('#panel-scene .virtue-card'); if (!v) return;
    v.parentNode.insertBefore(el('div','ms-lens ms-only','<div class="ms-badge">'+(DATA.lens.icon||'🏛️')+'</div><p>'+DATA.lens.text+'</p>'), v);
  }

  /* exhibit first: title → one short invitation → the display. "Why are we doing this?" holds the rest. */
  function shell(cls, cfg){
    var why = (cfg.why || (cfg.directive && cfg.directive.length)) ? '<details class="ms-whyd"><summary>❓ Why are we doing this?</summary>' +
      (cfg.why ? '<div class="ms-why"><div class="q">'+(cfg.why.icon||'💡')+' '+esc(cfg.why.q)+'</div><div class="t">'+cfg.why.t+'</div></div>' : '') +
      (cfg.directive ? '<ol class="ms-do">'+cfg.directive.map(function(s){ return '<li>'+s+'</li>'; }).join('')+'</ol>' : '') + '</details>' : '';
    return el('section','ms-mod ms-only '+cls, '<div class="ms-mod-h"><span class="ms-mod-k">'+esc(cfg.kicker||'')+'</span><h3>'+esc(cfg.title||'')+'</h3>' +
      (cfg.invite ? '<p class="ms-invite">'+cfg.invite+'</p>' : '') + '</div>' +
      (cfg.context || cfg.how ? '<div class="ms-context">'+(cfg.context ? '<div class="ms-context-h">👀 '+esc(cfg.contextT||'What am I looking at?')+'</div>'+cfg.context : '') +
        (cfg.how ? '<div class="ms-how">'+(cfg.howClip ? '<button type="button" class="ms-say" data-clip="'+esc(cfg.howClip)+'" aria-label="Listen to what to do">🔊</button>' : '')+'<div><b>What to do:</b> '+cfg.how+'</div></div>' : '') + '</div>' : '') + why);
  }
  /* one step at a time, said plainly: "Step 2 of 3 · title", what to do, then the action */
  function stepCard(n, total, title, body){
    var dots = ''; for (var i=1;i<=total;i++) dots += '<i class="'+(i<n?'done':(i===n?'on':''))+'"></i>';
    return '<div class="ms-stepcard"><div class="ms-sc-top"><span class="ms-sc-n">Step '+n+' of '+total+'</span><span class="ms-sc-dots">'+dots+'</span></div><h4>'+esc(title)+'</h4>'+body+'</div>';
  }
  function galleryCheck(){ var g = ST.gal||{}, need = DATA.galleryNeeds || ['time','dial','wind','cases']; if (need.every(function(k){ return g[k]; })) markDone('explore'); }

  function dragger(src, onDrop, targetSel){
    var ghost = null, over = null, sx = 0, sy = 0, moved = false;
    src.addEventListener('pointerdown', function(e){ if (e.button && e.button!==0) return; sx = e.clientX; sy = e.clientY; moved = false;
      document.addEventListener('pointermove', move); document.addEventListener('pointerup', up, {once:true}); });
    function move(e){
      if (!moved && Math.abs(e.clientX-sx)+Math.abs(e.clientY-sy) < 8) return;
      if (!moved) { moved = true; var r = src.getBoundingClientRect(); ghost = src.cloneNode(true); ghost.classList.add('ms-ghost'); ghost.style.width = r.width+'px'; document.body.appendChild(ghost); src.classList.add('ms-lifted'); }
      e.preventDefault();
      ghost.style.left = (e.clientX - ghost.offsetWidth/2)+'px'; ghost.style.top = (e.clientY - ghost.offsetHeight/2)+'px';
      var t = document.elementFromPoint(e.clientX, e.clientY), c = t && t.closest && t.closest(targetSel);
      if (over && over !== c) over.classList.remove('is-target'); over = c; if (c) c.classList.add('is-target');
    }
    function up(){ document.removeEventListener('pointermove', move);
      if (ghost) { ghost.remove(); ghost = null; } src.classList.remove('ms-lifted');
      var t = over; if (over) over.classList.remove('is-target'); over = null;
      onDrop(moved, t); }
  }

  /* ══ MODULE: crates (Lobby · loading dock) ══════════════════ */
  var CROWBAR = '<svg viewBox="0 0 120 30"><path d="M8 22 q-6 -2 -4 -10 q3 -6 10 -4" fill="none" stroke="#4a4f57" stroke-width="5" stroke-linecap="round"/><rect x="12" y="11" width="98" height="7" rx="3.5" fill="#c0392b"/><path d="M110 14.5 l8 -6" stroke="#4a4f57" stroke-width="5" stroke-linecap="round"/></svg>';
  function modCrates(cfg){
    var anchor = $('#panel-scene .tab-next-wrap'); if (!anchor) return;
    ST.crates = ST.crates || {open:{}, logged:{}};
    var S = ST.crates, items = cfg.items || [];
    var m = shell('ms-crates-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-dock"><div class="ms-dock-door"><span class="ms-door-sign">'+esc(cfg.sign||'LOADING DOCK')+'</span></div>' +
      '<div class="ms-toolrow"><span class="ms-bar" role="img" aria-label="Crowbar">'+CROWBAR+'</span><span>'+esc(cfg.toolTip||'Drag the crowbar onto a crate, or press and hold a crate.')+'</span></div>' +
      '<div class="ms-crates"></div></div>' +
      '<div class="ms-hint" aria-live="polite"></div>' +
      '<div class="ms-table"><div class="ms-desk"><div class="ms-tagwrap"><div class="ms-empty">'+esc(cfg.emptyTable||'Open a crate. Its specimen comes to this receiving desk.')+'</div></div></div>' +
      '<div class="ms-clip"><div class="ms-sheet"><h4>'+esc(cfg.logTitle||'Receiving Log')+'</h4><ol></ol></div><div class="ms-tally"></div></div></div>' +
      '<div class="ms-win" aria-live="polite">'+(cfg.win||'')+'</div>');
    anchor.parentNode.insertBefore(m, anchor);
    var grid = $('.ms-crates', m), hint = $('.ms-hint', m), table = $('.ms-tagwrap', m), log = $('.ms-sheet ol', m), tally = $('.ms-tally', m), win = $('.ms-win', m);
    items.forEach(function(it, i){
      var sp = SPEC[it.id] || {};
      var c = el('button','ms-crate mat-'+it.id); c.type='button'; c.dataset.i = i;
      c.setAttribute('aria-label','Crate '+(i+1)+' from '+(sp.stencil||'')+'. Press and hold to open.');
      var straw = ''; for (var k=0;k<8;k++){ straw += '<span class="ms-straw" style="--dx:'+((k-3.5)*16)+'px;--dy:'+(-24-(k%3)*14)+'px;--r:'+(k*50)+'deg"></span>'; }
      c.innerHTML = '<span class="ms-cglow"></span><span class="ms-obj">'+specArt(it.id)+'</span><span class="ms-box"></span><span class="ms-num">'+(i+1)+'</span>' +
        '<span class="ms-stencil">FROM:<small>'+esc(sp.stencil||'')+'</small></span><span class="ms-fragile">THIS SIDE UP ↑</span><span class="ms-lid"></span>'+straw+
        '<span class="ms-pry"><i></i></span><span class="ms-logged-stamp">LOGGED</span>';
      grid.appendChild(c);
      if (S.open[i]) c.classList.add('is-open','was-open');
      if (S.logged[i]) c.classList.add('is-logged');
      hold(c, i);
    });
    function drawLog(newIdx){
      log.innerHTML = ''; var n = 0;
      items.forEach(function(it, i){ var sp = SPEC[it.id]||{}; if (S.logged[i]) n++;
        log.appendChild(el('li', S.logged[i] ? (i===newIdx?'new':'') : 'empty', S.logged[i] ? '<span class="acc">'+esc(sp.acc||'')+'</span> '+esc(sp.short||sp.name)+' — '+esc(sp.logFrom||'') : '. . . . . . . .')); });
      tally.textContent = n + ' of ' + items.length + ' logged';
      if (n === items.length && items.length) { win.classList.add('show'); markDone('scene'); showOpti('lobbydone'); }
    }
    drawLog();
    function hold(c, i){
      var t0 = 0, raf = 0, need = reduce ? 250 : 750, bar = $('.ms-pry i', c), lastCreak = 0;
      function step(){ var p = Math.min(1, (Date.now()-t0)/need); bar.style.width = (p*100)+'%';
        if (Date.now()-lastCreak > 180) { lastCreak = Date.now(); SFX.creak(); }
        if (p >= 1) { stop(true); return; } raf = requestAnimationFrame(step); }
      function start(e){ if (S.open[i]) { show(i); return; } if (e) e.preventDefault(); t0 = Date.now(); c.classList.add('is-prying'); raf = requestAnimationFrame(step); }
      function stop(ok){ cancelAnimationFrame(raf); c.classList.remove('is-prying'); bar.style.width='0';
        if (ok) openCrate(i); else if (t0 && !S.open[i]) hint.textContent = cfg.holdHint || 'Keep holding! The lid is nailed down tight.';
        t0 = 0; }
      c.addEventListener('pointerdown', function(e){ if (e.button && e.button !== 0) return; try{ c.setPointerCapture(e.pointerId); }catch(_){} start(e); });
      c.addEventListener('pointerup', function(){ if (t0) stop(false); });
      c.addEventListener('pointercancel', function(){ if (t0) stop(false); });
      c.addEventListener('keydown', function(e){ if ((e.key==='Enter'||e.key===' ') && !e.repeat) { e.preventDefault(); if (S.open[i]) show(i); else openCrate(i); } });
    }
    // lid opens → warm light → specimen rises and settles → material moment → tag unfolds
    function openCrate(i){ var c = grid.children[i]; if (S.open[i]) { show(i); return; }
      S.open[i] = true; save(); c.classList.add('is-open'); SFX.pop(); hint.textContent = '';
      var id = items[i].id;
      setTimeout(function(){ if (id === 'copper') SFX.glass(); if (id === 'water') SFX.pour(); if (id === 'wheat') SFX.tick(); }, calm() ? 0 : 900);
      setTimeout(function(){ show(i); }, calm() ? 0 : 1050); }
    (function(){
      var tool = $('.ms-bar', m), ghost = null, over = null;
      tool.addEventListener('pointerdown', function(e){ e.preventDefault(); ghost = tool.cloneNode(true); ghost.classList.add('dragging'); document.body.appendChild(ghost); move(e);
        document.addEventListener('pointermove', move); document.addEventListener('pointerup', up, {once:true}); });
      function move(e){ if (!ghost) return; ghost.style.left = (e.clientX-60)+'px'; ghost.style.top = (e.clientY-15)+'px';
        var t = document.elementFromPoint(e.clientX, e.clientY), c = t && t.closest && t.closest('.ms-crate');
        if (over && over !== c) over.classList.remove('is-target'); over = c; if (c) c.classList.add('is-target'); }
      function up(){ document.removeEventListener('pointermove', move); if (ghost) ghost.remove(); ghost = null;
        if (over) { over.classList.remove('is-target'); var i = +over.dataset.i; if (S.open[i]) show(i); else openCrate(i); over = null; }
        else { SFX.miss(); hint.textContent = cfg.dropHint || 'Drop the crowbar right on top of a crate.'; } }
    })();
    // The receiving desk: one thing at a time. Each step shows only its own button.
    // 1 Inspect it → 2 See where it came from → 3 Follow it to the store → 4 Log it
    var DESK = cfg.desk || [
      {t:'Inspect it', d:'Take a close look at the specimen.', b:'🔍 Inspect it'},
      {t:'See where it came from', d:'Look at a real photo of the place it came from.', b:'📷 See where it came from'},
      {t:'Follow it to the store', d:'Tap Next step to follow it, one stop at a time.', b:'Next step →'},
      {t:'Log it', d:'Write it in the Receiving Log.', b:'✍️ Log it as received'}
    ];
    S.stage = S.stage || {};
    function show(i){
      var it = items[i], sp = SPEC[it.id] || {}, ch = it.becomes || [];
      if (S.logged[i]) S.stage[i] = 4; else if (S.stage[i] == null) S.stage[i] = 0;
      if (!sp.photo && S.stage[i] === 1) S.stage[i] = 2;
      $$('.ms-crate', grid).forEach(function(c,k){ c.classList.toggle('is-current', k===i); });
      var chain = ch.map(function(s,k){ return (k ? '<span class="ms-arrow"><i></i></span>' : '') + '<div class="ms-step'+(s.work?' w-'+s.work:'')+'"><span class="e">'+s.e+'</span>'+esc(s.t)+'</div>'; }).join('');
      table.innerHTML = '<div class="ms-tag"><div class="ms-tagart mat-'+it.id+'">'+specArt(it.id)+'</div><div class="ms-tagcard"><div class="acc">Specimen '+esc(sp.acc||'')+'</div><div class="nm">'+esc(sp.name||'')+'</div>' +
        '<div class="row"><b>Came from:</b> '+(sp.from||'')+'</div>' +
        '<div class="ms-tagbtns ms-again"><button type="button" class="ms-mini ms-insp">🔍 Inspect again</button>'+(sp.photo?'<button type="button" class="ms-mini ms-from">📷 See the photo again</button>':'')+'</div></div></div>' +
        '<div class="ms-trail"><div class="ms-chainq">'+esc(cfg.chainQ||'You buy the finished thing at a store. Where did it begin?')+'</div><div class="ms-chain">'+chain+'</div></div>' +
        '<div class="ms-guide" aria-live="polite"><div class="ms-gdots">'+DESK.map(function(_,k){ return '<i></i>'; }).join('')+'</div><div class="ms-gstep"></div><div class="ms-gdo"></div><button type="button" class="ms-btn ms-gbtn"></button></div>' +
        '<div class="ms-gdone">✓ '+esc(cfg.doneDesk||'Received and logged! Open another crate.')+'</div>' +
        '<span class="ms-received">RECEIVED</span>';
      var guide = $('.ms-guide', table), gbtn = $('.ms-gbtn', table), trail = $('.ms-trail', table);
      var steps = $$('.ms-step', table), arrows = $$('.ms-arrow', table), shown = S.stage[i] >= 3 ? steps.length : 1, busy = false;
      $('.ms-insp', table).onclick = function(){ inspect(it.id, {noPhoto:true}); };
      var fromB = $('.ms-from', table); if (fromB) fromB.onclick = function(){ placePhoto(it.id); };
      function go(n){ S.stage[i] = n; save(); paintDesk(true); }
      function paintChain(){ steps.forEach(function(s,k){ s.classList.toggle('on', k < shown); }); arrows.forEach(function(a,k){ a.classList.toggle('on', k+1 < shown); }); }
      function paintDesk(moved){
        var st = S.stage[i];
        table.classList.toggle('st-done', st >= 4);
        $$('.ms-gdots i', table).forEach(function(d,k){ d.className = k < st ? 'ok' : (k === st ? 'now' : ''); });
        trail.classList.toggle('show', st >= 2);
        $('.ms-again', table).classList.toggle('show', st >= 2);
        if (st >= 4) { guide.hidden = true; $('.ms-received', table).classList.add('go'); paintChain(); return; }
        var D = DESK[st];
        $('.ms-gstep', table).textContent = 'Step ' + (st+1) + ' of ' + DESK.length + ' · ' + D.t;
        $('.ms-gdo', table).textContent = D.d;
        gbtn.textContent = D.b;
        gbtn.disabled = busy || (st === 2 && shown >= steps.length);
        paintChain();
        if (moved) { guide.classList.remove('pop'); void guide.offsetWidth; guide.classList.add('pop'); }
      }
      gbtn.onclick = function(){
        var st = S.stage[i]; if (busy) return;
        if (st === 0) inspect(it.id, {noPhoto:true, onClose: function(){ if (S.stage[i] === 0) go(sp.photo ? 1 : 2); }});
        else if (st === 1) placePhoto(it.id, function(){ if (S.stage[i] === 1) go(2); });
        else if (st === 2) {
          // a little machine: the material travels to the next stage, the stage works, then stops so students can read
          if (shown >= steps.length) return; busy = true; paintDesk();
          var from = steps[shown-1], to = steps[shown], ar = arrows[shown-1];
          ar.classList.add('run');
          fly($('.e', from), $('.e', to), $('.e', from).innerHTML, 480).then(function(){
            ar.classList.remove('run'); shown++; to.classList.add('working'); tone(500+shown*120,.12,'sine',.05); if (to.classList.contains('w-spin')) SFX.whir();
            setTimeout(function(){ to.classList.remove('working'); busy = false; if (shown >= steps.length) go(3); else paintDesk(); }, calm() ? 0 : 600); paintChain(); });
        }
        else if (st === 3) {
          S.logged[i] = true; S.stage[i] = 4; save(); SFX.stamp(); grid.children[i].classList.add('is-logged'); paintDesk(); drawLog(i);
          var left = items.filter(function(_,k){ return !S.logged[k]; }).length; hint.textContent = left ? (cfg.nextHint||'Nice! Open another crate.') : '';
        }
      };
      paintDesk();
      if (window.innerWidth < 700) table.scrollIntoView({behavior: calm()?'auto':'smooth', block:'center'});
    }
  }

  /* ══ MODULE: timecase (Gallery · the main attraction) ══════ */
  function forestSVG(before){
    var oldT = [28,76,124].map(function(x,i){ return '<g class="old" style="transform-origin:'+x+'px 92px"><rect x="'+(x-3)+'" y="66" width="6" height="26" fill="#6b4423"/><path d="M'+x+' '+(12+i*5)+' L'+(x+21)+' 74 H'+(x-21)+'Z" fill="#1f5c3a"/><path d="M'+x+' '+(26+i*5)+' L'+(x+16)+' 60 H'+(x-16)+'Z" fill="#2b7449"/></g>'; }).join('');
    if (before) return '<svg viewBox="0 0 160 110"><rect y="92" width="160" height="18" fill="#7a5a34"/><rect y="88" width="160" height="6" fill="#5f8f43"/>'+oldT.replace(/class="old"/g,'class="bt"')+'</svg>';
    var stumps = [28,76,124].map(function(x){ return '<g class="stump"><rect x="'+(x-6)+'" y="80" width="12" height="11" rx="2" fill="#a0703f"/><ellipse cx="'+x+'" cy="80" rx="6" ry="2.4" fill="#e3bd86"/></g>'; }).join('');
    var seeds = [50,100,146,10].map(function(x,i){ return '<g class="seed s'+i+'" style="transform-origin:'+x+'px 92px"><rect x="'+(x-2.5)+'" y="66" width="5" height="26" fill="#7a5230"/><path d="M'+x+' 18 L'+(x+19)+' 74 H'+(x-19)+'Z" fill="#3f9a52"/><path d="M'+x+' 32 L'+(x+14)+' 60 H'+(x-14)+'Z" fill="#5cbf6c"/></g>'; }).join('');
    return '<svg viewBox="0 0 160 110" class="ms-art"><rect y="92" width="160" height="18" fill="#7a5a34"/><rect y="88" width="160" height="6" fill="#5f8f43"/>'+stumps+oldT+seeds+'<g class="saw"><path d="M60 40 l40 20" stroke="#888" stroke-width="5"/><rect x="96" y="56" width="14" height="8" rx="2" fill="#c0392b" transform="rotate(27 103 60)"/></g></svg>';
  }
  function tankSVG(){
    var ad = [[30,46],[92,40],[60,70],[104,76],[26,84]], bb = [[48,56],[76,52],[40,72],[84,66],[66,86],[112,58]];
    function f(p,cls){ return '<g class="'+cls+'" style="transform-origin:'+(p[0]+11)+'px '+p[1]+'px"><path d="M'+p[0]+' '+p[1]+' c6 -6 16 -6 22 0 c-6 6 -16 6 -22 0z M'+(p[0]+22)+' '+p[1]+' l7 -5 v10z" fill="#f2a43a"/><circle cx="'+(p[0]+5)+'" cy="'+(p[1]-1)+'" r="1.4" fill="#222"/></g>'; }
    return '<svg viewBox="0 0 160 110" class="ms-art"><rect x="6" y="14" width="148" height="92" rx="6" fill="#bfe6f5" stroke="#6aa9c6" stroke-width="3"/><rect x="9" y="26" width="142" height="77" fill="#5fb6e0" opacity=".75"/><path d="M9 96 q20 -8 40 0 t40 0 t40 0 t22 0 V103 H9z" fill="#d8c08a"/>'+
      '<path d="M120 100 q-4 -14 2 -26 M128 100 q4 -12 -2 -22" stroke="#3f8f52" stroke-width="3" fill="none"/>'+
      ad.map(function(p,i){ return f(p,'fsh a'+i); }).join('')+bb.map(function(p,i){ return f(p,'fsh baby b'+i); }).join('')+
      '<g class="net"><path d="M30 2 L130 2 L118 36 L42 36Z" fill="none" stroke="#6b4a2b" stroke-width="2"/><path d="M38 10 H122 M44 20 H118 M48 28 H112 M54 2 L58 36 M80 2 V36 M106 2 L102 36" stroke="#6b4a2b" stroke-width="1"/></g>'+
      '<g class="bubbles"><circle cx="40" cy="60" r="2" fill="#e8f7ff"/><circle cx="100" cy="70" r="1.6" fill="#e8f7ff"/><circle cx="70" cy="50" r="1.4" fill="#e8f7ff"/></g></svg>';
  }
  function oilSVG(){
    return '<svg viewBox="0 0 160 110" class="ms-art"><defs><clipPath id="msPocket"><path d="M36 106 C44 84 62 78 80 78 C98 78 116 84 124 106Z"/></clipPath></defs>'+
      '<rect y="0" width="160" height="34" fill="#cfe9f5"/><rect y="34" width="160" height="76" fill="#a68662"/><rect y="30" width="160" height="6" fill="#6f9a4c"/><rect y="64" width="160" height="46" fill="#7d7a78"/>'+
      '<path d="M26 108 C36 76 58 70 80 70 C102 70 124 76 134 108Z" fill="#5a5856"/>'+
      '<g clip-path="url(#msPocket)"><rect class="oilfill" x="30" y="76" width="100" height="34" fill="#141218"/></g>'+
      '<path class="emptymark" d="M36 106 C44 84 62 78 80 78 C98 78 116 84 124 106" fill="none" stroke="#d8d8d8" stroke-width="1.5" stroke-dasharray="3 3"/>'+
      '<rect x="77" y="18" width="6" height="84" fill="#666"/><path class="flow" d="M80 100 V22" stroke="#141218" stroke-width="3" stroke-dasharray="4 5"/>'+
      '<g class="pumpjack"><rect x="66" y="8" width="38" height="5" rx="2" fill="#c0392b"/><path d="M84 13 L76 30 H92Z" fill="#7a7a7a"/></g>'+
      '<path d="M83 22 H118 V26" stroke="#666" stroke-width="4" fill="none"/>'+
      '<g class="barrel"><rect x="110" y="4" width="26" height="30" rx="3" fill="#2f4f7a" stroke="#1a2c45" stroke-width="2"/><g clip-path="url(#msBarrel)"><rect class="bfill" x="112" y="6" width="22" height="26" fill="#141218"/></g><rect x="110" y="12" width="26" height="2.5" fill="#1a2c45"/><rect x="110" y="24" width="26" height="2.5" fill="#1a2c45"/></g>'+
      '<defs><clipPath id="msBarrel"><rect x="112" y="6" width="22" height="26"/></clipPath></defs></svg>';
  }
  function modTimecase(cfg){
    var reading = $('#panel-explore .activity.bl-accent'); if (!reading) return;
    ST.tl = ST.tl || {pred:null, used:false, max:-1, stop:-1, why:false};
    var S = ST.tl, stops = cfg.stops || [];
    var m = shell('ms-time-mod', cfg);
    var PL = cfg.plates || {}; var cases = [['forest',PL.forest||'🌲 Forest',forestSVG()],['fishSome',PL.fishSome||'🐟 Fish tank 1',tankSVG()],['fishAll',PL.fishAll||'🐟 Fish tank 2',tankSVG()],['oil',PL.oil||'🛢️ Oil',oilSVG()]];
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-tl-act"></div>' +
      '<div class="ms-room-wall ms-tl-wall"><div class="ms-cases4">' +
        cases.map(function(c){ return '<figure class="ms-vcase ms-'+c[0]+'" data-k="'+c[0]+'"><div class="ms-glass">'+c[2]+(c[0]==='forest'?'<span class="ms-before" title="Before">'+forestSVG(true)+'<b>Before</b></span>':'')+'<span class="ms-yrtag"></span></div><div class="ms-plinth"><span class="ms-plate">'+esc(c[1])+'</span></div><figcaption class="ms-vnote"></figcaption></figure>'; }).join('') +
      '</div>' +
      '<div class="ms-lever" aria-disabled="true"><label for="ms-lever-in">⏳ '+esc(cfg.leverT||'Time lever')+'</label><input id="ms-lever-in" type="range" min="0" max="'+(stops.length-1)+'" step="1" value="0" disabled>' +
        '<div class="ms-ticks">'+stops.map(function(s){ return '<span>'+esc(s.label)+'</span>'; }).join('')+'</div></div>' +
      '<div class="ms-model-plaque">'+esc(cfg.modelNote||'A simplified model. The years are for illustration.')+'</div>' +
      '</div>' +
      '<div class="ms-intro">'+(cfg.intro||'')+'</div>' +
      (cfg.photo ? '<figure class="ms-frame ms-inline"><img alt="'+esc(cfg.photo.alt)+'" src="'+img(cfg.photo.img)+'"><figcaption>'+cfg.photo.cap+'</figcaption></figure>' : '') +
      '<div class="ms-parts"></div><div class="ms-tl-end" hidden></div>');
    reading.parentNode.insertBefore(m, reading);
    reading.classList.add('ms-hide-on');
    var think = reading.nextElementSibling; if (think && think.classList.contains('callout-think')) think.classList.add('ms-time-think');
    var lever = $('#ms-lever-in', m), parts = $('.ms-parts', m), act = $('.ms-tl-act', m), end = $('.ms-tl-end', m);
    function setCase(k, st, note, yr){ var f = $('.ms-'+k, m); f.dataset.state = st; $('.ms-vnote', f).innerHTML = note||''; $('.ms-yrtag', f).textContent = yr||''; }
    function render(){
      var i = S.stop, st = stops[i], C = cfg.cases;
      if (!S.used) { setCase('forest','full',C.forest.start); setCase('fishSome','full',C.fishSome.start); setCase('fishAll','full',C.fishAll.start); setCase('oil','full',C.oil.start); }
      else if (i < 0) { setCase('forest','cut',C.forest.used); setCase('fishSome','some',C.fishSome.used); setCase('fishAll','empty',C.fishAll.used); setCase('oil','pumped',C.oil.used); }
      else { setCase('forest', st.forest, st.forestNote, st.label); setCase('fishSome', st.fishSome, st.fishSomeNote, st.label); setCase('fishAll','empty', st.fishAllNote, st.label); setCase('oil','pumped', st.oilNote, st.label); }
      lever.disabled = !S.used; var lv = $('.ms-lever', m); lv.setAttribute('aria-disabled', lever.disabled);
      lv.classList.toggle('ms-go', S.used && S.max < stops.length-1);
      lever.value = Math.max(0, i);
      var ST3 = cfg.steps || [], guess = S.pred ? '<p class="ms-yourguess">Your guess: <b>'+esc(cfg.predict[S.pred-1].t)+'</b></p>' : '';
      if (!S.pred) act.innerHTML = stepCard(1,3,ST3[0].title,'<p>'+ST3[0].text+'</p><div class="ms-pchoices col">'+cfg.predict.map(function(p,k){ return '<button type="button" class="ms-btn ms-pc" data-k="'+k+'">'+esc(p.t)+'</button>'; }).join('')+'</div>');
      else if (!S.used) act.innerHTML = stepCard(2,3,ST3[1].title, guess+'<p>'+ST3[1].text+'</p><button type="button" class="ms-btn big ms-use">'+esc(cfg.useT||'⛏️ Use the resources')+'</button>');
      else if (S.max < stops.length-1) act.innerHTML = stepCard(3,3,ST3[2].title, guess+'<p>'+ST3[2].text+'</p><p class="ms-sc-arrow">👇 '+esc(ST3[2].arrow||'The time lever is under the glass boxes.')+'</p>');
      else act.innerHTML = '<div class="ms-stepdone">✓ '+esc(cfg.doneT||'You did all 3 steps!')+' '+guess+'</div>';
      $$('.ms-pc', act).forEach(function(b){ b.onclick = function(){ S.pred = +b.dataset.k + 1; save(); SFX.click(); render(); }; });
      var u = $('.ms-use', act); if (u) u.onclick = function(){ S.used = true; save(); SFX.pop(); setTimeout(SFX.pour, 300); render(); };
      parts.innerHTML = '';
      stops.forEach(function(s, k){ if (k <= S.max) parts.appendChild(el('div','ms-part'+(k===S.max?' new':''), '<span class="ms-part-k">'+esc(s.label)+'</span>'+s.text)); });
      var th = $('#panel-explore .ms-time-think'); if (th) th.classList.toggle('ms-show', S.max >= stops.length-1);
      if (S.max >= stops.length-1) {
        var p = cfg.predict[S.pred-1] || {};
        end.hidden = false;
        end.innerHTML = '<div class="ms-result">'+(p.right ? '🎯 '+cfg.predictRight : '🔁 '+cfg.predictWrong)+'</div>' +
          '<div class="ms-compare"><b>👀 '+esc(cfg.compareQ)+'</b>'+(S.why ? '<p>'+cfg.compareA+'</p>' : '<button type="button" class="ms-btn alt ms-showwhy">'+esc(cfg.compareBtn||'Show me')+'</button>')+'</div>';
        var w = $('.ms-showwhy', end); if (w) w.onclick = function(){ S.why = true; save(); render(); };
        ST.gal = ST.gal||{}; if (!ST.gal.time) { ST.gal.time = 1; save(); galleryCheck(); }
      } else end.hidden = true;
    }
    function onLever(){ var v = +lever.value; S.stop = v; if (v > S.max) { S.max = v; SFX.tick(); } save(); render(); }
    lever.addEventListener('input', onLever); lever.addEventListener('change', onLever);
    render();
  }

  /* ══ MODULE: dial (Three Views of the Great Plains) ══════════ */
  function modDial(cfg){
    var card = $('#panel-explore .source-card'); if (!card) return;
    var P = cfg.photos || []; ST.dial = ST.dial || {seen:{}};
    var S = ST.dial, N = P.length;
    function tagOf(p){ var t = esc(p.tag || (p.place+' · '+p.year)); return '<span class="ms-phtag l">'+t+'</span><span class="ms-phtag r">'+t+'</span>'; }
    var m = shell('ms-dial-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-thumbs">'+P.map(function(p,i){ return '<button type="button" class="ms-thumb" data-i="'+i+'"><img alt="" src="'+img(p.img)+'"><b>'+esc(p.year)+'</b><small>'+esc(p.place)+'</small></button>'; }).join('')+'</div>' +
      '<div class="ms-onefold"><div class="ms-frame big"><div class="ms-stack">'+P.map(function(p,i){ return '<div class="ms-ph" data-i="'+i+'"><img alt="'+esc(p.alt)+'" src="'+img(p.img)+'">'+tagOf(p)+(p.pins||[]).map(function(pn,k){ return '<button type="button" class="ms-pin" data-k="'+k+'" style="left:'+pn.x+'%;top:'+pn.y+'%" aria-label="Detail '+(k+1)+'">'+(k+1)+'</button>'; }).join('')+'</div>'; }).join('')+'<span class="ms-wipe"></span></div></div>' +
      '<div class="ms-pinnote" aria-live="polite"></div>' +
      '<div class="ms-yearbar"><input type="range" min="0" max="'+((N-1)*100)+'" value="0" aria-label="Slide between the three photos"></div></div>' +
      '<div class="ms-side3" hidden>'+P.map(function(p){ return '<figure class="ms-frame"><img alt="'+esc(p.alt)+'" src="'+img(p.img)+'"><figcaption><b>'+esc(p.year)+'</b> · '+esc(p.place)+'</figcaption></figure>'; }).join('')+'</div>' +
      '<div class="ms-dialbtns"><button type="button" class="ms-btn ms-look">🔍 Look closely</button><button type="button" class="ms-btn alt ms-sbs">↔ Side by side</button></div>' +
      '<div class="ms-placard"></div>');
    card.parentNode.insertBefore(m, card);
    ['.source-card-header','.source-image-placeholder','.source-label-bar'].forEach(function(s){ var x = $(s, card); if (x) x.classList.add('ms-hide-on'); });
    card.classList.add('ms-prompts');
    var range = $('input', m), layers = $$('.ms-ph', m), wipe = $('.ms-wipe', m), placard = $('.ms-placard', m), note = $('.ms-pinnote', m);
    function at(){ return Math.round(+range.value/100); }
    function draw(){
      var v = +range.value, seg = Math.min(N-2, Math.floor(v/100)), f = (v - seg*100)/100;
      layers.forEach(function(l,i){ l.style.zIndex = i;
        l.style.clipPath = i <= seg ? 'none' : (i === seg+1 ? 'inset(0 0 0 '+(100 - f*100)+'%)' : 'inset(0 0 0 100%)');
        l.classList.toggle('front', i === at()); });
      wipe.style.left = (f>0.01 && f<0.99) ? (100 - f*100)+'%' : '-10%';
      var i = at(), p = P[i];
      if (!S.seen[i]) { S.seen[i] = 1; save(); }
      placard.innerHTML = '<div class="ms-pl-y">'+esc(p.year)+'</div><div class="ms-pl-b"><div class="ms-pl-t">'+esc(p.title)+'</div><div class="ms-pl-m">'+esc(p.meta)+'</div><p>'+p.text+'</p><div class="ms-credit">📷 '+p.credit+'</div></div>';
      $$('.ms-thumb', m).forEach(function(b,k){ b.classList.toggle('on', k===i); b.classList.toggle('seen', !!S.seen[k]); });
      if (Object.keys(S.seen).length >= N) { ST.gal = ST.gal||{}; if (!ST.gal.dial) { ST.gal.dial = 1; save(); galleryCheck(); } }
    }
    range.addEventListener('input', function(){ note.innerHTML = ''; draw(); });
    range.addEventListener('change', function(){ animateTo(at()*100); });
    function animateTo(t){ var v0 = +range.value; if (calm() || v0===t) { range.value = t; draw(); return; } var t0 = performance.now();
      (function f(now){ var k = Math.min(1,(now-t0)/450); range.value = v0 + (t-v0)*(1-Math.pow(1-k,3)); draw(); if (k<1) requestAnimationFrame(f); else SFX.tick(); })(t0); }
    $$('.ms-thumb', m).forEach(function(b){ b.onclick = function(){ note.innerHTML = ''; $('.ms-side3', m).hidden = true; $('.ms-onefold', m).hidden = false; animateTo(+b.dataset.i*100); }; });
    function pinNote(i,k){ return '<b>'+(k+1)+'</b> '+esc(P[i].pins[k].t); }
    $$('.ms-pin', m).forEach(function(b){ b.onclick = function(e){ e.stopPropagation(); var i = +b.closest('.ms-ph').dataset.i, k = +b.dataset.k;
      $$('.ms-pin', m).forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on','seen'); note.innerHTML = pinNote(i,k); SFX.click(); }; });
    $('.ms-sbs', m).onclick = function(){ var s = $('.ms-side3', m), o = $('.ms-onefold', m); s.hidden = !s.hidden; o.hidden = !s.hidden; this.textContent = s.hidden ? '↔ Side by side' : '🖼️ One at a time'; if (!s.hidden) P.forEach(function(_,k){ S.seen[k] = 1; }); save(); draw(); };
    $('.ms-look', m).onclick = function(){ var i = at(), p = P[i];
      lightbox('<div class="ms-lb-k">'+esc(p.place)+' · '+esc(p.year)+'</div><h3>'+esc(p.title)+'</h3><div class="ms-lookwrap"><div class="ms-frame"><div class="ms-lookimg"><img alt="'+esc(p.alt)+'" src="'+img(p.img)+'">'+(p.pins||[]).map(function(pn,k){ return '<button type="button" class="ms-pin show" data-k="'+k+'" style="left:'+pn.x+'%;top:'+pn.y+'%">'+(k+1)+'</button>'; }).join('')+'</div></div><div class="ms-ins-note" aria-live="polite">👆 Tap a number to look closer.</div></div>', function(c){
        $$('.ms-pin', c).forEach(function(b){ b.onclick = function(){ $$('.ms-pin', c).forEach(function(x){ x.classList.remove('on'); }); b.classList.add('on'); $('.ms-ins-note', c).innerHTML = pinNote(i, +b.dataset.k); }; });
      }); };
    draw();
  }

  /* ══ MODULE: wind (Try the wind · two soil trays) ════════════ */
  function modWind(cfg){
    var anchor = $('#panel-explore .ms-dial-mod'); if (!anchor) return;
    var card = $('#panel-explore .source-card.ms-prompts'); if (card) anchor = card;
    ST.wind = ST.wind || {pred:null, blown:false, ans:null};
    var S = ST.wind;
    // soil crumbs sit IN the top of the soil heap (never above it), so nothing looks like it is floating
    var HEAP = 82; // control-point height of the heap curve
    function surf(x0, x){ var t = (x - x0) / 94; return 98 - 2*(98-HEAP)*t*(1-t); }
    function parts(x0, n, cls){ var s = ''; for (var i=0;i<n;i++){ var x = x0 + 5 + (i*37)%84, y = surf(x0, x) + 1.6 + (i%4)*1.1, r = 1.7 + (i%3)*.5;
      var sy = (98 - .3*(98 - surf(x0, x)) + (y - surf(x0, x))*.6) - y; // where it rests once the heap is lower
      s += '<circle class="pa '+cls+'" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+r.toFixed(1)+'" style="--sy:'+sy.toFixed(1)+'px;--dx:'+(80+(i*23)%140)+'px;--dy:'+(-20-(i*13)%50)+'px;--d:'+((i%7)*60)+'ms" fill="'+(i%2?'#8a6236':'#5f3f1e')+'"/>'; } return s; }
    function heap(x0, cls){ return '<path class="mound '+cls+'" d="M'+x0+' 98 Q'+(x0+47)+' '+HEAP+' '+(x0+94)+' 98 Z" fill="#7a5230"/>'; }
    var grass = ''; for (var g=0; g<26; g++){ var gx = 191 + g*3.4, gy = (surf(188, gx) + 1.5).toFixed(1); grass += '<path d="M'+gx+' '+gy+' q'+((g%3)-1)*3+' -10 '+((g%2)?3:-2)+' -16" stroke="'+(g%2?'#3f9a52':'#5cbf6c')+'" stroke-width="2" fill="none" class="blade"/>'; }
    var roots = ''; for (var r=0;r<9;r++){ var rx = 190 + r*10; roots += '<path d="M'+rx+' 100 q'+(r%2?4:-4)+' 6 '+(r%2?1:-2)+' 14 q3 4 -2 6" stroke="#e8d6b0" stroke-width="1.3" fill="none"/>'; }
    var m = shell('ms-wind-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-windtable"><svg viewBox="0 36 320 114" class="ms-windsvg">'+
        '<rect x="0" y="0" width="320" height="150" fill="#2C3B39"/><rect x="0" y="122" width="320" height="28" fill="#8A6236"/><rect x="0" y="120" width="320" height="5" fill="#B9824A"/>'+
        '<g class="fan" transform="translate(14 0)"><rect x="6" y="80" width="6" height="40" fill="#555"/><circle cx="9" cy="72" r="16" fill="#cfd6dc" stroke="#555" stroke-width="2"/><g class="blades"><path d="M9 72 L9 58 Q15 64 9 72 M9 72 L23 72 Q17 78 9 72 M9 72 L9 86 Q3 80 9 72 M9 72 L-5 72 Q1 66 9 72" fill="#7d8790"/></g><circle cx="9" cy="72" r="3" fill="#333"/></g>'+
        '<g class="wind">'+[56,70,84,98].map(function(y,i){ return '<path d="M30 '+y+' q40 -6 80 0 t80 0 t80 0 t60 0" stroke="#cfe9f5" stroke-width="2" fill="none" stroke-dasharray="14 12" style="--d:'+(i*90)+'ms"/>'; }).join('')+'</g>'+
        '<path d="M40 96 L50 120 H140 L150 96 Z" fill="#a8763f" stroke="#6b4423" stroke-width="2"/>'+heap(48,'bare')+parts(48, 34, 'bare')+
        '<path d="M180 96 L190 120 H280 L290 96 Z" fill="#a8763f" stroke="#6b4423" stroke-width="2"/>'+heap(188,'covered')+'<g class="rootcut"><rect x="196" y="100" width="78" height="18" fill="#7a5230" opacity=".9"/>'+roots+'</g>'+parts(188, 34, 'covered')+grass+
        '<text x="95" y="140" text-anchor="middle" font-family="Nunito,sans-serif" font-weight="800" font-size="11" fill="#fff">'+esc(cfg.trayA||'Bare soil')+'</text><text x="235" y="140" text-anchor="middle" font-family="Nunito,sans-serif" font-weight="800" font-size="11" fill="#fff">'+esc(cfg.trayB||'Soil with plants')+'</text>'+
      '</svg></div>');
    m.insertBefore(el('div','ms-windact'), $('.ms-windtable', m));
    after(anchor, m);
    var svg = $('.ms-windsvg', m), act = $('.ms-windact', m);
    // the bare tray loses most of its soil; the covered tray keeps almost all of it
    $$('.pa.covered', svg).forEach(function(p,i){ if (i % 9 !== 0) p.classList.add('stay'); });
    $$('.pa.bare', svg).forEach(function(p,i){ if (i % 6 === 0) p.classList.add('stay'); });
    function render(){
      svg.classList.toggle('blown', S.blown);
      var W3 = cfg.steps || [], A = cfg.trayA||'Tray 1: bare soil', B = cfg.trayB||'Tray 2: soil with grass';
      var guess = S.pred ? '<p class="ms-yourguess">Your guess: <b>'+esc(S.pred==='covered'?B:A)+'</b></p>' : '';
      if (!S.pred) act.innerHTML = stepCard(1,3,W3[0].title,'<p>'+W3[0].text+'</p><div class="ms-pchoices"><button type="button" class="ms-btn ms-wp" data-k="bare">'+esc(A)+'</button><button type="button" class="ms-btn ms-wp" data-k="covered">'+esc(B)+'</button></div>');
      else if (!S.blown) act.innerHTML = stepCard(2,3,W3[1].title, guess+'<p>'+W3[1].text+'</p><button type="button" class="ms-btn big ms-blow">'+esc(cfg.blowT||'💨 Turn on the fan')+'</button>');
      else {
        act.innerHTML = stepCard(3,3,W3[2].title,'<div class="ms-result">'+(S.pred==='covered' ? '🎯 '+cfg.rightT : '🔁 '+cfg.wrongT)+'</div><p>'+W3[2].text+'</p><div class="ms-pchoices col">'+cfg.explain.map(function(x,k){ return '<button type="button" class="ms-btn ms-ex'+(S.ans===k?(x.ok?' ok':' no'):'')+'" data-k="'+k+'">'+esc(x.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite">'+(S.ans!=null ? (cfg.explain[S.ans].ok ? '✅ ' : '🤔 ')+cfg.explain[S.ans].fb : '')+'</div><button type="button" class="ms-mini ms-again">🔁 Turn on the fan again</button>');
      }
      $$('.ms-wp', act).forEach(function(b){ b.onclick = function(){ S.pred = b.dataset.k; save(); SFX.click(); render(); }; });
      var bl = $('.ms-blow', act); if (bl) bl.onclick = function(){ S.blown = true; save(); SFX.wind(); render(); };
      var ag = $('.ms-again', act); if (ag) ag.onclick = function(){ svg.classList.remove('blown'); void svg.offsetWidth; setTimeout(function(){ svg.classList.add('blown'); SFX.wind(); }, 60); };
      $$('.ms-ex', act).forEach(function(b){ b.onclick = function(){ S.ans = +b.dataset.k; save(); if (cfg.explain[S.ans].ok) { SFX.chime(); ST.gal = ST.gal||{}; if (!ST.gal.wind) { ST.gal.wind = 1; save(); galleryCheck(); } } else SFX.miss(); render(); }; });
    }
    render();
  }

  /* ══ MODULE: cases (shelve the specimens) ═══════════════════ */
  function modCases(cfg){
    var act = $('#panel-explore .activity.bl-purple'); if (!act) return;
    var items = cfg.items || []; ST.cases = ST.cases || {}; var S = ST.cases;
    var m = shell('ms-cases-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-sortroom"><div class="ms-cart"><div class="ms-cart-l">'+esc(cfg.cartT||'From the crates')+'</div><div class="ms-cards"></div></div>' +
      '<div class="ms-dcases">'+cfg.cases.map(function(c){ return '<div class="ms-dcase" data-k="'+c.k+'" role="button" tabindex="0" aria-label="'+esc(c.label)+' case"><div class="ms-dglass"><div class="ms-shelf"></div></div><div class="ms-dplinth"><span class="ms-plate">'+c.icon+' '+esc(c.label)+'</span><small>'+esc(c.sub)+'</small></div></div>'; }).join('')+'</div></div>' +
      '<div class="ms-sortfb" aria-live="polite"></div><div class="ms-win">'+(cfg.win||'')+'</div>');
    act.parentNode.insertBefore(m, act);
    act.classList.add('ms-hide-on');
    var cards = $('.ms-cards', m), fb = $('.ms-sortfb', m), win = $('.ms-win', m), picked = null;
    items.forEach(function(it, i){
      var sp = SPEC[it.id]||{}, c = el('button','ms-ocard'); c.type='button'; c.dataset.i = i;
      c.innerHTML = '<span class="ms-ospec">'+specArt(it.id)+'</span><span>'+esc(sp.short||sp.name)+'</span>';
      c.setAttribute('aria-label', (sp.short||sp.name) + '. Pick it up, then choose a case.');
      cards.appendChild(c);
      dragger(c, function(moved, target){ if (S[i]) return; if (!moved) { pick(i); return; } if (target) drop(i, target.dataset.k); else SFX.miss(); }, '.ms-dcase');
    });
    $$('.ms-dcase', m).forEach(function(d){
      d.addEventListener('click', function(){ if (picked != null) drop(picked, d.dataset.k); });
      d.addEventListener('keydown', function(e){ if ((e.key==='Enter'||e.key===' ') && picked != null) { e.preventDefault(); drop(picked, d.dataset.k); } });
    });
    function pick(i){ picked = (picked === i) ? null : i; $$('.ms-ocard', cards).forEach(function(c){ c.classList.toggle('picked', +c.dataset.i === picked); });
      m.classList.toggle('has-pick', picked != null); if (picked != null) { fb.className = 'ms-sortfb'; fb.innerHTML = '👆 Now tap the case where <b>'+esc((SPEC[items[i].id]||{}).short)+'</b> belongs.'; SFX.click(); } }
    function place(i){ var it = items[i], sp = SPEC[it.id]||{}, d = $('.ms-dcase[data-k="'+it.k+'"] .ms-shelf', m);
      var o = el('div','ms-onshelf','<span class="ms-ospec">'+specArt(it.id)+'</span><span>'+esc(sp.short||sp.name)+'</span>'); d.appendChild(o);
      var c = $('.ms-ocard[data-i="'+i+'"]', cards); if (c) c.classList.add('placed'); return o; }
    function drop(i, k){
      var it = items[i]; picked = null; m.classList.remove('has-pick'); $$('.ms-ocard', cards).forEach(function(c){ c.classList.remove('picked'); });
      if (S[i]) return;
      var card = $('.ms-ocard[data-i="'+i+'"]', cards);
      if (it.k === k) { S[i] = 1; save(); var o = place(i); o.style.visibility = 'hidden';
        fly($('.ms-ospec', card), $('.ms-ospec', o), specArt(it.id), 520).then(function(){ o.style.visibility = ''; o.classList.add('arrive'); SFX.glass(); });
        fb.className = 'ms-sortfb ok'; fb.innerHTML = '✅ '+it.right; }
      else { SFX.miss(); if (card) { card.classList.remove('bounce'); void card.offsetWidth; card.classList.add('bounce'); } fb.className = 'ms-sortfb no'; fb.innerHTML = '🤔 '+it.wrong; }
      check();
    }
    function check(){ var n = items.filter(function(_,i){ return S[i]; }).length;
      if (n === items.length) { win.classList.add('show'); ST.gal = ST.gal||{}; if (!ST.gal.cases) { ST.gal.cases = 1; save(); galleryCheck(); } } }
    items.forEach(function(_,i){ if (S[i]) place(i); }); check();
  }

  /* ══ MODULE: onequiz (Workroom) ═════════════════════════════ */
  function modOneQuiz(){
    var card = $('#panel-check .quiz-card'); if (!card) return;
    var qs = $$('.quiz-q', card); if (!qs.length) return;
    card.classList.add('ms-onequiz');
    var bar = el('div','ms-qbar ms-only','<span class="ms-qn"></span><span class="ms-qdots">'+qs.map(function(){ return '<i></i>'; }).join('')+'</span>');
    card.insertBefore(bar, card.firstChild);
    var nav = el('div','ms-qnav ms-only','<button type="button" class="ms-btn ms-qnext" hidden>Next question →</button>');
    after(qs[qs.length-1], nav);
    var cur = 0, next = $('.ms-qnext', nav);
    function all(){ return qs.every(function(q){ return q.classList.contains('answered'); }); }
    function show(){
      qs.forEach(function(q,i){ q.classList.toggle('ms-qcur', i===cur); });
      $('.ms-qn', bar).textContent = all() ? 'All done!' : 'Question ' + (cur+1) + ' of ' + qs.length;
      $$('.ms-qdots i', bar).forEach(function(d,i){ d.className = qs[i].classList.contains('answered') ? 'done' : (i===cur ? 'on' : ''); });
      next.hidden = !(qs[cur].classList.contains('answered') && cur < qs.length-1);
      card.classList.toggle('ms-qall', all());
      if (all()) markDone('check');
    }
    next.onclick = function(){ if (cur < qs.length-1) { cur++; show(); SFX.click(); var t = card.getBoundingClientRect().top + pageYOffset - 150; window.scrollTo({top:t, behavior: calm()?'auto':'smooth'}); } };
    qs.forEach(function(q){ $$('.quiz-opt', q).forEach(function(o){ o.addEventListener('click', function(){ setTimeout(show, 0); }); }); });
    show();
  }

  /* ══ MODULE: exhibit (install and open your own exhibit) ════ */
  function modExhibit(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var host = ta.closest('.activity') || ta.parentNode;
    ST.ex = ST.ex || {id:null, open:false};
    var S = ST.ex, ids = cfg.choices || Object.keys(SPEC);
    var m = shell('ms-exhibit-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-expick"><span>'+esc(cfg.pickT||'1. Pick the resource your label is about:')+'</span><div class="ms-expicks">'+ids.map(function(id){ var s = SPEC[id]||{}; return '<button type="button" class="ms-exp" data-id="'+id+'"><span class="ms-ospec">'+specArt(id)+'</span><b>'+esc(s.short||s.name)+'</b></button>'; }).join('')+'</div></div>' +
      '<div class="ms-alcove"><div class="ms-spot"></div><div class="ms-exstage"><div class="ms-exspec"></div><div class="ms-pedestal"><span></span></div><div class="ms-cover"><i></i></div></div>' +
        '<div class="ms-label"><span class="ms-holder"></span><div class="ms-ltitle"></div><div class="ms-lacc"></div><div class="ms-ltext"></div><div class="ms-lby"></div><span class="ms-draft">DRAFT</span></div></div>' +
      '<div class="ms-excheck"></div>' +
      '<label class="ms-exname">'+esc(cfg.nameT||'Your name for the label (or leave it as Junior Curator):')+' <input type="text" maxlength="30" placeholder="Junior Curator"></label>' +
      '<div class="ms-exbtns"><button type="button" class="ms-btn big ms-unveil">🎉 '+esc(cfg.openT||'Open my exhibit')+'</button><button type="button" class="ms-btn alt ms-edit">✏️ '+esc(cfg.editT||'Edit my label')+'</button></div>' +
      '<div class="ms-exwin" aria-live="polite"></div>');
    // the student's own writing box comes first, the exhibit right under it
    after(host, m);
    var nameIn = $('.ms-exname input', m); nameIn.value = sget(NAMEK, '') || '';
    var alc = $('.ms-alcove', m), lt = $('.ms-ltext', m), un = $('.ms-unveil', m), chk = $('.ms-excheck', m), exwin = $('.ms-exwin', m);
    var NEED = cfg.minWords || 20, CH = cfg.checks || [];
    function words(){ return (ta.value.trim().match(/\S+/g)||[]).length; }
    function render(){
      var s = SPEC[S.id];
      $$('.ms-exp', m).forEach(function(b){ b.classList.toggle('on', b.dataset.id === S.id); });
      $('.ms-exspec', m).innerHTML = s ? specArt(S.id) : '<span class="ms-exempty">?</span>';
      $('.ms-ltitle', m).textContent = cfg.titleFixed || (s ? s.name : (cfg.noPickT || 'Pick a resource above'));
      $('.ms-lacc', m).textContent = s ? (s.accLine || ('Specimen '+s.acc+' · '+(s.foundIn||''))) : (cfg.titleFixed ? (cfg.noPickT||'') : '');
      var v = ta.value.trim();
      lt.textContent = v || (cfg.emptyT || 'Your label will appear here as you write it in the box above.');
      lt.classList.toggle('empty', !v);
      $('.ms-lby', m).textContent = '— ' + (nameIn.value.trim() || 'Junior Curator') + ', Regional Curator';
      var n = words(), ready = !!s && n >= NEED;
      chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+n+' of '+NEED+' words</span>' + CH.map(function(c){ var ok = new RegExp(c.re,'i').test(v); return '<span class="ms-chip'+(ok?' ok':'')+'">'+(ok?'✓ ':'')+esc(c.t)+'</span>'; }).join('');
      un.classList.toggle('ms-notready', !ready); un.hidden = S.open;
      S.miss = !s ? [cfg.missPick || 'Pick one above.'] : [];
      if (n < NEED) S.miss.push('Write '+(NEED-n)+' more word'+(NEED-n===1?'':'s')+' in the box.');
      var need = CH.filter(function(c){ return !new RegExp(c.re,'i').test(v); }).map(function(c){ return c.t; });
      if (need.length) S.miss.push((cfg.needT||'Your words still need:')+' '+need.join(' · ')+'.');
      $('.ms-edit', m).hidden = !S.open;
      alc.classList.toggle('open', S.open);
      if (S.open) exwin.innerHTML = cfg.win||'';
      else if (!$('.ms-notyet', exwin) || !S.miss.length) exwin.innerHTML = S.miss.length ? '' : '<div class="ms-notyet ok">✅ Ready! Press <b>'+esc(cfg.openT||'Open my exhibit')+'</b>.</div>';
      else exwin.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Before you open it: '+S.miss.map(esc).join(' ')+'</div>';
      check();
    }
    $$('.ms-exp', m).forEach(function(b){ b.onclick = function(){ S.id = b.dataset.id; save(); SFX.click(); render(); }; });
    ta.addEventListener('input', render);
    nameIn.addEventListener('input', function(){ sset(NAMEK, nameIn.value.trim()); render(); });
    un.onclick = function(){ if (S.miss && S.miss.length) { SFX.miss(); exwin.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Before you open it: '+S.miss.map(esc).join(' ')+'</div>'; return; } S.open = true; save(); alc.classList.remove('opening'); void alc.offsetWidth; alc.classList.add('opening'); SFX.fanfare(); render();
      setTimeout(function(){ alc.classList.remove('opening'); }, 1600); optiNod('assignment'); alc.scrollIntoView({behavior: calm()?'auto':'smooth', block:'center'}); };
    $('.ms-edit', m).onclick = function(){ ta.focus(); ta.scrollIntoView({behavior: calm()?'auto':'smooth', block:'center'}); };
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render();
  }

  /* ══ MODULE: galintro (Exhibit Floor · the gallery introduction) ══
     Nov 2026 pilot: replaces the welcome sign. Three steps, one at a time:
     1 finish the direction sentence (a chain of places, one blank at a time)
     2 the real Curator Task box moves in here; add one sentence of your own
     3 read it on the gallery wall → Open my gallery (always clickable; says what's missing).
     cfg: textarea, lead, places [spec ids in chain order], links [{a,b,ans,hint}], dirs, ownT, starters, ownMin, mapSel */
  function modGalintro(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    ST.gi = ST.gi || {links:[], step:1, open:false};
    var S = ST.gi, L = cfg.links || [], P = cfg.places || [], OWN = cfg.ownMin || 8;
    var DIRS = cfg.dirs || [['north','⬆️'],['south','⬇️'],['east','➡️'],['west','⬅️']];
    var ICON = {}; DIRS.forEach(function(d){ ICON[d[0]] = d[1]; });
    var m = shell('ms-gi-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-gi-act"></div>' +
      '<div class="ms-gi-wall" hidden><div class="ms-gi-panel"><div class="ms-gi-h">'+esc(cfg.wallT||'Gallery Introduction')+'</div><div class="ms-gi-chain"></div><div class="ms-gi-text"></div><div class="ms-gi-by"></div><span class="ms-draft">DRAFT</span></div><div class="ms-gi-curtain"><i></i></div></div>' +
      '<div class="ms-gi-end"></div>');
    // sits where the writing box was; the box itself moves into Step 2 (and goes home with the layer off)
    var home = document.createComment('gi-home'); ta.parentNode.insertBefore(home, ta);
    ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-gi-act', m), wall = $('.ms-gi-wall', m), end = $('.ms-gi-end', m), curUpd = null;
    ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    function place(){ if (!root.classList.contains('ms-on')) { if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); } else render(); }
    new MutationObserver(place).observe(root, {attributes:true, attributeFilter:['class']});
    function name(id){ var s = SPEC[id]||{}; return s.short || s.name || id; }
    function chainSentence(upto){ // "Canada is north of the United States, which is north of Mexico, which is west of the Caribbean."
      var t = ''; L.forEach(function(l,k){ if (k >= upto) return; t += (k ? ', which is ' : l.a+' is ') + S.links[k] + ' of ' + l.b; }); return t ? t + '.' : '';
    }
    function full(){ return (cfg.lead ? cfg.lead+' ' : '') + chainSentence(L.length); }
    function done1(){ return S.links.length >= L.length; }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function missing(){
      var v = ta.value, miss = [];
      if (!done1()) return [cfg.missChain || 'Finish the direction sentence first.'];
      if (v.indexOf(chainSentence(L.length)) < 0) miss.push(cfg.missGone || 'Your direction sentence changed. Press ↩️ Put my sentence back.');
      var own = words(v.replace(full(),'').replace(chainSentence(L.length),''));
      if (own < OWN) miss.push('Add '+(OWN-own)+' more word'+(OWN-own===1?'':'s')+' of your own.');
      return miss;
    }
    function chainHTML(live){ // the four postcards in sentence order with the direction between each pair
      return '<div class="ms-gi-row">'+P.map(function(id,k){
        var card = '<figure class="ms-gi-card"><span class="ms-ospec">'+specArt(id)+'</span><figcaption>'+esc(name(id))+'</figcaption></figure>';
        if (k === P.length-1) return card;
        var d = S.links[k], cur = live && k === S.links.length;
        return card + '<span class="ms-gi-link'+(d?' set':'')+(cur?' cur':'')+'"><b>'+(d ? ICON[d]+' '+esc(d) : '?')+'</b><small>is '+(d?esc(d):'___')+' of</small></span>';
      }).join('')+'</div>';
    }
    function sentenceHTML(){
      return '<p class="ms-gi-sent">'+L.map(function(l,k){
        var d = S.links[k], blank = d ? '<b class="ms-gi-blank set">'+esc(d)+'</b>' : '<b class="ms-gi-blank'+(k===S.links.length?' cur':'')+'">?</b>';
        return (k ? ', which is ' : esc(l.a)+' is ') + blank + ' of ' + esc(l.b);
      }).join('')+'.</p>';
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      wall.hidden = S.step < 3; end.innerHTML = '';
      ta.classList.toggle('ms-gi-away', S.step !== 2 || !done1()); // the box shows only in Step 2 (it lives inside that step)
      if (S.step === 1 || !done1()) {
        S.step = 1; var k = S.links.length, l = L[k];
        act.innerHTML = stepCard(1, 3, cfg.s1T || 'Finish the direction sentence', chainHTML(true) + sentenceHTML() +
          (l ? '<p class="ms-wm-do">👉 '+esc((cfg.s1Do||'Where is {a} compared to {b}? Tap the direction.').replace('{a}', l.a).replace('{b}', l.b))+'</p>' +
            '<div class="ms-gi-dirs">'+DIRS.map(function(d){ return '<button type="button" class="ms-btn ms-gi-dir" data-d="'+d[0]+'">'+d[1]+' '+esc(d[0][0].toUpperCase()+d[0].slice(1))+'</button>'; }).join('')+'</div>' +
            '<div class="ms-exfb" aria-live="polite"></div>' : '') +
          (cfg.mapSel && $(cfg.mapSel) ? '<details class="ms-gi-map"><summary>🗺️ Show me the map</summary><img alt="'+esc($(cfg.mapSel).alt||'Map')+'" src="'+$(cfg.mapSel).src+'"></details>' : ''));
        $$('.ms-gi-dir', act).forEach(function(b){ b.onclick = function(){
          if (b.dataset.d === l.ans) { SFX.chime(); S.links.push(l.ans); save();
            if (done1()) { var v = ta.value.trim(); if (v.indexOf(chainSentence(L.length)) < 0) { ta.value = full() + (v ? ' ' + v : ' '); ta.dispatchEvent(new Event('input',{bubbles:true})); } S.step = 2; save(); }
            render();
          } else { SFX.miss(); b.classList.add('no'); $('.ms-exfb', act).innerHTML = '🤔 '+(l.hint || 'Look at the map again.'); }
        }; });
        return;
      }
      if (S.step === 2) {
        act.innerHTML = stepCard(2, 3, cfg.s2T || 'Add a sentence of your own', '<p class="ms-gi-ok">✅ '+esc(cfg.s2Got||'Your direction sentence is in the box.')+'</p><p>'+(cfg.ownT||'')+'</p>' +
          '<div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t)+'</button>'; }).join('')+'</div>' +
          '<div class="ms-gi-box"></div><div class="ms-gi-count"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-gi-back">↩️ '+esc(cfg.backT||'Put my sentence back')+'</button><button type="button" class="ms-btn big ms-gi-next">'+esc(cfg.nextT||'Next: see it on the wall')+' ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var back = $('.ms-gi-back', act), cnt = $('.ms-gi-count', act), fb = $('.ms-gi-fb', act);
        function upd(){ var miss = missing(), own = words(ta.value.replace(full(),'').replace(chainSentence(L.length),''));
          back.hidden = ta.value.indexOf(chainSentence(L.length)) >= 0;
          cnt.innerHTML = '<span class="ms-wc'+(own>=OWN?' ok':'')+'">📝 '+Math.min(own,OWN)+' of '+OWN+' words of your own</span>';
          $('.ms-gi-next', act).classList.toggle('ms-notready', !!miss.length);
          if (fb.innerHTML && !miss.length) fb.innerHTML = ''; else if (fb.innerHTML) fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; }
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b,i){ b.onclick = function(){ var t = (cfg.starters||[])[i]; ta.value = ta.value.replace(/\s*$/,'') + ' ' + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        back.onclick = function(){ ta.value = full() + ' ' + ta.value.replace(full(),'').trim(); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); };
        $('.ms-gi-next', act).onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
          SFX.click(); S.step = 3; save(); home.parentNode.insertBefore(ta, home.nextSibling); render(); wall.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return;
      }
      // step 3: the wall
      if (ta.parentNode && ta.parentNode.classList && ta.parentNode.classList.contains('ms-gi-box')) home.parentNode.insertBefore(ta, home.nextSibling);
      $('.ms-gi-chain', wall).innerHTML = chainHTML(false);
      $('.ms-gi-text', wall).textContent = ta.value.replace(cfg.lead||'\u0000','').trim(); // the wall's own heading already says welcome
      $('.ms-gi-by', wall).textContent = '— ' + (sget(NAMEK,'') || 'Junior Curator') + ', Regional Curator';
      wall.classList.toggle('open', S.open);
      act.innerHTML = S.open ? '' : stepCard(3, 3, cfg.s3T || 'Open your gallery', '<p>'+(cfg.s3Text||'Read your introduction on the wall below. Then open your gallery.')+'</p><button type="button" class="ms-btn big ms-gi-open">🎉 '+esc(cfg.openT||'Open my gallery')+'</button><div class="ms-gi-fb" aria-live="polite"></div>');
      end.innerHTML = S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-gi-edit">✏️ '+esc(cfg.editT||'Edit my introduction')+'</button></div>'
                             : '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-gi-edit">✏️ '+esc(cfg.editT||'Edit my introduction')+'</button></div>';
      var ob = $('.ms-gi-open', act); if (ob) ob.onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); wall.classList.remove('opening'); void wall.offsetWidth; wall.classList.add('opening'); SFX.fanfare(); render();
        setTimeout(function(){ wall.classList.remove('opening'); }, 1600); optiNod('assignment'); check(); };
      $('.ms-gi-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══ glossary ═══════════════════════════════════════════════ */
  function buildGlossary(){
    var G = DATA.glossary || []; if (!G.length) return;
    var map = {}, alts = [];
    G.forEach(function(g){ [g.t].concat(g.alt||[]).forEach(function(w){ map[w.toLowerCase()] = g; alts.push(w); }); });
    alts.sort(function(x,y){ return y.length - x.length; });
    var re = new RegExp('\\b(' + alts.map(function(w){ return w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/ /g,'\\s+'); }).join('|') + ')(s|es)?\\b', 'gi');
    var SKIP = '.intro-card-head,.ms-mod-h,.step-badge,.ms-opti .ms-on,.ms-part-k,.ms-pl-m,.ms-credit,.source-label-bar,button,.quiz-opt,textarea,input,select,label,a,script,style,svg,.ms-term,.ms-tip,.ms-ocard,.ms-crate,.ms-tagcard .acc,.ms-gstep,.ms-tabs,.ms-thumbs,.header,.ms-sign,.ms-plate,.video-wrap,.ms-hd-panel,.ms-label,.ms-excheck,.ms-phtag,summary,.ms-sheet,.ms-shelf,.ms-exp,.ms-dplinth,.gathered-box,#gatheredAnswers,.ms-gi-wall,.ms-gi-row,.ms-gi-sent,.ms-gi-dirs';
    var BLOCK = '.ms-opti,.ms-part,.ms-placard,.ms-tag,.ms-why,.ms-intro p,.ms-win,.ms-sortfb,.ms-result,.ms-compare,.ms-exfb,.ms-lens,.ms-mod,.callout,.intro-card,.quiz-q,.key-concept,.activity,.source-card,.evidence-card,p,li';
    var tip = el('div','ms-tip'); tip.setAttribute('role','tooltip'); tip.id = 'ms-tip'; document.body.appendChild(tip);
    var cur = null;
    function find(word){ var w = word.toLowerCase().replace(/\s+/g,' '); return map[w] || map[w.replace(/(es|s)$/,'')] || map[w.replace(/s$/,'')]; }
    function wrapIn(rootEl){
      var walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, { acceptNode: function(n){
        if (!n.nodeValue || !/[a-z]/i.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement; if (!p || p.closest(SKIP)) return NodeFilter.FILTER_REJECT;
        re.lastIndex = 0; return re.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } });
      var list = []; while (walker.nextNode()) list.push(walker.currentNode);
      list.forEach(function(n){
        var txt = n.nodeValue, frag = document.createDocumentFragment(), lastI = 0, mm; re.lastIndex = 0;
        while ((mm = re.exec(txt))) {
          var g = find(mm[0]); if (!g) continue;
          var blk = n.parentElement.closest('.ms-context,.ms-stepcard,.ms-why,.ms-placard,.ms-tag,.ms-explain') || n.parentElement.closest(BLOCK) || rootEl, key = g.t.toLowerCase();
          blk.__msT = blk.__msT || {}; var prev = blk.__msT[key]; if (prev && (prev.__pending || (prev.isConnected && blk.contains(prev)))) continue;
          if (mm.index > lastI) frag.appendChild(document.createTextNode(txt.slice(lastI, mm.index)));
          var sp = el('span','ms-term'); sp.textContent = mm[0]; sp.tabIndex = 0; sp.dataset.t = g.t; sp.setAttribute('aria-describedby','ms-tip');
          sp.__pending = true; frag.appendChild(sp); blk.__msT[key] = sp; lastI = mm.index + mm[0].length;
        }
        if (lastI === 0) return;
        if (lastI < txt.length) frag.appendChild(document.createTextNode(txt.slice(lastI)));
        if (/flex|grid/.test(getComputedStyle(n.parentNode).display)) { var box = el('span','ms-tbox'); box.appendChild(frag); frag = box; }
        var made = frag.querySelectorAll ? [].slice.call(frag.querySelectorAll('.ms-term')) : [];
        n.parentNode.replaceChild(frag, n); made.forEach(function(x){ x.__pending = false; });
      });
    }
    function show(t){
      if (!root.classList.contains('ms-on')) return;
      var g = map[t.dataset.t.toLowerCase()]; if (!g) return; cur = t;
      tip.innerHTML = '<div class="ms-tip-h"><b>'+esc(g.t)+'</b>'+(g.key ? '<button type="button" class="ms-say ms-wsay" data-word="'+slug(g.t)+'" aria-label="Hear the word '+esc(g.t)+'">🔊</button>' : '')+'</div>'+esc(g.d); tip.classList.add('show'); clearTimeout(hideT);
      var r = t.getBoundingClientRect(), w = Math.min(280, window.innerWidth - 24); tip.style.width = w+'px';
      var x = Math.max(12, Math.min(window.innerWidth - w - 12, r.left + r.width/2 - w/2));
      var h = tip.offsetHeight, above = r.top - h - 10 > 70;
      tip.style.left = x+'px'; tip.style.top = (above ? r.top - h - 10 : r.bottom + 10) + 'px';
      tip.classList.toggle('below', !above); tip.style.setProperty('--ax', (r.left + r.width/2 - x) + 'px');
    }
    var hideT = 0;
    function hide(){ clearTimeout(hideT); tip.classList.remove('show'); cur = null; }
    function hideSoon(){ clearTimeout(hideT); hideT = setTimeout(function(){ if (!tip.matches(':hover') && !tip.contains(document.activeElement)) hide(); }, 350); }
    // the tooltip stays open while the mouse is on it, so the 🔊 button can be clicked
    tip.addEventListener('mouseenter', function(){ clearTimeout(hideT); });
    tip.addEventListener('mouseleave', hideSoon);
    document.addEventListener('mouseover', function(e){ var t = e.target.closest && e.target.closest('.ms-term'); if (t && t !== cur) show(t); });
    document.addEventListener('mouseout', function(e){ var t = e.target.closest && e.target.closest('.ms-term'); if (t && !(e.relatedTarget && (t.contains(e.relatedTarget) || tip.contains(e.relatedTarget)))) hideSoon(); });
    document.addEventListener('click', function(e){ if (tip.contains(e.target)) return; var t = e.target.closest && e.target.closest('.ms-term'); if (t) show(t); else hide(); });
    document.addEventListener('focusin', function(e){ if (e.target.classList && e.target.classList.contains('ms-term')) show(e.target); });
    document.addEventListener('focusout', function(e){ if (e.target.classList && e.target.classList.contains('ms-term')) hideSoon(); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') hide(); });
    window.addEventListener('scroll', hide, {passive:true});
    var targets = $$('.tab-panel, #introSection');
    targets.forEach(wrapIn);
    var pending = null, obs = new MutationObserver(function(muts){
      var add = []; muts.forEach(function(mu){ [].forEach.call(mu.addedNodes, function(n){ if (n.nodeType === 1 && !n.closest('.ms-term')) add.push(n); else if (n.nodeType === 3 && n.parentElement) add.push(n.parentElement); }); });
      if (!add.length) return;
      clearTimeout(pending); pending = setTimeout(function(){ obs.disconnect(); add.forEach(function(n){ if (n.isConnected) wrapIn(n); }); targets.forEach(function(t){ obs.observe(t, {childList:true, subtree:true}); }); }, 50);
    });
    targets.forEach(function(t){ obs.observe(t, {childList:true, subtree:true}); });
  }

  /* ── motion: pause anything that is off screen ─────────────── */
  function offscreenPause(){
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ e.target.classList.toggle('ms-paused', !e.isIntersecting); }); });
    $$('.ms-mod, .ms-hero, .ms-opti').forEach(function(x){ io.observe(x); });
  }

  /* ══ MAP HELPERS (3.06.01) ═════════════════════════════════
     DATA.map = {W,H, groups:{canada,usa,mexico,caribbean,other}, lakes, grat, pts:{key:[x,y]}, hit:{caribbean:[cx,cy,rx,ry]}}
     Paths are already projected (orthographic, centered on North America). The layer only draws them. */
  var PLACES = ['canada','usa','mexico','caribbean'];
  function pct(M, p){ return 'left:'+(p[0]/M.W*100).toFixed(2)+'%;top:'+(p[1]/M.H*100).toFixed(2)+'%;'; }
  function compassSVG(cx, cy, r){
    return '<g class="ms-compass" transform="translate('+cx+' '+cy+')"><circle r="'+(r*1.08)+'" class="cr"/>'+
      '<path d="M0 '+(-r)+' L'+(r*.2)+' 0 L0 '+r+' L'+(-r*.2)+' 0Z" class="ns"/><path d="M'+(-r)+' 0 L0 '+(r*.2)+' L'+r+' 0 L0 '+(-r*.2)+'Z" class="ew"/>'+
      '<path d="M0 '+(-r)+' L'+(r*.2)+' 0 L'+(-r*.2)+' 0Z" class="n"/>'+
      '<text y="'+(-r-10)+'" class="cl">N</text><text y="'+(r+28)+'" class="cl">S</text><text x="'+(r+18)+'" y="9" class="cl">E</text><text x="'+(-r-18)+'" y="9" class="cl">W</text></g>';
  }
  function mapSVG(M, opt){
    opt = opt || {}; var g = M.groups, P = M.pts || {}, h = (M.hit||{}).caribbean;
    var waters = (M.waters||[]).map(function(w){ var p = P[w.k]; return p ? '<text class="water" x="'+p[0]+'" y="'+p[1]+'">'+esc(w.t)+'</text>' : ''; }).join('');
    var grays = (M.grays||[]).map(function(w){ var p = P[w.k]; return p ? '<text class="grayname" x="'+p[0]+'" y="'+p[1]+'">'+esc(w.t)+'</text>' : ''; }).join('');
    return '<svg class="ms-map '+(opt.cls||'')+'" viewBox="0 0 '+M.W+' '+M.H+'" role="img" aria-label="'+esc(opt.label||'Map of North America and the Caribbean')+'">'+
      '<rect class="sea" width="'+M.W+'" height="'+M.H+'"/><path class="grat" d="'+M.grat+'"/>'+
      (h && opt.hits ? '<ellipse class="hit" data-k="caribbean" cx="'+h[0]+'" cy="'+h[1]+'" rx="'+h[2]+'" ry="'+h[3]+'"/>' : '')+
      '<path class="other" d="'+g.other+'"/>'+
      PLACES.map(function(k){ return '<path class="pl pl-'+k+'" data-k="'+k+'" d="'+g[k]+'"/>'; }).join('')+
      '<path class="lakes" d="'+M.lakes+'"/>'+
      (opt.names === false ? '' : waters + grays)+(opt.compass ? compassSVG(M.compass[0], M.compass[1], M.compass[2]) : '')+'</svg>';
  }

  /* ══ MODULE: globe (Lobby · the World Map Hall globe → the new gallery doors) ══
     cfg: texture, steps[3] {title,text,btn}, plaque, doneT. Step 1 turn the globe, 2 zoom in, 3 open the doors. */
  function modGlobe(cfg){
    var sign = $('#panel-scene .ms-sign'); if (!sign) return;
    ST.gl = ST.gl || {step:0};
    var S = ST.gl, M = DATA.map;
    var m = shell('ms-globe-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-gl-stage" data-s="0"><div class="ms-gl-wall"></div>' +
        '<div class="ms-gl-globe"><div class="ms-gl-ball"><canvas width="360" height="360" aria-label="A globe of the Earth"></canvas><span class="ms-gl-ring"></span></div><svg class="ms-gl-stand" viewBox="0 0 200 70" aria-hidden="true"><path d="M100 0 V44" stroke="#B8892E" stroke-width="9"/><path d="M40 70 Q100 30 160 70Z" fill="#7E5430"/><ellipse cx="100" cy="67" rx="64" ry="6" fill="#5E3D1C"/></svg></div>' +
        '<div class="ms-gl-zoom">'+(M ? mapSVG(M, {cls:'ms-gl-map', names:false}) : '')+'<span class="ms-gl-zlab">'+esc(cfg.zoomLabel||'North America and the Caribbean')+'</span></div>' +
        '<div class="ms-gl-door"><div class="ms-gl-plaque">'+esc(cfg.plaque||'North America & Caribbean Gallery')+'</div><div class="ms-gl-arch"><div class="ms-gl-inside">'+(M ? mapSVG(M, {cls:'ms-gl-map lit', names:false}) : '')+'</div><span class="ms-gl-leaf l"><i></i></span><span class="ms-gl-leaf r"><i></i></span></div></div>' +
      '</div><div class="ms-gl-act"></div>');
    after(sign, m);
    var stage = $('.ms-gl-stage', m), act = $('.ms-gl-act', m), cv = $('canvas', m), ctx = cv.getContext('2d');
    // ── the globe: a real orthographic view of the NASA picture, drawn pixel by pixel ──
    var N = cv.width, TEX = null, TW = 0, TH = 0, PIX = null, lon = cfg.startLon != null ? cfg.startLon : 20, spin = null;
    var LAT0 = (cfg.tilt != null ? cfg.tilt : 32) * Math.PI/180, TARGET = cfg.targetLon != null ? cfg.targetLon : -98;
    function prep(){
      PIX = []; var r = N/2 - 2;
      for (var j=0;j<N;j++) for (var i=0;i<N;i++){
        var x = (i - N/2 + .5)/r, y = -(j - N/2 + .5)/r, rho = Math.sqrt(x*x+y*y); if (rho >= 1) continue;
        var c = Math.asin(rho), sc = Math.sin(c), cc = Math.cos(c);
        var lat = rho ? Math.asin(cc*Math.sin(LAT0) + y*sc*Math.cos(LAT0)/rho) : LAT0;
        var dl = rho ? Math.atan2(x*sc, rho*cc*Math.cos(LAT0) - y*sc*Math.sin(LAT0)) : 0;
        var v = Math.min(TH-1, Math.max(0, Math.round((90 - lat*180/Math.PI)/180*TH - .5)));
        PIX.push((j*N+i), v, dl*180/Math.PI, .5 + .5*cc);
      }
    }
    function draw(){
      if (!TEX) return; var out = ctx.createImageData(N, N), d = out.data;
      for (var k=0;k<PIX.length;k+=4){
        var u = Math.floor(((lon + PIX[k+2] + 540) % 360)/360*TW) % TW, t = (PIX[k+1]*TW + u)*4, o = PIX[k]*4, sh = PIX[k+3];
        d[o] = TEX[t]*sh; d[o+1] = TEX[t+1]*sh; d[o+2] = TEX[t+2]*sh; d[o+3] = 255;
      }
      ctx.putImageData(out, 0, 0);
    }
    var im = new Image();
    im.onload = function(){ var c2 = document.createElement('canvas'); TW = c2.width = im.naturalWidth; TH = c2.height = im.naturalHeight; var x2 = c2.getContext('2d'); x2.drawImage(im, 0, 0); try { TEX = x2.getImageData(0,0,TW,TH).data; } catch(e){ TEX = null; } if (TEX) { prep(); if (S.step >= 1) lon = TARGET; draw(); idleOn(); } };
    im.src = img(cfg.texture || 'globe-tex.jpg');
    // drag to turn it by hand
    var dragX = null;
    cv.addEventListener('pointerdown', function(e){ if (S.step) return; dragX = e.clientX; cv.setPointerCapture(e.pointerId); });
    cv.addEventListener('pointermove', function(e){ if (dragX == null) return; lon -= (e.clientX - dragX) * .6; dragX = e.clientX; draw(); });
    cv.addEventListener('pointerup', function(){ dragX = null; if (!S.step && Math.abs(((lon - TARGET + 540) % 360) - 180) < 22) turned(); });
    function turned(){ if (S.step) return; idleOff(); spinTo(TARGET, function(){ S.step = 1; save(); SFX.chime(); render(); }); }
    // a slow drift while the globe waits to be turned (Nov 2026: "why doesn't the globe spin?")
    var idle = null, last = 0;
    function idleOn(){ if (idle || S.step || calm()) return; last = performance.now();
      (function f(now){ if (S.step || calm()) { idle = null; return; }
        if (dragX == null && !m.classList.contains('ms-paused') && root.classList.contains('ms-on')) { lon -= (now - last) * .012; draw(); }
        last = now; idle = requestAnimationFrame(f); })(last); }
    function idleOff(){ cancelAnimationFrame(idle); idle = null; }
    function spinTo(target, done){
      cancelAnimationFrame(spin);
      var from = lon, dist = ((from - target) % 360 + 360) % 360; if (dist < 30) dist += 360; // always turn west to east, at least most of a turn
      if (calm() || !TEX) { lon = target; draw(); return done(); }
      var t0 = performance.now(), dur = 2600;
      (function f(now){ var k = Math.min(1, (now - t0)/dur), e = 1 - Math.pow(1-k, 3); lon = from - dist*e; draw(); if (k < 1) spin = requestAnimationFrame(f); else { lon = target; draw(); done(); } })(t0);
    }
    var ST3 = cfg.steps || [], NODOORS = cfg.doors === false, TOT = NODOORS ? 2 : 3;
    if (NODOORS) { stage.classList.add('nodoors'); if (S.step === 2) { S.step = 3; save(); } } // no doors: zooming in finishes the Lobby
    function render(){
      stage.dataset.s = S.step;
      var s = ST3[Math.min(S.step, 2)] || {};
      if (S.step === 0) act.innerHTML = stepCard(1, TOT, s.title, '<p>'+s.text+'</p><button type="button" class="ms-btn big ms-gl-go">'+esc(s.btn)+'</button>');
      else if (S.step === 1) act.innerHTML = stepCard(2, TOT, s.title, '<p>'+s.text+'</p><button type="button" class="ms-btn big ms-gl-go">'+esc(s.btn)+'</button>');
      else if (S.step === 2) act.innerHTML = stepCard(3, 3, s.title, '<p>'+s.text+'</p><button type="button" class="ms-btn big ms-gl-go">'+esc(s.btn)+'</button>');
      else act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>';
      if (S.step >= 1) act.insertAdjacentHTML('beforeend', '<button type="button" class="ms-btn alt ms-gl-again">🔄 '+esc(cfg.againT||'Spin the globe again')+'</button>');
      var ag = $('.ms-gl-again', act); if (ag) ag.onclick = function(){ SFX.click(); ag.disabled = true; stage.dataset.s = 0; lon = TARGET + 180; draw(); spinTo(TARGET, function(){ setTimeout(function(){ stage.dataset.s = S.step; ag.disabled = false; }, calm() ? 0 : 700); }); };
      var b = $('.ms-gl-go', act); if (!b) return;
      b.onclick = function(){ b.disabled = true; SFX.click();
        if (S.step === 0) turned();
        else if (S.step === 1) { stage.classList.add('zooming'); setTimeout(function(){ stage.classList.remove('zooming');
          if (NODOORS) { S.step = 3; save(); render(); setTimeout(function(){ SFX.fanfare(); markDone('scene'); }, calm() ? 0 : 300); }
          else { S.step = 2; save(); SFX.glass(); render(); } }, calm() ? 40 : 1500); }
        else { S.step = 3; save(); SFX.creak(); render(); setTimeout(function(){ SFX.fanfare(); markDone('scene'); }, calm() ? 0 : 900); }
      };
    }
    render();
  }

  /* ══ MODULE: wallmap (Gallery · hang the labels, then pin the postcards) ══
     cfg.labels: [{k, name, clue, hint}], cfg.cards: [specimen ids], cfg.miss {other}, cfg.partB {title,text}, cfg.finale */
  function modWallmap(cfg){
    var M = DATA.map; if (!M) return;
    var anchor = $(cfg.anchor || '#panel-explore .ms-sign'); if (!anchor) return;
    ST.wm = ST.wm || {hung:{}, flip:{}, pin:{}};
    var S = ST.wm, L = cfg.labels || [], C = cfg.cards || [];
    var names = {}; L.forEach(function(l){ names[l.k] = l.name; });
    var m = shell('ms-wm-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-wm-wall"><div class="ms-wm-title">'+esc(cfg.mapTitle||'North America and the Caribbean')+'</div><div class="ms-wm-frame">'+mapSVG(M, {cls:'ms-wm-map', hits:true, compass:true})+'<div class="ms-wm-ov"></div></div></div>' +
      '<div class="ms-wm-act"></div><div class="ms-wm-fb" aria-live="polite"></div>');
    if (cfg.where === 'before') anchor.parentNode.insertBefore(m, anchor); else after(anchor, m);
    var svg = $('.ms-wm-map', m), ov = $('.ms-wm-ov', m), act = $('.ms-wm-act', m), fb = $('.ms-wm-fb', m), frame = $('.ms-wm-frame', m);
    function curLabel(){ for (var i=0;i<L.length;i++) if (!S.hung[L[i].k]) return i; return -1; }
    function curCard(){ for (var i=0;i<C.length;i++) if (!S.pin[C[i]]) return i; return -1; }
    function paintMap(){
      PLACES.forEach(function(k){ var p = $('.pl-'+k, svg); if (p) p.classList.toggle('on', !!S.hung[k]); });
      svg.classList.toggle('all', curLabel() < 0);
      ov.innerHTML = L.filter(function(l){ return S.hung[l.k]; }).map(function(l){ return '<span class="ms-wm-lbl lbl-'+l.k+'" style="'+pct(M, M.pts[l.k])+'">'+esc(l.name)+'</span>'; }).join('') +
        C.filter(function(id){ return S.pin[id]; }).map(function(id){ var s = SPEC[id]; return '<button type="button" class="ms-wm-pin" data-id="'+id+'" style="'+pct(M, M.pts[s.pin])+'" aria-label="Postcard from '+esc(s.short)+'"><img alt="" src="'+img(s.card)+'"></button>'; }).join('');
      $$('.ms-wm-pin', ov).forEach(function(b){ b.onclick = function(){ cardBox(b.dataset.id, true); }; });
    }
    function cardBox(id, big){
      var s = SPEC[id];
      lightbox('<div class="ms-lb-k">Postcard · '+esc(s.short)+'</div><h3>'+esc(s.name)+'</h3><div class="ms-pc-pair"><figure class="ms-pc front"><img alt="'+esc(s.photoAlt||'')+'" src="'+img(s.card)+'"></figure><div class="ms-pc back"><p>'+s.back+'</p><div class="ms-pc-stamp">'+esc(s.stamp||'')+'</div></div></div><p class="ms-credit">📷 '+esc(s.photoCredit||'')+'</p>');
    }
    function postcardHTML(id, flipped){
      var s = SPEC[id];
      return '<div class="ms-pc-card'+(flipped?' flipped':'')+'"><div class="ms-pc-in"><figure class="ms-pc front"><img alt="'+esc(s.photoAlt||'')+'" src="'+img(s.card)+'"><span class="ms-pc-greet">'+esc(cfg.greet||'Greetings from North America!')+'</span></figure>' +
        '<div class="ms-pc back"><p>'+s.back+'</p><div class="ms-pc-stamp">'+esc(s.stamp||'')+'</div><div class="ms-pc-lines"><i></i><i></i><i></i></div></div></div></div>';
    }
    function render(){
      paintMap(); fb.innerHTML = '';
      var li = curLabel(), ci = curCard();
      if (li >= 0) {
        var l = L[li];
        act.innerHTML = stepCard(li+1, L.length, 'Hang the '+String(l.name).replace(/^The /,'')+' label', '<div class="ms-wm-tag"><span class="ms-wm-hole"></span><b>'+esc(l.name)+'</b><span class="clue">Clue: '+l.clue+'</span></div><p class="ms-wm-do">👆 '+esc(cfg.tapT||'Tap the place on the map where this label belongs.')+'</p>');
        frame.dataset.mode = 'label';
      } else if (ci >= 0) {
        var id = C[ci], s = SPEC[id], fl = !!S.flip[id];
        act.innerHTML = (ci === 0 && !fl ? '<div class="ms-win show">'+(cfg.finale||'')+'</div>' : '') +
          '<div class="ms-wm-partb">'+esc(cfg.partBT||'Part 2 · Pin the postcards')+'</div>' +
          stepCard(ci+1, C.length, 'Postcard '+(ci+1)+' of '+C.length, postcardHTML(id, fl) +
            (fl ? '<p class="ms-wm-do">👆 '+esc(cfg.pinT||'Tap the place on the map where this photo was taken.')+'</p>' : '<button type="button" class="ms-btn big ms-pc-flip">🔄 '+esc(cfg.flipT||'Turn the postcard over')+'</button>'));
        frame.dataset.mode = fl ? 'card' : '';
        var fbtn = $('.ms-pc-flip', act); if (fbtn) fbtn.onclick = function(){ S.flip[id] = 1; save(); SFX.click(); var c = $('.ms-pc-card', act); if (c) c.classList.add('flipped'); fbtn.disabled = true; setTimeout(function(){ var p = el('p','ms-wm-do','👆 '+esc(cfg.pinT||'Tap the place on the map where this photo was taken.')); fbtn.parentNode.replaceChild(p, fbtn); frame.dataset.mode = 'card'; }, calm() ? 0 : 620); };
        if (ci === 0 && !fl) showOpti('cards');
      } else {
        frame.dataset.mode = '';
        act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div><button type="button" class="ms-mini ms-wm-again">🔁 '+esc(cfg.againT||'Start the wall map over')+'</button>';
        $('.ms-wm-again', act).onclick = function(){ ST.wm = S = {hung:{}, flip:{}, pin:{}}; save(); render(); };
        ST.gal = ST.gal || {}; if (!ST.gal.map) { ST.gal.map = 1; save(); galleryCheck(); }
      }
    }
    function tapped(k){
      var li = curLabel(), ci = curCard();
      if (li >= 0) {
        var want = L[li];
        if (k === want.k) { S.hung[k] = 1; save(); SFX.stamp(); render(); var lb = $('.lbl-'+k, ov); if (lb && !calm()) lb.classList.add('drop'); if (curLabel() < 0) { SFX.fanfare(); } return; }
        SFX.miss();
        fb.innerHTML = '🤔 ' + (k === 'other' ? esc(cfg.grayT||'That gray land is not part of today\'s region.') : (S.hung[k] ? 'That is '+esc(names[k]).replace(/^The /,'the ')+'. Its label is already up.' : 'That is '+esc(names[k]).replace(/^The /,'the ')+'.')) + ' ' + want.hint;
        return;
      }
      if (ci >= 0 && S.flip[C[ci]]) {
        var s = SPEC[C[ci]];
        if (k === s.place) { var from = $('.ms-pc-card', act); S.pin[C[ci]] = 1; save(); SFX.stamp(); fly(from, frame, '<img alt="" src="'+img(s.card)+'" style="width:100%">', 600).then(render); return; }
        SFX.miss();
        fb.innerHTML = '🤔 ' + (k === 'other' ? esc(cfg.grayT||'That gray land is not part of today\'s region.') : 'That is '+esc(names[k]).replace(/^The /,'the ')+'.') + ' ' + esc(cfg.reread||'Read the back of the postcard again. It says where the photo was taken.');
      }
    }
    $$('[data-k]', svg).forEach(function(p){ p.addEventListener('click', function(){ tapped(p.dataset.k); }); });
    $('.other', svg).addEventListener('click', function(){ tapped('other'); });
    render();
  }

  /* ══ MODULE: spacemap (Gallery source room · Earth from space vs. the map) ══
     replaces the lesson's source-card picture; keeps its question prompts */
  function modSpacemap(cfg){
    var M = DATA.map, card = $('#panel-explore .source-card'); if (!M || !card) return;
    ST.sp = ST.sp || {a1:null, slid:false, a2:null};
    var S = ST.sp, Q1 = cfg.q1, Q2 = cfg.q2;
    var m = shell('ms-sp-mod', cfg);
    var g = M.groups;
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-frame ms-sp-frame"><div class="ms-sp-stack"><img class="ms-sp-photo" alt="'+esc(cfg.alt||'')+'" src="'+img(cfg.photo)+'">' +
        '<svg class="ms-sp-lines" viewBox="0 0 '+M.W+' '+M.H+'" aria-hidden="true"><path class="b" d="'+g.other+' '+PLACES.map(function(k){ return g[k]; }).join(' ')+'"/>' +
        (cfg.names||[]).map(function(n){ var p = M.pts[n.k]; return p ? '<text x="'+p[0]+'" y="'+p[1]+'" class="'+(n.water?'w':'n')+'">'+esc(n.t)+'</text>' : ''; }).join('')+'</svg>' +
        '<span class="ms-phtag l">'+esc(cfg.tagL||'')+'</span><span class="ms-phtag r ms-sp-tagr">'+esc(cfg.tagR||'')+'</span></div>' +
        '<figcaption>'+cfg.credit+'</figcaption></div>' +
      '<div class="ms-sp-slide"><span>🛰️ '+esc(cfg.leftT||'From space')+'</span><input type="range" min="0" max="100" value="'+(S.slid?100:0)+'" aria-label="'+esc(cfg.slideLabel||'Add the map lines')+'"><span>🗺️ '+esc(cfg.rightT||'Map lines')+'</span></div>' +
      '<div class="ms-sp-act"></div>');
    card.parentNode.insertBefore(m, card);
    ['.source-card-header','.source-image-placeholder','.source-label-bar'].forEach(function(s){ var x = $(s, card); if (x) x.classList.add('ms-hide-on'); });
    card.classList.add('ms-prompts');
    var range = $('input', m), lines = $('.ms-sp-lines', m), act = $('.ms-sp-act', m), tagr = $('.ms-sp-tagr', m); var slide = $('.ms-sp-slide', m), frame = $('.ms-sp-frame', m);
    function setLines(){ var v = +range.value/100; lines.style.opacity = v; tagr.textContent = v > .5 ? (cfg.tagR2||'') : (cfg.tagR||''); }
    range.addEventListener('input', function(){ setLines(); if (+range.value >= 90 && !S.slid) { S.slid = true; save(); SFX.chime(); render(); } });
    function choices(Q, ans, key){
      return '<div class="ms-pchoices col">'+Q.opts.map(function(o,k){ return '<button type="button" class="ms-btn ms-spq'+(ans===k?(o.ok?' ok':' no'):'')+'" data-q="'+key+'" data-k="'+k+'">'+esc(o.t)+'</button>'; }).join('')+'</div>' +
        '<div class="ms-exfb" aria-live="polite">'+(ans!=null ? (Q.opts[ans].ok ? '✅ ' : '🤔 ')+Q.opts[ans].fb : '')+'</div>';
    }
    function render(){
      // slider first (it is there from the start), then the questions (Bethany, 11 Nov: "do the questions after they do the slider")
      var ok1 = S.a1 != null && Q1.opts[S.a1].ok, ok2 = S.a2 != null && Q2.opts[S.a2].ok;
      m.classList.add('can-slide');
      range.disabled = false; slide.hidden = false;
      frame.parentNode.insertBefore(slide, act); // park it under the picture before the step card is redrawn
      if (!S.slid) { act.innerHTML = stepCard(1, 3, cfg.slideTitle, '<p>'+cfg.slideText+'</p><p class="ms-wm-do">👉 '+esc(cfg.slideDo)+'</p>'); $('.ms-stepcard', act).appendChild(slide); }
      else if (!ok1) act.innerHTML = stepCard(2, 3, Q1.title, '<p>'+Q1.text+'</p>'+choices(Q1, S.a1, 'a1'));
      else act.innerHTML = stepCard(3, 3, Q2.title, '<p>'+Q2.text+'</p>'+choices(Q2, S.a2, 'a2')) + (ok2 ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : '');
      sliderPaint(range);
      $$('.ms-spq', act).forEach(function(b){ b.onclick = function(){ var Q = b.dataset.q === 'a1' ? Q1 : Q2; S[b.dataset.q] = +b.dataset.k; save();
        if (Q.opts[+b.dataset.k].ok) { SFX.chime(); if (b.dataset.q === 'a2') { ST.gal = ST.gal||{}; if (!ST.gal.space) { ST.gal.space = 1; save(); galleryCheck(); } } } else SFX.miss();
        render(); }; });
    }
    if (S.slid) range.value = 100; setLines(); render();
  }

  /* ══ MODULE: sizescale (Gallery · same size, different numbers of people) ══
     DATA.size = {CAN,USA,MEX paths (equal-area), box:[x,y,w,h], move:[dx,dy]}; cfg.people [{k,name,n,label}] (1 figure = cfg.per) */
  function modSizescale(cfg){
    var Z = DATA.size, anchor = $(cfg.anchor || '#panel-explore .source-card'); if (!Z || !anchor) return;
    ST.sz = ST.sz || {moved:false, people:false, ans:null};
    var S = ST.sz, Q = cfg.q, B = Z.box;
    var m = shell('ms-sz-mod', cfg);
    var figs = (cfg.people||[]).map(function(p){ var f = ''; for (var i=0;i<p.n;i++) f += '<i style="--d:'+(i*35)+'ms"></i>'; return '<div class="ms-sz-row r-'+p.k+'"><b>'+esc(p.name)+'</b><span class="ms-sz-figs">'+f+'</span><small>'+esc(p.label)+'</small></div>'; }).join('');
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-sz-board"><svg class="ms-sz-svg" viewBox="'+B.join(' ')+'" role="img" aria-label="'+esc(cfg.alt||'')+'">' +
        '<path class="can" d="'+Z.CAN+'"/><g class="usa-g"><path class="usa" d="'+Z.USA+'"/></g>' +
        '<text class="t can-t" x="'+Z.lab.CAN[0]+'" y="'+Z.lab.CAN[1]+'">'+esc(cfg.canT||'Canada')+'</text><text class="t usa-t" x="'+Z.lab.USA[0]+'" y="'+Z.lab.USA[1]+'">'+esc(cfg.usaT||'United States')+'</text></svg>' +
        '<div class="ms-sz-key"><span class="k can"></span>'+esc(cfg.canT||'Canada')+' <span class="k usa"></span>'+esc(cfg.usaT||'United States')+'</div></div>' +
      '<div class="ms-sz-people"><div class="ms-sz-per">'+esc(cfg.perT||'')+'</div>'+figs+'</div>' +
      '<div class="ms-sz-act"></div>');
    if (cfg.where === 'before') anchor.parentNode.insertBefore(m, anchor); else after(anchor, m);
    var svg = $('.ms-sz-svg', m), ug = $('.usa-g', m), act = $('.ms-sz-act', m), ppl = $('.ms-sz-people', m);
    function place(){ ug.style.transform = S.moved ? 'translate('+Z.move[0]+'px,'+Z.move[1]+'px)' : ''; svg.classList.toggle('moved', S.moved); ppl.classList.toggle('show', S.people); }
    var T = cfg.steps || [];
    function render(){
      place();
      if (!S.moved) act.innerHTML = stepCard(1, 3, T[0].title, '<p>'+T[0].text+'</p><button type="button" class="ms-btn big ms-sz-go">'+esc(T[0].btn)+'</button>');
      else if (!S.people) act.innerHTML = '<div class="ms-result">📏 '+cfg.sizeResult+'</div>' + stepCard(2, 3, T[1].title, '<p>'+T[1].text+'</p><button type="button" class="ms-btn big ms-sz-go">'+esc(T[1].btn)+'</button>');
      else act.innerHTML = '<div class="ms-result">📏 '+cfg.sizeResult+'</div>' + stepCard(3, 3, Q.title, '<p>'+Q.text+'</p><div class="ms-pchoices col">'+Q.opts.map(function(o,k){ return '<button type="button" class="ms-btn ms-szq'+(S.ans===k?(o.ok?' ok':' no'):'')+'" data-k="'+k+'">'+esc(o.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite">'+(S.ans!=null ? (Q.opts[S.ans].ok?'✅ ':'🤔 ')+Q.opts[S.ans].fb : '')+'</div>') +
        '<button type="button" class="ms-mini ms-sz-back">🔁 '+esc(cfg.againT||'Move the United States back')+'</button>';
      var go = $('.ms-sz-go', act); if (go) go.onclick = function(){ SFX.click(); if (!S.moved) { S.moved = true; SFX.whir(); } else { S.people = true; SFX.pop(); } save(); render(); };
      var bk = $('.ms-sz-back', act); if (bk) { var vis = true; bk.onclick = function(){ vis = !vis; ug.style.transform = vis ? 'translate('+Z.move[0]+'px,'+Z.move[1]+'px)' : ''; svg.classList.toggle('moved', vis); bk.textContent = '🔁 ' + (vis ? (cfg.againT||'Move the United States back') : (cfg.againT2||'Move it onto Canada again')); SFX.whir(); }; }
      $$('.ms-szq', act).forEach(function(b){ b.onclick = function(){ S.ans = +b.dataset.k; save(); if (Q.opts[S.ans].ok) { SFX.chime(); ST.gal = ST.gal||{}; if (!ST.gal.size) { ST.gal.size = 1; save(); galleryCheck(); } } else SFX.miss(); render(); }; });
    }
    render();
  }


  /* ══ Added for 3.06.02 (DATA.geo holds the projected shapes: slice, rivers, borders, label points) ══ */
  function geoLabels(G, list){
    return (list||[]).map(function(n){ var p = G.pts[n.k]; if (!p) return '';
      return '<text class="ms-geo-t '+(n.c||'')+'" x="'+(p[0]+(n.dx||0))+'" y="'+(p[1]+(n.dy||0))+'"'+(n.rot!=null?' transform="rotate('+n.rot+' '+(p[0]+(n.dx||0))+' '+(p[1]+(n.dy||0))+')"':'')+'>'+esc(n.t)+'</text>'; }).join('');
  }
  function choiceBlock(Q, ans, cls){
    return '<div class="ms-pchoices col">'+Q.opts.map(function(o,k){ return '<button type="button" class="ms-btn '+cls+(ans===k?(o.ok?' ok':' no'):'')+'" data-k="'+k+'">'+esc(o.t)+'</button>'; }).join('')+'</div>' +
      '<div class="ms-exfb" aria-live="polite">'+(ans!=null ? (Q.opts[ans].ok ? '✅ ' : '🤔 ')+Q.opts[ans].fb : '')+'</div>';
  }

  /* ══ MODULE: cart (Lobby · the label cart and the four drawers) ══
     cfg.items: [specimen ids] in order; specimen.kind = a drawer key; cfg.drawers [{k,t,icon,def}] */
  function modCart(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    ST.ct = ST.ct || {lift:{}, done:{}};
    var S = ST.ct, IT = cfg.items || [], DR = cfg.drawers || [];
    var m = shell('ms-ct-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-ct-room"><div class="ms-ct-cab" role="group" aria-label="'+esc(cfg.cabT||'The specimen cabinet')+'"><div class="ms-ct-cabtop">'+esc(cfg.cabT||'Physical Features Cabinet')+'</div>' +
        DR.map(function(d){ return '<button type="button" class="ms-ct-dr" data-k="'+d.k+'" aria-label="'+esc(d.t)+' drawer"><span class="ms-ct-tray"></span><span class="ms-ct-front"><span class="ms-ct-plate">'+d.icon+' '+esc(d.t)+'</span><i class="ms-ct-knob"></i></span></button>'; }).join('') +
      '</div><div class="ms-ct-cart"><div class="ms-ct-cartlab">'+esc(cfg.cartT||'New labels')+'</div><div class="ms-ct-slots">' +
        IT.map(function(id,i){ return '<span class="ms-ct-slot" data-i="'+i+'"><span class="ms-ct-cloth"></span><span class="ms-ct-num">'+(i+1)+'</span></span>'; }).join('') +
      '</div><svg class="ms-ct-wheels" viewBox="0 0 300 40" aria-hidden="true"><rect x="10" y="2" width="280" height="8" rx="3" fill="#6B4423"/><circle cx="50" cy="26" r="11" fill="#3B2A1A"/><circle cx="50" cy="26" r="4" fill="#B8892E"/><circle cx="250" cy="26" r="11" fill="#3B2A1A"/><circle cx="250" cy="26" r="4" fill="#B8892E"/></svg></div></div>' +
      '<div class="ms-ct-act"></div><div class="ms-ct-fb" aria-live="polite"></div>');
    if (cfg.where === 'before') anchor.parentNode.insertBefore(m, anchor); else after(anchor, m);
    var act = $('.ms-ct-act', m), fb = $('.ms-ct-fb', m), cab = $('.ms-ct-cab', m), cart = $('.ms-ct-cart', m);
    var DN = {}; DR.forEach(function(d){ DN[d.k] = d; });
    // the cart rolls in the first time it comes into view
    if (!S.rolled && !calm() && 'IntersectionObserver' in window) {
      cart.classList.add('away');
      var io = new IntersectionObserver(function(es){ if (es[0].isIntersecting) { io.disconnect(); cart.classList.remove('away'); cart.classList.add('roll'); SFX.whir(); S.rolled = 1; save(); } }, {threshold:.4});
      io.observe($('.ms-ct-room', m));
    }
    function cur(){ for (var i=0;i<IT.length;i++) if (!S.done[i]) return i; return -1; }
    function paint(){
      var c = cur();
      $$('.ms-ct-slot', m).forEach(function(s,i){ s.classList.toggle('done', !!S.done[i]); s.classList.toggle('now', i === c); s.classList.toggle('lifted', !!S.lift[i] && !S.done[i]); });
      DR.forEach(function(d){ var tray = $('.ms-ct-dr[data-k="'+d.k+'"] .ms-ct-tray', m);
        tray.innerHTML = IT.map(function(id,i){ var s = SPEC[id]; return (S.done[i] && s.kind === d.k) ? '<span class="ms-ct-chip" data-id="'+id+'"><img alt="" src="'+img(s.card)+'"><b>'+esc(s.short)+'</b></span>' : ''; }).join(''); });
      cab.classList.toggle('pick', c >= 0 && !!S.lift[c]);
    }
    function labelCard(id){
      var s = SPEC[id];
      return '<div class="ms-ct-label"><figure><img alt="'+esc(s.photoAlt||'')+'" src="'+img(s.card)+'"><figcaption>📷 '+esc(s.photoCredit||'')+'</figcaption></figure>' +
        '<div class="ms-ct-tag"><span class="ms-ct-hole"></span><b>'+esc(s.name)+'</b><span class="clue">'+s.clue+'</span></div></div>';
    }
    function render(){
      paint();
      var c = cur();
      if (c < 0) {
        act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div><p class="ms-ct-again">'+esc(cfg.againT||'Tap a label in a drawer to see its photo again.')+'</p>';
        return;
      }
      var id = IT[c];
      if (!S.lift[c]) act.innerHTML = stepCard(c+1, IT.length, 'Label '+(c+1)+' of '+IT.length, '<p>'+esc(cfg.liftT||'This label is under a cloth. Lift the cloth to see it.')+'</p><button type="button" class="ms-btn big ms-ct-lift">🧺 '+esc(cfg.liftBtn||'Lift the cloth')+'</button>');
      else act.innerHTML = stepCard(c+1, IT.length, 'Label '+(c+1)+' of '+IT.length, labelCard(id) +
        '<p class="ms-wm-do">👆 '+esc(cfg.pickT||'Which drawer does this label go in? Tap the drawer.')+'</p><div class="ms-ct-pick">'+DR.map(function(d){ return '<button type="button" class="ms-btn ms-ct-pk" data-k="'+d.k+'">'+d.icon+' '+esc(d.t)+'</button>'; }).join('')+'</div>');
      var lb = $('.ms-ct-lift', act); if (lb) lb.onclick = function(){ lb.disabled = true; SFX.creak(); S.lift[c] = 1; save(); fb.innerHTML = ''; var sl = $('.ms-ct-slot[data-i="'+c+'"]', m); if (sl) sl.classList.add('lifting'); setTimeout(render, calm() ? 0 : 450); };
      $$('.ms-ct-pk', act).forEach(function(b){ b.onclick = function(){ drop(b.dataset.k, b); }; });
    }
    function drop(k, from){
      var c = cur(); if (c < 0 || !S.lift[c]) return;
      var s = SPEC[IT[c]];
      if (k !== s.kind) { SFX.miss(); fb.innerHTML = '🤔 That is the '+esc(DN[k].t)+' drawer. '+s.hint; return; }
      var dr = $('.ms-ct-dr[data-k="'+k+'"]', m), card = $('.ms-ct-label figure', act) || from;
      dr.classList.add('open'); SFX.glass();
      fly(card, dr, '<img alt="" src="'+img(s.card)+'" style="width:100%">', 650).then(function(){
        S.done[c] = 1; save(); SFX.stamp(); fb.innerHTML = '✅ '+s.ok; render();
        setTimeout(function(){ dr.classList.remove('open'); }, calm() ? 0 : 900);
        if (cur() < 0) { SFX.fanfare(); markDone('scene'); }
      });
    }
    $$('.ms-ct-dr', m).forEach(function(d){ d.addEventListener('click', function(e){
      var chip = e.target.closest && e.target.closest('.ms-ct-chip');
      if (chip) { var s = SPEC[chip.dataset.id]; lightbox('<div class="ms-lb-k">'+esc(DN[s.kind].t)+' drawer</div><h3>'+esc(s.name)+'</h3><figure class="ms-ct-lbfig"><img alt="'+esc(s.photoAlt||'')+'" src="'+img(s.card)+'"></figure><p>'+s.clue+'</p><p class="ms-credit">📷 '+esc(s.photoCredit||'')+'</p>'); return; }
      drop(d.dataset.k, d);
    }); });
    render();
  }

  /* ══ MODULE: relief (Gallery main attraction · the Relief Table) ══
     Step 1 tilt the map (3-D), 2 cut the slice, 3 walk across it, 4 compare two parts.
     cfg.height / cfg.texture = small PNGs (grid); DATA.geo.slice = {lon0,lon1,elev[],line[]} */
  function modRelief(cfg){
    var G = DATA.geo, anchor = $(cfg.anchor || '#panel-explore .ms-sign'); if (!G || !anchor) return;
    ST.rt = ST.rt || {step:0, stop:0, ans:null};
    var S = ST.rt, STOPS = cfg.stops || [], Q = cfg.q;
    var m = shell('ms-rt-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-rt-room"><div class="ms-rt-table"><canvas width="720" height="672" aria-label="'+esc(cfg.alt||'A model of the land of North America')+'"></canvas><span class="ms-rt-model">'+esc(cfg.modelT||'A simple model')+'</span></div>' +
        '<div class="ms-rt-tilt"><span>🗺️ '+esc(cfg.flatT||'Flat')+'</span><input type="range" min="0" max="100" value="'+(S.step?100:0)+'" aria-label="'+esc(cfg.tiltLabel||'Tilt the map')+'"><span>⛰️ '+esc(cfg.upT||'Standing up')+'</span></div></div>' +
      '<div class="ms-rt-side"><div class="ms-rt-sidet">'+esc(cfg.sideT||'The slice, seen from the side')+'</div><div class="ms-rt-sidebox"></div></div>' +
      '<div class="ms-rt-act"></div>');
    if (cfg.where === 'before') anchor.parentNode.insertBefore(m, anchor); else after(anchor, m);
    var cv = $('canvas', m), ctx = cv.getContext('2d'), act = $('.ms-rt-act', m), range = $('.ms-rt-tilt input', m), side = $('.ms-rt-side', m), sideBox = $('.ms-rt-sidebox', m);
    var CW = cv.width, CH = cv.height, GW = 0, GH = 0, HG = null, TX = null, tilt = S.step ? 1 : 0, MAXA = (cfg.maxTilt||56)*Math.PI/180, anim = 0;
    var out = ctx.createImageData(CW, CH), buf = new Uint32Array(out.data.buffer), ybuf = new Int32Array(CW);
    function load(name, cb){ var im = new Image(); im.onload = function(){ var c = document.createElement('canvas'); c.width = im.naturalWidth; c.height = im.naturalHeight; var x = c.getContext('2d'); x.drawImage(im,0,0); try { cb(x.getImageData(0,0,c.width,c.height).data, c.width, c.height); } catch(e){ cb(null); } }; im.src = img(name); }
    var wall0 = [0xF2,0xEA,0xDA], wall1 = [0xE2,0xD3,0xB6];
    function rgba(r,g,b){ return (255<<24)|(b<<16)|(g<<8)|r; }
    function view(t){
      var a = MAXA*t, s = (CW/GW)*(1 + .42*t), fx = GW*(.5 - .06*t), fy = GH*(.5 + .12*t);
      return {a:a, c:Math.cos(a), sn:Math.sin(a), s:s, fx:fx, fy:fy, cx:CW/2, cy:CH*(.5 + .07*t), hk:(cfg.hScale||70)*t};
    }
    function hAt(i, j){ i = Math.max(0, Math.min(GW-1, i|0)); j = Math.max(0, Math.min(GH-1, j|0)); return HF ? HF[j*GW+i] : HG[(j*GW+i)*4]/255; }
    var HF = null;
    function prepH(){ // smooth the heights a little (3x3), as floats 0..1
      HF = new Float32Array(GW*GH);
      for (var j=0;j<GH;j++) for (var i=0;i<GW;i++){ var t = 0, n = 0;
        for (var dj=-1;dj<=1;dj++) for (var di=-1;di<=1;di++){ var ii = i+di, jj = j+dj; if (ii<0||jj<0||ii>=GW||jj>=GH) continue; t += HG[(jj*GW+ii)*4]; n++; }
        HF[j*GW+i] = HG[(j*GW+i)*4] ? t/n/255 : 0; }
    }
    function draw(){
      if (!HG || !TX) return; if (!HF) prepH();
      var V = view(tilt), x, j, y, top, k, sideCol = rgba(0x6B,0x44,0x23), lift = V.hk*V.sn*(1+.42*tilt), rowpx = V.c*V.s;
      for (y=0;y<CH;y++){ var f = y/CH, wc = rgba(wall0[0]+(wall1[0]-wall0[0])*f|0, wall0[1]+(wall1[1]-wall0[1])*f|0, wall0[2]+(wall1[2]-wall0[2])*f|0); for (x=0;x<CW;x++) buf[y*CW+x] = wc; }
      var thick = 16*V.sn*(1+.42*tilt);
      for (x=0;x<CW;x++){
        var gi = V.fx + (x - V.cx)/V.s; if (gi < 0 || gi > GW-1) { ybuf[x] = -1; continue; }
        var i0 = Math.floor(gi), fi = gi - i0, i1 = Math.min(GW-1, i0+1);
        var yf = Math.round(V.cy + (GH-1 - V.fy)*rowpx), ys = Math.min(CH, Math.round(yf + thick));
        for (y=Math.max(0,yf); y<ys; y++) buf[y*CW+x] = sideCol;
        var yb = Math.max(0, Math.min(CH, yf));
        for (j=GH-1; j>=0; j--){
          var h = HF[j*GW+i0]*(1-fi) + HF[j*GW+i1]*fi;
          top = Math.round(V.cy + (j - V.fy)*rowpx - h*lift);
          if (top < yb) {
            k = (j*GW+(fi<.5?i0:i1))*4;
            var sh = 1 - (1-V.c)*.25*(1 - j/GH), r = TX[k]*sh, g = TX[k+1]*sh, b = TX[k+2]*sh;
            var col = rgba(r|0, g|0, b|0), wall = rgba(r*.74|0, g*.74|0, b*.74|0);
            var faceEnd = Math.min(yb, top + Math.max(1, Math.ceil(rowpx)));
            for (y=Math.max(0,top); y<faceEnd; y++) buf[y*CW+x] = col;
            for (y=Math.max(0,faceEnd); y<yb; y++) buf[y*CW+x] = wall;
            yb = Math.max(0, top);
            if (yb <= 0) break;
          }
        }
        ybuf[x] = yb;
      }
      ctx.putImageData(out, 0, 0);
      // the slice line (step 2+), and labels once the land stands up
      var ln = G.slice.line, kx = GW/G.W, ky = GH/G.H;
      function P(p, lift){ var gi = p[0]*kx, gj = p[1]*ky; return [V.cx + (gi - V.fx)*V.s, V.cy + (gj - V.fy)*V.c*V.s - hAt(gi,gj)*V.hk*V.sn*(1+.42*tilt) - (lift||0)]; }
      if (S.step >= 1 && tilt > .95) {
        ctx.save(); ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        if (S.step >= 2) { ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.setLineDash([]); ctx.lineWidth = 6; ctx.beginPath(); ln.forEach(function(p,n){ var q = P(p,2); if (n) ctx.lineTo(q[0],q[1]); else ctx.moveTo(q[0],q[1]); }); ctx.stroke(); ctx.lineWidth = 3; ctx.strokeStyle = '#C0392B'; }
        else { ctx.strokeStyle = '#C0392B'; ctx.setLineDash([10,8]); }
        ctx.beginPath(); ln.forEach(function(p,n){ var q = P(p,2); if (n) ctx.lineTo(q[0],q[1]); else ctx.moveTo(q[0],q[1]); }); ctx.stroke(); ctx.restore();
        var fz = Math.round(17 * Math.max(1, Math.min(2.2, 560/(cv.clientWidth||720)))); ctx.save(); ctx.font = '800 '+fz+'px Nunito, system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.lineJoin = 'round'; ctx.lineWidth = 5; ctx.strokeStyle = 'rgba(255,250,238,.95)';
        (cfg.tableLabels||[]).forEach(function(L){ var p = G.pts[L.k]; if (!p) return; var q = P(p, L.lift||18); ctx.fillStyle = L.color||'#4A2E14'; ctx.strokeText(L.t, q[0], q[1]); ctx.fillText(L.t, q[0], q[1]); });
        ctx.restore();
      }
    }
    var got = 0;
    load(cfg.height, function(d,w,h){ HG = d; GW = w; GH = h; if (++got === 2) draw(); });
    load(cfg.texture, function(d){ TX = d; if (++got === 2) draw(); });
    function tiltTo(t, done){
      cancelAnimationFrame(anim); var t0 = performance.now(), from = tilt, dur = 1800;
      if (calm()) { tilt = t; range.value = t*100; draw(); return done && done(); }
      (function f(now){ var k = Math.min(1,(now-t0)/dur), e = k<.5 ? 2*k*k : 1-Math.pow(-2*k+2,2)/2; tilt = from + (t-from)*e; range.value = tilt*100; draw(); if (k < 1) anim = requestAnimationFrame(f); else done && done(); })(t0);
    }
    range.addEventListener('input', function(){ if (!S.step) { range.value = 0; return; } tilt = +range.value/100; draw(); });
    // ── the side view (an SVG made from the real heights along the slice) ──
    var E = G.slice.elev, SW = 900, SH = 250, SEA = 206, VK = cfg.sideScale || 0.04, L0 = G.slice.lon0, L1 = G.slice.lon1;
    function sx(lon){ return 40 + (lon - L0)/(L1 - L0)*(SW-80); }
    function sy(e){ return SEA - Math.max(0,e)*VK; }
    function sideSVG(){
      var pts = E.map(function(e,n){ return [40 + n/(E.length-1)*(SW-80), sy(e)]; });
      var top = 'M'+pts.map(function(p){ return p[0].toFixed(1)+' '+p[1].toFixed(1); }).join(' L');
      var d = 'M40 '+SH+' L'+pts.map(function(p){ return p[0].toFixed(1)+' '+p[1].toFixed(1); }).join(' L')+' L'+(SW-40)+' '+SH+' Z';
      var g = '<linearGradient id="msRtGrad" gradientUnits="userSpaceOnUse" x1="0" y1="'+SEA+'" x2="0" y2="'+sy(3400)+'">' +
        [[0,'#6CA660'],[200,'#96BE6E'],[500,'#CECF8C'],[1000,'#D6BA80'],[1600,'#BE9666'],[2400,'#9E7654'],[3200,'#AAA096']].map(function(s){ return '<stop offset="'+(s[0]/3400).toFixed(3)+'" stop-color="'+s[1]+'"/>'; }).join('')+'</linearGradient><linearGradient id="msRtEarth" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9784A"/><stop offset="1" stop-color="#6B4423"/></linearGradient>';
      var lab = STOPS.map(function(st,n){ var x = sx(st.lon), y = sy(E[Math.round((st.lon-L0)/(L1-L0)*(E.length-1))]); return '<g class="ms-rt-stop" data-n="'+n+'"><path d="M'+x+' '+(y-6)+' V'+(st.ly||40)+'" class="lead"/><text x="'+x+'" y="'+((st.ly||40)-6)+'" class="'+(st.c||'')+'">'+esc(st.t)+'</text></g>'; }).join('');
      var gray = (cfg.grayStops||[]).map(function(st){ var x = sx(st.lon); return '<text x="'+x+'" y="'+(st.ly||150)+'" class="gray">'+esc(st.t)+'</text>'; }).join('');
      return '<svg class="ms-rt-svg" viewBox="0 0 '+SW+' '+SH+'" role="img" aria-label="'+esc(cfg.sideAlt||'')+'"><defs>'+g+'</defs>' +
        '<rect x="0" y="'+SEA+'" width="44" height="'+(SH-SEA)+'" class="sea"/><rect x="'+(SW-44)+'" y="'+SEA+'" width="44" height="'+(SH-SEA)+'" class="sea"/>' +
        '<g class="ms-rt-land"><path d="'+d+'" fill="url(#msRtEarth)"/><path d="'+top+'" fill="none" stroke="url(#msRtGrad)" stroke-width="9" stroke-linejoin="round" stroke-linecap="round"/><path d="'+top+'" fill="none" stroke="#5E3D1C" stroke-width="1.5" stroke-linejoin="round" transform="translate(0 4.5)" opacity=".5"/></g>' +
        '<text x="22" y="'+(SEA+30)+'" class="w">'+esc(cfg.westSea||'Pacific')+'</text><text x="'+(SW-22)+'" y="'+(SEA+30)+'" class="w">'+esc(cfg.eastSea||'Atlantic')+'</text>' +
        '<text x="40" y="18" class="dir">⬅ '+esc(cfg.westT||'West')+'</text><text x="'+(SW-40)+'" y="18" class="dir e">'+esc(cfg.eastT||'East')+' ➡</text>' +
        gray + lab + '<g class="ms-rt-walker" aria-hidden="true"><circle r="9"/><path d="M0 -9 V-26 l12 5 l-12 5"/></g></svg>' +
        '<p class="ms-rt-note">'+esc(cfg.sideNote||'')+'</p>';
    }
    function placeWalker(n, animate){
      var w = $('.ms-rt-walker', sideBox); if (!w) return; var st = STOPS[n]; if (!st) return;
      var x = sx(st.lon), y = sy(E[Math.round((st.lon-L0)/(L1-L0)*(E.length-1))]);
      w.style.transition = animate && !calm() ? 'transform 1.1s cubic-bezier(.4,0,.2,1)' : 'none';
      w.style.transform = 'translate('+x+'px,'+y+'px)';
      $$('.ms-rt-stop', sideBox).forEach(function(g){ g.classList.toggle('on', +g.dataset.n <= n); });
    }
    function render(){
      side.classList.toggle('show', S.step >= 2);
      if (S.step >= 2 && !$('svg', sideBox)) { sideBox.innerHTML = sideSVG(); if (S.stop > 0) placeWalker(S.stop-1, false); }
      var T = cfg.steps || [];
      if (S.step === 0) act.innerHTML = stepCard(1, 4, T[0].title, '<p>'+T[0].text+'</p><button type="button" class="ms-btn big ms-rt-go">'+esc(T[0].btn)+'</button>');
      else if (S.step === 1) act.innerHTML = stepCard(2, 4, T[1].title, '<p>'+T[1].text+'</p><button type="button" class="ms-btn big ms-rt-go">'+esc(T[1].btn)+'</button>');
      else if (S.step === 2) {
        var n = S.stop, st = STOPS[n-1];
        act.innerHTML = (st ? '<div class="ms-result">📍 <b>'+esc(st.t)+'.</b> '+st.say+'</div>' : '') +
          stepCard(3, 4, T[2].title, '<p>'+(n ? (T[2].text2||T[2].text) : T[2].text)+'</p>' + (n < STOPS.length ? '<button type="button" class="ms-btn big ms-rt-go">👣 '+esc(n ? (T[2].btn2||T[2].btn) : T[2].btn)+'</button>' : ''));
      }
      else act.innerHTML = stepCard(4, 4, Q.title, '<p>'+Q.text+'</p>'+choiceBlock(Q, S.ans, 'ms-rtq')) + (S.ans!=null && Q.opts[S.ans].ok ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : '');
      var b = $('.ms-rt-go', act);
      if (b) b.onclick = function(){ b.disabled = true; SFX.click();
        if (S.step === 0) { SFX.whir(); tiltTo(1, function(){ S.step = 1; save(); SFX.chime(); draw(); render(); }); }
        else if (S.step === 1) { S.step = 2; S.stop = 0; save(); SFX.glass(); draw(); render(); side.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
        else if (S.step === 2) { S.stop++; save(); SFX.tick(); placeWalker(S.stop-1, true); render(); if (S.stop >= STOPS.length) { setTimeout(function(){ S.step = 3; save(); render(); }, calm() ? 0 : 1300); } }
      };
      $$('.ms-rtq', act).forEach(function(q){ q.onclick = function(){ S.ans = +q.dataset.k; save(); if (Q.opts[S.ans].ok) { SFX.fanfare(); ST.gal = ST.gal||{}; if (!ST.gal.table) { ST.gal.table = 1; save(); galleryCheck(); } } else SFX.miss(); render(); }; });
    }
    render();
  }

  /* ══ MODULE: reliefsrc (Gallery source room · a real physical map + color key + borders) ══
     replaces the lesson's source-card picture; keeps its question prompts */
  function modReliefsrc(cfg){
    var G = DATA.geo, card = $('#panel-explore .source-card'); if (!G || !card) return;
    ST.rs = ST.rs || {a1:null, a2:null, b:false, a3:null};
    var S = ST.rs;
    var m = shell('ms-rs-mod', cfg);
    var rv = (cfg.rivers||[]).map(function(k){ return G.rivers[k] ? '<path class="rv" d="'+G.rivers[k].d+'"/>' : ''; }).join('');
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-frame ms-rs-frame"><div class="ms-rs-stack"><img class="ms-rs-img" alt="'+esc(cfg.alt||'')+'" src="'+img(cfg.photo)+'">' +
        '<svg class="ms-rs-svg" viewBox="0 0 '+G.W+' '+G.H+'" aria-hidden="true"><path class="bd" d="'+G.borders+'"/>'+rv+geoLabels(G, cfg.labels)+'</svg>' +
        '<div class="ms-rs-key"><b>'+esc(cfg.keyT||'How high is the land?')+'</b><span class="bar"></span><span class="ends"><i>'+esc(cfg.lowT||'Low land')+'</i><i>'+esc(cfg.highT||'High land')+'</i></span><span class="sw"><i class="w"></i>'+esc(cfg.waterT||'Water')+' <i class="r"></i>'+esc(cfg.riverT||'River')+'</span></div></div>' +
        '<figcaption>'+cfg.credit+'</figcaption></div>' +
      '<div class="ms-rs-act"></div>');
    card.parentNode.insertBefore(m, card);
    ['.source-card-header','.source-image-placeholder','.source-label-bar'].forEach(function(s){ var x = $(s, card); if (x) x.classList.add('ms-hide-on'); });
    card.classList.add('ms-prompts');
    var svg = $('.ms-rs-svg', m), act = $('.ms-rs-act', m), Q1 = cfg.q1, Q2 = cfg.q2, Q3 = cfg.q3;
    function ok(Q, a){ return a != null && Q.opts[a].ok; }
    function render(){
      svg.classList.toggle('borders', S.b);
      var o1 = ok(Q1,S.a1), o2 = ok(Q2,S.a2), o3 = ok(Q3,S.a3);
      if (!o1) act.innerHTML = stepCard(1, 3, Q1.title, '<p>'+Q1.text+'</p>'+choiceBlock(Q1, S.a1, 'ms-rsq" data-q="a1'));
      else if (!o2) act.innerHTML = stepCard(2, 3, Q2.title, '<p>'+Q2.text+'</p>'+choiceBlock(Q2, S.a2, 'ms-rsq" data-q="a2'));
      else if (!S.b) act.innerHTML = stepCard(3, 3, cfg.bTitle, '<p>'+cfg.bText+'</p><button type="button" class="ms-btn big ms-rs-b">'+esc(cfg.bBtn)+'</button>');
      else act.innerHTML = stepCard(3, 3, Q3.title, '<p>'+Q3.text+'</p>'+choiceBlock(Q3, S.a3, 'ms-rsq" data-q="a3')) + (o3 ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : '');
      $$('.ms-rsq', act).forEach(function(b){ b.onclick = function(){ var key = b.dataset.q, Q = key==='a1'?Q1:key==='a2'?Q2:Q3; S[key] = +b.dataset.k; save();
        if (Q.opts[S[key]].ok) { SFX.chime(); if (key === 'a3') { ST.gal = ST.gal||{}; if (!ST.gal.source) { ST.gal.source = 1; save(); galleryCheck(); } } } else SFX.miss();
        if (Q.opts[S[key]].ok && key !== 'a3') setTimeout(render, calm() ? 0 : 1400); else render(); }; });
      var bb = $('.ms-rs-b', act); if (bb) bb.onclick = function(){ S.b = true; save(); SFX.glass(); render(); };
    }
    // a right answer shows its feedback for a moment, then the next step appears
    render();
  }

  /* ══ MODULE: rain (Gallery · make it rain on the mountains, follow the water) ══ */
  function modRain(cfg){
    var G = DATA.geo, anchor = $(cfg.anchor || '#panel-explore .source-card'); if (!G || !anchor) return;
    ST.rn = ST.rn || {rained:false, ans:null};
    var S = ST.rn, Q = cfg.q, R = cfg.rivers || [];
    var m = shell('ms-rn-mod', cfg);
    var starts = R.map(function(r){ return (G.rainStarts||{})[r.k]; }).filter(Boolean), clouds = '', drops = '';
    starts.forEach(function(p, c){
      clouds += '<g transform="translate('+p[0]+' '+(p[1]-62)+')"><ellipse cx="0" cy="0" rx="46" ry="20"/><ellipse cx="-28" cy="8" rx="30" ry="15"/><ellipse cx="30" cy="8" rx="32" ry="15"/></g>';
      for (var i=0;i<9;i++){ var x = p[0]-40+(i*11), y = p[1]-44+((i*7)%14); drops += '<line x1="'+x+'" y1="'+y+'" x2="'+(x-5)+'" y2="'+(y+14)+'" style="animation-delay:'+(((i*97)+c*230)%900)+'ms"/>'; }
    });
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-frame ms-rn-frame"><div class="ms-rn-stack"><img alt="'+esc(cfg.alt||'')+'" src="'+img(cfg.photo)+'">' +
        '<svg class="ms-rn-svg" viewBox="0 0 '+G.W+' '+G.H+'" aria-hidden="true">' +
          '<g class="ms-rn-cloud">'+clouds+'</g><g class="ms-rn-drops">'+drops+'</g>' +
          R.map(function(r){ return '<path class="ms-rn-rv" data-k="'+r.k+'" d="'+G.rain[r.k]+'" pathLength="1000"/>'; }).join('') +
          R.map(function(r){ var e = G.rainEnds[r.k]; return '<g class="ms-rn-end" data-k="'+r.k+'"><circle cx="'+e[0]+'" cy="'+e[1]+'" r="9"/><text x="'+(e[0]+(r.dx||0))+'" y="'+(e[1]+(r.dy||0))+'">'+esc(r.to)+'</text></g>'; }).join('') +
          R.map(function(r){ var p = G.pts[r.lab] || r.at; return p ? '<text class="ms-rn-name" data-k="'+r.k+'" x="'+(p[0]+(r.ndx||0))+'" y="'+(p[1]+(r.ndy||0))+'">'+esc(r.name)+'</text>' : ''; }).join('') +
        '</svg><span class="ms-phtag l">'+esc(cfg.tag||'')+'</span></div><figcaption>'+cfg.credit+'</figcaption></div>' +
      '<div class="ms-rn-act"></div>');
    if (cfg.where === 'before') anchor.parentNode.insertBefore(m, anchor); else after(anchor, m);
    var stack = $('.ms-rn-stack', m), act = $('.ms-rn-act', m);
    function render(){
      stack.classList.toggle('flowed', S.rained);
      if (!S.rained) act.innerHTML = stepCard(1, 2, cfg.s1.title, '<p>'+cfg.s1.text+'</p><button type="button" class="ms-btn big ms-rn-go">'+esc(cfg.s1.btn)+'</button>');
      else act.innerHTML = '<div class="ms-result">💧 '+cfg.result+'</div>' + stepCard(2, 2, Q.title, '<p>'+Q.text+'</p>'+choiceBlock(Q, S.ans, 'ms-rnq')) + (S.ans!=null && Q.opts[S.ans].ok ? '<div class="ms-win show">'+(cfg.win||'')+'</div><button type="button" class="ms-mini ms-rn-again">🔁 '+esc(cfg.againT||'Make it rain again')+'</button>' : '');
      var b = $('.ms-rn-go', act); if (b) b.onclick = function(){ b.disabled = true; rain(function(){ S.rained = true; save(); render(); }); };
      var a = $('.ms-rn-again', act); if (a) a.onclick = function(){ stack.classList.remove('flowed'); rain(function(){ stack.classList.add('flowed'); }); };
      $$('.ms-rnq', act).forEach(function(q){ q.onclick = function(){ S.ans = +q.dataset.k; save(); if (Q.opts[S.ans].ok) { SFX.chime(); ST.gal = ST.gal||{}; if (!ST.gal.rain) { ST.gal.rain = 1; save(); galleryCheck(); } } else SFX.miss(); render(); }; });
    }
    function rain(done){
      SFX.pour(); stack.classList.remove('flowing'); stack.classList.add('raining');
      if (calm()) { stack.classList.remove('raining'); stack.classList.add('flowed'); return done(); }
      setTimeout(function(){ stack.classList.add('flowing'); SFX.pour(); }, 1300);
      setTimeout(function(){ stack.classList.remove('raining'); }, 2600);
      setTimeout(function(){ stack.classList.remove('flowing'); stack.classList.add('flowed'); SFX.chime(); done(); }, 5200);
    }
    render();
  }

  var MODS = { cart: modCart, relief: modRelief, reliefsrc: modReliefsrc, rain: modRain, crates: modCrates, timecase: modTimecase, dial: modDial, wind: modWind, cases: modCases, exhibit: modExhibit, galintro: modGalintro, globe: modGlobe, wallmap: modWallmap, spacemap: modSpacemap, sizescale: modSizescale };

  function bindSay(){
    document.addEventListener('click', function(e){
      var b = e.target.closest && e.target.closest('.ms-say'); if (!b) return; e.preventDefault(); e.stopPropagation();
      if (b.dataset.word) playClip('g3ss-word-' + b.dataset.word + '.mp3', WORDS, b);
      else if (b.dataset.clip) playClip('g3ss-' + DATA.lesson.replace(/\./g,'-') + '-' + b.dataset.clip + '.mp3', AUDIO, b);
    }, true);
  }

  /* ══ sliders v2: teal fill + "waiting to be used" glow on every layer slider ══ */
  var SLIDERS = '.ms-lever input[type=range],.ms-yearbar input[type=range],.ms-sp-slide input[type=range],.ms-rt-tilt input[type=range]';
  function sliderPaint(r){
    var lo = +r.min||0, hi = +r.max||100, f = hi>lo ? (+r.value-lo)/(hi-lo)*100 : 0;
    r.style.setProperty('--ms-fill', f+'%');
    var well = r.closest('.ms-lever,.ms-yearbar,.ms-sp-slide,.ms-rt-tilt');
    if (well) well.classList.toggle('ms-slide-wait', !r.disabled && !r.dataset.used && !well.hidden && +r.value === lo);
  }
  function sliders(){
    $$(SLIDERS).forEach(sliderPaint);
    document.addEventListener('input', function(e){ var r = e.target; if (r.matches && r.matches(SLIDERS)) { r.dataset.used = 1; sliderPaint(r); } }, true);
    // modules switch sliders on and off as steps change: repaint after any click
    document.addEventListener('click', function(){ setTimeout(function(){ $$(SLIDERS).forEach(sliderPaint); }, 0); });
  }


  /* ══ how-to video: "Watch this first · How to use your lesson" (one video for every G3 SS museum lesson) ══ */
  function buildHowTo(){
    if (DATA.howto === false || $('.ms-howto')) return;
    var sign = $('#panel-scene .ms-sign'); if (!sign) return;
    var src = window.MS_HOWTO_SRC || DATA.howtoSrc || 'assets/video/g3ss-howto.mp4';
    var poster = window.MS_HOWTO_POSTER || DATA.howtoPoster || 'assets/video/g3ss-howto.jpg';
    var c = el('section', 'ms-howto ms-only', '<div class="ms-howto-h"><img alt="" src="'+img('opti-owl.png')+'"><div><div class="ms-howto-k">Watch this first</div><div class="ms-howto-t">How to use your lesson</div></div></div><video controls preload="metadata" playsinline></video>');
    var v = $('video', c); v.poster = poster; v.src = src;
    v.addEventListener('play', function(){ ALL_OPTI.forEach(function(o){ if (!o.paused) o.pause(); }); if (clipA && !clipA.paused) clipA.pause(); });
    v.addEventListener('error', function(){ c.hidden = true; });
    after(sign, c);
  }


  /* ══ tap guide (Nov 2026, like G3 ELA): anything you can tap shows 👆; a key line under the header says what each mark means ══ */
  var TAP_SEL = '.ms-btn, .ms-play, .ms-ra, .tab-next-btn, .gathered-btn';
  var LEADING = /^\s*((?:(?:\p{Extended_Pictographic}|[←-⇿■-◿])️?\s*)+)/u;
  function markTaps(root){
    $$(TAP_SEL, root || document).forEach(function(b){
      if (b.querySelector('.ms-hand')) return;
      var t = b.firstChild;
      // one icon per button: a leading emoji is hidden (not removed) while the Museum view is on, so the plain page is unchanged
      if (t && t.nodeType === 3 && !b.classList.contains('ms-gi-dir')) { var m = t.nodeValue.match(LEADING); if (m) { t.nodeValue = t.nodeValue.slice(m[0].length); var w = document.createElement('span'); w.className = 'ms-was'; w.textContent = m[1]; b.insertBefore(w, t); } }
      var h = document.createElement('span'); h.className = 'ms-hand'; h.setAttribute('aria-hidden','true'); h.textContent = '👆';
      b.insertBefore(h, b.firstChild);
    });
  }
  function buildTaps(){
    var hd = $('.header');
    if (hd && !$('.ms-tapkey')) {
      var n = hd; while (n.nextElementSibling && n.nextElementSibling.classList.contains('ms-hd-panel')) n = n.nextElementSibling;
      after(n, el('div','ms-only ms-tapkey',
        '<span><b>👆</b> You can tap it.</span>' +
        '<span><b>🔊</b> You can listen.</span>' +
        '<span><b class="ms-dotw">dotted word</b> Tap it to see what it means.</span>' +
        '<span><b class="ms-knob" aria-hidden="true"></b> Drag the knob.</span>' +
        '<span><b>🚪</b> Tap a door to go to that room. <b class="ms-ok">✓</b> means done.</span>'));
    }
    markTaps();
    if (window.MutationObserver) { var tt = null;
      new MutationObserver(function(){ clearTimeout(tt); tt = setTimeout(function(){ markTaps(); }, 30); }).observe(document.body, {childList:true, subtree:true}); }
  }

  function boot(){
    bindSay();
    buildHall();
    buildTop();
    buildTabs();
    hookTabs();
    buildSigns();
    buildLens();
    try { buildTaps(); } catch(e){ console.error('ms taps', e); }
    (DATA.modules || []).forEach(function(c){ if (MODS[c.type]) try { MODS[c.type](c); } catch(e){ console.error('ms module', c.type, e); } });
    modOneQuiz();
    sliders();
    (DATA.hideOn || []).forEach(function(q){ $$(q).forEach(function(x){ x.classList.add('ms-hide-on'); }); });
    placeOpti();
    try { buildHowTo(); } catch(e){ console.error('ms howto', e); }
    buildGlossary();
    offscreenPause();
    paint();
    ST.entered[current()] = 1;
    try { oneStep(); } catch(e){ console.error('ms onestep', e); }
  }
  /* one part of a room at a time (ss-onestep.js, 11 Nov 2026); ?steps=0 turns it off */
  function oneStep(){
    if (/[?&]steps=0\b/.test(location.search) || window.SS_ONESTEP) return;
    window.SS_ONESTEP = { root: 'ms-on', panels: '.tab-panel', always: '.ms-sign', word: 'Part', pad: 132,
      glueNext: '.step-badge, .ms-opti, .callout-info',
      gluePrev: '.ms-prompts, .callout-tip, .callout-think, .key-concept, .turn-in-card, .ms-nextdoor, .ms-lens, .coming-next-card, .ms-exhibit-mod',
      door: '.ms-nextdoor', title: '.ms-mod h3, .activity-title, .ms-howto-t',
      names: [['.gathered-card', 'Turn in your work'], ['.step-badge', null]] };
    var base = (document.querySelector('script[src*="museum-sparkle.js"]') || {src:''}).src.replace(/museum-sparkle\.js.*$/, '');
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = base + 'ss-onestep.css'; document.head.appendChild(l);
    var s = document.createElement('script'); s.src = base + 'ss-onestep.js'; document.body.appendChild(s);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
