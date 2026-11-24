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
- Collections Day game types: `timeline` (week 17). Add new mechanics DATA-driven next to it and re-test every earlier week.
- Pilot: week 17 (3.06.06, Scout the Longhouse, Iroquois Longhouse map). Science kit (optima-3rd-science/tools/vr) is untouched.
