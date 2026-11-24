# G3 Social Studies VR kit (`tools/vr/`): one weekly VR page, with Lesson B of the week

Theme: Build the Diorama (VR, curator's ribbon) / Collections Day (no headset, Museum stamp). Skill: g3-ss-vr-activity.
Pattern A = build with 4-6 model kinds, ONE photo. Pattern B = scout a place map, ONE video (30 s or less, 2 spoken sentences).
The VR path always turns in ONE thing.

```
python3 check_vr.py weeks/WW/week.json                        # rules (0 FAIL)
python3 build_vr.py weeks/WW/week.json out/G3-SS-Week-WW-VR-mockup.html
python3 check_vr.py weeks/WW/week.json out/G3-SS-Week-WW-VR-mockup.html   # + reading load per path
node playtest_vr.js out/G3-SS-Week-WW-VR-mockup.html 1150 out/pt
node playtest_vr.js out/G3-SS-Week-WW-VR-mockup.html 420 out/pt
python3 build_vr.py weeks/WW/week.json ../../vr-WW.html --repo   # live page (assets referenced)
```
- `engine/` (museum-base.css, vr.css, vr.js, optima-logo.png): no week words. Repo copies go to `assets/sparkle/vr/`.
- `weeks/WW/`: week.json, credits.json, img/<key>.jpg (<=1280 px, q~62), audio/opti-<clip>.mp3 (brief, step1-5, extra, collections; no done/badge clip). Repo copies go to `assets/sparkle/vr-WW/`.
- Opti = `images/opti-owl.png` (repo root). Help drawer images: `images/vr-canvas-help-*.jpg` (copy once from optima-4th-science/images).
- `vr-assets.csv` + `vr-context.md`: copied 9 Nov 2026 from optima-3rd-ela/Planning docs. Map and model names are checked against the CSV.
- Collections Day games (engine/vr.js `GAMES`, all DATA in `studio.game`; check_vr validates each type):
  timeline (17), match (18), sort (19), order (20), odd (21), clue (22), regionmap (23), trade (24), checks (25), route (26),
  dilemma (27), fill (28), memory (29), calendar (30), reveal (31), panel (32), wheel (33). Each game gives rows() for the PDF and auto() for playtest.
  Cards and models can use `icon` (emoji) instead of `img`. credits.json entries can be `{"line": "..."}` (credit text copied from the lesson).
- Weekly loop: write weeks/WW/week.json (+ img, credits) → check_vr → `python3 tools/vr/file_week.py WW` (copies new one-take clips from
  Downloads as g3ss-vrWW-opti-<clip>.mp3, reuses any clip whose words match an earlier week, rebuilds every vr-W.html, copies assets,
  appends clip-log rows). Q4: `file_week.py WW --q4` (reuse only; brief/step3/extra stay pending, the page shows text).
- Shared Opti lines (recorded once, reused word for word): step1 A/B, step2, step4 A/B, step5 A/B, collections. Each week records only brief, step3, extra (~300 credits of 650).
- Playtest a repo build over http: serve the repo root, then `node playtest_vr.js http://localhost:PORT/vr-WW.html 420 out/pt`.
- Commit with explicit paths (`git commit -- <paths>`): another session may have files staged in this repo.
- Pilot: week 17 (3.06.06, Scout the Longhouse). Weeks 18-33 built in the 24 Nov 2026 sweep (see the project doc claude/g3-ss-vr-sweep.md). Science kit untouched.
