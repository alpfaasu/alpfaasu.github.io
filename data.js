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
  /* The chapter started in the 2012/13 academic year, shown on the site as 2012 (Renārs, 2026-10-06/07;
     Sun Devil Central's "chartered 2015" was wrong). founded is the numeric
     start year for arithmetic such as years on campus; foundedLabel is what
     the site prints. */
  founded: 2012,
  foundedLabel: "2012",   // shown as just the year, Renārs 2026-10-07
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
  { photo: "photos/gallery/hero-1.jpg", caption: "The chapter" },
  { photo: "photos/gallery/hero-2.jpg", caption: "Goldman Sachs on campus" },
  { photo: "photos/gallery/hero-3.jpg", caption: "ALPFASADO" },
  { photo: "photos/gallery/hero-4.jpg", caption: "Case competition" },
  { photo: "photos/gallery/hero-5.jpg", caption: "Career fair" },
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
    "photos/gallery/about-1.jpg",   // wide banner slot: the full chapter in the auditorium
    "photos/gallery/about-2.jpg",
    "photos/gallery/about-3.jpg",
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
  { value: 14, label: "Officers on the board" },
  { value: CHAPTER.foundedLabel, label: "First year on campus", raw: true }, // raw = print as written, no count-up
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
      { label: "Socials, intramurals and trips", slug: "socials" },
    ],
  },
  {
    title: "The work",
    art: "gold",
    photo: "photos/gallery/skills.jpg",
    body:
      "Growth is earned in reps. We run the sessions where you build the things nobody grades you on until it matters, and where failing in the room is the point.",
    points: [
      { label: "Case competition prep", slug: "case-comp" },
      { label: "Career fairs and employer sessions", slug: "career-fairs" },
      { label: "General meetings", slug: "general-meetings" },
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
   hero: optional wide photo for the header background. Without it the
   header uses the first photo in the list. The three set below are wide
   copies in photos/gallery/ of their own events (2026-10-08): the
   chapter at the 2026 convention in Charlotte (Rafa's Google Photos
   album), the Sep 30 career fair and the Oct 6 LPL Financial general
   meeting (both from the Brand & Content F26 Drive folder).
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
    photos: [
      { src: "photos/programs/resume-reviews-1.jpg" },
      { src: "photos/programs/resume-reviews-2.jpg" },
      { src: "photos/programs/resume-reviews-3.jpg" },
      { src: "photos/programs/resume-reviews-4.jpg" },
      { src: "photos/programs/resume-reviews-5.jpg" },
      { src: "photos/programs/resume-reviews-6.jpg" },
    ],
  },
  "mock-interviews": {
    pillar: "Recruiting access",
    title: "Mock technicals and behaviorals",
    colour: "ink",
    lede: "The first time you answer Tell me about yourself should not be in the interview that counts.",
    body: [
      "We run paired mock interviews across the semester, behavioral early and technical closer to recruiting season. You sit across from someone who has done it for a firm, you get asked the questions, and you get told plainly what did not land.",
      "Technicals are tailored by sector. Accounting members get walked through audit and tax scenarios, finance members get valuation and three statement questions, and consulting members get a full case.",
    ],
    takeaways: [
      "Live practice with feedback in the room",
      "Sector specific technical questions, not generic ones",
      "A story bank you can reuse across every firm",
      "Practice being interrupted, which is what actually happens",
    ],
    photos: [
      { src: "photos/programs/mock-interviews-1.jpg" },
      { src: "photos/programs/mock-interviews-2.jpg" },
      { src: "photos/programs/mock-interviews-3.jpg" },
      { src: "photos/programs/mock-interviews-4.jpg" },
      { src: "photos/programs/mock-interviews-5.jpg" },
      { src: "photos/programs/mock-interviews-6.jpg" },
    ],
  },
  "national-convention": {
    pillar: "Recruiting access",
    title: "The ALPFA National Convention",
    colour: "deep",
    hero: "photos/gallery/convention.jpg",
    lede: "The largest gathering of Latino professionals in the country, and firms interview on the spot.",
    body: [
      "ALPFA National brings thousands of students and professionals together with a career fair where companies interview on the spot and hand out offers on site. Chapter members get priority access and we fundraise through the year to help cover the cost of going.",
      "Members who go treat it as a recruiting trip, not a conference. We prepare the resume book beforehand, assign target firms, and debrief afterwards so the next class knows what worked.",
    ],
    takeaways: [
      "On site interviews with Fortune 500 recruiters",
      "A national network beyond Arizona",
      "Chapter fundraising toward travel costs",
      "Preparation sessions before the trip",
    ],
    photos: [
      { src: "photos/programs/national-convention-1.jpg" },
      { src: "photos/programs/national-convention-2.jpg" },
      { src: "photos/programs/national-convention-3.jpg" },
      { src: "photos/programs/national-convention-4.jpg" },
      { src: "photos/programs/national-convention-5.jpg" },
      { src: "photos/programs/national-convention-6.jpg" },
    ],
  },
  "mentorship": {
    pillar: "The ALPFAmilia",
    title: "Peer mentorship pairing",
    colour: "red",
    lede: "You get paired with someone one or two years ahead who has already done what you are trying to do.",
    body: [
      "Every member who wants one is matched with a mentor by major and by target industry. Not a formal program with paperwork, a person you can text the night before an interview.",
      "Mentors share the things nobody publishes: which recruiters actually respond, which info sessions are worth the evening, and what the interview loop looks like at their firm.",
    ],
    takeaways: [
      "Matched by major and target industry",
      "Direct line to someone who has the internship you want",
      "Application timelines from people who just lived them",
      "A group that notices when you go quiet",
    ],
    photos: [
      { src: "photos/programs/mentorship-1.jpg" },
      { src: "photos/programs/mentorship-2.jpg" },
      { src: "photos/programs/mentorship-3.jpg" },
      { src: "photos/programs/mentorship-4.jpg" },
      { src: "photos/programs/mentorship-5.jpg" },
      { src: "photos/programs/mentorship-6.jpg" },
    ],
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
    photos: [
      { src: "photos/programs/alumni-network-1.jpg" },
      { src: "photos/programs/alumni-network-2.jpg" },
      { src: "photos/programs/alumni-network-3.jpg" },
      { src: "photos/programs/alumni-network-4.jpg" },
      { src: "photos/programs/alumni-network-5.jpg" },
      { src: "photos/programs/alumni-network-6.jpg" },
    ],
  },
  "socials": {
    pillar: "The ALPFAmilia",
    title: "Socials, intramurals and trips",
    colour: "yellow",
    lede: "The chapter with the laptops closed.",
    body: [
      "Recruiting season is exhausting and doing it alone is worse. So there are study nights before midterms, cultural nights through the year, the pool party in September, intramural soccer under the lights, the marathon team, the carne asada, and the night somebody books a rooftop. None of it goes on a resume and all of it is why people stay.",
      "This is where the chapter stops being a schedule and starts being people you would call. The group chat that gets you a referral in March started at a pool in September.",
    ],
    takeaways: [
      "Study nights before midterms and finals",
      "Noche de Cultura and other cultural events",
      "Pool party and carne asada every semester",
      "Intramural soccer and the ALPFA marathon team",
    ],
    photos: [
      { src: "photos/programs/socials-2.jpg" },
      { src: "photos/programs/nights-out-1.jpg" },
      { src: "photos/programs/socials-6.jpg" },
      { src: "photos/programs/nights-out-3.jpg" },
      { src: "photos/programs/socials-1.jpg" },
      { src: "photos/programs/nights-out-6.jpg" },
    ],
  },
  "career-fairs": {
    pillar: "Skills that transfer",
    title: "Career fairs and employer sessions",
    colour: "ink",
    hero: "photos/gallery/career-fairs.jpg",
    lede: "The recruiter is in the room. The only question is whether you are.",
    body: [
      "Through the semester firms come to us: a Lunch and Learn where a team walks through what they actually do, a coffee chat where you get fifteen minutes with someone who screens applications, and our own career fair where the tables are the companies on the internship board. This fall that list has included Ford, LPL Financial, Bank of America, Eide Bailly, Sherwin-Williams and Gallo.",
      "These are smaller than the university fairs and that is the point. Thirty members and three recruiters is a conversation. Three thousand students and a line is not.",
    ],
    takeaways: [
      "Face time with recruiters from firms on the internship board",
      "The questions to ask that a careers page cannot answer",
      "A name to put in the application and a reason they remember yours",
      "Every past session listed below, with who came",
    ],
    photos: [
      { src: "photos/programs/career-fairs-1.jpg" },
      { src: "photos/programs/career-fairs-2.jpg" },
      { src: "photos/programs/career-fairs-3.jpg" },
      { src: "photos/programs/career-fairs-4.jpg" },
      { src: "photos/programs/career-fairs-5.jpg" },
      { src: "photos/programs/career-fairs-6.jpg" },
    ],
  },
  "general-meetings": {
    pillar: "Skills that transfer",
    title: "General meetings",
    colour: "ink",
    hero: "photos/gallery/general-meetings.jpg",
    lede: "Everyone in one room, usually with a firm.",
    body: [
      "The general body meeting is where the chapter happens in person. Most of them carry a guest: this fall Freeport-McMoRan, Dell, Gallo and LPL Financial have each run one, and one was an intern panel of our own members telling the room what their summer was actually like.",
      "If you only come to one thing, come to this. It is where the announcements are made, where the sign-ups open, and where people who were strangers in August are a group chat by October.",
    ],
    takeaways: [
      "What is coming up and how to get into it",
      "A guest firm most weeks, presenting to a room that is paying attention",
      "The intern panel, once a semester, with no recruiters present",
      "Every past meeting listed below, with who came",
    ],
    photos: [
      { src: "photos/programs/general-meetings-1.jpg" },
      { src: "photos/programs/general-meetings-2.jpg" },
      { src: "photos/programs/general-meetings-3.jpg" },
      { src: "photos/programs/general-meetings-4.jpg" },
      { src: "photos/programs/general-meetings-5.jpg" },
      { src: "photos/programs/general-meetings-6.jpg" },
    ],
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
      "Slide building under time pressure",
      "Presenting to judges who interrupt",
      "A team credential for your resume",
    ],
    photos: [
      { src: "photos/programs/case-comp-1.jpg" },
      { src: "photos/programs/case-comp-2.jpg" },
      { src: "photos/programs/case-comp-3.jpg" },
      { src: "photos/programs/case-comp-4.jpg" },
      { src: "photos/programs/case-comp-5.jpg" },
      { src: "photos/programs/case-comp-6.jpg" },
    ],
  },
};

