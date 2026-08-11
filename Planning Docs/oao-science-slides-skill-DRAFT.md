---
name: oao-science-slides
description: >
  Build OAO Science teacher slide decks (.pptx) for Grades 3-5 synchronous live instruction.
  Each deck covers a ~30-minute live science class with phenomenon hook, investigation cycle,
  vocabulary reveal, CER scaffolding, guided practice, and exit check — all built with pptxgenjs.
  Use this skill whenever asked to build, rebuild, update, or QA OAO science teacher slides for
  any grade or unit — including "build the science slides for 2.01," "make the weather slides,"
  "create teacher slides for the ecosystems lesson," "slides from the science HTML," "build a
  live deck for forces and motion," or any request to produce a .pptx from OAO science lesson
  content. Also invoke when editing existing science slide decks or checking whether slides
  match updated HTML. Always invoke before writing any pptxgenjs code for OAO science teacher
  slides — the investigation cycle, CER scaffolding, and phenomenon-first pedagogy are easy
  to get wrong without this reference.
---

# OAO Science Teacher Slides

## What This Produces

One `.pptx` file per lesson, built with pptxgenjs, structured for ~30-minute live instruction:

- **1 Title slide** (dark, full-bleed)
- **1 Phenomenon hook** (dark — image-driven, no labels, no definitions)
- **1 Objectives / I Can** (light)
- **6-10 Investigation slides** (light — phenomenon cycle: observe, question, model, explain)
- **1 Vocabulary reveal** (light — after students have already encountered the concepts)
- **1-2 CER scaffolding** (light — Claim-Evidence-Reasoning or age-appropriate evidence reasoning)
- **3-5 Guided practice** (light — we do / you try / error analysis)
- **1 Self-check** (light — 3 quick questions)
- **1-2 Assignment preview** (light — exact wording from HTML)
- **1 Closing** (dark, full-bleed — celebration + next lesson teaser)

**Total: ~18-22 slides per deck.**

---

## How This Differs from Social Studies and Math Slides

| Feature | Social Studies | Math | Science |
|---------|---------------|------|---------|
| Opening hook | Museum story / curator narrative | Number Talk (fluency) | Phenomenon (image/scenario) |
| Core arc | Discovery cycle (clue → discuss → reveal) | CPA (concrete → pictorial → abstract) | Investigation cycle (observe → question → model → explain) |
| Student reasoning | Socratic questions + chat frames | Teams prompts + worked examples | CER scaffolding + evidence notebooks |
| Vocabulary timing | After discovery reveal | During/after concept introduction | After investigation (never before) |
| Recurring characters | Museum director, Opti | Math Crew (4 student voices) | Science Crew / Lab Partner Opti |
| Assignment framing | Curator Task + Chronicle | Independent Practice | Lab Report / Science Notebook + Reflection |
| Theme system | Museum rooms (by unit) | Unit arc positions | Investigation themes (by domain: life, earth, physical) |

---

## Core Philosophy

1. **Phenomenon first.** Every lesson opens with something students can SEE — a photo, a scenario, a puzzling observation. No definitions, no vocabulary, no "today we will learn about..." Start with wonder.
2. **Investigation before explanation.** Students observe, question, predict, and model BEFORE the teacher names the concept. The explanation is the payoff, not the starting point.
3. **Vocabulary is earned, not given.** Science words appear only AFTER students have already worked with the concept. A vocabulary slide that comes before investigation is a skill violation.
4. **Evidence-based reasoning at every grade.** 3rd grade uses structured "I noticed... I think... because..." frames. 4th-5th use formal CER (Claim-Evidence-Reasoning). Both appear on slides as visible scaffolds, not hidden in notes.
5. **Students DO something every 2-3 slides.** Observe, predict, draw a model, type in chat, vote, compare data, revise a claim, design a test, explain to a partner.
6. **The teacher is a lab director, not a lecturer.** They set up investigations, ask probing questions, challenge predictions, celebrate revisions, and model scientific thinking aloud.

---

## STEP 0 — READ THE HTML LESSON FILE (Mandatory)

