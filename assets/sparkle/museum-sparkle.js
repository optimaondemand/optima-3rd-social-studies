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
   Added for 3.06.06 (DATA.cultures holds the five cultures; DATA.map = 3.06.01 wall map + rivers, areas, marks):
   - cultcart   Lobby: things you used today; lift the cloth, read the tag, put it in its culture case
   - timerail   Gallery main attraction: drag back 15,000 years, come back to today, one question
   - cultmap    Gallery source room: a simple map we made, one culture at a time, one question
   - visitors   Gallery: the Visitor Questions desk (send each visitor to the right case)
   - wordroot   Workroom: one word root, one word at a time (tap the root, pick the meaning)
   - caseex     Exhibit Floor: pick a case, write the label inside the step, open the case
   Added for 3.06.07 (DATA.tokens = the four reason tokens; DATA.map + cities):
   - tokens     Lobby: you lead the families; open each need, put its token in the tray
   - towntable  Gallery main attraction: a simple model landscape, five spots; drop the town pin, the town grows
   - magnify    Gallery source room: old pictures one at a time; move the magnifier to find each clue
   - pinmap     Gallery: the Settlement Map; one city at a time, put the right token on its pin
   - storypin   Exhibit Floor: pick a city, pick two tokens, write the story in the step, it hangs by the pin
   Added for 3.06.08 (DATA.places, DATA.specs; slug() now drops accents, so Taíno → taino):
   - wallpanels Lobby: walk past the finished rooms, unveil four panels, hang eight photo specimens
   - threads    Gallery main attraction: tap where a sport or music started, send it traveling on a gold thread
   - langmap    Gallery source room: a languages map; turn on each color, zoom in on the islands
   - compare2   Exhibit Floor: two places, one thing each, a connection, four sentences, install → the gallery lights up
   Added for 3.07.01 (DATA.regions = the five U.S. regions, DATA.geo = the U.S. map we made, DATA.marks = ten landmark photos):
   - findstate  Lobby: tap the state you live in, its region lights up, then all five alcoves
   - lighttable Gallery main attraction: lay four see-through sheets (land, weather, resources, people), draw the region lines
   - landmarks  Gallery: ten real landmark photos into the five alcoves (drag or tap)
   - nightmap   Gallery source room: NASA's U.S. at night, three questions with circles
   - directory  Exhibit Floor: finish the region sentence, pick a region, write in the step, open the gallery
   Added for 3.07.02 (DATA.items = the crate objects, DATA.geo.neBox = the Northeast view of the map):
   - cratepin   Lobby: lift each object out of the ATLANTIC COAST crate, read its tag, tap its state (a pin drops)
   - seasons    Gallery main attraction: the Four Seasons Window (a Vermont hillside) + a brass season wheel
   - oldmtn     Gallery: young sharp Rockies vs old worn Appalachians; run time forward
   - harbor     Gallery source room: two real photos of New York Harbor ~100 years apart, three questions
   - nelabel    Exhibit Floor: pick the front object, write the label in the step, install, the Northeast alcove lights
   Added for 3.07.03 (DATA.items = the GULF & ATLANTIC crate; DATA.geo.seBox / flBox / pts):
   - wxtwin     Lobby: weather twins (Boston + Miami windows, thermometer), why, then the crate opens
   - storm      Gallery main attraction: the Storm Tracker (warm the ocean, a hurricane forms, lands, weakens)
   - sponge     Gallery: rain on a paved city vs a wetland
   - twinlab    Exhibit Floor: one alike + one different, two labels in the step, hung between the blue and green alcoves
   nightmap now takes cfg.stKey / galKey / vb / alt (defaults keep 3.07.01 as it was)
   Added for 3.07.04 (DATA.products = the Heartland shelf; DATA.geo.mwBox / lakes5 / mwPts):
   - shelf      Lobby: scan four products, their Midwest states light, a receipt prints
   - window     Gallery main attraction: the Window Seat (three levels: fields, farm, town; tap 3 spots, fly lower)
   - lakes5     Gallery: fill the five Great Lake beds in order, HOMES, fresh-water questions
   - mwlabel    Exhibit Floor: pick the front object, label in the step, install; the alcove lights gold and the lakes glow
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
  function slug(t){ return String(t).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
  function opti(note){
    var script = note.script || String(note.text||'').replace(/<[^>]+>/g,'');
    var toks = script.split(/(\s+)/), wi = 0;
    var trHTML = toks.map(function(w){ if (/^\s+$/.test(w)) return /\n\s*\n/.test(w) ? '<br><br>' : w; return '<span data-w="'+(wi++)+'">'+esc(w)+'</span>'; }).join('');
    var c = el('div','ms-opti ms-only'+(note.big?' big':'')); c.dataset.room = note.room || '';
    c.innerHTML = '<div class="ms-perch"><img alt="Opti the owl" src="'+OWL+'"></div><div class="ms-ob"><div class="ms-on">Opti · '+esc(note.topic||'your museum guide')+'</div>' +
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
    var SKIP = '.intro-card-head,.ms-mod-h,.step-badge,.ms-opti .ms-on,.ms-part-k,.ms-pl-m,.ms-credit,.source-label-bar,button,.quiz-opt,textarea,input,select,label,a,script,style,svg,.ms-term,.ms-tip,.ms-ocard,.ms-crate,.ms-tagcard .acc,.ms-gstep,.ms-tabs,.ms-thumbs,.header,.ms-sign,.ms-plate,.video-wrap,.ms-hd-panel,.ms-label,.ms-excheck,.ms-phtag,summary,.ms-sheet,.ms-shelf,.ms-exp,.ms-dplinth,.gathered-box,#gatheredAnswers,.ms-gi-wall,.ms-gi-row,.ms-gi-sent,.ms-gi-dirs,.ms-cc-tagn,.ms-cc-plate,.ms-cm-key,.ms-cm-card b,.ms-vd-case,.ms-wr-word,.ms-wr-card,.ms-tr-ev,.ms-tr-sc b,.ms-ce-label,.ms-ce-show,.ms-tr-wall,.ms-tk,.ms-tk-scene,.ms-tt-svg,.ms-tt-count,.ms-mg-clue,.ms-pm-map,.ms-spn-show,.ms-pm-tk,.ms-spn-city,.ms-wp-wall,.ms-wp-strip,.ms-wp-picks,.ms-th-map,.ms-lm-map,.ms-lm-key,.ms-cp-show,.ms-chipbtn,.ms-cp-notes,.ms-alc-row,.ms-dir-show,.ms-dir-sent,.ms-fs-chips,.ms-fs-list,.ms-lk-mini,.ms-lk-kind,.ms-lt-card,.ms-lt-stack,.ms-dir-regs,.ms-cr-crate,.ms-cr-tray,.ms-cr-map,.ms-sw-wheel,.ms-sw-chips,.ms-om-svg,.ms-hb-date,.ms-ne-picks,.ms-ne-shelf,.ms-ne-sign,.ms-ne-chosen,.ms-wt-win figcaption,.ms-wt-therm,.ms-st-months,.ms-st-line,.ms-sp-res,.ms-tl-chips,.ms-tl-pair,.ms-cr-tray,.ms-sh-shelf,.ms-sh-scan,.ms-ws-panel,.ms-ws-cap,.ms-ws-list,.ms-lk5-homes,.ms-mw-shelf';
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


  /* ══════════ Added for 3.06.06 (Cultures That Settled) ══════════
     DATA.cultures = {key:{name, icon, word, say, where, still, spec}} in case order.
     - cultcart  Lobby: "Things you used today": lift the cloth, read the tag, put it in its culture case
     - timerail  Gallery main attraction: drag back 15,000 years, then come back to today
     - cultmap   Gallery source room: a simple map we made; show each culture one at a time, then one question
     - visitors  Gallery: the Visitor Questions desk; send each visitor to the right case
     - wordroot  Workroom: one word root, one word at a time (tap the root, pick the meaning)
     - caseex    Exhibit Floor: pick a case, write the label inside the step, open the case */
  function cultOrder(){ return DATA.cultureOrder || Object.keys(DATA.cultures || {}); }
  function cultName(k){ var c = (DATA.cultures||{})[k] || {}; return c.name || k; }
  function cultSay(k){ var c = (DATA.cultures||{})[k] || {}; return c.word ? '<button type="button" class="ms-say ms-say-sm" data-word="'+esc(c.word)+'" aria-label="Hear the name '+esc(c.name)+'">🔊</button>' : ''; }
  var CART_WHEELS = '<svg class="ms-ct-wheels" viewBox="0 0 300 40" aria-hidden="true"><rect x="10" y="2" width="280" height="8" rx="3" fill="#6B4423"/><circle cx="50" cy="26" r="11" fill="#3B2A1A"/><circle cx="50" cy="26" r="4" fill="#B8892E"/><circle cx="250" cy="26" r="11" fill="#3B2A1A"/><circle cx="250" cy="26" r="4" fill="#B8892E"/></svg>';

  /* ══ MODULE: cultcart (Lobby · things you used today → the culture cases) ══
     cfg.items: specimen ids in order; specimen.culture = a DATA.cultures key; specimen.everyday, .tag */
  function modCultcart(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var IT = cfg.items || [], C = DATA.cultures || {};
    ST.cc = ST.cc || {i:0, ph:0}; var S = ST.cc;
    var m = shell('ms-cc-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-cc-room"><div class="ms-cc-cases" role="group" aria-label="'+esc(cfg.casesT||'The culture cases')+'">'+IT.map(function(id,i){
        return '<div class="ms-cc-case" data-i="'+i+'"><div class="ms-cc-glass"><span class="ms-cc-q">?</span><span class="ms-cc-in"></span></div><div class="ms-cc-plate">Case '+(i+1)+'</div></div>'; }).join('')+'</div>' +
      '<div class="ms-cc-cart"><div class="ms-ct-cartlab">'+esc(cfg.cartT||'Things you used today')+'</div><div class="ms-cc-slots">'+IT.map(function(id,i){
        return '<span class="ms-cc-slot" data-i="'+i+'"><span class="ms-cc-cloth"></span><span class="ms-cc-num">'+(i+1)+'</span></span>'; }).join('')+'</div>'+CART_WHEELS+'</div></div>' +
      '<div class="ms-cc-act"></div>');
    if (cfg.where === 'before') anchor.parentNode.insertBefore(m, anchor); else after(anchor, m);
    var act = $('.ms-cc-act', m), cart = $('.ms-cc-cart', m);
    if (!S.rolled && !calm() && 'IntersectionObserver' in window) {
      cart.classList.add('away');
      var io = new IntersectionObserver(function(es){ if (es[0].isIntersecting) { io.disconnect(); cart.classList.remove('away'); cart.classList.add('roll'); SFX.whir(); S.rolled = 1; save(); } }, {threshold:.4});
      io.observe($('.ms-cc-room', m));
    }
    function fillCase(i){
      var id = IT[i], s = SPEC[id] || {}, c = C[s.culture] || {}, box = $('.ms-cc-case[data-i="'+i+'"]', m);
      box.classList.add('lit');
      $('.ms-cc-in', box).innerHTML = '<img alt="'+esc(s.photoAlt||s.name||'')+'" src="'+img(s.card)+'">';
      $('.ms-cc-plate', box).innerHTML = '<span>'+(c.icon||'')+'</span> '+esc(c.name||'');
      return box;
    }
    function paint(){
      $$('.ms-cc-slot', m).forEach(function(sl,i){ sl.classList.toggle('done', i < S.i); sl.classList.toggle('now', i === S.i); sl.classList.toggle('lifted', i === S.i && S.ph > 0); });
      for (var i=0;i<S.i;i++) fillCase(i);
    }
    function objCard(id){
      var s = SPEC[id];
      return '<div class="ms-cc-obj"><figure class="ms-cc-photo"><img alt="'+esc(s.cardAlt||s.name)+'" src="'+img(s.card)+'"><figcaption>📷 '+esc(s.cardCredit||'')+'</figcaption></figure>' +
        '<div class="ms-cc-what"><b>'+esc(s.name)+'</b><p>'+s.everyday+'</p></div></div>';
    }
    function tagCard(id){
      var s = SPEC[id], c = C[s.culture] || {};
      return '<div class="ms-cc-tag"><span class="ms-ct-hole"></span><div class="ms-cc-tagk">Where did it come from?</div>' +
        '<div class="ms-cc-tagn">'+(c.icon||'')+' <b>'+esc(c.name)+'</b> '+cultSay(s.culture)+'</div>' +
        (c.say ? '<div class="ms-cc-sayit">Say it: '+esc(c.say)+'</div>' : '') +
        '<p>'+s.tag+'</p>' + (s.photo ? '<button type="button" class="ms-btn alt ms-cc-ph">📷 See the place</button>' : '') + '</div>';
    }
    function render(){
      paint();
      var n = IT.length;
      if (S.i >= n) {
        act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div><p class="ms-ct-again">'+esc(cfg.againT||'')+'</p>';
        return;
      }
      var id = IT[S.i], s = SPEC[id] || {}, c = C[s.culture] || {}, body;
      if (S.ph === 0) body = stepCard(S.i+1, n, 'Lift the cloth', '<p>'+esc(cfg.liftT||'Something is hiding under this cloth. Lift the cloth to see it.')+'</p><button type="button" class="ms-btn big ms-cc-go">🧺 '+esc(cfg.liftBtn||'Lift the cloth')+'</button>');
      else if (S.ph === 1) body = stepCard(S.i+1, n, 'What is it?', objCard(id) + '<button type="button" class="ms-btn big ms-cc-go">🏷️ '+esc(cfg.tagBtn||'Read its tag')+'</button>');
      else body = stepCard(S.i+1, n, 'Where did it come from?', '<div class="ms-cc-two">'+objCard(id) + tagCard(id)+'</div>' +
        '<button type="button" class="ms-btn big ms-cc-go">'+esc((cfg.putBtn||'Put it in Case {n}').replace('{n}', S.i+1))+' ➡️</button>');
      act.innerHTML = body;
      var ph = $('.ms-cc-ph', act); if (ph) ph.onclick = function(){ placePhoto(id); };
      $('.ms-cc-go', act).onclick = function(){
        var b = this; b.disabled = true;
        if (S.ph === 0) { SFX.creak(); var sl = $('.ms-cc-slot[data-i="'+S.i+'"]', m); if (sl) sl.classList.add('lifting'); S.ph = 1; save(); setTimeout(render, calm() ? 0 : 420); return; }
        if (S.ph === 1) { SFX.click(); S.ph = 2; save(); render(); return; }
        var from = $('.ms-cc-photo img', act), i = S.i, box = $('.ms-cc-case[data-i="'+i+'"]', m);
        fly(from, $('.ms-cc-glass', box), '<img alt="" src="'+img(s.card)+'" style="width:100%">', 650).then(function(){
          fillCase(i); SFX.glass(); S.i = i + 1; S.ph = 0; save(); render();
          if (S.i >= n) { SFX.fanfare(); markDone('scene'); }
        });
      };
    }
    $$('.ms-cc-case', m).forEach(function(b){ b.addEventListener('click', function(){ var i = +b.dataset.i; if (i < S.i) placePhoto(IT[i]); }); });
    render();
  }

  /* ══ MODULE: timerail (Gallery main attraction · the long time rail) ══
     Step 1 drag back to the start (the slider sits inside the step and works from the start),
     2 come back to today, 3 one question about what the rail shows.
     cfg: span (years), events [{y, k, when, t, zoom}], zoomFrom (years), steps, q, todayT, longT, shortT */
  function modTimerail(cfg){
    var anchor = $(cfg.anchor || '#panel-explore .step-badge'); if (!anchor) return;
    var SPAN = cfg.span || 15000, EV = cfg.events || [], ZF = cfg.zoomFrom || 600, C = DATA.cultures || {};
    ST.tr = ST.tr || {step:1, far:0, ans:null}; var S = ST.tr;
    var m = shell('ms-tr-mod', cfg);
    function xp(y){ return ((1 - y / SPAN) * 100).toFixed(2); }
    function zp(y){ return ((1 - y / ZF) * 100).toFixed(2); }
    function nice(y){ if (y <= 0) return 'Today'; var r = y < 1000 ? 10 : 50; y = Math.round(y / r) * r; return y.toLocaleString('en-US') + ' years ago'; }
    var ticks = (cfg.ticks || [15000,10000,5000]).map(function(y){ return '<span class="ms-tr-tick" style="left:'+xp(y)+'%"><i></i>'+y.toLocaleString('en-US')+'</span>'; }).join('') + '<span class="ms-tr-tick now" style="left:100%"><i></i>Today</span>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-tr-act"></div>' +
      '<div class="ms-tr-wall"><div class="ms-tr-title">'+esc(cfg.railT||'The Time Rail')+'</div>' +
        '<div class="ms-tr-read" aria-live="polite"></div>' +
        '<div class="ms-tr-rail"><div class="ms-tr-long" style="width:'+xp(cfg.splitAt||533)+'%"><span>'+esc(cfg.longT||'')+'</span></div><div class="ms-tr-short" style="left:'+xp(cfg.splitAt||533)+'%"><span>'+esc(cfg.shortT||'')+'</span></div>' +
          EV.filter(function(e){ return !e.zoom; }).map(function(e,i){ return '<div class="ms-tr-ev'+(e.lane?' lane'+e.lane:'')+'" data-e="'+EV.indexOf(e)+'" style="left:'+xp(e.y)+'%"><b>'+((C[e.k]||{}).icon||e.icon||'•')+'</b></div>'; }).join('') +
          '<div class="ms-tr-zb" style="left:'+xp(ZF)+'%"></div>' +
          '<div class="ms-tr-pin"><i></i></div></div>' +
        '<div class="ms-tr-ticks">'+ticks+'</div>' +
        '<div class="ms-tr-zoom"><div class="ms-tr-zt">🔍 '+esc(cfg.zoomT||'The last 600 years, up close')+'</div><div class="ms-tr-zrail">' +
          EV.filter(function(e){ return e.zoom; }).map(function(e){ return '<div class="ms-tr-zev'+(e.lane?' lane'+e.lane:'')+'" data-e="'+EV.indexOf(e)+'" style="left:'+zp(e.y)+'%"><b>'+((C[e.k]||{}).icon||'•')+'</b><small>'+esc(e.year||'')+'</small></div>'; }).join('') +
          '<div class="ms-tr-zpin"><i></i></div></div><div class="ms-tr-zends"><span>'+(new Date().getFullYear()-ZF)+'</span><span>Today</span></div></div>' +
        '<div class="ms-tr-card" aria-live="polite"></div>' +
        '<div class="ms-tr-today"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-tr-act', m), read = $('.ms-tr-read', m), pin = $('.ms-tr-pin', m), zpin = $('.ms-tr-zpin', m), card = $('.ms-tr-card', m), wall = $('.ms-tr-wall', m), today = $('.ms-tr-today', m);
    function show(y){
      read.innerHTML = '🕰️ <b>'+esc(nice(y))+'</b>';
      pin.style.left = xp(y) + '%';
      zpin.style.left = Math.max(0, Math.min(100, +zp(Math.min(y, ZF)))) + '%'; zpin.classList.toggle('off', y > ZF);
      if (y > S.far) { S.far = y; save(); }
      EV.forEach(function(e,i){ var seen = e.y <= S.far; $$('[data-e="'+i+'"]', m).forEach(function(d){ d.classList.toggle('seen', seen); d.classList.remove('here'); }); });
      var e = null; EV.forEach(function(x){ if (x.y <= y && (!e || x.y > e.y)) e = x; });
      if (e && y > 0) { var k = EV.indexOf(e); $$('[data-e="'+k+'"]', m).forEach(function(d){ d.classList.add('here'); });
        card.innerHTML = '<div class="ms-tr-ck">'+((C[e.k]||{}).icon||e.icon||'')+' <b>'+esc(e.when)+'</b></div><p>'+e.t+'</p>'; card.classList.add('on'); }
      else if (y <= 0 && S.step < 2) { card.innerHTML = '<p>'+esc(cfg.startT||'')+'</p>'; card.classList.add('on'); }
      else if (y <= 0) { card.innerHTML = ''; card.classList.remove('on'); }
    }
    function todayHTML(){
      return '<div class="ms-tr-th">'+esc(cfg.todayT||'Today: every culture is still here')+'</div><div class="ms-tr-still">'+cultOrder().map(function(k){ var c = C[k]||{}; return '<div class="ms-tr-sc"><b>'+(c.icon||'')+' '+esc(c.name)+'</b><span>'+c.still+'</span></div>'; }).join('')+'</div>';
    }
    function render(){
      wall.classList.toggle('split', S.step >= 3);
      today.innerHTML = S.step >= 3 ? todayHTML() : ''; today.classList.toggle('on', S.step >= 3);
      if (S.step === 1) {
        act.innerHTML = stepCard(1, 3, cfg.s1T || 'Go back in time', '<p>'+(cfg.s1 || 'Drag the knob to the left, all the way to the start of the rail.')+'</p>' +
          '<div class="ms-tr-slide" data-start="max"><span>⬅️ '+esc(cfg.leftT||'Long ago')+'</span><input type="range" min="0" max="'+SPAN+'" step="10" value="'+(SPAN - S.far)+'" aria-label="'+esc(cfg.sliderLabel||'Go back in time')+'"><span>'+esc(cfg.rightT||'Today')+'</span></div>' +
          '<div class="ms-exfb" aria-live="polite"></div>');
        var r = $('input', act), fb = $('.ms-exfb', act);
        if (S.far > 0) r.dataset.used = 1;
        sliderPaint(r);
        r.addEventListener('input', function(){ var y = SPAN - (+r.value); show(y);
          if (y >= SPAN - 10) { SFX.chime(); S.step = 2; save(); setTimeout(render, calm() ? 0 : 500); } });
        show(SPAN - (+r.value));
        return;
      }
      if (S.step === 2) {
        show(SPAN);
        act.innerHTML = stepCard(2, 3, cfg.s2T || 'Come back to today', '<p>'+(cfg.s2 || '')+'</p><button type="button" class="ms-btn big ms-tr-back">⏩ '+esc(cfg.backBtn||'Come back to today')+'</button>');
        $('.ms-tr-back', act).onclick = function(){ this.disabled = true; SFX.whir();
          var y = SPAN, t0 = performance.now(), dur = calm() ? 1 : 2600;
          (function step(t){ var k = Math.min(1, (t - t0) / dur); y = Math.round(SPAN * (1 - k)); show(y);
            if (k < 1) requestAnimationFrame(step); else { S.step = 3; save(); SFX.fanfare(); render(); } })(t0);
        };
        return;
      }
      show(0);
      act.innerHTML = stepCard(3, 3, cfg.q.title, '<p>'+cfg.q.text+'</p>' + choiceBlock(cfg.q, S.ans, 'ms-tr-c') + (S.ans != null && cfg.q.opts[S.ans].ok ? '<div class="ms-win show">'+(cfg.win||'')+'</div><p class="ms-ct-again"><button type="button" class="ms-btn alt ms-tr-again">↩️ '+esc(cfg.againT||'Go back in time again')+'</button></p>' : ''));
      $$('.ms-tr-c', act).forEach(function(b){ b.onclick = function(){ var k = +b.dataset.k, done = S.ans != null && cfg.q.opts[S.ans].ok;
        if (!done) { S.ans = k; save(); }   // once right, the ✅ stays
        if (cfg.q.opts[k].ok) { SFX.chime(); ST.gal = ST.gal||{}; if (!ST.gal.rail) { ST.gal.rail = 1; save(); galleryCheck(); } } else SFX.miss();
        render(); }; });
      var ag = $('.ms-tr-again', act); if (ag) ag.onclick = function(){ S.step = 1; S.far = 0; save(); render(); };
    }
    render();
  }

  /* ══ MODULE: cultmap (Gallery source room · a simple map we made) ══
     DATA.map = wall-map shapes + rivers, areas, marks (projected). Step 1 shows one culture at a time; Step 2 one question. */
  function modCultmap(cfg){
    var M = DATA.map, anchor = $(cfg.anchor || '#panel-explore .source-card'); if (!M || !anchor) return;
    var C = DATA.cultures || {}, K = cultOrder();
    ST.cm = ST.cm || {shown:0, ans:null}; var S = ST.cm;
    var m = shell('ms-cm-mod', cfg);
    var svg = mapSVG(M, {label: cfg.alt, compass: true});
    var extra = '<g class="ms-cm-riv">'+Object.keys(M.rivers||{}).map(function(k){ return '<path d="'+M.rivers[k]+'"/>'; }).join('')+'</g>' +
      (cfg.rivLabels||[]).map(function(n){ var p = M.pts[n.k]; return p ? '<text class="ms-cm-rl" x="'+p[0]+'" y="'+p[1]+'"'+(n.rot!=null?' transform="rotate('+n.rot+' '+p[0]+' '+p[1]+')"':'')+'>'+esc(n.t)+'</text>' : ''; }).join('') +
      K.map(function(k){ var c = C[k]||{}; return '<g class="ms-cm-g" data-k="'+k+'" style="--c:'+(c.color||'#0E1C42')+'">' +
        (M.areas && M.areas[k] ? '<path class="ms-cm-area" d="'+M.areas[k]+'"/>' : '') +
        ((M.marks||{})[k]||[]).map(function(p){ return '<g class="ms-cm-mk" transform="translate('+p[0]+' '+p[1]+')"><circle r="19"/><text y="8">'+(c.icon||'')+'</text></g>'; }).join('') + '</g>'; }).join('');
    svg = svg.replace(/<\/svg>$/, extra + '</svg>');
    m.insertAdjacentHTML('beforeend', '<div class="ms-cm-wrap"><div class="ms-cm-map">'+svg+'<div class="ms-cm-tag">'+esc(cfg.tag||'')+'</div></div>' +
      '<div class="ms-cm-keys">'+K.map(function(k,i){ var c = C[k]||{}; return '<span class="ms-cm-key" data-k="'+k+'" style="--c:'+(c.color||'#0E1C42')+'"><b>'+(c.icon||'')+'</b> '+esc(c.name)+'</span>'; }).join('')+'</div></div>' +
      '<p class="ms-credit">🗺️ '+esc(cfg.credit||'')+'</p><div class="ms-cm-act"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-cm-act', m);
    function paint(){ K.forEach(function(k,i){ var on = i < S.shown; $$('.ms-cm-g[data-k="'+k+'"], .ms-cm-key[data-k="'+k+'"]', m).forEach(function(g){ g.classList.toggle('on', on); g.classList.toggle('new', i === S.shown - 1); }); }); }
    function render(){
      paint();
      if (S.shown < K.length) {
        var k = K[S.shown], c = C[k] || {}, prev = S.shown ? K[S.shown-1] : null, pc = prev ? C[prev] : null;
        act.innerHTML = stepCard(1, 2, (cfg.s1T || 'Meet the map') + ' · ' + (S.shown+1) + ' of ' + K.length,
          (pc ? '<div class="ms-cm-card" style="--c:'+(pc.color||'#0E1C42')+'"><b>'+(pc.icon||'')+' '+esc(pc.name)+'</b> '+cultSay(prev)+'<p>'+pc.where+'</p></div>' : '<p>'+(cfg.s1||'')+'</p>') +
          '<button type="button" class="ms-btn big ms-cm-show" style="--c:'+(c.color||'#0E1C42')+'">🗺️ '+esc((cfg.showBtn||'Show the {name} on the map').replace('{name}', c.mapName || c.name))+'</button>');
        $('.ms-cm-show', act).onclick = function(){ SFX.pop(); S.shown++; save(); render(); };
        return;
      }
      var last = C[K[K.length-1]] || {};
      act.innerHTML = stepCard(2, 2, cfg.q.title, (S.ans == null ? '<div class="ms-cm-card" style="--c:'+(last.color||'#0E1C42')+'"><b>'+(last.icon||'')+' '+esc(last.name)+'</b> '+cultSay(K[K.length-1])+'<p>'+last.where+'</p></div>' : '') +
        '<p>'+cfg.q.text+'</p>' + choiceBlock(cfg.q, S.ans, 'ms-cm-c') + (S.ans != null && cfg.q.opts[S.ans].ok ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : ''));
      $$('.ms-cm-c', act).forEach(function(b){ b.onclick = function(){ var k = +b.dataset.k, done = S.ans != null && cfg.q.opts[S.ans].ok;
        if (!done) { S.ans = k; save(); }
        if (cfg.q.opts[k].ok) { SFX.chime(); ST.gal = ST.gal||{}; if (!ST.gal.map) { ST.gal.map = 1; save(); galleryCheck(); } } else SFX.miss();
        render(); }; });
    }
    $$('.ms-cm-key', m).forEach(function(b){ b.addEventListener('click', function(){ var k = b.dataset.k, i = K.indexOf(k); if (i >= S.shown) return; var c = C[k];
      lightbox('<div class="ms-lb-k">On the map</div><h3>'+(c.icon||'')+' '+esc(c.name)+'</h3><p>'+c.where+'</p>'); }); });
    render();
  }

  /* ══ MODULE: visitors (Gallery · the Visitor Questions desk) ══
     cfg.visitors [{who, look, q, ans, ok, hint}] in order; the five cases are the buttons. */
  var LOOKS = [['#8D5524','#2E6DB4','#3B2A1A'],['#F1C27D','#C0392B','#7A4F27'],['#C68642','#1A8A7D','#111'],['#FFDBAC','#7D3C98','#B8892E'],['#5C3A21','#E67E22','#222'],['#E0AC69','#2C3E50','#8B5A2B']];
  function visitorSVG(i){ var L = LOOKS[i % LOOKS.length];
    return '<svg class="ms-vd-p" viewBox="0 0 80 100" aria-hidden="true"><path d="M10 100 C10 70 22 60 40 60 C58 60 70 70 70 100 Z" fill="'+L[1]+'"/><circle cx="40" cy="36" r="20" fill="'+L[0]+'"/>' +
      '<path d="M20 34 C20 16 60 16 60 34 C56 24 26 24 20 34 Z" fill="'+L[2]+'"/><circle cx="33" cy="38" r="2.4" fill="#222"/><circle cx="47" cy="38" r="2.4" fill="#222"/><path d="M33 46 Q40 51 47 46" stroke="#222" stroke-width="2" fill="none" stroke-linecap="round"/></svg>'; }
  function modVisitors(cfg){
    var act0 = $(cfg.anchor || '#panel-explore .activity.bl-purple'); if (!act0) return;
    var V = cfg.visitors || [], K = cultOrder(), C = DATA.cultures || {};
    ST.vd = ST.vd || {i:0, ok:false}; var S = ST.vd;
    var m = shell('ms-vd-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-vd-room"><div class="ms-vd-line"></div><div class="ms-vd-desk"><span>'+esc(cfg.deskT||'Visitor Questions')+'</span></div></div>' +
      '<div class="ms-vd-act"></div>');
    act0.parentNode.insertBefore(m, act0);
    var act = $('.ms-vd-act', m), line = $('.ms-vd-line', m);
    function caseBtns(){ return '<div class="ms-vd-cases">'+K.map(function(k){ var c = C[k]||{}, s = SPEC[c.spec]||{};
      return '<button type="button" class="ms-vd-case" data-k="'+k+'"><span class="ms-vd-ci"><img alt="" src="'+img(s.card)+'"></span><b>'+(c.icon||'')+' '+esc(c.name)+'</b></button>'; }).join('')+'</div>'; }
    function render(){
      line.innerHTML = V.map(function(v,i){ return '<span class="ms-vd-w'+(i < S.i ? ' gone' : (i === S.i ? ' now' : ''))+'">'+visitorSVG(i)+'</span>'; }).join('');
      if (S.i >= V.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var v = V[S.i];
      act.innerHTML = stepCard(S.i+1, V.length, 'Visitor '+(S.i+1)+' of '+V.length,
        '<div class="ms-vd-ask">'+visitorSVG(S.i)+'<div class="ms-vd-bub"><small>'+esc(v.who||'A visitor asks:')+'</small>'+v.q+'</div></div>' +
        (S.ok ? '<div class="ms-vd-thanks">✅ '+v.ok+'</div><button type="button" class="ms-btn big ms-vd-next">'+(S.i+1 < V.length ? esc(cfg.nextT||'Next visitor')+' ➡️' : esc(cfg.lastT||'That was the last visitor')+' ✓')+'</button>'
              : '<p class="ms-wm-do">👆 '+esc(cfg.pickT||'Which case should this visitor go to? Tap the case.')+'</p>' + caseBtns() + '<div class="ms-exfb" aria-live="polite"></div>'));
      $$('.ms-vd-case', act).forEach(function(b){ b.onclick = function(){
        if (b.dataset.k === v.ans) { S.ok = true; save(); SFX.chime(); render(); }
        else { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); $('.ms-exfb', act).innerHTML = '🤔 '+v.hint; }
      }; });
      var nx = $('.ms-vd-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.ok = false; save();
        if (S.i >= V.length) { SFX.fanfare(); ST.gal = ST.gal||{}; if (!ST.gal.desk) { ST.gal.desk = 1; save(); galleryCheck(); } }
        render(); };
    }
    act0.classList.add('ms-hide-on');
    render();
  }

  /* ══ MODULE: wordroot (Workroom · one word root) ══
     cfg.root, cfg.means, words [{w, parts:[...], k (index of the root part), opts:[{t,ok}], fb}] */
  function modWordroot(cfg){
    var anchor = $(cfg.anchor || '#panel-check .quiz-card'); if (!anchor) return;
    var W = cfg.words || []; ST.wr = ST.wr || {i:0, ph:0}; var S = ST.wr;
    var m = shell('ms-wr-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-wr-card"><span class="ms-wr-root">'+esc(cfg.root)+'</span><span class="ms-wr-eq">=</span><span class="ms-wr-mean">'+esc(cfg.means)+'</span></div><div class="ms-wr-act"></div>');
    after(anchor, m);
    var act = $('.ms-wr-act', m);
    function told(){ window._rootMatchDone = S.i >= W.length; if (typeof window.gatherAnswers === 'function') try { window.gatherAnswers(); } catch(e){} }
    function render(){
      told();
      if (S.i >= W.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var w = W[S.i];
      var word = '<div class="ms-wr-word">'+w.parts.map(function(p,j){ return '<button type="button" class="ms-wr-part'+(S.ph>0 && j===w.k ? ' ok' : '')+'" data-j="'+j+'"'+(S.ph>0?' disabled':'')+'>'+esc(p)+'</button>'; }).join('')+'</div>';
      if (S.ph === 0) act.innerHTML = stepCard(S.i+1, W.length, 'Word '+(S.i+1)+' of '+W.length+' · Find the root', word + '<p class="ms-wm-do">👆 '+esc((cfg.findT||'Tap the part of the word that says {root}.').replace('{root}', cfg.root))+'</p><div class="ms-exfb" aria-live="polite"></div>');
      else act.innerHTML = stepCard(S.i+1, W.length, 'Word '+(S.i+1)+' of '+W.length+' · What does it mean?', word + '<p>'+esc((cfg.askT||'{root} means {means}. So what does {w} mean?').replace('{root}', cfg.root).replace('{means}', cfg.means).replace('{w}', w.w))+'</p>' +
        '<div class="ms-pchoices col">'+w.opts.map(function(o,k){ return '<button type="button" class="ms-btn ms-wr-o'+(S.ph===2 && o.ok?' ok':'')+'" data-k="'+k+'">'+esc(o.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite">'+(S.ph===2 ? '✅ '+esc(w.ok||'') : '')+'</div>' +
        (S.ph === 2 ? '<button type="button" class="ms-btn big ms-wr-next">'+(S.i+1 < W.length ? 'Next word ➡️' : 'Done ✓')+'</button>' : ''));
      $$('.ms-wr-part', act).forEach(function(b){ b.onclick = function(){ if (+b.dataset.j === w.k) { SFX.chime(); S.ph = 1; save(); render(); } else { SFX.miss(); $('.ms-exfb', act).innerHTML = '🤔 Look for the letters <b>'+esc(cfg.root)+'</b>.'; } }; });
      $$('.ms-wr-o', act).forEach(function(b){ b.onclick = function(){ if (S.ph === 2) return; var o = w.opts[+b.dataset.k]; if (o.ok) { SFX.chime(); S.ph = 2; save(); render(); } else { SFX.miss(); b.classList.add('no'); $('.ms-exfb', act).innerHTML = '🤔 '+esc(w.fb||''); } }; });
      var nx = $('.ms-wr-next', act); if (nx) nx.onclick = function(){ S.i++; S.ph = 0; save(); SFX.click(); render(); };
    }
    render();
  }

  /* ══ MODULE: caseex (Exhibit Floor · your culture case) ══
     1 pick a case, 2 the Curator Task box moves into this step: write the label (sentence count + courtesy checks),
     3 see it in the case → Open my case (always pressable; says what's missing). */
  function modCaseex(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var C = DATA.cultures || {}, K = cultOrder(), NEED = cfg.sentences || 3;
    ST.ce = ST.ce || {k:null, step:1, open:false}; var S = ST.ce;
    var m = shell('ms-ce-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-ce-act"></div><div class="ms-ce-show" hidden><div class="ms-ce-case"><div class="ms-ce-glass"><div class="ms-ce-spec"></div></div><div class="ms-ce-label"><span class="ms-holder"></span><div class="ms-ce-lt"></div><div class="ms-ce-lx"></div><div class="ms-ce-by"></div><span class="ms-draft">DRAFT</span></div><div class="ms-ce-curtain"><i></i></div></div></div><div class="ms-ce-end"></div>');
    var home = document.createComment('ce-home'); ta.parentNode.insertBefore(home, ta);
    var host = ta.closest('.activity') || ta.parentNode; host.parentNode.insertBefore(m, host.nextSibling);
    host.classList.add('ms-ce-host', 'ms-hide-on');
    var act = $('.ms-ce-act', m), show = $('.ms-ce-show', m), end = $('.ms-ce-end', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function sentences(t){ return t.split(/[.!?]+/).filter(function(x){ return (x.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function checks(){ var c = C[S.k] || {}; return (c.checks || []).map(function(x){ return {t:x.t, ok:new RegExp(x.re,'i').test(ta.value)}; }); }
    function missing(){
      var miss = []; if (!S.k) return [cfg.missPick || 'Pick a case first.'];
      var n = sentences(ta.value); if (n < NEED) miss.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+'.');
      var need = checks().filter(function(x){ return !x.ok; }).map(function(x){ return x.t; });
      if (need.length) miss.push((cfg.needT||'Your label still needs:')+' '+need.join(' · ')+'.');
      return miss;
    }
    function caseView(){
      var c = C[S.k] || {}, s = SPEC[c.spec] || {};
      $('.ms-ce-spec', show).innerHTML = s.card ? '<img alt="'+esc(s.cardAlt||'')+'" src="'+img(s.card)+'">' : '';
      $('.ms-ce-lt', show).innerHTML = (c.icon||'')+' '+esc(c.name||'');
      var v = ta.value.trim(); $('.ms-ce-lx', show).textContent = v || (cfg.emptyT || 'Your label will appear here as you write.'); $('.ms-ce-lx', show).classList.toggle('empty', !v);
      $('.ms-ce-by', show).textContent = '— ' + (sget(NAMEK,'') || 'Junior Curator') + ', Regional Curator';
      show.classList.toggle('open', !!S.open);
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 2;
      ta.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1 || !S.k) {
        S.step = 1; goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T || 'Pick a case', '<p>'+(cfg.s1||'')+'</p><div class="ms-vd-cases ms-ce-picks">'+K.map(function(k){ var c = C[k]||{}, s = SPEC[c.spec]||{};
          return '<button type="button" class="ms-vd-case'+(S.k===k?' on':'')+'" data-k="'+k+'"><span class="ms-vd-ci"><img alt="" src="'+img(s.card)+'"></span><b>'+(c.icon||'')+' '+esc(c.name)+'</b></button>'; }).join('')+'</div>');
        $$('.ms-vd-case', act).forEach(function(b){ b.onclick = function(){ S.k = b.dataset.k; S.step = 2; save(); SFX.click(); render(); }; });
        return;
      }
      caseView();
      if (S.step === 2) {
        var c = C[S.k] || {};
        act.innerHTML = stepCard(2, 3, cfg.s2T || 'Write your label', '<p>'+(cfg.s2||'').replace('{name}', esc(c.name))+'</p>' +
          '<div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t.replace('{name}', c.honor || c.name))+'</button>'; }).join('')+'</div>' +
          '<div class="ms-gi-box"></div><div class="ms-excheck ms-ce-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-ce-other">↩️ '+esc(cfg.otherT||'Pick a different case')+'</button><button type="button" class="ms-btn big ms-ce-next">'+esc(cfg.nextT||'Next: see it in the case')+' ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-ce-chk', act), fb = $('.ms-gi-fb', act);
        function upd(){ var n = sentences(ta.value), miss = missing();
          chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences</span>' + checks().map(function(x){ return '<span class="ms-chip'+(x.ok?' ok':'')+'">'+(x.ok?'✓ ':'')+esc(x.t)+'</span>'; }).join('');
          $('.ms-ce-next', act).classList.toggle('ms-notready', !!miss.length); caseView();
          if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; }
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b,i){ b.onclick = function(){ var t = (cfg.starters||[])[i].replace('{name}', c.honor || c.name); ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-ce-other', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-ce-next', act).onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
          SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return;
      }
      goHome();
      act.innerHTML = S.open ? '' : stepCard(3, 3, cfg.s3T || 'Open your case', '<p>'+(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-ce-open">🎉 '+esc(cfg.openT||'Open my case')+'</button><div class="ms-gi-fb" aria-live="polite"></div>');
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : '') + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-ce-edit">✏️ '+esc(cfg.editT||'Edit my label')+'</button></div>';
      var ob = $('.ms-ce-open', act); if (ob) ob.onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render();
        setTimeout(function(){ show.classList.remove('opening'); }, 1600); optiNod('assignment'); check(); };
      $('.ms-ce-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }


  /* ══════════ Added for 3.06.07 (Environment and Settlement) ══════════
     DATA.tokens = {key:{name, short, need, gives, word}} in DATA.tokenOrder: the four reason tokens.
     - tokens     Lobby: you lead the families; open each need, put its token in the tray
     - towntable  Gallery main attraction: a simple model landscape, five spots; drop the town pin, the town grows
     - magnify    Gallery source room: old pictures, one at a time; move the magnifier to find each clue
     - pinmap     Gallery: the Settlement Map; one city at a time, put the right token on its pin
     - storypin   Exhibit Floor: pick a city, pick two tokens, write the story in the step, it hangs by the pin */
  function tokOrder(){ return DATA.tokenOrder || Object.keys(DATA.tokens || {}); }
  function tokArt(k){
    var inner = {
      trade: '<path d="M10 33 Q32 41 54 33" stroke="#2D6FA8" stroke-width="3" fill="none"/><path d="M15 29 L49 29 L44 36 L20 36 Z" fill="#8A5A2E" stroke="#4E3218" stroke-width="1.5"/><path d="M32 29 V10" stroke="#4E3218" stroke-width="2"/><path d="M33 11 L46 26 L33 26 Z" fill="#FBF5E6" stroke="#7E5A16" stroke-width="1.2"/><path d="M31 13 L21 26 L31 26 Z" fill="#F3E2B6" stroke="#7E5A16" stroke-width="1.2"/>',
      food: '<path d="M16 26 h22 l-3 13 h-16 z" fill="#B9824A" stroke="#6B4423" stroke-width="1.5"/><path d="M19 30 h16 M18 34 h18" stroke="#7A4F27" stroke-width="1"/><g fill="#E9B23A" stroke="#9A6A10" stroke-width=".8"><ellipse cx="22" cy="20" rx="3.2" ry="7"/><ellipse cx="28" cy="18" rx="3.2" ry="8"/><ellipse cx="34" cy="20" rx="3.2" ry="7"/></g><path d="M20 26 q-4 -10 2 -16 M36 26 q4 -10 -2 -16" stroke="#5E9A3A" stroke-width="2" fill="none"/><path d="M43 22 h8 l2 4 v12 q0 3 -3 3 h-6 q-3 0 -3 -3 v-12 z" fill="#6FA8D8" stroke="#2D6FA8" stroke-width="1.5"/><path d="M44 29 h8" stroke="#fff" stroke-width="1.5" opacity=".7"/>',
      resource: '<path d="M14 36 L22 22 L32 18 L44 21 L50 33 L42 40 L24 41 Z" fill="#E2B83C" stroke="#8A6410" stroke-width="2"/><path d="M22 22 L28 31 L32 18 M28 31 L44 21 M28 31 L24 41 M28 31 L42 40" stroke="#B88A1E" stroke-width="1.2" fill="none"/><path d="M36 26 l1.5 -5 l1.5 5 l5 1.5 l-5 1.5 l-1.5 5 l-1.5 -5 l-5 -1.5 z" fill="#FFF6CF"/>',
      defend: '<path d="M8 42 L8 24 L20 18 L24 42 Z" fill="#9A8466" stroke="#5E4E36" stroke-width="1.2"/><path d="M24 42 L20 18 L28 16 L30 42" fill="#B39D7C"/><path d="M28 10 h22 v14 q0 12 -11 17 q-11 -5 -11 -17 z" fill="#2D4C8C" stroke="#0E1C42" stroke-width="1.5"/><path d="M39 13 v24 M31 22 h16" stroke="#E9C878" stroke-width="2.4"/>'
    }[k] || '';
    return '<svg viewBox="0 0 64 52" class="ms-tk-art" aria-hidden="true">'+inner+'</svg>';
  }
  function tokCoin(k, cls){ var t = (DATA.tokens||{})[k] || {}; return '<span class="ms-tk '+(cls||'')+'" data-k="'+k+'" title="'+esc(t.name||'')+'"><span class="ms-tk-coin">'+tokArt(k)+'</span><b>'+esc(t.name||'')+'</b></span>'; }

  /* ══ MODULE: tokens (Lobby · you lead the families) ══ */
  function modTokens(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var K = tokOrder(), T = DATA.tokens || {};
    ST.tk = ST.tk || {i:0, ph:0}; var S = ST.tk;
    var m = shell('ms-tk-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-tk-room"><svg class="ms-tk-scene" viewBox="0 0 600 120" aria-hidden="true"><rect width="600" height="120" fill="#F4EAD5"/><path d="M0 96 Q150 86 300 94 T600 92 V120 H0 Z" fill="#C9A877"/>' +
        '<path d="M40 96 L92 48 L144 96 Z" fill="#8F8578"/><path d="M80 59 L92 48 L104 59 L97 57 L92 61 L86 57 Z" fill="#fff"/><path d="M120 96 L180 40 L240 96 Z" fill="#A39886"/><path d="M166 53 L180 40 L194 53 L187 50 L180 55 L173 50 Z" fill="#fff"/>' +
        '<g transform="translate(380 62)"><rect x="0" y="6" width="58" height="22" rx="3" fill="#B9824A" stroke="#6B4423" stroke-width="2"/><path d="M2 8 Q29 -18 56 8" fill="#FBF5E6" stroke="#9A8452" stroke-width="2"/><circle cx="12" cy="32" r="7" fill="#4E3218"/><circle cx="46" cy="32" r="7" fill="#4E3218"/></g>' +
        '<g fill="#5A4636"><circle cx="470" cy="70" r="5"/><rect x="466" y="75" width="8" height="18" rx="3"/><circle cx="488" cy="72" r="4"/><rect x="485" y="76" width="7" height="15" rx="3"/><circle cx="504" cy="70" r="5"/><rect x="500" y="75" width="8" height="18" rx="3"/></g>' +
        '<text x="300" y="22" text-anchor="middle" font-family="Lora,Georgia,serif" font-size="15" fill="#3A2A14">'+esc(cfg.sceneT||'')+'</text></svg>' +
      '<div class="ms-tk-tray"><div class="ms-tk-trayl">'+esc(cfg.trayT||'Your token tray')+'</div><div class="ms-tk-slots">'+K.map(function(k,i){ return '<span class="ms-tk-slot" data-i="'+i+'"><span class="ms-tk-empty">'+(i+1)+'</span></span>'; }).join('')+'</div></div></div>' +
      '<div class="ms-tk-act"></div>');
    if (cfg.where === 'before') anchor.parentNode.insertBefore(m, anchor); else after(anchor, m);
    var act = $('.ms-tk-act', m);
    function paint(){ $$('.ms-tk-slot', m).forEach(function(s,i){ s.innerHTML = i < S.i ? tokCoin(K[i]) : '<span class="ms-tk-empty">'+(i+1)+'</span>'; s.classList.toggle('now', i === S.i); }); }
    function render(){
      paint(); var n = K.length;
      if (S.i >= n) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      var k = K[S.i], t = T[k] || {};
      if (S.ph === 0) act.innerHTML = stepCard(S.i+1, n, 'Need '+(S.i+1)+' of '+n, '<p class="ms-tk-need">'+t.need+'</p><button type="button" class="ms-btn big ms-tk-go">🗝️ '+esc(cfg.openBtn||'Open the token box')+'</button>');
      else act.innerHTML = stepCard(S.i+1, n, t.name, '<div class="ms-tk-show">'+tokCoin(k,'big')+'<p>'+t.gives+'</p></div><button type="button" class="ms-btn big ms-tk-go">'+esc((cfg.putBtn||'Put it in slot {n}').replace('{n}', S.i+1))+' ➡️</button>');
      $('.ms-tk-go', act).onclick = function(){ this.disabled = true;
        if (S.ph === 0) { SFX.creak(); S.ph = 1; save(); render(); return; }
        var i = S.i, from = $('.ms-tk-show .ms-tk-coin', act), slot = $('.ms-tk-slot[data-i="'+i+'"]', m);
        fly(from, slot, tokArt(K[i]), 600).then(function(){ SFX.stamp(); S.i = i + 1; S.ph = 0; save(); render(); if (S.i >= n) { SFX.fanfare(); markDone('scene'); } });
      };
    }
    render();
  }

  /* ══ MODULE: towntable (Gallery main attraction · build a town) ══
     cfg.spots [{k, n, x, y, grow:[tents,houses,extra...], tokens:[...], what, why}]; the model is drawn here (no images). */
  function townArt(){
    return '<defs><linearGradient id="ms-tt-sea" x1="0" x2="1"><stop offset="0" stop-color="#7FB5D6"/><stop offset="1" stop-color="#4F8FBF"/></linearGradient>' +
      '<pattern id="ms-tt-dry" width="22" height="22" patternUnits="userSpaceOnUse"><rect width="22" height="22" fill="#E6CF9A"/><circle cx="5" cy="6" r="1.2" fill="#C4A46A"/><circle cx="15" cy="16" r="1" fill="#C4A46A"/></pattern>' +
      '<linearGradient id="ms-tt-cliff" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B8A07A"/><stop offset="1" stop-color="#7A6446"/></linearGradient></defs>' +
      '<rect width="1000" height="560" fill="#B9D58F"/>' +
      '<path d="M0 340 Q110 320 250 360 L320 560 L0 560 Z" fill="url(#ms-tt-dry)"/>' +
      '<g fill="#5E8A3A" opacity=".55"><circle cx="70" cy="420" r="3"/><circle cx="210" cy="500" r="3"/><circle cx="120" cy="530" r="2.5"/></g>' +
      '<g fill="#8F8578" stroke="#6E655C" stroke-width="2"><path d="M0 0 H430 L390 70 L340 30 L290 110 L240 50 L190 120 L130 60 L70 130 L0 80 Z"/></g>' +
      '<g fill="#fff"><path d="M340 30 L355 55 L330 52 Z"/><path d="M240 50 L256 76 L228 72 Z"/><path d="M130 60 L146 86 L118 82 Z"/></g>' +
      '<path d="M840 0 H1000 V560 H900 Q860 470 900 380 Q950 300 890 210 Q840 120 840 0 Z" fill="url(#ms-tt-sea)"/>' +
      '<text x="950" y="300" font-family="Lora,Georgia,serif" font-style="italic" font-size="22" fill="#fff" text-anchor="middle" transform="rotate(90 950 300)">Sea</text>' +
      '<ellipse cx="640" cy="105" rx="105" ry="50" fill="#6FA8D8" stroke="#4F8FBF" stroke-width="3"/>' +
      '<path d="M720 300 L860 340 L862 360 L716 322 Z" fill="url(#ms-tt-cliff)" stroke="#5E4E36" stroke-width="2"/><path d="M690 250 Q760 262 860 300 L860 340 L720 300 Z" fill="#A3B87A"/>' +
      '<g stroke="#5E4E36" stroke-width="1.5" opacity=".7"><path d="M740 306 l-3 12 M770 315 l-3 12 M800 323 l-3 12 M830 331 l-3 12"/></g>' +
      '<path class="ms-tt-river" d="M290 120 C 330 230, 450 250, 560 280 S 700 330, 760 372 S 860 460, 905 470" fill="none" stroke="#4F8FBF" stroke-width="16" stroke-linecap="round"/>' +
      '<text x="60" y="380" font-family="Nunito,sans-serif" font-weight="800" font-size="16" fill="#8A6A3A">dry plain</text>' +
      '<text x="640" y="110" font-family="Nunito,sans-serif" font-weight="800" font-size="15" fill="#24548A" text-anchor="middle">lake</text>' +
      '<text x="215" y="24" font-family="Nunito,sans-serif" font-weight="800" font-size="15" fill="#fff" text-anchor="middle">mountains</text>' +
      '<text x="895" y="356" font-family="Nunito,sans-serif" font-weight="800" font-size="15" fill="#5E4423" text-anchor="end" transform="rotate(14 895 356)">cliff</text>' +
      '<text x="470" y="292" font-family="Nunito,sans-serif" font-weight="800" font-size="15" fill="#24548A">river</text>';
  }
  function townGrow(sp){
    var g = '', x = sp.x, y = sp.y, st = sp.grow || [];
    function tent(dx,dy){ return '<path d="M'+(x+dx-9)+' '+(y+dy)+' L'+(x+dx)+' '+(y+dy-14)+' L'+(x+dx+9)+' '+(y+dy)+' Z" fill="#F3EAD6" stroke="#8A6A3A" stroke-width="1.5"/>'; }
    function house(dx,dy,h){ h = h||14; return '<rect x="'+(x+dx-8)+'" y="'+(y+dy-h)+'" width="16" height="'+h+'" fill="#E8D2B0" stroke="#6B4423" stroke-width="1.3"/><path d="M'+(x+dx-10)+' '+(y+dy-h)+' L'+(x+dx)+' '+(y+dy-h-8)+' L'+(x+dx+10)+' '+(y+dy-h)+' Z" fill="#B23A2E"/>'; }
    g += '<g class="ms-tt-g s1">'+tent(-14,4)+tent(0,-2)+tent(14,4)+'</g>';
    if (st.indexOf('houses') >= 0) g += '<g class="ms-tt-g s2">'+house(-26,22)+house(-6,26)+house(16,22)+house(-16,44)+house(8,46)+'</g>';
    if (st.indexOf('boats') >= 0) g += '<g class="ms-tt-g s3">'+[[44,8],[58,30],[36,40]].map(function(b){ return '<g transform="translate('+(x+b[0])+' '+(y+b[1])+')"><path d="M-10 0 h20 l-4 5 h-12 z" fill="#8A5A2E"/><path d="M0 0 v-14 l9 12 z" fill="#fff" stroke="#7E5A16" stroke-width=".8"/></g>'; }).join('')+'<rect x="'+(x+20)+'" y="'+(y+14)+'" width="22" height="5" fill="#6B4423"/></g>';
    if (st.indexOf('fields') >= 0) g += '<g class="ms-tt-g s3">'+[[-70,10,'#E9C34A'],[-70,34,'#7FAE4A'],[-44,58,'#E9C34A'],[30,58,'#7FAE4A']].map(function(f){ return '<rect x="'+(x+f[0])+'" y="'+(y+f[1])+'" width="36" height="20" fill="'+f[2]+'" stroke="#6B8A3A" stroke-width="1"/>'; }).join('')+'</g>';
    if (st.indexOf('mine') >= 0) g += '<g class="ms-tt-g s3"><path d="M'+(x-58)+' '+(y-10)+' q14 -24 28 0 z" fill="#3B2A1A" stroke="#6B4423" stroke-width="2"/><rect x="'+(x-50)+'" y="'+(y-4)+'" width="14" height="8" fill="#6B4423"/><circle cx="'+(x-47)+'" cy="'+(y+6)+'" r="2.5" fill="#222"/><circle cx="'+(x-39)+'" cy="'+(y+6)+'" r="2.5" fill="#222"/><path d="M'+(x-46)+' '+(y-6)+' l3 -4 l3 4 z" fill="#E2B83C"/></g>';
    if (st.indexOf('walls') >= 0) g += '<g class="ms-tt-g s3"><path d="M'+(x-36)+' '+(y-24)+' h72 v-10 h-8 v5 h-8 v-5 h-8 v5 h-8 v-5 h-8 v5 h-8 v-5 h-8 v5 h-8 v-5 h-8 z" fill="#9A8466" stroke="#5E4E36" stroke-width="1.5"/></g>';
    if (st.indexOf('city') >= 0) g += '<g class="ms-tt-g s4">'+house(-34,0,24)+house(28,2,28)+house(-2,-16,34)+'<rect x="'+(x+40)+'" y="'+(y-40)+'" width="12" height="42" fill="#D8C3A0" stroke="#6B4423" stroke-width="1.3"/></g>';
    return '<g transform="translate('+x+' '+y+') scale(1.45) translate('+(-x)+' '+(-y)+')">'+g+'</g>';
  }
  function modTowntable(cfg){
    var anchor = $(cfg.anchor || '#panel-explore .step-badge'); if (!anchor) return;
    var SP = cfg.spots || [];
    ST.tt = ST.tt || {tried:{}, cur:null, ans:null}; var S = ST.tt;
    var m = shell('ms-tt-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-tt-act"></div>' +
      '<div class="ms-tt-table"><div class="ms-tt-tag">'+esc(cfg.tag||'A simple model')+'</div><svg class="ms-tt-svg" viewBox="0 0 1000 560" role="img" aria-label="'+esc(cfg.alt||'')+'">'+townArt() +
        SP.map(function(sp){ return '<g class="ms-tt-spot" data-k="'+sp.k+'" tabindex="0" role="button" aria-label="Spot '+sp.n+', '+esc(sp.label)+'"><circle class="ring" cx="'+sp.x+'" cy="'+sp.y+'" r="48"/><text class="lab" x="'+sp.x+'" y="'+(sp.y+(sp.ly||60))+'">Spot '+sp.n+'</text><g class="grow"></g></g>'; }).join('') +
        '</svg><div class="ms-tt-pinwell"><span class="ms-tt-pin" title="Drag me to a spot">📍</span><small>'+esc(cfg.pinT||'Drag the pin, or tap a spot')+'</small></div></div>' +
      '<div class="ms-tt-res" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-tt-act', m), res = $('.ms-tt-res', m), svg = $('.ms-tt-svg', m);
    function spot(k){ for (var i=0;i<SP.length;i++) if (SP[i].k === k) return SP[i]; }
    function tried(){ return SP.filter(function(s){ return S.tried[s.k]; }).length; }
    function paint(){ $$('.ms-tt-spot', m).forEach(function(g){ var k = g.dataset.k, sp = spot(k); g.classList.toggle('tried', !!S.tried[k]); g.classList.toggle('cur', S.cur === k); var gr = $('.grow', g); if (S.tried[k] && !gr.innerHTML) gr.innerHTML = townGrow(sp); }); }
    function result(sp){
      return '<div class="ms-tt-card"><div class="ms-tt-ck">📍 Spot '+sp.n+' · '+esc(sp.label)+'</div><div class="ms-tt-toks">'+(sp.tokens.length ? sp.tokens.map(function(k){ return tokCoin(k,'sm'); }).join('') : '<span class="ms-tt-none">'+esc(cfg.noneT||'No tokens lit up')+'</span>')+'</div>' +
        '<p><b>What happened:</b> '+sp.what+'</p><p><b>Why:</b> '+sp.why+'</p></div>';
    }
    function place(k){
      var sp = spot(k); if (!sp) return;
      var first = !S.tried[k]; S.tried[k] = 1; S.cur = k; save(); paint();
      var g = $('.ms-tt-spot[data-k="'+k+'"]', m);
      if (first && !calm()) { g.classList.remove('growing'); void g.getBBox(); g.classList.add('growing'); setTimeout(function(){ g.classList.remove('growing'); }, 2600); }
      SFX.pop(); setTimeout(function(){ if (sp.tokens.length) SFX.chime(); }, calm() ? 0 : 1800);
      res.innerHTML = result(sp); render();
    }
    $$('.ms-tt-spot', m).forEach(function(g){ g.addEventListener('click', function(){ place(g.dataset.k); }); g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); place(g.dataset.k); } }); });
    // drag the pin onto a spot
    var pin = $('.ms-tt-pin', m);
    pin.addEventListener('pointerdown', function(e){ e.preventDefault(); var gh = pin.cloneNode(true); gh.classList.add('ms-tt-ghost'); document.body.appendChild(gh);
      function mv(ev){ gh.style.left = (ev.clientX - 16)+'px'; gh.style.top = (ev.clientY - 30)+'px'; }
      function up(ev){ document.removeEventListener('pointermove', mv); gh.remove(); var t = document.elementFromPoint(ev.clientX, ev.clientY), s = t && t.closest && t.closest('.ms-tt-spot'); if (s) place(s.dataset.k); else SFX.miss(); }
      mv(e); document.addEventListener('pointermove', mv); document.addEventListener('pointerup', up, {once:true}); });
    function render(){
      paint(); var n = tried();
      if (n < SP.length || !S.step) {
        if (n >= SP.length) { S.step = 2; save(); return render(); }
        act.innerHTML = stepCard(1, 2, cfg.s1T || 'Try every spot', '<p>'+(cfg.s1||'')+'</p><div class="ms-tt-count">'+SP.map(function(s){ return '<i class="'+(S.tried[s.k]?'on':'')+'">'+s.n+'</i>'; }).join('')+'<span>'+n+' of '+SP.length+' spots tried</span></div>');
        return;
      }
      act.innerHTML = stepCard(2, 2, cfg.q.title, '<p>'+cfg.q.text+'</p>' + choiceBlock(cfg.q, S.ans, 'ms-tt-c') + (S.ans != null && cfg.q.opts[S.ans].ok ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : ''));
      $$('.ms-tt-c', act).forEach(function(b){ b.onclick = function(){ var k = +b.dataset.k, done = S.ans != null && cfg.q.opts[S.ans].ok;
        if (!done) { S.ans = k; save(); }
        if (cfg.q.opts[k].ok) { SFX.chime(); ST.gal = ST.gal||{}; if (!ST.gal.town) { ST.gal.town = 1; save(); galleryCheck(); } } else SFX.miss();
        render(); }; });
    }
    if (S.cur) res.innerHTML = result(spot(S.cur));
    render();
  }

  /* ══ MODULE: magnify (Gallery source room · old pictures, find the clue) ══
     cfg.pics [{img, place, when, alt, credit, clues:[{x,y,r,t}]}] (x, y, r in % of the picture) */
  function modMagnify(cfg){
    var anchor = $(cfg.anchor || '#panel-explore .source-card'); if (!anchor) return;
    var P = cfg.pics || [];
    ST.mg = ST.mg || {i:0, found:{}}; var S = ST.mg;
    var m = shell('ms-mg-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-mg-act"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-mg-act', m);
    function key(i,j){ return i+'.'+j; }
    function nfound(i){ return (P[i].clues||[]).filter(function(_,j){ return S.found[key(i,j)]; }).length; }
    function render(){
      if (S.i >= P.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div><p class="ms-ct-again"><button type="button" class="ms-btn alt ms-mg-again">🔍 '+esc(cfg.againT||'Look at the pictures again')+'</button></p>';
        $('.ms-mg-again', act).onclick = function(){ S.i = 0; save(); render(); }; return; }
      var p = P[S.i], C = p.clues || [], nf = nfound(S.i), all = nf >= C.length;
      act.innerHTML = stepCard(S.i+1, P.length, 'Picture '+(S.i+1)+' of '+P.length+' · '+p.place,
        '<p>'+(all ? (cfg.allT||'You found every clue!') : esc((cfg.findT||'Move the magnifier over the picture. Find {n} clue{s}.').replace('{n}', C.length).replace('{s}', C.length>1?'s':'')))+'</p>' +
        '<div class="ms-mg-wrap"><figure class="ms-frame ms-mg-fig"><div class="ms-mg-pic"><img alt="'+esc(p.alt)+'" src="'+img(p.img)+'">' +
          C.map(function(c,j){ return S.found[key(S.i,j)] ? '<span class="ms-mg-ring" style="left:'+c.x+'%;top:'+c.y+'%;width:'+(c.r*2)+'%;"></span>' : ''; }).join('') +
          '<span class="ms-mg-lens" aria-hidden="true"></span></div><figcaption><b>'+esc(p.place)+', '+esc(p.when)+'</b><br><small>'+esc(p.credit)+'</small></figcaption></figure>' +
        '<div class="ms-mg-side"><div class="ms-mg-found">'+C.map(function(c,j){ return '<div class="ms-mg-clue'+(S.found[key(S.i,j)]?' on':'')+'">'+(S.found[key(S.i,j)] ? '✅ '+c.t : '🔍 Clue '+(j+1)+': not found yet')+'</div>'; }).join('')+'</div>' +
        (all ? '<button type="button" class="ms-btn big ms-mg-next">'+(S.i+1 < P.length ? esc(cfg.nextT||'Next picture')+' ➡️' : esc(cfg.lastT||'Done looking')+' ✓')+'</button>' : '<button type="button" class="ms-btn alt ms-mg-hint">💡 '+esc(cfg.hintT||'Show me where to look')+'</button>')+'</div></div>');
      var pic = $('.ms-mg-pic', act), lens = $('.ms-mg-lens', act), im = $('img', pic);
      function at(clientX, clientY){
        var r = pic.getBoundingClientRect(), x = (clientX - r.left) / r.width * 100, y = (clientY - r.top) / r.height * 100;
        if (x < 0 || y < 0 || x > 100 || y > 100) { lens.style.opacity = 0; return; }
        lens.style.opacity = 1; lens.style.left = x+'%'; lens.style.top = y+'%';
        lens.style.backgroundImage = 'url("'+im.src+'")'; lens.style.backgroundSize = (r.width*2.2)+'px '+(r.height*2.2)+'px';
        lens.style.backgroundPosition = (-(x/100*r.width*2.2 - 55))+'px '+(-(y/100*r.height*2.2 - 55))+'px';
        C.forEach(function(c,j){ if (S.found[key(S.i,j)]) return; var dx = x - c.x, dy = (y - c.y) * r.height / r.width; if (Math.sqrt(dx*dx+dy*dy) <= c.r) { S.found[key(S.i,j)] = 1; save(); SFX.chime(); setTimeout(render, calm() ? 0 : 350); } });
      }
      pic.addEventListener('pointermove', function(e){ at(e.clientX, e.clientY); });
      pic.addEventListener('pointerdown', function(e){ at(e.clientX, e.clientY); });
      pic.addEventListener('pointerleave', function(){ lens.style.opacity = 0; });
      var nx = $('.ms-mg-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; save(); if (S.i >= P.length) { ST.gal = ST.gal||{}; if (!ST.gal.pics) { ST.gal.pics = 1; save(); galleryCheck(); } } render(); };
      var hb = $('.ms-mg-hint', act); if (hb) hb.onclick = function(){ var j = C.findIndex(function(_,q){ return !S.found[key(S.i,q)]; }); if (j < 0) return; var c = C[j];
        var h = el('span','ms-mg-hintdot'); h.style.left = c.x+'%'; h.style.top = c.y+'%'; pic.appendChild(h); setTimeout(function(){ h.remove(); }, 2600); SFX.click(); };
    }
    render();
  }

  /* ══ MODULE: pinmap (Gallery · pin the reasons on the Settlement Map) ══
     DATA.map (+ cities, rivers); cfg.cities [{k, name, card, ans:[token,...], ok, hint, extraT}] in order */
  function settleMap(M, cls){
    var svg = mapSVG(M, {label: 'Settlement Map of North America and the Caribbean', compass: true, cls: cls||''});
    var extra = '<g class="ms-cm-riv">'+Object.keys(M.rivers||{}).map(function(k){ return '<path d="'+M.rivers[k]+'"/>'; }).join('')+'</g>' +
      (M.labels||[]).map(function(n){ var p = M.pts[n.k]; return p ? '<text class="ms-pm-ml '+(n.c||'')+'" x="'+p[0]+'" y="'+p[1]+'"'+(n.rot!=null?' transform="rotate('+n.rot+' '+p[0]+' '+p[1]+')"':'')+'>'+esc(n.t)+'</text>' : ''; }).join('') +
      Object.keys(M.cities||{}).map(function(k){ var p = M.cities[k]; return '<g class="ms-pm-pin" data-k="'+k+'" transform="translate('+p[0]+' '+p[1]+')"><g class="bob"><path d="M0 0 L-9 -22 A11 11 0 1 1 9 -22 Z" fill="#C0392B" stroke="#7A1E15" stroke-width="2"/><circle cy="-25" r="4" fill="#fff"/></g><g class="toks"></g></g>'; }).join('');
    return svg.replace(/<\/svg>$/, extra + '</svg>');
  }
  function modPinmap(cfg){
    var M = DATA.map, act0 = $(cfg.anchor || '#panel-explore .activity.bl-purple'); if (!M || !act0) return;
    var CI = cfg.cities || [], K = tokOrder();
    ST.pm = ST.pm || {i:0, got:{}}; var S = ST.pm;
    var m = shell('ms-pm-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-pm-wrap"><div class="ms-pm-map">'+settleMap(M)+'</div><div class="ms-pm-act"></div></div>');
    act0.parentNode.insertBefore(m, act0); act0.classList.add('ms-hide-on');
    var act = $('.ms-pm-act', m);
    function cityName(k){ for (var i=0;i<CI.length;i++) if (CI[i].k === k) return CI[i].name; return k; }
    function paint(){
      $$('.ms-pm-pin', m).forEach(function(g){ var k = g.dataset.k, got = S.got[k] || [];
        g.classList.toggle('now', CI[S.i] && CI[S.i].k === k);
        $('.toks', g).innerHTML = got.map(function(t,j){ return '<g transform="translate('+(16+j*30)+' -44) scale(.5)"><circle cx="32" cy="26" r="30" fill="#F5DD95" stroke="#7E5A16" stroke-width="3"/>'+tokArt(t).replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'')+'</g>'; }).join('') +
          (S.got[k] ? '<text class="ms-pm-cn" x="0" y="20">'+esc(cityName(k))+'</text>' : ''); });
    }
    function shuffled(i){ var a = K.slice(), s = (i*7+3) % a.length; return a.slice(s).concat(a.slice(0,s)); }
    function render(){
      paint();
      if (S.i >= CI.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var c = CI[S.i], got = S.got[c.k] || [], need = c.ans.filter(function(t){ return got.indexOf(t) < 0; }), second = got.length > 0;
      if (!need.length) {
        act.innerHTML = stepCard(S.i+1, CI.length, c.name, '<div class="ms-vd-thanks">✅ '+c.ok+'</div><button type="button" class="ms-btn big ms-pm-next">'+(S.i+1 < CI.length ? esc(cfg.nextT||'Next city')+' ➡️' : esc(cfg.lastT||'All six pins done')+' ✓')+'</button>');
        $('.ms-pm-next', act).onclick = function(){ SFX.click(); S.i++; save(); if (S.i >= CI.length) { SFX.fanfare(); ST.gal = ST.gal||{}; if (!ST.gal.pins) { ST.gal.pins = 1; save(); galleryCheck(); } } render(); };
        return;
      }
      act.innerHTML = stepCard(S.i+1, CI.length, c.name, '<p class="ms-pm-card">'+(second ? c.extraT : c.card)+'</p><p class="ms-wm-do">👆 '+esc(second ? (cfg.secondT||'This city has a second reason too. Tap that token.') : (cfg.pickT||'Why did people build here? Tap the token.'))+'</p>' +
        '<div class="ms-pm-toks">'+shuffled(S.i).map(function(t){ return '<button type="button" class="ms-pm-tk'+(got.indexOf(t)>=0?' used':'')+'" data-k="'+t+'"'+(got.indexOf(t)>=0?' disabled':'')+'>'+tokCoin(t,'sm')+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div>');
      $$('.ms-pm-tk', act).forEach(function(b){ b.onclick = function(){ var t = b.dataset.k;
        if (need.indexOf(t) >= 0 && (second || t === c.ans[0])) { var pinEl = $('.ms-pm-pin[data-k="'+c.k+'"]', m);
          fly($('.ms-tk-coin', b), pinEl, '<span class="ms-tk-coin">'+tokArt(t)+'</span>', 600).then(function(){ S.got[c.k] = got.concat([t]); save(); SFX.stamp(); render(); }); }
        else { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); $('.ms-exfb', act).innerHTML = '🤔 '+(second ? c.hint2 : c.hint); }
      }; });
    }
    render();
  }

  /* ══ MODULE: storypin (Exhibit Floor · your settlement story) ══
     1 pick a city, 2 pick its two clue tokens, 3 write the story in the step (sentence count + checks), 4 see it by the pin → open. */
  function modStorypin(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var CI = cfg.cities || [], K = tokOrder(), T = DATA.tokens || {}, NEED = cfg.sentences || 3;
    ST.sp = ST.sp || {c:null, toks:[], step:1, open:false}; var S = ST.sp;
    var m = shell('ms-spn-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-spn-act"></div><div class="ms-spn-show" hidden><div class="ms-spn-map">'+settleMap(DATA.map, 'ms-spn-svg')+'<div class="ms-spn-card"><span class="ms-spn-tack"></span><div class="ms-spn-ct"></div><div class="ms-spn-tk"></div><div class="ms-spn-tx"></div><div class="ms-spn-by"></div><span class="ms-draft">DRAFT</span></div><div class="ms-spn-curtain"><i></i></div></div></div><div class="ms-spn-end"></div>');
    var home = document.createComment('spn-home'); ta.parentNode.insertBefore(home, ta);
    var host = ta.closest('.activity') || ta.parentNode; host.parentNode.insertBefore(m, host.nextSibling); host.classList.add('ms-hide-on');
    var act = $('.ms-spn-act', m), show = $('.ms-spn-show', m), end = $('.ms-spn-end', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function city(){ for (var i=0;i<CI.length;i++) if (CI[i].k === S.c) return CI[i]; return null; }
    function sentences(t){ return t.split(/[.!?]+/).filter(function(x){ return (x.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function checks(){ var c = city() || {}, v = ta.value, out = [{t:'the city', ok:new RegExp(c.re||'^$','i').test(v)}];
      S.toks.forEach(function(k){ var t = T[k]||{}; out.push({t:t.clue||t.name, ok:new RegExp(t.re||'^$','i').test(v)}); }); return out; }
    function missing(){ var miss = [], n = sentences(ta.value); if (n < NEED) miss.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+'.');
      var need = checks().filter(function(x){ return !x.ok; }).map(function(x){ return x.t; }); if (need.length) miss.push((cfg.needT||'Your story still needs:')+' '+need.join(' · ')+'.'); return miss; }
    function view(){
      var c = city() || {}, svg = $('.ms-spn-svg', show), card = $('.ms-spn-card', show), p = (DATA.map.cities||{})[S.c];
      $$('.ms-pm-pin', show).forEach(function(g){ g.classList.toggle('now', g.dataset.k === S.c); g.style.opacity = g.dataset.k === S.c ? 1 : .35; });
      if (p) { var px = p[0]/DATA.map.W*100, py = p[1]/DATA.map.H*100; card.style.left = (px > 50 ? Math.max(2, px - 50) : Math.min(52, px + 4))+'%'; card.style.top = Math.min(58, Math.max(2, py - 18))+'%'; }
      $('.ms-spn-ct', show).textContent = c.name || ''; $('.ms-spn-tk', show).innerHTML = S.toks.map(function(k){ return tokCoin(k,'xs'); }).join('');
      var v = ta.value.trim(); $('.ms-spn-tx', show).textContent = v || (cfg.emptyT||'Your story will appear here as you write.'); $('.ms-spn-tx', show).classList.toggle('empty', !v);
      $('.ms-spn-by', show).textContent = '— ' + (sget(NAMEK,'') || 'Junior Curator') + ', Regional Curator';
      show.classList.toggle('open', !!S.open);
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 3);
      if (S.step === 1 || !S.c) { S.step = 1; goHome();
        act.innerHTML = stepCard(1, 4, cfg.s1T || 'Pick a city', '<p>'+(cfg.s1||'')+'</p><div class="ms-spn-cities">'+CI.map(function(c){ return '<button type="button" class="ms-btn'+(S.c===c.k?'':' alt')+' ms-spn-city" data-k="'+c.k+'">📍 '+esc(c.name)+'</button>'; }).join('')+'</div>');
        $$('.ms-spn-city', act).forEach(function(b){ b.onclick = function(){ if (S.c !== b.dataset.k) S.toks = []; S.c = b.dataset.k; S.step = 2; save(); SFX.click(); render(); }; });
        return; }
      var c = city();
      if (S.step === 2) { goHome();
        act.innerHTML = stepCard(2, 4, cfg.s2T || 'Pick two clue tokens', '<p class="ms-pm-card">'+c.card+'</p><p class="ms-wm-do">👆 '+esc(cfg.s2||'Which two reasons helped this city grow? Tap two tokens.')+'</p>' +
          '<div class="ms-pm-toks">'+K.map(function(k){ return '<button type="button" class="ms-pm-tk'+(S.toks.indexOf(k)>=0?' on':'')+'" data-k="'+k+'" aria-pressed="'+(S.toks.indexOf(k)>=0)+'">'+tokCoin(k,'sm')+'</button>'; }).join('')+'</div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-spn-back">↩️ '+esc(cfg.otherT||'Pick a different city')+'</button><button type="button" class="ms-btn big ms-spn-next">'+esc(cfg.next2T||'Next: write the story')+' ➡️</button></div><div class="ms-exfb" aria-live="polite"></div>');
        $$('.ms-pm-tk', act).forEach(function(b){ b.onclick = function(){ var k = b.dataset.k, i = S.toks.indexOf(k); if (i >= 0) S.toks.splice(i,1); else { S.toks.push(k); if (S.toks.length > 2) S.toks.shift(); } save(); SFX.click(); render(); }; });
        $('.ms-spn-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-spn-next', act).classList.toggle('ms-notready', !(S.toks.length === 2 && S.toks.every(function(k){ return c.ok.indexOf(k) >= 0; })));
        $('.ms-spn-next', act).onclick = function(){ var fb = $('.ms-exfb', act);
          if (S.toks.length < 2) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Tap '+(2-S.toks.length)+' more token'+(S.toks.length===1?'':'s')+'.</div>'; return; }
          var bad = S.toks.filter(function(k){ return c.ok.indexOf(k) < 0; }); if (bad.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🤔 '+esc(c.hint)+'</div>'; return; }
          SFX.chime(); S.step = 3; save(); render(); };
        return; }
      view();
      if (S.step === 3) {
        act.innerHTML = stepCard(3, 4, cfg.s3T || 'Write the story', '<p>'+(cfg.s3||'')+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t.replace('{city}', c.name))+'</button>'; }).join('')+'</div>' +
          '<div class="ms-gi-box"></div><div class="ms-excheck ms-spn-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-spn-back">↩️ '+esc(cfg.backT||'Change the tokens')+'</button><button type="button" class="ms-btn big ms-spn-next">'+esc(cfg.next3T||'Next: see it on the map')+' ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-spn-chk', act), fb = $('.ms-gi-fb', act);
        function upd(){ var n = sentences(ta.value), miss = missing();
          chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences</span>' + checks().map(function(x){ return '<span class="ms-chip'+(x.ok?' ok':'')+'">'+(x.ok?'✓ ':'')+esc(x.t)+'</span>'; }).join('');
          $('.ms-spn-next', act).classList.toggle('ms-notready', !!miss.length); view();
          if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; }
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b,i){ b.onclick = function(){ var t = (cfg.starters||[])[i].replace('{city}', c.name); ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-spn-back', act).onclick = function(){ S.step = 2; save(); render(); };
        $('.ms-spn-next', act).onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
          SFX.click(); S.step = 4; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome();
      act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(4, 4, cfg.s4T || 'Open your exhibit', '<p>'+(cfg.s4||'')+'</p><button type="button" class="ms-btn big ms-spn-open">🎉 '+esc(cfg.openT||'Open my exhibit')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-spn-edit">✏️ '+esc(cfg.editT||'Edit my story')+'</button></div>';
      var ob = $('.ms-spn-open', end); if (ob) ob.onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); setTimeout(function(){ show.classList.remove('opening'); }, 1600); optiNod('assignment'); check(); };
      $('.ms-spn-edit', end).onclick = function(){ S.open = false; S.step = 3; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 3) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.06.08 (Compare Regional Cultures · Unit 6 closer) ══════════
     DATA.places = [{k,name,icon,line}] the four parts of the region; DATA.specs = the eight photo specimens.
     - wallpanels  Lobby: walk past the finished rooms, unveil four panels, hang eight photo specimens (drag or tap)
     - threads     Gallery main attraction: tap where a sport or music started, send it traveling; gold threads on the map
     - langmap     Gallery source room: a languages map; turn on each color, zoom in on the islands, three questions
     - compare2    Exhibit Floor: pick two places, one thing each, one connection, write four sentences, install → gallery lights up */
  function placeOf(k){ var P = DATA.places || []; for (var i=0;i<P.length;i++) if (P[i].k === k) return P[i]; return {k:k, name:k, icon:''}; }
  function specOf(k){ var S = DATA.specs || []; for (var i=0;i<S.length;i++) if (S[i].k === k) return S[i]; return null; }
  function specPhoto(s, cls){ return '<img class="'+(cls||'')+'" src="'+img(s.img)+'" alt="'+esc(s.cap)+'">'; }
  function rot(arr, i){ var s = (i*3+1) % arr.length; return arr.slice(s).concat(arr.slice(0,s)); }
  function choiceQ(cfgq, i, onRight, fbSel){
    // a full-sentence choice question; the order of the options moves with i
    var opts = cfgq.opts.map(function(o,j){ return {o:o, j:j}; }); opts = rot(opts, i);
    var h = '<p>'+cfgq.text+'</p><div class="ms-pchoices col">'+opts.map(function(x){ return '<button type="button" class="ms-btn ms-choice" data-j="'+x.j+'">'+esc(x.o.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div>';
    return {html:h, bind:function(root){ $$('.ms-choice', root).forEach(function(b){ b.onclick = function(){ var o = cfgq.opts[+b.dataset.j], fb = $('.ms-exfb', root);
      if (o.ok) { SFX.chime(); $$('.ms-choice', root).forEach(function(x){ x.classList.remove('no'); }); b.classList.add('ok'); fb.innerHTML = '<div class="ms-vd-thanks">✅ '+o.fb+'</div>'; onRight(); }
      else { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); if (!root.querySelector('.ms-choice.ok')) fb.innerHTML = '<div class="ms-notyet">🤔 '+o.fb+'</div>'; } }; }); }};
  }

  /* ══ MODULE: wallpanels (Lobby · the last empty wall) ══ */
  function modWallpanels(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var P = DATA.places || [], SP = DATA.specs || [], R = cfg.rooms || [];
    ST.wp = ST.wp || {ph:1, u:{}, i:0}; var S = ST.wp;
    var m = shell('ms-wp-mod', cfg);
    m.insertAdjacentHTML('beforeend',
      '<div class="ms-wp-strip">'+R.map(function(r,i){ return '<div class="ms-wp-room'+(i===R.length-1?' today':'')+'"><span class="ms-wp-ri">'+r.icon+'</span><b>'+esc(r.t)+'</b><span class="ms-wp-rd">'+esc(r.d)+'</span><span class="ms-wp-rn">'+esc(r.n)+'</span></div>'; }).join('')+'</div>' +
      '<div class="ms-wp-wall">'+P.map(function(p){ return '<div class="ms-wp-pan" data-k="'+p.k+'" role="button" tabindex="0" aria-label="'+esc(p.name)+' panel"><div class="ms-wp-ph"><span>'+p.icon+'</span>'+esc(p.name)+'</div><div class="ms-wp-line">'+esc(p.line||'')+'</div><div class="ms-wp-slots"><span class="ms-wp-slot"></span><span class="ms-wp-slot"></span></div><div class="ms-wp-cloth"><i></i><b>'+esc(cfg.clothT||'Tap to unveil')+'</b></div></div>'; }).join('')+'</div>' +
      '<div class="ms-wp-act"></div>');
    if (cfg.where === 'before') anchor.parentNode.insertBefore(m, anchor); else after(anchor, m);
    var act = $('.ms-wp-act', m), wall = $('.ms-wp-wall', m), strip = $('.ms-wp-strip', m);
    function hungIn(pk){ return SP.slice(0, S.i).filter(function(s){ return s.p === pk; }); }
    function paint(){
      strip.hidden = S.ph !== 1; wall.hidden = S.ph === 1;
      $$('.ms-wp-pan', m).forEach(function(pan){ var k = pan.dataset.k, up = !!S.u[k];
        pan.classList.toggle('up', up); var h = hungIn(k);
        $$('.ms-wp-slot', pan).forEach(function(sl, j){ var s = h[j]; sl.innerHTML = s ? '<button type="button" class="ms-wp-thumb" data-s="'+s.k+'" aria-label="Look closer: '+esc(s.name)+'">'+specPhoto(s)+'<span>'+esc(s.name)+'</span></button>' : ''; sl.classList.toggle('full', !!s); }); });
      $$('.ms-wp-thumb', m).forEach(function(b){ b.onclick = function(e){ e.stopPropagation(); var s = specOf(b.dataset.s); lightbox('<figure class="ms-wp-lb">'+specPhoto(s)+'<figcaption><b>'+esc(s.name)+'</b> · '+esc(placeOf(s.p).name)+'<br>'+esc(s.cap)+'<br><small>'+esc(s.credit)+'</small></figcaption></figure>'); }; });
    }
    function choose(pk, from){
      if (S.ph !== 3 || S.i >= SP.length) return;
      var s = SP[S.i], fb = $('.ms-exfb', act);
      if (pk !== s.p) { SFX.miss(); var b = $('.ms-wp-pick[data-k="'+pk+'"]', act); if (b) { b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); } if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 '+esc(s.hint)+'</div>'; return; }
      var pan = $('.ms-wp-pan[data-k="'+pk+'"]', m), slot = $$('.ms-wp-slot', pan).filter(function(x){ return !x.classList.contains('full'); })[0] || pan;
      $$('button', act).forEach(function(x){ x.disabled = true; });
      var wr = wall.getBoundingClientRect(); if (wr.top < 60 || wr.bottom > innerHeight) wall.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'});
      setTimeout(function(){ fly(from || $('.ms-wp-photo', act), slot, specPhoto(s), 650).then(function(){ SFX.stamp(); S.i++; save(); render(); if (S.i >= SP.length) { SFX.fanfare(); markDone('scene'); } }); }, calm() ? 0 : 320);
    }
    function render(){
      paint();
      if (S.ph === 1) {
        act.innerHTML = stepCard(1, 3, cfg.s1T || 'Walk the gallery', '<p>'+(cfg.s1||'')+'</p><button type="button" class="ms-btn big ms-wp-go">🚶 '+esc(cfg.s1b||'Walk to the empty wall')+' ➡️</button>');
        $('.ms-wp-go', act).onclick = function(){ SFX.click(); S.ph = 2; save(); render(); m.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      if (S.ph === 2) {
        var left = P.filter(function(p){ return !S.u[p.k]; }).length;
        act.innerHTML = stepCard(2, 3, cfg.s2T || 'Unveil the panels', '<p>'+(cfg.s2||'')+'</p><div class="ms-wp-picks">'+P.map(function(p){ return '<button type="button" class="ms-btn'+(S.u[p.k]?' alt':'')+' ms-wp-un" data-k="'+p.k+'"'+(S.u[p.k]?' disabled':'')+'>'+(S.u[p.k]?'✓ ':'🎭 ')+esc(p.name)+'</button>'; }).join('')+'</div>' +
          (left ? '' : '<button type="button" class="ms-btn big ms-wp-go">'+esc(cfg.s2b||'Open the crate')+' ➡️</button>'));
        $$('.ms-wp-un', act).forEach(function(b){ b.onclick = function(){ unveil(b.dataset.k); }; });
        var g = $('.ms-wp-go', act); if (g) g.onclick = function(){ SFX.creak(); S.ph = 3; save(); render(); };
        return; }
      if (S.i >= SP.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      var s = SP[S.i];
      act.innerHTML = stepCard(3, 3, (cfg.s3T || 'Hang the specimens')+' · '+(S.i+1)+' of '+SP.length,
        '<div class="ms-wp-spec"><figure><span class="ms-wp-photo" title="Drag me to a panel">'+specPhoto(s)+'</span><figcaption>'+esc(s.capq||s.cap)+'</figcaption></figure><div class="ms-wp-txt"><b>'+esc(s.name)+'</b><p>'+esc(s.card)+'</p></div></div>' +
        '<p class="ms-wm-do">👆 '+esc(cfg.s3||'Which panel does this specimen belong on?')+'</p><div class="ms-wp-picks">'+rot(P, S.i).map(function(p){ return '<button type="button" class="ms-btn alt ms-wp-pick" data-k="'+p.k+'">'+p.icon+' '+esc(p.name)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div><p class="ms-credit">'+esc(s.credit)+'</p>');
      $$('.ms-wp-pick', act).forEach(function(b){ b.onclick = function(){ choose(b.dataset.k); }; });
      var ph = $('.ms-wp-photo', act);
      dragger(ph, function(moved, t){ if (moved && t) choose(t.dataset.k, t); }, '.ms-wp-pan');
    }
    function unveil(k){ if (S.u[k]) return; var pan = $('.ms-wp-pan[data-k="'+k+'"]', m); SFX.glass(); pan.classList.add('lift'); setTimeout(function(){ pan.classList.remove('lift'); S.u[k] = 1; save(); render(); }, calm() ? 0 : 520); }
    $$('.ms-wp-pan', m).forEach(function(pan){ function go(){ if (S.ph === 2) unveil(pan.dataset.k); else if (S.ph === 3) choose(pan.dataset.k, pan); }
      pan.addEventListener('click', go); pan.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    render();
  }

  /* ══ MODULE: threads (Gallery main attraction · follow the threads) ══ */
  function threadPath(a, b){ var mx = (a[0]+b[0])/2, my = (a[1]+b[1])/2, dx = b[0]-a[0], dy = b[1]-a[1], L = Math.sqrt(dx*dx+dy*dy)||1, k = Math.min(120, L*.35);
    return 'M'+a[0]+' '+a[1]+' Q'+(mx - dy/L*k).toFixed(1)+' '+(my + dx/L*k).toFixed(1)+' '+b[0]+' '+b[1]; }
  function placeLabels(M){ return (DATA.places||[]).map(function(p){ var q = (M.lab||{})[p.k] || M.pts[p.k]; return q ? '<text class="ms-th-pl" x="'+q[0]+'" y="'+q[1]+'">'+esc(p.name)+'</text>' : ''; }).join(''); }
  function modThreads(cfg){
    var M = DATA.map, anchor = cfg.anchorIdx != null ? $$(cfg.anchor)[cfg.anchorIdx] : $(cfg.anchor); if (!M || !anchor) return;
    var T = cfg.trav || [], C = M.cities || {};
    ST.th = ST.th || {i:0, ph:0, q:false}; var S = ST.th;
    var m = shell('ms-th-mod', cfg);
    var svg = mapSVG(M, {cls:'ms-th-svg', hits:true, compass:false, names:false, label:'Map of Canada, the United States, Mexico, and the Caribbean'});
    m.insertAdjacentHTML('beforeend', '<div class="ms-th-wrap"><div class="ms-th-map">'+svg.replace(/<\/svg>$/, placeLabels(M)+'<g class="ms-th-lines"></g><g class="ms-th-dots"></g></svg>')+'</div><div class="ms-th-act"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-th-act', m), lines = $('.ms-th-lines', m), dots = $('.ms-th-dots', m);
    if (M.thview) $('.ms-th-svg', m).setAttribute('viewBox', M.thview.join(' '));
    function draw(fresh){
      var hl = '', dl = '';
      T.forEach(function(t, i){ var done = i < S.i || (i === S.i && S.ph === 2), cur = i === S.i && !S.q;
        if (!done && !(cur && S.ph >= 1)) return; var a = C[t.start];
        if (done) t.to.forEach(function(d){ var b = C[d.c]; hl += '<path class="ms-th-line'+(cur?' cur':'')+(fresh && cur?' new':'')+'" d="'+threadPath(a,b)+'"/>';
          if (cur) dl += '<g class="ms-th-dest" transform="translate('+b[0]+' '+b[1]+')"><circle r="9"/><text '+(b[0] > 760 ? 'x="-12" text-anchor="end"' : 'x="12"')+' y="-12">'+esc(d.t)+'</text></g>'; });
        dl += '<g class="ms-th-start'+(cur?' cur':'')+'" transform="translate('+a[0]+' '+a[1]+')"><circle r="'+(cur?13:8)+'"/>'+(cur?'<text y="-18">'+esc(t.name)+'</text>':'')+'</g>'; });
      lines.innerHTML = hl; dots.innerHTML = dl;
    }
    function tapPlace(k){
      if (S.q || S.i >= T.length || S.ph !== 0) return; var t = T[S.i], fb = $('.ms-exfb', act);
      if (k === t.from) { SFX.chime(); S.ph = 1; save(); render(); }
      else { SFX.miss(); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 That is '+esc(placeOf(k).name)+'. Read the card again: where did '+esc(t.name.toLowerCase())+' start?</div>'; }
    }
    $$('.pl, .hit', m).forEach(function(p){ p.addEventListener('click', function(){ tapPlace(p.dataset.k); }); });
    function render(fresh){
      draw(fresh); m.classList.toggle('pick', !S.q && S.i < T.length && S.ph === 0);
      var n = T.length + 1;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.i >= T.length) {
        var q = choiceQ(cfg.q, 2, function(){ S.q = true; save(); ST.gal = ST.gal||{}; ST.gal.threads = 1; save(); galleryCheck(); setTimeout(function(){ render(); }, calm()?0:1600); });
        act.innerHTML = stepCard(n, n, cfg.q.title, q.html); q.bind(act); return; }
      var t = T[S.i], s = specOf(t.spec);
      var head = '<div class="ms-th-card">'+(s ? specPhoto(s, 'ms-th-ph') : '')+'<p>'+esc(t.card)+'</p></div>';
      if (S.ph === 0) { act.innerHTML = stepCard(S.i+1, n, t.name, head+'<p class="ms-wm-do">👆 '+esc((cfg.askT||'Where did {name} start? Tap that place on the map.').replace('{name}', t.name.toLowerCase()))+'</p><div class="ms-exfb" aria-live="polite"></div>'); return; }
      if (S.ph === 1) { act.innerHTML = stepCard(S.i+1, n, t.name, head+'<div class="ms-vd-thanks">✅ '+esc(placeOf(t.from).name)+'!</div><button type="button" class="ms-btn big ms-th-go">🧵 '+esc(cfg.goT||'Send it traveling')+'</button>');
        $('.ms-th-go', act).onclick = function(){ SFX.whir(); S.ph = 2; save(); render(true); }; return; }
      act.innerHTML = stepCard(S.i+1, n, t.name, '<ul class="ms-th-went">'+t.to.map(function(d){ return '<li>🧵 '+esc(d.line)+'</li>'; }).join('')+'</ul><button type="button" class="ms-btn big ms-th-next">'+(S.i+1 < T.length ? esc(cfg.nextT||'Next thread')+' ➡️' : esc(cfg.lastT||'All threads done')+' ✓')+'</button>');
      $('.ms-th-next', act).onclick = function(){ SFX.click(); S.i++; S.ph = 0; save(); render(); };
    }
    render();
  }

  /* ══ MODULE: langmap (Gallery source room · a map of languages) ══ */
  function modLangmap(cfg){
    var M = DATA.map, src = $(cfg.anchor || '#panel-explore .source-card'); if (!M || !src || !M.lang) return;
    var LG = cfg.langs || [], col = {}; LG.forEach(function(l){ col[l.k] = l.c; });
    ST.lm = ST.lm || {on:{}, step:1}; var S = ST.lm;
    var m = shell('ms-lm-mod', cfg);
    var svg = mapSVG(M, {cls:'ms-lm-svg', names:false, label:'A map of North America and the Caribbean, colored by the language most people speak'});
    svg = svg.replace('<rect class="sea"', '<rect class="sea" x="-600" y="-600" width="2200" height="2200"/><rect class="sea"');
    var layer = '<g class="ms-lm-ls">'+LG.map(function(l){ return '<path class="ms-lm-p" data-l="'+l.k+'" d="'+M.lang[l.k]+'" fill="'+l.c+'"/>'; }).join('')+'</g>' +
      '<text class="ms-lm-qc" x="'+M.qc[0]+'" y="'+M.qc[1]+'">Quebec</text>' + placeLabels(M).replace(/ms-th-pl/g, 'ms-th-pl ms-lm-pl') +
      '<g class="ms-lm-isl">'+(M.islands||[]).map(function(t){ var tx = t.a === 'end' ? 'x="-4" y="-3" text-anchor="end"' : t.a === 'below' ? 'x="0" y="11" text-anchor="middle"' : 'x="4" y="-3"'; return '<g transform="translate('+t.p[0]+' '+t.p[1]+')"><circle r="2.6" fill="'+(col[t.l]||'#999')+'" stroke="#0E1C42" stroke-width=".6"/><text '+tx+'>'+esc(t.t)+'</text></g>'; }).join('')+'</g>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-lm-wrap"><div class="ms-lm-left"><div class="ms-lm-map">'+svg.replace(/<\/svg>$/, layer+'</svg>')+'<span class="ms-phtag">'+esc(cfg.tag||'')+'</span></div><div class="ms-lm-key"></div></div><div class="ms-lm-act"></div></div>');
    src.parentNode.insertBefore(m, src);
    var act = $('.ms-lm-act', m), sv = $('.ms-lm-svg', m), key = $('.ms-lm-key', m), FULL = [0, 0, M.W, M.H], Z = M.zoom, cur = (S.step === 3) ? Z.slice() : FULL.slice(), anim = null;
    sv.setAttribute('viewBox', cur.join(' '));
    function zoomTo(box){ cancelAnimationFrame(anim); var from = cur.slice(), t0 = performance.now(), dur = calm() ? 0 : 900;
      sv.classList.toggle('zoomed', box === Z);
      (function f(now){ var k = dur ? Math.min(1, (now - t0)/dur) : 1, e = k<.5 ? 2*k*k : 1 - Math.pow(-2*k+2, 2)/2;
        cur = from.map(function(v,i){ return v + (box[i]-v)*e; }); sv.setAttribute('viewBox', cur.map(function(v){ return v.toFixed(1); }).join(' ')); if (k < 1) anim = requestAnimationFrame(f); })(t0); }
    function paint(){ $$('.ms-lm-p', m).forEach(function(p){ p.classList.toggle('on', !!S.on[p.dataset.l]); });
      m.classList.toggle('fr-on', !!S.on.fr);
      key.innerHTML = LG.map(function(l){ return '<span class="ms-lm-chip'+(S.on[l.k]?' on':'')+'"><i style="background:'+l.c+'"></i>'+esc(l.t)+'</span>'; }).join(''); }
    function render(){
      paint(); sv.classList.toggle('zoomed', S.step === 3);
      if (S.step === 1) {
        var all = LG.every(function(l){ return S.on[l.k]; });
        act.innerHTML = stepCard(1, 4, cfg.s1T || 'Turn on the colors', '<p>'+(cfg.s1||'')+'</p><div class="ms-lm-btns">'+LG.map(function(l){ return '<button type="button" class="ms-btn'+(S.on[l.k]?'':' alt')+' ms-lm-b" data-l="'+l.k+'" aria-pressed="'+!!S.on[l.k]+'"><i style="background:'+l.c+'"></i>'+esc(l.t)+'</button>'; }).join('')+'</div>' +
          (all ? '<button type="button" class="ms-btn big ms-lm-next">'+esc(cfg.nextT||'Next')+' ➡️</button>' : ''));
        $$('.ms-lm-b', act).forEach(function(b){ b.onclick = function(){ S.on[b.dataset.l] = 1; SFX.pop(); save(); render(); }; });
        var nx = $('.ms-lm-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.step = 2; save(); render(); };
        return; }
      var Q = {2: cfg.q1, 3: cfg.q2, 4: cfg.q3}[S.step];
      if (!Q) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var q = choiceQ(Q, S.step, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-lm-next'; b.textContent = (S.step === 2 ? (cfg.zoomT||'Zoom in on the islands')+' 🔍' : S.step === 3 ? (cfg.backT||'Zoom back out')+' ↩️' : (cfg.doneT||'Done with the map')+' ✓'); $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); S.step++; save(); if (S.step === 3) zoomTo(Z); if (S.step === 4) zoomTo(FULL); if (S.step > 4) { ST.gal = ST.gal||{}; ST.gal.map = 1; save(); galleryCheck(); SFX.fanfare(); } render(); }; });
      act.innerHTML = stepCard(S.step, 4, Q.title, q.html); q.bind(act);
    }
    render();
  }

  /* ══ MODULE: compare2 (Exhibit Floor · your comparison panel → the gallery lights up) ══ */
  var PLACE_RE = {canada:'canad', usa:'united states|u\\.\\s?s\\b|america', mexico:'mexic', caribbean:'caribbean|island|jamaica|cuba|haiti|puerto|bahamas|trinidad|dominican'};
  function modCompare2(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var P = DATA.places || [], F = cfg.facts || {}, LK = cfg.links || [], NEED = cfg.sentences || 4;
    var rooms = ((DATA.modules||[]).filter(function(x){ return x.type === 'wallpanels'; })[0] || {}).rooms || [];
    ST.cp = ST.cp || {a:[], f:{}, link:null, step:1, open:false}; var S = ST.cp;
    var m = shell('ms-cp-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-cp-act"></div><div class="ms-cp-show" hidden><div class="ms-cp-wallbg"><div class="ms-cp-panel"><div class="ms-cp-cols"></div><div class="ms-cp-tx"></div><div class="ms-cp-by"></div><span class="ms-draft">DRAFT</span></div></div><div class="ms-cp-gal"></div></div><div class="ms-cp-end"></div>');
    var home = document.createComment('cp-home'); ta.parentNode.insertBefore(home, ta);
    var host = ta.closest('.activity') || ta.parentNode; host.parentNode.insertBefore(m, host.nextSibling); host.classList.add('ms-hide-on');
    var act = $('.ms-cp-act', m), show = $('.ms-cp-show', m), end = $('.ms-cp-end', m), gal = $('.ms-cp-gal', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function nm(k){ return placeOf(k).name === 'United States' ? 'the United States' : placeOf(k).name === 'Caribbean' ? 'the Caribbean' : placeOf(k).name; }
    function links(){ return LK.filter(function(l){ return l.pairs === 'all' || (S.a.indexOf(l.pairs[0]) >= 0 && S.a.indexOf(l.pairs[1]) >= 0); }); }
    function sentences(t){ return t.split(/[.!?]+/).filter(function(x){ return (x.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function checks(){ var v = ta.value; return [
      {t:nm(S.a[0]||''), ok:new RegExp(PLACE_RE[S.a[0]]||'^$','i').test(v)}, {t:nm(S.a[1]||''), ok:new RegExp(PLACE_RE[S.a[1]]||'^$','i').test(v)},
      {t:'a difference', ok:/\b(but|different|differ|difference|while|unlike|instead|only)\b/i.test(v)},
      {t:'a connection', ok:/\b(both|share|shares|connect|connects|connected|travel|travels|same|link|links)\b/i.test(v)}]; }
    function missing(){ var miss = [], n = sentences(ta.value); if (n < NEED) miss.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+'.');
      var need = checks().filter(function(x){ return !x.ok; }).map(function(x){ return x.t; }); if (need.length) miss.push('Your panel still needs: '+need.join(' · ')+'.'); return miss; }
    function view(){
      $('.ms-cp-cols', show).innerHTML = S.a.map(function(k){ var p = placeOf(k); return '<div class="ms-cp-col"><span>'+p.icon+'</span><b>'+esc(p.name)+'</b><i>'+esc(S.f[k]||'')+'</i></div>'; }).join('<div class="ms-cp-thread" aria-hidden="true"></div>');
      var v = ta.value.trim(); $('.ms-cp-tx', show).textContent = v || 'Your panel text will appear here as you write.'; $('.ms-cp-tx', show).classList.toggle('empty', !v);
      $('.ms-cp-by', show).textContent = '— ' + (sget(NAMEK,'') || 'Junior Curator') + ', Regional Curator';
      show.classList.toggle('open', !!S.open);
      gal.innerHTML = S.open ? '<div class="ms-cp-rooms">'+rooms.map(function(r,i){ return '<span class="ms-cp-room" style="--d:'+(i*.28)+'s"><i>'+r.icon+'</i>'+esc(r.t)+'</span>'; }).join('')+'</div><div class="ms-cp-badge"><svg viewBox="0 0 120 150" aria-hidden="true"><path d="M38 0 h18 l10 52 h-18z" fill="#2D4C8C"/><path d="M64 0 h18 l-10 52 h-18z" fill="#C0392B"/><circle cx="60" cy="96" r="44" fill="#E9C878" stroke="#8A6410" stroke-width="5"/><circle cx="60" cy="96" r="33" fill="none" stroke="#B8892E" stroke-width="2"/><path d="M60 72 l7 15 l16 2 l-12 11 l3 16 l-14 -8 l-14 8 l3 -16 l-12 -11 l16 -2z" fill="#FFF6CF" stroke="#8A6410" stroke-width="2"/></svg><b>'+esc(cfg.badgeT||'Regional Observer')+'</b></div>' : '';
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 4; ta.classList.toggle('ms-gi-away', S.step !== 4);
      if (S.step === 1 || S.a.length < 2) { S.step = 1; goHome();
        act.innerHTML = stepCard(1, 5, cfg.s1T, '<p>'+(cfg.s1||'')+'</p><div class="ms-cp-places">'+P.map(function(p){ var on = S.a.indexOf(p.k) >= 0; return '<button type="button" class="ms-btn'+(on?'':' alt')+' ms-cp-pl" data-k="'+p.k+'" aria-pressed="'+on+'">'+p.icon+' '+esc(p.name)+'</button>'; }).join('')+'</div>' +
          '<button type="button" class="ms-btn big ms-cp-next'+(S.a.length===2?'':' ms-notready')+'">'+esc(cfg.next1T||'Next: one thing from each')+' ➡️</button><div class="ms-gi-fb" aria-live="polite"></div>');
        $$('.ms-cp-pl', act).forEach(function(b){ b.onclick = function(){ var k = b.dataset.k, i = S.a.indexOf(k); if (i >= 0) S.a.splice(i,1); else { S.a.push(k); if (S.a.length > 2) S.a.shift(); } S.f = {}; S.link = null; SFX.click(); save(); render(); }; });
        $('.ms-cp-next', act).onclick = function(){ if (S.a.length < 2) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Tap '+(2-S.a.length)+' more place'+(S.a.length===1?'':'s')+'.</div>'; return; } SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) { goHome();
        act.innerHTML = stepCard(2, 5, cfg.s2T, '<p>'+(cfg.s2||'')+'</p>'+S.a.map(function(k){ var p = placeOf(k); return '<div class="ms-cp-row"><b>'+p.icon+' '+esc(p.name)+'</b><div class="ms-cp-chips">'+(F[k]||[]).map(function(f){ return '<button type="button" class="ms-chipbtn'+(S.f[k]===f?' on':'')+'" data-k="'+k+'" data-f="'+esc(f)+'" aria-pressed="'+(S.f[k]===f)+'">'+esc(f)+'</button>'; }).join('')+'</div></div>'; }).join('') +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-cp-back">↩️ '+esc(cfg.back1T||'Pick different places')+'</button><button type="button" class="ms-btn big ms-cp-next'+(S.a.every(function(k){ return S.f[k]; })?'':' ms-notready')+'">'+esc(cfg.next2T||'Next: what connects them')+' ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $$('.ms-chipbtn', act).forEach(function(b){ b.onclick = function(){ S.f[b.dataset.k] = b.dataset.f; SFX.click(); save(); render(); }; });
        $('.ms-cp-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-cp-next', act).onclick = function(){ var miss = S.a.filter(function(k){ return !S.f[k]; }); if (miss.length) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Pick one thing for '+esc(nm(miss[0]))+'.</div>'; return; } SFX.chime(); S.step = 3; save(); render(); };
        return; }
      if (S.step === 3) { goHome(); var L = links();
        act.innerHTML = stepCard(3, 5, cfg.s3T, '<p>'+(cfg.s3||'')+'</p><div class="ms-cp-chips col">'+L.map(function(l){ return '<button type="button" class="ms-chipbtn'+(S.link===l.t?' on':'')+'" data-t="'+esc(l.t)+'" aria-pressed="'+(S.link===l.t)+'">🧵 '+esc(l.t)+'</button>'; }).join('')+'</div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-cp-back">↩️ '+esc(cfg.back2T||'Back')+'</button><button type="button" class="ms-btn big ms-cp-next'+(S.link?'':' ms-notready')+'">'+esc(cfg.next3T||'Next: write your panel')+' ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $$('.ms-chipbtn', act).forEach(function(b){ b.onclick = function(){ S.link = b.dataset.t; SFX.click(); save(); render(); }; });
        $('.ms-cp-back', act).onclick = function(){ S.step = 2; save(); render(); };
        $('.ms-cp-next', act).onclick = function(){ if (!S.link) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Tap one thing that connects them.</div>'; return; } SFX.chime(); S.step = 4; save(); render(); };
        return; }
      view();
      if (S.step === 4) {
        var A = nm(S.a[0]), B = nm(S.a[1]);
        act.innerHTML = stepCard(4, 5, cfg.s4T, '<p>'+(cfg.s4||'')+'</p><div class="ms-cp-notes"><span>📌 '+esc(placeOf(S.a[0]).name)+': '+esc(S.f[S.a[0]])+'</span><span>📌 '+esc(placeOf(S.a[1]).name)+': '+esc(S.f[S.a[1]])+'</span><span>🧵 '+esc(S.link)+'</span></div>' +
          '<div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t.replace('{A}', A).replace('{B}', B))+'</button>'; }).join('')+'</div>' +
          '<div class="ms-gi-box"></div><div class="ms-excheck ms-cp-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-cp-back">↩️ '+esc(cfg.back3T||'Change the connection')+'</button><button type="button" class="ms-btn big ms-cp-next">'+esc(cfg.next4T||'Next: see it on the wall')+' ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-cp-chk', act), fb = $('.ms-gi-fb', act);
        function upd(){ var n = sentences(ta.value), miss = missing();
          chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences</span>' + checks().map(function(x){ return '<span class="ms-chip'+(x.ok?' ok':'')+'">'+(x.ok?'✓ ':'')+esc(x.t)+'</span>'; }).join('');
          $('.ms-cp-next', act).classList.toggle('ms-notready', !!miss.length); view();
          if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; }
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b,i){ b.onclick = function(){ var t = (cfg.starters||[])[i].replace('{A}', A).replace('{B}', B); ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-cp-back', act).onclick = function(){ S.step = 3; save(); render(); };
        $('.ms-cp-next', act).onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
          SFX.click(); S.step = 5; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(5, 5, cfg.s5T, '<p>'+(cfg.s5||'')+'</p><button type="button" class="ms-btn big ms-cp-open">🎉 '+esc(cfg.openT||'Install my panel')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-cp-edit">✏️ '+esc(cfg.editT||'Edit my panel')+'</button></div>';
      var ob = $('.ms-cp-open', end); if (ob) ob.onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); setTimeout(function(){ show.classList.remove('opening'); }, 3200); optiNod('assignment'); check(); };
      $('.ms-cp-edit', end).onclick = function(){ S.open = false; S.step = 4; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 4) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.07.01 (The Five Regions · Unit 7 opener, United States Regions Gallery) ══════════
     DATA.regions = the five regions [{k,name,icon,c,where,line,states,facts}]; DATA.geo = the U.S. map we made
     (Natural Earth states, Albers, Alaska and Hawaii in boxes); DATA.marks = ten landmark photos.
     - findstate   Lobby: tap the state you live in → its region lights up → light up all five alcoves
     - lighttable  Gallery main attraction: lay four see-through sheets (land, weather, resources, people),
                   one question each, then draw the region lines; one question about Texas
     - landmarks   Gallery: ten real landmark photos, one at a time, into the five alcoves (drag or tap)
     - nightmap    Gallery source room: NASA's night picture of the U.S.; three questions with circles
     - directory   Exhibit Floor: finish "A region is a group of ___ that share the same ___", pick a region,
                   write a sentence in the step, open the gallery (all five alcoves light, the next door opens a crack) */
  function regOf(k){ var R = DATA.regions || []; for (var i=0;i<R.length;i++) if (R[i].k === k) return R[i]; return {k:k, name:k, icon:'', states:[], facts:[]}; }
  function regOfState(s){ var R = DATA.regions || []; for (var i=0;i<R.length;i++) if (R[i].states.indexOf(s) >= 0) return R[i]; return null; }
  function rcol(){ return (DATA.regions||[]).map(function(r){ return '--rc-'+r.k+':'+r.c; }).join(';'); }
  function usSVG(cls, label, extra, opt){
    var G = DATA.geo; opt = opt || {}; if (!G) return '';
    var st = Object.keys(G.states).map(function(n){ var s = G.states[n]; return '<path class="st" data-s="'+esc(n)+'" data-r="'+s.r+'" d="'+s.d+'"><title>'+esc(n)+'</title></path>'; }).join('');
    var ak = G.inset.ak, hi = G.inset.hi;
    return '<svg class="ms-us '+(cls||'')+'" viewBox="'+(opt.vb || ('0 0 '+G.W+' '+G.H))+'" style="'+rcol()+'" role="img" aria-label="'+esc(label||'Map of the United States')+'">' +
      '<rect class="sea" x="-200" y="-200" width="'+(G.W+400)+'" height="'+(G.H+400)+'"/><path class="nb" d="'+G.nb+'"/>' +
      '<rect class="inset" x="'+(ak[0]-10)+'" y="'+(ak[1]-10)+'" width="'+(ak[2]-ak[0]+20)+'" height="'+(ak[3]-ak[1]+18)+'" rx="6"/><rect class="inset" x="'+(hi[0]-10)+'" y="'+(hi[1]-14)+'" width="'+(hi[2]-hi[0]+20)+'" height="'+(hi[3]-hi[1]+20)+'" rx="6"/>' +
      (opt.under || '') + '<g class="sts">'+st+'</g><path class="lakes" d="'+G.lakes+'"/>' +
      (opt.insetNames === false ? '' : '<text class="inl" x="'+(ak[0]-4)+'" y="'+(ak[3]+2)+'">Alaska</text><text class="inl" x="'+(hi[0]-4)+'" y="'+(hi[3]+2)+'">Hawaii</text>') +
      (extra || '') + '</svg>';
  }
  function alcoves(cls, slots){
    return '<div class="ms-alc-row '+(cls||'')+'" style="'+rcol()+'">'+(DATA.regions||[]).map(function(r, i){
      return '<div class="ms-alc" data-r="'+r.k+'" role="button" tabindex="0" aria-label="The '+esc(r.name)+' alcove"><div class="ms-alc-arch"><span class="ms-alc-glow"></span>' +
        (slots ? '<div class="ms-alc-slots"><span class="ms-alc-slot"></span><span class="ms-alc-slot"></span></div>' : '<span class="ms-alc-ic">'+r.icon+'</span>') +
        '</div><div class="ms-alc-sign"><b>'+esc(r.name)+'</b></div></div>'; }).join('')+'</div>';
  }
  function lightAlcoves(row, which, stagger){ $$('.ms-alc', row).forEach(function(a, i){ var on = which === 'all' || which.indexOf(a.dataset.r) >= 0;
    a.style.setProperty('--d', (stagger && !calm() ? i*.32 : 0)+'s'); a.classList.toggle('lit', on); }); }

  /* ══ MODULE: findstate (Lobby · find your state → its region → five alcoves) ══ */
  function modFindstate(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor || !DATA.geo) return;
    ST.fs = ST.fs || {s:null, step:1}; var S = ST.fs;
    var m = shell('ms-fs-mod', cfg);
    m.insertAdjacentHTML('beforeend', alcoves('ms-fs-alc') + '<div class="ms-fs-wrap"><div class="ms-fs-map">'+usSVG('ms-fs-svg', 'Map of the United States with all 50 states. Tap the state where you live.')+'</div><div class="ms-fs-act"></div></div>');
    after(anchor, m);
    var act = $('.ms-fs-act', m), svg = $('.ms-fs-svg', m), row = $('.ms-fs-alc', m);
    var names = Object.keys(DATA.geo.states).sort();
    function pick(n){ if (S.step !== 1) return; S.s = n; SFX.pop(); save(); render(); }
    $$('.st', svg).forEach(function(p){ p.addEventListener('click', function(){ pick(p.dataset.s); }); });
    function paint(){ var me = S.s && regOfState(S.s);
      $$('.st', svg).forEach(function(p){ var r = p.dataset.r;
        p.classList.toggle('me', p.dataset.s === S.s);
        p.classList.toggle('lit', S.step >= 3 || (S.step === 2 && me && r === me.k));
        p.classList.toggle('dim', S.step === 2 && me && r !== me.k); });
      svg.classList.toggle('pick', S.step === 1);
      lightAlcoves(row, S.step >= 3 ? 'all' : (S.step === 2 && me ? [me.k] : []), false); }
    function render(){
      paint(); var me = S.s && regOfState(S.s);
      if (S.step === 1) {
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p class="ms-wm-do">👆 '+esc(cfg.s1)+'</p>' +
          (S.s ? '<div class="ms-vd-thanks">📍 You picked <b>'+esc(S.s)+'</b>.</div><button type="button" class="ms-btn big ms-fs-go">'+esc(cfg.s1b||'See its region')+' ➡️</button>' : '') +
          '<label class="ms-fs-pickl">'+esc(cfg.pickL||'Or pick your state from a list:')+' <select class="ms-fs-sel"><option value="">Choose…</option>'+names.map(function(n){ return '<option'+(n===S.s?' selected':'')+'>'+esc(n)+'</option>'; }).join('')+'</select></label>');
        $('.ms-fs-sel', act).onchange = function(e){ if (e.target.value) pick(e.target.value); };
        var g = $('.ms-fs-go', act); if (g) g.onclick = function(){ SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) {
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p>'+cfg.s2.replace(/\{state\}/g, '<b>'+esc(S.s)+'</b>').replace(/\{region\}/g, esc(me.name)).replace('{n}', me.states.length)+'</p>' +
          '<div class="ms-fs-chips" style="--rc:'+me.c+'">'+me.states.map(function(n){ return '<span class="'+(n===S.s?'me':'')+'">'+esc(n)+'</span>'; }).join('')+'</div>' +
          '<p class="ms-fs-note">💡 '+esc(cfg.s2note||'')+'</p>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-fs-back">↩️ Pick a different state</button><button type="button" class="ms-btn big ms-fs-go">✨ '+esc(cfg.s2b||'Light up all five regions')+'</button></div>');
        $('.ms-fs-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-fs-go', act).onclick = function(){ row.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); SFX.fanfare(); S.step = 3; save(); render(); lightAlcoves(row, 'all', true); markDone('scene'); };
        return; }
      act.innerHTML = stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><ul class="ms-fs-list" style="'+rcol()+'">'+(DATA.regions||[]).map(function(r){ return '<li data-r="'+r.k+'"><b>'+r.icon+' '+esc(r.name)+'</b> · '+r.states.length+' states'+(me && me.k === r.k ? ' · <i>your region</i>' : '')+'</li>'; }).join('')+'</ul><div class="ms-win show">'+(cfg.doneT||'')+'</div>' +
        '<button type="button" class="ms-btn alt ms-fs-again">↩️ Start over</button>');
      $('.ms-fs-again', act).onclick = function(){ S.step = 1; save(); render(); };
    }
    render(); if (S.step >= 3) markDone('scene');
  }

  /* ══ MODULE: lighttable (Gallery main attraction) ══ */
  function modLighttable(cfg){
    var anchor = cfg.anchorIdx != null ? $$(cfg.anchor)[cfg.anchorIdx] : $(cfg.anchor); if (!anchor || !DATA.geo) return;
    var G = DATA.geo, SH = cfg.sheets || [], N = SH.length + 2;
    ST.lt = ST.lt || {i:0, ph:0, lines:0, tx:false}; var S = ST.lt;
    var m = shell('ms-lt-mod', cfg);
    function sheetSVG(s){
      var h = '<g class="ms-lt-sheet" data-k="'+s.k+'"><rect class="film" x="-6" y="-6" width="'+(G.W+12)+'" height="'+(G.H+12)+'" rx="10"/>';
      if (s.k === 'land') h += '<image href="'+img('land-3-07-01.png')+'" x="0" y="0" width="'+G.W+'" height="'+G.H48+'"/>';
      if (s.zones) h += '<g class="zones">'+s.zones.map(function(z){ var w = G.wx[z.k]; return '<path d="'+w.d+'" fill="'+z.c+'"/>'; }).join('')+'</g>' + s.zones.map(function(z){ var w = G.wx[z.k]; var q = z.lp || w.c; return '<text class="lab" x="'+q[0]+'" y="'+q[1]+'"'+(z.a?' style="text-anchor:'+z.a+'"':'')+'>'+esc(z.t)+'</text>'; }).join('');
      (s.labels||[]).forEach(function(l){ h += '<text class="lab" x="'+l.p[0]+'" y="'+l.p[1]+'">'+esc(l.t)+'</text>'; });
      (s.icons||[]).forEach(function(l){ h += '<g class="ico" transform="translate('+l.p[0]+' '+l.p[1]+')"><circle r="23"/><text class="em" y="10">'+l.i+'</text><text class="lab sm" y="'+(l.p[0] > 920 ? -32 : 46)+'"'+(l.p[0] > 920 ? ' x="12" style="text-anchor:end"' : '')+'>'+esc(l.t)+'</text></g>'; });
      (s.cities||[]).forEach(function(c){ h += '<g class="city" transform="translate('+c.p[0]+' '+c.p[1]+')"><circle r="8"/><text class="lab sm" x="'+(c.a==='end'?-11:11)+'" y="'+(-8+(c.dy||0))+'" style="text-anchor:'+(c.a||'start')+'">'+esc(c.t)+'</text></g>'; });
      (s.notes||[]).forEach(function(n){ h += '<text class="note" x="'+n.p[0]+'" y="'+n.p[1]+'"'+(n.a?' style="text-anchor:'+n.a+'"':'')+'>'+esc(n.t)+'</text>'; });
      h += '<text class="tab" x="'+(G.W-14)+'" y="30">'+s.icon+' '+esc(s.t)+' sheet</text></g>';
      return h;
    }
    var lines = '<g class="ms-lt-lines">'+(DATA.regions||[]).map(function(r){ var g = G.regs[r.k]; return '<path class="rl" data-r="'+r.k+'" d="'+g.d+'"/>'; }).join('') +
      (DATA.regions||[]).map(function(r){ var g = G.regs[r.k]; return '<text class="rn" data-r="'+r.k+'" x="'+g.c[0]+'" y="'+g.c[1]+'">'+esc(r.name)+'</text>'; }).join('')+'</g>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-lt-wrap"><div class="ms-lt-left"><div class="ms-lt-table">'+usSVG('ms-lt-svg', 'The light table: a map of the United States with see-through sheets', '<defs><filter id="ms-lt-blur" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="9"/></filter></defs><g class="ms-lt-sheets">'+SH.map(sheetSVG).join('')+'</g>'+lines, {insetNames:true})+'</div>' +
      '<div class="ms-lt-stack">'+SH.map(function(s, i){ return '<span class="ms-lt-chip" data-i="'+i+'">'+s.icon+' '+esc(s.t)+'</span>'; }).join('')+'</div></div><div class="ms-lt-act"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-lt-act', m), svg = $('.ms-lt-svg', m);
    function paint(fresh){
      $$('.ms-lt-sheet', svg).forEach(function(g, i){ var laid = i < S.i || (i === S.i && S.ph >= 1);
        g.classList.toggle('on', laid); g.classList.toggle('cur', laid && i === S.i && S.i < SH.length && !S.lines); g.classList.toggle('old', laid && (i < S.i || S.lines > 0)); g.classList.toggle('drop', !!fresh && i === S.i); });
      $$('.ms-lt-chip', m).forEach(function(c, i){ c.classList.toggle('used', i < S.i || (i === S.i && S.ph >= 1)); c.classList.toggle('next', i === S.i && S.ph === 0); });
      svg.classList.toggle('lines', S.lines > 0); svg.classList.toggle('drawn', S.lines > 0 && !fresh);
    }
    function lay(){ if (S.i >= SH.length || S.ph !== 0) return; SFX.glass(); S.ph = 1; save(); render(true); var t = $('.ms-lt-table', m).getBoundingClientRect(); if (t.top < 60 || t.bottom > innerHeight + 200) $('.ms-lt-table', m).scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function render(fresh){
      paint(fresh);
      if (S.tx) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.i < SH.length) {
        var s = SH[S.i];
        if (S.ph === 0) {
          act.innerHTML = stepCard(S.i+1, N, 'Sheet '+(S.i+1)+' of '+SH.length+' · '+s.t, '<div class="ms-lt-card" title="Drag me onto the table"><span>'+s.icon+'</span><b>'+esc(s.t)+' sheet</b></div><p>'+esc(s.what)+'</p><button type="button" class="ms-btn big ms-lt-lay">🗂️ '+esc((cfg.layT||'Lay down the {t} sheet').replace('{t}', s.t))+'</button>');
          $('.ms-lt-lay', act).onclick = lay;
          dragger($('.ms-lt-card', act), function(moved, t){ if (moved && t) lay(); }, '.ms-lt-table');
          return; }
        var q = choiceQ(s.q, S.i, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-lt-next';
          b.textContent = (S.i+1 < SH.length ? (cfg.nextT||'Next sheet')+' ➡️' : (cfg.linesT||'Draw the region lines')+' ➡️'); $('.ms-stepcard', act).appendChild(b);
          b.onclick = function(){ SFX.click(); S.i++; S.ph = 0; save(); render(); }; });
        act.innerHTML = stepCard(S.i+1, N, s.q.title, '<p class="ms-lt-what">'+s.icon+' '+esc(s.what)+'</p>'+q.html); q.bind(act); return; }
      if (!S.lines || S.lines === 1) {
        act.innerHTML = stepCard(N-1, N, cfg.linesT || 'Draw the region lines', '<p>'+esc(cfg.lines||'')+'</p>' + (S.lines ? '<div class="ms-vd-thanks">✏️ '+(cfg.linesDone||'')+'</div><button type="button" class="ms-btn big ms-lt-next">'+esc(cfg.linesNext||'One more question')+' ➡️</button>' : '<button type="button" class="ms-btn big ms-lt-draw">✏️ '+esc(cfg.linesB||'Draw the region lines')+'</button>'));
        var d = $('.ms-lt-draw', act); if (d) d.onclick = function(){ SFX.whir(); S.lines = 1; save(); render(true); setTimeout(function(){ SFX.fanfare(); }, calm()?0:1800); };
        var nx = $('.ms-lt-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.lines = 2; save(); render(); };
        return; }
      var tq = choiceQ(cfg.tx, 1, function(){ ST.gal = ST.gal||{}; ST.gal.light = 1; save(); galleryCheck(); setTimeout(function(){ S.tx = true; save(); render(); optiNod('explore'); }, calm()?0:1700); });
      act.innerHTML = stepCard(N, N, cfg.tx.title, '<p class="ms-lt-what">🔎 Find Texas on the map: the big state in the <b>Southwest</b>.</p>'+tq.html); tq.bind(act);
      svg.classList.add('tx');
    }
    render();
  }

  /* ══ MODULE: landmarks (Gallery · ten landmark photos into the five alcoves) ══ */
  function modLandmarks(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var MK = DATA.marks || [], R = DATA.regions || [];
    ST.lk = ST.lk || {i:0}; var S = ST.lk;
    var m = shell('ms-lk-mod', cfg);
    m.insertAdjacentHTML('beforeend', alcoves('ms-lk-alc', true) + '<div class="ms-lk-act"></div>');
    after(anchor, m);
    var act = $('.ms-lk-act', m), row = $('.ms-lk-alc', m);
    function photo(k, cls){ var mk = MK.filter(function(x){ return x.k === k; })[0]; return '<img class="'+(cls||'')+'" src="'+img(mk.img)+'" alt="'+esc(mk.cap)+'">'; }
    function paint(){ $$('.ms-alc', row).forEach(function(a){ var r = a.dataset.r, h = MK.slice(0, S.i).filter(function(x){ return x.r === r; });
      $$('.ms-alc-slot', a).forEach(function(sl, j){ var x = h[j]; sl.innerHTML = x ? '<button type="button" class="ms-lk-th" data-k="'+x.k+'" aria-label="Look closer: '+esc(x.name)+'">'+photo(x.k)+'</button>' : ''; sl.classList.toggle('full', !!x); });
      a.classList.toggle('lit', h.length >= 2); });
      $$('.ms-lk-th', m).forEach(function(b){ b.onclick = function(e){ e.stopPropagation(); var x = MK.filter(function(y){ return y.k === b.dataset.k; })[0];
        lightbox('<figure class="ms-wp-lb">'+photo(x.k)+'<figcaption><b>'+esc(x.name)+'</b> · '+esc(x.state)+' · '+esc(regOf(x.r).name)+'<br>'+esc(x.cap)+'<br><small>'+esc(x.credit)+'</small></figcaption></figure>'); }; }); }
    function choose(r, from){
      if (S.i >= MK.length) return; var x = MK[S.i], fb = $('.ms-exfb', act);
      if (r !== x.r) { SFX.miss(); var b = $('.ms-lk-pick[data-r="'+r+'"]', act); if (b) { b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); }
        if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 '+esc((cfg.hint||'').replace('{state}', x.state).replace('{where}', regOf(x.r).where))+'</div>'; return; }
      var al = $('.ms-alc[data-r="'+r+'"]', row), slot = $$('.ms-alc-slot', al).filter(function(z){ return !z.classList.contains('full'); })[0] || al;
      $$('button', act).forEach(function(z){ z.disabled = true; });
      var rr = row.getBoundingClientRect(); if (rr.top < 60 || rr.bottom > innerHeight) row.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'});
      setTimeout(function(){ fly(from || $('.ms-lk-photo', act), slot, photo(x.k), 650).then(function(){ SFX.stamp(); S.i++; save(); render(); if (S.i >= MK.length) { SFX.fanfare(); ST.gal = ST.gal||{}; ST.gal.land = 1; save(); galleryCheck(); } }); }, calm() ? 0 : 280);
    }
    $$('.ms-alc', row).forEach(function(a){ function go(){ choose(a.dataset.r, a); } a.addEventListener('click', go); a.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    function render(){
      paint();
      if (S.i >= MK.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      var x = MK[S.i];
      act.innerHTML = stepCard(S.i+1, MK.length, (cfg.s1T||'Which alcove?')+' · '+(S.i+1)+' of '+MK.length,
        '<div class="ms-lk-card"><figure><span class="ms-lk-photo" title="Drag me to an alcove">'+photo(x.k)+'</span><figcaption>'+esc(x.cap)+'</figcaption></figure>' +
        '<div class="ms-lk-txt"><span class="ms-lk-kind '+x.kind+'">'+(x.kind === 'natural' ? '🌿 Natural landmark' : '🏗️ Built landmark')+'</span><b>'+esc(x.name)+'</b><p>'+esc(x.card)+'</p>' +
        '<div class="ms-lk-mini">'+usSVG('ms-lk-svg', 'A small map with '+x.state+' lit up', '', {insetNames:false})+'<span>📍 '+esc(x.state)+'</span></div></div></div>' +
        '<p class="ms-wm-do">👆 '+esc((cfg.do||'').replace('{state}', x.state))+'</p><div class="ms-wp-picks ms-lk-picks" style="'+rcol()+'">'+rot(R, S.i).map(function(r){ return '<button type="button" class="ms-btn alt ms-lk-pick" data-r="'+r.k+'">'+r.icon+' '+esc(r.name)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div><p class="ms-credit">'+esc(x.credit)+'</p>');
      $$('.ms-lk-svg .st', act).forEach(function(p){ p.classList.toggle('me', p.dataset.s === x.state); });
      $$('.ms-lk-pick', act).forEach(function(b){ b.onclick = function(){ choose(b.dataset.r); }; });
      dragger($('.ms-lk-photo', act), function(moved, t){ if (moved && t) choose(t.dataset.r, t); }, '.ms-alc');
    }
    render();
  }

  /* ══ MODULE: nightmap (Gallery source room · the U.S. at night) ══ */
  function modNightmap(cfg){
    var src = $(cfg.anchor); if (!src) return;
    var Q = cfg.qs || [], RG = cfg.rings || {};
    var SK = cfg.stKey || 'nt'; ST[SK] = ST[SK] || {i:0, ok:false}; var S = ST[SK];
    var m = shell('ms-nt-mod', cfg);
    var rings = Object.keys(RG).map(function(k){ var r = RG[k]; return '<circle class="ring" data-k="'+k+'" cx="'+r[0]+'" cy="'+r[1]+'" r="'+r[2]+'"/>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-nt-wrap"><figure class="ms-nt-ph"><img src="'+img(cfg.img)+'" alt="'+(cfg.alt ? esc(cfg.alt) : 'A NASA picture of the United States at night. Bright city lights crowd the East, the Great Lakes, Florida, Texas and the Pacific coast. Much of the West is dark.')+'"><svg viewBox="'+(cfg.vb || '0 0 1200 800')+'" aria-hidden="true">'+rings+'</svg><span class="ms-phtag">'+esc(cfg.tag||'')+'</span></figure><div class="ms-nt-act"></div></div><p class="ms-credit">'+esc(cfg.credit||'')+'</p>');
    src.parentNode.insertBefore(m, src);
    var act = $('.ms-nt-act', m);
    function show(keys){ $$('.ring', m).forEach(function(c){ c.classList.toggle('on', keys.indexOf(c.dataset.k) >= 0); }); }
    function render(){
      if (S.i >= Q.length) { show([]); act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var q = Q[S.i]; show((q.ring||[]).concat(S.ok ? (q.after||[]) : []));
      var cq = choiceQ(q, S.i + 2, function(){ S.ok = true; save(); show((q.ring||[]).concat(q.after||[]));
        var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-nt-next'; b.textContent = S.i+1 < Q.length ? 'Next question ➡️' : 'Done with the picture ✓'; $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); S.i++; S.ok = false; save(); if (S.i >= Q.length) { ST.gal = ST.gal||{}; ST.gal[cfg.galKey || 'night'] = 1; save(); galleryCheck(); SFX.fanfare(); } render(); }; });
      act.innerHTML = stepCard(S.i+1, Q.length, q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: directory (Exhibit Floor · the gallery directory sign → open the gallery) ══ */
  function modDirectory(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var B = cfg.blanks || [], R = DATA.regions || [], OWN = cfg.ownMin || 10;
    ST.dir = ST.dir || {b:[], step:1, r:null, open:false}; var S = ST.dir;
    var m = shell('ms-dir-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-dir-act"></div><div class="ms-dir-show" hidden><div class="ms-dir-sign"><div class="ms-dir-h">United States Regions Gallery</div><div class="ms-dir-sub">Directory</div><p class="ms-dir-def"></p><ol class="ms-dir-list" style="'+rcol()+'"></ol><div class="ms-dir-by"></div><span class="ms-draft">DRAFT</span></div>' +
      alcoves('ms-dir-alc') + '<div class="ms-dir-door"><div class="ms-dir-leaf"></div><span>🚪 '+esc(cfg.doorT||'')+'</span></div></div><div class="ms-dir-end"></div>');
    var home = document.createComment('dir-home'); ta.parentNode.insertBefore(home, ta);
    ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-dir-act', m), show = $('.ms-dir-show', m), end = $('.ms-dir-end', m), row = $('.ms-dir-alc', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function def(upto){ var k = 0; return (cfg.lead||'').replace(/\{(\d)\}/g, function(_, i){ i = +i; return i < upto ? S.b[i] : '___'; }); }
    function full(){ return def(B.length); }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function own(){ return ta.value.replace(full(), '').trim(); }
    function missing(){ var miss = [];
      if (S.b.length < B.length) return ['Finish the sentence first.'];
      if (ta.value.indexOf(full()) < 0) miss.push('Your sentence about regions changed. Press ↩️ Put my sentence back.');
      if (!S.r) miss.push('Pick a region.');
      var n = words(own()); if (n < OWN) miss.push('Add '+(OWN-n)+' more word'+(OWN-n===1?'':'s')+' of your own.');
      if (S.r && !new RegExp(regOf(S.r).name, 'i').test(own())) miss.push('Name the '+regOf(S.r).name+' region in your sentence.');
      return miss; }
    function view(){
      $('.ms-dir-def', show).textContent = full();
      $('.ms-dir-list', show).innerHTML = R.map(function(r, i){ var mine = r.k === S.r; return '<li data-r="'+r.k+'" class="'+(mine?'mine':'')+'"><span class="n">'+(i+1)+'</span><b>'+r.icon+' '+esc(r.name)+'</b><i>'+esc(mine ? (own() || '…') : r.line)+'</i></li>'; }).join('');
      $('.ms-dir-by', show).textContent = '— ' + (sget(NAMEK,'') || 'Junior Curator') + ', United States Region Curator';
      show.classList.toggle('open', !!S.open); lightAlcoves(row, S.open ? 'all' : [], !!S.open);
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1 || S.b.length < B.length) { S.step = 1; goHome(); var k = S.b.length, bl = B[k];
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p class="ms-dir-sent">'+esc(def(k)).replace('___', '<b class="ms-gi-blank cur">?</b>').replace(/___/g, '<b class="ms-gi-blank">?</b>')+'</p>' +
          '<p class="ms-wm-do">👆 '+esc(cfg.s1||'')+'</p><div class="ms-pchoices col">'+bl.opts.map(function(o){ return '<button type="button" class="ms-btn ms-dir-o" data-o="'+esc(o)+'">'+esc(o)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div>');
        $$('.ms-dir-o', act).forEach(function(b){ b.onclick = function(){
          if (b.dataset.o === bl.ans) { SFX.chime(); S.b.push(bl.ans); save();
            if (S.b.length >= B.length) { var v = ta.value.trim(); if (v.indexOf(full()) < 0) { ta.value = full() + (v ? ' ' + v : ' '); ta.dispatchEvent(new Event('input',{bubbles:true})); } S.step = 2; save(); }
            render(); }
          else { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc(bl.hint||'')+'</div>'; } }; });
        return; }
      if (S.step === 2) { var rr = S.r && regOf(S.r);
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p class="ms-gi-ok">✅ '+esc(cfg.s2Got||'')+'</p><p>'+esc(cfg.s2||'')+'</p><div class="ms-dir-regs" style="'+rcol()+'">'+R.map(function(r){ return '<button type="button" class="ms-btn'+(r.k===S.r?'':' alt')+' ms-dir-r" data-r="'+r.k+'" aria-pressed="'+(r.k===S.r)+'">'+r.icon+' '+esc(r.name)+'</button>'; }).join('')+'</div>' +
          (rr ? '<p>'+esc(cfg.s2b||'')+'</p><div class="ms-cp-notes">'+rr.facts.map(function(f){ return '<span>📌 '+esc(f)+'</span>'; }).join('')+'</div><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t.replace('{R}', rr.name))+'</button>'; }).join('')+'</div>' : '') +
          '<div class="ms-gi-box"></div><div class="ms-excheck ms-dir-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-gi-back">↩️ Put my sentence back</button><button type="button" class="ms-btn big ms-dir-next">Next: see the sign ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta); ta.classList.toggle('ms-gi-away', !rr);
        var chk = $('.ms-dir-chk', act), fb = $('.ms-gi-fb', act), back = $('.ms-gi-back', act);
        function upd(){ var n = words(own()), miss = missing(); back.hidden = ta.value.indexOf(full()) >= 0;
          chk.innerHTML = '<span class="ms-wc'+(n>=OWN?' ok':'')+'">📝 '+Math.min(n,OWN)+' of '+OWN+' words of your own</span>' + (rr ? '<span class="ms-chip'+(new RegExp(rr.name,'i').test(own())?' ok':'')+'">'+(new RegExp(rr.name,'i').test(own())?'✓ ':'')+'names the '+esc(rr.name)+'</span>' : '');
          $('.ms-dir-next', act).classList.toggle('ms-notready', !!miss.length);
          if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; }
        curUpd = upd; upd();
        $$('.ms-dir-r', act).forEach(function(b){ b.onclick = function(){ S.r = b.dataset.r; SFX.click(); save(); render(); }; });
        $$('.ms-gi-start', act).forEach(function(b, i){ b.onclick = function(){ var t = (cfg.starters||[])[i].replace('{R}', rr.name); ta.value = ta.value.replace(/\s*$/,'') + ' ' + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        back.onclick = function(){ ta.value = full() + ' ' + own(); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); };
        $('.ms-dir-next', act).onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
          SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-dir-open">🎉 '+esc(cfg.openT||'Open the gallery')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) +
        '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-dir-edit">✏️ '+esc(cfg.editT||'Edit my sign')+'</button></div>';
      var ob = $('.ms-dir-open', end); if (ob) ob.onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); setTimeout(function(){ show.classList.remove('opening'); }, 3400); optiNod('assignment'); check(); };
      $('.ms-dir-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.07.02 (Northeast Region Study) ══════════
     DATA.items = the crate objects [{k,name,img,state,icon,tag,clue,shows,cap,credit}]; DATA.geo.neBox = the Northeast view of the U.S. map.
     - cratepin   Lobby: lift each object out of the ATLANTIC COAST crate, read its tag, tap its state on a Northeast map (a pin drops)
     - seasons    Gallery main attraction: the Four Seasons Window (a drawn Vermont hillside) + a brass season wheel
     - oldmtn     Gallery: a simple model, young sharp Rockies vs old worn Appalachians; run time forward
     - harbor     Gallery source room: two real photos of one harbor ~100 years apart; tap each, three questions
     - nelabel    Exhibit Floor: pick the front object, write the label in the step, install → the Northeast alcove lights */
  function itemOf(k){ var I = DATA.items || []; for (var i=0;i<I.length;i++) if (I[i].k === k) return I[i]; return null; }
  function neMapSVG(cls, label){
    var G = DATA.geo, B = G.neBox, lab = G.neLab || {};
    var t = Object.keys(lab).map(function(n){ var s = G.states[n]; if (!s) return ''; var big = lab[n].length > 2;
      return '<text class="nel'+(big?' big':'')+'" x="'+s.c[0]+'" y="'+s.c[1]+'">'+esc(lab[n])+'</text>'; }).join('');
    return usSVG(cls + ' ms-ne-map', label, '<g class="nelabs">'+t+'</g><g class="pins"></g>', {vb: B.join(' '), insetNames:false});
  }

  /* ══ MODULE: cratepin (Lobby · the ATLANTIC COAST crate) ══ */
  function modCratepin(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor || !DATA.geo) return;
    var IT = DATA.items || [];
    ST.cr = ST.cr || {i:0, ph:0, q:false}; var S = ST.cr;
    var m = shell('ms-cr-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-cr-wrap"><div class="ms-cr-left"><div class="ms-cr-crate"><div class="ms-cr-lid"></div><div class="ms-cr-box"><b>ATLANTIC COAST</b><span>Fragile · Museum Objects</span></div><div class="ms-cr-tray"></div></div>' +
      '<div class="ms-cr-map">'+neMapSVG('ms-cr-svg', 'A map of the 11 states of the Northeast')+'</div></div><div class="ms-cr-act"></div></div>');
    after(anchor, m);
    var act = $('.ms-cr-act', m), svg = $('.ms-cr-svg', m), tray = $('.ms-cr-tray', m), crate = $('.ms-cr-crate', m);
    function photo(it, cls){ return '<img class="'+(cls||'')+'" src="'+img(it.img)+'" alt="'+esc(it.cap)+'">'; }
    function paint(){
      var done = IT.slice(0, S.i);
      tray.innerHTML = done.map(function(it){ return '<button type="button" class="ms-cr-th" data-k="'+it.k+'" aria-label="Look closer: '+esc(it.name)+'">'+photo(it)+'<span>'+it.icon+' '+esc(it.name)+'</span></button>'; }).join('');
      $$('.ms-cr-th', m).forEach(function(b){ b.onclick = function(){ var it = itemOf(b.dataset.k); lightbox('<figure class="ms-wp-lb">'+photo(it)+'<figcaption><b>'+esc(it.name)+'</b> · '+esc(it.state)+'<br>'+esc(it.tag)+'<br><small>'+esc(it.credit)+'</small></figcaption></figure>'); }; });
      var pins = {}; done.forEach(function(it){ (pins[it.state] = pins[it.state] || []).push(it); });
      $('.pins', svg).innerHTML = Object.keys(pins).map(function(st){ var c = DATA.geo.states[st].c; return pins[st].map(function(it, j){ return '<g class="pin" transform="translate('+(c[0]+j*14-7*(pins[st].length-1))+' '+(c[1]-24)+')"><path class="stem" d="M0 8 L0 18"/><circle r="8"/><text y="4">'+it.icon+'</text></g>'; }).join(''); }).join('');
      $$('.st', svg).forEach(function(p){ p.classList.toggle('ne', p.dataset.r === 'ne'); p.classList.toggle('lit', !!pins[p.dataset.s]); });
      svg.classList.toggle('pick', S.i < IT.length && S.ph === 1);
      crate.classList.toggle('empty', S.i >= IT.length); crate.classList.toggle('open', S.ph === 1 || S.i > 0);
    }
    function tap(st){
      if (S.i >= IT.length || S.ph !== 1) return; var it = IT[S.i], fb = $('.ms-exfb', act);
      if (st === it.state) { SFX.stamp(); S.i++; S.ph = 0; save(); render(); if (S.i >= IT.length) SFX.fanfare(); }
      else { SFX.miss(); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 '+esc((cfg.hint||'').replace('{tapped}', st).replace('{clue}', it.clue))+'</div>'; }
    }
    $$('.st', svg).forEach(function(p){ p.addEventListener('click', function(){ tap(p.dataset.s); }); });
    function render(){
      paint();
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      var N = IT.length + 1;
      if (S.i >= IT.length) {
        var q = choiceQ(cfg.q, 1, function(){ S.q = true; save(); setTimeout(function(){ render(); }, calm()?0:1500); markDone('scene'); });
        act.innerHTML = stepCard(N, N, cfg.q.title, q.html); q.bind(act); return; }
      var it = IT[S.i];
      if (S.ph === 0) {
        act.innerHTML = stepCard(S.i+1, N, 'Object '+(S.i+1)+' of '+IT.length, '<p>One object is waiting in the crate.</p><button type="button" class="ms-btn big ms-cr-lift">📦 '+esc(cfg.liftT||'Lift it out')+'</button>');
        $('.ms-cr-lift', act).onclick = function(){ SFX.creak(); crate.classList.remove('lifting'); void crate.offsetWidth; crate.classList.add('lifting'); setTimeout(function(){ S.ph = 1; save(); render(); }, calm()?0:450); };
        return; }
      act.innerHTML = stepCard(S.i+1, N, it.icon+' '+it.name, '<figure class="ms-cr-fig">'+photo(it)+'<figcaption>'+esc(it.cap)+'</figcaption></figure><div class="ms-cr-tag"><b>Tag:</b> '+esc(it.tag)+'</div><p class="ms-cr-clue">🔎 '+esc(it.clue)+'</p>' +
        '<p class="ms-wm-do">👆 '+esc(cfg.doT||'')+'</p><div class="ms-exfb" aria-live="polite"></div><p class="ms-credit">'+esc(it.credit)+'</p>');
    }
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: seasons (Gallery main attraction · the Four Seasons Window) ══ */
  function seasonScene(){
    var trees = [[150,300,1],[245,290,.9],[330,305,1.1],[520,315,1],[610,300,.95]], t = '';
    trees.forEach(function(p, i){ var x = p[0], y = p[1], s = p[2];
      t += '<g class="tree" style="--i:'+i+'" transform="translate('+x+' '+y+') scale('+s+')"><rect class="trunk" x="-6" y="-10" width="12" height="60" rx="3"/>' +
        '<path class="branches" d="M0 -6 L-26 -46 M0 -14 L22 -52 M-12 -26 L-30 -30 M10 -32 L32 -36 M0 -10 L0 -64"/>' +
        '<g class="crown"><circle cx="-22" cy="-40" r="26"/><circle cx="20" cy="-42" r="26"/><circle cx="0" cy="-64" r="28"/><circle cx="0" cy="-30" r="24"/></g>' +
        (i === 1 || i === 3 ? '<g class="bucket"><path d="M8 18 l12 0 l-2 14 l-8 0z"/><path class="drip" d="M14 12 l0 5"/></g>' : '') + '</g>'; });
    var flakes = ''; for (var k=0;k<26;k++) flakes += '<circle class="flake" style="--d:'+(k%7)*.6+'s;--x:'+((k*67)%760+20)+'px" cx="0" cy="0" r="'+(2+k%3)+'"/>';
    var leaves = ''; for (var k2=0;k2<12;k2++) leaves += '<path class="leaf" style="--d:'+(k2%6)*.7+'s;--x:'+((k2*113)%640+80)+'px" d="M0 -6 L4 0 L0 6 L-4 0z"/>';
    return '<svg class="ms-sw-svg" viewBox="0 0 800 450" role="img" aria-label="A drawn hillside in Vermont with maple trees, a farmhouse, a sugar house, and a lake. It changes with the season.">' +
      '<rect class="sky" width="800" height="450"/><circle class="sun" cx="660" cy="80" r="38"/>' +
      '<path class="hill3" d="M0 200 Q120 120 260 170 T520 150 T800 175 V450 H0Z"/><path class="hill2" d="M0 250 Q160 190 330 235 T660 220 T800 240 V450 H0Z"/>' +
      '<path class="ground" d="M0 310 Q200 280 400 300 T800 295 V450 H0Z"/><path class="lake" d="M430 360 Q560 330 720 352 Q770 380 700 410 Q560 432 450 405 Q400 385 430 360Z"/>' +
      '<g class="boat"><path d="M560 382 h40 l-8 10 h-24z"/><path class="sail" d="M580 382 V346 L600 378Z"/></g>' +
      '<g class="farm"><rect x="40" y="250" width="70" height="50"/><path class="roof" d="M34 252 L75 222 L116 252Z"/><rect class="door" x="68" y="275" width="14" height="25"/></g>' +
      '<g class="sugar"><rect x="380" y="270" width="54" height="36"/><path class="roof" d="M374 272 L407 250 L440 272Z"/><rect class="vent" x="398" y="244" width="18" height="10"/><g class="steam"><circle cx="407" cy="232" r="8"/><circle cx="414" cy="216" r="10"/><circle cx="404" cy="198" r="12"/></g></g>' +
      '<g class="snowcap"><path d="M34 252 L75 222 L116 252 L104 252 L75 232 L46 252Z"/><path d="M374 272 L407 250 L440 272 L430 272 L407 258 L384 272Z"/></g>' +
      trees.map(function(){ return ''; }).join('') + '<g class="trees">'+t+'</g>' +
      '<g class="sled"><path d="M240 360 l46 0 l6 -6"/><circle cx="262" cy="346" r="8"/><path d="M262 354 l0 6"/></g>' +
      '<g class="apples"><path d="M640 300 h36 l-4 18 h-28z"/><circle cx="648" cy="298" r="5"/><circle cx="658" cy="296" r="5"/><circle cx="668" cy="298" r="5"/></g>' +
      '<g class="flakes">'+flakes+'</g><g class="leaves">'+leaves+'</g></svg>';
  }
  function wheelSVG(SE){
    var p = SE.map(function(s, i){ var a0 = (i*90 - 135) * Math.PI/180, a1 = (i*90 - 45) * Math.PI/180, r = 92;
      var x0 = 100 + r*Math.cos(a0), y0 = 100 + r*Math.sin(a0), x1 = 100 + r*Math.cos(a1), y1 = 100 + r*Math.sin(a1), am = (i*90 - 90) * Math.PI/180;
      return '<g class="seg" data-s="'+s.k+'" role="button" tabindex="0" aria-label="'+esc(s.t)+'"><path d="M100 100 L'+x0.toFixed(1)+' '+y0.toFixed(1)+' A'+r+' '+r+' 0 0 1 '+x1.toFixed(1)+' '+y1.toFixed(1)+'Z"/>' +
        '<text x="'+(100+58*Math.cos(am)).toFixed(1)+'" y="'+(100+58*Math.sin(am)+2).toFixed(1)+'" class="ic">'+s.icon+'</text><text x="'+(100+58*Math.cos(am)).toFixed(1)+'" y="'+(100+58*Math.sin(am)+22).toFixed(1)+'" class="lb">'+esc(s.t)+'</text></g>'; }).join('');
    return '<svg class="ms-sw-wheel" viewBox="0 0 200 200" aria-label="The season wheel"><circle cx="100" cy="100" r="98" class="rim"/>'+p+'<g class="hand"><path d="M100 100 L100 74" /><path class="tip" d="M93 76 L100 64 L107 76Z"/><circle cx="100" cy="100" r="12"/></g></svg>';
  }
  function modSeasons(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var SE = cfg.seasons || [];
    ST.sw = ST.sw || {s:'winter', seen:{winter:1}, step:1}; var S = ST.sw;
    var m = shell('ms-sw-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-sw-wrap"><div class="ms-sw-left"><div class="ms-sw-window"><div class="ms-sw-frame">'+seasonScene()+'</div><div class="ms-sw-line" aria-live="polite"></div></div>' +
      '<div class="ms-sw-ctl"><button type="button" class="ms-btn alt ms-sw-prev" aria-label="Previous season">◀ Back</button>'+wheelSVG(SE)+'<button type="button" class="ms-btn alt ms-sw-next" aria-label="Next season">Next ▶</button></div></div><div class="ms-sw-act"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-sw-act', m), win = $('.ms-sw-window', m), wheel = $('.ms-sw-wheel', m);
    function idx(){ for (var i=0;i<SE.length;i++) if (SE[i].k === S.s) return i; return 0; }
    function setSeason(k){ if (S.s === k) return; S.s = k; S.seen[k] = 1; SFX.click(); save(); paint(); if (S.step === 1) render(); }
    function paint(){
      SE.forEach(function(s){ win.classList.toggle('s-'+s.k, s.k === S.s); });
      var i = idx(); $('.hand', wheel).setAttribute('transform', 'rotate('+(i*90)+' 100 100)');
      $$('.seg', wheel).forEach(function(g){ g.classList.toggle('on', g.dataset.s === S.s); g.classList.toggle('seen', !!S.seen[g.dataset.s]); });
      $('.ms-sw-line', m).textContent = SE[i].line;
    }
    $$('.seg', wheel).forEach(function(g){ function go(){ setSeason(g.dataset.s); } g.addEventListener('click', go); g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    $('.ms-sw-prev', m).onclick = function(){ setSeason(SE[(idx()+SE.length-1)%SE.length].k); };
    $('.ms-sw-next', m).onclick = function(){ setSeason(SE[(idx()+1)%SE.length].k); };
    // drag around the wheel
    wheel.addEventListener('pointerdown', function(e){ var r = wheel.getBoundingClientRect(); function at(ev){ var a = Math.atan2(ev.clientY - (r.top + r.height/2), ev.clientX - (r.left + r.width/2)) * 180/Math.PI + 90; a = (a + 360 + 45) % 360; setSeason(SE[Math.floor(a/90)].k); }
      function mv(ev){ at(ev); } wheel.setPointerCapture && wheel.setPointerCapture(e.pointerId); wheel.addEventListener('pointermove', mv); wheel.addEventListener('pointerup', function up(){ wheel.removeEventListener('pointermove', mv); wheel.removeEventListener('pointerup', up); }); });
    function render(){
      paint();
      if (S.step >= 4) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.step === 1) { var all = SE.every(function(s){ return S.seen[s.k]; });
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p class="ms-wm-do">👆 '+esc(cfg.s1||'')+'</p><div class="ms-sw-chips">'+SE.map(function(s){ return '<span class="'+(S.seen[s.k]?'ok':'')+'">'+(S.seen[s.k]?'✓ ':'')+s.icon+' '+esc(s.t)+'</span>'; }).join('')+'</div>' +
          (all ? '<button type="button" class="ms-btn big ms-sw-go">Next ➡️</button>' : '<p class="ms-sw-left-n">'+(SE.length - Object.keys(S.seen).length)+' more to visit.</p>'));
        var g = $('.ms-sw-go', act); if (g) g.onclick = function(){ SFX.chime(); S.step = 2; save(); render(); };
        return; }
      var Q = S.step === 2 ? cfg.q1 : cfg.q2;
      var q = choiceQ(Q, S.step + 1, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-sw-go'; b.textContent = S.step === 2 ? 'Next question ➡️' : 'Done ✓'; $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); S.step++; save(); if (S.step >= 4) { ST.gal = ST.gal||{}; ST.gal.seasons = 1; save(); galleryCheck(); SFX.fanfare(); setSeason('fall'); } render(); }; });
      act.innerHTML = stepCard(S.step, 3, Q.title, q.html); q.bind(act);
    }
    render();
  }

  /* ══ MODULE: oldmtn (Gallery · old mountains, young mountains) ══ */
  function modOldmtn(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    ST.om = ST.om || {run:false, ok:false}; var S = ST.om;
    var m = shell('ms-om-mod', cfg);
    var sharp = 'M0 260 L60 150 L90 185 L140 60 L175 120 L210 40 L250 140 L280 110 L330 260Z', round = 'M0 260 C40 230 60 195 90 200 C120 205 130 175 165 170 C200 165 215 190 240 195 C270 200 300 235 330 260Z';
    m.insertAdjacentHTML('beforeend', '<div class="ms-om-wrap"><svg class="ms-om-svg" viewBox="0 0 720 300" role="img" aria-label="A simple model: on the left, the tall sharp Rocky Mountains; on the right, the Appalachian Mountains, which wear down over millions of years.">' +
      '<rect width="720" height="300" class="sky"/><g transform="translate(20 0)"><path class="mtn rk" d="'+sharp+'"/><path class="snow" d="M140 60 L152 80 L128 80Z M210 40 L222 62 L198 62Z"/><text x="165" y="290" class="ml">Rocky Mountains (young)</text></g>' +
      '<g transform="translate(370 0)"><g class="apw"><path class="mtn ap old" d="'+sharp+'"/><path class="snow old" d="M140 60 L152 80 L128 80Z M210 40 L222 62 L198 62Z"/></g><path class="mtn ap new" d="'+round+'"/><text x="165" y="290" class="ml">Appalachian Mountains (old)</text></g>' +
      '<g class="weather"><path class="rain" d="M430 20 l-8 18 M470 14 l-8 18 M520 22 l-8 18 M570 16 l-8 18 M620 24 l-8 18"/></g><text class="yrs" x="540" y="30">Long ago</text></svg><div class="ms-om-act"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-om-act', m), yrs = $('.yrs', m), svg = $('.ms-om-svg', m);
    if (S.run) { yrs.textContent = 'Hundreds of millions of years later'; svg.classList.add('done'); }
    function run(){ if (S.run) return; S.run = true; save(); SFX.whir(); svg.classList.add('running');
      var t0 = performance.now(), dur = calm() ? 0 : 3200;
      (function f(now){ var k = dur ? Math.min(1, (now - t0)/dur) : 1; yrs.textContent = k < 1 ? Math.round(k*300) + ' million years go by\u2026' : 'Hundreds of millions of years later';
        svg.style.setProperty('--k', k.toFixed(3));
        if (k < 1) requestAnimationFrame(f); else { svg.classList.remove('running'); svg.classList.add('done'); render(); } })(t0);
    }
    function render(){
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (!S.run) { act.innerHTML = stepCard(1, 2, 'Run time forward', '<p>The right side starts tall and sharp, like the Rockies. Watch what millions of years of wind, rain, and ice do.</p><button type="button" class="ms-btn big ms-om-run">⏩ '+esc(cfg.runT||'Run time forward')+'</button>'); $('.ms-om-run', act).onclick = run; return; }
      var q = choiceQ(cfg.q, 2, function(){ ST.gal = ST.gal||{}; ST.gal.mtn = 1; save(); galleryCheck(); setTimeout(function(){ S.ok = true; save(); render(); }, calm()?0:1700); });
      act.innerHTML = stepCard(2, 2, cfg.q.title, q.html); q.bind(act);
    }
    render();
  }

  /* ══ MODULE: harbor (Gallery source room · one harbor, 100 years apart) ══ */
  function modHarbor(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var PH = cfg.photos || [], Q = cfg.qs || [];
    ST.hb = ST.hb || {seen:{}, i:0, ok:false}; var S = ST.hb;
    var m = shell('ms-hb-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-hb-pair">'+PH.map(function(p){ return '<figure class="ms-hb-ph" data-k="'+p.k+'"><button type="button" class="ms-hb-b" aria-label="Look closer: '+esc(p.cap)+'"><img src="'+img(p.img)+'" alt="'+esc(p.cap)+'"><span class="ms-hb-date">'+esc(p.date)+'</span><span class="ms-hb-zoom">🔍</span></button><figcaption>'+esc(p.cap)+'</figcaption></figure>'; }).join('')+'</div><div class="ms-hb-act"></div><p class="ms-credit">'+PH.map(function(p){ return esc(p.credit); }).join(' ')+'</p>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-hb-act', m);
    $$('.ms-hb-ph', m).forEach(function(f){ $('.ms-hb-b', f).onclick = function(){ var p = PH.filter(function(x){ return x.k === f.dataset.k; })[0]; SFX.click(); S.seen[p.k] = 1; save();
      lightbox('<figure class="ms-wp-lb"><img src="'+img(p.img)+'" alt="'+esc(p.cap)+'"><figcaption><b>'+esc(p.date)+'</b> · '+esc(p.cap)+'<br><small>'+esc(p.credit)+'</small></figcaption></figure>', null, function(){ render(); }); render(); }; });
    function render(){
      $$('.ms-hb-ph', m).forEach(function(f){ f.classList.toggle('seen', !!S.seen[f.dataset.k]); });
      var N = Q.length + 1;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var all = PH.every(function(p){ return S.seen[p.k]; });
      if (!all || S.i < 0) { act.innerHTML = stepCard(1, N, cfg.s1T, '<p class="ms-wm-do">👆 '+esc(cfg.s1||'')+'</p><div class="ms-sw-chips">'+PH.map(function(p){ return '<span class="'+(S.seen[p.k]?'ok':'')+'">'+(S.seen[p.k]?'✓ ':'🔍 ')+esc(p.date)+'</span>'; }).join('')+'</div>'); return; }
      var q = Q[S.i];
      var cq = choiceQ(q, S.i + 1, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-hb-next'; b.textContent = S.i+1 < Q.length ? 'Next question ➡️' : 'Done with the photos ✓'; $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); S.i++; if (S.i >= Q.length) { S.ok = true; ST.gal = ST.gal||{}; ST.gal.harbor = 1; galleryCheck(); SFX.fanfare(); } save(); render(); }; });
      act.innerHTML = stepCard(S.i+2, N, q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: nelabel (Exhibit Floor · the Northeast alcove) ══ */
  function modNelabel(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var IT = DATA.items || [], OWN = cfg.ownMin || 10;
    ST.ne = ST.ne || {front:null, step:1, open:false}; var S = ST.ne;
    var m = shell('ms-ne-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-ne-act"></div><div class="ms-ne-show" hidden><div class="ms-ne-alcove" style="'+rcol()+'"><span class="ms-alc-glow"></span><div class="ms-ne-sign">Northeast</div><div class="ms-ne-shelf"></div><div class="ms-ne-label"><p class="tx"></p><p class="by"></p><span class="ms-draft">DRAFT</span></div></div>'+alcoves('ms-ne-row')+'</div><div class="ms-ne-end"></div>');
    var home = document.createComment('ne-home'); ta.parentNode.insertBefore(home, ta); ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-ne-act', m), show = $('.ms-ne-show', m), end = $('.ms-ne-end', m), row = $('.ms-ne-row', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function words(t){ (cfg.starters||[]).forEach(function(s){ t = t.split(s).join(' '); }); return (t.trim().match(/\S+/g)||[]).length; }
    function missing(){ var miss = []; if (!S.front) miss.push('Pick the front object.'); var n = words(ta.value); if (n < OWN) miss.push('Add '+(OWN-n)+' more word'+(OWN-n===1?'':'s')+'.'); if (!/northeast/i.test(ta.value)) miss.push('Name the Northeast in your label.'); return miss; }
    function photo(it){ return '<img src="'+img(it.img)+'" alt="'+esc(it.cap)+'">'; }
    function view(){
      var order = S.front ? [itemOf(S.front)].concat(IT.filter(function(x){ return x.k !== S.front; })) : IT;
      $('.ms-ne-shelf', show).innerHTML = order.map(function(it, i){ return '<figure class="'+(i===0?'front':'')+'">'+photo(it)+'<figcaption>'+esc(it.name)+'</figcaption></figure>'; }).join('');
      $('.tx', show).textContent = ta.value.trim() || 'Your label will appear here.';
      $('.by', show).textContent = 'Label by ' + (sget(NAMEK,'') || 'Junior Curator') + ', United States Region Curator';
      show.classList.toggle('open', !!S.open); lightAlcoves(row, S.open ? ['ne'] : [], false);
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1 || !S.front) { S.step = 1; goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p class="ms-wm-do">👆 '+esc(cfg.s1||'')+'</p><div class="ms-ne-picks">'+IT.map(function(it){ return '<button type="button" class="ms-ne-pick'+(S.front===it.k?' on':'')+'" data-k="'+it.k+'" aria-pressed="'+(S.front===it.k)+'">'+photo(it)+'<span>'+it.icon+' '+esc(it.name)+'</span></button>'; }).join('')+'</div>' +
          '<button type="button" class="ms-btn big ms-ne-next'+(S.front?'':' ms-notready')+'">Next: write your label ➡️</button><div class="ms-gi-fb" aria-live="polite"></div>');
        $$('.ms-ne-pick', act).forEach(function(b){ b.onclick = function(){ S.front = b.dataset.k; SFX.click(); save(); render(); }; });
        $('.ms-ne-next', act).onclick = function(){ if (!S.front) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Tap one object first.</div>'; return; } SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) { var it = itemOf(S.front);
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<div class="ms-ne-chosen">'+photo(it)+'<span>Front object: <b>'+esc(it.name)+'</b> (it shows '+esc(it.shows)+')</span></div><p>'+esc(cfg.s2||'')+'</p><div class="ms-cp-notes">'+(cfg.notes||[]).map(function(n){ return '<span>📌 '+esc(n)+'</span>'; }).join('')+'</div>' +
          '<div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-ne-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-ne-back">↩️ Pick a different object</button><button type="button" class="ms-btn big ms-ne-next">Next: see the alcove ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-ne-chk', act), fb = $('.ms-gi-fb', act);
        function upd(){ var n = words(ta.value), miss = missing(); chk.innerHTML = '<span class="ms-wc'+(n>=OWN?' ok':'')+'">📝 '+Math.min(n,OWN)+' of '+OWN+' words of your own</span><span class="ms-chip'+(/northeast/i.test(ta.value)?' ok':'')+'">'+(/northeast/i.test(ta.value)?'✓ ':'')+'names the Northeast</span>';
          $('.ms-ne-next', act).classList.toggle('ms-notready', !!miss.length); if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; }
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b, i){ b.onclick = function(){ var t = (cfg.starters||[])[i]; ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-ne-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-ne-next', act).onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-ne-open">🎉 '+esc(cfg.openT||'Install')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-ne-edit">✏️ '+esc(cfg.editT||'Edit my label')+'</button></div>';
      var ob = $('.ms-ne-open', end); if (ob) ob.onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); setTimeout(function(){ show.classList.remove('opening'); }, 3000); optiNod('assignment'); check(); };
      $('.ms-ne-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.07.03 (Southeast Region Study) ══════════
     DATA.items = the GULF & ATLANTIC crate objects; DATA.geo.seBox / flBox = Southeast and Florida views; DATA.geo.pts = Boston + Miami.
     - wxtwin   Lobby: two weather windows (Boston, Miami, same January day), a thermometer for each, why; then the crate opens
     - storm    Gallery main attraction: the Storm Tracker (warm the ocean month by month, a hurricane forms, makes landfall, weakens)
     - sponge   Gallery: a model, rain on a paved city vs a wetland
     - twinlab  Exhibit Floor: one alike + one different, two labels written in the step, hung between the blue and green alcoves
     (the Everglades photo reuses nightmap with cfg.stKey / galKey / vb / alt) */
  function seMapSVG(cls, label, extra, vb){ return usSVG(cls, label, extra || '', {vb: (vb || DATA.geo.seBox).join(' '), insetNames:false}); }
  function windowScene(k){
    if (k === 'boston') return '<svg class="ms-wt-scene" viewBox="0 0 300 200" aria-hidden="true"><rect width="300" height="200" fill="#C9D3DC"/><circle cx="240" cy="40" r="18" fill="#EEF0EA"/>' +
      '<rect x="20" y="60" width="70" height="100" fill="#9C4A36"/><rect x="90" y="75" width="60" height="85" fill="#7E3B2C"/><rect x="150" y="55" width="70" height="105" fill="#A85A42"/>' +
      [30,55,100,125,160,190].map(function(x, i){ return '<rect x="'+x+'" y="'+(i%2?95:80)+'" width="14" height="18" fill="#F7E7A8" opacity=".8"/>'; }).join('') +
      '<path d="M18 60 L55 40 L92 60Z M148 55 L185 36 L222 55Z" fill="#fff"/><rect y="160" width="300" height="40" fill="#F4F7FA"/>' +
      '<path d="M250 160 V110 M250 125 L232 108 M250 120 L268 100 M250 140 L270 128" stroke="#5B4332" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<g transform="translate(118 150)"><circle cy="-30" r="7" fill="#F2C6A0"/><path d="M-6 -36 h12 v-4 h-12z" fill="#B23A2E"/><rect x="-9" y="-23" width="18" height="24" rx="5" fill="#2F4F7F"/><path d="M-6 1 v10 M6 1 v10" stroke="#333" stroke-width="4"/><path d="M-10 -20 l-6 10 M10 -20 l6 10" stroke="#2F4F7F" stroke-width="5" stroke-linecap="round"/></g>' +
      '<g class="flk">'+[20,60,95,140,175,210,260,285,40,120,230].map(function(x, i){ return '<circle cx="'+x+'" cy="'+(10+i*13%140)+'" r="2.4" fill="#fff" style="--d:'+(i%5)*.5+'s"/>'; }).join('')+'</g></svg>';
    return '<svg class="ms-wt-scene" viewBox="0 0 300 200" aria-hidden="true"><rect width="300" height="200" fill="#8FD0F2"/><circle cx="240" cy="38" r="22" fill="#FFD84A"/><rect y="118" width="300" height="34" fill="#2F8FC9"/><path d="M0 125 q20 -5 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#BEE3F5" stroke-width="2" fill="none"/>' +
      '<rect y="150" width="300" height="50" fill="#F2DDA4"/><path d="M70 160 Q66 110 78 70" stroke="#8A6A48" stroke-width="7" fill="none"/><g fill="#2E8B4E"><path d="M78 70 q-30 -6 -48 12 q26 -4 48 -12z"/><path d="M78 70 q30 -8 50 8 q-26 -2 -50 -8z"/><path d="M78 70 q-12 -26 -38 -30 q20 14 38 30z"/><path d="M78 70 q12 -28 40 -28 q-22 12 -40 28z"/></g>' +
      '<g transform="translate(180 178)"><circle cy="-30" r="7" fill="#C98E64"/><rect x="-8" y="-23" width="16" height="15" rx="4" fill="#F2A63A"/><rect x="-8" y="-9" width="16" height="9" fill="#2F7FBF"/><path d="M-5 0 v12 M5 0 v12" stroke="#C98E64" stroke-width="4"/></g>' +
      '<path d="M220 170 h40 l-4 -8 h-32z" fill="#D9534F"/><path d="M240 162 v-26 l14 22z" fill="#fff"/></svg>';
  }
  function thermSVG(t){ var h = Math.max(4, Math.min(100, t)) * 1.1; return '<svg class="ms-wt-therm-svg" viewBox="0 0 40 160" aria-hidden="true"><rect x="13" y="8" width="14" height="124" rx="7" fill="#fff" stroke="#3B2410" stroke-width="2"/><circle cx="20" cy="138" r="14" fill="#D9412E" stroke="#3B2410" stroke-width="2"/>' +
    '<rect class="merc" x="16.5" y="'+(130-h)+'" width="7" height="'+(h+4)+'" fill="#D9412E"/>' + [0,1,2,3,4].map(function(i){ return '<path d="M27 '+(130-i*27.5)+' h6" stroke="#3B2410" stroke-width="1.5"/>'; }).join('') + '</svg>'; }

  /* ══ MODULE: wxtwin (Lobby · weather twins + the GULF & ATLANTIC crate) ══ */
  function modWxtwin(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor || !DATA.geo) return;
    var WN = cfg.wins || [], IT = DATA.items || [];
    ST.wt = ST.wt || {m:{}, step:1, seen:{}, open:false}; var S = ST.wt;
    var m = shell('ms-wt-mod', cfg);
    var p = DATA.geo.pts, pins = WN.map(function(w){ var c = p[w.k]; return '<g class="cpin" data-k="'+w.k+'"><circle cx="'+c[0]+'" cy="'+c[1]+'" r="11"/><text x="'+(c[0]+16)+'" y="'+(c[1]+6)+'" style="text-anchor:start">'+esc(w.city.split(',')[0])+'</text></g>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-wt-wins">'+WN.map(function(w){ return '<figure class="ms-wt-win" data-k="'+w.k+'" role="button" tabindex="0" aria-label="'+esc(w.city)+' window. Tap to measure."><div class="ms-wt-frame">'+windowScene(w.k)+'<div class="ms-wt-slot"></div></div><figcaption><b>'+esc(w.city)+'</b><span class="ms-wt-read"></span></figcaption></figure>'; }).join('') +
      '</div><div class="ms-wt-row"><div class="ms-wt-therm" role="img" aria-label="A thermometer you can drag">'+thermSVG(55)+'<span>Drag me</span></div><div class="ms-wt-map">'+usSVG('ms-wt-svg', 'A map of the United States. Boston is in the Northeast, Miami is far south in the Southeast.', '<g class="cpins">'+pins+'</g>', {insetNames:false})+'</div></div>' +
      '<p class="ms-credit">'+esc(cfg.note||'')+'</p><div class="ms-wt-act"></div>');
    after(anchor, m);
    var act = $('.ms-wt-act', m), th = $('.ms-wt-therm', m);
    $$('.ms-wt-svg .st', m).forEach(function(s){ s.classList.toggle('lit', s.dataset.r === 'ne' || s.dataset.r === 'se'); });
    function measure(k){ if (S.m[k] || S.step !== 1) return; S.m[k] = 1; SFX.chime(); save(); paint(); render(); }
    function paint(){ WN.forEach(function(w){ var f = $('.ms-wt-win[data-k="'+w.k+'"]', m), on = !!S.m[w.k];
      f.classList.toggle('done', on); $('.ms-wt-slot', f).innerHTML = on ? thermSVG(w.temp) : ''; $('.ms-wt-read', f).innerHTML = on ? '🌡️ '+esc(w.reading)+'<br><small>'+esc(w.line)+'</small>' : '<small>👆 Measure me</small>'; });
      th.classList.toggle('used', WN.every(function(w){ return S.m[w.k]; })); }
    $$('.ms-wt-win', m).forEach(function(f){ f.addEventListener('click', function(){ measure(f.dataset.k); }); f.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); measure(f.dataset.k); } }); });
    dragger(th, function(moved, t){ if (moved && t) measure(t.dataset.k); }, '.ms-wt-win');
    function crateHTML(){ return '<div class="ms-cr-crate ms-wt-crate '+(S.open?'open':'')+'"><div class="ms-cr-lid"></div><div class="ms-cr-box"><b>GULF &amp; ATLANTIC</b><span>Fragile · Museum Objects</span></div><div class="ms-cr-tray">'+(S.open ? IT.map(function(it){ return '<button type="button" class="ms-cr-th'+(S.seen[it.k]?' seen':'')+'" data-k="'+it.k+'" aria-label="Look closer: '+esc(it.name)+'">'+itemPic(it)+'<span>'+(S.seen[it.k]?'✓ ':'')+it.icon+' '+esc(it.name)+'</span></button>'; }).join('') : '')+'</div></div>'; }
    function itemPic(it){ if (it.img) return '<img src="'+img(it.img)+'" alt="'+esc(it.cap)+'">';
      return usSVG('ms-wt-fl', it.cap, '', {vb: DATA.geo.flBox.join(' '), insetNames:false}).replace('class="st" data-s="Florida"', 'class="st lit" data-s="Florida"'); }
    function look(k){ var it = itemOf(k); SFX.click(); S.seen[k] = 1; save();
      lightbox('<figure class="ms-wp-lb">'+itemPic(it)+'<figcaption><b>'+it.icon+' '+esc(it.name)+'</b> · '+esc(it.state)+'<br>'+esc(it.tag)+'<br><small>'+esc(it.credit)+'</small></figcaption></figure>', null, function(){ render(); }); render(); }
    function render(){
      paint(); var N = 4;
      if (S.step >= 5) { act.innerHTML = crateHTML() + '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; bindCrate(); return; }
      if (S.step === 1) { var n = Object.keys(S.m).length;
        act.innerHTML = stepCard(1, N, 'Check the thermometers', '<p class="ms-wm-do">👆 Drag the thermometer into each window, or tap a window.</p><p class="ms-sw-left-n">'+(n < WN.length ? (WN.length - n)+' more to measure.' : '')+'</p>' + (n >= WN.length ? '<button type="button" class="ms-btn big ms-wt-go">Next ➡️</button>' : ''));
        var g = $('.ms-wt-go', act); if (g) g.onclick = function(){ SFX.click(); S.step = 2; save(); render(); }; return; }
      if (S.step === 2) { var q = choiceQ(cfg.q, 2, function(){ var b = document.createElement('div'); b.className = 'ms-wt-mtn'; b.innerHTML = '<svg viewBox="0 0 120 60" aria-hidden="true"><path d="M0 60 L30 18 L48 34 L70 8 L100 40 L120 28 V60Z" fill="#6E8F7A"/><path d="M30 18 L37 28 L23 28Z M70 8 L79 20 L61 20Z" fill="#fff"/></svg><p>🏔️ '+esc(cfg.mtn||'')+'</p><button type="button" class="ms-btn big ms-wt-go">Next ➡️</button>';
          $('.ms-stepcard', act).appendChild(b); $('.ms-wt-go', act).onclick = function(){ SFX.click(); S.step = 3; save(); render(); }; });
        act.innerHTML = stepCard(2, N, cfg.q.title, q.html); q.bind(act); return; }
      if (S.step === 3) { var all = IT.every(function(it){ return S.seen[it.k]; });
        act.innerHTML = stepCard(3, N, 'Open the crate', S.open ? '<p class="ms-wm-do">👆 Tap each object to read its tag.</p>' + crateHTML() + (all ? '<button type="button" class="ms-btn big ms-wt-go">Next ➡️</button>' : '<p class="ms-sw-left-n">'+IT.filter(function(it){ return !S.seen[it.k]; }).length+' more to look at.</p>')
          : '<p>A new crate sits in the alcove.</p>' + crateHTML() + '<button type="button" class="ms-btn big ms-wt-open">📦 '+esc(cfg.crateT||'Open the crate')+'</button>');
        var o = $('.ms-wt-open', act); if (o) o.onclick = function(){ SFX.creak(); S.open = true; save(); render(); };
        var g2 = $('.ms-wt-go', act); if (g2) g2.onclick = function(){ SFX.click(); S.step = 4; save(); render(); };
        bindCrate(); return; }
      var q2 = choiceQ(cfg.crateQ, 4, function(){ setTimeout(function(){ S.step = 5; save(); render(); }, calm()?0:1500); markDone('scene'); SFX.fanfare(); });
      act.innerHTML = stepCard(4, N, cfg.crateQ.title, q2.html); q2.bind(act);
    }
    function bindCrate(){ $$('.ms-wt-crate .ms-cr-th', m).forEach(function(b){ b.onclick = function(){ look(b.dataset.k); }; }); }
    render(); if (S.step >= 5) markDone('scene');
  }

  /* ══ MODULE: storm (Gallery main attraction · the Storm Tracker) ══ */
  function modStorm(cfg){
    var anchor = $(cfg.anchor); if (!anchor || !DATA.geo) return;
    var MO = cfg.months || [], WM = cfg.warm || [], SEA = cfg.season || [], TR = cfg.track || [], LA = cfg.landAt || 0, LN = cfg.lines || [];
    ST.st = ST.st || {mo:0, step:1, ran:false}; var S = ST.st;
    var m = shell('ms-st-mod', cfg);
    var path = 'M' + TR.map(function(p){ return p.join(' '); }).join(' L');
    var swirl = '<g class="swirl"><g class="spin"><path d="M0 0 C 18 -26, 52 -14, 60 10" /><path d="M0 0 C -26 -18, -14 -52, 10 -60" /><path d="M0 0 C -18 26, -52 14, -60 -10" /><path d="M0 0 C 26 18, 14 52, -10 60" /><circle r="34" class="cl"/></g><circle r="6" class="eye"/></g>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-st-wrap"><div class="ms-st-left"><div class="ms-st-map">' + seMapSVG('ms-st-svg', 'A map of the Southeast with the Atlantic Ocean and the Gulf of Mexico. A storm track can appear over the ocean.',
      '<path class="trk" d="'+path+'"/><g class="stormg" transform="translate('+TR[0][0]+' '+TR[0][1]+') scale(.01)">'+swirl+'</g><text class="wl" x="1045" y="330" style="text-anchor:end">Atlantic Ocean</text><text class="wl" x="650" y="585" style="text-anchor:middle">Gulf of Mexico</text>') +
      '<div class="ms-st-line" aria-live="polite"></div></div><div class="ms-st-months" role="group" aria-label="Months">'+MO.map(function(t, i){ return '<button type="button" class="ms-st-mo'+(SEA.indexOf(i)>=0?' sea':'')+'" data-i="'+i+'">'+t+'</button>'; }).join('')+'</div></div><div class="ms-st-act"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-st-act', m), svg = $('.ms-st-svg', m), sg = $('.stormg', m), line = $('.ms-st-line', m);
    $$('.st', svg).forEach(function(s){ s.classList.toggle('lit', s.dataset.r === 'se'); });
    function seaColor(w){ var a = [150,190,214], b = [70,150,190], c = [214,150,120]; var k = Math.min(1, w); var mix = function(x, y, t){ return Math.round(x + (y - x) * t); };
      var col = k < .5 ? [mix(a[0],b[0],k*2), mix(a[1],b[1],k*2), mix(a[2],b[2],k*2)] : [mix(b[0],c[0],(k-.5)*2), mix(b[1],c[1],(k-.5)*2), mix(b[2],c[2],(k-.5)*2)]; return 'rgb('+col.join(',')+')'; }
    function paint(){ $('.sea', svg).style.fill = seaColor(WM[S.mo] || 0); $$('.ms-st-mo', m).forEach(function(b){ b.classList.toggle('on', +b.dataset.i === S.mo); });
      m.classList.toggle('show-season', S.step > 1 || SEA.indexOf(S.mo) >= 0); svg.classList.toggle('ran', !!S.ran); if (S.ran) { place(TR.length - 1); } }
    function place(i, f){ var p = TR[Math.min(TR.length-1, Math.floor(i))], q = TR[Math.min(TR.length-1, Math.floor(i)+1)], t = i - Math.floor(i);
      var x = p[0] + (q[0]-p[0])*t, y = p[1] + (q[1]-p[1])*t, sc = i < LA ? .35 + .65*(i/LA) : Math.max(.35, 1 - .65*((i-LA)/(TR.length-1-LA)));
      sg.setAttribute('transform', 'translate('+x.toFixed(1)+' '+y.toFixed(1)+') scale('+sc.toFixed(3)+')'); sg.classList.toggle('weak', i > LA + .5); }
    $$('.ms-st-mo', m).forEach(function(b){ b.onclick = function(){ if (S.step > 2) return; S.mo = +b.dataset.i; SFX.click(); save(); paint(); if (S.step === 1) render(); }; });
    function run(){ if (S.ran) return; SFX.whir(); svg.classList.add('running'); var t0 = performance.now(), dur = calm() ? 0 : 6000, n = TR.length - 1;
      (function f(now){ var k = dur ? Math.min(1, (now - t0)/dur) : 1, i = k * n; place(i); svg.style.setProperty('--trk', (1-k).toFixed(3));
        line.textContent = LN[i < LA*.45 ? 0 : i < LA ? 1 : i < LA + 1.2 ? 2 : 3] || '';
        if (k < 1) requestAnimationFrame(f); else { svg.classList.remove('running'); S.ran = true; S.step = 3; save(); paint(); render(); } })(t0); }
    function render(){
      paint(); var N = 5;
      if (S.step >= 6) { line.textContent = LN[3] || ''; act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.step === 1) { var ok = SEA.indexOf(S.mo) >= 0;
        act.innerHTML = stepCard(1, N, cfg.s1T, '<p class="ms-wm-do">👆 '+esc(cfg.s1||'')+'</p>' + (ok ? '<div class="ms-win show">'+esc(cfg.s1ok||'')+'</div><button type="button" class="ms-btn big ms-st-go">Next ➡️</button>' : '<p class="ms-sw-left-n">Now showing: <b>'+esc(MO[S.mo])+'</b>. '+(WM[S.mo] < .5 ? 'Too cool for hurricanes.' : '')+'</p>'));
        var g = $('.ms-st-go', act); if (g) g.onclick = function(){ SFX.chime(); S.step = 2; if (WM[S.mo] < 1) S.mo = 8; save(); render(); }; return; }
      if (S.step === 2) { act.innerHTML = stepCard(2, N, cfg.s2T, '<p>The ocean is warm in <b>'+esc(MO[S.mo])+'</b>. Watch a storm form over the warm water.</p><button type="button" class="ms-btn big ms-st-run">🌀 '+esc(cfg.goT||'Start the storm')+'</button>'); $('.ms-st-run', act).onclick = function(){ this.disabled = true; run(); }; return; }
      var Q = [cfg.q1, cfg.q2, cfg.q3][S.step - 3];
      var cq = choiceQ(Q, S.step, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-st-next'; b.textContent = S.step < 5 ? 'Next question ➡️' : 'Done ✓'; $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); S.step++; if (S.step >= 6) { ST.gal = ST.gal||{}; ST.gal.storm = 1; galleryCheck(); SFX.fanfare(); } save(); render(); }; });
      act.innerHTML = stepCard(S.step, N, Q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: sponge (Gallery · a paved city vs a wetland in the rain) ══ */
  function modSponge(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    ST.sp = ST.sp || {rained:false, step:1}; var S = ST.sp;
    var m = shell('ms-sp-mod', cfg);
    var drops = ''; for (var i = 0; i < 28; i++) drops += '<path class="drop" style="--d:'+((i*37)%10)/10+'s" d="M'+(14 + (i*23)%296)+' 0 l-3 9"/>';
    function tray(k, x){ var city = k === 'city';
      return '<g class="tray '+k+'" transform="translate('+x+' 0)"><rect x="0" y="30" width="310" height="200" rx="8" class="bed"/>' +
        (city ? '<rect x="0" y="170" width="310" height="60" class="pave"/><path d="M0 200 H310" class="lane"/><rect x="20" y="95" width="50" height="75" class="bld"/><rect x="85" y="70" width="40" height="100" class="bld"/><rect x="140" y="110" width="60" height="60" class="bld"/><rect x="215" y="85" width="45" height="85" class="bld"/>' +
          '<rect class="flood" x="0" y="230" width="310" height="0"/><path class="run" d="M20 214 H300"/><path class="out" d="M300 214 q20 6 40 6"/>'
        : '<rect class="wl" x="0" y="196" width="310" height="34"/>' + [20,48,76,104,132,160,188,216,244,272].map(function(gx, j){ return '<path class="saw" d="M'+gx+' 200 l6 -'+(38+j%3*10)+' l4 '+(38+j%3*10)+' M'+(gx+8)+' 200 l8 -'+(30+j%2*12)+'"/>'; }).join('') + '<path class="out" d="M310 214 q20 4 40 4"/>') +
        '<g class="rain">'+drops+'</g><text x="155" y="22" style="text-anchor:middle" class="tt">'+esc(city ? cfg.cityT : cfg.wetT)+'</text></g>'; }
    m.insertAdjacentHTML('beforeend', '<div class="ms-sp-stage"><svg class="ms-sp-svg" viewBox="0 0 700 240" role="img" aria-label="A model with two trays in the rain: a paved city on the left and a wetland on the right.">'+tray('city', 10)+tray('wet', 370)+'</svg><div class="ms-sp-res"><p class="c"></p><p class="w"></p></div></div><div class="ms-sp-act"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-sp-act', m), svg = $('.ms-sp-svg', m);
    function paint(){ svg.classList.toggle('done', !!S.rained); $('.ms-sp-res .c', m).textContent = S.rained ? '🏙️ ' + cfg.cityR : ''; $('.ms-sp-res .w', m).textContent = S.rained ? '🌾 ' + cfg.wetR : ''; }
    function render(){
      paint(); var N = 3;
      if (S.step >= 4) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.step === 1) { act.innerHTML = stepCard(1, N, 'Make it rain', '<p>Both trays get the same rain. Where will the water go?</p><button type="button" class="ms-btn big ms-sp-rain">🌧️ '+esc(cfg.rainT||'Make it rain')+'</button>');
        $('.ms-sp-rain', act).onclick = function(){ this.disabled = true; SFX.whir(); svg.classList.add('raining'); setTimeout(function(){ svg.classList.remove('raining'); S.rained = true; S.step = 2; save(); render(); }, calm()?0:3600); }; return; }
      var Q = S.step === 2 ? cfg.q1 : cfg.q2;
      var cq = choiceQ(Q, S.step, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-sp-next'; b.textContent = S.step < 3 ? 'Next question ➡️' : 'Done ✓'; $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); S.step++; if (S.step >= 4) { ST.gal = ST.gal||{}; ST.gal.sponge = 1; galleryCheck(); SFX.fanfare(); } save(); render(); }; });
      act.innerHTML = stepCard(S.step, N, Q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: twinlab (Exhibit Floor · twin labels between two alcoves) ══ */
  function modTwinlab(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var AL = cfg.alike || [], DF = cfg.diff || [], OWN = cfg.ownMin || 12;
    ST.tl = ST.tl || {a:null, d:null, step:1, open:false}; var S = ST.tl;
    var m = shell('ms-tl-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-tl-act"></div><div class="ms-tl-show" hidden><div class="ms-tl-pair" style="'+rcol()+'"><div class="ms-tl-alc ne"><span class="ms-alc-glow"></span><b>Northeast</b></div><div class="ms-tl-plaques"><div class="ms-tl-pl a"><i>Alike</i><p></p></div><div class="ms-tl-pl d"><i>Different</i><p></p></div><span class="ms-draft">DRAFT</span><div class="ms-tl-by"></div></div><div class="ms-tl-alc se"><span class="ms-alc-glow"></span><b>Southeast</b></div></div>'+alcoves('ms-tl-row')+'</div><div class="ms-tl-end"></div>');
    var home = document.createComment('tl-home'); ta.parentNode.insertBefore(home, ta); ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-tl-act', m), show = $('.ms-tl-show', m), end = $('.ms-tl-end', m), row = $('.ms-tl-row', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function own(t){ (cfg.starters||[]).forEach(function(s){ t = t.split(s).join(' '); }); return (t.trim().match(/\S+/g)||[]).length; }
    function sents(){ return (ta.value.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[]).map(function(x){ return x.trim(); }).filter(function(x){ return x.split(/\s+/).length >= 3; }); }
    function missing(){ var miss = []; if (!S.a || !S.d) miss.push('Pick one alike and one different.'); var n = own(ta.value); if (n < OWN) miss.push('Add '+(OWN-n)+' more word'+(OWN-n===1?'':'s')+' of your own.'); if (sents().length < 2) miss.push('Write two sentences: one alike, one different.'); return miss; }
    function chip(list, which){ return list.map(function(c){ return '<button type="button" class="ms-chipbtn ms-tl-c'+(S[which]===c.k?' on':'')+'" data-w="'+which+'" data-k="'+c.k+'" aria-pressed="'+(S[which]===c.k)+'">'+esc(c.t)+'</button>'; }).join(''); }
    function pick(list, k){ for (var i=0;i<list.length;i++) if (list[i].k === k) return list[i]; return null; }
    function view(){ var s = sents(); $('.ms-tl-pl.a p', show).textContent = s[0] || 'Your alike label.'; $('.ms-tl-pl.d p', show).textContent = s.slice(1).join(' ') || 'Your different label.';
      $('.ms-tl-by', show).textContent = 'Labels by ' + (sget(NAMEK,'') || 'Junior Curator') + ', United States Region Curator';
      show.classList.toggle('open', !!S.open); lightAlcoves(row, S.open ? ['ne','se'] : ['ne'], false); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1 || !S.a || !S.d) { S.step = 1; goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p class="ms-wm-do">👆 '+esc(cfg.s1||'')+'</p><p class="ms-tl-h">🤝 Alike</p><div class="ms-tl-chips">'+chip(AL, 'a')+'</div><p class="ms-tl-h">↔️ Different</p><div class="ms-tl-chips">'+chip(DF, 'd')+'</div>' +
          '<button type="button" class="ms-btn big ms-tl-next'+(S.a && S.d ? '' : ' ms-notready')+'">Next: write your labels ➡️</button><div class="ms-gi-fb" aria-live="polite"></div>');
        $$('.ms-tl-c', act).forEach(function(b){ b.onclick = function(){ S[b.dataset.w] = b.dataset.k; SFX.click(); save(); render(); }; });
        $('.ms-tl-next', act).onclick = function(){ if (!S.a || !S.d) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Pick one alike and one different.</div>'; return; } SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) {
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><div class="ms-cp-notes"><span>🤝 '+esc(pick(AL, S.a).t)+'</span><span>↔️ '+esc(pick(DF, S.d).t)+'</span></div>' +
          '<div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-tl-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-tl-back">↩️ Pick different twins</button><button type="button" class="ms-btn big ms-tl-next">Next: see the labels ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-tl-chk', act), fb = $('.ms-gi-fb', act);
        function upd(){ var n = own(ta.value), k = sents().length, miss = missing(); chk.innerHTML = '<span class="ms-wc'+(n>=OWN?' ok':'')+'">📝 '+Math.min(n,OWN)+' of '+OWN+' words of your own</span><span class="ms-chip'+(k>=2?' ok':'')+'">'+(k>=2?'✓ ':'')+'two sentences</span>';
          $('.ms-tl-next', act).classList.toggle('ms-notready', !!miss.length); if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; }
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b, i){ b.onclick = function(){ var t = (cfg.starters||[])[i]; var v = ta.value.replace(/\s*$/,''); if (v && !/[.!?]$/.test(v)) v += '.'; ta.value = v + (v ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-tl-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-tl-next', act).onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-tl-open">🎉 '+esc(cfg.openT||'Hang them')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-tl-edit">✏️ '+esc(cfg.editT||'Edit my labels')+'</button></div>';
      var ob = $('.ms-tl-open', end); if (ob) ob.onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); setTimeout(function(){ show.classList.remove('opening'); }, 3000); optiNod('assignment'); check(); };
      $('.ms-tl-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.07.04 (Midwest Region Study) ══════════
     DATA.products = the Heartland shelf; DATA.geo.mwBox / lakes5 / mwPts = the Midwest + Great Lakes view.
     - shelf    Lobby: a store shelf; scan each product (tap or drag), its Midwest state lights, a receipt prints
     - window   Gallery main attraction: the Window Seat (fly over the Midwest; tap 3 spots, fly lower, three levels)
     - lakes5   Gallery: fill the five Great Lake beds in order; each glows; HOMES; fresh-water questions
     - mwlabel  Exhibit Floor: pick the front object, write the label in the step, install; the alcove lights gold and the lakes glow */
  function mwMapSVG(cls, label, extra, opt){ opt = opt || {}; var G = DATA.geo;
    var lk = (G.lakes5 || []).map(function(l){ return '<path class="lk5" data-k="'+l.k+'" d="'+l.d+'"><title>'+esc(l.name)+'</title></path>'; }).join('');
    return usSVG(cls, label, '<g class="lk5s">'+lk+'</g>' + (extra || ''), {vb: (opt.vb || G.mwBox).join(' '), insetNames:false}); }
  function prodSVG(k){
    if (k === 'cereal') return '<svg viewBox="0 0 90 120" aria-hidden="true"><rect x="8" y="6" width="74" height="110" rx="4" fill="#E8A33A" stroke="#7E5A16" stroke-width="3"/><rect x="14" y="12" width="62" height="22" rx="3" fill="#B23A2E"/><text x="45" y="28" style="text-anchor:middle" font-size="11" font-weight="900" fill="#fff" font-family="Nunito,sans-serif">WHEAT O\'s</text><circle cx="35" cy="66" r="11" fill="none" stroke="#7E4A16" stroke-width="6"/><circle cx="55" cy="74" r="11" fill="none" stroke="#7E4A16" stroke-width="6"/><circle cx="45" cy="90" r="9" fill="none" stroke="#7E4A16" stroke-width="5"/><path d="M68 44 l0 30 M68 50 l-5 -5 M68 56 l5 -5 M68 62 l-5 -5" stroke="#F5DFA0" stroke-width="2.5" fill="none"/></svg>';
    if (k === 'flakes') return '<svg viewBox="0 0 90 120" aria-hidden="true"><rect x="8" y="6" width="74" height="110" rx="4" fill="#F3D24A" stroke="#7E5A16" stroke-width="3"/><rect x="14" y="12" width="62" height="22" rx="3" fill="#2E7D3A"/><text x="45" y="28" style="text-anchor:middle" font-size="12" font-weight="900" fill="#fff" font-family="Nunito,sans-serif">CORN FLAKES</text><g transform="translate(45 78) rotate(-20)"><ellipse rx="10" ry="26" fill="#F7B733" stroke="#B07A12" stroke-width="2"/><path d="M-10 -6 h20 M-10 4 h20 M-10 14 h20 M-9 -16 h18" stroke="#D99A1E" stroke-width="2"/><path d="M-12 20 q-10 -20 -2 -40 M12 20 q10 -20 2 -40" stroke="#5DA34A" stroke-width="5" fill="none"/></g></svg>';
    if (k === 'cheese') return '<svg viewBox="0 0 90 120" aria-hidden="true"><path d="M10 92 L80 92 L80 56 L10 72Z" fill="#F6C83E" stroke="#B88A12" stroke-width="3"/><path d="M10 72 L80 56 L62 40 Z" fill="#FBE07A" stroke="#B88A12" stroke-width="3"/><circle cx="30" cy="82" r="5" fill="#D9A92E"/><circle cx="58" cy="76" r="7" fill="#D9A92E"/><circle cx="70" cy="86" r="3.5" fill="#D9A92E"/><rect x="18" y="98" width="54" height="14" rx="3" fill="#2F4F7F"/><text x="45" y="109" style="text-anchor:middle" font-size="9" font-weight="900" fill="#fff" font-family="Nunito,sans-serif">CHEDDAR</text></svg>';
    return '<svg viewBox="0 0 90 120" aria-hidden="true"><rect x="10" y="30" width="70" height="80" rx="6" fill="#fff" stroke="#2F4F7F" stroke-width="3"/><path d="M18 76 q4 -18 18 -20 h18 q14 2 18 20 v12 h-54z" fill="#C8322A" stroke="#7A1818" stroke-width="2"/><path d="M30 58 h30 l6 14 h-42z" fill="#BFE3F5"/><circle cx="30" cy="90" r="8" fill="#222"/><circle cx="62" cy="90" r="8" fill="#222"/><circle cx="30" cy="90" r="3" fill="#bbb"/><circle cx="62" cy="90" r="3" fill="#bbb"/><text x="45" y="46" style="text-anchor:middle" font-size="10" font-weight="900" fill="#2F4F7F" font-family="Nunito,sans-serif">TOY CAR</text></svg>';
  }
  function barcode(){ var s = '', x = 4; [2,1,3,1,1,2,1,3,2,1,1,2,3,1,2,1,1,3,1,2].forEach(function(w, i){ if (i % 2 === 0) s += '<rect x="'+x+'" y="2" width="'+w+'" height="16" fill="#111"/>'; x += w + 1; }); return '<svg class="bc" viewBox="0 0 '+(x+4)+' 20" aria-hidden="true"><rect width="'+(x+4)+'" height="20" fill="#fff"/>'+s+'</svg>'; }

  /* ══ MODULE: shelf (Lobby · the Heartland shelf) ══ */
  function modShelf(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor || !DATA.geo) return;
    var PR = DATA.products || [];
    ST.sh = ST.sh || {s:{}, q:false}; var S = ST.sh;
    var m = shell('ms-sh-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-sh-wrap"><div class="ms-sh-left"><div class="ms-sh-shelf"><div class="ms-sh-sign">🛒 Heartland Market</div><div class="ms-sh-row">' +
      PR.map(function(p){ return '<button type="button" class="ms-sh-item" data-k="'+p.k+'" aria-label="Scan: '+esc(p.name)+'">'+prodSVG(p.k)+barcode()+'<span>'+esc(p.name)+'</span></button>'; }).join('') +
      '</div><div class="ms-sh-board"></div></div><div class="ms-sh-scan"><div class="ms-sh-glass"><span class="ms-sh-laser"></span></div><b>Scanner</b><div class="ms-sh-receipt" aria-live="polite"></div></div></div>' +
      '<div class="ms-sh-right"><div class="ms-sh-map">'+mwMapSVG('ms-sh-svg', 'A map of the Midwest. Each state you scan lights up.', '<g class="pins"></g>')+'</div><div class="ms-sh-act"></div></div></div>');
    after(anchor, m);
    var act = $('.ms-sh-act', m), svg = $('.ms-sh-svg', m), rc = $('.ms-sh-receipt', m), scan = $('.ms-sh-scan', m);
    $$('.st', svg).forEach(function(s){ s.classList.toggle('mw', s.dataset.r === 'mw'); });
    function pOf(k){ return PR.filter(function(p){ return p.k === k; })[0]; }
    function paint(){
      $$('.ms-sh-item', m).forEach(function(b){ b.classList.toggle('done', !!S.s[b.dataset.k]); });
      var lit = {}; PR.forEach(function(p){ if (S.s[p.k]) lit[p.state] = p; });
      $$('.st', svg).forEach(function(s){ s.classList.toggle('lit', !!lit[s.dataset.s]); });
      $('.pins', svg).innerHTML = Object.keys(lit).map(function(st){ var c = DATA.geo.states[st].c; return '<g class="pin"><circle cx="'+c[0]+'" cy="'+c[1]+'" r="13"/><text x="'+c[0]+'" y="'+(c[1]+5)+'" style="text-anchor:middle">'+lit[st].icon+'</text></g>'; }).join('');
      rc.innerHTML = '<div class="h">HEARTLAND MARKET</div>' + PR.filter(function(p){ return S.s[p.k]; }).map(function(p){ return '<div class="l"><span>'+p.icon+' '+esc(p.name)+'</span><b>'+esc(p.state)+'</b></div>'; }).join('') + (Object.keys(S.s).length ? '' : '<div class="e">Scan something!</div>');
    }
    function doScan(k){ if (S.s[k]) { show(k); return; } S.s[k] = 1; save(); scan.classList.remove('beep'); void scan.offsetWidth; scan.classList.add('beep'); SFX.stamp(); paint(); show(k); }
    function show(k){ var p = pOf(k); render(p); }
    $$('.ms-sh-item', m).forEach(function(b){ b.addEventListener('click', function(){ doScan(b.dataset.k); }); dragger(b, function(moved, t){ if (moved && t) doScan(b.dataset.k); }, '.ms-sh-scan'); });
    function render(last){
      paint(); var n = Object.keys(S.s).length, N = 2;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (n < PR.length) { act.innerHTML = stepCard(1, N, 'Scan the shelf', '<p class="ms-wm-do">👆 Tap a thing on the shelf, or drag it to the scanner.</p>' +
          (last ? '<div class="ms-sh-tag"><b>'+last.icon+' '+esc(last.name)+' → '+esc(last.state)+'</b><p>'+esc(last.tag)+'</p></div>' : '') + '<p class="ms-sw-left-n">'+(PR.length - n)+' more to scan.</p>'); return; }
      var q = choiceQ(cfg.q, 2, function(){ S.q = true; save(); SFX.fanfare(); markDone('scene'); setTimeout(function(){ render(); }, calm()?0:1500); });
      act.innerHTML = (last ? '<div class="ms-sh-tag"><b>'+last.icon+' '+esc(last.name)+' → '+esc(last.state)+'</b><p>'+esc(last.tag)+'</p></div>' : '') + stepCard(2, N, cfg.q.title, q.html); q.bind(act);
    }
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: window (Gallery main attraction · the Window Seat) ══ */
  function wsRnd(seed){ var s = seed; return function(){ s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
  function wsHigh(){
    var r = wsRnd(7), cols = ['#C9A646','#D8B85A','#7FA34E','#93B65C','#A38A55','#6E9A48','#E0C878','#B99C58'], f = '';
    for (var y = -60; y < 600; y += 58) for (var x = -80; x < 940; x += 64) {
      var c = cols[Math.floor(r() * cols.length)]; f += '<rect x="'+x+'" y="'+y+'" width="62" height="56" fill="'+c+'"/>';
      if (r() < .12) f += '<circle cx="'+(x+31)+'" cy="'+(y+28)+'" r="25" fill="'+(r() < .5 ? '#5E9440' : '#88AF55')+'"/>';
      else if (r() < .35) for (var k = 0; k < 4; k++) f += '<path d="M'+(x+4)+' '+(y+8+k*12)+' h54" stroke="rgba(0,0,0,.08)" stroke-width="3"/>'; }
    var town = ''; for (var i = 0; i < 26; i++) { var tx = 575 + (i%6)*13 + r()*4, ty = 128 + Math.floor(i/6)*12 + r()*3; town += '<rect x="'+tx.toFixed(1)+'" y="'+ty.toFixed(1)+'" width="8" height="7" fill="'+(r()<.5?'#E9E6DE':'#B9B2A4')+'"/>'; }
    return '<g class="lv high"><rect width="800" height="500" fill="#B99C58"/><g transform="rotate(-9 400 250)">'+f +
      '<path d="M-40 140 H900 M-40 372 H900 M140 -80 V620 M524 -80 V620" stroke="#E8E1D0" stroke-width="3"/></g>' +
      '<path class="rv" d="M-20 470 C 120 420, 200 470, 320 400 S 520 300, 560 330 S 700 420, 820 380" stroke="#4E7FA6" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M-20 470 C 120 420, 200 470, 320 400 S 520 300, 560 330 S 700 420, 820 380" stroke="#2F5F3A" stroke-width="30" fill="none" opacity=".35" stroke-linecap="round"/>' +
      '<path d="M-20 470 C 120 420, 200 470, 320 400 S 520 300, 560 330 S 700 420, 820 380" stroke="#4E7FA6" stroke-width="12" fill="none" stroke-linecap="round"/>' +
      '<g class="tw">'+town+'</g><g class="haze"><rect width="800" height="500" fill="#CFE3F2" opacity=".18"/></g>' +
      '<g class="clouds"><ellipse cx="120" cy="80" rx="120" ry="34" /><ellipse cx="200" cy="96" rx="80" ry="26"/><ellipse cx="660" cy="420" rx="130" ry="36"/><ellipse cx="560" cy="440" rx="80" ry="24"/></g></g>';
  }
  function wsFarm(){
    var rows = ''; for (var i = 0; i < 18; i++) rows += '<path d="M'+(-40 + i*24)+' 500 L'+(260 + i*7)+' 168" stroke="#4E7F2E" stroke-width="6" opacity=".55"/>';
    var corn = ''; for (var j = 0; j < 40; j++) { var cx = 10 + (j%10)*30, cy = 380 + Math.floor(j/10)*28; corn += '<path d="M'+cx+' '+cy+' l-6 -16 M'+cx+' '+cy+' l6 -18 M'+cx+' '+cy+' l0 -22" stroke="#6A9A3A" stroke-width="3"/>'; }
    return '<g class="lv farm"><defs><linearGradient id="wsSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EC5EC"/><stop offset="1" stop-color="#DCEEF8"/></linearGradient></defs>' +
      '<rect width="800" height="170" fill="url(#wsSky)"/><path d="M0 150 Q200 136 400 146 T800 140 V176 H0Z" fill="#A9B98A"/>' +
      '<path d="M0 168 H800 V500 H0Z" fill="#D6BF7A"/><path d="M0 168 L300 168 L120 500 L0 500Z" fill="#8FAE4E"/>'+rows +
      '<path d="M300 168 L380 168 L560 500 L120 500Z" fill="#C9A85A"/><path d="M335 168 L345 168 L360 500 L300 500Z" fill="#B8A88A"/>' +
      '<ellipse cx="620" cy="300" rx="190" ry="72" fill="#7BA74A"/><ellipse cx="620" cy="300" rx="190" ry="72" fill="none" stroke="#5E8A36" stroke-width="3" stroke-dasharray="2 10"/><path d="M620 300 L800 270" stroke="#9BA3A8" stroke-width="5"/><path d="M640 297 v10 M680 290 v10 M720 284 v10 M760 277 v10" stroke="#555" stroke-width="5"/>' +
      '<g transform="translate(355 150)"><rect x="-30" y="20" width="56" height="44" fill="#F4F1EA"/><path d="M-36 22 L-2 -2 L32 22Z" fill="#6A5A50"/><rect x="40" y="10" width="70" height="54" fill="#B23A2E"/><path d="M34 12 L50 -12 L100 -12 L116 12Z" fill="#7A2420"/><rect x="66" y="34" width="18" height="30" fill="#5A1A16"/><path d="M66 34 l18 30 M84 34 l-18 30" stroke="#fff" stroke-width="2"/>' +
      '<g transform="translate(130 0)"><rect x="0" y="0" width="30" height="64" fill="#C7CED3"/><path d="M-2 0 L15 -16 L32 0Z" fill="#AEB6BC"/><path d="M0 16 h30 M0 32 h30 M0 48 h30" stroke="#9AA3AA" stroke-width="2"/></g><g transform="translate(166 8)"><rect x="0" y="0" width="26" height="56" fill="#D1D8DC"/><path d="M-2 0 L13 -14 L28 0Z" fill="#B5BDC3"/><path d="M0 14 h26 M0 28 h26 M0 42 h26" stroke="#9AA3AA" stroke-width="2"/></g>' +
      '<circle cx="-60" cy="40" r="22" fill="#4F7F35"/><circle cx="-40" cy="20" r="18" fill="#5E9440"/><circle cx="210" cy="40" r="20" fill="#4F7F35"/></g>' +
      '<g class="cmb" transform="translate(150 300)"><path d="M-70 60 L60 60 L80 120 L-90 120Z" fill="#D6BF7A" opacity=".9"/><rect x="0" y="0" width="70" height="40" rx="5" fill="#2E8B3A"/><rect x="40" y="-22" width="28" height="24" rx="3" fill="#BFE3F5" stroke="#2E8B3A" stroke-width="4"/><rect x="-46" y="22" width="52" height="16" fill="#E8C33A"/><circle cx="16" cy="44" r="14" fill="#222"/><circle cx="58" cy="44" r="10" fill="#222"/><path d="M8 -6 q-14 -26 -40 -30" stroke="#2E8B3A" stroke-width="8" fill="none"/><g class="dust"><circle cx="90" cy="20" r="14"/><circle cx="110" cy="8" r="18"/><circle cx="134" cy="0" r="12"/></g></g>' + corn + '</g>';
  }
  function wsTown(){
    var houses = ''; [[470,250],[540,240],[610,250],[690,240],[740,262]].forEach(function(p, i){ houses += '<g transform="translate('+p[0]+' '+p[1]+')"><rect x="0" y="0" width="40" height="30" fill="'+['#F2E9D8','#CFE0EA','#F5D7B5','#DDE8C8','#EAD3E0'][i]+'"/><path d="M-4 2 L20 -16 L44 2Z" fill="#7A5A48"/><rect x="16" y="14" width="9" height="16" fill="#5A4A3A"/></g>'; });
    var shops = ''; ['#B23A2E','#2F7FBF','#E8A33A','#3FA47A','#8B6FC0','#D9774A'].forEach(function(c, i){ var x = 360 + i*70; shops += '<g transform="translate('+x+' 330)"><rect width="66" height="70" fill="#E9DCC3"/><rect y="0" width="66" height="10" fill="#9C7A55"/><path d="M0 30 h66 l-6 10 h-54z" fill="'+c+'"/><rect x="8" y="44" width="22" height="26" fill="#BFE3F5"/><rect x="38" y="44" width="20" height="26" fill="#6A4A30"/></g>'; });
    var ppl = ''; [[400,418],[470,422],[560,416],[620,424],[700,420],[740,418]].forEach(function(p, i){ ppl += '<g transform="translate('+p[0]+' '+p[1]+')"><circle cy="-14" r="4" fill="#C98E64"/><rect x="-4" y="-10" width="8" height="12" rx="2" fill="'+['#2F4F7F','#B23A2E','#3FA47A','#E8A33A','#8B6FC0','#2F7FBF'][i]+'"/></g>'; });
    return '<g class="lv town"><rect width="800" height="180" fill="url(#wsSky)"/><path d="M0 170 Q200 160 400 166 T800 160 V200 H0Z" fill="#A9B98A"/><rect y="190" width="800" height="310" fill="#9DBB6E"/>' +
      '<path d="M0 470 L800 400" stroke="#6E5A48" stroke-width="16"/><path d="M0 470 L800 400" stroke="#C7B9A4" stroke-width="3" stroke-dasharray="6 8"/>' +
      '<g transform="translate(40 120)"><rect x="40" y="40" width="44" height="190" fill="#D8D2C4"/><rect x="88" y="40" width="44" height="190" fill="#CFC8B8"/><rect x="136" y="40" width="44" height="190" fill="#D8D2C4"/><path d="M40 40 h140" stroke="#B5AE9E" stroke-width="3"/><rect x="70" y="0" width="80" height="44" fill="#C2BAA8"/><path d="M66 2 L110 -22 L154 2Z" fill="#9C9484"/><text x="110" y="120" style="text-anchor:middle" font-size="16" font-weight="900" fill="#7E6A50" font-family="Nunito,sans-serif">CO-OP</text></g>' +
      '<g transform="translate(40 410)"><rect x="0" y="0" width="70" height="26" rx="3" fill="#B23A2E"/><rect x="74" y="0" width="70" height="26" rx="3" fill="#E8A33A"/><rect x="148" y="0" width="70" height="26" rx="3" fill="#2F4F7F"/><circle cx="16" cy="28" r="6" fill="#222"/><circle cx="54" cy="28" r="6" fill="#222"/><circle cx="90" cy="28" r="6" fill="#222"/><circle cx="128" cy="28" r="6" fill="#222"/><circle cx="164" cy="28" r="6" fill="#222"/><circle cx="202" cy="28" r="6" fill="#222"/></g>' +
      '<g transform="translate(300 60)"><path d="M10 100 L22 30 M50 100 L38 30 M10 100 L50 100" stroke="#7A8A96" stroke-width="5"/><ellipse cx="30" cy="22" rx="34" ry="24" fill="#C9D6DF" stroke="#7A8A96" stroke-width="3"/><text x="30" y="27" style="text-anchor:middle" font-size="10" font-weight="900" fill="#2F4F7F" font-family="Nunito,sans-serif">PRAIRIE</text></g>' +
      houses +
      '<g transform="translate(390 260)"><rect width="140" height="60" fill="#A85A42"/><rect x="50" y="-20" width="40" height="24" fill="#A85A42"/><path d="M46 -18 L70 -38 L94 -18Z" fill="#6A3A2C"/>' + [10,32,96,118].map(function(x){ return '<rect x="'+x+'" y="14" width="14" height="16" fill="#F7E7A8"/>'; }).join('') + '<rect x="60" y="30" width="20" height="30" fill="#4A2A20"/><path d="M160 60 V-10" stroke="#888" stroke-width="3"/><path d="M160 -10 h26 v16 h-26z" fill="#B23A2E"/><path d="M160 -10 h12 v8 h-12z" fill="#2F4F7F"/><text x="70" y="10" style="text-anchor:middle" font-size="9" font-weight="900" fill="#fff" font-family="Nunito,sans-serif">SCHOOL</text></g>' +
      '<rect x="340" y="400" width="460" height="32" fill="#8E8A84"/><path d="M340 416 H800" stroke="#F2E27A" stroke-width="2" stroke-dasharray="12 10"/>' + shops + ppl +
      '<circle cx="250" cy="300" r="22" fill="#4F7F35"/><circle cx="270" cy="286" r="18" fill="#5E9440"/><circle cx="780" cy="300" r="20" fill="#4F7F35"/></g>';
  }
  function modWindow(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var LV = cfg.levels || [];
    ST.ws = ST.ws || {lv:0, seen:{}, step:1, ok:false, sel:null}; var S = ST.ws;
    var m = shell('ms-ws-mod', cfg);
    var scenes = [wsHigh(), wsFarm(), wsTown()];
    var spots = LV.map(function(L, i){ return '<g class="spots" data-lv="'+i+'">'+L.spots.map(function(sp, j){ return '<g class="spot" data-lv="'+i+'" data-k="'+sp.k+'" role="button" tabindex="0" aria-label="'+esc(sp.t)+'" transform="translate('+sp.x+' '+sp.y+')"><circle class="ring2" r="30"/><circle class="ring" r="22"/><text class="n" y="7">'+(j+1)+'</text><text class="ck" y="8">✓</text></g>'; }).join('')+'</g>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-ws-wrap"><div class="ms-ws-cabin"><div class="ms-ws-win"><div class="ms-ws-view"><svg class="ms-ws-svg" viewBox="0 0 800 500" role="img" aria-label="The view from an airplane window over the Midwest.">' + scenes.join('') + spots + '</svg><div class="ms-ws-shade"></div><div class="ms-ws-cap" aria-live="polite"></div></div></div>' +
      '<div class="ms-ws-panel"><div class="ms-ws-alt"><span>Altitude</span><b class="v"></b><div class="bar"><i></i></div></div><div class="ms-ws-over">✈️ Flying over <b></b></div><div class="ms-ws-mini">'+mwMapSVG('ms-ws-msvg', 'A small flight map of the Midwest', '<g class="plane" transform="translate(551 246)"><circle r="10"/><text y="5" style="text-anchor:middle">✈️</text></g>')+'</div></div></div><div class="ms-ws-act"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-ws-act', m), svg = $('.ms-ws-svg', m), cap = $('.ms-ws-cap', m), win = $('.ms-ws-win', m);
    $$('.ms-ws-msvg .st', m).forEach(function(s){ s.classList.toggle('lit', s.dataset.r === 'mw'); s.classList.toggle('me', s.dataset.s === 'Iowa'); });
    function key(i, k){ return i + ':' + k; }
    function paint(anim){
      $$('.lv', svg).forEach(function(g, i){ g.classList.toggle('on', i === S.lv); g.classList.toggle('past', i < S.lv); });
      $$('.spots', svg).forEach(function(g){ g.classList.toggle('on', +g.dataset.lv === S.lv && S.step <= 3); });
      $$('.spot', svg).forEach(function(g){ g.classList.toggle('seen', !!S.seen[key(g.dataset.lv, g.dataset.k)]); g.classList.toggle('sel', S.sel === key(g.dataset.lv, g.dataset.k)); });
      var L = LV[S.lv]; $('.ms-ws-alt .v', m).textContent = L.alt; $('.ms-ws-alt .bar i', m).style.width = [100, 40, 12][S.lv] + '%'; $('.ms-ws-over b', m).textContent = L.over;
      var sp = S.sel && S.sel.split(':')[0] == S.lv ? L.spots.filter(function(x){ return key(S.lv, x.k) === S.sel; })[0] : null;
      cap.innerHTML = sp ? '<b>'+esc(sp.t)+'</b> '+esc(sp.d) : ''; cap.classList.toggle('show', !!sp);
    }
    function tap(i, k){ if (+i !== S.lv || S.step > 3) return; S.seen[key(i, k)] = 1; S.sel = key(i, k); SFX.chime(); save(); paint(); render(); }
    $$('.spot', svg).forEach(function(g){ g.addEventListener('click', function(){ tap(g.dataset.lv, g.dataset.k); }); g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tap(g.dataset.lv, g.dataset.k); } }); });
    function lower(){ SFX.whir(); win.classList.add('dive'); var go = function(){ S.lv++; S.step++; S.sel = null; save(); paint(); render(); win.classList.remove('dive'); };
      if (calm()) go(); else setTimeout(go, 650); }
    function render(){
      paint(); var N = 4;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.step <= 3) { var L = LV[S.lv], all = L.spots.every(function(sp){ return S.seen[key(S.lv, sp.k)]; });
        act.innerHTML = stepCard(S.step, N, L.t + ' · ' + L.alt, '<p class="ms-wm-do">👆 '+esc(L.do)+'</p><div class="ms-ws-list">'+L.spots.map(function(sp, j){ var on = S.seen[key(S.lv, sp.k)]; return '<button type="button" class="ms-ws-li'+(on?' ok':'')+'" data-k="'+sp.k+'"><span class="b">'+(on ? '✓' : (j+1))+'</span><span>'+(on ? '<b>'+esc(sp.t)+'</b> '+esc(sp.d) : '<i>Tap circle '+(j+1)+' in the window, or tap here.</i>')+'</span></button>'; }).join('')+'</div>' +
          (all ? '<button type="button" class="ms-btn big ms-ws-go">'+(S.lv < LV.length - 1 ? '⬇️ '+esc(cfg.lowerT||'Fly lower') : 'Next ➡️')+'</button>' : ''));
        $$('.ms-ws-li', act).forEach(function(b){ b.onclick = function(){ tap(S.lv, b.dataset.k); }; });
        var g = $('.ms-ws-go', act); if (g) g.onclick = function(){ if (S.lv < LV.length - 1) lower(); else { SFX.click(); S.step = 4; S.sel = null; save(); render(); } };
        return; }
      var q = choiceQ(cfg.q, 4, function(){ ST.gal = ST.gal||{}; ST.gal.window = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.ok = true; save(); render(); }, calm()?0:1700); });
      act.innerHTML = stepCard(4, N, cfg.q.title, q.html); q.bind(act);
    }
    setTimeout(function(){ m.classList.add('lifted'); }, calm() ? 0 : 400);
    render();
  }

  /* ══ MODULE: lakes5 (Gallery · fill the five Great Lakes) ══ */
  function modLakes5(cfg){
    var anchor = $(cfg.anchor); if (!anchor || !DATA.geo) return;
    var OR = cfg.order || [], LK = DATA.geo.lakes5 || [];
    ST.lk = ST.lk || {f:{}, step:1, ok:false, last:null}; var S = ST.lk;
    var m = shell('ms-lk5-mod', cfg);
    var labels = LK.map(function(l){ return '<text class="lkn" data-k="'+l.k+'" x="'+l.c[0]+'" y="'+(l.c[1]+4)+'" style="text-anchor:middle">'+esc(l.name.replace('Lake ', ''))+'</text>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-lk5-wrap"><div class="ms-lk5-map">'+mwMapSVG('ms-lk5-svg', 'A map of the Midwest with five empty Great Lake beds along its northern edge.', '<g class="lkl">'+labels+'</g>', {vb:[540, 60, 320, 200]})+'<div class="ms-lk5-homes"></div></div><div class="ms-lk5-act"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-lk5-act', m), svg = $('.ms-lk5-svg', m);
    $$('.st', svg).forEach(function(s){ s.classList.toggle('mw', s.dataset.r === 'mw'); });
    function next(){ for (var i = 0; i < OR.length; i++) if (!S.f[OR[i]]) return OR[i]; return null; }
    function paint(){ var nx = next();
      $$('.lk5', svg).forEach(function(p){ p.classList.toggle('full', !!S.f[p.dataset.k]); p.classList.toggle('nx', p.dataset.k === nx && S.step === 1); });
      $$('.lkn', svg).forEach(function(t){ t.classList.toggle('on', !!S.f[t.dataset.k]); });
      $('.ms-lk5-homes', m).innerHTML = nx ? '' : '<b>H</b>uron · <b>O</b>ntario · <b>M</b>ichigan · <b>E</b>rie · <b>S</b>uperior'; }
    function fill(k){ if (S.step !== 1 || S.f[k]) return; var nx = next();
      if (k !== nx) { SFX.miss(); var fb = $('.ms-exfb', act); var want = LK.filter(function(l){ return l.k === nx; })[0]; if (fb) fb.innerHTML = '<div class="ms-notyet">💧 Fill <b>'+esc(want.name)+'</b> next. It is the glowing lake bed.</div>'; return; }
      S.f[k] = 1; S.last = k; SFX.chime(); save(); paint(); render(); }
    $$('.lk5', svg).forEach(function(p){ p.addEventListener('click', function(){ fill(p.dataset.k); }); });
    function render(){
      paint(); var N = 3, n = Object.keys(S.f).length;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.step === 1) { var lf = S.last && LK.filter(function(l){ return l.k === S.last; })[0];
        act.innerHTML = stepCard(1, N, 'Fill the lake beds', '<p class="ms-wm-do">👆 Tap the glowing lake bed to pour in the water.</p>' + (lf ? '<div class="ms-sh-tag"><b>💧 '+esc(lf.name)+'</b><p>'+esc((cfg.facts||{})[lf.k]||'')+'</p></div>' : '') +
          '<p class="ms-sw-left-n">'+(n < OR.length ? (OR.length - n)+' more to fill.' : '')+'</p><div class="ms-exfb" aria-live="polite"></div>' + (n >= OR.length ? '<p class="ms-lk5-hm">'+esc(cfg.homes||'')+'</p><button type="button" class="ms-btn big ms-lk5-go">Next ➡️</button>' : ''));
        var g = $('.ms-lk5-go', act); if (g) g.onclick = function(){ SFX.click(); S.step = 2; save(); render(); }; return; }
      var Q = S.step === 2 ? cfg.q1 : cfg.q2;
      var cq = choiceQ(Q, S.step, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-lk5-next'; b.textContent = S.step < 3 ? 'Next question ➡️' : 'Done ✓'; $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); if (S.step >= 3) { S.ok = true; ST.gal = ST.gal||{}; ST.gal.lakes = 1; galleryCheck(); SFX.fanfare(); } else S.step++; save(); render(); }; });
      act.innerHTML = stepCard(S.step, N, Q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: mwlabel (Exhibit Floor · the Midwest alcove + glowing lakes) ══ */
  function modMwlabel(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var PR = DATA.products || [], OWN = cfg.ownMin || 10;
    ST.mw = ST.mw || {front:null, step:1, open:false}; var S = ST.mw;
    var m = shell('ms-mw-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-mw-act"></div><div class="ms-mw-show" hidden><div class="ms-mw-lakes">'+mwMapSVG('ms-mw-lsvg', 'The five Great Lakes above the Midwest alcove', '', {vb:[540, 60, 320, 200]})+'</div><div class="ms-ne-alcove ms-mw-alcove" style="'+rcol()+'"><span class="ms-alc-glow"></span><div class="ms-ne-sign">Midwest</div><div class="ms-mw-shelf"></div><div class="ms-ne-label"><p class="tx"></p><p class="by"></p><span class="ms-draft">DRAFT</span></div></div>'+alcoves('ms-mw-row')+'</div><div class="ms-mw-end"></div>');
    var home = document.createComment('mw-home'); ta.parentNode.insertBefore(home, ta); ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-mw-act', m), show = $('.ms-mw-show', m), end = $('.ms-mw-end', m), row = $('.ms-mw-row', m), curUpd = null, lsvg = $('.ms-mw-lsvg', m);
    $$('.st', lsvg).forEach(function(s){ s.classList.toggle('mw', s.dataset.r === 'mw'); });
    $$('.lk5', lsvg).forEach(function(p, i){ p.style.setProperty('--d', (i * .45) + 's'); });
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function words(t){ (cfg.starters||[]).forEach(function(s){ t = t.split(s).join(' '); }); return (t.trim().match(/\S+/g)||[]).length; }
    function missing(){ var miss = []; if (!S.front) miss.push('Pick the front object.'); var n = words(ta.value); if (n < OWN) miss.push('Add '+(OWN-n)+' more word'+(OWN-n===1?'':'s')+' of your own.'); if (!/midwest|heartland/i.test(ta.value)) miss.push('Name the Midwest (or the Heartland) in your label.'); return miss; }
    function pOf(k){ return PR.filter(function(p){ return p.k === k; })[0]; }
    function view(){
      var order = S.front ? [pOf(S.front)].concat(PR.filter(function(x){ return x.k !== S.front; })) : PR;
      $('.ms-mw-shelf', show).innerHTML = order.map(function(p, i){ return '<figure class="'+(i===0?'front':'')+'">'+prodSVG(p.k)+'<figcaption>'+esc(p.name)+'</figcaption></figure>'; }).join('');
      $('.tx', show).textContent = ta.value.trim() || 'Your label will appear here.';
      $('.by', show).textContent = 'Label by ' + (sget(NAMEK,'') || 'Junior Curator') + ', United States Region Curator';
      show.classList.toggle('open', !!S.open); lightAlcoves(row, S.open ? ['ne','se','mw'] : ['ne','se'], false);
      $$('.lk5', lsvg).forEach(function(p){ p.classList.toggle('full', !!S.open); });
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1 || !S.front) { S.step = 1; goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p class="ms-wm-do">👆 '+esc(cfg.s1||'')+'</p><div class="ms-ne-picks ms-mw-picks">'+PR.map(function(p){ return '<button type="button" class="ms-ne-pick'+(S.front===p.k?' on':'')+'" data-k="'+p.k+'" aria-pressed="'+(S.front===p.k)+'">'+prodSVG(p.k)+'<span>'+p.icon+' '+esc(p.name)+'</span></button>'; }).join('')+'</div>' +
          '<button type="button" class="ms-btn big ms-mw-next'+(S.front?'':' ms-notready')+'">Next: write your label ➡️</button><div class="ms-gi-fb" aria-live="polite"></div>');
        $$('.ms-ne-pick', act).forEach(function(b){ b.onclick = function(){ S.front = b.dataset.k; SFX.click(); save(); render(); }; });
        $('.ms-mw-next', act).onclick = function(){ if (!S.front) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Tap one thing first.</div>'; return; } SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) { var p = pOf(S.front);
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<div class="ms-ne-chosen ms-mw-chosen">'+prodSVG(p.k)+'<span>Front object: <b>'+esc(p.name)+'</b> ('+esc(p.what)+' from '+esc(p.state)+')</span></div><p>'+esc(cfg.s2||'')+'</p><div class="ms-cp-notes">'+(cfg.notes||[]).map(function(n){ return '<span>📌 '+esc(n)+'</span>'; }).join('')+'</div>' +
          '<div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-mw-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-mw-back">↩️ Pick a different object</button><button type="button" class="ms-btn big ms-mw-next">Next: see the alcove ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-mw-chk', act), fb = $('.ms-gi-fb', act);
        function upd(){ var n = words(ta.value), miss = missing(), nm = /midwest|heartland/i.test(ta.value); chk.innerHTML = '<span class="ms-wc'+(n>=OWN?' ok':'')+'">📝 '+Math.min(n,OWN)+' of '+OWN+' words of your own</span><span class="ms-chip'+(nm?' ok':'')+'">'+(nm?'✓ ':'')+'names the Midwest</span>';
          $('.ms-mw-next', act).classList.toggle('ms-notready', !!miss.length); if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; }
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b, i){ b.onclick = function(){ var t = (cfg.starters||[])[i]; ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-mw-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-mw-next', act).onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-mw-open">🎉 '+esc(cfg.openT||'Install')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-mw-edit">✏️ '+esc(cfg.editT||'Edit my label')+'</button></div>';
      var ob = $('.ms-mw-open', end); if (ob) ob.onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); setTimeout(function(){ show.classList.remove('opening'); }, 3500); optiNod('assignment'); check(); };
      $('.ms-mw-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  var MODS = { cart: modCart, relief: modRelief, reliefsrc: modReliefsrc, rain: modRain, crates: modCrates, timecase: modTimecase, dial: modDial, wind: modWind, cases: modCases, exhibit: modExhibit, galintro: modGalintro, cultcart: modCultcart, timerail: modTimerail, cultmap: modCultmap, visitors: modVisitors, wordroot: modWordroot, caseex: modCaseex, tokens: modTokens, towntable: modTowntable, magnify: modMagnify, pinmap: modPinmap, storypin: modStorypin, wallpanels: modWallpanels, threads: modThreads, langmap: modLangmap, compare2: modCompare2, findstate: modFindstate, lighttable: modLighttable, landmarks: modLandmarks, nightmap: modNightmap, directory: modDirectory, cratepin: modCratepin, seasons: modSeasons, oldmtn: modOldmtn, harbor: modHarbor, nelabel: modNelabel, wxtwin: modWxtwin, storm: modStorm, sponge: modSponge, twinlab: modTwinlab, shelf: modShelf, window: modWindow, lakes5: modLakes5, mwlabel: modMwlabel, globe: modGlobe, wallmap: modWallmap, spacemap: modSpacemap, sizescale: modSizescale };

  function bindSay(){
    document.addEventListener('click', function(e){
      var b = e.target.closest && e.target.closest('.ms-say'); if (!b) return; e.preventDefault(); e.stopPropagation();
      if (b.dataset.word) playClip('g3ss-word-' + b.dataset.word + '.mp3', WORDS, b);
      else if (b.dataset.clip) playClip('g3ss-' + DATA.lesson.replace(/\./g,'-') + '-' + b.dataset.clip + '.mp3', AUDIO, b);
    }, true);
  }

  /* ══ sliders v2: teal fill + "waiting to be used" glow on every layer slider ══ */
  var SLIDERS = '.ms-lever input[type=range],.ms-yearbar input[type=range],.ms-sp-slide input[type=range],.ms-rt-tilt input[type=range],.ms-tr-slide input[type=range]';
  function sliderPaint(r){
    var lo = +r.min||0, hi = +r.max||100, f = hi>lo ? (+r.value-lo)/(hi-lo)*100 : 0;
    r.style.setProperty('--ms-fill', f+'%');
    var well = r.closest('.ms-lever,.ms-yearbar,.ms-sp-slide,.ms-rt-tilt,.ms-tr-slide');
    if (well) well.classList.toggle('ms-slide-wait', !r.disabled && !r.dataset.used && !well.hidden && +r.value === (well.dataset.start === 'max' ? hi : lo));
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
