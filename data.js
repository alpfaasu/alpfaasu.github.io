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
  tagline: "Latino business leaders start here.",

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
   Paragraphs appear in order. Add or remove them freely.
   photos: drop files in photos/gallery/ and list them here.
           Leave the list empty and the slots show as placeholders.
------------------------------------------------------------ */
const ABOUT = {
  heading: "We are the chapter that does not let you recruit alone.",
  paragraphs: [
    "ALPFA at ASU was chartered in 2015 as the Arizona State University chapter of the Association of Latino Professionals For America, a national organization founded in 1972 with more than 100,000 members. We are open to every ASU student, in every major, regardless of background.",
    "What we do is simple. We put students in the same room as the people who hire them, and we make sure nobody walks into that room unprepared. That means resume reviews before the career fair, mock interviews before the real one, and upperclassmen who have already done the internship you want telling you exactly how they got it.",
    "The result is a chapter where members do not compete for the same seat. They hand each other the referral.",
  ],
  photos: [
    // "photos/gallery/about-1.jpg",
    // "photos/gallery/about-2.jpg",
    // "photos/gallery/about-3.jpg",
  ],
};

/* ------------------------------------------------------------
   CORE VALUES
   Four is the right number. Keep each body to about 30 words.
------------------------------------------------------------ */
const VALUES = [
  {
    title: "ALPFAmilia",
    body: "More than a student organization. A family where members are embraced and supported, and where the person ahead of you reaches back.",
  },
  {
    title: "Professional",
    body: "A nationwide network that reaches far past campus. We build the hard skills and the soft ones, so members are ready the day they graduate.",
  },
  {
    title: "Service",
    body: "We give back to the Phoenix community through volunteering, fundraisers, and partnerships with organizations doing work that matters.",
  },
  {
    title: "Cultura",
    body: "We celebrate where our members come from. Latino heritage is not a side event on our calendar, it is the reason the chapter exists.",
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
   WHAT MEMBERS GET
   3 pillars. Each has a background photo washed in its own brand colour.
   "art" picks the wash: "navy", "red", or "gold".
   Swap any photo by dropping a new file in photos/gallery/ and
   changing the path here.
------------------------------------------------------------ */
const PILLARS = [
  {
    title: "Recruiting access",
    art: "navy",
    photo: "photos/gallery/recruiting.jpg",
    body:
      "Resume reviews and mock interviews with people who actually sit on hiring panels. Priority access to the ALPFA National Convention, where firms interview on the spot.",
    points: [
      { label: "Resume and LinkedIn reviews", slug: "resume-reviews" },
      { label: "Mock technicals and behaviorals", slug: "mock-interviews" },
      { label: "National Convention career fair", slug: "national-convention" },
    ],
  },
  {
    title: "The ALPFAmilia",
    art: "red",
    photo: "photos/gallery/alpfamilia.jpg",
    body:
      "Upperclassmen who have already done the internship you want, and who will tell you exactly how they got it. Nobody in this chapter recruits alone.",
    points: [
      { label: "Peer mentorship pairing", slug: "mentorship" },
      { label: "Alumni in Big 4, banking, and tech", slug: "alumni-network" },
      { label: "Study nights and socials", slug: "socials" },
    ],
  },
  {
    title: "Skills that transfer",
    art: "gold",
    photo: "photos/gallery/skills.jpg",
    body:
      "Workshops on the things that get graded in an internship but never in a class. Excel, case work, public speaking, and salary negotiation.",
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
const SECTORS = [
  {
    key: "consulting",
    name: "Consulting & Advisory",
    blurb: "Client-facing problem solving. Firms recruit for case skills, structured thinking, and the ability to present to a room.",
    looksFor: ["Case interview prep", "Communication", "Any major welcome"],
  },
  {
    key: "accounting",
    name: "Accounting & Assurance",
    blurb: "Audit and tax. The most structured recruiting timeline on this board, and the one that starts earliest.",
    looksFor: ["150-hour track", "Accountancy or Finance", "Recruits junior year"],
  },
  {
    key: "finance",
    name: "Finance & Markets",
    blurb: "Corporate finance, treasury, FP&A, and wealth management. Phoenix has more of these seats than students realize.",
    looksFor: ["Excel and modeling", "Finance or Economics", "Rolling deadlines"],
  },
  {
    key: "tech",
    name: "Technology & Operations",
    blurb: "Data, systems, and supply chain roles inside large employers. Often the least competitive path to a Fortune 500 name.",
    looksFor: ["SQL or Python", "Analytics coursework", "Open to all years"],
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
    careersUrl: "https://jobs.fcx.com/content/College-Connection/?locale=en_US",
    roles: [
      { role: "Summer Internship Program", level: "Any", season: "Summer 2027", deadline: "Posts Sept, fills by Jan",
        link: "https://jobs.fcx.com/content/Internships/?locale=en_US",
        note: "The timing is the whole game. Roles post September to early October and most are filled by January, so spring is already too late." },
      { role: "Business Career Track", level: "Any", season: "Summer 2027", deadline: "September",
        link: "https://jobs.fcx.com/content/Career-Opportunities/?locale=en_US",
        note: "Accounting, finance, supply chain and IT sit at the downtown Phoenix headquarters, not at the mine sites." },
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
        note: "Nine weeks, paid, and restricted to students within a year of graduating. Phoenix staffs the Investor Services track most heavily." },
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
        note: "The standard feeder into the junior-year internship. Treat it as step one of two, not a consolation prize." },
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
        link: "https://www.vanguardjobs.com/job-search-results/?keyword=%22college%20to%20corporate%22",
        note: "Scottsdale is one of only four locations, so you can do this without leaving the metro. It is the designated pipeline into full-time offers." },
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
      { role: "Summer Internship Program", level: "Junior", season: "Summer 2027", deadline: "Opens early September",
        link: "https://www.northerntrust.com/united-states/about-us/careers/life-at-northern-trust/hear-from-our-north-america-summer-interns--past-and-present",
        note: "Ten weeks, June to August. The Tempe office is about ten minutes from campus, so have your resume ready in August." },
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
        link: "https://ibqbjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Honeywell/jobs?keyword=intern",
        note: "A 3.0 GPA floor, and finance and supply chain sit alongside engineering. Filter by job function, the keyword search is loose." },
      { role: "Honeywell Aerospace Early Careers", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://www.honeywellaerospace.com/us/en/company/careers/leaders-of-tomorrow",
        note: "Aerospace has spun off into a separate company with its own site. For the Phoenix aerospace jobs you must apply here, not on honeywell.com." },
      { role: "Aerospace internship search", level: "Any", season: "Summer 2027", deadline: "Rolling",
        link: "https://icfcjb.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/Aerospace/jobs?keyword=intern",
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
        note: "Sophomore standing or above, two to three months, paid. Filter to Phoenix or most hits are field operations." },
      { role: "Corporate roles, Phoenix HQ", level: "Any", season: "Year-round", deadline: "Rolling",
        link: "https://jobs.republicservices.com/us/en/careers/corporate",
        note: "A Fortune 500 headquartered in north Phoenix, so finance, accounting and analytics are all local. Rare in-town corporate finance." },
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
