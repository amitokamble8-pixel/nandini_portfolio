/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Nandini",
  last: "Bhasin",
  fullName: "Nandini Bhasin",
  tagline: "Turning Code into Understanding",
  location: "Pune, India",
  email: "",
  phone: "",
  bio: [
    "I enjoy understanding how technology, data, and analytical thinking can be used to solve meaningful problems. From programming and research to dance and community engagement, I believe the most valuable learning happens when curiosity meets real-world impact.",
    "I'm a student of Computer Science, Mathematics, Physics, Chemistry, and Economics at Delhi Public School Pune, Class of 2027, with a growing interest in the intersection of Artificial Intelligence, Data Science, and Economics.",
    "My interest in technology began with learning how code can transform an idea into something tangible. Through programming courses, game development, AI literacy initiatives, and teaching younger students, I have gradually come to see computer science as more than a technical discipline. It is a way of understanding patterns, solving problems, and building tools that can make information more accessible and useful. I am particularly interested in exploring how AI and data can be applied to economic and social questions.",
    "Alongside academics and technology, I have spent years learning and performing Kathak and Latin ballroom dance. Dance has taught me discipline, precision, adaptability, and the importance of communicating without words. My community-service experiences and work with girls learning technology have further shaped my understanding of how access to knowledge can influence confidence and opportunity.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "",
  photo: "/placeholder-photo.jpg",
  aboutPhoto: "/placeholder-photo.jpg",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Programs & Experience", to: "/work" },
      { label: "Projects", to: "/projects" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },

  { label: "Performance & Activities", to: "/sports" },
];

/* ---- Experience & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "go-girl-organisation",
    role: "Coding, AI & Digital Skills Educator",
    org: "Go Girl Organisation",
    logo: "/logos/go-girl.png",
    location: "Online · India",
    dates: "Feb 2026 – Present",
    meta: "Feb 2026 – Present · Online · India ·",
    badge: "Teaching",
    desc: "Introducing girls from underserved communities across India to coding, AI literacy, and digital skills through virtual sessions with schools and NGOs.",
    bullets: [
      "Began with the Punjab chapter before expanding into online learning initiatives reaching students across India",
      "Teach students from Classes 6 to 10, making programming and AI approachable for learners encountering these technologies for the first time",
      "Contributed to designing presentation material and curriculum content covering HTML, JavaScript, and AI",
      "Learned to communicate concepts at different levels and adapt explanations to individual learners",
    ],
    tags: ["Teaching", "AI Literacy", "Digital Skills", "Curriculum Design"],
    featured: true,
  },
  {
    slug: "girls-who-code-summer-immersion",
    role: "Participant",
    org: "Girls Who Code — Summer Immersion Program (LSEG Foundation 2 International)",
    logo: "/logos/girls-who-code.png",
    location: "Online",
    dates: "Mar – Jul 2024",
    meta: "Mar – Jul 2024 · Online ·",
    badge: "Program",
    desc: "An immersive programming programme that became a turning point in my interest in computer science, exploring the field through practical, build-first projects.",
    bullets: [
      "Explored JavaScript and HTML through programming concepts connected to financial markets",
      "Built animated and interactive games in JavaScript, Python, and p5.js across three project tracks",
      "Developed single-page interactive applications as part of the game design track",
    ],
    tags: ["JavaScript", "HTML", "Python", "p5.js", "Game Design"],
    featured: true,
  },
];

/* ---- Programs & technical projects ---- */

