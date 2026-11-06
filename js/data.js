
const profile = {
  name: "Yvette Langas",
  firstName: "Yvette",
  role: "BS Computer Science student",
  school: "ISPSC / MAIN Campus",
  location: "Candon City, Philippines",
  stack: "HTML, CSS, JavaScript, Bootstrap",
  photo: "images/me - Copy.jpeg",           
  motto: "Every small steps, lead to a big Success.",
  about: "I’m a 2nd year Computer Science student who want to explore more in the world of technology even some of my subject i cann't follow but thankfully I have friends to ask for the some information on our lesson.",
  email: "yvettelangas25@example.com",
  github: "YvetteLangas/github.com"
};

/* Navigation links: label + section id */
const navItems = [
  { label: "About",      target: "about" },
  { label: "Philosophy", target: "philosophy" },
  { label: "Projects",   target: "projects" },
  { label: "Contact",    target: "contact" }
];

/* Design philosophy: intro + four principle cards (Bootstrap Icons names) */
const philosophy = {
  heading: "Learning by fixing thins",
  intro: "I make plenty of mistakes when I code, and that's how I learn. My design style came from trying things, breaking them, and fixing them until the page looked right. Simple and clean is what I keep coming back to.",
  cards: [
  { icon: "bi-bug", title: "Mistakes teach me",
    text: "When my code breaks, I read the error, try a fix, and test again. That's how I understand it better." },
  { icon: "bi-brightness-high", title: "Keep it simple",
    text: "I only put what's needed on the page, so it stays clean and easy to read." },
  { icon: "bi-palette", title: "One consistent look",
    text: "I use the same few colours and fonts across the page so everything feels connected." },
  { icon: "bi-phone", title: "Works on any screen",
    text: "I check my pages on both a phone and a laptop before I call them done." }
]
};

/* Projects: type must be "Midterm" or "Finals" (used by the filter buttons).
   images = screenshots shown in the carousel. */
const projects = [
  {
    lab: "Laboratory 1",
    title: "Project Title One",
    desc: "Short description of what this project does, who it is for, and what you learned building it.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/YvetteLangas/WD1_L3_CS2A_LANGAS",
    images: ["images/projects/WD1L3.jpg", "images/projects/WD1L3 .jpg"]
  },
  {
    lab: "Laboratory 2",
    title: "Project Title Two",
    desc: "Describe the main features: layout, interactions, and which Bootstrap components you used.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/YvetteLangas/WD1_L2_LANGAS_Y",
    images: ["images/projects/WD1.jpg", "images/projects/WD1 .jpg"]
  },
  {
    lab: "Laboratory 3",
    title: "Project Title Three",
    desc: "A more advanced project: forms, validation, DOM manipulation or data handling with JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/YvetteLangas/WD1_L4_LANGAS_Y",
    images: ["images/projects/wd1l4.jpg", "images/projects/wd1l4 .jpg"]
  },
  {
    lab: "Featured Project",
    title: "Project Title Four",
    desc: "Your final requirement. Explain the problem it solves and the key features you are proud of.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/YvetteLangas/WD1L5_CS2A_LANGAS_Y",
    images: ["images/projects/WD1L5.jpg", "images/projects/WD1L5 .jpg"]
  }
];