**Every deck must be built from its source HTML lesson file.** The HTML is the authoritative source for objectives, activities, assignment questions, vocabulary, investigations, diagrams, and the science narrative.

### Extraction Command

```bash
cat /path/to/lesson-X-XX-slug.html | python3 -c "
import sys, re
h = sys.stdin.read()
h = re.sub(r'<script[^>]*>.*?</script>', '', h, flags=re.DOTALL)
h = re.sub(r'<style[^>]*>.*?</style>', '', h, flags=re.DOTALL)
h = re.sub(r'<svg[^>]*>.*?</svg>', '', h, flags=re.DOTALL)
h = re.sub(r'<(div|p|br|li|h[1-6]|section)[^>]*>', '\n', h, flags=re.IGNORECASE)
h = re.sub(r'<[^>]+>', ' ', h)
h = re.sub(r'&nbsp;', ' ', h)
for l in h.splitlines():
    l = l.strip()
    if l and len(l) > 4: print(l)
" 2>/dev/null | head -500
```

### What to Extract Before Planning Slides

| Extract | Why It Matters |
|---------|---------------|
| Lesson code and title | Names the deck |
| NGSS standard(s) | Shown on title and objectives slides |
| Essential question | Opens the investigation, returns on closing |
| I Can statements (2-3) | Objectives slide |
| Phenomenon / hook image description | The opening — what students SEE first |
| Key concepts (2-4) | One investigation cycle per concept |
| Vocabulary (6 terms + definitions) | Reveal slide — AFTER investigation |
| Investigation / activity steps | Source for guided practice slides |
| Mind-blowing fact | Used as a curiosity break between sections |
| Diagram / model description | Image placeholder for modeling slides |
| **All assignment questions (exact wording)** | **Drive the slide structure — see Step 1** |
| CER / Write & Explain prompt | Shown verbatim on CER slide |
| Quiz questions (3) + answers | Self-check slide |
| Part A / B / C tasks | Assignment slide |

---

## STEP 1 — Assignment-Backward Planning (Before Anything Else)

Same principle as social studies: the assignment questions determine what the slides must teach.

1. **Write down every assignment question with exact wording from the HTML.**
2. For each question, identify what evidence, data, or reasoning a student needs.
3. Plan a specific earlier slide where students work through that thinking — with a visible Socratic panel or chat frame.
4. **No assignment question may appear for the first time on the assignment slide.**

---

## STEP 2 — Plan the Slide Outline

Target **18-22 slides**. Plan the full outline before writing code.

### Slide Sequence

| Section | Slides | Purpose |
|---------|--------|---------|
| Title (dark, full-bleed) | 1 | Lesson title, NGSS code, domain icon |
| Phenomenon hook (dark) | 1 | Image/scenario — "What do you notice? What do you wonder?" |
| Objectives / I Can (light) | 1 | 2-3 I Can statements, essential question |
| Investigation cycle | 6-10 | Observe → Question → Predict → Model → Explain (see below) |
| Vocabulary reveal (light) | 1 | Terms + definitions, AFTER investigation |
| Mind-blowing fact (light) | 1 | Curiosity break — "Did you know...?" |
| CER / Evidence reasoning (light) | 1-2 | Structured reasoning scaffold visible on slide |
| Guided practice (light) | 3-5 | We Try → Your Turn → Error Analysis |
| Self-check (light) | 1 | 3 multiple-choice questions with answers |
| Assignment preview (light) | 1-2 | Exact questions + lab report / notebook task |
| Closing (dark, full-bleed) | 1 | Essential question revisited + next lesson teaser |

### Investigation Cycle (repeat for each major concept)

This is the science equivalent of the social studies "discovery cycle":