export const PROJECTS = [
  {
    name: "Programming for Financial Markets",
    org: "Honartek",
    meta: "2024",
    desc: "Explored JavaScript and HTML while learning programming concepts connected to financial markets, sparking an interest in applying computer science beyond conventional software development.",
    tags: ["JavaScript", "HTML", "Financial Markets"],
    featured: true,
  },
  {
    name: "Intro to Adventure Games",
    org: "Girls Who Code — Summer Immersion Program",
    meta: "April – June 2024",
    desc: "Created animated games on adventure and sports themes using JavaScript and Python, learning how programming concepts translate into user experiences.",
    tags: ["JavaScript", "Python", "Game Development"],
    featured: true,
  },
  {
    name: "The Collection Style Games",
    org: "Girls Who Code — Summer Immersion Program",
    meta: "May – July 2024",
    desc: "Developed animation-based games around the theme of collecting rare artefacts using JavaScript and Python, focusing on creative problem-solving and designing around a specific concept.",
    tags: ["JavaScript", "Python", "Animation", "Game Design"],
    featured: true,
  },
  {
    name: "Intro to p5.js + Game Design",
    org: "Girls Who Code — Summer Immersion Program",
    meta: "April – June 2024",
    desc: "Designed and developed computer games using HTML, JavaScript, and Python, including interactive experiences built as single-page applications.",
    tags: ["p5.js", "HTML", "JavaScript", "Python", "Game Design"],
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🎓",
    title: "Certificates of Proficiency — Delhi Public School Pune",
    meta: "2019 – 2024",
    detail: "Awarded for commendable academic performance across multiple school years.",
    link: "",
    featured: true,
  },
  {
    icon: "🌱",
    title: "GREEN Olympiad — Certificate of Recognition",
    meta: "2019",
    detail: "Participated in the GREEN Olympiad at Delhi Public School Pune, recognised for awareness and understanding of environmental concerns and ESG-related issues.",
    link: "",
    featured: true,
  },
  {
    icon: "💻",
    title: "Girls Who Code — Summer Immersion Program",
    meta: "2024",
    detail: "Selected for the LSEG Foundation 2 International cohort, covering programming for financial markets, game development, and p5.js design.",
    link: "",
    featured: true,
  },
  {
    icon: "🩰",
    title: "Kathak Examinations — Passed with Distinction",
    meta: "2017 & 2018",
    detail: "Distinction in both years from Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai.",
    link: "",
    featured: true,
  },
  {
    icon: "🥇",
    title: "India Open Latin Ballroom DanceSport Championship — 1st Place ×3",
    meta: "2018",
    detail: "First place in Junior Pair Cha Cha, Junior Solo Jive, and Junior Solo Cha Cha. Also received recognition for Junior Girls' Solo Samba in 2019.",
    link: "",
    featured: true,
  },
  {
    icon: "🥈",
    title: "Tanz Verden Ballroom International Competition — 2nd Place ×3",
    meta: "2018",
    detail: "Second place in Junior Solo Jive, Junior Solo Cha Cha, and Junior Solo Samba.",
    link: "",
    featured: true,
  },
  {
    icon: "🏅",
    title: "Tanz Verden Ballroom International Competition — Silver Category",
    meta: "2019",
    detail: "2nd place Junior Solo Silver Cha Cha, 3rd place Junior Solo Silver Samba, 4th place Junior Solo Silver Jive.",
    link: "",
    featured: false,
  },
  {
    icon: "🥉",
    title: "Tanz Verden Ballroom International Competition — Under 18 Bronze ×3",
    meta: "2024",
    detail: "Bronze in Under 18 Solo Cha Cha, Under 18 Solo Samba, and Under 18 Solo Jive.",
    link: "",
    featured: true,
  },
];

/* ---- Interests ---- */

export const ARTICLES = [
  {
    title: "Computer Science",
    outlet: "Programming, algorithms, computational thinking, and software development",
    link: "",
  },
  {
    title: "Artificial Intelligence",
    outlet: "AI literacy, intelligent systems, and the application of AI to real-world problems",
    link: "",
  },
  {
    title: "Data Science",
    outlet: "Data analysis, pattern recognition, visualisation, and evidence-based decision-making",
    link: "",
  },
  {
    title: "Economics",
    outlet: "Quantitative approaches to understanding markets, behaviour, and decision-making",
    link: "",
  },
  {
    title: "Dance",
    outlet: "Kathak and Latin ballroom, with an interest in performance, rhythm, and movement",
    link: "",
  },
];

/* ---- Leadership, teaching & community ---- */

