const pptxgen = require("/sessions/kind-wonderful-brown/lib/node_modules/pptxgenjs");
const pres = new pptxgen();

pres.defineLayout({ name: "STD16x9", width: 13.333, height: 7.5 });
pres.layout = "STD16x9";
pres.author = "Optima Academy Online";
pres.title = "3.07.07 Perceiving Places Through Songs, Legends, Poems, and News";

const C = {
  navy: "0E1C42", gold: "D4943A", teal: "1A8A7D", sky: "55C8E8",
  white: "FFFFFF", off: "F0F2F8", warm: "FFF8F0", text: "0E1C42",
  muted: "7A88A8", green: "34B76F", coral: "E8636B", purple: "8B6FC0",
  dkNavy: "1A2D5A", goldLt: "FFF3DC", skyLt: "EAF8FD", greenLt: "E3F8ED", purpLt: "F0E8FF"
};
const S = 4/3;

function imgPlaceholder(s, label, x, y, w, h) {
  x*=S; y*=S; w*=S; h*=S;
  s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.12, fill:{color:"E2E8F4"}, line:{color:"B0B8CC",width:1.5,dashType:"dash"} });
  s.addText("INSERT IMAGE", { x, y, w, h:0.4, fontSize:9, bold:true, color:"7A88A8", fontFace:"Calibri", align:"center", charSpacing:1.5, margin:0 });
  s.addText(label, { x:x+0.2, y:y+0.4, w:w-0.4, h:h-0.5, fontSize:11, color:"7A88A8", fontFace:"Calibri", align:"center", valign:"middle", italic:true });
}

function darkFullBleed(s, desc) {
  s.addShape(pres.ShapeType.rect, { x:0, y:0, w:13.333, h:7.5, fill:{color:"0B1835"}, line:{color:"3A5080",width:1.5,dashType:"dash"} });
  s.addShape(pres.ShapeType.rect, { x:0, y:0, w:13.333, h:7.5, fill:{color:"0E1C42",transparency:38} });
  s.addNotes("IMAGE TO INSERT: " + desc);
}

function socratic(s, questions, x, y, w, h) {
  x*=S; y*=S; w*=S; h*=S;
  s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.15, fill:{color:"1A2D5A"}, shadow:{type:"outer",blur:8,offset:3,angle:135,color:"000000",opacity:0.2} });
  s.addText("SOCRATIC QUESTIONS", { x:x+0.2, y:y+0.1, w:w-0.4, h:0.28, fontSize:9, bold:true, color:"55C8E8", fontFace:"Calibri", charSpacing:1.5, margin:0 });
  const items = questions.map((q,i) => ({ text:q, options:{ fontSize:11, color:"FFFFFF", fontFace:"Calibri", italic:true, bullet:true, breakLine: i<questions.length-1, paraSpaceAfter:4 } }));
  s.addText(items, { x:x+0.2, y:y+0.38, w:w-0.4, h:h-0.48, valign:"top", margin:0 });
}

function chatFrame(s, frames, x, y, w, h) {
  x*=S; y*=S; w*=S; h*=S;
  s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.12, fill:{color:"FFF3DC"}, line:{color:"F5E6C8",width:1.5} });
  s.addText("CHAT FRAME", { x:x+0.15, y:y+0.06, w:w-0.3, h:0.22, fontSize:9, bold:true, color:"D4943A", fontFace:"Calibri", charSpacing:1.5, margin:0 });
  const items = frames.map((f,i) => ({ text:`"${f}"`, options:{ fontSize:12, color:"5A4A3A", fontFace:"Cambria", italic:true, breakLine: i<frames.length-1, paraSpaceAfter:5 } }));
  s.addText(items, { x:x+0.15, y:y+0.28, w:w-0.3, h:h-0.35, valign:"top", margin:0 });
}

// Light slide background helper
function lightBg(s) {
  s.background = { fill: C.off };
}

// Section header bar for light slides
function sectionBar(s, label) {
  s.addShape(pres.ShapeType.rect, { x:0, y:0, w:13.333, h:0.6*S, fill:{color:C.navy} });
  s.addText(label, { x:0.3*S, y:0.08*S, w:9*S, h:0.44*S, fontSize:12, bold:true, color:C.gold, fontFace:"Calibri", charSpacing:2, margin:0 });
  s.addText("3.07.07", { x:8.5*S, y:0.08*S, w:1.3*S, h:0.44*S, fontSize:10, color:C.muted, fontFace:"Calibri", align:"right", margin:0 });
}

// Bullet list helper
function bulletList(s, items, x, y, w, h, opts={}) {
  x*=S; y*=S; w*=S; h*=S;
  const txItems = items.map((t,i) => ({ text:t, options:{ fontSize: opts.fontSize||13, color: opts.color||C.text, fontFace:"Calibri", bullet:true, breakLine: i<items.length-1, paraSpaceAfter: opts.spacing||6 } }));
  s.addText(txItems, { x, y, w, h, valign:"top", margin:0 });
}

