# Q4 Slide Build Handoff — Grade 3 Social Studies

## Status: Q1-Q3 Complete (48 decks)

All slide decks for Q1 (weeks 1-8), Q2 (weeks 9-16), and Q3 (weeks 17-24) are built and saved to `Planning Docs/Teacher Slides/`.

---

## Q4 Scope: 18 lessons across 9 weeks

### Unit 9 continued — Marketplace Hall (Weeks 25-27, 6 lessons)

| Week | Lesson | Title | Routine | Virtue |
|------|--------|-------|---------|--------|
| 25 | 3.09.03 | Goods, Services, Buyers, and Sellers | Enter the Scene | service |
| 25 | 3.09.04 | Characteristics of Money | Trade and Choice | courage |
| 26 | 3.09.05 | Currencies of the US, Canada, Mexico, and the Caribbean | Enter the Scene | courtesy |
| 26 | 3.09.06 | Trade Routes and Regional Resources | Trade and Choice | honesty |
| 27 | 3.09.07 | Marketplace Decision: Costs and Benefits | Enter the Scene | self-governance |
| 27 | 3.09.08 | Economic Virtues: Honesty and Responsibility | Trade and Choice | responsibility |

Museum room: **Marketplace Hall**. Badge: Wise Trader. 3.09.08 is the unit closer with badge ceremony.

### Unit 10 — Citizenship Hall (Weeks 28-31, 8 lessons)

| Week | Lesson | Title | Routine | Virtue |
|------|--------|-------|---------|--------|
| 28 | 3.10.01 | Why Government Is Needed | Enter the Scene + Founding Words | service |
| 28 | 3.10.02 | The U.S. Constitution and Power from the People | Council Chamber | honesty |
| 29 | 3.10.03 | Local, State, and National Government | Enter the Scene + Founding Words | service |
| 29 | 3.10.04 | The Florida Constitution and Florida Symbols | Council Chamber | honesty |
| 30 | 3.10.05 | Voting and Elections | Enter the Scene + Founding Words | service |
| 30 | 3.10.06 | Patriotic Holidays and Observances | Council Chamber | service |
| 31 | 3.10.07 | Civic Virtues: Civility, Cooperation, Volunteerism, and Responsibility | Enter the Scene + Founding Words | service |
| 31 | 3.10.08 | Symbols, Individuals, Documents, and Events | Council Chamber | honesty |

Museum room: **Citizenship Hall**. Badge: Citizen Curator. 3.10.08 is the unit closer with badge ceremony. Note the new **Founding Words** routine (Lesson A pattern) and continued **Council Chamber** (Lesson B pattern).

### Unit 11 — Grand Exhibition Hall: Final Synthesis (Weeks 32-33, 4 lessons)

| Week | Lesson | Title | Routine | Virtue |
|------|--------|-------|---------|--------|
| 32 | 3.11.01 | Review: See the Place, Hear the Voices, Follow the Story | Historian-Citizen Exhibition | service |
| 32 | 3.11.02 | Build the Final Community-in-the-World Exhibit | Historian-Citizen Exhibition | courtesy |
| 33 | 3.11.03 | Present the Evidence: Map, Source, and Virtue | Historian-Citizen Exhibition | honesty |
| 33 | 3.11.04 | Final Historian-Citizen Reflection | Historian-Citizen Exhibition | service |

Museum room: **Grand Exhibition Hall**. 3.11.04 is the year closer — reveals museum's true purpose, awards **Young Geographer-Citizen** badge, closes with four habits: see the world carefully, use evidence honestly, make wise choices, serve the common good.

---

## HTML Source Files Available

All 18 Q4 HTML lesson files are present in the working folder:

- `ss-3-09_03-goods-services-buyers-sellers.html` (104K)
- `ss-3-09_04-characteristics-of-money.html` (106K)
- `ss-3-09_05-currencies-of-our-neighbors.html` (104K)
- `ss-3-09_06-trade-routes-and-regional-resources.html` (107K)
- `ss-3-09_07-marketplace-decision-costs-and-benefits.html` (103K)
- `ss-3-09_08-economic-virtues-honesty-and-responsibility.html` (113K)
- `ss-3-10_01-why-government-is-needed.html` (99K)
- `ss-3-10_02-us-constitution-and-power-from-the-people.html` (102K)
- `ss-3-10_03-local-state-and-national-government.html` (104K)
- `ss-3-10_04-florida-constitution-and-florida-symbols.html` (105K)
- `ss-3-10_05-voting-and-elections.html` (105K)
- `ss-3-10_06-patriotic-holidays-and-observances.html` (108K)
- `ss-3-10_07-civic-virtues.html` (109K)
- `ss-3-10_08-symbols-individuals-documents-and-events.html` (122K)
- `ss-3-11_01-review-see-hear-follow.html` (91K)
- `ss-3-11_02-build-final-exhibit.html` (93K)
- `ss-3-11_03-present-evidence.html` (98K)
- `ss-3-11_04-final-reflection.html` (98K)

