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
   Added for 3.07.05 (DATA.items = the DESERT & CANYON crate; DATA.geo.swBox / rio / colorado / swPts):
   - rainjars   Lobby: three jars fill with a year of rain; pick Phoenix; open the crate
   - canyon     Gallery main attraction: Carve the Grand Canyon (knob through 6 million years, tap six rock layers)
   - walls      Gallery: the thick walls test (thin hut vs thick adobe hut, noon and midnight)
   - swsign     Exhibit Floor: Where / Land / People ideas, 3 sentences in the step, install; a sunset sweeps the alcove row
   Added for 3.07.06 (DATA.geo.big = Alaska + Hawaii in their real places):
   - akhi       Lobby: zoom out, drag Alaska and Hawaii out of their boxes to their real places, lay Alaska over the lower 48
   - rainshadow Gallery main attraction: wind over flat land, raise the Cascades, wind again (wet side vs rain shadow)
   - hotspot    Gallery: move the ocean floor over the Hawaiian hot spot; four islands grow and age
   - westfinale Exhibit Floor: West sign + gallery plaque (pattern + difference), install; all five alcoves, chandeliers, Region Guide badge
   Added for 3.07.07 (DATA.radioBase = radio clips; DATA.songURL = full Home on the Range):
   - radio      Lobby: an old radio; power on, slide the dial across the U.S. (static between), five real old recordings, guess each region
   - tapedeck   Gallery main attraction: five story tapes (song, legend, poem, news, Hopi story); read along, tap the home region
   - newspaper  Gallery: unfold a 1965 front page, find what / when / where / who / how neighbors helped
   - onair      Exhibit Floor: Listening Station sign (3 sentences in the step), flip the switch: ON AIR, waves, all five alcoves hum
   Added for 3.07.08 (DATA.people = six contributors; DATA.cher = Cherokee glyph paths, Noto Sans Cherokee OFL):
   - who        Lobby: cart of six covered objects; lift a cloth, read the clue, pick the person
   - cwall      Gallery main attraction: hang six name plaques on their object frames; gold threads draw each life path on the U.S. map
   - syllabary  Gallery: tap Sequoyah's symbols to write tsa-la-gi (Cherokee) and o-si-yo (hello)
   - founder    Exhibit Floor: wall sign + a plaque for someone from your region, cut the ribbon: the whole gallery lights up
   Added for 3.08.01 (DATA.cards = ten evidence cards; DATA.ledger = HAS / GETS FROM OTHERS chips per region; DATA.evop = six notes):
   - evcards    Lobby: spilled evidence cards → five region trays at the council table; seats light
   - ledger     Gallery main attraction: the council ledger, one page per region, HAS / GETS FROM OTHERS; gold line shows every region needs others
   - evop       Gallery: the clerk's in-tray, one note at a time into EVIDENCE or OPINION
   - council    Exhibit Floor: one resource per region + 2 own sentences → press the wax seal; five council seats light, bell
   Added for 3.08.02 (DATA.reports = five water reports; DATA.users = Colorado River users; DATA.cards = six evidence cards by side):
   - sealq      Lobby: break the wax seal → FRESH WATER card, five seats rise; tap each seat's water report
   - river      Gallery main attraction: melt the snow, open each user's gate; the river dries before the sea
   - weigh      Gallery: evidence cards onto the council scale (Southwest / West) → vote + one reason (journal-vote moves in)
   - recommend  Exhibit Floor: region + two evidence chips + 2 own sentences → the council votes: placards flip, stamp, Marketplace Hall door opens a crack
   Added for 3.09.01 (DATA.families = the bread line; DATA.tables = three market tables; DATA.must / DATA.fun = day-ring blocks):
   - breadline    Lobby: two loaves, three families; hand them out → who got none? → scarce even if some is left?
   - choicebasket Gallery main attraction: take one of two at each of three tables; the other goes to the GIVEN UP shadow shelf
   - dayring      Gallery: a 24-hour ring; must-dos, then fun blocks until nothing fits; can money buy more hours?
   - hallopen     Exhibit Floor: Intro Panel (3 own sentences, task box moves in) → hangs on the arch, awnings unroll, lanterns light, OPEN
   Added for 3.09.02 (DATA.towns = coast + valley has / needs; DATA.cases = six trade-or-not cards):
   - twotables    Lobby: two trade tables; tap HAS / NEEDS tags; could they help each other?
   - traderoad    Gallery main attraction: load two carts, send them down the road; goods swap; both pantries fill; BOTH BETTER OFF
   - tradesort    Gallery: six cards one at a time, A trade / Not a trade
   - fairtrade    Exhibit Floor: Trade and Choice panel (choice, scarcity, benefit, consequence) → tables slide together, handshake, FAIR TRADE stamp
   Added for 3.09_03 (DATA.booths, DATA.wishes, DATA.stops, DATA.keepers + DATA.deals):
   - wrongbooth   Lobby: four visitors with wish cards; tap or drag each to the booth that can help
   - backpack     Gallery main attraction: the Backpack Test; goods drop into Max's backpack, services change Max
   - coinring     Gallery: Follow the Coins; five deals around a ring (one paid by trade); everyone ends a buyer AND a seller
   - boothsigns   Exhibit Floor: four label boxes move into the step → signs swing down over the booths, visitors walk to the right booths
   Added for 3.09_04 (DATA.villagers, DATA.items + DATA.tests, DATA.stalls):
   - barter       Lobby: trade a goat around a chain to get bread, then pay the baker with coins in one stop
   - testbench    Gallery main attraction: the Money Test Bench; four machines test a coin, a bill, a shell, salt; the salt melts in the rain
   - trustswitch  Gallery: one $5 bill buys at three stalls; flip the town's trust off and the same bill is refused
   - chococase    Exhibit Floor: chocolate-bar test (4 rule boxes + final panel move into the steps) → it slides into the money case with a placard
   Added for 3.09_05 (DATA.stands, DATA.stops, DATA.islands + DATA.ecIslands + DATA.caribMap/caribMarks):
   - snackstand      Lobby: try to pay with U.S. dollars in Canada and Mexico; each seller kindly names their own currency
   - exchtrip        Gallery main attraction: four stops (Canada, Mexico, Jamaica, St. Lucia); exchange at the booth, then pay with the right money
   - islandmap       Gallery: Caribbean map (Natural Earth); tap Jamaica, Cuba, Puerto Rico; the Eastern Caribbean dollar lights eight islands
   - neighborpanels  Exhibit Floor: Canada / Mexico / Caribbean / closing boxes move into the step → panels hang on the wider money case
   Added for 3.09_06 (DATA.naMap, DATA.trRegions, DATA.trRoutes, DATA.trVeh, DATA.trFoods):
   - growtest   Lobby: a farm in Canada; plant wheat, plant an orange tree, move to January (it freezes); 2 questions
   - routemap   Gallery main attraction: drag each crate to the region that needs it (or tap), the arrow draws, pick truck / train / ship
   - breakfast  Gallery: tap 5 breakfast foods; each flies to where it grew and an arrow runs to Your kitchen
   - shiptag    Exhibit Floor: pick a route, the 4 frame boxes move into the step, the tag ties onto that arrow on the wall map
   Added for 3.09_07 (DATA.dbTiles, DATA.dbYears, DATA.puItems):
   - toystand   Lobby: grab the blinking $5 toy, then the lunch snack can't be bought; 2 questions
   - decboard   Gallery main attraction: 8 tiles into Costs / Benefits, Heavy or Light, council vote, harbor town Year 0 to 10 on a slider
   - freepuppy  Gallery: tap 6 things around a FREE puppy (4 costs, 2 benefits); Evidence Q1 box moves into the last step
   - mytiles    Exhibit Floor: pick fruit or game, the Costs / Benefits / Decision boxes move into the steps and become tiles, DECIDED stamp
   Added for 3.09_08 (DATA.tmRows, DATA.tmDays, DATA.inScales):
   - honestybox Lobby: an egg stand with a jar and no seller; pay or walk off, then the stand one week later both ways; 2 questions
   - twomarkets Gallery main attraction: Market A and Market B, look inside 5 pairs of booths, run Day 1 / Week 1 / Month 1; 2 questions
   - inspector  Gallery: a 1 pound test weight on 4 scales, seal or FIX IT tag; question; fact; Evidence Q3 box moves into the last step
   - plaque     Exhibit Floor: pick 4 unit words, write the Wise Trader plaque one line at a time, hang it; the hall lights, badge card shows
   Added for 3.10_01 (DATA.fxSpots, DATA.fxTools, DATA.tjBuys):
   - corner     Lobby: a crossing with no signs; everyone jams, add stop signs, they take turns; 2 questions
   - fixtown    Gallery main attraction: the model town's 3 troubles, pick each fix, name the job (order, safety, the common good); 2 questions
   - townjar    Gallery: 10 families fill the Town Jar (taxes), buy a park, a library, a fire truck; question; Evidence Q2 box moves into the last step
   - firstlabel Exhibit Floor: pick a job and an example, the label box moves into the step, hang it; the hall's lamps come on
   Added for 3.10_02 (DATA.kqCards, DATA.halls):
   - recess     Lobby: the Recess Boss picks the game, then the class votes; 2 questions
   - powerflip  Gallery main attraction: a king's square (arrows down) → We the People (ballots, a chosen leader, arrows up) → the Constitution above everyone; 2 questions
   - korp       Gallery: King or President? 6 cards onto two stands (tap or drag)
   - caselamp   Gallery source: lift the cloth; a lamp moves down page 1 of the Constitution to 3 stops; Evidence Q3 box moves into the last step
   - wordbuild  Workroom: build 4 words from tiles (stitu), then pick the meaning
   - ballot     Exhibit Floor: side → 2 reasons → 1 evidence → 3 to 5 sentences in the step → drop the ballot; We lights, every hall lights
   Added for 3.10_03 (DATA.levels, DATA.floorTix; shared lvTower() drawing):
   - envelope   Lobby: address a letter line by line (town → Florida → USA); each line lights one level of the model; 2 questions
   - whichfloor Gallery main attraction: Which Floor? tickets, press floor 1/2/3, the elevator rides up; 2 questions
   - schoolxray Gallery: one school, three colored layers; 1 question; Evidence Q3 box moves into the last step
   - threebldg  Gallery source: three real buildings matched to their level; 2 questions
   - loctrain   Workroom: loc words hook onto a little train by meaning
   - plaques    Exhibit Floor: a plaque per level + a base plaque, the task box in the last step; the model lights and beams join a school
   Added for 3.10_04 (DATA.flSyms; shared flMap(), flSealDraw(), flCaseSvg()):
   - nameland    Lobby: 1513, sail closer, tap 7 blossoms to spell LA FLORIDA, turn the calendar to Pascua Florida Day; 2 questions
   - greenbook   Gallery: the green-and-gold Florida Constitution, 3 pages, 1 question each
   - spotfix     Gallery main attraction: the 1879 old seal vs a drawing of today's; tap the 3 fixes of 1985, then today's 4 parts; 2 questions
   - heroniche   Gallery: Mary McLeod Bethune's niche, 3 objects; 1 question; Evidence Q3 box moves into the last step
   - bloombranch Workroom: flor words open buds on an orange branch
   - flcase      Exhibit Floor: palm or seal → 2 reasons → 1 evidence → sentences → the case lights, the seal stamps the green book
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
    var SKIP = '.intro-card-head,.ms-mod-h,.step-badge,.ms-opti .ms-on,.ms-part-k,.ms-pl-m,.ms-credit,.source-label-bar,button,.quiz-opt,textarea,input,select,label,a,script,style,svg,.ms-term,.ms-tip,.ms-ocard,.ms-crate,.ms-tagcard .acc,.ms-gstep,.ms-tabs,.ms-thumbs,.header,.ms-sign,.ms-plate,.video-wrap,.ms-hd-panel,.ms-label,.ms-excheck,.ms-phtag,summary,.ms-sheet,.ms-shelf,.ms-exp,.ms-dplinth,.gathered-box,#gatheredAnswers,.ms-gi-wall,.ms-gi-row,.ms-gi-sent,.ms-gi-dirs,.ms-cc-tagn,.ms-cc-plate,.ms-cm-key,.ms-cm-card b,.ms-vd-case,.ms-wr-word,.ms-wr-card,.ms-tr-ev,.ms-tr-sc b,.ms-ce-label,.ms-ce-show,.ms-tr-wall,.ms-tk,.ms-tk-scene,.ms-tt-svg,.ms-tt-count,.ms-mg-clue,.ms-pm-map,.ms-spn-show,.ms-pm-tk,.ms-spn-city,.ms-wp-wall,.ms-wp-strip,.ms-wp-picks,.ms-th-map,.ms-lm-map,.ms-lm-key,.ms-cp-show,.ms-chipbtn,.ms-cp-notes,.ms-alc-row,.ms-dir-show,.ms-dir-sent,.ms-fs-chips,.ms-fs-list,.ms-lk-mini,.ms-lk-kind,.ms-lt-card,.ms-lt-stack,.ms-dir-regs,.ms-cr-crate,.ms-cr-tray,.ms-cr-map,.ms-sw-wheel,.ms-sw-chips,.ms-om-svg,.ms-hb-date,.ms-ne-picks,.ms-ne-shelf,.ms-ne-sign,.ms-ne-chosen,.ms-wt-win figcaption,.ms-wt-therm,.ms-st-months,.ms-st-line,.ms-sp-res,.ms-tl-chips,.ms-tl-pair,.ms-cr-tray,.ms-sh-shelf,.ms-sh-scan,.ms-ws-panel,.ms-ws-cap,.ms-ws-list,.ms-lk5-homes,.ms-mw-shelf,.ms-rj-jars,.ms-rj-map,.ms-cy-svg,.ms-cy-list,.ms-cy-tag,.ms-wl-svg,.ms-wl-tab,.ms-sws-chips,.ms-sws-alcove,.ms-ak-map,.ms-ak-tray,.ms-rsh-svg,.ms-hs-svg,.ms-wf-show,.ms-rd-wrap,.ms-td-stage,.ms-np-paper,.ms-oa-show,.ms-who-cart,.ms-cw-stage,.ms-syl-stage,.ms-fd-show,.ms-ev-table,.ms-lg-book,.ms-eo-desk,.ms-cs-show,.ms-sl-room,.ms-rv-stage,.ms-wg-stage,.ms-rc-show,.ms-bl-stage,.ms-cb-stage,.ms-dr-stage,.ms-ho-stage,.ms-tw-stage,.ms-tro-stage,.ms-ts-stage,.ms-ft-stage,.ms-wb-stage,.ms-bp-stage,.ms-cr-stage,.ms-bs-stage,.ms-bx-stage,.ms-tb-stage,.ms-tsw-stage,.ms-ch-stage,.ms-sn-stage,.ms-xt-stage,.ms-is-stage,.ms-nb-stage,.ms-gw-stage,.ms-rm-stage,.ms-bk-stage,.ms-sg-stage,.ms-ty-stage,.ms-db-stage,.ms-pu-stage,.ms-mt-stage,.ms-pu-note,.ms-hb-stage,.ms-tm-stage,.ms-in-stage,.ms-pq-stage,.ms-pq-words,.ms-pq-my,.ms-xr-stage,.ms-fx-stage,.ms-tj-stage,.ms-fl-stage,.ms-tj-note,.ms-rb-stage,.ms-pw-stage,.ms-kq-stands,.ms-lp-case,.ms-bt-stage,.ms-lp-note,.ms-en-stage,.ms-el-stage,.ms-el-panel,.ms-el-tix,.ms-sx-stage,.ms-bq-wall,.ms-tn-stage,.ms-tn-word,.ms-pk-stage,.ms-pk-chips,.ms-sx-note,.ms-nl-stage,.ms-gb-stage,.ms-sf-pair,.ms-hn-stage,.ms-bb-stage,.ms-fc-stage,.ms-bb-word';
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
    if (cfg.wide) m.classList.add('ms-nt-wide');
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

  /* ══════════ Added for 3.07.05 (Southwest Region Study) ══════════
     DATA.items = the DESERT & CANYON crate; DATA.geo.swBox / rio / colorado / swPts = the Southwest view.
     - rainjars  Lobby: three jars fill with one year of rain (Chicago, Phoenix, Miami); pick Phoenix; then the crate opens
     - canyon    Gallery main attraction: Carve the Grand Canyon (knob through 6 million years; tap the six rock layers)
     - walls     Gallery: the thick walls test (thin hut vs thick adobe hut; noon, then midnight)
     - swsign    Exhibit Floor: pick Where / Land / People, write 3 sentences in the step, install; a sunset sweeps the alcove row */
  function swMapSVG(cls, label, extra, opt){ opt = opt || {}; var G = DATA.geo;
    return usSVG(cls, label, '<path class="sw-co" d="'+G.colorado+'"/><path class="sw-rio" d="'+G.rio+'"/>' + (extra || ''), {vb: (opt.vb || G.swBox).join(' '), insetNames:false}); }
  function swItemSVG(k){
    if (k === 'rock') return '<svg viewBox="0 0 120 90" aria-hidden="true"><ellipse cx="60" cy="80" rx="44" ry="6" fill="rgba(0,0,0,.18)"/><path d="M18 70 C10 52 22 30 44 24 C66 16 92 22 104 42 C114 60 102 78 80 80 C58 82 30 82 18 70Z" fill="#B4533A"/><path d="M26 64 C24 50 34 36 50 32 C64 28 82 30 92 42" fill="none" stroke="#D9774A" stroke-width="5" stroke-linecap="round" opacity=".7"/><path d="M30 72 C50 76 76 76 96 66" fill="none" stroke="#7E3322" stroke-width="4" opacity=".5"/><circle cx="70" cy="50" r="3" fill="#8E3D28"/><circle cx="48" cy="58" r="2" fill="#8E3D28"/></svg>';
    if (k === 'cactus') return '<svg viewBox="0 0 120 120" aria-hidden="true"><ellipse cx="60" cy="112" rx="32" ry="5" fill="rgba(0,0,0,.18)"/><path d="M50 70 V30 a10 10 0 0 1 20 0 V70Z" fill="#5E9A4A" stroke="#3E6E30" stroke-width="2"/><path d="M50 56 H40 a8 8 0 0 1 -8 -8 V40 a6 6 0 0 1 12 0 V46 H50Z M70 50 H80 V36 a6 6 0 0 1 12 0 V46 a8 8 0 0 1 -8 8 H70Z" fill="#5E9A4A" stroke="#3E6E30" stroke-width="2"/><path d="M60 22 V70 M55 26 V70 M65 26 V70" stroke="#3E6E30" stroke-width="1.2" opacity=".6"/><g stroke="#F4EBC8" stroke-width="1.4"><path d="M50 36 l-5 -2 M70 40 l5 -2 M50 50 l-5 -1 M70 60 l5 -1 M38 42 l-5 -2 M86 40 l5 -2"/></g><circle cx="60" cy="19" r="4" fill="#F2C3D6"/><path d="M34 70 H86 L80 110 H40Z" fill="#C8693E"/><rect x="30" y="66" width="60" height="10" rx="3" fill="#B25A32"/><path d="M42 88 h36" stroke="#E7A57A" stroke-width="3"/></svg>';
    if (k === 'canyon') return '<svg viewBox="0 0 120 100" aria-hidden="true"><rect x="6" y="4" width="108" height="92" rx="3" fill="#FBF8F0" stroke="#D8CFB8" stroke-width="2"/><defs><linearGradient id="swPh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5C4C8A"/><stop offset=".55" stop-color="#E9865A"/><stop offset="1" stop-color="#F8D07A"/></linearGradient></defs><rect x="12" y="10" width="96" height="66" fill="url(#swPh)"/><path d="M12 44 L40 44 L44 50 L58 50 L62 58 L76 58 L80 50 L96 50 L100 44 L108 44 V76 H12Z" fill="#9C4A30"/><path d="M12 56 L36 56 L44 64 L58 70 L72 70 L84 62 L108 60 V76 H12Z" fill="#6E3424"/><path d="M52 76 Q60 70 68 76" stroke="#6FB2D9" stroke-width="3" fill="none"/><circle cx="88" cy="30" r="7" fill="#FFE9A8"/><text x="60" y="89" text-anchor="middle" font-size="9" font-weight="800" fill="#7A6A4A" font-family="Nunito,sans-serif">Grand Canyon</text></svg>';
    return '<svg viewBox="0 0 120 100" aria-hidden="true"><path d="M8 14 L40 6 L80 14 L112 6 V86 L80 94 L40 86 L8 94Z" fill="#F3E6C4" stroke="#B49A6A" stroke-width="2"/><path d="M40 6 V86 M80 14 V94" stroke="#D8C49A" stroke-width="2"/><path d="M30 12 C34 26 30 36 38 46 C46 56 44 62 54 68 C64 74 70 70 80 78 C88 84 96 84 104 90" stroke="#3E86C2" stroke-width="5" fill="none" stroke-linecap="round"/><text x="62" y="40" font-size="10" font-weight="900" fill="#2F4F7F" font-family="Nunito,sans-serif">RIO GRANDE</text><text x="22" y="80" font-size="8" font-weight="800" fill="#7A6A4A" font-family="Nunito,sans-serif">TEXAS</text><text x="84" y="64" font-size="8" font-weight="800" fill="#7A6A4A" font-family="Nunito,sans-serif">MEXICO</text></svg>';
  }

  /* ══ MODULE: rainjars (Lobby · three rain jars + the DESERT & CANYON crate) ══ */
  function modRainjars(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor || !DATA.geo) return;
    var J = cfg.jars || [], IT = DATA.items || [], P = DATA.geo.swPts || {}, MAXI = 70;
    ST.rj = ST.rj || {step:1, poured:false, pick:null, seen:{}, open:false}; var S = ST.rj;
    var m = shell('ms-rj-mod', cfg);
    var pins = J.map(function(j, i){ var c = P[j.k]; return '<g class="cpin" data-k="'+j.k+'"><circle cx="'+c[0]+'" cy="'+c[1]+'" r="20"/><text class="n" x="'+c[0]+'" y="'+(c[1]+9)+'" style="text-anchor:middle">'+'ABC'[i]+'</text><text class="nm" x="'+(c[0]+(j.k==='miami'?-26:26))+'" y="'+(c[1]+(j.k==='miami'?-22:11))+'" style="text-anchor:'+(j.k==='miami'?'end':'start')+'">'+esc(j.city.split(',')[0])+'</text></g>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-rj-wrap"><div class="ms-rj-jars">'+J.map(function(j, i){ return '<button type="button" class="ms-rj-jar" data-k="'+j.k+'" aria-label="Jar '+'ABC'[i]+'"><span class="lbl">Jar '+'ABC'[i]+'</span><span class="glass"><span class="water" style="--h:'+Math.round(j['in']/MAXI*100)+'%"></span><span class="marks"><i></i><i></i><i></i></span><span class="drops"></span></span><span class="cap"></span></button>'; }).join('')+'</div>' +
      '<div class="ms-rj-map">'+usSVG('ms-rj-svg', 'A map of the United States with three cities: Chicago in the Midwest, Miami in the Southeast, and Phoenix in the Southwest.', '<g class="cpins">'+pins+'</g>', {insetNames:false})+'</div></div><div class="ms-rj-act"></div>');
    after(anchor, m);
    var act = $('.ms-rj-act', m), svg = $('.ms-rj-svg', m);
    $$('.st', svg).forEach(function(s){ s.classList.toggle('lit', ['se','mw','sw'].indexOf(s.dataset.r) >= 0); });
    function jarOf(k){ return J.filter(function(j){ return j.k === k; })[0]; }
    function paint(){
      m.classList.toggle('poured', !!S.poured); var named = S.pick === 'phoenix';
      $$('.ms-rj-jar', m).forEach(function(b){ var j = jarOf(b.dataset.k); b.classList.toggle('me', named && j.k === 'phoenix'); b.classList.toggle('no', S.miss === j.k && !named);
        $('.cap', b).innerHTML = named ? '<b>'+esc(j.city.split(',')[0])+'</b> '+esc(j.label) : (S.poured ? '?' : ''); });
      $$('.cpin', svg).forEach(function(g){ g.classList.toggle('named', named); });
    }
    function pour(){ if (S.poured) return; SFX.whir(); S.poured = true; save(); paint(); render(); }
    function pick(k){ if (!S.poured || S.step !== 2 || S.pick === 'phoenix') return;
      if (k !== 'phoenix') { SFX.miss(); S.miss = k; paint(); var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 '+esc(cfg.pickWrong||'')+'</div>'; return; }
      SFX.chime(); S.pick = 'phoenix'; S.miss = null; save(); paint(); render(); }
    $$('.ms-rj-jar', m).forEach(function(b){ b.addEventListener('click', function(){ pick(b.dataset.k); }); });
    function crateHTML(){ return '<div class="ms-cr-crate ms-rj-crate '+(S.open?'open':'')+'"><div class="ms-cr-lid"></div><div class="ms-cr-box"><b>DESERT &amp; CANYON</b><span>Fragile · Museum Objects</span></div><div class="ms-cr-tray">'+(S.open ? IT.map(function(it){ return '<button type="button" class="ms-cr-th'+(S.seen[it.k]?' seen':'')+'" data-k="'+it.k+'" aria-label="Look closer: '+esc(it.name)+'">'+swItemSVG(it.k)+'<span>'+(S.seen[it.k]?'✓ ':'')+it.icon+' '+esc(it.name)+'</span></button>'; }).join('') : '')+'</div></div>'; }
    function look(k){ var it = itemOf(k); SFX.click(); S.seen[k] = 1; save();
      var map = swMapSVG('ms-rj-lbmap', 'A map of the Southwest. '+it.state+' is lit.', '');
      (it.states||[]).forEach(function(s){ map = map.replace('class="st" data-s="'+s+'"', 'class="st lit" data-s="'+s+'"'); });
      lightbox('<figure class="ms-wp-lb ms-rj-lb"><div class="pic">'+swItemSVG(it.k)+'</div><div class="mp">'+map+'</div><figcaption><b>'+it.icon+' '+esc(it.name)+'</b> · from '+esc(it.state)+'<br>'+esc(it.tag)+'</figcaption></figure>', null, function(){ render(); }); render(); }
    function bindCrate(){ $$('.ms-rj-crate .ms-cr-th', m).forEach(function(b){ b.onclick = function(){ look(b.dataset.k); }; }); }
    function render(){
      paint(); var N = 4;
      if (S.step >= 5) { act.innerHTML = crateHTML() + '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; bindCrate(); return; }
      if (S.step === 1) {
        act.innerHTML = stepCard(1, N, 'Start the rain', S.poured ? '<p class="ms-wm-do">💧 One whole year of rain has fallen into each jar.</p><button type="button" class="ms-btn big ms-rj-go">Next ➡️</button>'
          : '<p>Each jar is empty. Tap the button to let one whole year of rain fall into each jar.</p><button type="button" class="ms-btn big ms-rj-pour">🌧️ Start the rain</button>');
        var p = $('.ms-rj-pour', act); if (p) p.onclick = pour;
        var g = $('.ms-rj-go', act); if (g) g.onclick = function(){ SFX.click(); S.step = 2; save(); render(); }; return; }
      if (S.step === 2) { var ok = S.pick === 'phoenix';
        act.innerHTML = stepCard(2, N, 'Which jar is Phoenix?', ok ? '<div class="ms-sh-tag"><p>'+(cfg.pickOk||'')+'</p></div><button type="button" class="ms-btn big ms-rj-go">Next ➡️</button>'
          : '<p class="ms-wm-do">👆 Phoenix, Arizona, is in a desert. Tap the jar you think is from Phoenix.</p><div class="ms-exfb" aria-live="polite"></div>');
        var g2 = $('.ms-rj-go', act); if (g2) g2.onclick = function(){ SFX.click(); S.step = 3; save(); render(); }; return; }
      if (S.step === 3) { var all = IT.every(function(it){ return S.seen[it.k]; });
        act.innerHTML = stepCard(3, N, 'Open the crate', S.open ? '<p class="ms-wm-do">👆 Tap each object to read its tag.</p>' + crateHTML() + (all ? '<button type="button" class="ms-btn big ms-rj-go">Next ➡️</button>' : '<p class="ms-sw-left-n">'+IT.filter(function(it){ return !S.seen[it.k]; }).length+' more to look at.</p>')
          : '<p>A heavy crate waits by the fourth alcove.</p>' + crateHTML() + '<button type="button" class="ms-btn big ms-rj-open">📦 '+esc(cfg.crateT||'Open the crate')+'</button>');
        var o = $('.ms-rj-open', act); if (o) o.onclick = function(){ SFX.creak(); S.open = true; save(); render(); };
        var g3 = $('.ms-rj-go', act); if (g3) g3.onclick = function(){ SFX.click(); S.step = 4; save(); render(); };
        bindCrate(); return; }
      var q = choiceQ(cfg.q, 4, function(){ setTimeout(function(){ S.step = 5; save(); render(); }, calm()?0:1500); markDone('scene'); SFX.fanfare(); });
      act.innerHTML = stepCard(4, N, cfg.q.title, q.html); q.bind(act);
    }
    render(); if (S.step >= 5) markDone('scene');
  }

  /* ══ MODULE: canyon (Gallery main attraction · Carve the Grand Canyon) ══ */
  function cyProfile(k, LY){
    // y of each layer top (130 = the flat land); returns the polygon of the cut for depth fraction k
    var top = 130, ys = [top], y = top; LY.forEach(function(l){ y += l.h; ys.push(y); });
    var floor = top + k * (ys[ys.length-1] - 22 - top); if (k <= 0) return {d:'', w:'', floor:top, ys:ys};
    var cx = 400, L = [], R = [], half = 10;
    var pts = [[floor, half]];
    for (var i = LY.length - 1; i >= 0; i--) { var yt = ys[i], yb = ys[i+1]; if (yt >= floor) continue;
      var from = Math.min(yb, floor), dh = from - yt, l = LY[i];
      if (l.hard === 2) { half += dh * .32; pts.push([yt, half]); }
      else if (l.hard === 1) { half += dh * .22; pts.push([yt, half]); half += 6; pts.push([yt - .1, half]); }
      else { half += dh * 1.15; pts.push([yt, half]); } }
    pts.forEach(function(p){ L.push((cx - p[1] * 1.04).toFixed(1)+' '+p[0].toFixed(1)); R.push((cx + 18 + p[1] * .96).toFixed(1)+' '+p[0].toFixed(1)); });
    var w = 'M' + L.reverse().join(' L') + ' L' + R.join(' L'), d = w + 'Z';
    return {d: d, w: w, floor: floor, ys: ys, rim: pts[pts.length-1][1]};
  }
  function modCanyon(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var LY = cfg.layers || [], MY = cfg.maxYrs || 6, STEPS = 60;
    ST.cy = ST.cy || {t:0, step:1, seen:{}, sel:null, ok:false}; var S = ST.cy;
    var m = shell('ms-cy-mod', cfg);
    var y = 130, lay = LY.map(function(l, i){ var g = '<g class="ly" data-k="'+l.k+'" role="button" tabindex="0" aria-label="'+esc(l.t)+'"><rect x="0" y="'+y+'" width="800" height="'+l.h+'" fill="'+l.c+'"/>' +
      (l.k === 'coconino' ? '<path d="M0 '+(y+30)+' l40 -26 M60 '+(y+30)+' l40 -26 M120 '+(y+30)+' l40 -26 M560 '+(y+30)+' l40 -26 M620 '+(y+30)+' l40 -26 M680 '+(y+30)+' l40 -26 M740 '+(y+30)+' l40 -26" stroke="#D8C38E" stroke-width="2"/>' : '') +
      (l.k === 'red' ? '<path d="M0 '+(y+22)+' H800 M0 '+(y+44)+' H800" stroke="#9A4430" stroke-width="2"/>' : '') +
      (l.k === 'vishnu' ? '<path d="M0 '+(y+20)+' q40 -18 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 M0 '+(y+50)+' q40 18 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0" stroke="#6E5A66" stroke-width="3" fill="none"/>' : '') +
      '<rect class="hl" x="0" y="'+y+'" width="800" height="'+l.h+'"/><g class="tg" transform="translate(16 '+(y + l.h/2 + 6)+')"><circle r="13" cx="0" cy="-5"/><text class="n" y="0" style="text-anchor:middle">'+(i+1)+'</text><text class="ck" y="0" style="text-anchor:middle">✓</text></g></g>'; y += l.h; return g; }).join('');
    var fy = 130, far = LY.map(function(l){ var r = '<rect x="0" y="'+fy+'" width="800" height="'+l.h+'" fill="'+l.c+'"/>'; fy += l.h; return r; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-cy-stage"><svg class="ms-cy-svg" viewBox="0 0 800 460" role="img" aria-label="A simple model of the Grand Canyon: a slice of land with stacked rock layers. As time runs forward, the river cuts a deep canyon down through the layers.">' +
      '<defs><linearGradient id="cySky" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="460"><stop offset="0" stop-color="#7FB6E2"/><stop offset="1" stop-color="#F6D9A8"/></linearGradient><clipPath id="cyCutClip"><path class="cutclip" d=""/></clipPath><linearGradient id="cyHaze" gradientUnits="userSpaceOnUse" x1="0" y1="130" x2="0" y2="460"><stop offset="0" stop-color="#FBE6CF" stop-opacity=".55"/><stop offset="1" stop-color="#8E7FA8" stop-opacity=".45"/></linearGradient></defs>' +
      '<rect width="800" height="460" fill="url(#cySky)"/><g class="sun"><circle cx="680" cy="56" r="26" fill="#FFE39A"/></g>' +
      '<path class="mesas" d="M0 131 V114 H70 L80 104 H170 L178 114 H250 L256 120 H520 L528 108 H540 L546 96 H556 L562 108 H600 L610 100 H720 L730 112 H800 V131Z"/>' +
      '<g class="lys">'+lay+'</g><g class="far" clip-path="url(#cyCutClip)"><rect width="800" height="460" fill="url(#cySky)"/><g transform="translate(0 -4)">'+far+'</g><rect x="0" y="0" width="800" height="460" fill="url(#cyHaze)"/></g><path class="wall" d=""/>' +
      '<g class="jun">'+[40,64,210,236,560,600,700,760].map(function(x, i){ return '<ellipse cx="'+x+'" cy="'+(127 - (i%2))+'" rx="'+(7 + i%3)+'" ry="5"/>'; }).join('')+'</g><path class="river" d=""/><path class="river0" d="M0 128 H800"/>' +
      '<g class="hiker" transform="translate(150 130)"><circle cy="-22" r="4" fill="#5A3A2A"/><path d="M0 -18 V-6 M0 -6 l-4 8 M0 -6 l4 8 M0 -14 l-5 5 M0 -14 l5 4" stroke="#5A3A2A" stroke-width="2.4" stroke-linecap="round"/><path d="M6 -10 V4" stroke="#7A5A3A" stroke-width="1.6"/></g>' +
      '<g class="ruler"><path class="rl" d=""/><text class="rt" x="0" y="0"></text></g>' +
      '<text class="yrs" x="400" y="34" style="text-anchor:middle"></text></svg><div class="ms-cy-tag" aria-live="polite"></div></div><div class="ms-cy-act"></div><p class="ms-credit">A simple model. Real ages from the National Park Service.</p>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-cy-act', m), svg = $('.ms-cy-svg', m), tag = $('.ms-cy-tag', m);
    function draw(){
      var k = S.t / STEPS, P = cyProfile(k, LY);
      $('.cutclip', svg).setAttribute('d', P.d); $('.wall', svg).setAttribute('d', P.w || '');
      $('.river', svg).setAttribute('d', k > 0 ? 'M'+(392)+' '+(P.floor-2).toFixed(1)+' L'+(426)+' '+(P.floor-2).toFixed(1) : '');
      $('.river0', svg).style.opacity = k > 0 ? 0 : 1;
      $('.yrs', svg).textContent = S.t ? (S.t >= STEPS ? 'About ' + MY + ' million years later' : (S.t/10).toFixed(1) + ' million years go by…') : 'Long ago: flat land';
      var rl = $('.rl', svg), rt = $('.rt', svg);
      if (k >= 1) { var x = 409; rl.setAttribute('d', 'M'+x+' 134 V'+(P.floor-6)+' M'+(x-9)+' 134 H'+(x+9)+' M'+(x-9)+' '+(P.floor-6)+' H'+(x+9)+' M'+(x-6)+' 142 L'+x+' 134 L'+(x+6)+' 142 M'+(x-6)+' '+(P.floor-14)+' L'+x+' '+(P.floor-6)+' L'+(x+6)+' '+(P.floor-14)); rt.setAttribute('x', x); rt.setAttribute('y', 112); rt.textContent = '\u2195 ' + (cfg.depthT || ''); svg.classList.add('deep'); }
      else { rl.setAttribute('d', ''); rt.textContent = ''; svg.classList.remove('deep'); }
      $$('.ly', svg).forEach(function(g){ g.classList.toggle('seen', !!S.seen[g.dataset.k]); g.classList.toggle('sel', S.sel === g.dataset.k); });
      svg.classList.toggle('tapme', S.step === 2);
      var l = S.sel && LY.filter(function(x){ return x.k === S.sel; })[0];
      tag.innerHTML = l ? '<b>'+esc(l.t)+'</b> <span class="age">'+esc(l.age)+'</span><br>'+esc(l.d) : ''; tag.classList.toggle('show', !!l);
    }
    function tapLayer(k){ if (S.step !== 2) return; S.seen[k] = 1; S.sel = k; SFX.chime(); save(); draw(); render(); }
    $$('.ly', svg).forEach(function(g){ g.addEventListener('click', function(){ tapLayer(g.dataset.k); }); g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tapLayer(g.dataset.k); } }); });
    function render(){
      draw(); var N = 4;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.step === 1) { var done = S.t >= STEPS;
        act.innerHTML = stepCard(1, N, 'Run time forward', '<p class="ms-wm-do">👆 Drag the knob all the way to the right. Each step is a long, long time.</p>' +
          '<div class="ms-tr-slide ms-cy-slide"><span>🏞️ Now</span><input type="range" min="0" max="'+STEPS+'" step="1" value="'+S.t+'" aria-label="Millions of years: drag to run time forward"><span>⏩ '+MY+' million years</span></div>' +
          '<p class="ms-cy-say" aria-live="polite">'+(done ? '🌊 The river cut down through every layer. The canyon is more than a mile deep!' : (S.t ? '🌊 The river carries away sand and rock, bit by bit. Keep going!' : ''))+'</p>' + (done ? '<button type="button" class="ms-btn big ms-cy-go">Next ➡️</button>' : ''));
        var r = $('input', act); r.addEventListener('input', function(){ var was = S.t; S.t = +r.value; if (S.t > was && S.t % 10 === 0) SFX.click(); save(); draw();
          var say = $('.ms-cy-say', act); if (S.t >= STEPS) { render(); SFX.chime(); } else if (say) say.textContent = S.t ? '🌊 The river carries away sand and rock, bit by bit. Keep going!' : ''; });
        var g = $('.ms-cy-go', act); if (g) g.onclick = function(){ SFX.click(); S.step = 2; S.sel = null; save(); render(); }; return; }
      if (S.step === 2) { var n = LY.filter(function(l){ return S.seen[l.k]; }).length, all = n >= LY.length;
        act.innerHTML = stepCard(2, N, 'Tap the rock layers', '<p class="ms-wm-do">👆 Tap each rock layer on the canyon wall, or tap its number here.</p><div class="ms-cy-list">'+LY.map(function(l, i){ var on = S.seen[l.k]; return '<button type="button" class="ms-cy-li'+(on?' ok':'')+(S.sel===l.k?' sel':'')+'" data-k="'+l.k+'"><span class="b" style="background:'+l.c+'">'+(on ? '✓' : (i+1))+'</span><span>'+(on ? '<b>'+esc(l.t)+'</b> · '+esc(l.age) : '<i>Layer '+(i+1)+'</i>')+'</span></button>'; }).join('')+'</div>' +
          (all ? '<button type="button" class="ms-btn big ms-cy-go">Next ➡️</button>' : '<p class="ms-sw-left-n">'+(LY.length - n)+' more to tap.</p>'));
        $$('.ms-cy-li', act).forEach(function(b){ b.onclick = function(){ tapLayer(b.dataset.k); }; });
        var g2 = $('.ms-cy-go', act); if (g2) g2.onclick = function(){ SFX.click(); S.step = 3; S.sel = null; save(); render(); }; return; }
      var Q = S.step === 3 ? cfg.q1 : cfg.q2;
      var cq = choiceQ(Q, S.step, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-cy-next'; b.textContent = S.step < 4 ? 'Next question ➡️' : 'Done ✓'; $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); if (S.step >= 4) { S.ok = true; ST.gal = ST.gal||{}; ST.gal.canyon = 1; galleryCheck(); SFX.fanfare(); } else S.step++; save(); render(); }; });
      act.innerHTML = stepCard(S.step, N, Q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: walls (Gallery · the thick walls test) ══ */
  function wlHut(kind){
    if (kind === 'thin') return '<g class="hut thin"><path d="M14 42 L80 14 L146 42" stroke="#8C7A5E" stroke-width="5" fill="none" stroke-linejoin="round"/><rect x="20" y="40" width="120" height="52" fill="#9C8768"/><rect class="room" x="23" y="43" width="114" height="49" fill="#F3E9D6"/><path d="M23 92 H137" stroke="#B9A88A" stroke-width="3"/><text class="cw" x="80" y="58" style="text-anchor:middle">inside</text></g>';
    return '<g class="hut thick"><rect x="4" y="26" width="152" height="10" rx="3" fill="#A8714A"/><g fill="#6E4428"><circle cx="20" cy="31" r="4"/><circle cx="56" cy="31" r="4"/><circle cx="104" cy="31" r="4"/><circle cx="140" cy="31" r="4"/></g><rect x="8" y="34" width="144" height="58" fill="#C98A5E"/><g stroke="#B0744C" stroke-width="1.5"><path d="M8 48 H24 M8 62 H24 M8 76 H24 M136 48 H152 M136 62 H152 M136 76 H152 M16 34 V48 M16 62 V76 M144 48 V62 M144 76 V92"/></g><rect class="room" x="24" y="50" width="112" height="42" fill="#F3E9D6"/><path d="M24 92 H136" stroke="#B9A88A" stroke-width="3"/><text class="cw" x="80" y="64" style="text-anchor:middle">inside</text></g>';
  }
  function wlTherm(v, cls){ var h = Math.max(4, Math.min(56, (v - 40) / 70 * 56)), col = v >= 88 ? '#E2452F' : v >= 75 ? '#F08A2A' : v >= 65 ? '#E8C33A' : '#4F8FD6';
    return '<g class="th '+(cls||'')+'"><rect x="-7" y="-64" width="14" height="66" rx="7" fill="#fff" stroke="#55606A" stroke-width="2"/><circle cy="8" r="9" fill="'+col+'" stroke="#55606A" stroke-width="2"/><rect class="merc" x="-3.5" y="'+(2-h)+'" width="7" height="'+h+'" rx="3" fill="'+col+'"/></g>'; }
  function modWalls(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var TM = cfg.times || [];
    ST.wl = ST.wl || {seen:{}, t:null, step:1, ok:false}; var S = ST.wl;
    var m = shell('ms-wl-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-wl-stage"><svg class="ms-wl-svg" viewBox="0 0 720 300" role="img" aria-label="A simple model: two little houses on desert ground. House 1 has thin walls. House 2 has thick adobe walls. A thermometer is inside each house and one is outside.">' +
      '<defs><linearGradient id="wlDay" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FB3E6"/><stop offset="1" stop-color="#F7E2B4"/></linearGradient><linearGradient id="wlNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1C42"/><stop offset="1" stop-color="#3A3F6E"/></linearGradient></defs>' +
      '<rect class="sky day" width="720" height="300" fill="url(#wlDay)"/><rect class="sky night" width="720" height="300" fill="url(#wlNight)"/>' +
      '<g class="stars">'+[[60,40],[140,70],[230,30],[330,60],[420,26],[520,50],[600,30],[680,70],[380,90],[90,100]].map(function(p){ return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.8" fill="#fff"/>'; }).join('')+'</g>' +
      '<circle class="sunb" cx="360" cy="52" r="30" fill="#FFE07A"/><path class="moon" d="M372 36 a22 22 0 1 0 14 38 a18 18 0 1 1 -14 -38Z" fill="#F4F1DE"/>' +
      '<path d="M0 230 Q180 214 360 226 T720 222 V300 H0Z" fill="#D9B07A"/><path d="M0 252 Q200 240 400 250 T720 246 V300 H0Z" fill="#C99C66"/>' +
      '<g transform="translate(588 168)"><path d="M10 64 V14 a8 8 0 0 1 16 0 V64Z M10 40 H2 a6 6 0 0 1 -6 -6 V26 a4 4 0 0 1 8 0 V32 H10Z M26 34 H34 V22 a4 4 0 0 1 8 0 V32 a6 6 0 0 1 -6 6 H26Z" fill="#5E9A4A"/></g>' +
      '<g class="ms-wl-huts"><g transform="translate(50 108) scale(1.35)">'+wlHut('thin')+'<g transform="translate(110 83) scale(.5)" class="in1"></g></g><text class="hn" x="158" y="262" style="text-anchor:middle">House 1: thin walls</text>' +
      '<g transform="translate(318 108) scale(1.35)">'+wlHut('thick')+'<g transform="translate(112 83) scale(.5)" class="in2"></g></g><text class="hn" x="426" y="262" style="text-anchor:middle">House 2: thick adobe walls</text></g>' +
      '<g transform="translate(668 232)" class="outth"></g><text class="hn out" x="668" y="262" style="text-anchor:middle">Outside</text>' +
      '<g class="reads"></g></svg></div><p class="ms-credit">'+esc(cfg.note||'')+'</p><div class="ms-wl-act"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-wl-act', m), svg = $('.ms-wl-svg', m);
    function tOf(k){ return TM.filter(function(t){ return t.k === k; })[0]; }
    function draw(){ var t = S.t ? tOf(S.t) : null;
      svg.classList.toggle('isnight', S.t === 'night'); svg.classList.toggle('isday', S.t === 'noon'); svg.classList.toggle('idle', !S.t);
      $('.in1', svg).innerHTML = t ? wlTherm(t.h1) : ''; $('.in2', svg).innerHTML = t ? wlTherm(t.h2) : ''; $('.outth', svg).innerHTML = t ? wlTherm(t.out) : '';
      $('.reads', svg).innerHTML = t ? '<g class="rd"><path d="M188 120 L198 134 L208 120Z"/><rect x="160" y="92" width="76" height="30" rx="7"/><text x="198" y="113" style="text-anchor:middle">🌡️'+t.h1+'°F</text></g><g class="rd"><path d="M462 128 L472 142 L482 128Z"/><rect x="434" y="100" width="76" height="30" rx="7"/><text x="472" y="121" style="text-anchor:middle">🌡️'+t.h2+'°F</text></g><g class="rd out"><rect x="630" y="124" width="76" height="30" rx="7"/><text x="668" y="145" style="text-anchor:middle">'+t.out+'°F</text></g>' : ''; }
    function setT(k){ S.t = k; S.seen[k] = 1; SFX.chime(); save(); draw(); render(); }
    function table(){ return '<table class="ms-wl-tab"><tr><th></th><th>Outside</th><th>House 1<br><small>thin</small></th><th>House 2<br><small>thick adobe</small></th></tr>' + TM.map(function(t){ return '<tr><th>'+t.t+'</th>'+(S.seen[t.k] ? '<td>'+t.out+'°F</td><td>'+t.h1+'°F</td><td>'+t.h2+'°F</td>' : '<td>?</td><td>?</td><td>?</td>')+'</tr>'; }).join('') + '</table>'; }
    function render(){
      draw(); var N = 3;
      if (S.ok) { act.innerHTML = table() + '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.step <= 2) { var T = TM[S.step-1], seen = !!S.seen[T.k];
        act.innerHTML = stepCard(S.step, N, 'Make it '+T.t.replace(/^\S+\s/, '').toLowerCase(), (seen ? '<p class="ms-wm-do">'+esc(T.line)+'</p>' : '<p class="ms-wm-do">👆 Tap the button to make it '+esc(T.t.replace(/^\S+\s/, '').toLowerCase())+'.</p><button type="button" class="ms-btn big ms-wl-t">'+T.t+'</button>') + table() + (seen ? '<button type="button" class="ms-btn big ms-wl-go">Next ➡️</button>' : ''));
        var b = $('.ms-wl-t', act); if (b) b.onclick = function(){ setT(T.k); };
        var g = $('.ms-wl-go', act); if (g) g.onclick = function(){ SFX.click(); S.step++; save(); render(); }; return; }
      var q = choiceQ(cfg.q, 3, function(){ ST.gal = ST.gal||{}; ST.gal.walls = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.ok = true; save(); render(); }, calm()?0:1700); });
      act.innerHTML = stepCard(3, N, cfg.q.title, table() + q.html); q.bind(act);
    }
    render();
  }

  /* ══ MODULE: swsign (Exhibit Floor · the Southwest sign + the sunset sweep) ══ */
  function modSwsign(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var PT = cfg.parts || [], NEED = cfg.sentMin || 3;
    ST.sws = ST.sws || {pick:{}, step:1, open:false}; var S = ST.sws;
    var m = shell('ms-sws-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-sws-act"></div><div class="ms-sws-show" hidden><div class="ms-ne-alcove ms-sws-alcove" style="'+rcol()+'"><span class="ms-alc-glow"></span><div class="ms-sws-scene">'+swItemSVG('canyon')+'</div><div class="ms-ne-sign">Southwest</div><div class="ms-ne-label"><p class="tx"></p><p class="by"></p><span class="ms-draft">DRAFT</span></div></div><div class="ms-sws-rowwrap">'+alcoves('ms-sws-row')+'<span class="ms-sws-sweep"></span></div></div><div class="ms-sws-end"></div>');
    var home = document.createComment('sws-home'); ta.parentNode.insertBefore(home, ta); ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-sws-act', m), show = $('.ms-sws-show', m), end = $('.ms-sws-end', m), row = $('.ms-sws-row', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return (s.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function allPicked(){ return PT.every(function(p){ return S.pick[p.k] != null; }); }
    function missing(){ var miss = []; if (!allPicked()) miss.push('Pick one idea in each row.'); var n = sents(ta.value); if (n < NEED) miss.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+'.'); if (!/southwest/i.test(ta.value)) miss.push('Name the Southwest in your sign.'); return miss; }
    function view(){
      $('.tx', show).textContent = ta.value.trim() || 'Your sign will appear here.';
      $('.by', show).textContent = 'Sign by ' + (sget(NAMEK,'') || 'Junior Curator') + ', United States Region Curator';
      show.classList.toggle('open', !!S.open); lightAlcoves(row, S.open ? ['ne','se','mw','sw'] : ['ne','se','mw'], false);
    }
    function notes(){ return '<div class="ms-cp-notes">'+PT.map(function(p){ var c = p.chips[S.pick[p.k]]; return c != null ? '<span>'+p.t.split(' ')[0]+' '+esc(c)+'</span>' : ''; }).join('')+'</div>'; }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1 || !allPicked()) { S.step = 1; goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p class="ms-wm-do">👆 '+esc(cfg.s1||'')+'</p>' + PT.map(function(p){ return '<div class="ms-sws-part"><b>'+p.t+'</b><div class="ms-sws-chips">'+p.chips.map(function(c, i){ var on = S.pick[p.k] === i; return '<button type="button" class="ms-sws-chip'+(on?' on':'')+'" data-p="'+p.k+'" data-i="'+i+'" aria-pressed="'+on+'">'+esc(c)+'</button>'; }).join('')+'</div></div>'; }).join('') +
          '<button type="button" class="ms-btn big ms-sws-next'+(allPicked()?'':' ms-notready')+'">Next: write your sign ➡️</button><div class="ms-gi-fb" aria-live="polite"></div>');
        $$('.ms-sws-chip', act).forEach(function(b){ b.onclick = function(){ S.pick[b.dataset.p] = +b.dataset.i; SFX.click(); save(); render(); }; });
        $('.ms-sws-next', act).onclick = function(){ if (!allPicked()) { SFX.miss(); var left = PT.filter(function(p){ return S.pick[p.k] == null; }).map(function(p){ return p.t.replace(/^\S+\s/, ''); }); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Pick an idea for: '+esc(left.join(', '))+'.</div>'; return; } SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) {
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p>' + notes() + '<div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-sws-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-sws-back">↩️ Change my ideas</button><button type="button" class="ms-btn big ms-sws-next">Next: see the alcove ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-sws-chk', act), fb = $('.ms-gi-fb', act);
        function upd(){ var n = sents(ta.value), miss = missing(), nm = /southwest/i.test(ta.value); chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences</span><span class="ms-chip'+(nm?' ok':'')+'">'+(nm?'✓ ':'')+'names the Southwest</span>';
          $('.ms-sws-next', act).classList.toggle('ms-notready', !!miss.length); if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; }
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b, i){ b.onclick = function(){ var t = (cfg.starters||[])[i]; ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-sws-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-sws-next', act).onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-sws-open">🎉 '+esc(cfg.openT||'Install')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-sws-edit">✏️ '+esc(cfg.editT||'Edit my sign')+'</button></div>';
      var ob = $('.ms-sws-open', end); if (ob) ob.onclick = function(){ var miss = missing(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); setTimeout(function(){ show.classList.remove('opening'); }, 4200); optiNod('assignment'); check(); };
      $('.ms-sws-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.07.06 (West Region Study) ══════════
     DATA.geo.big = Alaska + Hawaii in their real places (same Albers frame), neighbours, LA→Honolulu.
     - akhi        Lobby: zoom out, drag Alaska and Hawaii out of their inset boxes to their real places, lay Alaska over the lower 48
     - rainshadow  Gallery main attraction: wind over flat land, raise the Cascades, wind again (wet side vs rain shadow)
     - hotspot     Gallery: move the ocean floor over the Hawaiian hot spot; four islands grow and age
     - westfinale  Exhibit Floor: West sign + gallery plaque (pattern + difference) → install → all five alcoves, chandeliers, Region Guide badge */
  function vbAnim(svg, from, to, ms, done){
    if (calm() || !ms) { svg.setAttribute('viewBox', to.join(' ')); if (done) done(); return; }
    var t0 = performance.now();
    (function f(now){ var k = Math.min(1, (now - t0) / ms), e = k < .5 ? 2*k*k : 1 - Math.pow(-2*k + 2, 2) / 2;
      svg.setAttribute('viewBox', from.map(function(v, i){ return (v + (to[i] - v) * e).toFixed(1); }).join(' '));
      if (k < 1) requestAnimationFrame(f); else if (done) done(); })(t0);
  }
  function bbOf(d){ var n = (d.match(/-?\d+(\.\d+)?/g) || []).map(Number), x = n.filter(function(v, i){ return i % 2 === 0; }), y = n.filter(function(v, i){ return i % 2 === 1; });
    return [Math.min.apply(null, x), Math.min.apply(null, y), Math.max.apply(null, x), Math.max.apply(null, y)]; }

  /* ══ MODULE: akhi (Lobby · where do Alaska and Hawaii really go?) ══ */
  function modAkhi(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor || !DATA.geo || !DATA.geo.big) return;
    var B = DATA.geo.big, G = DATA.geo, SP = cfg.steps || [];
    ST.ak = ST.ak || {step:1, ak:false, hi:false, lay:false, q:false}; var S = ST.ak;
    var m = shell('ms-ak-mod', cfg);
    var la = B.pts.la, ho = B.pts.honolulu;
    var extra = '<path class="ghost" data-k="ak" d="'+B.akReal+'"/><path class="ghost" data-k="hi" d="'+B.hiReal+'"/>' +
      '<rect class="tgt" data-k="hi" x="'+(B.hiB[0]-60)+'" y="'+(B.hiB[1]-60)+'" width="'+(B.hiB[2]-B.hiB[0]+120)+'" height="'+(B.hiB[3]-B.hiB[1]+120)+'" rx="40"/><rect class="tgt" data-k="ak" x="'+B.akB[0]+'" y="'+B.akB[1]+'" width="'+(B.akB[2]-B.akB[0])+'" height="'+(B.akB[3]-B.akB[1])+'" rx="40"/>' +
      '<path class="real" data-k="ak" d="'+B.akReal+'"/><path class="real" data-k="hi" d="'+B.hiReal+'"/><path class="over" d="'+B.akReal+'"/>' +
      '<circle class="hiring" cx="'+((B.hiB[0]+B.hiB[2])/2)+'" cy="'+((B.hiB[1]+B.hiB[3])/2)+'" r="80"/><g class="dist"><path d="M'+la[0]+' '+la[1]+' Q'+((la[0]+ho[0])/2)+' '+(la[1]+70)+' '+ho[0]+' '+ho[1]+'"/><text x="'+((la[0]+ho[0])/2)+'" y="'+(la[1]+150)+'" style="text-anchor:middle">about 2,500 miles</text></g>' +
      '<g class="lbl"><text data-k="ak" x="'+(B.akB[0]+(B.akB[2]-B.akB[0])*.45)+'" y="'+(B.akB[1]+(B.akB[3]-B.akB[1])*.55)+'">Alaska</text><text data-k="hi" x="'+(B.hiB[0]-20)+'" y="'+(B.hiB[1]-60)+'">Hawaii</text><text data-k="can" x="300" y="-120">CANADA</text><text data-k="pac" x="-420" y="420">PACIFIC OCEAN</text></g>';
    var svgH = usSVG('ms-ak-svg', 'A map of North America. The lower 48 states, Canada, and Mexico. Alaska and Hawaii start in little boxes and move to where they really are.', extra, {under:'<path class="nbbig" d="'+B.nbBig+'"/>', insetNames:false});
    function tile(k){ var d = G.states[k === 'ak' ? 'Alaska' : 'Hawaii'].d, b = bbOf(d), p = 6;
      return '<button type="button" class="ms-ak-tile" data-k="'+k+'" aria-label="Drag '+(k==='ak'?'Alaska':'Hawaii')+'"><svg viewBox="'+(b[0]-p)+' '+(b[1]-p)+' '+(b[2]-b[0]+2*p)+' '+(b[3]-b[1]+2*p)+'" aria-hidden="true"><path d="'+d+'"/></svg><span>'+(k==='ak'?'Alaska':'Hawaii')+'</span></button>'; }
    m.insertAdjacentHTML('beforeend', '<div class="ms-ak-wrap"><div class="ms-ak-map">'+svgH+'</div><div class="ms-ak-act"></div></div>');
    after(anchor, m);
    var act = $('.ms-ak-act', m), svg = $('.ms-ak-svg', m), NORM = [0, 0, G.W, G.H], BIG = B.bigBox;
    $$('.st', svg).forEach(function(s){ s.classList.toggle('w', s.dataset.r === 'w'); });
    function flyIn(k){ var p = $('.real[data-k="'+k+'"]', svg), ib = bbOf(G.states[k==='ak'?'Alaska':'Hawaii'].d), rb = k === 'ak' ? B.akB : B.hiB;
      var s = (ib[2]-ib[0]) / (rb[2]-rb[0]); p.style.transition = 'none'; p.style.transform = 'translate('+ib[0]+'px,'+ib[1]+'px) scale('+s+') translate('+(-rb[0])+'px,'+(-rb[1])+'px)';
      void p.getBoundingClientRect(); p.style.transition = calm() ? 'none' : 'transform 1.4s cubic-bezier(.3,.7,.3,1)'; p.style.transform = 'none'; }
    function paint(){
      svg.classList.toggle('zoomed', S.step > 1); svg.classList.toggle('akin', S.ak); svg.classList.toggle('hiin', S.hi); svg.classList.toggle('lay', S.lay);
      $$('.ghost, .tgt', svg).forEach(function(g){ g.classList.toggle('want', S.step === (g.dataset.k === 'ak' ? 2 : 3)); });
      var o = $('.over', svg); o.style.transform = S.lay ? 'translate('+(B.c48[0]-B.akC[0])+'px,'+(B.c48[1]-B.akC[1])+'px)' : 'none';
    }
    function place(k){ var want = S.step === 2 ? 'ak' : S.step === 3 ? 'hi' : null; if (!want) return;
      if (k !== want) { SFX.miss(); var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 '+esc(SP[S.step-2].fb)+'</div>'; return; }
      S[k] = true; SFX.chime(); save(); paint(); flyIn(k); render(); }
    $$('.tgt', svg).forEach(function(t){ t.addEventListener('click', function(){ place(t.dataset.k); }); });
    function render(){
      paint(); var N = 5;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (S.step === 1) { act.innerHTML = stepCard(1, N, 'Zoom out', '<p class="ms-wm-do">Look at the two little boxes in the bottom left corner of the map. That is how most maps show Alaska and Hawaii.</p><button type="button" class="ms-btn big ms-ak-zoom">🔍 Zoom out to see the whole picture</button>');
        $('.ms-ak-zoom', act).onclick = function(){ SFX.whir(); vbAnim(svg, NORM, BIG, 1600); S.step = 2; save(); render(); }; return; }
      if (S.step <= 3) { var sp = SP[S.step-2], k = sp.k, done = S[k];
        act.innerHTML = stepCard(S.step, N, sp.t, done ? '<div class="ms-sh-tag"><p>'+esc(sp.done)+'</p></div><button type="button" class="ms-btn big ms-ak-go">Next ➡️</button>'
          : '<p class="ms-wm-do">👆 '+esc(sp.do)+'</p><div class="ms-ak-tray">'+tile(k)+'</div><div class="ms-exfb" aria-live="polite"></div>');
        var t = $('.ms-ak-tile', act); if (t) { dragger(t, function(moved, tg){ if (moved && tg) place(tg.dataset.k); else if (moved) { SFX.miss(); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc(sp.fb)+'</div>'; } }, '.ms-ak-svg .tgt');
          t.addEventListener('click', function(){ var fb = $('.ms-exfb', act); fb.innerHTML = '<div class="ms-notyet">👆 Drag the shape onto the glowing outline on the map, or tap the outline.</div>'; }); }
        var g = $('.ms-ak-go', act); if (g) g.onclick = function(){ SFX.click(); S.step++; save(); render(); }; return; }
      if (S.step === 4) { act.innerHTML = stepCard(4, N, 'How big is Alaska?', S.lay ? '<div class="ms-sh-tag"><p>'+esc(cfg.layDone||'')+'</p></div><button type="button" class="ms-btn big ms-ak-go">Next ➡️</button>' : '<p>Alaska looked tiny in its box. Let\'s see how big it really is.</p><button type="button" class="ms-btn big ms-ak-lay">📏 '+esc(cfg.layT||'Compare')+'</button>');
        var l = $('.ms-ak-lay', act); if (l) l.onclick = function(){ SFX.whir(); S.lay = true; save(); render(); };
        var g2 = $('.ms-ak-go', act); if (g2) g2.onclick = function(){ SFX.click(); S.step = 5; save(); render(); }; return; }
      var q = choiceQ(cfg.q, 5, function(){ setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); markDone('scene'); SFX.fanfare(); });
      act.innerHTML = stepCard(5, N, cfg.q.title, q.html); q.bind(act);
    }
    if (S.step > 1) svg.setAttribute('viewBox', BIG.join(' '));
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: rainshadow (Gallery main attraction · the rain shadow) ══ */
  function modRainshadow(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var FL = cfg.flat || {w:20, e:18}, MT = cfg.mtn || {w:39, e:8};
    ST.rs = ST.rs || {step:1, ran1:false, up:false, ran2:false, ok:false}; var S = ST.rs;
    var m = shell('ms-rsh-mod', cfg);
    function trees(x0, x1, n, big){ var s = ''; for (var i = 0; i < n; i++) { var x = x0 + (x1 - x0) * (i + .5) / n + ((i * 37) % 11 - 5), h = (big ? 34 : 22) + (i * 13) % 9;
      s += '<path d="M'+x.toFixed(1)+' '+(300-h)+' l-'+(h*.32).toFixed(1)+' '+h+' h'+(h*.64).toFixed(1)+'z" />'; } return s; }
    function sage(x0, x1, n){ var s = ''; for (var i = 0; i < n; i++) { var x = x0 + (x1 - x0) * (i + .5) / n + ((i * 29) % 9 - 4); s += '<ellipse cx="'+x.toFixed(1)+'" cy="297" rx="'+(7 + i % 3)+'" ry="4"/>'; } return s; }
    function gauge(x, side){ return '<g class="gauge" data-s="'+side+'" transform="translate('+x+' 222)"><rect x="-13" y="0" width="26" height="78" rx="4" class="g-glass"/><rect x="-10" y="75" width="20" height="0" class="g-water"/><path d="M-13 0 h26" class="g-rim"/><g class="g-tick"><path d="M13 18 h5 M13 38 h5 M13 58 h5"/></g><rect x="-34" y="-30" width="68" height="24" rx="6" class="g-tag"/><text class="g-val" y="-13" style="text-anchor:middle">0 in</text></g>'; }
    m.insertAdjacentHTML('beforeend', '<div class="ms-rsh-stage"><svg class="ms-rsh-svg" viewBox="0 0 800 400" role="img" aria-label="A simple model: wind blows wet air from the Pacific Ocean on the left toward land. A mountain range can rise in the middle. A rain gauge stands on each side.">' +
      '<defs><linearGradient id="rsSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9CC8EA"/><stop offset="1" stop-color="#E4F1F8"/></linearGradient></defs>' +
      '<rect width="800" height="400" fill="url(#rsSky)"/>' +
      '<path class="sea" d="M0 302 H190 L210 400 H0Z"/><g class="waves"><path d="M10 312 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0"/><path d="M20 332 q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0"/></g>' +
      '<path class="land e" d="M190 300 H800 V400 H210Z"/><path class="land w" d="M190 300 H445 V400 H210Z"/>' +
      '<g class="mtn"><path class="m1" d="M330 301 L388 238 L408 254 L450 120 L492 192 L522 166 L585 301Z"/><path class="snow" d="M450 120 L468 150 L458 146 L448 156 L438 146 L430 150Z M388 238 L397 249 L379 249Z"/><path class="mshade" d="M430 120 L480 200 L520 170 L600 301 L470 301Z"/></g>' +
      '<g class="veg w">'+trees(248, 336, 6, true)+'</g><g class="veg e">'+sage(440, 790, 14)+'</g><g class="grass">'+trees(205, 790, 22, false)+'</g>' +
      gauge(222, 'w') + gauge(690, 'e') +
      '<g class="wind"><path d="M20 150 h70 m-12 -8 l12 8 l-12 8"/><path d="M30 190 h60 m-12 -8 l12 8 l-12 8"/></g>' +
      '<g class="cloud" transform="translate(-200 0)"><g class="cl"><ellipse cx="0" cy="0" rx="46" ry="22"/><ellipse cx="-30" cy="8" rx="28" ry="16"/><ellipse cx="32" cy="8" rx="30" ry="16"/><ellipse cx="10" cy="-14" rx="26" ry="16"/></g><g class="drops"><path d="M-30 26 l-6 16 M-10 30 l-6 16 M10 26 l-6 16 M30 30 l-6 16 M-20 50 l-6 16 M0 54 l-6 16 M20 50 l-6 16"/></g></g>' +
      '<g class="labs"><text class="lab w" x="262" y="390" style="text-anchor:middle">Wet side</text><text class="lab e" x="660" y="390" style="text-anchor:middle">Rain shadow (dry side)</text><text class="lab o" x="90" y="290" style="text-anchor:middle">Pacific Ocean</text><text class="lab mt" x="450" y="108" style="text-anchor:middle">Cascade Range</text></g>' +
      '</svg></div><p class="ms-credit">A simple model. Real yearly rain: Seattle about 39 inches, Yakima about 8 inches (National Weather Service).</p><div class="ms-rsh-act"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-rsh-act', m), svg = $('.ms-rsh-svg', m), cloud = $('.cloud', svg);
    function setG(side, v){ var g = $('.gauge[data-s="'+side+'"]', svg), h = Math.min(72, v / 40 * 72); $('.g-water', g).setAttribute('y', 75 - h); $('.g-water', g).setAttribute('height', h); $('.g-val', g).textContent = Math.round(v) + ' in'; }
    function finalState(){
      svg.classList.toggle('up', !!S.up); svg.classList.toggle('lush', !!S.ran2); svg.classList.toggle('flatrun', !!S.ran1 && !S.up);
      if (S.ran2) { setG('w', MT.w); setG('e', MT.e); } else if (S.ran1 && !S.up) { setG('w', FL.w); setG('e', FL.e); } else { setG('w', 0); setG('e', 0); }
    }
    function blow(mtn, done){
      SFX.whir(); svg.classList.add('blowing'); var dur = calm() ? 0 : 4200, t0 = performance.now(), G1 = mtn ? MT : FL;
      setG('w', 0); setG('e', 0); var gw = 0, ge = 0;
      (function f(now){ var k = dur ? Math.min(1, (now - t0) / dur) : 1, x = -60 + 900 * k, y = 120, sc = 1, rain = true;
        if (mtn) { if (x < 300) y = 120; else if (x < 450) y = 120 - (x - 300) * .33; else y = 70 + (x - 450) * .12;
          sc = x < 450 ? 1.1 - (x > 300 ? (x - 300) / 150 * .3 : 0) : .6; rain = x > 180 && x < 460; cloud.classList.toggle('heavy', x > 300 && x < 460); }
        else { rain = x > 190; cloud.classList.remove('heavy'); }
        cloud.setAttribute('transform', 'translate('+x.toFixed(1)+' '+y.toFixed(1)+') scale('+sc.toFixed(2)+')'); cloud.classList.toggle('raining', rain);
        if (rain && x > 190 && x < 450) gw = G1.w * Math.min(1, (x - 190) / 250);
        if (!mtn && x >= 450) ge = G1.e * Math.min(1, (x - 450) / 350); if (mtn && x >= 460) ge = G1.e * Math.min(1, (x - 460) / 340);
        setG('w', gw); setG('e', ge);
        if (k < 1) requestAnimationFrame(f); else { cloud.setAttribute('transform', 'translate(-200 0)'); cloud.classList.remove('raining', 'heavy'); svg.classList.remove('blowing'); setG('w', G1.w); setG('e', G1.e); done(); } })(t0);
    }
    function render(){
      finalState(); var N = 5;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.step === 1) { act.innerHTML = stepCard(1, N, 'Blow the wind', S.ran1 ? '<p class="ms-wm-do">🌧️ With no mountains, the clouds rain about the same on both sides: '+FL.w+' inches and '+FL.e+' inches.</p><button type="button" class="ms-btn big ms-rsh-go">Next ➡️</button>'
          : '<p class="ms-wm-do">The land is flat. Tap the button and watch the wet ocean air blow across.</p><button type="button" class="ms-btn big ms-rsh-blow">🌬️ Blow the wind</button>');
        var b = $('.ms-rsh-blow', act); if (b) b.onclick = function(){ b.disabled = true; blow(false, function(){ S.ran1 = true; save(); render(); }); };
        var g = $('.ms-rsh-go', act); if (g) g.onclick = function(){ SFX.click(); S.step = 2; save(); render(); }; return; }
      if (S.step === 2) { act.innerHTML = stepCard(2, N, 'Raise the mountains', S.up ? '<p class="ms-wm-do">⛰️ The Cascade Range now stands between the ocean and the dry land. Its tops are covered in snow.</p><button type="button" class="ms-btn big ms-rsh-go">Next ➡️</button>'
          : '<p class="ms-wm-do">Real mountains, the Cascade Range, stand here. Tap to raise them.</p><button type="button" class="ms-btn big ms-rsh-up">⛰️ Raise the mountains</button>');
        var u = $('.ms-rsh-up', act); if (u) u.onclick = function(){ SFX.creak(); S.up = true; save(); render(); };
        var g2 = $('.ms-rsh-go', act); if (g2) g2.onclick = function(){ SFX.click(); S.step = 3; save(); render(); }; return; }
      if (S.step === 3) { act.innerHTML = stepCard(3, N, 'Blow the wind again', S.ran2 ? '<p class="ms-wm-do">🌧️ The clouds climbed the mountains and rained hard on the ocean side: '+MT.w+' inches. Only '+MT.e+' inches made it to the far side. That dry side is the <b>rain shadow</b>.</p><button type="button" class="ms-btn big ms-rsh-go">Next ➡️</button>'
          : '<p class="ms-wm-do">Now the mountains are in the way. Blow the wind again and watch the clouds.</p><button type="button" class="ms-btn big ms-rsh-blow">🌬️ Blow the wind</button>');
        var b2 = $('.ms-rsh-blow', act); if (b2) b2.onclick = function(){ b2.disabled = true; blow(true, function(){ S.ran2 = true; save(); render(); }); };
        var g3 = $('.ms-rsh-go', act); if (g3) g3.onclick = function(){ SFX.click(); S.step = 4; save(); render(); }; return; }
      var Q = S.step === 4 ? cfg.q1 : cfg.q2;
      var cq = choiceQ(Q, S.step, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-rsh-next'; b.textContent = S.step < 5 ? 'Next question ➡️' : 'Done ✓'; $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); if (S.step >= 5) { S.ok = true; ST.gal = ST.gal||{}; ST.gal.rain = 1; galleryCheck(); SFX.fanfare(); } else S.step++; save(); render(); }; });
      act.innerHTML = stepCard(S.step, N, Q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: hotspot (Gallery · grow an island chain) ══ */
  function modHotspot(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var IS = cfg.islands || [], STEP = 140, HX = 600;
    ST.hs = ST.hs || {n:0, ok:false}; var S = ST.hs;
    var m = shell('ms-hs-mod', cfg);
    var isl = IS.map(function(it, i){ var x = HX + i * STEP; return '<g class="isl" data-i="'+i+'" transform="translate('+x+' 230)"><g class="vol"><path class="v" d="M-70 0 C-40 -40 -22 -96 -8 -100 L8 -100 C22 -96 40 -40 70 0Z"/><path class="green" d="M-40 -40 C-26 -70 -16 -96 -8 -100 L8 -100 C16 -96 26 -70 40 -40 Q0 -48 -40 -40Z"/><path class="lava" d="M-6 -100 C-10 -80 -4 -66 -12 -50 M6 -100 C10 -84 4 -70 14 -56"/></g><g class="smoke"><circle cx="0" cy="-118" r="10"/><circle cx="12" cy="-134" r="13"/><circle cx="-6" cy="-152" r="15"/></g></g>'; }).join('');
    var labs = IS.map(function(it, i){ var x = HX - (IS.length - 1 - i) * STEP; return '<g class="ilab" data-i="'+i+'" transform="translate('+x+' 290)"><text class="nm" style="text-anchor:middle">'+esc(it.t.replace(' (the Big Island)', ''))+'</text><text class="ag" y="18" style="text-anchor:middle">'+esc(it.short || it.age)+'</text></g>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-hs-stage"><svg class="ms-hs-svg" viewBox="0 0 800 380" role="img" aria-label="A simple model: a slice through the ocean and the Earth. The ocean floor slides to the left over a hot spot. New volcano islands grow over the hot spot and slide away.">' +
      '<defs><linearGradient id="hsSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4E9FD6"/><stop offset="1" stop-color="#1E4F80"/></linearGradient><radialGradient id="hsHot" cx="50%" cy="100%" r="70%"><stop offset="0" stop-color="#FFD24A"/><stop offset=".5" stop-color="#F0662A"/><stop offset="1" stop-color="#B8321A" stop-opacity="0"/></radialGradient><clipPath id="hsClip"><rect x="0" y="0" width="800" height="275"/></clipPath></defs>' +
      '<rect width="800" height="130" fill="#BFE0F2"/><rect y="130" width="800" height="100" fill="url(#hsSea)"/>' +
      '<rect y="275" width="800" height="105" fill="#8C3B22"/><path class="plume" d="M560 380 C570 330 580 300 585 275 L615 275 C620 300 630 330 640 380Z" fill="url(#hsHot)"/>' +
      '<g class="plate" clip-path="url(#hsClip)"><g class="slide"><rect x="-900" y="230" width="2400" height="45" fill="#6E5A48"/><g class="stripes">'+Array.apply(null, Array(24)).map(function(_, i){ return '<path d="M'+(-900 + i*100)+' 245 h60"/>'; }).join('')+'</g>'+isl+'</g></g>' +
      '<path class="sealine" d="M0 130 H800"/><text class="t-hot" x="600" y="345" style="text-anchor:middle">hot spot</text><text class="t-mv" x="160" y="262" style="text-anchor:middle">⬅ ocean floor moves northwest</text><text class="t-sea" x="20" y="150">sea level</text>' + labs +
      '</svg></div><div class="ms-hs-act"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-hs-act', m), svg = $('.ms-hs-svg', m);
    function paint(){ var n = S.n; $('.slide', svg).style.transform = 'translateX('+(-Math.max(0, n - 1) * STEP)+'px)';
      $$('.isl', svg).forEach(function(g, i){ var made = i < n, a = n - 1 - i, h = made ? (170 - a * 20) / 100 : 0, w = made ? 1 - a * .08 : 0;
        $('.vol', g).style.transform = 'scale('+w.toFixed(2)+','+h.toFixed(2)+')'; g.classList.toggle('made', made); g.classList.toggle('active', made && a === 0); g.classList.toggle('old', made && a >= 2); });
      $$('.ilab', svg).forEach(function(l, i){ l.classList.toggle('on', n >= IS.length); });
      svg.classList.toggle('done', n >= IS.length); }
    function render(){
      paint(); var N = 2;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.n < IS.length) { var nx = IS[S.n];
        act.innerHTML = stepCard(1, N, 'Move the ocean floor', '<p class="ms-wm-do">👆 '+(S.n ? 'Tap again. The ocean floor slides over the hot spot, and a new volcano grows.' : 'Tap the button. Melted rock rises from the hot spot and builds a volcano.')+'</p>' +
          (S.n ? '<div class="ms-sh-tag"><b>🌋 '+esc(IS[S.n-1].t)+'</b><p>A new island grew over the hot spot.</p></div>' : '') + '<button type="button" class="ms-btn big ms-hs-move">⬅ '+esc(cfg.moveT||'Move')+' ('+(S.n+1)+' of '+IS.length+')</button>');
        $('.ms-hs-move', act).onclick = function(){ SFX.whir(); S.n++; save(); render(); }; return; }
      var q = choiceQ(cfg.q, 2, function(){ ST.gal = ST.gal||{}; ST.gal.islands = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.ok = true; save(); render(); }, calm()?0:1700); });
      act.innerHTML = stepCard(2, N, cfg.q.title, '<div class="ms-sh-tag"><p>Four islands in a row. Read the age under each one.</p></div>' + q.html); q.bind(act);
    }
    render();
  }

  /* ══ MODULE: westfinale (Exhibit Floor · the West sign + gallery plaque + finale) ══ */
  var BADGE = '<svg viewBox="0 0 120 150" aria-hidden="true"><path d="M38 0 L60 50 L82 0 L100 0 L72 64 H48 L20 0Z" fill="#8B6FC0"/><path d="M38 0 L52 32 L60 50 L45 50 L20 0Z" fill="#6E54A6"/><circle cx="60" cy="98" r="44" fill="#D9A92E" stroke="#8E6A14" stroke-width="5"/><circle cx="60" cy="98" r="34" fill="#F3D27A" stroke="#B88A2A" stroke-width="2"/><path d="M60 72 l7 15 16 2 -12 11 3 16 -14 -8 -14 8 3 -16 -12 -11 16 -2Z" fill="#B88A2A"/><text x="60" y="140" text-anchor="middle" font-size="0">Region Guide</text></svg>';
  function chandelier(){ return '<svg viewBox="0 0 80 70" aria-hidden="true"><path d="M40 0 V18" stroke="#B88A2A" stroke-width="3"/><path d="M10 34 Q40 56 70 34" fill="none" stroke="#B88A2A" stroke-width="4"/><path d="M40 18 V44" stroke="#B88A2A" stroke-width="3"/>' + [10, 25, 40, 55, 70].map(function(x){ var y = x === 40 ? 46 : (x === 25 || x === 55 ? 42 : 34); return '<rect x="'+(x-3)+'" y="'+(y-14)+'" width="6" height="14" fill="#FBF5E6"/><ellipse class="fl" cx="'+x+'" cy="'+(y-19)+'" rx="4" ry="6"/>'; }).join('') + '</svg>'; }
  function modWestfinale(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'), tb = document.getElementById(cfg.textarea2 || 'journal-pattern'); if (!ta || !tb) return;
    var NEED = cfg.sentMin || 3;
    ST.wf = ST.wf || {step:1, same:null, diff:null, open:false}; var S = ST.wf;
    var m = shell('ms-wf-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-wf-act"></div><div class="ms-wf-show" hidden><div class="ms-wf-hall"><div class="ms-wf-chand">'+chandelier()+chandelier()+chandelier()+'</div>' +
      '<div class="ms-ne-alcove ms-wf-alcove" style="'+rcol()+'"><span class="ms-alc-glow"></span><div class="ms-ne-sign">West</div><div class="ms-ne-label"><p class="tx"></p><p class="by"></p><span class="ms-draft">DRAFT</span></div></div>' +
      '<div class="ms-wf-plaque"><div class="h">The United States Regions Gallery</div><p class="pt"></p></div>' + alcoves('ms-wf-row') + '<div class="ms-wf-badge" aria-hidden="true">'+BADGE+'<span>'+esc(cfg.badge||'Region Guide')+'</span></div></div></div><div class="ms-wf-end"></div>');
    var homeA = document.createComment('wf-home-a'), homeB = document.createComment('wf-home-b');
    ta.parentNode.insertBefore(homeA, ta); tb.parentNode.insertBefore(homeB, tb); ta.parentNode.insertBefore(m, ta);
    $$('.textbox-prompt', ta.parentNode).forEach(function(p){ if (p.nextElementSibling === m || p.nextElementSibling === homeA) p.classList.add('ms-hide-on'); });
    var tpb = tb.parentNode.querySelector('.textbox-prompt'); if (tpb) tpb.classList.add('ms-hide-on');
    var act = $('.ms-wf-act', m), show = $('.ms-wf-show', m), end = $('.ms-wf-end', m), row = $('.ms-wf-row', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== homeA) homeA.parentNode.insertBefore(ta, homeA.nextSibling); if (tb.previousSibling !== homeB) homeB.parentNode.insertBefore(tb, homeB.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return (s.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function base(){ return 'Pattern: ' + (cfg.same[S.same] || '') + ' Difference: ' + (cfg.diff[S.diff] || ''); }
    function userPart(){ var v = tb.value, i = v.indexOf('\n'); return v.indexOf('Pattern:') === 0 ? (i >= 0 ? v.slice(i + 1) : '') : v; }
    function setBase(){ var u = userPart(); tb.value = base() + '\n' + u.replace(/^\s+/, ''); tb.dispatchEvent(new Event('input', {bubbles:true})); }
    function miss1(){ var miss = [], n = sents(ta.value); if (n < NEED) miss.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+'.'); if (!/alaska/i.test(ta.value)) miss.push('Name Alaska.'); if (!/hawai/i.test(ta.value)) miss.push('Name Hawaii.'); return miss; }
    function miss2(){ var miss = []; if (S.same == null) miss.push('Pick a pattern.'); if (S.diff == null) miss.push('Pick a difference.'); if (sents(userPart()) < 1) miss.push('Add one example sentence of your own.'); return miss; }
    function view(){
      $('.tx', show).textContent = ta.value.trim() || 'Your sign will appear here.';
      $('.by', show).textContent = 'Sign by ' + (sget(NAMEK,'') || 'Junior Curator') + ', United States Region Curator';
      $('.pt', show).innerHTML = S.same != null ? '<b>One pattern:</b> ' + esc(cfg.same[S.same]) + '<br><b>One difference:</b> ' + esc(cfg.diff[S.diff]) + '<br>' + esc(userPart().trim()) : '';
      show.classList.toggle('open', !!S.open); lightAlcoves(row, S.open ? 'all' : ['ne','se','mw','sw'], false);
    }
    function box(t, sel){ return '<div class="ms-gi-box '+sel+'"></div>'; }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 1); tb.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-cp-notes">'+(cfg.notes||[]).map(function(n){ return '<span>📌 '+esc(n)+'</span>'; }).join('')+'</div><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t)+'</button>'; }).join('')+'</div>' + box(ta, 'b1') + '<div class="ms-excheck ms-wf-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-wf-next">Next: the gallery plaque ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.b1', act).appendChild(ta);
        var chk = $('.ms-wf-chk', act), fb = $('.ms-gi-fb', act);
        var upd = function(){ var n = sents(ta.value), a = /alaska/i.test(ta.value), h = /hawai/i.test(ta.value), miss = miss1();
          chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences</span><span class="ms-chip'+(a?' ok':'')+'">'+(a?'✓ ':'')+'names Alaska</span><span class="ms-chip'+(h?' ok':'')+'">'+(h?'✓ ':'')+'names Hawaii</span>';
          $('.ms-wf-next', act).classList.toggle('ms-notready', !!miss.length); if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b, i){ b.onclick = function(){ var t = (cfg.starters||[])[i]; ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-wf-next', act).onclick = function(){ var miss = miss1(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) { goHome();
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><div class="ms-sws-part"><b>🔁 One pattern all five regions share</b><div class="ms-sws-chips">'+cfg.same.map(function(c, i){ return '<button type="button" class="ms-sws-chip ms-wf-c'+(S.same===i?' on':'')+'" data-g="same" data-i="'+i+'" aria-pressed="'+(S.same===i)+'">'+esc(c)+'</button>'; }).join('')+'</div></div>' +
          '<div class="ms-sws-part"><b>↔️ One big difference</b><div class="ms-sws-chips">'+cfg.diff.map(function(c, i){ return '<button type="button" class="ms-sws-chip ms-wf-c'+(S.diff===i?' on':'')+'" data-g="diff" data-i="'+i+'" aria-pressed="'+(S.diff===i)+'">'+esc(c)+'</button>'; }).join('')+'</div></div>' +
          '<p class="ms-wm-do">✏️ Under the first line, add one example sentence. (Example: The Southeast is wet, but the Southwest is dry.)</p>' + box(tb, 'b2') + '<div class="ms-excheck ms-wf-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-wf-back">↩️ Back to my sign</button><button type="button" class="ms-btn big ms-wf-next">Next: see the gallery ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.b2', act).appendChild(tb);
        var chk2 = $('.ms-wf-chk', act), fb2 = $('.ms-gi-fb', act);
        var upd2 = function(){ var e = sents(userPart()) >= 1, miss = miss2();
          chk2.innerHTML = '<span class="ms-chip'+(S.same!=null?' ok':'')+'">'+(S.same!=null?'✓ ':'')+'a pattern</span><span class="ms-chip'+(S.diff!=null?' ok':'')+'">'+(S.diff!=null?'✓ ':'')+'a difference</span><span class="ms-chip'+(e?' ok':'')+'">'+(e?'✓ ':'')+'an example sentence</span>';
          $('.ms-wf-next', act).classList.toggle('ms-notready', !!miss.length); if (fb2.innerHTML) fb2.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd2; upd2();
        $$('.ms-wf-c', act).forEach(function(b){ b.onclick = function(){ S[b.dataset.g] = +b.dataset.i; SFX.click(); save(); if (S.same != null && S.diff != null) setBase(); render(); tb.focus(); tb.setSelectionRange(tb.value.length, tb.value.length); }; });
        $('.ms-wf-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-wf-next', act).onclick = function(){ var miss = miss2(); if (miss.length) { SFX.miss(); fb2.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-wf-open">🎉 '+esc(cfg.openT||'Install')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-wf-edit">✏️ '+esc(cfg.editT||'Edit my sign')+'</button></div>';
      var ob = $('.ms-wf-open', end); if (ob) ob.onclick = function(){ var miss = miss1().concat(miss2()); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); setTimeout(function(){ show.classList.remove('opening'); }, 5200); optiNod('assignment'); check(); };
      $('.ms-wf-edit', end).onclick = function(){ S.open = false; S.step = 1; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 1) curUpd(); });
    tb.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.07.07 (Songs, Legends, Poems, and News) ══════════
     DATA.radioBase = folder of the five radio clips; DATA.songURL = the full "Home on the Range" recording.
     - radio      Lobby: an old radio; turn it on, slide the dial across the U.S., static between stations;
                  each station plays a real old recording, read the clue, guess the region; one question
     - tapedeck   Gallery main attraction: five story tapes (song, legend, poem, news, Hopi story); drag one into
                  the player, the reels turn and the words scroll, tap the tape's home region on the map; two questions
     - newspaper  Gallery hands-on: unfold a 1965 front page, then tap what / when / where / who / how neighbors helped
     - onair      Exhibit Floor: Listening Station sign (3 sentences in the step) → flip the switch: ON AIR lamp,
                  reels, sound waves, all five alcoves hum; the blank Contributions Wall waits behind */
  function media(name, base){ return (window.MS_AUDIO && window.MS_AUDIO[name]) || ((base || '') + name); }
  function regName(k){ var r = regOf(k); return r.name || k; }
  function onTabLeave(tab, fn){ var p = $('#panel-' + tab); if (!p) return; new MutationObserver(function(){ if (!p.classList.contains('active')) fn(); }).observe(p, {attributes:true, attributeFilter:['class']});
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) fn(); }).observe(root, {attributes:true, attributeFilter:['class']}); }
  function regionBtns(cls){ return '<div class="ms-rgbtns '+cls+'" style="'+rcol()+'">' + (DATA.regions||[]).map(function(r){ return '<button type="button" class="ms-rgbtn" data-r="'+r.k+'"><i></i>'+esc(r.name)+'</button>'; }).join('') + '</div>'; }
  function litRegions(svg, list){ $$('.st', svg).forEach(function(s){ s.classList.toggle('lit', list.indexOf(s.dataset.r) >= 0); }); }

  /* ══ MODULE: radio (Lobby · tune the old radio) ══ */
  function modRadio(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var SN = cfg.stations || [];
    ST.rd = ST.rd || {on:false, got:{}, pos:2, q:false}; var S = ST.rd;
    var m = shell('ms-rd-mod', cfg);
    var ticks = ''; for (var t = 0; t <= 100; t += 5) ticks += '<i style="left:'+t+'%" class="'+(t % 25 ? '' : 'big')+'"></i>';
    var marks = SN.map(function(s){ return '<b class="ms-rd-mk" data-r="'+s.r+'" style="left:'+s.pos+'%"></b>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-rd-wrap" style="'+rcol()+'"><div class="ms-rd-radio"><div class="ms-rd-top"></div><div class="ms-rd-face">' +
      '<div class="ms-rd-grille" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>' +
      '<div class="ms-rd-panel"><div class="ms-rd-window"><div class="ms-rd-scale">'+ticks+marks+'<span class="l w">WEST</span><span class="l e">NORTHEAST</span><div class="ms-rd-needle" aria-hidden="true"></div></div></div>' +
      '<div class="ms-rd-knobs"><button type="button" class="ms-rd-power" aria-pressed="false"><span class="lamp"></span>POWER</button><span class="ms-rd-knob" aria-hidden="true"></span></div></div></div>' +
      '<input type="range" class="ms-rd-dial" min="0" max="100" step="1" aria-label="Radio dial. Slide it from West to Northeast."></div>' +
      '<div class="ms-rd-strip">'+usSVG('ms-rd-us', 'A map of the United States under the radio dial. Regions light up as you find their stations.')+'<div class="ms-rd-line" aria-hidden="true"></div></div></div>' +
      '<p class="ms-credit">'+esc(cfg.credit||'')+'</p><div class="ms-rd-act" aria-live="polite"></div>');
    after(anchor, m);
    var act = $('.ms-rd-act', m), dial = $('.ms-rd-dial', m), needle = $('.ms-rd-needle', m), line = $('.ms-rd-line', m), pw = $('.ms-rd-power', m), radio = $('.ms-rd-radio', m), svg = $('.ms-rd-us', m);
    var AUD = {}, noiseG = null, noiseS = null, curK = null;
    function station(){ for (var i = 0; i < SN.length; i++) if (Math.abs(S.pos - SN[i].pos) <= 4) return SN[i]; return null; }
    function startStatic(){ var c = ac(); if (!c || noiseS) return; if (c.state === 'suspended') c.resume();
      var n = c.createBuffer(1, c.sampleRate * 2, c.sampleRate), ch = n.getChannelData(0); for (var i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
      noiseS = c.createBufferSource(); noiseS.buffer = n; noiseS.loop = true; var f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1400; f.Q.value = .7;
      noiseG = c.createGain(); noiseG.gain.value = 0; noiseS.connect(f); f.connect(noiseG); noiseG.connect(c.destination); noiseS.start(); }
    function stopAll(){ Object.keys(AUD).forEach(function(k){ AUD[k].pause(); }); if (noiseG) noiseG.gain.value = 0; radio.classList.remove('playing'); }
    function mix(){
      var st = S.on ? station() : null, d = st ? Math.abs(S.pos - st.pos) : 99;
      if (noiseG) noiseG.gain.value = !S.on ? 0 : (calm() ? .012 : .035) * (st ? Math.min(1, d / 4) : 1);
      Object.keys(AUD).forEach(function(k){ if (!st || st.r !== k) AUD[k].pause(); });
      if (st) { var a = AUD[st.r] || (AUD[st.r] = new Audio(media(st.file, DATA.radioBase || 'audio/radio/'))); a.loop = true; a.volume = Math.max(.15, 1 - d / 5); if (a.paused) a.play().catch(function(){}); }
      radio.classList.toggle('playing', !!st && S.on);
    }
    function paint(){ var p = S.pos + '%'; needle.style.left = p; line.style.left = p; dial.value = S.pos; pw.setAttribute('aria-pressed', !!S.on); radio.classList.toggle('on', !!S.on);
      $('.ms-rd-knob', m).style.transform = 'rotate('+(S.pos * 2.7 - 135)+'deg)';
      var got = Object.keys(S.got); litRegions(svg, got); $$('.ms-rd-mk', m).forEach(function(k){ k.classList.toggle('got', !!S.got[k.dataset.r]); }); }
    function render(){
      paint(); var N = SN.length + 2, got = Object.keys(S.got).length;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (!S.on) { act.innerHTML = stepCard(1, N, 'Turn on the radio', '<p class="ms-wm-do">Press <b>POWER</b> on the radio. You will hear static, the crackly sound between stations. Turn your sound on!</p><button type="button" class="ms-btn big ms-rd-go">🔌 Turn on the radio</button>');
        $('.ms-rd-go', act).onclick = function(){ turnOn(); }; return; }
      if (got >= SN.length) { var q = choiceQ(cfg.q, N, function(){ markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
        act.innerHTML = stepCard(N, N, cfg.q.title, q.html); q.bind(act); return; }
      var st = station();
      if (!st || Math.abs(S.pos - st.pos) > 2) { curK = null;
        act.innerHTML = stepCard(got + 2, N, 'Find a station', '<p class="ms-wm-do">🎚️ Slide the dial slowly. Listen for music through the static. (Found '+got+' of '+SN.length+')</p><button type="button" class="ms-btn alt ms-rd-next">⏭ Jump to the next station</button>');
        $('.ms-rd-next', act).onclick = jump; return; }
      if (curK === st.r && $('.ms-rd-card', act)) return; curK = st.r;
      var done = !!S.got[st.r];
      act.innerHTML = stepCard(got + (done ? 1 : 2), N, done ? 'Station found' : 'You found a station!', '<div class="ms-rd-card"><p class="ms-rd-clue">🎧 <b>Clue:</b> '+esc(st.clue)+'</p>' +
        (done ? '<div class="ms-sh-tag"><b>'+esc(regName(st.r))+' · '+esc(st.name)+'</b><p>'+esc(st.about)+'</p></div><button type="button" class="ms-btn big ms-rd-next">⏭ Next station</button>'
              : '<p>Which region is this music from?</p>' + regionBtns('ms-rd-rg') + '<div class="ms-exfb" aria-live="polite"></div>') + '</div>');
      var nx = $('.ms-rd-next', act); if (nx) nx.onclick = jump;
      $$('.ms-rgbtn', act).forEach(function(b){ b.onclick = function(){
        if (b.dataset.r !== st.r) { SFX.miss(); b.classList.add('no'); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc(st.fb)+'</div>'; return; }
        S.got[st.r] = true; save(); SFX.chime(); curK = null; render(); }; });
    }
    function turnOn(){ S.on = true; save(); startStatic(); SFX.click(); mix(); render(); }
    function jump(){ var left = SN.filter(function(s){ return !S.got[s.r]; }), cur = S.pos;
      var nx = left.filter(function(s){ return s.pos > cur + 2; })[0] || left[0] || SN.filter(function(s){ return s.pos > cur + 2; })[0] || SN[0];
      S.pos = nx.pos; save(); if (S.on) { startStatic(); mix(); } curK = null; render(); }
    pw.onclick = function(){ if (S.on) { S.on = false; save(); stopAll(); render(); } else turnOn(); };
    dial.addEventListener('input', function(){ S.pos = +dial.value; save(); if (S.on) { startStatic(); mix(); } paint(); render(); });
    onTabLeave('scene', function(){ stopAll(); });
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: tapedeck (Gallery main attraction · the story tapes) ══ */
  function cassette(t, small){ return '<span class="ms-td-cas'+(small?' sm':'')+'" style="--tc:'+t.col+'"><span class="lbl"><b>'+esc(t.kind)+'</b><em>'+esc(t.title)+'</em></span><span class="win"><i class="reel"></i><i class="reel"></i></span></span>'; }
  function modTapedeck(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var T = cfg.tapes || [];
    ST.td = ST.td || {cur:null, line:0, done:{}, qi:0, ok:false}; var S = ST.td;
    var m = shell('ms-td-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-td-stage" style="'+rcol()+'"><div class="ms-td-shelf" role="list" aria-label="Five story tapes"></div>' +
      '<div class="ms-td-deck"><div class="ms-td-slot" aria-label="Tape player slot"><span class="ms-td-empty">⏏ Put a tape in here</span></div><div class="ms-td-read" aria-live="polite"></div><div class="ms-td-ctl"></div></div>' +
      '<div class="ms-td-act"></div><div class="ms-td-map">'+usSVG('ms-td-us', 'A map of the United States. Tap a state to choose a region.')+'<div class="ms-td-legend"></div></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var shelf = $('.ms-td-shelf', m), slot = $('.ms-td-slot', m), read = $('.ms-td-read', m), ctl = $('.ms-td-ctl', m), svg = $('.ms-td-us', m), legend = $('.ms-td-legend', m), act = $('.ms-td-act', m), deck = $('.ms-td-deck', m);
    var timer = 0, song = null;
    function tape(k){ for (var i = 0; i < T.length; i++) if (T[i].k === k) return T[i]; return null; }
    function stopSong(){ if (song && !song.paused) song.pause(); var b = $('.ms-td-song', ctl); if (b) b.textContent = '🎵 Play the song'; }
    function load(k){ if (S.cur || S.done[k]) return; S.cur = k; S.line = calm() ? 99 : 1; save(); SFX.click(); render(); tick(); }
    function tick(){ clearTimeout(timer); var t = tape(S.cur); if (!t || S.line >= t.lines.length) return;
      timer = setTimeout(function(){ if (!S.cur) return; S.line++; save(); render(); tick(); }, 3200); }
    function eject(){ clearTimeout(timer); stopSong(); S.cur = null; S.line = 0; save(); SFX.click(); render(); }
    function paint(){
      shelf.innerHTML = T.map(function(t){ var d = !!S.done[t.k], here = S.cur === t.k;
        return '<button type="button" role="listitem" class="ms-td-tape'+(d?' done':'')+(here?' in':'')+'" data-k="'+t.k+'" aria-label="'+esc(t.kind+': '+t.title)+(d?' (home found)':'')+'">'+cassette(t, true)+(d?'<span class="ms-td-home" style="background:var(--rc-'+t.r+')">'+esc(regName(t.r))+'</span>':'')+'</button>'; }).join('');
      $$('.ms-td-tape', shelf).forEach(function(b){ var k = b.dataset.k; if (S.done[k] || S.cur) return;
        dragger(b, function(moved, tg){ if (!moved) return; if (tg) load(k); else { SFX.miss(); } }, '.ms-td-slot');
        b.addEventListener('click', function(){ load(k); }); });
      var t = tape(S.cur); deck.classList.toggle('loaded', !!t); deck.classList.toggle('turning', !!t && S.line < t.lines.length);
      slot.innerHTML = t ? cassette(t) : '<span class="ms-td-empty">⏏ Put a tape in here</span>';
      litRegions(svg, Object.keys(S.done).map(function(k){ return tape(k).r; }));
      svg.classList.toggle('pick', !!t && S.line >= t.lines.length && !S.done[S.cur]);
      legend.innerHTML = T.filter(function(x){ return S.done[x.k]; }).map(function(x){ return '<span style="--tc:var(--rc-'+x.r+')"><i></i>'+esc(x.kind)+' → '+esc(regName(x.r))+'</span>'; }).join('');
      if (t) { var n = Math.min(S.line, t.lines.length);
        read.innerHTML = '<div class="ms-td-ttl">'+esc(t.kind)+': <b>'+esc(t.title)+'</b></div>' + t.lines.slice(0, n).map(function(l, i){ return '<p class="'+(i === n - 1 && n < t.lines.length + 1 ? 'new' : '')+'">'+esc(l)+'</p>'; }).join('');
        ctl.innerHTML = (n < t.lines.length ? '<button type="button" class="ms-btn alt ms-td-more">⏩ Next line</button>' : '') + (t.play ? '<button type="button" class="ms-btn alt ms-td-song">'+(song && !song.paused ? '⏸ Pause the song' : '🎵 Play the song')+'</button>' : '') + (S.done[S.cur] ? '' : '');
        var mo = $('.ms-td-more', ctl); if (mo) mo.onclick = function(){ S.line++; save(); render(); tick(); };
        var sb = $('.ms-td-song', ctl); if (sb) sb.onclick = function(){ if (!song) song = new Audio(DATA.songURL || ''); if (song.paused) { song.play().catch(function(){}); sb.textContent = '⏸ Pause the song'; } else { song.pause(); sb.textContent = '🎵 Play the song'; } };
      } else { read.innerHTML = '<p class="ms-td-hint">The words on the tape will show up here.</p>'; ctl.innerHTML = ''; }
    }
    $$('.st', svg).forEach(function(p){ p.addEventListener('click', function(){ var t = tape(S.cur); if (!t || S.line < t.lines.length || S.done[t.k]) return;
      if (p.dataset.r !== t.r) { SFX.miss(); var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 That is the '+esc(regName(p.dataset.r))+'. Look at the clues on the tape: <b>'+esc(t.clues)+'</b>.</div>'; return; }
      S.done[t.k] = true; save(); SFX.chime(); render(); }); });
    function render(){
      paint(); var t = tape(S.cur), nd = Object.keys(S.done).length, N = T.length + 2;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (t && S.done[t.k]) { act.innerHTML = stepCard(nd, N, 'Home found: the '+regName(t.r), '<div class="ms-sh-tag"><b>🗺️ What a map can\'t tell you</b><p>'+esc(t.map)+'</p></div><button type="button" class="ms-btn big ms-td-ej">⏏ Eject and pick '+(nd < T.length ? 'another tape' : 'the questions')+'</button>');
        $('.ms-td-ej', act).onclick = eject; return; }
      if (t) { var ready = S.line >= t.lines.length;
        act.innerHTML = stepCard(nd + 1, N, ready ? 'Where is it from?' : 'Read along', ready ? '<p class="ms-wm-do">🗺️ Tap this tape\'s home region on the map.</p><p class="ms-td-clues">🔎 Clues: <b>'+esc(t.clues)+'</b></p><div class="ms-exfb" aria-live="polite"></div>' : '<p class="ms-wm-do">📼 The reels are turning. Read each line as it appears, or tap <b>Next line</b>.</p>'); return; }
      if (nd < T.length) { act.innerHTML = stepCard(nd + 1, N, 'Pick a tape', '<p class="ms-wm-do">👆 Drag a tape into the player, or tap it. ('+nd+' of '+T.length+' tapes done)</p>'); return; }
      var Q = S.qi ? cfg.q2 : cfg.q1;
      var cq = choiceQ(Q, T.length + 1 + S.qi, function(){ var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big'; b.textContent = S.qi ? 'Done ✓' : 'Next question ➡️'; $('.ms-stepcard', act).appendChild(b);
        b.onclick = function(){ SFX.click(); if (S.qi) { S.ok = true; ST.gal = ST.gal||{}; ST.gal.tapes = 1; galleryCheck(); SFX.fanfare(); } else S.qi = 1; save(); render(); }; });
      act.innerHTML = stepCard(T.length + 1 + S.qi, N, Q.title, cq.html); cq.bind(act);
    }
    onTabLeave('explore', function(){ stopSong(); clearTimeout(timer); });
    render(); if (S.cur) tick();
  }

  /* ══ MODULE: newspaper (Gallery hands-on · unfold the 1965 front page) ══ */
  function modNewspaper(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var P = cfg.paper || {}, F = cfg.finds || [];
    ST.np = ST.np || {open:0, i:0, found:{}, ok:false}; var S = ST.np;
    var m = shell('ms-np-mod', cfg);
    var sid = 0, body = (P.body || []).map(function(par){ return '<p>' + par.map(function(s){ var k = s[0];
      return k ? '<span class="ms-np-s" role="button" tabindex="0" data-k="'+k+'" data-id="'+(sid++)+'">'+esc(s[1])+'</span>' : '<span class="ms-np-s plain" role="button" tabindex="0" data-k="" data-id="'+(sid++)+'">'+esc(s[1])+'</span>'; }).join('') + '</p>'; });
    m.insertAdjacentHTML('beforeend', '<div class="ms-np-stage"><div class="ms-np-paper" data-open="0">' +
      '<div class="ms-np-p p1"><div class="ms-np-mast">'+esc(P.name||'')+'</div><div class="ms-np-date"><span>Vol. 86</span><span>'+esc(P.date||'')+'</span><span>'+esc(P.price||'')+'</span></div><div class="ms-np-head">'+esc(P.head||'')+'</div><div class="ms-np-deck">'+esc(P.deck||'')+'</div></div>' +
      '<div class="ms-np-p p2">'+(body[0]||'')+(body[1]||'')+'</div><div class="ms-np-p p3">'+(body[2]||'')+'<p class="ms-np-note">A pretend newspaper page, written for the Listening Station. Hurricane Betsy was real.</p></div></div></div><div class="ms-np-act"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var paper = $('.ms-np-paper', m), act = $('.ms-np-act', m), N = F.length + 1;
    function paint(){ paper.dataset.open = S.open; paper.classList.toggle('hunt', S.open >= 2 && !S.ok && S.i < F.length);
      $$('.ms-np-s', paper).forEach(function(s){ var hit = S.found[s.dataset.id]; s.classList.toggle('hit', !!hit); if (hit) s.dataset.tag = hit; else delete s.dataset.tag; }); }
    function tapS(s){ if (S.open < 2 || S.ok || S.i >= F.length) return; var f = F[S.i];
      if (s.dataset.k !== f.k) { SFX.miss(); var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 '+esc(f.fb)+'</div>'; return; }
      S.found[s.dataset.id] = f.k.toUpperCase(); S.i++; save(); SFX.chime(); render(); }
    $$('.ms-np-s', paper).forEach(function(s){ s.addEventListener('click', function(){ tapS(s); }); s.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tapS(s); } }); });
    function render(){
      paint();
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.open < 2) { act.innerHTML = stepCard(1, N, 'Unfold the newspaper', '<p class="ms-wm-do">📰 The paper is folded. Tap to open it'+(S.open ? ' the rest of the way' : '')+'.</p><button type="button" class="ms-btn big ms-np-open">📰 Unfold '+(S.open ? 'again' : 'the paper')+'</button>');
        $('.ms-np-open', act).onclick = function(){ S.open++; save(); SFX.creak(); render(); }; return; }
      if (S.i >= F.length) { S.ok = true; ST.gal = ST.gal||{}; ST.gal.paper = 1; save(); galleryCheck(); SFX.fanfare(); render(); return; }
      var f = F[S.i]; act.innerHTML = stepCard(S.i + 2, N, f.t, '<p class="ms-wm-do">👆 Tap the words in the newspaper that answer: <b>'+esc(f.t)+'</b></p><div class="ms-exfb" aria-live="polite"></div>');
    }
    render();
  }

  /* ══ MODULE: onair (Exhibit Floor · the Listening Station sign → ON AIR) ══ */
  function modOnair(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var NEED = cfg.sentMin || 3, KIND = new RegExp('\\b(' + (cfg.kinds || 'song|legend|poem|news|story') + ')\\b', 'i'), MINE = /\b(my|our)\s+(region|state|town|city|family|home)\b|\bwhere i live\b|\bin my\b/i;
    ST.oa = ST.oa || {step:1, open:false}; var S = ST.oa;
    var m = shell('ms-oa-mod', cfg);
    var frames = ''; for (var i = 0; i < 5; i++) frames += '<span class="ms-oa-fr"><i>?</i></span>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-oa-act"></div><div class="ms-oa-show" hidden><div class="ms-oa-hall">' +
      '<div class="ms-oa-wall"><div class="ms-oa-frames">'+frames+'</div><div class="ms-oa-wt">🖼️ '+esc(cfg.wallT||'')+'</div></div>' +
      '<div class="ms-oa-station"><div class="ms-oa-lamp">ON AIR</div><div class="ms-oa-box"><i class="reel"></i><i class="reel"></i></div><div class="ms-oa-waves" aria-hidden="true"><i></i><i></i><i></i></div>' +
      '<div class="ms-oa-sign"><div class="h">🎧 The Listening Station</div><p class="tx"></p><p class="by"></p><span class="ms-draft">DRAFT</span></div></div>' + alcoves('ms-oa-row') + '</div></div><div class="ms-oa-end"></div>');
    var homeA = document.createComment('oa-home'); ta.parentNode.insertBefore(homeA, ta); ta.parentNode.insertBefore(m, ta);
    $$('.textbox-prompt', ta.parentNode).forEach(function(p){ if (p.nextElementSibling === m || p.nextElementSibling === homeA) p.classList.add('ms-hide-on'); });
    var act = $('.ms-oa-act', m), show = $('.ms-oa-show', m), end = $('.ms-oa-end', m), row = $('.ms-oa-row', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== homeA) homeA.parentNode.insertBefore(ta, homeA.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return (s.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function miss1(){ var miss = [], n = sents(ta.value); if (n < NEED) miss.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+'.'); if (!KIND.test(ta.value)) miss.push('Name a kind of story (song, legend, poem, or news).'); return miss; }
    function view(){ $('.tx', show).textContent = ta.value.trim() || 'Your sign will appear here.'; $('.by', show).textContent = 'Sign by ' + (sget(NAMEK,'') || 'Junior Curator') + ', United States Region Curator';
      show.classList.toggle('open', !!S.open); lightAlcoves(row, S.open ? 'all' : [], false); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 2; ta.classList.toggle('ms-gi-away', S.step !== 1);
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 2, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-cp-notes">'+(cfg.notes||[]).map(function(n){ return '<span>📌 '+esc(n)+'</span>'; }).join('')+'</div><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box b1"></div><div class="ms-excheck ms-oa-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-oa-next">Next: go on the air ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.b1', act).appendChild(ta);
        var chk = $('.ms-oa-chk', act), fb = $('.ms-gi-fb', act);
        var upd = function(){ var n = sents(ta.value), k = KIND.test(ta.value), mine = MINE.test(ta.value), miss = miss1();
          chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences</span><span class="ms-chip'+(k?' ok':'')+'">'+(k?'✓ ':'')+'names a kind of story</span><span class="ms-chip'+(mine?' ok':'')+'">'+(mine?'✓ ':'')+'a story from my region</span>';
          $('.ms-oa-next', act).classList.toggle('ms-notready', !!miss.length); if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b, i){ b.onclick = function(){ var t = (cfg.starters||[])[i]; ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-oa-next', act).onclick = function(){ var miss = miss1(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.chime(); S.step = 2; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(2, 2, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><button type="button" class="ms-btn big ms-oa-go">🔴 '+esc(cfg.openT||'ON AIR')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-oa-edit">✏️ '+esc(cfg.editT||'Edit my sign')+'</button></div>';
      var ob = $('.ms-oa-go', end); if (ob) ob.onclick = function(){ var miss = miss1(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); lightAlcoves(row, 'all', true); setTimeout(function(){ show.classList.remove('opening'); }, 5200); optiNod('assignment'); check(); };
      $('.ms-oa-edit', end).onclick = function(){ S.open = false; S.step = 1; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 1) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.07.08 (Contributions from Diverse Groups) ══════════
     DATA.people = six contributors (object, clue, story, life path by state); DATA.cher = Cherokee glyph paths (Noto Sans Cherokee, OFL)
     - who        Lobby: a cart of six covered objects; lift a cloth, read the clue, pick the person; one question
     - cwall      Gallery main attraction: hang six name plaques on their object frames; a gold thread draws each life path on the U.S. map
     - syllabary  Gallery hands-on: tap Sequoyah's symbols to write tsa-la-gi (Cherokee) and o-si-yo (hello); one question
     - founder    Exhibit Floor: wall sign (3 sentences) + a plaque for someone from your region → cut the ribbon: the whole gallery lights up */
  function person(k){ var P = DATA.people || []; for (var i = 0; i < P.length; i++) if (P[i].k === k) return P[i]; return null; }
  var DRAW = {
    memorial: '<svg viewBox="0 0 200 110" aria-hidden="true"><rect width="200" height="110" fill="#CFE3C4"/><path d="M0 70 H200 V110 H0Z" fill="#9CC48A"/><path d="M8 72 L100 40 L192 72 L192 80 L100 58 L8 80Z" fill="#1E2328"/><path d="M100 40 V58" stroke="#3A4148" stroke-width="1.5"/>' + (function(){ var s = ''; for (var i = 0; i < 9; i++) { s += '<path d="M'+(16+i*9)+' '+(72-i*3.1)+' h6" stroke="#9AA3AB" stroke-width="1"/><path d="M'+(110+i*9)+' '+(44+i*3.1)+' h6" stroke="#9AA3AB" stroke-width="1"/>'; } return s; })() + '<path d="M0 84 Q100 70 200 84" stroke="#E8E2CF" stroke-width="3" fill="none"/></svg>',
    robe: '<svg viewBox="0 0 200 110" aria-hidden="true"><rect width="200" height="110" fill="#E9E1CF"/><path d="M78 14 Q100 8 122 14 L132 30 L150 104 H50 L68 30Z" fill="#1E2328"/><path d="M90 14 L100 34 L110 14" fill="#F7F3EA"/><path d="M68 30 L46 76 L58 80 L74 46 M132 30 L154 76 L142 80 L126 46" fill="#2A3036"/><path d="M100 34 V104" stroke="#3A4148" stroke-width="2"/></svg>',
    grapes: '<svg viewBox="0 0 200 110" aria-hidden="true"><rect width="200" height="110" fill="#F3EAD4"/><path d="M62 18 q8 -10 18 -6" stroke="#5A7A2E" stroke-width="4" fill="none"/><path d="M70 20 q-24 -6 -30 12 q18 -2 30 -12z" fill="#6E9A3A"/>' + [[58,34],[74,34],[50,48],[66,48],[82,48],[58,62],[74,62],[66,76]].map(function(p){ return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="9" fill="#6B3E8E" stroke="#4E2A6A" stroke-width="1.5"/>'; }).join('') + '<circle cx="146" cy="56" r="38" fill="#C0392B" stroke="#7A1F18" stroke-width="3"/><circle cx="146" cy="56" r="31" fill="none" stroke="#F7E3C0" stroke-width="1.5"/><text x="146" y="50" text-anchor="middle" font-family="Nunito,sans-serif" font-weight="900" font-size="11" fill="#fff">FAIR PAY</text><text x="146" y="64" text-anchor="middle" font-family="Nunito,sans-serif" font-weight="900" font-size="9" fill="#fff">FOR FARM</text><text x="146" y="76" text-anchor="middle" font-family="Nunito,sans-serif" font-weight="900" font-size="9" fill="#fff">WORKERS</text></svg>'
  };
  function objHTML(p){ return p.obj.img ? '<img src="'+img(p.obj.img)+'" alt="'+esc(p.obj.t)+'">' : (DRAW[p.obj.draw] || ''); }

  /* ══ MODULE: who (Lobby · who made this?) ══ */
  function modWho(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var P = DATA.people || [];
    ST.who = ST.who || {open:{}, got:{}, cur:null, q:false}; var S = ST.who;
    var m = shell('ms-who-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-who-cart"><div class="ms-who-shelf"></div><div class="ms-who-wheels" aria-hidden="true"><i></i><i></i></div></div><div class="ms-who-act" aria-live="polite"></div>');
    after(anchor, m);
    var shelf = $('.ms-who-shelf', m), act = $('.ms-who-act', m);
    function paint(){
      shelf.innerHTML = P.map(function(p, i){ var o = !!S.open[p.k], g = !!S.got[p.k];
        return '<button type="button" class="ms-who-obj'+(o?' open':'')+(g?' got':'')+(S.cur===p.k?' cur':'')+'" data-k="'+p.k+'" aria-label="'+(o ? esc(p.obj.t) : 'Covered object '+(i+1)+'. Tap to lift the cloth.')+'">' +
          '<span class="ob">'+objHTML(p)+'</span><span class="cloth" aria-hidden="true"><b>'+(i+1)+'</b></span><span class="tag">'+(g ? esc(p.name) : o ? esc(p.obj.t) : '?')+'</span></button>'; }).join('');
      $$('.ms-who-obj', shelf).forEach(function(b){ b.onclick = function(){ var k = b.dataset.k; if (!S.open[k]) { S.open[k] = true; SFX.creak(); } S.cur = k; save(); render(); }; });
    }
    function render(){
      paint(); var got = Object.keys(S.got).length, N = P.length + 1;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (got >= P.length) { var q = choiceQ(cfg.q, N, function(){ markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
        act.innerHTML = stepCard(N, N, cfg.q.title, q.html); q.bind(act); return; }
      var p = S.cur && person(S.cur);
      if (!p || !S.open[p.k]) { act.innerHTML = stepCard(got + 1, N, 'Lift a cloth', '<p class="ms-wm-do">👆 Tap a covered object on the cart to see what is under the cloth. ('+got+' of '+P.length+' found)</p>'); return; }
      if (S.got[p.k]) { act.innerHTML = stepCard(got, N, p.name, '<div class="ms-sh-tag"><b>'+esc(p.obj.t)+'</b><p>'+esc(p.about)+'</p></div><p class="ms-wm-do">👆 Tap another covered object.</p>'); return; }
      var opts = P.filter(function(x){ return !S.got[x.k]; });
      act.innerHTML = stepCard(got + 1, N, 'Who made this?', '<p class="ms-who-clue">🔎 <b>Clue:</b> '+esc(p.clue)+'</p><div class="ms-who-names">'+opts.map(function(x){ return '<button type="button" class="ms-btn alt ms-who-nm" data-k="'+x.k+'">'+esc(x.name)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div>');
      $$('.ms-who-nm', act).forEach(function(b){ b.onclick = function(){
        if (b.dataset.k !== p.k) { SFX.miss(); b.classList.add('no'); var x = person(b.dataset.k); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 Not '+esc(x.name)+'. Read the clue again: what kind of object is it?</div>'; return; }
        S.got[p.k] = true; save(); SFX.chime(); render(); }; });
    }
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: cwall (Gallery main attraction · hang the Contributions Wall) ══ */
  function stateC(n){ var s = DATA.geo && DATA.geo.states[n]; if (!s) return null; var b = bbOf(s.d); return [(b[0]+b[2])/2, (b[1]+b[3])/2]; }
  function modCwall(cfg){
    var anchor = $(cfg.anchor); if (!anchor || !DATA.geo) return;
    var P = DATA.people || [];
    ST.cw = ST.cw || {hung:{}, sel:null, last:null, ok:false}; var S = ST.cw;
    var m = shell('ms-cw-mod', cfg);
    var threads = P.map(function(p){ var pts = p.path.map(stateC).filter(Boolean);
      var d = pts.map(function(c, i){ return (i ? 'L' : 'M') + c[0].toFixed(1) + ' ' + c[1].toFixed(1); }).join(' ');
      return '<g class="thr" data-k="'+p.k+'"><path class="line" d="'+d+'" pathLength="100"/>' + pts.map(function(c, i){ return '<circle class="pin'+(i === pts.length - 1 ? ' end' : '')+'" cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="'+(i === pts.length - 1 ? 13 : 9)+'"/>'; }).join('') + '</g>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-cw-stage" style="'+rcol()+'"><div class="ms-cw-wall"><div class="ms-cw-title">THE CONTRIBUTIONS WALL</div><div class="ms-cw-frames">' +
      P.map(function(p){ return '<div class="ms-cw-frame" data-k="'+p.k+'" role="button" tabindex="0" aria-label="Frame: '+esc(p.obj.t)+'"><span class="ob">'+objHTML(p)+'</span><span class="nm">'+esc(p.obj.t)+'</span></div>'; }).join('') +
      '</div></div><div class="ms-cw-tray" aria-label="Name plaques"></div><div class="ms-cw-act" aria-live="polite"></div><div class="ms-cw-map">'+usSVG('ms-cw-us', 'A map of the United States. Gold threads show where each contributor lived.', '<g class="thrs">'+threads+'</g>')+'</div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var tray = $('.ms-cw-tray', m), act = $('.ms-cw-act', m), svg = $('.ms-cw-us', m);
    function hang(k, fk){ if (S.ok || S.hung[k]) return; var p = person(k), f = person(fk);
      if (k !== fk) { SFX.miss(); S.sel = null; save(); paint(); act.innerHTML = stepCard(Object.keys(S.hung).length + 1, P.length + 1, 'Not that frame', '<div class="ms-notyet">🤔 That frame holds '+esc(f.obj.t.toLowerCase())+'. Which person goes with it? Think back to the Lobby clue: '+esc(f.clue)+'</div>'); return; }
      S.hung[k] = true; S.sel = null; S.last = k; save(); SFX.chime(); render(); }
    function paint(){
      tray.innerHTML = P.filter(function(p){ return !S.hung[p.k]; }).map(function(p){ return '<button type="button" class="ms-cw-plq'+(S.sel===p.k?' sel':'')+'" data-k="'+p.k+'">'+esc(p.name)+'</button>'; }).join('') || '<span class="ms-cw-full">✨ Every plaque is on the wall.</span>';
      $$('.ms-cw-plq', tray).forEach(function(b){ var k = b.dataset.k;
        dragger(b, function(moved, tg){ if (!moved) return; if (tg) hang(k, tg.dataset.k); else SFX.miss(); }, '.ms-cw-frame:not(.hung)');
        b.addEventListener('click', function(){ S.sel = S.sel === k ? null : k; save(); SFX.click(); paint(); }); });
      $$('.ms-cw-frame', m).forEach(function(f){ var k = f.dataset.k, h = !!S.hung[k], p = person(k);
        f.classList.toggle('hung', h); f.classList.toggle('pick', !!S.sel && !h); f.classList.toggle('last', S.last === k);
        $('.nm', f).textContent = h ? p.name : p.obj.t; });
      $$('.thr', svg).forEach(function(t){ t.classList.toggle('on', !!S.hung[t.dataset.k]); });
      litRegions(svg, P.filter(function(p){ return S.hung[p.k]; }).map(function(p){ return p.r; }));
    }
    $$('.ms-cw-frame', m).forEach(function(f){ var go = function(){ if (S.sel && !f.classList.contains('hung')) hang(S.sel, f.dataset.k); };
      f.addEventListener('click', go); f.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    function render(){
      paint(); var n = Object.keys(S.hung).length, N = P.length + 1;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (n >= P.length && !S.last) { var q = choiceQ(cfg.q, N, function(){ ST.gal = ST.gal||{}; ST.gal.wall = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.ok = true; save(); render(); }, calm()?0:1600); });
        act.innerHTML = stepCard(N, N, cfg.q.title, q.html); q.bind(act); return; }
      if (S.last) { var p = person(S.last);
        act.innerHTML = stepCard(n, N, p.name + ' (' + p.years + ')', '<div class="ms-sh-tag"><b>🧵 '+esc(p.pathT)+'</b><p>'+esc(p.about)+'</p></div><button type="button" class="ms-btn big ms-cw-go">'+(n < P.length ? 'Next plaque ➡️' : 'Next: the question ➡️')+'</button>');
        $('.ms-cw-go', act).onclick = function(){ SFX.click(); S.last = null; save(); render(); }; return; }
      act.innerHTML = stepCard(n + 1, N, 'Hang a plaque', '<p class="ms-wm-do">👆 Drag a name plaque onto its object. Or tap a plaque, then tap its frame. ('+n+' of '+P.length+' hung)</p>');
    }
    render();
  }

  /* ══ MODULE: syllabary (Gallery hands-on · write like Sequoyah) ══ */
  function glyph(k){ var C = DATA.cher || {}, g = (C.g || {})[k]; if (!g) return ''; return '<svg viewBox="0 0 '+g.w+' '+C.h+'" aria-hidden="true"><path d="'+g.d+'"/></svg>'; }
  function modSyllabary(cfg){
    var anchor = $(cfg.anchor); if (!anchor || !DATA.cher) return;
    var W = cfg.words || [];
    ST.syl = ST.syl || {wi:0, n:0, ok:false}; var S = ST.syl;
    var m = shell('ms-syl-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-syl-stage"><div class="ms-syl-board"></div><div class="ms-syl-tiles" role="group" aria-label="Cherokee symbols"></div></div><div class="ms-syl-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var board = $('.ms-syl-board', m), tiles = $('.ms-syl-tiles', m), act = $('.ms-syl-act', m);
    tiles.innerHTML = (cfg.tiles || []).map(function(k){ return '<button type="button" class="ms-syl-t" data-k="'+k+'" aria-label="Symbol for '+esc(cfg.sounds[k]||k)+'">'+glyph(k)+'<b>'+esc(cfg.sounds[k]||k)+'</b></button>'; }).join('');
    function paintBoard(){ var html = W.map(function(w, i){ var n = i < S.wi ? w.parts.length : i === S.wi ? S.n : 0;
        if (i > S.wi) return ''; return '<div class="ms-syl-word'+(n >= w.parts.length ? ' done' : '')+'"><div class="en">'+esc(w.en)+'</div><div class="slots">'+w.parts.map(function(p, j){ return '<span class="sl'+(j < n ? ' in' : j === n ? ' next' : '')+'">'+(j < n ? glyph(p) : '')+'<i>'+esc(cfg.sounds[p]||p)+'</i></span>'; }).join('')+'</div></div>'; }).join('');
      board.innerHTML = html; tiles.classList.toggle('off', S.wi >= W.length); }
    $$('.ms-syl-t', tiles).forEach(function(t){ t.onclick = function(){ if (S.wi >= W.length) return; var w = W[S.wi], want = w.parts[S.n];
      if (t.dataset.k !== want) { SFX.miss(); t.classList.add('no'); setTimeout(function(){ t.classList.remove('no'); }, 500); $('.ms-exfb', act) && ($('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 That symbol says <b>'+esc(cfg.sounds[t.dataset.k])+'</b>. Find the one that says <b>'+esc(cfg.sounds[want])+'</b>.</div>'); return; }
      SFX.pop(); S.n++; if (S.n >= w.parts.length) { SFX.chime(); } save(); render(); }; });
    function render(){
      paintBoard(); var N = W.length + 1;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.wi < W.length) { var w = W[S.wi], full = S.n >= w.parts.length;
        act.innerHTML = stepCard(S.wi + 1, N, 'Write "' + w.en + '"', full ? '<div class="ms-sh-tag"><b>'+esc(w.en)+' = '+esc(w.say)+'</b><p>'+esc(w.note)+'</p></div><button type="button" class="ms-btn big ms-syl-go">Next ➡️</button>'
          : '<p class="ms-wm-do">👆 Say it: <b>'+esc(w.say)+'</b>. Tap the symbol for <b>'+esc(cfg.sounds[w.parts[S.n]])+'</b>.</p><div class="ms-exfb" aria-live="polite"></div>');
        var g = $('.ms-syl-go', act); if (g) g.onclick = function(){ SFX.click(); S.wi++; S.n = 0; save(); render(); }; return; }
      var q = choiceQ(cfg.q, N, function(){ ST.gal = ST.gal||{}; ST.gal.syl = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.ok = true; save(); render(); }, calm()?0:1600); });
      act.innerHTML = stepCard(N, N, cfg.q.title, q.html); q.bind(act);
    }
    render();
  }

  /* ══ MODULE: founder (Exhibit Floor · the last sign + my-region plaque → cut the ribbon) ══ */
  var ROSETTE = '<svg viewBox="0 0 120 150" aria-hidden="true"><path d="M40 70 L28 146 L48 132 L58 150 L62 74Z" fill="#C0392B"/><path d="M80 70 L92 146 L72 132 L62 150 L58 74Z" fill="#A02E22"/>' + (function(){ var s = ''; for (var i = 0; i < 16; i++) { var a = i * Math.PI / 8; s += '<ellipse cx="'+(60 + Math.cos(a) * 34).toFixed(1)+'" cy="'+(56 + Math.sin(a) * 34).toFixed(1)+'" rx="12" ry="7" transform="rotate('+(i * 22.5)+' '+(60 + Math.cos(a) * 34).toFixed(1)+' '+(56 + Math.sin(a) * 34).toFixed(1)+')" fill="'+(i % 2 ? '#D9A92E' : '#F3D27A')+'"/>'; } return s; })() + '<circle cx="60" cy="56" r="26" fill="#C0392B" stroke="#F3D27A" stroke-width="4"/><path d="M60 40 l5 10 11 1.6 -8 7.8 2 11 -10 -5.2 -10 5.2 2 -11 -8 -7.8 11 -1.6Z" fill="#F3D27A"/></svg>';
  function modFounder(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'), tb = document.getElementById(cfg.textarea2 || 'journal-mine'); if (!ta || !tb) return;
    var NEED = cfg.sentMin || 3, NAMES = /sequoyah|douglass|maya lin|\blin\b|o.?connor|chavez|lili.?uokalani/i, IDEA = /\bpeople\b/i;
    ST.fd = ST.fd || {step:1, open:false}; var S = ST.fd;
    var m = shell('ms-fd-mod', cfg);
    var frames = (DATA.people || []).map(function(p){ return '<span class="ms-fd-fr">'+objHTML(p)+'</span>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-fd-act"></div><div class="ms-fd-show" hidden><div class="ms-fd-hall">' +
      '<div class="ms-fd-rooms"><div class="ms-fd-room r1"><div class="h">Five Alcoves</div>'+alcoves('ms-fd-row')+'</div>' +
      '<div class="ms-fd-room r2"><div class="h">Listening Station</div><div class="ms-fd-radio" aria-hidden="true"><i></i><i></i></div></div>' +
      '<div class="ms-fd-room r3"><div class="h">Contributions Wall</div><div class="ms-fd-frames">'+frames+'</div></div></div>' +
      '<div class="ms-fd-signs"><div class="ms-fd-sign"><div class="h">🖼️ The Contributions Wall</div><p class="tx"></p><p class="by"></p></div><div class="ms-fd-plq"><div class="h">⭐ From My Region</div><p class="tx2"></p></div></div>' +
      '<div class="ms-fd-door" aria-hidden="true"><div class="post l"></div><div class="post r"></div><div class="rib l"></div><div class="rib r"></div><div class="bow"></div></div>' +
      '<div class="ms-fd-badge" aria-hidden="true">'+ROSETTE+'<span>'+esc(cfg.badge||'Gallery Founder')+'</span></div></div></div><div class="ms-fd-end"></div>');
    var homeA = document.createComment('fd-home-a'), homeB = document.createComment('fd-home-b');
    ta.parentNode.insertBefore(homeA, ta); tb.parentNode.insertBefore(homeB, tb); ta.parentNode.insertBefore(m, ta);
    $$('.textbox-prompt', ta.parentNode).forEach(function(p){ if (p.nextElementSibling === m || p.nextElementSibling === homeA) p.classList.add('ms-hide-on'); });
    var tpb = tb.parentNode.querySelector('.textbox-prompt'); if (tpb) tpb.classList.add('ms-hide-on');
    var act = $('.ms-fd-act', m), show = $('.ms-fd-show', m), end = $('.ms-fd-end', m), row = $('.ms-fd-row', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== homeA) homeA.parentNode.insertBefore(ta, homeA.nextSibling); if (tb.previousSibling !== homeB) homeB.parentNode.insertBefore(tb, homeB.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return (s.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function miss1(){ var miss = [], n = sents(ta.value); if (n < NEED) miss.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+'.'); if (!NAMES.test(ta.value)) miss.push('Name one of the six contributors.'); if (!IDEA.test(ta.value)) miss.push('End with the big idea about land, stories, and people.'); return miss; }
    function miss2(){ return sents(tb.value) < 1 ? ['Write one sentence about a person from your region.'] : []; }
    function starters(list, box){ return '<div class="ms-gi-starts">'+(list||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start" data-t="'+esc(t)+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div>'; }
    function bindStarters(el, upd){ $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = b.dataset.t; el.value = el.value.replace(/\s*$/,'') + (el.value.trim() ? ' ' : '') + t + ' '; el.focus(); el.setSelectionRange(el.value.length, el.value.length); el.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; }); }
    function view(){ $('.tx', show).textContent = ta.value.trim() || 'Your sign will appear here.'; $('.by', show).textContent = 'Sign by ' + (sget(NAMEK,'') || 'Junior Curator') + ', United States Region Curator'; $('.tx2', show).textContent = tb.value.trim();
      show.classList.toggle('open', !!S.open); lightAlcoves(row, S.open ? 'all' : [], false); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 1); tb.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-cp-notes">'+(cfg.notes||[]).map(function(n){ return '<span>📌 '+esc(n)+'</span>'; }).join('')+'</div>'+starters(cfg.starters)+'<div class="ms-gi-box b1"></div><div class="ms-excheck ms-fd-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-fd-next">Next: your region\'s plaque ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.b1', act).appendChild(ta);
        var chk = $('.ms-fd-chk', act), fb = $('.ms-gi-fb', act);
        var upd = function(){ var n = sents(ta.value), nm = NAMES.test(ta.value), id = IDEA.test(ta.value), miss = miss1();
          chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences</span><span class="ms-chip'+(nm?' ok':'')+'">'+(nm?'✓ ':'')+'names a contributor</span><span class="ms-chip'+(id?' ok':'')+'">'+(id?'✓ ':'')+'big idea (people)</span>';
          $('.ms-fd-next', act).classList.toggle('ms-notready', !!miss.length); if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd(); bindStarters(ta, upd);
        $('.ms-fd-next', act).onclick = function(){ var miss = miss1(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) { goHome();
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p>'+starters(cfg.starters2)+'<div class="ms-gi-box b2"></div><div class="ms-excheck ms-fd-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-fd-back">↩️ Back to my sign</button><button type="button" class="ms-btn big ms-fd-next">Next: opening day ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.b2', act).appendChild(tb);
        var chk2 = $('.ms-fd-chk', act), fb2 = $('.ms-gi-fb', act);
        var upd2 = function(){ var ok = !miss2().length; chk2.innerHTML = '<span class="ms-chip'+(ok?' ok':'')+'">'+(ok?'✓ ':'')+'one sentence about a person</span>'; $('.ms-fd-next', act).classList.toggle('ms-notready', !ok); if (fb2.innerHTML && ok) fb2.innerHTML = ''; };
        curUpd = upd2; upd2(); bindStarters(tb, upd2);
        $('.ms-fd-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-fd-next', act).onclick = function(){ var miss = miss2(); if (miss.length) { SFX.miss(); fb2.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-fd-cut">✂️ '+esc(cfg.openT||'Cut the ribbon')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-fd-edit">✏️ '+esc(cfg.editT||'Edit my sign')+'</button></div>';
      var cb = $('.ms-fd-cut', end); if (cb) cb.onclick = function(){ var miss = miss1().concat(miss2()); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); lightAlcoves(row, 'all', true); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 1800);
        setTimeout(function(){ show.classList.remove('opening'); }, 6000); optiNod('assignment'); check(); };
      $('.ms-fd-edit', end).onclick = function(){ S.open = false; S.step = 1; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 1) curUpd(); });
    tb.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.08.01 (Regional Evidence Review) ══════════
     DATA.cards = ten evidence cards from the five alcoves; DATA.ledger = per region: 2 HAS chips + 1 GETS FROM OTHERS chip; DATA.evop = six notes
     - evcards    Lobby: spilled evidence cards → five region trays at the council table; seats light; one question
     - ledger     Gallery main attraction: the council ledger, one page per region, sort chips into HAS / GETS FROM OTHERS; gold line; one question
     - evop       Gallery: the clerk's in-tray, one note at a time into EVIDENCE or OPINION
     - council    Exhibit Floor: pick one resource per region + 2 own sentences → press the wax seal; five seats light, bell */
  function regOf(k){ var R = DATA.regions || []; for (var i = 0; i < R.length; i++) if (R[i].k === k) return R[i]; return {k:k, name:k, icon:'', c:'#888'}; }
  var SEAT = '<svg viewBox="0 0 40 44" aria-hidden="true"><path d="M8 4 h24 v20 h-24z" class="bk"/><path d="M4 24 h32 v6 h-32z" class="st"/><path d="M7 30 v12 M33 30 v12" class="lg"/></svg>';

  /* ══ MODULE: evcards (Lobby · spilled evidence cards → region trays) ══ */
  function modEvcards(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var C = DATA.cards || [], R = DATA.regions || [];
    ST.ev = ST.ev || {in:{}, sel:null, last:null, q:false}; var S = ST.ev;
    var m = shell('ms-ev-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-ev-table" style="'+rcol()+'"><div class="ms-ev-swipe">👉 Swipe the cards to see them all.</div><div class="ms-ev-pile" aria-label="Evidence cards"></div><div class="ms-ev-trays">' +
      R.map(function(r){ return '<div class="ms-ev-tray" data-r="'+r.k+'" role="button" tabindex="0" aria-label="The '+esc(r.name)+' tray"><span class="seat">'+SEAT+'</span><b>'+r.icon+' '+esc(r.name)+'</b><span class="slots"><i></i><i></i></span></div>'; }).join('') +
      '</div></div><div class="ms-ev-act" aria-live="polite"></div>');
    after(anchor, m);
    var pile = $('.ms-ev-pile', m), act = $('.ms-ev-act', m);
    function card(k){ for (var i = 0; i < C.length; i++) if (C[i].k === k) return C[i]; return null; }
    function drop(k, r){ if (S.in[k]) return; var c = card(k);
      if (c.r !== r) { SFX.miss(); S.sel = null; save(); paint(); act.innerHTML = stepCard(Object.keys(S.in).length + 1, C.length + 1, 'Not that tray', '<div class="ms-notyet">🤔 Not the '+esc(regOf(r).name)+'. Read the card again: '+esc(c.t)+' Which region did you learn this in?</div>'); return; }
      S.in[k] = r; S.sel = null; S.last = k; save(); SFX.pop(); render(); }
    function paint(){
      var left = C.filter(function(c){ return !S.in[c.k]; });
      pile.innerHTML = left.map(function(c, i){ return '<button type="button" class="ms-ev-card'+(S.sel===c.k?' sel':'')+'" data-k="'+c.k+'" style="--rot:'+(((i*37)%11)-5)+'deg"><span class="ic">'+c.ic+'</span><span class="tx">'+esc(c.t)+'</span></button>'; }).join('') || '<span class="ms-ev-clear">✨ The table is clear.</span>';
      $$('.ms-ev-card', pile).forEach(function(b){ var k = b.dataset.k;
        dragger(b, function(moved, tg){ if (!moved) return; if (tg) drop(k, tg.dataset.r); else SFX.miss(); }, '.ms-ev-tray');
        b.addEventListener('click', function(){ S.sel = S.sel === k ? null : k; save(); SFX.click(); paint(); }); });
      $$('.ms-ev-tray', m).forEach(function(t){ var r = t.dataset.r, got = C.filter(function(c){ return S.in[c.k] === r; });
        $$('.slots i', t).forEach(function(s, j){ s.textContent = got[j] ? got[j].ic : ''; s.classList.toggle('full', !!got[j]); });
        t.classList.toggle('lit', got.length >= 2); t.classList.toggle('pick', !!S.sel); });
    }
    $$('.ms-ev-tray', m).forEach(function(t){ var go = function(){ if (S.sel) drop(S.sel, t.dataset.r); };
      t.addEventListener('click', go); t.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    function render(){
      paint(); var n = Object.keys(S.in).length, N = C.length + 1;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (n >= C.length) { var q = choiceQ(cfg.q, 1, function(){ markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
        act.innerHTML = stepCard(N, N, cfg.q.title, q.html); q.bind(act); return; }
      var last = S.last && card(S.last);
      act.innerHTML = stepCard(n + 1, N, 'Sort the cards', (last ? '<div class="ms-sh-tag"><b>'+last.ic+' '+esc(regOf(S.in[last.k]).name)+' tray</b><p>'+esc(last.t)+' ('+esc(last.from)+')</p></div>' : '') +
        '<p class="ms-wm-do">👆 Drag a card to its region\'s tray. Or tap a card, then tap the tray. ('+n+' of '+C.length+' sorted)</p>');
    }
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: ledger (Gallery main attraction · the council ledger) ══ */
  function modLedger(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var L = DATA.ledger || [];
    ST.lg = ST.lg || {p:0, put:{}, sel:null, ok:false}; var S = ST.lg;
    var m = shell('ms-lg-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-lg-book" style="'+rcol()+'"><div class="ms-lg-tabs"></div><div class="ms-lg-page"></div><div class="ms-lg-sum" hidden></div></div><div class="ms-lg-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var tabs = $('.ms-lg-tabs', m), page = $('.ms-lg-page', m), sum = $('.ms-lg-sum', m), act = $('.ms-lg-act', m);
    function id(pi, ci){ return pi + '.' + ci; }
    function pageDone(pi){ return L[pi].chips.every(function(c, ci){ return S.put[id(pi, ci)]; }); }
    function allDone(){ return L.every(function(_, pi){ return pageDone(pi); }); }
    function place(ci, col){ var pi = S.p, c = L[pi].chips[ci], r = regOf(L[pi].r); if (S.put[id(pi, ci)]) return;
      var right = (col === 'has') === !!c.has;
      if (!right) { SFX.miss(); S.sel = null; save(); paint();
        $('.ms-exfb', act) && ($('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+(c.has ? 'Does the '+esc(r.name)+' have plenty of '+esc(c.t.toLowerCase())+'? Think about what you learned in its alcove.' : 'Can the '+esc(r.name)+' make enough '+esc(c.t.toLowerCase())+' by itself? Think about its land and weather.')+'</div>'); return; }
      S.put[id(pi, ci)] = 1; S.sel = null; save(); SFX.chime(); render(); }
    function paint(){
      var all = allDone();
      tabs.innerHTML = L.map(function(pg, pi){ var r = regOf(pg.r); return '<button type="button" class="ms-lg-tab'+(pi===S.p && !all?' on':'')+(pageDone(pi)?' done':'')+'" data-p="'+pi+'" style="--c:'+r.c+'"'+(pi > S.p && !pageDone(pi) ? ' disabled' : '')+'>'+r.icon+' '+esc(r.name)+(pageDone(pi)?' ✓':'')+'</button>'; }).join('');
      $$('.ms-lg-tab', tabs).forEach(function(b){ b.onclick = function(){ var pi = +b.dataset.p; if (pi > S.p && !pageDone(pi)) return; S.p = pi; S.sel = null; save(); SFX.click(); render(); }; });
      page.hidden = all; sum.hidden = !all;
      if (all) { sum.innerHTML = '<div class="ms-lg-sh"><span>Region</span><span>HAS plenty of</span><span>GETS FROM OTHERS</span></div>' + L.map(function(pg){ var r = regOf(pg.r);
          return '<div class="ms-lg-row" style="--c:'+r.c+'"><b>'+r.icon+' '+esc(r.name)+'</b><span>'+pg.chips.filter(function(c){ return c.has; }).map(function(c){ return c.ic+' '+esc(c.t); }).join('<br>')+'</span><span class="g">'+pg.chips.filter(function(c){ return !c.has; }).map(function(c){ return c.ic+' '+esc(c.t); }).join('<br>')+'</span></div>'; }).join('') + '<i class="ms-lg-gold" aria-hidden="true"></i>'; return; }
      var pg = L[S.p], r = regOf(pg.r);
      function col(kind){ return pg.chips.map(function(c, ci){ return (S.put[id(S.p, ci)] && (kind === 'has') === !!c.has) ? '<div class="ms-lg-in"><b>'+c.ic+' '+esc(c.t)+'</b><small>'+esc(c.why)+'</small></div>' : ''; }).join(''); }
      page.innerHTML = '<div class="ms-lg-ph" style="--c:'+r.c+'">'+r.icon+' The '+esc(r.name)+'</div>' +
        '<div class="ms-lg-chips">'+pg.chips.map(function(c, ci){ return S.put[id(S.p, ci)] ? '' : '<button type="button" class="ms-lg-chip'+(S.sel===ci?' sel':'')+'" data-c="'+ci+'">'+c.ic+' '+esc(c.t)+'</button>'; }).join('')+'</div>' +
        '<div class="ms-lg-cols"><div class="ms-lg-col has" data-col="has" role="button" tabindex="0" aria-label="HAS plenty of"><div class="h">✅ HAS plenty of</div>'+col('has')+'</div>' +
        '<div class="ms-lg-col gets" data-col="gets" role="button" tabindex="0" aria-label="Gets from others"><div class="h">🤝 GETS FROM OTHERS</div>'+col('gets')+'</div></div>';
      $$('.ms-lg-chip', page).forEach(function(b){ var ci = +b.dataset.c;
        dragger(b, function(moved, tg){ if (!moved) return; if (tg) place(ci, tg.dataset.col); else SFX.miss(); }, '.ms-lg-col');
        b.addEventListener('click', function(){ S.sel = S.sel === ci ? null : ci; save(); SFX.click(); paint(); }); });
      $$('.ms-lg-col', page).forEach(function(c){ c.classList.toggle('pick', S.sel !== null && S.sel !== undefined); var go = function(){ if (S.sel !== null && S.sel !== undefined) place(S.sel, c.dataset.col); };
        c.addEventListener('click', go); c.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    }
    function render(){
      paint(); var N = L.length + 1, r = regOf((L[S.p]||{}).r);
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (allDone()) { var q = choiceQ(cfg.q, 2, function(){ ST.gal = ST.gal||{}; ST.gal.ledger = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.ok = true; save(); render(); }, calm()?0:1600); });
        act.innerHTML = stepCard(N, N, cfg.q.title, '<p class="ms-wm-do">👀 All five pages are side by side. The gold line runs down the GETS FROM OTHERS column.</p>' + q.html); q.bind(act); return; }
      if (pageDone(S.p)) { var nx = S.p + 1 < L.length;
        act.innerHTML = stepCard(S.p + 1, N, 'The ' + r.name + ' page is done', '<p>✅ The '+esc(r.name)+' has plenty of some things, and it gets something from other regions.</p><button type="button" class="ms-btn big ms-lg-go">'+(nx ? 'Next page: the '+esc(regOf(L[S.p+1].r).name)+' ➡️' : 'See all five pages ➡️')+'</button>');
        $('.ms-lg-go', act).onclick = function(){ SFX.click(); if (nx) S.p++; save(); render(); if (!nx) { $('.ms-lg-book', m).scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); } }; return; }
      act.innerHTML = stepCard(S.p + 1, N, 'The ' + r.name + ' page', '<p class="ms-wm-do">👆 Drag each chip to <b>HAS plenty of</b> or <b>GETS FROM OTHERS</b>. Or tap the chip, then tap the column.</p><div class="ms-exfb" aria-live="polite"></div>');
    }
    render();
  }

  /* ══ MODULE: evop (Gallery · evidence or opinion? one note at a time) ══ */
  function modEvop(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var E = DATA.evop || [];
    ST.eo = ST.eo || {i:0, got:false, done:false}; var S = ST.eo;
    var m = shell('ms-eo-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-eo-desk"><div class="ms-eo-tray"><span>IN-TRAY</span><b class="n"></b></div><div class="ms-eo-note" tabindex="-1"></div><div class="ms-eo-boxes"><div class="ms-eo-box ev" data-v="1" role="button" tabindex="0">🔎 EVIDENCE<small>a fact anyone can check</small><span class="cnt"></span></div><div class="ms-eo-box op" data-v="0" role="button" tabindex="0">💭 OPINION<small>what a person feels or thinks</small><span class="cnt"></span></div></div></div><div class="ms-eo-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var note = $('.ms-eo-note', m), act = $('.ms-eo-act', m), tray = $('.ms-eo-tray .n', m);
    function counts(){ var ev = 0, op = 0; for (var i = 0; i < S.i + (S.got ? 1 : 0) && i < E.length; i++) { if (E[i].ev) ev++; else op++; } $('.ms-eo-box.ev .cnt', m).textContent = ev ? ev : ''; $('.ms-eo-box.op .cnt', m).textContent = op ? op : ''; }
    function put(v){ if (S.done || S.got) return; var e = E[S.i];
      if ((v === '1') !== !!e.ev) { SFX.miss(); note.classList.remove('no'); void note.offsetWidth; note.classList.add('no');
        $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+(e.ev ? 'Could someone check this with a ruler, a test, or a map? Then it is evidence.' : 'Look for a feeling word, like prettiest, best, or boring. Feelings are opinions.')+'</div>'; return; }
      S.got = true; save(); SFX.chime(); render(); }
    var nd = null;
    function render(){
      tray.textContent = Math.max(0, E.length - S.i - (S.got ? 1 : 0)) + ' left'; counts();
      if (S.done) { note.hidden = true; act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var e = E[S.i]; note.hidden = S.got; note.innerHTML = '<span class="pin" aria-hidden="true"></span>'+esc(e.t);
      if (S.got) { var last = S.i + 1 >= E.length;
        act.innerHTML = stepCard(S.i + 1, E.length, 'Note ' + (S.i + 1) + ' of ' + E.length, '<div class="ms-vd-thanks">✅ <b>'+(e.ev ? 'Evidence.' : 'Opinion.')+'</b> '+esc(e.why)+'</div><button type="button" class="ms-btn big ms-eo-go">'+(last ? 'Done with the in-tray ✓' : 'Next note ➡️')+'</button>');
        $('.ms-eo-go', act).onclick = function(){ SFX.click(); if (last) { S.done = true; ST.gal = ST.gal||{}; ST.gal.evop = 1; save(); galleryCheck(); SFX.fanfare(); } else { S.i++; S.got = false; save(); } render(); }; return; }
      act.innerHTML = stepCard(S.i + 1, E.length, 'Note ' + (S.i + 1) + ' of ' + E.length, '<p class="ms-wm-do">👆 Is this note evidence or opinion? Drag it to a box, or tap a box.</p><div class="ms-exfb" aria-live="polite"></div>');
    }
    dragger(note, function(moved, tg){ if (!moved) return; if (tg) put(tg.dataset.v); else SFX.miss(); }, '.ms-eo-box');
    $$('.ms-eo-box', m).forEach(function(b){ var go = function(){ put(b.dataset.v); }; b.addEventListener('click', go); b.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    render();
  }

  /* ══ MODULE: council (Exhibit Floor · Council Evidence Summary → press the wax seal) ══ */
  var WAXSEAL = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 4 C62 6 66 2 74 10 C82 16 92 18 94 30 C98 40 94 50 98 60 C96 72 88 78 82 86 C72 94 62 96 50 96 C38 98 28 94 20 86 C12 80 4 72 4 60 C2 48 6 40 4 30 C8 18 18 16 26 10 C34 4 40 2 50 4Z" fill="#A82820"/><circle cx="50" cy="50" r="30" fill="#8E2018" stroke="#C94A3A" stroke-width="3"/><text x="50" y="47" text-anchor="middle" font-family="Lora,Georgia,serif" font-weight="700" font-size="13" fill="#F3C9B8">COUNCIL</text><text x="50" y="64" text-anchor="middle" font-family="Lora,Georgia,serif" font-weight="700" font-size="11" fill="#F3C9B8">★ ★ ★</text></svg>';
  function modCouncil(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var L = DATA.ledger || [], NEED = cfg.sentMin || 2, RN = new RegExp('\\b(' + (DATA.regions||[]).map(function(r){ return r.name; }).join('|') + ')\\b', 'i');
    ST.cs = ST.cs || {pick:{}, step:1, open:false}; var S = ST.cs;
    var m = shell('ms-cs-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-cs-act"></div><div class="ms-cs-show" hidden><div class="ms-cs-room" style="'+rcol()+'"><div class="ms-cs-sign">REGIONAL COUNCIL CHAMBER</div>' +
      '<div class="ms-cs-table"><div class="ms-cs-seats">'+(DATA.regions||[]).map(function(r){ return '<span class="ms-cs-seat" data-r="'+r.k+'">'+SEAT+'<b>'+esc(r.name)+'</b></span>'; }).join('')+'</div>' +
      '<div class="ms-cs-folder"><div class="tab">EVIDENCE FOLDER</div><div class="paper"><div class="h">Council Evidence Summary</div><p class="tx"></p><p class="by"></p></div><div class="flap"></div><div class="seal">'+WAXSEAL+'</div></div>' +
      '<div class="ms-cs-env" aria-hidden="true">✉️ <span>The council\'s question: sealed until next time</span></div><div class="ms-cs-bell" aria-hidden="true">🔔</div></div></div></div><div class="ms-cs-end"></div>');
    var home = document.createComment('cs-home'); ta.parentNode.insertBefore(home, ta); ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-cs-act', m), show = $('.ms-cs-show', m), end = $('.ms-cs-end', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function list(){ return L.map(function(pg){ var c = pg.chips[S.pick[pg.r]]; return c ? 'The ' + regOf(pg.r).name + ' has ' + c.t.toLowerCase() + '.' : ''; }).join(' '); }
    function own(){ var t = ta.value, l = list(); return (l && t.indexOf(l) >= 0) ? t.replace(l, '') : t; }
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return (s.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function miss1(){ var n = L.filter(function(pg){ return S.pick[pg.r] !== undefined; }).length; return n < L.length ? ['Pick one thing for '+(L.length-n)+' more region'+(L.length-n===1?'':'s')+'.'] : []; }
    function miss2(){ var miss = [], o = own(), n = sents(o); if (ta.value.indexOf(list()) < 0) miss.push('Your list changed. Press ↩️ Put my list back.'); if (n < NEED) miss.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+' of your own under the list.'); else if (!RN.test(o)) miss.push('Name one region in your own sentences.'); return miss; }
    function view(){ $('.tx', show).textContent = ta.value.trim(); $('.by', show).textContent = 'By ' + (sget(NAMEK,'') || 'a Council Curator') + ', Council Curator';
      show.classList.toggle('sealed', !!S.open); $$('.ms-cs-seat', show).forEach(function(s){ s.classList.toggle('lit', !!S.open); }); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-cs-picks">' + L.map(function(pg){ var r = regOf(pg.r);
            return '<div class="ms-cs-pr" style="--c:'+r.c+'"><b>'+r.icon+' '+esc(r.name)+'</b><span>'+pg.chips.map(function(c, ci){ return c.has ? '<button type="button" class="ms-btn alt ms-cs-pk'+(S.pick[pg.r]===ci?' on':'')+'" data-r="'+pg.r+'" data-c="'+ci+'">'+c.ic+' '+esc(c.t)+'</button>' : ''; }).join('')+'</span></div>'; }).join('') +
          '</div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-cs-next">Put my list in the summary ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $$('.ms-cs-pk', act).forEach(function(b){ b.onclick = function(){ S.pick[b.dataset.r] = +b.dataset.c; save(); SFX.click(); render(); }; });
        $('.ms-cs-next', act).classList.toggle('ms-notready', !!miss1().length);
        $('.ms-cs-next', act).onclick = function(){ var miss = miss1(); if (miss.length) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
          var l = list(); if (ta.value.indexOf(l) < 0) { var rest = own().trim(); ta.value = l + (rest ? '\n' + rest : '\n'); ta.dispatchEvent(new Event('input', {bubbles:true})); }
          SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) { goHome();
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start" data-t="'+esc(t)+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-cs-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-cs-back">↩️ Change my picks</button><button type="button" class="ms-btn alt ms-cs-fix">↩️ Put my list back</button><button type="button" class="ms-btn big ms-cs-next">Next: seal the folder ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-cs-chk', act), fb = $('.ms-gi-fb', act);
        var upd = function(){ var o = own(), n = sents(o), rg = RN.test(o), kept = ta.value.indexOf(list()) >= 0, miss = miss2();
          chk.innerHTML = '<span class="ms-chip'+(kept?' ok':'')+'">'+(kept?'✓ ':'')+'your list</span><span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences of your own</span><span class="ms-chip'+(rg?' ok':'')+'">'+(rg?'✓ ':'')+'names a region</span>';
          $('.ms-cs-fix', act).hidden = kept; $('.ms-cs-next', act).classList.toggle('ms-notready', !!miss.length); if (fb.innerHTML) fb.innerHTML = miss.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = b.dataset.t; ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-cs-fix', act).onclick = function(){ var rest = own().trim(); ta.value = list() + '\n' + rest; ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); };
        $('.ms-cs-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-cs-next', act).onclick = function(){ var miss = miss2(); if (miss.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-cs-seal">🔴 '+esc(cfg.openT||'Press the seal')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-cs-edit">✏️ '+esc(cfg.editT||'Edit my summary')+'</button></div>';
      var sb = $('.ms-cs-seal', end); if (sb) sb.onclick = function(){ var miss = miss1().concat(miss2()); if (miss.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+miss.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('sealing'); void show.offsetWidth; show.classList.add('sealing'); SFX.fanfare(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        setTimeout(function(){ show.classList.remove('sealing'); }, 5000); optiNod('assignment'); check(); };
      $('.ms-cs-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.08.02 (Council Chamber: Which Region Needs This Resource?) ══════════
     DATA.reports = five water reports; DATA.users = the Colorado River's eight users; DATA.cards = six evidence cards (side sw / w)
     - sealq      Lobby: press the wax seal → the question card slides out, five seats rise; tap each seat's water report; one question
     - river      Gallery main attraction: melt the snow, open each user's water gate; the river thins and dries before the sea; two questions
     - weigh      Gallery: drag six evidence cards onto the council scale (Southwest / West), the scale tips; vote + one reason (journal-vote moves in)
     - recommend  Exhibit Floor: region + two evidence chips + 2 own sentences → call the vote: placards flip, bell, stamp, the Marketplace Hall door opens a crack */

  /* ══ MODULE: sealq (Lobby · break the seal, read the water reports) ══ */
  function modSealq(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var RP = DATA.reports || [];
    ST.sq = ST.sq || {open:false, seen:{}, cur:null, q:false}; var S = ST.sq;
    var m = shell('ms-sl-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-sl-room" style="'+rcol()+'"><div class="ms-sl-seats">' + RP.map(function(p){ var r = regOf(p.r);
        return '<button type="button" class="ms-sl-seat" data-r="'+p.r+'" disabled><span class="pl">'+r.icon+' '+esc(r.name)+'</span>'+SEAT+'<span class="gauge" aria-hidden="true"><i style="height:'+Math.round(p.fill*100)+'%"></i></span></button>'; }).join('') +
      '</div><div class="ms-sl-table"><div class="ms-sl-env"><div class="flap"></div><button type="button" class="ms-sl-seal" aria-label="Press the wax seal to open the envelope">'+WAXSEAL+'</button><div class="ms-sl-card"><b>'+esc(cfg.card||'')+'</b><span>'+esc(cfg.ask||'')+'</span></div></div></div></div><div class="ms-sl-act" aria-live="polite"></div>');
    after(anchor, m);
    var room = $('.ms-sl-room', m), act = $('.ms-sl-act', m);
    function paint(){ room.classList.toggle('open', !!S.open);
      $$('.ms-sl-seat', m).forEach(function(b){ var r = b.dataset.r; b.disabled = !S.open; b.classList.toggle('seen', !!S.seen[r]); b.classList.toggle('cur', S.cur === r); }); }
    $('.ms-sl-seal', m).onclick = function(){ if (S.open) return; S.open = true; save(); SFX.fanfare(); room.classList.add('opening'); setTimeout(function(){ room.classList.remove('opening'); }, 2600); render(); };
    $$('.ms-sl-seat', m).forEach(function(b){ b.onclick = function(){ if (!S.open) return; S.cur = b.dataset.r; S.seen[S.cur] = 1; save(); SFX.click(); render(); }; });
    function render(){
      paint(); var n = Object.keys(S.seen).length, N = RP.length + 2;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (!S.open) { act.innerHTML = stepCard(1, N, 'Break the seal', '<p class="ms-wm-do">👆 Press the red wax seal on the envelope to open it.</p>'); return; }
      var p = S.cur && RP.filter(function(x){ return x.r === S.cur; })[0], tag = p ? '<div class="ms-sh-tag"><b>'+regOf(p.r).icon+' '+esc(regOf(p.r).name)+': water report</b><p>🌧️ <b>Rain in a year:</b> '+esc(p.rain)+'<br>🚰 <b>Fresh water comes from:</b> '+esc(p.src)+'</p></div>' : '';
      if (n >= RP.length) { var q = choiceQ(cfg.q, 1, function(){ markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
        act.innerHTML = stepCard(N, N, cfg.q.title, tag + q.html); q.bind(act); return; }
      act.innerHTML = stepCard(n + 2, N, n ? 'Read the water reports' : 'The council\'s question', (n ? '' : '<p>✉️ The card says <b>'+esc(cfg.card||'')+'</b>: '+esc(cfg.ask||'')+'</p>') + tag + '<p class="ms-wm-do">👆 Tap a seat to read its water report. ('+n+' of '+RP.length+' read)</p>');
    }
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: river (Gallery main attraction · share the Colorado River) ══ */
  var RV = { pts: [[92,66],[128,112],[150,160],[198,196],[246,214],[300,250],[338,292],[366,330],[402,350],[452,374],[520,392]],
    gates: {co:1, wy:2, ut:3, nm:4, nv:5, az:6, ca:7, mx:8}, share: {co:.22, wy:.07, ut:.11, nm:.07, nv:.04, az:.20, ca:.25, mx:.10},
    side: {co:-1, wy:1, ut:-1, nm:1, nv:-1, az:1, ca:-1, mx:1} };
  function modRiver(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var U = DATA.users || [];
    ST.rv = ST.rv || {melt:false, open:{}, ph:0, ok:false}; var S = ST.rv;
    var m = shell('ms-rv-mod', cfg);
    var gates = U.map(function(u){ var i = RV.gates[u.k], p = RV.pts[i], sd = RV.side[u.k], lx = p[0] + sd * 58, ly = p[1] - 6;
      return '<g class="gate" data-k="'+u.k+'" tabindex="0" role="button" aria-label="'+esc(u.t)+' water gate"><path class="pipe" d="M'+p[0]+' '+p[1]+' L'+lx+' '+(ly+6)+'"/><circle class="valve" cx="'+p[0]+'" cy="'+p[1]+'" r="11"/><text class="vt" x="'+p[0]+'" y="'+(p[1]+4)+'">'+(U.indexOf(u)+1)+'</text>' +
        '<g class="tank" transform="translate('+(lx - 34)+' '+(ly - 14)+')"><rect width="68" height="26" rx="6"/><text x="34" y="17">'+esc(u.t)+'</text></g></g>'; }).join('');
    var segs = ''; for (var i = 0; i < RV.pts.length - 1; i++) segs += '<line class="seg" data-i="'+i+'" x1="'+RV.pts[i][0]+'" y1="'+RV.pts[i][1]+'" x2="'+RV.pts[i+1][0]+'" y2="'+RV.pts[i+1][1]+'"/>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-rv-stage"><svg class="ms-rv-svg" viewBox="0 0 600 430" role="img" aria-label="A simple model of the Colorado River, from snowy mountains at the top left to the sea at the bottom right, with eight numbered water gates along the way.">' +
      '<rect width="600" height="430" fill="#E9C99A"/><path d="M0 0 H600 V40 Q420 70 300 40 Q150 10 0 60Z" fill="#DDBA86"/>' +
      '<path class="mtn" d="M10 120 L60 30 L95 80 L130 20 L180 110 Z" fill="#7A6A5A"/><path class="snow" d="M45 58 L60 30 L74 52 Z M118 42 L130 20 L144 46 Z" fill="#fff"/>' +
      '<text class="lbl" x="28" y="140">Rocky Mountains</text><path d="M520 392 Q560 400 600 380 V430 H470 Q500 410 520 392Z" fill="#3B7FB8"/><text class="lbl sea" x="530" y="420">The sea</text>' +
      '<polyline class="bed" points="'+RV.pts.map(function(p){ return p.join(','); }).join(' ')+'"/>' + segs + gates + '<g class="sun" transform="translate(205 52)"><circle r="18"/></g></svg>' +
      '<div class="ms-rv-flow"><span>Water reaching the sea:</span><b class="pct"></b></div><div class="ms-rv-gbtns" role="group" aria-label="Water gates">'+U.map(function(u, i){ return '<button type="button" class="ms-rv-gb" data-k="'+u.k+'"><b>'+(i+1)+'</b> '+esc(u.t)+'</button>'; }).join('')+'</div></div><div class="ms-rv-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var svg = $('.ms-rv-svg', m), act = $('.ms-rv-act', m);
    function flowAt(i){ var f = 1; U.forEach(function(u){ if (S.open[u.k] && RV.gates[u.k] <= i) f -= RV.share[u.k]; }); return Math.max(0, f); }
    function paint(){
      svg.classList.toggle('melt', !!S.melt);
      $$('.seg', svg).forEach(function(s){ var i = +s.dataset.i, f = S.melt ? flowAt(i) : 0; s.style.strokeWidth = (f > 0 ? 3 + f * 17 : 0) + 'px'; s.classList.toggle('dry', f <= 0); });
      $$('.ms-rv-gb', m).forEach(function(b){ b.classList.toggle('on', !!S.open[b.dataset.k]); b.disabled = !S.melt || S.ph > 0 || !!S.open[b.dataset.k]; });
      $$('.gate', svg).forEach(function(g){ g.classList.toggle('on', !!S.open[g.dataset.k]); g.classList.toggle('live', S.melt && !S.open[g.dataset.k] && S.ph === 0); });
      var end = S.melt ? flowAt(RV.pts.length - 2) : 0; $('.pct', m).textContent = S.melt ? (end > 0 ? Math.round(end * 100) + '% of the water' : 'none: the river is dry') : 'none yet: the snow is frozen';
      $('.ms-rv-flow', m).classList.toggle('dry', S.melt && end <= 0);
    }
    function openGate(k){ if (!S.melt || S.open[k] || S.ph) return; S.open[k] = 1; S.lastk = k; save(); SFX.pop(); render(); }
    $$('.ms-rv-gb', m).forEach(function(b){ b.addEventListener('click', function(){ openGate(b.dataset.k); }); });
    $$('.gate', svg).forEach(function(g){ g.addEventListener('click', function(){ openGate(g.dataset.k); }); g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openGate(g.dataset.k); } }); });
    function render(){
      paint(); var n = Object.keys(S.open).length, N = U.length ? 4 : 3;
      if (S.ok) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (!S.melt) { act.innerHTML = stepCard(1, N, 'Melt the snow', '<p>It is spring in the Rocky Mountains. When the snow melts, the water runs into the river.</p><button type="button" class="ms-btn big ms-rv-melt">'+esc(cfg.meltT||'Melt the snow')+'</button>');
        $('.ms-rv-melt', act).onclick = function(){ S.melt = true; save(); SFX.chime(); render(); }; return; }
      if (n < U.length) { var last = S.lastk && U.filter(function(u){ return u.k === S.lastk; })[0];
        act.innerHTML = stepCard(2, N, 'Open the water gates', '<p>'+(n ? '' : 'The river reaches the sea. ')+'Now each user takes a share. Tap each numbered gate on the river, or its button under the map. ('+n+' of '+U.length+' open)</p>' + (last ? '<div class="ms-sh-tag"><b>Who uses this water?</b><p><b>'+esc(last.t)+':</b> '+esc(last.use)+'</p></div>' : '')); return; }
      if (S.ph === 0) { S.ph = 1; save(); }
      if (S.ph === 1) { var q = choiceQ(cfg.q1, 2, function(){ var b = el('button', 'ms-btn big ms-rv-next', 'Next question ➡️'); b.type = 'button'; $('.ms-stepcard', act).appendChild(b); b.onclick = function(){ SFX.click(); S.ph = 2; save(); render(); }; });
        act.innerHTML = stepCard(3, N, cfg.q1.title, q.html); q.bind(act); return; }
      var q2 = choiceQ(cfg.q2, 1, function(){ ST.gal = ST.gal||{}; ST.gal.river = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.ok = true; save(); render(); }, calm()?0:1600); });
      act.innerHTML = stepCard(4, N, cfg.q2.title, q2.html); q2.bind(act);
    }
    render();
  }

  /* ══ MODULE: weigh (Gallery · the council scale + vote) ══ */
  function modWeigh(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var C = DATA.cards || [], ta = document.getElementById(cfg.textarea || 'journal-vote');
    ST.wg = ST.wg || {on:{}, sel:null, vote:null, done:false}; var S = ST.wg;
    var m = shell('ms-wg-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-wg-stage"><div class="ms-wg-cards" aria-label="Evidence cards"></div>' +
      '<div class="ms-wg-scale"><div class="post" aria-hidden="true"></div><div class="beam"><div class="pan sw" data-side="sw" role="button" tabindex="0"><b>🌵 Southwest</b><div class="in"></div></div><div class="pan w" data-side="w" role="button" tabindex="0"><b>🏔️ West (California)</b><div class="in"></div></div></div></div></div><div class="ms-wg-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var cards = $('.ms-wg-cards', m), beam = $('.beam', m), act = $('.ms-wg-act', m), home = null;
    if (ta) { home = document.createComment('wg-home'); ta.parentNode.insertBefore(home, ta); }
    function goHome(){ if (ta && home && ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function card(k){ for (var i = 0; i < C.length; i++) if (C[i].k === k) return C[i]; }
    function put(k, side){ if (S.on[k]) return; var c = card(k);
      if (c.side !== side) { SFX.miss(); S.sel = null; save(); paint(); var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 Read the card again. Is it about the Southwest desert, or about California?</div>'; return; }
      S.on[k] = side; S.sel = null; save(); SFX.pop(); render(); }
    function paint(){
      cards.innerHTML = C.filter(function(c){ return !S.on[c.k]; }).map(function(c){ return '<button type="button" class="ms-wg-card'+(S.sel===c.k?' sel':'')+'" data-k="'+c.k+'"><span class="ic">'+c.ic+'</span>'+esc(c.t)+'</button>'; }).join('') || '<span class="ms-wg-none">✨ Every card is on the scale.</span>';
      $$('.ms-wg-card', cards).forEach(function(b){ var k = b.dataset.k;
        dragger(b, function(moved, tg){ if (!moved) return; if (tg) put(k, tg.dataset.side); else SFX.miss(); }, '.ms-wg-scale .pan');
        b.addEventListener('click', function(){ S.sel = S.sel === k ? null : k; save(); SFX.click(); paint(); }); });
      var nsw = 0, nw = 0;
      $$('.pan', m).forEach(function(p){ var sd = p.dataset.side, got = C.filter(function(c){ return S.on[c.k] === sd; });
        $('.in', p).innerHTML = got.map(function(c){ return '<span title="'+esc(c.t)+'">'+c.ic+'</span>'; }).join(''); p.classList.toggle('pick', !!S.sel); if (sd === 'sw') nsw = got.length; else nw = got.length; });
      beam.style.setProperty('--tilt', Math.max(-12, Math.min(12, (nw - nsw) * 3)) + 'deg');
    }
    $$('.pan', m).forEach(function(p){ var go = function(){ if (S.sel) put(S.sel, p.dataset.side); }; p.addEventListener('click', go); p.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return (s.trim().match(/\S+/g)||[]).length >= 4; }).length; }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      paint(); var n = Object.keys(S.on).length, N = C.length + 1;
      if (S.done) { goHome(); act.innerHTML = '<div class="ms-sh-tag"><b>🗳️ Your vote: '+(S.vote === 'sw' ? 'the Southwest' : 'the West (California)')+'</b><p>'+esc(S.vote === 'sw' ? cfg.fbsw : cfg.fbw)+'</p></div><div class="ms-win show">'+(cfg.win||'')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-wg-edit">✏️ Change my vote or reason</button></div>';
        $('.ms-wg-edit', act).onclick = function(){ S.done = false; save(); render(); }; return; }
      if (n < C.length) { goHome(); act.innerHTML = stepCard(n + 1, N, 'Weigh the evidence', '<p class="ms-wm-do">👆 Drag each card onto the side it helps. Or tap a card, then tap a side. ('+n+' of '+C.length+' on the scale)</p><div class="ms-exfb" aria-live="polite"></div>'); return; }
      act.innerHTML = stepCard(N, N, cfg.voteT, '<p>👀 The scale tips toward the side with more evidence. '+esc(cfg.voteP||'')+'</p><div class="ms-wg-votes"><button type="button" class="ms-btn alt ms-wg-v'+(S.vote==='sw'?' on':'')+'" data-v="sw">🌵 I vote: the Southwest</button><button type="button" class="ms-btn alt ms-wg-v'+(S.vote==='w'?' on':'')+'" data-v="w">🏔️ I vote: the West (California)</button></div><div class="ms-gi-starts"><button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(cfg.starter||'')+'</button></div><div class="ms-gi-box"></div><div class="ms-excheck ms-wg-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-wg-go">Cast my vote 🗳️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
      if (ta) $('.ms-gi-box', act).appendChild(ta);
      var chk = $('.ms-wg-chk', act), fb = $('.ms-gi-fb', act);
      function miss(){ var x = []; if (!S.vote) x.push('Tap a vote button first.'); if (!ta || sents(ta.value) < 1) x.push('Write one reason (a sentence of 4 words or more).'); return x; }
      function upd(){ var ok1 = !!S.vote, ok2 = !!ta && sents(ta.value) >= 1; chk.innerHTML = '<span class="ms-chip'+(ok1?' ok':'')+'">'+(ok1?'✓ ':'')+'vote</span><span class="ms-chip'+(ok2?' ok':'')+'">'+(ok2?'✓ ':'')+'one reason</span>'; $('.ms-wg-go', act).classList.toggle('ms-notready', !!miss().length); if (fb.innerHTML && !miss().length) fb.innerHTML = ''; }
      upd(); if (ta) ta.oninput = function(){ try { if (typeof autoSave === 'function') autoSave(ta, 'dot-vote'); if (typeof gatherAnswers === 'function') gatherAnswers(); } catch(e){} upd(); };
      $$('.ms-wg-v', act).forEach(function(b){ b.onclick = function(){ S.vote = b.dataset.v; save(); SFX.click(); $$('.ms-wg-v', act).forEach(function(x){ x.classList.toggle('on', x === b); }); var t = (S.vote === 'sw' ? 'the Southwest' : 'the West');
        if (ta && /^I vote for the ___ because/.test(ta.value)) { ta.value = ta.value.replace('___', t); ta.dispatchEvent(new Event('input', {bubbles:true})); } upd(); }; });
      $('.ms-gi-start', act).onclick = function(){ if (!ta) return; var t = S.vote ? (S.vote === 'sw' ? 'the Southwest' : 'the West') : '___'; var s = (cfg.starter||'').replace('the ___', t); ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + s + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); };
      $('.ms-wg-go', act).onclick = function(){ var x = miss(); if (x.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>'; return; }
        S.done = true; ST.gal = ST.gal||{}; ST.gal.weigh = 1; save(); galleryCheck(); SFX.fanfare(); goHome(); render(); };
    }
    render();
  }

  /* ══ MODULE: recommend (Exhibit Floor · Council Recommendation → the council votes) ══ */
  function modRecommend(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var R = DATA.regions || [], C = DATA.cards || [], NEED = cfg.sentMin || 2;
    ST.rc = ST.rc || {r:null, ev:[], step:1, open:false}; var S = ST.rc;
    var m = shell('ms-rc-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-rc-act"></div><div class="ms-rc-show" hidden><div class="ms-cs-room ms-rc-room" style="'+rcol()+'"><div class="ms-cs-sign">REGIONAL COUNCIL CHAMBER</div>' +
      '<div class="ms-rc-door" aria-hidden="true"><div class="leaf"></div><span>'+esc(cfg.door||'')+'</span></div>' +
      '<div class="ms-cs-table"><div class="ms-rc-plac">'+R.map(function(r){ return '<span class="ms-rc-pl" data-r="'+r.k+'"><span class="fr">'+r.icon+'<b>'+esc(r.name)+'</b></span><span class="bk">✋<b>'+esc(r.name)+': YES</b></span></span>'; }).join('')+'</div>' +
      '<div class="ms-rc-paper"><div class="h">Council Recommendation</div><p class="tx"></p><p class="by"></p><div class="ms-rc-stamp">'+esc(cfg.stamp||'')+'</div></div><div class="ms-cs-bell" aria-hidden="true">🔔</div></div></div></div><div class="ms-rc-end"></div>');
    var home = document.createComment('rc-home'); ta.parentNode.insertBefore(home, ta); ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-rc-act', m), show = $('.ms-rc-show', m), end = $('.ms-rc-end', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function card(k){ for (var i = 0; i < C.length; i++) if (C[i].k === k) return C[i]; }
    function list(){ if (!S.r) return ''; return 'I recommend the ' + regOf(S.r).name + '. My evidence: ' + S.ev.map(function(k){ return card(k).t; }).join(' '); }
    function own(){ var t = ta.value, l = list(); return (l && t.indexOf(l) >= 0) ? t.replace(l, '') : t; }
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return (s.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function miss1(){ var x = []; if (!S.r) x.push('Tap a region.'); if (S.ev.length < 2) x.push('Tap '+(2 - S.ev.length)+' more piece'+(S.ev.length === 1 ? '' : 's')+' of evidence.'); return x; }
    function miss2(){ var x = [], o = own(), n = sents(o); if (ta.value.indexOf(list()) < 0) x.push('Your picks changed. Press ↩️ Put my picks back.'); if (n < NEED) x.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+' of your own under your picks.'); else if (!/water/i.test(o)) x.push('Say something about water in your own sentences.'); return x; }
    function view(){ $('.tx', show).textContent = ta.value.trim(); $('.by', show).textContent = 'By ' + (sget(NAMEK,'') || 'a Council Curator') + ', Council Curator'; show.classList.toggle('voted', !!S.open); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; ta.classList.toggle('ms-gi-away', S.step !== 2);
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-rc-rg">'+R.map(function(r){ return '<button type="button" class="ms-btn alt ms-rc-r'+(S.r===r.k?' on':'')+'" data-r="'+r.k+'">'+r.icon+' '+esc(r.name)+'</button>'; }).join('')+'</div>' +
          '<p class="ms-wm-do">📌 Now pick two pieces of evidence ('+S.ev.length+' of 2):</p><div class="ms-rc-ev">'+C.map(function(c){ return '<button type="button" class="ms-btn alt ms-rc-e'+(S.ev.indexOf(c.k) >= 0 ? ' on' : '')+'" data-k="'+c.k+'">'+c.ic+' '+esc(c.t)+'</button>'; }).join('')+'</div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-rc-next">Put my picks in the box ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $$('.ms-rc-r', act).forEach(function(b){ b.onclick = function(){ S.r = b.dataset.r; save(); SFX.click(); render(); }; });
        $$('.ms-rc-e', act).forEach(function(b){ b.onclick = function(){ var k = b.dataset.k, i = S.ev.indexOf(k); if (i >= 0) S.ev.splice(i, 1); else { S.ev.push(k); if (S.ev.length > 2) S.ev.shift(); } save(); SFX.click(); render(); }; });
        $('.ms-rc-next', act).classList.toggle('ms-notready', !!miss1().length);
        $('.ms-rc-next', act).onclick = function(){ var x = miss1(); if (x.length) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>'; return; }
          var l = list(); if (ta.value.indexOf(l) < 0) { var rest = ta.value.replace(/^I recommend the [^.]*\. My evidence:[^\n]*\n?/, '').trim(); ta.value = l + '\n' + rest; ta.dispatchEvent(new Event('input', {bubbles:true})); }
          SFX.chime(); S.step = 2; save(); render(); };
        return; }
      if (S.step === 2) { goHome();
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start" data-t="'+esc(t)+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-rc-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-rc-back">↩️ Change my picks</button><button type="button" class="ms-btn alt ms-rc-fix">↩️ Put my picks back</button><button type="button" class="ms-btn big ms-rc-next">Next: call the vote ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-rc-chk', act), fb = $('.ms-gi-fb', act);
        var upd = function(){ var o = own(), n = sents(o), wt = /water/i.test(o), kept = ta.value.indexOf(list()) >= 0, x = miss2();
          chk.innerHTML = '<span class="ms-chip'+(kept?' ok':'')+'">'+(kept?'✓ ':'')+'your picks</span><span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences of your own</span><span class="ms-chip'+(wt?' ok':'')+'">'+(wt?'✓ ':'')+'about water</span>';
          $('.ms-rc-fix', act).hidden = kept; $('.ms-rc-next', act).classList.toggle('ms-notready', !!x.length); if (fb.innerHTML) fb.innerHTML = x.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = b.dataset.t; ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-rc-fix', act).onclick = function(){ var rest = own().trim(); ta.value = list() + '\n' + rest; ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); };
        $('.ms-rc-back', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-rc-next', act).onclick = function(){ var x = miss2(); if (x.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-rc-vote">🗳️ '+esc(cfg.openT||'Call the vote')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-rc-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var vb = $('.ms-rc-vote', end); if (vb) vb.onclick = function(){ var x = miss1().concat(miss2()); if (x.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('voting'); void show.offsetWidth; show.classList.add('voting'); SFX.fanfare(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 2400);
        setTimeout(function(){ show.classList.remove('voting'); }, 6000); optiNod('assignment'); check(); };
      $('.ms-rc-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.09.01 (Scarcity and Choice) ══════════
     DATA.families = the bread line; DATA.tables = three market tables (two goods each); DATA.must / DATA.fun = blocks for the day ring
     - breadline    Lobby: two loaves, three families; hand them out (tap or drag) → who got none? → is it scarce if some is left?
     - choicebasket Gallery main attraction: three tables, take one of two at each; the other goes to the gray GIVEN UP shadow shelf; two questions
     - dayring      Gallery: a 24-hour ring; add the must-dos, then fun blocks until nothing fits; can money buy more hours?
     - hallopen     Exhibit Floor: Intro Panel (3 own sentences, the task box moves in) → it hangs on the arch, awnings unroll, lanterns light, OPEN */

  var LOAF = '<svg viewBox="0 0 64 40" aria-hidden="true"><ellipse cx="32" cy="36" rx="28" ry="3.5" fill="rgba(0,0,0,.18)"/><path d="M5 30 C3 14 18 5 32 5 C46 5 61 14 59 30 Q58 34 52 34 H12 Q6 34 5 30Z" fill="#C98A3E" stroke="#7A4E1E" stroke-width="2"/><path d="M14 14 q5 6 2 13 M26 9 q5 7 2 16 M38 9 q5 7 2 16 M50 14 q4 6 1 13" fill="none" stroke="#F3D19A" stroke-width="3" stroke-linecap="round"/></svg>';
  function sub(s, who){ return String(s||'').split('{who}').join(who); }

  /* ══ MODULE: breadline (Lobby · two loaves, three families) ══ */
  function modBreadline(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var F = DATA.families || [], LV = ['l1', 'l2'];
    ST.bl = ST.bl || {got:{}, sel:null, q1:false, q2:false}; var S = ST.bl;
    var m = shell('ms-bl-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-bl-stage"><div class="ms-bl-booth"><div class="aw" aria-hidden="true"></div><div class="sign">🍞 BREAD</div><div class="ms-bl-shelf"></div><div class="counter" aria-hidden="true"></div></div>' +
      '<div class="ms-bl-line">'+F.map(function(f){ return '<div class="ms-bl-fam" data-k="'+f.k+'" role="button" tabindex="0" aria-label="'+esc(f.t)+'"><span class="ppl" aria-hidden="true">'+f.ic+'</span><b>'+esc(f.t)+'</b><span class="bag"></span></div>'; }).join('')+'</div></div><div class="ms-bl-act" aria-live="polite"></div>');
    after(anchor, m);
    var shelf = $('.ms-bl-shelf', m), act = $('.ms-bl-act', m);
    function given(){ return Object.keys(S.got).length; }
    function left(){ var used = {}; Object.keys(S.got).forEach(function(k){ used[S.got[k]] = 1; }); return LV.filter(function(l){ return !used[l]; }); }
    function waiting(){ for (var i = 0; i < F.length; i++) if (!S.got[F[i].k]) return F[i]; return F[F.length-1]; }
    function give(fk, l){ l = l || S.sel || left()[0]; if (!l) return;
      if (S.got[fk]) { SFX.miss(); var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 That family already has a loaf. Give the next loaf to a family that has none.</div>'; return; }
      S.got[fk] = l; S.sel = null; save(); SFX.pop(); render(); }
    function paint(){
      shelf.innerHTML = left().map(function(l){ return '<button type="button" class="ms-bl-loaf'+(S.sel===l?' sel':'')+'" data-l="'+l+'" aria-label="A loaf of bread">'+LOAF+'</button>'; }).join('') || '<span class="ms-bl-empty">Empty shelf</span>';
      $$('.ms-bl-loaf', shelf).forEach(function(b){ var l = b.dataset.l;
        dragger(b, function(moved, tg){ if (!moved) return; if (tg) give(tg.dataset.k, l); else SFX.miss(); }, '.ms-bl-fam');
        b.addEventListener('click', function(){ S.sel = S.sel === l ? null : l; save(); SFX.click(); paint(); }); });
      var done = given() >= LV.length;
      $$('.ms-bl-fam', m).forEach(function(f){ var k = f.dataset.k; f.classList.toggle('fed', !!S.got[k]); f.classList.toggle('wait', done && !S.got[k]); f.classList.toggle('pick', !!S.sel && !S.got[k]);
        $('.bag', f).innerHTML = S.got[k] ? LOAF : (done ? '<i>still waiting</i>' : ''); });
    }
    $$('.ms-bl-fam', m).forEach(function(f){ var go = function(){ if (given() >= LV.length) return; if (!S.sel) { SFX.miss(); var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">👆 First tap a loaf on the shelf. Then tap a family.</div>'; return; } give(f.dataset.k); };
      f.addEventListener('click', go); f.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }); });
    function render(){
      paint(); var n = given(), N = 4, who = waiting().t;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (n < LV.length) { act.innerHTML = stepCard(n + 1, N, 'Hand out loaf '+(n+1)+' of 2', '<p class="ms-wm-do">👆 Tap a loaf on the shelf, then tap a family. Or drag the loaf to a family.</p><div class="ms-exfb" aria-live="polite"></div>'); return; }
      var qc = S.q1 ? cfg.q2 : {text: sub(cfg.q1.text, who), opts: cfg.q1.opts.map(function(o){ return {t: sub(o.t, who), ok: o.ok, fb: sub(o.fb, who)}; })};
      var q = choiceQ(qc, S.q1 ? 2 : 1, function(){ if (!S.q1) { setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1400); }
        else { markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1500); } });
      act.innerHTML = stepCard(S.q1 ? 4 : 3, N, S.q1 ? cfg.q2.title : cfg.q1.title, (S.q1 ? '<div class="ms-sh-tag"><b>🔎 Scarcity</b><p>There is not enough of something for everyone who wants it.</p></div>' : '') + q.html); q.bind(act);
    }
    render(); if (S.q2) markDone('scene');
  }

  /* ══ MODULE: choicebasket (Gallery main attraction · the market basket and the shadow shelf) ══ */
  function modChoicebasket(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var T = DATA.tables || [];
    ST.cb = ST.cb || {pick:[], q1:false, q2:false}; var S = ST.cb;
    var m = shell('ms-cb-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-cb-stage"><div class="ms-cb-tables"></div><div class="ms-cb-bottom"><div class="ms-cb-basket"><b>🧺 My basket <small>(holds 3)</small></b><div class="slots"></div></div><div class="ms-cb-shadow"><b>GIVEN UP</b><div class="slots"></div></div></div></div><div class="ms-cb-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var tabs = $('.ms-cb-tables', m), bsk = $('.ms-cb-basket .slots', m), shd = $('.ms-cb-shadow .slots', m), act = $('.ms-cb-act', m), fresh = -1;
    function take(i, s){ if (i !== S.pick.length || i >= T.length) return; S.pick.push(s); fresh = i; save(); SFX.pop(); render(); }
    function paint(){
      tabs.innerHTML = T.map(function(t, i){ var p = S.pick[i], cur = i === S.pick.length;
        return '<div class="ms-cb-tab'+(cur?' cur':'')+(p?' done':'')+'"><span class="n">Table '+(i+1)+'</span><div class="its">'+['a','b'].map(function(s){ var it = t[s];
          return p ? '<span class="ms-cb-gone">'+(p === s ? '🧺' : '⬜')+'</span>' : '<button type="button" class="ms-cb-it" data-i="'+i+'" data-s="'+s+'"'+(cur?'':' disabled')+'><span class="ic">'+it.ic+'</span><b>'+esc(it.t)+'</b></button>'; }).join('<span class="or">or</span>')+'</div></div>'; }).join('');
      $$('.ms-cb-it', tabs).forEach(function(b){ var i = +b.dataset.i, s = b.dataset.s; if (b.disabled) return;
        dragger(b, function(moved, tg){ if (!moved) return; if (tg) take(i, s); else SFX.miss(); }, '.ms-cb-basket');
        b.addEventListener('click', function(){ take(i, s); }); });
      var slot = function(it, i, gone){ return it ? '<span class="sl full'+(i===fresh?' new':'')+(gone?' ghost':'')+'"><span class="ic">'+it.ic+'</span><b>'+esc(it.t)+'</b>'+(gone?'<em>given up</em>':'')+'</span>' : '<span class="sl"></span>'; };
      bsk.innerHTML = T.map(function(t, i){ var p = S.pick[i]; return slot(p && t[p], i, false); }).join('');
      shd.innerHTML = T.map(function(t, i){ var p = S.pick[i]; return slot(p && t[p === 'a' ? 'b' : 'a'], i, true); }).join('');
      m.classList.toggle('full', S.pick.length >= T.length);
    }
    function render(){
      paint(); fresh = -1; var n = S.pick.length, N = T.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (n < T.length) { var t = T[n];
        act.innerHTML = stepCard(n + 1, N, 'Table '+(n+1)+' of '+T.length+': '+t.a.t+' or '+t.b.t+'?', '<p class="ms-wm-do">👆 Tap the one you want most, or drag it into your basket. The other one goes to the shadow shelf.</p>'); return; }
      var q = choiceQ(S.q1 ? cfg.q2 : cfg.q1, S.q1 ? 2 : 1, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1400);
        else { ST.gal = ST.gal||{}; ST.gal.basket = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1500); } });
      act.innerHTML = stepCard(S.q1 ? N : N - 1, N, S.q1 ? cfg.q2.title : cfg.q1.title, q.html); q.bind(act);
    }
    render();
  }

  /* ══ MODULE: dayring (Gallery · one whole day, 24 hours) ══ */
  function modDayring(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var MU = DATA.must || [], FU = DATA.fun || [];
    ST.dr = ST.dr || {must:false, fun:[], q:false}; var S = ST.dr;
    var m = shell('ms-dr-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-dr-stage"><div class="ms-dr-ring"><svg viewBox="0 0 240 240" role="img" aria-label="A ring with 24 slices, one for each hour of the day"></svg><div class="mid"><b></b><span>hours left</span></div></div><div class="ms-dr-side"><div class="ms-dr-key"></div><div class="ms-dr-fun"></div></div></div><div class="ms-dr-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var svg = $('svg', m), mid = $('.mid b', m), key = $('.ms-dr-key', m), fun = $('.ms-dr-fun', m), act = $('.ms-dr-act', m);
    function blk(k){ for (var i = 0; i < FU.length; i++) if (FU[i].k === k) return FU[i]; }
    function blocks(){ return (S.must ? MU : []).concat(S.fun.map(blk)); }
    function used(){ return blocks().reduce(function(a, b){ return a + b.h; }, 0); }
    function left(){ return 24 - used(); }
    function full(){ var l = left(); return S.must && FU.every(function(f){ return S.fun.indexOf(f.k) >= 0 || f.h > l; }); }
    function arc(a0, a1, r0, r1){ var p = function(a, r){ var t = (a - 90) * Math.PI / 180; return (120 + r * Math.cos(t)).toFixed(1) + ' ' + (120 + r * Math.sin(t)).toFixed(1); }, big = (a1 - a0) > 180 ? 1 : 0;
      return 'M' + p(a0, r1) + ' A' + r1 + ' ' + r1 + ' 0 ' + big + ' 1 ' + p(a1, r1) + ' L' + p(a1, r0) + ' A' + r0 + ' ' + r0 + ' 0 ' + big + ' 0 ' + p(a0, r0) + 'Z'; }
    function paint(){
      var h = 0, out = '';
      blocks().forEach(function(b){ out += '<path class="bk" d="'+arc(h * 15, (h + b.h) * 15, 62, 112)+'" fill="'+b.c+'"><title>'+esc(b.t)+': '+b.h+' hours</title></path>';
        var mid = (h + b.h / 2) * 15, t = (mid - 90) * Math.PI / 180; out += '<text x="'+(120 + 87 * Math.cos(t)).toFixed(1)+'" y="'+(120 + 87 * Math.sin(t) + 7).toFixed(1)+'" text-anchor="middle" font-size="'+(b.h > 1 ? 19 : 14)+'">'+b.ic+'</text>'; h += b.h; });
      for (var i = h; i < 24; i++) out += '<path class="emp" d="'+arc(i * 15 + .6, (i + 1) * 15 - .6, 62, 112)+'"/>';
      for (var j = 0; j < 24; j++) { var a = (j * 15 - 90) * Math.PI / 180; out += '<line x1="'+(120 + 112 * Math.cos(a)).toFixed(1)+'" y1="'+(120 + 112 * Math.sin(a)).toFixed(1)+'" x2="'+(120 + 118 * Math.cos(a)).toFixed(1)+'" y2="'+(120 + 118 * Math.sin(a)).toFixed(1)+'" stroke="#8a6a40" stroke-width="'+(j % 6 ? 1 : 2.5)+'"/>'; }
      svg.innerHTML = out; mid.textContent = left();
      key.innerHTML = S.must ? MU.map(function(b){ return '<span class="ms-dr-k" style="--c:'+b.c+'">'+b.ic+' '+esc(b.t)+' <i>'+b.h+' h</i></span>'; }).join('') : '';
      var fl = full();
      fun.innerHTML = S.must ? '<p class="h">🎈 Things you would like to do:</p>' + FU.map(function(f){ var on = S.fun.indexOf(f.k) >= 0, gone = fl && !on;
        return '<button type="button" class="ms-dr-f'+(on?' on':'')+(gone?' gone':'')+'" data-k="'+f.k+'" style="--c:'+f.c+'"><span class="ic">'+f.ic+'</span><b>'+esc(f.t)+'</b><i>'+f.h+' h</i><em>'+(on ? '✓ in my day (tap to take out)' : (gone ? 'given up' : ''))+'</em></button>'; }).join('') : '';
      $$('.ms-dr-f', fun).forEach(function(b){ b.onclick = function(){ if (S.q) return; var k = b.dataset.k, i = S.fun.indexOf(k), f = blk(k), fb = $('.ms-exfb', act);
        if (i >= 0) { S.fun.splice(i, 1); save(); SFX.click(); render(); return; }
        if (f.h > left()) { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); if (fb) fb.innerHTML = '<div class="ms-notyet">⏰ Only '+left()+' hour'+(left()===1?'':'s')+' left. '+esc(f.t)+' needs '+f.h+' hours. It won\'t fit!</div>'; return; }
        S.fun.push(k); save(); SFX.pop(); render(); }; });
    }
    function render(){
      paint(); var N = 3;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (!S.must) { act.innerHTML = stepCard(1, N, 'The must-dos', '<p>Every day needs sleep, school, and meals. Put them in the ring first.</p><button type="button" class="ms-btn big ms-dr-go">'+esc(cfg.mustT||'Add the must-dos')+'</button>');
        $('.ms-dr-go', act).onclick = function(){ S.must = true; save(); SFX.chime(); render(); }; return; }
      if (!full()) { act.innerHTML = stepCard(2, N, 'Fill the rest of your day', '<p class="ms-wm-do">👆 '+left()+(left()===1?' hour is':' hours are')+' left. Tap the fun things you want to do today. Tap one again to take it out.</p><div class="ms-exfb" aria-live="polite"></div>'); return; }
      var gave = FU.filter(function(f){ return S.fun.indexOf(f.k) < 0; });
      var q = choiceQ(cfg.q, 3, function(){ ST.gal = ST.gal||{}; ST.gal.day = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
      act.innerHTML = stepCard(3, N, cfg.q.title, '<div class="ms-sh-tag"><b>⏰ Your day is full!</b><p>No more fun things fit. You gave up: '+gave.map(function(f){ return f.ic+' '+esc(f.t); }).join(', ')+'. (Want a different day? Tap a fun thing to take it out.)</p></div>' + q.html); q.bind(act);
    }
    render();
  }

  /* ══ MODULE: hallopen (Exhibit Floor · the Intro Panel → open the Marketplace Hall) ══ */
  function modHallopen(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var NEED = cfg.sentMin || 3, B = cfg.booths || [];
    ST.ho = ST.ho || {step:1, open:false}; var S = ST.ho;
    var m = shell('ms-ho-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-ho-act"></div><div class="ms-ho-stage" hidden><div class="ms-ho-arch"><span class="nm">'+esc(cfg.arch||'')+'</span><div class="ms-ho-open" aria-hidden="true"><span class="c">CLOSED</span><span class="o">OPEN</span></div></div>' +
      '<div class="ms-ho-panel"><div class="h">Welcome to the Marketplace Hall</div><p class="tx"></p><p class="by"></p></div>' +
      '<div class="ms-ho-booths">'+B.map(function(b, i){ return '<div class="ms-ho-booth" style="--c:'+b.c+';--d:'+i+'"><span class="lan" aria-hidden="true"></span><div class="aw" aria-hidden="true"></div><div class="ct"><span>'+b.ic+'</span><b>'+esc(b.t)+'</b></div></div>'; }).join('')+'</div></div><div class="ms-ho-end"></div>');
    var home = document.createComment('ho-home'); ta.parentNode.insertBefore(home, ta); ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-ho-act', m), show = $('.ms-ho-stage', m), end = $('.ms-ho-end', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return (s.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function has(){ var t = ta.value; return {sc: /scarc/i.test(t), ch: /choos|choice|chose|pick/i.test(t), gu: /(give|gave|given|giving)\s+(\w+\s+)?up/i.test(t)}; }
    function miss(){ var x = [], n = sents(ta.value), h = has();
      if (n < NEED) x.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+' (3 words or more each).');
      if (!h.sc) x.push('Use the word scarcity or scarce.'); if (!h.ch) x.push('Say why people have to choose.'); if (!h.gu) x.push('Say what people give up.'); return x; }
    function view(){ $('.tx', show).textContent = ta.value.trim(); var nm = sget(NAMEK,''); $('.by', show).textContent = nm ? 'By ' + nm + ', Trade & Choice Curator' : 'By a Trade & Choice Curator'; show.classList.toggle('open', !!S.open); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 2;
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 2, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t){ return '<button type="button" class="ms-btn alt ms-gi-start" data-t="'+esc(t)+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-ho-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-ho-next">Hang my panel ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-ho-chk', act), fb = $('.ms-gi-fb', act);
        var upd = function(){ var n = sents(ta.value), h = has(), x = miss();
          chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences</span><span class="ms-chip'+(h.sc?' ok':'')+'">'+(h.sc?'✓ ':'')+'scarcity</span><span class="ms-chip'+(h.ch?' ok':'')+'">'+(h.ch?'✓ ':'')+'why people choose</span><span class="ms-chip'+(h.gu?' ok':'')+'">'+(h.gu?'✓ ':'')+'what is given up</span>';
          $('.ms-ho-next', act).classList.toggle('ms-notready', !!x.length); if (fb.innerHTML) fb.innerHTML = x.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = b.dataset.t; ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-ho-next', act).onclick = function(){ var x = miss(); if (x.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 2; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(2, 2, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><button type="button" class="ms-btn big ms-ho-go">🎉 '+esc(cfg.openT||'Open the hall')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-ho-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-ho-go', end); if (gb) gb.onclick = function(){ var x = miss(); if (x.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('opening'); void show.offsetWidth; show.classList.add('opening'); SFX.fanfare(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 2200);
        setTimeout(function(){ show.classList.remove('opening'); }, 5000); optiNod('assignment'); check(); };
      $('.ms-ho-edit', end).onclick = function(){ S.open = false; S.step = 1; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 1) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.09.02 (How Scarcity Results in Trade) ══════════
     DATA.towns = the coastal town and the valley farm (has / needs); DATA.cases = six trade-or-not cards
     - twotables  Lobby: two trade tables, each with a full crate and an empty basket; tap HAS / NEEDS tags; could they help each other?
     - traderoad  Gallery main attraction: load each town's cart, send both down the road; goods swap at the meeting table; both pantries fill; BOTH BETTER OFF
     - tradesort  Gallery: six cards one at a time, A trade / Not a trade
     - fairtrade  Exhibit Floor: Trade and Choice panel (choice, scarcity, benefit, consequence; one sentence each, task box moves in) → tables slide together, handshake, FAIR TRADE stamp */

  /* ══ MODULE: twotables (Lobby · two trade tables, two gaps) ══ */
  function modTwotables(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var T = DATA.towns || [];
    ST.tw = ST.tw || {seen:{}, q:false}; var S = ST.tw;
    var m = shell('ms-tw-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-tw-stage">'+T.map(function(t){ return '<div class="ms-tw-tab" data-k="'+t.k+'"><div class="hd">'+t.ic+' '+esc(t.t).toUpperCase()+'</div><div class="top"><div class="bin full"><span>'+t.full+t.full+t.full+'</span><b>'+esc(t.fullT)+'</b></div><div class="bin empty"><span>'+t.empty+'</span><b>no '+esc(t.emptyT)+'</b></div></div>' +
      '<div class="tags"><button type="button" class="ms-tw-tag has" data-k="'+t.k+'" data-w="has">✅ HAS</button><button type="button" class="ms-tw-tag need" data-k="'+t.k+'" data-w="need">❓ NEEDS</button></div><div class="ms-tw-say" data-k="'+t.k+'"></div><div class="legs" aria-hidden="true"></div></div>'; }).join('')+'</div><div class="ms-tw-act" aria-live="polite"></div>');
    after(anchor, m);
    var act = $('.ms-tw-act', m);
    function town(k){ for (var i = 0; i < T.length; i++) if (T[i].k === k) return T[i]; }
    function paint(){
      $$('.ms-tw-tag', m).forEach(function(b){ b.classList.toggle('seen', !!S.seen[b.dataset.k + b.dataset.w]); });
      $$('.ms-tw-say', m).forEach(function(d){ var t = town(d.dataset.k), h = S.seen[t.k+'has'], n = S.seen[t.k+'need'];
        d.innerHTML = (h ? '<p class="h"><b>HAS:</b> '+esc(t.has)+'</p>' : '') + (n ? '<p class="n"><b>NEEDS:</b> '+esc(t.need)+'</p>' : ''); });
    }
    $$('.ms-tw-tag', m).forEach(function(b){ b.onclick = function(){ S.seen[b.dataset.k + b.dataset.w] = 1; save(); SFX.click(); render(); }; });
    function render(){
      paint(); var n = Object.keys(S.seen).length, N = T.length * 2;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (n < N) { act.innerHTML = stepCard(1, 2, 'Read the tags', '<p class="ms-wm-do">👆 Tap each HAS tag and each NEEDS tag. ('+n+' of '+N+' read)</p>'); return; }
      var q = choiceQ(cfg.q, 1, function(){ markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
      act.innerHTML = stepCard(2, 2, cfg.q.title, q.html); q.bind(act);
    }
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: traderoad (Gallery main attraction · the Trade Road) ══ */
  function modTraderoad(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var T = DATA.towns || [], L = cfg.loadN || 3;
    ST.tro = ST.tro || {c:0, v:0, sent:false, q1:false, q2:false}; var S = ST.tro;
    var m = shell('ms-tro-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-tro-stage"><div class="ms-tro-map"><svg viewBox="0 0 800 220" aria-hidden="true">' +
      '<rect width="800" height="220" fill="#CFE6B8"/><path d="M0 0 H150 Q120 110 150 220 H0Z" fill="#6FB2E0"/><path d="M40 40 q12 -10 24 0 M60 160 q12 -10 24 0" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<path d="M640 0 H800 V220 H640 Q600 110 640 0Z" fill="#E9D27A"/>'+[[675,50],[715,40],[755,55],[690,95],[735,90],[770,100],[700,140],[745,150]].map(function(q){ return '<text x="'+q[0]+'" y="'+q[1]+'" font-size="26" text-anchor="middle">🌾</text>'; }).join('') +
      '<path class="road" d="M150 120 C260 160 330 70 400 110 S560 150 650 110" fill="none" stroke="#C9A87A" stroke-width="22" stroke-linecap="round"/><path d="M150 120 C260 160 330 70 400 110 S560 150 650 110" fill="none" stroke="#EAD7B0" stroke-width="3" stroke-dasharray="10 12"/>' +
      '<rect x="362" y="70" width="76" height="26" rx="4" fill="#8A5A2E" stroke="#5A3A1E" stroke-width="2"/><text x="400" y="88" text-anchor="middle" font-family="Nunito, sans-serif" font-size="11" font-weight="900" fill="#FBE9C8">MEET HERE</text>' +
      '<text x="70" y="208" text-anchor="middle" font-family="Nunito, sans-serif" font-size="14" font-weight="900" fill="#0E1C42">🌊 COAST</text><text x="725" y="208" text-anchor="middle" font-family="Nunito, sans-serif" font-size="14" font-weight="900" fill="#5A3A1E">🌾 VALLEY</text>' +
      '</svg><span class="ms-tro-cart c" aria-hidden="true"><i></i>🛒</span><span class="ms-tro-cart v" aria-hidden="true"><i></i>🛒</span><div class="ms-tro-banner" aria-hidden="true">BOTH BETTER OFF</div></div>' +
      '<div class="ms-tro-pans">'+T.map(function(t){ return '<div class="ms-tro-pan" data-k="'+t.k+'"><b>'+t.ic+' '+esc(t.t)+': pantry</b><div class="sh f"><span class="lab">'+esc(t.fullT)+'</span><span class="it"></span></div><div class="sh e"><span class="lab">'+esc(t.emptyT)+'</span><span class="it"></span></div><div class="meter"><i></i><span></span></div><button type="button" class="ms-btn alt ms-tro-load" data-k="'+t.k+'">'+t.full+' Load '+esc(t.fullT)+' into the cart</button></div>'; }).join('')+'</div></div><div class="ms-tro-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-tro-act', m), stage = $('.ms-tro-stage', m), moving = false;
    function k2s(k){ return k === 'coast' ? 'c' : 'v'; }
    function paint(){
      var done = S.sent && !moving;
      T.forEach(function(t){ var p = $('.ms-tro-pan[data-k="'+t.k+'"]', m), n = S[k2s(t.k)], other = T.filter(function(x){ return x.k !== t.k; })[0];
        $('.sh.f .it', p).textContent = new Array((done ? 6 - L : 6 - n) + 1).join(t.full);
        $('.sh.e .it', p).textContent = done ? new Array(L + 1).join(t.empty) : '';
        p.classList.toggle('done', done);
        $('.meter i', p).style.width = (done ? 100 : 50) + '%'; $('.meter span', p).textContent = done ? 'Has what it needs: 2 of 2' : 'Has what it needs: 1 of 2';
        var b = $('.ms-tro-load', p); b.disabled = !!S.sent; b.hidden = !!S.sent; b.textContent = t.full + ' Load ' + t.fullT + ' into the cart (' + n + ' of ' + L + ')';
        $('.ms-tro-cart.' + k2s(t.k) + ' i', m).textContent = done ? new Array(L + 1).join(other.full) : (S.sent ? new Array(L + 1).join(t.full) : new Array(n + 1).join(t.full)); });
      stage.classList.toggle('sent', done);
    }
    $$('.ms-tro-load', m).forEach(function(b){ b.onclick = function(){ if (S.sent) return; var s = k2s(b.dataset.k);
      if (S[s] >= L) { SFX.miss(); var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">🛒 That cart is full. Load the other cart, or send them both.</div>'; return; }
      S[s]++; save(); SFX.pop(); render(); }; });
    function render(){
      paint(); var N = 4;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (!S.sent) { var full = S.c >= L && S.v >= L;
        act.innerHTML = stepCard(full ? 2 : 1, N, full ? 'Send the carts' : 'Load the carts', full ? '<p>Both carts are full. Each town keeps plenty for itself.</p><button type="button" class="ms-btn big ms-tro-send">'+esc(cfg.sendT||'Send the carts')+'</button>'
          : '<p class="ms-wm-do">👆 Tap each Load button '+L+' times. (Coast cart: '+S.c+' of '+L+'. Valley cart: '+S.v+' of '+L+'.)</p><div class="ms-exfb" aria-live="polite"></div>');
        var sb = $('.ms-tro-send', act); if (sb) sb.onclick = function(){ S.sent = true; save(); SFX.click(); moving = !calm(); stage.classList.remove('go'); void stage.offsetWidth; if (moving) stage.classList.add('go'); stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); render(); setTimeout(function(){ moving = false; stage.classList.remove('go'); SFX.fanfare(); render(); }, moving ? 3700 : 0); };
        return; }
      if (moving) { act.innerHTML = stepCard(2, N, 'On the road', '<p>🛒 The carts are on the road to the meeting table. Watch the map!</p>'); return; }
      var q = choiceQ(S.q1 ? cfg.q2 : cfg.q1, S.q1 ? 2 : 1, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1400);
        else { ST.gal = ST.gal||{}; ST.gal.road = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1500); } });
      act.innerHTML = stepCard(S.q1 ? 4 : 3, N, S.q1 ? cfg.q2.title : cfg.q1.title, q.html); q.bind(act);
    }
    render();
  }

  /* ══ MODULE: tradesort (Gallery · trade or not?) ══ */
  function modTradesort(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var C = DATA.cases || [];
    ST.ts = ST.ts || {i:0, ok:false, got:{}}; var S = ST.ts;
    var m = shell('ms-ts-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-ts-stage"><div class="ms-ts-bins"><div class="bin y"><b>'+esc(cfg.yesT||'A trade')+'</b><div class="in"></div></div><div class="bin n"><b>'+esc(cfg.noT||'Not a trade')+'</b><div class="in"></div></div></div></div><div class="ms-ts-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-ts-act', m);
    function paint(){ $('.bin.y .in', m).innerHTML = C.map(function(c, i){ return S.got[i] === 'y' ? '<span>'+(i+1)+'</span>' : ''; }).join(''); $('.bin.n .in', m).innerHTML = C.map(function(c, i){ return S.got[i] === 'n' ? '<span>'+(i+1)+'</span>' : ''; }).join(''); }
    function render(){
      paint();
      if (S.i >= C.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var c = C[S.i];
      act.innerHTML = stepCard(S.i + 1, C.length, 'Card '+(S.i+1)+' of '+C.length, '<div class="ms-ts-card">'+esc(c.t)+'</div>' + (S.ok ? '<div class="ms-vd-thanks">✅ '+esc(c.fb)+'</div><button type="button" class="ms-btn big ms-ts-next">'+(S.i + 1 < C.length ? 'Next card ➡️' : 'Finish ✅')+'</button>'
        : '<div class="ms-pchoices"><button type="button" class="ms-btn ms-ts-a" data-a="y">'+esc(cfg.yesT||'A trade')+'</button><button type="button" class="ms-btn ms-ts-a" data-a="n">'+esc(cfg.noT||'Not a trade')+'</button></div><div class="ms-exfb" aria-live="polite"></div>'));
      $$('.ms-ts-a', act).forEach(function(b){ b.onclick = function(){ var y = b.dataset.a === 'y';
        if (y === !!c.ok) { S.ok = true; S.got[S.i] = y ? 'y' : 'n'; save(); SFX.chime(); render(); }
        else { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+(y ? 'Does each side give something AND get something back?' : 'Look again: does each side give something and get something back?')+'</div>'; } }; });
      var nx = $('.ms-ts-next', act); if (nx) nx.onclick = function(){ S.i++; S.ok = false; save(); SFX.click();
        if (S.i >= C.length) { ST.gal = ST.gal||{}; ST.gal.sort = 1; save(); galleryCheck(); SFX.fanfare(); } render(); };
    }
    render();
  }

  /* ══ MODULE: fairtrade (Exhibit Floor · Trade and Choice panel → handshake) ══ */
  function modFairtrade(cfg){
    var ta = document.getElementById(cfg.textarea || 'journal-assign'); if (!ta) return;
    var NEED = cfg.sentMin || 4, P = cfg.parts || [], T = DATA.towns || [];
    ST.ft = ST.ft || {step:1, open:false}; var S = ST.ft;
    var m = shell('ms-ft-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-ft-act"></div><div class="ms-ft-stage" hidden>' +
      T.map(function(t, i){ return '<div class="ms-ft-tab '+(i ? 'r' : 'l')+'"><div class="hd">'+t.ic+' '+esc(t.t).toUpperCase()+'</div><span>'+t.full+t.full+'</span></div>'; }).join('') +
      '<div class="ms-ft-panel"><div class="h">Trade and Choice</div><p class="tx"></p><p class="by"></p></div><div class="ms-ft-hands" aria-hidden="true">🤝</div><div class="ms-ft-stamp">'+esc(cfg.stamp||'')+'</div></div><div class="ms-ft-end"></div>');
    var home = document.createComment('ft-home'); ta.parentNode.insertBefore(home, ta); ta.parentNode.insertBefore(m, ta);
    var tp = ta.parentNode.querySelector('.textbox-prompt'); if (tp) tp.classList.add('ms-hide-on');
    var act = $('.ms-ft-act', m), show = $('.ms-ft-stage', m), end = $('.ms-ft-end', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return (s.trim().match(/\S+/g)||[]).length >= 3; }).length; }
    function hits(){ var t = ta.value; return P.map(function(p){ return new RegExp(p.re, 'i').test(t); }); }
    function miss(){ var x = [], n = sents(ta.value), h = hits();
      if (n < NEED) x.push('Write '+(NEED-n)+' more sentence'+(NEED-n===1?'':'s')+' (3 words or more each).');
      P.forEach(function(p, i){ if (!h[i]) x.push('Add the '+p.t.toLowerCase()+' part.'); }); return x; }
    function view(){ $('.tx', show).textContent = ta.value.trim(); var nm = sget(NAMEK,''); $('.by', show).textContent = nm ? 'By ' + nm + ', Trade & Choice Curator' : 'By a Trade & Choice Curator'; show.classList.toggle('open', !!S.open); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 2;
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 2, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-gi-starts">'+P.map(function(p){ return '<button type="button" class="ms-btn alt ms-gi-start" data-t="'+esc(p.starter)+'"><b>'+esc(p.t)+':</b> ✏️ '+esc(p.starter)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-ft-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-ft-next">Hang my panel ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta);
        var chk = $('.ms-ft-chk', act), fb = $('.ms-gi-fb', act);
        var upd = function(){ var n = sents(ta.value), h = hits(), x = miss();
          chk.innerHTML = '<span class="ms-wc'+(n>=NEED?' ok':'')+'">📝 '+Math.min(n,NEED)+' of '+NEED+' sentences</span>' + P.map(function(p, i){ return '<span class="ms-chip'+(h[i]?' ok':'')+'">'+(h[i]?'✓ ':'')+esc(p.t.toLowerCase())+'</span>'; }).join('');
          $('.ms-ft-next', act).classList.toggle('ms-notready', !!x.length); if (fb.innerHTML) fb.innerHTML = x.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = b.dataset.t; ta.value = ta.value.replace(/\s*$/,'') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-ft-next', act).onclick = function(){ var x = miss(); if (x.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 2; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(2, 2, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><button type="button" class="ms-btn big ms-ft-go">🤝 '+esc(cfg.openT||'Shake hands')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-ft-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-ft-go', end); if (gb) gb.onclick = function(){ var x = miss(); if (x.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('shaking'); void show.offsetWidth; show.classList.add('shaking'); SFX.fanfare(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 2000);
        setTimeout(function(){ show.classList.remove('shaking'); }, 4500); optiNod('assignment'); check(); };
      $('.ms-ft-edit', end).onclick = function(){ S.open = false; S.step = 1; save(); render(); ta.focus(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd && S.step === 1) curUpd(); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.09_03 (Goods, Services, Buyers, and Sellers) ══════════
     DATA.booths = bakery, barber, fruit stand, shoe repair; DATA.wishes = four visitors; DATA.stops = Max's five stops;
     DATA.keepers + DATA.deals = the coin circle (five sellers, five deals, one paid by trade)
     - wrongbooth  Lobby: four visitors with wish cards, one at a time; tap or drag each to the booth that can help; which booths sell things you carry home?
     - backpack    Gallery main attraction: Max pays at five stops; goods drop into the backpack, services change Max (hair, sneaker, dog); good or service?
     - coinring    Gallery: Follow the Coins; five deals around a ring, a coin (or a trade) travels buyer → seller; everyone ends with BUYER + SELLER tags
     - boothsigns  Exhibit Floor: four label boxes move into the step (goods, services, buyer, seller) → signs swing down, visitors walk to the right booths */

  function boothHTML(b, cls){ return '<div class="ms-bo-booth '+(cls||'')+'" data-k="'+b.k+'" style="--aw:'+b.aw+'"><div class="aw" aria-hidden="true"></div><div class="sg">'+b.ic+' '+esc(b.t)+'</div><div class="ct"><span class="kp" aria-hidden="true">'+b.keeper+'</span><span class="ic" aria-hidden="true">'+b.ic+'</span></div><div class="spot" aria-hidden="true"></div></div>'; }
  function boothOf(k){ var B = DATA.booths || []; for (var i = 0; i < B.length; i++) if (B[i].k === k) return B[i]; return null; }

  /* ══ MODULE: wrongbooth (Lobby · send the visitors to the right booth) ══ */
  function modWrongbooth(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var B = DATA.booths || [], W = DATA.wishes || [];
    ST.wb = ST.wb || {i:0, ok:false, q:false}; var S = ST.wb;
    var m = shell('ms-wb-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-wb-stage"><div class="ms-wb-wall">BACK WALL · MARKETPLACE HALL</div><div class="ms-wb-row">'+B.map(function(b){ return '<button type="button" class="ms-wb-b" data-k="'+b.k+'" aria-label="'+esc(b.t)+' booth">'+boothHTML(b)+'</button>'; }).join('')+'</div><div class="ms-wb-q" aria-hidden="true"></div></div><div class="ms-wb-act" aria-live="polite"></div>');
    after(anchor, m);
    var act = $('.ms-wb-act', m), q = $('.ms-wb-q', m);
    function paint(){
      $$('.ms-wb-b', m).forEach(function(btn){ var k = btn.dataset.k, served = W.slice(0, S.i + (S.ok ? 1 : 0)).filter(function(w){ return w.b === k; });
        $('.spot', btn).innerHTML = served.map(function(w){ return '<span class="sv">'+w.ic+'<i>'+w.gotIc+'</i></span>'; }).join(''); });
      q.innerHTML = W.slice(S.i + (S.ok ? 1 : 0)).map(function(w, j){ return '<span class="vis'+(j?'':' cur')+'">'+w.ic+'</span>'; }).join('') + (S.i + (S.ok ? 1 : 0) < W.length ? '<span class="ln">waiting in line</span>' : '<span class="ln">everyone is served</span>');
    }
    function pick(k, btn){
      if (S.i >= W.length || S.ok) return; var w = W[S.i];
      if (k !== w.b) { var b = boothOf(k); SFX.miss(); if (btn) { btn.classList.remove('no'); void btn.offsetWidth; btn.classList.add('no'); }
        var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 The '+esc(b.t)+' '+esc(b.does)+'. Can that help '+esc(w.who)+'? Read the wish card again.</div>'; return; }
      SFX.chime(); S.ok = true; save(); render();
      var sp = $('.ms-wb-b[data-k="'+k+'"] .sv:last-child', m); if (sp && !calm()) sp.classList.add('in');
    }
    $$('.ms-wb-b', m).forEach(function(btn){ btn.onclick = function(){ pick(btn.dataset.k, btn); }; });
    function render(){
      paint(); var N = W.length + 1;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (S.i < W.length) { var w = W[S.i];
        act.innerHTML = stepCard(S.i + 1, N, 'Visitor '+(S.i+1)+' of '+W.length+': '+w.who,
          '<div class="ms-wb-card"><span class="ms-wb-who" title="Drag me to a booth">'+w.ic+'</span><div><b>'+esc(w.who)+'’s wish card</b><p>“'+esc(w.wish)+'”</p></div></div>' +
          (S.ok ? '<div class="ms-vd-thanks">✅ '+esc(w.got)+'</div><button type="button" class="ms-btn big ms-wb-next">'+(S.i + 1 < W.length ? 'Next visitor ➡️' : 'Next ➡️')+'</button>'
                : '<p class="ms-wm-do">👆 Tap the booth that can help '+esc(w.who)+', or drag '+esc(w.who)+' to it.</p><div class="ms-exfb" aria-live="polite"></div>'));
        if (!S.ok) dragger($('.ms-wb-who', act), function(moved, t){ if (moved && t) pick(t.dataset.k, t); }, '.ms-wb-b');
        var nx = $('.ms-wb-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.ok = false; save(); render(); };
        return; }
      var cq = choiceQ(cfg.q, 1, function(){ markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
      act.innerHTML = stepCard(N, N, cfg.q.title, cq.html); cq.bind(act);
    }
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: backpack (Gallery main attraction · the Backpack Test) ══ */
  var MAXSVG = '<svg viewBox="0 0 120 200" aria-hidden="true"><ellipse cx="60" cy="194" rx="40" ry="5" fill="rgba(0,0,0,.18)"/>' +
    '<rect x="44" y="120" width="13" height="58" rx="5" fill="#2F4A7A"/><rect x="63" y="120" width="13" height="58" rx="5" fill="#2F4A7A"/>' +
    '<g class="shoe"><path d="M40 176 h20 v12 h-26 q-2 -8 6 -12z" fill="#E9573F"/><path d="M62 176 h20 q8 4 6 12 h-26z" fill="#E9573F"/><ellipse class="hole" cx="74" cy="185" rx="4" ry="2.4" fill="#3A2A1E"/><rect class="patch" x="68" y="181" width="12" height="7" rx="2" fill="#F5C542" stroke="#8A5A2E" stroke-width="1"/></g>' +
    '<rect x="34" y="64" width="52" height="62" rx="14" fill="#3FA47A"/><rect x="22" y="70" width="14" height="44" rx="7" fill="#3FA47A"/><rect x="84" y="70" width="14" height="44" rx="7" fill="#3FA47A"/>' +
    '<circle cx="60" cy="40" r="24" fill="#E8B98F"/><circle cx="51" cy="40" r="2.6" fill="#2A1E14"/><circle cx="69" cy="40" r="2.6" fill="#2A1E14"/><path d="M52 50 q8 6 16 0" stroke="#7A3A20" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
    '<path class="hairL" d="M34 42 q-4 -30 26 -30 q30 0 26 30 q-4 -12 -10 -14 q-2 14 -16 16 q4 -6 2 -12 q-8 10 -22 12 q2 -6 4 -10 q-6 4 -10 8z" fill="#5A3A1E"/>' +
    '<path class="hairS" d="M37 34 q2 -20 23 -20 q21 0 23 20 q-10 -9 -23 -9 q-13 0 -23 9z" fill="#5A3A1E"/></svg>';
  function modBackpack(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var P = DATA.stops || [];
    ST.bp = ST.bp || {i:0, paid:false, ok:false, q1:false, q2:false}; var S = ST.bp;
    var m = shell('ms-bp-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-bp-stage"><div class="ms-bp-street"><div class="ms-bp-stop"></div><div class="ms-bp-coin" aria-hidden="true">🪙</div><div class="ms-bp-fly" aria-hidden="true"></div></div>' +
      '<div class="ms-bp-maxw"><div class="ms-bp-max">'+MAXSVG+'<span class="ms-bp-dog" aria-hidden="true">🐕<i>walked!</i></span><span class="ms-bp-nm">Max · the buyer</span></div>' +
      '<div class="ms-bp-pack"><div class="flap" aria-hidden="true"></div><div class="in"></div><div class="cnt"></div></div></div>' +
      '<div class="ms-bp-trail">'+P.map(function(p, j){ return '<span data-j="'+j+'">'+p.ic+'</span>'; }).join('')+'</div></div><div class="ms-bp-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-bp-act', m), stage = $('.ms-bp-stage', m), maxEl = $('.ms-bp-max', m), busy = false;
    function doneN(){ return S.i + (S.paid ? 1 : 0); }
    function stopHTML(p){
      if (p.k === 'dog') return '<div class="ms-bo-booth ms-bp-jay" style="--aw:#7A4EA8"><div class="aw"></div><div class="sg">🐕 Jay\'s Dog Walking</div><div class="ct"><span class="kp">🧒</span><span class="ic">🦮</span></div><div class="spot"><span class="ms-bp-jayn">Jay, a 5th grader</span></div></div>';
      return boothHTML(boothOf(p.k));
    }
    function paint(){
      var n = Math.min(doneN(), P.length), got = P.slice(0, n);
      var goods = got.filter(function(p){ return p.kind === 'good'; });
      $('.ms-bp-pack .in', m).innerHTML = goods.map(function(p){ return '<span>'+p.item+'</span>'; }).join('');
      $('.ms-bp-pack .cnt', m).textContent = 'In the backpack: ' + goods.length + (goods.length === 1 ? ' thing' : ' things');
      $('.ms-bp-pack', m).classList.toggle('full', goods.length > 0);
      ['hair','shoe','dog'].forEach(function(c){ maxEl.classList.toggle('ch-' + c, got.some(function(p){ return p.change === c; })); });
      $$('.ms-bp-trail span', m).forEach(function(s){ var j = +s.dataset.j; s.classList.toggle('done', j < n); s.classList.toggle('on', j === S.i && S.i < P.length); });
      var p = P[Math.min(S.i, P.length - 1)]; $('.ms-bp-stop', m).innerHTML = S.i < P.length ? stopHTML(p) : '<div class="ms-bp-home">🏠 Max is home.<br>Backpack: '+goods.map(function(g){ return g.item; }).join(' ')+'</div>';
    }
    function pay(){
      if (busy || S.paid) return; var p = P[S.i]; busy = true; SFX.click();
      var coin = $('.ms-bp-coin', m), fly = $('.ms-bp-fly', m);
      function finish(){ busy = false; S.paid = true; save(); paint(); render(); }
      if (calm()) { finish(); return; }
      stage.classList.remove('pay','got','bounce'); void stage.offsetWidth; stage.classList.add('pay');
      setTimeout(function(){ SFX.pop(); fly.textContent = p.item; stage.classList.add(p.kind === 'good' ? 'got' : 'bounce'); }, 900);
      setTimeout(function(){ stage.classList.remove('pay','got','bounce'); finish(); if (p.kind !== 'good') { maxEl.classList.remove('pop'); void maxEl.offsetWidth; maxEl.classList.add('pop'); } }, 2300);
    }
    function render(){
      paint(); var N = P.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.i < P.length) { var p = P[S.i];
        if (!S.paid) { act.innerHTML = stepCard(S.i + 1, N, 'Stop '+(S.i+1)+' of '+P.length+': '+p.where, '<p>Max wants <b>'+esc(p.what)+'</b>. Tap Pay, then watch the backpack.</p><button type="button" class="ms-btn big ms-bp-pay">🪙 Pay the seller</button>');
          $('.ms-bp-pay', act).onclick = pay; return; }
        act.innerHTML = stepCard(S.i + 1, N, 'Stop '+(S.i+1)+' of '+P.length+': '+p.where, '<p>Max paid for '+esc(p.what)+'. What did Max get?</p>' +
          (S.ok ? '<div class="ms-vd-thanks">✅ '+esc(p.fb)+'</div><button type="button" class="ms-btn big ms-bp-next">'+(S.i + 1 < P.length ? 'Next stop ➡️' : 'Next ➡️')+'</button>'
                : '<div class="ms-pchoices col">'+rot([['good', cfg.goodT], ['service', cfg.servT]], S.i).map(function(o){ return '<button type="button" class="ms-btn ms-bp-k" data-k="'+o[0]+'">'+esc(o[1])+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div>'));
        $$('.ms-bp-k', act).forEach(function(b){ b.onclick = function(){
          if (b.dataset.k === p.kind) { SFX.chime(); S.ok = true; save(); render(); }
          else { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 Look at the backpack. Did '+esc(p.what)+' go in? '+(p.kind === 'good' ? 'Count what is inside.' : 'Look at Max: what changed?')+'</div>'; } }; });
        var nx = $('.ms-bp-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.paid = false; S.ok = false; save(); render(); };
        return; }
      var cq = choiceQ(S.q1 ? cfg.q2 : cfg.q1, S.q1 ? 2 : 1, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1400);
        else { ST.gal = ST.gal||{}; ST.gal.backpack = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1500); } });
      act.innerHTML = stepCard(S.q1 ? N : N - 1, N, S.q1 ? cfg.q2.title : cfg.q1.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: coinring (Gallery · Follow the Coins: everyone buys and sells) ══ */
  function modCoinring(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var K = DATA.keepers || [], DL = DATA.deals || [];
    ST.cr = ST.cr || {i:0, ok:false, q1:false, q2:false}; var S = ST.cr;
    var m = shell('ms-cr-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-cr-stage"><svg class="ms-cr-ring" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="50" cy="30" rx="38" ry="22" fill="none" stroke="#C9A86A" stroke-width=".8" stroke-dasharray="2 2"/></svg>' +
      '<div class="ms-cr-mid"><span class="i">🏪</span><b>Market Street</b><p class="w"></p></div>' +
      K.map(function(k, j){ return '<button type="button" class="ms-cr-p p'+j+'" data-k="'+k.k+'" aria-label="'+esc(k.name+', '+k.job)+'"><span class="ic">'+k.ic+'</span><b>'+esc(k.name)+'</b><small>'+esc(k.job)+'</small><span class="tags"><i class="tb">BUYER</i><i class="ts">SELLER</i></span></button>'; }).join('') +
      '<span class="ms-cr-coin" aria-hidden="true">🪙</span><span class="ms-cr-back" aria-hidden="true"></span><div class="ms-cr-banner" aria-hidden="true">'+esc(cfg.bothT||'')+'</div></div><div class="ms-cr-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-cr-act', m), stage = $('.ms-cr-stage', m), busy = false;
    function kp(k){ for (var i = 0; i < K.length; i++) if (K[i].k === k) return K[i]; }
    function paint(){
      var n = S.i + (S.ok ? 1 : 0), d = DL.slice(0, n);
      $$('.ms-cr-p', m).forEach(function(b){ var k = b.dataset.k, isB = d.some(function(x){ return x.buyer === k; }), isS = d.some(function(x){ return x.seller === k; });
        b.classList.toggle('isb', isB); b.classList.toggle('iss', isS); b.classList.toggle('both', isB && isS);
        b.classList.toggle('cur', S.i < DL.length && !S.ok && DL[S.i].buyer === k); });
      stage.classList.toggle('all', n >= DL.length);
      var cur = S.i < DL.length ? DL[S.i] : null; $('.ms-cr-mid .w', m).innerHTML = cur ? (S.ok ? '✅ '+esc(cur.done) : kp(cur.buyer).ic+' '+esc(cur.want)+'<br><i>👆 Tap the seller.</i>') : '';
    }
    function moveTok(tok, fromK, toK, ms){
      var r = stage.getBoundingClientRect(), a = $('.ms-cr-p[data-k="'+fromK+'"]', m).getBoundingClientRect(), b = $('.ms-cr-p[data-k="'+toK+'"]', m).getBoundingClientRect();
      tok.style.transition = 'none'; tok.style.left = (a.left - r.left + a.width/2) + 'px'; tok.style.top = (a.top - r.top + a.height/2) + 'px'; tok.style.opacity = 1; void tok.offsetWidth;
      tok.style.transition = 'left '+ms+'ms ease-in-out, top '+ms+'ms ease-in-out'; tok.style.left = (b.left - r.left + b.width/2) + 'px'; tok.style.top = (b.top - r.top + b.height/2) + 'px';
      setTimeout(function(){ tok.style.opacity = 0; }, ms + 150);
    }
    function pick(k, btn){
      if (busy || S.i >= DL.length || S.ok) return; var d = DL[S.i];
      if (k === d.buyer) { SFX.miss(); var fb0 = $('.ms-exfb', act); if (fb0) fb0.innerHTML = '<div class="ms-notyet">🤔 That is '+esc(kp(k).name)+', the person who needs something. Who sells it?</div>'; return; }
      if (k !== d.seller) { SFX.miss(); if (btn) { btn.classList.remove('no'); void btn.offsetWidth; btn.classList.add('no'); }
        var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 '+esc(kp(k).name)+' sells '+esc(kp(k).sells)+'. Is that what '+esc(kp(d.buyer).name)+' needs?</div>'; return; }
      SFX.click();
      function finish(){ busy = false; S.ok = true; save(); SFX.chime(); render(); if (S.i + 1 >= DL.length) { SFX.fanfare(); } }
      if (calm()) { finish(); return; }
      busy = true; var coin = $('.ms-cr-coin', m), back = $('.ms-cr-back', m);
      coin.textContent = d.trade ? '🔧' : '🪙'; back.textContent = d.got;
      moveTok(coin, d.buyer, d.seller, 1100); setTimeout(function(){ SFX.pop(); moveTok(back, d.seller, d.buyer, 1000); }, 1150); setTimeout(finish, 2300);
    }
    $$('.ms-cr-p', m).forEach(function(b){ b.onclick = function(){ pick(b.dataset.k, b); }; });
    function render(){
      paint(); var N = DL.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.i < DL.length) { var d = DL[S.i];
        act.innerHTML = stepCard(S.i + 1, N, 'Deal '+(S.i+1)+' of '+DL.length, '<div class="ms-cr-want">'+kp(d.buyer).ic+' '+esc(d.want)+'</div>' +
          (S.ok ? '<div class="ms-vd-thanks">✅ '+esc(d.done)+'</div><button type="button" class="ms-btn big ms-cr-next">'+(S.i + 1 < DL.length ? 'Next deal ➡️' : 'Next ➡️')+'</button>'
                : '<p class="ms-wm-do">👆 Tap the person who sells what '+esc(kp(d.buyer).name)+' needs.</p><div class="ms-exfb" aria-live="polite"></div>'));
        var nx = $('.ms-cr-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.ok = false; save(); render(); };
        return; }
      var cq = choiceQ(S.q1 ? cfg.q2 : cfg.q1, S.q1 ? 3 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1400);
        else { ST.gal = ST.gal||{}; ST.gal.ring = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1500); } });
      act.innerHTML = stepCard(S.q1 ? N : N - 1, N, S.q1 ? cfg.q2.title : cfg.q1.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: boothsigns (Exhibit Floor · four booth labels → hang the signs) ══ */
  function modBoothsigns(cfg){
    var F = (cfg.fields || []).map(function(f){ var ta = document.getElementById(f.id); return ta ? {f:f, ta:ta, home:null} : null; }).filter(Boolean); if (F.length < 4) return;
    var NEED = cfg.wordMin || 7, B = DATA.booths || [], W = DATA.wishes || [];
    ST.bs = ST.bs || {step:1, open:false}; var S = ST.bs;
    var m = shell('ms-bs-mod', cfg);
    var gB = B.filter(function(b){ return b.kind === 'good'; }), sB = B.filter(function(b){ return b.kind === 'service'; });
    m.insertAdjacentHTML('beforeend', '<div class="ms-bs-act"></div><div class="ms-bs-stage" hidden>' +
      '<div class="ms-bs-side g"><div class="ms-bs-sign" data-k="goods"><div class="h">GOODS</div><p></p></div><div class="row">'+gB.map(function(b){ return boothHTML(b); }).join('')+'</div></div>' +
      '<div class="ms-bs-side s"><div class="ms-bs-sign" data-k="services"><div class="h">SERVICES</div><p></p></div><div class="row">'+sB.map(function(b){ return boothHTML(b); }).join('')+'</div></div>' +
      '<div class="ms-bs-people"><div class="ms-bs-card" data-k="buyer"><span class="who">🧒</span><div><b>BUYER</b><p></p></div></div><div class="ms-bs-card" data-k="seller"><span class="who">🧑‍🍳</span><div><b>SELLER</b><p></p></div></div></div>' +
      '<div class="ms-bs-line">'+W.map(function(w, j){ return '<span class="v v'+j+'" data-b="'+w.b+'">'+w.ic+'</span>'; }).join('')+'</div><div class="ms-bs-by"></div></div><div class="ms-bs-end"></div>');
    var first = F[0].ta, blk = first.closest('.activity-body') || first.parentNode;
    F.forEach(function(x){ x.home = document.createComment('bs-home-' + x.f.k); x.ta.parentNode.insertBefore(x.home, x.ta); });
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild); if (p0) p0.classList.add('ms-hide-on');
    $$('.textbox-prompt', blk).forEach(function(tp){ tp.classList.add('ms-hide-on'); });
    var act = $('.ms-bs-act', m), show = $('.ms-bs-stage', m), end = $('.ms-bs-end', m), curUpd = null;
    function goHome(){ F.forEach(function(x){ if (x.ta.previousSibling !== x.home) x.home.parentNode.insertBefore(x.ta, x.home.nextSibling); }); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function ok(x){ return words(x.ta.value) >= NEED && new RegExp(x.f.re, 'i').test(x.ta.value); }
    function miss(){ var out = []; F.forEach(function(x, i){ var n = words(x.ta.value);
      if (n < NEED) out.push('Label '+(i+1)+' ('+x.f.t+'): add '+(NEED-n)+' more word'+(NEED-n===1?'':'s')+'.');
      else if (!new RegExp(x.f.re, 'i').test(x.ta.value)) out.push('Label '+(i+1)+' ('+x.f.t+'): say what '+(x.f.k === 'goods' || x.f.k === 'services' ? x.f.t.toLowerCase()+' are, with an example.' : 'a '+x.f.k+' does.')); }); return out; }
    function view(){
      F.forEach(function(x){ var el2 = $('.ms-bs-sign[data-k="'+x.f.k+'"] p, .ms-bs-card[data-k="'+x.f.k+'"] p', show); if (el2) el2.textContent = x.ta.value.trim(); });
      var nm = sget(NAMEK,''); $('.ms-bs-by', show).textContent = nm ? 'Labels by ' + nm + ', Trade & Choice Curator' : 'Labels by a Trade & Choice Curator';
      show.classList.toggle('open', !!S.open);
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 2; F.forEach(function(x){ x.ta.classList.toggle('ms-gi-away', S.step !== 1); });
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 2, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p>' + F.map(function(x, i){ return '<div class="ms-bs-f" data-k="'+x.f.k+'"><div class="ms-bs-fh"><b>Label '+(i+1)+': '+esc(x.f.t)+'</b><button type="button" class="ms-btn alt ms-bs-start" data-i="'+i+'">✏️ '+esc(x.f.starter)+'</button><span class="ms-chip"></span></div><div class="ms-bs-box"></div></div>'; }).join('') +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-bs-next">See my signs ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        F.forEach(function(x){ $('.ms-bs-f[data-k="'+x.f.k+'"] .ms-bs-box', act).appendChild(x.ta); });
        var fb = $('.ms-gi-fb', act);
        var upd = function(){ F.forEach(function(x){ var c = $('.ms-bs-f[data-k="'+x.f.k+'"] .ms-chip', act), n = words(x.ta.value), g = ok(x); c.className = 'ms-chip' + (g ? ' ok' : ''); c.textContent = g ? '✓ ready' : Math.min(n, NEED) + ' of ' + NEED + ' words'; });
          var x2 = miss(); $('.ms-bs-next', act).classList.toggle('ms-notready', !!x2.length); if (fb.innerHTML) fb.innerHTML = x2.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+x2.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-bs-start', act).forEach(function(b){ b.onclick = function(){ var x = F[+b.dataset.i], t = x.f.starter; if (x.ta.value.indexOf(t) < 0) x.ta.value = (x.ta.value.trim() ? x.ta.value.replace(/\s*$/,'') + ' ' : '') + t + ' ';
          x.ta.focus(); x.ta.setSelectionRange(x.ta.value.length, x.ta.value.length); x.ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-bs-next', act).onclick = function(){ var x2 = miss(); if (x2.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x2.map(esc).join(' ')+'</div>'; return; }
          SFX.click(); S.step = 2; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(2, 2, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><button type="button" class="ms-btn big ms-bs-go">🪧 '+esc(cfg.openT||'Hang the signs')+'</button><div class="ms-gi-fb" aria-live="polite"></div>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-bs-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-bs-go', end); if (gb) gb.onclick = function(){ var x2 = miss(); if (x2.length) { SFX.miss(); $('.ms-gi-fb', end).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+x2.map(esc).join(' ')+'</div>'; return; }
        S.open = true; save(); show.classList.remove('hang'); void show.offsetWidth; if (!calm()) show.classList.add('hang'); SFX.fanfare(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 2400);
        setTimeout(function(){ show.classList.remove('hang'); }, 4200); optiNod('assignment'); check(); };
      $('.ms-bs-edit', end).onclick = function(){ S.open = false; S.step = 1; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    F.forEach(function(x){ x.ta.addEventListener('input', function(){ if (curUpd && S.step === 1) curUpd(); }); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.09_04 (Characteristics of Money) ══════════
     DATA.villagers = the barter chain (potter, weaver, beekeeper, baker); DATA.items + DATA.tests = the Money Test Bench;
     DATA.stalls = three stalls for the Trust Switch
     - barter       Lobby: you hold a goat and want bread; offer it around a chain of trades; then pay the baker with coins in one step
     - testbench    Gallery main attraction: four machines (rain, long walk, counting tray, visitors) test four items; the salt melts; scorecard fills
     - trustswitch  Gallery: pay with one $5 bill at three stalls; flip the town's trust off; the same bill is refused
     - chococase    Exhibit Floor: four rule boxes (Yes/No + because) + final panel move into the steps → the chocolate slides into the money case with a placard */

  /* ══ MODULE: barter (Lobby · a goat for a loaf of bread) ══ */
  function modBarter(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var V = DATA.villagers || [];
    ST.bx = ST.bx || {hand:'🐐', handT:'a goat', tries:0, trades:0, step:1, coins:false, q:false}; var S = ST.bx;
    var TIMES = ['🌅 Early morning', '☀️ Morning', '🌤️ Late morning', '🕛 Noon', '🌇 Afternoon', '🌆 Almost evening'];
    var m = shell('ms-bx-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-bx-stage"><div class="ms-bx-top"><div class="ms-bx-hand"><small>You are holding</small><b></b></div><div class="ms-bx-clock"></div><div class="ms-bx-cnt"></div></div>' +
      '<div class="ms-bx-row">'+V.map(function(v){ return '<button type="button" class="ms-bx-v" data-k="'+v.k+'"><span class="who">'+v.ic+'</span><b>'+esc(v.name)+'</b><span class="hw"><i class="h">HAS</i> '+v.has+' '+esc(v.hasT)+'</span><span class="hw"><i class="w">WANTS</i> '+v.wants+' '+esc(v.wantsT)+'</span></button>'; }).join('')+'</div></div><div class="ms-bx-act" aria-live="polite"></div>');
    after(anchor, m);
    var act = $('.ms-bx-act', m);
    function vil(k){ for (var i = 0; i < V.length; i++) if (V[i].k === k) return V[i]; }
    function paint(){
      $('.ms-bx-hand b', m).textContent = S.hand + ' ' + S.handT;
      $('.ms-bx-clock', m).textContent = S.step === 1 || !S.coins ? TIMES[Math.min(S.tries, TIMES.length - 1)] : '⏱️ One quick stop';
      $('.ms-bx-cnt', m).textContent = S.step === 1 ? 'Trades so far: ' + S.trades : 'Barter: ' + S.trades + ' trades · Coins: ' + (S.coins ? '1 stop' : '?');
    }
    function offer(k, btn){
      var v = vil(k), fb = $('.ms-exfb', act);
      if (S.step === 1) {
        if (S.hand === '🍞') return;
        S.tries++;
        if (v.wants === S.hand) { S.trades++; S.hand = v.has; S.handT = v.hasT; save(); SFX.chime(); btn.classList.add('swap'); setTimeout(function(){ btn.classList.remove('swap'); }, 700);
          render(); var f2 = $('.ms-exfb', act); if (f2) f2.innerHTML = '<div class="ms-vd-thanks">🔄 '+esc(v.name)+' trades! You give '+esc(v.wantsT)+' and get '+esc(v.hasT)+'.</div>'; return; }
        save(); SFX.miss(); btn.classList.remove('no'); void btn.offsetWidth; btn.classList.add('no'); paint();
        var extra = (k === 'baker' && S.hand === '🐐') ? ' "A whole goat for one loaf? I can\'t cut a goat to give you change, and I don\'t need one."' : '';
        if (fb) fb.innerHTML = '<div class="ms-notyet">🙅 '+esc(v.name)+' wants '+esc(v.wantsT)+', not '+esc(S.handT)+'.'+esc(extra)+' Look for someone who WANTS '+esc(S.handT)+'.</div>';
        return; }
      if (S.step === 2 && !S.coins) {
        if (k !== 'baker') { SFX.miss(); if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 You want bread. Who HAS bread?</div>'; return; }
        S.coins = true; S.hand = '🍞'; S.handT = 'a loaf of bread'; save(); SFX.chime(); render(); }
    }
    $$('.ms-bx-v', m).forEach(function(b){ b.onclick = function(){ offer(b.dataset.k, b); }; });
    function render(){
      paint(); var N = 3;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (S.step === 1) {
        if (S.hand === '🍞') { act.innerHTML = stepCard(1, N, 'Trade your way to bread', '<div class="ms-vd-thanks">🍞 You got your bread! It took '+S.trades+' trades and most of the day.</div><button type="button" class="ms-btn big ms-bx-next">Next: try it with coins ➡️</button>');
          $('.ms-bx-next', act).onclick = function(){ SFX.click(); S.step = 2; S.hand = '🪙🪙'; S.handT = 'two coins'; save(); render(); }; return; }
        act.innerHTML = stepCard(1, N, 'Trade your way to bread', '<p class="ms-wm-do">👆 You are holding '+esc(S.hand+' '+S.handT)+'. Tap a person to offer it. Read what each person WANTS.</p><div class="ms-exfb" aria-live="polite"></div>'); return; }
      if (S.step === 2) {
        act.innerHTML = stepCard(2, N, 'Now try it with money', S.coins ? '<div class="ms-vd-thanks">🍞 The baker takes your coins and hands you bread. One stop! The baker can use the coins to buy anything she wants.</div><button type="button" class="ms-btn big ms-bx-next">Next ➡️</button>'
          : '<p class="ms-wm-do">👆 Now you are holding two coins. Everyone in town takes coins. Tap the person who has bread.</p><div class="ms-exfb" aria-live="polite"></div>');
        var nx = $('.ms-bx-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.step = 3; save(); render(); }; return; }
      var cq = choiceQ(cfg.q, 2, function(){ markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
      act.innerHTML = stepCard(3, N, cfg.q.title, cq.html); cq.bind(act);
    }
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: testbench (Gallery main attraction · the Money Test Bench) ══ */
  var SALTSVG = '<svg viewBox="0 0 60 44" aria-hidden="true"><ellipse class="pud" cx="30" cy="40" rx="24" ry="3.5" fill="#9EC7E8"/><g class="blk"><path d="M8 38 L14 14 L46 14 L52 38 Z" fill="#F6F3EC" stroke="#B9B2A3" stroke-width="2"/><path d="M14 14 L20 6 L52 6 L46 14 Z" fill="#FFFFFF" stroke="#B9B2A3" stroke-width="2"/><path d="M46 14 L52 6 L56 30 L52 38 Z" fill="#E6E0D3" stroke="#B9B2A3" stroke-width="2"/><path d="M18 22 l4 6 M30 18 l-3 8 M38 26 l5 4" stroke="#D8D0BF" stroke-width="1.5"/></g></svg>';
  function modTestbench(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var I = DATA.items || [], T = DATA.tests || [];
    ST.tb = ST.tb || {i:0, ran:false, q1:false, q2:false}; var S = ST.tb;
    var m = shell('ms-tb-mod', cfg);
    var MARK = {ok:'✅', kind:'⚠️', no:'❌'};
    m.insertAdjacentHTML('beforeend', '<div class="ms-tb-stage"><div class="ms-tb-mach"><span class="ic"></span><b></b><small></small></div><div class="ms-tb-fx" aria-hidden="true"></div>' +
      '<div class="ms-tb-bench">'+I.map(function(it){ return '<div class="ms-tb-it" data-k="'+it.k+'"><div class="obj">'+(it.k === 'salt' ? SALTSVG : '<span>'+it.ic+'</span>')+'<i class="xtra"></i></div><b>'+esc(it.t)+'</b><div class="res"></div></div>'; }).join('')+'</div>' +
      '<table class="ms-tb-card"><thead><tr><th></th>'+T.map(function(t){ return '<th>'+t.ic+'<br>'+esc(t.col||t.rule)+'</th>'; }).join('')+'</tr></thead><tbody>'+I.map(function(it){ return '<tr data-k="'+it.k+'"><th>'+it.ic+' '+esc(it.t)+'</th>'+T.map(function(t){ return '<td data-t="'+t.k+'">?</td>'; }).join('')+'</tr>'; }).join('')+'</tbody></table></div><div class="ms-tb-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-tb-act', m), stage = $('.ms-tb-stage', m), busy = false;
    function done(){ return S.i + (S.ran ? 1 : 0); }
    function paint(){
      var n = done(), cur = T[Math.min(S.i, T.length - 1)];
      $('.ms-tb-mach .ic', m).textContent = S.i < T.length ? cur.ic : '📋';
      $('.ms-tb-mach b', m).textContent = S.i < T.length ? cur.machine : 'All four tests done';
      $('.ms-tb-mach small', m).textContent = S.i < T.length ? cur.rule : 'Read the scorecard';
      T.forEach(function(t, j){ I.forEach(function(it){ var td = $('tr[data-k="'+it.k+'"] td[data-t="'+t.k+'"]', m); var r = t.res[it.k]; td.textContent = j < n ? MARK[r[0]] : '?'; td.className = j < n ? r[0] : ''; }); });
      var show = S.ran && S.i < T.length ? T[S.i] : null;
      I.forEach(function(it){ var el2 = $('.ms-tb-it[data-k="'+it.k+'"]', m), r = show ? show.res[it.k] : null;
        $('.res', el2).innerHTML = r ? '<span class="'+r[0]+'">'+MARK[r[0]]+'</span> '+esc(r[1]) : '';
        el2.className = 'ms-tb-it' + (r ? ' r-' + r[0] : '') + (show ? ' t-' + show.k : '');
        if (it.k === 'salt') el2.classList.toggle('gone', n >= 1); });
    }
    function run(){
      if (busy || S.ran) return; var t = T[S.i]; busy = true; SFX.click();
      stage.classList.remove('fx-lasts','fx-carry','fx-count','fx-trust'); void stage.offsetWidth;
      function finish(){ busy = false; S.ran = true; save(); stage.classList.remove('fx-' + t.k); paint(); render(); if (t.k === 'lasts') SFX.pop(); else SFX.chime(); }
      stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
      if (calm()) { finish(); return; }
      stage.classList.add('fx-' + t.k);
      $('.ms-tb-fx', m).innerHTML = t.k === 'lasts' ? '<span class="cloud">🌧️</span><span class="cloud c2">🌧️</span><span class="cloud c3">🌧️</span><span class="cloud c4">🌧️</span>' : t.k === 'carry' ? '<span class="walk">🚶</span>' : t.k === 'trust' ? '<span class="vis">🧳🧑‍🦱👩‍🦳</span>' : '<span class="cnt">1 · 2 · 3</span>';
      setTimeout(finish, 2400);
    }
    function render(){
      paint(); var N = T.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.i < T.length) { var t = T[S.i];
        act.innerHTML = stepCard(S.i + 1, N, 'Test '+(S.i+1)+' of '+T.length+': '+t.machine, '<p><b>'+esc(t.rule)+'</b> '+esc(t.what)+'</p>' +
          (S.ran ? '<p class="ms-wm-do">👀 Read what happened under each one. The scorecard filled in.</p><button type="button" class="ms-btn big ms-tb-next">'+(S.i + 1 < T.length ? 'Next test ➡️' : 'Next ➡️')+'</button>'
                 : '<button type="button" class="ms-btn big ms-tb-run">'+esc(t.btn)+'</button>'));
        var rb = $('.ms-tb-run', act); if (rb) rb.onclick = run;
        var nx = $('.ms-tb-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.ran = false; save(); render(); };
        return; }
      var cq = choiceQ(S.q1 ? cfg.q2 : cfg.q1, S.q1 ? 3 : 1, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1400);
        else { ST.gal = ST.gal||{}; ST.gal.bench = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1500); } });
      act.innerHTML = stepCard(S.q1 ? N : N - 1, N, S.q1 ? cfg.q2.title : cfg.q1.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: trustswitch (Gallery · the same bill, with and without trust) ══ */
  function modTrustswitch(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var L = DATA.stalls || [];
    ST.tsw = ST.tsw || {paid:{}, off:false, refused:{}, q:false}; var S = ST.tsw;
    var m = shell('ms-tsw-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-tsw-stage"><div class="ms-tsw-top"><div class="ms-tsw-bill" aria-label="A five dollar paper bill"><b>$5</b><span>FIVE DOLLARS</span></div>' +
      '<button type="button" class="ms-tsw-sw" aria-pressed="true"><span class="knob"></span><b class="lab"></b></button></div>' +
      '<div class="ms-tsw-row">'+L.map(function(s){ return '<button type="button" class="ms-tsw-st" data-k="'+s.k+'"><span class="aw" aria-hidden="true"></span><b>'+s.ic+' '+esc(s.t)+'</b><span class="kp" aria-hidden="true">🧑‍🍳</span><span class="say"></span></button>'; }).join('')+'</div></div><div class="ms-tsw-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-tsw-act', m), sw = $('.ms-tsw-sw', m);
    function cnt(o){ return Object.keys(o).length; }
    function phase(){ if (S.q) return 5; if (cnt(S.paid) < L.length) return 1; if (!S.off) return 2; if (cnt(S.refused) < L.length) return 3; return 4; }
    function paint(){
      var p = phase(), trustOn = !S.off || p === 5;
      sw.classList.toggle('off', !trustOn); sw.setAttribute('aria-pressed', trustOn ? 'true' : 'false');
      $('.lab', sw).textContent = trustOn ? 'TOWN TRUSTS THIS MONEY: ON' : 'TOWN TRUSTS THIS MONEY: OFF';
      $('.ms-tsw-bill', m).classList.toggle('dull', !trustOn);
      $$('.ms-tsw-st', m).forEach(function(b){ var k = b.dataset.k, s = L.filter(function(x){ return x.k === k; })[0];
        var say = S.off && S.refused[k] && p !== 5 ? '✋ "No thanks. That\'s just paper now."' : (S.paid[k] && (!S.off || p === 5) ? '✅ "Thank you!" You get ' + s.got + '.' : (S.paid[k] && S.off ? '' : ''));
        $('.say', b).textContent = say; b.classList.toggle('yes', !!S.paid[k] && (!S.off || p === 5)); b.classList.toggle('nope', !!(S.off && S.refused[k] && p !== 5)); });
    }
    $$('.ms-tsw-st', m).forEach(function(b){ b.onclick = function(){ var p = phase(), k = b.dataset.k;
      if (p === 1) { if (!S.paid[k]) { S.paid[k] = 1; save(); SFX.chime(); } render(); return; }
      if (p === 3) { if (!S.refused[k]) { S.refused[k] = 1; save(); SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); } render(); return; }
      if (p === 2) { var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">👆 First flip the big switch.</div>'; } }; });
    sw.onclick = function(){ var p = phase(); if (p === 2) { S.off = true; save(); SFX.click(); render(); } else if (p === 1) { var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">👆 First pay at all three stalls.</div>'; } };
    function render(){
      paint(); var p = phase(), N = 4;
      if (p === 5) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (p === 1) { act.innerHTML = stepCard(1, N, 'Pay with the bill', '<p class="ms-wm-do">👆 Tap each stall to pay with your $5 bill. ('+cnt(S.paid)+' of '+L.length+')</p><div class="ms-exfb" aria-live="polite"></div>'); return; }
      if (p === 2) { act.innerHTML = stepCard(2, N, 'Flip the switch', '<p>Imagine that one morning, everyone in town stops believing this paper is worth anything.</p><p class="ms-wm-do">👆 Tap the big switch to turn the town\'s trust OFF.</p><div class="ms-exfb" aria-live="polite"></div>'); return; }
      if (p === 3) { act.innerHTML = stepCard(3, N, 'Try again', '<p class="ms-wm-do">👆 Tap each stall and try to pay with the same $5 bill. ('+cnt(S.refused)+' of '+L.length+')</p>'); return; }
      var cq = choiceQ(cfg.q, 1, function(){ ST.gal = ST.gal||{}; ST.gal.trust = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
      act.innerHTML = stepCard(4, N, cfg.q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: chococase (Exhibit Floor · four rule boxes + final panel → chocolate goes into the money case) ══ */
  function modChococase(cfg){
    var R = (cfg.rules || []).map(function(r){ var ta = document.getElementById(r.id); return ta ? {r:r, ta:ta, home:null} : null; }).filter(Boolean);
    var P = document.getElementById(cfg.panel || 'journal-assign'); if (R.length < 4 || !P) return;
    var NEED = cfg.ruleMin || 5, SN = cfg.sentMin || 2, I = DATA.items || [];
    ST.ch = ST.ch || {step:1, v:null, open:false}; var S = ST.ch;
    var m = shell('ms-ch-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-ch-act"></div><div class="ms-ch-stage" hidden><div class="ms-ch-case"><div class="glass" aria-hidden="true"></div><div class="lbl">THE MONEY CASE</div><div class="row">'+I.map(function(it){ return '<span class="it">'+it.ic+'<i>'+esc(it.t)+'</i></span>'; }).join('')+'<span class="it choc">🍫<i>Chocolate bar</i></span></div></div>' +
      '<div class="ms-ch-plac"><div class="v"></div><ul class="rl"></ul><p class="tx"></p><p class="by"></p></div></div><div class="ms-ch-end"></div>');
    var all = R.map(function(x){ return x.ta; }).concat([P]);
    var blk = P.closest('.activity-body') || P.parentNode;
    var homes = all.map(function(ta){ var h = document.createComment('ch-home'); ta.parentNode.insertBefore(h, ta); return {ta:ta, h:h}; });
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild); if (p0) p0.classList.add('ms-hide-on');
    $$('.textbox-prompt', blk).forEach(function(tp){ tp.classList.add('ms-hide-on'); }); var ci = blk.querySelector('.callout'); if (ci) ci.classList.add('ms-hide-on');
    var act = $('.ms-ch-act', m), show = $('.ms-ch-stage', m), end = $('.ms-ch-end', m), curUpd = null;
    function goHome(){ homes.forEach(function(x){ if (x.ta.previousSibling !== x.h) x.h.parentNode.insertBefore(x.ta, x.h.nextSibling); }); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return words(s) >= 3; }).length; }
    function rOk(x){ return words(x.ta.value) >= NEED && /\b(yes|no)\b/i.test(x.ta.value); }
    function miss1(){ var o = []; R.forEach(function(x, i){ if (!/\b(yes|no)\b/i.test(x.ta.value)) o.push('Rule '+(i+1)+': tap Yes or No.'); else if (words(x.ta.value) < NEED) o.push('Rule '+(i+1)+': add '+(NEED - words(x.ta.value))+' more word'+(NEED - words(x.ta.value) === 1 ? '' : 's')+' to give a reason.'); }); return o; }
    function miss2(){ var o = [], n = sents(P.value); if (n < SN) o.push('Write '+(SN-n)+' more sentence'+(SN-n===1?'':'s')+' (3 words or more each).'); if (!/money/i.test(P.value)) o.push('Say whether it would work as money.'); if (!S.v) o.push('Pick your answer: works or doesn\'t work.'); return o; }
    function view(){
      $('.v', show).innerHTML = S.v === 'yes' ? esc(cfg.yesT) : esc(cfg.noT); $('.v', show).className = 'v ' + (S.v || '');
      $('.rl', show).innerHTML = R.map(function(x){ return '<li><b>'+esc(x.r.t.replace(/^Rule \d: /,''))+'</b> '+esc(x.ta.value.trim())+'</li>'; }).join('');
      $('.tx', show).textContent = P.value.trim(); var nm = sget(NAMEK,''); $('.by', show).textContent = nm ? 'Tested by ' + nm + ', Trade & Choice Curator' : 'Tested by a Trade & Choice Curator';
      show.classList.toggle('open', !!S.open);
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; all.forEach(function(ta){ ta.classList.toggle('ms-gi-away', !((S.step === 1 && ta !== P) || (S.step === 2 && ta === P))); });
      var fb;
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-ch-item">🍫 <b>The item to test:</b> a store-bought chocolate bar.</div>' + R.map(function(x, i){ return '<div class="ms-bs-f ms-ch-f" data-i="'+i+'"><div class="ms-bs-fh"><b>'+esc(x.r.t)+'</b><button type="button" class="ms-btn alt ms-ch-yn" data-i="'+i+'" data-a="Yes">👍 Yes, because</button><button type="button" class="ms-btn alt ms-ch-yn" data-i="'+i+'" data-a="No">👎 No, because</button><span class="ms-chip"></span></div><div class="ms-bs-box"></div></div>'; }).join('') +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-ch-n1">Next: my final panel ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        R.forEach(function(x, i){ $('.ms-ch-f[data-i="'+i+'"] .ms-bs-box', act).appendChild(x.ta); });
        fb = $('.ms-gi-fb', act);
        var upd = function(){ R.forEach(function(x, i){ var c = $('.ms-ch-f[data-i="'+i+'"] .ms-chip', act), g = rOk(x); c.className = 'ms-chip' + (g ? ' ok' : ''); c.textContent = g ? '✓ ready' : Math.min(words(x.ta.value), NEED) + ' of ' + NEED + ' words'; });
          var o = miss1(); $('.ms-ch-n1', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-ch-yn', act).forEach(function(b){ b.onclick = function(){ var x = R[+b.dataset.i], t = b.dataset.a + ', because', rest = x.ta.value.replace(/^\s*(yes|no)\s*,?\s*(because)?\s*/i, '');
          x.ta.value = t + ' ' + rest; x.ta.focus(); x.ta.setSelectionRange(x.ta.value.length, x.ta.value.length); x.ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-ch-n1', act).onclick = function(){ var o = miss1(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 2; save(); goHome(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      if (S.step === 2) { goHome();
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><div class="ms-gi-starts">'+(cfg.panelStarters||[]).map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-ch-chk"></div>' +
          '<div class="ms-pchoices ms-ch-v"><button type="button" class="ms-btn'+(S.v === 'yes' ? '' : ' alt')+'" data-v="yes" aria-pressed="'+(S.v === 'yes')+'">'+esc(cfg.yesT)+'</button><button type="button" class="ms-btn'+(S.v === 'no' ? '' : ' alt')+'" data-v="no" aria-pressed="'+(S.v === 'no')+'">'+esc(cfg.noT)+'</button></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-ch-b">⬅️ Back to my tests</button><button type="button" class="ms-btn big ms-ch-n2">See my placard ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(P); fb = $('.ms-gi-fb', act);
        var chk = $('.ms-ch-chk', act);
        var upd2 = function(){ var n = sents(P.value), o = miss2(); chk.innerHTML = '<span class="ms-wc'+(n>=SN?' ok':'')+'">📝 '+Math.min(n,SN)+' of '+SN+' sentences</span><span class="ms-chip'+(/money/i.test(P.value)?' ok':'')+'">'+(/money/i.test(P.value)?'✓ ':'')+'says "money"</span>';
          $('.ms-ch-n2', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd2; upd2();
        $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = (cfg.panelStarters||[])[+b.dataset.i]; P.value = P.value.replace(/\s*$/,'') + (P.value.trim() ? ' ' : '') + t + ' '; P.focus(); P.setSelectionRange(P.value.length, P.value.length); P.dispatchEvent(new Event('input',{bubbles:true})); upd2(); }; });
        $$('.ms-ch-v button', act).forEach(function(b){ b.onclick = function(){ S.v = b.dataset.v; save(); SFX.click(); $$('.ms-ch-v button', act).forEach(function(x){ var on = x.dataset.v === S.v; x.classList.toggle('alt', !on); x.setAttribute('aria-pressed', on); }); upd2(); }; });
        $('.ms-ch-b', act).onclick = function(){ S.step = 1; save(); render(); };
        $('.ms-ch-n2', act).onclick = function(){ var o = miss2(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-ch-go">🍫 '+esc(cfg.openT||'Put it in the case')+'</button>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-ch-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-ch-go', end); if (gb) gb.onclick = function(){ S.open = true; save(); show.classList.remove('in'); void show.offsetWidth; if (!calm()) show.classList.add('in'); SFX.fanfare(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 1800);
        setTimeout(function(){ show.classList.remove('in'); }, 3000); optiNod('assignment'); check(); };
      $('.ms-ch-edit', end).onclick = function(){ S.open = false; S.step = 1; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    all.forEach(function(ta){ ta.addEventListener('input', function(){ if (curUpd && S.step < 3) curUpd(); }); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.09_05 (Currencies of the U.S., Canada, Mexico, and the Caribbean) ══════════
     DATA.stands = two snack stands; DATA.stops = the Exchange Booth trip (Canada, Mexico, Jamaica, St. Lucia);
     DATA.islands + DATA.ecIslands + DATA.caribMap/caribMarks = the Caribbean island map (Natural Earth 50m, equirectangular)
     - snackstand      Lobby: try to pay with U.S. dollars in Canada and Mexico; each seller kindly names their own currency
     - exchtrip        Gallery main attraction: four stops; exchange at the booth (local money + fact into the wallet), then pay with the right money
     - islandmap       Gallery: tap Jamaica, Cuba, Puerto Rico for their money; show the Eastern Caribbean dollar → eight islands light up gold
     - neighborpanels  Exhibit Floor: Canada / Mexico / Caribbean / closing boxes move into the step → panels hang on the wider money case */

  /* ══ MODULE: snackstand (Lobby · a snack across the border) ══ */
  function modSnackstand(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var A = DATA.stands || [];
    ST.sn = ST.sn || {tried:{}, q:false}; var S = ST.sn;
    var m = shell('ms-sn-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-sn-stage"><div class="ms-sn-wallet"><small>In your pocket</small><b>💵 U.S. dollars</b></div><div class="ms-sn-row">'+A.map(function(a){ return '<div class="ms-sn-st" data-k="'+a.k+'"><div class="aw" aria-hidden="true"></div><div class="pl">'+a.ic+' '+esc(a.place)+'</div><div class="sn">'+esc(a.snack)+'</div><div class="pr">Price: '+esc(a.price)+'</div><div class="say" aria-live="polite"></div><button type="button" class="ms-btn ms-sn-pay" data-k="'+a.k+'">💵 Pay with U.S. dollars</button></div>'; }).join('')+'</div></div><div class="ms-sn-act" aria-live="polite"></div>');
    after(anchor, m);
    var act = $('.ms-sn-act', m);
    function paint(){ A.forEach(function(a){ var st = $('.ms-sn-st[data-k="'+a.k+'"]', m); $('.say', st).textContent = S.tried[a.k] ? '🙂 "' + a.say + '"' : ''; st.classList.toggle('tried', !!S.tried[a.k]); }); }
    $$('.ms-sn-pay', m).forEach(function(b){ b.onclick = function(){ var k = b.dataset.k, i = A.map(function(a){ return a.k; }).indexOf(k), n = Object.keys(S.tried).length;
      if (S.q || S.tried[k]) return;
      if (i !== n) { SFX.miss(); var fb = $('.ms-exfb', act); if (fb) fb.innerHTML = '<div class="ms-notyet">👆 Start with the stand in '+esc(A[n].place)+'.</div>'; return; }
      S.tried[k] = 1; save(); SFX.chime(); render(); }; });
    function render(){
      paint(); var n = Object.keys(S.tried).length, N = A.length + 1;
      $$('.ms-sn-pay', m).forEach(function(b, j){ b.classList.toggle('ms-notready', j !== n || S.q); b.hidden = !!S.tried[b.dataset.k]; });
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (n < A.length) { act.innerHTML = stepCard(n + 1, N, 'Stand '+(n+1)+' of '+A.length+': '+A[n].place, '<p class="ms-wm-do">👆 Tap Pay with U.S. dollars at the stand in '+esc(A[n].place)+'. Then read what the seller says.</p><div class="ms-exfb" aria-live="polite"></div>'); return; }
      var cq = choiceQ(cfg.q, 2, function(){ markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
      act.innerHTML = stepCard(N, N, cfg.q.title, cq.html); cq.bind(act);
    }
    render(); if (S.q) markDone('scene');
  }

  /* ══ MODULE: exchtrip (Gallery main attraction · the Exchange Booth trip) ══ */
  function modExchtrip(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var P = DATA.stops || [];
    ST.xt = ST.xt || {i:0, ex:false, ok:false, q1:false, q2:false}; var S = ST.xt;
    var m = shell('ms-xt-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-xt-stage"><div class="ms-xt-route">'+P.map(function(p, j){ return '<div class="ms-xt-stop" data-j="'+j+'"><span class="dot">'+p.ic+'</span><b>'+esc(p.place)+'</b></div>'; }).join('')+'<span class="ms-xt-plane" aria-hidden="true">✈️</span></div>' +
      '<div class="ms-xt-main"><div class="ms-xt-booth"><div class="sign">CURRENCY EXCHANGE</div><div class="win"><div class="ms-xt-give">💵<i>U.S. dollars</i></div><div class="arr" aria-hidden="true">⇄</div><div class="ms-xt-get"></div></div><p class="ms-xt-fact"></p></div>' +
      '<div class="ms-xt-wallet"><b>👛 Your wallet</b><div class="in"></div></div></div></div><div class="ms-xt-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-xt-act', m), stage = $('.ms-xt-stage', m);
    function coin(p, big){ return '<span class="ms-xt-coin'+(big?' big':'')+'" style="--c:'+p.color+'"><b>'+esc(p.sym)+'</b><i>'+esc(p.cur)+'</i></span>'; }
    function got(){ return P.slice(0, Math.min(P.length, S.i + (S.ex ? 1 : 0))); }
    function paint(){
      var cur = P[Math.min(S.i, P.length - 1)], g = got();
      $$('.ms-xt-stop', m).forEach(function(s){ var j = +s.dataset.j; s.classList.toggle('done', j < S.i || (j === S.i && S.ok)); s.classList.toggle('on', j === S.i && S.i < P.length); });
      var pl = $('.ms-xt-plane', m), on = $('.ms-xt-stop.on', m) || $$('.ms-xt-stop', m)[P.length - 1];
      if (on) { pl.style.left = (on.offsetLeft + on.offsetWidth / 2) + 'px'; }
      var showEx = S.i < P.length && S.ex;
      $('.ms-xt-get', m).innerHTML = showEx ? coin(cur, true) : '<span class="ms-xt-q">?</span>';
      $('.ms-xt-fact', m).innerHTML = showEx ? '<b>'+esc(cur.cur)+':</b> '+esc(cur.fact) : (S.i < P.length ? 'You are in <b>'+esc(cur.place)+'</b>. Swap your U.S. dollars for the money people use here.' : 'Trip complete!');
      $('.ms-xt-booth', m).classList.toggle('lit', showEx);
      $('.ms-xt-wallet .in', m).innerHTML = '<span class="ms-xt-usd">💵 U.S. dollars</span>' + g.map(function(p){ return coin(p); }).join('');
    }
    function render(){
      paint(); var N = P.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.i < P.length) { var p = P[S.i];
        if (!S.ex) { act.innerHTML = stepCard(S.i + 1, N, 'Stop '+(S.i+1)+' of '+P.length+': '+p.place, '<p>Welcome to <b>'+esc(p.place)+'</b>! First, change your money at the exchange booth.</p><button type="button" class="ms-btn big ms-xt-ex">⇄ Exchange my money</button>');
          $('.ms-xt-ex', act).onclick = function(){ SFX.chime(); S.ex = true; save(); stage.classList.remove('swap'); void stage.offsetWidth; if (!calm()) stage.classList.add('swap'); render(); }; return; }
        var opts = [{k:'usd', t:'💵 U.S. dollars'}, {k:p.k, t:p.sym + ' ' + p.curs}, (function(){ var o = P[(S.i + 1) % P.length]; return {k:o.k, t:o.sym + ' ' + o.curs}; })()];
        var sh = (S.i + 2) % opts.length; opts = opts.slice(sh).concat(opts.slice(0, sh));
        act.innerHTML = stepCard(S.i + 1, N, 'Stop '+(S.i+1)+' of '+P.length+': '+p.place, '<p>Buy <b>'+esc(p.snack)+'</b>. Which money will you pay with?</p>' +
          (S.ok ? '<div class="ms-vd-thanks">✅ The seller smiles and hands you '+esc(p.snack)+'. You paid with '+esc(p.curs)+'.</div><button type="button" class="ms-btn big ms-xt-next">'+(S.i + 1 < P.length ? '✈️ Fly to the next stop' : 'Next ➡️')+'</button>'
                : '<div class="ms-pchoices col">'+opts.map(function(o){ return '<button type="button" class="ms-btn ms-xt-pay" data-k="'+o.k+'">'+esc(o.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div>'));
        $$('.ms-xt-pay', act).forEach(function(b){ b.onclick = function(){
          if (b.dataset.k === p.k) { SFX.chime(); S.ok = true; save(); render(); return; }
          SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no');
          $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🙂 The seller says: "Here in '+esc(p.place.split(', ').pop())+', we use '+esc(p.curs)+'." Look in your wallet.</div>'; }; });
        var nx = $('.ms-xt-next', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.ex = false; S.ok = false; save(); render(); };
        return; }
      var cq = choiceQ(S.q1 ? cfg.q2 : cfg.q1, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1400);
        else { ST.gal = ST.gal||{}; ST.gal.trip = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1500); } });
      act.innerHTML = stepCard(S.q1 ? N : N - 1, N, S.q1 ? cfg.q2.title : cfg.q1.title, cq.html); cq.bind(act);
    }
    render(); window.addEventListener('resize', paint);
  }

  /* ══ MODULE: islandmap (Gallery · one money, eight islands) ══ */
  function modIslandmap(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var I = DATA.islands || [], EC = DATA.ecIslands || [], ECN = DATA.ecNames || {}, MP = DATA.caribMap || {paths:{}, H:430}, MK = DATA.caribMarks || {};
    var NM = {jm:'Jamaica', cu:'Cuba', pr:'Puerto Rico'};
    ST.is = ST.is || {seen:{}, ec:false, q:false}; var S = ST.is;
    var m = shell('ms-is-mod', cfg);
    var land = Object.keys(MP.paths).map(function(n){ var cls = 'ld'; for (var k in NM) if (NM[k] === n) cls += ' tgt t-' + k; if (EC.indexOf(n) >= 0) cls += ' ec'; return '<path class="'+cls+'" d="'+MP.paths[n]+'"/>'; }).join('');
    var dots = EC.map(function(n, j){ var p = MK[n] || [0,0], lab = ECN[n] || n, right = (DATA.ecSides || {})[n] !== 'l'; return '<g class="ecm" style="--d:'+(j*0.25)+'s"><circle cx="'+p[0]+'" cy="'+p[1]+'" r="6"/><text x="'+(p[0] + (right ? 10 : -10))+'" y="'+(p[1]+4)+'" text-anchor="'+(right ? 'start' : 'end')+'">'+esc(lab)+'</text></g>'; }).join('');
    var tg = I.map(function(it){ var p = MK[NM[it.k]] || [0,0]; return '<g class="tgm" data-k="'+it.k+'" role="button" tabindex="0" aria-label="'+esc(it.n)+'"><circle class="hit" cx="'+p[0]+'" cy="'+p[1]+'" r="26"/><circle class="ring" cx="'+p[0]+'" cy="'+p[1]+'" r="16"/><text x="'+p[0]+'" y="'+(p[1]-22)+'" text-anchor="middle">'+esc(it.n)+'</text></g>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-is-stage"><svg viewBox="0 0 800 '+MP.H+'" class="ms-is-map" aria-label="A map of the Caribbean Sea and its islands"><rect width="800" height="'+MP.H+'" class="sea"/>'+land+'<text class="lbl" x="120" y="330">Caribbean Sea</text><text class="lbl sm" x="460" y="60">Atlantic Ocean</text>'+dots+tg+'</svg><div class="ms-is-key"></div></div><div class="ms-is-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-is-act', m), svg = $('.ms-is-map', m);
    function n(){ return Object.keys(S.seen).length; }
    function paint(){
      I.forEach(function(it){ var on = !!S.seen[it.k]; svg.querySelectorAll('.t-' + it.k).forEach(function(p){ p.classList.toggle('seen', on); }); var g = svg.querySelector('.tgm[data-k="'+it.k+'"]'); g.classList.toggle('seen', on); g.classList.toggle('next', !on && !S.ec); });
      svg.classList.toggle('ecOn', !!S.ec);
      $('.ms-is-key', m).innerHTML = I.filter(function(it){ return S.seen[it.k]; }).map(function(it){ return '<span class="k k-'+it.k+'">'+esc(it.n)+': <b>'+esc(it.cur)+'</b></span>'; }).join('') + (S.ec ? '<span class="k k-ec">8 islands: <b>Eastern Caribbean dollar</b></span>' : '');
    }
    function tap(k){ if (S.seen[k]) return; S.seen[k] = 1; save(); SFX.chime(); render(); }
    $$('.tgm', svg).forEach(function(g){ g.addEventListener('click', function(){ tap(g.dataset.k); }); g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tap(g.dataset.k); } }); });
    function render(){
      paint(); var N = I.length + 2;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (n() < I.length) { var last = I.filter(function(it){ return S.seen[it.k]; }).pop();
        act.innerHTML = stepCard(n() + 1, N, 'Tap the islands', (last ? '<div class="ms-vd-thanks">✅ '+esc(last.fb)+'</div>' : '') + '<p class="ms-wm-do">👆 Tap a glowing island on the map: '+I.filter(function(it){ return !S.seen[it.k]; }).map(function(it){ return esc(it.n); }).join(', ')+'. ('+n()+' of '+I.length+')</p>'); return; }
      if (!S.ec) { act.innerHTML = stepCard(I.length + 1, N, 'The shared money', '<div class="ms-vd-thanks">✅ '+esc(I[I.length-1].fb)+'</div><p>Some islands share one money. Tap the button and watch the map.</p><button type="button" class="ms-btn big ms-is-ec">'+esc(cfg.ecBtn||'Show the shared money')+'</button>');
        $('.ms-is-ec', act).onclick = function(){ S.ec = true; save(); SFX.fanfare(); svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'center'}); setTimeout(render, calm()?0:2400); paint(); }; return; }
      var cq = choiceQ(cfg.q, 1, function(){ ST.gal = ST.gal||{}; ST.gal.islands = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
      act.innerHTML = stepCard(N, N, cfg.q.title, '<p class="ms-wm-do">🟡 Eight islands lit up gold: they all use the Eastern Caribbean dollar.</p>' + cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: neighborpanels (Exhibit Floor · panels for the wider money case) ══ */
  function modNeighborpanels(cfg){
    var F = (cfg.fields || []).map(function(f){ var ta = document.getElementById(f.id); return ta ? {f:f, ta:ta, home:null} : null; }).filter(Boolean); if (F.length < 4) return;
    var NEED = cfg.wordMin || 7;
    ST.nb = ST.nb || {step:1, open:false}; var S = ST.nb;
    var m = shell('ms-nb-mod', cfg);
    var SEC = [{k:'us', t:'United States', c:'💵', p:'The U.S. dollar. Bills show presidents and other famous Americans.'}].concat(F.slice(0, 3).map(function(x){ return {k:x.f.k, t:x.f.t, c:x.f.k === 'ca' ? '🍁' : x.f.k === 'mx' ? '🌵' : '🏝️'}; }));
    m.insertAdjacentHTML('beforeend', '<div class="ms-nb-act"></div><div class="ms-nb-stage" hidden><div class="ms-nb-case"><div class="lbl">THE MONEY CASE · OUR NEIGHBORS</div><div class="row">'+SEC.map(function(s, j){ return '<div class="sec s-'+s.k+(j ? ' new' : '')+'" style="--d:'+(j*0.35)+'s"><div class="h">'+s.c+' '+esc(s.t)+'</div><div class="glass" aria-hidden="true"></div><p class="tx">'+(s.p ? esc(s.p) : '')+'</p></div>'; }).join('')+'</div></div><div class="ms-nb-close"><b>Why they all work</b><p></p></div><div class="ms-nb-by"></div></div><div class="ms-nb-end"></div>');
    var blk = F[0].ta.closest('.activity-body') || F[0].ta.parentNode;
    F.forEach(function(x){ x.home = document.createComment('nb-home'); x.ta.parentNode.insertBefore(x.home, x.ta); });
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild); if (p0) p0.classList.add('ms-hide-on');
    $$('.textbox-prompt', blk).forEach(function(tp){ tp.classList.add('ms-hide-on'); });
    var act = $('.ms-nb-act', m), show = $('.ms-nb-stage', m), end = $('.ms-nb-end', m), curUpd = null;
    function goHome(){ F.forEach(function(x){ if (x.ta.previousSibling !== x.home) x.home.parentNode.insertBefore(x.ta, x.home.nextSibling); }); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function ok(x){ return words(x.ta.value) >= NEED && new RegExp(x.f.re, 'i').test(x.ta.value); }
    function miss(){ var o = []; F.forEach(function(x){ var n = words(x.ta.value); if (n < NEED) o.push(x.f.t + ': add ' + (NEED - n) + ' more word' + (NEED - n === 1 ? '' : 's') + '.'); else if (!new RegExp(x.f.re, 'i').test(x.ta.value)) o.push(x.f.t + ': ' + x.f.hint + '.'); }); return o; }
    function view(){ F.forEach(function(x){ if (x.f.k === 'cl') $('.ms-nb-close p', show).textContent = x.ta.value.trim(); else { var t = $('.sec.s-' + x.f.k + ' .tx', show); if (t) t.textContent = x.ta.value.trim(); } });
      var nm = sget(NAMEK,''); $('.ms-nb-by', show).textContent = nm ? 'Panels by ' + nm + ', Trade & Choice Curator' : 'Panels by a Trade & Choice Curator'; show.classList.toggle('open', !!S.open); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 2; F.forEach(function(x){ x.ta.classList.toggle('ms-gi-away', S.step !== 1); });
      if (S.step === 1) { goHome();
        act.innerHTML = stepCard(1, 2, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p>' + F.map(function(x, i){ return '<div class="ms-bs-f" data-i="'+i+'"><div class="ms-bs-fh"><b>'+esc(x.f.t)+'</b><button type="button" class="ms-btn alt ms-nb-start" data-i="'+i+'">✏️ '+esc(x.f.starter)+'</button><span class="ms-chip"></span></div><div class="ms-bs-box"></div></div>'; }).join('') +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-nb-next">See my panels ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        F.forEach(function(x, i){ $('.ms-bs-f[data-i="'+i+'"] .ms-bs-box', act).appendChild(x.ta); });
        var fb = $('.ms-gi-fb', act);
        var upd = function(){ F.forEach(function(x, i){ var c = $('.ms-bs-f[data-i="'+i+'"] .ms-chip', act), g = ok(x); c.className = 'ms-chip' + (g ? ' ok' : ''); c.textContent = g ? '✓ ready' : Math.min(words(x.ta.value), NEED) + ' of ' + NEED + ' words'; });
          var o = miss(); $('.ms-nb-next', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-nb-start', act).forEach(function(b){ b.onclick = function(){ var x = F[+b.dataset.i], t = x.f.starter; if (x.ta.value.indexOf(t) < 0) x.ta.value = (x.ta.value.trim() ? x.ta.value.replace(/\s*$/,'') + ' ' : '') + t + ' ';
          x.ta.focus(); x.ta.setSelectionRange(x.ta.value.length, x.ta.value.length); x.ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-nb-next', act).onclick = function(){ var o = miss(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; }
          SFX.click(); S.step = 2; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(2, 2, cfg.s2T, '<p>'+esc(cfg.s2||'')+'</p><button type="button" class="ms-btn big ms-nb-go">🪧 '+esc(cfg.openT||'Hang the panels')+'</button>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-nb-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-nb-go', end); if (gb) gb.onclick = function(){ S.open = true; save(); show.classList.remove('hang'); void show.offsetWidth; if (!calm()) show.classList.add('hang'); SFX.fanfare(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 2000);
        setTimeout(function(){ show.classList.remove('hang'); }, 3500); optiNod('assignment'); check(); };
      $('.ms-nb-edit', end).onclick = function(){ S.open = false; S.step = 1; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    F.forEach(function(x){ x.ta.addEventListener('input', function(){ if (curUpd && S.step === 1) curUpd(); }); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.09_06 (Trade Routes and Regional Resources) ══════════
     DATA.naMap = North America + Caribbean map (Natural Earth 50m, equirectangular); DATA.trRegions (5 regions, has / needs),
     DATA.trRoutes (5 routes: from, to, ok vehicles), DATA.trVeh, DATA.trFoods (breakfast tray)
     - growtest   Lobby: a farm in Canada; plant wheat (grows), plant an orange tree, move to January (it freezes); 2 questions
     - routemap   Gallery main attraction: drag each crate to the region that needs it (or tap the region), the arrow draws, pick truck / train / ship, it runs the route
     - breakfast  Gallery: tap 5 breakfast foods; each flies to where it grew and an arrow runs to "Your kitchen"; "did it start at the store?"
     - shiptag    Exhibit Floor: pick a route → Choice / Scarcity / Benefit / Consequence boxes move into the step → the tag ties onto that arrow on the wall map */

  var NA_N = 0;
  function naPt(k){ var M = DATA.naMap || {pts:{}}; return (M.pts || {})[k] || [0,0]; }
  function naSVG(cls, opt){
    opt = opt || {}; var M = DATA.naMap || {land:{}, W:900, H:800}, R = DATA.trRegions || [], id = 'ms-na-ah' + (++NA_N);
    var rg = R.map(function(r){ return '<path class="rg r-'+r.k+(opt.targets ? ' ms-rm-target' : '')+'" data-r="'+r.k+'" d="'+(r.k === 'cb' ? M.car : M.land[r.k])+'"/>'; }).join('');
    var lb = opt.labels === false ? '' : R.map(function(r){ var M2 = DATA.naMap || {pts:{}}, p = (M2.pts || {})['lab_' + r.k] || naPt(r.k); return '<text class="lb l-'+r.k+'" data-r="'+r.k+'" x="'+p[0]+'" y="'+(p[1] + 9)+'" text-anchor="middle">'+esc(r.n)+'</text>'; }).join('');
    return '<svg viewBox="0 0 '+M.W+' '+M.H+'" class="ms-na '+(cls||'')+'" role="img" aria-label="A map of Canada, the United States, Mexico, and the Caribbean islands"><defs><marker id="'+id+'" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" class="ah"/></marker></defs>' +
      '<rect class="sea" width="'+M.W+'" height="'+M.H+'"/><path class="gray" d="'+M.gray+'"/><path class="us" d="'+M.us+'"/>'+rg+'<path class="lake" d="'+M.lakes+'"/>' +
      '<text class="oc" x="70" y="430">Pacific Ocean</text><text class="oc" x="800" y="380">Atlantic</text><text class="oc" x="800" y="402">Ocean</text>' + (opt.extra || '') +
      '<g class="arrows" data-ah="'+id+'"></g>'+lb+'<g class="veh"></g></svg>';
  }
  function naArrowD(a, b, bend){ var mx = (a[0]+b[0])/2, my = (a[1]+b[1])/2, dx = b[0]-a[0], dy = b[1]-a[1], c = [mx - dy*bend, my + dx*bend];
    return 'M'+a[0]+' '+a[1]+' Q'+Math.round(c[0])+' '+Math.round(c[1])+' '+b[0]+' '+b[1]; }
  function naRouteEnds(rt){ return [naPt(rt.a || rt.from), naPt(rt.b || rt.to)]; }
  function naMark(svg, path, icon, f){ var q = path.getPointAtLength(path.getTotalLength() * (f == null ? .5 : f)), t = document.createElementNS('http://www.w3.org/2000/svg', 'text'); t.setAttribute('class', 'gi'); t.setAttribute('text-anchor', 'middle'); t.setAttribute('x', q.x); t.setAttribute('y', q.y + 12); t.textContent = icon; svg.querySelector('.veh').appendChild(t); return t; }
  function naDraw(svg, d, cls, animate){
    var g = svg.querySelector('.arrows'), p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', d); p.setAttribute('class', 'arr ' + (cls||'')); p.setAttribute('marker-end', 'url(#' + g.dataset.ah + ')'); g.appendChild(p);
    if (animate && !calm()) { var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; void p.getBoundingClientRect(); p.style.transition = 'stroke-dashoffset 1.1s ease'; p.style.strokeDashoffset = 0;
      setTimeout(function(){ p.style.strokeDasharray = ''; p.style.transition = ''; }, 1200); }
    return p;
  }
  function naRide(svg, path, icon, ms, done){
    var g = svg.querySelector('.veh'), t = document.createElementNS('http://www.w3.org/2000/svg', 'text'); t.setAttribute('class', 'vh'); t.setAttribute('text-anchor', 'middle'); t.textContent = icon; g.appendChild(t);
    var L = path.getTotalLength(), t0 = null;
    function put(f){ var q = path.getPointAtLength(L * f); t.setAttribute('x', q.x); t.setAttribute('y', q.y + 10); }
    if (calm()) { put(1); if (done) done(); return t; }
    put(0); function step(ts){ if (!t0) t0 = ts; var f = Math.min(1, (ts - t0) / (ms || 2200)); put(f < .5 ? 2*f*f : 1 - Math.pow(-2*f + 2, 2)/2); if (f < 1) requestAnimationFrame(step); else if (done) done(); }
    requestAnimationFrame(step); return t;
  }

  /* ══ MODULE: growtest (Lobby · try to grow it here) ══ */
  function modGrowtest(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var STP = cfg.steps || [];
    ST.gw = ST.gw || {st:0, q1:false, q2:false}; var S = ST.gw;
    var m = shell('ms-gw-mod', cfg);
    var wheat = ''; for (var i = 0; i < 26; i++) { var x = 60 + i * 9 + (i % 3) * 2, h = 70 + (i * 37 % 22); wheat += '<g class="st" style="--d:'+(i%7)*0.06+'s"><path d="M'+x+' 250 L'+x+' '+(250-h)+'" /><ellipse cx="'+x+'" cy="'+(250-h-7)+'" rx="3.4" ry="9"/></g>'; }
    var snow = ''; for (var j = 0; j < 36; j++) snow += '<circle cx="'+(j * 53 % 600)+'" cy="'+(j * 29 % 200)+'" r="'+(2 + j % 3)+'" style="--d:'+(j%9)*0.4+'s"/>';
    var scene = '<svg viewBox="0 0 600 300" class="ms-gw-scene" aria-label="A drawing of a farm on the Canadian prairies with a red barn, a thermometer, a wheat field, and a place for a small orange tree">' +
      '<rect class="sky" width="600" height="250"/><circle class="sun" cx="520" cy="58" r="28"/><g class="snow">'+snow+'</g>' +
      '<path class="far" d="M0 205 Q150 192 300 202 T600 198 L600 250 L0 250 Z"/><rect class="ground" y="248" width="600" height="52"/><rect class="snowcap" y="244" width="600" height="14" rx="6"/>' +
      '<g class="barn"><rect x="430" y="168" width="110" height="82" fill="#B5432F"/><path d="M420 172 L485 128 L550 172 Z" fill="#8E2E22"/><rect x="470" y="205" width="30" height="45" fill="#6E2318"/><path d="M470 205 L500 250 M500 205 L470 250" stroke="#F3E7CF" stroke-width="3"/></g>' +
      '<g class="therm"><rect x="392" y="150" width="26" height="92" rx="13" fill="#FFFDF6" stroke="#5A3A1E" stroke-width="3"/><rect class="merc" x="401" y="160" width="8" height="66" rx="4"/><circle cx="405" cy="230" r="9" class="bulb"/><text class="tt" x="405" y="140" text-anchor="middle"></text></g>' +
      '<g class="wheat">'+wheat+'</g><text class="hint w" x="175" y="240" text-anchor="middle">wheat field</text>' +
      '<g class="tree"><rect x="318" y="196" width="9" height="54" fill="#6B4528"/><g class="leaves"><circle cx="322" cy="186" r="26"/><circle cx="304" cy="198" r="16"/><circle cx="340" cy="198" r="16"/></g><g class="fruit"><circle cx="312" cy="184" r="5"/><circle cx="332" cy="192" r="5"/><circle cx="322" cy="174" r="5"/></g></g><text class="hint t" x="322" y="240" text-anchor="middle">orange tree spot</text>' +
      '<g class="seasign"><rect x="16" y="14" width="150" height="38" rx="8"/><text x="91" y="40" text-anchor="middle"></text></g></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-gw-wrap"><div class="ms-gw-stage">'+scene+'</div><div class="ms-gw-act" aria-live="polite"></div></div>');
    after(anchor, m);
    var act = $('.ms-gw-act', m), stage = $('.ms-gw-stage', m), svg = $('.ms-gw-scene', m);
    var SEAS = [['Spring', '55°F'], ['Summer', '80°F'], ['Summer', '80°F'], ['January', '-4°F']];
    function paint(){ var st = S.st; stage.className = 'ms-gw-stage s' + st; $('.seasign text', svg).textContent = SEAS[st][0]; $('.tt', svg).textContent = SEAS[st][1]; }
    function render(){
      paint(); var N = STP.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (S.st < STP.length) { var sp = STP[S.st];
        act.innerHTML = stepCard(S.st + 1, N, sp.t, (S.st ? '<div class="ms-vd-thanks">✅ '+esc(STP[S.st-1].done)+'</div>' : '') + '<p>'+esc(sp.p)+'</p><button type="button" class="ms-btn big ms-gw-go">'+esc(sp.btn)+'</button>');
        $('.ms-gw-go', act).onclick = function(){ SFX.chime(); S.st++; save(); stage.classList.add('anim'); render(); svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); };
        return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1400);
        else { markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1500); } });
      act.innerHTML = stepCard(S.q1 ? N : N - 1, N, q.title, (S.q1 ? '' : '<div class="ms-vd-thanks">❄️ '+esc(STP[STP.length-1].done)+'</div>') + cq.html); cq.bind(act);
    }
    render(); if (S.q2) markDone('scene');
  }

  /* ══ MODULE: routemap (Gallery main attraction · draw the arrows) ══ */
  function modRoutemap(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var R = DATA.trRegions || [], RT = DATA.trRoutes || [], V = DATA.trVeh || {}, M = DATA.naMap || {W:900, H:800};
    ST.rm = ST.rm || {i:0, drawn:false, rode:false, q1:false, q2:false}; var S = ST.rm;
    var m = shell('ms-rm-mod', cfg);
    function rOf(k){ for (var i = 0; i < R.length; i++) if (R[i].k === k) return R[i]; return {n:k}; }
    m.insertAdjacentHTML('beforeend', '<div class="ms-rm-stage"><div class="ms-rm-mapw">'+naSVG('ms-rm-map', {targets:true})+'<div class="ms-rm-crate" role="img" aria-label="crate"><b></b><i></i></div></div>' +
      '<div class="ms-rm-side"><div class="ms-rm-act" aria-live="polite"></div><div class="ms-rm-chart"><div class="h">Region chart</div>'+R.map(function(r){ return '<button type="button" class="ms-rm-row ms-rm-target" data-r="'+r.k+'"><b class="n">'+r.ic+' '+esc(r.n)+'</b><span><i>Has plenty:</i> '+esc(r.has)+'</span><span><i>Needs:</i> '+esc(r.needs)+'</span></button>'; }).join('')+'</div></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-rm-act', m), svg = $('.ms-rm-map', m), crate = $('.ms-rm-crate', m), cur = null;
    function drawAll(){ $('.arrows', svg).innerHTML = ''; $('.veh', svg).innerHTML = '';
      RT.forEach(function(rt, j){ if (j < S.i || (j === S.i && S.drawn)) { var e = naRouteEnds(rt, j), p = naDraw(svg, naArrowD(e[0], e[1], rt.bend), 'a-' + rt.k + (j === S.i && !S.rode ? ' cur' : ''), false);
        if (j < S.i || S.rode) naMark(svg, p, (V[(S.vs || {})[rt.k] || rt.ok[0]] || '🚚').split(' ')[0] + rt.ic); } }); }
    function paint(){
      var rt = RT[S.i]; $$('.ms-rm-row', m).forEach(function(b){ b.classList.toggle('from', !!(rt && !S.drawn && b.dataset.r === rt.from)); });
      $$('.rg', svg).forEach(function(p){ p.classList.toggle('from', !!(rt && !S.drawn && p.dataset.r === rt.from)); });
      if (rt && !S.drawn && S.i < RT.length) { var p0 = naPt(rt.a || rt.from); crate.hidden = false; crate.style.left = (p0[0] / M.W * 100) + '%'; crate.style.top = ((p0[1] - 34) / M.H * 100) + '%'; $('b', crate).textContent = rt.ic; $('i', crate).textContent = rt.good; crate.setAttribute('aria-label', 'A crate of ' + rt.good.toLowerCase() + ' from ' + rOf(rt.from).n); }
      else crate.hidden = true;
      drawAll();
    }
    function choose(k){
      var rt = RT[S.i]; if (!rt || S.drawn || S.q1 && S.q2) return; var fb = $('.ms-exfb', act);
      if (k === rt.to) { SFX.chime(); S.drawn = true; S.rode = false; save(); paint(); var e = naRouteEnds(rt, S.i); $$('.arr.cur', svg).forEach(function(p){ p.remove(); }); naDraw(svg, naArrowD(e[0], e[1], rt.bend), 'a-' + rt.k + ' cur', true); render(true); return; }
      SFX.miss(); var r = rOf(k);
      if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 ' + (k === rt.from ? 'That is where the ' + esc(rt.good.toLowerCase()) + ' comes from. Who <b>needs</b> it?' : 'Check the chart. Does ' + esc(r.n) + ' need ' + esc(rt.good.toLowerCase()) + '? Read its Needs line.') + '</div>';
    }
    dragger(crate, function(moved, t){ if (moved && t) choose(t.dataset.r); }, '.ms-rm-target');
    $$('.ms-rm-target', m).forEach(function(t){ t.addEventListener('click', function(){ choose(t.dataset.r); }); });
    function render(justDrew){
      paint(); var N = RT.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.i < RT.length) { var rt = RT[S.i], tt = 'Route '+(S.i+1)+' of '+RT.length+': '+rt.good;
        if (!S.drawn) { act.innerHTML = stepCard(S.i + 1, N, tt, '<p class="ms-rm-cargo"><span class="ic">'+rt.ic+'</span><span>A crate of <b>'+esc(rt.good.toLowerCase())+'</b> from <b>'+esc(rOf(rt.from).n)+'</b>.</span></p><p class="ms-wm-do">👆 Which region <b>needs</b> '+esc(rt.good.toLowerCase())+'? Check the chart. Then drag the crate there, or tap that region on the map or in the chart.</p><div class="ms-exfb" aria-live="polite"></div>'); return; }
        if (!S.rode) { var ks = Object.keys(V), sh = (S.i * 2 + 1) % ks.length; ks = ks.slice(sh).concat(ks.slice(0, sh));
          act.innerHTML = stepCard(S.i + 1, N, tt, '<div class="ms-vd-thanks">✅ '+esc(rOf(rt.to).n)+' needs '+esc(rt.good.toLowerCase())+'. '+esc(rt.why)+'</div><p>How will the '+esc(rt.good.toLowerCase())+' travel?</p><div class="ms-pchoices">'+ks.map(function(k){ return '<button type="button" class="ms-btn ms-rm-v" data-v="'+k+'">'+esc(V[k])+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div>');
          $$('.ms-rm-v', act).forEach(function(b){ b.onclick = function(){ var k = b.dataset.v;
            if (rt.ok.indexOf(k) < 0) { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc((rt.no||{})[k] || 'Can that get there? Look at the map.')+'</div>'; return; }
            SFX.click(); $$('.ms-rm-v', act).forEach(function(x){ x.disabled = true; }); b.classList.add('ok');
            var p = $('.arr.cur', svg); S.vs = S.vs || {}; S.vs[rt.k] = k; if (p) { p.classList.remove('cur'); naRide(svg, p, V[k].split(' ')[0] + rt.ic, 2400, function(){ S.rode = true; save(); render(); }); } else { S.rode = true; save(); render(); }
            if (rt.allOk) $('.ms-exfb', act).innerHTML = '<div class="ms-vd-thanks">🙂 '+esc(rt.allOk)+'</div>'; }; });
          return; }
        act.innerHTML = stepCard(S.i + 1, N, tt, '<div class="ms-vd-thanks">✅ The '+esc(rt.good.toLowerCase())+' arrived in '+esc(rOf(rt.to).n)+'. That arrow is a trade route.</div><button type="button" class="ms-btn big ms-rm-next">'+(S.i + 1 < RT.length ? 'Next crate ➡️' : 'Look at my map ➡️')+'</button>');
        $('.ms-rm-next', act).onclick = function(){ SFX.click(); S.i++; S.drawn = false; S.rode = false; save(); render(); };
        return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1400);
        else { ST.gal = ST.gal||{}; ST.gal.routes = 1; save(); galleryCheck(); SFX.fanfare(); if (!calm()) svg.classList.add('glow'); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1500); } });
      act.innerHTML = stepCard(S.q1 ? N : N - 1, N, q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: breakfast (Gallery · your breakfast's map) ══ */
  function modBreakfast(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var F = DATA.trFoods || [], R = DATA.trRegions || [];
    ST.bk = ST.bk || {seen:{}, order:[], q:false}; var S = ST.bk; S.order = S.order || [];
    var m = shell('ms-bk-mod', cfg), K = [150, 735];
    var kit = '<g class="kit"><rect x="'+(K[0]-110)+'" y="'+(K[1]-34)+'" width="220" height="62" rx="12"/><text x="'+K[0]+'" y="'+(K[1]+8)+'" text-anchor="middle">🏠 Your kitchen</text></g>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-bk-stage"><div class="ms-bk-tray"><div class="h">Breakfast tray</div><div class="row">'+F.map(function(f){ return '<button type="button" class="ms-bk-food" data-k="'+f.k+'"><span>'+f.ic+'</span><b>'+esc(f.n)+'</b></button>'; }).join('')+'</div></div><div class="ms-bk-mapw">'+naSVG('ms-bk-map', {extra: kit})+'</div></div><div class="ms-bk-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-bk-act', m), svg = $('.ms-bk-map', m);
    function fOf(k){ for (var i = 0; i < F.length; i++) if (F[i].k === k) return F[i]; }
    function arrow(f, j, anim){ var a = naPt(f.a || f.from), b = [K[0] + (j - 2) * 30, K[1] - 34];
      var pa = naDraw(svg, naArrowD(a, b, f.from === 'ca' ? 0.25 : -0.18), 'bk', anim);
      var t = document.createElementNS('http://www.w3.org/2000/svg', 'text'); t.setAttribute('class', 'fi'); t.setAttribute('x', a[0]); t.setAttribute('y', a[1] + 8); t.setAttribute('text-anchor', 'middle'); t.textContent = f.ic; $('.veh', svg).appendChild(t); return pa; }
    function paint(){ $('.arrows', svg).innerHTML = ''; $('.veh', svg).innerHTML = ''; S.order.forEach(function(k, j){ arrow(fOf(k), F.indexOf(fOf(k)), false); });
      $$('.ms-bk-food', m).forEach(function(b){ b.classList.toggle('done', !!S.seen[b.dataset.k]); b.setAttribute('aria-pressed', !!S.seen[b.dataset.k]); });
      $$('.rg', svg).forEach(function(p){ p.classList.toggle('lit', S.order.some(function(k){ return fOf(k).from === p.dataset.r; })); }); }
    $$('.ms-bk-food', m).forEach(function(b){ b.onclick = function(){ var k = b.dataset.k, f = fOf(k); if (S.seen[k] || S.q) return;
      SFX.chime(); S.seen[k] = 1; S.order.push(k); save(); var lab = svg.querySelector('.lb.l-' + f.from);
      fly(b, lab, '<span style="font-size:30px">'+f.ic+'</span>', 700).then(function(){ paint(); var all = $$('.arr.bk', svg); var last = all[all.length - 1]; if (last) { last.remove(); arrow(f, F.indexOf(f), true); } render(); }); }; });
    function render(){
      paint(); var n = S.order.length, N = F.length + 1;
      if (S.q) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (n < F.length) { var last = n ? fOf(S.order[n-1]) : null;
        act.innerHTML = stepCard(n + 1, N, 'Tap a food', (last ? '<div class="ms-vd-thanks">✅ <b>'+esc(last.n)+':</b> '+esc(last.t)+'</div>' : '') + '<p class="ms-wm-do">👆 Tap a food on the breakfast tray: '+F.filter(function(f){ return !S.seen[f.k]; }).map(function(f){ return esc(f.n); }).join(', ')+'. ('+n+' of '+F.length+')</p>'); return; }
      var cq = choiceQ(cfg.q, 1, function(){ ST.gal = ST.gal||{}; ST.gal.breakfast = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1500); });
      act.innerHTML = stepCard(N, N, cfg.q.title, '<div class="ms-vd-thanks">✅ <b>'+esc(fOf(S.order[n-1]).n)+':</b> '+esc(fOf(S.order[n-1]).t)+'</div>' + cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: shiptag (Exhibit Floor · the shipping tag on the wall map) ══ */
  function modShiptag(cfg){
    var rta = document.getElementById(cfg.routeId || 'journal-route');
    var F = (cfg.fields || []).map(function(f){ var ta = document.getElementById(f.id); return ta ? {f:f, ta:ta, home:null} : null; }).filter(Boolean); if (!rta || F.length < 4) return;
    var RT = DATA.trRoutes || [], V = DATA.trVeh || {}, NEED = cfg.wordMin || 6;
    ST.sg = ST.sg || {step:1, r:null, open:false}; var S = ST.sg;
    var m = shell('ms-sg-mod', cfg);
    function rtOf(k){ for (var i = 0; i < RT.length; i++) if (RT[i].k === k) return RT[i]; return null; }
    function rOf(k){ var R = DATA.trRegions || []; for (var i = 0; i < R.length; i++) if (R[i].k === k) return R[i]; return {n:k}; }
    m.insertAdjacentHTML('beforeend', '<div class="ms-sg-act"></div><div class="ms-sg-stage" hidden><div class="ms-sg-wall"><div class="lbl">THE CURATOR\'S TRADE ROUTE MAP</div>'+naSVG('ms-sg-map')+'</div><div class="ms-sg-tag"><span class="eye" aria-hidden="true"></span><span class="str" aria-hidden="true"></span><div class="hd">SHIPPING TAG</div><div class="ft"></div><ol class="ln"></ol><div class="by"></div></div></div><div class="ms-sg-end"></div>');
    var blk = F[0].ta.closest('.activity-body') || F[0].ta.parentNode;
    [{ta:rta}].concat(F).forEach(function(x){ x.home = document.createComment('sg-home'); x.ta.parentNode.insertBefore(x.home, x.ta); });
    var rhome = rta.previousSibling;
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild);
    $$('p, ul, .callout, .textbox-prompt', blk).forEach(function(e){ if (!m.contains(e)) e.classList.add('ms-hide-on'); });
    var act = $('.ms-sg-act', m), show = $('.ms-sg-stage', m), end = $('.ms-sg-end', m), svg = $('.ms-sg-map', m), curUpd = null;
    function goHome(){ if (rta.previousSibling !== rhome) rhome.parentNode.insertBefore(rta, rhome.nextSibling); F.forEach(function(x){ if (x.ta.previousSibling !== x.home) x.home.parentNode.insertBefore(x.ta, x.home.nextSibling); }); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function okF(x){ return words(x.ta.value) >= NEED && new RegExp(x.f.re, 'i').test(x.ta.value); }
    function miss(){ var o = []; F.forEach(function(x){ var n = words(x.ta.value); if (n < NEED) o.push(x.f.t + ': add ' + (NEED - n) + ' more word' + (NEED - n === 1 ? '' : 's') + '.'); else if (!new RegExp(x.f.re, 'i').test(x.ta.value)) o.push(x.f.t + ': answer the question, ' + x.f.q.charAt(0).toLowerCase() + x.f.q.slice(1)); }); return o; }
    function view(){ var rt = rtOf(S.r); if (!rt) return;
      $('.ft', show).innerHTML = '<span><i>FROM</i> '+esc(rOf(rt.from).n)+'</span><span class="g">'+rt.ic+' '+esc(rt.good)+'</span><span><i>TO</i> '+esc(rOf(rt.to).n)+'</span>';
      $('.ln', show).innerHTML = F.map(function(x){ return '<li><b>'+esc(x.f.t)+':</b> '+esc(x.ta.value.trim())+'</li>'; }).join('');
      var nm = sget(NAMEK,''); $('.by', show).textContent = nm ? 'Tag by ' + nm + ', Trade & Choice Curator' : 'Tag by a Trade & Choice Curator';
      $('.arrows', svg).innerHTML = ''; $('.veh', svg).innerHTML = ''; var j = RT.indexOf(rt), e = naRouteEnds(rt, j), p = naDraw(svg, naArrowD(e[0], e[1], rt.bend), 'mine', false);
      if (S.open) naRide(svg, p, (V[rt.ok[0]] || '🚚').split(' ')[0] + rt.ic, 1, null);
      $$('.rg', svg).forEach(function(q){ q.classList.toggle('lit', q.dataset.r === rt.from || q.dataset.r === rt.to); });
      show.classList.toggle('open', !!S.open); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; show.hidden = S.step < 3; rta.classList.add('ms-gi-away'); F.forEach(function(x){ x.ta.classList.toggle('ms-gi-away', S.step !== 2); });
      if (S.step === 1 || !S.r) { S.step = 1; goHome();
        act.innerHTML = stepCard(1, 3, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-pchoices col">'+RT.map(function(rt){ return '<button type="button" class="ms-btn'+(rt.k === S.r ? '' : ' alt')+' ms-sg-r" data-k="'+rt.k+'">'+rt.ic+' '+esc(rt.label)+'</button>'; }).join('')+'</div>');
        $$('.ms-sg-r', act).forEach(function(b){ b.onclick = function(){ var rt = rtOf(b.dataset.k); SFX.click(); S.r = rt.k; S.step = 2; rta.value = rt.label; rta.dispatchEvent(new Event('input',{bubbles:true})); save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); }; });
        return; }
      if (S.step === 2) { goHome(); var rt = rtOf(S.r);
        act.innerHTML = stepCard(2, 3, cfg.s2T, '<p class="ms-gi-ok">✅ Your route: <b>'+rt.ic+' '+esc(rt.label)+'</b> <button type="button" class="ms-btn alt ms-sg-back">↩️ Pick another route</button></p><p>'+esc(cfg.s2||'')+'</p>' + F.map(function(x, i){ return '<div class="ms-bs-f" data-i="'+i+'"><div class="ms-bs-fh"><b>'+esc(x.f.t)+'</b><span class="ms-sg-q">'+esc(x.f.q)+'</span><button type="button" class="ms-btn alt ms-sg-start" data-i="'+i+'">✏️ '+esc(x.f.starter)+'</button><span class="ms-chip"></span></div><div class="ms-bs-box"></div></div>'; }).join('') +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-sg-next">See my tag ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        F.forEach(function(x, i){ $('.ms-bs-f[data-i="'+i+'"] .ms-bs-box', act).appendChild(x.ta); });
        var fb = $('.ms-gi-fb', act);
        var upd = function(){ F.forEach(function(x, i){ var c = $('.ms-bs-f[data-i="'+i+'"] .ms-chip', act), g = okF(x); c.className = 'ms-chip' + (g ? ' ok' : ''); c.textContent = g ? '✓ ready' : Math.min(words(x.ta.value), NEED) + ' of ' + NEED + ' words'; });
          var o = miss(); $('.ms-sg-next', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $('.ms-sg-back', act).onclick = function(){ SFX.click(); S.step = 1; save(); render(); };
        $$('.ms-sg-start', act).forEach(function(b){ b.onclick = function(){ var x = F[+b.dataset.i], t = x.f.starter; if (x.ta.value.indexOf(t) < 0) x.ta.value = (x.ta.value.trim() ? x.ta.value.replace(/\s*$/,'') + ' ' : '') + t + ' ';
          x.ta.focus(); x.ta.setSelectionRange(x.ta.value.length, x.ta.value.length); x.ta.dispatchEvent(new Event('input',{bubbles:true})); upd(); }; });
        $('.ms-sg-next', act).onclick = function(){ var o = miss(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; }
          SFX.click(); S.step = 3; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); view(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(3, 3, cfg.s3T, '<p>'+esc(cfg.s3||'')+'</p><button type="button" class="ms-btn big ms-sg-go">🏷️ '+esc(cfg.openT||'Tie on my tag')+'</button>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-sg-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-sg-go', end); if (gb) gb.onclick = function(){ S.open = true; save(); SFX.fanfare(); show.classList.remove('tie'); void show.offsetWidth; if (!calm()) show.classList.add('tie');
        view(); var rt = rtOf(S.r), p = $('.arr.mine', svg); $('.veh', svg).innerHTML = ''; if (p) naRide(svg, p, (V[rt.ok[0]] || '🚚').split(' ')[0] + rt.ic, 2600, null);
        render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 2400);
        setTimeout(function(){ show.classList.remove('tie'); }, 3500); optiNod('assignment'); check(); };
      $('.ms-sg-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    F.forEach(function(x){ x.ta.addEventListener('input', function(){ if (curUpd && S.step === 2) curUpd(); }); });
    var items = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && items.length && items.every(on)) markDone('assignment'); }
    items.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.09_07 (Marketplace Decision: Costs and Benefits) ══════════
     DATA.dbTiles (8 harbor tiles: side c / b), DATA.dbYears (captions for the harbor years), DATA.puItems (6 things around the puppy)
     - toystand   Lobby: grab the blinking $5 toy, then find you can't buy the lunch snack you came for; 2 questions
     - decboard   Gallery main attraction: slide 8 tiles into Costs / Benefits one at a time, Heavy or Light on each, council vote, then a drawn harbor town runs Year 0 → 10 on a slider; 2 questions
     - freepuppy  Gallery: tap 6 things around a FREE puppy (4 hidden costs, 2 benefits); question; Evidence Q1 box moves into the last step
     - mytiles    Exhibit Floor: pick fruit or game → the Costs and Benefits boxes move into the step and become tiles → decision → DECIDED stamp; empty gold frame waits */

  function dbBoardHTML(cls, q){
    return '<div class="ms-db-board '+(cls||'')+'"><div class="q"><small>DECISION BOARD</small><b>'+esc(q)+'</b></div><div class="cols">' +
      '<div class="ms-db-col c" data-s="c" role="button" tabindex="0" aria-label="Costs column"><span class="h"><i>−</i> Costs<small>what is given up</small></span><div class="in"></div></div>' +
      '<div class="ms-db-col b" data-s="b" role="button" tabindex="0" aria-label="Benefits column"><span class="h"><i>+</i> Benefits<small>what is gained</small></span><div class="in"></div></div></div></div><div class="ms-db-legs" aria-hidden="true"><i></i><i></i></div>';
  }

  /* ══ MODULE: toystand (Lobby · the Shiny Toy Stand) ══ */
  function modToystand(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    var STP = cfg.steps || [];
    ST.ty = ST.ty || {st:0, q1:false, q2:false}; var S = ST.ty;
    var m = shell('ms-ty-mod', cfg);
    var stripes = ''; for (var i = 0; i < 9; i++) stripes += '<path d="M'+(140 + i*50)+' 40 h50 l-4 34 q-21 14 -42 0 z" fill="'+(i % 2 ? '#FFF4DA' : '#C0392B')+'"/>';
    var scene = '<svg viewBox="0 0 600 300" class="ms-ty-scene" role="img" aria-label="A drawing of a market stand with a striped awning. On the counter are a shiny blinking toy with a BUY ME sign and a lunch snack bag. Each costs 5 dollars. Your wallet with one 5 dollar bill and your basket are in front.">' +
      '<rect width="600" height="300" fill="#F3E7CF"/><rect y="236" width="600" height="64" fill="#C9A574"/><rect y="236" width="600" height="3" fill="#8A5A34"/>' +
      '<rect x="150" y="60" width="8" height="180" fill="#6B4423"/><rect x="572" y="60" width="8" height="180" fill="#6B4423"/><rect x="140" y="32" width="450" height="10" fill="#6B4423"/>' + stripes +
      // seller behind the counter
      '<g class="seller"><circle cx="500" cy="118" r="17" fill="#C68B5A"/><path d="M483 114 q17 -24 34 0 q-17 -9 -34 0" fill="#3B2A1E"/><path d="M474 176 q0 -38 26 -38 q26 0 26 38 z" fill="#1A8A7D"/><circle cx="494" cy="118" r="2" fill="#2B1B10"/><circle cx="506" cy="118" r="2" fill="#2B1B10"/><path class="mouth" d="M494 126 q6 5 12 0" stroke="#2B1B10" stroke-width="2" fill="none"/></g>' +
      '<g class="say"><path d="M330 62 h150 a8 8 0 0 1 8 8 v30 a8 8 0 0 1 -8 8 h-8 l10 14 l-26 -14 h-126 a8 8 0 0 1 -8 -8 v-30 a8 8 0 0 1 8 -8z" fill="#fff" stroke="#0E1C42" stroke-width="2"/><text x="405" y="82" text-anchor="middle">Sorry! The snack is $5.</text><text x="405" y="100" text-anchor="middle">Your wallet is empty.</text></g>' +
      // counter and till
      '<rect x="150" y="172" width="430" height="12" fill="#A7774A"/><rect x="158" y="184" width="414" height="54" fill="#8A5A34"/><path d="M158 202 h414 M158 220 h414" stroke="#7A4E2C" stroke-width="2"/>' +
      '<g class="till"><rect x="524" y="150" width="40" height="22" rx="3" fill="#5E6B7A"/><rect x="530" y="140" width="28" height="12" rx="2" fill="#8795A6"/><rect x="528" y="166" width="32" height="4" fill="#2E3A48"/></g>' +
      // the snack: a paper bag standing on the counter
      '<g class="snack"><path d="M352 172 l4 -46 h44 l4 46 z" fill="#D9B98A" stroke="#8A6A3C" stroke-width="2"/><path d="M356 126 l6 -8 h32 l6 8" fill="#C9A574" stroke="#8A6A3C" stroke-width="2"/><circle cx="378" cy="150" r="9" fill="#D9412B"/><path d="M378 141 q3 -6 7 -5" stroke="#3E8E41" stroke-width="2.5" fill="none"/><rect x="322" y="186" width="112" height="18" rx="3" fill="#FFFDF6" stroke="#5A3A1E"/><text x="378" y="199" text-anchor="middle" class="lab">LUNCH SNACK $5</text>' +
        '<g class="nobuy"><rect x="334" y="138" width="88" height="24" rx="4" fill="#C0392B" transform="rotate(-8 378 150)"/><text x="378" y="155" text-anchor="middle" transform="rotate(-8 378 150)">CAN\'T BUY</text></g></g>' +
      // the shiny toy: a spinning top with lights, and its sign on a stick
      '<g class="sign"><rect x="196" y="146" width="3" height="26" fill="#6B4423"/><rect x="164" y="108" width="68" height="40" rx="4" fill="#FFE04A" stroke="#B8600B" stroke-width="2"/><text x="198" y="125" text-anchor="middle" class="buy">BUY ME!</text><text x="198" y="142" text-anchor="middle" class="buy">$5</text></g>' +
      '<g class="toy"><g transform="translate(272 172) scale(1.35)"><path d="M-22 -22 h44 l-18 20 h-8 z" fill="#7B4FC4" stroke="#4A2C82" stroke-width="2"/><ellipse cx="0" cy="-22" rx="22" ry="7" fill="#F25CA2" stroke="#4A2C82" stroke-width="2"/><rect x="-3" y="-40" width="6" height="14" fill="#4A2C82"/><circle cx="0" cy="-43" r="6" fill="#FFE04A" stroke="#B8600B" stroke-width="1.5"/>' +
        '<circle class="lt l1" cx="-12" cy="-22" r="3.4"/><circle class="lt l2" cx="0" cy="-20" r="3.4"/><circle class="lt l3" cx="12" cy="-22" r="3.4"/><path class="shine" d="M-34 -44 l4 -8 l4 8 l8 4 l-8 4 l-4 8 l-4 -8 l-8 -4z M30 -50 l3 -6 l3 6 l6 3 l-6 3 l-3 6 l-3 -6 l-6 -3z" fill="#FFE04A"/></g></g>' +
      // your wallet and your basket, both on the floor in front
      '<g class="wallet"><rect x="34" y="246" width="92" height="46" rx="8" fill="#6B4423" stroke="#3B2A1E" stroke-width="2"/><path d="M34 262 h92" stroke="#3B2A1E" stroke-width="2"/><circle cx="112" cy="272" r="4" fill="#E9C878"/><text x="80" y="222" text-anchor="middle" class="cap">Your wallet</text><text x="76" y="284" text-anchor="middle" class="empty">empty</text></g>' +
      '<g class="bill"><rect x="50" y="228" width="60" height="28" rx="3" fill="#9CC79A" stroke="#3E7A45" stroke-width="2"/><text x="80" y="248" text-anchor="middle">$5</text></g>' +
      '<g class="basket"><path d="M262 262 h96 l-10 32 h-76 z" fill="#C68A3E" stroke="#7A4E1E" stroke-width="2"/><path d="M268 272 h84 M272 282 h76" stroke="#7A4E1E" stroke-width="1.5"/><path d="M272 262 q38 -40 76 0" fill="none" stroke="#7A4E1E" stroke-width="3"/><rect x="274" y="268" width="72" height="16" rx="3" fill="#FFFDF6" stroke="#7A4E1E"/><text x="310" y="280" text-anchor="middle" class="cap">Your basket</text></g></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-ty-wrap"><div class="ms-ty-stage">'+scene+'</div><div class="ms-ty-act" aria-live="polite"></div></div>');
    after(anchor, m);
    var act = $('.ms-ty-act', m), stage = $('.ms-ty-stage', m), svg = $('.ms-ty-scene', m);
    function render(){
      stage.className = 'ms-ty-stage s' + S.st; var N = STP.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (S.st < STP.length) { var sp = STP[S.st];
        act.innerHTML = stepCard(S.st + 1, N, sp.t, (S.st ? '<div class="ms-vd-thanks">✅ '+esc(STP[S.st-1].done)+'</div>' : '') + '<p>'+esc(sp.p)+'</p><button type="button" class="ms-btn big ms-ty-go">'+esc(sp.btn)+'</button>');
        $('.ms-ty-go', act).onclick = function(){ if (S.st === 0) SFX.chime(); else SFX.miss(); S.st++; save(); stage.classList.add('anim'); render(); svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); };
        return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? N : N - 1, N, q.title, (S.q1 ? '' : '<div class="ms-vd-thanks">🙁 '+esc(STP[STP.length-1].done)+'</div>') + cq.html); cq.bind(act);
    }
    render(); if (S.q2) markDone('scene');
  }

  /* ══ MODULE: decboard (Gallery main attraction · the Decision Board, then build it and watch) ══ */
  function dbTown(){
    function hillY(x){ // the hill is a quadratic from (0,232) over (115,96) to (262,232)
      var a = 0 - 2*115 + 262, b = 2*115, t = (-b + Math.sqrt(b*b + 4*a*x)) / (2*a); if (!isFinite(t)) t = x / 230; return (1-t)*(1-t)*232 + 2*t*(1-t)*96 + t*t*232; }
    var TX = [38, 62, 88, 112, 138, 164, 190, 214, 76, 126, 176, 150], CUT = [0, 0, 0, 0, 0, 0, 3, 2, 2, 1, 1, 1], trees = '';
    TX.forEach(function(x, i){ var top = hillY(x), y = Math.min(226, top + 14 + (i > 7 ? 26 : 6) + (i % 3) * 5);
      trees += '<g class="tree"'+(CUT[i] ? ' data-cut="'+CUT[i]+'"' : '')+'><rect class="stump" x="'+(x-3)+'" y="'+(y-6)+'" width="6" height="6"/><g class="top"><rect x="'+(x-2.5)+'" y="'+(y-16)+'" width="5" height="16" fill="#6B4528"/><path d="M'+x+' '+(y-46)+' l14 22 h-28 z M'+x+' '+(y-36)+' l16 24 h-32 z" fill="#2F7D46"/></g></g>'; });
    function house(x, y, c, from){ return '<g'+(from ? ' data-from="'+from+'" class="pop"' : '')+'><rect x="'+x+'" y="'+(y-22)+'" width="30" height="22" fill="'+c+'" stroke="#5A3A1E" stroke-width="1.5"/><path d="M'+(x-4)+' '+(y-22)+' l19 -15 l19 15 z" fill="#8E2E22"/><rect x="'+(x+12)+'" y="'+(y-12)+'" width="7" height="12" fill="#5A3A1E"/></g>'; }
    function man(x, y, from, c){ return '<g data-from="'+from+'" class="pop"><circle cx="'+x+'" cy="'+(y-17)+'" r="3.4" fill="#C68B5A"/><path d="M'+x+' '+(y-13)+' V'+(y-5)+' M'+x+' '+(y-5)+' l-3 5 M'+x+' '+(y-5)+' l3 5 M'+x+' '+(y-11)+' l-4 4 M'+x+' '+(y-11)+' l4 3" stroke="'+(c||'#2E3A48')+'" stroke-width="2.2" stroke-linecap="round" fill="none"/></g>'; }
    function ship(x, y, from){ return '<g data-from="'+from+'" class="pop ship"><path d="M'+(x-34)+' '+(y-10)+' h68 l-9 14 h-50 z" fill="#5A3A1E"/><rect x="'+(x-30)+'" y="'+(y-13)+'" width="60" height="3" fill="#E9D7A8"/><path d="M'+(x-10)+' '+(y-13)+' V'+(y-52)+' M'+(x+12)+' '+(y-13)+' V'+(y-44)+'" stroke="#3B2A1E" stroke-width="2.5"/><path d="M'+(x-8)+' '+(y-50)+' q20 10 0 30 z M'+(x+14)+' '+(y-42)+' q16 8 0 24 z" fill="#FFFDF6" stroke="#B9A77A"/>' +
      '<g class="noise" data-from="'+Math.max(5, from)+'"><path d="M'+(x+40)+' '+(y-34)+' q8 8 0 16 M'+(x+48)+' '+(y-40)+' q12 14 0 28 M'+(x+56)+' '+(y-46)+' q16 20 0 40" fill="none" stroke="#C0392B" stroke-width="2.5" stroke-linecap="round"/></g></g>'; }
    var posts1 = '', posts2 = ''; for (var i = 0; i < 10; i++) { posts1 += '<rect x="'+(304 + i*28)+'" y="256" width="4" height="16" data-px="'+(304 + i*28 - 296)+'"/>'; posts2 += '<rect x="'+(290 + i*28)+'" y="312" width="4" height="16" data-px="'+(290 + i*28 - 282)+'"/>'; }
    return '<svg viewBox="0 0 640 360" class="ms-db-svg" role="img" aria-label="A simple model of a town by the sea. A hill with trees is on the left. As the years go by, trees are cut, docks reach out over the water, ships arrive, and the town grows.">' +
      '<rect width="640" height="360" fill="#CFE8F7"/><circle cx="560" cy="52" r="24" fill="#F7D154"/>' +
      '<path d="M0 232 Q115 96 262 232 Z" fill="#8FBF72"/><rect y="230" width="640" height="130" fill="#6FB3D9"/><path d="M0 230 H292 Q300 290 276 360 H0 Z" fill="#D9C79A"/><path d="M292 230 Q300 290 276 360" fill="none" stroke="#B89B5E" stroke-width="3"/>' +
      '<path class="wave" d="M330 290 q10 -6 20 0 t20 0 M470 336 q10 -6 20 0 t20 0 M540 276 q10 -6 20 0 t20 0 M380 344 q10 -6 20 0 t20 0" fill="none" stroke="#BFE0F2" stroke-width="2.5" stroke-linecap="round"/>' +
      '<g class="trees">'+trees+'</g>' +
      house(30, 268, '#F3E7CF') + house(84, 276, '#EBC1B2') + house(140, 266, '#F3E7CF') + house(52, 318, '#BCD9AB', 3) + house(120, 322, '#F4C37C', 5) + house(186, 300, '#EBC1B2', 7) + house(20, 350, '#F3E7CF', 9) +
      '<g data-from="3" class="pop"><rect x="214" y="222" width="62" height="32" fill="#A7774A" stroke="#5A3A1E" stroke-width="2"/><path d="M208 222 h74 l-10 -14 h-54 z" fill="#6B4423"/><rect x="236" y="234" width="18" height="20" fill="#5A3A1E"/><text x="245" y="218" text-anchor="middle" class="sm">storehouse</text></g>' +
      '<g class="dock d1"><rect class="deck" x="286" y="250" width="0" height="8" fill="#B98450" stroke="#5A3A1E" stroke-width="1.5"/><g class="posts" fill="#5A3A1E">'+posts1+'</g></g>' +
      '<g class="dock d2"><rect class="deck" x="272" y="306" width="0" height="8" fill="#B98450" stroke="#5A3A1E" stroke-width="1.5"/><g class="posts" fill="#5A3A1E">'+posts2+'</g></g>' +
      ship(392, 248, 3) + ship(500, 248, 5) + ship(420, 304, 8) +
      man(310, 250, 1) + man(326, 250, 1) + man(360, 250, 3, '#1A8A7D') + man(430, 250, 4) + man(470, 250, 5, '#B5432F') + man(300, 306, 6) + man(350, 306, 7, '#1A8A7D') +
      '<g data-from="4" class="pop"><rect x="340" y="240" width="10" height="10" fill="#C68A3E" stroke="#5A3A1E"/><rect x="351" y="240" width="10" height="10" fill="#C68A3E" stroke="#5A3A1E"/><rect x="345" y="230" width="10" height="10" fill="#C68A3E" stroke="#5A3A1E"/></g>' +
      man(170, 330, 7, '#7B4FC4') + '<g data-from="7" class="pop"><rect x="176" y="322" width="7" height="8" fill="#8E2E22"/></g>' + man(230, 290, 9, '#7B4FC4') + '<g data-from="9" class="pop"><rect x="236" y="282" width="7" height="8" fill="#8E2E22"/></g>' +
      '<g class="yr"><rect x="12" y="12" width="150" height="38" rx="8"/><text x="87" y="38" text-anchor="middle"></text></g></svg>';
  }
  function modDecboard(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var T = DATA.dbTiles || [], Y = DATA.dbYears || [];
    ST.db = ST.db || {i:0, w:{}, vote:null, vgo:false, yr:0, max:0, ygo:false, q1:false, q2:false}; var S = ST.db; S.w = S.w || {};
    var m = shell('ms-db-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-db-wrap"><div class="ms-db-stage"><div class="ms-db-boardw">'+dbBoardHTML('', cfg.q)+'<div class="ms-db-tray"><div class="ms-db-cur" role="img"></div></div></div>' +
      '<div class="ms-db-town" hidden>'+dbTown()+'<div class="ms-db-cnt" aria-live="polite"></div><p class="ms-credit">A simple model of a made-up town.</p></div></div><div class="ms-db-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-db-act', m), bw = $('.ms-db-boardw', m), town = $('.ms-db-town', m), svg = $('.ms-db-svg', m), cur = $('.ms-db-cur', m), cnt = $('.ms-db-cnt', m);
    function wi(){ for (var j = 0; j < T.length; j++) if (!S.w[T[j].k]) return j; return T.length; }
    function tileHTML(t, on){ var w = S.w[t.k]; return '<span class="ms-db-tl '+t.side+(w ? ' w' + w : '')+(on ? ' cur' : '')+'" data-k="'+t.k+'"><i>'+t.ic+'</i><span>'+esc(t.s)+'</span>'+(w ? '<em>'+(w === 'h' ? '🏋️ Heavy' : '🪶 Light')+'</em>' : '')+'</span>'; }
    function paintBoard(){ var k = wi(), sorting = S.i < T.length;
      ['c', 'b'].forEach(function(s){ $('.ms-db-col.'+s+' .in', m).innerHTML = T.slice(0, S.i).filter(function(t){ return t.side === s; }).map(function(t){ return tileHTML(t, !sorting && k < T.length && T[k].k === t.k); }).join(''); });
      if (sorting) { var t = T[S.i]; cur.hidden = false; cur.innerHTML = '<i>'+t.ic+'</i><span>'+esc(t.t)+'</span>'; cur.setAttribute('aria-label', 'Tile: ' + t.t); } else cur.hidden = true;
      $('.ms-db-tray', m).hidden = !sorting; m.classList.toggle('sorting', sorting); }
    var JOBS = [0, 10, 15, 25, 35, 50, 60, 70, 80, 90, 100], SHIPS = [0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3], BAGS = [0, 5, 8, 10, 10, 10, 10, 10, 10, 10, 10], LEFT = [12, 9, 7, 6, 6, 6, 6, 6, 6, 6, 6], D1 = [0, 50, 100, 150, 180, 240, 250, 260, 270, 280, 284], D2 = [0, 0, 0, 0, 0, 0, 80, 120, 180, 200, 220];
    function capOf(y){ for (var j = 0; j < Y.length; j++) if (y <= Y[j].to) return Y[j].t; return ''; }
    function drawTown(){ var y = S.yr;
      $$('[data-from]', svg).forEach(function(g){ g.classList.toggle('on', y >= +g.dataset.from); });
      $$('.tree', svg).forEach(function(g){ g.classList.toggle('cut', !!g.dataset.cut && y >= +g.dataset.cut); });
      [['.d1', D1[y]], ['.d2', D2[y]]].forEach(function(d){ var g = $(d[0], svg); $('.deck', g).setAttribute('width', d[1]); $$('.posts rect', g).forEach(function(r){ r.style.display = +r.dataset.px + 6 <= d[1] ? '' : 'none'; }); });
      $('.yr text', svg).textContent = y ? 'Year ' + y : 'Before';
      cnt.innerHTML = '<span>🌲 Trees on the hill: <b>'+LEFT[y]+'</b></span><span>💰 Bags of coins spent: <b>'+BAGS[y]+'</b></span><span>👷 Jobs: <b>'+JOBS[y]+'</b></span><span>🚢 Ships at the docks: <b>'+SHIPS[y]+'</b></span><span>📢 Noise: <b>'+(y < 3 ? 'quiet' : (y < 5 ? 'some' : 'loud'))+'</b></span>'; }
    function slider(){ return '<div class="ms-tr-slide ms-db-slide"><span>Before</span><input type="range" min="0" max="10" step="1" value="'+S.yr+'" aria-label="Years: drag to move forward in time"><span>Year 10</span></div><div class="ms-db-ticks" aria-hidden="true"><span style="left:10%">1</span><span style="left:50%">5</span><span style="left:100%">10</span></div><p class="ms-db-say" aria-live="polite">'+esc(capOf(S.yr))+'</p>'; }
    function bindSlider(reRenderAt10){ var r = $('.ms-db-slide input', act); if (!r) return; r.addEventListener('input', function(){ var was = S.max; S.yr = +r.value; S.max = Math.max(S.max, S.yr); save(); drawTown(); $('.ms-db-say', act).textContent = capOf(S.yr); if (S.yr === 1 || S.yr === 5 || S.yr === 10) SFX.click();
      if (reRenderAt10 && was < 10 && S.max >= 10) { SFX.chime(); render(); } }); }
    function place(side){
      if (S.i >= T.length) return; var t = T[S.i], fb = $('.ms-exfb', act);
      if (side === t.side) { SFX.chime(); S.i++; save(); render(); var last = $('.ms-db-col.'+side+' .in .ms-db-tl:last-child', m); if (last && !calm()) last.classList.add('drop'); return; }
      SFX.miss(); var col = $('.ms-db-col.'+side, m); col.classList.remove('no'); void col.offsetWidth; col.classList.add('no');
      if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 Read the tile again. Does the town <b>give this up</b>, or <b>gain</b> it?</div>';
    }
    dragger(cur, function(moved, t){ if (moved && t) place(t.dataset.s); }, '.ms-db-col');
    $$('.ms-db-col', m).forEach(function(c){ c.addEventListener('click', function(){ if (S.i < T.length) place(c.dataset.s); }); c.addEventListener('keydown', function(e){ if ((e.key === 'Enter' || e.key === ' ') && S.i < T.length) { e.preventDefault(); place(c.dataset.s); } }); });
    function tally(){ var o = {c:[0,0], b:[0,0]}; T.forEach(function(t){ o[t.side][S.w[t.k] === 'h' ? 0 : 1]++; }); return '<b>Costs:</b> '+o.c[0]+' heavy, '+o.c[1]+' light. <b>Benefits:</b> '+o.b[0]+' heavy, '+o.b[1]+' light.'; }
    function render(){
      var N = 6, k = wi(), inTown = S.vgo;
      bw.hidden = inTown; town.hidden = !inTown; if (inTown) drawTown(); else paintBoard();
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>' + slider(); bindSlider(false); return; }
      if (S.i < T.length) { var t = T[S.i];
        act.innerHTML = stepCard(1, N, cfg.sortT + ' · tile '+(S.i+1)+' of '+T.length, '<p class="ms-db-read"><span class="ic">'+t.ic+'</span><span>'+esc(t.t)+'</span></p><p class="ms-wm-do">👆 Is this a cost or a benefit for the town? Drag the tile into a column, or tap a button.</p>' +
          '<div class="ms-pchoices"><button type="button" class="ms-btn ms-db-p c" data-s="c">− Costs</button><button type="button" class="ms-btn ms-db-p b" data-s="b">+ Benefits</button></div><div class="ms-exfb" aria-live="polite"></div>');
        $$('.ms-db-p', act).forEach(function(b){ b.onclick = function(){ place(b.dataset.s); }; }); return; }
      if (k < T.length) { var w = T[k];
        act.innerHTML = stepCard(2, N, cfg.weighT + ' · tile '+(k+1)+' of '+T.length, (k === 0 ? '<div class="ms-vd-thanks">✅ All eight tiles are on the board: 4 costs and 4 benefits.</div><p>'+esc(cfg.weighP)+'</p>' : '') + '<p class="ms-db-read '+w.side+'"><span class="ic">'+w.ic+'</span><span><b>'+(w.side === 'c' ? 'Cost' : 'Benefit')+':</b> '+esc(w.t)+'</span></p>' +
          '<div class="ms-pchoices"><button type="button" class="ms-btn ms-db-w" data-w="h">🏋️ Heavy: it matters a lot</button><button type="button" class="ms-btn ms-db-w" data-w="l">🪶 Light: it matters a little</button></div>');
        $$('.ms-db-w', act).forEach(function(b){ b.onclick = function(){ SFX.click(); S.w[w.k] = b.dataset.w; save(); render(); }; }); return; }
      if (!S.vgo) {
        if (!S.vote) { act.innerHTML = stepCard(3, N, cfg.voteT, '<div class="ms-vd-thanks">⚖️ Your board: '+tally()+'</div><p>'+esc(cfg.voteP)+'</p><div class="ms-pchoices col"><button type="button" class="ms-btn ms-db-v" data-v="yes">'+esc(cfg.yes)+'</button><button type="button" class="ms-btn ms-db-v" data-v="no">'+esc(cfg.no)+'</button></div>');
          $$('.ms-db-v', act).forEach(function(b){ b.onclick = function(){ SFX.chime(); S.vote = b.dataset.v; save(); render(); }; }); return; }
        act.innerHTML = stepCard(3, N, cfg.voteT, '<div class="ms-vd-thanks">🗳️ '+esc(S.vote === 'yes' ? cfg.afterYes : cfg.afterNo)+'</div><p>Now watch what the harbor does to the town.</p><button type="button" class="ms-btn big ms-db-vgo">Go to the town ➡️</button>');
        $('.ms-db-vgo', act).onclick = function(){ SFX.click(); S.vgo = true; S.yr = 0; S.max = 0; save(); render(); m.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }; return; }
      if (!S.ygo) { var done = S.max >= 10;
        act.innerHTML = stepCard(4, N, cfg.yearsT, '<p class="ms-wm-do">👆 '+esc(cfg.yearsP)+'</p>' + slider() + (done ? '<button type="button" class="ms-btn big ms-db-ygo">Next ➡️</button>' : ''));
        bindSlider(true); var g = $('.ms-db-ygo', act); if (g) g.onclick = function(){ SFX.click(); S.ygo = true; save(); render(); }; return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { ST.gal = ST.gal||{}; ST.gal.board = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? 6 : 5, N, q.title, slider() + cq.html); cq.bind(act); bindSlider(false);
    }
    render();
  }

  /* ══ MODULE: freepuppy (Gallery · the Free Puppy booth) ══ */
  function modFreepuppy(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var I = DATA.puItems || [], ta = document.getElementById(cfg.ta || 'journal-q1'), NEED = cfg.wordMin || 10;
    ST.pup = ST.pup || {seen:{}, last:null, q:false, done:false}; var S = ST.pup;
    var m = shell('ms-pu-mod', cfg);
    var NAME = {leash:'Leash', bowl:'Food bowl', broom:'Broom', bed:'Dog bed', heart:'Heart tag', ball:'Ball'};
    var POS = {leash:[84,150], bowl:[176,268], broom:[512,200], bed:[430,262], heart:[300,214], ball:[232,292]};
    var art = {
      leash: '<path d="M70 96 q30 40 8 86 q-10 22 14 30" fill="none" stroke="#B5432F" stroke-width="6" stroke-linecap="round"/><ellipse cx="96" cy="216" rx="9" ry="6" fill="none" stroke="#8795A6" stroke-width="3"/>',
      bowl: '<path d="M146 262 h60 l-8 26 h-44 z" fill="#2E5FA8" stroke="#1D3E73" stroke-width="2"/><ellipse cx="176" cy="262" rx="30" ry="7" fill="#8A5A34" stroke="#1D3E73" stroke-width="2"/><circle cx="166" cy="260" r="3" fill="#6B4423"/><circle cx="178" cy="258" r="3" fill="#6B4423"/><circle cx="188" cy="261" r="3" fill="#6B4423"/>',
      broom: '<path d="M536 112 L500 276" stroke="#A7774A" stroke-width="6" stroke-linecap="round"/><path d="M484 268 l34 8 l-6 16 l-36 -8 z" fill="#E3B94F" stroke="#8A6A1E" stroke-width="2"/><ellipse cx="466" cy="296" rx="22" ry="5" fill="#D9C24A" opacity=".8"/>',
      bed: '<ellipse cx="430" cy="282" rx="52" ry="14" fill="#7B4FC4" stroke="#4A2C82" stroke-width="2"/><ellipse cx="430" cy="276" rx="38" ry="8" fill="#B79BE6"/>',
      heart: '<path d="M300 222 c-12 -10 -14 -20 -6 -22 c4 -1 6 2 6 4 c0 -2 2 -5 6 -4 c8 2 6 12 -6 22z" fill="#E0457B" stroke="#8E1F47" stroke-width="1.5"/>',
      ball: '<circle cx="232" cy="290" r="11" fill="#F28C1B" stroke="#B8600B" stroke-width="2"/><path d="M222 286 q10 6 20 0" fill="none" stroke="#fff" stroke-width="2"/>' };
    var scene = '<svg viewBox="0 0 600 320" class="ms-pu-scene" role="img" aria-label="A drawing of a booth with a sign that says FREE PUPPY, 0 dollars. A puppy sits in a box. Around it are a leash on a hook, a food bowl, a broom by a small puddle, a dog bed, a heart tag on its collar, and a ball.">' +
      '<rect width="600" height="320" fill="#F3E7CF"/><rect y="296" width="600" height="24" fill="#C9A574"/><rect y="296" width="600" height="3" fill="#8A5A34"/>' +
      '<rect x="62" y="40" width="10" height="258" fill="#6B4423"/><rect x="540" y="40" width="10" height="258" fill="#6B4423"/><rect x="52" y="30" width="508" height="12" fill="#6B4423"/><path d="M70 92 h14 v8" fill="none" stroke="#3B2A1E" stroke-width="4"/>' +
      '<g class="sign"><rect x="200" y="52" width="200" height="62" rx="8" fill="#FFE04A" stroke="#B8600B" stroke-width="3"/><text x="300" y="80" text-anchor="middle" class="big">FREE PUPPY!</text><text x="300" y="104" text-anchor="middle" class="big">$0</text><path d="M240 42 v10 M360 42 v10" stroke="#3B2A1E" stroke-width="3"/></g>' +
      // the box, standing on the floor, puppy sitting inside
      '<path d="M246 246 h108 v52 h-108 z" fill="#C9A574" stroke="#8A6A3C" stroke-width="2"/><path d="M246 246 l-16 -12 M354 246 l16 -12" stroke="#8A6A3C" stroke-width="3"/>' +
      '<g class="pup"><ellipse cx="300" cy="238" rx="30" ry="26" fill="#D9A45B"/><circle cx="300" cy="190" r="26" fill="#E3B46E"/><path d="M276 176 q-14 4 -10 28 q10 -4 14 -18z M324 176 q14 4 10 28 q-10 -4 -14 -18z" fill="#A8743F"/><circle cx="291" cy="188" r="3.4" fill="#2B1B10"/><circle cx="309" cy="188" r="3.4" fill="#2B1B10"/><ellipse cx="300" cy="198" rx="5" ry="3.6" fill="#2B1B10"/><path d="M294 204 q6 6 12 0" fill="none" stroke="#2B1B10" stroke-width="2"/><rect x="282" y="208" width="36" height="6" rx="3" fill="#B5432F"/><path class="tail" d="M328 240 q20 -10 16 -28" fill="none" stroke="#D9A45B" stroke-width="8" stroke-linecap="round"/></g>' +
      '<path d="M246 262 h108 v36 h-108 z" fill="#D9B98A" stroke="#8A6A3C" stroke-width="2"/>' +
      I.map(function(it){ var p = POS[it.k]; return '<g class="it" data-k="'+it.k+'" role="button" tabindex="0" aria-label="'+NAME[it.k]+'"><circle class="halo" cx="'+p[0]+'" cy="'+p[1]+'" r="'+(it.k === 'heart' ? 20 : 34)+'"/>'+art[it.k]+'<g class="flag '+it.side+'" transform="translate('+Math.max(44, Math.min(556, p[0]))+' '+(p[1] - (it.k === 'heart' ? 34 : 46))+')"><rect x="-40" y="-12" width="80" height="20" rx="5"/><text y="3" text-anchor="middle">'+(it.side === 'c' ? 'COST' : 'BENEFIT')+'</text></g></g>'; }).join('') + '</svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-pu-wrap"><div class="ms-pu-stage">'+scene+'<div class="ms-pu-lists"><div class="l c"><b>− Costs</b><ul></ul></div><div class="l b"><b>+ Benefits</b><ul></ul></div></div></div><div class="ms-pu-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-pu-act', m), svg = $('.ms-pu-scene', m), home = null, note = null, curUpd = null;
    if (ta) { home = document.createComment('pu-home'); ta.parentNode.insertBefore(home, ta);
      var qb = ta.parentNode.querySelector('.q-block'), tp = ta.parentNode.querySelector('.textbox-prompt'); if (qb) qb.classList.add('ms-hide-on'); if (tp) tp.classList.add('ms-hide-on');
      note = el('div', 'ms-pu-note ms-only', ''); ta.parentNode.insertBefore(note, home); }
    function goHome(){ if (ta && ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function miss(){ var o = [], v = ta ? ta.value : '', n = words(v); if (n < NEED) o.push('Add '+(NEED-n)+' more word'+(NEED-n===1?'':'s')+'.'); if (!/cost/i.test(v)) o.push('Tell one cost of the puppy. Use the word cost.'); if (!/benefit/i.test(v)) o.push('Tell one benefit of the puppy. Use the word benefit.'); return o; }
    function paintNote(){ if (!note) return; var v = ta.value.trim(); note.innerHTML = '<b>Question 1</b> is at the Free Puppy booth in the Gallery. ' + (v ? '✅ You wrote: <i>'+esc(v)+'</i>' : 'You have not written it yet. <button type="button" class="ms-btn alt ms-pu-goto">Go to the Gallery</button>'); var b = $('.ms-pu-goto', note); if (b) b.onclick = function(){ go('explore'); }; }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function oOf(k){ for (var i = 0; i < I.length; i++) if (I[i].k === k) return I[i]; }
    function line(it){ return (it.side === 'c' ? '<b>Cost:</b> ' : '<b>Benefit:</b> ') + esc(it.t) + (it.pay ? '. You pay with <b>'+esc(it.pay)+'</b>.' : '.'); }
    function paint(){ $$('.it', svg).forEach(function(g){ g.classList.toggle('seen', !!S.seen[g.dataset.k]); g.classList.toggle('sel', S.last === g.dataset.k); });
      ['c', 'b'].forEach(function(s){ $('.ms-pu-lists .l.'+s+' ul', m).innerHTML = I.filter(function(it){ return it.side === s && S.seen[it.k]; }).map(function(it){ return '<li>'+esc(it.t)+(it.pay ? ' <i>('+esc(it.pay)+')</i>' : '')+'</li>'; }).join('') || '<li class="none">Nothing yet</li>'; }); }
    function tap(k){ if (S.q || S.seen[k] && S.last === k) return; var isNew = !S.seen[k]; S.seen[k] = 1; S.last = k; save(); if (isNew) SFX.chime(); render(); }
    $$('.it', svg).forEach(function(g){ g.addEventListener('click', function(){ tap(g.dataset.k); }); g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tap(g.dataset.k); } }); });
    function render(){
      if (!root.classList.contains('ms-on')) return;
      paint(); paintNote(); var n = I.filter(function(it){ return S.seen[it.k]; }).length, N = 3;
      if (ta) ta.classList.toggle('ms-gi-away', !(S.q && !S.done));
      if (S.done) { goHome(); act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-pu-edit">✏️ Edit my answer</button></div>'; $('.ms-pu-edit', act).onclick = function(){ S.done = false; save(); render(); }; return; }
      if (n < I.length || !S.go) { goHome(); var last = S.last && oOf(S.last);
        act.innerHTML = stepCard(1, N, 'Tap each thing', (last ? '<div class="ms-vd-thanks">✅ '+line(last)+'</div>' : '') +
          (n < I.length ? '<p class="ms-wm-do">👆 Tap each thing in the booth, or tap its name here. ('+n+' of '+I.length+')</p><div class="ms-pu-names">'+I.map(function(it){ return '<button type="button" class="ms-btn alt ms-pu-n'+(S.seen[it.k] ? ' ok' : '')+'" data-k="'+it.k+'">'+(S.seen[it.k] ? '✓ ' : '')+NAME[it.k]+'</button>'; }).join('')+'</div>'
            : '<p>You found all six: 4 costs and 2 benefits.</p><button type="button" class="ms-btn big ms-pu-go">Next ➡️</button>'));
        $$('.ms-pu-n', act).forEach(function(b){ b.onclick = function(){ tap(b.dataset.k); }; });
        var g = $('.ms-pu-go', act); if (g) g.onclick = function(){ SFX.click(); S.go = true; S.last = null; save(); render(); }; return; }
      if (!S.q) { goHome(); var cq = choiceQ(cfg.q, 1, function(){ setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1600); });
        act.innerHTML = stepCard(2, N, cfg.q.title, cq.html); cq.bind(act); return; }
      if (!ta) { S.done = true; ST.gal = ST.gal||{}; ST.gal.puppy = 1; save(); galleryCheck(); render(); return; }
      act.innerHTML = stepCard(3, N, cfg.writeT, '<p>'+esc(cfg.writeP)+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-pu-chk"></div>' +
        '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-pu-save">Save my answer ✓</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
      $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-pu-chk', act);
      var upd = function(){ var v = ta.value, o = miss(), w = words(v); chk.innerHTML = '<span class="ms-wc'+(w >= NEED ? ' ok' : '')+'">📝 '+Math.min(w, NEED)+' of '+NEED+' words</span><span class="ms-chip'+(/cost/i.test(v) ? ' ok' : '')+'">'+(/cost/i.test(v) ? '✓ ' : '')+'one cost</span><span class="ms-chip'+(/benefit/i.test(v) ? ' ok' : '')+'">'+(/benefit/i.test(v) ? '✓ ' : '')+'one benefit</span>';
        $('.ms-pu-save', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
      curUpd = upd; upd();
      $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = (cfg.starters||[])[+b.dataset.i]; if (ta.value.indexOf(t) < 0) ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); }; });
      $('.ms-pu-save', act).onclick = function(){ var o = miss(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; }
        S.done = true; ST.gal = ST.gal||{}; ST.gal.puppy = 1; save(); galleryCheck(); SFX.fanfare(); render(); };
    }
    if (ta) ta.addEventListener('input', function(){ paintNote(); if (curUpd && S.q && !S.done) curUpd(); });
    render();
  }

  /* ══ MODULE: mytiles (Exhibit Floor · your tiles on the Decision Board → DECIDED) ══ */
  function modMytiles(cfg){
    var C = document.getElementById(cfg.costs), B = document.getElementById(cfg.benefits), Dn = document.getElementById(cfg.decide); if (!C || !B || !Dn) return;
    var P = cfg.picks || [], IMIN = cfg.itemMin || 2, SMIN = cfg.sentMin || 2;
    ST.mt = ST.mt || {step:1, r:null, open:false}; var S = ST.mt;
    var m = shell('ms-mt-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-mt-wrap"><div class="ms-mt-act"></div><div class="ms-mt-stage" hidden><div class="ms-mt-frame" aria-hidden="true"><i></i><span></span></div><div class="ms-mt-bw">'+dbBoardHTML('mine', '')+'<div class="ms-mt-stamp" aria-hidden="true">DECIDED</div></div><div class="ms-mt-dec"><div class="h">Our decision</div><p class="tx"></p><p class="by"></p></div></div></div><div class="ms-mt-end"></div>');
    var all = [C, B, Dn], blk = Dn.closest('.activity-body') || Dn.parentNode;
    var homes = all.map(function(ta){ var h = document.createComment('mt-home'); ta.parentNode.insertBefore(h, ta); return {ta:ta, h:h}; });
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild);
    $$('p, .callout, .textbox-prompt', blk).forEach(function(e){ if (!m.contains(e)) e.classList.add('ms-hide-on'); });
    var act = $('.ms-mt-act', m), show = $('.ms-mt-stage', m), end = $('.ms-mt-end', m), curUpd = null;
    $('.ms-mt-frame span', m).textContent = cfg.frameT || '';
    function goHome(){ homes.forEach(function(x){ if (x.ta.previousSibling !== x.h) x.h.parentNode.insertBefore(x.ta, x.h.nextSibling); }); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function pOf(k){ for (var i = 0; i < P.length; i++) if (P[i].k === k) return P[i]; return null; }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return words(s) >= 3; }).length; }
    function items(t){ var L = t.split(/\n|;/); if (L.filter(function(x){ return x.trim(); }).length < 2) L = t.split(/\n|;|,|\band\b/);
      return L.map(function(x){ return x.replace(/^\s*(\d+[.)]|[-•*])\s*/, '').trim(); }).filter(function(x){ return x.replace(/[^A-Za-z]/g, '').length >= 3; }); }
    function labels(){ var p = pOf(S.r); if (!p) return; C.setAttribute('data-label', 'Costs of picking ' + p.s); B.setAttribute('data-label', 'Benefits of picking ' + p.s); }
    function fill(s){ return String(s||'').replace('{s}', (pOf(S.r) || {}).s || ''); }
    function view(){ var p = pOf(S.r); if (!p) return;
      $('.ms-db-board .q b', show).textContent = 'Should the family spend its $20 on ' + p.s + '?';
      $('.ms-db-col.c .in', show).innerHTML = items(C.value).map(function(t){ return '<span class="ms-db-tl c"><i class="sg">−</i><span>'+esc(t)+'</span></span>'; }).join('') || '<span class="ms-db-tl none">Your cost tiles go here</span>';
      $('.ms-db-col.b .in', show).innerHTML = items(B.value).map(function(t){ return '<span class="ms-db-tl b"><i class="sg">+</i><span>'+esc(t)+'</span></span>'; }).join('') || '<span class="ms-db-tl none">Your benefit tiles go here</span>';
      $('.ms-mt-dec .tx', show).textContent = Dn.value.trim(); $('.ms-mt-dec', show).hidden = S.step < 5;
      var nm = sget(NAMEK,''); $('.ms-mt-dec .by', show).textContent = nm ? 'Weighed by ' + nm + ', Trade & Choice Curator' : 'Weighed by a Trade & Choice Curator';
      show.classList.toggle('open', !!S.open); show.classList.toggle('final', S.step >= 5); }
    function listStep(n, ta, title, prompt, hint, nextT, side){
      act.innerHTML = stepCard(n, 5, title, (n === 2 ? '<p class="ms-gi-ok">✅ On the board: <b>'+pOf(S.r).ic+' '+esc(pOf(S.r).s)+'</b> <button type="button" class="ms-btn alt ms-mt-back1">↩️ Pick the other one</button></p>' : '') + '<p>'+esc(fill(prompt))+'</p><p class="ms-mt-hint">💡 '+esc(hint)+'</p><div class="ms-gi-box"></div><div class="ms-excheck ms-mt-chk"></div>' +
        '<div class="ms-gi-nav">'+(n > 2 ? '<button type="button" class="ms-btn alt ms-mt-prev">⬅️ Back</button>' : '')+'<button type="button" class="ms-btn alt ms-mt-line">➕ Add a line</button><button type="button" class="ms-btn big ms-mt-next">'+esc(nextT)+'</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
      $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-mt-chk', act), word = side === 'c' ? 'cost' : 'benefit';
      function missing(){ var k = items(ta.value).length; return k < IMIN ? ['Write '+(IMIN-k)+' more '+word+(IMIN-k === 1 ? '' : 's')+'. Put each one on its own line.'] : []; }
      var upd = function(){ var k = items(ta.value).length, o = missing(); chk.innerHTML = '<span class="ms-wc'+(k >= IMIN ? ' ok' : '')+'">📝 '+Math.min(k, IMIN)+' of '+IMIN+' '+word+' tiles</span>'; view();
        $('.ms-mt-next', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
      curUpd = upd; upd();
      $('.ms-mt-line', act).onclick = function(){ var k = ta.value.split('\n').filter(function(x){ return x.trim(); }).length; ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? '\n' : '') + (k + 1) + '. '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); };
      var b1 = $('.ms-mt-back1', act); if (b1) b1.onclick = function(){ SFX.click(); S.step = 1; save(); render(); };
      var pv = $('.ms-mt-prev', act); if (pv) pv.onclick = function(){ SFX.click(); S.step = n - 1; save(); render(); };
      $('.ms-mt-next', act).onclick = function(){ var o = missing(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = n + 1; save(); goHome(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; curUpd = null; show.hidden = S.step < 2 || !S.r; labels();
      C.classList.toggle('ms-gi-away', S.step !== 2); B.classList.toggle('ms-gi-away', S.step !== 3); Dn.classList.toggle('ms-gi-away', S.step !== 4);
      m.classList.toggle('final', S.step >= 5 && !!S.r);
      if (S.step === 1 || !S.r) { S.step = 1; goHome();
        act.innerHTML = stepCard(1, 5, cfg.s1T, '<p>'+esc(cfg.s1||'')+'</p><div class="ms-pchoices col">'+P.map(function(p){ return '<button type="button" class="ms-btn'+(p.k === S.r ? '' : ' alt')+' ms-mt-p" data-k="'+p.k+'">'+p.ic+' '+esc(p.n.charAt(0).toUpperCase() + p.n.slice(1))+'</button>'; }).join('')+'</div>');
        $$('.ms-mt-p', act).forEach(function(b){ b.onclick = function(){ SFX.click(); S.r = b.dataset.k; S.step = 2; save(); labels(); if (typeof window.gatherAnswers === 'function') try { window.gatherAnswers(); } catch(e){} render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); }; });
        return; }
      goHome(); view();
      if (S.step === 2) { listStep(2, C, cfg.s2T, cfg.s2, cfg.s2hint, 'Next: benefits ➡️', 'c'); return; }
      if (S.step === 3) { listStep(3, B, cfg.s3T, cfg.s3, cfg.s3hint, 'Next: my decision ➡️', 'b'); return; }
      if (S.step === 4) {
        act.innerHTML = stepCard(4, 5, cfg.s4T, '<p>'+esc(cfg.s4||'')+'</p><div class="ms-gi-starts"><button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(cfg.starter)+'</button></div><div class="ms-gi-box"></div><div class="ms-excheck ms-mt-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-mt-prev">⬅️ Back</button><button type="button" class="ms-btn big ms-mt-next">See my board ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(Dn); var fb = $('.ms-gi-fb', act), chk = $('.ms-mt-chk', act);
        var missing = function(){ var o = [], n = sents(Dn.value); if (n < SMIN) o.push('Write '+(SMIN-n)+' more sentence'+(SMIN-n === 1 ? '' : 's')+' (3 words or more each).'); if (!/because|so that|since/i.test(Dn.value)) o.push('Tell why. Use the word because.'); return o; };
        var upd = function(){ var n = sents(Dn.value), o = missing(), bc = /because|so that|since/i.test(Dn.value); chk.innerHTML = '<span class="ms-wc'+(n >= SMIN ? ' ok' : '')+'">📝 '+Math.min(n, SMIN)+' of '+SMIN+' sentences</span><span class="ms-chip'+(bc ? ' ok' : '')+'">'+(bc ? '✓ ' : '')+'tells why</span>';
          $('.ms-mt-next', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $('.ms-gi-start', act).onclick = function(){ var t = cfg.starter; if (Dn.value.indexOf(t) < 0) Dn.value = t + ' ' + Dn.value.replace(/^\s+/, ''); Dn.focus(); Dn.setSelectionRange(Dn.value.length, Dn.value.length); Dn.dispatchEvent(new Event('input', {bubbles:true})); upd(); };
        $('.ms-mt-prev', act).onclick = function(){ SFX.click(); S.step = 3; save(); render(); };
        $('.ms-mt-next', act).onclick = function(){ var o = missing(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 5; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(5, 5, cfg.s5T, '<p>'+esc(cfg.s5||'')+'</p><button type="button" class="ms-btn big ms-mt-go">🔨 '+esc(cfg.openT||'Stamp it')+'</button>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-mt-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-mt-go', end); if (gb) gb.onclick = function(){ S.open = true; save(); SFX.fanfare(); show.classList.remove('slam'); void show.offsetWidth; if (!calm()) show.classList.add('slam'); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 900);
        setTimeout(function(){ show.classList.remove('slam'); }, 1600); optiNod('assignment'); check(); };
      $('.ms-mt-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    all.forEach(function(ta){ ta.addEventListener('input', function(){ if (curUpd) curUpd(); }); });
    var its = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && its.length && its.every(on)) markDone('assignment'); }
    its.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.09_08 (Economic Virtues: Honesty and Responsibility) ══════════
     DATA.tmRows (5 booth pairs), DATA.tmDays (Day 1 / Week 1 / Month 1), DATA.inScales (4 sellers' scales)
     - honestybox  Lobby: an egg stand with no seller and a jar; pay or walk off, then see the stand one week later both ways; 2 questions
     - twomarkets  Gallery main attraction: Market A and Market B side by side; look inside 5 pairs of booths, then run Day 1 → Week 1 → Month 1 with buttons; 2 questions
     - inspector   Gallery: set a 1 pound test weight on 4 scales, stamp the seal or hang a FIX IT tag; question; fact; Evidence Q3 box moves into the last step
     - plaque      Exhibit Floor: pick 4 unit words, write the Wise Trader plaque one line at a time, hang it in the gold frame; the hall lights up, badge card shows */

  /* ══ MODULE: honestybox (Lobby · the egg stand with a jar) ══ */
  function modHonestybox(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    ST.hb = ST.hb || {pick:null, wk:0, q1:false, q2:false}; var S = ST.hb;
    var m = shell('ms-hb-mod', cfg);
    function carton(x, cls){ var e = ''; for (var i = 0; i < 4; i++) e += '<ellipse cx="'+(x + 9 + i*12)+'" cy="161" rx="5" ry="6.5" fill="#FBF3E2" stroke="#B9A77A"/>';
      return '<g class="ct '+cls+'"><rect x="'+x+'" y="160" width="54" height="16" rx="3" fill="#B9B4A6" stroke="#77736A" stroke-width="1.5"/>'+e+'<rect x="'+x+'" y="166" width="54" height="10" rx="3" fill="#C9C4B6" stroke="#77736A" stroke-width="1.5"/></g>'; }
    var coins = ''; [[0,0],[9,1],[-8,2],[3,-7],[-5,-8],[11,-8],[-1,-15],[8,-16],[-9,-17],[2,-23],[10,-24],[-6,-25]].forEach(function(p, i){ coins += '<ellipse class="cn'+(i < 2 ? ' few' : '')+'" cx="'+(452 + p[0])+'" cy="'+(168 + p[1])+'" rx="7" ry="3.2" fill="#E3B94F" stroke="#8A6A1E"/>'; });
    var weeds = ''; [150, 176, 420, 470, 498].forEach(function(x, i){ weeds += '<path d="M'+x+' 246 q-6 -16 -2 -'+(22 + i*3)+' M'+x+' 246 q4 -14 8 -'+(18 + i*2)+' M'+x+' 246 q0 -10 -9 -14" fill="none" stroke="#5E8C3A" stroke-width="2.5" stroke-linecap="round"/>'; });
    var scene = '<svg viewBox="0 0 600 300" class="ms-hb-scene" role="img" aria-label="A drawing of a small farm stand beside a road. A sign says Fresh Eggs, 2 dollars, leave your money in the jar. Cartons of eggs and a glass jar sit on the table. Nobody is at the stand. Your wallet and your basket are in front.">' +
      '<rect width="600" height="300" fill="#CFE8F7"/><path d="M0 150 q150 -34 300 -8 t300 -6 V246 H0z" fill="#A9D08E"/><rect y="244" width="600" height="56" fill="#C9B48C"/><rect y="244" width="600" height="3" fill="#9A8660"/><path d="M0 280 h40 m30 0 h40 m30 0 h40 m30 0 h40 m30 0 h40 m30 0 h40 m30 0 h40 m30 0 h40" stroke="#F3E7CF" stroke-width="3"/>' +
      '<g class="weeds">'+weeds+'</g>' +
      // the stand: two posts set in the ground, a roof, a table top
      '<rect x="196" y="52" width="9" height="194" fill="#6B4423"/><rect x="495" y="52" width="9" height="194" fill="#6B4423"/><path d="M178 58 L350 26 L522 58 Z" fill="#B5432F" stroke="#7A2A1C" stroke-width="2"/>' +
      '<rect x="186" y="176" width="328" height="12" fill="#A7774A"/><rect x="196" y="188" width="308" height="58" fill="#8A5A34"/><path d="M196 206 h308 M196 226 h308" stroke="#7A4E2C" stroke-width="2"/>' +
      '<g class="sign"><rect x="246" y="70" width="208" height="62" rx="5" fill="#FFFDF6" stroke="#5A3A1E" stroke-width="3"/><text x="350" y="94" text-anchor="middle" class="big">FRESH EGGS $2</text><text x="350" y="112" text-anchor="middle" class="sm">Leave your money</text><text x="350" y="125" text-anchor="middle" class="sm">in the jar.</text></g>' +
      '<g class="closed"><rect x="232" y="84" width="236" height="36" rx="4" fill="#5A3A1E" transform="rotate(-7 350 102)"/><text x="350" y="109" text-anchor="middle" transform="rotate(-7 350 102)">CLOSED</text></g>' +
      carton(222, 'c1') + carton(284, 'c2') + carton(346, 'c3') + '<g class="more">' + carton(253, 'c4').replace(/160|161|166/g, function(v){ return +v - 14; }) + carton(315, 'c5').replace(/160|161|166/g, function(v){ return +v - 14; }) + '</g>' +
      // the jar stands on the table
      '<g class="jar"><rect x="432" y="130" width="40" height="46" rx="7" fill="#E8F4F8" fill-opacity=".65" stroke="#6E8A96" stroke-width="2"/><rect x="436" y="124" width="32" height="8" rx="2" fill="#8795A6"/>'+coins+'<rect x="438" y="146" width="28" height="13" rx="2" fill="#FFFDF6" stroke="#6E8A96"/><text x="452" y="156" text-anchor="middle" class="tiny">MONEY</text></g>' +
      '<g class="farmer"><circle cx="150" cy="150" r="15" fill="#C68B5A"/><path d="M132 146 q18 -22 36 0 z" fill="#E3B94F"/><rect x="128" y="144" width="44" height="4" rx="2" fill="#C99A2E"/><path d="M128 230 q0 -62 22 -62 q22 0 22 62 z" fill="#3E7CB1"/><path d="M168 186 q20 -14 22 -38" fill="none" stroke="#C68B5A" stroke-width="6" stroke-linecap="round"/><circle cx="145" cy="151" r="1.8" fill="#2B1B10"/><circle cx="156" cy="151" r="1.8" fill="#2B1B10"/><path d="M144 158 q6 5 12 0" fill="none" stroke="#2B1B10" stroke-width="2"/><rect x="134" y="228" width="12" height="18" fill="#3B2A1E"/><rect x="154" y="228" width="12" height="18" fill="#3B2A1E"/></g>' +
      '<g class="you"><g class="wallet"><rect x="26" y="252" width="86" height="40" rx="8" fill="#6B4423" stroke="#3B2A1E" stroke-width="2"/><path d="M26 266 h86" stroke="#3B2A1E" stroke-width="2"/><text x="69" y="284" text-anchor="middle" class="capw">Your wallet</text></g>' +
      '<g class="bill"><rect x="42" y="236" width="54" height="26" rx="3" fill="#9CC79A" stroke="#3E7A45" stroke-width="2"/><text x="69" y="254" text-anchor="middle">$2</text></g>' +
      '<g class="basket"><path d="M232 256 h96 l-10 36 h-76 z" fill="#C68A3E" stroke="#7A4E1E" stroke-width="2"/><path d="M238 268 h84 M242 280 h76" stroke="#7A4E1E" stroke-width="1.5"/><path d="M242 256 q38 -34 76 0" fill="none" stroke="#7A4E1E" stroke-width="3"/><rect x="244" y="274" width="72" height="15" rx="3" fill="#FFFDF6" stroke="#7A4E1E"/><text x="280" y="285" text-anchor="middle" class="cap">Your basket</text></g></g>' +
      '<g class="when"><rect x="12" y="12" width="176" height="34" rx="8"/><text x="100" y="35" text-anchor="middle"></text></g></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-hb-wrap"><div class="ms-hb-stage">'+scene+'<p class="ms-hb-cap" aria-live="polite"></p></div><div class="ms-hb-act" aria-live="polite"></div></div>');
    after(anchor, m);
    var act = $('.ms-hb-act', m), stage = $('.ms-hb-stage', m), svg = $('.ms-hb-scene', m), cap = $('.ms-hb-cap', m);
    function view(){ return !S.pick ? 'now' : (S.wk === 0 ? S.pick : (S.wk === 1 ? 'wkpay' : 'wkwalk')); }
    function paint(){ var v = view(); stage.className = 'ms-hb-stage v-' + v; cap.textContent = (cfg.caps || {})[v] || ''; $('.when text', svg).textContent = v.indexOf('wk') === 0 ? 'One week later' : 'Today'; }
    function look(){ svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function render(){
      paint(); var N = 5;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (!S.pick) { act.innerHTML = stepCard(1, N, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><div class="ms-pchoices col"><button type="button" class="ms-btn ms-hb-p" data-p="pay">'+esc(cfg.pay)+'</button><button type="button" class="ms-btn ms-hb-p" data-p="walk">'+esc(cfg.walk)+'</button></div>');
        $$('.ms-hb-p', act).forEach(function(b){ b.onclick = function(){ SFX.click(); S.pick = b.dataset.p; save(); render(); look(); }; }); return; }
      if (S.wk < 2) { var first = S.wk === 0;
        act.innerHTML = stepCard(first ? 2 : 3, N, first ? cfg.s2T : cfg.s3T, '<div class="ms-vd-thanks">'+(first ? '✅ '+esc(S.pick === 'pay' ? cfg.afterPay : cfg.afterWalk) : '🥚 '+esc(cfg.caps.wkpay))+'</div><p>'+esc(first ? cfg.s2 : cfg.s3)+'</p><button type="button" class="ms-btn big ms-hb-go">'+esc(first ? cfg.s2btn : cfg.s3btn)+'</button>');
        $('.ms-hb-go', act).onclick = function(){ if (first) SFX.chime(); else SFX.miss(); S.wk++; save(); render(); look(); }; return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? 5 : 4, N, q.title, (S.q1 ? '' : '<div class="ms-vd-thanks">🙁 '+esc(cfg.caps.wkwalk)+'</div>') + cq.html); cq.bind(act);
    }
    render(); if (S.q2) markDone('scene');
  }

  /* ══ MODULE: twomarkets (Gallery main attraction · Market A and Market B) ══ */
  function modTwomarkets(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var R = DATA.tmRows || [], DY = DATA.tmDays || [];
    ST.tm = ST.tm || {i:0, go:false, day:0, ran:false, q1:false, q2:false}; var S = ST.tm, viewDay = S.day;
    var m = shell('ms-tm-mod', cfg);
    function mk(s){ var lamps = ''; for (var i = 0; i < 5; i++) lamps += '<i></i>';
      return '<div class="ms-tm-mk '+s+'"><div class="hd"><b>Market '+s.toUpperCase()+'</b><small>'+esc(cfg[s + 'Sub'])+'</small></div><div class="lamps" aria-hidden="true">'+lamps+'</div><div class="bts">' +
        R.map(function(r){ return '<div class="ms-tm-bt" data-k="'+r.k+'"><span class="aw" aria-hidden="true"></span><div class="bd"><span class="ic">'+r.ic+'</span><b>'+esc(r.n)+'</b><p class="in"></p></div><span class="sh">CLOSED</span></div>'; }).join('') +
        '</div><div class="ft"><div class="vis"></div><div class="coin"></div></div></div>'; }
    m.insertAdjacentHTML('beforeend', '<div class="ms-tm-wrap"><div class="ms-tm-stage"><div class="ms-tm-day" aria-live="polite"></div><div class="ms-tm-two">'+mk('a')+mk('b')+'</div><p class="ms-credit">A simple model of two made-up markets.</p></div><div class="ms-tm-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-tm-act', m), stage = $('.ms-tm-stage', m);
    function people(n){ var k = Math.round(n / 5), s = ''; for (var i = 0; i < k; i++) s += '<i></i>'; return '<span class="pp" aria-hidden="true">'+s+'</span><span>Visitors today: <b>'+n+'</b></span>'; }
    function coinsHTML(n, max, who){ return '<span class="who">'+who+'</span><span class="bar"><i style="width:'+Math.max(n ? 6 : 0, Math.round(n / max * 100))+'%"></i></span><span>🪙 <b>'+n+'</b> coins</span>'; }
    function paint(){ var d = S.go ? viewDay : 0, dy = DY[d] || {};
      stage.classList.toggle('run', !!S.go); stage.setAttribute('data-day', d);
      $('.ms-tm-day', m).textContent = S.go ? (dy.t || '') : 'Look inside';
      ['a', 'b'].forEach(function(s){ var box = $('.ms-tm-mk.'+s, m);
        $$('.ms-tm-bt', box).forEach(function(b, j){ var r = R[j], cur = !S.go && j === S.i - 1; b.classList.toggle('seen', j < S.i); b.classList.toggle('cur', cur); $('.in', b).textContent = cur ? r[s] : '';
          b.classList.toggle('shut', s === 'b' && S.go && d >= r.shut); });
        $$('.lamps i', box).forEach(function(l, j){ l.classList.toggle('on', s === 'a' ? true : (!S.go || d === 0 ? true : j < dy.lb)); });
        $('.vis', box).innerHTML = S.go && d ? people(s === 'a' ? dy.va : dy.vb) : '';
        $('.coin', box).innerHTML = S.go && d ? coinsHTML(s === 'a' ? dy.ca : dy.cb, 150, s === 'a' ? 'The honest fish seller' : 'The cheating fish seller') : ''; }); }
    function chips(){ return '<div class="ms-tm-chips"><span>Look again:</span>'+[1, 2, 3].map(function(d){ return '<button type="button" class="ms-btn alt ms-tm-c'+(viewDay === d ? ' on' : '')+'" data-d="'+d+'">'+esc(DY[d].t)+'</button>'; }).join('')+'</div><p class="ms-tm-say">'+esc((DY[viewDay] || {}).cap || '')+'</p>'; }
    function bindChips(){ $$('.ms-tm-c', act).forEach(function(b){ b.onclick = function(){ SFX.click(); viewDay = +b.dataset.d; paint(); $$('.ms-tm-c', act).forEach(function(x){ x.classList.toggle('on', x === b); }); $('.ms-tm-say', act).textContent = DY[viewDay].cap; }; }); }
    function look(){ stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function render(){
      var N = 4; paint();
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>' + chips(); bindChips(); return; }
      if (!S.go) { var last = S.i > 0 ? R[S.i - 1] : null, more = S.i < R.length;
        act.innerHTML = stepCard(1, N, cfg.lookT + (more ? ' · pair '+(S.i + 1)+' of '+R.length : ''), (last ? '<div class="ms-vd-thanks">✅ <b>'+esc(last.n)+'.</b> '+esc(last.v)+'</div>' : '<p>'+esc(cfg.lookP)+'</p>') +
          (more ? '<button type="button" class="ms-btn big ms-tm-look">🔍 Look inside: '+esc(R[S.i].n)+'</button>' : '<p>'+esc(cfg.lookDone)+'</p><button type="button" class="ms-btn big ms-tm-run">Next ➡️</button>'));
        var lb = $('.ms-tm-look', act); if (lb) lb.onclick = function(){ SFX.chime(); S.i++; save(); render(); look(); };
        var rb = $('.ms-tm-run', act); if (rb) rb.onclick = function(){ SFX.click(); S.go = true; S.day = 0; viewDay = 0; save(); render(); look(); }; return; }
      if (!S.ran) { var d = S.day;
        act.innerHTML = stepCard(2, N, cfg.daysT, (d ? '<div class="ms-vd-thanks">📅 '+esc(DY[d].cap)+'</div>' : '<p>'+esc(cfg.daysP)+'</p>') +
          '<button type="button" class="ms-btn big ms-tm-next">'+(d < 3 ? esc(cfg.dayBtns[d]) : 'Next ➡️')+'</button>');
        $('.ms-tm-next', act).onclick = function(){ if (S.day < 3) { S.day++; viewDay = S.day; if (S.day === 1) SFX.chime(); else SFX.click(); } else { S.ran = true; SFX.click(); } save(); render(); look(); }; return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { ST.gal = ST.gal||{}; ST.gal.markets = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? 4 : 3, N, q.title, chips() + cq.html); cq.bind(act); bindChips();
    }
    render();
  }

  /* ══ MODULE: inspector (Gallery · test four scales with a 1 pound weight) ══ */
  function modInspector(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var SC = DATA.inScales || [], ta = document.getElementById(cfg.ta || 'journal-q3'), NEED = cfg.wordMin || 10;
    ST.ins = ST.ins || {i:0, on:false, res:false, tags:{}, q:false, fact:false, done:false}; var S = ST.ins; S.tags = S.tags || {};
    var m = shell('ms-in-mod', cfg);
    var ticks = ''; [[0, '0'], [0.5, '½'], [1, '1'], [1.5, '1½'], [2, '2']].forEach(function(t){ var a = (-90 + 90 * t[0]) * Math.PI / 180, x = 330 + Math.sin(a) * 40, y = 158 - Math.cos(a) * 40, x2 = 330 + Math.sin(a) * 50, y2 = 158 - Math.cos(a) * 50, lx = 330 + Math.sin(a) * 28, ly = 158 - Math.cos(a) * 28 + 4;
      ticks += '<path d="M'+x.toFixed(1)+' '+y.toFixed(1)+' L'+x2.toFixed(1)+' '+y2.toFixed(1)+'" stroke="#0E1C42" stroke-width="3"/><text x="'+lx.toFixed(1)+'" y="'+ly.toFixed(1)+'" text-anchor="middle" class="tk">'+t[1]+'</text>'; });
    var scene = '<svg viewBox="0 0 600 320" class="ms-in-scene" role="img" aria-label="A drawing of a seller\'s counter with a scale. The scale has a flat pan on top and a round dial marked 0, one half, 1, one and a half, and 2 pounds. A brass 1 pound test weight is beside it.">' +
      '<rect width="600" height="320" fill="#F3E7CF"/><rect y="40" width="600" height="6" fill="#E3D3B0"/>' +
      '<g class="shop"><path d="M60 0 v16 M230 0 v16" stroke="#6B4423" stroke-width="3"/><rect x="24" y="14" width="244" height="42" rx="6" fill="#5C3A1E"/><text x="146" y="43" text-anchor="middle" class="nm"></text></g>' +
      '<rect x="40" y="236" width="520" height="14" fill="#A7774A"/><rect x="52" y="250" width="496" height="70" fill="#8A5A34"/><path d="M52 272 h496 M52 296 h496" stroke="#7A4E2C" stroke-width="2"/>' +
      '<text x="500" y="230" text-anchor="middle" class="gd"></text>' +
      // the scale stands on the counter: base, dial, neck, pan
      '<g class="sc"><rect x="262" y="212" width="136" height="24" rx="4" fill="#5E6B7A" stroke="#2E3A48" stroke-width="2"/><rect x="318" y="92" width="24" height="24" fill="#5E6B7A" stroke="#2E3A48" stroke-width="2"/>' +
      '<circle cx="330" cy="158" r="58" fill="#8795A6" stroke="#2E3A48" stroke-width="3"/><circle cx="330" cy="158" r="51" fill="#FFFDF6" stroke="#2E3A48" stroke-width="1.5"/>'+ticks+'<text x="330" y="190" text-anchor="middle" class="lb">pounds</text>' +
      '<g class="ndl"><path d="M330 166 L326 158 L330 112 L334 158 Z" fill="#C0392B" stroke="#7A2A1C"/></g><circle cx="330" cy="158" r="6" fill="#2E3A48"/>' +
      '<rect x="252" y="82" width="156" height="10" rx="5" fill="#B8C2CE" stroke="#2E3A48" stroke-width="2"/><path d="M246 82 q84 -10 168 0" fill="none" stroke="#2E3A48" stroke-width="2"/></g>' +
      // the brass test weight: stands on the counter, then on the pan
      '<g class="wt" role="button" tabindex="0" aria-label="The 1 pound test weight"><path d="M112 236 l6 -40 h32 l6 40 z" fill="#D9A92E" stroke="#8E6A14" stroke-width="2"/><rect x="126" y="184" width="16" height="12" rx="3" fill="#D9A92E" stroke="#8E6A14" stroke-width="2"/><circle cx="134" cy="180" r="7" fill="#F3D27A" stroke="#8E6A14" stroke-width="2"/><text x="134" y="224" text-anchor="middle" class="wl">1 lb</text></g>' +
      '<text x="134" y="270" text-anchor="middle" class="cap wcap">Test weight</text>' +
      '<g class="seal"><circle cx="424" cy="206" r="30" fill="#1A7A4A" stroke="#0F5231" stroke-width="3"/><circle cx="424" cy="206" r="23" fill="none" stroke="#BFE8CF" stroke-width="1.5" stroke-dasharray="3 3"/><text x="424" y="202" text-anchor="middle" class="s1">TRUE</text><text x="424" y="216" text-anchor="middle" class="s2">CITY SEAL</text></g>' +
      '<g class="fix"><path d="M408 86 q22 14 30 44" fill="none" stroke="#5A3A1E" stroke-width="2"/><g transform="rotate(8 446 160)"><path d="M416 130 h60 v52 h-60 z" fill="#F28C1B" stroke="#8A4A0B" stroke-width="2.5"/><circle cx="446" cy="138" r="3.5" fill="#FFF4DA" stroke="#8A4A0B"/><text x="446" y="160" text-anchor="middle" class="f1">FIX</text><text x="446" y="176" text-anchor="middle" class="f1">IT</text></g></g></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-in-wrap"><div class="ms-in-stage">'+scene+'<div class="ms-in-row" aria-live="polite"></div></div><div class="ms-in-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-in-act', m), svg = $('.ms-in-scene', m), row = $('.ms-in-row', m), home = null, note = null, curUpd = null;
    if (ta) { home = document.createComment('in-home'); ta.parentNode.insertBefore(home, ta);
      var prev = ta.previousElementSibling, hid = 0; while (prev && hid < 2 && (prev.classList.contains('textbox-prompt') || prev.classList.contains('q-block'))) { prev.classList.add('ms-hide-on'); prev = prev.previousElementSibling; hid++; }
      note = el('div', 'ms-pu-note ms-in-note ms-only', ''); ta.parentNode.insertBefore(note, home); }
    function goHome(){ if (ta && ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function miss(){ var o = [], v = ta ? ta.value : '', n = words(v); if (n < NEED) o.push('Add '+(NEED-n)+' more word'+(NEED-n===1?'':'s')+'.'); if (!/honest|trust/i.test(v)) o.push('Use the word honest, honesty, or trust.'); return o; }
    function paintNote(){ if (!note) return; var v = ta.value.trim(); note.innerHTML = '<b>Question 3</b> is at the Scale Inspector station in the Gallery. ' + (v ? '✅ You wrote: <i>'+esc(v)+'</i>' : 'You have not written it yet. <button type="button" class="ms-btn alt ms-in-goto">Go to the Gallery</button>'); var b = $('.ms-in-goto', note); if (b) b.onclick = function(){ go('explore'); }; }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function shown(){ if (S.i >= SC.length) { for (var j = 0; j < SC.length; j++) if (SC[j].k === 'fish') return j; return SC.length - 1; } return S.i; }
    function paint(){ var j = shown(), s = SC[j], tested = S.i > j || S.i >= SC.length, on = tested || S.on, tag = S.tags[s.k];
      $('.nm', svg).textContent = s.name.toUpperCase(); $('.gd', svg).textContent = s.ic;
      svg.classList.toggle('on', !!on); svg.classList.toggle('sealed', tag === 'seal'); svg.classList.toggle('fixed', tag === 'fix');
      $('.ndl', svg).style.transform = 'rotate('+(on ? -90 + 90 * s.lb : -90)+'deg)';
      row.innerHTML = SC.map(function(x, n){ var t = S.tags[x.k]; return '<span class="ms-in-chip'+(t ? ' ' + t : '')+(n === j ? ' cur' : '')+'">'+x.ic+' '+esc(x.name)+': <b>'+(t === 'seal' ? '🟢 seal' : (t === 'fix' ? '🏷️ FIX IT' : 'not tested'))+'</b></span>'; }).join(''); }
    function setOn(){ if (S.i >= SC.length || S.on) return; SFX.click(); S.on = true; save(); render(); }
    var wt = $('.wt', svg); wt.addEventListener('click', setOn); wt.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOn(); } });
    function render(){
      if (!root.classList.contains('ms-on')) return;
      paint(); paintNote(); var N = 4;
      if (ta) ta.classList.toggle('ms-gi-away', !(S.fact && !S.done));
      if (S.done) { goHome(); act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-in-edit">✏️ Edit my answer</button></div>'; $('.ms-in-edit', act).onclick = function(){ S.done = false; save(); render(); }; return; }
      if (S.i < SC.length) { goHome(); var s = SC[S.i], head = cfg.testT + ' · scale '+(S.i + 1)+' of '+SC.length;
        if (!S.on) { act.innerHTML = stepCard(1, N, head, '<p>This is the scale at <b>'+esc(s.name)+'</b>. The needle points to 0 because nothing is on it.</p><p class="ms-wm-do">👆 Put your test weight on the scale. It weighs exactly 1 pound.</p><button type="button" class="ms-btn big ms-in-set">'+esc(cfg.setBtn)+'</button>');
          $('.ms-in-set', act).onclick = setOn; return; }
        if (!S.res) { act.innerHTML = stepCard(1, N, head, '<div class="ms-vd-thanks">⚖️ The needle points to <b>'+esc(s.read)+'</b>.</div><p>Your weight is exactly 1 pound. What does the inspector do?</p><div class="ms-pchoices col"><button type="button" class="ms-btn ms-in-t" data-t="seal">'+esc(cfg.sealBtn)+'</button><button type="button" class="ms-btn ms-in-t" data-t="fix">'+esc(cfg.fixBtn)+'</button></div><div class="ms-exfb" aria-live="polite"></div>');
          $$('.ms-in-t', act).forEach(function(b){ b.onclick = function(){ var right = (b.dataset.t === 'seal') === !!s.ok;
            if (!right) { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc(b.dataset.t === 'seal' ? cfg.hintSeal : cfg.hintFix)+'</div>'; return; }
            SFX.chime(); S.tags[s.k] = b.dataset.t; S.res = true; save(); render(); if (!calm()) { svg.classList.remove('stamp'); void svg.getBoundingClientRect(); svg.classList.add('stamp'); } }; }); return; }
        act.innerHTML = stepCard(1, N, head, '<div class="ms-vd-thanks">'+(s.ok ? '🟢 ' : '🏷️ ')+esc(s.fb)+'</div><button type="button" class="ms-btn big ms-in-nx">'+(S.i + 1 < SC.length ? 'Next scale ➡️' : 'Next ➡️')+'</button>');
        $('.ms-in-nx', act).onclick = function(){ SFX.click(); S.i++; S.on = false; S.res = false; save(); render(); svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }; return; }
      if (!S.q) { goHome(); var cq = choiceQ(cfg.q, 1, function(){ setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1600); });
        act.innerHTML = stepCard(2, N, cfg.q.title, cq.html); cq.bind(act); return; }
      if (!S.fact) { goHome(); act.innerHTML = stepCard(3, N, cfg.factT, '<p>'+esc(cfg.fact)+'</p><button type="button" class="ms-btn big ms-in-fk">Next ➡️</button>');
        $('.ms-in-fk', act).onclick = function(){ SFX.click(); S.fact = true; save(); render(); }; return; }
      if (!ta) { S.done = true; ST.gal = ST.gal||{}; ST.gal.inspector = 1; save(); galleryCheck(); render(); return; }
      act.innerHTML = stepCard(4, N, cfg.writeT, '<p>'+esc(cfg.writeP)+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-in-chk"></div>' +
        '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-in-save">Save my answer ✓</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
      $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-in-chk', act);
      var upd = function(){ var v = ta.value, o = miss(), w = words(v), h = /honest|trust/i.test(v); chk.innerHTML = '<span class="ms-wc'+(w >= NEED ? ' ok' : '')+'">📝 '+Math.min(w, NEED)+' of '+NEED+' words</span><span class="ms-chip'+(h ? ' ok' : '')+'">'+(h ? '✓ ' : '')+'honesty or trust</span>';
        $('.ms-in-save', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
      curUpd = upd; upd();
      $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = (cfg.starters||[])[+b.dataset.i]; if (ta.value.indexOf(t) < 0) ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); }; });
      $('.ms-in-save', act).onclick = function(){ var o = miss(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; }
        S.done = true; ST.gal = ST.gal||{}; ST.gal.inspector = 1; save(); galleryCheck(); SFX.fanfare(); render(); };
    }
    if (ta) ta.addEventListener('input', function(){ paintNote(); if (curUpd && S.fact && !S.done) curUpd(); });
    render();
  }

  /* ══ MODULE: plaque (Exhibit Floor · the Wise Trader plaque, one line at a time → the gold frame) ══ */
  function modPlaque(cfg){
    var ta = document.getElementById(cfg.ta || 'journal-assign'); if (!ta) return;
    var W = cfg.words || [], L = cfg.lines || [], NW = cfg.pick || 4, H = cfg.hall || [];
    ST.pq = ST.pq || {step:1, w:[], l:[], open:false}; var S = ST.pq; S.w = S.w || []; S.l = S.l || []; for (var z = 0; z < L.length; z++) if (typeof S.l[z] !== 'string') S.l[z] = '';
    var m = shell('ms-pq-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-pq-wrap"><div class="ms-pq-act"></div><div class="ms-pq-stage"><div class="ms-pq-wall"><div class="ms-pq-frame"><div class="ms-pq-plq"><div class="pt">THE WISE TRADER</div><div class="ls"></div><div class="by"></div></div></div></div>' +
      '<div class="ms-pq-hall" aria-hidden="true"><span class="dr">🚪<small>Front doors</small></span>'+H.map(function(h, i){ return '<span class="ex" style="--d:'+(i * .32).toFixed(2)+'s"><i>'+h.ic+'</i><small>'+esc(h.t)+'</small></span>'; }).join('')+'<span class="ex bw" style="--d:'+(H.length * .32).toFixed(2)+'s"><i>🖼️</i><small>Back wall</small></span></div></div></div><div class="ms-pq-end"></div>');
    var blk = ta.closest('.activity-body') || ta.parentNode, card = blk.querySelector('.wise-trader-card');
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild);
    $$('p, .callout, .textbox-prompt', blk).forEach(function(e){ if (!m.contains(e) && !(card && card.contains(e))) e.classList.add('ms-hide-on'); });
    ta.classList.add('ms-hide-on');
    var act = $('.ms-pq-act', m), show = $('.ms-pq-stage', m), end = $('.ms-pq-end', m);
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function wOf(k){ for (var i = 0; i < W.length; i++) if (W[i].w === k) return W[i]; return null; }
    function uses(k, text){ var o = wOf(k); return !!o && new RegExp(o.re, 'i').test(text); }
    function all(){ return S.l.map(function(x){ return (x||'').trim(); }).filter(Boolean).join(' '); }
    function sync(){ var t = all(); if (!t && !ta.value) return; if (t === ta.value) return; if (!t && S.step < 2) return; ta.value = t; try { ta.dispatchEvent(new Event('input', {bubbles:true})); } catch(e){} }
    function unused(){ var t = all(); return S.w.filter(function(k){ return !uses(k, t); }); }
    function wordRow(){ var t = all(); return '<div class="ms-pq-my"><span>My words:</span>'+S.w.map(function(k){ var u = uses(k, t); return '<span class="ms-chip'+(u ? ' ok' : '')+'">'+(u ? '✓ ' : '')+esc(k)+'</span>'; }).join('')+'</div>'; }
    function view(){ $('.ms-pq-plq .ls', show).innerHTML = L.map(function(x, i){ var v = (S.l[i]||'').trim(); return '<p class="'+(v ? '' : 'empty')+(S.step === i + 2 ? ' cur' : '')+'">'+(v ? esc(v) : 'Line '+(i + 1))+'</p>'; }).join('');
      var nm = sget(NAMEK,''); $('.ms-pq-plq .by', show).textContent = nm ? 'Written by ' + nm + ', Trade & Choice Curator' : 'Written by a Trade & Choice Curator';
      show.classList.toggle('open', !!S.open); show.hidden = S.step < 2; if (card) card.classList.toggle('ms-hide-on', !S.open); }
    function lineMiss(i){ var x = L[i], v = S.l[i] || '', o = [], n = words(v);
      if (n < x.min) o.push('Add '+(x.min - n)+' more word'+(x.min - n === 1 ? '' : 's')+'.');
      if (x.use) { var k = S.w.filter(function(w){ return uses(w, v); }).length; if (k < x.use) o.push('Use '+(x.use - k)+' more of your words in this line.'); }
      if (x.re && !new RegExp(x.re, 'i').test(v)) o.push(x.need);
      return o; }
    function render(){
      end.innerHTML = ''; view();
      if (S.w.length < NW) S.step = 1;
      if (S.step === 1) {
        act.innerHTML = stepCard(1, L.length + 2, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><div class="ms-pq-words">'+W.map(function(w){ var on = S.w.indexOf(w.w) >= 0; return '<button type="button" class="ms-btn alt ms-pq-w'+(on ? ' on' : '')+'" data-w="'+esc(w.w)+'" aria-pressed="'+on+'"><i>'+w.ic+'</i> '+esc(w.w)+'</button>'; }).join('')+'</div>' +
          '<div class="ms-excheck"><span class="ms-wc'+(S.w.length >= NW ? ' ok' : '')+'">'+S.w.length+' of '+NW+' picked</span></div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-pq-next'+(S.w.length < NW ? ' ms-notready' : '')+'">Next: write line 1 ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        var fb0 = $('.ms-gi-fb', act);
        $$('.ms-pq-w', act).forEach(function(b){ b.onclick = function(){ var k = b.dataset.w, at = S.w.indexOf(k);
          if (at >= 0) S.w.splice(at, 1); else if (S.w.length >= NW) { SFX.miss(); fb0.innerHTML = '<div class="ms-notyet">🔎 You have four words. Tap one of them to take it off first.</div>'; return; } else S.w.push(k);
          SFX.click(); save(); render(); }; });
        $('.ms-pq-next', act).onclick = function(){ if (S.w.length < NW) { SFX.miss(); fb0.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Pick '+(NW - S.w.length)+' more word'+(NW - S.w.length === 1 ? '' : 's')+'.</div>'; return; } SFX.click(); S.step = 2; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      if (S.step >= 2 && S.step < L.length + 2) { var i = S.step - 2, x = L[i];
        act.innerHTML = stepCard(S.step, L.length + 2, x.t, '<p>'+esc(x.p)+'</p>' + wordRow() + '<div class="ms-gi-starts"><button type="button" class="ms-btn alt ms-gi-start">✏️ '+esc(x.st)+'</button></div><div class="ms-gi-box"><textarea class="journal-box ms-pq-in" rows="3" aria-label="'+esc(x.t)+'"></textarea></div><div class="ms-excheck ms-pq-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-pq-prev">⬅️ Back</button><button type="button" class="ms-btn big ms-pq-next">'+(i + 1 < L.length ? 'Next: line '+(i + 2)+' ➡️' : 'See my plaque ➡️')+'</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        var inp = $('.ms-pq-in', act), fb = $('.ms-gi-fb', act), chk = $('.ms-pq-chk', act); inp.value = S.l[i] || '';
        var upd = function(){ var o = lineMiss(i), n = words(S.l[i] || ''); chk.innerHTML = '<span class="ms-wc'+(n >= x.min ? ' ok' : '')+'">📝 '+Math.min(n, x.min)+' of '+x.min+' words</span>';
          var my = $('.ms-pq-my', act); if (my) my.outerHTML = wordRow(); view();
          $('.ms-pq-next', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        inp.addEventListener('input', function(){ S.l[i] = inp.value; save(); sync(); upd(); }); upd();
        $('.ms-gi-start', act).onclick = function(){ if (inp.value.indexOf(x.st) < 0) inp.value = x.st + ' ' + inp.value.replace(/^\s+/, ''); inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); S.l[i] = inp.value; save(); sync(); upd(); };
        $('.ms-pq-prev', act).onclick = function(){ SFX.click(); S.step--; save(); render(); };
        $('.ms-pq-next', act).onclick = function(){ var o = lineMiss(i); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step++; save(); render(); (S.step < L.length + 2 ? act : show).scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      act.innerHTML = ''; var un = unused();
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' :
        stepCard(L.length + 2, L.length + 2, cfg.hangT, wordRow() + (un.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> Your plaque still needs: <b>'+un.map(esc).join(', ')+'</b>. Tap Edit my plaque and add '+(un.length === 1 ? 'it' : 'them')+' to a line.</div>' : '<p>'+esc(cfg.hangP)+'</p><button type="button" class="ms-btn big ms-pq-go">🖼️ '+esc(cfg.openT)+'</button>'))) +
        '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-pq-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-pq-go', end); if (gb) gb.onclick = function(){ S.open = true; save(); sync(); SFX.fanfare(); show.classList.remove('lit'); void show.offsetWidth; if (!calm()) show.classList.add('lit'); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 1900);
        optiNod('assignment'); check(); };
      $('.ms-pq-edit', end).onclick = function(){ S.open = false; S.step = 2; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    var its = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && its.length && its.every(on)) markDone('assignment'); }
    its.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }


  /* ══════════ Added for 3.10_01 (Why Government Is Needed) ══════════
     DATA.fxSpots (3 troubles), DATA.fxTools (3 fixes), DATA.tjBuys (3 things the town buys)
     - corner      Lobby: a crossing with no signs; Go = everyone jams; add stop signs; Go again = they take turns; 2 questions
     - fixtown     Gallery main attraction: the model town's 3 troubles (garden, fire, muddy lot); pick the fix; each names a job (order, safety, the common good); the town comes alive; 2 questions
     - townjar     Gallery: 10 families each put 1 coin in the Town Jar (taxes); buy a park, a library, a fire truck; question; Evidence Q2 box moves into the last step
     - firstlabel  Exhibit Floor: pick a job and an example, the label box moves into the step (3 sentences), hang it; the hall's lamps come on */

  /* ══ MODULE: corner (Lobby · the Corner With No Signs) ══ */
  function modCorner(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    ST.xr = ST.xr || {st:0, q1:false, q2:false}; var S = ST.xr; // st 0 start, 1 jam, 2 signs up, 3 crossed
    var m = shell('ms-xr-mod', cfg);
    function house(x, y, c){ return '<g><rect x="'+x+'" y="'+y+'" width="54" height="40" rx="3" fill="#B5432F" stroke="#5A3A1E" stroke-width="2"/><rect x="'+x+'" y="'+(y+20)+'" width="54" height="20" rx="3" fill="#8E2E22"/><path d="M'+x+' '+(y+20)+' h54" stroke="#5A3A1E" stroke-width="2"/><rect x="'+(x+38)+'" y="'+(y+6)+'" width="8" height="8" fill="'+c+'" stroke="#5A3A1E" stroke-width="1.5"/></g>'; }
    function stop(x, y){ return '<g class="sg"><path d="M'+(x-5)+' '+(y-12)+' h10 l7 7 v10 l-7 7 h-10 l-7 -7 v-10 z" fill="#C0392B" stroke="#fff" stroke-width="2"/><text x="'+x+'" y="'+(y+3)+'" text-anchor="middle">STOP</text></g>'; }
    var scene = '<svg viewBox="0 0 600 320" class="ms-xr-scene" role="img" aria-label="A drawing of a street corner seen from above. Two roads cross. A red car waits on the left, a wagon on the right, a bike at the bottom, and a family at the top.">' +
      '<rect width="600" height="320" fill="#A9D08E"/><rect y="128" width="600" height="64" fill="#8C8F94"/><rect x="262" width="76" height="320" fill="#8C8F94"/>' +
      '<path d="M0 160 H250 M350 160 H600" stroke="#F3E7CF" stroke-width="3" stroke-dasharray="16 12"/><path d="M300 0 V118 M300 202 V320" stroke="#F3E7CF" stroke-width="3" stroke-dasharray="16 12"/>' +
      house(40, 40, '#F3E7CF') + house(150, 56, '#EBC1B2') + house(400, 40, '#F4C37C') + house(500, 60, '#F3E7CF') + house(60, 230, '#BCD9AB') + house(420, 236, '#EBC1B2') +
      '<circle cx="210" cy="250" r="16" fill="#2F7D46"/><circle cx="530" cy="250" r="14" fill="#2F7D46"/><circle cx="380" cy="96" r="13" fill="#2F7D46"/>' +
      '<g class="signs">' + stop(248, 206) + stop(352, 114) + stop(248, 114) + stop(352, 206) + '</g>' +
      '<g class="tv car" style="--jx:196px;--jy:0px;--ex:480px;--ey:0px;--d:0s"><text class="tl" x="59" y="205" text-anchor="middle">car</text><rect x="34" y="163" width="50" height="26" rx="7" fill="#C0392B" stroke="#7A1E14" stroke-width="2"/><rect x="62" y="167" width="12" height="18" rx="3" fill="#CFE8F7"/><rect x="42" y="167" width="8" height="18" rx="3" fill="#CFE8F7"/></g>' +
      '<g class="tv wagon" style="--jx:-190px;--jy:0px;--ex:-480px;--ey:0px;--d:1.3s"><text class="tl" x="536" y="124" text-anchor="middle">wagon</text><rect x="520" y="134" width="46" height="24" rx="3" fill="#A7774A" stroke="#5A3A1E" stroke-width="2"/><path d="M526 134 v24 M538 134 v24 M550 134 v24" stroke="#7A4E2C" stroke-width="1.5"/><circle cx="530" cy="132" r="5" fill="#3B2A1E"/><circle cx="556" cy="132" r="5" fill="#3B2A1E"/><circle cx="530" cy="160" r="5" fill="#3B2A1E"/><circle cx="556" cy="160" r="5" fill="#3B2A1E"/><ellipse cx="506" cy="146" rx="12" ry="7" fill="#8A6A44" stroke="#5A3A1E"/><circle cx="492" cy="146" r="5" fill="#8A6A44" stroke="#5A3A1E"/></g>' +
      '<g class="tv bike" style="--jx:0px;--jy:-88px;--ex:0px;--ey:-262px;--d:2.6s"><text class="tl" x="346" y="292" text-anchor="middle">bike</text><path d="M318 276 V300" stroke="#2E3A48" stroke-width="4" stroke-linecap="round"/><ellipse cx="318" cy="273" rx="3" ry="8" fill="#2E3A48"/><ellipse cx="318" cy="303" rx="3" ry="8" fill="#2E3A48"/><circle cx="318" cy="288" r="8" fill="#2E5FA8" stroke="#1D3E73" stroke-width="2"/><circle cx="318" cy="284" r="4.5" fill="#C68B5A"/></g>' +
      '<g class="tv fam" style="--jx:0px;--jy:92px;--ex:0px;--ey:262px;--d:3.9s"><text class="tl" x="246" y="38" text-anchor="middle">family</text><circle cx="276" cy="30" r="8" fill="#7B4FC4" stroke="#4A2C82" stroke-width="2"/><circle cx="276" cy="27" r="4.5" fill="#C68B5A"/><circle cx="292" cy="34" r="7" fill="#1A8A7D" stroke="#0F5231" stroke-width="2"/><circle cx="292" cy="31" r="4" fill="#E3B46E"/><circle cx="284" cy="46" r="5.5" fill="#F28C1B" stroke="#8A4A0B" stroke-width="2"/><circle cx="284" cy="44" r="3.2" fill="#C68B5A"/></g>' +
      '<g class="bang"><path d="M300 126 l6 14 l15 -6 l-8 13 l14 8 l-15 3 l4 15 l-12 -9 l-10 12 l-1 -15 l-15 -1 l11 -10 l-9 -12 l15 3 z" fill="#FFE04A" stroke="#B8600B" stroke-width="2"/><text x="300" y="165" text-anchor="middle">STUCK!</text></g></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-xr-wrap"><div class="ms-xr-stage">'+scene+'</div><div class="ms-xr-act" aria-live="polite"></div></div>');
    after(anchor, m);
    var act = $('.ms-xr-act', m), stage = $('.ms-xr-stage', m), svg = $('.ms-xr-scene', m);
    function look(){ svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function render(){
      stage.className = 'ms-xr-stage s' + S.st; var N = 5;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (S.st === 0) { act.innerHTML = stepCard(1, N, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><button type="button" class="ms-btn big ms-xr-go">'+esc(cfg.go1)+'</button>');
        $('.ms-xr-go', act).onclick = function(){ SFX.miss(); S.st = 1; save(); render(); look(); }; return; }
      if (S.st === 1) { act.innerHTML = stepCard(2, N, cfg.s2T, '<div class="ms-vd-thanks">🙁 '+esc(cfg.jam)+'</div><p>'+esc(cfg.s2)+'</p><button type="button" class="ms-btn big ms-xr-go">'+esc(cfg.sign)+'</button>');
        $('.ms-xr-go', act).onclick = function(){ SFX.click(); S.st = 2; save(); render(); look(); }; return; }
      if (S.st === 2) { act.innerHTML = stepCard(3, N, cfg.s3T, '<div class="ms-vd-thanks">🛑 '+esc(cfg.signed)+'</div><p>'+esc(cfg.s3)+'</p><button type="button" class="ms-btn big ms-xr-go">'+esc(cfg.go2)+'</button>');
        $('.ms-xr-go', act).onclick = function(){ SFX.chime(); S.st = 3; save(); render(); look(); }; return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? 5 : 4, N, q.title, (S.q1 ? '' : '<div class="ms-vd-thanks">✅ '+esc(cfg.crossed)+'</div>') + cq.html); cq.bind(act);
    }
    render(); if (S.q2) markDone('scene');
  }

  /* ══ MODULE: fixtown (Gallery main attraction · the Town With No Rules) ══ */
  function modFixtown(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var SP = DATA.fxSpots || [], TL = DATA.fxTools || [];
    ST.fx = ST.fx || {fixed:{}, cur:null, res:false, go:false, q1:false, q2:false}; var S = ST.fx; S.fixed = S.fixed || {};
    var m = shell('ms-fx-mod', cfg);
    function hs(x, y, c, w){ w = w || 56; return '<g class="hs"><rect x="'+x+'" y="'+(y-40)+'" width="'+w+'" height="40" fill="'+c+'" stroke="#5A3A1E" stroke-width="2"/><path d="M'+(x-6)+' '+(y-40)+' l'+(w/2+6)+' -26 l'+(w/2+6)+' 26 z" fill="#8E2E22" stroke="#5A3A1E" stroke-width="2"/><rect x="'+(x+w/2-7)+'" y="'+(y-22)+'" width="14" height="22" fill="#5A3A1E"/><rect class="win" x="'+(x+7)+'" y="'+(y-32)+'" width="11" height="11"/><rect class="win" x="'+(x+w-18)+'" y="'+(y-32)+'" width="11" height="11"/></g>'; }
    function per(x, y, c, cls){ return '<g class="pr '+(cls||'')+'"><circle cx="'+x+'" cy="'+(y-24)+'" r="5.5" fill="#C68B5A"/><path d="M'+x+' '+(y-18)+' V'+(y-7)+' M'+x+' '+(y-7)+' l-4 7 M'+x+' '+(y-7)+' l4 7 M'+x+' '+(y-15)+' l-6 5 M'+x+' '+(y-15)+' l6 5" stroke="'+c+'" stroke-width="3" stroke-linecap="round" fill="none"/></g>'; }
    function kid(x, y, c){ return '<g class="kd"><circle cx="'+x+'" cy="'+(y-17)+'" r="4.5" fill="#E3B46E"/><path d="M'+x+' '+(y-12)+' V'+(y-5)+' M'+x+' '+(y-5)+' l-3 5 M'+x+' '+(y-5)+' l3 5 M'+x+' '+(y-10)+' l-5 3 M'+x+' '+(y-10)+' l5 3" stroke="'+c+'" stroke-width="2.6" stroke-linecap="round" fill="none"/></g>'; }
    function plants(x0, n, y){ var s = ''; for (var i = 0; i < n; i++) s += '<path d="M'+(x0 + i*11)+' '+y+' v-9 M'+(x0 + i*11)+' '+(y-5)+' q-5 -5 -6 -1 M'+(x0 + i*11)+' '+(y-6)+' q5 -5 6 -1" stroke="#2F7D46" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="'+(x0 + i*11)+'" cy="'+(y-11)+'" r="3" fill="#F28C1B"/>'; return s; }
    var scene = '<svg viewBox="0 138 640 232" class="ms-fx-scene" role="img" aria-label="A drawing of a small model town. On the left, two families stand at one garden. In the middle, a house is on fire. On the right, children stand in an empty muddy lot. A road runs along the front.">' +
      '<rect width="640" height="380" fill="#CFE8F7"/><circle class="sun" cx="596" cy="172" r="20" fill="#F7D154"/><path d="M0 180 q160 -40 320 -10 t320 -8 V300 H0z" fill="#A9D08E"/><rect y="296" width="640" height="84" fill="#9BC37F"/>' +
      '<rect y="318" width="640" height="40" fill="#8C8F94"/><path d="M0 338 H640" stroke="#F3E7CF" stroke-width="3" stroke-dasharray="16 12"/>' +
      // garden: two houses, one bed between them
      '<g class="z garden">' + hs(14, 262, '#F3E7CF') + hs(160, 262, '#EBC1B2') + '<rect x="84" y="238" width="64" height="30" rx="3" fill="#7A5A3A" stroke="#5A3A1E" stroke-width="2"/>' +
        '<g class="bad"><path d="M96 262 l8 -8 M112 264 l-7 -9 M128 262 l8 -8" stroke="#5E8C3A" stroke-width="2.4" stroke-linecap="round"/><text x="116" y="226" text-anchor="middle" class="ex">!?</text></g>' +
        '<g class="good"><path d="M116 232 V272" stroke="#FFFDF6" stroke-width="4"/><path d="M116 232 V272" stroke="#5A3A1E" stroke-width="1.5" stroke-dasharray="4 3"/>' + plants(92, 2, 264) + plants(126, 2, 264) + '</g>' +
        per(78, 292, '#7B4FC4') + per(154, 292, '#1A8A7D') + '</g>' +
      // fire: one house, flames on the roof, a bucket
      '<g class="z fire">' + hs(292, 262, '#F4C37C', 64) +
        '<g class="bad flames"><path d="M300 226 q-6 -22 8 -34 q0 14 10 16 q-2 -20 12 -30 q2 18 12 24 q4 -10 2 -18 q16 16 6 42 z" fill="#F28C1B" stroke="#C0392B" stroke-width="2"/><path d="M314 224 q-2 -12 8 -20 q2 10 10 14 q4 4 0 8 z" fill="#FFE04A"/><path d="M318 176 q-10 -10 0 -22 q8 -8 0 -18" fill="none" stroke="#6B6F75" stroke-width="5" stroke-linecap="round" opacity=".6"/></g>' +
        '<g class="bad">' + per(270, 292, '#B5432F') + '<path d="M276 276 h10 l-2 10 h-6 z" fill="#8795A6" stroke="#2E3A48"/></g>' +
        '<g class="good truck"><rect x="366" y="268" width="62" height="24" rx="3" fill="#C0392B" stroke="#7A1E14" stroke-width="2"/><rect x="410" y="258" width="18" height="12" rx="2" fill="#C0392B" stroke="#7A1E14" stroke-width="2"/><rect x="414" y="261" width="10" height="7" fill="#CFE8F7"/><circle cx="380" cy="294" r="7" fill="#2E3A48"/><circle cx="416" cy="294" r="7" fill="#2E3A48"/><rect class="lamp" x="392" y="262" width="10" height="6" rx="2"/><path d="M370 272 h30" stroke="#F3E7CF" stroke-width="3"/><path class="water" d="M368 268 q-22 -52 -40 -44" fill="none" stroke="#6FB3D9" stroke-width="5" stroke-linecap="round" stroke-dasharray="7 6"/>' + per(350, 292, '#2E3A48') + '</g></g>' +
      // lot: mud, then a park
      '<g class="z lot"><g class="bad"><path d="M452 300 q10 -34 86 -30 q84 -4 90 30 z" fill="#8A6A44" stroke="#5A3A1E" stroke-width="2"/><ellipse cx="500" cy="290" rx="20" ry="5" fill="#6B8FA3"/><ellipse cx="574" cy="286" rx="15" ry="4" fill="#6B8FA3"/>' + kid(468, 268, '#7B4FC4') + kid(482, 270, '#B5432F') + kid(610, 270, '#1A8A7D') + '<text x="540" y="262" text-anchor="middle" class="ex">?</text></g>' +
        '<g class="good park"><path d="M452 300 q10 -34 86 -30 q84 -4 90 30 z" fill="#6FBF73" stroke="#2F7D46" stroke-width="2"/><rect x="600" y="240" width="6" height="36" fill="#6B4528"/><circle cx="603" cy="232" r="20" fill="#2F7D46"/>' +
        '<path d="M486 296 V258 h20 V296 M506 262 L540 294" fill="none" stroke="#C0392B" stroke-width="4" stroke-linecap="round"/><path d="M490 258 h12" stroke="#E9C878" stroke-width="5"/>' +
        '<path d="M552 296 V262 h30 V296 M560 262 v18 M574 262 v18" fill="none" stroke="#2E5FA8" stroke-width="3" stroke-linecap="round"/><rect x="556" y="280" width="22" height="4" fill="#5A3A1E"/>' + kid(498, 256, '#7B4FC4') + kid(530, 290, '#B5432F') + kid(567, 280, '#1A8A7D') + '</g></g>' +
      '<g class="alive"><g class="car"><rect x="-70" y="322" width="46" height="18" rx="6" fill="#2E5FA8" stroke="#1D3E73" stroke-width="2"/><rect x="-44" y="325" width="12" height="8" fill="#CFE8F7"/><circle cx="-60" cy="342" r="5" fill="#2E3A48"/><circle cx="-34" cy="342" r="5" fill="#2E3A48"/></g>' +
        '<path d="M232 318 v-34" stroke="#5E6B7A" stroke-width="3"/><path d="M227 272 h10 l5 5 v8 l-5 5 h-10 l-5 -5 v-8 z" fill="#C0392B" stroke="#fff" stroke-width="1.5"/>' +
        '<path class="flag" d="M30 196 q10 -6 20 0 t20 0 v-14 q-10 6 -20 0 t-20 0 z" fill="#E9C878"/></g>' +
      SP.map(function(s, i){ var p = [[116, 250], [324, 236], [540, 280]][i]; return '<g class="spot" data-k="'+s.k+'" role="button" tabindex="0" aria-label="'+esc(s.n)+'"><circle class="halo" cx="'+p[0]+'" cy="'+p[1]+'" r="52"/><circle class="hit" cx="'+p[0]+'" cy="'+p[1]+'" r="58"/></g>'; }).join('') + '</svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-fx-wrap"><div class="ms-fx-stage">'+scene+'<div class="ms-fx-plates" aria-live="polite">'+SP.map(function(s){ return '<span class="pl" data-k="'+s.k+'">'+esc(s.jobT)+'</span>'; }).join('')+'</div><p class="ms-credit">A simple model of a made-up town.</p></div><div class="ms-fx-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-fx-act', m), svg = $('.ms-fx-scene', m);
    function sOf(k){ for (var i = 0; i < SP.length; i++) if (SP[i].k === k) return SP[i]; return null; }
    function count(){ return SP.filter(function(s){ return S.fixed[s.k]; }).length; }
    function paint(){ SP.forEach(function(s){ svg.classList.toggle('f-' + s.k, !!S.fixed[s.k]); var g = $('.spot[data-k="'+s.k+'"]', svg); g.classList.toggle('done', !!S.fixed[s.k]); g.classList.toggle('sel', S.cur === s.k && !S.fixed[s.k]); $('.ms-fx-plates .pl[data-k="'+s.k+'"]', m).classList.toggle('on', !!S.fixed[s.k]); });
      svg.classList.toggle('all', count() === SP.length); }
    function pick(k){ if (S.go || S.fixed[k] || S.res) return; SFX.click(); S.cur = k; save(); render(); }
    $$('.spot', svg).forEach(function(g){ g.addEventListener('click', function(){ pick(g.dataset.k); }); g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(g.dataset.k); } }); });
    function look(){ svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function render(){
      paint(); var N = 5, n = count();
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (!S.go) {
        if (S.res && S.cur) { var d = sOf(S.cur), last = n === SP.length;
          act.innerHTML = stepCard(n, N, 'Trouble '+n+' of '+SP.length+' · fixed', '<div class="ms-vd-thanks">✅ '+esc(d.done)+'</div><button type="button" class="ms-btn big ms-fx-nx">'+(last ? 'Next ➡️' : 'Next trouble ➡️')+'</button>');
          $('.ms-fx-nx', act).onclick = function(){ SFX.click(); S.res = false; S.cur = null; if (last) S.go = true; save(); render(); look(); }; return; }
        if (!S.cur) { act.innerHTML = stepCard(n + 1, N, cfg.pickT + ' · '+(n + 1)+' of '+SP.length, '<p class="ms-wm-do">👆 '+esc(cfg.pickP)+'</p><div class="ms-pchoices col">'+SP.filter(function(s){ return !S.fixed[s.k]; }).map(function(s){ return '<button type="button" class="ms-btn alt ms-fx-s" data-k="'+s.k+'">'+s.ic+' '+esc(s.n)+'</button>'; }).join('')+'</div>');
          $$('.ms-fx-s', act).forEach(function(b){ b.onclick = function(){ pick(b.dataset.k); look(); }; }); return; }
        var c = sOf(S.cur);
        act.innerHTML = stepCard(n + 1, N, c.n, '<div class="ms-notyet">⚠️ <b>What is wrong:</b> '+esc(c.wrong)+'</div><p>'+esc(cfg.fixP)+'</p><div class="ms-pchoices col">'+TL.map(function(t){ return '<button type="button" class="ms-btn ms-fx-t" data-k="'+t.k+'">'+esc(t.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-fx-back">↩️ Pick a different trouble</button></div>');
        $$('.ms-fx-t', act).forEach(function(b){ b.onclick = function(){ if (b.dataset.k !== c.fix) { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc(cfg.miss)+'</div>'; return; }
          SFX.chime(); S.fixed[c.k] = 1; S.res = true; save(); render(); look(); if (count() === SP.length) SFX.fanfare(); }; });
        $('.ms-fx-back', act).onclick = function(){ SFX.click(); S.cur = null; save(); render(); }; return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { ST.gal = ST.gal||{}; ST.gal.town = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? 5 : 4, N, q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: townjar (Gallery · ten families, one jar, three things for everyone) ══ */
  function modTownjar(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var BY = DATA.tjBuys || [], ta = document.getElementById(cfg.ta || 'journal-q2'), NEED = cfg.wordMin || 10;
    ST.tj = ST.tj || {in:false, b:{}, go:false, q:false, done:false}; var S = ST.tj; S.b = S.b || {};
    var m = shell('ms-tj-mod', cfg);
    var COL = ['#F3E7CF', '#EBC1B2', '#BCD9AB', '#F4C37C', '#CFE0F2'], houses = '', coins = '';
    var JAR = [[-21,0],[-7,0],[7,0],[21,0],[-14,-9],[0,-9],[14,-9],[-7,-18],[7,-18],[0,-27]];
    for (var i = 0; i < 10; i++) { var x = 22 + i * 57;
      houses += '<g><rect x="'+x+'" y="44" width="40" height="30" fill="'+COL[i % 5]+'" stroke="#5A3A1E" stroke-width="2"/><path d="M'+(x-4)+' 44 l24 -18 l24 18 z" fill="#8E2E22" stroke="#5A3A1E" stroke-width="2"/><rect x="'+(x+15)+'" y="56" width="10" height="18" fill="#5A3A1E"/></g>';
      coins += '<g class="cn" data-i="'+i+'" style="--hx:'+(x + 20)+'px;--hy:90px;--jx:'+(300 + JAR[i][0])+'px;--jy:'+(196 + JAR[i][1])+'px"><circle r="8" fill="#E3B94F" stroke="#8A6A1E" stroke-width="2"/><circle r="4" fill="none" stroke="#B8891E" stroke-width="1"/></g>'; }
    var LOT = {park:[30,246], lib:[230,246], truck:[430,246]};
    var art = {
      park: '<path d="M38 300 h124 v-8 q-62 -18 -124 0 z" fill="#6FBF73" stroke="#2F7D46" stroke-width="2"/><rect x="136" y="262" width="5" height="30" fill="#6B4528"/><circle cx="138" cy="256" r="16" fill="#2F7D46"/><path d="M58 294 V264 h18 V294 M76 268 L104 292" fill="none" stroke="#C0392B" stroke-width="4" stroke-linecap="round"/>',
      lib: '<rect x="252" y="264" width="96" height="36" fill="#F3E7CF" stroke="#5A3A1E" stroke-width="2"/><path d="M244 264 h112 l-56 -18 z" fill="#B5432F" stroke="#5A3A1E" stroke-width="2"/><path d="M266 270 v30 M286 270 v30 M314 270 v30 M334 270 v30" stroke="#C9BFA8" stroke-width="5"/><rect x="293" y="278" width="14" height="22" fill="#5A3A1E"/><text x="300" y="260" text-anchor="middle" class="sm">LIBRARY</text>',
      truck: '<rect x="452" y="270" width="78" height="24" rx="3" fill="#C0392B" stroke="#7A1E14" stroke-width="2"/><rect x="530" y="278" width="22" height="16" rx="2" fill="#C0392B" stroke="#7A1E14" stroke-width="2"/><rect x="535" y="281" width="12" height="7" fill="#CFE8F7"/><circle cx="470" cy="296" r="8" fill="#2E3A48"/><circle cx="534" cy="296" r="8" fill="#2E3A48"/><path d="M456 266 h66 M462 266 v-6 M476 266 v-6 M490 266 v-6 M504 266 v-6 M518 266 v-6 M456 260 h66" stroke="#8795A6" stroke-width="2.5"/>' };
    var scene = '<svg viewBox="0 0 600 320" class="ms-tj-scene" role="img" aria-label="A drawing of ten small houses in a row. Each family holds one gold coin. Below is a big glass jar marked Town Jar. At the bottom are three empty lots for a park, a library, and a fire truck, each with a price.">' +
      '<rect width="600" height="320" fill="#F3E7CF"/><rect y="74" width="600" height="6" fill="#A9D08E"/>' + houses +
      '<g class="jar"><rect x="262" y="128" width="76" height="80" rx="12" fill="#E8F4F8" fill-opacity=".7" stroke="#6E8A96" stroke-width="2.5"/><rect x="270" y="118" width="60" height="12" rx="3" fill="#8795A6"/><rect x="212" y="210" width="176" height="24" rx="4" fill="#0E1C42"/><text x="300" y="227" text-anchor="middle" class="jl">TOWN JAR: <tspan class="jn">0</tspan> coins</text></g>' +
      BY.map(function(b){ var p = LOT[b.k]; return '<g class="lotg" data-k="'+b.k+'"><rect class="plot" x="'+p[0]+'" y="'+p[1]+'" width="140" height="58" rx="6"/><g class="art">'+art[b.k]+'</g><g class="tag"><text x="'+(p[0] + 70)+'" y="'+(p[1] + 26)+'" text-anchor="middle" class="nm">'+esc(b.n)+'</text><text x="'+(p[0] + 70)+'" y="'+(p[1] + 44)+'" text-anchor="middle" class="pr">costs '+b.c+' coins</text></g><text x="'+(p[0] + 70)+'" y="'+(p[1] - 4)+'" text-anchor="middle" class="fe">For everyone</text></g>'; }).join('') + coins + '</svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-tj-wrap"><div class="ms-tj-stage">'+scene+'</div><div class="ms-tj-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-tj-act', m), svg = $('.ms-tj-scene', m), home = null, note = null, curUpd = null;
    if (ta) { home = document.createComment('tj-home'); ta.parentNode.insertBefore(home, ta);
      var prev = ta.previousElementSibling, hid = 0; while (prev && hid < 2 && (prev.classList.contains('textbox-prompt') || prev.classList.contains('q-block'))) { prev.classList.add('ms-hide-on'); prev = prev.previousElementSibling; hid++; }
      note = el('div', 'ms-pu-note ms-tj-note ms-only', ''); ta.parentNode.insertBefore(note, home); }
    function goHome(){ if (ta && ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function miss(){ var o = [], v = ta ? ta.value : '', n = words(v); if (n < NEED) o.push('Add '+(NEED-n)+' more word'+(NEED-n===1?'':'s')+'.'); if (!/pa(y|id)|tax/i.test(v)) o.push('Tell who pays for the park. Use the word pay, paid, or taxes.'); return o; }
    function paintNote(){ if (!note) return; var v = ta.value.trim(); note.innerHTML = '<b>Question 2</b> is at the Town Jar in the Gallery. ' + (v ? '✅ You wrote: <i>'+esc(v)+'</i>' : 'You have not written it yet. <button type="button" class="ms-btn alt ms-tj-goto">Go to the Gallery</button>'); var b = $('.ms-tj-goto', note); if (b) b.onclick = function(){ go('explore'); }; }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function spent(){ var n = 0; BY.forEach(function(b){ if (S.b[b.k]) n += b.c; }); return n; }
    function paint(){ var sp = spent(), at = 0, owner = [];
      BY.forEach(function(b){ if (S.b[b.k]) for (var j = 0; j < b.c; j++) owner.push(b.k); });
      $$('.cn', svg).forEach(function(c, i){ var o = owner[i]; c.classList.toggle('in', !!S.in && !o); c.classList.toggle('sp', !!o); if (o) { var p = LOT[o]; c.style.setProperty('--sx', (p[0] + 70) + 'px'); c.style.setProperty('--sy', (p[1] + 30) + 'px'); } });
      $('.jn', svg).textContent = S.in ? 10 - sp : 0;
      $$('.lotg', svg).forEach(function(g){ g.classList.toggle('on', !!S.b[g.dataset.k]); }); }
    function look(){ svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      paint(); paintNote(); var N = 4, all = BY.every(function(b){ return S.b[b.k]; });
      if (ta) ta.classList.toggle('ms-gi-away', !(S.q && !S.done));
      if (S.done) { goHome(); act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-tj-edit">✏️ Edit my answer</button></div>'; $('.ms-tj-edit', act).onclick = function(){ S.done = false; save(); render(); }; return; }
      if (!S.in) { goHome(); act.innerHTML = stepCard(1, N, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><button type="button" class="ms-btn big ms-tj-fill">'+esc(cfg.s1btn)+'</button>');
        $('.ms-tj-fill', act).onclick = function(){ SFX.chime(); S.in = true; save(); render(); look(); }; return; }
      if (!S.go) { goHome();
        act.innerHTML = stepCard(2, N, cfg.s2T, (all ? '<div class="ms-vd-thanks">✅ '+esc(cfg.bought)+'</div><button type="button" class="ms-btn big ms-tj-nx">Next ➡️</button>' :
          '<p>'+esc(cfg.s2)+'</p><p class="ms-wm-do">👆 Tap a thing to buy it. Coins left in the jar: <b>'+(10 - spent())+'</b></p><div class="ms-pchoices col">'+BY.map(function(b){ return S.b[b.k] ? '<span class="ms-tj-got">✓ '+b.ic+' '+esc(b.n)+': bought for everyone</span>' : '<button type="button" class="ms-btn ms-tj-b" data-k="'+b.k+'">'+b.ic+' '+esc(b.n)+' · '+b.c+' coins</button>'; }).join('')+'</div>'));
        $$('.ms-tj-b', act).forEach(function(b){ b.onclick = function(){ SFX.chime(); S.b[b.dataset.k] = 1; save(); render(); look(); }; });
        var nx = $('.ms-tj-nx', act); if (nx) nx.onclick = function(){ SFX.click(); S.go = true; save(); render(); }; return; }
      if (!S.q) { goHome(); var cq = choiceQ(cfg.q, 1, function(){ setTimeout(function(){ S.q = true; save(); render(); }, calm()?0:1600); });
        act.innerHTML = stepCard(3, N, cfg.q.title, cq.html); cq.bind(act); return; }
      if (!ta) { S.done = true; ST.gal = ST.gal||{}; ST.gal.jar = 1; save(); galleryCheck(); render(); return; }
      act.innerHTML = stepCard(4, N, cfg.writeT, '<p>'+esc(cfg.writeP)+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-tj-chk"></div>' +
        '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-tj-save">Save my answer ✓</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
      $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-tj-chk', act);
      var upd = function(){ var v = ta.value, o = miss(), w = words(v), h = /pa(y|id)|tax/i.test(v); chk.innerHTML = '<span class="ms-wc'+(w >= NEED ? ' ok' : '')+'">📝 '+Math.min(w, NEED)+' of '+NEED+' words</span><span class="ms-chip'+(h ? ' ok' : '')+'">'+(h ? '✓ ' : '')+'tells who pays</span>';
        $('.ms-tj-save', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
      curUpd = upd; upd();
      $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = (cfg.starters||[])[+b.dataset.i]; if (ta.value.indexOf(t) < 0) ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); }; });
      $('.ms-tj-save', act).onclick = function(){ var o = miss(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; }
        S.done = true; ST.gal = ST.gal||{}; ST.gal.jar = 1; save(); galleryCheck(); SFX.fanfare(); render(); };
    }
    if (ta) ta.addEventListener('input', function(){ paintNote(); if (curUpd && S.q && !S.done) curUpd(); });
    render();
  }

  /* ══ MODULE: firstlabel (Exhibit Floor · the first label in Citizenship Hall) ══ */
  function modFirstlabel(cfg){
    var ta = document.getElementById(cfg.ta || 'journal-assign'); if (!ta) return;
    var J = cfg.jobs || [], SMIN = cfg.sentMin || 3;
    ST.fl = ST.fl || {step:1, job:null, ex:null, open:false}; var S = ST.fl;
    var m = shell('ms-fl-mod', cfg), lamps = ''; for (var i = 0; i < 5; i++) lamps += '<i style="--d:'+(i * .3).toFixed(1)+'s"></i>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-fl-wrap"><div class="ms-fl-act"></div><div class="ms-fl-stage" hidden><div class="lamps" aria-hidden="true">'+lamps+'</div><div class="row"><div class="town" aria-hidden="true"><svg viewBox="0 0 120 80"><rect x="2" y="10" width="116" height="60" rx="6" fill="#CFE8F7" fill-opacity=".35" stroke="#E9C878" stroke-width="2"/><path d="M8 60 h104" stroke="#A9D08E" stroke-width="8"/><rect x="18" y="40" width="20" height="16" fill="#F3E7CF" stroke="#5A3A1E"/><path d="M15 40 l13 -10 l13 10 z" fill="#8E2E22"/><rect x="50" y="36" width="22" height="20" fill="#F4C37C" stroke="#5A3A1E"/><path d="M47 36 l14 -11 l14 11 z" fill="#8E2E22"/><circle cx="94" cy="42" r="10" fill="#2F7D46"/><rect x="92" y="48" width="4" height="10" fill="#6B4528"/></svg><span>The model town</span></div>' +
      '<div class="stand"><div class="card"><div class="hd">WHY A COMMUNITY NEEDS A GOVERNMENT</div><p class="tx"></p><p class="by"></p></div><i class="post"></i></div><div class="case" aria-hidden="true"><span class="cloth"></span><span class="ct"></span></div></div></div></div><div class="ms-fl-end"></div>');
    var blk = ta.closest('.activity-body') || ta.parentNode;
    var home = document.createComment('fl-home'); ta.parentNode.insertBefore(home, ta);
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild);
    $$('p, .callout, .textbox-prompt', blk).forEach(function(e){ if (!m.contains(e)) e.classList.add('ms-hide-on'); });
    var act = $('.ms-fl-act', m), show = $('.ms-fl-stage', m), end = $('.ms-fl-end', m), curUpd = null;
    $('.case .ct', m).textContent = cfg.caseT || '';
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function jOf(k){ for (var i = 0; i < J.length; i++) if (J[i].k === k) return J[i]; return null; }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return words(s) >= 3; }).length; }
    function missing(){ var o = [], v = ta.value, n = sents(v), j = jOf(S.job); if (n < SMIN) o.push('Write '+(SMIN - n)+' more sentence'+(SMIN - n === 1 ? '' : 's')+' (3 words or more each).'); if (!/government/i.test(v)) o.push('Use the word government.'); if (j && !new RegExp(j.re, 'i').test(v)) o.push('Tell about your job: '+j.word+'.'); return o; }
    function view(){ var v = ta.value.trim(); $('.card .tx', show).textContent = v || 'Your label will appear here as you write.'; $('.card .tx', show).classList.toggle('empty', !v);
      var nm = sget(NAMEK,''); $('.card .by', show).textContent = nm ? 'Label by ' + nm + ', Civic Curator' : 'Label by a Civic Curator';
      show.hidden = S.step < 3; show.classList.toggle('open', !!S.open); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; curUpd = null; var j = jOf(S.job); if (!j) S.step = 1; else if (S.ex == null && S.step > 2) S.step = 2;
      ta.classList.toggle('ms-gi-away', S.step !== 3); view();
      if (S.step === 1) { goHome(); act.innerHTML = stepCard(1, 4, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><div class="ms-pchoices col">'+J.map(function(x){ return '<button type="button" class="ms-btn'+(x.k === S.job ? '' : ' alt')+' ms-fl-j" data-k="'+x.k+'">'+x.ic+' '+esc(x.t)+'</button>'; }).join('')+'</div>');
        $$('.ms-fl-j', act).forEach(function(b){ b.onclick = function(){ SFX.click(); if (S.job !== b.dataset.k) S.ex = null; S.job = b.dataset.k; S.step = 2; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); }; }); return; }
      if (S.step === 2) { goHome(); act.innerHTML = stepCard(2, 4, cfg.s2T, '<p class="ms-gi-ok">✅ Your job: <b>'+j.ic+' '+esc(j.t)+'</b> <button type="button" class="ms-btn alt ms-fl-b1">↩️ Pick a different job</button></p><p>'+esc(cfg.s2.replace('{job}', j.word))+'</p><div class="ms-pchoices col">'+j.ex.map(function(t, i){ return '<button type="button" class="ms-btn'+(i === S.ex ? '' : ' alt')+' ms-fl-e" data-i="'+i+'">'+esc(t.charAt(0).toUpperCase() + t.slice(1))+'.</button>'; }).join('')+'</div>');
        $('.ms-fl-b1', act).onclick = function(){ SFX.click(); S.step = 1; save(); render(); };
        $$('.ms-fl-e', act).forEach(function(b){ b.onclick = function(){ SFX.click(); S.ex = +b.dataset.i; S.step = 3; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); }; }); return; }
      if (S.step === 3) { var ST3 = [cfg.st1, cfg.st2.replace('{word}', j.word), cfg.st3 + ' ' + j.ex[S.ex] + '.'];
        act.innerHTML = stepCard(3, 4, cfg.s3T, '<p>'+esc(cfg.s3)+'</p><div class="ms-gi-starts">'+ST3.map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-fl-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-fl-prev">⬅️ Back</button><button type="button" class="ms-btn big ms-fl-next">See my label ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-fl-chk', act);
        var upd = function(){ var v = ta.value, n = sents(v), o = missing(), g = /government/i.test(v), jb = new RegExp(j.re, 'i').test(v);
          chk.innerHTML = '<span class="ms-wc'+(n >= SMIN ? ' ok' : '')+'">📝 '+Math.min(n, SMIN)+' of '+SMIN+' sentences</span><span class="ms-chip'+(g ? ' ok' : '')+'">'+(g ? '✓ ' : '')+'what a government is</span><span class="ms-chip'+(jb ? ' ok' : '')+'">'+(jb ? '✓ ' : '')+esc(j.word)+'</span>'; view();
          $('.ms-fl-next', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = ST3[+b.dataset.i]; if (ta.value.indexOf(t) < 0) ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); }; });
        $('.ms-fl-prev', act).onclick = function(){ SFX.click(); S.step = 2; save(); goHome(); render(); };
        $('.ms-fl-next', act).onclick = function(){ var o = missing(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 4; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(4, 4, cfg.s4T, '<p>'+esc(cfg.s4||'')+'</p><button type="button" class="ms-btn big ms-fl-go">🏷️ '+esc(cfg.openT)+'</button>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-fl-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-fl-go', end); if (gb) gb.onclick = function(){ S.open = true; save(); SFX.fanfare(); show.classList.remove('lit'); void show.offsetWidth; if (!calm()) show.classList.add('lit'); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 1700);
        optiNod('assignment'); check(); };
      $('.ms-fl-edit', end).onclick = function(){ S.open = false; S.step = 3; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd) curUpd(); });
    var its = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && its.length && its.every(on)) markDone('assignment'); }
    its.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }


  /* ══════════ Added for 3.10_02 (U.S. Constitution and Power from the People) ══════════
     DATA.kqCards (6 King / President cards), DATA.halls (the five halls since Unit 6)
     - recess      Lobby: the Recess Boss picks the game (Day 1), then the class votes (Day 2); 2 questions
     - powerflip   Gallery main attraction: a king's town square (arrows down) → flip to We the People (ballots, a chosen leader, arrows up) → the Constitution slides in above everyone; 2 questions
     - korp        Gallery: King or President? 6 cards, one at a time, onto two stands (tap or drag)
     - caselamp    Gallery source: lift the cloth; a lamp moves down page 1 of the Constitution to 3 stops (zoom + question); Evidence Q3 box moves into the last step
     - wordbuild   Workroom: build constitution, constitute, institute, substitute from tiles (stitu = to set up), then pick the meaning
     - ballot      Exhibit Floor: side → 2 reasons → 1 evidence → the task box moves into the step (3 to 5 sentences) → drop the ballot; We lights and the glow runs through every hall */

  /* ══ MODULE: recess (Lobby · the Recess Boss) ══ */
  function modRecess(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    ST.rb = ST.rb || {st:0, q1:false, q2:false}; var S = ST.rb; // st 0 start, 1 day 1 (boss), 2 day 2 (vote)
    var m = shell('ms-rb-mod', cfg);
    var VOTE = ['s','s','t','s','j','s','t','s','j','s'], COL = ['#7B4FC4','#1A8A7D','#B5432F','#2E5FA8','#F28C1B','#2F7D46','#C0392B','#8E5A9E','#1D6FA3','#A7774A'];
    function kid(i){ var x = 52 + i * 55, y = 262, c = COL[i], max = i === 2, v = VOTE[i], tc = v === 's' ? '#2E5FA8' : (v === 't' ? '#C0392B' : '#7B4FC4');
      return '<g class="kd'+(max ? ' max' : '')+'" data-v="'+v+'">' + (max ? '<rect x="'+(x-20)+'" y="'+(y+2)+'" width="40" height="14" rx="2" fill="#A7774A" stroke="#5A3A1E" stroke-width="2"/>' : '') +
        '<g style="transform:translateY('+(max ? -14 : 0)+'px)"><path d="M'+x+' '+(y-34)+' V'+(y-12)+' M'+x+' '+(y-12)+' l-7 12 M'+x+' '+(y-12)+' l7 12" stroke="'+c+'" stroke-width="5" stroke-linecap="round" fill="none"/>' +
        '<path class="arm dn" d="M'+x+' '+(y-30)+' l-9 12 M'+x+' '+(y-30)+' l9 12" stroke="'+c+'" stroke-width="4" stroke-linecap="round" fill="none"/><path class="arm up" d="M'+x+' '+(y-30)+' l-8 12 M'+x+' '+(y-30)+' l5 -18" stroke="'+c+'" stroke-width="4" stroke-linecap="round" fill="none"/>' +
        '<circle cx="'+x+'" cy="'+(y-44)+'" r="10" fill="#E3B46E" stroke="#8A5A2A" stroke-width="1.5"/><circle cx="'+(x-3.5)+'" cy="'+(y-46)+'" r="1.4" fill="#2E2A26"/><circle cx="'+(x+3.5)+'" cy="'+(y-46)+'" r="1.4" fill="#2E2A26"/>' +
        '<path class="mo nt" d="M'+(x-4)+' '+(y-40)+' h8" stroke="#2E2A26" stroke-width="1.6" stroke-linecap="round"/><path class="mo hp" d="M'+(x-4.5)+' '+(y-41)+' q4.5 5 9 0" stroke="#2E2A26" stroke-width="1.6" fill="none" stroke-linecap="round"/><path class="mo sd" d="M'+(x-4.5)+' '+(y-38)+' q4.5 -5 9 0" stroke="#2E2A26" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
        (max ? '<path d="M'+(x-11)+' '+(y-50)+' q11 -12 22 0 z" fill="#C0392B"/><path d="M'+(x+9)+' '+(y-51)+' h9" stroke="#C0392B" stroke-width="3"/><circle cx="'+(x+8)+'" cy="'+(y-24)+'" r="3.2" fill="#E9C878" stroke="#7E5A16"/><text x="'+x+'" y="'+(y+30)+'" text-anchor="middle" class="nm">Max</text>' : '') +
        '<rect class="vt" x="'+(x-21)+'" y="'+(y-86)+'" width="42" height="16" rx="4" fill="'+tc+'"/><text class="vt" x="'+x+'" y="'+(y-74)+'" text-anchor="middle">'+(v === 's' ? 'soccer' : (v === 't' ? 'tag' : 'rope'))+'</text></g></g>'; }
    var kids = ''; for (var i = 0; i < 10; i++) kids += kid(i);
    var scene = '<svg viewBox="0 0 600 300" class="ms-rb-scene" role="img" aria-label="A drawing of a school playground at recess. Ten children stand in a row. One boy, Max, stands on a box with a whistle. A chalkboard shows today\'s game.">' +
      '<rect width="600" height="300" fill="#CFE8F7"/><rect y="150" width="600" height="150" fill="#A9D08E"/><rect y="244" width="600" height="56" fill="#C9B48A"/>' +
      '<path d="M0 150 H600" stroke="#8A7A5A" stroke-width="3"/>' + (function(){ var f = ''; for (var x = 8; x < 600; x += 22) f += '<path d="M'+x+' 150 v-26" stroke="#8A7A5A" stroke-width="2.5"/>'; return f + '<path d="M0 130 H600" stroke="#8A7A5A" stroke-width="2.5"/>'; })() +
      '<path d="M470 150 V96 h14 V150 M484 100 L560 148" stroke="#C0392B" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M466 96 h22" stroke="#E9C878" stroke-width="6"/>' +
      '<rect x="40" y="30" width="200" height="96" rx="6" fill="#2F4A3A" stroke="#7A4E1E" stroke-width="7"/><text x="140" y="56" text-anchor="middle" class="bh">TODAY\'S GAME</text><text x="140" y="98" text-anchor="middle" class="bg g0">?</text><text x="140" y="98" text-anchor="middle" class="bg g1">TAG</text><text x="140" y="98" text-anchor="middle" class="bg g2">SOCCER</text><text x="140" y="118" text-anchor="middle" class="by"></text>' +
      '<g class="tally"><rect x="268" y="30" width="176" height="96" rx="6" fill="#FFFDF6" stroke="#B9A77A" stroke-width="3"/><text x="356" y="50" text-anchor="middle" class="th">VOTES</text>' +
        [['Soccer', 6, '#2E5FA8', 64], ['Tag', 2, '#C0392B', 86], ['Jump rope', 2, '#7B4FC4', 108]].map(function(r){ return '<text x="278" y="'+(r[3]+4)+'" class="tl">'+r[0]+'</text><rect class="bar" x="350" y="'+(r[3]-6)+'" width="'+(r[1]*13)+'" height="12" rx="3" fill="'+r[2]+'"/><text x="'+(356 + r[1]*13)+'" y="'+(r[3]+4)+'" class="tn">'+r[1]+'</text>'; }).join('') + '</g>' +
      '<circle cx="530" cy="232" r="11" fill="#fff" stroke="#2E2A26" stroke-width="2"/><path d="M523 228 l7 -3 l6 4 l-2 7 h-8 z" fill="#2E2A26"/>' + kids + '</svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-rb-wrap"><div class="ms-rb-stage">'+scene+'<p class="ms-credit">'+esc(cfg.modelT || '')+'</p></div><div class="ms-rb-act" aria-live="polite"></div></div>');
    after(anchor, m);
    var act = $('.ms-rb-act', m), stage = $('.ms-rb-stage', m), svg = $('.ms-rb-scene', m);
    function look(){ svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function render(){
      stage.className = 'ms-rb-stage s' + S.st; var N = 4;
      $('.by', svg).textContent = S.st === 1 ? 'picked by Max' : (S.st === 2 ? 'picked by a class vote' : '');
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (S.st === 0) { act.innerHTML = stepCard(1, N, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><button type="button" class="ms-btn big ms-rb-go">'+esc(cfg.go1)+'</button>');
        $('.ms-rb-go', act).onclick = function(){ SFX.miss(); S.st = 1; save(); render(); look(); }; return; }
      if (S.st === 1) { act.innerHTML = stepCard(2, N, cfg.s2T, '<div class="ms-notyet">🙁 '+esc(cfg.day1)+'</div><p>'+esc(cfg.s2)+'</p><button type="button" class="ms-btn big ms-rb-go">'+esc(cfg.go2)+'</button>');
        $('.ms-rb-go', act).onclick = function(){ SFX.chime(); S.st = 2; save(); render(); look(); }; return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? 4 : 3, N, q.title, (S.q1 ? '' : '<div class="ms-vd-thanks">✅ '+esc(cfg.voted)+'</div>') + cq.html); cq.bind(act);
    }
    render(); if (S.q2) markDone('scene');
  }

  /* ══ MODULE: powerflip (Gallery main attraction · who holds the power?) ══ */
  function modPowerflip(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    ST.pw = ST.pw || {st:0, q1:false, q2:false}; var S = ST.pw; // st 0 king waits, 1 king's rule, 2 the people vote, 3 the Constitution is above everyone
    var m = shell('ms-pw-mod', cfg);
    var COL = ['#7B4FC4','#1A8A7D','#B5432F','#2E5FA8','#F28C1B','#2F7D46','#8E5A9E','#1D6FA3'];
    function per(x, y, c, i){ return '<g class="pp" style="--d:'+(i * .12).toFixed(2)+'s"><path d="M'+x+' '+(y-26)+' V'+(y-10)+' M'+x+' '+(y-10)+' l-6 10 M'+x+' '+(y-10)+' l6 10 M'+x+' '+(y-22)+' l-8 9 M'+x+' '+(y-22)+' l8 9" stroke="'+c+'" stroke-width="4.5" stroke-linecap="round" fill="none"/><circle cx="'+x+'" cy="'+(y-34)+'" r="8" fill="#E3B46E" stroke="#8A5A2A" stroke-width="1.5"/>' +
      '<g class="bl" style="--bx:'+(210 - x)+'px;--by:'+(238 - y + 26)+'px"><rect x="'+(x-6)+'" y="'+(y-30)+'" width="12" height="9" fill="#FFFDF6" stroke="#5A3A1E" stroke-width="1.2"/><path d="M'+(x-3)+' '+(y-26)+' l2 2 l4 -4" stroke="#1A7A4A" stroke-width="1.4" fill="none"/></g></g>'; }
    var people = '', X = [62, 128, 194, 260, 340, 406, 472, 538]; X.forEach(function(x, i){ people += per(x, 318, COL[i], i); });
    function arrows(cls, up){ return ['M300 168 L120 272', 'M300 168 L300 272', 'M300 168 L480 272'].map(function(d){ return '<path class="'+cls+'" d="'+d+'" marker-'+(up ? 'start' : 'end')+'="url(#ms-pw-ah'+(up ? 'u' : 'd')+')"/>'; }).join(''); }
    var scene = '<svg viewBox="0 0 600 340" class="ms-pw-scene" role="img" aria-label="A drawing of a town square. At the top is a stone platform with a seat. Eight people stand in the square below. Arrows show who holds the power.">' +
      '<defs><marker id="ms-pw-ahd" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#B5290F"/></marker><marker id="ms-pw-ahu" viewBox="0 0 10 10" refX="3" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1A7A4A"/></marker></defs>' +
      '<rect width="600" height="340" fill="#E9DFC8"/><rect y="200" width="600" height="140" fill="#D8C9A6"/>' + (function(){ var g = ''; for (var x = 0; x <= 600; x += 40) g += '<path d="M'+x+' 200 L'+(300 + (x - 300) * 1.6)+' 340" stroke="#C4B48E" stroke-width="1.5"/>'; return g + '<path d="M0 250 H600 M0 300 H600" stroke="#C4B48E" stroke-width="1.5"/>'; })() +
      '<rect x="210" y="96" width="180" height="40" fill="#B9AE98" stroke="#7A6E58" stroke-width="2.5"/><rect x="226" y="136" width="148" height="12" fill="#A89C84"/><rect x="242" y="148" width="116" height="12" fill="#978B73"/><path d="M226 96 V60 h148 V96" fill="none" stroke="#7A6E58" stroke-width="3"/><rect x="282" y="66" width="36" height="30" rx="4" fill="#8E2E22" stroke="#5A1A12" stroke-width="2"/>' +
      '<g class="king"><path d="M300 78 V92" stroke="#6B2A8E" stroke-width="16" stroke-linecap="round"/><circle cx="300" cy="70" r="9" fill="#E3B46E" stroke="#8A5A2A" stroke-width="1.5"/><path class="crown" d="M290 63 l3 -10 l4 6 l3 -9 l3 9 l4 -6 l3 10 z" fill="#F3C64A" stroke="#9C7420" stroke-width="1.5"/><text x="300" y="118" text-anchor="middle" class="lb">KING</text></g>' +
      '<g class="leader"><path d="M300 78 V92" stroke="#2E5FA8" stroke-width="14" stroke-linecap="round"/><path d="M294 76 l12 12" stroke="#E9C878" stroke-width="3"/><circle cx="300" cy="70" r="9" fill="#C68B5A" stroke="#8A5A2A" stroke-width="1.5"/><text x="300" y="118" text-anchor="middle" class="lb">LEADER</text><text x="300" y="131" text-anchor="middle" class="lb2">chosen by a vote</text></g>' +
      '<g class="notice" transform="translate(0 18)"><rect x="18" y="40" width="168" height="92" rx="4" fill="#FFFDF6" stroke="#7A4E1E" stroke-width="4"/><text x="102" y="62" text-anchor="middle" class="nh k">BY ORDER OF THE KING</text><text x="102" y="84" text-anchor="middle" class="nt k">Everyone pays 5 coins</text><text x="102" y="102" text-anchor="middle" class="nt k">to the king.</text><text x="102" y="120" text-anchor="middle" class="nt k">No one may vote.</text>' +
        '<text x="102" y="62" text-anchor="middle" class="nh p">RULES FOR THE TOWN</text><text x="102" y="84" text-anchor="middle" class="nt p">Made by leaders</text><text x="102" y="102" text-anchor="middle" class="nt p">the people chose.</text><text x="102" y="120" text-anchor="middle" class="nt p">Next vote: in 2 years.</text></g>' +
      '<g class="box"><rect x="186" y="226" width="48" height="34" rx="3" fill="#A7774A" stroke="#5A3A1E" stroke-width="2"/><path d="M198 231 h24" stroke="#3B2A1E" stroke-width="3"/><text x="210" y="252" text-anchor="middle" class="bx">VOTE</text></g>' +
      '<g class="ark">'+arrows('a', false)+'<text x="310" y="226" class="pwr k">power</text></g>' +
      '<g class="arp">'+arrows('a', true)+'<text x="310" y="226" class="pwr p">power</text></g>' +
      people +
      '<g class="con"><rect x="40" y="6" width="520" height="40" rx="6" fill="#F3E2B8" stroke="#9C7420" stroke-width="3"/><circle cx="40" cy="26" r="14" fill="#E2CC94" stroke="#9C7420" stroke-width="3"/><circle cx="560" cy="26" r="14" fill="#E2CC94" stroke="#9C7420" stroke-width="3"/><text x="300" y="25" text-anchor="middle" class="ct">THE CONSTITUTION</text><text x="300" y="40" text-anchor="middle" class="ct2">rules for everyone, the leader too</text></g></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-pw-wrap"><div class="ms-pw-stage">'+scene+'<p class="ms-credit">'+esc(cfg.modelT || '')+'</p></div><div class="ms-pw-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-pw-act', m), stage = $('.ms-pw-stage', m), svg = $('.ms-pw-scene', m);
    function look(){ svg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function btn(t, cls){ return '<button type="button" class="ms-btn big '+cls+'">'+esc(t)+'</button>'; }
    function render(){
      stage.className = 'ms-pw-stage s' + S.st; var N = 5;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.st < 3) { var c = [[cfg.s1T, '', cfg.s1, cfg.go1], [cfg.s2T, '<div class="ms-notyet">👑 '+esc(cfg.kingT)+'</div>', cfg.s2, cfg.go2], [cfg.s3T, '<div class="ms-vd-thanks">🗳️ '+esc(cfg.peopleT)+'</div>', cfg.s3, cfg.go3]][S.st];
        act.innerHTML = stepCard(S.st + 1, N, c[0], c[1] + '<p>'+esc(c[2])+'</p>' + btn(c[3], 'ms-pw-go'));
        $('.ms-pw-go', act).onclick = function(){ [SFX.miss, SFX.chime, SFX.chime][S.st](); S.st++; save(); render(); look(); }; return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { ST.gal = ST.gal||{}; ST.gal.flip = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? 5 : 4, N, q.title, (S.q1 ? '' : '<div class="ms-vd-thanks">📜 '+esc(cfg.conT)+'</div>') + cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: korp (Gallery · King or President? six cards onto two stands) ══ */
  function modKorp(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var C = DATA.kqCards || []; ST.kq = ST.kq || {i:0}; var S = ST.kq;
    var m = shell('ms-kq-mod', cfg);
    var sides = [{k:'k', ic:'👑', t:cfg.kT}, {k:'p', ic:'🏛️', t:cfg.pT}];
    m.insertAdjacentHTML('beforeend', '<div class="ms-kq-wrap"><div class="ms-kq-stands">'+sides.map(function(s){ return '<div class="ms-kq-stand" data-s="'+s.k+'" role="button" tabindex="0" aria-label="Put the card on the '+esc(s.t)+' stand"><div class="hd"><span>'+s.ic+'</span>'+esc(s.t)+'</div><ul></ul></div>'; }).join('')+'</div><div class="ms-kq-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-kq-act', m);
    function paint(){ $$('.ms-kq-stand', m).forEach(function(st){ st.querySelector('ul').innerHTML = C.slice(0, S.i).filter(function(c){ return c.s === st.dataset.s; }).map(function(c){ return '<li>'+esc(c.t)+'</li>'; }).join(''); }); }
    function put(side, fromEl){ if (S.i >= C.length) return; var c = C[S.i], fb = $('.ms-exfb', act);
      if (side !== c.s) { SFX.miss(); var cd = $('.ms-kq-card', act); if (cd) { cd.classList.remove('no'); void cd.offsetWidth; cd.classList.add('no'); } if (fb) fb.innerHTML = '<div class="ms-notyet">🤔 '+esc(c.miss)+'</div>'; return; }
      SFX.chime(); S.i++; save(); paint(); var st = $('.ms-kq-stand[data-s="'+side+'"]', m); st.classList.remove('got'); void st.offsetWidth; st.classList.add('got');
      act.innerHTML = stepCard(S.i, C.length, 'Card '+S.i+' of '+C.length+' · placed', '<div class="ms-vd-thanks">✅ '+esc(c.ok)+'</div><button type="button" class="ms-btn big ms-kq-nx">'+(S.i < C.length ? 'Next card ➡️' : 'Done ✓')+'</button>');
      $('.ms-kq-nx', act).onclick = function(){ SFX.click(); if (S.i >= C.length) { ST.gal = ST.gal||{}; ST.gal.kq = 1; save(); galleryCheck(); SFX.fanfare(); } render(); }; }
    $$('.ms-kq-stand', m).forEach(function(st){ st.addEventListener('click', function(){ if ($('.ms-kq-card', act)) put(st.dataset.s); }); st.addEventListener('keydown', function(e){ if ((e.key === 'Enter' || e.key === ' ') && $('.ms-kq-card', act)) { e.preventDefault(); put(st.dataset.s); } }); });
    function render(){ paint();
      if (S.i >= C.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var c = C[S.i];
      act.innerHTML = stepCard(S.i + 1, C.length, 'Card '+(S.i + 1)+' of '+C.length, '<div class="ms-kq-card" tabindex="0">🃏 '+esc(c.t)+'</div><p class="ms-wm-do">👆 '+esc(cfg.doT)+'</p><div class="ms-pchoices">'+sides.map(function(s){ return '<button type="button" class="ms-btn alt ms-kq-b" data-s="'+s.k+'">'+s.ic+' '+esc(s.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div>');
      $$('.ms-kq-b', act).forEach(function(b){ b.onclick = function(){ put(b.dataset.s); }; });
      dragger($('.ms-kq-card', act), function(moved, t){ if (moved && t) put(t.dataset.s); }, '.ms-kq-stand');
    }
    render();
  }

  /* ══ MODULE: caselamp (Gallery source · page 1 of the Constitution under a moving lamp) ══ */
  function modCaselamp(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var SP = cfg.stops || [], ta = document.getElementById(cfg.ta || 'journal-q3'), NEED = cfg.wordMin || 10, RE = new RegExp(cfg.needRe || 'vot', 'i');
    ST.lp = ST.lp || {open:false, i:0, ok:false, done:false}; var S = ST.lp;
    var m = shell('ms-lp-mod', cfg);
    var rings = SP.map(function(s){ var b = s.box; return '<rect class="ring" data-k="'+s.k+'" x="'+(b[0]-10)+'" y="'+(b[1]-8)+'" width="'+(b[2]-b[0]+20)+'" height="'+(b[3]-b[1]+16)+'" rx="12"/>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-lp-wrap"><div class="ms-lp-case"><div class="hood" aria-hidden="true"><i></i></div><div class="glass"><img src="'+img(cfg.img)+'" alt="'+esc(cfg.alt||'')+'">' +
      '<svg viewBox="0 0 1000 1210" preserveAspectRatio="none" aria-hidden="true"><defs><mask id="ms-lp-mk"><rect width="1000" height="1210" fill="#fff"/><ellipse class="hole" cx="500" cy="100" rx="300" ry="90" fill="#000"/></mask></defs><rect class="dim" width="1000" height="1210" mask="url(#ms-lp-mk)"/>'+rings+'</svg>' +
      '<div class="cloth" aria-hidden="true"><b>'+esc(cfg.clothT||'')+'</b></div></div><p class="ms-credit">'+esc(cfg.credit||'')+'</p></div><div class="ms-lp-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-lp-act', m), cs = $('.ms-lp-case', m), hole = $('.hole', m), home = null, note = null, curUpd = null;
    if (ta) { home = document.createComment('lp-home'); ta.parentNode.insertBefore(home, ta);
      var prev = ta.previousElementSibling, hid = 0; while (prev && hid < 2 && (prev.classList.contains('textbox-prompt') || prev.classList.contains('q-block'))) { prev.classList.add('ms-hide-on'); prev = prev.previousElementSibling; hid++; }
      note = el('div', 'ms-pu-note ms-lp-note ms-only', ''); ta.parentNode.insertBefore(note, home); }
    function goHome(){ if (ta && ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function miss(){ var o = [], v = ta ? ta.value : '', n = words(v); if (n < NEED) o.push('Add '+(NEED-n)+' more word'+(NEED-n===1?'':'s')+'.'); if (!RE.test(v)) o.push(cfg.needT || 'Use the word vote.'); return o; }
    function paintNote(){ if (!note) return; var v = ta.value.trim(); note.innerHTML = '<b>Question 3</b> '+esc(cfg.noteT||'')+' ' + (v ? '✅ You wrote: <i>'+esc(v)+'</i>' : 'You have not written it yet. <button type="button" class="ms-btn alt ms-lp-goto">Go to the Gallery</button>'); var b = $('.ms-lp-goto', note); if (b) b.onclick = function(){ go('explore'); }; }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function lamp(){ var k = S.open ? Math.min(S.i, SP.length - 1) : 0, b = SP[k] ? SP[k].box : [0,0,1000,200], cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2;
      hole.style.cx = cx + 'px'; hole.style.cy = cy + 'px'; hole.style.rx = Math.max(170, (b[2] - b[0]) * .75) + 'px'; hole.style.ry = Math.max(70, (b[3] - b[1]) * 1.6) + 'px';
      cs.classList.toggle('open', !!S.open); cs.classList.toggle('free', !!S.done || S.i >= SP.length);
      $$('.ring', m).forEach(function(r){ r.classList.toggle('on', S.open && S.i < SP.length && r.dataset.k === SP[S.i].k); }); }
    function look(){ cs.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      lamp(); paintNote(); var N = SP.length + 2;
      if (ta) ta.classList.toggle('ms-gi-away', !(S.i >= SP.length && !S.done));
      if (S.done) { goHome(); act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-lp-edit">✏️ Edit my answer</button></div>'; $('.ms-lp-edit', act).onclick = function(){ S.done = false; save(); render(); }; return; }
      if (!S.open) { goHome(); act.innerHTML = stepCard(1, N, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><button type="button" class="ms-btn big ms-lp-open">'+esc(cfg.s1btn)+'</button>');
        $('.ms-lp-open', act).onclick = function(){ SFX.chime(); S.open = true; save(); render(); look(); }; return; }
      if (S.i < SP.length) { goHome(); var s = SP[S.i];
        var cq = choiceQ(s, S.i + 1, function(){ S.ok = true; save();
          var b = document.createElement('button'); b.type = 'button'; b.className = 'ms-btn big ms-lp-next'; b.textContent = S.i + 1 < SP.length ? (cfg.moveT || 'Move the lamp down ⬇️') : 'Next ➡️'; $('.ms-stepcard', act).appendChild(b);
          b.onclick = function(){ SFX.click(); S.i++; S.ok = false; save(); render(); look(); }; });
        act.innerHTML = stepCard(S.i + 2, N, s.title, '<figure class="ms-lp-zoom"><img src="'+img(s.zoom)+'" alt="'+esc(s.zoomAlt||'')+'"><figcaption>🔍 '+esc(s.zoomT||'')+'</figcaption></figure>' + cq.html); cq.bind(act); return; }
      if (!ta) { S.done = true; ST.gal = ST.gal||{}; ST.gal.lamp = 1; save(); galleryCheck(); render(); return; }
      act.innerHTML = stepCard(N, N, cfg.writeT, '<p>'+esc(cfg.writeP)+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-lp-chk"></div>' +
        '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-lp-save">Save my answer ✓</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
      $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-lp-chk', act);
      var upd = function(){ var v = ta.value, o = miss(), w = words(v), h = RE.test(v); chk.innerHTML = '<span class="ms-wc'+(w >= NEED ? ' ok' : '')+'">📝 '+Math.min(w, NEED)+' of '+NEED+' words</span><span class="ms-chip'+(h ? ' ok' : '')+'">'+(h ? '✓ ' : '')+esc(cfg.chipT || 'uses the word vote')+'</span>';
        $('.ms-lp-save', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
      curUpd = upd; upd();
      $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = (cfg.starters||[])[+b.dataset.i]; if (ta.value.indexOf(t) < 0) ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); }; });
      $('.ms-lp-save', act).onclick = function(){ var o = miss(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; }
        S.done = true; ST.gal = ST.gal||{}; ST.gal.lamp = 1; save(); galleryCheck(); SFX.fanfare(); render(); };
    }
    if (ta) ta.addEventListener('input', function(){ paintNote(); if (curUpd && S.i >= SP.length && !S.done) curUpd(); });
    render();
  }

  /* ══ MODULE: wordbuild (Workroom · build four words from parts, then pick the meaning) ══ */
  function modWordbuild(cfg){
    var anchor = $(cfg.anchor || '#panel-check .quiz-card'); if (!anchor) return;
    var W = cfg.words || [], T = cfg.tiles || []; ST.sb = ST.sb || {i:0, n:0, ph:0}; var S = ST.sb;
    var m = shell('ms-sb-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-wr-card"><span class="ms-wr-root">'+esc(cfg.root)+'</span><span class="ms-wr-eq">=</span><span class="ms-wr-mean">'+esc(cfg.means)+'</span></div><div class="ms-sb-act"></div>');
    after(anchor, m);
    var act = $('.ms-sb-act', m);
    function told(){ window._rootMatchDone = S.i >= W.length; if (typeof window.gatherAnswers === 'function') try { window.gatherAnswers(); } catch(e){} }
    function render(){
      told();
      if (S.i >= W.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var w = W[S.i], built = w.parts.slice(0, S.n);
      var slots = '<div class="ms-sb-slots" aria-label="'+esc(w.w)+'">'+w.parts.map(function(p, j){ return '<span class="sl'+(j < S.n ? ' full'+(p === cfg.root ? ' rt' : '') : (j === S.n ? ' cur' : ''))+'">'+(j < S.n ? esc(p) : '<i>'+esc(p)+'</i>')+'</span>'; }).join('')+'</div>';
      if (S.ph === 0) { act.innerHTML = stepCard(S.i + 1, W.length, 'Word '+(S.i + 1)+' of '+W.length+' · Build it', '<p>'+esc((cfg.buildT||'Build the word {w}.').replace('{w}', w.w))+'</p>' + slots +
          '<p class="ms-wm-do">👆 '+esc(cfg.tapT||'')+'</p><div class="ms-sb-tiles">'+T.map(function(t){ return '<button type="button" class="ms-btn alt ms-sb-t'+(t === cfg.root ? ' rt' : '')+'" data-t="'+esc(t)+'">'+esc(t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite"></div>');
        $$('.ms-sb-t', act).forEach(function(b){ b.onclick = function(){ var want = w.parts[S.n];
          if (b.dataset.t !== want) { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc((cfg.missT||'').replace('{n}', ['first','second','third'][S.n] || 'next').replace('{w}', w.w))+'</div>'; return; }
          SFX.chime(); S.n++; if (S.n >= w.parts.length) S.ph = 1; save(); render(); }; });
        return; }
      act.innerHTML = stepCard(S.i + 1, W.length, 'Word '+(S.i + 1)+' of '+W.length+' · What does it mean?', slots + '<p>'+esc((cfg.askT||'').replace('{w}', w.w))+'</p>' +
        '<div class="ms-pchoices col">'+w.opts.map(function(o, k){ return '<button type="button" class="ms-btn ms-sb-o'+(S.ph === 2 && o.ok ? ' ok' : '')+'" data-k="'+k+'">'+esc(o.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite">'+(S.ph === 2 ? '<div class="ms-vd-thanks">✅ '+esc(w.ok||'')+'</div>' : '')+'</div>' +
        (S.ph === 2 ? '<button type="button" class="ms-btn big ms-sb-next">'+(S.i + 1 < W.length ? 'Next word ➡️' : 'Done ✓')+'</button>' : ''));
      $$('.ms-sb-o', act).forEach(function(b){ b.onclick = function(){ var o = w.opts[+b.dataset.k];
        if (o.ok) { SFX.chime(); S.ph = 2; save(); render(); } else { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); if (S.ph !== 2) $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc(w.fb||'')+'</div>'; } }; });
      var nx = $('.ms-sb-next', act); if (nx) nx.onclick = function(){ S.i++; S.n = 0; S.ph = 0; save(); SFX.click(); render(); if (S.i >= W.length) SFX.fanfare(); };
    }
    render();
  }

  /* ══ MODULE: ballot (Exhibit Floor · who holds the power? side, reasons, evidence, sentences, the ballot box) ══ */
  function modBallot(cfg){
    var ta = document.getElementById(cfg.ta || 'journal-assign'); if (!ta) return;
    var SD = cfg.sides || {}, H = DATA.halls || [], SMIN = cfg.sentMin || 3, SMAX = cfg.sentMax || 5;
    ST.bt = ST.bt || {step:1, side:null, r:[], ev:null, open:false}; var S = ST.bt; S.r = S.r || [];
    var m = shell('ms-bt-mod', cfg);
    var signs = H.map(function(h, i){ return '<span class="hs" style="--d:'+(0.9 + i * .45).toFixed(2)+'s"><b>'+h.ic+'</b>'+esc(h.t)+'<small>'+esc(h.u)+'</small></span>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-bt-wrap"><div class="ms-bt-act"></div><div class="ms-bt-stage" hidden><div class="halls" aria-hidden="true">'+signs+'</div><div class="row"><div class="case" aria-hidden="true"><div class="pg"><span class="we">We</span> <span>the People</span><i></i><i></i><i></i></div><small>The U.S. Constitution</small></div>' +
      '<div class="slip"><div class="card"><div class="hd">MY BALLOT · WHO HOLDS THE POWER?</div><p class="sd"></p><p class="tx"></p><p class="by"></p></div></div><div class="bbox" aria-hidden="true"><span class="slot"></span><b>BALLOTS</b></div></div><p class="next">'+esc(cfg.nextT||'')+'</p></div></div><div class="ms-bt-end"></div>');
    var blk = ta.closest('.activity-body') || ta.parentNode;
    var home = document.createComment('bt-home'); ta.parentNode.insertBefore(home, ta);
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild);
    $$('p, .callout, .textbox-prompt', blk).forEach(function(e){ if (!m.contains(e)) e.classList.add('ms-hide-on'); });
    var act = $('.ms-bt-act', m), show = $('.ms-bt-stage', m), end = $('.ms-bt-end', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return words(s) >= 3; }).length; }
    function side(){ return SD[S.side]; }
    function hasSide(v){ return side() && new RegExp(side().re, 'i').test(v); }
    function hasEv(v){ return new RegExp(cfg.evRe, 'i').test(v); }
    function missing(){ var o = [], v = ta.value, n = sents(v); if (n < SMIN) o.push('Write '+(SMIN - n)+' more sentence'+(SMIN - n === 1 ? '' : 's')+' (3 words or more each).'); if (n > SMAX) o.push('Keep it to '+SMAX+' sentences or fewer.');
      if (!hasSide(v)) o.push('Say which side you choose.'); if (!/because|reason/i.test(v)) o.push('Give your reasons. Use the word because or reason.'); if (!hasEv(v)) o.push('Use your piece of evidence.'); return o; }
    function view(){ var d = side(), v = ta.value.trim(); $('.card .sd', show).textContent = d ? d.ic + ' ' + d.t : ''; $('.card .tx', show).textContent = v || 'Your sentences will appear here as you write.'; $('.card .tx', show).classList.toggle('empty', !v);
      var nm = sget(NAMEK,''); $('.card .by', show).textContent = nm ? nm + ', Civic Curator' : 'A Civic Curator'; show.hidden = S.step < 4; show.classList.toggle('open', !!S.open); }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; curUpd = null; var d = side(), N = 5;
      if (!d) S.step = 1; else if (S.r.length < 2 && S.step > 2) S.step = 2; else if (S.ev == null && S.step > 3) S.step = 3;
      ta.classList.toggle('ms-gi-away', S.step !== 4); view();
      function sc(){ act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); }
      function got(){ return '<p class="ms-gi-ok">✅ Your side: <b>'+d.ic+' '+esc(d.t)+'</b> <button type="button" class="ms-btn alt ms-bt-b1">↩️ Change my side</button></p>'; }
      function bindB1(){ var b = $('.ms-bt-b1', act); if (b) b.onclick = function(){ SFX.click(); S.step = 1; save(); goHome(); render(); }; }
      if (S.step === 1) { goHome(); act.innerHTML = stepCard(1, N, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><div class="ms-bt-sides">'+Object.keys(SD).map(function(k){ var x = SD[k]; return '<button type="button" class="ms-bt-side'+(k === S.side ? ' on' : '')+'" data-k="'+k+'"><b>'+x.ic+' '+esc(x.t)+'</b><span>'+esc(x.d)+'</span></button>'; }).join('')+'</div>');
        $$('.ms-bt-side', act).forEach(function(b){ b.onclick = function(){ SFX.click(); if (S.side !== b.dataset.k) { S.r = []; S.ev = null; } S.side = b.dataset.k; S.step = 2; save(); render(); sc(); }; }); return; }
      if (S.step === 2) { goHome(); act.innerHTML = stepCard(2, N, cfg.s2T, got() + '<p>'+esc(cfg.s2)+'</p><div class="ms-pchoices col">'+d.reasons.map(function(t, i){ var on = S.r.indexOf(i) >= 0; return '<button type="button" class="ms-btn'+(on ? '' : ' alt')+' ms-bt-r" data-i="'+i+'" aria-pressed="'+on+'">'+(on ? '✓ ' : '')+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-bt-n2'+(S.r.length === 2 ? '' : ' ms-notready')+'">Next ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        bindB1();
        $$('.ms-bt-r', act).forEach(function(b){ b.onclick = function(){ var i = +b.dataset.i, k = S.r.indexOf(i); if (k >= 0) S.r.splice(k, 1); else { if (S.r.length >= 2) S.r.shift(); S.r.push(i); } SFX.click(); save(); render(); }; });
        $('.ms-bt-n2', act).onclick = function(){ if (S.r.length < 2) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Pick '+(2 - S.r.length)+' more reason'+(S.r.length === 1 ? '' : 's')+'.</div>'; return; } SFX.click(); S.step = 3; save(); render(); sc(); }; return; }
      if (S.step === 3) { goHome(); act.innerHTML = stepCard(3, N, cfg.s3T, got() + '<p>'+esc(cfg.s3)+'</p><div class="ms-pchoices col">'+d.ev.map(function(t, i){ return '<button type="button" class="ms-btn'+(i === S.ev ? '' : ' alt')+' ms-bt-e" data-i="'+i+'">📜 '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-bt-p3">⬅️ Back</button></div>');
        bindB1(); $('.ms-bt-p3', act).onclick = function(){ SFX.click(); S.step = 2; save(); render(); };
        $$('.ms-bt-e', act).forEach(function(b){ b.onclick = function(){ SFX.click(); S.ev = +b.dataset.i; S.step = 4; save(); render(); sc(); }; }); return; }
      if (S.step === 4) { var notes = S.r.map(function(i){ return '<span>💡 '+esc(d.reasons[i])+'</span>'; }).join('') + '<span>📜 '+esc(d.ev[S.ev])+'</span>';
        var ST4 = [cfg.st1.replace('{side}', d.say), cfg.st2, cfg.st3, cfg.st4];
        act.innerHTML = stepCard(4, N, cfg.s4T, got() + '<p>'+esc(cfg.s4)+'</p><div class="ms-cp-notes">'+notes+'</div><div class="ms-gi-starts">'+ST4.map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-bt-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-bt-p4">⬅️ Back</button><button type="button" class="ms-btn big ms-bt-n4">See my ballot ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        bindB1(); $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-bt-chk', act);
        var upd = function(){ var v = ta.value, n = sents(v), o = missing(), a = hasSide(v), r = /because|reason/i.test(v), e = hasEv(v);
          chk.innerHTML = '<span class="ms-wc'+(n >= SMIN && n <= SMAX ? ' ok' : '')+'">📝 '+n+' sentence'+(n === 1 ? '' : 's')+' (3 to 5)</span><span class="ms-chip'+(a ? ' ok' : '')+'">'+(a ? '✓ ' : '')+'your side</span><span class="ms-chip'+(r ? ' ok' : '')+'">'+(r ? '✓ ' : '')+'reasons</span><span class="ms-chip'+(e ? ' ok' : '')+'">'+(e ? '✓ ' : '')+'evidence</span>'; view();
          $('.ms-bt-n4', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = ST4[+b.dataset.i]; if (ta.value.indexOf(t) < 0) ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); }; });
        $('.ms-bt-p4', act).onclick = function(){ SFX.click(); S.step = 3; save(); goHome(); render(); };
        $('.ms-bt-n4', act).onclick = function(){ var o = missing(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 5; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(5, N, cfg.s5T, '<p>'+esc(cfg.s5||'')+'</p><button type="button" class="ms-btn big ms-bt-go">🗳️ '+esc(cfg.openT)+'</button>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-bt-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-bt-go', end); if (gb) gb.onclick = function(){ S.open = true; save(); SFX.fanfare(); show.classList.remove('lit'); void show.offsetWidth; if (!calm()) show.classList.add('lit'); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 3200);
        optiNod('assignment'); check(); };
      $('.ms-bt-edit', end).onclick = function(){ S.open = false; S.step = 4; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd) curUpd(); });
    var its = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && its.length && its.every(on)) markDone('assignment'); }
    its.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }


  /* ══════════ Added for 3.10_03 (Local, State, and National Government) ══════════
     DATA.levels (the three levels: name, color, leader, meeting place), DATA.floorTix (the elevator tickets)
     Shared drawing: lvTower() (the tall three-level model on its round platform, glass elevator on the side), lvSchool()
     - envelope    Lobby: address a letter one line at a time (town → Florida → USA); each line lights one level of the model; 2 questions
     - whichfloor  Gallery main attraction: Which Floor? 6 tickets, press floor 1, 2 or 3, the elevator rides up and the doors open; 2 questions
     - schoolxray  Gallery: one school, three see-through layers (local, state, national); 1 question; Evidence Q3 box moves into the last step
     - threebldg   Gallery source: three real buildings (Florida Capitol, U.S. Capitol, Tampa City Hall), match each to its level; 2 questions
     - loctrain    Workroom: hook four loc words onto a little train by meaning; the train rolls from place to place
     - plaques     Exhibit Floor: one plaque per level + a base plaque (inputs in the steps), the task box in the last step; the model lights and beams join the school */

  var LV_YB = [425, 305, 185], LV_X = [[50, 320], [70, 300], [90, 280]];
  function lvTower(o){
    o = o || {}; var L = DATA.levels || [], s = '';
    // platform
    s += '<ellipse cx="190" cy="450" rx="186" ry="17" fill="#6E4A26"/><ellipse cx="190" cy="444" rx="186" ry="15" fill="#B88A2A"/><ellipse cx="190" cy="443" rx="170" ry="11" fill="#C99B3C"/>';
    // posts between tiers
    for (var k = 1; k < 3; k++) { var x0 = LV_X[k][0] + 8, x1 = LV_X[k][1] - 8; s += '<path d="M'+x0+' '+(LV_YB[k]+14)+' V'+LV_YB[k-1]+' M'+x1+' '+(LV_YB[k]+14)+' V'+LV_YB[k-1]+'" stroke="#8E6438" stroke-width="6"/>'; }
    for (k = 0; k < 3; k++) {
      var yb = LV_YB[k], a = LV_X[k][0], b = LV_X[k][1], c = (L[k] || {}).c || '#888';
      s += '<g class="lv lv'+k+'"><rect class="halo" x="'+(a - 6)+'" y="'+(yb - 104)+'" width="'+(b - a + 12)+'" height="'+(104)+'" rx="16" fill="'+c+'"/>';
      if (k === 0) s += '<rect x="110" y="365" width="150" height="60" fill="#B5583A" stroke="#6B2E1E" stroke-width="2"/><path d="M104 365 h162" stroke="#E9DCC0" stroke-width="5"/>' +
        [125, 145, 225, 245].map(function(x){ return '<rect x="'+(x-6)+'" y="375" width="12" height="14" fill="#FFF3C8" stroke="#6B2E1E"/><rect x="'+(x-6)+'" y="398" width="12" height="14" fill="#FFF3C8" stroke="#6B2E1E"/>'; }).join('') +
        '<rect x="176" y="398" width="18" height="27" fill="#5A3A1E"/><rect x="168" y="330" width="34" height="35" fill="#C46A48" stroke="#6B2E1E" stroke-width="2"/><path d="M164 330 L185 312 L206 330 z" fill="#6B2E1E"/><circle cx="185" cy="347" r="10" fill="#FFFDF6" stroke="#6B2E1E" stroke-width="2"/><path d="M185 347 v-6 M185 347 h5" stroke="#2E2A26" stroke-width="1.6"/>';
      if (k === 1) s += '<rect x="167" y="218" width="36" height="28" fill="#F6F1E4" stroke="#9A8E78" stroke-width="1.5"/><path d="M163 220 Q185 186 207 220 z" fill="#3A3F4A"/><rect x="182" y="186" width="6" height="10" fill="#F6F1E4" stroke="#9A8E78"/>' +
        '<rect x="118" y="250" width="134" height="55" fill="#F6F1E4" stroke="#9A8E78" stroke-width="2"/><path d="M150 250 L185 232 L220 250 z" fill="#F6F1E4" stroke="#9A8E78" stroke-width="2"/>' +
        [160, 175, 195, 210].map(function(x){ return '<rect x="'+(x-3)+'" y="252" width="6" height="53" fill="#FFFFFF" stroke="#B9AE98"/>'; }).join('') +
        [128, 140, 232, 244].map(function(x){ return '<rect x="'+(x-4)+'" y="262" width="8" height="12" fill="#B5432F"/><rect x="'+(x-4)+'" y="284" width="8" height="12" fill="#B5432F"/>'; }).join('');
      if (k === 2) s += '<rect x="160" y="120" width="50" height="32" fill="#FFFFFF" stroke="#9A8E78" stroke-width="1.5"/>' + [166, 174, 182, 190, 198, 205].map(function(x){ return '<path d="M'+x+' 122 v28" stroke="#C9C2B0" stroke-width="2"/>'; }).join('') +
        '<path d="M156 122 Q185 74 214 122 z" fill="#FFFFFF" stroke="#9A8E78" stroke-width="1.5"/><path d="M164 112 Q185 92 206 112" stroke="#D8D2C2" stroke-width="1.5" fill="none"/><rect x="181" y="82" width="8" height="12" fill="#FFFFFF" stroke="#9A8E78"/><path d="M185 82 v-8" stroke="#6B6458" stroke-width="2.5"/>' +
        '<rect x="98" y="152" width="174" height="33" fill="#FFFFFF" stroke="#9A8E78" stroke-width="2"/><rect x="98" y="148" width="44" height="6" fill="#F1ECE0"/><rect x="228" y="148" width="44" height="6" fill="#F1ECE0"/><path d="M162 152 L185 140 L208 152 z" fill="#FFFFFF" stroke="#9A8E78" stroke-width="1.5"/>' +
        [104, 112, 120, 128, 136, 166, 176, 186, 196, 206, 234, 242, 250, 258, 266].map(function(x){ return '<path d="M'+x+' 156 v26" stroke="#D8D2C2" stroke-width="2"/>'; }).join('');
      s += '<rect x="'+a+'" y="'+yb+'" width="'+(b - a)+'" height="14" rx="3" fill="#8E6438" stroke="#5A3A1E" stroke-width="1.5"/><text x="'+((a + b) / 2)+'" y="'+(yb + 11)+'" text-anchor="middle" class="sl">'+(k + 1)+' · '+esc(((L[k] || {}).t || '').toUpperCase())+'</text>';
      s += '<g class="mk ok"><circle cx="306" cy="'+(yb - 50)+'" r="13" fill="#1A7A4A"/><path d="M299 '+(yb - 50)+' l5 5 l9 -10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/></g><g class="mk no"><circle cx="306" cy="'+(yb - 50)+'" r="13" fill="#B5432F"/><path d="M300 '+(yb - 56)+' l12 12 M312 '+(yb - 56)+' l-12 12" stroke="#fff" stroke-width="3" stroke-linecap="round"/></g></g>';
    }
    if (o.shaft) { s += '<rect x="334" y="56" width="36" height="386" rx="4" fill="#DCEFF5" fill-opacity=".55" stroke="#7FA7B5" stroke-width="2"/><path d="M352 56 V440" stroke="#7FA7B5" stroke-width="1" stroke-dasharray="3 4"/>' +
      '<rect x="326" y="36" width="52" height="22" rx="4" fill="#0E1C42"/><text x="352" y="52" text-anchor="middle" class="fl">FLOOR</text>' +
      '<g class="car" style="transform:translateY('+(LV_YB[o.at || 0] - 40)+'px)"><rect x="337" y="0" width="30" height="36" rx="3" fill="#F3E2B8" stroke="#9C7420" stroke-width="2.5"/><path d="M352 2 V34" stroke="#9C7420" stroke-width="1.5"/><circle cx="352" cy="14" r="4.5" fill="#E3B46E" stroke="#8A5A2A"/><path d="M352 18 V30" stroke="#2E5FA8" stroke-width="5" stroke-linecap="round"/></g>'; }
    var n = o.spill || 0, sp = [[62, -14], [118, 9], [176, -6], [236, 12], [290, -10], [212, 22]];
    for (var i = 0; i < n && i < sp.length; i++) s += '<g class="spill" transform="rotate('+sp[i][1]+' '+(sp[i][0] + 15)+' 452)"><rect x="'+sp[i][0]+'" y="444" width="30" height="18" rx="2" fill="#FFFDF6" stroke="#9C7420" stroke-width="1.5"/><path d="M'+(sp[i][0] + 5)+' 451 h20 M'+(sp[i][0] + 5)+' 456 h14" stroke="#B9A77A" stroke-width="1.5"/></g>';
    return s;
  }
  function lvBtns(cls){ return (DATA.levels || []).map(function(l, k){ return '<button type="button" class="ms-btn alt ms-lv-b '+cls+'" data-k="'+k+'" style="--lc:'+l.c+'">'+l.ic+' '+esc(l.t)+'</button>'; }).join(''); }
  function lvMoveText(ta, home){ if (ta && ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }

  /* ══ MODULE: envelope (Lobby · a letter's address lights the three levels) ══ */
  function modEnvelope(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    ST.en = ST.en || {st:0, town:null, q1:false, q2:false}; var S = ST.en, L = DATA.levels || [];
    var m = shell('ms-en-mod', cfg);
    var env = '<svg viewBox="0 0 300 210" class="ms-en-env" role="img" aria-label="An envelope with an address on the front. Each line of the address names a bigger place.">' +
      '<rect x="6" y="10" width="288" height="190" rx="8" fill="#FFF8E7" stroke="#B9A77A" stroke-width="3"/><path d="M6 14 L150 96 L294 14" fill="none" stroke="#E2D2AE" stroke-width="2.5"/>' +
      '<rect x="232" y="22" width="48" height="56" rx="3" fill="#FFFDF6" stroke="#9C7420" stroke-width="2" stroke-dasharray="4 3"/><path d="M256 70 V40 M256 42 q-12 -2 -16 6 M256 42 q12 -2 16 6 M256 42 q-6 -10 -14 -10 M256 42 q6 -10 14 -10" stroke="#2F7D46" stroke-width="3" fill="none" stroke-linecap="round"/><text x="256" y="74" text-anchor="middle" class="st">FL</text>' +
      '<text x="40" y="112" class="ln l0 nm"></text><text x="40" y="138" class="ln l1"><tspan class="dot">●</tspan> <tspan class="v"></tspan></text><text x="40" y="164" class="ln l2"><tspan class="dot">●</tspan> Florida</text><text x="40" y="190" class="ln l3"><tspan class="dot">●</tspan> USA</text>' +
      '<path class="pen" d="M40 196 h160" stroke="#B9A77A" stroke-width="1" stroke-dasharray="2 4"/></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-en-wrap"><div class="ms-en-stage"><div class="row">'+env+'<svg viewBox="0 0 400 470" class="ms-lv-tw" role="img" aria-label="The tall three-level model: a little city hall on the bottom level, a state capitol with a small dome in the middle, and the U.S. Capitol on top. Label cards lie spilled on the round platform.">'+lvTower({spill:6})+'</svg></div><p class="ms-credit">'+esc(cfg.modelT || '')+'</p></div><div class="ms-en-act" aria-live="polite"></div></div>');
    after(anchor, m);
    var act = $('.ms-en-act', m), stage = $('.ms-en-stage', m), tw = $('.ms-lv-tw', m), envs = $('.ms-en-env', m);
    function look(){ stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function paint(){ var n = Math.min(S.st, 3); stage.className = 'ms-en-stage n' + n;
      for (var k = 0; k < 3; k++) tw.classList.toggle('on' + k, n > k);
      var nm = sget(NAMEK, ''); $('.nm', envs).textContent = 'To: ' + (nm || 'A Civic Curator'); $('.l1 .v', envs).textContent = S.town || cfg.townAny || 'Your town'; }
    function lit(k){ var l = L[k]; return '<div class="ms-vd-thanks" style="--lc:'+l.c+'">💡 '+esc((cfg.litT || [])[k] || '').replace('{town}', esc(S.town || cfg.townAny || 'your town'))+'</div>'; }
    function render(){
      paint(); var N = 5;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (S.st === 0) { act.innerHTML = stepCard(1, N, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><div class="ms-pchoices ms-en-towns">'+(cfg.towns || []).map(function(t){ return '<button type="button" class="ms-btn alt ms-en-town" data-t="'+esc(t)+'">🏠 '+esc(t)+'</button>'; }).join('') +
          '<button type="button" class="ms-btn alt ms-en-town" data-t="">❔ '+esc(cfg.townNo || 'My town is not on the list')+'</button></div>');
        $$('.ms-en-town', act).forEach(function(b){ b.onclick = function(){ SFX.chime(); S.town = b.dataset.t || null; S.st = 1; save(); render(); look(); }; }); return; }
      if (S.st < 3) { var c = [[cfg.s2T, cfg.s2, cfg.go2], [cfg.s3T, cfg.s3, cfg.go3]][S.st - 1];
        act.innerHTML = stepCard(S.st + 1, N, c[0], lit(S.st - 1) + '<p>'+esc(c[1])+'</p><button type="button" class="ms-btn big ms-en-go">'+esc(c[2])+'</button>');
        $('.ms-en-go', act).onclick = function(){ SFX.chime(); S.st++; save(); render(); look(); }; return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? 5 : 4, N, q.title, (S.q1 ? '' : lit(2)) + cq.html); cq.bind(act);
    }
    render(); if (S.q2) markDone('scene');
  }

  /* ══ MODULE: whichfloor (Gallery main attraction · the elevator up the three-level model) ══ */
  function modWhichfloor(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var T = DATA.floorTix || [], L = DATA.levels || [];
    ST.el = ST.el || {i:0, at:0, ok:false, miss:null, q1:false, q2:false}; var S = ST.el;
    var m = shell('ms-el-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-el-wrap"><div class="ms-el-stage"><svg viewBox="0 0 400 470" class="ms-lv-tw" role="img" aria-label="The tall three-level model with a glass elevator on its right side. Floor 1 is a little city hall, floor 2 is a state capitol with a small dome, and floor 3 is the U.S. Capitol.">'+lvTower({shaft:true, at:S.at, spill:Math.max(0, T.length - S.i - (S.ok ? 1 : 0))})+'</svg>' +
      '<div class="ms-el-board">'+L.map(function(l, k){ return '<div class="col" data-k="'+k+'" style="--lc:'+l.c+'"><b>'+l.ic+' '+(k + 1)+' · '+esc(l.t)+'</b><ul></ul></div>'; }).reverse().join('')+'</div><p class="ms-credit">'+esc(cfg.modelT || '')+'</p></div><div class="ms-el-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-el-act', m), stage = $('.ms-el-stage', m), tw = $('.ms-lv-tw', m), car = $('.car', tw), riding = false;
    function look(){ stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function board(){ var n = S.i + (S.ok ? 1 : 0); $$('.ms-el-board .col', m).forEach(function(c){ c.querySelector('ul').innerHTML = T.slice(0, n).filter(function(t){ return t.lv === +c.dataset.k; }).map(function(t){ return '<li>'+t.ic+' '+esc(t.short)+'</li>'; }).join(''); });
      var sp = $$('.spill', tw); sp.forEach(function(e, j){ e.style.display = j < T.length - n ? '' : 'none'; }); }
    function paint(){ car.style.transform = 'translateY('+(LV_YB[S.at] - 40)+'px)'; $('.fl', tw).textContent = 'FLOOR ' + (S.at + 1);
      for (var k = 0; k < 3; k++) { tw.classList.toggle('on' + k, S.i >= T.length || (S.ok && k === S.at)); tw.classList.toggle('ok' + k, !!S.ok && k === S.at && S.i < T.length); tw.classList.toggle('no' + k, S.miss === k && !S.ok); } board(); }
    function office(k){ return '<div class="ms-el-office" style="--lc:'+L[k].c+'">🚪 <b>'+esc((cfg.doorT || 'Floor {n}').replace('{n}', k + 1))+': '+esc(L[k].bld)+'.</b> '+esc(L[k].inside)+'</div>'; }
    function render(){
      paint(); var N = T.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.i < T.length) { var t = T[S.i];
        var body = '<div class="ms-el-tix">🎫 <span>'+t.ic+'</span> '+esc(t.t)+'</div>';
        if (S.ok) body += office(S.at) + '<div class="ms-vd-thanks">✅ '+esc(t.ok)+'</div><button type="button" class="ms-btn big ms-el-nx">'+(S.i + 1 < T.length ? esc(cfg.nextT || 'Next ticket ➡️') : 'Done ✓')+'</button>';
        else body += (S.miss != null ? office(S.miss) + '<div class="ms-notyet">🙅 '+esc(cfg.notT || 'Not our job on this floor.')+' 🤔 '+esc(t.hint)+'</div>' : '<p>'+esc(cfg.askT)+'</p>') +
          '<div class="ms-el-panel" role="group" aria-label="Elevator buttons">'+[2, 1, 0].map(function(k){ return '<button type="button" class="ms-el-fb" data-k="'+k+'" style="--lc:'+L[k].c+'"><b>'+(k + 1)+'</b><span>'+L[k].ic+' '+esc(L[k].t)+'</span></button>'; }).join('')+'</div>';
        act.innerHTML = stepCard(S.i + 1, N, (cfg.tixT || 'Ticket {i} of {n}').replace('{i}', S.i + 1).replace('{n}', T.length), body);
        $$('.ms-el-fb', act).forEach(function(b){ b.onclick = function(){ if (riding) return; var k = +b.dataset.k, d = Math.abs(k - S.at); SFX.click(); riding = true; S.at = k; S.miss = null; paint(); look();
          $$('.ms-el-fb', act).forEach(function(x){ x.classList.toggle('on', x === b); });
          setTimeout(function(){ riding = false; if (k === t.lv) { SFX.chime(); S.ok = true; } else { SFX.miss(); S.miss = k; } save(); render(); }, calm() ? 0 : 450 + d * 550); }; });
        var nx = $('.ms-el-nx', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.ok = false; S.miss = null; save(); if (S.i >= T.length) SFX.fanfare(); render(); look(); };
        return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { ST.gal = ST.gal||{}; ST.gal.floor = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(T.length + (S.q1 ? 2 : 1), N, q.title, (S.q1 ? '' : '<div class="ms-vd-thanks">🏷️ '+esc(cfg.allT || '')+'</div>') + cq.html); cq.bind(act);
    }
    render();
  }

  /* shared: move an evidence box into a step (home comment + note left on the Exhibit Floor) */
  function lvWriteBox(ta, noteT, goTab){
    if (!ta) return null; var home = document.createComment('lv-home'); ta.parentNode.insertBefore(home, ta);
    var prev = ta.previousElementSibling, hid = 0; while (prev && hid < 2 && (prev.classList.contains('textbox-prompt') || prev.classList.contains('q-block'))) { prev.classList.add('ms-hide-on'); prev = prev.previousElementSibling; hid++; }
    var note = el('div', 'ms-pu-note ms-sx-note ms-only', ''); ta.parentNode.insertBefore(note, home);
    return {home:home, note:note, paint:function(qn){ var v = ta.value.trim(); note.innerHTML = '<b>'+esc(qn)+'</b> '+esc(noteT||'')+' ' + (v ? '✅ You wrote: <i>'+esc(v)+'</i>' : 'You have not written it yet. <button type="button" class="ms-btn alt ms-sx-goto">Go to the Gallery</button>'); var b = $('.ms-sx-goto', note); if (b) b.onclick = function(){ go(goTab || 'explore'); }; }};
  }

  /* ══ MODULE: schoolxray (Gallery · one school, three see-through layers) ══ */
  function modSchoolxray(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var LY = cfg.layers || [], L = DATA.levels || [], ta = document.getElementById(cfg.ta || 'journal-q3'), NEED = cfg.wordMin || 12;
    ST.sx = ST.sx || {n:0, q:false, done:false}; var S = ST.sx;
    var m = shell('ms-sx-mod', cfg);
    var tags = LY.map(function(ly, k){ var c = L[k].c; return '<g class="tg t'+k+'">' + ly.tags.map(function(g){ var w = g.w || 150; return '<g><circle cx="'+g.px+'" cy="'+g.py+'" r="7" fill="'+c+'" stroke="#fff" stroke-width="2"/><path d="M'+g.px+' '+g.py+' L'+(g.x + w / 2)+' '+(g.y + 14)+'" stroke="'+c+'" stroke-width="2.5"/><rect x="'+g.x+'" y="'+g.y+'" width="'+w+'" height="'+(g.two ? 46 : 28)+'" rx="7" fill="'+c+'" stroke="#fff" stroke-width="2"/><text x="'+(g.x + 8)+'" y="'+(g.y + 20)+'" class="tt">'+esc(g.t)+'</text>'+(g.two ? '<text x="'+(g.x + 8)+'" y="'+(g.y + 38)+'" class="tt">'+esc(g.two)+'</text>' : '')+'</g>'; }).join('') + '</g>'; }).join('');
    var scene = '<svg viewBox="0 0 640 360" class="ms-sx-scene" role="img" aria-label="A drawing of a school: a brick building with classroom windows, a front door, a lunchroom wing on the right, and a yellow school bus on the left.">' +
      '<rect width="640" height="360" fill="#CFE8F7"/><rect y="270" width="640" height="90" fill="#A9D08E"/><rect y="300" width="640" height="60" fill="#B9B4A8"/><path d="M0 330 H640" stroke="#FFFDF6" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<rect x="190" y="120" width="270" height="160" fill="#C46A48" stroke="#6B2E1E" stroke-width="3"/><path d="M180 122 L325 66 L470 122 z" fill="#7A3A26" stroke="#5A2A1A" stroke-width="3"/><rect x="306" y="40" width="38" height="44" fill="#E9DCC0" stroke="#6B2E1E" stroke-width="2"/><path d="M300 40 L325 24 L350 40 z" fill="#5A2A1A"/><circle cx="325" cy="60" r="8" fill="#F3C64A" stroke="#9C7420" stroke-width="2"/>' +
      '<rect x="230" y="96" width="190" height="22" rx="4" fill="#FFFDF6" stroke="#6B2E1E" stroke-width="2"/><text x="325" y="112" text-anchor="middle" class="sn">PUBLIC SCHOOL</text>' +
      '<rect x="205" y="140" width="80" height="58" fill="#FFF3C8" stroke="#6B2E1E" stroke-width="3"/><rect x="215" y="174" width="34" height="8" fill="#A7774A"/><rect x="221" y="166" width="20" height="8" fill="#2E5FA8"/><rect x="258" y="150" width="22" height="16" fill="#2F4A3A"/><circle cx="232" cy="160" r="5" fill="#E3B46E"/><circle cx="270" cy="186" r="5" fill="#8A5A2A"/>' +
      '<rect x="365" y="140" width="80" height="58" fill="#FFF3C8" stroke="#6B2E1E" stroke-width="3"/><rect x="375" y="150" width="60" height="20" fill="#2F4A3A"/><text x="405" y="165" text-anchor="middle" class="ch">1 + 2 = 3</text><circle cx="392" cy="186" r="5" fill="#C68B5A"/><circle cx="418" cy="186" r="5" fill="#E3B46E"/>' +
      '<rect x="300" y="214" width="50" height="66" fill="#5A3A1E" stroke="#3B2A1E" stroke-width="2"/><circle cx="340" cy="250" r="3" fill="#F3C64A"/>' +
      '<rect x="205" y="216" width="80" height="44" fill="#FFF3C8" stroke="#6B2E1E" stroke-width="3"/><rect x="365" y="216" width="80" height="44" fill="#FFF3C8" stroke="#6B2E1E" stroke-width="3"/>' +
      '<rect x="460" y="180" width="130" height="100" fill="#D98B5F" stroke="#6B2E1E" stroke-width="3"/><rect x="470" y="160" width="110" height="22" rx="4" fill="#FFFDF6" stroke="#6B2E1E" stroke-width="2"/><text x="525" y="176" text-anchor="middle" class="sn">LUNCHROOM</text><rect x="478" y="200" width="94" height="40" fill="#FFF3C8" stroke="#6B2E1E" stroke-width="2"/><rect x="492" y="222" width="30" height="10" rx="2" fill="#7FA7B5"/><circle cx="500" cy="220" r="4" fill="#E2483B"/><circle cx="512" cy="220" r="4" fill="#F3C64A"/><rect x="530" y="214" width="8" height="18" fill="#FFFFFF" stroke="#7FA7B5"/>' +
      '<g transform="translate(26 222)"><rect x="0" y="0" width="150" height="62" rx="10" fill="#F3B61F" stroke="#8A6A10" stroke-width="3"/><rect x="12" y="10" width="26" height="20" rx="3" fill="#DCEFF5"/><rect x="46" y="10" width="26" height="20" rx="3" fill="#DCEFF5"/><rect x="80" y="10" width="26" height="20" rx="3" fill="#DCEFF5"/><rect x="114" y="10" width="26" height="30" rx="3" fill="#DCEFF5"/><text x="58" y="50" text-anchor="middle" class="bs">SCHOOL BUS</text><circle cx="32" cy="64" r="11" fill="#2E2A26"/><circle cx="118" cy="64" r="11" fill="#2E2A26"/></g>' +
      tags + '</svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-sx-wrap"><div class="ms-sx-stage">'+scene+'<div class="ms-sx-key">'+L.map(function(l, k){ return '<span class="k'+k+'" style="--lc:'+l.c+'">'+l.ic+' '+esc(l.t)+'</span>'; }).join('')+'</div><p class="ms-credit">'+esc(cfg.modelT || '')+'</p></div><div class="ms-sx-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-sx-act', m), stage = $('.ms-sx-stage', m), wb = lvWriteBox(ta, cfg.noteT), curUpd = null;
    function look(){ stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    var RX = (cfg.levelRe || []).map(function(r){ return new RegExp(r, 'i'); });
    function nlev(v){ return RX.filter(function(r){ return r.test(v); }).length; }
    function miss(){ var o = [], v = ta ? ta.value : '', n = words(v); if (n < NEED) o.push('Add '+(NEED-n)+' more word'+(NEED-n===1?'':'s')+'.'); if (nlev(v) < 2) o.push(cfg.needT || 'Name at least two levels.'); return o; }
    if (ta) new MutationObserver(function(){ if (!root.classList.contains('ms-on')) lvMoveText(ta, wb.home); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function render(){
      if (!root.classList.contains('ms-on')) return;
      stage.className = 'ms-sx-stage n' + S.n; if (wb) wb.paint(cfg.qn || 'Question 3'); curUpd = null;
      var N = LY.length + 2;
      if (ta) ta.classList.toggle('ms-gi-away', !(S.q && !S.done));
      if (S.done) { if (ta) lvMoveText(ta, wb.home); act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-sx-edit">✏️ Edit my answer</button></div>'; $('.ms-sx-edit', act).onclick = function(){ S.done = false; save(); render(); }; return; }
      if (S.n < LY.length) { if (ta) lvMoveText(ta, wb.home); var ly = LY[S.n], l = L[S.n];
        act.innerHTML = stepCard(S.n + 1, N, ly.stepT, (S.n ? '<div class="ms-vd-thanks">✅ '+esc(LY[S.n - 1].saw)+'</div>' : '') + '<p>'+esc(ly.s)+'</p><button type="button" class="ms-btn big ms-sx-go" style="--lc:'+l.c+'">'+l.ic+' '+esc(ly.go)+'</button>');
        $('.ms-sx-go', act).onclick = function(){ SFX.chime(); S.n++; save(); render(); look(); }; return; }
      if (!S.q) { if (ta) lvMoveText(ta, wb.home);
        var cq = choiceQ(cfg.q1, 2, function(){ setTimeout(function(){ S.q = true; save(); if (!ta) { S.done = true; ST.gal = ST.gal||{}; ST.gal.xray = 1; save(); galleryCheck(); } render(); }, calm()?0:1500); });
        act.innerHTML = stepCard(LY.length + 1, N, cfg.q1.title, '<div class="ms-vd-thanks">✅ '+esc(LY[LY.length - 1].saw)+'</div>' + cq.html); cq.bind(act); return; }
      act.innerHTML = stepCard(N, N, cfg.writeT, '<p>'+esc(cfg.writeP)+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-sx-chk"></div>' +
        '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-sx-save">Save my answer ✓</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
      $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-sx-chk', act);
      var upd = function(){ var v = ta.value, o = miss(), w = words(v), h = nlev(v); chk.innerHTML = '<span class="ms-wc'+(w >= NEED ? ' ok' : '')+'">📝 '+Math.min(w, NEED)+' of '+NEED+' words</span><span class="ms-chip'+(h >= 2 ? ' ok' : '')+'">'+(h >= 2 ? '✓ ' : '')+esc(cfg.chipT || 'names two levels')+'</span>';
        $('.ms-sx-save', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
      curUpd = upd; upd();
      $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = (cfg.starters||[])[+b.dataset.i]; if (ta.value.indexOf(t) < 0) ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); }; });
      $('.ms-sx-save', act).onclick = function(){ var o = miss(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; }
        S.done = true; ST.gal = ST.gal||{}; ST.gal.xray = 1; save(); galleryCheck(); SFX.fanfare(); render(); };
    }
    if (ta) ta.addEventListener('input', function(){ if (wb) wb.paint(cfg.qn || 'Question 3'); if (curUpd && S.q && !S.done) curUpd(); });
    render();
  }

  /* ══ MODULE: threebldg (Gallery source · three real buildings, one for each level) ══ */
  function modThreebldg(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var PH = cfg.photos || [], L = DATA.levels || [];
    ST.bq = ST.bq || {i:0, ok:false, miss:null, q1:false, q2:false}; var S = ST.bq;
    var m = shell('ms-bq-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-bq-wall">'+PH.map(function(p, j){ return '<figure class="fr" data-j="'+j+'"><div class="ph"><img src="'+img(p.img)+'" alt="'+esc(p.alt)+'" loading="lazy"></div><figcaption><b class="nm">'+esc(p.t)+'</b><span class="pl">📍 '+esc(p.place)+'</span><span class="lt"></span></figcaption></figure>'; }).join('')+'</div>' +
      '<p class="ms-credit ms-bq-cred">'+PH.map(function(p){ return esc(p.credit); }).join(' · ')+'</p><div class="ms-bq-act" aria-live="polite"></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-bq-act', m), wall = $('.ms-bq-wall', m);
    function paint(){ $$('.fr', wall).forEach(function(f){ var j = +f.dataset.j, done = j < S.i || (j === S.i && S.ok), p = PH[j];
      f.classList.toggle('cur', j === S.i && !S.ok && S.i < PH.length); f.classList.toggle('done', done); f.style.setProperty('--lc', done ? L[p.lv].c : 'transparent');
      $('.lt', f).innerHTML = done ? L[p.lv].ic + ' ' + esc(L[p.lv].t) : '❔ Which level?'; }); }
    function render(){
      paint(); var N = PH.length + 2;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.i < PH.length) { var p = PH[S.i];
        var body = '<p>'+esc(p.ask)+'</p>';
        if (S.ok) body += '<div class="ms-vd-thanks">✅ '+esc(p.ok)+'</div><button type="button" class="ms-btn big ms-bq-nx">'+(S.i + 1 < PH.length ? 'Next photo ➡️' : 'Next ➡️')+'</button>';
        else body += '<div class="ms-pchoices">'+lvBtns('ms-bq-b')+'</div>' + (S.miss != null ? '<div class="ms-notyet">🤔 '+esc(p.hint)+'</div>' : '');
        act.innerHTML = stepCard(S.i + 1, N, (cfg.phT || 'Photo {i} of {n}').replace('{i}', S.i + 1).replace('{n}', PH.length) + ': ' + p.t, body);
        $$('.ms-bq-b', act).forEach(function(b){ b.onclick = function(){ var k = +b.dataset.k; if (k === p.lv) { SFX.chime(); S.ok = true; S.miss = null; } else { SFX.miss(); S.miss = k; b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); } save(); render(); }; });
        var nx = $('.ms-bq-nx', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.ok = false; save(); render(); };
        return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { ST.gal = ST.gal||{}; ST.gal.bldg = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(PH.length + (S.q1 ? 2 : 1), N, q.title, cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: loctrain (Workroom · hook four loc words onto a little train) ══ */
  function modLoctrain(cfg){
    var anchor = $(cfg.anchor || '#panel-check .quiz-card'); if (!anchor) return;
    var W = cfg.words || [], STN = cfg.stations || []; ST.tn = ST.tn || {i:0, ok:false}; var S = ST.tn;
    var m = shell('ms-tn-mod', cfg);
    var sx = function(j){ return 40 + j * (520 / Math.max(1, STN.length - 1)); };
    var scene = '<svg viewBox="0 0 640 200" class="ms-tn-scene" role="img" aria-label="A little train track with stations along it. A small engine waits at the first station with empty cars behind it.">' +
      '<rect width="640" height="200" fill="#DCEFF5"/><rect y="150" width="640" height="50" fill="#A9D08E"/><path d="M0 168 H640" stroke="#6E4A26" stroke-width="5"/>' + (function(){ var t = ''; for (var x = 4; x < 640; x += 18) t += '<rect x="'+x+'" y="164" width="10" height="12" fill="#8E6438"/>'; return t; })() + '<path d="M0 166 H640" stroke="#7A7A7A" stroke-width="3"/>' +
      STN.map(function(s, j){ return '<g class="stn s'+j+'"><path d="M'+sx(j)+' 150 V108" stroke="#5A3A1E" stroke-width="3"/><rect x="'+(sx(j) - 34)+'" y="88" width="68" height="22" rx="4" fill="#FFFDF6" stroke="#5A3A1E" stroke-width="2"/><text x="'+sx(j)+'" y="104" text-anchor="middle" class="sg">'+esc(s)+'</text></g>'; }).join('') +
      '<g class="tr" style="transform:translateX(0px)"><g class="cars">' + W.map(function(w, j){ var x = -62 - j * 60; return '<g class="cr c'+j+'"><rect x="'+x+'" y="128" width="54" height="28" rx="4" fill="#FFF8E7" stroke="#9C7420" stroke-width="2"/><text x="'+(x + 27)+'" y="147" text-anchor="middle" class="cw">'+esc(w.w)+'</text><circle cx="'+(x + 12)+'" cy="160" r="6" fill="#2E2A26"/><circle cx="'+(x + 42)+'" cy="160" r="6" fill="#2E2A26"/><path d="M'+(x + 54)+' 146 h8" stroke="#5A3A1E" stroke-width="3"/></g>'; }).join('') + '</g>' +
      '<rect x="0" y="118" width="56" height="38" rx="5" fill="#B5432F" stroke="#6B2E1E" stroke-width="2"/><rect x="34" y="100" width="22" height="24" rx="3" fill="#B5432F" stroke="#6B2E1E" stroke-width="2"/><rect x="38" y="104" width="14" height="10" fill="#DCEFF5"/><rect x="8" y="104" width="12" height="16" fill="#2E2A26"/><circle cx="14" cy="98" r="5" class="puff" fill="#FFFFFF" opacity=".8"/><circle cx="14" cy="160" r="8" fill="#2E2A26"/><circle cx="42" cy="160" r="8" fill="#2E2A26"/><path d="M56 150 l10 6 h-10 z" fill="#5A3A1E"/></g></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-wr-card"><span class="ms-wr-root">'+esc(cfg.root)+'</span><span class="ms-wr-eq">=</span><span class="ms-wr-mean">'+esc(cfg.means)+'</span></div><div class="ms-tn-stage">'+scene+'</div><div class="ms-tn-act" aria-live="polite"></div>');
    after(anchor, m);
    var act = $('.ms-tn-act', m), tr = $('.tr', m);
    function told(){ window._rootMatchDone = S.i >= W.length; if (typeof window.gatherAnswers === 'function') try { window.gatherAnswers(); } catch(e){} }
    function paint(){ var n = S.i + (S.ok ? 1 : 0); tr.style.transform = 'translateX('+(sx(Math.min(n, STN.length - 1)) - 40)+'px)'; $$('.cr', m).forEach(function(c, j){ c.classList.toggle('on', j < n); }); }
    var stg = $('.ms-tn-stage', m);
    function look(){ var r = stg.getBoundingClientRect(); if (r.top < 110 || r.bottom > innerHeight) stg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); }
    function render(){
      told(); paint();
      if (S.i >= W.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var w = W[S.i], body = '<div class="ms-tn-word">🚃 <b>'+esc(w.w)+'</b></div><p>'+esc((cfg.askT || 'What does {w} mean?').replace('{w}', w.w))+'</p>';
      body += '<div class="ms-pchoices col">'+w.opts.map(function(o, k){ return '<button type="button" class="ms-btn ms-tn-o'+(S.ok && o.ok ? ' ok' : '')+'" data-k="'+k+'">'+esc(o.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite">'+(S.ok ? '<div class="ms-vd-thanks">✅ '+esc(w.ok)+'</div>' : '')+'</div>';
      if (S.ok) body += '<button type="button" class="ms-btn big ms-tn-nx">'+(S.i + 1 < W.length ? 'Next word ➡️' : 'Done ✓')+'</button>';
      act.innerHTML = stepCard(S.i + 1, W.length, 'Word '+(S.i + 1)+' of '+W.length, body);
      $$('.ms-tn-o', act).forEach(function(b){ b.onclick = function(){ var o = w.opts[+b.dataset.k];
        if (o.ok) { if (!S.ok) { SFX.chime(); S.ok = true; save(); render(); look(); } } else { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); if (!S.ok) $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc(w.fb)+'</div>'; } }; });
      var nx = $('.ms-tn-nx', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.ok = false; save(); render(); look(); if (S.i >= W.length) SFX.fanfare(); };
    }
    render();
  }

  /* ══ MODULE: plaques (Exhibit Floor · a plaque for each level and the base; the model lights up) ══ */
  function modPlaques(cfg){
    var ta = document.getElementById(cfg.ta || 'journal-assign'); if (!ta) return;
    var PQ = cfg.plaques || [], L = DATA.levels || [], SMIN = cfg.sentMin || 3, SMAX = cfg.sentMax || 5, WMIN = cfg.wordMin || 6;
    ST.pk = ST.pk || {step:0, l:[], open:false}; var S = ST.pk; S.l = S.l || [];
    var m = shell('ms-pk-mod', cfg);
    var school = '<g class="sch"><rect x="470" y="356" width="140" height="84" fill="#C46A48" stroke="#6B2E1E" stroke-width="2.5"/><path d="M462 358 L540 318 L618 358 z" fill="#7A3A26"/><rect x="526" y="300" width="28" height="30" fill="#E9DCC0" stroke="#6B2E1E" stroke-width="2"/><path d="M522 300 L540 288 L558 300 z" fill="#5A2A1A"/><rect x="527" y="404" width="26" height="36" fill="#5A3A1E"/><rect x="482" y="372" width="30" height="22" fill="#FFF3C8" stroke="#6B2E1E" stroke-width="2"/><rect x="568" y="372" width="30" height="22" fill="#FFF3C8" stroke="#6B2E1E" stroke-width="2"/><text x="540" y="452" text-anchor="middle" class="sn">YOUR SCHOOL</text></g>';
    var beams = L.map(function(l, k){ var y = LV_YB[k] - 50; return '<path class="bm b'+k+'" d="M'+(LV_X[k][1] + 4)+' '+y+' C'+(400)+' '+y+' 470 '+(360 - k * 4)+' 540 '+(400 - k * 6)+'" stroke="'+l.c+'" stroke-width="7" fill="none" stroke-linecap="round" pathLength="100"/>'; }).join('');
    m.insertAdjacentHTML('beforeend', '<div class="ms-pk-wrap"><div class="ms-pk-act"></div><div class="ms-pk-stage"><svg viewBox="0 0 640 470" class="ms-lv-tw" role="img" aria-label="The three-level model with your plaques, and a school beside it.">'+lvTower({})+beams+school+'</svg>' +
      '<div class="ms-pk-board">'+PQ.map(function(p, k){ return '<div class="pl p'+k+'" style="--lc:'+(k < 3 ? L[k].c : '#8E6438')+'"><b>'+p.ic+' '+esc(p.t)+'</b><span class="tx"></span></div>'; }).join('')+'</div><p class="next">'+esc(cfg.nextT||'')+'</p></div></div><div class="ms-pk-end"></div>');
    var blk = ta.closest('.activity-body') || ta.parentNode;
    var home = document.createComment('pk-home'); ta.parentNode.insertBefore(home, ta);
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild);
    $$('p, .callout, .textbox-prompt', blk).forEach(function(e){ if (!m.contains(e)) e.classList.add('ms-hide-on'); });
    var act = $('.ms-pk-act', m), stage = $('.ms-pk-stage', m), tw = $('.ms-lv-tw', m), end = $('.ms-pk-end', m), curUpd = null;
    function goHome(){ lvMoveText(ta, home); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return words(s) >= 3; }).length; }
    function tidy(t){ t = (t || '').trim().replace(/\s+/g, ' '); if (t && !/[.!?]$/.test(t)) t += '.'; return t ? t.charAt(0).toUpperCase() + t.slice(1) : ''; }
    function compose(){ ta.value = S.l.map(tidy).filter(Boolean).join(' '); ta.dispatchEvent(new Event('input', {bubbles:true})); }
    function lines(){ if (S.step >= PQ.length) { var ss = (ta.value.match(/[^.!?]+[.!?]*/g) || []).map(function(x){ return x.trim(); }).filter(function(x){ return words(x) >= 1; }); return [ss[0], ss[1], ss[2], ss.slice(3).join(' ')]; } return S.l.map(tidy); }
    function view(){ var ls = lines(); PQ.forEach(function(p, k){ var t = $('.p'+k+' .tx', m); t.textContent = ls[k] || '…'; t.classList.toggle('empty', !ls[k]); $('.p'+k, m).classList.toggle('cur', k === S.step && !S.open); });
      for (var k = 0; k < 3; k++) tw.classList.toggle('on' + k, !!S.open); tw.classList.toggle('lit', !!S.open); }
    function missL(k, v){ var o = [], p = PQ[k], n = words(v); if (n < WMIN) o.push('Add '+(WMIN - n)+' more word'+(WMIN - n === 1 ? '' : 's')+'.'); if (p.re && !new RegExp(p.re, 'i').test(v)) o.push(p.needT); return o; }
    function missAll(){ var o = [], v = ta.value, n = sents(v); if (n < SMIN) o.push('Write '+(SMIN - n)+' more sentence'+(SMIN - n === 1 ? '' : 's')+' (3 words or more each).'); if (n > SMAX) o.push('Keep it to '+SMAX+' sentences or fewer.');
      PQ.slice(0, 3).forEach(function(p){ if (!new RegExp(p.re, 'i').test(v)) o.push(p.needT); }); return o; }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; curUpd = null; var N = PQ.length + 1; view();
      ta.classList.toggle('ms-gi-away', S.step !== PQ.length || S.open);
      if (S.step < PQ.length) { goHome(); var p = PQ[S.step], v = S.l[S.step] || '';
        act.innerHTML = stepCard(S.step + 1, N, p.stepT, '<p>'+esc(p.s)+'</p>' + (p.chips ? '<p class="ms-pk-ct">'+esc(cfg.chipsT || 'Ideas you can tap:')+'</p><div class="ms-pchoices ms-pk-chips">'+p.chips.map(function(c, i){ return '<button type="button" class="ms-btn alt ms-pk-chip" data-i="'+i+'">'+esc(c)+'</button>'; }).join('')+'</div>' : '') +
          '<div class="ms-gi-starts"><button type="button" class="ms-btn alt ms-pk-st">✏️ '+esc(p.st)+'</button></div><textarea class="ms-pk-in" rows="2" aria-label="'+esc(p.t)+'">'+esc(v)+'</textarea><div class="ms-excheck ms-pk-chk"></div>' +
          '<div class="ms-gi-nav">'+(S.step ? '<button type="button" class="ms-btn alt ms-pk-bk">⬅️ Back</button>' : '')+'<button type="button" class="ms-btn big ms-pk-nx">'+(S.step + 1 < PQ.length ? 'Next plaque ➡️' : 'Read all four ➡️')+'</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        var inp = $('.ms-pk-in', act), fb = $('.ms-gi-fb', act), chk = $('.ms-pk-chk', act);
        var upd = function(){ S.l[S.step] = inp.value; save(); compose(); view(); var o = missL(S.step, inp.value), w = words(inp.value), h = !p.re || new RegExp(p.re, 'i').test(inp.value);
          chk.innerHTML = '<span class="ms-wc'+(w >= WMIN ? ' ok' : '')+'">📝 '+Math.min(w, WMIN)+' of '+WMIN+' words</span>' + (p.re ? '<span class="ms-chip'+(h ? ' ok' : '')+'">'+(h ? '✓ ' : '')+esc(p.chipT)+'</span>' : '');
          $('.ms-pk-nx', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        inp.addEventListener('input', upd); upd();
        function add(t){ if (inp.value.indexOf(t) < 0) inp.value = inp.value.replace(/\s*$/, '') + (inp.value.trim() ? ' ' : '') + t + ' '; inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); upd(); }
        $('.ms-pk-st', act).onclick = function(){ SFX.click(); add(p.st); };
        $$('.ms-pk-chip', act).forEach(function(b){ b.onclick = function(){ SFX.click(); add(p.chips[+b.dataset.i]); }; });
        var bk = $('.ms-pk-bk', act); if (bk) bk.onclick = function(){ SFX.click(); S.step--; save(); render(); };
        $('.ms-pk-nx', act).onclick = function(){ var o = missL(S.step, inp.value); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; } SFX.chime(); S.step++; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      if (!S.open) {
        act.innerHTML = stepCard(N, N, cfg.readT, '<p>'+esc(cfg.readP)+'</p><div class="ms-gi-box"></div><div class="ms-excheck ms-pk-chk"></div><div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-pk-bk">⬅️ Back</button><button type="button" class="ms-btn big ms-pk-go">🏛️ '+esc(cfg.openT)+'</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-pk-chk', act);
        var upd = function(){ var v = ta.value, n = sents(v), o = missAll(); view();
          chk.innerHTML = '<span class="ms-wc'+(n >= SMIN && n <= SMAX ? ' ok' : '')+'">📝 '+n+' sentence'+(n === 1 ? '' : 's')+' ('+SMIN+' to '+SMAX+')</span>' + PQ.slice(0, 3).map(function(p){ var h = new RegExp(p.re, 'i').test(v); return '<span class="ms-chip'+(h ? ' ok' : '')+'">'+(h ? '✓ ' : '')+esc(p.chipT)+'</span>'; }).join('');
          $('.ms-pk-go', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $('.ms-pk-bk', act).onclick = function(){ SFX.click(); S.step = PQ.length - 1; save(); goHome(); compose(); render(); };
        $('.ms-pk-go', act).onclick = function(){ var o = missAll(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; }
          S.open = true; save(); SFX.fanfare(); goHome(); stage.classList.remove('lighting'); void stage.offsetWidth; if (!calm()) stage.classList.add('lighting'); render(); stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
          if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 2600);
          optiNod('assignment'); check(); };
        return; }
      goHome(); act.innerHTML = '';
      end.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-pk-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      $('.ms-pk-edit', end).onclick = function(){ S.open = false; S.step = PQ.length; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd) curUpd(); });
    var its = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && its.length && its.every(on)) markDone('assignment'); }
    its.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  /* ══════════ Added for 3.10_04 (The Florida Constitution and Florida Symbols) ══════════
     DATA.flSyms (the five things in the Florida case). Shared drawings: flMap() (Florida, old-map style), flSealDraw() (a drawing of
     what is on today's seal; never the official seal), flCaseSvg() (the Florida case: green book, palm leaf, mockingbird, blossom, bronze seal)
     - nameland    Lobby: 1513, sail closer, tap 7 blossoms to spell LA FLORIDA, turn the calendar to Pascua Florida Day; 2 questions
     - greenbook   Gallery: open the green-and-gold Florida Constitution to 3 pages (power from the people; Legislature, governor, courts; rights, limits, 1968); 1 question per page
     - spotfix     Gallery main attraction: the real 1879 engraving of the old seal beside a drawing of today's; tap the 3 things fixed in 1985, then today's 4 parts; 2 questions
     - heroniche   Gallery: Mary McLeod Bethune's lit niche, 3 objects one at a time; 1 question; Evidence Q3 box moves into the last step
     - bloombranch Workroom: four flor words open four buds on an orange branch; a tiny orange starts
     - flcase      Exhibit Floor: side → 2 reasons → 1 evidence → 3 to 5 sentences in the step → install: the case lights, the seal stamps the green book, the welcome sign shows the pick */

  var FL_PATH = 'M111 39 L246 39 L253 57 L392 65 L402 52 L431 56 L438 105 L454 147 L477 191 L485 242 L503 296 L500 350 L485 383 L454 389 L444 362 L418 344 L397 302 L371 254 L360 224 L368 176 L350 153 L314 105 L277 99 L230 117 L215 93 L168 75 L111 81 Z';
  var FL_BUDS = [[160, 60], [222, 64], [300, 84], [398, 92], [420, 160], [438, 232], [466, 300]];
  function flBlossom(x, y, s, cls){ s = s || 1; var p = ''; for (var i = 0; i < 5; i++) p += '<ellipse cx="0" cy="'+(-6 * s)+'" rx="'+(4 * s)+'" ry="'+(6 * s)+'" fill="#FFFDF6" stroke="#B9A77A" stroke-width="1" transform="rotate('+(i * 72)+')"/>';
    return '<g class="'+(cls || '')+'" transform="translate('+x+' '+y+')"><g class="op">'+p+'<circle r="'+(3 * s)+'" fill="#F3C64A" stroke="#C99B3C"/></g></g>'; }
  function flMap(){
    var s = '<defs><pattern id="ms-nl-wave" width="24" height="12" patternUnits="userSpaceOnUse"><path d="M0 8 q6 -6 12 0 t12 0" stroke="#7FA7B5" stroke-width="1.2" fill="none" opacity=".55"/></pattern></defs>' +
      '<rect width="640" height="420" fill="#BFDCE6"/><rect width="640" height="420" fill="url(#ms-nl-wave)"/>' +
      '<path d="M0 0 H640 V30 L440 30 L402 52 L392 65 L253 57 L246 39 L111 39 L0 39 Z" fill="#E9DCB8" opacity=".9"/>' +
      '<path class="land" d="'+FL_PATH+'" fill="#CFE0A6" stroke="#6E5A2E" stroke-width="3" stroke-linejoin="round"/>' +
      '<text x="560" y="36" text-anchor="middle" class="cp">N ▲</text><text x="120" y="250" class="sea">GULF</text><text x="540" y="260" class="sea">OCEAN</text>' +
      '<text x="600" y="400" text-anchor="end" class="yr">1513</text>';
    s += FL_BUDS.map(function(b, i){ return '<g class="bud b'+i+'" data-i="'+i+'" tabindex="-1"><circle cx="'+b[0]+'" cy="'+b[1]+'" r="20" class="hit" fill="#FFD666" opacity="0"/><path d="M'+b[0]+' '+(b[1] + 9)+' q-7 -10 0 -18 q7 8 0 18 z" fill="#8DBE5A" stroke="#4E7A2A" stroke-width="1.5" class="cl"/>' + flBlossom(b[0], b[1], 1.3, 'fl') + '</g>'; }).join('');
    s += '<g class="ship" style="transform:translateX(0px)"><path d="M560 170 h52 l-8 14 h-38 z" fill="#7A4E1E" stroke="#4A2E10" stroke-width="2"/><path d="M584 170 V122 M598 170 V132" stroke="#4A2E10" stroke-width="2.5"/><path d="M584 124 q16 12 0 40 z" fill="#FFF8E7" stroke="#9C7420"/><path d="M598 134 q12 10 0 30 z" fill="#FFF8E7" stroke="#9C7420"/><path d="M584 122 l10 3 l-10 3" fill="#B5432F"/></g>';
    s += '<g class="ban"><path d="M48 330 h290 l-14 22 l14 22 h-290 l14 -22 z" fill="#F3E2B8" stroke="#9C7420" stroke-width="2.5"/><text x="193" y="360" text-anchor="middle" class="bt">' +
      'LA '+'FLORIDA'.split('').map(function(c, i){ return '<tspan class="lt l'+i+'">'+c+'</tspan>'; }).join('')+'</text></g>';
    return s;
  }
  function flSealDraw(){
    var flowers = [[82, 238], [92, 252], [70, 260], [104, 266], [60, 248]].map(function(p){ return '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="4" fill="#E2483B" stroke="#8A2A1E"/>'; }).join('');
    return '<defs><clipPath id="ms-sf-clip"><circle cx="150" cy="150" r="138"/></clipPath><linearGradient id="ms-sf-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FC6E8"/><stop offset="1" stop-color="#FCE7B0"/></linearGradient></defs>' +
      '<circle cx="150" cy="150" r="146" fill="#C99B3C" stroke="#7A5A1E" stroke-width="4"/><g clip-path="url(#ms-sf-clip)">' +
      '<rect width="300" height="300" fill="url(#ms-sf-sky)"/>' +
      '<g class="pt p-sun"><circle cx="205" cy="146" r="26" fill="#F7C531"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function(i){ var a = Math.PI * (i / 8), x = 205 - Math.cos(a) * 34, y = 146 - Math.sin(a) * 34, x2 = 205 - Math.cos(a) * 70, y2 = 146 - Math.sin(a) * 70; return '<path d="M'+x.toFixed(0)+' '+y.toFixed(0)+' L'+x2.toFixed(0)+' '+y2.toFixed(0)+'" stroke="#F7C531" stroke-width="4" stroke-linecap="round"/>'; }).join('') + '</g>' +
      '<rect y="146" width="300" height="70" fill="#3E86B8"/><path d="M0 160 h300 M0 176 h300 M0 194 h300" stroke="#9CC9E6" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="pt p-boat"><path d="M180 178 h80 l-10 14 h-62 z" fill="#FFFFFF" stroke="#3B3F4A" stroke-width="2"/><rect x="196" y="164" width="44" height="14" fill="#F6F1E4" stroke="#3B3F4A" stroke-width="1.5"/><rect x="226" y="140" width="8" height="24" fill="#3B3F4A"/><circle cx="214" cy="183" r="11" fill="#B5432F" stroke="#5A1E12" stroke-width="2"/><path d="M214 172 v22 M203 183 h22" stroke="#5A1E12" stroke-width="1.5"/><path d="M230 136 q-8 -10 4 -18 q10 -6 4 -14" stroke="#9A9A9A" stroke-width="4" fill="none" opacity=".7"/></g>' +
      '<path d="M0 184 Q70 180 130 196 Q210 220 300 222 V300 H0 Z" fill="#7FB65A"/><path d="M0 226 Q110 218 300 246 V300 H0 Z" fill="#5E9A3E"/>' +
      '<g class="pt p-palm"><path d="M136 236 Q132 170 142 104" stroke="#7A5A2E" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M134 220 h8 M134 200 h8 M135 180 h8 M137 160 h8 M139 140 h8 M140 122 h7" stroke="#5A3A1E" stroke-width="2"/>' +
      [-160, -130, -100, -70, -40, -15, 15].map(function(d){ var a = d * Math.PI / 180, x = 142 + Math.cos(a) * 46, y = 104 + Math.sin(a) * 30; return '<path d="M142 104 Q'+((142 + x) / 2).toFixed(0)+' '+(((104 + y) / 2) - 16).toFixed(0)+' '+x.toFixed(0)+' '+y.toFixed(0)+'" stroke="#2F7D46" stroke-width="7" fill="none" stroke-linecap="round"/>'; }).join('') + '</g>' +
      '<g class="pt p-woman" transform="translate(16 0)"><ellipse cx="60" cy="286" rx="22" ry="5" fill="#3E6A2A" opacity=".5"/><path d="M44 196 L76 196 L84 284 L36 284 Z" fill="#2E6FB8"/><path d="M41 220 h40 M39 238 h44 M38 256 h46 M37 272 h48" stroke="#F3C64A" stroke-width="5"/><path d="M40 229 h42 M38 247 h45 M37 264 h47" stroke="#B5432F" stroke-width="3"/>' +
      '<path d="M42 170 Q60 160 78 170 L82 200 L38 200 Z" fill="#E9DCC0" stroke="#9C7420" stroke-width="1.5"/><path d="M40 182 h44" stroke="#B5432F" stroke-width="3"/><circle cx="60" cy="156" r="12" fill="#B9835A"/><path d="M48 152 Q60 136 72 152 L70 160 Q60 152 50 160 Z" fill="#2E2A26"/>' +
      '<path d="M78 176 Q92 190 96 206" stroke="#B9835A" stroke-width="6" fill="none" stroke-linecap="round"/>' + flowers + '</g>' +
      '</g><circle cx="150" cy="150" r="138" fill="none" stroke="#7A5A1E" stroke-width="3"/>';
  }
  function flCaseSvg(o){
    o = o || {}; var s = '';
    s += '<defs><linearGradient id="ms-fc-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".35"/><stop offset=".5" stop-color="#FFFFFF" stop-opacity=".06"/><stop offset="1" stop-color="#FFFFFF" stop-opacity=".25"/></linearGradient></defs>';
    s += '<rect x="20" y="300" width="460" height="46" rx="4" fill="#7A4E1E" stroke="#4A2E10" stroke-width="2"/><rect x="30" y="310" width="440" height="8" fill="#C99B3C"/><text x="250" y="338" text-anchor="middle" class="pl">THE FLORIDA CASE</text>';
    s += '<rect class="glow" x="28" y="40" width="444" height="262" rx="6" fill="#2F7D46" opacity="0"/><rect x="28" y="40" width="444" height="262" rx="6" fill="#EFE6D2" stroke="#8E6438" stroke-width="5"/>';
    // stands
    var st = [[80, 'palm'], [170, 'bird'], [330, 'bloom'], [420, 'sealst']];
    st.forEach(function(p, i){ s += '<g class="sd s-'+p[1]+'"><rect class="lt" x="'+(p[0] - 38)+'" y="76" width="76" height="200" rx="10" fill="#FFD666" opacity="0"/><rect x="'+(p[0] - 30)+'" y="262" width="60" height="14" rx="2" fill="#B88A2A" stroke="#6E4A26"/><rect x="'+(p[0] - 20)+'" y="232" width="40" height="30" fill="#E9DCC0" stroke="#9C7420" stroke-width="1.5"/></g>'; });
    // palm leaf (fan) on stand 1
    s += '<g class="ob o-palm"><path d="M80 232 V196" stroke="#7A5A2E" stroke-width="4"/>' + [-150, -125, -100, -80, -55, -30].map(function(d){ var a = d * Math.PI / 180; return '<path d="M80 196 L'+(80 + Math.cos(a) * 44).toFixed(0)+' '+(196 + Math.sin(a) * 50).toFixed(0)+'" stroke="#2F7D46" stroke-width="7" stroke-linecap="round"/>'; }).join('') + '</g>';
    // mockingbird statue on stand 2
    s += '<g class="ob o-bird"><ellipse cx="170" cy="212" rx="20" ry="13" fill="#9A9A9A" stroke="#5A5A5A" stroke-width="1.5"/><circle cx="186" cy="200" r="8" fill="#A8A8A8" stroke="#5A5A5A" stroke-width="1.5"/><path d="M193 199 l8 2 l-8 2" fill="#3B3F4A"/><circle cx="188" cy="198" r="1.6" fill="#2E2A26"/><path d="M152 210 l-20 -6 l4 10 z" fill="#7A7A7A" stroke="#5A5A5A"/><path d="M162 208 q8 6 18 2" stroke="#FFFFFF" stroke-width="2.5" fill="none"/><path d="M166 224 v8 M174 224 v8" stroke="#5A5A5A" stroke-width="2"/></g>';
    // the green book in the middle, open, on a tilted stand
    s += '<g class="ob o-book"><rect class="lt" x="196" y="150" width="108" height="130" rx="10" fill="#FFD666" opacity="0"/><path d="M206 274 L294 274 L284 260 L216 260 Z" fill="#B88A2A" stroke="#6E4A26"/><rect x="210" y="186" width="80" height="76" rx="4" fill="#1F6B3E" stroke="#0E3A1E" stroke-width="2"/><rect x="216" y="192" width="68" height="64" rx="2" fill="none" stroke="#E2B84A" stroke-width="2"/><text x="250" y="214" text-anchor="middle" class="bk">FLORIDA</text><text x="250" y="230" text-anchor="middle" class="bk2">CONSTITUTION</text><circle class="mark" cx="250" cy="244" r="9" fill="#C99B3C" stroke="#7A5A1E" stroke-width="2" opacity="0"/></g>';
    // orange blossom in a small vase on stand 3
    s += '<g class="ob o-bloom"><path d="M322 232 q-6 -16 8 -22 q14 6 8 22 z" fill="#DCEFF5" stroke="#7FA7B5" stroke-width="1.5"/><path d="M330 212 q-2 -18 4 -30" stroke="#4E7A2A" stroke-width="2.5" fill="none"/><path d="M332 196 q12 -8 16 2 q-10 4 -16 -2 z" fill="#2F7D46"/>' + flBlossom(334, 178, 1.4, '') + flBlossom(320, 192, 1, '') + '</g>';
    // bronze seal stamp on stand 4 (lifts and stamps the book at the finale)
    s += '<g class="ob o-seal"><g class="stamp"><rect x="414" y="170" width="12" height="26" rx="4" fill="#5A3A1E"/><circle cx="420" cy="166" r="9" fill="#7A4E1E"/><ellipse cx="420" cy="208" rx="26" ry="10" fill="#8C5A2A" stroke="#4A2E10" stroke-width="2"/><rect x="394" y="198" width="52" height="10" fill="#A8743A"/><ellipse cx="420" cy="198" rx="26" ry="10" fill="#C08A4A" stroke="#4A2E10" stroke-width="2"/><path d="M420 204 v-10 M414 196 l6 -4 l6 4" stroke="#4A2E10" stroke-width="1.5" fill="none"/></g></g>';
    s += '<rect x="28" y="40" width="444" height="262" rx="6" fill="url(#ms-fc-glass)" pointer-events="none"/><path d="M60 50 L110 290 M84 50 L134 290" stroke="#FFFFFF" stroke-width="4" opacity=".35"/>';
    s += '<rect x="28" y="30" width="444" height="14" rx="3" fill="#8E6438"/>';
    if (o.sign) s += '<g class="sign"><rect x="512" y="250" width="10" height="90" fill="#5A3A1E"/><rect x="590" y="250" width="10" height="90" fill="#5A3A1E"/><rect x="494" y="150" width="124" height="110" rx="10" fill="#1F6B3E" stroke="#E2B84A" stroke-width="4"/><text x="556" y="174" text-anchor="middle" class="sg">WELCOME TO</text><text x="556" y="194" text-anchor="middle" class="sg2">FLORIDA</text><g class="pick"></g></g>';
    return s;
  }

  /* ══ MODULE: nameland (Lobby · 1513: tap the flowers and the land gets its name) ══ */
  function modNameland(cfg){
    var anchor = $(cfg.anchor || '#panel-scene .ms-sign'); if (!anchor) return;
    ST.nl = ST.nl || {st:0, b:[], cal:false, q1:false, q2:false}; var S = ST.nl; S.b = S.b || [];
    var m = shell('ms-nl-mod', cfg), NB = FL_BUDS.length;
    m.insertAdjacentHTML('beforeend', '<div class="ms-nl-wrap"><div class="ms-nl-stage"><svg viewBox="0 0 640 420" class="ms-nl-map" role="img" aria-label="An old-style map of Florida, green land in a blue sea. A small Spanish sailing ship is off the east coast. Closed flower buds dot the land. An empty banner waits in the sea.">'+flMap()+'</svg>' +
      '<div class="ms-nl-cal" aria-hidden="true"><b>APRIL</b><span>2</span><small>Pascua Florida Day</small></div><p class="ms-credit">'+esc(cfg.modelT || '')+'</p></div><div class="ms-nl-act" aria-live="polite"></div></div>');
    after(anchor, m);
    var act = $('.ms-nl-act', m), stage = $('.ms-nl-stage', m), map = $('.ms-nl-map', m);
    function look(){ var r = stage.getBoundingClientRect(); if (r.top < 110 || r.bottom > innerHeight) stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function paint(){ stage.className = 'ms-nl-stage st' + Math.min(S.st, 2) + (S.cal ? ' cal' : '') + (S.st === 1 ? ' tapping' : '');
      $$('.bud', map).forEach(function(b){ var i = +b.dataset.i; b.classList.toggle('open', S.b.indexOf(i) >= 0); });
      for (var i = 0; i < 7; i++) { var t = $('.l' + i, map); if (t) t.classList.toggle('on', S.b.length > i || S.st >= 2); } }
    function tapBud(i){ if (S.st !== 1 || S.b.indexOf(i) >= 0) return; SFX.chime(); S.b.push(i); if (S.b.length >= NB) S.st = 2; save(); render(); }
    $$('.bud', map).forEach(function(b){ b.addEventListener('click', function(){ tapBud(+b.dataset.i); }); });
    function render(){
      paint(); var N = 5;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.doneT||'')+'</div>'; return; }
      if (S.st === 0) { act.innerHTML = stepCard(1, N, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><button type="button" class="ms-btn big ms-nl-go">'+esc(cfg.go1)+'</button>');
        $('.ms-nl-go', act).onclick = function(){ SFX.click(); S.st = 1; save(); render(); look(); }; return; }
      if (S.st === 1) { var left = NB - S.b.length;
        act.innerHTML = stepCard(2, N, cfg.s2T, '<p>'+esc(cfg.s2)+'</p><p class="ms-nl-left">🌼 '+esc((cfg.left || '{n} more to tap').replace('{n}', left))+'</p><div class="ms-pchoices ms-nl-kb">'+FL_BUDS.map(function(b, i){ return S.b.indexOf(i) >= 0 ? '' : '<button type="button" class="ms-btn alt ms-nl-kbb" data-i="'+i+'" aria-label="Open flower '+(i + 1)+'">🌱 '+(i + 1)+'</button>'; }).join('')+'</div>');
        $$('.ms-nl-kbb', act).forEach(function(b){ b.onclick = function(){ tapBud(+b.dataset.i); }; }); return; }
      if (!S.cal) { act.innerHTML = stepCard(3, N, cfg.s3T, '<div class="ms-vd-thanks">✅ '+esc(cfg.s2ok)+'</div><p>'+esc(cfg.s3)+'</p><button type="button" class="ms-btn big ms-nl-cal-b">'+esc(cfg.go3)+'</button>');
        $('.ms-nl-cal-b', act).onclick = function(){ SFX.chime(); S.cal = true; save(); render(); look(); }; return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { markDone('scene'); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(S.q1 ? 5 : 4, N, q.title, (S.q1 ? '' : '<div class="ms-vd-thanks">📅 '+esc(cfg.s3ok)+'</div>') + cq.html); cq.bind(act);
    }
    render(); if (S.q2) markDone('scene');
  }

  /* ══ MODULE: greenbook (Gallery · the green-and-gold Florida Constitution, three pages) ══ */
  function modGreenbook(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var PG = cfg.pages || []; ST.gk = ST.gk || {open:false, p:0, ok:false, done:false}; var S = ST.gk;
    var m = shell('ms-gb-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-gb-wrap"><div class="ms-gb-stage"><div class="ms-gb-book"><div class="cover"><b>CONSTITUTION</b><span>of the</span><b>STATE OF FLORIDA</b><i></i></div><div class="spread"><div class="pg left"></div><div class="pg right"></div></div></div><p class="ms-credit">'+esc(cfg.modelT || '')+'</p></div><div class="ms-gb-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-gb-act', m), stage = $('.ms-gb-stage', m), book = $('.ms-gb-book', m);
    function pic(k){
      if (k === 'people') return '<svg viewBox="0 0 200 90" class="gp" aria-hidden="true">' + [20, 52, 84, 116, 148, 180].map(function(x, i){ var c = ['#B5432F', '#2E6FB8', '#2F7D46', '#C08A1E', '#8B6FC0', '#B9835A'][i]; return '<circle cx="'+x+'" cy="34" r="11" fill="#E3B46E"/><path d="M'+(x - 14)+' 82 q14 -36 28 0 z" fill="'+c+'"/>'; }).join('') + '<path d="M10 14 h180" stroke="#C99B3C" stroke-width="3" stroke-dasharray="4 5"/><text x="100" y="10" text-anchor="middle" class="gt">THE PEOPLE</text></svg>';
      if (k === 'three') return '<div class="gp3"><span>🏛️<b>Legislature</b><small>makes the laws</small></span><span>⭐<b>Governor</b><small>leads the state, carries out the laws</small></span><span>⚖️<b>Courts</b><small>decide what laws mean</small></span></div>';
      return '<div class="gpd"><span class="y">1838</span><small>Florida\'s first constitution</small><span class="y now">1968</span><small>the one we use today, voted in by the people</small></div>';
    }
    function render(){
      book.classList.toggle('open', !!S.open); var N = PG.length + 1;
      if (S.done) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (!S.open) { act.innerHTML = stepCard(1, N, cfg.s0T, '<p>'+esc(cfg.s0)+'</p><button type="button" class="ms-btn big ms-gb-open">'+esc(cfg.go0)+'</button>');
        $('.ms-gb-open', act).onclick = function(){ SFX.click(); S.open = true; save(); render(); }; return; }
      var p = PG[S.p];
      $('.pg.left', book).innerHTML = '<small class="no">Page '+(S.p + 1)+' of '+PG.length+'</small><h5>'+esc(p.h)+'</h5>' + (p.quote ? '<blockquote>“'+esc(p.quote)+'”</blockquote>' : '') + '<p>'+esc(p.say)+'</p>';
      $('.pg.right', book).innerHTML = pic(p.pic);
      book.classList.remove('turn'); void book.offsetWidth; if (!calm()) book.classList.add('turn');
      var cq = choiceQ(p.q, S.p + 1, function(){ S.ok = true; save(); var nx = $('.ms-gb-nx', act); if (nx) nx.hidden = false; });
      act.innerHTML = stepCard(S.p + 2, N, p.stepT, '<p class="ms-gb-look">👀 Read the page in the book. Then answer.</p>' + cq.html + '<button type="button" class="ms-btn big ms-gb-nx"'+(S.ok ? '' : ' hidden')+'>'+(S.p + 1 < PG.length ? esc(cfg.nextP || 'Turn the page ➡️') : 'Done ✓')+'</button>');
      cq.bind(act);
      if (S.ok) { var r = p.q.opts.filter(function(o){ return o.ok; })[0], rb = $$('.ms-choice', act).filter(function(b){ return p.q.opts[+b.dataset.j].ok; })[0]; if (rb) rb.classList.add('ok'); $('.ms-exfb', act).innerHTML = '<div class="ms-vd-thanks">✅ '+r.fb+'</div>'; }
      $('.ms-gb-nx', act).onclick = function(){ SFX.click(); S.ok = false;
        if (S.p + 1 < PG.length) { S.p++; save(); render(); stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
        else { S.done = true; ST.gal = ST.gal||{}; ST.gal.book = 1; save(); galleryCheck(); SFX.fanfare(); render(); } };
    }
    render();
  }

  /* ══ MODULE: spotfix (Gallery main attraction · the old seal vs a drawing of today's) ══ */
  function modSpotfix(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var FX = cfg.fixes || [], PT = cfg.parts || [];
    ST.sf = ST.sf || {f:0, parts:[], q1:false, q2:false, miss:false}; var S = ST.sf; S.parts = S.parts || [];
    var m = shell('ms-sf-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-sf-wrap"><div class="ms-sf-left"><div class="ms-sf-pair"><figure class="old"><div class="ph"><img src="'+img(cfg.img)+'" alt="'+esc(cfg.alt)+'">' +
      FX.map(function(f, i){ return '<span class="ring r'+i+'" style="left:'+f.x+'%;top:'+f.y+'%;width:'+(f.r * 2)+'%;"><b>'+(i + 1)+'</b></span>'; }).join('') + '</div><figcaption><b>'+esc(cfg.oldT)+'</b></figcaption></figure>' +
      '<figure class="new"><svg viewBox="0 0 300 300" class="ms-sf-draw" role="img" aria-label="A drawing of what is on today\'s seal: the sun over the water, a sabal palm, a steamboat, and a Seminole woman scattering flowers on the shore.">'+flSealDraw()+'</svg><figcaption><b>'+esc(cfg.newT)+'</b><small>'+esc(cfg.newNote || '')+'</small></figcaption>' +
      '<div class="tags">'+FX.map(function(f, i){ return '<span class="tag t'+i+'">🏷️ '+esc(f.tag)+'</span>'; }).join('')+'</div></figure></div><p class="ms-credit">'+esc(cfg.credit || '')+'</p></div><div class="ms-sf-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-sf-act', m), pair = $('.ms-sf-pair', m), ph = $('.old .ph', m), draw = $('.ms-sf-draw', m);
    function look(){ var r = pair.getBoundingClientRect(); if (r.top < 110 || r.bottom > innerHeight + 60) pair.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); }
    function paint(){ for (var i = 0; i < FX.length; i++) { pair.classList.toggle('f' + i, S.f > i); }
      pair.classList.toggle('seek', S.f < FX.length); pair.classList.toggle('parts', S.f >= FX.length && S.parts.length < PT.length);
      PT.forEach(function(p){ var g = $('.p-' + p.k, draw); if (g) g.classList.toggle('on', S.parts.indexOf(p.k) >= 0); }); }
    ph.addEventListener('click', function(e){ if (S.f >= FX.length) return; var r = ph.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * 100, y = (e.clientY - r.top) / r.height * 100, f = FX[S.f];
      var dx = x - f.x, dy = y - f.y; if (Math.sqrt(dx * dx + dy * dy) <= f.r + 3) { SFX.chime(); S.f++; S.miss = false; save(); render(); } else { SFX.miss(); S.miss = true; render(); } });
    PT.forEach(function(p){ var g = $('.p-' + p.k, draw); if (!g) return; g.setAttribute('tabindex', '0'); g.addEventListener('click', function(){ tapPart(p.k); }); g.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tapPart(p.k); } }); });
    function tapPart(k){ if (S.f < FX.length || S.parts.indexOf(k) >= 0) return; SFX.chime(); S.parts.push(k); save(); render(); }
    function render(){
      paint(); var N = FX.length + 3;
      if (S.q2) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      if (S.f < FX.length) { var f = FX[S.f];
        act.innerHTML = stepCard(S.f + 1, N, f.stepT, (S.f ? '<div class="ms-vd-thanks">✅ '+esc(FX[S.f - 1].ok)+'</div>' : '') + '<p>'+esc(f.s)+'</p><p class="ms-sf-tap">👆 Tap the old seal, on the left.</p>' + (S.miss ? '<div class="ms-notyet">🤔 '+esc(f.hint)+' <button type="button" class="ms-btn alt ms-sf-show">Show me</button></div>' : ''));
        var sh = $('.ms-sf-show', act); if (sh) sh.onclick = function(){ var rg = $('.ring.r' + S.f, ph); rg.classList.remove('peek'); void rg.offsetWidth; rg.classList.add('peek'); };
        return; }
      if (S.parts.length < PT.length) {
        var got = PT.filter(function(p){ return S.parts.indexOf(p.k) >= 0; });
        act.innerHTML = stepCard(FX.length + 1, N, cfg.partsT, '<div class="ms-vd-thanks">✅ '+esc(FX[FX.length - 1].ok)+'</div><p>'+esc(cfg.partsS)+'</p><p class="ms-sf-tap">👆 Tap the drawing, on the right. '+esc((cfg.partsLeft || '{n} more to tap').replace('{n}', PT.length - S.parts.length))+'</p>' +
          '<ul class="ms-sf-parts">'+got.map(function(p){ return '<li><b>'+esc(p.t)+':</b> '+esc(p.m)+'</li>'; }).join('')+'</ul><div class="ms-pchoices ms-sf-kb">'+PT.filter(function(p){ return S.parts.indexOf(p.k) < 0; }).map(function(p){ return '<button type="button" class="ms-btn alt ms-sf-kbb" data-k="'+p.k+'">'+esc(p.t)+'</button>'; }).join('')+'</div>');
        $$('.ms-sf-kbb', act).forEach(function(b){ b.onclick = function(){ tapPart(b.dataset.k); }; }); return; }
      var q = S.q1 ? cfg.q2 : cfg.q1;
      var cq = choiceQ(q, S.q1 ? 1 : 2, function(){ if (!S.q1) setTimeout(function(){ S.q1 = true; save(); render(); }, calm()?0:1500);
        else { ST.gal = ST.gal||{}; ST.gal.seal = 1; save(); galleryCheck(); SFX.fanfare(); setTimeout(function(){ S.q2 = true; save(); render(); }, calm()?0:1600); } });
      act.innerHTML = stepCard(FX.length + (S.q1 ? 3 : 2), N, q.title, (S.q1 ? '' : '<ul class="ms-sf-parts">'+PT.map(function(p){ return '<li><b>'+esc(p.t)+':</b> '+esc(p.m)+'</li>'; }).join('')+'</ul>') + cq.html); cq.bind(act);
    }
    render();
  }

  /* ══ MODULE: heroniche (Gallery · Mary McLeod Bethune's lit niche; Evidence Q3 in the last step) ══ */
  function modHeroniche(cfg){
    var anchor = $(cfg.anchor); if (!anchor) return;
    var OB = cfg.objs || [], ta = document.getElementById(cfg.ta || 'journal-q3'), NEED = cfg.wordMin || 12, RE = new RegExp(cfg.needRe || '.', 'i');
    ST.hn = ST.hn || {n:0, q:false, done:false}; var S = ST.hn;
    var m = shell('ms-hn-mod', cfg);
    var sv = '<svg viewBox="0 0 640 300" class="ms-hn-scene" role="img" aria-label="A lit niche in a museum wall with a shelf. On the shelf: a little white schoolhouse with coins in front, an Army cap, and a small white statue on a stand marked Florida.">' +
      '<rect width="640" height="300" fill="#D8C8A4"/><path d="M90 290 V110 Q90 20 320 20 Q550 20 550 110 V290 Z" fill="#3B2A1E"/><path d="M104 290 V112 Q104 34 320 34 Q536 34 536 112 V290 Z" fill="#5A4430" class="bk"/>' +
      '<path class="beam" d="M320 34 L150 262 H490 Z" fill="#FFE7A0" opacity=".0"/><rect x="104" y="258" width="432" height="14" fill="#8E6438" stroke="#5A3A1E"/><rect x="96" y="272" width="448" height="18" fill="#6E4A26"/>' +
      '<g class="ob o0"><rect x="150" y="200" width="90" height="58" fill="#FFFDF6" stroke="#6B2E1E" stroke-width="2"/><path d="M142 202 L195 168 L248 202 Z" fill="#B5432F" stroke="#6B2E1E" stroke-width="2"/><rect x="186" y="150" width="18" height="22" fill="#FFFDF6" stroke="#6B2E1E"/><path d="M190 158 q5 -8 10 0 v6 h-10 z" fill="#C99B3C"/><rect x="186" y="228" width="18" height="30" fill="#5A3A1E"/><rect x="160" y="212" width="18" height="14" fill="#BFDCE6" stroke="#6B2E1E"/><rect x="212" y="212" width="18" height="14" fill="#BFDCE6" stroke="#6B2E1E"/>' +
      '<circle cx="258" cy="252" r="7" fill="#D9D9D9" stroke="#8A8A8A"/><circle cx="272" cy="252" r="7" fill="#D9D9D9" stroke="#8A8A8A"/><circle cx="265" cy="243" r="7" fill="#C99B3C" stroke="#8A6A10"/><text x="265" y="236" text-anchor="middle" class="mn">$1.50</text></g>' +
      '<g class="ob o1"><path d="M300 244 Q300 214 330 210 Q362 214 362 244 Z" fill="#6B6B3A" stroke="#3E3E1E" stroke-width="2"/><path d="M296 246 h70 l-6 10 h-58 z" fill="#585830" stroke="#3E3E1E" stroke-width="2"/><circle cx="331" cy="228" r="6" fill="#E2B84A" stroke="#8A6A10"/></g>' +
      '<g class="ob o2"><rect x="414" y="236" width="56" height="22" fill="#E9E4D8" stroke="#8A8270" stroke-width="2"/><text x="442" y="252" text-anchor="middle" class="fl">FLORIDA</text><rect x="424" y="226" width="36" height="10" fill="#F4F0E6" stroke="#8A8270"/><path d="M430 226 Q428 186 436 160 L448 160 Q456 186 454 226 Z" fill="#F7F4EC" stroke="#9A9282" stroke-width="2"/><circle cx="442" cy="150" r="11" fill="#F7F4EC" stroke="#9A9282" stroke-width="2"/><path d="M448 176 q14 4 16 18" stroke="#9A9282" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="464" cy="196" r="4" fill="#3B3F4A"/></g>' +
      '<g class="lamp"><path d="M310 34 h20 v10 h-20 z" fill="#C99B3C"/><circle cx="320" cy="48" r="6" fill="#FFF3C8"/></g></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-hn-wrap"><div class="ms-hn-stage">'+sv+'<div class="ms-hn-cards">'+OB.map(function(o, i){ return '<div class="cd c'+i+'"><b>'+esc(o.t)+'</b><p>'+esc(o.say)+'</p></div>'; }).join('')+'</div><p class="ms-credit">'+esc(cfg.modelT || '')+'</p></div><div class="ms-hn-act" aria-live="polite"></div></div>');
    anchor.parentNode.insertBefore(m, anchor);
    var act = $('.ms-hn-act', m), stage = $('.ms-hn-stage', m), wb = lvWriteBox(ta, cfg.noteT), curUpd = null;
    function look(){ var r = stage.getBoundingClientRect(); if (r.top < 110 || r.bottom > innerHeight) stage.scrollIntoView({behavior: calm()?'auto':'smooth', block:'nearest'}); }
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function miss(){ var o = [], v = ta ? ta.value : '', n = words(v); if (n < NEED) o.push('Add '+(NEED-n)+' more word'+(NEED-n===1?'':'s')+'.'); if (!RE.test(v)) o.push(cfg.needT); return o; }
    if (ta) new MutationObserver(function(){ if (!root.classList.contains('ms-on')) lvMoveText(ta, wb.home); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function render(){
      if (!root.classList.contains('ms-on')) return;
      stage.className = 'ms-hn-stage n' + S.n; if (wb) wb.paint(cfg.qn || 'Question 3'); curUpd = null;
      var N = OB.length + 2;
      if (ta) ta.classList.toggle('ms-gi-away', !(S.q && !S.done));
      if (S.done) { if (ta) lvMoveText(ta, wb.home); act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-hn-edit">✏️ Edit my answer</button></div>'; $('.ms-hn-edit', act).onclick = function(){ S.done = false; save(); render(); }; return; }
      if (S.n < OB.length) { if (ta) lvMoveText(ta, wb.home); var o = OB[S.n];
        act.innerHTML = stepCard(S.n + 1, N, o.stepT, (S.n ? '<div class="ms-vd-thanks">✅ '+esc(OB[S.n - 1].t)+': you read its card.</div>' : '') + '<p>'+(S.n ? 'Light up the next object on the shelf.' : 'Light up the first object on the shelf.')+' Then read its card under the niche.</p><button type="button" class="ms-btn big ms-hn-go">'+esc(o.go)+'</button>');
        $('.ms-hn-go', act).onclick = function(){ SFX.chime(); S.n++; save(); render(); look(); }; return; }
      if (!S.q) { if (ta) lvMoveText(ta, wb.home);
        var cq = choiceQ(cfg.q1, 2, function(){ setTimeout(function(){ S.q = true; save(); if (!ta) { S.done = true; ST.gal = ST.gal||{}; ST.gal.hero = 1; save(); galleryCheck(); } render(); }, calm()?0:1500); });
        act.innerHTML = stepCard(OB.length + 1, N, cfg.q1.title, cq.html); cq.bind(act); return; }
      act.innerHTML = stepCard(N, N, cfg.writeT, '<p>'+esc(cfg.writeP)+'</p><div class="ms-gi-starts">'+(cfg.starters||[]).map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-hn-chk"></div>' +
        '<div class="ms-gi-nav"><button type="button" class="ms-btn big ms-hn-save">Save my answer ✓</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
      $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-hn-chk', act);
      var upd = function(){ var v = ta.value, o = miss(), w = words(v), h = RE.test(v); chk.innerHTML = '<span class="ms-wc'+(w >= NEED ? ' ok' : '')+'">📝 '+Math.min(w, NEED)+' of '+NEED+' words</span><span class="ms-chip'+(h ? ' ok' : '')+'">'+(h ? '✓ ' : '')+esc(cfg.chipT)+'</span>';
        $('.ms-hn-save', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
      curUpd = upd; upd();
      $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = (cfg.starters||[])[+b.dataset.i]; if (ta.value.indexOf(t) < 0) ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); }; });
      $('.ms-hn-save', act).onclick = function(){ var o = miss(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; }
        S.done = true; ST.gal = ST.gal||{}; ST.gal.hero = 1; save(); galleryCheck(); SFX.fanfare(); render(); };
    }
    if (ta) ta.addEventListener('input', function(){ if (wb) wb.paint(cfg.qn || 'Question 3'); if (curUpd && S.q && !S.done) curUpd(); });
    render();
  }

  /* ══ MODULE: bloombranch (Workroom · four flor words open four buds on an orange branch) ══ */
  function modBloombranch(cfg){
    var anchor = $(cfg.anchor || '#panel-check .quiz-card'); if (!anchor) return;
    var W = cfg.words || []; ST.bb = ST.bb || {i:0, ok:false}; var S = ST.bb;
    var m = shell('ms-bb-mod', cfg), BX = [[150, 112], [270, 82], [390, 70], [510, 52]];
    var scene = '<svg viewBox="0 0 640 220" class="ms-bb-scene" role="img" aria-label="A branch from an orange tree with green leaves and four closed flower buds.">' +
      '<rect width="640" height="220" fill="#EAF4E4"/><path d="M20 196 Q200 150 330 112 T620 40" stroke="#6E4A26" stroke-width="12" fill="none" stroke-linecap="round"/>' +
      [[90, 170, -30], [210, 132, 20], [330, 116, -40], [450, 82, 25], [570, 52, -20]].map(function(l){ return '<path d="M'+l[0]+' '+l[1]+' q20 -26 46 -10 q-22 22 -46 10 z" fill="#2F7D46" stroke="#1E5A30" stroke-width="1.5" transform="rotate('+l[2]+' '+l[0]+' '+l[1]+')"/>'; }).join('') +
      BX.map(function(b, j){ return '<g class="bd d'+j+'"><path d="M'+b[0]+' '+(b[1] + 22)+' V'+(b[1] + 8)+'" stroke="#4E7A2A" stroke-width="3"/><path class="cl" d="M'+b[0]+' '+(b[1] + 12)+' q-14 -18 0 -36 q14 18 0 36 z" fill="#F4F0D8" stroke="#8DBE5A" stroke-width="2"/>' + flBlossom(b[0], b[1], 2.2, 'fl') +
        '<g class="wt"><rect x="'+(b[0] - 44)+'" y="'+(b[1] + 34)+'" width="88" height="26" rx="6" fill="#FFF8E7" stroke="#9C7420" stroke-width="1.5"/><text x="'+b[0]+'" y="'+(b[1] + 52)+'" text-anchor="middle" class="ww">'+esc(W[j] ? W[j].w : '')+'</text></g></g>'; }).join('') +
      '<g class="fruit"><path d="M600 44 v12" stroke="#4E7A2A" stroke-width="2"/><circle cx="600" cy="64" r="9" fill="#9CCB5A" stroke="#5E8A2A" stroke-width="1.5"/></g></svg>';
    m.insertAdjacentHTML('beforeend', '<div class="ms-wr-card"><span class="ms-wr-root">'+esc(cfg.root)+'</span><span class="ms-wr-eq">=</span><span class="ms-wr-mean">'+esc(cfg.means)+'</span></div><div class="ms-bb-stage">'+scene+'</div><div class="ms-bb-act" aria-live="polite"></div>');
    after(anchor, m);
    var act = $('.ms-bb-act', m), stg = $('.ms-bb-stage', m);
    function told(){ window._rootMatchDone = S.i >= W.length; if (typeof window.gatherAnswers === 'function') try { window.gatherAnswers(); } catch(e){} }
    function paint(){ var n = S.i + (S.ok ? 1 : 0); $$('.bd', m).forEach(function(d, j){ d.classList.toggle('open', j < n); d.classList.toggle('cur', j === S.i && !S.ok && S.i < W.length); }); stg.classList.toggle('full', S.i >= W.length); }
    function look(){ var r = stg.getBoundingClientRect(); if (r.top < 110 || r.bottom > innerHeight) stg.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); }
    function render(){
      told(); paint();
      if (S.i >= W.length) { act.innerHTML = '<div class="ms-win show">'+(cfg.win||'')+'</div>'; return; }
      var w = W[S.i], body = '<div class="ms-bb-word">🌱 <b>'+esc(w.w)+'</b></div><p>'+esc((cfg.askT || 'What does {w} mean?').replace('{w}', w.w))+'</p>';
      body += '<div class="ms-pchoices col">'+w.opts.map(function(o, k){ return '<button type="button" class="ms-btn ms-bb-o'+(S.ok && o.ok ? ' ok' : '')+'" data-k="'+k+'">'+esc(o.t)+'</button>'; }).join('')+'</div><div class="ms-exfb" aria-live="polite">'+(S.ok ? '<div class="ms-vd-thanks">✅ '+esc(w.ok)+'</div>' : '')+'</div>';
      if (S.ok) body += '<button type="button" class="ms-btn big ms-bb-nx">'+(S.i + 1 < W.length ? 'Next word ➡️' : 'Done ✓')+'</button>';
      act.innerHTML = stepCard(S.i + 1, W.length, 'Word '+(S.i + 1)+' of '+W.length, body);
      $$('.ms-bb-o', act).forEach(function(b){ b.onclick = function(){ var o = w.opts[+b.dataset.k];
        if (o.ok) { if (!S.ok) { SFX.chime(); S.ok = true; save(); render(); look(); } } else { SFX.miss(); b.classList.remove('no'); void b.offsetWidth; b.classList.add('no'); if (!S.ok) $('.ms-exfb', act).innerHTML = '<div class="ms-notyet">🤔 '+esc(w.fb)+'</div>'; } }; });
      var nx = $('.ms-bb-nx', act); if (nx) nx.onclick = function(){ SFX.click(); S.i++; S.ok = false; save(); render(); look(); if (S.i >= W.length) SFX.fanfare(); };
    }
    render();
  }

  /* ══ MODULE: flcase (Exhibit Floor · the Big Question: palm or seal; install lights the case, the seal stamps the book) ══ */
  function modFlcase(cfg){
    var ta = document.getElementById(cfg.ta || 'journal-assign'); if (!ta) return;
    var SD = cfg.sides || {}, SMIN = cfg.sentMin || 3, SMAX = cfg.sentMax || 5;
    ST.fc = ST.fc || {step:1, side:null, r:[], ev:null, open:false}; var S = ST.fc; S.r = S.r || [];
    var m = shell('ms-fc-mod', cfg);
    m.insertAdjacentHTML('beforeend', '<div class="ms-fc-wrap"><div class="ms-fc-act"></div><div class="ms-fc-stage"><svg viewBox="0 0 640 360" class="ms-fc-case" role="img" aria-label="The Florida case: a green book in the middle, a palm leaf, a mockingbird statue, an orange blossom, and a bronze seal stamp. A green welcome sign stands beside it.">'+flCaseSvg({sign:true})+'</svg>' +
      '<div class="slip"><div class="hd">MY RECOMMENDATION · FLORIDA\'S SYMBOL</div><p class="sd"></p><p class="tx"></p><p class="by"></p></div><p class="next">'+esc(cfg.nextT||'')+'</p></div></div><div class="ms-fc-end"></div>');
    var blk = ta.closest('.activity-body') || ta.parentNode;
    var home = document.createComment('fc-home'); ta.parentNode.insertBefore(home, ta);
    var p0 = blk.querySelector('p'); if (p0 && p0.nextSibling) blk.insertBefore(m, p0.nextSibling); else blk.insertBefore(m, blk.firstChild);
    $$('p, .callout, .textbox-prompt', blk).forEach(function(e){ if (!m.contains(e)) e.classList.add('ms-hide-on'); });
    var act = $('.ms-fc-act', m), show = $('.ms-fc-stage', m), end = $('.ms-fc-end', m), svg = $('.ms-fc-case', m), curUpd = null;
    function goHome(){ if (ta.previousSibling !== home) home.parentNode.insertBefore(ta, home.nextSibling); }
    new MutationObserver(function(){ if (!root.classList.contains('ms-on')) goHome(); else render(); }).observe(root, {attributes:true, attributeFilter:['class']});
    function words(t){ return (t.trim().match(/\S+/g)||[]).length; }
    function sents(t){ return t.split(/[.!?]+/).filter(function(s){ return words(s) >= 3; }).length; }
    function side(){ return SD[S.side]; }
    function hasSide(v){ return side() && new RegExp(side().re, 'i').test(v); }
    function hasEv(v){ return new RegExp(cfg.evRe, 'i').test(v); }
    function missing(){ var o = [], v = ta.value, n = sents(v); if (n < SMIN) o.push('Write '+(SMIN - n)+' more sentence'+(SMIN - n === 1 ? '' : 's')+' (3 words or more each).'); if (n > SMAX) o.push('Keep it to '+SMAX+' sentences or fewer.');
      if (!hasSide(v)) o.push('Say which side you choose.'); if (!/because|reason/i.test(v)) o.push('Give your reasons. Use the word because or reason.'); if (!hasEv(v)) o.push('Use your piece of evidence.'); return o; }
    function pickArt(){ var d = side(); if (!d) return ''; return S.side === 'a' ? '<g transform="translate(556 236)"><path d="M0 0 V-34" stroke="#C9A06A" stroke-width="4"/>' + [-150, -120, -90, -60, -30].map(function(g){ var a = g * Math.PI / 180; return '<path d="M0 -34 L'+(Math.cos(a) * 26).toFixed(0)+' '+(-34 + Math.sin(a) * 22).toFixed(0)+'" stroke="#9CCB5A" stroke-width="5" stroke-linecap="round"/>'; }).join('') + '</g>'
      : '<g transform="translate(556 226)"><circle r="22" fill="#C99B3C" stroke="#FFE7A0" stroke-width="3"/><circle cx="7" cy="2" r="5" fill="#F7C531"/><path d="M-8 10 V-10" stroke="#5A3A1E" stroke-width="2.5"/><path d="M-8 -10 l-8 4 M-8 -10 l8 4 M-8 -10 l-6 -6 M-8 -10 l6 -6" stroke="#2F7D46" stroke-width="3"/><path d="M-20 8 h40" stroke="#3E86B8" stroke-width="3"/></g>'; }
    function view(){ var d = side(), v = ta.value.trim(); $('.slip .sd', show).textContent = d ? d.ic + ' ' + d.t : ''; $('.slip .tx', show).textContent = v || 'Your sentences will appear here as you write.'; $('.slip .tx', show).classList.toggle('empty', !v);
      var nm = sget(NAMEK,''); $('.slip .by', show).textContent = nm ? nm + ', Civic Curator' : 'A Civic Curator'; $('.slip', show).hidden = S.step < 4; show.classList.toggle('open', !!S.open); svg.classList.toggle('lit', !!S.open); $('.pick', svg).innerHTML = S.open ? pickArt() : ''; }
    function render(){
      if (!root.classList.contains('ms-on')) return;
      end.innerHTML = ''; curUpd = null; var d = side(), N = 5;
      if (!d) S.step = 1; else if (S.r.length < 2 && S.step > 2) S.step = 2; else if (S.ev == null && S.step > 3) S.step = 3;
      ta.classList.toggle('ms-gi-away', S.step !== 4); view();
      function sc(){ act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); }
      function got(){ return '<p class="ms-gi-ok">✅ Your side: <b>'+d.ic+' '+esc(d.t)+'</b> <button type="button" class="ms-btn alt ms-fc-b1">↩️ Change my side</button></p>'; }
      function bindB1(){ var b = $('.ms-fc-b1', act); if (b) b.onclick = function(){ SFX.click(); S.step = 1; save(); goHome(); render(); }; }
      if (S.step === 1) { goHome(); act.innerHTML = stepCard(1, N, cfg.s1T, '<p>'+esc(cfg.s1)+'</p><div class="ms-bt-sides">'+Object.keys(SD).map(function(k){ var x = SD[k]; return '<button type="button" class="ms-bt-side ms-fc-side'+(k === S.side ? ' on' : '')+'" data-k="'+k+'"><b>'+x.ic+' '+esc(x.t)+'</b><span>'+esc(x.d)+'</span></button>'; }).join('')+'</div>');
        $$('.ms-fc-side', act).forEach(function(b){ b.onclick = function(){ SFX.click(); if (S.side !== b.dataset.k) { S.r = []; S.ev = null; } S.side = b.dataset.k; S.step = 2; save(); render(); sc(); }; }); return; }
      if (S.step === 2) { goHome(); act.innerHTML = stepCard(2, N, cfg.s2T, got() + '<p>'+esc(cfg.s2)+'</p><div class="ms-pchoices col">'+d.reasons.map(function(t, i){ var on = S.r.indexOf(i) >= 0; return '<button type="button" class="ms-btn'+(on ? '' : ' alt')+' ms-fc-r" data-i="'+i+'" aria-pressed="'+on+'">'+(on ? '✓ ' : '')+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-nav"><button type="button" class="ms-btn big ms-fc-n2'+(S.r.length === 2 ? '' : ' ms-notready')+'">Next ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        bindB1();
        $$('.ms-fc-r', act).forEach(function(b){ b.onclick = function(){ var i = +b.dataset.i, k = S.r.indexOf(i); if (k >= 0) S.r.splice(k, 1); else { if (S.r.length >= 2) S.r.shift(); S.r.push(i); } SFX.click(); save(); render(); }; });
        $('.ms-fc-n2', act).onclick = function(){ if (S.r.length < 2) { SFX.miss(); $('.ms-gi-fb', act).innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> Pick '+(2 - S.r.length)+' more reason'+(S.r.length === 1 ? '' : 's')+'.</div>'; return; } SFX.click(); S.step = 3; save(); render(); sc(); }; return; }
      if (S.step === 3) { goHome(); act.innerHTML = stepCard(3, N, cfg.s3T, got() + '<p>'+esc(cfg.s3)+'</p><div class="ms-pchoices col">'+d.ev.map(function(t, i){ return '<button type="button" class="ms-btn'+(i === S.ev ? '' : ' alt')+' ms-fc-e" data-i="'+i+'">📜 '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-exbtns"><button type="button" class="ms-btn alt ms-fc-p3">⬅️ Back</button></div>');
        bindB1(); $('.ms-fc-p3', act).onclick = function(){ SFX.click(); S.step = 2; save(); render(); };
        $$('.ms-fc-e', act).forEach(function(b){ b.onclick = function(){ SFX.click(); S.ev = +b.dataset.i; S.step = 4; save(); render(); sc(); }; }); return; }
      if (S.step === 4) { var notes = S.r.map(function(i){ return '<span>💡 '+esc(d.reasons[i])+'</span>'; }).join('') + '<span>📜 '+esc(d.ev[S.ev])+'</span>';
        var ST4 = [cfg.st1.replace('{side}', d.say), cfg.st2, cfg.st3, cfg.st4];
        act.innerHTML = stepCard(4, N, cfg.s4T, got() + '<p>'+esc(cfg.s4)+'</p><div class="ms-cp-notes">'+notes+'</div><div class="ms-gi-starts">'+ST4.map(function(t, i){ return '<button type="button" class="ms-btn alt ms-gi-start" data-i="'+i+'">✏️ '+esc(t)+'</button>'; }).join('')+'</div><div class="ms-gi-box"></div><div class="ms-excheck ms-fc-chk"></div>' +
          '<div class="ms-gi-nav"><button type="button" class="ms-btn alt ms-fc-p4">⬅️ Back</button><button type="button" class="ms-btn big ms-fc-n4">Read my recommendation ➡️</button></div><div class="ms-gi-fb" aria-live="polite"></div>');
        bindB1(); $('.ms-gi-box', act).appendChild(ta); var fb = $('.ms-gi-fb', act), chk = $('.ms-fc-chk', act);
        var upd = function(){ var v = ta.value, n = sents(v), o = missing(), a = hasSide(v), r = /because|reason/i.test(v), e = hasEv(v);
          chk.innerHTML = '<span class="ms-wc'+(n >= SMIN && n <= SMAX ? ' ok' : '')+'">📝 '+n+' sentence'+(n === 1 ? '' : 's')+' (3 to 5)</span><span class="ms-chip'+(a ? ' ok' : '')+'">'+(a ? '✓ ' : '')+'your side</span><span class="ms-chip'+(r ? ' ok' : '')+'">'+(r ? '✓ ' : '')+'reasons</span><span class="ms-chip'+(e ? ' ok' : '')+'">'+(e ? '✓ ' : '')+'evidence</span>'; view();
          $('.ms-fc-n4', act).classList.toggle('ms-notready', !!o.length); if (fb.innerHTML) fb.innerHTML = o.length ? '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>' : ''; };
        curUpd = upd; upd();
        $$('.ms-gi-start', act).forEach(function(b){ b.onclick = function(){ var t = ST4[+b.dataset.i]; if (ta.value.indexOf(t) < 0) ta.value = ta.value.replace(/\s*$/, '') + (ta.value.trim() ? ' ' : '') + t + ' '; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); ta.dispatchEvent(new Event('input', {bubbles:true})); upd(); }; });
        $('.ms-fc-p4', act).onclick = function(){ SFX.click(); S.step = 3; save(); goHome(); render(); };
        $('.ms-fc-n4', act).onclick = function(){ var o = missing(); if (o.length) { SFX.miss(); fb.innerHTML = '<div class="ms-notyet">🔎 <b>Almost!</b> '+o.map(esc).join(' ')+'</div>'; return; } SFX.click(); S.step = 5; save(); goHome(); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
        return; }
      goHome(); act.innerHTML = '';
      end.innerHTML = (S.open ? '<div class="ms-win show">'+(cfg.win||'')+'</div>' : stepCard(5, N, cfg.s5T, '<p>'+esc(cfg.s5||'')+'</p><button type="button" class="ms-btn big ms-fc-go">🏛️ '+esc(cfg.openT)+'</button>')) + '<div class="ms-exbtns"><button type="button" class="ms-btn alt ms-fc-edit">✏️ '+esc(cfg.editT||'Edit')+'</button></div>';
      var gb = $('.ms-fc-go', end); if (gb) gb.onclick = function(){ S.open = true; save(); SFX.fanfare(); show.classList.remove('lighting'); void show.offsetWidth; if (!calm()) show.classList.add('lighting'); render(); show.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'});
        if (!calm() && typeof window.fireConfetti === 'function') setTimeout(function(){ try { window.fireConfetti(); } catch(e){} }, 3400);
        optiNod('assignment'); check(); };
      $('.ms-fc-edit', end).onclick = function(){ S.open = false; S.step = 4; save(); render(); act.scrollIntoView({behavior: calm()?'auto':'smooth', block:'start'}); };
    }
    ta.addEventListener('input', function(){ if (curUpd) curUpd(); });
    var its = $$('#panel-assignment .turn-in-item');
    function on(i){ return /checked|done|active|complete/.test(i.className); }
    function check(){ if (S.open && its.length && its.every(on)) markDone('assignment'); }
    its.forEach(function(i){ i.addEventListener('click', function(){ setTimeout(check, 0); }); });
    render(); check();
  }

  var MODS = { cart: modCart, relief: modRelief, reliefsrc: modReliefsrc, rain: modRain, crates: modCrates, timecase: modTimecase, dial: modDial, wind: modWind, cases: modCases, exhibit: modExhibit, galintro: modGalintro, cultcart: modCultcart, timerail: modTimerail, cultmap: modCultmap, visitors: modVisitors, wordroot: modWordroot, caseex: modCaseex, tokens: modTokens, towntable: modTowntable, magnify: modMagnify, pinmap: modPinmap, storypin: modStorypin, wallpanels: modWallpanels, threads: modThreads, langmap: modLangmap, compare2: modCompare2, findstate: modFindstate, lighttable: modLighttable, landmarks: modLandmarks, nightmap: modNightmap, directory: modDirectory, cratepin: modCratepin, seasons: modSeasons, oldmtn: modOldmtn, harbor: modHarbor, nelabel: modNelabel, wxtwin: modWxtwin, storm: modStorm, sponge: modSponge, twinlab: modTwinlab, shelf: modShelf, window: modWindow, lakes5: modLakes5, mwlabel: modMwlabel, rainjars: modRainjars, canyon: modCanyon, walls: modWalls, swsign: modSwsign, akhi: modAkhi, rainshadow: modRainshadow, hotspot: modHotspot, westfinale: modWestfinale, radio: modRadio, tapedeck: modTapedeck, newspaper: modNewspaper, onair: modOnair, who: modWho, cwall: modCwall, syllabary: modSyllabary, founder: modFounder, evcards: modEvcards, ledger: modLedger, evop: modEvop, council: modCouncil, sealq: modSealq, river: modRiver, weigh: modWeigh, recommend: modRecommend, breadline: modBreadline, choicebasket: modChoicebasket, dayring: modDayring, hallopen: modHallopen, twotables: modTwotables, traderoad: modTraderoad, tradesort: modTradesort, fairtrade: modFairtrade, wrongbooth: modWrongbooth, backpack: modBackpack, coinring: modCoinring, boothsigns: modBoothsigns, barter: modBarter, testbench: modTestbench, trustswitch: modTrustswitch, chococase: modChococase, snackstand: modSnackstand, exchtrip: modExchtrip, islandmap: modIslandmap, neighborpanels: modNeighborpanels, growtest: modGrowtest, routemap: modRoutemap, breakfast: modBreakfast, shiptag: modShiptag, toystand: modToystand, decboard: modDecboard, freepuppy: modFreepuppy, mytiles: modMytiles, honestybox: modHonestybox, twomarkets: modTwomarkets, inspector: modInspector, plaque: modPlaque, corner: modCorner, fixtown: modFixtown, townjar: modTownjar, firstlabel: modFirstlabel, recess: modRecess, powerflip: modPowerflip, korp: modKorp, caselamp: modCaselamp, wordbuild: modWordbuild, ballot: modBallot, envelope: modEnvelope, whichfloor: modWhichfloor, schoolxray: modSchoolxray, threebldg: modThreebldg, loctrain: modLoctrain, plaques: modPlaques, nameland: modNameland, greenbook: modGreenbook, spotfix: modSpotfix, heroniche: modHeroniche, bloombranch: modBloombranch, flcase: modFlcase, globe: modGlobe, wallmap: modWallmap, spacemap: modSpacemap, sizescale: modSizescale };

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