// ===================== SLIDE 1: Title =====================
let sl = pres.addSlide();
darkFullBleed(sl, "Great Map Room wide view with all five alcoves open, warm lantern light, a wooden cart with tape player, headphones, books, and newspapers");
sl.addText("STORIES OF THE REGIONS", { x:0.8*S, y:1.2*S, w:8.4*S, h:0.7*S, fontSize:32, bold:true, color:C.gold, fontFace:"Cambria", margin:0 });
sl.addText("Perceiving Places Through Songs, Legends, Poems, and News", { x:0.8*S, y:1.9*S, w:8.4*S, h:0.5*S, fontSize:16, color:C.white, fontFace:"Calibri", margin:0 });
sl.addShape(pres.ShapeType.rect, { x:0.8*S, y:2.5*S, w:2*S, h:0.04*S, fill:{color:C.gold} });
sl.addText("Lesson 3.07.07  |  Great Map Room  |  Week 22, Q3", { x:0.8*S, y:2.7*S, w:8*S, h:0.35*S, fontSize:12, color:C.sky, fontFace:"Calibri", margin:0 });
sl.addText("SS.3.G.2.2-2.6  |  SS.3.G.4.1, 4.4", { x:0.8*S, y:3.1*S, w:8*S, h:0.3*S, fontSize:10, color:C.muted, fontFace:"Calibri", margin:0 });
sl.addNotes("IMAGE TO INSERT: Great Map Room wide view with all five alcoves open, warm lantern light, a wooden cart (Listening & Reading Station) with tape player, headphones, books, and newspapers. Title slide — welcome students to the lesson and briefly preview that today we explore how songs, legends, poems, and news help us understand places.");

// ===================== SLIDE 2: Museum Hook =====================
sl = pres.addSlide();
darkFullBleed(sl, "Close-up of the wooden Listening & Reading Station cart: vintage tape player with headphones, an open book of poems, a songbook, and yellowed newspapers, lit by warm lantern glow");
sl.addText("THE LISTENING & READING STATION", { x:0.8*S, y:0.6*S, w:8.4*S, h:0.5*S, fontSize:11, bold:true, color:C.gold, fontFace:"Calibri", charSpacing:2, margin:0 });
sl.addText("All five alcoves are open.", { x:0.8*S, y:1.2*S, w:8*S, h:0.35*S, fontSize:15, color:C.white, fontFace:"Calibri", margin:0 });
sl.addText("A wooden cart has been rolled in. On it: a tape player, headphones, a book of poems, a songbook, and yellowed newspapers.", { x:0.8*S, y:1.65*S, w:7.5*S, h:0.7*S, fontSize:15, color:C.white, fontFace:"Calibri", margin:0 });
sl.addShape(pres.ShapeType.roundRect, { x:0.8*S, y:2.7*S, w:8*S, h:0.8*S, rectRadius:0.1, fill:{color:"1A2D5A"}, line:{color:C.gold, width:1} });
sl.addText([
  { text:'"Visitors keep asking how people ', options:{fontSize:14, color:C.white, fontFace:"Cambria", italic:true} },
  { text:'FEEL', options:{fontSize:14, color:C.gold, fontFace:"Cambria", italic:true, bold:true} },
  { text:' about these places. Maps tell us where. Stories tell us why."', options:{fontSize:14, color:C.white, fontFace:"Cambria", italic:true} }
], { x:1*S, y:2.8*S, w:7.6*S, h:0.6*S, valign:"middle", margin:0 });
sl.addNotes("Read the quote aloud with a sense of wonder. Explain that we have been studying regions on maps, but today we add a new layer: how people FEEL about places. The Listening & Reading Station has artifacts that carry feelings — songs, legends, poems, and news. Ask: 'Have you ever heard a song about a place? What did it make you picture?'");

// ===================== SLIDE 3: Virtue Spotlight =====================
sl = pres.addSlide();
darkFullBleed(sl, "A warm campfire scene: people gathered around, one person telling a story, others listening attentively — evoking the idea that stories are gifts passed between people");
sl.addText("VIRTUE SPOTLIGHT", { x:0.8*S, y:0.5*S, w:4*S, h:0.35*S, fontSize:11, bold:true, color:C.sky, fontFace:"Calibri", charSpacing:2, margin:0 });
sl.addText("Courtesy", { x:0.8*S, y:0.95*S, w:8*S, h:0.6*S, fontSize:28, bold:true, color:C.gold, fontFace:"Cambria", margin:0 });
sl.addShape(pres.ShapeType.rect, { x:0.8*S, y:1.6*S, w:1.5*S, h:0.04*S, fill:{color:C.gold} });
sl.addText("Stories belong to real people.", { x:0.8*S, y:1.85*S, w:8*S, h:0.4*S, fontSize:16, bold:true, color:C.white, fontFace:"Calibri", margin:0 });
bulletList(sl, [
  "A folk song from the West was sung around real campfires.",
  "A Cherokee legend has been told for generations.",
  "Courtesy means we slow down, listen first, and treat each story as a gift."
], 0.6, 2.4, 8, 1.5, { fontSize:14, color:C.white });
sl.addNotes("Pause here and set the tone: today's stories are not just 'fun facts' — they come from real communities. A folk song sung around campfires, a Cherokee legend passed through generations. Courtesy means we slow down, listen carefully, and treat each story as a gift from the people who created it. Ask students: 'What does it look like to listen with courtesy?'");

// ===================== SLIDE 4: Four Kinds of Stories =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "FOUR KINDS OF STORIES");
sl.addText("Today we explore four kinds of stories that help us understand how people perceive their regions.", { x:0.5*S, y:0.75*S, w:9*S, h:0.4*S, fontSize:14, color:C.text, fontFace:"Calibri", margin:0 });

