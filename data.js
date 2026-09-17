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
    coffeeChat: "",              // <- a Calendly or Cal.com link, OR just an email
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
    coffeeChat: "renars.melnikovs@gmail.com",
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
  { name: "", role: "VP of Internal Affairs",         major: "", gradYear: "", photo: "", linkedin: "", coffeeChat: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Finance",                  major: "", gradYear: "", photo: "", linkedin: "", coffeeChat: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Marketing",                major: "", gradYear: "", photo: "", linkedin: "", coffeeChat: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Membership",               major: "", gradYear: "", photo: "", linkedin: "", coffeeChat: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Professional Development", major: "", gradYear: "", photo: "", linkedin: "", coffeeChat: "", statement: "", story: "", photos: [] },
  { name: "", role: "VP of Community Service",        major: "", gradYear: "", photo: "", linkedin: "", coffeeChat: "", statement: "", story: "", photos: [] },
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

  /* ---- Added 2026-09-15. These four cut across the five original
     fields: they are employer types more than they are work styles,
     which is why the quiz still resolves to the original five. ---- */
  {
    key: "ai",
    name: "AI & Machine Learning",
    blurb: "The newest field on this board and the fastest moving. A few seats need a computer science degree. Most of them need one language, one project you can explain, and a business head.",
    looksFor: ["Python or SQL", "One project you shipped", "Most majors welcome"],
    typical: "Computer Science and Data Science for the model building. Business Data Analytics, CIS, Finance, Accountancy and Management for the product, risk, audit and adoption work, which is the larger half of the hiring.",
    quizResult: "Your answers point at AI and machine learning. You went toward the problem nobody has a template for yet, you are willing to learn a tool properly rather than talk about it, and you would rather be early to something unfinished than late to something settled. Read the field honestly before you commit: the roles that say machine learning engineer want a real quantitative background, and the roles that say AI product, AI risk or AI governance want somebody who can hold a room and read a contract. Both are on this list. Only one of them is being fought over by every CS student at Fulton.",
    steps: [
      "Build one thing with an API and put it somewhere a stranger can use it. A recruiter can open that in thirty seconds, and almost nobody applying to these roles has one.",
      "Decide which half you are going for before you write a resume. Say model, say pipeline, or say governance. All three are hiring and they screen for different people.",
      "Apply in September. Most of the Summer 2027 requisitions here opened in August and several close in the last week of September, before the ASU career fairs have even finished.",
    ],
  },
  {
    key: "health",
    name: "Healthcare & Life Sciences",
    blurb: "Hospital systems, health plans and genomics labs. The largest employment base in Phoenix, and the one where business students most often assume they are not wanted.",
    looksFor: ["Any business major", "Excel and data comfort", "Applies in winter, not fall"],
    typical: "Finance, Accountancy, Supply Chain, Business Data Analytics, Management and Marketing. Almost every seat on this list sits outside patient care.",
    quizResult: "Your answers point at healthcare and life sciences. You want the work to matter to somebody, you are fine being the person who runs the numbers rather than the person in the room with the patient, and a name your family recognises is worth something to you. Banner Health is the largest private employer in Arizona and most of what it needs is accounting, supply chain, HR and analytics. You do not need a clinical degree to get in.",
    steps: [
      "Stop reading the word hospital as the word clinical. Banner, Mayo, HonorHealth and AZ Blue all run finance, procurement, HR, audit and analytics teams, and those are the teams hiring you.",
      "Apply in January and February, not September. Every health system on this board posts its summer business internship in the winter, which is the opposite of the accounting calendar you have been trained on.",
      "Learn what a payer is and what a provider is before your first interview. A hospital and a health plan make money in opposite directions, and saying so is the fastest way to sound like you did the reading.",
    ],
  },
  {
    key: "public",
    name: "Government & Public Sector",
    blurb: "Cities, the county, the state and the federal government. Published pay, published deadlines, and far fewer applicants per seat than any private employer on this board.",
    looksFor: ["Any business major", "Citizenship rules vary", "Published pay rates"],
    typical: "Accountancy, Finance, Economics, Supply Chain, Business Administration, CIS and Public Service and Public Policy. The City of Phoenix names those majors in writing.",
    quizResult: "Your answers point at government and public sector. You want to know the rate before you apply, you would rather be measured against a published standard than a partner's mood, and the idea that the work belongs to everyone in the state appeals to you. This is also the only field on the board where the employer tells you the hourly rate on the job posting.",
    steps: [
      "Settle the citizenship question first. Federal roles are almost always US citizens only, ADOT's Transportation Intern Program requires citizenship or permanent residency, and most city and state roles do not.",
      "Go to the ASU Meet the Firms night on September 21. The Arizona Auditor General lists it on its own careers page, which means a recruiter from the state's audit office will be standing there.",
      "Apply to the named programme, not the job board. The City of Phoenix Finance Summer Internship and Maricopa County's MCLEAPS are real front doors. Keyword searching a NEOGOV or Workday board for intern mostly returns nothing.",
    ],
  },
  {
    key: "startups",
    name: "Startups & Nonprofits",
    blurb: "Smaller employers, mission-driven employers, and remote programmes. They hire late, they hire on rolling deadlines, and they care whether you can do the work.",
    looksFor: ["No fall calendar", "Any year, any major", "Rolling deadlines"],
    typical: "Any major and any year. These employers screen on what you can actually do, not on a GPA cut or a 150-hour plan.",
    quizResult: "Your answers point here. Every other field on this board runs a fall calendar, and a fall calendar has one brutal property: miss it and you wait a year. This is the part of the board that does not work that way. Smaller companies post when a seat opens. Nonprofits post when a grant lands. Remote programmes run their own windows. You will get less brand and more range, you will often have to write the first email yourself, and nobody is going to come to campus to find you. That is the trade, and for a freshman, a late starter, or someone who wants breadth before they pick, it is usually the better one.",
    steps: [
      "Stop waiting for a posting. Most of these seats are filled by someone who emailed a real person before the job existed. Find the name, say what you would do in the first month, attach nothing.",
      "Take the nonprofit finance work seriously. A development office reconciling restricted funds, filing a 990 and closing a month is real accounting, and students skip it because the logo is not famous. Recruiters do not skip it.",
      "Set a weekly slot for this rather than a panic week. Rolling means a seat can open any Tuesday, and the person who checked on Tuesday gets it.",
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
    fit: { accounting: 3, consulting: 2, finance: 2, tech: 1, engineering: 1 , ai: 1, health: 2, public: 3, startups: 2 },
    note: "The most direct path on this board. Your 150-hour plan and your CPA eligibility date will come up in an interview before your GPA does." },
  { key: "finance", name: "Finance", group: "W. P. Carey",
    fit: { finance: 3, accounting: 2, consulting: 2, tech: 1, engineering: 1 , ai: 2, health: 2, public: 2, startups: 2 },
    note: "Opens the widest set of doors here, which also means the most competition. One model you can actually defend separates you from the rest of the pile." },
  { key: "bda", name: "Business Data Analytics", group: "W. P. Carey",
    fit: { tech: 3, consulting: 2, finance: 2, accounting: 1, engineering: 2 , ai: 3, health: 2, public: 2, startups: 2 },
    note: "Underused. Firms are short of people who can query the data and then explain it to a room, and you are being trained to do both." },
  { key: "scm", name: "Supply Chain Management", group: "W. P. Carey",
    fit: { tech: 3, consulting: 2, finance: 1, accounting: 1, engineering: 2 , ai: 2, health: 2, public: 2, startups: 2 },
    note: "Phoenix is a supply chain town. Freeport, Honeywell, Intel and Republic all hire this into operations teams that far fewer students apply to." },
  { key: "cis", name: "Computer Information Systems", group: "W. P. Carey",
    fit: { tech: 3, consulting: 3, finance: 1, accounting: 1, engineering: 2 , ai: 3, health: 2, public: 2, startups: 2 },
    note: "The door into technology consulting that does not require CPA eligibility. EY and PwC both recruit this major directly." },
  { key: "management", name: "Management", group: "W. P. Carey",
    fit: { consulting: 2, finance: 2, tech: 1, accounting: 1, engineering: 1 , ai: 1, health: 2, public: 2, startups: 2 },
    note: "Broad by design, so the specificity has to come from you. Pick a field, take the coursework that proves you meant it, and say so out loud." },
  { key: "marketing", name: "Marketing", group: "W. P. Carey",
    fit: { consulting: 2, finance: 1, tech: 2, accounting: 1, engineering: 1 , ai: 2, health: 1, public: 1, startups: 3 },
    note: "Not the usual route to these roles, but customer and go-to-market work inside the consulting firms is real. Lead with analytics you can actually do." },
  { key: "economics", name: "Economics", group: "W. P. Carey",
    fit: { finance: 3, consulting: 2, tech: 1, accounting: 1, engineering: 1 , ai: 2, health: 1, public: 3, startups: 2 },
    note: "Reads well for finance and for the strategy arms. Add Excel and SQL, because the degree on its own does not prove either one." },
  { key: "entrepreneurship", name: "Business Entrepreneurship", group: "W. P. Carey",
    fit: { consulting: 2, finance: 2, tech: 1, accounting: 1, engineering: 1 , ai: 2, health: 1, public: 1, startups: 3 },
    note: "You are already practised at talking to strangers about an idea. That is most of what makes a good client-facing intern." },
  { key: "business", name: "Business Administration or other Carey", group: "W. P. Carey",
    fit: { consulting: 2, accounting: 2, finance: 2, tech: 2, engineering: 1 , ai: 2, health: 2, public: 2, startups: 2 },
    note: "Flexible, which cuts both ways. Every field here will take you and none of them will assume anything, so you have to arrive specific." },

  { key: "cs", name: "Computer Science", group: "Fulton and the sciences",
    fit: { tech: 3, consulting: 2, finance: 1, accounting: 1, engineering: 3 , ai: 3, health: 1, public: 2, startups: 3 },
    note: "Intel, Amex and Schwab all hire this into technology teams here in the Valley, and the business firms want you for technology consulting." },
  { key: "datascience", name: "Data Science or Statistics", group: "Fulton and the sciences",
    fit: { tech: 3, finance: 2, consulting: 2, accounting: 1, engineering: 2 , ai: 3, health: 2, public: 2, startups: 2 },
    note: "The most transferable technical major on this board. Tax and audit are now tooling-heavy, so even the accounting firms are competing for it." },
  { key: "ie", name: "Industrial or Systems Engineering", group: "Fulton and the sciences",
    fit: { tech: 3, consulting: 2, finance: 1, accounting: 1, engineering: 3 , ai: 2, health: 2, public: 2, startups: 2 },
    note: "Operations and supply chain teams are built out of this major, and PwC runs Engineer Your Career specifically for Fulton students." },
  { key: "engineering", name: "Another engineering major", group: "Fulton and the sciences",
    fit: { tech: 3, consulting: 2, finance: 1, accounting: 1, engineering: 3 , ai: 2, health: 2, public: 2, startups: 2 },
    note: "Do not assume a business board is closed to you. The operations roles here take engineers, and consulting recruits them on purpose." },

  { key: "polisci", name: "Political Science or Public Policy", group: "Other majors",
    fit: { consulting: 2, finance: 2, tech: 1, accounting: 1, engineering: 1 , ai: 1, health: 1, public: 3, startups: 2 },
    note: "Structured argument is the actual job in consulting. The gap to close is quantitative, and two courses close most of it." },
  { key: "comm", name: "Communication or Journalism", group: "Other majors",
    fit: { consulting: 2, finance: 1, tech: 2, accounting: 1, engineering: 1 , ai: 1, health: 1, public: 2, startups: 3 },
    note: "You can already do the part most business students are worst at. Pair it with one hard skill and it stops being a liability and starts being an edge." },
  { key: "psych", name: "Psychology or Sociology", group: "Other majors",
    fit: { consulting: 2, finance: 1, tech: 2, accounting: 1, engineering: 1 , ai: 2, health: 3, public: 2, startups: 2 },
    note: "The human capital and change management practices inside the consulting firms hire this. Name the practice you want and the question goes away." },
  { key: "other", name: "Another major", group: "Other majors",
    fit: { consulting: 2, accounting: 2, finance: 2, tech: 2, engineering: 2 , ai: 2, health: 2, public: 2, startups: 2 },
    note: "The chapter is open to everyone and so is this board. Pick the field that sounds like you. The rest of it is coursework and reps." },
  { key: "undecided", name: "Still deciding", group: "Other majors",
    fit: { consulting: 2, accounting: 2, finance: 2, tech: 2, engineering: 2 , ai: 2, health: 2, public: 2, startups: 2 },
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
      { label: "Making the numbers work", detail: "The file everyone else ends up pulling their figures out of.", w: { finance: 3, accounting: 1 } },
      { label: "Checking the work", detail: "Because somebody has to, and you would rather it was you.", w: { accounting: 3 } },
      { label: "Wrangling the data", detail: "Getting it out of four places and into one usable shape.", w: { tech: 3 } },
      { label: "Building the thing itself", detail: "Somebody has to make the prototype actually work.", w: { engineering: 3, tech: 1 } },
    ],
  },
  {
    q: "Pick the week you would rather have.",
    options: [
      { label: "Four meetings, three cities, and the plan keeps changing", detail: "High contact, high pace, nothing settled until the day it ships.", w: { consulting: 3 } },
      { label: "One clear task, one right answer, finished by Friday", detail: "A defined scope and a finish line you can see from here.", w: { accounting: 3 } },
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
      { label: "I want the rule and the number it gives me", detail: "Both, and I want to know which one moved.", w: { finance: 2, accounting: 2 } },
      { label: "I want the spec and the tolerance", detail: "Tell me what it has to do and how far off it is allowed to be.", w: { engineering: 3 } },
    ],
  },
  {
    q: "Which of these is most true about you and numbers?",
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
      { label: "At a desk, head down, working through a stack", detail: "Nobody interrupting, a deadline, and steady progress.", w: { accounting: 3 } },
      { label: "Somewhere a decision about money is being made", detail: "Close to the thing that decides what happens next.", w: { finance: 3 } },
      { label: "Two monitors and nobody talking to me", detail: "Long uninterrupted blocks are how you do your best work.", w: { tech: 3 } },
      { label: "On a floor where something is physically being made", detail: "Steel toes, ear protection, and a process you can watch run.", w: { engineering: 3 } },
    ],
  },
  {
    q: "Which would you rather be genuinely good at by the time you graduate?",
    options: [
      { label: "Walking into a messy problem and giving it a shape", detail: "Structure the mess, then present it. Consulting calls this casing.", w: { consulting: 3 } },
      { label: "Checking work against a standard until it is exactly right", detail: "The tooling accounting firms actually run on, audit and tax software.", w: { accounting: 3 } },
      { label: "Building the model that says what happens next", detail: "A three-statement financial model, built from scratch, every assumption yours.", w: { finance: 3 } },
      { label: "Getting answers out of data yourself", detail: "SQL first, then Python, instead of asking somebody for an extract.", w: { tech: 3 } },
      { label: "Designing or testing something physical", detail: "CAD, or a lab instrument you can operate properly.", w: { engineering: 3, tech: 1 } },
    ],
  },
  {
    q: "How much does a formal qualification matter to you?",
    options: [
      { label: "A lot, I want a qualification nobody can argue with", detail: "In accounting that is the CPA, and it takes years.", w: { accounting: 3 } },
      { label: "Only if it proves I can judge risk and value", detail: "That is the CFA, which is the markets credential rather than the accounting one.", w: { finance: 3 } },
      { label: "Not much, I would rather have the experience", detail: "What you have done beats what you have passed.", w: { consulting: 2, tech: 2 } },
      { label: "I would rather point at things I have built", detail: "A portfolio is my credential.", w: { tech: 3 } },
      { label: "The engineering licence route", detail: "The FE exam now and the PE later, which is its own track entirely.", w: { engineering: 3 } },
    ],
  },
  {
    q: "What kind of feedback do you want from a manager?",
    options: [
      { label: "Tell me how the room read me", detail: "Delivery is half the job.", w: { consulting: 3 } },
      { label: "Tell me whether it is correct", detail: "Right or not right. I will take it from there.", w: { accounting: 3 } },
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
      { label: "Negotiation", detail: "How to get to a deal both sides will sign.", w: { consulting: 3 } },
      { label: "How tax and regulation actually work", detail: "The rules that decide what money is allowed to do.", w: { accounting: 3 } },
      { label: "Investing, risk and what things are worth", detail: "Pricing, markets and what can go wrong.", w: { finance: 3 } },
      { label: "How data is stored and queried", detail: "Databases, and getting a straight answer out of a messy one.", w: { tech: 3 } },
      { label: "How heat, force and materials behave", detail: "The physics that decides whether a design survives contact with reality.", w: { engineering: 3 } },
    ],
  },
  {
    q: "How do you want your year shaped?",
    options: [
      { label: "Whatever the client needs this month", detail: "Unpredictable, but never boring.", w: { consulting: 3 } },
      { label: "Steady, with one intense stretch I can see coming", detail: "Accounting calls it busy season. Hard for a while, then it lifts.", w: { accounting: 3, engineering: 1 } },
      { label: "A rhythm that repeats every month and quarter", detail: "Built around reporting dates that do not move.", w: { finance: 3, accounting: 1 } },
      { label: "Project by project, on my own cadence", detail: "Ship it, pick up the next one.", w: { tech: 3 } },
      { label: "Around a build schedule and a launch date", detail: "A date that physically cannot move.", w: { engineering: 3 } },
    ],
  },
  {
    q: "Five years out, what is the good version of it?",
    options: [
      { label: "The person who can walk into any problem cold", detail: "Range is the asset.", w: { consulting: 3 } },
      { label: "Qualified, credible, hard to replace", detail: "Depth, and a credential standing behind it.", w: { accounting: 3 } },
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
      { role: "Summer Scholar, AI Innovation", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Recruiting closes 1 December 2026",
        link: "https://apply.deloitte.com/en_US/careers/JobDetail/Consultative-Offerings-Summer-Scholar-AI-Innovation/364696",
        note: "The only Deloitte AI posting with no major requirement and no GPA floor written into it. Deloitte calls the job founders in training and asks for working prototypes, so a marketing or management student who has actually built something is in scope here." },
      { role: "Summer Scholar, Data & AI Solutions Engineering", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Recruiting closes 1 November 2026",
        link: "https://apply.deloitte.com/en_US/careers/JobDetail/Consultative-Offerings-Summer-Scholar-Data-AI-Solutions-Engineering/363475",
        note: "Read the major list before you self-reject. Economics, Finance and Business Analytics are named alongside Computer Science, and the bar is a 3.0 plus coursework in SQL or Python. Up to fifty percent travel, and no sponsorship now or later." },
      { role: "Analyst, Data & AI Solutions Engineering", sector: "ai", level: "Senior", season: "Full time after graduation", deadline: "Recruiting closes 1 November 2026",
        link: "https://apply.deloitte.com/en_US/careers/JobDetail/Consultative-Offerings-Analyst-Data-AI-Solutions-Engineering/361306",
        note: "This is the full-time version of the Summer Scholar seat and it is the honest option for a senior who never got the internship. It wants prior internship or project work in analytics or software, not just the degree." },
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
      { role: "Assurance, Data and Intelligence Delivery, 360 Careers Intern", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Rolling, two applications per six months",
        link: "https://usearlycareers.ey.com/job/phoenix/usa-assurance-data-and-intelligence-delivery-360-careers-intern-summer-2027/39053/100310764336",
        note: "Phoenix is the first of thirteen cities on this requisition, which makes it the rare AI-adjacent seat on this board you can take without moving. It names Accounting and Finance majors ahead of Data Science, wants a 3.0, and has no sponsorship." },
      { role: "Consulting, Technology Consulting Intern", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Rolling, two applications per six months",
        link: "https://usearlycareers.ey.com/job/irvine/usa-consulting-technology-consulting-intern-summer-2027/39053/100310763952",
        note: "You do not pick AI and Data when you apply, you get aligned to it during interviews, so say the words out loud in the first conversation. Twenty cities are listed and Phoenix is not one of them, so treat this as a summer away." },
      { role: "Consulting, Risk Technology Intern", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Rolling, two applications per six months",
        link: "https://usearlycareers.ey.com/job/atlanta/usa-consulting-risk-technology-intern-summer-2027/39053/100310764176",
        note: "The clearest AI governance job written for an undergraduate anywhere on this board. The requisition asks you to assess the risks AI presents to clients, and it wants information systems and MIS majors rather than engineers." },
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
      { role: "Data & Analytics Technology Consulting Intern", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Closes 26 September 2026",
        link: "https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/IL-Rosemont/Data---Analytics-Technology-Consulting-Intern---Summer-2027_759687WD",
        note: "PwC files this one under the specialism Data, Analytics and AI, which is the closest thing the firm has to an AI internship title. Nine cities, none of them Phoenix, and the requisition closes on 26 September." },
      { role: "Technology Risk Consulting Intern", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Closes 26 September 2026",
        link: "https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/IL-Rosemont/Technology-Risk-Consulting-Intern---Summer-2027_757256WD",
        note: "Technology, data and cyber risk through governance and controls, which is where the AI governance work actually lands inside a Big Four firm. Fourteen cities and a hard 26 September close, so this is a this-month decision." },
      { role: "Tax Innovation Delivery Experience, Product Management Intern", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Closes 26 September 2026",
        link: "https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/IL-Rosemont/Tax-Innovation-Delivery-Experience--TIDE----Product-Management---Intern---Summer-2027_756419WD",
        note: "A product management seat inside Tax, which is where the firm is automating the work an accountant used to do by hand. Take this if you want to build the tool rather than use it, and note it pairs with a software engineering version of the same req." },
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
      { role: "Technology Assurance Intern", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Rolling, two active applications maximum",
        link: "https://www.kpmguscareers.com/jobdetail/?jobId=137250",
        note: "The requisition lists artificial intelligence first among the tools you will audit with, ahead of Alteryx, SQL and Power BI. It wants Management Information Systems or Accounting Information Systems, and the six cities do not include Phoenix." },
      { role: "AI roles across the firm", sector: "ai", level: "Any", season: "Year-round", deadline: "Rolling",
        link: "https://www.kpmguscareers.com/job-search/?keyword=artificial%20intelligence",
        note: "KPMG has no internship with AI in the title, so use this view to see where the work actually sits before you pick a practice. Use the keyword parameter, not keywords, or the filter is silently ignored and you get all 781 jobs." },
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
      { role: "AI roles across the firm", sector: "ai", level: "Any", season: "Year-round", deadline: "Rolling",
        link: "https://www.schwabjobs.com/search-jobs?k=AI",
        note: "Schwab has no AI internship. Its AI teams are in Southlake, Austin and San Francisco, with one AI and MLOps data engineering req listing Phoenix, so treat Schwab as a place you convert into rather than start at." },
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
      { role: "Campus Undergraduate Summer Internship, 2027 AI Engineer, Enterprise Technology Services", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Posted 17 August 2026, rolling",
        link: "https://careers.americanexpress.com/en/sites/CX_1/jobs?keyword=Campus%20Undergraduate%20AI%20Engineer&location=Phoenix,%20AZ,%20United%20States",
        note: "The strongest AI internship in the metro, and it is not in New York. Amex builds its AI in Phoenix, so the same search returns a wall of senior agentic AI reqs sitting in the office you would be sitting in." },
      { role: "Campus Undergraduate Summer Internship, 2027 Data Engineer, Enterprise Technology Services", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Posted 1 September 2026, rolling",
        link: "https://careers.americanexpress.com/en/sites/CX_1/jobs?keyword=Campus%20Undergraduate%20Summer%20Internship%20Data%20Science&location=Phoenix,%20AZ,%20United%20States",
        note: "Nobody builds a model without this job existing first. It takes Business Data Analytics and CIS students that the AI Engineer posting will not, and it sits in the same Phoenix building." },
      { role: "Campus Undergraduate Summer Internship, 2027 Data Analytics, Enterprise Technology Services", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Posted 1 September 2026, rolling",
        link: "https://careers.americanexpress.com/en/sites/CX_1/jobs?keyword=Campus%20Undergraduate%20Summer%20Internship%20Data%20Science&location=Phoenix,%20AZ,%20United%20States",
        note: "The same search view carries this one, the Data Engineer req and the graduate versions of both. Apply to the whole cluster in one sitting rather than picking the one with the nicest title." },
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
      { role: "Technology Intern, Data Science and Analytics", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Rolling, the class closes in October",
        link: "https://ntrs.wd1.myworkdayjobs.com/northerntrust/job/Chicago-IL/Technology-Intern---Data-Science-and-Analytics_R160865-1",
        note: "Chicago only. Northern Trust runs a 25 seat summer class and every technology seat in it is in Chicago, so the data science route here costs you a summer away even though the firm has a Tempe office." },
      { role: "Enterprise Chief Operations Office Intern, Tempe", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Closes 9 October 2026",
        link: "https://ntrs.wd1.myworkdayjobs.com/northerntrust/job/Tempe-AZ/Enterprise-Chief-Operations-Office-Intern---Tempe_R160765-1",
        note: "The one Tempe seat in the whole summer class, and the operations side is where automation and AI adoption work lands at a custody bank. You need a 3.0 and a graduation date between December 2027 and summer 2028." },
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
      { role: "Artificial Intelligence and Machine Learning, Summer 2027 Intern", sector: "ai", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://ibqbjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Honeywell/job/155522",
        note: "Filed with United States as the location, like the rest of Honeywell's 2027 class, which means your city is settled at offer and not at application. Say Phoenix out loud in the first recruiter call or you will end up somewhere else." },
      { role: "Information Systems, IT, Cyber Engineer and Data Science, Summer 2027 Intern", sector: "ai", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://ibqbjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Honeywell/jobs?keyword=Summer%202027%20Intern",
        note: "Honeywell posts every one of these twice, once open and once marked US Person Required. Apply to the open version unless you can clear export control, because the gated one is law and not a preference an interview can move." },
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
      { role: "Software Engineering Intern, Bachelor's", sector: "ai", level: "Sophomore", season: "Summer 2027", deadline: "Rolling, no close date posted",
        link: "https://intel.wd1.myworkdayjobs.com/External/job/US-Oregon-Hillsboro/Software-Engineering---Intern--Bachelor-s_JR0286834",
        note: "The web address says Hillsboro but Phoenix is one of five listed sites, so an Arizona filter hides it. This is the route into Intel's AI software work that does not require you to leave the Valley." },
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

  /* ---- AI, healthcare, government and startups, added 2026-09-15.
     Every link fetched and verified before it was written down. ---- */

  {
    company: "Axon", sector: "startups", location: "Scottsdale, AZ",
    careersUrl: "https://www.axon.com/careers",
    roles: [
      { role: "Leadership Development Internship 2027", level: "Junior", season: "Summer 2027", deadline: "Open now",
        link: "https://job-boards.greenhouse.io/axontalentcommunity/jobs/7798167003",
        note: "Ten to twelve weeks in Phoenix with placements across finance, corporate strategy, product, sales and people ops, so it is not an engineering programme despite the company. One posting carries a Render ATL conference prefix, which is a tagging quirk and not a separate role." },
      { role: "Leadership Development Program 2027", sector: "ai", level: "Senior", season: "Post-graduation", deadline: "Open now",
        link: "https://job-boards.greenhouse.io/axon/jobs/7808258003",
        note: "The full-time version of the internship. Axon builds real machine learning products in Scottsdale, so this is the closest thing to an AI employer headquartered in the metro." },
      { role: "2027 US Electrical Engineering Internship", sector: "engineering", level: "Any", season: "Summer 2027", deadline: "Open now",
        link: "https://job-boards.greenhouse.io/axontalentcommunity/jobs/7837252003",
        note: "Scottsdale based hardware work. Axon has no AI titled internship despite its machine learning teams, so this and the leadership programme are the two real doors in." },
    ],
  },
  {
    company: "NVIDIA", sector: "ai", location: "Santa Clara, CA",
    careersUrl: "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/",
    roles: [
      { role: "Solutions Architecture Intern", level: "Any", season: "Summer 2027", deadline: "Posted 11 September 2026, rolling",
        link: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/Solutions-Architecture-Intern---Summer-2027_JR2025245",
        note: "The customer-facing seat at NVIDIA, so presentation and communication are listed alongside Python rather than under it. It takes Math, Physics and Data Science majors, not only computer science, and it is the least fought over role on their board." },
      { role: "University recruiting programs", level: "Any", season: "Summer 2027", deadline: "Postings open through the fall",
        link: "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/",
        note: "Only three Summer 2027 internships are live today and two of them are overseas, so this is a watch-and-wait employer rather than an apply-today one. Nothing in Arizona now or historically." },
    ],
  },
  {
    company: "Arizona State University", sector: "ai", location: "Tempe, AZ",
    careersUrl: "https://studentemployment.asu.edu/students/explore-opportunities",
    roles: [
      { role: "AI Acceleration student internships", level: "Any", season: "School year", deadline: "Postings go up year-round",
        link: "https://studentemployment.asu.edu/students/explore-opportunities",
        note: "The cheapest AI experience you can get, because it is on campus and costs you no relocation and no summer. ASU's own AI team hires students to build and ship tools other students use, and the work is real enough that the CIO reviews it." },
      { role: "AI Acceleration Student Innovation Challenge", level: "Any", season: "Spring", deadline: "Kicks off in January",
        link: "https://tech.asu.edu/features/asu-students-unveil-ai-tools-improve-campus-life",
        note: "Sixteen students pitch, teams of four build, and the finalists present to ASU leadership in April. It is not a job, it is the thing you point at in an interview when somebody asks what you have built." },
      { role: "University AI initiatives and staff postings", level: "Any", season: "Year-round", deadline: "Rolling",
        link: "https://ai.asu.edu/",
        note: "Start here to work out which ASU unit runs the AI you actually care about, then search that unit by name on the staff job board. The university posts hourly student roles and full staff roles on two different systems." },
    ],
  },
  {
    company: "Anthropic", sector: "ai", location: "Remote-friendly, United States",
    careersUrl: "https://www.anthropic.com/careers",
    roles: [
      { role: "Anthropic Fellows Program, Economics and Policy", level: "Senior", season: "Four months, next cohort January 2027", deadline: "Rolling",
        link: "https://job-boards.greenhouse.io/anthropic/jobs/5183053008",
        note: "Be honest with yourself about this one. It is four months full time at 3,850 dollars a week, so you would take a semester off, and the output expected is a public paper. The economics and policy track is the one an economics or finance student can actually reach." },
      { role: "Anthropic Fellows Program, ML Systems and Reinforcement Learning", level: "Senior", season: "Four months, next cohort January 2027", deadline: "Rolling",
        link: "https://job-boards.greenhouse.io/anthropic/jobs/5183051008",
        note: "The program says it funds promising technical talent regardless of previous experience, and over eighty percent of one earlier cohort published. That is the bar, and it is a research bar, not an internship one." },
    ],
  },
  {
    company: "Banner Health", sector: "health", location: "Phoenix, AZ",
    careersUrl: "https://bannerhealth.wd108.myworkdayjobs.com/Careers",
    roles: [
      { role: "Business Internship Program, Summer", level: "Junior", season: "Summer 2027", deadline: "Requisition posts in winter",
        link: "https://www.bannerhealth.com/health-professionals/for-students/internships-fellowships",
        note: "Ten weeks, paid, and explicitly non-clinical. Banner is the largest private employer in Arizona and this programme is how business students get inside it." },
      { role: "Business Internship, Fall or Spring", level: "Any", season: "Fall 2026 or Spring 2027", deadline: "Depends on department need",
        link: "https://www.bannerhealth.com/health-professionals/for-students/work-with-us",
        note: "The off-season version exists but only when a department asks for it, and it can be fully remote. Worth an email if you missed the summer window." },
      { role: "All Banner Health postings", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://bannerhealth.wd108.myworkdayjobs.com/Careers",
        note: "Banner's Workday search is fuzzy, so typing intern returns internal medicine and internal audit. Search the exact phrase Business Intern instead, and check again in January." },
    ],
  },
  {
    company: "Mayo Clinic", sector: "health", location: "Phoenix and Scottsdale, AZ",
    careersUrl: "https://jobs.mayoclinic.org/",
    roles: [
      { role: "Administrative Internship Program", level: "Senior", season: "Summer 2027", deadline: "Early December",
        link: "https://jobs.mayoclinic.org/AIP",
        note: "Graduate students only, and Arizona is one of the four sites with its own director. Do not search the careers site for intern, search the exact phrase Intern-Graduate or you will not find the posting." },
      { role: "Administrative Fellowship Program", level: "Senior", season: "Post-graduation", deadline: "Annual cycle",
        link: "https://jobs.mayoclinic.org/AFP",
        note: "The post-graduate version of the same pipeline. Mayo states in writing that doing the internship first neither helps nor hurts your fellowship application, so treat them as two separate shots." },
      { role: "Training Programs & Internships", level: "Any", season: "Varies", deadline: "Varies by programme",
        link: "https://jobs.mayoclinic.org/trainingprogramsandinternships",
        note: "Read this one before you get excited. Mayo's undergraduate internships are lab science and engineering and they run in Rochester, not Phoenix. The Arizona business door here is graduate level." },
    ],
  },
  {
    company: "TGen (Translational Genomics Research Institute)", sector: "health", location: "Phoenix, AZ",
    careersUrl: "https://www.tgen.org/careers/",
    roles: [
      { role: "Helios Scholars, Research Administration track", level: "Any", season: "Summer 2027", deadline: "February 3, 2027, 5 p.m.",
        link: "https://www.tgen.org/education/helios-scholars-at-tgen/",
        note: "Everyone reads Helios as a lab programme and skips it. Research administration is a listed track, which means grants, budgets and operations, and it competes against a much smaller field than the bench projects do." },
      { role: "Helios Scholars, Mathematics and Statistics track", level: "Any", season: "Summer 2027", deadline: "February 3, 2027, 5 p.m.",
        link: "https://www.tgen.org/education/helios-scholars-at-tgen/",
        note: "Paid, eight weeks, and restricted to students who went to an Arizona high school or attend an Arizona university. That restriction is the reason your odds here are better than they look." },
      { role: "TGen staff and operations postings", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://www.tgen.org/careers/",
        note: "TGen is an affiliate of City of Hope and runs finance, grants and HR like any other employer. If Helios closes before you are ready, this board stays open." },
    ],
  },
  {
    company: "UnitedHealth Group and Optum", sector: "health", location: "Phoenix, AZ",
    careersUrl: "https://careers.unitedhealthgroup.com/search-jobs",
    roles: [
      { role: "Internships and co-ops, corporate and business operations", level: "Junior", season: "Summer 2027", deadline: "September to November, then January to March",
        link: "https://www.unitedhealthgroup.com/careers/en/work/early-careers.html",
        note: "UnitedHealth names accounting, actuarial, consulting, finance and marketing as its own corporate tracks. This is the one employer on this list whose window is open right now, in September." },
      { role: "Student Internships filter on the job board", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://careers.unitedhealthgroup.com/search-jobs",
        note: "Use the Student Internships job type filter rather than the keyword box. Typing intern into this board returns software engineers in Eden Prairie and nurses in New Jersey." },
    ],
  },
  {
    company: "Blue Cross Blue Shield of Arizona (AZ Blue)", sector: "health", location: "Phoenix, AZ",
    careersUrl: "https://jobs.azblue.com/",
    roles: [
      { role: "Summer Intern roles", level: "Junior", season: "Summer 2027", deadline: "Requisitions post in winter",
        link: "https://bcbsaz.wd1.myworkdayjobs.com/BCBSAZCareers",
        note: "AZ Blue posts its summer interns as individual requisitions with no programme page behind them, so there is nothing to bookmark except this board. Set an alert on it in December." },
      { role: "All AZ Blue postings", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://jobs.azblue.com/jobs",
        note: "Hybrid at AZ Blue means you must live in Arizona and come to the Phoenix office at least monthly. That is a feature if you are staying local and a problem if you are not." },
    ],
  },
  {
    company: "CVS Health and Aetna", sector: "health", location: "Phoenix metro, AZ",
    careersUrl: "https://jobs.cvshealth.com/us/en/students",
    roles: [
      { role: "Corporate student programmes", level: "Junior", season: "Summer 2027", deadline: "Fall and winter",
        link: "https://jobs.cvshealth.com/us/en/students",
        note: "The corporate track here is actuarial, finance, general management, HR, marketing, sales and supply chain. Nothing on that list touches a pharmacy counter." },
      { role: "Student and intern postings", level: "Any", season: "Varies", deadline: "Rolling",
        link: "https://jobs.cvshealth.com/us/en/students-jobs",
        note: "CVS does not publish durations or eligibility on the programme page, only on the individual requisition. Read the requisition, not the brochure." },
    ],
  },
  {
    company: "HonorHealth", sector: "health", location: "Scottsdale, AZ",
    careersUrl: "https://honorhealth.wd12.myworkdayjobs.com/HonorHealth_careers",
    roles: [
      { role: "Intern, Research in Translational Science", level: "Any", season: "Open now", deadline: "Until filled",
        link: "https://honorhealth.wd12.myworkdayjobs.com/en-US/HonorHealth_careers/job/Medical-Office-Building---850-N-5th-St-Phoenix-AZ-85004/Intern---Research-in-Translational-Science_JR11460",
        note: "Listed so you know what is actually there. This is a research seat in downtown Phoenix, not a business one, and it is the only intern requisition HonorHealth has open today." },
      { role: "All HonorHealth postings", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://www.honorhealth.com/careers",
        note: "HonorHealth is the third large system in the Valley and has no published business internship programme at all. Treat it as a board to watch and a name to raise at a career fair, not a front door." },
    ],
  },
  {
    company: "Caris Life Sciences", sector: "health", location: "Phoenix and Tempe, AZ",
    careersUrl: "https://wd12.myworkdaysite.com/recruiting/carislifesciences/CLS",
    roles: [
      { role: "Corporate and commercial postings, Phoenix and Tempe", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://wd12.myworkdaysite.com/recruiting/carislifesciences/CLS",
        note: "Caris runs precision oncology out of Phoenix and hires marketing, document control and customer support locally. There is no intern programme, so the realistic route here is a part-time or entry-level seat while you are still in school." },
      { role: "Careers overview", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://www.carislifesciences.com/about/careers/",
        note: "Biotech in Phoenix is small enough that the recruiters know each other. One good conversation here travels further than it would at a Fortune 500." },
    ],
  },
  {
    company: "City of Phoenix", sector: "public", location: "Phoenix, AZ",
    careersUrl: "https://www.phoenix.gov/administration/departments/hr/careers.html",
    roles: [
      { role: "Finance Summer Internship", level: "Junior", season: "Summer 2027", deadline: "Watch the internships page",
        link: "https://www.phoenix.gov/administration/departments/hr/careers/internships/finanace-summer-internship.html",
        note: "The city names your major in writing: Finance, Accountancy, Supply Chain Management, Economics, Business Administration, CIS, Business Management. Twelve weeks, paid, up to 20 hours a week, GPA floor of 2.8. Note that the city misspelled its own URL as finanace, and that is the working address." },
      { role: "Aviation Department Internship", level: "Senior", season: "18 months, post-graduation", deadline: "Watch the internships page",
        link: "https://www.phoenix.gov/administration/departments/hr/careers/internships/aviation-department-internship.html",
        note: "This is Sky Harbor, and it wants a finished bachelor's degree, not a rising junior. Business administration, finance, public administration and communications are all named. Read it as a first job with a training label on it." },
      { role: "Management Fellowship Program", level: "Senior", season: "One year, full time", deadline: "Applications reopen November 2026",
        link: "https://www.phoenix.gov/administration/departments/citymanager/management-fellowship-program.html",
        note: "Master's degree required, or all coursework finished by the end of June. It has been running since 1950 and pays $28.86 an hour. If you are heading to an MBA or MPA, put this on the calendar now." },
      { role: "All City of Phoenix internship programmes", level: "Any", season: "Varies", deadline: "Varies",
        link: "https://www.phoenix.gov/administration/departments/hr/careers/internships.html",
        note: "Thirteen named programmes sit on this one page, including Housing, Planning and Development, and Water Services. Most students never find it because it is buried three levels under the HR department." },
    ],
  },
  {
    company: "Maricopa County", sector: "public", location: "Phoenix, AZ",
    careersUrl: "https://maricopa.wd1.myworkdayjobs.com/MC_External",
    roles: [
      { role: "MCLEAPS, Maricopa County Leadership and Education Advancing Public Service", level: "Junior", season: "Fall 2026 or Spring 2027", deadline: "Through ASU, rolling by semester",
        link: "https://www.maricopa.gov/3983/McLEAPS",
        note: "Built for ASU students specifically. You get a $6,000 stipend and a full waiver of ASU tuition and fees for the semester. You need 75 credits and a 3.0, and it runs in fall and spring, not summer." },
      { role: "All Maricopa County postings", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://maricopa.wd1.myworkdayjobs.com/MC_External",
        note: "The county's own board almost never carries an intern title, so do not judge the employer by it. MCLEAPS is the real door and it is opened through ASU, not through here." },
    ],
  },
  {
    company: "Arizona Auditor General", sector: "public", location: "Phoenix, AZ",
    careersUrl: "https://www.azauditor.gov/current-openings",
    roles: [
      { role: "Financial Audit Intern", level: "Junior", season: "Fall 2026, Summer 2027 reopens later", deadline: "Now accepting Fall 2026",
        link: "https://www.azauditor.gov/financial-audit-intern",
        note: "$20 an hour, flexible 15 to 40 hours a week around your class schedule, and possible course credit. You need upper division accounting coursework. The summer seats are already full, which tells you how early this one moves." },
      { role: "Performance Audit Intern", level: "Junior", season: "Fall 2026, Summer 2027 reopens later", deadline: "Now accepting Fall 2026",
        link: "https://www.azauditor.gov/program-analyst%E2%80%93performance-audit-intern",
        note: "The office says in writing that no accounting degree and no accounting experience is needed. If you are a Management, Economics or Public Policy major who can write, this is the seat nobody tells you about." },
      { role: "Accounting Compliance Intern", level: "Junior", season: "Fall 2026, Summer 2027 reopens later", deadline: "Now accepting Fall 2026",
        link: "https://www.azauditor.gov/accountant-intern",
        note: "You evaluate school districts' internal controls and then help fix them. It is the closest thing on this board to real internal audit work before you have a degree." },
      { role: "Information Technology Audit Intern", level: "Junior", season: "Fall 2026, Summer 2027 reopens later", deadline: "Now accepting Fall 2026",
        link: "https://www.azauditor.gov/information-technology-audit-intern",
        note: "The CIS and Business Data Analytics version of the same office. The Auditor General will be at ASU Meet the Firms on September 21, which is listed on its own careers page, so go and ask which of the four you fit." },
    ],
  },
  {
    company: "Arizona Governor's Office of Strategic Planning and Budgeting", sector: "public", location: "Phoenix, AZ",
    careersUrl: "https://ospb.az.gov/internships",
    roles: [
      { role: "Budget Division Intern", level: "Senior", season: "Summer 2027", deadline: "Applications open February 1",
        link: "https://ospb.az.gov/internships",
        note: "This is the office that writes the Governor's budget. Graduate students in Business or Economics are named as preferred, and undergraduates in a related field are still considered. You apply by emailing a resume, cover letter, transcript and a writing sample of five pages or fewer." },
      { role: "Grants Division Intern", level: "Senior", season: "Summer 2027", deadline: "Applications open February 1",
        link: "https://ospb.az.gov/internships",
        note: "Federal grant monitoring and grant data analytics for the whole state. Say in your email which of the three divisions you want, because the office asks you to, and most applicants do not." },
      { role: "Strategic Planning Division Intern", level: "Senior", season: "Summer 2027", deadline: "Applications open February 1",
        link: "https://ospb.az.gov/internships",
        note: "Statewide performance tracking and reporting. Reviewed first come first served on a rolling basis, so February 1 is the date that matters, not some later cutoff." },
    ],
  },
  {
    company: "Arizona Department of Transportation", sector: "public", location: "Phoenix, AZ",
    careersUrl: "https://azdot.gov/about/careers-adot",
    roles: [
      { role: "ADOT Intern Program, business areas", level: "Any", season: "Posted as positions open", deadline: "Watch the AZ State Jobs board",
        link: "https://azdot.gov/about/careers-adot/intern-program",
        note: "The listed areas include Audit, Financial Management Services, Human Resources, Information Technology Group and Communications. If your area is not listed, the page tells you to email and ask, which is unusually open for a state agency." },
      { role: "Transportation Intern Program", level: "Any", season: "Posted as positions open", deadline: "Watch the AZ State Jobs board",
        link: "https://azdot.gov/about/careers-adot/transportation-intern-program/enrollment-transportation-intern-program",
        note: "Read the enrollment page before you spend an evening on it. This specific programme wants a transportation-related major and gates on citizenship or permanent residency. The wider ADOT Intern Program does neither." },
      { role: "All ADOT postings on AZ State Jobs", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://www.azstatejobs.gov/jobs/search?page=1&query=&department_uids%5B0%5D=44068297a25818626b26f16fafe952bb",
        note: "ADOT does not post interns on its own site. Everything routes through AZ State Jobs, and you must attach a resume and a university transcript at the time you apply." },
    ],
  },
  {
    company: "State of Arizona", sector: "public", location: "Phoenix, AZ",
    careersUrl: "https://www.azstatejobs.gov/jobs/search",
    roles: [
      { role: "Internship category, all agencies", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://www.azstatejobs.gov/jobs/search?category=Internship",
        note: "One board covers every state agency, and the Internship category is a real filter rather than a keyword guess. Be honest with yourself about what is there: the current batch leans hydrology, public health and law." },
      { role: "Accounting and Auditing category", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://www.azstatejobs.gov/jobs/search",
        note: "Filter by category rather than searching. Accounting and Auditing carried 29 openings and Budget, Finance and Payroll carried 11 the day this was checked, and state postings publish the pay range up front." },
    ],
  },
  {
    company: "Federal Government, USAJOBS Pathways", sector: "public", location: "Phoenix, AZ",
    careersUrl: "https://www.usajobs.gov/help/working-in-government/unique-hiring-paths/students/",
    roles: [
      { role: "Pathways Internship Program, Arizona", level: "Any", season: "Year round", deadline: "Postings open and close in days",
        link: "https://www.usajobs.gov/Search/Results?hp=student&l=Arizona",
        note: "Turn on the job alert, do not browse. Federal postings often close within a week of opening and there were zero student-path jobs inside the Phoenix radius the day this was checked." },
      { role: "IRS Internship Program", level: "Any", season: "Full-time and part-time", deadline: "Via USAJOBS alerts",
        link: "https://jobs.irs.gov/students",
        note: "The IRS names auditing as a Pathways field, which is the accountancy door. Its own page tells you to set an alert on USAJOBS rather than wait for a posting, and that is not a formality." },
      { role: "Contract Specialist, federal acquisition path", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://www.usajobs.gov/Search/Results?hp=student&l=Arizona",
        note: "Federal contracting is the least known business career on this whole board. It needs 24 semester hours of business coursework, not an engineering degree, and Luke Air Force Base and the VA both sit in the metro." },
    ],
  },
  {
    company: "Carvana", sector: "startups", location: "Tempe, AZ",
    careersUrl: "https://www.carvana.com/careers",
    roles: [
      { role: "Customer Care Advocate (New College Graduates)", level: "Senior", season: "Now", deadline: "Rolling",
        link: "https://www.carvana.com/careers/apply/?gh_jid=7852604",
        note: "Carvana's summer internship is not posted right now, so this is the door that is actually open. It is written for people graduating soon and it sits in the Tempe headquarters, which is where the analyst and ops teams you would actually want to move into also sit." },
      { role: "Customer Service Representative (New College Graduates)", level: "Senior", season: "Now", deadline: "Rolling",
        link: "https://www.carvana.com/careers/apply/?gh_jid=7918958",
        note: "Near identical to the Advocate posting above and posted separately, which usually means two teams are hiring at once. Apply to both, they are not screened together." },
      { role: "Summer internship, Customer Experience", level: "Junior", season: "Summer 2027", deadline: "Not posted yet, watch the board",
        link: "https://www.carvana.com/careers",
        note: "Carvana runs an eleven week paid Customer Experience internship for rising seniors and it was not on the board on 15 September. It posts late compared to the Big Four, so checking this page monthly through the winter beats applying nowhere." },
    ],
  },
  {
    company: "Nextiva", sector: "startups", location: "Scottsdale, AZ",
    careersUrl: "https://www.nextiva.com/company/careers",
    roles: [
      { role: "Sales Development Representative", level: "Senior", season: "Now", deadline: "Rolling",
        link: "https://www.nextiva.com/company/careers-listing?gh_jid=8803005002",
        note: "Nextiva has no US intern programme, so be honest with yourself: this is a full-time job, not an internship. An SDR seat at a Scottsdale software company is still the most common way students here get their first real quota and their first CRM, and it is onsite four to five days a week." },
      { role: "Business Development Representative", level: "Senior", season: "Now", deadline: "Rolling",
        link: "https://www.nextiva.com/company/careers-listing?gh_jid=8627000002",
        note: "The only intern title anywhere on Nextiva's board is in Bengaluru, so do not go looking for a Scottsdale summer here. This and the SDR seat are the two genuine entry points." },
    ],
  },
  {
    company: "Lessen", sector: "startups", location: "Scottsdale, AZ",
    careersUrl: "https://jobs.lever.co/lessen",
    roles: [
      { role: "Field Resource Coordinator", level: "Senior", season: "Now", deadline: "Rolling",
        link: "https://jobs.lever.co/lessen/7a74621a-7075-40e8-a86a-a46c40333a1f",
        note: "Lessen runs property services for over a million homes, so the coordinator job is vendor management and scheduling at volume. It is unglamorous and it teaches you operations faster than a summer of slide decks would." },
      { role: "Customer Escalations Representative", level: "Senior", season: "Now", deadline: "Rolling",
        link: "https://jobs.lever.co/lessen/6e5dd77c-98d6-4ca0-a6be-b0089f7bead1",
        note: "Escalations is where a company keeps the problems it has not solved yet, which is why people who do it well get moved into ops and analytics inside a year." },
    ],
  },
  {
    company: "Arizona Commerce Authority", sector: "startups", location: "Phoenix, AZ",
    careersUrl: "https://job-boards.greenhouse.io/arizonacommerceauthority",
    roles: [
      { role: "Sales Assistant, Business Development", level: "Senior", season: "Now", deadline: "Rolling",
        link: "https://job-boards.greenhouse.io/arizonacommerceauthority/jobs/5422752008",
        note: "The ACA is the state agency that recruits companies into Arizona, so its business development team is the room that knows which employers are about to arrive here. That network is worth more than the title suggests." },
      { role: "Summer Internship", level: "Any", season: "Summer 2027", deadline: "Not posted yet, watch the board",
        link: "https://job-boards.greenhouse.io/arizonacommerceauthority",
        note: "The ACA posts one summer internship a year on this same board and the 2026 one is already closed. Bookmark the board address rather than the agency's main site, which does not list jobs at all and blocks scripts behind Cloudflare." },
    ],
  },
  {
    company: "ASU Venture Devils", sector: "startups", location: "Tempe, AZ",
    careersUrl: "https://entrepreneurship.asu.edu/programs/venture-devils/",
    roles: [
      { role: "Venture Devils participant", level: "Freshman", season: "Every semester", deadline: "Fall Demo Day is 14 November 2026",
        link: "https://entrepreneurship.asu.edu/funding-resources/venture-devils-demo-day/",
        note: "This is the one entry on this list with no application screen in front of it. Any ASU or Maricopa student can submit a venture, get a mentor and pitch at Demo Day for funding. If you are a freshman with no resume to speak of, a semester of this gives you something to talk about that nobody else in the room will have." },
    ],
  },
  {
    company: "SEED SPOT", sector: "startups", location: "Phoenix, AZ",
    careersUrl: "https://seedspot.org/who-we-are/careers/",
    roles: [
      { role: "Internship", level: "Any", season: "Check the site", deadline: "Posts irregularly",
        link: "https://seedspot.org/who-we-are/careers/",
        note: "SEED SPOT is the social enterprise accelerator on Grant Street, two blocks from the downtown campus, and its board carries an Internship filter that is empty today. Worth a monthly check rather than a hopeful bookmark. The faster route in is mentoring or volunteering at one of its accelerator cohorts, which costs you a weekend and puts you in front of twenty founders." },
    ],
  },
  {
    company: "Chicanos Por La Causa", sector: "startups", location: "Phoenix, AZ",
    careersUrl: "https://cplc.org/careers",
    roles: [
      { role: "Open roles across finance, housing, lending and programmes", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://pm.healthcaresource.com/cs/cplc",
        note: "CPLC is one of the largest Latino nonprofits in the country and it runs small business lending, home lending and affordable housing, which means it has a real finance and accounting function, not just programme staff. The careers page on cplc.org does not list anything; the actual searchable board is this address, which is easy to miss." },
      { role: "Immigration services intern", level: "Any", season: "Spring or Summer", deadline: "Email, no posting",
        link: "https://cplc.org/careers",
        note: "CPLC takes interns into its immigration department by email rather than by posting, which is exactly the pattern in this whole section. If you want one, write to the department and say what you would do, because there is no req to apply to." },
    ],
  },
  {
    company: "City Year", sector: "startups", location: "Phoenix, AZ",
    careersUrl: "https://www.cityyear.org/apply-now/",
    roles: [
      { role: "AmeriCorps Student Success Coach", level: "Senior", season: "Starts Oct 2026, Dec 2026 or Jan 2027", deadline: "18 September 2026",
        link: "https://www.cityyear.org/apply-now/",
        note: "Phoenix is one of the thirty City Year sites, and you pick it inside the application. This is a full year of service, not an internship: a living stipend, health cover, loan forbearance and an education award of about $5,150. The catch is the eligibility gate. You must be 18 to 25, a citizen or permanent resident, and DACA recipients are not eligible, which is a hard stop for some members of this chapter and better known now than at the end of the form." },
    ],
  },
  {
    company: "Teach For America", sector: "startups", location: "Phoenix, AZ",
    careersUrl: "https://www.teachforamerica.org/phoenix",
    roles: [
      { role: "Corps Member, Phoenix", level: "Senior", season: "Starts Summer 2027", deadline: "26 October 2026, then 1 February and 8 March 2027",
        link: "https://www.teachforamerica.org/apply/application-process",
        note: "Four deadlines a year is the whole point: the first one for this cycle already passed on 11 September and three more are still ahead of you. Applying to an earlier one gets you an earlier decision and a better shot at your region. Any major, and you commit two years." },
    ],
  },
  {
    company: "Arizona Community Foundation", sector: "startups", location: "Phoenix, AZ",
    careersUrl: "https://www.azfoundation.org/about/careers/career-opportunities/",
    roles: [
      { role: "Open roles in philanthropy and investments", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://www.azfoundation.org/about/careers/career-opportunities/",
        note: "ACF holds and invests an endowment for the whole state, so its finance and investments team does portfolio work that looks a lot like wealth management with a mission attached. There is nothing student-facing posted today, which is normal here. Two roles is a typical month for them, so check quarterly rather than weekly." },
    ],
  },
  {
    company: "Valley of the Sun United Way", sector: "startups", location: "Phoenix, AZ",
    careersUrl: "https://vsuw.org/about-us/careers/",
    roles: [
      { role: "Corporate Relations Manager", level: "Senior", season: "Now", deadline: "Rolling",
        link: "https://recruiting.paylocity.com/recruiting/jobs/All/7f996288-75f6-46d5-8c38-2353de19dccd/Valley-of-the-Sun-United-Way",
        note: "Corporate relations at a United Way is fundraising from companies, which is closer to enterprise sales than to charity work and reads that way on a resume. One role at a time is how this board normally looks, so bookmark it and check monthly." },
    ],
  },
  {
    company: "St. Mary's Food Bank", sector: "startups", location: "Phoenix, AZ",
    careersUrl: "https://stmarysfoodbank.hrmdirect.com/employment/job-openings.php",
    roles: [
      { role: "Open roles in warehouse, transportation, IT and administration", level: "Any", season: "Year round", deadline: "Rolling",
        link: "https://stmarysfoodbank.hrmdirect.com/employment/job-openings.php",
        note: "Be clear-eyed about this one: the ten seats open today are four warehouse, two transportation, one facilities, one skills centre, one IT and one administration. No accounting. The finance seats here open rarely and go fast, so the realistic route is to volunteer, be known, and be told when one opens. The careers page on the main site pushes you to a login-walled portal; this address is the public list." },
    ],
  },
  {
    company: "Boys & Girls Clubs of the Valley", sector: "startups", location: "Phoenix, AZ",
    careersUrl: "https://jobs.bgcaz.org/",
    roles: [
      { role: "Youth Development and programme specialist roles", level: "Any", season: "School year", deadline: "Rolling",
        link: "https://jobs.bgcaz.org/jobs",
        note: "These are part-time afternoon jobs that fit around class, they pay, and they are a straight line to the community service hours this chapter already cares about. Tuition reimbursement kicks in after a year. Do not expect a finance seat here, expect a real job you can hold while enrolled." },
    ],
  },
  {
    company: "Parker Dewey", sector: "startups", location: "Remote",
    careersUrl: "https://www.parkerdewey.com/career-launchers",
    roles: [
      { role: "Micro-internships", level: "Freshman", season: "Year round", deadline: "Rolling, per project",
        link: "https://www.parkerdewey.com/career-launchers",
        note: "Short paid projects, roughly ten to forty hours each, and about 90 percent of them are remote. Free to join, and the pay comes from the company, not from you. This is the single best answer for a freshman who has nothing to put under Experience yet: three finished projects is a resume line and a reference, and you can do them between classes. It is not a summer internship and it will not convert into one, so treat it as evidence, not as a destination." },
    ],
  },
  {
    company: "HACU National Internship Program", sector: "startups", location: "Washington DC, field offices, and virtual",
    careersUrl: "https://hacu.net/hnip/",
    roles: [
      { role: "Federal internship, spring session", level: "Sophomore", season: "Spring 2027, 4 Jan to 16 April", deadline: "20 November 2026",
        link: "https://hacu.net/hnip/available-internships/",
        note: "Paid federal placements run through HACU since 1992, any major, and some listings are explicitly virtual so Phoenix is not a barrier. Two things the page will not tell you plainly: there is a 3.0 GPA floor, and the live listings lean heavily toward USDA science work, so read the desired majors line before you assume there is a business seat in there. Sessions run 15 weeks, which is a full semester, so talk to your advisor about credit first." },
    ],
  },
  {
    company: "Handshake", sector: "startups", location: "Remote",
    careersUrl: "https://asu.joinhandshake.com/",
    roles: [
      { role: "Remote and rolling listings", level: "Freshman", season: "Year round", deadline: "Rolling",
        link: "https://joinhandshake.com/students/",
        note: "You already have an account through ASU, so the only question is whether you use it properly. Set the location filter to remote and the job type to internship, save the search, and let it email you. Most students log in twice a year during career fair week and then wonder where the postings went." },
    ],
  },
  {
    company: "Forage", sector: "startups", location: "Remote",
    careersUrl: "https://www.theforage.com/simulations",
    roles: [
      { role: "Virtual job simulations", level: "Freshman", season: "Year round", deadline: "None",
        link: "https://www.theforage.com/simulations",
        note: "Free, self-paced, and genuinely built by the firms whose names are on them, so an investment banking or consulting simulation will show you what the work looks like before you spend a semester chasing it. Be clear about what it is not: it is not an internship, it is not a referral, and it does not put you in anyone's pipeline. The firms use it as marketing and as a funnel. Do one to find out whether you like the work, put it under a Projects heading rather than Experience, and never let it stand in for an actual job." },
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
   CAMPUS
   Paid work on campus. The most useful section on the site for a first
   year with no experience and no car, and the one place an F-1 student
   can work when off campus is closed to them.

   workStudy and f1 are load bearing. A job that REQUIRES a work study
   award is closed to most students, and ASU states outright that F-1 and
   J-1 students cannot hold federal work study. Say which is which.
------------------------------------------------------------ */
const CAMPUS = [
  {
    key: "employment", name: "Getting hired on campus",
    blurb: "The portal, the wage floor, and the two rules that decide which campus jobs you can actually hold.",
    items: [
      {
        name: "ASU Hourly Employment Program", provider: "ASU Student Employment, Business and Finance",
        amountShort: "From $14.70/hr", amount: "Hourly. The student wage scale starts at $14.70 an hour for FY2027",
        commitment: "Up to an average of 25 hours a week across all jobs over a rolling 12 months. You may not work during hours you are scheduled to be in class",
        eligibility: "Enrolled in one or more credit hours. US citizens and eligible noncitizens. F-1 students must be enrolled full time, which is 12 credits for undergraduates",
        workStudy: "no", f1: "yes",
        noExperience: true,
        cycle: "Year round. New jobs post daily",
        link: "https://studentemployment.asu.edu/students/explore-opportunities",
        note: "This is the program most campus jobs actually sit in, and the hiring department pays the whole wage, so there is no award to qualify for first. If you are starting at ASU in the fall you can begin working in the summer as soon as you register for fall classes.",
      },
      {
        name: "Federal Work-Study", provider: "ASU Student Employment with Financial Aid and Scholarship Services",
        amountShort: "From $14.70/hr", amount: "Hourly, on the same wage scale as hourly employment, capped at the size of your award",
        commitment: "Part time. You stop earning against the award once you hit the award total",
        eligibility: "A completed FAFSA, a demonstrated need, and an FWS award shown on your Financial Aid Notification in My ASU. If it is not on your FAN you can file a Federal Work-Study Adjustment Form",
        workStudy: "yes", f1: "no",
        noExperience: true,
        cycle: "Awarded with your financial aid package each year. Jobs are applied for separately all year",
        link: "https://studentemployment.asu.edu/students/preparing-student-employment/federal-work-study",
        note: "Work-study is financial aid, not a job type, and it is the single biggest reason people get turned away from a campus posting. Check your FAN before you apply to anything marked work-study only, and know that the award is a ceiling: once you earn it out, your department can keep you on hourly but does not have to.",
      },
      {
        name: "Student wage scale, levels I to IV", provider: "ASU Student Employment",
        amountShort: "$14.70 to $50.85", amount: "Level I $14.70 to $15.40, level II $15.10 to $16.57, level III $15.97 to $18.97, level IV $17.75 to $50.85, all Arizona rates effective July 6, 2026",
        commitment: "Not applicable",
        eligibility: "Applies to every ASU student hourly position",
        workStudy: "no", f1: "yes",
        noExperience: true,
        cycle: "Reset each fiscal year in July",
        link: "https://studentemployment.asu.edu/students/preparing-student-employment/standard-wage-scale",
        note: "Read this before you accept anything. Level I is the entry desk job, level IV is reserved for teaching and research aide work and specialised skills, and the gap between them is real money. If a posting is graded below the duties it describes, that is a fair thing to raise with the supervisor.",
      },
      {
        name: "On-campus employment rules for F-1 and J-1 students", provider: "ASU Student Employment with the International Students and Scholars Center",
        amountShort: "Standard wage scale", amount: "Same wage scale as any other student",
        commitment: "20 hours a week in fall and spring, 40 in summer and over winter and spring break, combined across every job. You cannot average 18 one week and 22 the next",
        eligibility: "F-1 and J-1 students in valid status, enrolled full time. Undergraduate full time is 12 credit hours",
        workStudy: "no", f1: "yes",
        noExperience: true,
        cycle: "Year round",
        link: "https://studentemployment.asu.edu/students/international-students/campus-employment-types",
        note: "If you are on F-1 you can work on campus when you cannot work off it, so this list is worth knowing line by line. ASU hourly, stipend, TA and RA roles are all open to you, and so are Aramark dining and the Follett bookstore even though they are outside companies. Federal work-study is not, and nor is Education at Work, which needs CPT or OPT.",
      },
      {
        name: "ASU CareerLink", provider: "ASU Career Services",
        amountShort: "Varies", amount: "Varies by posting",
        commitment: "Varies by posting",
        eligibility: "Current students and alumni who graduated 2023 or later, log in with ASURITE. Earlier alumni request access",
        workStudy: "not stated", f1: "not stated",
        noExperience: true,
        cycle: "Year round",
        link: "https://career.asu.edu/careerlink",
        note: "This is the current platform and it is not Handshake. Plenty of ASU pages, advisors and older advice still point at Handshake, so if a friend tells you to check there you will be looking at the wrong board. Campus jobs post on the student employment portal, everything else posts here.",
      },
      {
        name: "Student Employment Project Portal", provider: "University College, Work+, run on Riipen",
        amountShort: "Paid per project", amount: "Paid per project on approval of your deliverables, by direct deposit",
        commitment: "Short term projects. Most fall projects run mid September to early December",
        eligibility: "Any ASU student enrolled in at least one credit hour. Some projects ask for specific coursework. A Social Security Number is required",
        workStudy: "no", f1: "not stated",
        noExperience: true,
        cycle: "By semester, most fall projects start mid September",
        link: "https://universitycollege.asu.edu/students/student-employment-project-portal",
        note: "This is the one on the list that is not a job. ASU departments post short paid projects and you deliver a piece of work, which means a first-year student with no employment history can put a real deliverable on a resume in one semester. You need an SSN before you can take one, so international students should sort that first.",
      },
    ],
  },
  {
    key: "academic", name: "Getting paid for coursework you already did",
    blurb: "These hire on the grade you earned in one specific course, not on your overall GPA, which is why they are the fastest route from finishing a class to being paid for it.",
    items: [
      {
        name: "Tutor, ASU Tutoring Centers", provider: "Academic Support Network",
        amountShort: "From $14.70/hr", amount: "Check the site. Student hourly wage scale applies",
        commitment: "Check the site",
        eligibility: "Currently enrolled undergraduate or graduate student. Local ASU Online students taking courses at ASU may apply",
        workStudy: "no", f1: "yes",
        noExperience: true,
        cycle: "Postings stay open past their listed close date and are reviewed on a rolling basis until filled",
        link: "https://tutoring.asu.edu/student-employment",
        note: "Ignore the close date on the requisition, they keep reviewing until the seats are gone. As of 2026-09-15 the Tempe tutor posting JR105258 and the West Valley one JR104918 were both marked hiring, and you apply by requisition number on the student employment portal rather than through this page.",
      },
      {
        name: "Writing Tutor, ASU Writing Centers", provider: "Academic Support Network",
        amountShort: "From $14.70/hr", amount: "Check the site. Student hourly wage scale applies",
        commitment: "Check the site",
        eligibility: "Currently enrolled undergraduate. Tutors come from a wide range of majors, not only English",
        workStudy: "no", f1: "yes",
        noExperience: true,
        cycle: "Rolling, reviewed until filled",
        link: "https://tutoring.asu.edu/writing-centers",
        note: "You do not need to be an English major and the centers say so outright, they want tutors from across the disciplines because a finance student writing a case memo wants someone who has written one. Sessions run on Zoom as well as in person on all four campuses.",
      },
      {
        name: "Supplemental Instruction Leader", provider: "Academic Support Network",
        amountShort: "From $14.70/hr", amount: "Check the site. Student hourly wage scale applies",
        commitment: "Attend every class session of the course plus facilitate three or more study sessions a week, after 10 hours of training",
        eligibility: "Completed the course with a B- (2.77) or better, currently enrolled, in academic good standing. Interview required. Online SI Leader roles are open to students anywhere in the US",
        workStudy: "no", f1: "yes",
        noExperience: true,
        cycle: "Rolling, reviewed until filled. SI is attached to courses with high D, E and withdrawal rates",
        link: "https://tutoring.asu.edu/supplemental-instruction",
        note: "The bar is a B- in that one course, not your GPA, so a rough first semester in something else does not shut this door. It is also the closest thing on campus to paid practice at standing in front of a room, which is the skill most business students say they lack.",
      },
      {
        name: "Desk Aide, Tutoring and Writing Centers", provider: "Academic Support Network",
        amountShort: "From $14.70/hr", amount: "Check the site. Student hourly wage scale applies",
        commitment: "Check the site",
        eligibility: "Currently enrolled student who holds a Federal Work-Study award",
        workStudy: "yes", f1: "no",
        noExperience: true,
        cycle: "Rolling, reviewed until filled",
        link: "https://tutoring.asu.edu/student-employment",
        note: "This is the only role in the Academic Support Network that requires a work-study award, and the page says so in one line most people skim past. No award means no hire here, and because work-study is closed to F-1 students, this desk job is closed to them too. The tutor and SI roles on the same page are not.",
      },
      {
        name: "Undergraduate Teaching Assistant", provider: "Ira A. Fulton Schools of Engineering, PULSE",
        amountShort: "Stipend", amount: "Stipend, paid biweekly through the assignment. Amount not stated on the program page",
        commitment: "About 5 hours a week of office hours, study sessions and asynchronous support",
        eligibility: "A B or higher in the course you would support, at least one completed semester at ASU, currently enrolled as a Fulton Schools undergraduate, good academic standing with no integrity violations",
        workStudy: "no", f1: "yes",
        noExperience: false,
        cycle: "By semester through the UGTA and Section Leader portal",
        link: "https://engineering.asu.edu/ugta/",
        note: "Two applications, not one. The portal gets you the course assignment and the offer letter, then you have to apply separately to the Student Employment Office or you are not actually hired. The program also tells you plainly to ask a faculty member to request you, which matters more than the form does.",
      },
      {
        name: "ASU 101 Section Leader", provider: "Ira A. Fulton Schools of Engineering, PULSE",
        amountShort: "Stipend", amount: "Stipend. Amount not stated on the program page",
        commitment: "Check the site",
        eligibility: "Same portal and broadly the same bar as the UGTA role: a completed ASU semester, current Fulton Schools undergraduate, good academic standing",
        workStudy: "no", f1: "yes",
        noExperience: false,
        cycle: "By semester, applications run alongside the UGTA cycle",
        link: "https://engineering.asu.edu/ugta/",
        note: "You teach the first-year seminar to people a year behind you, which is the earliest point in a degree where anyone will pay you to run a room. Note that the application banner on this page still reads Fall 2025, so email the program address rather than assuming the cycle is closed.",
      },
      {
        name: "Instructional Assistant or Grader, mathematics", provider: "School of Mathematical and Statistical Sciences",
        amountShort: "From $14.70/hr", amount: "Check the site. Student hourly wage scale applies",
        commitment: "Check the site",
        eligibility: "Check the site. Apply through the school's own GIA application, not through a professor",
        workStudy: "not stated", f1: "yes",
        noExperience: true,
        cycle: "Check the site",
        link: "https://math.asu.edu/careers",
        note: "SoMSS faculty do not hire their own graders, which means asking your professor gets you nowhere and the only route in is the GIA portal at math.la.asu.edu/gia. Grading is the quietest paid academic job on campus and it stacks with a full course load better than anything front of house.",
      },
    ],
  },
  {
    key: "research", name: "Paid research on campus",
    blurb: "Research that pays rather than research for credit, which is a distinction worth making before you commit a semester to it.",
    items: [
      {
        name: "Fulton Undergraduate Research Initiative (FURI)", provider: "Ira A. Fulton Schools of Engineering",
        amountShort: "$1,500 a term", amount: "$1,500 stipend per funded semester, paid at the end of the semester, plus up to $400 in research supplies",
        commitment: "Check the site. You run one project across a semester and present at the FURI Expo",
        eligibility: "Full-time Fulton Schools undergraduate in good academic standing, from your second semester at ASU through your last",
        workStudy: "no", f1: "yes",
        noExperience: false,
        cycle: "Twice a year. Fall 2026 applications opened September 16. The spring cycle has historically closed in mid October and the fall cycle in April",
        link: "https://students.engineering.asu.edu/furi/",
        note: "The application is a real research proposal with a named faculty mentor, so the work starts weeks before the deadline, and generative AI is banned for every part of it including the personal statement. Find the mentor first by going to office hours, because the proposal is the easy half.",
      },
      {
        name: "New College Undergraduate Inquiry and Research Experiences (NCUIRE)", provider: "New College of Interdisciplinary Arts and Sciences, West Valley campus",
        amountShort: "Stipend or credit", amount: "A small stipend or course credit, depending on the track. Amount not stated",
        commitment: "Check the site",
        eligibility: "Undergraduates majoring in a New College program. Separate applications for research assistant, research team, and scholars and fellows",
        workStudy: "no", f1: "yes",
        noExperience: false,
        cycle: "By semester. The fall 2026 deadline was extended to April 27",
        link: "https://newcollege.asu.edu/research/ncuire",
        note: "Three different applications sit behind one program name and they are not interchangeable, so read which one you are filling in. The research assistant track is the entry point and it pairs you with a faculty member rather than asking you to arrive with a project of your own.",
      },
      {
        name: "Student Strategic Research Analyst", provider: "ASU Foundation for A New American University",
        amountShort: "Check the site", amount: "Check the site",
        commitment: "Check the site",
        eligibility: "Check the site",
        workStudy: "not stated", f1: "not stated",
        noExperience: false,
        cycle: "Posted as a requisition. R1498 was live on 2026-09-15, posted 22 days earlier",
        link: "https://asuep.wd5.myworkdayjobs.com/en-US/ASUFoundation",
        note: "Prospect research for a fundraising shop, which is closer to equity research than to a lab, and it is one of the few genuinely analytical paid student roles on campus. The Foundation is a separate nonprofit from ASU, so if you are on F-1 confirm with the ISSC that it counts as on-campus employment before you accept.",
      },
    ],
  },
  {
    key: "leadership", name: "Student leadership and front of house",
    blurb: "Roles where the job is other students, and where the hiring cycle runs a full year ahead of the work.",
    items: [
      {
        name: "Community Assistant", provider: "University Housing and Residential Life",
        amountShort: "Housing included", amount: "Check the site. The role requires you to live in the residence halls for its duration",
        commitment: "Classified by ASU HR as a 20 hour a week position. You may work only 5 more hours anywhere else on campus outside EOSS",
        eligibility: "Sophomore standing or above by August 2026, enrolled full time, cumulative and semester GPA of 2.75 or higher, 3.0 for Barrett communities and graduate students, in good standing with Housing and Student Rights",
        workStudy: "no", f1: "yes",
        noExperience: false,
        cycle: "Applications opened November 1 and closed at 3pm on December 1 for the following August. Interviews in February, offers through March",
        link: "https://housing.asu.edu/student-employment",
        note: "This closes in the first week of December for a job that starts the following August, which is nine months of lead time and the reason most people miss it. Two steps, not one: the Workday requisition and a separate Student Staff Interest Form, both due December 1. The 20 hour classification also eats almost your whole allowance, so it is not a job you stack another job on top of.",
      },
      {
        name: "Peer Academic Leader", provider: "Barrett, The Honors College, Tempe campus",
        amountShort: "Check the site", amount: "Check the site",
        commitment: "Check the site",
        eligibility: "Barrett students. Two PALs serve each academic college community including a dedicated W. P. Carey community",
        workStudy: "not stated", f1: "not stated",
        noExperience: false,
        cycle: "Check the site. Contact the program coordinator named on the page",
        link: "https://barretthonors.asu.edu/student-life/housing/residential-college-experience/tempe/res-life-staff/peer-mentor",
        note: "There is a W. P. Carey specific PAL seat, so if you are a Barrett business student this is a leadership role aimed squarely at you rather than at the general population. PALs serve second and third year students, which means the people hired are usually third and fourth years.",
      },
      {
        name: "Gold Guide", provider: "ASU New Student Experience, Educational Outreach and Student Services",
        amountShort: "Check the site", amount: "Check the site",
        commitment: "Check the site",
        eligibility: "Check the site. Undergraduate student staff",
        workStudy: "not stated", f1: "not stated",
        noExperience: true,
        cycle: "Check the site. Work concentrates around orientation and the onboarding season",
        link: "https://eoss.asu.edu/orientation/student-leaders",
        note: "Gold Guides are paired one to one with incoming students and message them through the whole onboarding run, so the job is sustained relationship building rather than a weekend of event work. It is one of the few campus roles where a first year with nothing on a resume is exactly the person they want.",
      },
      {
        name: "Campus tour guide, Devils' Advocates", provider: "ASU Admission Services",
        amountShort: "Check the site", amount: "Check the site",
        commitment: "Check the site. Tours run Monday through Saturday",
        eligibility: "Check the site",
        workStudy: "not stated", f1: "not stated",
        noExperience: true,
        cycle: "Check the site",
        link: "https://visit.asu.edu/campus-tour",
        note: "Devils' Advocates has been a club since 1966 but it moved under Admission Services in 2024 and its guides are student workers now, not volunteers. That means you look for it on the ASU student employment portal, not on the club listings, and it is the cheapest public speaking practice you will ever be paid for.",
      },
      {
        name: "Sun Devil Fitness Complex student staff", provider: "Sun Devil Fitness, Educational Outreach and Student Services",
        amountShort: "Check the site", amount: "Check the site. See the note below before you trust the table on the campus job pages",
        commitment: "Check the site",
        eligibility: "Check the site. Roles run from lifeguard and facility assistant up to supervisor and manager, with some marked as needing prior experience",
        workStudy: "not stated", f1: "yes",
        noExperience: true,
        cycle: "Rolling. Each campus page marks roles hiring or not hiring. On 2026-09-15 Tempe listed lifeguard, lifeguard instructor, water safety instructor, intramural official and sport club supervisor as hiring",
        link: "https://fitness.asu.edu/about-us/student-employment",
        note: "The hourly rates printed on the campus job tables run from $8.00 to $15.00, which is below Arizona minimum wage and below ASU's own $14.70 student floor, so the table is stale and you should ask what the role actually pays. Promotion from within is the real draw here: facility assistant to supervisor to manager is a documented ladder inside four years.",
      },
      {
        name: "Memorial Union and Student Pavilion student staff", provider: "Memorial Union, Educational Outreach and Student Services",
        amountShort: "From $14.70/hr", amount: "Check the site. Student hourly wage scale applies",
        commitment: "Flexible, built around class schedules",
        eligibility: "Check the site",
        workStudy: "not stated", f1: "yes",
        noExperience: true,
        cycle: "Based on department need. Not all applicants are contacted",
        link: "https://eoss.asu.edu/mu/about/employment",
        note: "Eight distinct job titles sit behind one door, from Information Desk Associate to Building Manager to Graphic Design Intern, and the MU cross-trains between them. Apply for the entry desk role and you are inside the building that runs every event on campus, which is worth more than the title suggests.",
      },
    ],
  },
  {
    key: "enterprise", name: "ASU enterprise employers",
    blurb: "Organisations that sit on or beside campus and hire students into named professional roles rather than into shift work.",
    items: [
      {
        name: "Student Assistant roles, ASU Enterprise Partners", provider: "ASU Enterprise Partners",
        amountShort: "Check the site", amount: "Check the site",
        commitment: "Check the site",
        eligibility: "Check the site. Roles are titled for students and based in Tempe, Scottsdale or remote in Arizona",
        workStudy: "not stated", f1: "not stated",
        noExperience: false,
        cycle: "Rolling requisitions. On 2026-09-15 the board rendered 13 jobs, five of them student roles: Alumni Engagement, Asset Management, Data Science, Graphic Designer and Marketing Analyst Specialist",
        link: "https://asuep.wd5.myworkdayjobs.com/en-US/ASUEP",
        note: "Asset Management and Data Science here are the two most finance-shaped student jobs anywhere near campus, and they carry real titles rather than assistant-of-everything. Enterprise Partners is a separate nonprofit and not ASU itself, so on F-1 check the ISSC acceptable on-campus employer list before you accept.",
      },
      {
        name: "ASU Library student positions", provider: "ASU Library",
        amountShort: "From $14.70/hr", amount: "Check the site. Student hourly wage scale applies",
        commitment: "Check the site",
        eligibility: "Check the site",
        workStudy: "not stated", f1: "yes",
        noExperience: true,
        cycle: "As posted. The library page routes student roles to the ASU Student Employment portal",
        link: "https://lib.asu.edu/employment",
        note: "The library page itself mostly lists librarian and staff recruitments, so do not read an empty student section as no jobs. The student roles live on the student employment portal and the quiet shifts are why this is the classic first-year job for people carrying a heavy course load.",
      },
      {
        name: "Sun Devil Hospitality, operated by Aramark", provider: "Aramark at ASU Campus Dining",
        amountShort: "Check the site", amount: "Check the site",
        commitment: "Check the site. Aramark schedules do not match ASU pay periods",
        eligibility: "Check the site. Cashier, food service and sales ambassador roles",
        workStudy: "no", f1: "yes",
        noExperience: true,
        cycle: "Rolling, heaviest at the start of each semester",
        link: "https://careers.aramark.com/",
        note: "Aramark is one of the two outside companies ASU names as permitted on-campus employment for F-1 students, alongside the Follett bookstore, which makes it genuinely useful if the portal keeps routing you to work-study jobs. You apply on Aramark's own careers site, not the ASU portal, and if you are on F-1 you still count your hours Monday to Sunday no matter what Aramark's week looks like.",
      },
    ],
  },
  {
    key: "career", name: "Career development inside W. P. Carey",
    blurb: "The school's own career operation, which is where business-specific coaching and employer access sit.",
    items: [
      {
        name: "W. P. Carey Career Services Center", provider: "W. P. Carey School of Business",
        amountShort: "Check the site", amount: "Check the site",
        commitment: "Check the site",
        eligibility: "W. P. Carey undergraduates, on campus and 100% online, plus alumni",
        workStudy: "not stated", f1: "not stated",
        noExperience: false,
        cycle: "Coaching year round. Employer events cluster in September and February",
        link: "https://career.wpcarey.asu.edu/",
        note: "No student staff posting was listed here on 2026-09-15, so treat this as the place to be known rather than a place to apply: its Career Management Program is the structured route business students get and almost nobody uses it in their first two years. Its events calendar ran seven separate sessions on September 15 alone.",
      },
    ],
  },
];

/* ------------------------------------------------------------
   PIPELINES
   The third thing, and the most misunderstood. Not a scholarship and not
   an internship: the multi year programme that GETS you the internship.
   Management Leadership for Tomorrow is the archetype.

   Most of these target SOPHOMORES, which is the opposite of the
   internship board, so targetYear is the field that matters most.

   Several were restructured after 2023 legal pressure on race conscious
   eligibility. What is recorded here is what each page says TODAY, not
   what the programme was historically known for. Do not describe one as
   Latino specific unless its current page does.
------------------------------------------------------------ */
const PIPELINES = [
  {
    key: "diversity", name: "Latino and diversity pipelines",
    blurb: "Multi-year programmes that coach you, put you in front of employers and get you the internship, most of them starting in your sophomore year.",
    items: [
      {
        name: "Career Prep", provider: "Management Leadership for Tomorrow (MLT)",
        targetYear: "Sophomore",
        whatYouGet: "Roughly 20 months of structured programming from sophomore year through senior year: a personal MLT coach, a written career roadmap, resume and interview work, national seminars hosted on corporate partner campuses, and direct access to partner employers recruiting for internships and full-time roles. MLT says 90 percent of Career Prep Fellows have a full-time offer before graduation.",
        eligibility: "College sophomore graduating Fall 2028, Spring 2029 or Summer 2029. Bachelor's degree at a four-year accredited school. No minimum GPA stated, but competitive applicants have at least a 3.0 cumulative. All majors accepted, career interest in business or technology. You must show lived experience with inequitable access to career accelerating resources, and commit to monthly assignments and every required seminar.",
        citizenship: "U.S. citizen or U.S. permanent resident. The eligibility page names DACA participants as included.",
        openToBusiness: "",
        cycle: "Applications for the sophomore class opened for 2026-27. Priority track deadlines: Finance August 1 2026, Consulting September 1 2026, Software Engineering / Technology / Corporate Management November 1 2026. General deadline December 1 2026, final deadline January 15 2027. Apply by the priority deadline and you are guaranteed a spot in that track's bootcamp.",
        link: "https://mlt.org/career-prep/",
        note: "The track deadlines are the real deadline. If you want finance you had to be in by August 1, so treat the summer before sophomore year as the moment to apply, not the spring. The page also says MLT programmes are open to all who meet the criteria regardless of race, ethnicity or gender, so being Latino is not itself the qualifier, the access gap is.",
      },
      {
        name: "SEO Career", provider: "Sponsors for Educational Opportunity (SEO USA)",
        targetYear: "Freshman",
        whatYouGet: "Two phases. Phase 1 Edge gives you career prep, industry training, coaching and personalised resume and interview feedback plus access to internship openings. Phase 2 Success is the internship placement itself, with a mandatory Career Summit in New York before the summer starts. SEO says more than 80 percent of its summer internships lead to full-time offers.",
        eligibility: "First year, sophomore or junior at an accredited four-year U.S. university. 3.2 GPA required, 3.0 may be considered. All majors. First-year students can apply with no GPA to register interest, then update it. You must complete industry training, coaching sessions, interview prep and required events.",
        citizenship: "Must be work authorised in the U.S. The page adds that F-1 students may be eligible for Phase 2: Success. DACA is not mentioned either way.",
        openToBusiness: "",
        cycle: "Rolling, year-round. Edge applications are reviewed continuously. Candidates seeking summer internships with partners are reviewed October through April, and the Success class typically closes in mid-April. Expect 6 to 8 weeks for a response.",
        link: "https://career.seo-usa.org/apply-faq/",
        note: "Getting into Edge does not guarantee an internship and does not automatically move you to Success, which is a separate invitation. Apply as a freshman anyway, because Edge is the free coaching and you lose nothing by being in it early.",
      },
      {
        name: "INROADS Internship Program", provider: "INROADS",
        targetYear: "Any",
        whatYouGet: "A shot at a paid multi-year internship with one of 200-plus employer partners, preceded by a six-week cohort training, an interview guidance and preparation session, and year-round coaching from an assigned INROADS advisor. You attend the mandatory INROADS National Conference. Many participants return to the same employer across multiple summers and convert to full-time.",
        eligibility: "Full-time undergraduate at an accredited college with at least one summer left before graduation. Cumulative GPA 3.0 or higher. Majors in business, STEM or liberal arts. Application needs an INROADS-formatted resume and an unofficial transcript.",
        citizenship: "The programme page states no citizenship rule. The placements are paid U.S. roles, so employer work authorisation applies. Confirm with INROADS directly rather than assuming.",
        openToBusiness: "",
        cycle: "Applications are open on the site now for the following summer. INROADS does not publish a single hard deadline on the programme page, so apply in the autumn.",
        link: "https://inroads.org/internships-program/",
        note: "INROADS says outright that internships are not guaranteed, even after you are accepted and trained. The interview with corporate partners is a real gate. Also note the resume template is mandatory, a normal resume gets rejected on format.",
      },
      {
        name: "ALPFA Fellowship Program", provider: "ALPFA National",
        targetYear: "Any",
        whatYouGet: "Real-world business case work in small pods, professional development sessions and corporate mentorship, with the fellowship culminating at the ALPFA Convention. It is the national programme your own chapter membership unlocks.",
        eligibility: "Open to college students. The page states it is for Premium members only, so you need a paid ALPFA student membership, not just chapter involvement. You do not need an ALPFA chapter at your school, but ASU has one.",
        citizenship: "Not stated on the page.",
        openToBusiness: "",
        cycle: "Applications are currently CLOSED. Every date on the page, applications open, applications due, winners notified, fellowship begins, reads TBD as of September 2026. Put your email on the notify list rather than waiting to check.",
        link: "https://www.alpfa.org/fellowship",
        note: "This is the one on the list you have the most leverage over, because you are already inside ALPFA. The blocker is the Premium membership tier, which is worth checking with your chapter before the cycle opens so nobody misses it on a paperwork technicality.",
      },
      {
        name: "ALPFA Convention", provider: "ALPFA National",
        targetYear: "Any",
        whatYouGet: "A multi-day national gathering that functions as a hiring event. The 2025 convention drew 6,342 registered attendees, 33 percent of them students, with 85 companies at the career fair across 39 industries and 1,798 interviews scheduled on site. ALPFA also distributed 1.2 million dollars in scholarships at the 2025 event.",
        eligibility: "Open to students, professionals and corporate partners. Registration required. Discounted student tickets are advertised.",
        citizenship: "Not stated. It is an event, not a placement programme.",
        openToBusiness: "",
        cycle: "ALPFA Convention 2026 is August 9 to 13, 2026 in Charlotte, North Carolina. Registration is open on the page.",
        link: "https://www.alpfa.org/event-convention",
        note: "1,798 interviews for roughly 3,000 students is the number that matters. You go with a resume and interview slots already booked, not to browse. Book travel and the chapter's block early, because the discounted student rate and the interview scheduling both close well before the event.",
      },
      {
        name: "TLF Undergraduate Scholarship and Career Development Program", provider: "The LAGRANT Foundation",
        targetYear: "Sophomore",
        whatYouGet: "A 2,500 dollar award plus a paid trip to Washington D.C. for a welcome dinner, three days of career development workshops and a donor reception, and a mandatory one-year commitment to stay in contact with the foundation for professional guidance and academic support. The mentorship, not the money, is the pipeline part.",
        eligibility: "Current freshman, sophomore, junior or non-graduating senior. Priority goes to rising juniors and seniors. Full-time at a four-year accredited U.S. institution, 12 or more units. Minimum 3.0 GPA, with an optional essay if your GPA does not reflect your ability. You must major in a field with an emphasis in advertising, marketing or public relations, and have at least one year left after the April award.",
        citizenship: "U.S. citizen, permanent resident or DACA recipient. Stated explicitly.",
        openToBusiness: "",
        cycle: "2027 cycle: applications due 5:00 p.m. PST February 15, 2027. Submit by 11:59 p.m. PST January 18, 2027 for 10 bonus points on your application. Scholarship activities in Washington D.C. run April 25 to 28, 2027.",
        link: "https://lagrantfoundation.org/scholarship-application-process/",
        note: "Only useful if you are on the marketing or communications side of business, it will not take a straight accounting or finance major. The 10-point early bonus is a free edge that most applicants ignore, and attendance in D.C. is not optional, skip it and you forfeit the award.",
      },
      {
        name: "Congressional Internship Program", provider: "Congressional Hispanic Caucus Institute (CHCI)",
        targetYear: "Any",
        whatYouGet: "A paid placement in a congressional office in Washington D.C., 4,776 dollars for the summer session or 5,400 dollars for the fall, plus furnished housing with rent and utilities covered, round-trip domestic travel, medical insurance with premiums paid, a 100 dollar monthly Metro stipend, an 8-day orientation and weekly leadership development sessions.",
        eligibility: "Enrolled full time working toward an undergraduate degree in the academic period before the programme. Recent graduates from the term immediately prior may apply. Preference for 3.0 GPA or higher. Community college students graduating in June are eligible for summer if they are transferring to a four-year school in the fall. Application needs a one-page resume, an unofficial transcript, one professional recommendation and three essays of 300 to 600 words.",
        citizenship: "U.S. citizens, lawful permanent residents, asylees, or anyone lawfully authorised to work full time without restriction with valid evidence of employment authorisation. International students on F-1 or M-1 visas are NOT eligible. DACA recipients must hold valid work authorisation at acceptance and keep it for the whole programme.",
        openToBusiness: "",
        cycle: "Applications launched August 15, 2026. Summer 2027 deadline December 1, 2026, programme runs May 19 to July 30, 2027. Fall 2027 deadline March 1, 2027, programme runs August 18 to November 12, 2027.",
        link: "https://chci.org/programs/congressional-internship-program/",
        note: "CHCI says explicitly it wants finance, economics and accounting backgrounds, not just political science. A business major is an asset here, not a mismatch. Apply to every session you are eligible for, the pools are small and the selection committee is the same people.",
      },
    ],
  },
  {
    key: "finance", name: "Bank and finance sophomore programmes",
    blurb: "Early insight and fellowship programmes that banks run a full year before internship recruiting, so the people in them are already interviewing while everyone else is writing a first resume.",
    items: [
      {
        name: "JPMorganChase Fellowship Program", provider: "JPMorganChase, with the Office of Black Affairs and the Office of Hispanic and Latino Affairs",
        targetYear: "Sophomore",
        whatYouGet: "A five-week PAID, full-time summer fellowship in a selected JPMorganChase office. A project-based curriculum on financial services, teamwork and problem solving, plus leadership and technical training. The firm describes it as building a pathway to future employment, which in practice means the summer analyst internship the following year.",
        eligibility: "Sophomore students. The page says the programme is seeking sophomores including, without limitation, Black, Hispanic and Latino students, and then states that all sophomore students interested in the programme, regardless of background, are welcome to apply. Tracks have historically included Banking and Markets, Corporate Strategy and General Management, and Software Engineering.",
        citizenship: "Not stated on the programme page. It is a paid U.S. role, so employer work authorisation applies.",
        openToBusiness: "",
        cycle: "Applications open in the autumn for the following summer and appear by location, so the Apply Now panel only shows locations currently open. The 2026 cycle opened in November 2025. Follow the Talent Network to be told when 2027 opens.",
        link: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/jpmcfellowship",
        note: "This is the consolidation of what JPMorgan used to run as separate named programmes including Sophomore Edge, Advancing Black Pathways and Winning Women. The eligibility wording was rewritten after 2023 to be open to all sophomores, so do not assume you are excluded, and do not expect the old programme names to still work as search terms.",
      },
      {
        name: "Early Identification (Early ID) Program", provider: "Citi",
        targetYear: "Sophomore",
        whatYouGet: "A virtual mentorship programme with technical training, interview preparation specifically for Summer Analyst roles, and what Citi calls a direct pathway to future opportunities. You apply to a maximum of two lines of business.",
        eligibility: "U.S. sophomores enrolled in a four-year bachelor's degree.",
        citizenship: "Not stated. Citi runs the programme for U.S. sophomores.",
        openToBusiness: "",
        cycle: "Two intakes a year. A March start with applications opening in February, and a December start with applications opening in November. That is the only listed cycle on Citi's pre-internship page.",
        link: "https://jobs.citi.com/early-career-programs-pre-internships",
        note: "Two intakes means two shots in the same sophomore year. Take the November one, because it lands before summer analyst recruiting rather than during it. Everything at Citi, programmes and event registrations alike, goes through Workday and shows up labelled as a job, which confuses people into thinking they applied to the wrong thing.",
      },
      {
        name: "Freshman Discovery", provider: "Citi",
        targetYear: "Freshman",
        whatYouGet: "An introductory programme with training, workshops, foundational technical skills and industry insight. It is the entry rung below Early ID.",
        eligibility: "All first-year students in a four-year bachelor's degree at an accredited U.S. institution, regardless of major. Citi says students with limited prior exposure to financial services are particularly encouraged.",
        citizenship: "Not stated.",
        openToBusiness: "",
        cycle: "Starts in May, with applications opening in late March or early April.",
        link: "https://jobs.citi.com/early-career-programs-pre-internships",
        note: "The line about limited prior exposure is not filler. This is the one programme on this whole list where knowing nothing yet is an advantage rather than a disqualifier, so a first-year with no finance background should apply rather than wait a year.",
      },
      {
        name: "Student Leaders", provider: "Bank of America",
        targetYear: "Freshman",
        whatYouGet: "A paid six-week full-time summer internship at a local nonprofit at 17 dollars an hour or local minimum wage, whichever is higher, plus a three-day national Leadership Summit with all travel, hotel and meals paid by the bank. Roughly 300 students a year.",
        eligibility: "READ THIS CAREFULLY, IT CHANGED. You must be at least 18, have earned your high school diploma within the last 24 months, and have earned at least 12 and no more than 18 credit hours of post-secondary credit. That makes it a programme for students in their first year of college, not for high school students. You also need two recommendations, a transcript, a leadership role within the last 24 months, and you must live in an eligible programme location for the summer. You are ineligible if you were previously selected as a high school student.",
        citizenship: "Must be legally authorised to work in the United States without sponsorship through the end of the programme summer. Stated explicitly.",
        openToBusiness: "",
        cycle: "The published 2026 cycle opened February 9, 2026 and closed March 16, 2026 at 11:59 pm Eastern with no extensions. Applicants were notified by the end of April, the Leadership Summit ran June 16 to 18, 2026 and the internship started mid-June. The page still shows that 2026 cycle, so treat February as the opening month for 2027 and confirm.",
        link: "https://about.bankofamerica.com/en/making-an-impact/student-leaders",
        note: "Most people, including most advisers, still think Student Leaders is a high school programme. The current eligibility, 12 to 18 post-secondary credit hours, means a college first-year applying in the spring of freshman year is exactly the target. You intern at the nonprofit, not at Bank of America, and living expenses during the internship are on you.",
      },
      {
        name: "Possibilities Series", provider: "Goldman Sachs",
        targetYear: "Freshman",
        whatYouGet: "An introduction to financial services for first-year students, built around interactive skills workshops and network building with Goldman people. It is the firm's earliest touchpoint in the Americas.",
        eligibility: "First-year undergraduates graduating between December 2028 and May 2029 attending a U.S. college or university. Location confirmed on acceptance.",
        citizenship: "Not stated on the programme page.",
        openToBusiness: "",
        cycle: "The page currently reads Applications are now closed and lists programme dates of Spring 2026, so it is showing a PAST cycle as of September 2026. The equivalent next cycle would target first-years graduating a year later. Watch the programmes and internships listing for the reopen.",
        link: "https://www.goldmansachs.com/careers/students/programs-and-internships/americas/possibilities-series",
        note: "Goldman's programme listing is a JavaScript filter, so browsing it turns up nothing useful and the individual pages are the only real content. Bookmark the Americas programmes and internships page and re-check it each autumn rather than trying to search for programme names.",
      },
      {
        name: "Early Insights", provider: "Morgan Stanley",
        targetYear: "Sophomore",
        whatYouGet: "Workshops, networking with Morgan Stanley staff, and participation in the first stage of Summer Analyst recruiting. The value is the accelerated interview access, not the content.",
        eligibility: "COULD NOT CONFIRM FROM THE FIRM'S OWN PAGE. Morgan Stanley has retired its standalone programme pages, and every old Early Insights URL now redirects to the general Career Opportunities Search filtered to Students and Graduates. Treat the second-year eligibility described on third-party sites as unverified until you see a live posting.",
        citizenship: "Not stated anywhere we could verify on a Morgan Stanley page.",
        openToBusiness: "",
        cycle: "Not published on a firm page. Postings appear on the career search, historically in the autumn for the following spring and summer.",
        link: "https://www.morganstanley.com/careers/career-opportunities-search?opportunity=sg",
        note: "The reason you cannot find a Morgan Stanley Early Insights page is that there is not one any more, not that you are searching badly. Set an alert on the career search rather than hunting for a programme landing page, and verify the year requirement on the actual posting.",
      },
    ],
  },
  {
    key: "consulting", name: "Consulting and accounting sophomore programmes",
    blurb: "Consulting firms recruit a year earlier than anyone else, so the sophomore programmes here are how you get into a junior-year summer associate seat.",
    items: [
      {
        name: "Growing Future Leaders (GFL)", provider: "Boston Consulting Group",
        targetYear: "Sophomore",
        whatYouGet: "A paid summer internship in a BCG U.S. or Canadian office during your sophomore summer, working on a real case team with an assigned mentor and formal training. Complete it successfully and you are eligible for a scholarship plus an offer to return as a Summer Associate after your junior year, which is the seat everyone else spends junior year competing for.",
        eligibility: "Current sophomore at a U.S. or Canadian university. BCG's programme page is a JavaScript job-board template and the eligibility panel would not load for us, so treat the graduation window and any background criteria as UNCONFIRMED until you read the live posting. Historically the programme also carried race and ethnicity criteria, which is exactly the kind of wording that has been rewritten across the industry since 2023, so read the current posting rather than any summary of it, this one included.",
        citizenship: "Not confirmed.",
        openToBusiness: "",
        cycle: "Applications have historically opened in late summer for the following summer, so autumn of sophomore year is the window. Confirm on the page.",
        link: "https://careers.bcg.com/global/en/on-campus/programs/growing-future-leaders",
        note: "This is the single highest-leverage item on this list for anyone who wants consulting, because it collapses two recruiting cycles into one. It is also the item whose published eligibility we could least verify, so read the posting itself and do not rely on what a forum or a prep site says it used to require.",
      },
      {
        name: "First Forward", provider: "Bain & Company",
        targetYear: "Sophomore",
        whatYouGet: "A 1.5 day in-person summit with case discussions and simulations, professional development workshops, networking with Bain consultants, resume and personal brand coaching, and access to Bain's First-Generation Low-Income affinity group.",
        eligibility: "Quoted from Bain: sophomore/second-year students attending a school in the U.S. or Canada with an anticipated graduation date between December 2027 and Summer 2028. Bain adds that it is for students who are the first in their family to go to college or who identify with growing up in a lower socio-economic household.",
        citizenship: "No citizenship requirement mentioned.",
        openToBusiness: "",
        cycle: "Applications are CLOSED as of September 2026. The page says to check back for the next cycle and gives no dates.",
        link: "https://www.bain.com/careers/work-with-us/internships-programs/first-forward/",
        note: "First-generation or low-income is the actual qualifier here, not ethnicity. If you are the first in your family at university, say so plainly in the application, because it is the criterion being screened for rather than something to downplay.",
      },
      {
        name: "Consulting Kickstart", provider: "Bain & Company",
        targetYear: "Sophomore",
        whatYouGet: "A virtual three-part webinar series in October covering what consulting actually is, direct contact with Bain recruiters and recent hires, an explanation of the recruiting process, and guidance on choosing an office preference. It is low commitment and fits around classes.",
        eligibility: "Second-year (sophomore) undergraduates attending a four-year university in the United States or Canada.",
        citizenship: "Not stated.",
        openToBusiness: "",
        cycle: "Applications are OPEN, deadline Monday October 5 at 11:59 pm PST, with the series running in October.",
        link: "https://www.bain.com/careers/work-with-us/internships-programs/consulting-kickstart/",
        note: "This is the easiest thing on the entire list to get into and the deadline is weeks away. It is three webinars, not an internship, so the value is that Bain recruiters now know your name before junior-year recruiting starts. Do this one first.",
      },
      {
        name: "Discovery Internship", provider: "Deloitte",
        targetYear: "Sophomore",
        whatYouGet: "A paid summer internship for first-year and sophomore students, placed on one or more real client projects with an assigned mentor, plus national and local learning and networking events. Length varies by service line, so read the posting. Strong performers are routed toward the full junior-year internship.",
        eligibility: "Postings are titled Discovery Intern (Freshman/Sophomore) or Discovery Intern (Sophomore/Junior) and are split by service line, Audit and Assurance, Tax, Risk and Financial Advisory, and Deloitte Technology, and by profile, Accounting or Business/Technology. Accounting-profile postings require definitive plans to pursue a bachelor's in accounting or a related field AND CPA eligibility, meaning the credit hours to sit for the CPA exam on graduation. Check the graduation-year requirement on each posting, it is specific and it changes every cycle.",
        citizenship: "Not stated in the general description. Check the individual posting.",
        openToBusiness: "",
        cycle: "Rolling, and it runs early. Postings for a given summer appear around September of the preceding year and recruiting for that summer closes around May 1. Deloitte fills seats as strong applicants appear, so applying in September beats applying in January.",
        link: "https://apply.deloitte.com/en_US/careers/SearchJobs?keyword=Discovery",
        note: "There is no single Discovery landing page to bookmark, only job postings, which is why students never find it. Search the term Discovery on Deloitte's job site and filter by service line. The CPA-eligibility clause on accounting postings is a hard gate, so if you are on a 120-hour track, check your credit plan before you apply.",
      },
      {
        name: "Advance", provider: "PwC",
        targetYear: "Junior",
        whatYouGet: "PwC's internship experience: real client work alongside PwC staff, technical and digital skills training, coaching and feedback, and a professional network inside the firm. It is the internship itself rather than a pre-internship programme.",
        eligibility: "Undergraduates heading into the internship year. PwC does not publish a separate sophomore pre-internship programme page today.",
        citizenship: "PwC states plainly that it is not hiring experienced or entry-level candidates who will need PwC sponsorship through the H-1B lottery now or in the future, with a narrow exception: only the Chinese, Japanese and Korean Business Network roles are eligible for sponsorship and for the Destination CPA Program.",
        openToBusiness: "",
        cycle: "Follows PwC's entry-level recruiting calendar. Postings are on the PwC entry-level job search.",
        link: "https://jobs-us.pwc.com/us/en/advance",
        note: "Included as a correction, not a recommendation. PwC's named sophomore programmes are no longer on its site, so if someone tells you to apply to PwC Start or PwC Challenge, those pages do not exist any more. The H-1B line is the most concrete citizenship statement of any firm on this list, and international students should read it before spending time on PwC.",
      },
    ],
  },
  {
    key: "tech", name: "Tech pipelines and early-insight programmes",
    blurb: "Mostly technical, but listed here because ASU business students in CIS, business data analytics or information systems qualify for several of them and rarely realise it.",
    items: [
      {
        name: "Explore Microsoft", provider: "Microsoft",
        targetYear: "Sophomore",
        whatYouGet: "A 12-week paid summer internship in the U.S. built specifically for students in their first two years of college. You rotate through the three main phases of the product development cycle, Design, Build and Quality, working in a pod with other Explore interns, with mentoring, community building and networking alongside the work.",
        eligibility: "First or second year full-time enrolled bachelor's student during the academic term immediately before the internship. You need an interest in majoring in a technical discipline: Microsoft names Computer Science, Computer Engineering, Information Technology, Data Science, Electrical Engineering and Cybersecurity. You cannot take classes while interning, and you must be at least 16.",
        citizenship: "Not stated on the programme overview. Check the individual posting on the Microsoft jobs site.",
        openToBusiness: "",
        cycle: "Postings go up on the Microsoft student jobs site and are filled on a rolling basis. Watch from early autumn.",
        link: "https://careers.microsoft.com/v2/global/en/exploremicrosoft",
        note: "Explore is the rare sophomore programme that is a genuine paid engineering internship rather than a networking event, and it is the reason people who did it have a Microsoft line on the resume before junior year. An ASU Computer Information Systems or Business Data Analytics major fits the named disciplines, a straight accounting or finance major does not.",
      },
      {
        name: "ColorStack membership", provider: "ColorStack",
        targetYear: "Any",
        whatYouGet: "Free membership in a national community of Black and Latinx computing students. A Slack workspace for homework help and career advice, monthly workshops and coaching from industry people, a resume drop straight to partner companies, hundreds of posted opportunities a month, and the annual Stacked Up Summit career fair.",
        eligibility: "Black and Latinx Computer Science students. ColorStack states its mission as increasing the number of Black and Latinx Computer Science graduates who go on to technical careers.",
        citizenship: "Not stated.",
        openToBusiness: "",
        cycle: "Membership applications are open on the site. The Stacked Up Summit is annual and currently open for registration.",
        link: "https://www.colorstack.org/",
        note: "The resume drop to partner companies is the part that actually moves the needle, and it costs nothing. This is unambiguously a computing programme, not a business one, so send it to your CIS and data analytics members rather than the whole chapter.",
      },
      {
        name: "CodePath courses and career services", provider: "CodePath",
        targetYear: "Any",
        whatYouGet: "Free applied engineering courses taught by working software engineers, run through your university, plus a separate career services track for students already in the programme. It is skills first, network second, which is the opposite shape of most things on this list.",
        eligibility: "Open through an application portal. Courses are aimed at students building toward software engineering roles. Check the individual course page for prerequisites.",
        citizenship: "Not stated.",
        openToBusiness: "",
        cycle: "Courses run on a semester calendar with an application portal that opens ahead of each term.",
        link: "https://www.codepath.org/courses",
        note: "Worth listing only because it is free and it is the one thing here that fixes an actual skills gap rather than an access gap. If a member keeps failing technical screens, this is the referral, not another networking programme.",
      },
    ],
  },
  {
    key: "consulting2", name: "Consulting pipelines",
    blurb: "Sophomore and freshman early-insight programmes at Bain, BCG and Accenture that lead to the junior-year internship rather than being one.",
    items: [
      {
        name: "Consulting Kickstart", provider: "Bain & Company",
        targetYear: "Sophomore",
        whatYouGet: "A three-part virtual webinar series held in October. You hear from Bain consultants, get recruiters walking you through how Bain actually screens and interviews, and build a named relationship with the recruiting team before junior-year applications open. No stipend, no interview, no offer is promised on the page.",
        eligibility: "Page states: second-year (sophomore) undergraduate students attending a four-year university in the United States or Canada. No major, GPA, background or first-generation criteria stated. Not race-conscious.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page.",
        openToBusiness: "",
        cycle: "Open right now. Page states applications are open and the deadline is Monday, October 5 at 11:59pm PST. October 5 falls on a Monday in 2026, so this is the current live cycle, not a stale page. Program runs in October.",
        link: "https://www.bain.com/careers/work-with-us/internships-programs/consulting-kickstart/",
        note: "This is the only Bain sophomore programme with a live application as of mid-September 2026. Every other Bain early-insight programme on this list closed months ago and reopens in the spring. If a sophomore does exactly one thing this month, this is it, because it is low-effort, virtual, and it puts you in Bain's system before the BEL and First Forward applications open in the new year.",
      },
      {
        name: "First Forward", provider: "Bain & Company",
        targetYear: "Sophomore",
        whatYouGet: "A 1.5-day in-person summit at a Bain office. Immersive sessions, real case discussions, professional development workshops, resume and personal branding work, and networking with Bain professionals. Hosted in Boston, Chicago, Denver, New York, San Francisco, and Washington DC. The page does not promise a stipend, travel cover, an interview, or an offer.",
        eligibility: "Page states: second-year undergraduates at U.S. or Canadian schools with an anticipated graduation date between December 2027 and Summer 2028, who are first in their families to attend college or who identify with the experience of growing up in a lower socio-economic household. No prior business experience required. This is a first-generation and socio-economic criterion, not a race criterion.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page.",
        openToBusiness: "",
        cycle: "Closed. Page states applications are closed and to check back for the next cycle. The in-person dates shown are May 28 and 29. Expect the next application window in winter or early spring for a late-May program.",
        link: "https://www.bain.com/careers/work-with-us/internships-programs/first-forward/",
        note: "This is the Bain programme most ALPFA members will actually qualify for, and it is quietly the better-odds door than BEL, because the first-generation and lower-income criterion is self-identified and far fewer students know the programme exists. Bain covers the graduation window explicitly, so a current sophomore graduating in 2028 is exactly in scope for the next cycle.",
      },
      {
        name: "Building Entrepreneurial Leaders (BEL)", provider: "Bain & Company",
        targetYear: "Sophomore. The current page says only \"undergraduate students\" and does not name a class year, but Bain lists BEL alongside its other sophomore exploratory programmes and it has historically been a sophomore programme.",
        whatYouGet: "Exposure to life as a consultant through interactive sessions and conversations with Bain employees, run across 14 or more U.S. and Toronto offices. The current page does not state a stipend, travel cover, guaranteed interview, or offer. Founded in 2009.",
        eligibility: "As written today: undergraduate students. The page states no race, ethnicity, or background criteria. Do not treat this as a Latino-specific or diversity-specific programme based on the current page, whatever older guides say.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page.",
        openToBusiness: "",
        cycle: "Closed. Page states: applications for the 2026 program are closed, check back later for the 2027 BEL program. The 2026 cycle closed in early February, so expect a January application window.",
        link: "https://www.bain.com/careers/work-with-us/internships-programs/building-entrepreneurial-leaders/",
        note: "The eligibility language on this page was stripped back after 2024. Third-party consulting-prep sites still describe BEL as restricted to Black, Hispanic, and Indigenous sophomores and still quote a stipend and a shot at an Associate Consultant internship offer. Bain's own page now says none of that. Apply on what the page says, and ask the recruiter directly what the outcome is rather than trusting the blogs.",
      },
      {
        name: "Connecting and Resourcing Empowered Women (CREW)", provider: "Bain & Company",
        targetYear: "Sophomore",
        whatYouGet: "Sessions with senior women in strategy consulting on how they built careers at Bain, plus exploration of consulting career paths and leadership development. The page does not state a stipend, an interview, or an offer.",
        eligibility: "Page states: second-year (sophomore) undergraduate students interested in hearing from women leaders in strategy consulting. No stated restriction on who may apply.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page.",
        openToBusiness: "",
        cycle: "Closed. Page states applications for the 2026 program are closed, check back later for 2027 CREW.",
        link: "https://www.bain.com/careers/work-with-us/internships-programs/crew/",
        note: "Bain runs four separate sophomore doors (Kickstart, CREW, First Forward, BEL) and they are not mutually exclusive. Students routinely pick one and stop. The recruiting team sees the same applicant pool across all four, so showing up in two of them is a cheap way to be a known name rather than a resume.",
      },
      {
        name: "BCG Launch", provider: "Boston Consulting Group",
        targetYear: "Any undergraduate, plus non-MBA master's students. It is the entry point that feeds BCG Embark, which is aimed at students graduating December 2027 to July 2028, so sophomores are the core audience.",
        whatYouGet: "A virtual session series covering consulting fundamentals, the BCG Associate application process, and life at BCG. All content is available on demand and recordings are posted to the portal. One registration gets you every session. The page states plainly that signing up is not a job application.",
        eligibility: "Page states: undergraduate and non-MBA master's students from all fields and backgrounds attending a college or university in the U.S. or Canada. Open to everyone.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page.",
        openToBusiness: "",
        cycle: "Registration is currently closed. Page states registration opens six weeks before sessions kick off, and that the portal closes May 29, 2026. That May date refers to the cycle that has already run, so the page is showing a past cycle.",
        link: "https://careers.bcg.com/global/en/on-campus/programs/bcg-launch",
        note: "Register for Launch even if you only care about Embark. Embark has no separate application at all: BCG selects Embark participants out of the Launch registrant pool based on a checkbox you tick during Launch registration. Miss Launch and you cannot reach Embark.",
      },
      {
        name: "BCG Embark", provider: "Boston Consulting Group",
        targetYear: "Sophomore. Page states current undergraduates in a U.S. program with an anticipated graduation date between December 2027 and July 2028.",
        whatYouGet: "A virtual conference with panels, case interview preparation, and direct connection to BCG consultants in the Black@BCG, Latin@BCG, and Indigenous@BCG networks. No stipend, interview, or offer is stated.",
        eligibility: "Hosted in partnership with the Black@BCG, Latin@BCG, and Indigenous@BCG networks, and aimed at students who have demonstrated leadership and a commitment to fostering community and belonging. The FAQ states explicitly: \"BCG Embark is open to candidates of all backgrounds.\" The affinity networks themselves are described as open to all BCGers. So it is affinity-network-aligned but not identity-restricted.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page. U.S. offices only.",
        openToBusiness: "",
        cycle: "Past cycle shown. Page states register via the BCG Launch form by April 15, 2026 for a virtual conference on May 14, 2026. Both dates have passed. Expect the same rhythm in spring 2027.",
        link: "https://careers.bcg.com/global/en/on-campus/programs/embark",
        note: "This is the closest thing on the whole list to a Latino-facing programme at a top consulting firm, and it is nearly invisible because it has no application of its own. The mechanism is: register for BCG Launch, then tick interest in Latin@BCG. If you already registered for Launch without ticking it, BCG's page says to email associate.recruiting@bcg.com and name the network.",
      },
      {
        name: "BCG Advance", provider: "Boston Consulting Group",
        targetYear: "Junior. It was moved off sophomores this cycle.",
        whatYouGet: "A half-day invite-only virtual conference with panels and skill-building sessions on navigating the recruiting process. The page states directly that attending does NOT include an interview for a summer internship, and that the full-time application must be submitted separately.",
        eligibility: "Page states: current juniors or third-year students at a college or university in the U.S. or Canada, graduating between December 2026 and July 2027, interested in the Women@BCG network, which is described as open to all. Open to all fields of study and backgrounds.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page. U.S. and Canada offices only; selecting an office elsewhere disqualifies your submission.",
        openToBusiness: "",
        cycle: "Past cycle shown. Page states register by April 24, 2026 for a Zoom conference on May 21, 2026. Both dates have passed.",
        link: "https://careers.bcg.com/global/en/on-campus/programs/bcg-advance",
        note: "BCG moved Advance from sophomores to juniors this year and says so in its own FAQ, promising instead \"expanded opportunities\" for sophomores. In practice that expanded opportunity is Launch and Embark, which are lighter-touch. If you are a sophomore who found Advance on an old guide, you are one year early and should go to Launch instead.",
      },
      {
        name: "Elevate to Innovate Externship", provider: "Accenture",
        targetYear: "Freshman. Accenture states: first-year students enrolled in a four-year undergraduate program at a college or university in the US or Canada.",
        whatYouGet: "A virtual two-day professional development and learning experience with learning sessions, networking, and engagement activities. Accenture states you develop foundational business skills and industry acumen, expand your network, and get a fuller understanding of Accenture's entry-level career opportunities. No stipend, interview, or offer stated.",
        eligibility: "First-year undergraduates in the US or Canada. No race, ethnicity, first-generation, or major criteria stated. Open to all.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page.",
        openToBusiness: "",
        cycle: "No dates published on the student programmes page. Accenture routes applications through its Workday careers site.",
        link: "https://www.accenture.com/us-en/careers/life-at-accenture/internships-students",
        note: "This is one of very few programmes anywhere aimed at genuine first-years, which makes it the best first thing an ALPFA freshman can put on a resume. Accenture's ladder is unusually explicit: Elevate to Innovate in year one, Innovation Challenge or Student Leadership Program in year two, Summer Analyst in year three. Most firms leave that progression implicit; Accenture prints it, so you can plan three years at once.",
      },
      {
        name: "Accenture Innovation Challenge", provider: "Accenture",
        targetYear: "Sophomore. Accenture states: second-year students enrolled in a four-year undergraduate program at a college or university in the US or Canada.",
        whatYouGet: "Accenture's flagship case competition. Accenture partners with a non-profit, builds a real case around a pressing issue, and student teams compete to present solutions. You develop core consulting skills through the case and see what a career at Accenture looks like. No stipend, interview, or offer stated.",
        eligibility: "Second-year undergraduates in the US or Canada. No race, ethnicity, first-generation, or major criteria stated. Open to all.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page.",
        openToBusiness: "",
        cycle: "No dates published on the student programmes page.",
        link: "https://www.accenture.com/us-en/careers/life-at-accenture/internships-students",
        note: "A case competition is the one format on this list that produces something you can talk about in an interview at any firm, not just the host. An ALPFA chapter can enter a team together, which turns an individual application into a group activity and solves the hardest part, which is getting people to actually start.",
      },
      {
        name: "Student Leadership Program", provider: "Accenture",
        targetYear: "Sophomore. Accenture states: second-year students enrolled in a four-year undergraduate program at a college or university in the US or Canada.",
        whatYouGet: "A semester-long leadership and professional development programme built on one-to-one mentorship. You get a named Accenture mentor who guides you through the programme, plus a series of virtual learning calls hosted by Accenture leaders to sharpen professional and soft skills. This is the only programme on this list where the core deliverable is a sustained individual mentor relationship rather than an event.",
        eligibility: "Second-year undergraduates in the US or Canada. No race, ethnicity, first-generation, or major criteria stated. Open to all.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page.",
        openToBusiness: "",
        cycle: "Semester-long, so there is a fall and a spring shape to it, but Accenture publishes no application dates on the student programmes page.",
        link: "https://www.accenture.com/us-en/careers/life-at-accenture/internships-students",
        note: "A semester of one-to-one mentorship outweighs a two-day conference for most people, and far fewer students apply because it demands months rather than a weekend. Accenture publishes no deadline for it, which means the only reliable route is to set a job alert on its Workday site and to ask the Accenture campus recruiter directly when the next cohort opens.",
      },
    ],
  },
  {
    key: "accounting", name: "Accounting and Big Four pipelines",
    blurb: "Pre-internship internships, leadership conferences and early-application routes at Deloitte, EY, PwC and KPMG that gate the junior-year internship and the full-time offer behind it.",
    items: [
      {
        name: "Discovery Internship", provider: "Deloitte",
        targetYear: "Freshman and Sophomore. Deloitte's own requisition titles read \"Discovery Intern (Sophomore)\" and \"Discovery Intern (Sophomore/Junior)\" depending on business.",
        whatYouGet: "A paid seven-week summer internship placed on one or more real client projects, with an assigned mentorship team: a counselor at manager or senior manager level for career guidance, plus an onboarding advisor as a peer buddy. Ongoing lunch and learns, service line spotlights, and scheduled training. Deloitte's job postings state that depending on performance, Discovery interns may be offered a subsequent internship, which is the junior-year internship that converts to full-time.",
        eligibility: "Stated in the job requisitions rather than on a marketing page: an anticipated graduation date two years out with definitive plans to pursue a bachelor's degree in accounting, business, economics, STEM or a related field. 3.0 cumulative GPA minimum, 3.2 or higher preferred. Deloitte states the internship is open to all eligible students and encourages candidates from a wide range of backgrounds. It is not identity-restricted.",
        citizenship: "No DACA language found. The requisitions carry standard Deloitte work-authorisation terms rather than a programme-specific statement.",
        openToBusiness: "",
        cycle: "No Discovery Intern requisition is open as of September 15, 2026. A search of apply.deloitte.com returns zero Discovery internship postings. The Summer 2027 cycle closed on May 1, 2026 and the requisitions now 404. Deloitte recruits Discovery on a rolling basis, so the Summer 2028 postings will appear and fill before the stated deadline.",
        link: "https://www.deloitte.com/us/en/careers/internships.html",
        note: "Deloitte has no marketing page for Discovery. The tile on its own student site points at the generic internships page, and every real detail lives only inside the job requisitions, which expire and 404 each cycle. That means the programme is effectively invisible between cycles, and the students who get in are the ones with a job alert set on apply.deloitte.com rather than the ones checking deloitte.com. Rolling admissions also means applying in month one beats applying in month five with a better resume.",
      },
      {
        name: "Deloitte National Leadership Conference (DNLC)", provider: "Deloitte",
        targetYear: "Sophomore and Junior. Page states plainly: \"Deloitte National Leadership Conference (DNLC) is open to sophomores and juniors.\"",
        whatYouGet: "A multi-day conference at Deloitte University in Westlake, Texas, with leadership development workshops, hands-on skill-building sessions, and networking with Deloitte professionals and students from across the country. The page does not state a stipend or a guaranteed interview, but the testimonials on Deloitte's own page describe DNLC leading directly to office contacts and client placements.",
        eligibility: "Page lists qualities, not criteria: naturally curious, tech savvy, excellent communicators, strong team players, continuous learning mindset. It states that specific qualifications vary by business. No race, ethnicity, or first-generation criteria appear. Open to all.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the page.",
        openToBusiness: "",
        cycle: "The page is stale. It still says \"Dates for the 2025 DNLC vary by business and office location\" as of September 2026. Dates vary by business and office, so there is no single cycle.",
        link: "https://www.deloitte.com/us/en/careers/join-deloitte/deloitte-national-leadership-conference.html",
        note: "There is no online application. Deloitte's page says outright: contact your campus recruiter to apply. That makes DNLC the one programme on this list where an ALPFA chapter relationship is the whole mechanism, because selection runs through the recruiter assigned to your school rather than through a portal. Get the ASU Deloitte campus recruiter's name and email before anything else.",
      },
      {
        name: "EY Career Residency", provider: "EY (Ernst & Young LLP, US)",
        targetYear: "Junior or Senior. The posting requires a predicted undergraduate or graduate accounting degree and the ability to meet state CPA educational requirements before starting full-time, which puts you near the end of your degree. This is not a sophomore programme.",
        whatYouGet: "A paid, two-phase programme that replaces the traditional eight-week internship. Phase one is a three-month full-time Client Service Immersion, January to March 2028, at 40-plus hours per week, primarily in person. Phase two is a five-month virtual Skills Academy, April to August 2028, at roughly 15 to 20 hours per month, and you only continue into it if you receive and accept a full-time Analyst offer at the end of phase one. The posted pay is $37.50 to $48.08 per hour. Completing it makes you eligible for a full-time Analyst role, which is a higher entry title than the traditional path.",
        eligibility: "Predicted undergraduate or graduate accounting degree with a strong academic record. Minimum 3.0 cumulative GPA, 3.2 or higher preferred. Must meet minimum CPA educational requirements for the state of your base office before full-time employment, with a demonstrable plan to pass the CPA exam. Must live within commuting distance of the assigned EY office during phase one. No race, ethnicity, or first-generation criteria. Open to all.",
        citizenship: "Restrictive and stated explicitly: \"Legal authorization to work in the US without the need for employer sponsorship, currently and in the future.\" No DACA language. Read literally, this excludes anyone who will ever need sponsorship.",
        openToBusiness: "",
        cycle: "Opening now. EY's August 17, 2026 press release states it will begin accepting applications for the inaugural class of EY Career Residents this fall, ahead of a January 2028 launch. Individual requisitions are already live on EY's early careers board.",
        link: "https://www.ey.com/en_us/assurance/ai-and-people-rising-together",
        note: "This is a structural change, not a new perk. EY is replacing the summer internship with a January to March in-person block, which means it collides with spring semester rather than summer. Nobody has run this cycle yet, so there is no upperclassman who can tell you how the academic conflict gets handled. Ask the recruiter how residents stay enrolled during a 40-hour-per-week January to March commitment before you commit to it.",
      },
      {
        name: "Destination CPA", provider: "PwC",
        targetYear: "Sophomore. Page states: sophomore year of a four-year degree program, or junior year of a five-year degree program.",
        whatYouGet: "A three-day in-person experience with future CPAs from across the country and PwC professionals, covering career paths and what a CPA license opens up. PwC pays travel and accommodation in full. You must be able to attend the entire event.",
        eligibility: "You must be an accounting major pursuing the academic requirements for CPA licensure, and you must apply to and receive a 2028 Audit or Tax Client Service internship offer from PwC. No race, ethnicity, or first-generation criteria. Open to all who meet the academic and offer criteria.",
        citizenship: "Restrictive and stated explicitly. PwC states it is not hiring entry-level job seekers who will need PwC sponsorship through the H-1B lottery now or in the future, and names the Chinese, Japanese, and Korean Business Networks as the only roles eligible for sponsorship and for participation in Destination CPA. No DACA language.",
        openToBusiness: "",
        cycle: "Applications are rolling for the 2028 internship that gates the invitation, so effectively open now. The page states \"2027 dates will be announced soon\" for the event itself.",
        link: "https://jobs-us.pwc.com/us/en/destination-cpa",
        note: "Read the order of operations carefully, because it is backwards from every other programme here. Destination CPA is not something you apply to. You apply to the 2028 Audit or Tax internship, you receive and accept that offer, and the invitation follows. So the real deadline is the internship deadline, not a conference deadline. There is also a required online assessment that arrives by email within hours of applying, and your application is not complete until you finish it, which catches people out on rolling deadlines.",
      },
      {
        name: "Embark Scholars Program", provider: "KPMG",
        targetYear: "Sophomore, effectively. The rule is stated as a remaining-semesters test rather than a class year: on completing Embark you must have at least three more semesters, or the quarter-system equivalent, before your degree and CPA eligibility requirements are done.",
        whatYouGet: "A multi-year paid internship, not a conference. Rotations through KPMG Audit, Tax, and Advisory so you can work out which practice you want, technical and professional development training, a cross-functional network of KPMG professionals, and a team Capstone project. The stated purpose is to identify the practice you want to intern in the following summer, so it feeds directly into the standard internship.",
        eligibility: "Page states: applicants must be first-generation or Community College students pursuing or intending to pursue a Bachelor or Master of accounting or equivalent, or an IT-related degree, from an accredited college or university, and be interested in a career at a public accounting firm. 3.0 GPA or above preferred. KPMG states it \"is an equal opportunity employer and encourages all qualified students with interest in the program to apply.\" This is a first-generation and community-college criterion, not a race criterion.",
        citizenship: "No citizenship, DACA, or work-authorisation language on the programme page.",
        openToBusiness: "",
        cycle: "No dates on the programme page. KPMG points you to its campus job board to find open Embark Scholar Intern requisitions, which are posted per office and per start year. Requisitions we checked from prior cycles have already expired.",
        link: "https://www.kpmguscareers.com/early-career/program/",
        note: "This is the highest-value item on the list for a first-generation ALPFA member, and it is the only one that is a paid multi-year internship rather than a conference. The community-college route is worth reading twice: a transfer student who started at Maricopa and moved to ASU qualifies on the community-college criterion even if they are not first-generation. The full brochure with the eligibility bullets is on a separate Ceros microsite that KPMG's own navigation buries.",
      },
      {
        name: "KPMG Rise Leadership Conference", provider: "KPMG",
        targetYear: "Not stated. KPMG does not publish a class year for Rise. It sits under the pre-internship section of the early-career page, which KPMG introduces with \"as early as your freshman year\", so treat it as Freshman through Junior and confirm with a recruiter.",
        whatYouGet: "A multi-day leadership programme at KPMG Lakehouse, KPMG's training campus in Lake Nona, Florida. KPMG's description states it provides scholarship opportunities, career development, and leader insights, and brings students from across the country together to build networks.",
        eligibility: "KPMG's page describes Rise as an \"inclusive leadership program\" but publishes no eligibility criteria at all. Nothing on the current page restricts it by race, ethnicity, or background.",
        citizenship: "No citizenship, DACA, or work-authorisation language published.",
        openToBusiness: "",
        cycle: "Stale. The Rise interest form still reads \"Thank you for your interest in the 2025 Rise Leadership Conference. The application is now closed\" as of September 2026. There is no published 2026 or 2027 cycle. The form collects your details to notify you of future opportunities.",
        link: "https://kpmgcampus.avature.net/rise2023app?tags=risekpmgcareerssite",
        note: "The interest form URL still carries \"rise2023\" in it and the copy still says 2025, which means nobody at KPMG has touched this page in over a year. Do not read that as the programme being dead, because it is still described on KPMG's live early-career page, but do not wait on the form either. Submit it and separately ask a KPMG campus recruiter whether Rise is running this year.",
      },
      {
        name: "KPMG Advisory Talent Program", provider: "KPMG",
        targetYear: "Not stated on the page. The application form asks for both undergraduate and graduate graduation dates, so it spans both. Confirm with a recruiter before assuming sophomore eligibility.",
        whatYouGet: "KPMG describes it as a leadership programme to attract and empower top talent, with networking, learning from industry leaders, and exploring Advisory positions at KPMG. No stipend, interview, or offer is stated.",
        eligibility: "The page tells you to review the programme qualifications before applying but does not publish them on the form. No race, ethnicity, or first-generation criteria appear anywhere on the live pages.",
        citizenship: "No citizenship, DACA, or work-authorisation language published.",
        openToBusiness: "",
        cycle: "Closed, past cycle. The form states the 2026 Advisory Talent Program application closed on March 9, 2026, and offers a notification signup for the 2027 programme. Expect a January or February window.",
        link: "https://kpmgcampus.avature.net/advisorytalentprogram?source=Avature+Portal&tags=atpkpmgcareersite",
        note: "This is the Advisory-side equivalent of what most students only know on the Audit and Tax side, and it matters because Advisory is where the consulting-style work sits at KPMG. The notification form is worth filling in now: it is the only way to be told when the 2027 window opens, since KPMG does not announce it on the main careers page.",
      },
      {
        name: "Early Internship Application and Global Advantage Program", provider: "KPMG",
        targetYear: "Sophomore. KPMG's wording is \"two years prior to graduation\", which for a four-year degree means applying in your sophomore year for an internship that sits between sophomore and junior year.",
        whatYouGet: "An expedited route: KPMG accepts internship applications two years before graduation rather than one. Once you receive an internship offer, a selected subset is invited to Global Advantage, a four-day international programme. Previous hosts were Prague, Brussels, and Copenhagen. The page states that after you submit your application for a 2027 internship position, eligible candidates are automatically emailed the link to apply to Global Advantage.",
        eligibility: "Open to any student applying for a KPMG internship two years before graduation. Global Advantage selection is a subset of internship offer-holders. No race, ethnicity, or first-generation criteria stated.",
        citizenship: "No citizenship or DACA language on the page. Global Advantage involves international travel, so a passport and the ability to travel are implied but not stated.",
        openToBusiness: "",
        cycle: "Rolling. The page currently references applications for 2027 internship positions.",
        link: "https://www.kpmguscareers.com/early-career/program/",
        note: "This is the single most underused mechanism in the Big Four. Most sophomores assume internship applications are a junior-year thing, so the sophomore applicant pool is small, and KPMG explicitly invites it. The Global Advantage invitation is automatic once you hold an offer, which means the whole thing is gated by applying a year earlier than your classmates and nothing else.",
      },
    ],
  },
  {
    key: "employer", name: "Employer run tech programmes",
    blurb: "Programmes run directly by Microsoft, Amazon, Google and Salesforce, which pay well and carry a return offer but now gate hard on year of study, technical coursework and in most cases a CS major.",
    items: [
      {
        name: "Explore Microsoft Program", provider: "Microsoft",
        targetYear: "Freshman and Sophomore. There are two separate applications, one for first-year and one for second-year undergraduates, and the page tells you not to apply to both.",
        whatYouGet: "A 12-week paid US summer internship (8 weeks in India). You work in a pod with other Explore interns rather than alone on a team, and you rotate through both Program Manager and Software Engineer work across the design, build and quality phases. You get a mentor, community programming and networking. It is the recognised on-ramp to a standard Microsoft university internship later.",
        eligibility: "First or second year of a bachelor's degree in the United States, Canada or Mexico (the second-year application also covers India). Non-CS and business majors CAN apply: the FAQ says plainly 'We do not require you be a computer science major to apply.' The hard gate is coursework, not major: you must have completed an Introduction to Computer Science course or equivalent AND one semester of calculus or equivalent. A business major who has taken an intro programming course and a calc course qualifies; one who has not, does not.",
        citizenship: "The page sets no citizenship or residency rule. It scopes by country of study only. It says nothing about visa sponsorship, so do not assume either way.",
        openToBusiness: "Business majors yes, with intro CS plus one calculus course",
        cycle: "Summer programme, mostly at Redmond WA, Atlanta GA and India campuses. The page does not publish an application window. As of 2026-09-15 no Explore-specific posting was visible.",
        link: "https://careers.microsoft.com/v2/global/en/exploremicrosoft",
        note: "The 'Explore Program internships' job list at the bottom of that page is not filtered to Explore. On 2026-09-15 it was showing a National Technology Intern role in Paris, a Government Affairs Intern role and a Senior Software Engineer role. Do not read that widget as the Explore posting list, and do not conclude from it that applications are open or closed.",
      },
      {
        name: "Microsoft Discovery Program", provider: "Microsoft",
        targetYear: "High school senior, entering as a rising first-year. Current college students are not eligible.",
        whatYouGet: "A 4-week paid onsite internship with a real project, mentorship from Microsoft employees, and professional skills work.",
        eligibility: "Graduating high school seniors who live and attend high school within 50 miles of Redmond, Washington, or who attend school in the Atlanta Public Schools, DeKalb, Fulton, Cobb or Gwinnett county districts. You must have completed pre-calculus or equivalent by the start of the programme. For Redmond, applicants must be members or participants of Microsoft-sponsored organisations. Major is irrelevant because you have not declared one yet, but nobody currently enrolled at ASU can use this.",
        citizenship: "Not stated on the page.",
        openToBusiness: "Not applicable, pre-college",
        cycle: "Applications open in early February, reviewed on a rolling basis, interviews scheduled from March, 4 consecutive weeks between July and August. The page still displays the 2026 dates (Atlanta 6 July to 31 July 2026, Redmond 13 July to 7 August 2026), which is a past cycle as of 2026-09-15.",
        link: "https://careers.microsoft.com/v2/global/en/discoveryprogram",
        note: "This is gated on geography, not on academic merit. Microsoft's own students hub describes it loosely as open to 'rising first-year college students', which reads as available to anyone. The programme page itself is far narrower. Tell chapter members with younger siblings in Atlanta or Seattle, not members here.",
      },
      {
        name: "Microsoft Leap", provider: "Microsoft",
        targetYear: "Any, but it is aimed at people past a degree rather than current undergraduates. The page frames it around career changers, people re-entering the workforce and self-taught or bootcamp backgrounds.",
        whatYouGet: "A 16-week immersive apprenticeship combining classroom learning with hands-on engineering on real Microsoft product teams such as Azure, Xbox, Bing and Office 365.",
        eligibility: "The page asks for 'a base foundation of technical training' and 'broad professional experience'. It does not require a CS degree, and it explicitly targets non-traditional academic paths, so a business graduate who has done technical training is in scope. It is not a student programme.",
        citizenship: "Not stated on the landing page.",
        openToBusiness: "Business backgrounds yes, but not for current students",
        cycle: "Not stated. The landing page publishes no cohort dates and no application window, and applications run through individual cohort postings on Microsoft Careers.",
        link: "https://leap.microsoft.com/en-US/",
        note: "The page served to a script carries the string 'You're offline. This is a read only version of the page', which is how the site degrades. Treat the content as accurate but the page as lightly maintained, and go to Microsoft Careers for live cohort postings rather than waiting for this page to change.",
      },
      {
        name: "Amazon Future Engineer Scholarship and Internship", provider: "Amazon",
        targetYear: "High school senior. You apply before you start college. Current undergraduates cannot enter.",
        whatYouGet: "Up to $10,000 a year for up to four years, maximum $40,000, plus a paid Amazon software engineering internship. Interns sit embedded on a software team with a manager, tech mentors and a dedicated career mentor, and most ship production code. Winners in the testimonials interned at Amazon after their freshman year.",
        eligibility: "US high school senior currently enrolled in or having completed a computer science course (or you can opt into an Amazon assessment instead), minimum 2.3 GPA on a 4.0 scale, demonstrated financial need, and planning a bachelor's in a listed technical major. Business majors are NOT eligible. The accepted list is Computer Science, Computer Engineering, Software Engineering, Computer Programming, Math, Data Science, Electrical Engineering, Transportation Technology, Computer Info Systems, Computer Info Science, Cognitive Science, Informatics and Information Technologies.",
        citizenship: "'Must be authorized to work in the U.S. Example: Employment Authorization Document holder, Permanent Resident, or U.S. Citizen.' An EAD holder qualifies, which covers DACA recipients with valid work authorisation. No visa sponsorship.",
        openToBusiness: "No, CS and adjacent technical majors only",
        cycle: "The page states 'Applications for 2025-2026 are closed' as of 2026-09-15, so it is displaying a past cycle. There is a newsletter signup for the next opening and no announced date.",
        link: "https://www.amazonfutureengineer.com/scholarships",
        note: "The money is not the point, the internship is. Amazon's own university site says 'Our internships are for rising seniors and recent graduates', so this scholarship is currently the only documented route into an Amazon software internship as a freshman. If you are already at ASU, that door is shut and there is no equivalent.",
      },
      {
        name: "Futureforce Tech Launchpad", provider: "Salesforce, delivered by CodePath",
        targetYear: "Sophomore, entering as a rising junior. The page says 'students who will complete their sophomore year in Spring 2026' and lists bachelor's graduation year 2028.",
        whatYouGet: "A paid 10-week full-time summer pre-internship. You are hired by Salesforce, work 9 to 5 onsite at Salesforce Tower in San Francisco, get a relocation stipend, a professional Salesforce mentor, CodePath instructors and TAs, and you finish with a deployed full-stack app built with React, Node, Express, PostgreSQL and AI tooling. The stated purpose is to make you competitive for a senior-year internship.",
        eligibility: "Age 18+, major in Computer Science or Computer Engineering at a US college or university, and completed a CS1-type intro programming course with proficiency in functions, conditionals, loops, variables, primitive types and arrays. Business majors are NOT eligible as the page is written.",
        citizenship: "Not stated on the page.",
        openToBusiness: "No, CS or Computer Engineering only",
        cycle: "The page still shows the 2026 cycle: info session 22 January 2026, application deadline 22 February 2026, programme 1 June to 7 August 2026. That cycle is over as of 2026-09-15 and the page now offers a waitlist.",
        link: "https://info.codepath.org/futureforce-tech-launchpad",
        note: "Stage two is an HTML and CSS project plus a 10-minute recorded video answering interview prompts. That screens for follow-through rather than resume prestige, which is unusually favourable if your resume is thin. Join the waitlist now so you catch the January info session rather than discovering it in February.",
      },
      {
        name: "Google Associate Product Manager (APM) Program", provider: "Google",
        targetYear: "Junior and Senior for the internship, Senior and recent graduate for the full-time role. The internship accepts 'students who will graduate from their degree program within 12 months of completing their internship'.",
        whatYouGet: "For full-time APMs: two one-year rotations on different products, then you choose whether to stay or move. One-to-one professional development with a management coach, an APM Alumni Advisor who was once an APM, a buddy from the class above, an international trip where your whole class visits cities to meet local tech leaders, and US mini-trips on topics you choose. Class size is roughly 45 a year with an alumni network of 600+. The APM internship is 12 weeks over the summer on one team, and the page says many APM interns return as full-time APMs.",
        eligibility: "No stated major requirement. Google asks for entrepreneurial people with 'strong technical understanding, product sense, analytical ability, and clear communication skills'. The honest caveat is in Google's own words: for full-time roles, 'Candidates typically have a technical background in computer science or a related area'. A business major can apply and should, but should expect to be assessed on technical fluency.",
        citizenship: "Not stated on the programme page. Locations are the San Francisco Bay Area, New York, London, Munich, Zurich and Tokyo.",
        openToBusiness: "Business majors can apply, but Google says APMs typically have a technical background",
        cycle: "The page states US-based Internship and University Graduate APM applications are open from September 22nd to October 6th, and the London-based Internship window is October 5th to November 12th. No year is printed, but the page is live on 2026-09-15, so the US window opens in one week. Google adds 'You must apply during open application windows to be considered' and recommends applying promptly. There is no information yet on APM University Graduate windows for London or Bengaluru.",
        link: "https://www.google.com/about/careers/applications/programs/apm/",
        note: "This is the one live, dated, business-relevant Google deadline anyone in your chapter can act on right now, and it is the only Google student programme left with a real landing page. Set the job alert today rather than checking the page, because the window is two weeks long and Google does not post a reminder.",
      },
      {
        name: "US Google Student Ambassador Program", provider: "Google",
        targetYear: "Any undergraduate. The page does not state a year requirement.",
        whatYouGet: "A virtual campus ambassador role that runs on the academic calendar. Google lists it as one of only three developmental programmes it currently offers.",
        eligibility: "Not stated on the programmes listing. There is no published major requirement, which makes it the most plausible Google entry point for a business major who is not applying to APM.",
        citizenship: "Not stated. The programme is US-scoped by its name.",
        openToBusiness: "No major restriction published",
        cycle: "'Based on academic calendar'. No application window is published on the listing.",
        link: "https://www.google.com/about/careers/applications/buildyourfuture/programs/googlestudentambassador",
        note: "The description on Google's own programmes listing for this card is a copy-paste error: it repeats the Google Summer of Code text word for word. So the card tells you nothing about the ambassador programme. Go to the programme page itself, and do not quote the listing blurb to your members.",
      },
      {
        name: "Google Summer of Code", provider: "Google",
        targetYear: "Any. Google does not scope it by year of study on the current pages.",
        whatYouGet: "A 12+ week paid online programming project with an open source organisation, under the guidance of mentors from that community. Google's framing is 'bringing new contributors into open source software development', so it is aimed at newcomers rather than experienced contributors. Over 1,000 organisations have mentored 21,000+ contributors since 2005.",
        eligibility: "The current public pages describe it as open to people new to open source. The detailed eligibility and stipend rules sit behind a JavaScript-rendered rules page that would not return text to a scripted request, so I am not going to state a GPA, age or residency rule I could not read. Assume you need to be able to code before you apply, which rules out most business majors without a programming background.",
        citizenship: "Not verified. The rules page did not render to a script. Google Summer of Code has country restrictions tied to US sanctions law, so check the rules page in a browser before you commit.",
        openToBusiness: "No major bar, but you need working programming ability",
        cycle: "Annual, 12+ weeks. As of 2026-09-15 the site shows 'Organization registration closed', which is the step before contributor applications open.",
        link: "https://summerofcode.withgoogle.com/",
        note: "The selection is not really an application, it is a relationship. Google's own advice is that reaching out to organisations early and having conversations before you submit a proposal is what gets you selected. Somebody who starts talking to a mentoring org in the autumn beats somebody with a better resume who submits cold in the spring.",
      },
    ],
  },
  {
    key: "nonprofit", name: "Nonprofit run, free, and open to more majors",
    blurb: "The tier that now carries the freshman and sophomore load, mostly free, mostly open to any major, and in several cases the route through which employer programmes actually recruit.",
    items: [
      {
        name: "CodePath courses (Technical Interview Prep, Applied AI Engineering, Web Development, Cybersecurity)", provider: "CodePath (501(c)(3) nonprofit)",
        targetYear: "Any undergraduate.",
        whatYouGet: "Free 10-week virtual instructor-led courses taught by senior engineers, 4 to 10 hours a week, meeting once or twice weekly. Technical Interview Prep gives you data structures and algorithms, the UMPIRE problem-solving method, and mock interviews for internship and full-time roles. The AI pathway includes free access to Claude and Claude Code. Alongside the courses you get the Career Kit, Career Labs, a Career Bot, resume and application support, workshops, and Tech Fellowship leadership roles on your campus.",
        eligibility: "The course pages market the courses as 'at no cost to CS students', but the About page states 'Our courses are open to students of all backgrounds' and the site reports 50,000+ college students enrolled from 1,000+ colleges. There is no published major bar. Business majors can apply and should start at the intro level of a pathway, because the intermediate and advanced courses assume working programming ability.",
        citizenship: "Not stated.",
        openToBusiness: "Business majors yes, start at the intro course",
        cycle: "Runs by academic term with rolling enrolment. As of 2026-09-15 spring enrolment is open with a waitlist and countdown on each pathway.",
        link: "https://www.codepath.org/courses",
        note: "CodePath is the recruiting and training machinery behind other companies' pre-internships, including Salesforce Futureforce Tech Launchpad and Claude Corps, where it is the employer of record. Taking a CodePath course is how you become visible to those pipelines, which is worth more than the course content on its own.",
      },
      {
        name: "Claude Corps", provider: "Anthropic with CodePath and Social Finance",
        targetYear: "Senior and recent graduate. Anyone with two years or fewer of full-time work experience.",
        whatYouGet: "A 12-month fully paid fellowship. You are a full-time W-2 CodePath employee with salary and benefits for the whole year. CodePath designs the AI-native curriculum and trains you throughout, and you are placed with a nonprofit host organisation to build AI tools and systems for them.",
        eligibility: "The FAQ states there is no minimum education requirement and no technical background required. Business majors and non-CS majors are explicitly fine. You do not need to be a CodePath student. This is the only programme in this list with no technical prerequisite at all.",
        citizenship: "You must be authorized to work in the United States.",
        openToBusiness: "Business majors yes, no technical background needed",
        cycle: "Cohort 1 applications are open now and recruitment is rolling, so apply as soon as you are ready. The programme was announced 11 June 2026.",
        link: "https://www.anthropic.com/claude-corps",
        note: "The host organisations for Cohort 1 must be Anthropic nonprofit Enterprise or Team customers with a hybrid or in-person workplace, and fully remote hosts do not get fellows until 2027 cohorts. That means placements cluster where those nonprofits are. Ask about location before you build a plan around it.",
      },
      {
        name: "Break Through Tech AI Program", provider: "Break Through Tech",
        targetYear: "Any undergraduate. The programme is designed to sit before your final year so the portfolio is ready when you apply for internships.",
        whatYouGet: "A free virtual extracurricular. Machine Learning Foundations curriculum working with industry tools on real data sets, ending in a machine learning certificate from Cornell University. Then AI Studio, where you tackle real ML Challenge Projects with academic and industry advisors to build a portfolio. Plus an industry mentor working with you in a small group of fellows, with case studies, skill-building simulations and personalised feedback.",
        eligibility: "Undergraduates at a US-based college or university pursuing tech-related fields. The FAQ says 'Yes, we accept applications from all majors', with the caveat that computing, IT and engineering majors 'will be best prepared for the rigors of the program'. No prior internship experience needed. Business majors can apply.",
        citizenship: "Not stated.",
        openToBusiness: "Business majors yes, all majors accepted",
        cycle: "'Application timelines vary by program and cohort.' No dates are published. You submit an interest form and they notify you when applications open.",
        link: "https://www.breakthroughtech.org/programs/",
        note: "Break Through Tech no longer states any gender eligibility anywhere on its current programme, FAQ or homepage. If somebody tells your chapter it is women-only, that is out of date as of 2026-09-15. The Cornell certificate is the part that survives a resume screen at a firm that does not know Break Through Tech.",
      },
      {
        name: "Break Through Tech Sprinternship", provider: "Break Through Tech",
        targetYear: "Freshman and Sophomore. The page says 'early undergraduate students'.",
        whatYouGet: "A full-time paid micro-internship during an academic break. You work in a cohort on a real technical challenge at a host company, guided by industry professionals, onsite, hybrid or remote. You leave with a resume project, a company network and experience of a professional environment before your first real internship.",
        eligibility: "Same Break Through Tech eligibility: undergraduate at a US-based college pursuing tech-related fields, all majors accepted, no prior internship experience required. Business majors can apply.",
        citizenship: "Not stated.",
        openToBusiness: "Business majors yes, all majors accepted",
        cycle: "Runs during academic breaks. No published dates. You inquire to join.",
        link: "https://www.breakthroughtech.org/programs/",
        note: "With Meta University gone and Amazon restricted to rising seniors, this is now the closest thing left to a real company project before junior year that a non-CS major can actually get into. Host placement depends on which companies are running Sprinternships in your region, so ask that question in the interest form rather than assuming Phoenix coverage.",
      },
      {
        name: "Break Through Tech Agentic AI", provider: "Break Through Tech",
        targetYear: "Any undergraduate. Described as beginner.",
        whatYouGet: "A 16-week hands-on programme. You learn what separates an AI agent from a chatbot, build one with LangChain and LangGraph, evaluate and debug it with observability tools, then package and deploy it to a public URL. You work in a team and finish with a publicly accessible portfolio project you can defend in an interview. Coaches and peers support you throughout. Free.",
        eligibility: "Same Break Through Tech eligibility: US-based undergraduate, all majors accepted. Business majors can apply, and this is the most approachable of the three for somebody with no programming background.",
        citizenship: "Not stated.",
        openToBusiness: "Business majors yes, all majors accepted",
        cycle: "16 weeks. Timelines vary by cohort and are not published. Interest form only.",
        link: "https://www.breakthroughtech.org/programs/",
        note: "The stated outcome is not the code, it is being able to 'explain and defend your technical work'. For a business major that is the actual asset: a deployed thing with a URL you can talk about for ten minutes. Fellows are allowed to do more than one Break Through Tech programme, so this stacks with the AI Program.",
      },
      {
        name: "ColorStack membership", provider: "ColorStack (501(c)(3) nonprofit)",
        targetYear: "Any undergraduate.",
        whatYouGet: "Membership in a community of 14,000+ students from 1,000+ schools. An active Slack workspace, monthly Fam Fridays sessions with keynote speakers and engineers, a career fair twice a year, and mentorship, workshops and recruiting access through 40+ partner tech companies. Members report that being affiliated with ColorStack itself gave them an edge with interviewers.",
        eligibility: "Two hard gates. First, you must be enrolled in a US or Canadian undergraduate Computer Science or closely related major, with Data Science, Computer Engineering and Information Systems named as acceptable. Second, you must identify as an undergraduate Black, Latinx, Native American or demonstrated ally. Business majors are explicitly REJECTED: the FAQ names Business alongside Civil Engineering and Psychology as majors they do not accept and do not provide resources for. Your application details must match your LinkedIn exactly, including school, major and graduation year, or you are denied.",
        citizenship: "No citizenship rule, but you must be studying in the US or Canada. The FAQ says students studying in any other country are not eligible.",
        openToBusiness: "No for general business, yes for Information Systems",
        cycle: "Applications reviewed on a rolling basis, year-round. Free.",
        link: "https://www.colorstack.org/member-application-requirements",
        note: "Information Systems is on the accepted list, so an ASU Computer Information Systems student in W. P. Carey can get in where a Finance or Marketing major cannot. That single distinction is worth telling your members before they waste an application. Fix your LinkedIn to match before you apply, because a mismatch is the most common rejection reason on their own FAQ.",
      },
      {
        name: "Rewriting the Code membership", provider: "Rewriting the Code (501(c)(3) nonprofit)",
        targetYear: "Any. Explicitly university through the first six years of a tech career. If you have more than six years of experience they route you to join as a mentor instead.",
        whatYouGet: "Free membership. A 24/7 Slack community, near-peer mentors who recently went through what you are facing, small-group Mentor Circles, technical interview prep with peers who recently passed those interviews, resume reviews from industry professionals, the Virtual Career Summit with 25+ companies actively hiring, the TechConnect spring recruiting fair in January, in-person Tech Hub meetups, nSpire AI as a 24/7 career coach, and limited perks such as conference support and access to tools like LeetCode or LinkedIn Premium.",
        eligibility: "Women in tech. There is no stated major restriction anywhere on the current site, and the RISE programme is described as supporting 'university women from their first year through their first role'. Business majors who intend to work in tech can apply. Applications are manually reviewed and take up to 48 hours.",
        citizenship: "Not stated. It is a global community with Tech Hubs in San Francisco, Seattle, Boston, New York City, Toronto and London.",
        openToBusiness: "Business majors yes, no major restriction stated",
        cycle: "Rolling, free, takes about five minutes to apply. Career Summit in August (US), UK and Ireland Career Summit in October, TechConnect recruiting fair in January.",
        link: "https://rewritingthecode.org/join-us/",
        note: "RTC runs affinity groups including Latinas de RTC, so there is a Latina sub-community inside the larger one. Also note the Future of Tech Fund, their financial assistance arm, currently says 'Applications are currently paused', so do not point members at it as a funding route right now.",
      },
      {
        name: "Latinas in Tech, LiT 365 membership and Vibe Coding AI Agents", provider: "Latinas in Tech (501(c)(3) nonprofit)",
        targetYear: "Any. This is a professional community, not a student pipeline.",
        whatYouGet: "LiT 365 Silver is free and gives you the community, networking, resources and chapter events, plus the LiT Recruit job platform. Gold is $100 a year and adds exclusive events, discounts and more access to industry leaders. Platinum is $300 a year and is aimed at senior leaders. The only programme currently listed is Vibe Coding AI Agents, a 4-week live beginner-friendly course led by instructor Alex Garcia on how AI agents work and how to build one.",
        eligibility: "LiT 365 Silver is described as 'open to everyone, whether you're taking your first step or paving the way for others'. No major requirement, no degree requirement. Business majors can join freely.",
        citizenship: "Not stated.",
        openToBusiness: "Business majors yes, open to everyone",
        cycle: "Membership is rolling. Vibe Coding AI Agents shows a Register Now link as of 2026-09-15 with no stated deadline on the programmes page.",
        link: "https://latinasintech.org/programs",
        note: "As of 2026-09-15 the Programs page lists exactly one programme. Treat Latinas in Tech as a chapter, mentorship and networking play, not as a structured pipeline with cohorts and placements. Also, www.latinasintech.org would not resolve for a scripted request while the apex latinasintech.org did, so use the apex domain in any link you publish.",
      },
      {
        name: "SHPE Undergraduate membership and MentorSHPE", provider: "Society of Hispanic Professional Engineers",
        targetYear: "Any undergraduate.",
        whatYouGet: "For $10 a year: exclusive access to the SHPE Career Center, where corporate partners search member resumes for internships and post roles year-round. Plus resume reviews and rewording, professional development, leadership training, mentoring from a professional member, internship, fellowship and co-op opportunities, discounted registration for national and regional events, and eligibility to hold office. MentorSHPE adds a three-month one-to-one mentoring connection that you initiate and structure around two to five goals, or single-session Mentoring Moments if you want interview or grad school advice without the commitment.",
        eligibility: "'Undergraduate membership is open to all college students studying science, technology, engineering, or mathematics.' Business majors are not covered by that wording. Management Information Systems or Computer Information Systems is the closest fit and SHPE's own InternSHPE materials list information systems, supply chain, finance and accounting tracks, so it is worth asking rather than assuming. You do NOT have to be Hispanic to join.",
        citizenship: "Not stated.",
        openToBusiness: "STEM majors only as written, ask if you are MIS or CIS",
        cycle: "Rolling, $10 a year for undergraduates, $15 for graduate students including MBA candidates. Hardship vouchers are available for members who cannot afford dues.",
        link: "https://shpe.org/membership/become-a-member/",
        note: "The MentorSHPE matching platform is mid-migration to new software as of 2026-09-15 and the page says to stay tuned for the launch, so the mentoring queue is effectively stalled right now. SHPE's real yield for a student is the National Convention career fair and the Career Center resume book, not the website. Note also that www.shpe.org/students/ returns 404, the programmes live under shpe.org/engage/programs/.",
      },
      {
        name: "Techqueria membership", provider: "Techqueria (501(c)(3) nonprofit)",
        targetYear: "Any, including Student as a listed role category.",
        whatYouGet: "Free membership in a 25,000-strong network with 19,000+ Slack members and around 3,000 weekly active members. You get the Slack community, free events and workshops, a bi-monthly newsletter, the job board, mentorship, and the option to have your profile shared with recruiters in their network. Local chapters and an annual summit.",
        eligibility: "Open application, manually reviewed. You must be 18 or over. The form asks whether you identify as Latinx or as an ally, and states plainly 'You will get an invite either way'. You must be currently in tech or interested in entering tech. The job category list includes Accounting, Finance, Marketing, Sales, Operations, Product and Student, so business majors are squarely in scope.",
        citizenship: "No citizenship requirement. The form accepts any country.",
        openToBusiness: "Business majors yes, explicitly including finance, accounting, marketing and sales",
        cycle: "Rolling, free. Five-step application form, LinkedIn URL required, resume optional.",
        link: "https://techqueria.org/get-involved/join/",
        note: "Two things the page does not advertise. First, allies are admitted, so a non-Latino chapter member is not wasting their time. Second, there is an explicit opt-in to let Techqueria share your profile with recruiters. Say yes and upload the optional one-page PDF resume, because that consent is the only part of this membership that acts like a pipeline rather than a chat room.",
      },
    ],
  },
];

/* ------------------------------------------------------------
   ALUMNI
   Who this chapter produced, and how to reach them.

   This is the "Where our members end up" page. It is EMPTY on purpose.
   One worked example is below showing every field, exactly the way BOARD
   is set up. Do not invent alumni to make the page look fuller: a made up
   name that a student tries to book a chat with is worse than an honest
   empty page, and the page says plainly that profiles are being collected.

   coffeeChat here is an EMAIL ONLY, decided 2026-09-15. Alumni are working
   adults and should not be asked to keep a public booking calendar for a
   student chapter. The button opens a pre-written message. The E-board is
   the opposite case: those entries may carry a Calendly or Cal.com link.
------------------------------------------------------------ */
const ALUMNI = [
  {
    name: "",                    // <- add the full name
    gradYear: "",                // <- the year they left ASU, e.g. "2024"
    major: "",                   // <- what they studied here
    role: "",                    // <- what they do now, e.g. "Audit Associate"
    company: "",                 // <- where, e.g. "Deloitte"
    location: "",                // <- e.g. "Phoenix, AZ"
    chapterRole: "",             // <- what they did in the chapter, if anything
    photo: "",                   // <- photos/alumni/firstname.jpg
    linkedin: "",
    coffeeChat: "",              // <- an EMAIL. Leave empty and the card shows LinkedIn only.
    openTo: [],                  // <- e.g. ["Resume review", "Interview prep", "Breaking into audit"]
    note: "",                    // <- one line in their own voice about the path they took
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
        amountShort: "Check the site",
        amount: "Check the site. The public page states no amount. The FAQ has a question titled \"How much is the scholarship award?\" but the answer does not load without a member login.", deadline: "Check the site. Every date on the page reads TBD, for applications open, applications due, winners notified and funds distributed. A banner says applications are closed and the most recent recipient class shown is 2024.",
        eligibility: "ALPFA student members. The apply button sits behind a Premium Members Only gate.",
        citizenship: "Could not confirm. No citizenship, residency or DACA language appears anywhere in the public page.",
        daca: "unclear",
        link: "https://www.alpfa.org/page/scholarships",
        note: "Awards go straight to your school tuition account, not to you, so it is worth less if other aid already covers your bill. You have a shortcut the public page does not give: ask ALPFA National through the chapter instead of waiting for the site, because those dates have sat at TBD for a while.",
      },
      {
        name: "HSF Scholar Program", provider: "Hispanic Scholarship Fund",
        amountShort: "$500 to $5,000",
        amount: "$500 - $5,000", deadline: "Opens in early January, closes mid February. The page currently shows the closed 2026 cycle, which ran January 5 to February 15, 2026. Expect the 2027 round to open in early January.",
        eligibility: "Hispanic heritage, 2.5 GPA or better for college students, full time at an accredited four year US university, FAFSA filed.",
        citizenship: "Open to DACA. The eligibility line reads \"US Citizen, Permanent Legal Resident, or DACA.\" Undocumented students without DACA are not covered.",
        daca: "yes",
        link: "https://www.hsf.net/scholarship",
        note: "Being named an HSF Scholar and getting money are two different things. HSF picks 10,000 Scholars a year but awards cash \"depending on available funds.\" The Scholar status itself carries the conferences, mentorship and recruiter access, which for most members is worth more than the check.",
      },
      {
        name: "HACU Scholarship Program", provider: "Hispanic Association of Colleges and Universities",
        amountShort: "$1,500 to $10,000",
        amount: "Varies by scholarship. Amounts in the 2026-2027 cycle ran from $1,500 to $10,000, including Deloitte Foundation at $2,500 and United Health Foundation at $10,000.", deadline: "The page shows only a past cycle. All ten listed scholarships are marked CLOSED with deadlines that ran April 15 to May 31, 2026. The page says to expect the next batch around February.",
        eligibility: "Enrolled at a HACU member institution. ASU is listed in HACU's own member directory. GPA floors run 2.5 to 3.0 depending on the award.",
        citizenship: "Varies by award and you must read each one. Denny's Hungry for Education and Building Stronger Communities both say US citizens or permanent residents. Cafe Bustelo, Coca-Cola First Generation, Ford Philanthropy and United Health state no citizenship requirement at all.",
        daca: "unclear",
        link: "https://www.hacu.net/hacu/Scholarships.asp",
        note: "This is one profile, not ten applications. You build a single HACU profile and it matches you against every award you qualify for. For an ALPFA member the Deloitte Foundation one is the obvious target: it covers accounting, finance, business, analytics and information systems, it renews, and it had 68 awards available.",
      },
      {
        name: "LULAC National Scholarship Fund", provider: "LULAC National Educational Service Centers",
        amountShort: "$250 to $2,000",
        amount: "National Scholastic Achievement Awards $2,000. Honors Awards $500 to $2,000. General Awards $250 to $1,000.", deadline: "The page says the application is currently closed and that councils notify recipients by June 15. No open date is posted. The cycle runs roughly winter to spring, and only a past cycle is shown.",
        eligibility: "Enrolled or applied full time at a college, university or vocational school. Award tier is set by GPA, 3.5 and up for the top tier, 3.0 and up for Honors.",
        citizenship: "Open to DACA. The page states you must be a US citizen, legal permanent resident, or granted Deferred Action for Childhood Arrivals. Undocumented students without DACA are excluded.",
        daca: "yes",
        link: "https://www.lnesc.org/scholarships/lulac/",
        note: "This one lives or dies on geography. If no participating LULAC council covers your area you are not eligible, and only 59 councils funded awards last program year. Call the Phoenix area council and confirm they are participating before you write a word. Awards are also matched, so a council's $400 becomes $800.",
      },
      {
        name: "Prospanica Scholarship Program", provider: "Prospanica",
        amountShort: "Up to $5,000",
        amount: "UP TO $5,000 PER SCHOLARSHIP AWARD", deadline: "One round a year, opening February 1 and closing in early May. The page shows the 2026 round, which opened February 1 and closed May 3, 2026. That cycle is past.",
        eligibility: "Prospanica membership with a Member ID is required. Undergraduates must be a college freshman or higher when they apply.",
        citizenship: "Could not confirm. The requirements list says nothing about citizenship, residency, DACA or immigration status.",
        daca: "unclear",
        link: "https://www.prospanica.org/page/scholarships",
        note: "An ASU student won in 2025 as a Psychology major, which tells you two things: ASU applicants do get picked, and you do not need a business major even though Prospanica is a business organization. Watch the Conference Host State award too, since the applicant pool shrinks hard if the annual conference lands in Arizona.",
      },
      {
        name: "CPLC Scholarship, Arizona State University", provider: "Chicanos Por La Causa",
        amountShort: "Up to $10,000",
        amount: "up to $10,000 in tuition assistance per academic year, depending on other scholarships you may receive", deadline: "The page names February 1, 2026 as the deadline to submit the ASU application on Scholarship Universe. That date has passed. The ASU deadline has been February 1, so plan for February 1, 2027.",
        eligibility: "Accepted ASU student, FAFSA on file, enrolled in at least 12 credit hours, classified as an Arizona resident paying in state tuition.",
        citizenship: "Could not confirm. The page requires in state classification and a FAFSA rather than citizenship as such. Prop 308 gives in state tuition regardless of status, but FAFSA still needs an eligible status, so ask CPLC at Scholarships@cplc.org before assuming.",
        daca: "unclear",
        link: "https://cplc.org/scholarships/",
        note: "The strongest Arizona specific award here and the easiest to enter, because there is no separate portal. You apply through ASU Scholarship Universe, which you are already in. It also auto renews with no reapplication if you hold a 3.0 and do 20 volunteer hours a semester with a CPLC program. That is 40 hours a year, so budget for it.",
      },
      {
        name: "Emerging Business Leaders Initiative Scholarship", provider: "Arizona Hispanic Chamber of Commerce",
        amountShort: "$5,000 to $15,000",
        amount: "It provides $5000 awards to juniors and seniors in business majors at NCA Accredited schools in Arizona. The same page elsewhere says renewable scholarships ranging from $5,000 to $15,000.", deadline: "The page still reads \"Scholarship applications are now open until March 16, 2026,\" which has passed, so it is showing a stale cycle. The pattern is a mid March deadline.",
        eligibility: "Declared business major at an NCA accredited Arizona college, 3.0 college GPA or better, entering junior or senior year, full time, one parent of Hispanic heritage.",
        citizenship: "Could not confirm. The eligibility list names heritage, GPA, major and class standing, and says nothing about citizenship, residency or DACA.",
        daca: "unclear",
        link: "https://www.azhcc.com/scholarships",
        note: "This is the closest match on the whole list to what an ALPFA member actually is: a Hispanic business major, junior or senior, in Arizona. It pays in two installments, renews for a second year, and comes with a mentor and internship access. Preference goes to dependents or employees of AZHCC member companies, so check the member directory for your own or a parent's employer first. Only six a year.",
      },
      {
        name: "TheDream.US National Scholarship", provider: "TheDream.US",
        amountShort: "Up to $33,000",
        amount: "up to a maximum of $33,000 for a bachelor's degree, plus an additional stipend for books, supplies, and transportation up to a maximum of $6,000", deadline: "Opens November 1, 2026 for the next round. The page states the National scholarship is now closed and the next round opens November 1, 2026. The prior round closed February 28, 2026.",
        eligibility: "First generation immigrant student who came to the US before age 16 and before November 1, 2020, graduated from a US high school, 2.5 GPA or better, enrolling full time at a Partner College, eligible for in state tuition, with significant unmet need.",
        citizenship: "Built for undocumented students. Open to immigrant students with or without DACA or TPS. It is the reverse of a citizenship rule: if you receive or are eligible for a Federal Pell Grant you are NOT eligible.",
        daca: "yes",
        link: "https://www.thedream.us/scholarships/national-scholarship/",
        note: "ASU is a confirmed Partner College with its own page and named staff contacts, so this works at your school. It is the most actionable item on this entire list right now, because it opens in about six weeks while nearly everything else is shut until February. Arizona is not a locked out state after Prop 308, so Arizona students use the National Scholarship, not the Opportunity Scholarship.",
      },
      {
        name: "MALDEF Scholarship Resource Guide 2027-2028", provider: "Mexican American Legal Defense and Educational Fund",
        amountShort: "A directory",
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
        amountShort: "Up to $1,000",
        amount: "Up to $1,000", deadline: "Open now and closing soon. Open Date Jun 01, 2026. Close Date Sep 30, 2026 at 11:59 p.m. US Eastern.",
        eligibility: "Financial need, planning CPA licensure but not yet a CPA, at least one exam part left to pass, and a Notice to Schedule for at least one section plus the receipt for your exam fees. 80 recipients.",
        citizenship: "US citizen or permanent resident, green card holder. The page states this outright. Not open to DACA or undocumented students.",
        daca: "no",
        link: "https://www.thiswaytocpa.com/education/scholarship-search/CPAexamgrant",
        note: "This is the only thing on the whole list with a deadline inside the next two weeks, and it is the one most people miss because it is filed as a grant rather than a scholarship. It reimburses exam fees and prep course costs, not tuition, so you need a Notice to Schedule in hand before you apply. It may also be taxable.",
      },
      {
        name: "AICPA Foundation Scholarship for Future CPAs", provider: "AICPA Foundation, sponsored by BDO USA, BKR International and Springline Advisory",
        amountShort: "$5,000 to $10,000",
        amount: "$5,000 - $10,000", deadline: "The page shows the closed 2026 cycle, Dec 01, 2025 to Mar 15, 2026, and states the next round for 2027-2028 funding runs December 1, 2026 through March 15, 2027.",
        eligibility: "Accounting degree with CPA licensure planned, at least 30 semester hours done including 6 in accounting, overall and major GPA of 3.0 or better, some financial need, and free AICPA Student Affiliate membership.",
        citizenship: "US citizen or legal permanent resident, green card holder. Not open to DACA or undocumented students.",
        daca: "no",
        link: "https://www.thiswaytocpa.com/education/aicpa-legacy-scholarships/future-cpas-scholarship/",
        note: "One application covers all three AICPA Legacy Scholarships, so the same form puts you in front of the George Willie and Two-year Transfer awards too. Join AICPA as a student affiliate before you start, because the portal signs you in with those credentials.",
      },
      {
        name: "AICPA/PCPS George Willie Student Scholarship", provider: "AICPA Foundation and the AICPA Private Companies Practice Section",
        amountShort: "$10,000",
        amount: "$10,000", deadline: "The page shows the closed 2026 cycle, Dec 01, 2025 to Mar 15, 2026. The next round for 2027-2028 funding runs December 1, 2026 through March 15, 2027.",
        eligibility: "First generation college student, meaning neither parent or guardian holds a bachelor's degree, accounting degree, 30 semester hours including 6 in accounting, 3.0 overall and major GPA, full time, financial need, AICPA Student Affiliate membership.",
        citizenship: "US citizen or legal permanent resident, green card holder. Not open to DACA or undocumented students.",
        daca: "no",
        link: "https://www.thiswaytocpa.com/education/aicpa-legacy-scholarships/georgewillie-scholarship/",
        note: "Highest fixed award in the AICPA Legacy set, and the first generation filter shrinks the pool sharply. If you qualify, build your essay around this one rather than the general Future CPAs award.",
      },
      {
        name: "AICPA Accounting Scholars Leadership Workshop", provider: "AICPA Foundation",
        amountShort: "Costs covered",
        amount: "Check the site. No cash award. The AICPA Foundation and sponsors cover transportation to and from the workshop, hotel, training and meals.", deadline: "The page shows a past cycle, Mar 01, 2026 to Jun 15, 2026. Expect the same March to June window in 2027.",
        eligibility: "First time attendee, undergraduate or graduate at a community college or four year school, declared accounting major or stated interest in the profession, AICPA Student Affiliate membership. No GPA or credit hour minimum stated.",
        citizenship: "The most open door in this group. US citizen, permanent resident, or noncitizen with valid US immigration status, and the page names F-1 visa, DACA and TPS explicitly. Your documentation must be valid at the time of the event.",
        daca: "yes",
        link: "https://www.thiswaytocpa.com/education/scholarship-search/aicpa-accounting-scholars-leadership-workshop/",
        note: "This is the only AICPA program that names DACA and F-1 holders as eligible, so for international and DACA members it is the realistic AICPA entry point. It runs alongside the Accounting Inclusion and Impact Symposium, which is where the recruiter access actually happens.",
      },
      {
        name: "Arizona Accounting Scholarships", provider: "Arizona CPA Foundation for Education and Innovation, with the Arizona Society of CPAs",
        amountShort: "$1,000 to $2,000",
        amount: "Monetary scholarships in the amount of $2,000 will be awarded to students at each of the three public universities. Private university awards are $2,000, and other awards are $1,000.", deadline: "No fixed date published. The page states the window begins in November annually and that applications will be available in November 2026.",
        eligibility: "Accounting students at Arizona public universities, which includes ASU. No GPA or credit hour minimum is published. ASCPA student membership is free and is not stated as a requirement.",
        citizenship: "Could not confirm. The page publishes no citizenship or residency language at all.",
        daca: "unclear",
        link: "https://www.ascpa.com/scholarships",
        note: "Best odds on the list and the one most members will miss. You do not apply to ASCPA. The page says applications sent directly to ASCPA will not be accepted and you must go through the W. P. Carey School of Accountancy. Have someone ask the ASU accounting department in October what the internal process is, before the November window opens.",
      },
      {
        name: "NABA Foundation Scholarship Program", provider: "NABA Inc., the National Association of Black Accountants",
        amountShort: "$2,500 to $10,000",
        amount: "over 150 scholarships annually ranging from $2,500 - $10,000", deadline: "The page shows a past cycle. It describes awards made in August 2026 for the Fall 2026 semester and publishes no open date for the next round. Its own FAQ says the window length varies year to year. Check back in winter or email Scholarships@nabainc.org.",
        eligibility: "Active NABA student member, full time at an accredited US two year or four year school, demonstrated academic excellence. No numeric GPA minimum published.",
        citizenship: "US citizen or permanent resident. The page defines permanent resident narrowly as a lawful green card holder and says IRS resident alien tax status does not qualify. Not open to DACA or undocumented students.",
        daca: "no",
        link: "https://nabainc.org/scholarships/",
        note: "The volume is the story. Over 150 awards a year is far better odds than the AICPA programs, which fund roughly twenty. Student membership is free, so sign members up now rather than when the window opens. Winners are expected at the Celebration of Scholars, so budget travel.",
      },
      {
        name: "IMA Student Scholarship", provider: "Institute of Management Accountants",
        amountShort: "Fees covered",
        amount: "Check the site. Not a cash award. It covers two years of IMA Student membership, the CMA entrance fee plus Part 1 and Part 2 exam fees, or the FMAA entrance and exam fee, plus 12 months of Gleim Online materials in select regions.", deadline: "Open now. IMA accepts nominations each academic year from September 1 through June 30.",
        eligibility: "A professor must nominate you and you cannot self nominate. Ten students per year at IMA endorsed schools, three at IMA Partner Schools. Create an IMA account before your professor submits.",
        citizenship: "Could not confirm. The page carries no citizenship requirement. Nomination forms are split by region, with an Americas form.",
        daca: "unclear",
        link: "https://www.imaglobal.org/pages/student-scholarships",
        note: "Two corrections to what aggregator sites still claim. This is not cash, it pays your CMA or FMAA exam costs. And the IMA Memorial Education Fund is no longer a student award at all, it is now a grant paid to colleges to send students to a conference. The real action item is confirming whether ASU is IMA endorsed and getting a W. P. Carey professor to nominate members.",
      },
      {
        name: "NSA Foundation Scholarship Program", provider: "NSA Scholarship Foundation, National Society of Accountants",
        amountShort: "$1,000 to $2,500",
        amount: "Award amounts range from $1,000 to $2,500", deadline: "Confirmed future cycle. Opens January 15, 2027. Closes Saturday, May 1, 2027 at 11:59 PM Pacific. Recipients notified July 1, 2027.",
        eligibility: "Accounting major or committed to one, 3.0 cumulative GPA or better, undergraduate at an accredited US school, first semester completed. Arizona applicants must carry at least 9 credit hours. No membership required.",
        citizenship: "US or Canadian citizen. Permanent residents are NOT eligible except for applicants from Arizona, where legal residents may apply.",
        daca: "no",
        link: "https://nsacct.org/nsaf-scholarships/",
        note: "Read the Arizona carve out carefully, because it is unusual and it favors this chapter specifically. Permanent residents are locked out nationwide but Arizona legal residents are explicitly let in, and there is a separate Arizona financial need award inside the program. The Foundation gave out $40,000 total in 2026, so the pool is small but the Arizona angle narrows the field.",
      },
      {
        name: "Frank L. Greathouse Government Accounting Scholarship", provider: "Government Finance Officers Association",
        amountShort: "$10,000",
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
        amountShort: "Varies",
        amount: "Varies by scholarship. Check the site.", deadline: "Rolling. Each listing carries its own deadline. ASU's FAQ says you can edit an application until the listed deadline and that most are February 1.",
        eligibility: "Admitted or current ASU student. Sign in with your ASURITE ID, complete your profile, then apply per scholarship.",
        citizenship: "No portal wide rule. Individual listings set their own terms. ASU's Prop 308 page states ASU scholarships are open regardless of immigration status.",
        daca: "yes",
        link: "https://scholarships.asu.edu/",
        note: "It is a matching engine, not a single application. A thin profile returns few matches, so fill in every field including major, class level, community involvement and background. ASU moved to this platform recently, which is why older scholarships.asu.edu links with a scholarship number now dump you on a generic page.",
      },
      {
        name: "W. P. Carey general scholarship application", provider: "W. P. Carey School of Business, Arizona State University",
        amountShort: "Not published",
        amount: "W. P. Carey awards over $1.3 million in scholarships to undergraduate students each year. Per award amounts are not published.", deadline: "Annual. One application a year covers general and departmental business scholarships. ASU's FAQ says most portal deadlines are February 1. The W. P. Carey page prints no date, so confirm inside Scholarship Universe.",
        eligibility: "Admitted to a W. P. Carey degree seeking program, enrolled full time for the upcoming year, GPA of 3.0 or better.",
        citizenship: "No citizenship requirement stated, and the page says a FAFSA is not required to apply. ASU's Prop 308 page states students meeting ASU scholarship requirements are eligible regardless of immigration status.",
        daca: "yes",
        link: "https://wpcarey.asu.edu/undergraduate/scholarships-aid",
        note: "One application feeds both the general pool and the departmental pools, so your declared major quietly decides which funds you compete for. Finance and financial planning majors get a second set on top, and a few of those need a supplementary application the general form does not trigger.",
      },
      {
        name: "W. P. Carey named scholarships with fall deadlines", provider: "W. P. Carey School of Business, Arizona State University",
        amountShort: "Not published",
        amount: "Check the site. Amounts are not published per award.", deadline: "Live now and outside the February cycle. Business Faculty Emeritus Memorial and Mel and Marty Zajac Memorial close September 16, 2026. Gary S. Clancy Memorial and Sam and Ida Turken Family close September 23, 2026. Jack D. Furst Honors is rolling.",
        eligibility: "Admitted W. P. Carey undergraduate, full time, GPA 3.0 or better, applying through Scholarship Universe.",
        citizenship: "Not stated. No citizenship condition appears in the eligibility list. ASU's Prop 308 page confirms ASU scholarships are open regardless of immigration status.",
        daca: "yes",
        link: "https://students.wpcarey.asu.edu/scholarships",
        note: "This is the page nobody checks, and it is the single best argument for reading this list today. It carries fall deadlines that sit outside the February cycle, two of them close within days, and the school does not email about every posting. Put a recurring check on it, because the list rotates through the year.",
      },
      {
        name: "New American University Scholarship", provider: "Arizona State University",
        amountShort: "$7,000 to $17,500",
        amount: "Nonresident: President's and Provost's Awards valued at $15,500 to $17,500 per year, and Academic Achievement, University and Dean's Awards valued at $10,000 to $13,500 per year. Arizona resident: President's Award valued at $7,000 per year. These are the 2026-27 figures.", deadline: "No separate application. ASU considers you once you are admitted, so the real deadline is your admission application and credentials. Renewable for eight semesters.",
        eligibility: "Incoming undergraduates, awarded on high school GPA in core competencies, how many competencies you completed, and your degree program, residency and campus.",
        citizenship: "Open to DACA and undocumented students. ASU's Prop 308 page says students meeting ASU scholarship requirements are now eligible regardless of immigration status, and links straight to this scholarship.",
        daca: "yes",
        link: "https://tuition.asu.edu/new-american-university",
        note: "The award names did not change, despite what you may have heard. What changed is that nonresident awards no longer carry a separate Nonresident label, they are the same names at higher dollar values. Changing your program, residency or campus mid degree can cut the award, so check before you switch.",
      },
      {
        name: "ASU Promise Plus program, previously the Obama Scholars Program", provider: "Arizona State University",
        amountShort: "Tuition and fees",
        amount: "Year 1 covers actual tuition and fees including Barrett fees, plus a standard amount toward housing and meals if you live on campus. Years 2 to 4 cover tuition and fees only.", deadline: "Annual, for incoming first year students. Jan 15 for the FAFSA and a complete admission application. May 15 to confirm housing. July 1 for verification documents. ASU states there are no exceptions.",
        eligibility: "Arizona resident, full time first year student starting the fall right after Arizona high school graduation, family income of $42,400 or less on the FAFSA, and Pell eligible.",
        citizenship: "Effectively requires US citizenship or eligible noncitizen status, because Pell eligibility is a condition and Pell is federal aid. ASU's Prop 308 page states students without lawful status do not qualify for federal aid.",
        daca: "no",
        link: "https://tuition.asu.edu/special-financial-assistance-programs-arizona-residents",
        note: "If someone tells you to look up the Obama Scholars Program, this is it. ASU's page states in its own words that the program was previously known as the Obama Scholars Program, and the old obamascholars.asu.edu domain no longer resolves. There is no separate application, but funding is capped and closes when it runs out, so applying early matters.",
      },
      {
        name: "Prop 308 in state tuition and state aid access", provider: "Arizona State University, Financial Aid and Scholarship Services",
        amountShort: "Tuition rate",
        amount: "Not a scholarship. It converts nonresident tuition to the in state rate and unlocks state and institutional aid. Resident tuition and mandatory fees average $14,814 per year for 2026-27 against $39,262 for nonresidents.", deadline: "No deadline. Residency reclassification is processed on request.",
        eligibility: "A qualifying noncitizen student who attended an Arizona public or private high school or homeschool equivalent for at least two years and graduated from one, or earned an Arizona GED.",
        citizenship: "This is the page for DACA and undocumented students. ASU states that with Prop 308 all students regardless of immigration status may be eligible for financial aid paid in whole or part with state monies. Federal rules are unchanged, so no Pell and no federal loans. Students on F1, F2, J1, H4 or H1 visas are excluded.",
        daca: "yes",
        link: "https://tuition.asu.edu/Prop308",
        note: "Two things the page will not tell you. If you cannot file a FAFSA because you have no Social Security number, file the CSS Profile instead, ASU's code is 4007, and do not file both. And the benefit is currently being litigated, so treat it as live but not settled. The page is published in English and Spanish.",
      },
      {
        name: "ACF General Scholarship Application", provider: "Arizona Community Foundation",
        amountShort: "Check the site",
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
        amountShort: "Full tuition",
        amount: "a scholarship that covers 100% of their tuition and academic fees, excluding books and living expenses, for the 2026-2027 academic year", deadline: "The page shows a past cycle and says information about the 2027-2028 scholarships will be available in late fall 2026. The ASU deadline in the closed round was March 31, 2026.",
        eligibility: "Open to current undergraduates. You apply during your undergraduate years for a fifth year master of accounting or master of tax at a participating school.",
        citizenship: "Could not confirm. The Deloitte page states no citizenship rule. Each of the 25 schools publishes its own criteria, so the answer is on ASU's W. P. Carey page, not this one.",
        daca: "unclear",
        link: "https://www.deloitte.com/us/en/about/deloitte-foundation/deloitte-foundation-accounting-cpa-scholars-program.html",
        note: "The only Big Four award here with a real student facing application, and ASU is one of the 25 named schools. You do not apply to Deloitte. You apply to the W. P. Carey master's program, then file a separate scholarship application with the school at wpcareymasters@asu.edu. That means you compete against ASU students, not the whole country.",
      },
      {
        name: "Scholarship America Dream Award", provider: "Scholarship America",
        amountShort: "$10,000",
        amount: "$10,000", deadline: "Currently closed. The page says 2027 program information is tentative and subject to change. Prior rounds opened in fall and closed in late winter. Use the reminder signup on the page.",
        eligibility: "Current undergraduates only. You must have finished at least one year of full time study, and the page states plainly that high school seniors are not eligible. 3.0 GPA minimum, financial need, first associate or bachelor's degree.",
        citizenship: "Open to DACA. The eligibility list names US citizens, US permanent residents, or individuals granted deferred action status under DACA. Undocumented students without DACA are not covered.",
        daca: "yes",
        link: "https://scholarshipamerica.org/scholarship/dreamaward/",
        note: "Renewable for up to three more years, so the $10,000 headline understates it badly. A sophomore who wins gets far more than a senior who wins. Apply as early in your degree as you qualify.",
      },
      {
        name: "Point Foundation Flagship Scholarship", provider: "Point Foundation",
        amountShort: "Up to $15,000",
        amount: "Awards up to $15,000", deadline: "Open now. Opens September 9 at 9:00 a.m. PST and closes November 19 at 5:00 p.m. PST. Awarded Scholars start in the fall 2027 term.",
        eligibility: "Open to current undergraduates as well as graduate and professional students. 3.3 cumulative GPA minimum, full time at an accredited not for profit US institution, member of the LGBTQ+ community or an ally.",
        citizenship: "Could not confirm. The page lists no citizenship or residency requirement, only enrollment at a US institution.",
        daca: "unclear",
        link: "https://pointfoundation.org/scholarships/flagship",
        note: "Renewable for up to four years, which makes it the largest sum here for an early year undergraduate. Note the word ally in the eligibility line, this is not restricted to LGBTQ+ students. Point also runs a separate $1,500 Access Scholarship at a 2.0 GPA floor closing October 22, which is a much lower bar and worth filing alongside.",
      },
      {
        name: "Cooke Undergraduate Transfer Scholarship", provider: "Jack Kent Cooke Foundation",
        amountShort: "Up to $55,000",
        amount: "as much as $55,000 per year for two to three years to complete a bachelor's degree", deadline: "Open now. The page states the application is open and closes December 9, 2026.",
        eligibility: "Community college students transferring to a four year school. A student already enrolled at ASU cannot apply. A Maricopa Community Colleges student heading to ASU can.",
        citizenship: "Could not confirm. The program page carries no citizenship statement. Check the How to Apply page before relying on it.",
        daca: "unclear",
        link: "https://www.jkcf.org/our-scholarships/undergraduate-transfer-scholarship/",
        note: "Do not confuse this with the Cooke College Scholarship Program, which is high school seniors only. Winners also get an internship stipend, a conference and travel stipend, and a graduate scholarship, which is a second stream of money most applicants never hear about. Average winner GPA is 3.94, so it is genuinely elite.",
      },
      {
        name: "Coca-Cola Scholars Program Scholarship", provider: "Coca-Cola Scholars Foundation",
        amountShort: "$20,000",
        amount: "$20,000", deadline: "Open now for the 2027 class, closing Wednesday, September 30, 2026 at 5 pm Eastern.",
        eligibility: "High school seniors only. The page states that anyone who has already graduated from high school is not eligible, so a current ASU undergraduate cannot apply. Pass it to younger siblings and high school outreach contacts.",
        citizenship: "US citizens, US nationals, US permanent residents, refugees, asylees, Cuban-Haitian entrants or humanitarian parolees, following the guidelines the US Department of Education uses for federal aid. International students are excluded. DACA is not named, and DACA does not confer federal aid eligibility.",
        daca: "no",
        link: "https://www.coca-colascholarsfoundation.org/apply/",
        note: "Phase 1 needs no essays, no transcript and no recommendations, so entering costs about twenty minutes. Roughly 1% advance to Phase 2. Treat the first round as a lottery ticket, not a project.",
      },
      {
        name: "The Gates Scholarship", provider: "The Gates Scholarship",
        amountShort: "Full cost",
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
        paidShort: "$1,500 a term",
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
        paidShort: "Credit or funded",
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
        paidShort: "Unpaid",
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
        paidShort: "$5,000 plus housing",
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
        paidShort: "No stipend",
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
        paidShort: "Unpaid, for credit",
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
        paidShort: "Not stated",
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
        paidShort: "A directory",
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
        paidShort: "Not stated",
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
        paidShort: "Hourly",
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
        paidShort: "Not published",
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
        paidShort: "$18.50 an hour",
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
        paidShort: "Fully paid",
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
        paidShort: "A directory",
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
        paidShort: "Paid, varies",
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
        paidShort: "$650 a week",
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
        paidShort: "$25,000 to $38,000",
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
        paidShort: "Costs covered",
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
        paidShort: "Paid, not published",
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
        paidShort: "Paid, not published",
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
        paidShort: "Paid, not published",
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
        paidShort: "Salaried",
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
        paidShort: "Paid, not published",
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
        paidShort: "A job board",
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
        paidShort: "$3,250 stipend",
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
        paidShort: "A job board",
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
        paidShort: "A job board",
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
