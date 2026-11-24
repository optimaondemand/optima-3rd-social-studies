#!/usr/bin/env python3
"""Rules check for one G3 SOCIAL STUDIES VR week (Build the Diorama). Must print 0 FAIL before Bethany sees the page.
  python3 check_vr.py weeks/17/week.json [built.html]
"""
import csv, html, json, os, re, sys

KIT = os.path.dirname(os.path.abspath(__file__))
fails, warns = [], []
def F(m): fails.append(m)
def Wn(m): warns.append(m)

wp = sys.argv[1]
wdir = os.path.dirname(os.path.abspath(wp))
W = json.load(open(wp, encoding='utf-8'))
cred = json.load(open(os.path.join(wdir, 'credits.json'), encoding='utf-8'))
rows = list(csv.DictReader(open(os.path.join(KIT, 'vr-assets.csv'), encoding='utf-8')))
maps = {r['name'] for r in rows if r['type'] == 'Location'}
models = {r['name'] for r in rows if r['type'] != 'Location'}
BANNED_MODELS = re.compile(r'Tribal Mask|Barbarian|Celtic (Running|Standing|Walking)|Cowboy|Cowgirl', re.I)

# lesson: Lesson B of the week (planning table: weeks have A + B; B codes are even within a unit's pairs)
if not re.match(r'^3\.\d\d\.\d\d$', W['lesson']): F('lesson code must look like 3.UU.LL')
if not W['canvasName'].startswith(W['lesson'] + ' VR · '): F('canvasName must be "<Lesson B code> VR · <Title>"')
if W.get('lessonA') and W['lessonA'] >= W['lesson']: F('lessonA must come before the VR lesson (VR goes with Lesson B)')

# map + models exactly in vr-assets.csv
if W['map'] == 'The Everglades': F('map: The Everglades is not in the app')
if W['map'] not in maps: F('map not in vr-assets.csv: ' + W['map'])
if W['mapWord'].lower() not in W['map'].lower(): F('mapWord must be part of the map name')
pat = W.get('pattern', 'A')
ms = [m for g in W['vr'].get('groups', []) for m in g['models']]
if pat == 'A':
    if not 4 <= len(ms) <= 6: F('Pattern A: 4 to 6 model kinds (has %d)' % len(ms))
    if sum(m.get('count', 1) for m in ms) > 10: F('Pattern A: 10 pieces or fewer')
    for m in ms:
        if m['name'] not in models: F('model not in vr-assets.csv: ' + m['name'])
        if not m.get('word'): F('model without a search word: ' + m['name'])
        if BANNED_MODELS.search(m['name']): F('costume/caricature model may not stand for a people: ' + m['name'])
elif pat == 'B':
    if ms: F('Pattern B places no models')
    if len(W['vr'].get('say', [])) != 2: F('Pattern B: exactly 2 sentences to say in the video')
    if W['vr'].get('seconds', 30) > 30: F('Pattern B: the video is 30 seconds or less')
    t = json.dumps(W['vr']['steps'])
    if 'Record video' not in t: F('Pattern B: a step must say Record video')
    if re.search(r'Take photo', t): F('Pattern B: one video only, no photo')
    if '@SAY@' not in t or '@TIMER@' not in t: F('Pattern B: Step 1 needs @SAY@ and the @TIMER@ practice')
    if re.search(r'\bfind (the|a|an) ', t, re.I): F('never "find" one object on a map')
else:
    F('pattern must be A or B')
if re.search(r'(and|then) (upload|download) .*PDF', json.dumps(W['vr']), re.I): F('VR path turns in ONE thing (no PDF on the VR path)')

steps = W['vr']['steps']
if len(steps) != 5: F('VR path needs exactly 5 steps (has %d)' % len(steps))
if '@CANVAS@' not in json.dumps(steps): F('a step must name the Canvas assignment (@CANVAS@)')

# voice: brief, step1-5, extra, collections; no done/badge clip
need = ['brief', 'step1', 'step2', 'step3', 'step4', 'step5', 'extra', 'collections']
for c in need:
    if c not in W['voice']: F('missing voice line: ' + c)
