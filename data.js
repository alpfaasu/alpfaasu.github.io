/* ============================================================
   ALPFA at ASU - SITE CONTENT
   ============================================================
   This is the ONLY file you need to edit to change the website.
   Everything on the site is built from what is below.

   Rules:
   - Keep the quote marks and the commas exactly where they are.
   - Anything after // on a line is a note to you, not website text.
   - After editing, just refresh the page in your browser.
   ============================================================ */

const CHAPTER = {
  name: "ALPFA at ASU",
  longName: "Association of Latino Professionals For America",
  school: "Arizona State University",
  founded: 2015,
  tagline: "Where excellence is built.",

  email: "alpfa.asu@gmail.com",
  instagram: "https://www.instagram.com/alpfaasu/",
  linkedin: "https://www.linkedin.com/company/alpfa-at-asu",
  sunDevilSync: "https://sundevilcentral.eoss.asu.edu/alpfa/home",
  joinLink: "https://sundevilcentral.eoss.asu.edu/alpfa/club_signup",
};

/* ------------------------------------------------------------
   HERO SLIDESHOW
   Full-width photos that fade from one to the next behind the
   headline. Arrows and dots let people step through by hand.

   Add or remove slides freely, the controls adapt.
   caption : small line shown bottom-left over the photo. Optional.
------------------------------------------------------------ */
const HERO_SLIDES = [
  { photo: "photos/gallery/chapter-group.jpg", caption: "The chapter, spring general meeting" },
  { photo: "photos/gallery/hero.jpg",          caption: "ALPFA National Convention, Charlotte" },
  { photo: "photos/gallery/alpfamilia.jpg",    caption: "Noche de Cultura" },
  { photo: "photos/gallery/skills.jpg",        caption: "A packed professional development night" },
  { photo: "photos/gallery/recruiting.jpg",    caption: "Members with ALPFA national leadership" },
];

/* ------------------------------------------------------------
   ABOUT US
   The charter, written as the About paragraphs. Everything the
   chapter believes goes in here as prose, not as extra sections.
   photos: drop files in photos/gallery/ and list them here.
------------------------------------------------------------ */
const ABOUT = {
  heading: "A community defined by the pursuit of excellence.",
  paragraphs: [
    "ALPFA at ASU is a community defined by the pursuit of excellence, where excellence arrives, and where excellence is built. We exist to raise the ceiling of what is possible for the people in our ALPFAmilia, and through them, for every Latino in the future.",
    "We are open to everyone. There is no threshold to belong, no major, no year, no track record. But we are built for the person in pursuit of excellence, at any stage of it. The freshman who does not know where to start and the senior chasing a top offer are the same to us. Both want to grow, and that is all we ask. Our job is to meet people where they are and move them up.",
    "A person who comes through ALPFA should leave more capable, more connected, and further in their field than they would have reached alone. Not because we handed it to them, but because the community held a standard for them and pulled them toward it. If a member goes through us and is unchanged, we have failed, regardless of how good our events looked.",
  ],
  pullLabel: "In plain words",
  pull: "ALPFA is where you surround yourself with people pursuing excellence, and thus where you reach it.",
  photos: [
    // "photos/gallery/about-1.jpg",
    // "photos/gallery/about-2.jpg",
    // "photos/gallery/about-3.jpg",
  ],
};

/* ------------------------------------------------------------
   WHO WE AREN'T  ***NOT SHOWN ON THE SITE***
   The beliefs the rest of the copy is written against. Kept here so
   anyone editing later knows the standard. Check new copy against these.
------------------------------------------------------------ */
const NOT_US_INTERNAL = {
  points: [
    "We aren't a business or professional club. Career outcomes are something we produce, not the reason we exist.",
    "We aren't a place you join to put on a resume, and we aren't a place that asks nothing of you.",
    "We don't measure ourselves by how many people show up, but by who those people become.",
    "We will not make the standard easier to make the room bigger.",
  ],
};

/* ------------------------------------------------------------
   VALUES
   One section. The mission, the six values, and the six principles
   that come out of them, as the tiles.
------------------------------------------------------------ */
const MISSION = {
  statement:
    "To empower and develop Latino men and women as leaders of character for the nation, in every sector of the global economy.",
  words: ["Excellence", "Integrity", "Leadership", "Community", "Growth", "Vision"],
};

const VALUES = [
  {
    title: "Member-centric approach",
    body: "Everything we do is to serve our community, our members. They come first because they are the heart of who we are and the reason we exist.",
  },
  {
    title: "Devotion to excellence",
    body: "We set the highest standards for everything we do, which is what sets us apart. From the details of the events we hold, to the way we present ourselves, to the care we show for our people, excellence is in every step of the way.",
  },
  {
    title: "Do what is right",
    body: "The mission goes above everything. It comes before our ego and our emotions. This guides us to choose respect, responsibility, and the good of the club, even when hard or inconvenient.",
  },
  {
    title: "Lead through service",
    body: "We lead by example, by serving others, lifting each other, and creating opportunities. We become better by helping each other and growing with one another.",
  },
  {
    title: "Fail forward",
    body: "We don't fear failure. We embrace it, learn from it, and grow.",
  },
  {
    title: "Think bigger",
    body: "We challenge assumptions, foster innovation, and aim for the most transformative outcomes for our community.",
  },
];

/* ------------------------------------------------------------
   THE NUMBERS  (these count up when you scroll to them)
   Source: Sun Devil Central chapter page. Update each semester.
------------------------------------------------------------ */
const STATS = [
  { value: 380, label: "Active members" },
  { value: 74, label: "Events hosted" },
  { value: 15, label: "Officers on the board" },
  { value: 2015, label: "Chartered at ASU", raw: true }, // raw = don't animate, it's a year
];

/* ------------------------------------------------------------
   HOW THE STANDARD SHOWS UP
   3 pillars. Each has a background photo washed in its own brand
   colour. "art" picks the wash: "navy", "red", or "gold".
   Swap any photo by dropping a new file in photos/gallery/ and
   changing the path here.
------------------------------------------------------------ */
const PILLARS = [
  {
    title: "The standard",
    art: "navy",
    photo: "photos/gallery/recruiting.jpg",
    body:
      "Excellence is not a feeling, it is a bar somebody holds for you. Members get their work read, their answers challenged, and their thinking pushed by people who have already cleared the bar they are aiming at.",
    points: [
      { label: "Resume and LinkedIn reviews", slug: "resume-reviews" },
      { label: "Mock technicals and behaviorals", slug: "mock-interviews" },
      { label: "National Convention", slug: "national-convention" },
    ],
  },
  {
    title: "The ALPFAmilia",
    art: "red",
    photo: "photos/gallery/alpfamilia.jpg",
    body:
      "You rise to the level of the people around you. This is the room: upperclassmen who have already done what you are trying to do, alumni who pick up the phone, and people who notice when you go quiet.",
    points: [
      { label: "Peer mentorship pairing", slug: "mentorship" },
      { label: "Alumni who answer", slug: "alumni-network" },
      { label: "Study nights and socials", slug: "socials" },
    ],
  },
  {
    title: "The work",
    art: "gold",
    photo: "photos/gallery/skills.jpg",
    body:
      "Growth is earned in reps. We run the sessions where you build the things nobody grades you on until it matters, and where failing in the room is the point.",
    points: [
      { label: "Excel and data analytics", slug: "excel-analytics" },
      { label: "Case competition prep", slug: "case-comp" },
      { label: "Negotiation and personal branding", slug: "negotiation" },
    ],
  },
];