1. **Observe slide (light)** — Image placeholder showing the phenomenon. Prompt: "What do you notice? What do you wonder?" Chat frame with sentence starters. 5-second think time cue in speaker notes.
2. **Question slide (light)** — Socratic panel with 2-3 investigation questions. Students predict in chat. "What do you think will happen if...?"
3. **Model slide (light)** — Image placeholder for diagram/model. Students draw or label in notebooks. "Draw what you think is happening."
4. **Data slide (light)** — If the lesson involves data collection or comparison. Table or chart placeholder.
5. **Explain slide (light or dark reveal)** — Concept named. Definition given. Framed as confirmation of what students already figured out. "You discovered that..."
6. **Connect slide (light)** — "Why does this matter?" Real-world connection. Brief retrieval prompt.

### CER Scaffolding by Grade

**Grade 3** — Use "I noticed... I think... because..." frames. Keep it conversational. Don't use the words "claim" or "evidence" — use "what I found out" and "my proof."

```
I noticed: ____________
I think this happens because: ____________
My proof from the investigation: ____________
```

**Grade 4** — Introduce CER labels but keep language accessible.

```
My Claim (what I think is true): ____________
My Evidence (what I observed or measured): ____________
My Reasoning (why the evidence supports my claim): ____________
```

**Grade 5** — Full CER with expectation of multiple pieces of evidence.

```
Claim: ____________
Evidence 1: ____________
Evidence 2: ____________
Reasoning: How does this evidence support my claim? ____________
```

### Guided Practice Progression

1. **We Try Together** — Teacher models scientific thinking aloud. Visible think-aloud on slide, not just notes.
2. **Your Turn With Support** — Student practice with sentence frames or checklists visible on slide.
3. **Error Analysis** — Common misconception shown. Students identify what's wrong and why. Coral-tinted box for the wrong answer, green box for the correction.
4. **The Tricky One** — Ambiguous scenario that could go either way. Genuine debate opportunity.

---

## STEP 3 — Build with pptxgenjs

### Setup (CRITICAL — every build)

```javascript
const pptxgen = require("pptxgenjs"); // install if needed
const pres = new pptxgen();
pres.defineLayout({ name: "STD16x9", width: 13.333, height: 7.5 });
pres.layout = "STD16x9";
pres.author = "Optima Academy Online";
const S = 4/3; // scale factor for all coordinates
```

**Why defineLayout?** pptxgenjs `LAYOUT_16x9` creates 10"x5.625" but PowerPoint standard 16:9 is 13.333"x7.5". Without this fix, content only fills ~75% of the slide area.

### Color Palette

```javascript
const C = {
  navy:    "0E1C42",  // Primary dark background
  gold:    "D4943A",  // Accent — reveals, celebrations
  teal:    "1A8A7D",  // Accent — science domain highlights
  sky:     "55C8E8",  // Labels, headers on dark backgrounds
  white:   "FFFFFF",  // Light slide backgrounds
  off:     "F0F2F8",  // Off-white content areas
  warm:    "FFF8F0",  // Warm cream (sparingly)
  text:    "0E1C42",  // Primary body text
  muted:   "7A88A8",  // Secondary text, captions
  green:   "34B76F",  // Correct/success
  coral:   "E8636B",  // Error/misconception
  purple:  "8B6FC0",  // Vocabulary
  dkNavy:  "1A2D5A",  // Panel backgrounds
  goldLt:  "FFF3DC",  // Chat frame background
  skyLt:   "EAF8FD",  // Light sky tint
  greenLt: "E3F8ED",  // Light green (life science domain)
  purpLt:  "F0E8FF",  // Light purple tint
  // Science domain accents (for domain-specific tinting)
  life:    "34B76F",  // Life science — green
  earth:   "D4943A",  // Earth science — gold/amber
  physical:"55C8E8",  // Physical science — sky blue
  engineering:"8B6FC0" // Engineering — purple
};
```

### Helper Functions

Same helpers as social studies (imgPlaceholder, darkFullBleed, socratic, chatFrame) — all take 10x5.625 coordinates and multiply by S=4/3 internally. See `references/design-system.md` for exact code.

Additional science-specific helpers:

```javascript
// Investigation prompt panel (teal border, observation-focused)
function investigatePanel(s, prompts, x, y, w, h) {
  x*=S; y*=S; w*=S; h*=S;
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.15,
    fill: { color: "EAF8FD" },
    line: { color: "1A8A7D", width: 2 }
  });
  s.addText("INVESTIGATE", {
    x: x+0.2, y: y+0.1, w: w-0.4, h: 0.28,
    fontSize: 9, bold: true, color: "1A8A7D",
    fontFace: "Calibri", charSpacing: 1.5, margin: 0
  });
  const items = prompts.map((p, i) => ({
    text: p,
    options: {
      fontSize: 12, color: "0E1C42", fontFace: "Calibri",
      bullet: true, breakLine: i < prompts.length - 1,
      paraSpaceAfter: 4
    }
  }));
  s.addText(items, {
    x: x+0.2, y: y+0.38, w: w-0.4, h: h-0.48,
    valign: "top", margin: 0
  });
}

// CER scaffold panel (structured reasoning frame)
function cerPanel(s, grade, x, y, w, h) {
  x*=S; y*=S; w*=S; h*=S;
  const label = grade <= 3 ? "THINK IT THROUGH" : "CLAIM-EVIDENCE-REASONING";
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.15,
    fill: { color: "F0E8FF" },
    line: { color: "8B6FC0", width: 2 }
  });
  s.addText(label, {
    x: x+0.2, y: y+0.1, w: w-0.4, h: 0.28,
    fontSize: 9, bold: true, color: "8B6FC0",
    fontFace: "Calibri", charSpacing: 1.5, margin: 0
  });
  let frames;
  if (grade <= 3) {
    frames = [
      "I noticed: ____________",
      "I think this happens because: ____________",
      "My proof from the investigation: ____________"
    ];
  } else {
    frames = [
      "My Claim: ____________",
      "My Evidence: ____________",
      "My Reasoning: ____________"
    ];
  }
  const items = frames.map((f, i) => ({
    text: f,
    options: {
      fontSize: 12, color: "3A4A6B", fontFace: "Calibri",
      breakLine: i < frames.length - 1, paraSpaceAfter: 6
    }
  }));
  s.addText(items, {
    x: x+0.2, y: y+0.42, w: w-0.4, h: h-0.52,
    valign: "top", margin: 0
  });
}

// Mind-blowing fact callout
function mindBlown(s, fact, x, y, w, h) {
  x*=S; y*=S; w*=S; h*=S;
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.15,
    fill: { color: "1A2D5A" },
    shadow: { type: "outer", blur: 8, offset: 3, angle: 135,
              color: "000000", opacity: 0.2 }
  });
  s.addText("MIND-BLOWING FACT", {
    x: x+0.2, y: y+0.1, w: w-0.4, h: 0.28,
    fontSize: 9, bold: true, color: "D4943A",
    fontFace: "Calibri", charSpacing: 1.5, margin: 0
  });
  s.addText(fact, {
    x: x+0.2, y: y+0.42, w: w-0.4, h: h-0.52,
    fontSize: 13, color: "FFFFFF", fontFace: "Calibri",
    valign: "top", margin: 0
  });
}
```

### Technical Rules (same as social studies + math)

- **NO `#` before hex colors**
- **Fonts:** Cambria for slide titles only; Calibri for everything else
- **`shadow.offset` >= 0** — use `angle` for direction
- **Speaker notes** on every slide (teacher guidance, timing cues)
- **No emoji in panel headers** — pptxgenjs renders them unreliably
- **Max safe bounds in 10x5.625 space:** x+w <= 9.7, y+h <= 5.4

### Output Naming

```
lesson-{module}-{lesson}-slides.pptx
```

Examples: `lesson-2-01-weather-patterns-slides.pptx`, `lesson-7-03-balanced-unbalanced-forces-slides.pptx`

### Save Block

```javascript
const outPath = "/path/to/output/lesson-X-XX-slug-slides.pptx";
pres.writeFile({ fileName: outPath })
  .then(() => console.log("Saved: " + outPath))
  .catch(e => console.error("ERROR:", e));
```

---

## STEP 4 — Verification Checklist

After building, check every deck against this list:

