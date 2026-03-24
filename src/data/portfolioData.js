import { assetPath } from "../utils/assetPath";

export const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export const highlights = [
  {
    title: "Clean Code",
    text: "Writing readable, maintainable code",
    icon: "code",
  },
  {
    title: "Fast Learner",
    text: "Always exploring new technologies",
    icon: "rocket",
  },
  {
    title: "Problem Solver",
    text: "Turning complex problems into simple solutions",
    icon: "coffee",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
  },
  {
    title: "Backend",
    items: ["Node.js", "PHP", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Languages",
    items: ["C++", "Python", "JavaScript", "Java"],
  },
  {
    title: "Tools",
    items: ["Git", "Postman", "Linux", "Docker"],
  },
];

export const certifications = [
  {
    title: "Data Structures and Algorithms",
    platform: "CSE Pathshala",
    image: assetPath("/certifications/csepathshala certificate.png"),
    imageAlt: "CSE Pathshala certification",
  },
  {
    title: "Responsive Web Design",
    platform: "freeCodeCamp",
    image: assetPath("/certifications/freecodecamp.png"),
    imageAlt: "freeCodeCamp certification",
  },
  {
    title: "Prompt Engineering",
    platform: "Infosys Springboard",
    image: assetPath("/certifications/prompengineering.png"),
    imageAlt: "Infosys Springboard prompt engineering certification",
  },
];

export const projects = [
  {
    name: "IndiFilm",
    description:
      "A  platform for independent filmmakers with real-time search, watchlists, and personalized recommendations. Built with React and integrated with TMDB API.",
    tags: ["React", "Node.js", "TMDB API", "Tailwind CSS"],
    githubUrl: "https://github.com/Sudarshan1804/Filmforge",
    image: assetPath("/projects/indifilm.svg"),
    imageAlt: "IndiFilm dashboard illustration with a featured movie layout and discovery controls",
  },
  {
    name: "Medicare",
    description:
      "A medical emergency response app that connects patients to nearby hospitals, tracks ambulance locations, and provides first-aid guidance in real-time.",
    tags: ["React", "Node.js", "Maps API", "WebSocket"],
    githubUrl: "https://github.com/Sudarshan1804/Medicare",
    liveUrl: "https://medical-emergency-tan.vercel.app/",
    image: assetPath("/projects/mediconnect2.png"),
    imageAlt: "MediConnect interface illustration with a healthcare map and response analytics panel",
  },
  {
    name: "TaskFlow",
    description:
      "A collaborative project management tool with Kanban boards, real-time updates, team chat, and automated workflow triggers for agile teams.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: assetPath("/projects/taskflow.svg"),
    imageAlt: "TaskFlow kanban board illustration with multiple workflow columns and task cards",
  },
];

export const contactItems = [
  {
    label: "sudarshanreddy1804@gmail.com",
    icon: "mail",
  },
  {
    label: "+91-9912056811",
    icon: "phone",
  },
  {
    label: "Available worldwide (Remote)\nAcross India (On-site)",
    icon: "mapPin",
  },
];
