

const base = import.meta.env.BASE_URL;


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

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
    name: "TideUp",
    id: "TideUp",
    sub: "A serious game about recycling",
    short: "Designing and modelling various 3D Models in Blender for TideUp.",

    tags: [
      {
        name: "Unity",
        icon: `${base}icons/unity.svg`
      },
      {
        name: "Blender",
        icon: `${base}icons/blender.svg`

      },
      {
        name: "Procreate",
        icon: `${base}icons/procreate.svg`

      }, {
        name: "Jira",
        icon: `${base}icons/jira.svg`

      },

    ],
    cover: `${base}TideUp/img00.png`,
  },
  {
    name: "AR Map Creator",
    id: "ARMap",
    sub: " Real Time Map Rendering",
    short: "In the ACME Lab in CU Boulder, I had the opportunity to create a dynamic AR application.",

    tags: [
      {
        name: "Unity",
        icon: `${base}icons/unity.svg`

      },
      {
        name: "Figma",
        icon: `${base}icons/figma.svg`

      },

    ],
    cover: `${base}ARMap/cover.png`,

  },
  {
    name: "Real-Time Engine",
    id: "RTE",
    sub: "Live Visuals",
    short: "Creating a visual live programming environment for the 69 x 4.5 m display at the House of Digitalization in Tulln.",


    tags: [
      {
        name: "vvvv - Gamma",
        icon: `${base}icons/vvvv.svg`

      },
      {
        name: "Blender",
        icon: `${base}icons/blender.svg`

      },
    ],

    cover: `${base}rte/rte.png`,

  },
  {
    name: "Arcane Mind",
    id: "ArcaneMind",
    sub: "A Tarot Card Reading App",
    short: "A Tarot Card Reading App that I created in collaboration with a colleague.",

    tags: [
      {
        name: "Figma",
        icon: `${base}icons/figma.svg`
      },
      {
        name: "Kotlin",
        icon: `${base}icons/kotlin.svg`
      },
      {
        name: "Procreate",
        icon: `${base}icons/procreate.svg`
      },
    ],
    cover: `${base}ArcaneMind/img1.png`,
  },
  {
    name: "MeetMe",
    id: "MeetMe",
    sub: "A Meet-Up App in Figma",
    short: "Design project for an event app for like-minded people.",

    tags: [
      {
        name: "Figma",
        icon: `${base}icons/figma.svg`

      },
    ],
    cover: `${base}MeetMe/cover.png`,

  },
  {
    name: "Wunden (er)zählen",
    id: "Wunden",
    sub: "Cover and Illustrations for a Book",
    short: "Designing 15+ Illustrations and Cover Art which are closely tied to the narrative.",

    tags: [
      {
        name: "Procreate",
        icon: `${base}icons/procreate.svg`

      },

    ],
    cover: `${base}Wunden/wunden_book.jpg`,
  },
  {
    name: "Portfolio Website",
    id: "portfolio",
    sub: "Website design and programming",
    short: "This portfolio website was built with React, ThreeJS and TailwindCSS.",

    tags: [
      {
        name: "Procreate",
        icon: `${base}icons/procreate.svg`

      },
      {
        name: "Figma",
        icon: `${base}icons/figma.svg`

      },
      {
        name: "Git",
        icon: `${base}icons/git.svg`

      },



    ],
    cover: `${base}Portfolio/cover.png`,
  },
  {
    name: "Chronicles",
    id: "Chronicles",
    sub: "A blog website ",
    short: "Designing and prototyping a blog website.",
    
    tags: [
      {
        name: "Figma",
        icon: `${base}icons/figma.svg`
      },
      {
        name: "Git",
        icon: `${base}icons/git.svg`
      },
    
    ],
    cover: `${base}Chronicles/cover2.png`,
  },

];


export { areas, experiences, projects };