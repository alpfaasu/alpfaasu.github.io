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
/* Sponsorship tiers. There is deliberately NO price field: the numbers that
   used to sit here were invented placeholders, and pricing is settled with the
   board and discussed with a company directly rather than published. Do not put
   a price back on this page without the real packet. */
const TIERS = [
  {
    name: "Presenting",
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
    accent: "plain",
    partners: [],
    perks: [
      "Logo on this page",
      "Named in the chapter newsletter",
    ],
  },
];

/* ------------------------------------------------------------
   SCHOLARSHIPS
   Money for tuition. Verified 2026-09-15, every link fetched.

   TWO RULES, because this is the part of the site where being wrong
   actually costs somebody money:
   1. Never invent an amount or a deadline. If a page does not state it,
      the value here is "Check the site". Six of these are like that.
   2. "citizenship" is load bearing for this chapter. Say plainly who can
      apply, including DACA and undocumented students, or say it is not
      stated. Do not infer it.

   Deadlines rotate every year and pages go stale, so prefer describing
   the cycle over a hard date you cannot confirm for the current year.
------------------------------------------------------------ */
const SCHOLARSHIPS = [
  {
    key: "latino", name: "Latino and Hispanic",
    blurb: "Start here. These are the funds built for Latino students, and the ones where an ALPFA member is already the intended applicant.",
    items: [
      {
        name: "ALPFA Scholarship Program", provider: "ALPFA, the Association of Latino Professionals For America",
        amount: "Check the site. The public page states no amount. The FAQ has a question titled \"How much is the scholarship award?\" but the answer does not load without a member login.", deadline: "Check the site. Every date on the page reads TBD, for applications open, applications due, winners notified and funds distributed. A banner says applications are closed and the most recent recipient class shown is 2024.",
        eligibility: "ALPFA student members. The apply button sits behind a Premium Members Only gate.",
        citizenship: "Could not confirm. No citizenship, residency or DACA language appears anywhere in the public page.",
        daca: "unclear",
        link: "https://www.alpfa.org/page/scholarships",
        note: "Awards go straight to your school tuition account, not to you, so it is worth less if other aid already covers your bill. You have a shortcut the public page does not give: ask ALPFA National through the chapter instead of waiting for the site, because those dates have sat at TBD for a while.",
      },
      {
        name: "HSF Scholar Program", provider: "Hispanic Scholarship Fund",
        amount: "$500 - $5,000", deadline: "Opens in early January, closes mid February. The page currently shows the closed 2026 cycle, which ran January 5 to February 15, 2026. Expect the 2027 round to open in early January.",
        eligibility: "Hispanic heritage, 2.5 GPA or better for college students, full time at an accredited four year US university, FAFSA filed.",
        citizenship: "Open to DACA. The eligibility line reads \"US Citizen, Permanent Legal Resident, or DACA.\" Undocumented students without DACA are not covered.",
        daca: "yes",
        link: "https://www.hsf.net/scholarship",
        note: "Being named an HSF Scholar and getting money are two different things. HSF picks 10,000 Scholars a year but awards cash \"depending on available funds.\" The Scholar status itself carries the conferences, mentorship and recruiter access, which for most members is worth more than the check.",
      },
      {
        name: "HACU Scholarship Program", provider: "Hispanic Association of Colleges and Universities",
        amount: "Varies by scholarship. Amounts in the 2026-2027 cycle ran from $1,500 to $10,000, including Deloitte Foundation at $2,500 and United Health Foundation at $10,000.", deadline: "The page shows only a past cycle. All ten listed scholarships are marked CLOSED with deadlines that ran April 15 to May 31, 2026. The page says to expect the next batch around February.",
        eligibility: "Enrolled at a HACU member institution. ASU is listed in HACU's own member directory. GPA floors run 2.5 to 3.0 depending on the award.",
        citizenship: "Varies by award and you must read each one. Denny's Hungry for Education and Building Stronger Communities both say US citizens or permanent residents. Cafe Bustelo, Coca-Cola First Generation, Ford Philanthropy and United Health state no citizenship requirement at all.",
        daca: "unclear",
        link: "https://www.hacu.net/hacu/Scholarships.asp",
        note: "This is one profile, not ten applications. You build a single HACU profile and it matches you against every award you qualify for. For an ALPFA member the Deloitte Foundation one is the obvious target: it covers accounting, finance, business, analytics and information systems, it renews, and it had 68 awards available.",
      },
      {
        name: "LULAC National Scholarship Fund", provider: "LULAC National Educational Service Centers",
        amount: "National Scholastic Achievement Awards $2,000. Honors Awards $500 to $2,000. General Awards $250 to $1,000.", deadline: "The page says the application is currently closed and that councils notify recipients by June 15. No open date is posted. The cycle runs roughly winter to spring, and only a past cycle is shown.",
        eligibility: "Enrolled or applied full time at a college, university or vocational school. Award tier is set by GPA, 3.5 and up for the top tier, 3.0 and up for Honors.",
        citizenship: "Open to DACA. The page states you must be a US citizen, legal permanent resident, or granted Deferred Action for Childhood Arrivals. Undocumented students without DACA are excluded.",
        daca: "yes",
        link: "https://www.lnesc.org/scholarships/lulac/",
        note: "This one lives or dies on geography. If no participating LULAC council covers your area you are not eligible, and only 59 councils funded awards last program year. Call the Phoenix area council and confirm they are participating before you write a word. Awards are also matched, so a council's $400 becomes $800.",
      },
      {
        name: "Prospanica Scholarship Program", provider: "Prospanica",
        amount: "UP TO $5,000 PER SCHOLARSHIP AWARD", deadline: "One round a year, opening February 1 and closing in early May. The page shows the 2026 round, which opened February 1 and closed May 3, 2026. That cycle is past.",
        eligibility: "Prospanica membership with a Member ID is required. Undergraduates must be a college freshman or higher when they apply.",
        citizenship: "Could not confirm. The requirements list says nothing about citizenship, residency, DACA or immigration status.",
        daca: "unclear",
        link: "https://www.prospanica.org/page/scholarships",
        note: "An ASU student won in 2025 as a Psychology major, which tells you two things: ASU applicants do get picked, and you do not need a business major even though Prospanica is a business organization. Watch the Conference Host State award too, since the applicant pool shrinks hard if the annual conference lands in Arizona.",
      },
      {
        name: "CPLC Scholarship, Arizona State University", provider: "Chicanos Por La Causa",
        amount: "up to $10,000 in tuition assistance per academic year, depending on other scholarships you may receive", deadline: "The page names February 1, 2026 as the deadline to submit the ASU application on Scholarship Universe. That date has passed. The ASU deadline has been February 1, so plan for February 1, 2027.",
        eligibility: "Accepted ASU student, FAFSA on file, enrolled in at least 12 credit hours, classified as an Arizona resident paying in state tuition.",
        citizenship: "Could not confirm. The page requires in state classification and a FAFSA rather than citizenship as such. Prop 308 gives in state tuition regardless of status, but FAFSA still needs an eligible status, so ask CPLC at Scholarships@cplc.org before assuming.",
        daca: "unclear",
        link: "https://cplc.org/scholarships/",
        note: "The strongest Arizona specific award here and the easiest to enter, because there is no separate portal. You apply through ASU Scholarship Universe, which you are already in. It also auto renews with no reapplication if you hold a 3.0 and do 20 volunteer hours a semester with a CPLC program. That is 40 hours a year, so budget for it.",
      },
      {
        name: "Emerging Business Leaders Initiative Scholarship", provider: "Arizona Hispanic Chamber of Commerce",
        amount: "It provides $5000 awards to juniors and seniors in business majors at NCA Accredited schools in Arizona. The same page elsewhere says renewable scholarships ranging from $5,000 to $15,000.", deadline: "The page still reads \"Scholarship applications are now open until March 16, 2026,\" which has passed, so it is showing a stale cycle. The pattern is a mid March deadline.",
        eligibility: "Declared business major at an NCA accredited Arizona college, 3.0 college GPA or better, entering junior or senior year, full time, one parent of Hispanic heritage.",
        citizenship: "Could not confirm. The eligibility list names heritage, GPA, major and class standing, and says nothing about citizenship, residency or DACA.",
        daca: "unclear",
        link: "https://www.azhcc.com/scholarships",
        note: "This is the closest match on the whole list to what an ALPFA member actually is: a Hispanic business major, junior or senior, in Arizona. It pays in two installments, renews for a second year, and comes with a mentor and internship access. Preference goes to dependents or employees of AZHCC member companies, so check the member directory for your own or a parent's employer first. Only six a year.",
      },
      {
        name: "TheDream.US National Scholarship", provider: "TheDream.US",
        amount: "up to a maximum of $33,000 for a bachelor's degree, plus an additional stipend for books, supplies, and transportation up to a maximum of $6,000", deadline: "Opens November 1, 2026 for the next round. The page states the National scholarship is now closed and the next round opens November 1, 2026. The prior round closed February 28, 2026.",
        eligibility: "First generation immigrant student who came to the US before age 16 and before November 1, 2020, graduated from a US high school, 2.5 GPA or better, enrolling full time at a Partner College, eligible for in state tuition, with significant unmet need.",
        citizenship: "Built for undocumented students. Open to immigrant students with or without DACA or TPS. It is the reverse of a citizenship rule: if you receive or are eligible for a Federal Pell Grant you are NOT eligible.",
        daca: "yes",
        link: "https://www.thedream.us/scholarships/national-scholarship/",
        note: "ASU is a confirmed Partner College with its own page and named staff contacts, so this works at your school. It is the most actionable item on this entire list right now, because it opens in about six weeks while nearly everything else is shut until February. Arizona is not a locked out state after Prop 308, so Arizona students use the National Scholarship, not the Opportunity Scholarship.",
      },
      {
        name: "MALDEF Scholarship Resource Guide 2027-2028", provider: "Mexican American Legal Defense and Educational Fund",
        amount: "Not applicable. This is a free directory, not a scholarship.", deadline: "No deadline. The 2027-2028 guide is already posted alongside the 2026-2027 edition.",
        eligibility: "Open to anyone. It is a downloadable list for students, parents and educators.",
        citizenship: "Its whole value here is that it flags scholarships which, in MALDEF's words, do not inquire about immigration status.",
        daca: "yes",
        link: "https://www.maldef.org/resources/scholarship-resources/",
        note: "Do not send anyone to MALDEF expecting an undergraduate award, because MALDEF's own scholarship is law school only. Send them for the guide. It is the best curated list of funds that ignore immigration status, and it is published a year ahead of most providers. This is the right first link for a member who is undocumented and does not know where to start.",
      },
    ],
  },
  {
    key: "profession", name: "Accounting and finance",
    blurb: "Money attached to the professions this chapter feeds. Several of these ask for a free student membership first, so join before the window opens.",
    items: [
      {
        name: "AICPA Foundation CPA Exam Grant", provider: "AICPA Foundation and Controllers Council",
        amount: "Up to $1,000", deadline: "Open now and closing soon. Open Date Jun 01, 2026. Close Date Sep 30, 2026 at 11:59 p.m. US Eastern.",
        eligibility: "Financial need, planning CPA licensure but not yet a CPA, at least one exam part left to pass, and a Notice to Schedule for at least one section plus the receipt for your exam fees. 80 recipients.",
        citizenship: "US citizen or permanent resident, green card holder. The page states this outright. Not open to DACA or undocumented students.",
        daca: "no",
        link: "https://www.thiswaytocpa.com/education/scholarship-search/CPAexamgrant",
        note: "This is the only thing on the whole list with a deadline inside the next two weeks, and it is the one most people miss because it is filed as a grant rather than a scholarship. It reimburses exam fees and prep course costs, not tuition, so you need a Notice to Schedule in hand before you apply. It may also be taxable.",
      },
      {
        name: "AICPA Foundation Scholarship for Future CPAs", provider: "AICPA Foundation, sponsored by BDO USA, BKR International and Springline Advisory",
        amount: "$5,000 - $10,000", deadline: "The page shows the closed 2026 cycle, Dec 01, 2025 to Mar 15, 2026, and states the next round for 2027-2028 funding runs December 1, 2026 through March 15, 2027.",
        eligibility: "Accounting degree with CPA licensure planned, at least 30 semester hours done including 6 in accounting, overall and major GPA of 3.0 or better, some financial need, and free AICPA Student Affiliate membership.",
        citizenship: "US citizen or legal permanent resident, green card holder. Not open to DACA or undocumented students.",
        daca: "no",
        link: "https://www.thiswaytocpa.com/education/aicpa-legacy-scholarships/future-cpas-scholarship/",
        note: "One application covers all three AICPA Legacy Scholarships, so the same form puts you in front of the George Willie and Two-year Transfer awards too. Join AICPA as a student affiliate before you start, because the portal signs you in with those credentials.",
      },
      {
        name: "AICPA/PCPS George Willie Student Scholarship", provider: "AICPA Foundation and the AICPA Private Companies Practice Section",
        amount: "$10,000", deadline: "The page shows the closed 2026 cycle, Dec 01, 2025 to Mar 15, 2026. The next round for 2027-2028 funding runs December 1, 2026 through March 15, 2027.",
        eligibility: "First generation college student, meaning neither parent or guardian holds a bachelor's degree, accounting degree, 30 semester hours including 6 in accounting, 3.0 overall and major GPA, full time, financial need, AICPA Student Affiliate membership.",
        citizenship: "US citizen or legal permanent resident, green card holder. Not open to DACA or undocumented students.",
        daca: "no",
        link: "https://www.thiswaytocpa.com/education/aicpa-legacy-scholarships/georgewillie-scholarship/",
        note: "Highest fixed award in the AICPA Legacy set, and the first generation filter shrinks the pool sharply. If you qualify, build your essay around this one rather than the general Future CPAs award.",
      },
      {
        name: "AICPA Accounting Scholars Leadership Workshop", provider: "AICPA Foundation",
        amount: "Check the site. No cash award. The AICPA Foundation and sponsors cover transportation to and from the workshop, hotel, training and meals.", deadline: "The page shows a past cycle, Mar 01, 2026 to Jun 15, 2026. Expect the same March to June window in 2027.",
        eligibility: "First time attendee, undergraduate or graduate at a community college or four year school, declared accounting major or stated interest in the profession, AICPA Student Affiliate membership. No GPA or credit hour minimum stated.",
        citizenship: "The most open door in this group. US citizen, permanent resident, or noncitizen with valid US immigration status, and the page names F-1 visa, DACA and TPS explicitly. Your documentation must be valid at the time of the event.",
        daca: "yes",
        link: "https://www.thiswaytocpa.com/education/scholarship-search/aicpa-accounting-scholars-leadership-workshop/",
        note: "This is the only AICPA program that names DACA and F-1 holders as eligible, so for international and DACA members it is the realistic AICPA entry point. It runs alongside the Accounting Inclusion and Impact Symposium, which is where the recruiter access actually happens.",
      },
      {
        name: "Arizona Accounting Scholarships", provider: "Arizona CPA Foundation for Education and Innovation, with the Arizona Society of CPAs",
        amount: "Monetary scholarships in the amount of $2,000 will be awarded to students at each of the three public universities. Private university awards are $2,000, and other awards are $1,000.", deadline: "No fixed date published. The page states the window begins in November annually and that applications will be available in November 2026.",
        eligibility: "Accounting students at Arizona public universities, which includes ASU. No GPA or credit hour minimum is published. ASCPA student membership is free and is not stated as a requirement.",
        citizenship: "Could not confirm. The page publishes no citizenship or residency language at all.",
        daca: "unclear",
        link: "https://www.ascpa.com/scholarships",
        note: "Best odds on the list and the one most members will miss. You do not apply to ASCPA. The page says applications sent directly to ASCPA will not be accepted and you must go through the W. P. Carey School of Accountancy. Have someone ask the ASU accounting department in October what the internal process is, before the November window opens.",
      },
      {
        name: "NABA Foundation Scholarship Program", provider: "NABA Inc., the National Association of Black Accountants",
        amount: "over 150 scholarships annually ranging from $2,500 - $10,000", deadline: "The page shows a past cycle. It describes awards made in August 2026 for the Fall 2026 semester and publishes no open date for the next round. Its own FAQ says the window length varies year to year. Check back in winter or email Scholarships@nabainc.org.",
        eligibility: "Active NABA student member, full time at an accredited US two year or four year school, demonstrated academic excellence. No numeric GPA minimum published.",
        citizenship: "US citizen or permanent resident. The page defines permanent resident narrowly as a lawful green card holder and says IRS resident alien tax status does not qualify. Not open to DACA or undocumented students.",
        daca: "no",
        link: "https://nabainc.org/scholarships/",
        note: "The volume is the story. Over 150 awards a year is far better odds than the AICPA programs, which fund roughly twenty. Student membership is free, so sign members up now rather than when the window opens. Winners are expected at the Celebration of Scholars, so budget travel.",
      },
      {
        name: "IMA Student Scholarship", provider: "Institute of Management Accountants",
        amount: "Check the site. Not a cash award. It covers two years of IMA Student membership, the CMA entrance fee plus Part 1 and Part 2 exam fees, or the FMAA entrance and exam fee, plus 12 months of Gleim Online materials in select regions.", deadline: "Open now. IMA accepts nominations each academic year from September 1 through June 30.",
        eligibility: "A professor must nominate you and you cannot self nominate. Ten students per year at IMA endorsed schools, three at IMA Partner Schools. Create an IMA account before your professor submits.",
        citizenship: "Could not confirm. The page carries no citizenship requirement. Nomination forms are split by region, with an Americas form.",
        daca: "unclear",
        link: "https://www.imaglobal.org/pages/student-scholarships",
        note: "Two corrections to what aggregator sites still claim. This is not cash, it pays your CMA or FMAA exam costs. And the IMA Memorial Education Fund is no longer a student award at all, it is now a grant paid to colleges to send students to a conference. The real action item is confirming whether ASU is IMA endorsed and getting a W. P. Carey professor to nominate members.",
      },
      {
        name: "NSA Foundation Scholarship Program", provider: "NSA Scholarship Foundation, National Society of Accountants",
        amount: "Award amounts range from $1,000 to $2,500", deadline: "Confirmed future cycle. Opens January 15, 2027. Closes Saturday, May 1, 2027 at 11:59 PM Pacific. Recipients notified July 1, 2027.",
        eligibility: "Accounting major or committed to one, 3.0 cumulative GPA or better, undergraduate at an accredited US school, first semester completed. Arizona applicants must carry at least 9 credit hours. No membership required.",
        citizenship: "US or Canadian citizen. Permanent residents are NOT eligible except for applicants from Arizona, where legal residents may apply.",
        daca: "no",
        link: "https://nsacct.org/nsaf-scholarships/",
        note: "Read the Arizona carve out carefully, because it is unusual and it favors this chapter specifically. Permanent residents are locked out nationwide but Arizona legal residents are explicitly let in, and there is a separate Arizona financial need award inside the program. The Foundation gave out $40,000 total in 2026, so the pool is small but the Arizona angle narrows the field.",
      },
      {
        name: "Frank L. Greathouse Government Accounting Scholarship", provider: "Government Finance Officers Association",
        amount: "Two $10,000 awards, listed at the 2025 level", deadline: "The 2026 window is closed. The page states the application window for 2027 scholarships will open in November.",
        eligibility: "Full time at upper level undergraduate or graduate level, studying accounting, planning a career in state, provincial or local government finance, with a recommendation letter speaking to your public sector commitment. No GPA minimum, no membership required.",
        citizenship: "Citizen or permanent resident of the United States or Canada. Not open to DACA or undocumented students.",
        daca: "no",
        link: "https://www.gfoa.org/available-scholarships",
        note: "Almost nobody applies here because students read GFOA as a body for career municipal staff. It is not. Upper level undergraduates qualify, the award is $10,000, and the field is tiny. The Clark Burrus scholarship on the same page is another $10,000 and accepts part time upper level undergraduates in accounting, finance or economics.",
      },
    ],
  },
  {
    key: "asu", name: "ASU and Arizona",
    blurb: "ASU is a Hispanic Serving Institution and most of its money moves through one portal, so the work is filling out a profile properly rather than hunting for applications.",
    items: [
      {
        name: "ASU Scholarship Universe", provider: "Arizona State University",
        amount: "Varies by scholarship. Check the site.", deadline: "Rolling. Each listing carries its own deadline. ASU's FAQ says you can edit an application until the listed deadline and that most are February 1.",
        eligibility: "Admitted or current ASU student. Sign in with your ASURITE ID, complete your profile, then apply per scholarship.",
        citizenship: "No portal wide rule. Individual listings set their own terms. ASU's Prop 308 page states ASU scholarships are open regardless of immigration status.",
        daca: "yes",
        link: "https://scholarships.asu.edu/",
        note: "It is a matching engine, not a single application. A thin profile returns few matches, so fill in every field including major, class level, community involvement and background. ASU moved to this platform recently, which is why older scholarships.asu.edu links with a scholarship number now dump you on a generic page.",
      },
      {
        name: "W. P. Carey general scholarship application", provider: "W. P. Carey School of Business, Arizona State University",
        amount: "W. P. Carey awards over $1.3 million in scholarships to undergraduate students each year. Per award amounts are not published.", deadline: "Annual. One application a year covers general and departmental business scholarships. ASU's FAQ says most portal deadlines are February 1. The W. P. Carey page prints no date, so confirm inside Scholarship Universe.",
        eligibility: "Admitted to a W. P. Carey degree seeking program, enrolled full time for the upcoming year, GPA of 3.0 or better.",
        citizenship: "No citizenship requirement stated, and the page says a FAFSA is not required to apply. ASU's Prop 308 page states students meeting ASU scholarship requirements are eligible regardless of immigration status.",
        daca: "yes",
        link: "https://wpcarey.asu.edu/undergraduate/scholarships-aid",
        note: "One application feeds both the general pool and the departmental pools, so your declared major quietly decides which funds you compete for. Finance and financial planning majors get a second set on top, and a few of those need a supplementary application the general form does not trigger.",
      },
      {
        name: "W. P. Carey named scholarships with fall deadlines", provider: "W. P. Carey School of Business, Arizona State University",
        amount: "Check the site. Amounts are not published per award.", deadline: "Live now and outside the February cycle. Business Faculty Emeritus Memorial and Mel and Marty Zajac Memorial close September 16, 2026. Gary S. Clancy Memorial and Sam and Ida Turken Family close September 23, 2026. Jack D. Furst Honors is rolling.",
        eligibility: "Admitted W. P. Carey undergraduate, full time, GPA 3.0 or better, applying through Scholarship Universe.",
        citizenship: "Not stated. No citizenship condition appears in the eligibility list. ASU's Prop 308 page confirms ASU scholarships are open regardless of immigration status.",
        daca: "yes",
        link: "https://students.wpcarey.asu.edu/scholarships",
        note: "This is the page nobody checks, and it is the single best argument for reading this list today. It carries fall deadlines that sit outside the February cycle, two of them close within days, and the school does not email about every posting. Put a recurring check on it, because the list rotates through the year.",
      },
      {
        name: "New American University Scholarship", provider: "Arizona State University",
        amount: "Nonresident: President's and Provost's Awards valued at $15,500 to $17,500 per year, and Academic Achievement, University and Dean's Awards valued at $10,000 to $13,500 per year. Arizona resident: President's Award valued at $7,000 per year. These are the 2026-27 figures.", deadline: "No separate application. ASU considers you once you are admitted, so the real deadline is your admission application and credentials. Renewable for eight semesters.",
        eligibility: "Incoming undergraduates, awarded on high school GPA in core competencies, how many competencies you completed, and your degree program, residency and campus.",
        citizenship: "Open to DACA and undocumented students. ASU's Prop 308 page says students meeting ASU scholarship requirements are now eligible regardless of immigration status, and links straight to this scholarship.",
        daca: "yes",
        link: "https://tuition.asu.edu/new-american-university",
        note: "The award names did not change, despite what you may have heard. What changed is that nonresident awards no longer carry a separate Nonresident label, they are the same names at higher dollar values. Changing your program, residency or campus mid degree can cut the award, so check before you switch.",
      },
      {
        name: "ASU Promise Plus program, previously the Obama Scholars Program", provider: "Arizona State University",
        amount: "Year 1 covers actual tuition and fees including Barrett fees, plus a standard amount toward housing and meals if you live on campus. Years 2 to 4 cover tuition and fees only.", deadline: "Annual, for incoming first year students. Jan 15 for the FAFSA and a complete admission application. May 15 to confirm housing. July 1 for verification documents. ASU states there are no exceptions.",
        eligibility: "Arizona resident, full time first year student starting the fall right after Arizona high school graduation, family income of $42,400 or less on the FAFSA, and Pell eligible.",
        citizenship: "Effectively requires US citizenship or eligible noncitizen status, because Pell eligibility is a condition and Pell is federal aid. ASU's Prop 308 page states students without lawful status do not qualify for federal aid.",
        daca: "no",
        link: "https://tuition.asu.edu/special-financial-assistance-programs-arizona-residents",
        note: "If someone tells you to look up the Obama Scholars Program, this is it. ASU's page states in its own words that the program was previously known as the Obama Scholars Program, and the old obamascholars.asu.edu domain no longer resolves. There is no separate application, but funding is capped and closes when it runs out, so applying early matters.",
      },
      {
        name: "Prop 308 in state tuition and state aid access", provider: "Arizona State University, Financial Aid and Scholarship Services",
        amount: "Not a scholarship. It converts nonresident tuition to the in state rate and unlocks state and institutional aid. Resident tuition and mandatory fees average $14,814 per year for 2026-27 against $39,262 for nonresidents.", deadline: "No deadline. Residency reclassification is processed on request.",
        eligibility: "A qualifying noncitizen student who attended an Arizona public or private high school or homeschool equivalent for at least two years and graduated from one, or earned an Arizona GED.",
        citizenship: "This is the page for DACA and undocumented students. ASU states that with Prop 308 all students regardless of immigration status may be eligible for financial aid paid in whole or part with state monies. Federal rules are unchanged, so no Pell and no federal loans. Students on F1, F2, J1, H4 or H1 visas are excluded.",
        daca: "yes",
        link: "https://tuition.asu.edu/Prop308",
        note: "Two things the page will not tell you. If you cannot file a FAFSA because you have no Social Security number, file the CSS Profile instead, ASU's code is 4007, and do not file both. And the benefit is currently being litigated, so treat it as live but not settled. The page is published in English and Spanish.",
      },
      {
        name: "ACF General Scholarship Application", provider: "Arizona Community Foundation",
        amount: "Check the site. The page gives no single figure, only that ACF distributed $6.9M across 2,000 students through 160 plus scholarships.", deadline: "Opens in January each year. The page says scholarship season has ended and the general application will reopen in January 2027.",
        eligibility: "Students attending postsecondary schools in Arizona. Each of the 160 plus funds sets its own criteria and the portal matches you automatically.",
        citizenship: "Could not confirm. Requirements sit inside each individual fund rather than on this page, so rules vary fund by fund.",
        daca: "unclear",
        link: "https://www.azfoundation.org/Scholarships",
        note: "Highest return per hour on this whole list. One application matches you against 160 plus funds, several of them Hispanic designated or tied to a single Arizona county with a tiny applicant pool. ACF is the largest independent scholarship provider in the state. Put it in the diary for the first week of January.",
      },
    ],
  },
  {
    key: "open", name: "Corporate and open",
    blurb: "The big national names. Read the eligibility line first, because several of the famous ones are closed to anyone who has already started college.",
    items: [
      {
        name: "Deloitte Foundation Accounting Scholars Program", provider: "Deloitte Foundation, administered by 25 partner universities including ASU W. P. Carey",
        amount: "a scholarship that covers 100% of their tuition and academic fees, excluding books and living expenses, for the 2026-2027 academic year", deadline: "The page shows a past cycle and says information about the 2027-2028 scholarships will be available in late fall 2026. The ASU deadline in the closed round was March 31, 2026.",
        eligibility: "Open to current undergraduates. You apply during your undergraduate years for a fifth year master of accounting or master of tax at a participating school.",
        citizenship: "Could not confirm. The Deloitte page states no citizenship rule. Each of the 25 schools publishes its own criteria, so the answer is on ASU's W. P. Carey page, not this one.",
        daca: "unclear",
        link: "https://www.deloitte.com/us/en/about/deloitte-foundation/deloitte-foundation-accounting-cpa-scholars-program.html",
        note: "The only Big Four award here with a real student facing application, and ASU is one of the 25 named schools. You do not apply to Deloitte. You apply to the W. P. Carey master's program, then file a separate scholarship application with the school at wpcareymasters@asu.edu. That means you compete against ASU students, not the whole country.",
      },
      {
        name: "Scholarship America Dream Award", provider: "Scholarship America",
        amount: "$10,000", deadline: "Currently closed. The page says 2027 program information is tentative and subject to change. Prior rounds opened in fall and closed in late winter. Use the reminder signup on the page.",
        eligibility: "Current undergraduates only. You must have finished at least one year of full time study, and the page states plainly that high school seniors are not eligible. 3.0 GPA minimum, financial need, first associate or bachelor's degree.",
        citizenship: "Open to DACA. The eligibility list names US citizens, US permanent residents, or individuals granted deferred action status under DACA. Undocumented students without DACA are not covered.",
        daca: "yes",
        link: "https://scholarshipamerica.org/scholarship/dreamaward/",
        note: "Renewable for up to three more years, so the $10,000 headline understates it badly. A sophomore who wins gets far more than a senior who wins. Apply as early in your degree as you qualify.",
      },
      {
        name: "Point Foundation Flagship Scholarship", provider: "Point Foundation",
        amount: "Awards up to $15,000", deadline: "Open now. Opens September 9 at 9:00 a.m. PST and closes November 19 at 5:00 p.m. PST. Awarded Scholars start in the fall 2027 term.",
        eligibility: "Open to current undergraduates as well as graduate and professional students. 3.3 cumulative GPA minimum, full time at an accredited not for profit US institution, member of the LGBTQ+ community or an ally.",
        citizenship: "Could not confirm. The page lists no citizenship or residency requirement, only enrollment at a US institution.",
        daca: "unclear",
        link: "https://pointfoundation.org/scholarships/flagship",
        note: "Renewable for up to four years, which makes it the largest sum here for an early year undergraduate. Note the word ally in the eligibility line, this is not restricted to LGBTQ+ students. Point also runs a separate $1,500 Access Scholarship at a 2.0 GPA floor closing October 22, which is a much lower bar and worth filing alongside.",
      },
      {
        name: "Cooke Undergraduate Transfer Scholarship", provider: "Jack Kent Cooke Foundation",
        amount: "as much as $55,000 per year for two to three years to complete a bachelor's degree", deadline: "Open now. The page states the application is open and closes December 9, 2026.",
        eligibility: "Community college students transferring to a four year school. A student already enrolled at ASU cannot apply. A Maricopa Community Colleges student heading to ASU can.",
        citizenship: "Could not confirm. The program page carries no citizenship statement. Check the How to Apply page before relying on it.",
        daca: "unclear",
        link: "https://www.jkcf.org/our-scholarships/undergraduate-transfer-scholarship/",
        note: "Do not confuse this with the Cooke College Scholarship Program, which is high school seniors only. Winners also get an internship stipend, a conference and travel stipend, and a graduate scholarship, which is a second stream of money most applicants never hear about. Average winner GPA is 3.94, so it is genuinely elite.",
      },
      {
        name: "Coca-Cola Scholars Program Scholarship", provider: "Coca-Cola Scholars Foundation",
        amount: "$20,000", deadline: "Open now for the 2027 class, closing Wednesday, September 30, 2026 at 5 pm Eastern.",
        eligibility: "High school seniors only. The page states that anyone who has already graduated from high school is not eligible, so a current ASU undergraduate cannot apply. Pass it to younger siblings and high school outreach contacts.",
        citizenship: "US citizens, US nationals, US permanent residents, refugees, asylees, Cuban-Haitian entrants or humanitarian parolees, following the guidelines the US Department of Education uses for federal aid. International students are excluded. DACA is not named, and DACA does not confer federal aid eligibility.",
        daca: "no",
        link: "https://www.coca-colascholarsfoundation.org/apply/",
        note: "Phase 1 needs no essays, no transcript and no recommendations, so entering costs about twenty minutes. Roughly 1% advance to Phase 2. Treat the first round as a lottery ticket, not a project.",
      },
      {
        name: "The Gates Scholarship", provider: "The Gates Scholarship",
        amount: "funding for the full cost of attendance that is not already covered by other financial aid and the Student Aid Index", deadline: "Shown as open with a deadline of Sept 15, 2026. Semifinalist phase December 2026 to January 2027, selection April 2027.",
        eligibility: "High school seniors only, Pell eligible, 3.3 weighted cumulative GPA minimum. A current ASU undergraduate cannot apply.",
        citizenship: "US citizen or permanent resident, stated directly in the basic eligibility list. Not open to DACA or undocumented students, and the Pell requirement rules them out independently.",
        daca: "no",
        link: "https://www.thegatesscholarship.org/scholarship",
        note: "Last dollar, so it fills the gap after other aid rather than stacking on top. A large ASU merit package shrinks the Gates award. It is still the largest total value award here for a low income student, which is why it belongs in high school outreach material.",
      },
    ],
  },
];