const storyTypes = [
  { icon:"SONG", title:"Song", desc:"Music that captures feelings about a place", color:C.teal },
  { icon:"LEGEND", title:"Legend / Tall Tale", desc:"A story passed down that exaggerates a region's character", color:C.gold },
  { icon:"POEM", title:"Poem", desc:"Words that paint a vivid picture of a place", color:C.purple },
  { icon:"NEWS", title:"News Report", desc:"A real event that shows what matters to a community", color:C.coral }
];
storyTypes.forEach((st, i) => {
  const bx = 0.3 + i*2.45;
  s = sl;
  s.addShape(pres.ShapeType.roundRect, { x:bx*S, y:1.4*S, w:2.2*S, h:2.6*S, rectRadius:0.12, fill:{color:C.white}, shadow:{type:"outer",blur:6,offset:2,angle:135,color:"000000",opacity:0.1} });
  s.addShape(pres.ShapeType.roundRect, { x:(bx+0.15)*S, y:1.55*S, w:1.9*S, h:0.55*S, rectRadius:0.08, fill:{color:st.color} });
  s.addText(st.icon, { x:(bx+0.15)*S, y:1.55*S, w:1.9*S, h:0.55*S, fontSize:14, bold:true, color:C.white, fontFace:"Calibri", align:"center", valign:"middle", margin:0 });
  s.addText(st.title, { x:(bx+0.15)*S, y:2.25*S, w:1.9*S, h:0.4*S, fontSize:14, bold:true, color:C.navy, fontFace:"Cambria", align:"center", valign:"middle", margin:0 });
  s.addText(st.desc, { x:(bx+0.2)*S, y:2.7*S, w:1.8*S, h:1.1*S, fontSize:11, color:C.muted, fontFace:"Calibri", align:"center", valign:"top", margin:0 });
});
sl.addNotes("Introduce the four categories. Explain that each kind of story does something a map cannot: it shows us how people FEEL about a place — what they love, fear, celebrate, or remember. We will look at one example of each. Point to each card and read the description. Ask: 'Which kind of story are you most excited to hear about?'");