/* ------------------------------------------------------------
   PAST EVENTS
   The archive. Every event the chapter has run goes here once it has
   happened, and it shows on its programme page (program.html?p=...)
   under the photo wall, newest first. The point is that a member can look
   any event up afterwards: the photos, the link the QR on the flyer went
   to, and the professionals who came, so people can stay connected.

   Fields, per event:
     date      ISO, the day it happened. Required.
     title     As it was announced. Required.
     program   A PROGRAMS key. Required, or the event shows nowhere.
     where     Room or venue. Leave "" if unknown, nothing is guessed.
     summary   One or two sentences on what happened. Optional.
     photos    [{ src: "photos/events/<date>-<slug>/<n>.jpg", caption }].
               Objects, not strings. Drop originals in that folder and run
               Update Photos.command. Optional.
     links     [{ label, url }]. The sign-up form, the slides, the recording,
               whatever the QR on the flyer pointed to. Only URLs somebody
               has opened. Optional.
     guests    [{ name, title, company, linkedin }]. The professionals who
               came, as they introduced themselves. linkedin may be "".
               Only people who were actually there. Optional.

   Nothing here is invented. Leave a field empty rather than guess it.
   The example below is commented out and is the shape, not a fact.
   ------------------------------------------------------------ */
const PAST_EVENTS = [
  // {
  //   date: "2026-09-10",
  //   title: "Lunch and Learn with Ford",
  //   program: "career-fairs",
  //   where: "MU 240 Navajo",
  //   summary: "Two members of Ford's finance rotation programme walked through what the first year looks like and took questions for half an hour.",
  //   photos: [
  //     { src: "photos/events/2026-09-10-ford/1.jpg", caption: "The room, five minutes in." },
  //   ],
  //   links: [
  //     { label: "Rotation programme page", url: "https://..." },
  //   ],
  //   guests: [
  //     { name: "First Last", title: "Finance Analyst", company: "Ford", linkedin: "https://www.linkedin.com/in/..." },
  //   ],
  // },
];

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
/* The roster is the chapter's own, read off the officer cards it publishes on
   instagram.com/alpfaasu on 2026-09-20. Fourteen officers: the fourteen the
   chapter's own officer cards show. Renārs took himself off the public board
   on 2026-10-06 because his seat is not one of those cards; his entry is in
   git history (commit before that date) if it is ever wanted back. STATS
   still says 15, which is Sun Devil Central's count and includes him.

   The eight placeholder roles that used to sit here were invented (VP of
   Internal Affairs, VP of Membership, VP of Community Service and so on) and
   NONE of them is a real ALPFA at ASU position. Do not reintroduce them.

   Name, role, major and graduating year are the chapter's own published facts.
   coffeeChat is each officer's Calendly from the chapter's own "ALPFA Coffee
   Chat" sheet (linked from linktr.ee/alpfaasu23), every one opened 2026-10-06.
   linkedin is the profile LinkedIn's own search returned for the full name
   with an ASU or ALPFA headline, same day. Everything else is the officer's to
   give: coffeeChatFor, experience, statement, story, photos. Do not write a
   statement or a story on an officer's behalf, and do not guess an email. An
   empty field renders as nothing, which is the point.

   The cards also carry each officer's hometown, which is not on the site
   because BOARD has no field for it. Worth adding if the board wants it.
*/
  { name: "Juan Pinilla", role: "President",
    major: "Economics and Data Science", gradYear: "2027",
    photo: "photos/board/juan-pinilla.jpg", linkedin: "https://www.linkedin.com/in/juan-pinilla-rivera/", coffeeChat: "https://calendly.com/juan-pinilla-rivera/juan-pinilla", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Fernanda Sandoval", role: "EVP of Operations",
    major: "Family and Human Development", gradYear: "2027",
    photo: "photos/board/fernanda-sandoval.jpg", linkedin: "https://www.linkedin.com/in/fernandasandoval1/", coffeeChat: "https://calendly.com/fsandov7-asu/30min", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Rafael Molina", role: "EVP of Growth",
    major: "Finance", gradYear: "2028",
    photo: "photos/board/rafael-molina.jpg", linkedin: "https://www.linkedin.com/in/rafael-claus-molina/", coffeeChat: "https://calendly.com/rcmolin1-asu/30min", coffeeChatFor: "",
    /* From his own LinkedIn headline. No dates were given there, so none are
       invented here; he should add the term himself. */
    experience: [{ role: "M&A Intern", org: "EY-Parthenon", when: "" }],
    statement: "", story: "", photos: [] },
  { name: "Maria Carbajal", role: "EVP of Development",
    major: "Accountancy, minor in Data Science", gradYear: "2028",
    photo: "photos/board/maria-carbajal.jpg", linkedin: "https://www.linkedin.com/in/mariacarbajalasu/", coffeeChat: "https://calendly.com/mfcarbaj-asu/30min", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Nicolas Garzon", role: "EVP of Finance",
    major: "Computer Science and Mathematics", gradYear: "2028",
    photo: "photos/board/nicolas-garzon.jpg", linkedin: "https://www.linkedin.com/in/nicolasgarzonc/", coffeeChat: "https://calendly.com/nicolasmateogarzoncobos/new-meeting", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Paula Moreno", role: "VP of Professional Development",
    major: "Psychology", gradYear: "2027",
    photo: "photos/board/paula-moreno.jpg", linkedin: "https://www.linkedin.com/in/paula-moreno-277427272/", coffeeChat: "https://calendly.com/paulasmv04/30min", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Ray Sanchez", role: "VP of Financial Operations",
    major: "Finance", gradYear: "2029",
    photo: "photos/board/ray-sanchez.jpg", linkedin: "https://www.linkedin.com/in/raymundo-simon-sanchez-761306324/", coffeeChat: "https://calendly.com/rsimonsa-asu", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Fernanda Elias", role: "VP of Corporate Outreach",
    major: "Management", gradYear: "2029",
    photo: "photos/board/fernanda-elias.jpg", linkedin: "https://www.linkedin.com/in/fernanda-elias-villarreal/", coffeeChat: "https://calendly.com/1906fev/30min", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Olenka Cruzado", role: "VP of Brand and Content",
    major: "Finance and Marketing, professional sales", gradYear: "2029",
    photo: "photos/board/olenka-cruzado.jpg", linkedin: "https://www.linkedin.com/in/olenka-cruzado/", coffeeChat: "https://calendly.com/ocruzado-asu/30min", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Nicolas Romero-Mesa", role: "VP of Campus Relations",
    major: "Economics", gradYear: "2027",
    photo: "photos/board/nicolas-romero-mesa.jpg", linkedin: "https://www.linkedin.com/in/nicolas-romeromesa-link/", coffeeChat: "https://calendly.com/nromer25-asu/new-meeting",
    /* His own words, sent 2026-10-07: the areas he said he can help with. */
    coffeeChatFor: "Book me for economics, entrepreneurship, government, interpersonal skills, community service, or anything else on your mind.",
    experience: [
      { role: "External Affairs Intern", org: "Boys and Girls Clubs", when: "Summer 2026" },
      { role: "Government Relations Intern", org: "Chandler Chamber of Commerce", when: "Summer 2026" },
    ],
    /* No statement or story yet: he described his internships, not why he
       took the VP role, and the rule is never to write that for him. */
    statement: "", story: "",
    photos: [
      "photos/board/nicolas-romero-mesa-1.jpg",
      "photos/board/nicolas-romero-mesa-2.jpg",
      "photos/board/nicolas-romero-mesa-3.jpg",
    ] },
  { name: "Nathan Olvera", role: "VP of Public Relations",
    major: "Finance and Marketing", gradYear: "2029",
    photo: "photos/board/nathan-olvera.jpg", linkedin: "https://www.linkedin.com/in/nathanolvera/", coffeeChat: "https://calendly.com/nolvera1-asu/30min", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Laritza Rivas", role: "VP of Corporate Relations",
    major: "Accounting and Computer Information Systems", gradYear: "2027",
    photo: "photos/board/laritza-rivas.jpg", linkedin: "https://www.linkedin.com/in/laritzarivas24/", coffeeChat: "https://calendly.com/lrivas10-asu/30min", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Antonio Avila", role: "VP of Tech and Internal Ops",
    major: "AI in Business", gradYear: "2027",
    photo: "photos/board/antonio-avila.jpg", linkedin: "https://www.linkedin.com/in/antonio-j-avila/", coffeeChat: "https://calendly.com/antoniojavila11/30min", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
  { name: "Taumi Spencer", role: "VP of Events",
    major: "Marketing", gradYear: "2029",
    photo: "photos/board/taumi-spencer.jpg", linkedin: "https://www.linkedin.com/in/taumi-spencer-aa10722a8/", coffeeChat: "https://calendly.com/tmspenc4-asu/new-meeting", coffeeChatFor: "", experience: [],
    statement: "", story: "", photos: [] },
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
      "Build one complete model end to end and be able to walk someone through every assumption in it.",
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
      "Get comfortable with SQL, then add Python or Power BI. One working project beats three certificates.",
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
    quizResult: "Your answers point at AI and machine learning. You went toward the problem nobody has a template for yet, you are willing to learn a tool properly rather than talk about it, and you would rather be early to something unfinished than late to something settled. Read the field honestly before you commit: the roles that say machine learning engineer want a strong quantitative background, and the roles that say AI product, AI risk or AI governance want somebody who can hold a room and read a contract. Both are on this list. Only one of them is being fought over by every CS student at Fulton.",
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
      "Apply to the named programme, not the job board. The City of Phoenix Finance Summer Internship and Maricopa County's MCLEAPS are the actual front doors. Keyword searching a NEOGOV or Workday board for intern mostly returns nothing.",
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
      "Stop waiting for a posting. Most of these seats are filled by someone who emailed a named person before the job existed. Find the name, say what you would do in the first month, attach nothing.",
      "Take the nonprofit finance work seriously. A development office reconciling restricted funds, filing a 990 and closing a month is accounting work, and students skip it because the logo is not famous. Recruiters do not skip it.",
      "Set a weekly slot for this rather than a panic week. Rolling means a seat can open any Tuesday, and the person who checked on Tuesday gets it.",
    ],
  },
];