- [ ] Phenomenon slide comes BEFORE any vocabulary or definitions
- [ ] Vocabulary slide comes AFTER students have encountered the concepts
- [ ] Every assignment question was discussed on an earlier slide
- [ ] CER scaffold matches the grade level (3 vs 4-5)
- [ ] I Can statements match the HTML exactly
- [ ] NGSS standard code is correct
- [ ] Essential question appears on opening AND closing slides
- [ ] Speaker notes on every slide include teacher guidance and timing
- [ ] No emoji in panel headers
- [ ] File size > 50KB (indicates real content)
- [ ] Slide dimensions are 13.333 x 7.5 (not 10 x 5.625)

---

## Grade-Specific Notes

### Grade 3 Science
- **Domains**: Forces/Motion (PS2), Life Cycles (LS1), Ecosystems (LS2), Heredity (LS3), Biological Evolution (LS4), Earth Systems (ESS2), Earth & Human Activity (ESS3), Engineering Design (3-5-ETS1)
- **Theme**: National Parks / Florida Ecosystems (when applicable; "neutral" for non-Florida topics)
- **Reasoning**: "I noticed / I think / because" frames — NOT formal CER
- **Lesson types**: `.01` = core lesson, `.02` = lab/investigation/engineering challenge

### Grade 4 Science
- **Domains**: Energy (PS3), Waves (PS4), Organisms (LS1), Earth Systems (ESS1, ESS2), Earth & Human Activity (ESS3), Engineering Design (3-5-ETS1)
- **Theme**: Topic-specific end-to-end theming (every element themed to the lesson subject)
- **Reasoning**: Transitional CER (labels introduced, language still accessible)
- **Spotlight tasks**: Some lessons have creative project-based alternatives (VR/paper)

### Grade 5 Science
- **Domains**: Matter (PS1), Forces/Motion (PS2), Energy (PS3), Organisms (LS1, LS2), Earth Systems (ESS1, ESS2, ESS3), Engineering Design (3-5-ETS1)
- **Theme**: Republic Gazette / Historian framing (for cross-curricular lessons) or domain-specific
- **Reasoning**: Full CER with multiple evidence pieces expected
- **Source independence**: Assignment must present new context, not repeat the explore section

---

## Example Slide-by-Slide for a Typical 3rd Grade Science Lesson

**Lesson 2.01 — What Patterns Do We See in Weather?** (3-ESS2-1)

1. **Title** (dark) — "What Patterns Do We See in Weather?" / NGSS 3-ESS2-1
2. **Phenomenon** (dark) — Photo: dramatic cloud formation over Florida. "What do you notice about the sky? What do you wonder?"
3. **Objectives** (light) — I Can statements + essential question
4. **Observe: Types of Weather** (light) — 4 weather photos side by side (sunny, rainy, snowy, stormy). Chat frame: "I see... I wonder..."
5. **Question** (light) — Socratic panel: "Does the same kind of weather happen every day?" "How could we find out if weather follows a pattern?"
6. **Data: Weather Chart** (light) — Table showing 2 weeks of weather data. Students look for patterns.
7. **Model** (light) — Image placeholder for weather pattern diagram. "Draw what you notice in your notebook."
8. **Explain / Reveal** (light) — "You found it: weather follows patterns. Scientists call this climate data." Definition appears.
9. **Vocabulary** (light) — weather, climate, temperature, precipitation, pattern, forecast — all terms students already encountered
10. **Mind-Blowing Fact** (dark panel) — "Florida gets more lightning strikes than any other state — about 1.4 million per year!"
11. **CER Scaffold** (light) — "I noticed: ___. I think this happens because: ___. My proof: ___."
12. **We Try Together** (light) — Teacher models reading a weather chart and finding a pattern
13. **Your Turn** (light) — Student practice with chat frame
14. **Error Analysis** (light) — "A student says: 'It rained Monday, so it will rain Tuesday.' What's wrong with this claim?"
15. **Self-Check** (light) — 3 multiple-choice questions
16. **Assignment** (light) — Exact questions from HTML + notebook task
17. **Closing** (dark) — Essential question revisited + next lesson teaser
