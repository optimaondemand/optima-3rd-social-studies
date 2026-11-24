#!/usr/bin/env python3
"""File one G3 SS VR week into the repo (run from the repo root). Borrowed from the G3 science kit's file_week.py.
  python3 tools/vr/file_week.py 21            # new clips come from Downloads as g3ss-vr21-opti-<clip>.mp3
  python3 tools/vr/file_week.py 26 --q4       # Q4: record nothing; reuse shared clips only
For every voice line: if an earlier week already has a clip with the SAME words, copy it (0 credits);
else take Downloads/g3ss-vrWW-opti-<clip>.mp3 if it exists (a new one-take recording); else leave it pending.
Then: rebuild every vr-<W>.html (repo mode), copy engine + week assets, append new rows to clip-log.json/csv.
"""
import os, sys, glob, shutil, hashlib, json, subprocess, csv, io
WK = int(sys.argv[1]); Q4 = '--q4' in sys.argv
D = os.path.expanduser('~/mnt/Downloads'); K = 'tools/vr/weeks'
weeks = sorted(int(os.path.basename(p)) for p in glob.glob(K + '/*') if os.path.isdir(p) and os.path.basename(p).isdigit())
W = json.load(open('%s/%d/week.json' % (K, WK), encoding='utf-8'))
have = {}
for w in weeks:
    if w == WK: continue
    V = json.load(open('%s/%d/week.json' % (K, w), encoding='utf-8'))['voice']
    for c, t in V.items():
        f = '%s/%d/audio/opti-%s.mp3' % (K, w, c)
        if os.path.exists(f): have.setdefault(t, f)
os.makedirs('%s/%d/audio' % (K, WK), exist_ok=True)
report = {}
for c, t in W['voice'].items():
    dst = '%s/%d/audio/opti-%s.mp3' % (K, WK, c)
    new = '%s/g3ss-vr%d-opti-%s.mp3' % (D, WK, c)
    if t in have and os.path.abspath(have[t]) != os.path.abspath(dst):
        shutil.copyfile(have[t], dst); report[c] = 'reuse ' + have[t].split('/')[3]
    elif not Q4 and os.path.exists(new) and os.path.getsize(new) > 5000:
        shutil.copyfile(new, dst); report[c] = 'new %d' % len(t)
    elif os.path.exists(dst):
        report[c] = 'kept'
    else:
        report[c] = 'PENDING'
for w in weeks:
    subprocess.run(['python3', 'tools/vr/build_vr.py', '%s/%d/week.json' % (K, w), 'vr-%d.html' % w, '--repo'], check=True, stdout=subprocess.DEVNULL)
for w in weeks:
    a = 'assets/sparkle/vr-%d' % w
    os.makedirs(a + '/img', exist_ok=True); os.makedirs(a + '/audio', exist_ok=True)
    for f in glob.glob('%s/%d/img/*' % (K, w)): shutil.copy(f, a + '/img/')
    for f in glob.glob('%s/%d/audio/*.mp3' % (K, w)): shutil.copy(f, a + '/audio/')
for f in ('vr.css', 'vr.js', 'museum-base.css'): shutil.copy('tools/vr/engine/' + f, 'assets/sparkle/vr/')
sys.path.insert(0, 'tools'); import cliplog
raw = open('clip-log.json', encoding='utf-8').read(); old = json.loads(raw); rows = []
inlog = {r['file'] for r in old}
for w in weeks:
    V = json.load(open('%s/%d/week.json' % (K, w), encoding='utf-8'))['voice']
    for c, t in V.items():
        f = 'assets/sparkle/vr-%d/audio/opti-%s.mp3' % (w, c)
        if f in inlog or not os.path.exists(f): continue
        b = open(f, 'rb').read()
        rows.append({"repo": "optima-3rd-social-studies", "grade": "3", "subject": "social-studies", "voice": "opti", "file": f, "text": t, "key": cliplog.norm(t),
                     "chars": len(t), "kind": "speech", "script_source": "tools/vr/weeks/%d/week.json" % w, "bytes": len(b), "md5": hashlib.md5(b).hexdigest()})
open('clip-log.json', 'w', encoding='utf-8', newline='').write(json.dumps(old + rows, ensure_ascii=('\\u' in raw), indent=0))
craw = open('clip-log.csv', encoding='utf-8-sig', newline='').read()
buf = io.StringIO(); wr = csv.writer(buf, lineterminator='\n')
for r in rows: wr.writerow([r[h] for h in ['repo', 'voice', 'text', 'chars', 'file', 'kind', 'script_source', 'md5']])
bom = open('clip-log.csv', 'rb').read(3) == b'\xef\xbb\xbf'
open('clip-log.csv', 'w', encoding='utf-8-sig' if bom else 'utf-8', newline='').write(craw + buf.getvalue())
new_chars = sum(len(W['voice'][c]) for c, r in report.items() if r.startswith('new'))
print('filed week', WK, report, '| new credits', new_chars, '| log rows +%d' % len(rows))