/* ------------------------------------------------------------
   SECTOR GROUPS
   The chooser at the top of internships.html shows THREE squares, not
   nine. Each square folds some of the SECTORS above into one summary;
   tapping it opens that group's field cards underneath. The role count
   on a square is added up from its fields at render time, never typed
   here. Every SECTORS key must appear in exactly one group or the field
   is unreachable from the chooser (the filter chips still list it).
   ------------------------------------------------------------ */
const SECTOR_GROUPS = [
  {
    key: "business",
    name: "Business careers",
    blurb: "The four fields most members start in. Consulting, accounting, finance and the operations side of large employers.",
    sectors: ["consulting", "accounting", "finance", "tech"],
  },
  {
    key: "technical",
    name: "Engineering & AI",
    blurb: "Fabs, aerospace, power, and the machine learning seats. Phoenix builds things, and most of these roles cannot be done from anywhere else.",
    sectors: ["engineering", "ai"],
  },
  {
    key: "employers",
    name: "Where else people hire",
    blurb: "Hospitals, governments, startups and nonprofits. Fewer applicants per seat than any firm on the board, and most of them want business majors.",
    sectors: ["health", "public", "startups"],
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
    note: "Not the usual route to these roles, but customer and go-to-market work inside the consulting firms exists. Lead with analytics you can actually do." },
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
      { label: "Trusted with money and decisions that count", detail: "Ownership of the number.", w: { finance: 3 } },
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
      { role: "Assurance, Data and Intelligence Delivery Intern", sector: "ai", level: "Junior", season: "Summer 2027", deadline: "Rolling, two applications per six months",
        link: "https://eyglobal.yello.co/jobs/Ps6DR65DB3hhb_XrmIxQjA?locale=en",
        note: "Phoenix is the first of thirteen cities on this requisition, which makes it the rare AI-adjacent seat on this board you can take without moving. It names Accounting and Finance majors ahead of Data Science, wants a 3.0, and has no sponsorship." },
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
        note: "The one on this list that wants a mining engineering student. ASU does not run that major, so this suits a civil, geological or industrial student willing to learn it." },
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
        note: "The full-time version of the internship. Axon builds machine learning products in Scottsdale, so this is the closest thing to an AI employer headquartered in the metro." },
      { role: "2027 US Electrical Engineering Internship", sector: "engineering", level: "Any", season: "Summer 2027", deadline: "Open now",
        link: "https://job-boards.greenhouse.io/axontalentcommunity/jobs/7837252003",
        note: "Scottsdale based hardware work. Axon has no AI titled internship despite its machine learning teams, so this and the leadership programme are the two ways in." },
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
        note: "The cheapest AI experience you can get, because it is on campus and costs you no relocation and no summer. ASU's own AI team hires students to build and ship tools other students use, and the work is serious enough that the CIO reviews it." },
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
        note: "The county's own board almost never carries an intern title, so do not judge the employer by it. MCLEAPS is the way in and it is opened through ASU, not through here." },
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
        note: "You evaluate school districts' internal controls and then help fix them. It is the closest thing on this board to internal audit work before you have a degree." },
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
        note: "One board covers every state agency, and the Internship category is an actual filter rather than a keyword guess. Be honest with yourself about what is there: the current batch leans hydrology, public health and law." },
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
        note: "Nextiva has no US intern programme, so be honest with yourself: this is a full-time job, not an internship. An SDR seat at a Scottsdale software company is still the most common way students here get their first quota and their first CRM, and it is onsite four to five days a week." },
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
        note: "CPLC is one of the largest Latino nonprofits in the country and it runs small business lending, home lending and affordable housing, which means it has a full finance and accounting function, not just programme staff. The careers page on cplc.org does not list anything; the actual searchable board is this address, which is easy to miss." },
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
        note: "These are part-time afternoon jobs that fit around class, they pay, and they are a straight line to the community service hours this chapter already cares about. Tuition reimbursement kicks in after a year. Do not expect a finance seat here, expect a paid job you can hold while enrolled." },
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
  { name: "Vanguard",          logo: "logos/vanguard.svg" },
  { name: "Northern Trust",    logo: "logos/northerntrust.svg" },
  { name: "Intel",             logo: "logos/intel.svg" },
  { name: "Honeywell",         logo: "logos/honeywell.svg" },
  { name: "Freeport-McMoRan",  logo: "logos/fcx.svg" },
  { name: "Republic Services", logo: "logos/rsg.svg" },
  /* Firms the chapter's alumni have worked at, added 2026-10-06 so the
     alumni wall and directory draw real logos. Logo lookup only: a firm in
     this list is NOT a sponsor. Sources and licence lines are in
     logos/SOURCES.md. Wiland's white letters were recoloured navy so they
     show on the light ground; Ally's SVG got a viewBox so it scales. */
  { name: "ADP"                                   , logo: "logos/adp.svg" },
  { name: "Ally"                                  , logo: "logos/ally.svg" },
  { name: "Bank of America"                       , logo: "logos/bankofamerica.svg" },
  { name: "Banner Health"                         , logo: "logos/bannerhealth.svg" },
  { name: "BlackRock"                             , logo: "logos/blackrock.svg" },
  { name: "Bloomberg"                             , logo: "logos/bloomberg.svg" },
  { name: "Credit Suisse"                         , logo: "logos/creditsuisse.svg" },
  { name: "Goldman Sachs"                         , logo: "logos/goldmansachs.svg" },
  { name: "JPMorgan Chase & Co."                  , logo: "logos/jpmorganchase.svg" },
  { name: "Morgan Stanley"                        , logo: "logos/morganstanley.svg" },
  { name: "MUFG"                                  , logo: "logos/mufg.svg" },
  { name: "Nationwide"                            , logo: "logos/nationwide.svg" },
  { name: "Santander"                             , logo: "logos/santander.svg" },
  { name: "UBS"                                   , logo: "logos/ubs.png" },
  { name: "Wells Fargo"                           , logo: "logos/wellsfargo.svg" },
  { name: "Arizona Hispanic Chamber of Commerce"  , logo: "logos/azhcc.png" },
  { name: "BMO Capital Markets"                   , logo: "logos/bmo.svg" },
  { name: "The Concord Group, LLC"                , logo: "logos/concordgroup.png" },
  { name: "DriveTime"                             , logo: "logos/drivetime.svg" },
  { name: "Education at Work"                     , logo: "logos/educationatwork.png" },
  { name: "Honeywell Aerospace"                   , logo: "logos/honeywellaerospace.svg" },
  { name: "Magnit"                                , logo: "logos/magnit.png" },
  { name: "Oscar Health"                          , logo: "logos/oscarhealth.svg" },
  { name: "Partners Group"                        , logo: "logos/partnersgroup.svg" },
  { name: "Piper Sandler"                         , logo: "logos/pipersandler.png" },
  { name: "Price Kong & Company CPAs"             , logo: "logos/pricekong.png" },
  { name: "Raza Development Fund"                 , logo: "logos/razadevelopmentfund.svg" },
  { name: "Reliance Industries Limited"           , logo: "logos/reliance.png" },
  { name: "TYR Tactical"                          , logo: "logos/tyrtactical.png" },
  { name: "ASU Enterprise Partners"               , logo: "logos/asuenterprisepartners.png" },
  { name: "Axolotl Biologix"                      , logo: "logos/axolotlbiologix.png" },
  { name: "Branch"                                , logo: "logos/branch.svg" },
  { name: "Extern"                                , logo: "logos/extern.svg" },
  { name: "MARKITES"                              , logo: "logos/markites.png" },
  { name: "Wiland"                                , logo: "logos/wiland.svg" },
  { name: "Blackhawk Network"                     , logo: "logos/blackhawknetwork.png" },
  { name: "ASU Student Investment Management Fund", logo: "logos/asusimf.png" },
  { name: "Anodize Capital Partners"              , logo: "logos/anodizecapital.png" },
  { name: "Columbia West Capital"                 , logo: "logos/columbiawestcapital.png" },
  { name: "Springbok Legacy Ventures"             , logo: "logos/springboklegacy.png" },
  { name: "Goose"                                 , logo: "logos/goose.png" },
  { name: "Renaissance"                           , logo: "logos/renaissance.png" },
  { name: "Intrface"                              , logo: "logos/intrface.png" },
  { name: "Keelson Management, LLC"               , logo: "logos/keelson.png" },
  { name: "ALPFA Phoenix"                         , logo: "logos/alpfaphoenix.png" },
  /* Internship board employers, added 2026-10-07 so every employer card
     draws its logo. Logo lookup only, not sponsors. Sources in
     logos/SOURCES.md. */
  { name: "TSMC Arizona"                          , logo: "logos/tsmc.svg" },
  { name: "onsemi"                                , logo: "logos/onsemi.svg" },
  { name: "Microchip Technology"                  , logo: "logos/microchip.svg" },
  { name: "Amkor Technology"                      , logo: "logos/amkor.svg" },
  { name: "Boeing"                                , logo: "logos/boeing.svg" },
  { name: "Salt River Project"                    , logo: "logos/srp.svg" },
  { name: "Arizona Public Service"                , logo: "logos/aps.svg" },
  { name: "Kiewit"                                , logo: "logos/kiewit.svg" },
  { name: "W. L. Gore & Associates"               , logo: "logos/gore.svg" },
  { name: "Axon"                                  , logo: "logos/axon.svg" },
  { name: "NVIDIA"                                , logo: "logos/nvidia.svg" },
  { name: "Arizona State University"              , logo: "logos/asu.svg" },
  { name: "Anthropic"                             , logo: "logos/anthropic.svg" },
  { name: "Mayo Clinic"                           , logo: "logos/mayoclinic.svg" },
  { name: "TGen (Translational Genomics Research Institute)", logo: "logos/tgen.png" },
  { name: "UnitedHealth Group and Optum"          , logo: "logos/unitedhealthgroup.svg" },
  { name: "Blue Cross Blue Shield of Arizona (AZ Blue)", logo: "logos/azblue.svg" },
  { name: "CVS Health and Aetna"                  , logo: "logos/cvshealth.svg" },
  { name: "HonorHealth"                           , logo: "logos/honorhealth.svg" },
  { name: "Caris Life Sciences"                   , logo: "logos/caris.png" },
  { name: "City of Phoenix"                       , logo: "logos/cityofphoenix.svg" },
  { name: "Maricopa County"                       , logo: "logos/maricopacounty.png" },
  { name: "Arizona Auditor General"               , logo: "logos/azauditor.png" },
  { name: "Arizona Governor's Office of Strategic Planning and Budgeting", logo: "logos/ospb.svg" },
  { name: "Arizona Department of Transportation"  , logo: "logos/adot.png" },
  { name: "State of Arizona"                      , logo: "logos/stateofarizona.svg" },
  { name: "Federal Government, USAJOBS Pathways"  , logo: "logos/usajobs.svg" },
  { name: "Carvana"                               , logo: "logos/carvana.svg" },
  { name: "Nextiva"                               , logo: "logos/nextiva.svg" },
  { name: "Lessen"                                , logo: "logos/lessen.svg" },
  { name: "Arizona Commerce Authority"            , logo: "logos/azcommerce.svg" },
  { name: "ASU Venture Devils"                    , logo: "logos/venturedevils.svg" },
  { name: "SEED SPOT"                             , logo: "logos/seedspot.png" },
  { name: "Chicanos Por La Causa"                 , logo: "logos/cplc.svg" },
  { name: "City Year"                             , logo: "logos/cityyear.svg" },
  { name: "Teach For America"                     , logo: "logos/teachforamerica.svg" },
  { name: "Arizona Community Foundation"          , logo: "logos/azfoundation.svg" },
  { name: "Valley of the Sun United Way"          , logo: "logos/vsuw.png" },
  { name: "St. Mary's Food Bank"                  , logo: "logos/stmarysfoodbank.png" },
  { name: "Boys & Girls Clubs of the Valley"      , logo: "logos/bgcvalley.png" },
  { name: "Parker Dewey"                          , logo: "logos/parkerdewey.png" },
  { name: "HACU National Internship Program"      , logo: "logos/hacu.png" },
  { name: "Handshake"                             , logo: "logos/handshake.svg" },
  { name: "Forage"                                , logo: "logos/forage.svg" },
  { name: "Pathlight Advisors",                    logo: "logos/pathlightadvisors.png" },
  { name: "State Farm",                            logo: "logos/statefarm.svg" },
  { name: "W. P. Carey School of Business",        logo: "logos/asusimf.png" },
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
/* The status line rendered ABOVE the tiers on sponsors.html. The perks below
   are still the placeholder set written to show the SHAPE of a partnership,
   and a company may be sent this link before the board has settled them, so
   the page has to say so where it cannot be missed rather than in a footnote
   under the grid. Delete this constant and its block in sponsors.html once
   TIERS carries the board's real packet. */