/* ------------------------------------------------------------
   PROGRAMME PAGES
   Every bullet in PILLARS above links to one of these. They all
   render through program.html, so there is only one file to style.

   HOW TO ADD YOUR INSTAGRAM PHOTOS
   1. Open the post on Instagram, save the image.
   2. Drop it in photos/programs/ and run "Update Photos.command".
   3. Add it to the photos list below with the post's caption.
   Leave the list empty and the page shows tidy placeholders instead.

   colour: "red", "yellow", "deep", or "ink". Sets the hero block.
------------------------------------------------------------ */
const PROGRAMS = {
  "resume-reviews": {
    pillar: "Recruiting access",
    title: "Resume and LinkedIn reviews",
    colour: "red",
    lede: "Before you send it to a firm, it gets read by someone who has screened resumes for one.",
    body: [
      "Every semester we run open review sessions where members bring a draft and leave with edits. Reviewers are a mix of chapter alumni, recruiters from our partner firms, and upperclassmen who have already landed the internship you are applying for.",
      "We review for the things that actually get you screened out: bullet points that describe duties instead of results, a skills section nobody reads, and a LinkedIn headline that says Student at Arizona State University and nothing else.",
    ],
    takeaways: [
      "A resume that survives a six second screen",
      "Bullets rewritten around outcomes, not duties",
      "A LinkedIn headline and About section that reads like a professional",
      "A referral, if the reviewer likes what they see",
    ],
    photos: [],
  },
  "mock-interviews": {
    pillar: "Recruiting access",
    title: "Mock technicals and behaviorals",
    colour: "ink",
    lede: "The first time you answer Tell me about yourself should not be in the real interview.",
    body: [
      "We run paired mock interviews across the semester, behavioral early and technical closer to recruiting season. You sit across from someone who has done the real version, you get asked the real questions, and you get told plainly what did not land.",
      "Technicals are tailored by sector. Accounting members get walked through audit and tax scenarios, finance members get valuation and three statement questions, and consulting members get a full case.",
    ],
    takeaways: [
      "Live practice with feedback in the room",
      "Sector specific technical questions, not generic ones",
      "A story bank you can reuse across every firm",
      "Practice being interrupted, which is what actually happens",
    ],
    photos: [],
  },
  "national-convention": {
    pillar: "Recruiting access",
    title: "The ALPFA National Convention",
    colour: "deep",
    lede: "The largest gathering of Latino professionals in the country, and firms interview on the spot.",
    body: [
      "ALPFA National brings thousands of students and professionals together with a career fair where companies conduct real interviews and hand out real offers on site. Chapter members get priority access and we fundraise through the year to help cover the cost of going.",
      "Members who go treat it as a recruiting trip, not a conference. We prepare the resume book beforehand, assign target firms, and debrief afterwards so the next class knows what worked.",
    ],
    takeaways: [
      "On site interviews with Fortune 500 recruiters",
      "A national network beyond Arizona",
      "Chapter fundraising toward travel costs",
      "Preparation sessions before the trip",
    ],
    photos: [],
  },
  "mentorship": {
    pillar: "The ALPFAmilia",
    title: "Peer mentorship pairing",
    colour: "red",
    lede: "You get paired with someone one or two years ahead who has already done what you are trying to do.",
    body: [
      "Every member who wants one is matched with a mentor by major and by target industry. Not a formal program with paperwork, a real person you can text the night before an interview.",
      "Mentors share the things nobody publishes: which recruiters actually respond, which info sessions are worth the evening, and what the interview loop really looks like at their firm.",
    ],
    takeaways: [
      "Matched by major and target industry",
      "Direct line to someone who has the internship you want",
      "Application timelines from people who just lived them",
      "A group that notices when you go quiet",
    ],
    photos: [],
  },
  "alumni-network": {
    pillar: "The ALPFAmilia",
    title: "Alumni in Big 4, banking, and tech",
    colour: "deep",
    lede: "Chapter alumni sit inside the firms our members are applying to, and they answer.",
    body: [
      "Members who graduated out of this chapter are now at Big 4 firms, banks, and Fortune 500 companies across Phoenix and beyond. They come back for panels, they take coffee chats, and several of them are the reason a current member got an interview.",
      "We keep the alumni list current so a member can ask for a warm introduction instead of applying cold into a portal.",
    ],
    takeaways: [
      "Warm introductions instead of cold applications",
      "Alumni panels each semester",
      "Coffee chats with people in your target role",
      "A network that grows every graduating class",
    ],
    photos: [],
  },
  "socials": {
    pillar: "The ALPFAmilia",
    title: "Study nights and socials",
    colour: "yellow",
    lede: "The part that makes people keep showing up.",
    body: [
      "Recruiting season is exhausting and doing it alone is worse. We run study nights before midterms, cultural nights through the year, and enough low stakes hangouts that the professional events do not feel like the only reason to be here.",
      "This is where the chapter actually becomes a familia. The referrals and the mentorship come out of relationships built at these, not at the formal events.",
    ],
    takeaways: [
      "Study nights before midterms and finals",
      "Noche de Cultura and other cultural events",
      "Intramurals, game nights, and food",
      "The reason the professional side works",
    ],
    photos: [],
  },
  "excel-analytics": {
    pillar: "Skills that transfer",
    title: "Excel and data analytics",
    colour: "ink",
    lede: "The software you will be judged on from week one of an internship, and never graded on in class.",
    body: [
      "Hands on sessions covering the Excel that actually shows up at work: lookups, pivot tables, keyboard only navigation, and building a model someone else can follow. For members going into analytics roles we add SQL basics and dashboard building.",
      "Bring a laptop. These are worked sessions, not lectures.",
    ],
    takeaways: [
      "Lookups, pivots, and clean model structure",
      "Keyboard shortcuts that make you look experienced",
      "SQL basics for analytics roles",
      "A finished workbook you can show in an interview",
    ],
    photos: [],
  },
  "case-comp": {
    pillar: "Skills that transfer",
    title: "Case competition prep",
    colour: "red",
    lede: "Case competitions are the fastest way to get a consulting firm to notice you as a sophomore.",
    body: [
      "We run practice cases through the semester and field teams for ASU and national competitions, including the ALPFA case competition. Members learn to structure an ambiguous problem, build a defensible recommendation, and present it to a panel that will push back.",
      "Placing is good. Being able to talk about how you approached the problem is what actually converts in an interview.",
    ],
    takeaways: [
      "Structuring frameworks you can apply cold",
      "Slide building under real time pressure",
      "Presenting to judges who interrupt",
      "A team credential for your resume",
    ],
    photos: [],
  },
  "negotiation": {
    pillar: "Skills that transfer",
    title: "Negotiation and personal branding",
    colour: "yellow",
    lede: "Two conversations most students lose before they know they are having one.",
    body: [
      "The first is negotiation. Most students accept the first number because nobody told them it was a conversation. We walk through what is negotiable in an internship or entry level offer, how to ask without risking it, and what to do with competing offers.",
      "The second is personal branding. How you introduce yourself at a networking night, what your LinkedIn signals before anyone reads it, and how to follow up so a recruiter remembers you a month later.",
    ],
    takeaways: [
      "What is actually negotiable, and what is not",
      "Scripts for asking without burning the offer",
      "A thirty second introduction that lands",
      "Follow up that gets replies",
    ],
    photos: [],
  },
};