for c, t in W['voice'].items():
    if c not in need: F('extra voice clip not allowed (no done/badge clip): ' + c)
    n = len(t.split())
    if not 8 <= n <= 25: Wn('voice %s is %d words (aim 8-25)' % (c, n))
    if not os.path.exists(os.path.join(wdir, 'audio', 'opti-%s.mp3' % c)): Wn('audio not recorded yet: ' + c)
if W['voice']['brief'] != W['opti']['brief'] or W['voice']['collections'] != W['opti']['collections']: F('Opti bubble text must match its voice line')

# Collections Day
S = W['studio']; G = S['game']
if S['write']['min'] < 20: F('Collections Day writing minimum is 20 words')
if len(S['write']['frames']) != 2: F('Collections Day needs exactly 2 sentence frames')
keys = {s['key'] for s in G['slots']}
for c in G['cards']:
    if c['slot'] not in keys: F('card slot missing: ' + c['name'])
if G['type'] not in ('timeline',): F('unknown Collections Day game type: ' + G['type'])

# images + credits + alt text
imgs = set()
def walk(o):
    if isinstance(o, dict):
        if isinstance(o.get('img'), str):
            imgs.add(o['img'])
            if not o.get('alt'): F('image without alt text: ' + o['img'])
        for v in o.values(): walk(v)
    elif isinstance(o, list):
        for v in o: walk(v)
walk(W)
for k in imgs:
    if not os.path.exists(os.path.join(wdir, 'img', k + '.jpg')): F('image file missing: ' + k)
    if k not in cred: F('no credit for image: ' + k)

# banned words, dashes, flag emojis in student text
txt = json.dumps({k: v for k, v in W.items() if k not in ('id',)}, ensure_ascii=False)
for bad in ['bonus', 'notebook', 'go back']:
    if re.search(bad, txt, re.I): F('banned word: ' + bad)
if re.search(r' [—–] |—', txt): F('dash in student text')
if re.search('[\U0001F1E6-\U0001F1FF]', txt): F('flag emoji (Windows shows letters)')

# built page: reading load per path (top + ONE path). Opti's voiced bubbles don't count.
if len(sys.argv) > 2:
    s = open(sys.argv[2], encoding='utf-8').read()
    s = re.sub(r'(?s)<details class="vr-help".*?</details>', '', s)
    s = re.sub(r'(?s)<style.*?</style>|<script.*?</script>|<footer.*?</footer>|<textarea.*?</textarea>|<div class="bub">.*?</div>|<span class="vr-word">.*?</span>|<div class="vr-video".*?</video></div></div>|<div class="vr-badge".*?</div></div>|<div class="wl-details".*?</div>', '', s)
    def wc(x): return len(re.findall(r"[A-Za-z0-9’']+", html.unescape(re.sub(r'<[^>]+>', ' ', x))))
    a = s.find('<section class="vr-pane on"'); b = s.find('<section class="vr-pane" id="vr-studio"')
    top, vr, st = wc(s[:a]), wc(s[a:b]), wc(s[b:])
    gw = sum(len(re.findall(r"[A-Za-z0-9’']+", c['name'] + ' ' + c['what'] + ' ' + c['clue'] + ' ' + c['ok'])) for c in G['cards']) + sum(len(x['when'].split()) for x in G['slots'])
    print('reading words: top %d + Diorama %d = %d; top + Collections Day %d (+ game cards %d) = %d' % (top, vr, top + vr, st, gw, top + st + gw))
    for name, n in (('Diorama', top + vr), ('Collections Day', top + st + gw)):
        if n > 520: F('%s reading load %d words (limit ~450)' % (name, n))
        elif n > 450: Wn('%s reading load %d words (aim <= 450)' % (name, n))

for m in warns: print('warn:', m)
for m in fails: print('FAIL:', m)
print('%d FAIL, %d warn' % (len(fails), len(warns)))
sys.exit(1 if fails else 0)