const TIERS_STATUS = {
  label: "Not settled yet",
  body:
    "The levels below are a working draft written to show the shape of a partnership. They are not an offer. The board sets the final benefits at each level, and what a level costs is discussed with a company directly rather than published here.",
};

/* The email a company gets when it asks for the packet.
   Same reasoning as coffeeChatHref() on the board: the barrier is not
   willingness, it is writing the first message. A bare mailto: opens an empty
   window and the sender has to invent the framing, so this one arrives already
   written with the blanks marked in brackets for them to overtype.

   {level} is substituted with the tier they clicked from, or with the fallback
   below when they come from the closing call to action and no tier is known.
   Keep the blanks in [square brackets]: they survive every mail client, they
   read as "fill me in", and they do not look like a broken merge field. */
const PACKET_EMAIL = {
  subject: "Partnership inquiry from [your company]",
  levelFallback: "[which level you are considering]",
  body:
    "Hello ALPFA at ASU,\n\n" +
    "My name is [your name] and I am [your title] at [your company].\n\n" +
    "We are interested in the {level} level and would like to talk with your corporate team about what a partnership would look like.\n\n" +
    "We are available [times] on [days], and we are happy to work around your schedule.\n\n" +
    "Thank you,\n" +
    "[your name]\n" +
    "[your company]\n",
};

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
        note: "Read this before you accept anything. Level I is the entry desk job, level IV is reserved for teaching and research aide work and specialised skills, and the gap between them is serious money. If a posting is graded below the duties it describes, that is a fair thing to raise with the supervisor.",
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
        note: "This is the one on the list that is not a job. ASU departments post short paid projects and you deliver a piece of work, which means a first-year student with no employment history can put a finished deliverable on a resume in one semester. You need an SSN before you can take one, so international students should sort that first.",
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
        note: "The application is a full research proposal with a named faculty mentor, so the work starts weeks before the deadline, and generative AI is banned for every part of it including the personal statement. Find the mentor first by going to office hours, because the proposal is the easy half.",
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
        note: "The hourly rates printed on the campus job tables run from $8.00 to $15.00, which is below Arizona minimum wage and below ASU's own $14.70 student floor, so the table is stale and you should ask what the role actually pays. Promotion from within is the draw here: facility assistant to supervisor to manager is a documented ladder inside four years.",
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
        note: "Asset Management and Data Science here are the two most finance-shaped student jobs anywhere near campus, and they carry proper titles rather than assistant-of-everything. Enterprise Partners is a separate nonprofit and not ASU itself, so on F-1 check the ISSC acceptable on-campus employer list before you accept.",
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
   CERTIFICATES
   Credentials a member can actually earn, as opposed to programmes that
   admit you. Replaced the Pipelines tab on 2026-10-06; that data is
   archived in tools/research/pipelines.archive.js.

   Same group shape as SCHOLARSHIPS and the rest. Per item:
     costShort : the card headline. "Free", "Exam fee", "USD 350". Set by hand
                 from the provider's page. Never derived from the prose.
     cost      : the full sentence, allowed to wrap.
     time      : what the provider says it takes.
     whoFor    : who it is for, in plain words.
     sectors   : board sector keys this is relevant to, drives the chips.
     whyItMatters / note : the thing the provider page will not tell you.

   Every link below was fetched and its FIRST <title> read on 2026-10-06.
   Two well known ones are deliberately absent: Tableau Desktop Specialist
   and QuickBooks ProAdvisor, because both sites refuse every scripted and
   headless request, so the weekly checker could never watch them. Add
   them only with a link somebody has opened in a real browser that week.
