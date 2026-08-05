

const base = import.meta.env.BASE_URL;

const areas = [

  {
    title: "Front-end Dev",
    nr: "01",
  },
  {
    title: "UI/UX Design",
    nr: "02",
  },
  {
    title: "Creative Coding",
    nr: "03",
  },
  {
    title: "Illustration",
    nr: "04",
  },
  {
    title: "3D Modelling",
    nr: "05",
  },
  {
    title: "Mobile Dev",
    nr: "06",
  },
  {
    title: "Back-End Dev",
    nr: "07",
  },
  {
    title: "Game Dev",
    nr: "08",
  },


];



const experiences = [
  {
title: "Designer & Marketing Assistant",
company_name: "Freelance",
date: "2025 - Present",
points: [
  "Creating a complete brand identity for a podcast, including logo design, social media graphics, and promotional materials.",
  "Designing and illustrating a book cover and interior illustrations for a book, ensuring that the visual elements align with the narrative and theme of the story, as well as desining an album cover.",
]
  },

  {
    title: "Research Intern & Traveling Scholar",
    company_name: "ATLAS Institute, University of Colorado, Boulder",
    date: "August- December 2024",
    points: [
      "As one of six students all over Europe and the first one from Austria, I had the opportunity to partake in the Europe-Colorado Program.",
      "I completed a 6 month internship in the ACME Lab under Professor Ellen Do, working on a practical AR project, that enables users to create a 3D map based on color data of a 2D canvas. "
    ]
  },
  {
    title: "Creative Computing Student",
    company_name: "University of Applied Sciences Saint Poelten",
    date: "2022 - September 2025",
    points: [
      "Studying Creative Computing with a focus on user-centred design and interactive storytelling.",
      "Developing skills in front-end development, UI/UX design, and creative coding.",
      "Engaging in projects that combine technical development with artistic exploration."
    ]

  },
  {
    title: "Flight Attendant",
    company_name: "Austrian Airlines",
    date: "2019 - 2022",
    points: [
      "Ensured passenger safety and comfort during flights.",
      "Developed strong communication and problem-solving skills in a fast-paced environment.",
      "Gained experience in customer service and teamwork."
    ]
  }
];



const projects = [
  {
    slug: "tideup",
    name: "TideUp",
  
    sub: "A serious game about recycling",
    short: "Designing and modelling various 3D Models in Blender for TideUp.",

    tags: ["3D"],
    cover: `${base}TideUp/cover_TideUp.png`,
  },
  {
    slug: "ar-map",
    name: "AR Map Creator",
    
    sub: " Real Time Map Rendering",
    short: "In the ACME Lab in CU Boulder, I had the opportunity to create a dynamic AR application.",

    tags: [ "Creative Coding"
    ],
    cover: `${base}ARMap/cover_Armap.png`,

  },
  {
    slug: "real-time-engine",
    name: "Real-Time Engine",
    
    sub: "Live Visuals",
    short: "Creating a visual live programming environment for the 69 x 4.5 m display at the House of Digitalization in Tulln.",


    tags: [
    "Creative Coding"
    ],

    cover: `${base}rte/cover_Rte.png`,

  },
  {
    slug: "arcane-mind",
    name: "Arcane Mind",
   
    sub: "A Tarot Card Reading App",
    short: "A Tarot Card Reading App that I created in collaboration with a colleague.",

    tags: [
    "UI/UX", "Illustration", "Mobile"
    ],
    cover: `${base}ArcaneMind/cover_arcaneMind.png`,
  },
  {
    slug: "meet-me",
    name: "MeetMe",
   
    sub: "A Meet-Up App in Figma",
    short: "Design project for an event app for like-minded people.",

    tags: [
    "UI/UX", "Mobile"
    ],
    cover: `${base}MeetMe/cover_MeetMe.png`,

  },
  {
    slug: "wunden",
    name: "Wunden (er)zählen",
   
    sub: "Cover and Illustrations for a Book",
    short: "Designing 15+ Illustrations and Cover Art which are closely tied to the narrative.",

    tags: [
      "Illustration"

    ],
    cover: `${base}Wunden/cover_Wunden.png`,
  },
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
  
    sub: "Website design and programming",
    short: "This portfolio website was built with React, ThreeJS and TailwindCSS.",

    tags: [
      "Web","UI/UX",
    ],
    cover: `${base}Portfolio/project7.png`,
  },
  {
    slug: "chronicles",
    name: "Chronicles",
    sub: "A blog website ",
    short: "Designing and prototyping a blog website.",

    tags: [
      "UI/UX", "Web"

    ],
    cover: `${base}Chronicles/landingpage_blog.png`,
  },

];


export { areas, experiences, projects };