export const VOLUNTEER = {
  stats: [
    { value: "6–10", label: "Class Levels Taught" },
    { value: "3+", label: "Years Volunteering" },
    { value: "3", label: "Organisations Served" },
  ],
  orgs: [
    {
      name: "Santulan Bhavan — My SEWA Promise",
      role: "Community Service Volunteer · 2023",
      desc: "Spent time teaching and engaging children through educational activities. The experience taught me that community service is not only about contributing time — it is also about being present, listening, and finding meaningful ways to engage with people from different backgrounds.",
    },
    {
      name: "Community Kitchen — My SEWA Promise",
      role: "Community Service Volunteer · 2023",
      desc: "Contributed to meal preparation and helped maintain cleanliness in the Gurudwara dining hall. Reinforced the importance of service, responsibility, and contributing to a shared space without expecting recognition in return.",
    },
  ],
};

/* ---- Performance, creative expression & activities (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "👣",
    name: "Kathak",
    desc: "Learning Indian classical dance since 2017 through regular practice and performance, with Distinction in the 2017 and 2018 examinations of the Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai. Kathak has taught discipline and precision alongside the relationship between rhythm, movement, expression, and storytelling.",
  },
  {
    icon: "💃",
    name: "Latin Ballroom Dance",
    desc: "Trained in Cha Cha, Rumba, Jive, and Samba, competing at the Tanz Verden Ballroom International Competition and the India Open Latin Ballroom DanceSport Championship between 2018 and 2024. Competitive ballroom has taught how to perform under pressure, respond to feedback, and stay composed while refining technique.",
  },
  {
    icon: "🏊",
    name: "Swimming",
    desc: "Participated in the Annual Sports Day swimming activities at Delhi Public School Pune in 2019.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "JavaScript", "HTML", "p5.js", "Web Development"],
  },
  {
    group: "Tools & Technologies",
    items: ["Game Development", "Animation", "Single-Page Applications", "Presentation & Curriculum Design"],
  },
  {
    group: "Specialised Expertise",
    items: ["Artificial Intelligence", "AI Literacy Education", "Data Science", "Economics", "Computational Problem-Solving"],
  },
  {
    group: "Languages",
    items: ["English", "Hindi"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "Delhi Public School Pune",
    location: "Pune, India",
    level: "Class of 2027",
    dates: "2019 – 2027",
    gpa: "",
    coursework: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Economics",
    ],
  },
];

export const TEST_SCORES = [];

/* ---- Areas of exploration (additional export — needs a component if you want to render it) ---- */

export const AREAS_OF_EXPLORATION = [
  {
    number: "01",
    title: "Computer Science + Artificial Intelligence",
    desc: "Understanding how intelligent systems are designed, trained, and evaluated, while developing stronger foundations in programming, algorithms, and computational thinking.",
  },
  {
    number: "02",
    title: "Artificial Intelligence + Data Science",
    desc: "Understanding how data can reveal patterns, support predictions, and help us make better decisions — developing the ability to move from raw data to meaningful insights.",
  },
  {
    number: "03",
    title: "Data Science + Economics",
    desc: "Exploring the intersection between quantitative analysis and human behaviour, using data science tools to examine economic systems and decision-making.",
  },
];

/* ---- Mission & future direction (additional export — needs a component if you want to render it) ---- */

export const MISSION = {
  heading: "My Mission",
  body: [
    "My goal is to develop the technical depth to build intelligent systems while retaining the curiosity to ask why those systems matter.",
    "I want to learn how to work with data, algorithms, and AI not simply to create technology, but to understand complex problems and develop solutions that are thoughtful, evidence-driven, and useful to people.",
  ],
};

export const FUTURE_DIRECTION = {
  heading: "Future Direction",
  body: [
    "I am currently interested in studying the intersection of Computer Science, Artificial Intelligence, Data Science, and Economics.",
    "At university, I want to build strong foundations in computer science and mathematics while exploring how computational methods can be applied to real-world systems.",
  ],
  questions: [
    "How can AI help us make better decisions?",
    "How can data reveal patterns in economic and social systems?",
    "How can technology be made more accessible to people who are just beginning to use it?",
    "How can computational tools help us understand complex problems rather than simply automate them?",
  ],
  closing:
    "I do not see my interests in computer science, data, economics, and the humanities as separate directions. I see them as different ways of understanding the same world.",
};

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs & Experience", to: "/work" },
  { label: "Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Performance & Activities", to: "/sports" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