// ===================== SLIDE 5: Story 1 — Home on the Range =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "STORY 1: SONG");
sl.addText('"Home on the Range"', { x:0.5*S, y:0.75*S, w:9*S, h:0.5*S, fontSize:22, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
sl.addText("The Great Plains  |  Kansas State Song (1947)", { x:0.5*S, y:1.25*S, w:9*S, h:0.3*S, fontSize:11, color:C.muted, fontFace:"Calibri", margin:0 });
imgPlaceholder(sl, "Wide open plains under big sky, possibly with a silhouette of cattle / cowboys", 5.8, 0.75, 3.8, 2.5);
bulletList(sl, [
  "Describes wide plains, buffalo roaming, and big open skies.",
  "Cowboys sang this song on cattle drives across the Great Plains.",
  "Became the official Kansas state song in 1947.",
  "The song captures what people LOVED about the plains — freedom, space, nature."
], 0.5, 1.7, 5, 2, { fontSize:13 });
chatFrame(sl, [
  "This song makes me picture...",
  "The plains sound like a place where...",
  "If I were a cowboy, I would feel..."
], 0.5, 3.8, 4.5, 1.4);
imgPlaceholder(sl, "Sheet music or vintage illustration of 'Home on the Range'", 5.8, 3.5, 3.8, 1.7);
sl.addNotes("Read a line or two of the song aloud (or play a short clip if available). Point out that this song does not just name Kansas — it makes you FEEL the wide-open space. Cowboys sang it while driving cattle across the plains. Ask students to use the Chat Frame prompts: 'This song makes me picture...' and 'The plains sound like a place where...' Give 60 seconds for partner chat.");

// ===================== SLIDE 6: Story 2 — Paul Bunyan =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "STORY 2: LEGEND / TALL TALE");
sl.addText("Paul Bunyan", { x:0.5*S, y:0.75*S, w:5*S, h:0.5*S, fontSize:22, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
sl.addText("Upper Midwest / Northwest Lumber Camps", { x:0.5*S, y:1.25*S, w:5*S, h:0.3*S, fontSize:11, color:C.muted, fontFace:"Calibri", margin:0 });
imgPlaceholder(sl, "Illustration of Paul Bunyan — giant lumberjack with an axe amid towering trees", 6.2, 0.75, 3.4, 2.8);
bulletList(sl, [
  "A giant lumberjack from tall tales told in lumber camps.",
  "His footprints were said to have made the Great Lakes!",
  "One story: Paul dragged a leaky water pail from Minnesota to Louisiana — and that made the Mississippi River.",
  "The tall tale tells us the forests were SO big, people imagined a GIANT to match."
], 0.5, 1.7, 5.4, 2.2, { fontSize:13 });
socratic(sl, [
  "Why would lumberjacks tell stories about a GIANT?",
  "What does the tall tale tell us about the forests of that region?",
  "How is a tall tale different from a news report?"
], 0.5, 3.9, 9, 1.3);
sl.addNotes("Tell the Paul Bunyan story with energy — emphasize the exaggeration. His footprints made the Great Lakes! He dragged a leaky pail and carved the Mississippi! Then pause and ask the Socratic Questions: 'Why would lumberjacks tell stories about a GIANT?' Guide students to see that the forests were so enormous, people invented a character to match. The tall tale reveals what was important to the region: massive trees, hard work, and the power of nature.");

// ===================== SLIDE 7: Story 3 — Chicago =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "STORY 3: POEM");
sl.addText('Carl Sandburg\'s "Chicago"', { x:0.5*S, y:0.75*S, w:9*S, h:0.5*S, fontSize:22, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
sl.addText("Published 1914  |  Midwest Industrial City", { x:0.5*S, y:1.25*S, w:9*S, h:0.3*S, fontSize:11, color:C.muted, fontFace:"Calibri", margin:0 });
imgPlaceholder(sl, "Early 1900s Chicago skyline or industrial scene — stockyards, rail yards, workers", 6.2, 0.75, 3.4, 2.5);
// Quote box
sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:1.7*S, w:5.2*S, h:1.3*S, rectRadius:0.1, fill:{color:C.purpLt}, line:{color:C.purple, width:1} });
sl.addText("FROM THE POEM", { x:0.65*S, y:1.78*S, w:4.8*S, h:0.22*S, fontSize:9, bold:true, color:C.purple, fontFace:"Calibri", charSpacing:1.5, margin:0 });
sl.addText('"Hog Butcher for the World, Tool Maker,\nStacker of Wheat...\nCity of the Big Shoulders."', { x:0.65*S, y:2.05*S, w:4.8*S, h:0.85*S, fontSize:14, color:C.navy, fontFace:"Cambria", italic:true, valign:"top", margin:0 });

bulletList(sl, [
  "Sandburg saw Chicago as a tough, proud, hardworking city.",
  '"Hog Butcher" — the meatpacking industry. "Stacker of Wheat" — grain trade.',
  '"City of the Big Shoulders" — strong people doing big, physical work.',
  "The poem paints a picture no map could show: the PRIDE of a working city."
], 0.5, 3.15, 5.2, 1.5, { fontSize:12 });
chatFrame(sl, [
  "Sandburg calls Chicago 'City of the Big Shoulders' because...",
  "This poem makes Chicago sound like..."
], 6.2, 3.5, 3.4, 1.2);
sl.addNotes("Read the Sandburg lines aloud with force — these are powerful, muscular words. Then unpack: 'Hog Butcher' = meatpacking, 'Stacker of Wheat' = grain trade, 'City of the Big Shoulders' = strong, proud workers. Ask: 'Could a map show you that Chicago felt PROUD? That is what a poem can do.' Use the Chat Frame for a brief partner discussion.");

// ===================== SLIDE 8: Story 4 — Hurricane Betsy =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "STORY 4: NEWS REPORT");
sl.addText('"Hurricane Betsy Pounds Louisiana Coast"', { x:0.5*S, y:0.75*S, w:9*S, h:0.5*S, fontSize:20, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
sl.addText("1965  |  Southeast / Gulf Coast", { x:0.5*S, y:1.25*S, w:9*S, h:0.3*S, fontSize:11, color:C.muted, fontFace:"Calibri", margin:0 });
imgPlaceholder(sl, "1965 Hurricane Betsy flooding in Louisiana — neighborhoods flooded, rescue boats", 6, 0.75, 3.6, 2.5);
bulletList(sl, [
  "Hurricane Betsy struck Louisiana in 1965 with devastating floods.",
  "Neighbors helped neighbors. Fishermen launched boats to rescue families.",
  "The news report showed something important: community strength.",
  "This story tells us the Gulf Coast faces hurricanes — and its people respond with courage and care."
], 0.5, 1.7, 5.2, 2, { fontSize:13 });
chatFrame(sl, [
  "The news report shows that Gulf Coast communities are...",
  "This is different from a song because...",
  "One thing this tells me about the region that a map cannot..."
], 0.5, 3.8, 5, 1.4);
sl.addNotes("Set a respectful tone: this is a real event that affected real families. Read the headline aloud. Emphasize the community response — fishermen launching boats, neighbors helping neighbors. Ask: 'What does this news report tell us about the Gulf Coast that a map cannot?' Students should see that it reveals the CHARACTER of the people: courage, community, and resilience. Use Chat Frame for quick partner share.");

// ===================== SLIDE 9: Map Quest Match =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "MAP QUEST MATCH");
sl.addText("Match Each Story to Its Region", { x:0.5*S, y:0.75*S, w:9*S, h:0.45*S, fontSize:20, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
imgPlaceholder(sl, "Simple US regions map with Midwest/West Plains, Upper Midwest/NW, Northeast/Midwest cities, and Southeast/Gulf Coast labeled", 5.5, 0.7, 4.2, 3.2);

const matches = [
  { story:'"Home on the Range"', region:"Midwest / West Plains", clr:C.teal },
  { story:"Paul Bunyan", region:"Upper Midwest / NW Forests", clr:C.gold },
  { story:'"Chicago" poem', region:"Northeast / Midwest Cities", clr:C.purple },
  { story:"Hurricane Betsy", region:"Southeast / Gulf Coast", clr:C.coral }
];
matches.forEach((m, i) => {
  const by = 1.4 + i*0.7;
  sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:by*S, w:2.2*S, h:0.55*S, rectRadius:0.08, fill:{color:m.clr} });
  sl.addText(m.story, { x:0.5*S, y:by*S, w:2.2*S, h:0.55*S, fontSize:11, bold:true, color:C.white, fontFace:"Calibri", align:"center", valign:"middle", margin:0 });
  sl.addShape(pres.ShapeType.rect, { x:2.85*S, y:(by+0.2)*S, w:0.5*S, h:0.05*S, fill:{color:m.clr} });
  sl.addShape(pres.ShapeType.roundRect, { x:3.5*S, y:by*S, w:1.8*S, h:0.55*S, rectRadius:0.08, fill:{color:C.white}, line:{color:m.clr, width:1.5} });
  sl.addText(m.region, { x:3.5*S, y:by*S, w:1.8*S, h:0.55*S, fontSize:10, bold:true, color:C.navy, fontFace:"Calibri", align:"center", valign:"middle", margin:0 });
});
sl.addNotes("This is the Map Quest Match activity. Reveal each pair one at a time (click or verbal). For each story, ask: 'Which region does this story come from? How do you know?' Let students point to the map image. Reinforce that each story teaches us something about its region that a map alone cannot show — feelings, pride, strength, humor.");

// ===================== SLIDE 10: Discovery Fact =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "DISCOVERY FACT");
sl.addText("The Origin of\n\"Home on the Range\"", { x:0.5*S, y:0.8*S, w:5*S, h:0.9*S, fontSize:20, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
imgPlaceholder(sl, "Portrait or illustration of Dr. Brewster Higley, or a 1870s Kansas homestead scene", 6, 0.75, 3.6, 2.5);
sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:1.9*S, w:5.2*S, h:0.5*S, rectRadius:0.08, fill:{color:C.goldLt} });
sl.addText("Written in the 1870s by Kansas doctor Brewster Higley", { x:0.65*S, y:1.95*S, w:5*S, h:0.4*S, fontSize:13, bold:true, color:C.gold, fontFace:"Calibri", valign:"middle", margin:0 });
bulletList(sl, [
  "Dr. Higley wrote the words as a poem about his Kansas homestead.",
  "A friend put it to music, and it traveled west by word of mouth.",
  "Cowboys changed the words as they sang it on cattle drives.",
  "By the time it became Kansas's state song in 1947, many versions existed!",
  "The song grew the way stories grow — carried by real people across the land."
], 0.5, 2.6, 5.2, 2.2, { fontSize:13 });
sl.addNotes("Share this as a 'wow' moment: a Kansas doctor wrote a poem, a friend turned it into a song, and cowboys carried it across the plains — changing the words as they went. By 1947 there were many versions! This is how stories travel: person to person, place to place. Ask: 'Why do you think cowboys changed the words?' (They made it fit THEIR experiences and feelings.)");

// ===================== SLIDE 11: Bonus Source — Hopi Spider Grandmother =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "BONUS SOURCE: SOUTHWEST");
sl.addText("The Hopi Spider Grandmother", { x:0.5*S, y:0.75*S, w:5.5*S, h:0.5*S, fontSize:20, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
sl.addText("Hopi People  |  Arizona  |  1,000+ Years", { x:0.5*S, y:1.25*S, w:5.5*S, h:0.3*S, fontSize:11, color:C.muted, fontFace:"Calibri", margin:0 });
imgPlaceholder(sl, "Southwest desert landscape — mesas, Arizona sky — evoking Hopi homeland", 6, 0.75, 3.6, 2.2);
bulletList(sl, [
  "Spider Grandmother is a wise teacher in Hopi stories.",
  "She helped the first people find the light and learn to live well.",
  "The Hopi have lived in Arizona for over 1,000 years.",
  "This story connects the people to the LAND — the desert, the mesas, the sky.",
  "It teaches wisdom, patience, and respect for the earth."
], 0.5, 1.7, 5.2, 1.9, { fontSize:13 });
socratic(sl, [
  "What does the Spider Grandmother story tell us about the Southwest that a map cannot?",
  "Why would a story about finding light matter in a desert region?"
], 0.5, 3.7, 9, 1.1);
sl.addNotes("Introduce this with care (Courtesy!). The Hopi Spider Grandmother is a sacred figure — a wise teacher who helped the first people. The story connects the Hopi to their land: the desert, the mesas, the Arizona sky. Ask the Socratic Questions and guide students to see that this story reveals VALUES — wisdom, patience, respect for the earth — that no map could show. Remind: we treat this story as a gift.");

// ===================== SLIDE 12: Listening Station Reflection =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "LISTENING STATION REFLECTION");
sl.addText("Pick ONE Story", { x:0.5*S, y:0.8*S, w:9*S, h:0.5*S, fontSize:20, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
sl.addText("What did that story teach you about its region that a map could NOT show?", { x:0.5*S, y:1.3*S, w:8*S, h:0.5*S, fontSize:15, color:C.text, fontFace:"Calibri", italic:true, margin:0 });

const stCards = [
  { label:"Song", sub:'"Home on the Range"', clr:C.teal },
  { label:"Legend", sub:"Paul Bunyan", clr:C.gold },
  { label:"Poem", sub:'"Chicago"', clr:C.purple },
  { label:"News", sub:"Hurricane Betsy", clr:C.coral }
];
stCards.forEach((sc, i) => {
  const bx = 0.3 + i*2.45;
  sl.addShape(pres.ShapeType.roundRect, { x:bx*S, y:2*S, w:2.2*S, h:0.9*S, rectRadius:0.08, fill:{color:sc.clr}, shadow:{type:"outer",blur:4,offset:2,angle:135,color:"000000",opacity:0.1} });
  sl.addText(sc.label, { x:bx*S, y:2.05*S, w:2.2*S, h:0.4*S, fontSize:13, bold:true, color:C.white, fontFace:"Calibri", align:"center", margin:0 });
  sl.addText(sc.sub, { x:bx*S, y:2.4*S, w:2.2*S, h:0.4*S, fontSize:11, color:C.white, fontFace:"Calibri", align:"center", margin:0 });
});
sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:3.2*S, w:9*S, h:1.5*S, rectRadius:0.12, fill:{color:C.warm}, line:{color:C.gold, width:1} });
sl.addText("THINK-PAIR-SHARE", { x:0.65*S, y:3.3*S, w:8.5*S, h:0.25*S, fontSize:9, bold:true, color:C.gold, fontFace:"Calibri", charSpacing:1.5, margin:0 });
sl.addText("1. Pick your story.\n2. Think: What does it teach about the region that a map cannot?\n3. Share with a partner using the sentence frame:\n    \"The [song/legend/poem/news report] taught me that [region] is a place where...\"", { x:0.65*S, y:3.6*S, w:8.5*S, h:1*S, fontSize:13, color:C.text, fontFace:"Calibri", valign:"top", margin:0 });
sl.addNotes("Give students 2 minutes for Think-Pair-Share. Circulate and listen. This directly prepares them for Evidence Question 1 on the assignment. Cold-call 2-3 students to share. Validate answers that connect the story to a feeling or trait of the region that maps cannot show.");

// ===================== SLIDE 13: Then & Now =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "THEN AND NOW");
sl.addText("How Stories Travel", { x:0.5*S, y:0.8*S, w:9*S, h:0.5*S, fontSize:20, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });

// Then column
sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:1.5*S, w:4.3*S, h:2.8*S, rectRadius:0.12, fill:{color:C.white}, shadow:{type:"outer",blur:6,offset:2,angle:135,color:"000000",opacity:0.1} });
sl.addText("THEN", { x:0.65*S, y:1.6*S, w:4*S, h:0.3*S, fontSize:11, bold:true, color:C.gold, fontFace:"Calibri", charSpacing:1.5, margin:0 });
imgPlaceholder(sl, "People gathered around a campfire, someone singing or storytelling", 0.7, 1.5, 3.9, 1.2);
bulletList(sl, [
  "Stories shared around campfires",
  "Songs carried by travelers on foot",
  "Legends told generation to generation",
  "News spread slowly by word of mouth"
], 0.7, 3.1, 3.9, 1.1, { fontSize:12 });

// Now column
sl.addShape(pres.ShapeType.roundRect, { x:5.2*S, y:1.5*S, w:4.3*S, h:2.8*S, rectRadius:0.12, fill:{color:C.white}, shadow:{type:"outer",blur:6,offset:2,angle:135,color:"000000",opacity:0.1} });
sl.addText("NOW", { x:5.35*S, y:1.6*S, w:4*S, h:0.3*S, fontSize:11, bold:true, color:C.teal, fontFace:"Calibri", charSpacing:1.5, margin:0 });
imgPlaceholder(sl, "Modern ways stories travel: phone with music app, bookshelf, online news on a laptop", 5.4, 1.5, 3.9, 1.2);
bulletList(sl, [
  "Songs streamed on phones and radios",
  "Stories shared in books and online",
  "Poems published and read worldwide",
  "News reported instantly across the globe"
], 5.4, 3.1, 3.9, 1.1, { fontSize:12 });

sl.addText("The stories change shape, but they still carry feelings about places.", { x:0.5*S, y:4.55*S, w:9*S, h:0.4*S, fontSize:14, bold:true, italic:true, color:C.navy, fontFace:"Cambria", align:"center", margin:0 });
sl.addNotes("Compare how stories traveled THEN vs. NOW. Key insight: the FORMAT changes (campfire to phone), but the PURPOSE stays the same — stories carry feelings about places. Ask: 'Do you think a cowboy song sounds different on a phone than around a campfire? Does it still make you feel the same things?' This connects to the Discovery Fact about 'Home on the Range' traveling by word of mouth.");

// ===================== SLIDE 14: Big Picture / Exhibit Label =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "BIG PICTURE");
sl.addText("Maps Show Where.\nStories Show How People Feel.", { x:0.5*S, y:0.9*S, w:9*S, h:1*S, fontSize:26, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
sl.addShape(pres.ShapeType.rect, { x:0.5*S, y:2*S, w:3*S, h:0.04*S, fill:{color:C.gold} });

sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:2.3*S, w:9*S, h:1.6*S, rectRadius:0.12, fill:{color:C.skyLt}, line:{color:C.sky, width:1} });
sl.addText("EXHIBIT LABEL", { x:0.65*S, y:2.4*S, w:8.5*S, h:0.25*S, fontSize:9, bold:true, color:C.teal, fontFace:"Calibri", charSpacing:1.5, margin:0 });
sl.addText("Today we listened to four stories from four regions:", { x:0.65*S, y:2.7*S, w:8.5*S, h:0.3*S, fontSize:13, color:C.text, fontFace:"Calibri", margin:0 });
const summItems = [
  "A SONG that made us feel the wide-open plains",
  "A LEGEND that showed us forests so big they needed a giant",
  "A POEM that captured a city's pride and strength",
  "A NEWS REPORT that revealed a community's courage"
];
bulletList(sl, summItems, 0.65, 3.05, 8.2, 1.2, { fontSize:12 });

sl.addText("Each story taught us something about its region that no map could show.", { x:0.5*S, y:4.15*S, w:9*S, h:0.4*S, fontSize:14, bold:true, italic:true, color:C.navy, fontFace:"Cambria", align:"center", margin:0 });
sl.addNotes("This is the Big Picture wrap-up. Read the main statement aloud: 'Maps show where. Stories show how people feel.' Then walk through the exhibit label — one bullet per story. Emphasize that each story added a FEELING layer that a map cannot provide. This is the core concept students need for the assignment.");

// ===================== SLIDE 15: Self-Check Q1 =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "SELF-CHECK");
sl.addText("Question 1", { x:0.5*S, y:0.75*S, w:2*S, h:0.35*S, fontSize:14, bold:true, color:C.teal, fontFace:"Calibri", margin:0 });
sl.addText("What can a song or poem tell us about a place that a map cannot?", { x:0.5*S, y:1.15*S, w:9*S, h:0.5*S, fontSize:16, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });

const q1opts = [
  { letter:"A", text:"The exact location of every city in the region", correct:false },
  { letter:"B", text:"The population and area of the region", correct:false },
  { letter:"C", text:"How people feel about the place — what they love, miss, or remember", correct:true }
];
q1opts.forEach((o, i) => {
  const by = 1.9 + i*0.7;
  const bgC = o.correct ? C.greenLt : C.white;
  const brC = o.correct ? C.green : "D0D5E0";
  sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:by*S, w:9*S, h:0.55*S, rectRadius:0.08, fill:{color:bgC}, line:{color:brC, width:1.5} });
  sl.addText(o.letter, { x:0.6*S, y:by*S, w:0.45*S, h:0.55*S, fontSize:14, bold:true, color: o.correct?C.green:C.navy, fontFace:"Calibri", align:"center", valign:"middle", margin:0 });
  sl.addText(o.text, { x:1.1*S, y:by*S, w:8.2*S, h:0.55*S, fontSize:13, color:C.text, fontFace:"Calibri", valign:"middle", margin:0 });
});
sl.addNotes("Read the question aloud and let students think before revealing the answer. The correct answer is C: How people feel about the place — what they love, miss, or remember. Reinforce with examples from today: the song showed love for the plains, the poem showed pride in Chicago, the news showed community courage. A map shows location; a story shows feeling.");

// ===================== SLIDE 16: Self-Check Q2 =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "SELF-CHECK");
sl.addText("Question 2", { x:0.5*S, y:0.75*S, w:2*S, h:0.35*S, fontSize:14, bold:true, color:C.teal, fontFace:"Calibri", margin:0 });
sl.addText("The Paul Bunyan tall tale comes from a region with:", { x:0.5*S, y:1.15*S, w:9*S, h:0.5*S, fontSize:16, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });

const q2opts = [
  { letter:"A", text:"Beaches and palm trees", correct:false },
  { letter:"B", text:"Huge forests and lumber camps", correct:true },
  { letter:"C", text:"Dry deserts and mesas", correct:false }
];
q2opts.forEach((o, i) => {
  const by = 1.9 + i*0.7;
  const bgC = o.correct ? C.greenLt : C.white;
  const brC = o.correct ? C.green : "D0D5E0";
  sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:by*S, w:9*S, h:0.55*S, rectRadius:0.08, fill:{color:bgC}, line:{color:brC, width:1.5} });
  sl.addText(o.letter, { x:0.6*S, y:by*S, w:0.45*S, h:0.55*S, fontSize:14, bold:true, color: o.correct?C.green:C.navy, fontFace:"Calibri", align:"center", valign:"middle", margin:0 });
  sl.addText(o.text, { x:1.1*S, y:by*S, w:8.2*S, h:0.55*S, fontSize:13, color:C.text, fontFace:"Calibri", valign:"middle", margin:0 });
});
sl.addNotes("Read the question. Correct answer is B: Huge forests and lumber camps. Paul Bunyan was a GIANT lumberjack — the story only makes sense in a region with enormous forests. The tall tale exaggerates what was real: the Upper Midwest/Northwest had massive forests and a booming lumber industry. Ask: 'Would a Paul Bunyan story make sense in a desert? Why not?'");

// ===================== SLIDE 17: Self-Check Q3 =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "SELF-CHECK");
sl.addText("Question 3", { x:0.5*S, y:0.75*S, w:2*S, h:0.35*S, fontSize:14, bold:true, color:C.teal, fontFace:"Calibri", margin:0 });
sl.addText("Why is courtesy important when we listen to stories from different regions?", { x:0.5*S, y:1.15*S, w:9*S, h:0.5*S, fontSize:16, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });

const q3opts = [
  { letter:"A", text:"Stories belong to real people who created and shared them", correct:true },
  { letter:"B", text:"Stories are always exactly true and never change", correct:false },
  { letter:"C", text:"We need to be quiet so the teacher can talk", correct:false }
];
q3opts.forEach((o, i) => {
  const by = 1.9 + i*0.7;
  const bgC = o.correct ? C.greenLt : C.white;
  const brC = o.correct ? C.green : "D0D5E0";
  sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:by*S, w:9*S, h:0.55*S, rectRadius:0.08, fill:{color:bgC}, line:{color:brC, width:1.5} });
  sl.addText(o.letter, { x:0.6*S, y:by*S, w:0.45*S, h:0.55*S, fontSize:14, bold:true, color: o.correct?C.green:C.navy, fontFace:"Calibri", align:"center", valign:"middle", margin:0 });
  sl.addText(o.text, { x:1.1*S, y:by*S, w:8.2*S, h:0.55*S, fontSize:13, color:C.text, fontFace:"Calibri", valign:"middle", margin:0 });
});
sl.addNotes("Read the question. Correct answer is A: Stories belong to real people who created and shared them. Connect back to the Virtue Spotlight: the folk song was sung by real cowboys, the Cherokee legend was told for generations, the Hopi Spider Grandmother story is sacred. Courtesy means we honor those people by listening carefully and treating their stories as gifts.");