/* ------------------------------------------------------------
   THE BOARD
   Click "Read more" on a card and a panel opens with their story,
   their LinkedIn button, and up to four personal photos.

   photo     : headshot. photos/board/name.jpg
   photos    : up to 4 personal photos. photos/board/name-1.jpg etc.
   statement : the short line shown on the card. 1 to 2 sentences.
   story     : the long version, shown after "Read more". 3 to 5 sentences.
   linkedin  : full URL. Leave "" and the button is hidden.
------------------------------------------------------------ */
const BOARD = [
  {
    name: "",                      // <- add name
    role: "President",
    major: "",
    gradYear: "",
    photo: "",
    linkedin: "",
    statement: "",                 // <- short line on the card
    story: "",                     // <- the longer story
    photos: [],
  },
  {
    name: "Renārs Melnikovs",
    role: "VP of External Outreach",
    major: "Finance and Economics",
    gradYear: "2028",
    photo: "photos/board/renars-headshot.jpg",
    linkedin: "https://www.linkedin.com/in/renarsm",
    statement:
      "My job is the pipeline between this chapter and the firms that hire out of it.",
    story:
      "I run corporate outreach, which means I am the person emailing recruiters, booking the info sessions, and making sure the companies that hire in Phoenix know this chapter by name. If a firm is opening applications, I want an ALPFA at ASU resume already on the desk before the posting goes live. I came to ASU from Latvia, so I know what it feels like to start with zero network in a new country. That is the exact problem this role exists to solve for our members.",
    photos: [
      "photos/board/renars-1.jpg",
      "photos/board/renars-2.jpg",
      "photos/board/renars-3.jpg",
    ],
  },
  { name: "", role: "VP of Internal Affairs",         major: "", gradYear: "", photo: "", linkedin: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Finance",                  major: "", gradYear: "", photo: "", linkedin: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Marketing",                major: "", gradYear: "", photo: "", linkedin: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Membership",               major: "", gradYear: "", photo: "", linkedin: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Professional Development", major: "", gradYear: "", photo: "", linkedin: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Community Service",        major: "", gradYear: "", photo: "", linkedin: "", statement: "", story: "", photos: [] },
];

/* ------------------------------------------------------------
   SECTORS
   These group the internship board. "key" must match the "sector"
   field on each internship below.
------------------------------------------------------------ */
/* NOTE: "typical" on each sector is NOT currently rendered anywhere. It was
   written for the summary panel that was cut on 2026-09-14. Kept because it is
   useful copy. "blurb", "looksFor", "steps" and "quizResult" ARE all live. */
const SECTORS = [
  {
    key: "consulting",
    name: "Consulting & Advisory",
    blurb: "Client-facing problem solving. Firms recruit for case skills, structured thinking, and the ability to present to a room.",
    looksFor: ["Case interview prep", "Communication", "Any major welcome"],
    typical: "Any major. Business, engineering, economics and the liberal arts all land here.",
    quizResult: "Your answers point at consulting. You picked the open-ended problems, you were comfortable being the one who presents, and the travel did not put you off. This is the field on the board that cares least about your major and most about whether you can structure a mess in front of a client.",
    steps: [
      "Learn one case framework properly, then run ten live cases with another member. Reading about cases is not practising them.",
      "Name the offering you want at a firm. Saying you are interested in consulting reads as unprepared.",
      "Get a referral. At the strategy arms it moves you further than another tenth of GPA does.",
    ],
  },
  {
    key: "accounting",
    name: "Accounting & Assurance",
    blurb: "Audit and tax. The most structured recruiting timeline on this board, and the one that starts earliest.",
    looksFor: ["150-hour track", "Accountancy or Finance", "Recruits junior year"],
    typical: "Accountancy first, Finance second. Your 150-hour plan matters more here than the major label.",
    quizResult: "Your answers point at accounting and assurance. You want the rulebook, you want to know the standard you are being measured against, and you would rather be excellent at something defined than adequate at something vague. This is also the earliest and most predictable timeline on the board, which rewards exactly that temperament.",
    steps: [
      "Map your 150 credits now. Recruiters ask when you hit it and the answer sets your start date.",
      "Get on the campus recruiter list through the ASU career center before you apply anywhere cold.",
      "Apply in the fall a full year ahead. Audit and tax fill their summer classes early and do not reopen.",
    ],
  },
  {
    key: "finance",
    name: "Finance & Markets",
    blurb: "Corporate finance, treasury, FP&A, and wealth management. Phoenix has more of these seats than students realize.",
    looksFor: ["Excel and modeling", "Finance or Economics", "Rolling deadlines"],
    typical: "Finance and Economics first, though Accountancy and Business Data Analytics both convert well.",
    quizResult: "Your answers point at finance and markets. You like a number that resolves, you are willing to defend an estimate you cannot yet prove, and you would rather own the model than the slide. Phoenix carries more corporate finance, treasury and wealth seats than students realize, with far fewer applicants than the Big Four.",
    steps: [
      "Build one real model end to end and be able to walk someone through every assumption in it.",
      "Apply early and apply often. These teams hire when a seat opens, not on a campus calendar.",
      "Know the difference between corporate finance, FP&A, treasury and wealth before you sit down with anyone.",
    ],
  },
  {
    key: "tech",
    name: "Technology & Operations",
    blurb: "Data, systems, and supply chain roles inside large employers. Often the least competitive path to a Fortune 500 name.",
    looksFor: ["SQL or Python", "Analytics coursework", "Open to all years"],
    typical: "CIS, Business Data Analytics, Supply Chain and engineering, but these teams hire outside that list constantly.",
    quizResult: "Your answers point at technology and operations. You would rather work on the system than the slide, and you are willing to learn a tool properly instead of collecting certificates. These roles sit inside large employers, carry a name your family will recognize, and take far fewer applicants per seat than the consulting and accounting doors do.",
    steps: [
      "Get real with SQL, then add Python or Power BI. One working project beats three certificates.",
      "Do not self-reject on the major. Supply chain, CIS, analytics and engineering all sit in these teams.",
      "Apply year round. These postings do not follow the fall campus calendar the way audit does.",
    ],
  },
  {
    key: "engineering",
    name: "Engineering & Semiconductor",
    blurb: "Fabs, aerospace, power and heavy construction. The only field on this board where almost every seat is inside the Phoenix metro, because the work cannot be done from anywhere else.",
    looksFor: ["3.0 GPA floor", "Fulton or CS major", "Applies a year ahead"],
    typical: "Electrical, mechanical, industrial, chemical, civil and materials first, with computer science, construction management and supply chain close behind.",
    quizResult: "Your answers point at engineering and semiconductor. You want the thing you build to either work or not work, you would rather be measured against a spec than an opinion, and being on a floor where something is physically made appeals to you more than a conference room does. This is also the one field here where nearly every seat is already in the Phoenix metro.",
    steps: [
      "Apply in September and October for the summer after next. Every employer here runs a fall calendar and the Summer 2027 requisitions are already open.",
      "Settle the citizenship question before you spend an evening applying. Aerospace and defense gate most roles on US person status under export control, and that is law, not preference.",
      "Work the Fulton career fair rather than the job board. Amkor, Intel, Freeport and APS all send recruiters to campus, and a face beats a resume sitting in a queue of four thousand.",
    ],
  },
];

/* ------------------------------------------------------------
   YEARS
   Drives the Year chips on the internship board.
   levels = which role "level" values on the board apply to that year, so a
   junior sees the roles marked Junior AND the ones marked Any.
   Every level value used here must exist on a role below.

   NOT CURRENTLY RENDERED: focus, timing, move. These were written for a
   field-plus-year-plus-major summary panel that was cut on 2026-09-14 because
   the filter bar does the same job in less space. The copy is good and is kept
   here for whoever wants it back. Nothing breaks if you delete them.
------------------------------------------------------------ */
const YEARS = [
  {
    key: "freshman", name: "Freshman", levels: ["Freshman", "Any"],
    focus: "Nobody is hiring you for a client-facing summer yet, and that is not a problem. This year is for the pre-internship programs, which is where firms quietly build the pool they pull interns from two years later.",
    timing: "Watch for spring applications to the leadership and pre-internship programs. Everything else can wait.",
    move: "Get into one firm program this year. Attending is effectively being pre-screened.",
  },
  {
    key: "sophomore", name: "Sophomore", levels: ["Freshman", "Sophomore", "Any"],
    focus: "This is the on-ramp year. Deloitte Discovery, PwC Destination CPA and the KPMG pre-internship programs exist specifically for you, and a strong one usually converts straight into a junior-year internship.",
    timing: "Apply in the winter and spring for the following summer. Sophomore programs open earlier than people expect.",
    move: "Convert. The whole point of a sophomore program is the junior offer that follows it.",
  },
  {
    key: "junior", name: "Junior", levels: ["Junior", "Any"],
    focus: "This is the recruiting year. Nearly every full internship on this board is written for a junior, and most of them are decided in the fall for the summer after.",
    timing: "Apply August through October for next summer. By spring the good locations are already closed.",
    move: "Apply early and apply to Phoenix. Firms close cities as offers are accepted, so early beats perfect.",
  },
  {
    key: "senior", name: "Senior", levels: ["Junior", "Senior", "Any"],
    focus: "If you already have an internship, this year is about converting it to full time. If you do not, the open doors are winter busy-season internships, the technology and operations roles that hire year round, and a masters that buys you one more recruiting cycle.",
    timing: "Move now. Full-time decisions at most of these firms are made in the fall, not the spring.",
    move: "Ask directly about full-time conversion, and look hard at the winter internships in tax.",
  },
  {
    key: "grad", name: "Graduate student", levels: ["Junior", "Senior", "Any"],
    focus: "Graduate students are eligible for most of what is written here as a junior role, plus the MAcc and MTax pipelines the accounting firms run separately. Your timeline is compressed, so pick a field and commit to it.",
    timing: "One cycle, usually the fall you start. Do not spend it exploring.",
    move: "Lead with your graduation date and your CPA eligibility date in the first conversation.",
  },
];

/* ------------------------------------------------------------
   MAJORS
   Drives the "your major" half of the matcher.
   fit = 1 to 3 per sector key. 3 means this is the usual route,
   1 means it is a real but uncommon one. Nothing here is a wall:
   the copy has to stay honest without telling anyone no.
------------------------------------------------------------ */
const MAJORS = [
  { key: "accountancy", name: "Accountancy", group: "W. P. Carey",
    fit: { accounting: 3, consulting: 2, finance: 2, tech: 1, engineering: 1 },
    note: "The most direct path on this board. Your 150-hour plan and your CPA eligibility date will come up in an interview before your GPA does." },
  { key: "finance", name: "Finance", group: "W. P. Carey",
    fit: { finance: 3, accounting: 2, consulting: 2, tech: 1, engineering: 1 },
    note: "Opens the widest set of doors here, which also means the most competition. One model you can actually defend separates you from the rest of the pile." },
  { key: "bda", name: "Business Data Analytics", group: "W. P. Carey",
    fit: { tech: 3, consulting: 2, finance: 2, accounting: 1, engineering: 2 },
    note: "Underused. Firms are short of people who can query the data and then explain it to a room, and you are being trained to do both." },
  { key: "scm", name: "Supply Chain Management", group: "W. P. Carey",
    fit: { tech: 3, consulting: 2, finance: 1, accounting: 1, engineering: 2 },
    note: "Phoenix is a supply chain town. Freeport, Honeywell, Intel and Republic all hire this into operations teams that far fewer students apply to." },
  { key: "cis", name: "Computer Information Systems", group: "W. P. Carey",
    fit: { tech: 3, consulting: 3, finance: 1, accounting: 1, engineering: 2 },
    note: "The door into technology consulting that does not require CPA eligibility. EY and PwC both recruit this major directly." },
  { key: "management", name: "Management", group: "W. P. Carey",
    fit: { consulting: 2, finance: 2, tech: 1, accounting: 1, engineering: 1 },
    note: "Broad by design, so the specificity has to come from you. Pick a field, take the coursework that proves you meant it, and say so out loud." },
  { key: "marketing", name: "Marketing", group: "W. P. Carey",
    fit: { consulting: 2, finance: 1, tech: 1, accounting: 1, engineering: 1 },
    note: "Not the usual route to these roles, but customer and go-to-market work inside the consulting firms is real. Lead with analytics you can actually do." },
  { key: "economics", name: "Economics", group: "W. P. Carey",
    fit: { finance: 3, consulting: 2, tech: 1, accounting: 1, engineering: 1 },
    note: "Reads well for finance and for the strategy arms. Add Excel and SQL, because the degree on its own does not prove either one." },
  { key: "entrepreneurship", name: "Business Entrepreneurship", group: "W. P. Carey",
    fit: { consulting: 2, finance: 2, tech: 1, accounting: 1, engineering: 1 },
    note: "You are already practised at talking to strangers about an idea. That is most of what makes a good client-facing intern." },
  { key: "business", name: "Business Administration or other Carey", group: "W. P. Carey",
    fit: { consulting: 2, accounting: 2, finance: 2, tech: 2, engineering: 1 },
    note: "Flexible, which cuts both ways. Every field here will take you and none of them will assume anything, so you have to arrive specific." },

  { key: "cs", name: "Computer Science", group: "Fulton and the sciences",
    fit: { tech: 3, consulting: 2, finance: 1, accounting: 1, engineering: 3 },
    note: "Intel, Amex and Schwab all hire this into technology teams here in the Valley, and the business firms want you for technology consulting." },
  { key: "datascience", name: "Data Science or Statistics", group: "Fulton and the sciences",
    fit: { tech: 3, finance: 2, consulting: 2, accounting: 1, engineering: 2 },
    note: "The most transferable technical major on this board. Tax and audit are now tooling-heavy, so even the accounting firms are competing for it." },
  { key: "ie", name: "Industrial or Systems Engineering", group: "Fulton and the sciences",
    fit: { tech: 3, consulting: 2, finance: 1, accounting: 1, engineering: 3 },
    note: "Operations and supply chain teams are built out of this major, and PwC runs Engineer Your Career specifically for Fulton students." },
  { key: "engineering", name: "Another engineering major", group: "Fulton and the sciences",
    fit: { tech: 3, consulting: 2, finance: 1, accounting: 1, engineering: 3 },
    note: "Do not assume a business board is closed to you. The operations roles here take engineers, and consulting recruits them on purpose." },

  { key: "polisci", name: "Political Science or Public Policy", group: "Other majors",
    fit: { consulting: 2, finance: 2, tech: 1, accounting: 1, engineering: 1 },
    note: "Structured argument is the actual job in consulting. The gap to close is quantitative, and two courses close most of it." },
  { key: "comm", name: "Communication or Journalism", group: "Other majors",
    fit: { consulting: 2, finance: 1, tech: 1, accounting: 1, engineering: 1 },
    note: "You can already do the part most business students are worst at. Pair it with one hard skill and it stops being a liability and starts being an edge." },
  { key: "psych", name: "Psychology or Sociology", group: "Other majors",
    fit: { consulting: 2, finance: 1, tech: 1, accounting: 1, engineering: 1 },
    note: "The human capital and change management practices inside the consulting firms hire this. Name the practice you want and the question goes away." },
  { key: "other", name: "Another major", group: "Other majors",
    fit: { consulting: 2, accounting: 2, finance: 2, tech: 2, engineering: 2 },
    note: "The chapter is open to everyone and so is this board. Pick the field that sounds like you. The rest of it is coursework and reps." },
  { key: "undecided", name: "Still deciding", group: "Other majors",
    fit: { consulting: 2, accounting: 2, finance: 2, tech: 2, engineering: 2 },
    note: "Fine. Take the quiz above, then come back and pick the field it gave you. You can change your mind later at a cost of roughly nothing." },
];

/* ------------------------------------------------------------
   QUIZ
   For people who do not know what they want yet. Every option
   carries weights across the four SECTORS keys, they are summed,
   and the highest total is the field we put in front of them.
   Add or remove questions freely, the scoring adapts.
   Keep the options honest. Nothing here should read as a horoscope.
------------------------------------------------------------ */
const QUIZ = [
  {
    q: "A group project lands on all four of you. What do you actually end up doing?",
    options: [
      { label: "Framing the problem", detail: "Deciding what the deliverable even should be before anyone starts.", w: { consulting: 3 } },
      { label: "Building the spreadsheet", detail: "The one everyone else ends up pulling their numbers out of.", w: { finance: 3, accounting: 1 } },
      { label: "Checking the work", detail: "Because somebody has to, and you would rather it was you.", w: { accounting: 3 } },
      { label: "Wrangling the data", detail: "Getting it out of four places and into one usable shape.", w: { tech: 3 } },
      { label: "Building the thing itself", detail: "Somebody has to make the prototype actually work.", w: { engineering: 3, tech: 1 } },
    ],
  },
  {
    q: "Pick the week you would rather have.",
    options: [
      { label: "Four meetings, three cities, one deck that keeps changing", detail: "High contact, high pace, nothing settled until it ships.", w: { consulting: 3 } },
      { label: "One set of books, one standard, a clean answer by Friday", detail: "Defined scope, defined finish line.", w: { accounting: 3 } },
      { label: "A forecast everyone upstairs is waiting on", detail: "Your number goes into a decision that gets made this month.", w: { finance: 3 } },
      { label: "A pipeline that keeps breaking until you fix it properly", detail: "Nobody is watching until the day it works.", w: { tech: 3 } },
      { label: "A machine that is down and a line that is not moving", detail: "Everybody is watching, and the clock is money.", w: { engineering: 3 } },
    ],
  },
  {
    q: "How do you feel about a rulebook?",
    options: [
      { label: "Give me one", detail: "I would rather be excellent at something defined than adequate at something vague.", w: { accounting: 3, engineering: 1 } },
      { label: "Useful, but I want room to argue with it", detail: "Tell me the rule and then let me tell you where it does not fit.", w: { consulting: 2, finance: 2 } },
      { label: "I write my own as I go", detail: "The process should come out of the work, not the other way round.", w: { tech: 2, consulting: 2, engineering: 1 } },
      { label: "I want the rule and the number it produces", detail: "Both, and I want to know which one moved.", w: { finance: 2, accounting: 2 } },
      { label: "I want the spec and the tolerance", detail: "Tell me what it has to do and how far off it is allowed to be.", w: { engineering: 3 } },
    ],
  },
  {
    q: "Which sentence is most true about you and numbers?",
    options: [
      { label: "I like a number that resolves", detail: "There is a right answer and I want to find it.", w: { accounting: 3, engineering: 1 } },
      { label: "I like defending an estimate I cannot prove yet", detail: "The assumption is the interesting part.", w: { finance: 3, consulting: 1 } },
      { label: "I care less about the number than the system that made it", detail: "Where did this come from and can it be trusted.", w: { tech: 3 } },
      { label: "I use numbers to win an argument", detail: "Evidence in service of a recommendation.", w: { consulting: 3, finance: 1 } },
      { label: "A number is a measurement of something physical", detail: "It came off an instrument, and it can be checked.", w: { engineering: 3 } },
    ],
  },
  {
    q: "It is a Tuesday afternoon in July. Where do you want to be?",
    options: [
      { label: "At a client site, in a room, presenting", detail: "In front of people who can say yes or no.", w: { consulting: 3 } },
      { label: "At a desk with the workpapers and a deadline", detail: "Head down, ticking through it.", w: { accounting: 3 } },
      { label: "Somewhere watching money actually move", detail: "A treasury desk, a trading floor, a close.", w: { finance: 3 } },
      { label: "Two monitors and nobody talking to me", detail: "Long uninterrupted blocks are how you do your best work.", w: { tech: 3 } },
      { label: "On a floor where something is physically being made", detail: "Steel toes, ear protection, and a process you can watch run.", w: { engineering: 3 } },
    ],
  },
  {
    q: "Which would you rather be genuinely good at by graduation?",
    options: [
      { label: "A case framework and a clean deck", detail: "Structure a problem cold and present it without notes.", w: { consulting: 3 } },
      { label: "Audit workpapers and tax software", detail: "The tooling the firms actually run on.", w: { accounting: 3 } },
      { label: "A three-statement model in Excel", detail: "Built from scratch, every assumption yours.", w: { finance: 3 } },
      { label: "SQL, then Python", detail: "Query it yourself instead of asking someone for an extract.", w: { tech: 3 } },
      { label: "CAD, or a lab instrument you can actually run", detail: "A tool that touches the physical thing.", w: { engineering: 3, tech: 1 } },
    ],
  },
  {
    q: "How much does a credential like the CPA or the CFA matter to you?",
    options: [
      { label: "A lot, I want the licence", detail: "A credential nobody can argue with is worth the years.", w: { accounting: 3 } },
      { label: "The CFA maybe, the CPA no", detail: "Markets credential yes, accounting licence no.", w: { finance: 3 } },
      { label: "Not much, I would rather have the experience", detail: "What you have done beats what you have passed.", w: { consulting: 2, tech: 2 } },
      { label: "I would rather have things I built", detail: "A portfolio is my credential.", w: { tech: 3 } },
      { label: "The FE now and the PE later", detail: "The engineering licence, which is its own track entirely.", w: { engineering: 3 } },
    ],
  },
  {
    q: "What kind of feedback do you want from a manager?",
    options: [
      { label: "Tell me how the room read me", detail: "Delivery is half the job.", w: { consulting: 3 } },
      { label: "Tell me if it ties out", detail: "Right or not right, I will take it from there.", w: { accounting: 3 } },
      { label: "Tell me if my assumption was wrong", detail: "The judgment is what I want tested.", w: { finance: 3 } },
      { label: "Tell me if it is going to break at scale", detail: "Works today is not the same as works.", w: { tech: 3, engineering: 1 } },
      { label: "Tell me if it holds under load", detail: "Test it to failure and tell me where it went.", w: { engineering: 3 } },
    ],
  },
  {
    q: "Which of these would bother you most?",
    options: [
      { label: "Doing work nobody outside the team ever sees", detail: "You want the visible end of it.", w: { consulting: 3 } },
      { label: "Making a judgment call with no standard to point at", detail: "You want something to stand on.", w: { accounting: 3 } },
      { label: "Never finding out whether the decision paid off", detail: "You want the scoreboard.", w: { finance: 3 } },
      { label: "Explaining the same manual process for the fourth time", detail: "You would have automated it the second time.", w: { tech: 3 } },
      { label: "Never touching the thing you are making decisions about", detail: "Deciding from a spreadsheet about a plant you have never walked.", w: { engineering: 3 } },
    ],
  },
  {
    q: "Pick the elective you would take for free.",
    options: [
      { label: "Negotiation", detail: "", w: { consulting: 3 } },
      { label: "Advanced federal taxation", detail: "", w: { accounting: 3 } },
      { label: "Derivatives and risk", detail: "", w: { finance: 3 } },
      { label: "Database systems", detail: "", w: { tech: 3 } },
      { label: "Thermodynamics", detail: "", w: { engineering: 3 } },
    ],
  },
  {
    q: "How do you want your year shaped?",
    options: [
      { label: "Whatever the client needs this month", detail: "Unpredictable, but never boring.", w: { consulting: 3 } },
      { label: "Steady, with a busy season I can see coming", detail: "Hard for a stretch, then it lifts.", w: { accounting: 3, engineering: 1 } },
      { label: "Tied to the close and the reporting calendar", detail: "A rhythm that repeats every month and quarter.", w: { finance: 3, accounting: 1 } },
      { label: "Project by project, on my own cadence", detail: "Ship it, pick up the next one.", w: { tech: 3 } },
      { label: "Around a build schedule and a launch date", detail: "A date that physically cannot move.", w: { engineering: 3 } },
    ],
  },
  {
    q: "Five years out, what is the good version of it?",
    options: [
      { label: "The person who can walk into any problem cold", detail: "Range is the asset.", w: { consulting: 3 } },
      { label: "Licensed, credible, hard to replace", detail: "Depth and a credential behind it.", w: { accounting: 3 } },
      { label: "Trusted with real money and real decisions", detail: "Ownership of the number.", w: { finance: 3 } },
      { label: "Building the thing everyone else depends on", detail: "Leverage, not hours.", w: { tech: 3 } },
      { label: "Your name on something that exists in the world", detail: "A fab, an aircraft, a grid that stays up.", w: { engineering: 3 } },
    ],
  },
];

/* ------------------------------------------------------------
   INTERNSHIP BOARD  (powers internships.html)

   One entry per EMPLOYER. Each employer holds however many roles
   you know about, and a careersUrl that always works even when an
   individual posting has closed.

   careersUrl : the firm's own student / early-careers hub. This is the
                "All internships at X" button at the bottom of the card.
   roles[]    : role, level, season, deadline, link, note
                level  = "Freshman" | "Sophomore" | "Junior" | "Senior" | "Any"
                link   = direct URL to that programme. Leave "" and the row
                         still shows, just without a link.
                note   = one line the posting itself would not tell you.
   sector     : must match a "key" in SECTORS above.
------------------------------------------------------------ */
const EMPLOYERS = [
  {
    company: "Deloitte", sector: "accounting", location: "Phoenix, AZ",
    careersUrl: "https://www.deloitte.com/us/en/careers/student-careers.html",
    roles: [
      { role: "Discovery Internship", level: "Sophomore", season: "Summer 2027", deadline: "Apply early",
        link: "https://www.deloitte.com/us/en/careers/internships.html",
        note: "The freshman and sophomore on-ramp. A strong Discovery summer usually converts straight into a junior-year client-service internship." },
      { role: "Audit & Assurance Intern", level: "Junior", season: "Summer 2027", deadline: "Opens August",
        link: "https://www.deloitte.com/us/en/careers/join-deloitte/audit-and-assurance-campus-opportunities.html",
        note: "Audit hiring is tied to CPA eligibility. Recruiters ask when you hit 150 credits, and the answer sets your start date." },
      { role: "Business Analyst, Consulting", level: "Junior", season: "Summer 2027", deadline: "Rolling",
        link: "https://www.deloitte.com/us/en/careers/join-deloitte/consultative-offerings-campus-opportunities.html",
        note: "Name the offering you want. A generic answer of just consulting reads as unprepared." },
      { role: "Tax Consultant Intern", level: "Junior", season: "Winter or Summer", deadline: "Rolling",
        link: "https://www.deloitte.com/us/en/careers/join-deloitte/tax-consultant.html",
        note: "Tax runs a winter busy-season internship too. Check internship credit with your advisor before accepting that one." },
    ],
  },
  {
    company: "EY", sector: "accounting", location: "Phoenix, AZ",
    careersUrl: "https://www.ey.com/en_us/careers/students-and-entry-level-professionals",
    roles: [
      { role: "Assurance (Audit) Internship", level: "Junior", season: "Summer 2027", deadline: "Fall interviews",
        link: "https://www.ey.com/en_us/careers/assurance",
        note: "EY hires about a year ahead. Get on the campus recruiter list through the ASU career center rather than applying cold." },
      { role: "Tax Internship", level: "Junior", season: "Summer 2027", deadline: "Fall interviews",
        link: "https://www.ey.com/en_us/careers/tax",
        note: "EY Tax is heavily tech-driven. Alteryx, Power BI or basic Python separates you further than another tenth of GPA." },
      { role: "Technology Consulting Internship", level: "Junior", season: "Summer 2027", deadline: "Fall interviews",
        link: "https://www.ey.com/en_us/careers/technology",
        note: "This is the EY door that does not require CPA eligibility. Open to CIS and data science majors." },
      { role: "EY-Parthenon Internship", level: "Junior", season: "Summer 2027", deadline: "Very early",
        link: "https://www.ey.com/en_us/careers/parthenon",
        note: "A separate, far more selective strategy pipeline with case interviews. A referral matters more here than anywhere else at EY." },
    ],
  },
  {
    company: "Freeport-McMoRan", sector: "accounting", location: "Phoenix, AZ",
    careersUrl: "https://talent.fmjobs.com/careers",
    roles: [
      { role: "All 2027 summer internships", level: "Any", season: "Summer 2027", deadline: "Posts Sept, fills by Jan",
        link: "https://talent.fmjobs.com/careers?query=2027%20Summer%20Internship",
        note: "Seventeen 2027 requisitions went up in the last three weeks. The old Internships page on jobs.fcx.com is a brochure and lists none of them, so bookmark this address instead." },
      { role: "2027 Summer Internship, Accounting, Hybrid", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44462122",
        note: "Hybrid means the downtown Phoenix headquarters. The near identical Site Locations posting puts you at a mine instead, so read past the job title before you apply." },
      { role: "2027 Summer Internship, Corporate and Business Development", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44463309",
        note: "The closest thing Freeport runs to a corporate finance seat, and one of only three business postings based at headquarters rather than at a mine." },
      { role: "2027 Summer Internship, Global Supply Chain, Virtual", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44447338",
        note: "Freeport runs this one virtual while its twin sends you to a mine site, so it is the rare summer here that costs you no relocation." },
      { role: "2027 Summer Internship, Accounting, Site Locations", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44461932",
        note: "Site Locations means Morenci, Safford, Bagdad or Miami, and Freeport houses you there. Take it for mine site accounting, skip it if you need to stay in Tempe." },
      { role: "2027 Summer Internship, Electrical Engineering", sector: "engineering", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44478529",
        note: "Site Locations means a mine, and Freeport houses you there. Electrical is the largest of its engineering intern intakes." },
      { role: "2027 Summer Internship, Mechanical Engineering", sector: "engineering", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44478627",
        note: "Maintenance and fixed plant work at Morenci, Safford, Bagdad or Miami. Expect heat, shift work and a truck." },
      { role: "2027 Summer Internship, Civil Engineering", sector: "engineering", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44463563",
        note: "Tailings, haul roads and water management. Closer to heavy civil than to building design, and a genuine route in for a civil student who has never considered mining." },
      { role: "2027 Summer Internship, Mine Engineering", sector: "engineering", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44460325",
        note: "The one on this list that really does want a mining engineering student. ASU does not run that major, so this suits a civil, geological or industrial student willing to learn it." },
      { role: "2027 Summer Internship, Geomechanical Engineering", sector: "engineering", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44461369",
        note: "Slope stability and ground control, so geology and civil backgrounds both fit. One of the smallest intakes here, which cuts both ways." },
      { role: "2027 Summer Internship, Reliability Engineering", sector: "engineering", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44478639",
        note: "Data heavy, and the closest engineering seat here to an analytics role. Industrial and systems students are a natural fit." },
      { role: "2027 Summer Internship, Geology", sector: "engineering", level: "Any", season: "Summer 2027", deadline: "Rolling, most seats gone by January",
        link: "https://talent.fmjobs.com/careers/job/44459075",
        note: "Not an engineering degree, but it sits in the same intake and the same site rotation. The only earth sciences seat on this board." },
      { role: "Business Career Track", level: "Any", season: "Summer 2027", deadline: "September",
        link: "https://jobs.fcx.com/content/Career-Opportunities/?locale=en_US",
        note: "Accounting, finance, supply chain and IT sit at the downtown Phoenix headquarters, not at the mine sites. This page describes the tracks, but you apply on talent.fmjobs.com above." },
      { role: "Campus recruiting events", level: "Any", season: "Fall 2026", deadline: "See calendar",
        link: "https://jobs.fcx.com/content/Events/?locale=en_US",
        note: "They visit ASU Tempe three times this fall, including the W. P. Carey SCMA fair on Sep 17. Meet a recruiter before you apply." },
    ],
  },
  {
    company: "PwC", sector: "consulting", location: "Phoenix, AZ",
    careersUrl: "https://jobs-us.pwc.com/us/en/entry-level",
    roles: [
      { role: "Advance Internship", level: "Junior", season: "Summer 2027", deadline: "Rolling, apply early",
        link: "https://jobs-us.pwc.com/us/en/advance",
        note: "PwC closes locations as offers are accepted, so applying early to Phoenix beats applying perfectly late." },
      { role: "Destination CPA", level: "Sophomore", season: "Short program", deadline: "Before Advance opens",
        link: "https://jobs-us.pwc.com/us/en/destination-cpa",
        note: "A short national experience, not a full internship. Participants often get fast-tracked to internship interviews." },
      { role: "Engineer Your Career", level: "Sophomore", season: "Summer 2027", deadline: "Winter",
        link: "https://jobs-us.pwc.com/us/en/engineer-your-career",
        note: "Use this instead of the standard Advance path if you are in Fulton Schools." },
    ],
  },
  {
    company: "KPMG", sector: "consulting", location: "Phoenix, AZ",
    careersUrl: "https://www.kpmguscareers.com/early-career/",
    roles: [
      { role: "Audit Internship", level: "Junior", season: "Summer 2027", deadline: "Rolling",
        link: "https://www.kpmguscareers.com/practice-areas/audit-and-assurance/",
        note: "KPMG limits you to two active applications at a time, so pick your practice and city deliberately." },
      { role: "Tax Internship", level: "Junior", season: "Summer 2027", deadline: "Rolling",
        link: "https://www.kpmguscareers.com/practice-areas/tax/",
        note: "There is a CPA Incentive Program and a tax scholarship. Ask your recruiter what you qualify for before you sign." },
      { role: "Pre-Internship Programs", level: "Freshman", season: "Year-round", deadline: "Watch the site",
        link: "https://www.kpmguscareers.com/early-career/program/#pre-internship",
        note: "Rise, Ace the Case and Branding U are the pool KPMG later pulls interns from. Attending one is effectively pre-screening." },
      { role: "Embark Scholars Program", level: "Sophomore", season: "Summer 2027", deadline: "Winter",
        link: "https://view.ceros.com/kpmg-design/embark-scholars-program",
        note: "For first-generation and community college students. It is a paid internship, not just a conference." },
    ],
  },
  {
    company: "Charles Schwab", sector: "finance", location: "Phoenix, AZ",
    careersUrl: "https://www.schwabjobs.com/early-careers-overview",
    roles: [
      { role: "Schwab Internship Academy", level: "Junior", season: "Summer 2027", deadline: "Within 1 year of grad",
        link: "https://www.schwabjobs.com/internship-academy",
        note: "Nine weeks, paid, and restricted to students within a year of graduating. Nothing is posted in Phoenix for 2027 yet, only Austin, Omaha and Westlake, so watch this one rather than counting on it." },
      { role: "Aspiring Talent Academy", level: "Junior", season: "School year", deadline: "Rolling",
        link: "https://www.schwabjobs.com/aspiring-talent-academy",
        note: "The most realistic Schwab entry point here. Part-time, paid, 20 hours a week, on site in Phoenix, so no relocating." },
      { role: "Financial Consultant Academy", level: "Any", season: "Post-graduation", deadline: "4 cohorts a year",
        link: "https://www.schwabjobs.com/financial-consultant-academy",
        note: "Schwab pays for your Series 7 and 66. Phoenix is a core location for it." },
    ],
  },
  {
    company: "American Express", sector: "finance", location: "Phoenix, AZ",
    careersUrl: "https://www.americanexpress.com/en-us/careers/student-programs/global-students-page.html",
    roles: [
      { role: "Campus Undergraduate Summer Internship", level: "Junior", season: "Summer 2027", deadline: "Posted a year ahead",
        link: "https://careers.americanexpress.com/en/sites/CX_1/jobs?keyword=Campus%20Undergraduate",
        note: "Each business line posts its own listing. Filter to Phoenix instead of only reading the New York ones." },
      { role: "Sophomore Finance Internship", level: "Sophomore", season: "Summer 2027", deadline: "Winter",
        link: "https://careers.americanexpress.com/en/sites/CX_1/jobs?keyword=Sophomore",
        note: "The standard feeder into the junior-year internship. Treat it as step one of two, not a consolation prize. The 2027 posting is New York based, so plan on a summer away from Phoenix." },
      { role: "Phoenix finance openings only", level: "Junior", season: "Summer 2027", deadline: "Rolling",
        link: "https://careers.americanexpress.com/en/sites/CX_1/jobs?keyword=Finance&location=Phoenix,%20AZ,%20United%20States",
        note: "This narrower view floats Corporate Planning and Analysis and Finance Controllership to the top. The Campus Undergraduate Phoenix view below buries both under nine technology requisitions." },
      { role: "Phoenix openings only", level: "Junior", season: "Summer 2027", deadline: "Rolling",
        link: "https://careers.americanexpress.com/en/sites/CX_1/jobs?keyword=Campus%20Undergraduate&location=Phoenix,%20AZ,%20United%20States",
        note: "The Phoenix site carries tech, data and servicing-strategy roles that never show up on the NYC-heavy lists. Bookmark this view." },
    ],
  },
  {
    company: "Vanguard", sector: "finance", location: "Scottsdale, AZ",
    careersUrl: "https://www.vanguardjobs.com/students/",
    roles: [
      { role: "College to Corporate Internship", level: "Junior", season: "Summer 2027", deadline: "Opens August",
        link: "https://www.vanguardjobs.com/job-search-results/?keyword=C2C",
        note: "Scottsdale is one of only four locations, so you can do this without leaving the metro. Search C2C, not the full phrase, or the two business roles that list Scottsdale never surface." },
      { role: "Intern, C2C Business Leadership", level: "Junior", season: "Summer 2027", deadline: "Rolling",
        link: "https://www.vanguardjobs.com/job/23781531/intern-c2c-business-leadership-charlotte-nc/",
        note: "The web address says Charlotte but the posting lists Scottsdale as one of three choices. This and C2C Sales are the only two Vanguard internships open today that keep you in the metro." },
      { role: "Intern, C2C Sales", level: "Junior", season: "Summer 2027", deadline: "Rolling",
        link: "https://www.vanguardjobs.com/job/23781532/intern-c2c-sales-charlotte-nc/",
        note: "Posted the same day as the Business Leadership req with the same three cities, so apply to both rather than picking one. Every other College to Corporate role open right now is IT only." },
      { role: "North Star Sophomore Program", level: "Sophomore", season: "Two days, virtual", deadline: "Watch the site",
        link: "https://www.vanguardjobs.com/students/",
        note: "Not a job. Vanguard uses it to spot sophomores it later fast-tracks into the C2C internship." },
      { role: "EXPLORE Days", level: "Freshman", season: "Virtual", deadline: "Watch the site",
        link: "https://www.vanguardjobs.com/students/",
        note: "One of the few finance touchpoints open to first-years. Join the talent network at the same time so you get the August alert." },
    ],
  },
  {
    company: "Northern Trust", sector: "finance", location: "Tempe, AZ",
    careersUrl: "https://www.northerntrust.com/united-states/about-us/careers/students-and-graduates",
    roles: [
      { role: "Enterprise Chief Operations Office Intern, Tempe", level: "Junior", season: "Summer 2027", deadline: "Closes October 9, 2026",
        link: "https://ntrs.wd1.myworkdayjobs.com/northerntrust/job/Tempe-AZ/Enterprise-Chief-Operations-Office-Intern---Tempe_R160765-1",
        note: "Ten weeks in Tempe at $30 an hour, and the only Tempe seat in a 21 role summer class. You need a 3.0 and a graduation date between December 2027 and summer 2028, and there is no visa sponsorship." },
      { role: "Technology Track Early Careers", level: "Junior", season: "Summer 2027", deadline: "Early September",
        link: "https://www.northerntrust.com/content/dam/northerntrust/pws/nt/images/careers/life-at-nt/tech-track-early-careers.pdf",
        note: "Tech and cyber internships run out of Tempe too. Apply to the tech track specifically, not the general finance posting." },
      { role: "Campus events calendar", level: "Any", season: "Year-round", deadline: "Check often",
        link: "https://www.northerntrust.com/united-states/about-us/careers/campus-events-north-america",
        note: "The Tempe office is small enough that a recruiter will remember your name. Email CampusRecruiting@ntrs.com directly." },
    ],
  },
  {
    company: "Honeywell", sector: "finance", location: "Phoenix, AZ",
    careersUrl: "https://www.honeywell.com/us/en/careers/your-career-journey/early-career",
    roles: [
      { role: "University Relations Intern Program", level: "Sophomore", season: "Summer 2027", deadline: "Rolling",
        link: "https://ibqbjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Honeywell/jobs?keyword=Summer%20Intern",
        note: "A 3.0 GPA floor, and finance and supply chain sit alongside engineering. This view is filtered to summer internships, the plain intern search returns internal audit jobs instead." },
      { role: "Honeywell Aerospace Early Careers", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://www.honeywellaerospace.com/us/en/company/careers/leaders-of-tomorrow",
        note: "Aerospace has spun off into a separate company with its own site. For the Phoenix aerospace jobs you must apply here, not on honeywell.com." },
      { role: "Future Finance Leaders Program Intern", level: "Junior", season: "Summer 2027", deadline: "Rolling",
        link: "https://ibqbjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Honeywell/jobs?keyword=Summer%202027%20Intern",
        note: "Honeywell files this and the Business Management intern as nationwide requisitions with no city on them, so where you land is settled at offer, not at application. Say Phoenix out loud in the first recruiter call." },
      { role: "ISC University Relations Development Program, Phoenix", level: "Junior", season: "Summer 2027", deadline: "Rolling",
        link: "https://icfcjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Aerospace/jobs?keyword=URDP",
        note: "The only Honeywell Aerospace program with Phoenix written into the job title, and the single Arizona intern seat in a 42 job summer search. It requires US person status, so it is closed to international students." },
      { role: "Aerospace internship search", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://icfcjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Aerospace/jobs?keyword=Summer%20Intern",
        note: "Around 450 interns a year on a 12-week program, and a large share of Phoenix postings are finance and internal audit, not engineering." },
    ],
  },
  {
    company: "Intel", sector: "tech", location: "Chandler, AZ",
    careersUrl: "https://intel.wd1.myworkdayjobs.com/External/page/f7af6f4ab7131001ecc380a588ca0000",
    roles: [
      { role: "Intel Internship Program", level: "Sophomore", season: "Summer 2027", deadline: "Rolling",
        link: "https://intel.wd1.myworkdayjobs.com/External?workerSubType=dc8bf79476611087dfde99931439ae75",
        note: "Pre-filtered to student roles. Add the Arizona filter for Chandler finance and supply chain reqs. Intel wants 60 or more completed credits." },
      { role: "Silicon Hardware Engineering Intern, Bachelor's", sector: "engineering", level: "Sophomore", season: "Summer 2027", deadline: "Rolling, apply in fall",
        link: "https://intel.wd1.myworkdayjobs.com/External/job/US-Oregon-Hillsboro/Silicon-Hardware-Engineering---Intern--Bachelor-s_JR0286829",
        note: "The address says Hillsboro but Phoenix is one of five listed sites on the requisition, so an Arizona filter hides it. Verified against Intel's own job feed." },
      { role: "Manufacturing and Process Development Intern, Bachelor's", sector: "engineering", level: "Sophomore", season: "Summer 2027", deadline: "Rolling, apply in fall",
        link: "https://intel.wd1.myworkdayjobs.com/External/job/US-Oregon-Hillsboro/Manufacturing-and-Process-Development---Intern--Bachelor-s_JR0286825",
        note: "This is the fab floor role, and Chandler is where Intel makes things in Arizona. Chemical and materials students are wanted here as much as electrical ones." },
      { role: "Platform Hardware and Systems Engineering Intern, Bachelor's", sector: "engineering", level: "Sophomore", season: "Summer 2027", deadline: "Rolling, apply in fall",
        link: "https://intel.wd1.myworkdayjobs.com/External/job/US-Oregon-Hillsboro/Platform-Hardware-and-Systems-Engineering---Intern--Bachelor-s_JR0286827",
        note: "Filed under the same Oregon address as the other two Bachelor's reqs and posted the same day. Intel screens them as one pool, so apply to all three in one sitting." },
      { role: "Sales and Marketing Intern, Bachelor's", level: "Sophomore", season: "Summer 2027", deadline: "Rolling",
        link: "https://intel.wd1.myworkdayjobs.com/External/job/US-California-Santa-Clara/Sales-and-Marketing---Intern--Bachelor-s_JR0286838",
        note: "Filed under Santa Clara, but Phoenix is one of four listed sites, so it will not appear if you filter to Arizona first. This is the undergraduate feeder into the rotation program below." },
      { role: "Technical Sales Intern, Bachelor's", level: "Sophomore", season: "Summer 2027", deadline: "Rolling",
        link: "https://intel.wd1.myworkdayjobs.com/External/job/US-California-Santa-Clara/Technical-Sales---Intern--Bachelor-s_JR0286835",
        note: "Same four cities and the same posting date as the Sales and Marketing req, and Intel treats them as one pool, so send both applications in the same sitting." },
      { role: "Sales and Marketing Rotation Program", level: "Junior", season: "Post-graduation", deadline: "Junior summer",
        link: "https://intel.wd1.myworkdayjobs.com/External/page/163f9d5e6e10100205dc3d5bdc7b0000",
        note: "Arizona is one of only three sites and cohorts are about ten people. The way in is a junior-summer internship that converts." },
    ],
  },
  {
    company: "Republic Services", sector: "tech", location: "Phoenix, AZ",
    careersUrl: "https://jobs.republicservices.com/us/en/university-vocational-programs/",
    roles: [
      { role: "College Internships", level: "Sophomore", season: "Summer 2027", deadline: "Rolling",
        link: "https://jobs.republicservices.com/us/en/search-results?keywords=intern",
        note: "Sophomore standing or above, two to three months, paid. No undergraduate summer 2027 seat is posted yet, only MBA requisitions and none in Arizona, so check back through the fall." },
      { role: "Corporate roles, Phoenix HQ", level: "Any", season: "Year-round", deadline: "Rolling",
        link: "https://jobs.republicservices.com/us/en/careers/corporate",
        note: "A Fortune 500 headquartered in north Phoenix, so finance, accounting and analytics are all local. Rare in-town corporate finance." },
    ],
  },

  /* ---- Engineering & Semiconductor ----
     Added 2026-09-15. Almost every seat here is already in the Phoenix
     metro, which is the opposite of the business sectors above. Aerospace
     and defense roles are gated on US person status under export control,
     and the notes say so rather than letting somebody find out at the end
     of an application. ---- */

  {
    company: "TSMC Arizona", sector: "engineering", location: "Phoenix, AZ",
    careersUrl: "https://ro.careers.tsmc.com/search/?q=intern&locationsearch=Phoenix",
    roles: [
      { role: "Summer 2027 Internship, Engineering Roles", level: "Any", season: "Summer 2027", deadline: "Open now",
        link: "https://ro.careers.tsmc.com/job/Phoenix-Summer-2027-TSMC-AZ-Internship-Opportunities-Engineering-Roles-AZ-85001/1361003166/",
        note: "Ten weeks, forty hours, three fixed start dates, all on site in north Phoenix. A lot of the work is on the production floor gowned in coveralls, hood, boots and gloves, so decide now whether a cleanroom suits you." },
      { role: "Summer 2027 Internship, Facility Roles", level: "Any", season: "Summer 2027", deadline: "Open now",
        link: "https://ro.careers.tsmc.com/job/Phoenix-Summer-2027-TSMC-AZ-Internship-Opportunities-Facility-Roles-AZ-85001/1362768366/",
        note: "This is how a civil or construction student gets inside a fab. The work is transformers, switchgear, diesel generators and UPS systems, not wafers." },
      { role: "All Phoenix intern postings", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://ro.careers.tsmc.com/search/?q=intern&locationsearch=Phoenix",
        note: "One application is screened against the other intern roles too, so you do not need to apply department by department. Both umbrella postings name the same minimum qualifications." },
    ],
  },
  {
    company: "onsemi", sector: "engineering", location: "Scottsdale, AZ",
    careersUrl: "https://www.onsemi.com/careers/students",
    roles: [
      { role: "Summer 2027 Engineering Internships", level: "Any", season: "Summer 2027", deadline: "Posted 10 September 2026",
        link: "https://hctz.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/jobs?keyword=Summer%20Intern",
        note: "One requisition covers every engineering discipline and every site, so Scottsdale is a box you tick rather than a separate posting. The entire intern board is two openings wide, which tells you how the funnel works." },
      { role: "Summer 2027 Non-Engineering Internships", level: "Any", season: "Summer 2027", deadline: "Posted 10 September 2026",
        link: "https://hctz.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/jobs?keyword=Summer%20Intern",
        note: "The other half of the board, and the reason to send this link to a non-engineer. Supply chain, finance and marketing seats sit at the Scottsdale headquarters alongside the engineers." },
      { role: "Student programs overview", level: "Any", season: "Year-round", deadline: "Watch the site",
        link: "https://www.onsemi.com/careers/students",
        note: "Use the keyword Summer Intern on their board. A plain search for intern on an Oracle site matches Internal Auditor and buries the student roles." },
    ],
  },
  {
    company: "Microchip Technology", sector: "engineering", location: "Chandler, AZ",
    careersUrl: "https://www.microchip.com/en-us/about/careers/intern-and-graduate-programs",
    roles: [
      { role: "Intern, Engineering (Device Software and Test)", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://wd5.myworkdaysite.com/recruiting/microchiphr/External",
        note: "One of the few Microchip intern requisitions that actually lists AZ Chandler rather than Roseville or Gresham. Filter the board by location first or you will apply to California by accident." },
      { role: "Intern, Engineering (Applications)", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://wd5.myworkdaysite.com/recruiting/microchiphr/External",
        note: "Applications engineering is customer-facing embedded work. Having actually built something on a PIC or SAM part puts you ahead of most applicants, and that is a cheap bar to clear before you apply." },
      { role: "Engineering Summer Intern, 12 weeks", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://wd5.myworkdaysite.com/recruiting/microchiphr/External",
        note: "Microchip runs two different things: year-round part-time interns and a fixed twelve-week summer cohort. Say which one you want, because the recruiter will ask and a vague answer costs you the call." },
    ],
  },
  {
    company: "Amkor Technology", sector: "engineering", location: "Tempe, AZ",
    careersUrl: "https://amkor.com/careers/united-states/",
    roles: [
      { role: "Open positions, United States", level: "Any", season: "Summer 2027", deadline: "Seasonal, set an alert",
        link: "https://career8.successfactors.com/career?company=amkor",
        note: "The entire US board is about fifty openings at a time and intern requisitions appear and vanish inside that. Set a job alert rather than checking once and concluding they are not hiring." },
      { role: "Arizona site overview", level: "Any", season: "Year-round", deadline: "Read before interviewing",
        link: "https://amkor.com/amkor-technology-arizona/",
        note: "Amkor is headquartered in Tempe and is building a CHIPS Act packaging plant in the West Valley. Packaging and test is not the same job as a wafer fab, and saying so in an interview separates you from the TSMC applicants." },
    ],
  },
  {
    company: "Honeywell Aerospace", sector: "engineering", location: "Phoenix, AZ",
    careersUrl: "https://www.honeywellaerospace.com/us/en/company/careers/leaders-of-tomorrow",
    roles: [
      { role: "ISC URDP Engineering, Summer 2027 Intern, Phoenix", level: "Junior", season: "Summer 2027", deadline: "Rolling, closes early",
        link: "https://icfcjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Aerospace/jobs?keyword=Summer%202027%20Intern",
        note: "US person status is required. That is an export control gate written into the requisition title, not a preference a good interview can move. If you cannot clear it, put the evening into the semiconductor firms instead." },
      { role: "Manufacturing and Industrial Engineering Intern", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://icfcjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Aerospace/jobs?keyword=Summer%202027%20Intern",
        note: "Posted with United States as the location, which means the site is chosen later. Phoenix is the largest aerospace campus Honeywell has, so ask for it by name in the first conversation." },
      { role: "Electrical Engineering Summer 2027 Intern", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://icfcjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Aerospace/jobs?keyword=Summer%202027%20Intern",
        note: "Search this board for Summer 2027 Intern, never for intern on its own. The plain keyword returns internal audit and internal controls roles and hides the student postings." },
      { role: "Cyber Security Intern, Summer 2027", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://icfcjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Aerospace/jobs?keyword=Summer%202027%20Intern",
        note: "The route in for a computer science student who does not want a mechanical assignment. It sits in the same cohort and the same US person gate applies." },
    ],
  },
  {
    company: "Boeing", sector: "engineering", location: "Mesa, AZ",
    careersUrl: "https://jobs.boeing.com/internships",
    roles: [
      { role: "Summer 2027 Internship, Quality Engineering", level: "Any", season: "Summer 2027", deadline: "Rolling, posted from August",
        link: "https://jobs.boeing.com/search-jobs?k=Boeing%20Summer%202027%20Internship%20Program",
        note: "Almost every posting reads Everett or Seattle followed by and other locations. Mesa is inside that list and it is where the Apache is built, so name it rather than assuming the filter found it." },
      { role: "Summer 2027 Internship, Facilities Engineering", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://jobs.boeing.com/search-jobs?k=Boeing%20Summer%202027%20Internship%20Program",
        note: "Sort by date posted rather than relevance. The engineering requisitions go up later in the cycle than the business ones and relevance sorting buries them." },
      { role: "Summer 2027 Internship, Data Analytics", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://jobs.boeing.com/search-jobs?k=Boeing%20Summer%202027%20Internship%20Program",
        note: "Open to analytics, CIS and supply chain majors, not only engineers, and Boeing counts it as the same program seat with the same conversion odds." },
    ],
  },
  {
    company: "Salt River Project", sector: "engineering", location: "Tempe, AZ",
    careersUrl: "https://www.srpnet.com/about/careers/career-path-programs/student-graduate",
    roles: [
      { role: "College Intern, Materials and Metallurgical Engineering", level: "Any", season: "Year-round", deadline: "Applications taken year-round",
        link: "https://careers.srpnet.com/search/?q=College+Intern",
        note: "SRP asks for only six credit hours a semester and accepts applications all year, which makes it the most forgiving entry on this board if your schedule is unusual or you are transferring in." },
      { role: "College Intern, Maintenance Design", level: "Any", season: "Year-round", deadline: "Rolling",
        link: "https://careers.srpnet.com/search/?q=College+Intern",
        note: "These run fifteen to forty hours a week during the semester, not just in summer, so you can hold one while taking classes. Almost nothing else on this board works that way." },
      { role: "Student and graduate programs", level: "Any", season: "Year-round", deadline: "Rolling",
        link: "https://www.srpnet.com/about/careers/career-path-programs/student-graduate",
        note: "A thousand dollars of tuition reimbursement kicks in after six months, and interns can apply to internal-only postings. Neither of those appears on the job ad itself." },
    ],
  },
  {
    company: "Arizona Public Service", sector: "engineering", location: "Phoenix, AZ",
    careersUrl: "https://www.aps.com/en/About/Careers/Internship-Programs",
    roles: [
      { role: "Summer 2027 Internship", level: "Any", season: "Summer 2027", deadline: "Now through October",
        link: "https://careers.aps.com/go/Internship/8829300/",
        note: "The window is now through October for next summer, and hiring happens once a year in the fall. A 3.0 cumulative GPA is the stated preference, and there is no sponsorship now or later." },
      { role: "Palo Verde Internship", level: "Any", season: "Summer 2027", deadline: "Fall",
        link: "https://www.aps.com/en/About/Careers/Internship-Programs",
        note: "Palo Verde is the nuclear station west of Phoenix, so budget roughly an hour each way. Two of every three Legacy Engineers there started as interns, which is the highest conversion rate stated anywhere on this board." },
      { role: "Non-engineering intern disciplines", level: "Any", season: "Summer 2027", deadline: "Now through October",
        link: "https://www.aps.com/college",
        note: "APS names construction management, business data analytics, supply chain, accounting and communications alongside the five engineering disciplines. Do not self-reject on the major here." },
    ],
  },
  {
    company: "Kiewit", sector: "engineering", location: "Phoenix, AZ",
    careersUrl: "https://www.kiewit.com/careers/students-and-recent-graduates/",
    roles: [
      { role: "Field/Office Engineer Intern, Southwest District", level: "Any", season: "Summer 2027", deadline: "Open now",
        link: "https://kiewitcareers.kiewit.com/search/?q=intern&locationsearch=Phoenix%2C+AZ",
        note: "Southwest District is the Phoenix office. District is how Kiewit names regions, and it is the only signal in a job title that the work is local, so learn the vocabulary before you filter." },
      { role: "Finance Analyst Intern, Southwest District", level: "Any", season: "Summer 2027", deadline: "Open now",
        link: "https://kiewitcareers.kiewit.com/search/?q=intern&locationsearch=Phoenix%2C+AZ",
        note: "A contractor hiring a finance intern still puts you on a jobsite in boots. That is the trade, and it is why these seats get fewer applicants than a bank does." },
      { role: "All Summer 2027 internships", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://kiewitcareers.kiewit.com/go/Kiewit_Internships/8156400/",
        note: "108 internships are posted nationally and safety and quality are the least crowded tracks. Kiewit Scholars is a separate named program on the same list and it is easy to miss." },
    ],
  },
  {
    company: "W. L. Gore & Associates", sector: "engineering", location: "Phoenix and Flagstaff, AZ",
    careersUrl: "https://wlgore.jobs.hr.cloud.sap/content/Students/?locale=en_US",
    roles: [
      { role: "2027 Engineering Summer Internships", level: "Any", season: "Summer 2027", deadline: "Open now",
        link: "https://wlgore.jobs.hr.cloud.sap/search/?q=intern&locationsearch=Arizona",
        note: "The posting lists Arizona among six states without saying which city. Gore runs sites in Phoenix, Tempe and Flagstaff, and Flagstaff is a two hour drive, so pin the location down before you accept." },
      { role: "2027 Industrial Engineering Summer Internships", level: "Any", season: "Summer 2027", deadline: "Open now",
        link: "https://wlgore.jobs.hr.cloud.sap/search/?q=intern&locationsearch=Arizona",
        note: "Gore Medical Products is the Arizona business, so this is the closest thing to a medical device internship on the board even though the title says industrial. Say biomedical interest out loud in the interview." },
      { role: "2027 Digital IT Summer Internships", level: "Any", season: "Summer 2027", deadline: "Open now",
        link: "https://wlgore.jobs.hr.cloud.sap/content/Students/?locale=en_US",
        note: "Open to computer science and information systems, not only engineers. Gore lists ten Arizona openings in total across all functions, so the cohort here is genuinely small and a referral matters." },
    ],
  },
];

/* ------------------------------------------------------------
   COMPANY LOGOS
   logo: file in logos/. If the file is missing the site draws a
         clean monogram instead, so it never looks broken.
------------------------------------------------------------ */
const COMPANIES = [
  { name: "Deloitte",          logo: "logos/deloitte.svg" },
  { name: "EY",                logo: "logos/ey.svg" },
  { name: "PwC",               logo: "logos/pwc.svg" },
  { name: "KPMG",              logo: "logos/kpmg.svg" },
  { name: "Charles Schwab",    logo: "logos/charlesschwab.svg" },
  { name: "American Express",  logo: "logos/americanexpress.svg" },
  { name: "Vanguard",          logo: "" },   // no file yet
  { name: "Northern Trust",    logo: "" },   // no file yet
  { name: "Intel",             logo: "logos/intel.svg" },
  { name: "Honeywell",         logo: "logos/honeywell.svg" },
  { name: "Freeport-McMoRan",  logo: "logos/fcx.svg" },
  { name: "Republic Services", logo: "logos/rsg.svg" },
];

/* ------------------------------------------------------------
   SPONSORSHIP TIERS  (powers sponsors.html)
   Rename the tiers and change the prices to match your packet.
   Put each sponsor's company name in "partners" and the logo is
   pulled from COMPANIES above automatically.
------------------------------------------------------------ */
const TIERS = [
  {
    name: "Presenting",
    price: "$5,000",
    accent: "red",
    partners: [],              // <- add company names here
    perks: [
      "Name on every chapter event for the year",
      "Two dedicated info sessions per semester",
      "First look at the resume book before it goes out",
      "Logo at the top of this page and the front page",
      "Speaking slot at the end-of-year banquet",
    ],
  },
  {
    name: "Gold",
    price: "$2,500",
    accent: "yellow",
    partners: [],
    perks: [
      "One dedicated info session per semester",
      "Resume book access",
      "Logo on this page and the front page",
      "Table at the chapter career night",
    ],
  },
  {
    name: "Silver",
    price: "$1,000",
    accent: "plain",
    partners: [],
    perks: [
      "Resume book access",
      "Logo on this page",
      "Table at the chapter career night",
    ],
  },
  {
    name: "Community",
    price: "In kind",
    accent: "plain",
    partners: [],
    perks: [
      "Logo on this page",
      "Named in the chapter newsletter",
    ],
  },
];

/* ------------------------------------------------------------
   EVENTS  (powers the calendar and the list beside it)

   date : "YYYY-MM-DD". Use "end" for a multi-day event.
   kind : "Meeting", "Professional", "Social", "Service", "Convention"
          The kind sets the colour of the dot on the calendar.
------------------------------------------------------------ */
const EVENTS = [
  { date: "2026-09-04", title: "First General Meeting",         where: "BA 116",         kind: "Meeting" },
  { date: "2026-09-18", title: "Resume Workshop with Deloitte", where: "McCord Hall",    kind: "Professional" },
  { date: "2026-10-02", title: "Mock Interview Night",          where: "BA 116",         kind: "Professional" },
  { date: "2026-10-23", title: "Noche de Cultura",              where: "Memorial Union", kind: "Social" },
  { date: "2026-11-06", title: "Case Competition Prep",         where: "McCord Hall",    kind: "Professional" },
  { date: "2026-11-14", title: "Volunteer Day",                 where: "Off campus",     kind: "Service" },
  { date: "2027-08-09", end: "2027-08-13", title: "ALPFA National Convention", where: "Charlotte, NC", kind: "Convention" },
];