/* ------------------------------------------------------------
   RESEARCH
   Verified 2026-09-15. "noExperience" is the most useful filter on the
   page: 23 of these take students who have never done research, which is
   exactly who needs to see them.

   Citizenship matters here more than anywhere. Every NSF REU, SULI, NIH
   SIP and Amgen programme is closed to students without citizenship or
   permanent residency. Say it per item rather than burying it.
------------------------------------------------------------ */
const RESEARCH = [
  {
    key: "asu", name: "At ASU",
    blurb: "Every school at ASU runs its own undergraduate research program, and almost all of them expect you to find a faculty mentor before you apply.",
    items: [
      {
        name: "Fulton Undergraduate Research Initiative (FURI)", provider: "Ira A. Fulton Schools of Engineering, ASU",
        paid: "$1,500 stipend per funded semester, plus up to $400 for research supplies. TSMC-sponsored semiconductor projects pay $2,600 plus $400.", commitment: "One semester of research alongside your classes, ending in a poster at the Fulton Forge Student Research Expo. You can be funded for up to two semesters.",
        eligibility: "Full-time Fulton Schools undergraduate in good academic standing, including ASU Online students. You need a Fulton faculty mentor who is not on sabbatical.",
        citizenship: "Not stated",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "One application per semester. The page shows the Fall 2026 deadline as April 10, 2026 and late applications are never accepted, so join the notify list and watch for the next opening.",
        link: "https://furi.engineering.asu.edu/",
        note: "The application is the easy part. The bottleneck is landing a mentor, which means going to office hours and asking professors what they research months before the deadline. FURI also bans generative AI anywhere in the application, including your personal statement.",
      },
      {
        name: "School of Life Sciences Undergraduate Research (SOLUR)", provider: "School of Life Sciences, ASU",
        paid: "Apprentice and Researcher levels are credit only. Scholar and Fellow levels carry funding, but the site does not publish the amount. Check the site.", commitment: "One or two semesters in a faculty lab, plus a seminar and a poster symposium. Apprentice enrolls in BIO 189, Researcher in BIO 289.",
        eligibility: "Full-time degree-seeking ASU student, 2.75 GPA for Apprentice and Researcher, 3.0 for Scholar, 3.5 for Fellow. Non-life-sciences majors qualify at the Apprentice and Researcher levels.",
        citizenship: "Not stated",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "Apprentice and Researcher run on an agreement form signed by your mentor, so you can start any semester. Scholar and Fellow applications open the first week of February and close late March or early April.",
        link: "https://sols.asu.edu/research/solur",
        note: "Apprentice is the level built for people with no research background, but there is a catch the tiers hide: you have to already be volunteering in a lab before you can enroll. Email professors first, then apply.",
      },
      {
        name: "Economics Research Training Program", provider: "Department of Economics, W. P. Carey School of Business, ASU",
        paid: "Unpaid. Stage one is a one-credit pass/fail course.", commitment: "Stage one is 16 weeks at about 50 minutes a week. Stage two is one to two semesters on a team of two or three students.",
        eligibility: "Undergraduates in W. P. Carey or The College of Liberal Arts and Sciences who have finished ECN 221 or an equivalent statistics course with a strong grade.",
        citizenship: "Not stated",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "No fixed cycle and no application form. Email the professor to ask for the next deadline, then send a one to two page CV and a one-page cover letter.",
        link: "https://wpcarey.asu.edu/economics-degrees/research-training",
        note: "This is the one real research pathway inside W. P. Carey that starts from zero. You do not need Python or R going in, there is no interview, and students propose their own questions and can end up as co-authors. Passing stage one does not guarantee a stage two placement.",
      },
      {
        name: "Summer Research Initiative (SURI)", provider: "Ira A. Fulton Schools of Engineering, ASU",
        paid: "$5,000 stipend plus on-campus housing", commitment: "Eight weeks, 30 to 40 hours a week, with the first two weeks remote. The 2026 run was May 18 to July 17.",
        eligibility: "Priority goes to students between their junior and senior years and to master's students weighing a doctorate.",
        citizenship: "Open to all. The page names US citizens, permanent residents, ASU-sponsored F-1 and J-1 students, and international applicants.",
        openWithoutCitizenship: "yes",
        noExperience: true,
        cycle: "Applications close in the winter for a May start. The page currently reads \"Applications for SURI 2026 are closed now\", so watch it over winter break.",
        link: "https://students.engineering.asu.edu/graduate/research/suri/",
        note: "Rare among funded summer research programs because it does not shut out international students. If you are on an F-1 visa and have been turned away from REUs, start here.",
      },
      {
        name: "Online Undergraduate Research Scholars (OURS)", provider: "The College of Liberal Arts and Sciences, ASU",
        paid: "No stipend. Some projects are credit-bearing courses you pay tuition for. A separate OURS scholarship exists with preference for high financial need.", commitment: "5 to 20 hours a week. The program advises blocking out long stretches rather than an hour here and there.",
        eligibility: "ASU Online students in a College of Liberal Arts and Sciences degree. On-campus students are not eligible.",
        citizenship: "Not stated",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "Two cycles a year. The Fall 2026 application posted May 22 and closed July 15, 2026.",
        link: "https://ours.thecollege.asu.edu/students",
        note: "Group-based, so you are not cold-emailing a professor to get in. Since 2022 more than half of participants have been Pell eligible and 38 percent underrepresented minorities, which tells you who actually gets picked.",
      },
      {
        name: "Research Apprenticeship Program", provider: "School of Human Evolution and Social Change, ASU",
        paid: "Unpaid. Credit through ASB 499 or ASB 484, 1 to 3 credits, and whether you get credit is up to the lead faculty member.", commitment: "Set by a research contract based on the hours you commit each week. Projects are sorted into entry, mid and upper level.",
        eligibility: "All majors are encouraged to apply, with preference to School of Human Evolution and Social Change students. Online students can join projects that allow remote work.",
        citizenship: "Not stated",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "One deadline per semester. The Fall 2026 deadline was June 24, 2026 at 5 p.m. MST.",
        link: "https://shesc.asu.edu/student-life/research-apprenticeship-program",
        note: "One of the few ASU programs where you apply to a posted project instead of finding your own mentor, and where explicit entry-level slots exist. Apply to several projects, each as a separate submission.",
      },
      {
        name: "Sustainability Undergraduate Research Experience (SURE)", provider: "School of Sustainability, ASU",
        paid: "Not stated. Check the site.", commitment: "Research in the spring C session. You can enroll in three credits of independent research but it is not required.",
        eligibility: "On-campus and online undergraduates. No major, class standing or GPA requirement stated.",
        citizenship: "Not stated",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "Applications open in the fall and are due mid-October. Faculty pick students in November for a spring start.",
        link: "https://schoolofsustainability.asu.edu/sure/",
        note: "The mid-October deadline is the nearest one on this whole list. The program says taking SOS 246 in fall A session improves your odds, which is really a hint that they want people who already know what a research question is.",
      },
      {
        name: "UResearch, the ASU research opportunity directory", provider: "Office of the University Provost, ASU",
        paid: "Varies by program. The directory itself pays nothing.", commitment: "Varies",
        eligibility: "Any ASU undergraduate",
        citizenship: "Varies by program",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "Always open",
        link: "https://provost.asu.edu/uresearch",
        note: "This is the master list. It links more than 40 unit-level research programs, including ones nobody talks about in W. P. Carey, plus the psychology, math, molecular sciences and earth and space programs. Read it once and pick three to email.",
      },
      {
        name: "Barrett honors research and thesis pathway", provider: "Barrett, The Honors College, ASU",
        paid: "Not stated. Check the site.", commitment: "Honors credit attached to a research experience, building toward the honors thesis or creative project.",
        eligibility: "Barrett students. Barrett says it works with every school at ASU to match students with research as early as their first year.",
        citizenship: "Not stated",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "Rolling. The thesis itself is usually started in junior year with a defense in senior year.",
        link: "https://barretthonors.asu.edu/academics/enhance-your-academic-experience/research",
        note: "The thesis is the reason to be in Barrett if you want research, because it forces you into a committee with faculty who then write your recommendation letters. The page names a coordinator, which is a faster route than the web form.",
      },
      {
        name: "ASU student employment and CareerLink research postings", provider: "Arizona State University",
        paid: "Hourly, varies by posting", commitment: "Usually 10 to 20 hours a week during the semester",
        eligibility: "Enrolled ASU students. Work-study eligibility widens what you can apply to.",
        citizenship: "International students on F-1 can hold on-campus jobs. Check the posting.",
        openWithoutCitizenship: "yes",
        noExperience: true,
        cycle: "Rolling. Most lab hiring happens in the two weeks before a semester starts.",
        link: "https://students.asu.edu/employment",
        note: "Paid undergraduate research assistant jobs are posted as ordinary student jobs, not as research programs. ASU has moved off Handshake to CareerLink, so older advice pointing you at Handshake is out of date. Search the words \"research assistant\" rather than browsing categories, and check weekly, because these fill in days.",
      },
    ],
  },
  {
    key: "pathways", name: "Built for first-generation and underrepresented students",
    blurb: "These exist because the usual route into research runs through people you already know, and most of our members do not have that.",
    items: [
      {
        name: "WAESO, the Western Alliance to Expand Student Opportunities (LSAMP)", provider: "National Science Foundation, alliance headquartered at ASU",
        paid: "Research stipends and conference travel are part of the model, but no amount is published anywhere we could verify. Check with your advisor.", commitment: "Mentored research with a STEM faculty member during the academic year, plus peer study groups.",
        eligibility: "Undergraduates from groups underrepresented in STEM at the 13 alliance institutions across Arizona, Utah and Colorado. ASU is the lead institution.",
        citizenship: "Not stated",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "Runs on the academic year. Ask early in the fall.",
        link: "https://www.nsf.gov/funding/opportunities/lsamp-louis-stokes-alliances-minority-participation",
        note: "ASU runs this alliance but its student-facing site at waeso.asu.edu no longer resolves in DNS, so there is nowhere online to apply. Go through a Fulton or College STEM advisor and ask who administers LSAMP now. The link here is the national NSF program page.",
      },
      {
        name: "HACU National Internship Program (HNIP)", provider: "Hispanic Association of Colleges and Universities",
        paid: "$18.50 an hour for undergraduates in 2026, $20.25 for graduate students", commitment: "Ten weeks in summer 2026, nine weeks in summer 2027, fifteen weeks for fall and spring sessions",
        eligibility: "Any race or ethnicity, all majors, minimum 2.0 GPA preferred, must have completed your first year.",
        citizenship: "Most federal placements require US citizenship, but the program explicitly encourages permanent residents, DACA students and anyone legally authorized to work in the US to apply.",
        openWithoutCitizenship: "yes",
        noExperience: true,
        cycle: "Four sessions a year. Spring 2027 priority deadline is November 20, 2026. Summer 2027 opens October 1, 2026 with a March 6, 2027 priority deadline.",
        link: "https://hacu.net/hnip/overview/",
        note: "The only paid national program on this list that names DACA students in writing. Placements are federal agencies, and several of them are research shops, so filter the open positions by agency rather than by job title.",
      },
      {
        name: "Leadership Alliance Summer Research Early Identification Program (SR-EIP)", provider: "The Leadership Alliance, a consortium of research universities",
        paid: "Fully paid. Stipend plus travel and housing, paid by the host institution. The amount varies by site.", commitment: "Eight to ten weeks in the summer",
        eligibility: "Rising sophomores, juniors and seniors with a 3.0 GPA or better who intend to pursue a PhD or MD-PhD. Not for people heading to law, business, clinical medicine or allied health.",
        citizenship: "US citizen, non-citizen national, or permanent resident with an I-551. F-1 visa holders, asylum seekers and refugees are not eligible.",
        openWithoutCitizenship: "no",
        noExperience: true,
        cycle: "Opens November 1 and closes in early February. The 2026 cycle opened November 1, 2025 and closed February 3, 2026.",
        link: "https://theleadershipalliance.org/summer-research-early-identification-program",
        note: "One application reaches every member university, which is why it is worth the effort. Prior research is preferred at some sites and not required at others, so read each site's page instead of assuming you are underqualified.",
      },
      {
        name: "Pathways to Science", provider: "Institute for Broadening Participation",
        paid: "Varies by listing", commitment: "Varies",
        eligibility: "Undergraduates, with a filter for programs aimed at underrepresented students",
        citizenship: "Varies by listing, and the database lets you filter for programs open to non-citizens",
        openWithoutCitizenship: "yes",
        noExperience: true,
        cycle: "Always open. Most summer listings post between October and January.",
        link: "https://www.pathwaystoscience.org/",
        note: "Use this instead of the NSF REU list when citizenship is a problem, because you can filter for programs that accept non-citizens. That filter does not exist on the NSF site.",
      },
    ],
  },
  {
    key: "national", name: "National summer programs",
    blurb: "Paid ten-week summers at labs and universities across the country, almost all of which decide in the winter for the following June.",
    items: [
      {
        name: "NSF Research Experiences for Undergraduates (REU)", provider: "National Science Foundation, hosted at universities and labs nationwide",
        paid: "Paid. Stipend, housing and travel are set by each individual site, so amounts vary.", commitment: "Usually ten weeks full time in the summer",
        eligibility: "Undergraduates enrolled in a degree program, including community college students. Each site sets its own class-standing rules.",
        citizenship: "US citizen, national, or permanent resident. This is an NSF-wide rule, not a site preference, and it excludes international and undocumented students from nearly every REU.",
        openWithoutCitizenship: "no",
        noExperience: true,
        cycle: "Sites post in the fall. Most deadlines land between January and early March for a June start.",
        link: "https://www.nsf.gov/funding/initiatives/reu",
        note: "Apply to eight or ten sites, not two. Many now take applications through NSF's ETAP portal at etap.nsf.gov, which lets one profile feed several applications. Sites explicitly want students whose own campus has no research program, which cuts against ASU applicants at ASU-hosted REUs.",
      },
      {
        name: "Science Undergraduate Laboratory Internships (SULI)", provider: "US Department of Energy, Office of Science, at the national laboratories",
        paid: "$650 a week, plus one round-trip travel reimbursement if you live more than 50 miles away and a housing allowance where the lab does not provide housing", commitment: "Ten consecutive weeks in summer, or sixteen weeks for a semester term",
        eligibility: "Full-time undergraduate, at least 18, 3.0 cumulative GPA, at least one completed semester, at least 6 STEM credit hours and 12 total credit hours. AP credit does not count.",
        citizenship: "US citizen or lawful permanent resident at the time of application, with proof required before you start.",
        openWithoutCitizenship: "no",
        noExperience: true,
        cycle: "Three terms a year. Spring 2027 applications are due September 30, 2026 at 5 p.m. ET. The summer term deadline is usually in January.",
        link: "https://science.osti.gov/wdts/suli",
        note: "The semester terms are far less competitive than summer and nobody applies to them. You can do SULI twice and apply up to four times, so a rejection is not the end. Permanent residents should contact the lab early because site access clearance takes time.",
      },
      {
        name: "SMART Scholarship for Service", provider: "US Department of Defense, listed by ASU's Office of National Scholarships Advisement",
        paid: "$25,000 to $38,000 a year in stipend depending on degree level, plus full tuition and paid summer internships at a DoD lab", commitment: "One year of employment at a DoD facility for every year of funding. Awards run one to five years.",
        eligibility: "18 or older, 3.0 cumulative GPA, enrolled at an accredited US college in a listed STEM discipline, and willing to take post-graduate DoD employment.",
        citizenship: "US citizen at the time of application. No exceptions.",
        openWithoutCitizenship: "no",
        noExperience: true,
        cycle: "Deadline in December each year",
        link: "https://onsa.asu.edu/scholarship/smart-scholarship-service-program",
        note: "This is a job offer wearing a scholarship's clothes, and the service commitment is real. ASU's ONSA office advises on the application and will read your essays, which is worth more than the official site. You also have to be able to hold a security clearance.",
      },
      {
        name: "Amgen Scholars", provider: "Amgen Foundation, hosted at 14 universities including Caltech, Columbia, Harvard, Howard, Stanford, UC Berkeley, UCLA and Yale",
        paid: "Housing, food and travel covered, with details set by each host. Symposium travel is fully funded.", commitment: "Eight to ten weeks in the summer, typically June through August",
        eligibility: "Sophomores, juniors and non-graduating seniors at accredited four-year US institutions with a 3.2 GPA or above who are interested in a PhD or MD-PhD.",
        citizenship: "US citizens and permanent residents only. International students are not eligible.",
        openWithoutCitizenship: "no",
        noExperience: true,
        cycle: "All hosts share an early February deadline, February 1 in the 2026 cycle. Decisions by the end of March.",
        link: "https://amgenscholars.com/us-program",
        note: "About 140 slots nationally, and you apply to each host separately, so treat it as 14 applications. The program says outright it takes students with no prior lab experience, which is unusual at this level of prestige.",
      },
      {
        name: "NIH Summer Internship Program (SIP)", provider: "National Institutes of Health, Intramural Research Program, Bethesda MD and other campuses",
        paid: "Paid. Stipends are set annually by education level and are not published on the program page. Check the site.", commitment: "Full time for the summer. The program states plainly that you cannot take summer classes or hold other obligations during work hours.",
        eligibility: "Enrolled at least half time in an accredited community college, college, university or graduate program, and 18 by September 30 of the program year.",
        citizenship: "US citizen or permanent resident. Permanent residents must be attending a US institution.",
        openWithoutCitizenship: "no",
        noExperience: true,
        cycle: "The Summer 2027 application opens mid-November 2026 and closes mid-February 2027. Reference letters get an extra week.",
        link: "https://www.training.nih.gov/research-training/pb/sip/",
        note: "NIH does not provide housing and Bethesda is expensive, so budget for that before you accept. Community college students are eligible, which almost no other program on this list allows. Contacting principal investigators directly before you apply is how most people actually get matched.",
      },
    ],
  },
  {
    key: "business", name: "Business and economics research",
    blurb: "The hardest bucket to fill, because business schools run almost no undergraduate research, so the real openings are at the Federal Reserve and the think tanks.",
    items: [
      {
        name: "Sophomore Career Exploration Program", provider: "Federal Reserve Bank of New York",
        paid: "Paid. Amount not published. Check the site.", commitment: "Ten weeks starting in early June, in one business area",
        eligibility: "Undergraduate sophomores. For the summer 2027 program, students expecting to graduate in December 2027 or spring 2028.",
        citizenship: "Not stated on the program page",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "Application window September 1 to September 28, 2026 for a June 2027 start.",
        link: "https://www.newyorkfed.org/careers/student-programs-and-internships/sophomore-career-exploration-program",
        note: "The deadline is two weeks from now and it is the earliest serious research-adjacent door open to a sophomore anywhere on this list. You need a resume and a transcript. Letters of recommendation are not read, so do not chase them.",
      },
      {
        name: "Undergraduate Summer Analyst Program", provider: "Federal Reserve Bank of New York",
        paid: "Paid. Amount not published. Check the site.", commitment: "Ten weeks starting in early June, project-based work in one business area with an assigned mentor",
        eligibility: "Undergraduate juniors. For the summer 2027 program, students expecting to graduate in December 2026 or spring 2027.",
        citizenship: "Not stated on the program page",
        openWithoutCitizenship: "unclear",
        noExperience: true,
        cycle: "Application window September 1 to October 5, 2026 for a June 2027 start.",
        link: "https://www.newyorkfed.org/careers/student-programs-and-internships/junior-summer-analyst-program",
        note: "The New York Fed says full-time Research Analysts are usually first met through these internships, so this is the audition for the two-year research job. Twenty days left as of mid-September.",
      },
      {
        name: "Research Analyst Program", provider: "Federal Reserve Bank of New York, Research and Statistics Group",
        paid: "Full-time salaried position with a 401(k) match, commutation assistance and tuition reimbursement", commitment: "Two years full time, starting the summer after you graduate",
        eligibility: "Graduating college seniors with a background in economics, mathematics or statistics and experience in R, Stata, Matlab, Python or similar. Roughly twenty hired a year.",
        citizenship: "Not stated on the program page",
        openWithoutCitizenship: "unclear",
        noExperience: false,
        cycle: "Applications for a summer 2027 start ran August 24 to September 14. That window closed yesterday, so the next one opens in late August 2027.",
        link: "https://www.newyorkfed.org/research/careers/research_analysts/index.html",
        note: "This is the standard route into a top economics PhD and many RAs co-author published papers. The window is three weeks long and closes before most people start thinking about it, which is the whole reason to know the date now. Resume and transcript only, and letters of recommendation are explicitly not considered.",
      },
      {
        name: "Federal Reserve Board summer internships", provider: "Board of Governors of the Federal Reserve System, Washington DC",
        paid: "Paid, with salary set by years of higher education completed. Exact rates are not published. Check the site.", commitment: "Ten to twelve weeks starting late May or early June",
        eligibility: "Currently enrolled undergraduate or graduate student returning to study after the internship. Selection weighs coursework, recommendations and sometimes GPA.",
        citizenship: "US citizens only. The Board states this outright.",
        openWithoutCitizenship: "no",
        noExperience: true,
        cycle: "Most postings go up in September for the following summer. Virtual interviews run through the fall and offers are finalized by December.",
        link: "https://www.federalreserve.gov/careers-internships.htm",
        note: "Offers are done by December, so a spring application is not late, it is pointless. Each posting lists its own requirements, so read them individually rather than assuming one generic application exists.",
      },
      {
        name: "Fed Econ Jobs", provider: "Federal Reserve System, all 12 district banks plus the Board",
        paid: "Varies by location", commitment: "Research assistant roles are generally two-year full-time positions after graduation",
        eligibility: "Varies by district. Preferred coursework and technical skills are listed per location.",
        citizenship: "Varies by district",
        openWithoutCitizenship: "unclear",
        noExperience: false,
        cycle: "Most hiring happens in the fall. Atlanta runs September 1 to October 3, Boston August 21 to September 30, Philadelphia September through March, Minneapolis late winter or early spring.",
        link: "https://www.fedeconjobs.org/",
        note: "Everyone applies to New York and nobody applies to Kansas City or Cleveland, and the work is the same. Thirteen locations means thirteen shots, and the windows are staggered enough that missing one does not end your year.",
      },
      {
        name: "AEA Summer Training and Scholarship Program", provider: "American Economic Association, hosted at American University",
        paid: "$3,250 stipend on completion for US citizens, permanent residents and DACA students whose visa allows the payment. The package also covers tuition, fees, living expenses, transportation, books and excursions.", commitment: "Two-month intensive residential program, June 1 to July 24 in the 2026 run, earning up to 12 college credits",
        eligibility: "Undergraduates without a PhD in economics. Ideally a 3.0 GPA in relevant courses. You need micro, macro and Calculus 1 at a minimum because the program is heavily mathematical.",
        citizenship: "Open to all. International students may apply and be admitted, but receive no stipend or scholarship and are responsible for costs estimated at just over $25,000. DACA students do receive the $3,250.",
        openWithoutCitizenship: "yes",
        noExperience: true,
        cycle: "Applications close January 31. The 2026 portal closed February 1, 2026 and the page is still showing that past cycle.",
        link: "https://www.aeaweb.org/about-aea/committees/aeasp",
        note: "Running since 1974 and the single best-known feeder into economics PhD programs for underrepresented students. It is training, not a research placement, so it fixes the math gap that keeps W. P. Carey students out of RA jobs. Anyone can apply regardless of ethnicity.",
      },
      {
        name: "Economics research assistantships and internships list", provider: "Department of Economics, W. P. Carey School of Business, ASU",
        paid: "Varies by employer", commitment: "Most are one to two year full-time positions after you graduate",
        eligibility: "Aimed at students heading for a PhD or a research career. Brookings and AEI also take current upperclassmen for internships.",
        citizenship: "Varies by employer",
        openWithoutCitizenship: "unclear",
        noExperience: false,
        cycle: "Varies. Most predoc and RA postings appear between August and October.",
        link: "https://wpcarey.asu.edu/economics-degrees/research-assistantships-internships",
        note: "ASU's own curated list, pointing at the Fed, the IMF, Stanford GSB, Columbia, NBER, Brookings, AEI, Urban, Heritage, RAND, the Department of Labor and USDA Economic Research Service. Read it as a senior-year list, not a sophomore one, because most entries require a completed bachelor's.",
      },
      {
        name: "PREDOC opportunities board", provider: "Pathways to Research and Doctoral Careers (PREDOC)",
        paid: "Paid full-time positions. Amounts are set per posting.", commitment: "One to two years full time",
        eligibility: "Every position requires a bachelor's degree by the start date, so this is for graduating seniors.",
        citizenship: "Varies by posting",
        openWithoutCitizenship: "unclear",
        noExperience: false,
        cycle: "Postings concentrate in August through October for the following summer. Stanford GSB closed October 16, 2026 and Opportunity Insights October 1, 2026 in the current cycle. Many are rolling.",
        link: "https://predoc.org/opportunities",
        note: "This is where predoc jobs at Harvard Business School, MIT Blueprint Labs, Yale and Opportunity Insights get posted, and it is not a place for current undergraduates to find summer work. Bookmark it in your junior year and apply the September you graduate.",
      },
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