// ===================== SLIDE 18: Assignment =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "ASSIGNMENT");
sl.addText("Evidence Questions", { x:0.5*S, y:0.75*S, w:9*S, h:0.45*S, fontSize:18, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });

const eqs = [
  "Pick one of the four stories (song, legend, poem, or news). Name the story, name the region it comes from, and explain one thing it tells you about that place.",
  "What can a song, legend, poem, or news story tell us about a place that a map cannot? Use a detail from today's lesson.",
  "Why is courtesy important when we listen to stories from different regions? Use a detail from the lesson."
];
eqs.forEach((eq, i) => {
  const by = 1.3 + i*0.75;
  sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:by*S, w:9*S, h:0.65*S, rectRadius:0.08, fill:{color:C.white}, line:{color:C.sky, width:1} });
  sl.addShape(pres.ShapeType.rect, { x:0.5*S, y:by*S, w:0.45*S, h:0.65*S, fill:{color:C.teal}, rectRadius:0 });
  sl.addText(`${i+1}`, { x:0.5*S, y:by*S, w:0.45*S, h:0.65*S, fontSize:14, bold:true, color:C.white, fontFace:"Calibri", align:"center", valign:"middle", margin:0 });
  sl.addText(eq, { x:1.1*S, y:by*S, w:8.2*S, h:0.65*S, fontSize:12, color:C.text, fontFace:"Calibri", valign:"middle", margin:[0,4,0,4] });
});