---

## Build Specifications

### pptxgenjs Setup (CRITICAL — must use every build)

```javascript
const pptxgen = require("pptxgenjs"); // install fresh if needed: npm install pptxgenjs
const pres = new pptxgen();
pres.defineLayout({ name: "STD16x9", width: 13.333, height: 7.5 });
pres.layout = "STD16x9";
pres.author = "Optima Academy Online";
const S = 4/3; // scale factor: all helpers take 10x5.625 coords, multiply by S
```

**Why**: pptxgenjs `LAYOUT_16x9` creates 10"x5.625" slides, but PowerPoint standard 16:9 is 13.333"x7.5". Without `defineLayout`, content only fills ~75% of the slide.

### Design System

Reference file: `skills/oao-live-slides/references/design-system.md`

Colors (C object), helpers (`imgPlaceholder`, `darkFullBleed`, `socratic`, `chatFrame`, `hallCard`), typography (Cambria titles, Calibri body), slide types (dark/light), spacing rules, and pptxgenjs gotchas are all documented there.

Key helpers take coordinates in 10x5.625 space and multiply by S=4/3 internally. Exception: `darkFullBleed()` uses literal 13.333x7.5 for full-slide coverage.

### Slide Structure (every deck follows this order)

1. Title (dark, full-bleed) — lesson title, code, museum room
2. Museum hook (dark) — story opening, what's new in the hall
3. Virtue spotlight (dark) — virtue name + connection to content
4. Discovery slides (light, 6-10) — main teaching content from Explore section
5. Why it matters / Big Picture (light)
6. Virtue connection (dark) — if separate from spotlight
7. Guided practice (light, 3-5) — Map Quest, matching, discussion
8. Self-check (light) — 3 multiple-choice questions with answers
9. Assignment (light) — evidence questions + Curator Task (EXACT wording from HTML)
10. Curator's Chronicle (light) — "In this exhibit, I learned that ______ because ______."
11. Closing (dark, full-bleed) — celebration + "coming next" teaser

### Key Rules

- **Assignment-backward**: Every assignment question must be taught/discussed before the assignment slide
- **Evidence questions**: Copy EXACT wording from the HTML — never paraphrase
- **Colors**: No `#` prefix, no alpha. Just `"0E1C42"`
- **No emoji** in panel headers or labels
- **Fonts**: Cambria (titles only), Calibri (everything else)
- **Speaker notes** on every slide with teacher guidance
- **Image placeholders**: Dashed boxes with descriptive labels (not on title/closing — use darkFullBleed there)

### Output Naming

`ss-3-{unit}.{lesson}-{slug}-slides.pptx`

Examples: `ss-3-09.03-goods-services-slides.pptx`, `ss-3-10.01-why-government-is-needed-slides.pptx`

Save to: `Planning Docs/Teacher Slides/`

### Content Extraction

Strip CSS/JS/SVG from HTML, then extract text for lesson content:
```python
import re
html = open(filepath).read()
html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
html = re.sub(r'<svg[^>]*>.*?</svg>', '', html, flags=re.DOTALL)
html = re.sub(r'<[^>]+>', ' ', html)
# decode entities, collapse whitespace
```

### Parallel Build Pattern

Launch up to 5-8 agents simultaneously, each building one deck. Each agent needs: the design system code, lesson content, and output path. Verify each output exists and is >50KB.

---

## Cumulative Deck Count

| Quarter | Weeks | Decks | Status |
|---------|-------|-------|--------|
| Q1 | 1-8 | 16 | Done |
| Q2 | 9-16 | 16 | Done |
| Q3 | 17-24 | 16 | Done |
| Q4 | 25-33 | 18 | Ready to build |
| **Total** | | **66** | **48 done, 18 remaining** |

---

## Known Issues from Prior Builds

1. **OneDrive file locking**: Save operations sometimes fail with "Permission denied" when OneDrive is syncing. Workaround: save with `-v2` suffix, user renames manually. Or retry after a few seconds.
2. **06.04 duplicate**: Both `ss-3-06.04-climate-and-vegetation-slides.pptx` (corrupt) and `-v2.pptx` (good) exist. User should delete the original.
3. **LibreOffice QA**: PDF conversion via `soffice` occasionally fails on structurally valid files. The pptx opens fine in PowerPoint — it's a LibreOffice rendering quirk.