------------------------------------------------------------ */
const CERTIFICATES = [
  {
    key: "finance", name: "Finance and markets",
    blurb: "The credentials a bank or an asset manager will actually recognise on a sophomore resume, and the one that takes years.",
    items: [
      {
        name: "Bloomberg Market Concepts", provider: "Bloomberg for Education",
        costShort: "See portal",
        cost: "Priced through the Bloomberg for Education portal after you log in. Ask whether ASU's Bloomberg access already covers it before paying anything.",
        time: "Self-paced, online, a few hours per module.",
        whoFor: "Anyone aiming at markets, asset management or sales and trading, from freshman year on.",
        sectors: ["finance"],
        whyItMatters: "It is the fastest way to stop being lost in a terminal, and it is the one finance certificate recruiters at the banks on our board have heard of.",
        link: "https://portal.bloombergforeducation.com/",
        note: "Treat it as a vocabulary course for interviews, not a credential that opens doors by itself. The point is being able to talk about a yield curve without reading from a slide.",
      },
      {
        name: "Investment Foundations Certificate", provider: "CFA Institute",
        costShort: "USD 350",
        cost: "USD 350, with a member price shown after you sign in. Course content, activities and the final assessment stay open for 12 months from registration.",
        time: "35 to 65 hours, self-paced, start straight after registering.",
        whoFor: "Students who want the shape of the whole investment industry before committing to the CFA path, including non-finance majors.",
        sectors: ["finance"],
        whyItMatters: "It is the CFA Institute's own entry level credential, so it reads as serious on a resume without the multi-year commitment of the charter.",
        link: "https://www.cfainstitute.org/programs/investment-foundations-certificate",
        note: "If you already know you want the CFA, skip this and put the 350 toward Level I. If you are deciding, this is the cheaper way to find out.",
      },
      {
        name: "CFA Program, Level I", provider: "CFA Institute",
        costShort: "Exam fee",
        cost: "A one-time enrollment fee plus a registration fee per exam sitting. The CFA Institute page lists the current amounts and the registration windows.",
        time: "Successful candidates report more than 300 hours of study per level on average.",
        whoFor: "Juniors and seniors set on investment management, equity research or portfolio roles. You can sit Level I before graduating.",
        sectors: ["finance"],
        whyItMatters: "Passing Level I before you graduate is a differentiator for buy-side and research roles, and it signals you can sustain months of self-directed work.",
        link: "https://www.cfainstitute.org/programs/cfa-program/candidate-resources/level-i-exam",
        note: "This is the one certificate on this page that is a career decision, not a weekend. Three hundred hours during a semester is a part-time job. Plan the sitting around your lightest term, and do not start it as a sophomore to pad a resume.",
      },
      {
        name: "Financial Modeling and Valuation Analyst (FMVA)", provider: "Corporate Finance Institute",
        costShort: "From $347.90 a year",
        cost: "Starting from USD 347.90 per year for the full CFI catalog, which includes the 45 FMVA courses, 18 of them required.",
        time: "Self-paced and fully online.",
        whoFor: "Students going for investment banking, corporate finance or FP&A internships who need to build a three-statement model from a blank sheet.",
        sectors: ["finance", "consulting"],
        whyItMatters: "Modeling is tested in superdays and almost never taught in class. This is the structured version of what people otherwise learn from YouTube at 2am.",
        link: "https://corporatefinanceinstitute.com/certifications/financial-modeling-valuation-analyst-fmva-program/",
        note: "Paid, and the brand carries less weight than the skill. Nobody hires for the FMVA letters. They hire because you can model, and this is one honest route to being able to.",
      },
    ],
  },
  {
    key: "accounting", name: "Accounting",
    blurb: "The exam the whole profession is built around, and the Excel credential that proves the skill every accounting internship actually runs on.",
    items: [
      {
        name: "CPA Exam, Arizona", provider: "NASBA and the Arizona State Board of Accountancy",
        costShort: "Exam fees",
        cost: "An application fee plus a fee per exam section, both set by NASBA and the Arizona board. Their Arizona page lists the current amounts and the education you need before you can sit.",
        time: "Four sections, each a separate sitting. Most people spread them across the year after their accounting coursework is done.",
        whoFor: "Accounting majors and MAcc students. The education requirement means you plan this from sophomore year even though you sit it later.",
        sectors: ["accounting"],
        whyItMatters: "The Big Four offer letters on our board assume you are on the CPA track. Several firms pay for the review course and reward passing, so the cost to you is mostly time.",
        link: "https://nasba.org/exams/cpaexam/arizona/",
        note: "The thing to sort out early is credit hours, not the exam. Talk to a W. P. Carey accounting advisor about the hour requirement before you pick electives, because that is what decides whether you can sit the year you graduate.",
      },
      {
        name: "Microsoft Office Specialist: Excel Expert", provider: "Microsoft, exams by Certiport",
        costShort: "Exam fee",
        cost: "One proctored exam, priced by the testing center. Certiport sells vouchers and runs the exam; ASU's testing options are listed on Certiport's site.",
        time: "Microsoft recommends about 150 hours of hands-on Excel experience before sitting it. The exam itself is under an hour. The credential renews every 60 months.",
        whoFor: "Accounting, finance and operations majors. Anyone whose first internship task will be somebody else's workbook.",
        sectors: ["accounting", "finance", "consulting"],
        whyItMatters: "Excel is the software you are judged on from week one of an internship and never graded on in class. This is the one line on a resume that proves it rather than claims it.",
        link: "https://learn.microsoft.com/en-us/credentials/certifications/mos-excel-expert-2019/",
        note: "Do the Expert level, not the Associate. Associate is what a recruiter assumes you already have. Expert covers lookups, PivotTables and financial charts, which is the actual intern workload.",
      },
    ],
  },
  {
    key: "data", name: "Data and tech",
    blurb: "The three that come up in job descriptions for business roles now, not only for engineers.",
    items: [
      {
        name: "Google Data Analytics Professional Certificate", provider: "Google, on Coursera",
        costShort: "Subscription",
        cost: "Runs on a Coursera subscription, so the faster you finish the less it costs. Coursera offers a free enrollment period to start.",
        time: "Nine courses. Coursera's estimate is about six months at ten hours a week, less if you push.",
        whoFor: "Any business major who wants data analytics on a resume without a CS minor. Beginner level, no prerequisites.",
        sectors: ["tech", "consulting"],
        whyItMatters: "Consulting and tech employers on our board list SQL and dashboards in business analyst postings. This covers both, with a portfolio project at the end you can actually show.",
        link: "https://www.coursera.org/professional-certificates/google-data-analytics",
        note: "The certificate is the least valuable part. The capstone project is what you talk about in an interview, so do it on data you care about rather than the default dataset.",
      },
      {
        name: "Power BI Data Analyst Associate (PL-300)", provider: "Microsoft",
        costShort: "Exam fee",
        cost: "One proctored exam, priced on the Microsoft Learn page. Renewal every 12 months is free, through an online assessment.",
        time: "Self-paced study on Microsoft Learn, then one exam. Intermediate level.",
        whoFor: "Students headed to finance, accounting or operations teams that already run on Microsoft, which is most of the employers on our board.",
        sectors: ["tech", "accounting", "finance"],
        whyItMatters: "Power BI is what the FP&A and audit teams at the firms on our board actually use for dashboards. It pairs with the Excel Expert credential above.",
        link: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/",
        note: "Do this after Excel Expert, not instead of it. Power BI assumes you can already shape data in Excel.",
      },
      {
        name: "AWS Certified Cloud Practitioner", provider: "Amazon Web Services",
        costShort: "Exam fee",
        cost: "One proctored exam, priced on the AWS certification page. AWS also runs free preparation material.",
        time: "AWS says candidates could have up to six months of exposure to the cloud, but it is not required. Foundational level.",
        whoFor: "Tech and engineering majors, and business students targeting tech companies or consulting practices that sell cloud work.",
        sectors: ["tech", "engineering"],
        whyItMatters: "It is the foundational cloud credential every large employer recognises, and it is the one that lets a business major talk credibly in a tech interview.",
        link: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        note: "Foundational means foundational. It gets you past the vocabulary screen for a tech-adjacent role; it does not make you an engineer, and nobody will think it does.",
      },
    ],
  },
  {
    key: "general", name: "Free, fast, and worth a line",
    blurb: "Zero cost, a few hours each, and the kind of thing that fills a thin sophomore resume with something true.",
    items: [
      {
        name: "HubSpot Academy certifications", provider: "HubSpot",
        costShort: "Free",
        cost: "Free. Every certification course on HubSpot Academy is open without a HubSpot account cost.",
        time: "A few hours each. Inbound marketing, sales and content courses are the common ones.",
        whoFor: "Marketing, sales and consulting-minded students. Anyone applying to a startup.",
        sectors: ["consulting"],
        whyItMatters: "Startups and marketing teams on our board run on HubSpot. A certification shows you have touched the tool, which is more than most applicants can say.",
        link: "https://academy.hubspot.com/courses",
        note: "Pick one that matches the role you want and stop. Six HubSpot badges in a row reads as collecting, not learning.",
      },
      {
        name: "Salesforce Trailhead", provider: "Salesforce",
        costShort: "Free",
        cost: "Free. Trailhead's hands-on training is open to anyone, and the badges and superbadges cost nothing.",
        time: "Modules run from twenty minutes to a few hours. Superbadges take longer and are the ones worth naming.",
        whoFor: "Students targeting sales operations, CRM, consulting practices that implement Salesforce, or any company that runs on it.",
        sectors: ["tech", "consulting"],
        whyItMatters: "Salesforce administration is an established entry-level job family, and Trailhead is the official, free, on-ramp. A superbadge is a concrete thing to put on a resume.",
        link: "https://trailhead.salesforce.com/",
        note: "Badges are easy and recruiters know it. Superbadges are the ones that take work, and those are the only ones worth listing.",
      },
      {
        name: "Forage job simulations", provider: "Forage",
        costShort: "Free",
        cost: "Free, open access and self-paced, in Forage's own words.",
        time: "One to five hours per simulation. Investment banking, consulting and audit simulations from the firms themselves.",
        whoFor: "Freshmen and sophomores with nothing on the resume yet. Each simulation is built by an employer, several of them firms on our internship board.",
        sectors: ["finance", "consulting", "accounting", "tech"],
        whyItMatters: "It is the closest thing to work experience you can get before you have any, and some firms look at who completed their simulation when they screen.",
        link: "https://www.theforage.com/",
        note: "Forage also sits on the internship board under Startups and remote work, because a few of its simulations feed into talent pipelines. Do the simulation for a firm you actually plan to apply to.",
      },
    ],
  },
];