// Curator Task
sl.addText("Curator Task", { x:0.5*S, y:3.65*S, w:9*S, h:0.4*S, fontSize:16, bold:true, color:C.gold, fontFace:"Cambria", margin:0 });
sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:4.05*S, w:9*S, h:1.1*S, rectRadius:0.1, fill:{color:C.goldLt}, line:{color:C.gold, width:1} });
sl.addText("Pick one of the four stories and write 3-4 sentences for the Listening Station sign. Tell visitors which region the story comes from, what it is about, and what it teaches about the place that a map alone could not. Use kind, careful words.", { x:0.65*S, y:4.15*S, w:8.5*S, h:0.9*S, fontSize:12, color:C.text, fontFace:"Calibri", valign:"top", margin:0 });
sl.addNotes("Read each Evidence Question aloud. For Q1, remind students they practiced this during the Listening Station Reflection — they already have a story and a detail. For Q2, point back to the Big Picture: 'Maps show where. Stories show how people feel.' For Q3, connect to the Virtue Spotlight. Then read the Curator Task. Emphasize 'kind, careful words' — that IS courtesy in action.");

// ===================== SLIDE 19: Curator's Chronicle =====================
sl = pres.addSlide();
lightBg(sl);
sectionBar(sl, "CURATOR'S CHRONICLE");
sl.addText("Reflect on Today's Exhibit", { x:0.5*S, y:0.8*S, w:9*S, h:0.45*S, fontSize:18, bold:true, color:C.navy, fontFace:"Cambria", margin:0 });
imgPlaceholder(sl, "Open notebook or journal page with pen — the Curator's Chronicle", 6, 0.75, 3.5, 2);
sl.addShape(pres.ShapeType.roundRect, { x:0.5*S, y:1.5*S, w:5.2*S, h:1.2*S, rectRadius:0.12, fill:{color:C.warm}, line:{color:C.gold, width:1} });
sl.addText("COMPLETE THE SENTENCE", { x:0.65*S, y:1.58*S, w:4.8*S, h:0.22*S, fontSize:9, bold:true, color:C.gold, fontFace:"Calibri", charSpacing:1.5, margin:0 });
sl.addText('"In this exhibit, I learned that ______ because ______."', { x:0.65*S, y:1.85*S, w:4.8*S, h:0.7*S, fontSize:15, color:C.navy, fontFace:"Cambria", italic:true, valign:"top", margin:0 });
sl.addText("Example: \"In this exhibit, I learned that stories help us understand how people feel about their region because the song 'Home on the Range' made me picture the wide, free plains of Kansas.\"", { x:0.5*S, y:3*S, w:9*S, h:0.8*S, fontSize:12, color:C.muted, fontFace:"Calibri", italic:true, margin:0 });
sl.addNotes("Give students 1-2 minutes to complete the Curator's Chronicle in their notebooks or on the assignment page. This is a personal reflection — encourage honest, specific responses. Cold-call 2-3 students to share. Validate responses that connect a specific story to a feeling about a region.");