/* ------------------------------------------------------------
   ALUMNI
   Who this chapter produced, and how to reach them.

   The eighteen people below are the chapter's own "Alumni Contact and
   Companies" sheet (Google Sheets, tab "Company Advice and Contacts"),
   read on 2026-10-06. Name, email, current role and company, and past
   companies with the roles held there are copied from it. Obvious
   spelling slips in company names were fixed (Vangaurd, Relaince) and
   "KPMG US" is written KPMG so it groups with the firm on the board.
   Nothing else was added or inferred.

   alumni.html renders this as a COMPANY DIRECTORY: a person appears under
   every company in `past` as well as under `company`, because the coffee
   chat value is "somebody who did the Deloitte audit track", not only
   "somebody at Deloitte today".

   coffeeChat here is an EMAIL ONLY, decided 2026-09-15. Alumni are working
   adults and should not be asked to keep a public booking calendar for a
   student chapter. The button opens a pre-written message. Renārs decided
   on 2026-10-06 that the emails from the chapter's sheet render as that
   button; the page is noindex but readable by anyone with the link.

   linkedin is the profile LinkedIn's own people search returned for the
   full name, with a headline matching the sheet's role or firm, opened
   2026-10-06. (It also showed the sheet's "Chowdbury" is Chowdhury, which
   is how he spells it himself.) photo is each person's own LinkedIn
   profile picture (400px, two cropped to head and shoulders) and
   chapterRole is the ALPFA at ASU officer title on their own LinkedIn
   experience or volunteering, both read 2026-10-08; David Qiu has no
   LinkedIn photo, and "Member" is not listed as a role. Still each one's
   own to give: gradYear, major, location, openTo, note.
   Empty fields render as nothing.

   Fields:
     name        First Last, as displayed.   sortName   "Last, First".
     role        What they do now.           company    Where, "" if freelance.
     also        A second current role, optional.
     past        [{ company, roles: [newest first, as the sheet lists them] }]
     linkedin    Profile URL, only one that was opened.
     coffeeChat  Email. "" renders no button.
------------------------------------------------------------ */
const ALUMNI = [
  {
    name: "Isaac Gerardo Amaya Aguirre", sortName: "Amaya Aguirre, Isaac Gerardo",
    role: "FCO Data Analytics | Equities & Options | Global Banking & Markets", company: "Goldman Sachs",
    past: [
      { company: "Intrface", roles: ["Data Engineer Intern (Internship)"] },
      { company: "Wells Fargo", roles: ["Corporate & Investment Banking Program Participant"] },
      { company: "Bloomberg", roles: ["Technology Accelerator Program Participant"] },
      { company: "Nationwide", roles: ["Software Engineer Intern (internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/isaacgaa/", coffeeChat: "isaacamaya99@gmail.com",
    gradYear: "", major: "", chapterRole: "President (also VP of Professional Development and External Outreach)", location: "", photo: "photos/alumni/isaac-gerardo-amaya-aguirre.jpg", openTo: [], note: "" },
  {
    name: "Catalina Amurrio Zamora", sortName: "Amurrio Zamora, Catalina",
    role: "Graduate Researcher", company: "Axolotl Biologix",
    past: [
    ],
    linkedin: "https://www.linkedin.com/in/catalinaamurrioz/", coffeeChat: "catalinaamurrio1@gmail.com",
    gradYear: "", major: "", chapterRole: "", location: "", photo: "photos/alumni/catalina-amurrio-zamora.jpg", openTo: [], note: "" },
  {
    name: "Miguel Baca", sortName: "Baca, Miguel",
    role: "Investment Banking Associate", company: "Santander",
    past: [
      { company: "Santander", roles: ["Investment Banking Summer Associate"] },
      { company: "Raza Development Fund", roles: ["Investment Associate", "Analyst"] },
    ],
    linkedin: "https://www.linkedin.com/in/miguel-baca-20a851118/", coffeeChat: "m.baca1996@gmail.com",
    gradYear: "", major: "", chapterRole: "", location: "", photo: "photos/alumni/miguel-baca.jpg", openTo: [], note: "" },
  {
    name: "Cristina Banuelos", sortName: "Banuelos, Cristina",
    role: "COO Global Operations Analyst", company: "Wells Fargo",
    past: [
      { company: "Wells Fargo", roles: ["Fraud and Claims Intern (internship)"] },
      { company: "Ally", roles: ["Privacy Compliance Intern (internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/banuelosmc/", coffeeChat: "cristinabanuelos2003@gmail.com",
    gradYear: "", major: "", chapterRole: "VP of External Outreach (also VP of Internal Affairs and Fundraising)", location: "", photo: "photos/alumni/cristina-banuelos.jpg", openTo: [], note: "" },
  {
    name: "Alia Carrillo", sortName: "Carrillo, Alia",
    role: "Manager, FP&A", company: "Oscar Health", also: "EVP of Business Development at ALPFA Phoenix",
    past: [
      { company: "Nationwide", roles: ["Sr. Financial Analyst"] },
      { company: "MUFG", roles: ["Corporate Finance and Strategy Financial Analyst", "Corporate Finance and Strategy Summer Analyst (internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/alia-carrillo/", coffeeChat: "aliacarrillo16@gmail.com",
    gradYear: "", major: "", chapterRole: "President", location: "", photo: "photos/alumni/alia-carrillo.jpg", openTo: [], note: "" },
  {
    name: "Pablo Casanova", sortName: "Casanova, Pablo",
    role: "Associate, DCM IB Investment Grade Syndicate", company: "Morgan Stanley",
    past: [
      { company: "Morgan Stanley", roles: ["Analyst - DCM IB Investment Grade Syndicate", "Analyst - DCM IB Financial Institutions Coverage", "Fixed Income Capital Markets Summer Analyst (internship)"] },
      { company: "Charles Schwab", roles: ["Contingent Workforce Apprentice"] },
      { company: "Vanguard", roles: ["Global Investment Data Management Summer Analyst (internship)"] },
      { company: "Arizona Hispanic Chamber of Commerce", roles: ["Data Analyst Intern (Internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/casanovapablo/", coffeeChat: "pablo.a.casanova18@gmail.com",
    gradYear: "", major: "", chapterRole: "President (also VP of Professional Development and Finance)", location: "", photo: "photos/alumni/pablo-casanova.jpg", openTo: [], note: "" },
  {
    name: "Swapneel Chowdhury", sortName: "Chowdhury, Swapneel",
    role: "Founder", company: "MARKITES",
    past: [
      { company: "JPMorgan Chase & Co.", roles: ["Growth portfolio analysis associate"] },
      { company: "Reliance Industries Limited", roles: ["Data Analyst (internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/swapneel-chowdhury/", coffeeChat: "swapneel@markites.com",
    gradYear: "", major: "", chapterRole: "VP of Marketing", location: "", photo: "photos/alumni/swapneel-chowdhury.jpg", openTo: [], note: "" },
  {
    name: "Samuel Cosgrove", sortName: "Cosgrove, Samuel",
    role: "Accounting Manager", company: "Keelson Management, LLC",
    past: [
      { company: "Deloitte", roles: ["Audit and Assurance Senior Assistant", "Audit and Assurance Assistant", "Stride CPA Readiness Program Intern (internship)", "Discovery Audit Intern (Internship)", "Pioneer Intern (internship)"] },
      { company: "Price Kong & Company CPAs", roles: ["Audit Intern (internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/samuelcosgrove/", coffeeChat: "samcosgrove7@gmail.com",
    gradYear: "", major: "", chapterRole: "President", location: "", photo: "photos/alumni/samuel-cosgrove.jpg", openTo: [], note: "" },
  {
    name: "Kevin Duarte Borrayo", sortName: "Duarte Borrayo, Kevin",
    role: "Equity Research Extern", company: "Extern", also: "Associate Director of Events at ALPFA Phoenix",
    past: [
      { company: "Vanguard", roles: ["Client Relationship Associate"] },
      { company: "Education at Work", roles: ["Intern"] },
      { company: "ADP", roles: ["OneADP Intern (Internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/kevdb/", coffeeChat: "kduarteb.wealth@gmail.com",
    gradYear: "", major: "", chapterRole: "", location: "", photo: "photos/alumni/kevin-duarte-borrayo.jpg", openTo: [], note: "" },
  {
    name: "Alejandro Duran", sortName: "Duran, Alejandro",
    role: "Product Manager", company: "Goose",
    past: [
      { company: "Renaissance", roles: ["Product Manager", "Business Planning and Analysis Manager"] },
      { company: "The Concord Group, LLC", roles: ["Senior Associate", "Associate"] },
    ],
    linkedin: "https://www.linkedin.com/in/amduran/", coffeeChat: "duran.alejandro.m@gmail.com",
    gradYear: "", major: "", chapterRole: "President", location: "", photo: "photos/alumni/alejandro-duran.jpg", openTo: [], note: "" },
  {
    name: "Tomas Echeverri", sortName: "Echeverri, Tomas",
    role: "Quantitative Analyst", company: "Bank of America",
    past: [
      { company: "Bank of America", roles: ["Global Quantitative Analytics Intern (Internship)"] },
      { company: "Branch", roles: ["Data Analytics Intern (full time)"] },
      { company: "Springbok Legacy Ventures", roles: ["Search Fund Intern (internship)"] },
      { company: "Banner Health", roles: ["Physician Compensation Intern (internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/tomasecheverri1/", coffeeChat: "tomas.echeverri13@gmail.com",
    gradYear: "", major: "", chapterRole: "", location: "", photo: "photos/alumni/tomas-echeverri.jpg", openTo: [], note: "" },
  {
    name: "Jorge Ortiz", sortName: "Ortiz, Jorge",
    role: "Senior Financial Analyst", company: "Honeywell Aerospace",
    past: [
      { company: "Honeywell", roles: ["Senior Internal Auditor"] },
      { company: "KPMG", roles: ["Senior Associate", "Experienced Audit Associate", "Audit Intern (internship)"] },
      { company: "Blackhawk Network", roles: ["Accounting I"] },
    ],
    linkedin: "https://www.linkedin.com/in/jorge-ortiz-cpa-56615612a/", coffeeChat: "jaorti11@gmail.com",
    gradYear: "", major: "", chapterRole: "", location: "", photo: "photos/alumni/jorge-ortiz.jpg", openTo: [], note: "" },
  {
    name: "Brianna Pedrego-Boss", sortName: "Pedrego-Boss, Brianna",
    role: "Business Operations and Digital Marketing Consultant (Freelance)", company: "",
    past: [
    ],
    linkedin: "https://www.linkedin.com/in/brianna-pedrego-boss/", coffeeChat: "bepedregoboss@gmail.com",
    gradYear: "", major: "", chapterRole: "", location: "", photo: "photos/alumni/brianna-pedrego-boss.jpg", openTo: [], note: "" },
  {
    name: "David Qiu", sortName: "Qiu, David",
    role: "Associate", company: "UBS",
    past: [
      { company: "UBS", roles: ["Analyst"] },
      { company: "Credit Suisse", roles: ["Securitized Products Analyst"] },
      { company: "Wiland", roles: ["Product Management Intern (internship)"] },
      { company: "Columbia West Capital", roles: ["Investment Banking Analyst Intern (Internship)"] },
      { company: "Anodize Capital Partners", roles: ["Investment Analyst Intern (internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/davidsqiu/", coffeeChat: "dsqiu14@gmail.com",
    gradYear: "", major: "", chapterRole: "", location: "", photo: "", openTo: [], note: "" },
  {
    name: "Kush Shah", sortName: "Shah, Kush",
    role: "Corporate Development (M&A)", company: "Republic Services",
    past: [
      { company: "Partners Group", roles: ["Investor Relations, Private Infra"] },
      { company: "BMO Capital Markets", roles: ["Investment Banking, MM M&A"] },
      { company: "Piper Sandler", roles: ["Investment Banking, Public Finance"] },
    ],
    linkedin: "https://www.linkedin.com/in/kush-b-shah/", coffeeChat: "kbskush@gmail.com",
    gradYear: "", major: "", chapterRole: "", location: "", photo: "photos/alumni/kush-shah.jpg", openTo: [], note: "" },
  {
    name: "Connor Smith", sortName: "Smith, Connor",
    role: "Private Credit Analyst", company: "BlackRock",
    past: [
      { company: "ASU Enterprise Partners", roles: ["Student Assistant, Investments"] },
      { company: "ASU Student Investment Management Fund", roles: ["Equity Research Analyst (internship)"] },
      { company: "Goldman Sachs", roles: ["Summer Analyst (Internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/connor-o-smith/", coffeeChat: "connsmith18@gmail.com",
    gradYear: "", major: "", chapterRole: "", location: "", photo: "photos/alumni/connor-smith.jpg", openTo: [], note: "" },
  {
    name: "Dayana Vega", sortName: "Vega, Dayana",
    role: "Contract Specialist", company: "TYR Tactical",
    past: [
      { company: "MUFG", roles: ["Finance & Accounting Professional, Procurement Operations of the Americas", "Intern Analyst, Finance Operations of America (internship)"] },
      { company: "Magnit", roles: ["Financial Analyst, Procurement of Americas (contractor)"] },
    ],
    linkedin: "https://www.linkedin.com/in/dayanavega/", coffeeChat: "dayana.vega9090@gmail.com",
    gradYear: "", major: "", chapterRole: "VP of External Outreach", location: "", photo: "photos/alumni/dayana-vega.jpg", openTo: [], note: "" },
  {
    name: "Sue Young Kim", sortName: "Young Kim, Sue",
    role: "Income Tax Manager", company: "DriveTime",
    past: [
      { company: "PwC", roles: ["Senior Tax Associate", "Tax Associate"] },
    ],
    linkedin: "https://www.linkedin.com/in/sueykim9/", coffeeChat: "ksue522@gmail.com",
    gradYear: "", major: "", chapterRole: "President (also Director of Finance and Accounting, and Director of Administration)", location: "", photo: "photos/alumni/sue-young-kim.jpg", openTo: [], note: "" },
  /* Added 2026-10-08 at Renārs's request: email from him, roles copied from
     christophergarciaasu's LinkedIn experience page the same day. Chapter
     role is his own LinkedIn entry (ALPFA at ASU, V.P. of Events, Apr 2025 to
     Jan 2026). His self-employed sneaker reselling business (2019 to 2023)
     is left out of `past` so it does not become a firm tile. */
  {
    name: "Christopher Garcia", sortName: "Garcia, Christopher",
    role: "Wealth Management Intern", company: "Pathlight Advisors", also: "Watchmaker, self-employed",
    past: [
      { company: "Wells Fargo", roles: ["COO Global Operations Intern (internship)"] },
      { company: "State Farm", roles: ["Property & Casualty Claims Intern (internship)"] },
    ],
    linkedin: "https://www.linkedin.com/in/christophergarciaasu/", coffeeChat: "cgarc234@asu.edu",
    gradYear: "", major: "", chapterRole: "V.P. of Events", location: "Scottsdale, AZ", photo: "photos/alumni/christopher-garcia.jpg", openTo: [], note: "" },
  /* Added 2026-10-08 at Renārs's request. Email and LinkedIn are the ones
     Fran sent; roles from his LinkedIn experience page and his August 2026
     resume, both read the same day. No job listed since he graduated in
     July 2026, so role and company are empty and the card leads with the
     degree and his chapter presidency. ASU and W. P. Carey jobs are listed
     under the employer each one names. */
  {
    name: "Francisco Luna Orosco", sortName: "Luna Orosco, Francisco",
    role: "", company: "",
    past: [
      { company: "Arizona State University", roles: ["Success Coach, Student Success Center", "Community Assistant, Hassayampa Academic Village"] },
      { company: "ALPFA Phoenix", roles: ["Consultant, ALPFA PHX Consulting Group"] },
      { company: "W. P. Carey School of Business", roles: ["Supplemental Instruction Leader, Business Statistics"] },
    ],
    linkedin: "https://www.linkedin.com/in/franloa/", coffeeChat: "flunaoro@asu.edu",
    gradYear: "2026", major: "Economics", chapterRole: "President (also VP of Professional Development, Finance and Events)",
    location: "", photo: "photos/alumni/francisco-luna-orosco.jpg", openTo: [], note: "" },
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
        note: "Two corrections to what aggregator sites still claim. This is not cash, it pays your CMA or FMAA exam costs. And the IMA Memorial Education Fund is no longer a student award at all, it is now a grant paid to colleges to send students to a conference. The action item is confirming whether ASU is IMA endorsed and getting a W. P. Carey professor to nominate members.",
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
        amount: "Nonresident: President's and Provost's Awards valued at $15,500 to $17,500 per year, and Academic Achievement, University and Dean's Awards valued at $10,000 to $13,500 per year. Arizona resident: President's Award valued at $7,000 per year. These are the 2026-27 figures.", deadline: "No separate application. ASU considers you once you are admitted, so the deadline that matters is your admission application and credentials. Renewable for eight semesters.",
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
        note: "The only Big Four award here with a student facing application, and ASU is one of the 25 named schools. You do not apply to Deloitte. You apply to the W. P. Carey master's program, then file a separate scholarship application with the school at wpcareymasters@asu.edu. That means you compete against ASU students, not the whole country.",
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
        note: "This is the one research pathway inside W. P. Carey that starts from zero. You do not need Python or R going in, there is no interview, and students propose their own questions and can end up as co-authors. Passing stage one does not guarantee a stage two placement.",
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
        note: "The mid-October deadline is the nearest one on this whole list. The program says taking SOS 246 in fall A session improves your odds, which is a hint that they want people who already know what a research question is.",
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
        note: "This is a job offer wearing a scholarship's clothes, and the service commitment is binding. ASU's ONSA office advises on the application and will read your essays, which is worth more than the official site. You also have to be able to hold a security clearance.",
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
    blurb: "The hardest bucket to fill, because business schools run almost no undergraduate research, so the openings are at the Federal Reserve and the think tanks.",
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