// ===================== SLIDE 20: Closing =====================
sl = pres.addSlide();
darkFullBleed(sl, "The Great Map Room with the Listening & Reading Station in place, warm glow, alcoves visible in the background — a completed exhibit feeling");
sl.addText("LISTENING STATION COMPLETE", { x:0.8*S, y:1*S, w:8.4*S, h:0.5*S, fontSize:11, bold:true, color:C.sky, fontFace:"Calibri", charSpacing:2, margin:0 });
sl.addText("Maps Show Where.\nStories Show Why.", { x:0.8*S, y:1.6*S, w:8*S, h:1*S, fontSize:28, bold:true, color:C.gold, fontFace:"Cambria", margin:0 });
sl.addShape(pres.ShapeType.rect, { x:0.8*S, y:2.7*S, w:2*S, h:0.04*S, fill:{color:C.gold} });
sl.addText("Today we learned that songs, legends, poems, and news reports help us\nunderstand how people feel about the places where they live.", { x:0.8*S, y:2.95*S, w:8*S, h:0.7*S, fontSize:14, color:C.white, fontFace:"Calibri", margin:0 });
sl.addText("Coming Next: 3.07.08 — Contributions Wall", { x:0.8*S, y:3.9*S, w:8*S, h:0.35*S, fontSize:12, color:C.muted, fontFace:"Calibri", italic:true, margin:0 });
sl.addNotes("IMAGE TO INSERT: The Great Map Room with the Listening & Reading Station in place, warm glow, alcoves visible. Close the lesson by reading the final statement aloud. Remind students: 'Maps show us WHERE places are. Stories show us WHY those places matter to the people who live there.' Preview 3.07.08: next time we build the Contributions Wall. Dismiss with encouragement.");

// ===================== SAVE =====================
const outDir = "/sessions/kind-wonderful-brown/mnt/optima-3rd-social-studies/Planning Docs/Teacher Slides";
const outPath = outDir + "/ss-3-07.07-perceiving-places-slides.pptx";

const fs = require("fs");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

pres.writeFile({ fileName: outPath }).then(() => {
  const stats = fs.statSync(outPath);
  console.log("SUCCESS: " + outPath);
  console.log("Size: " + (stats.size / 1024).toFixed(1) + " KB");
}).catch(err => {
  console.error("WRITE ERROR:", err);
});
