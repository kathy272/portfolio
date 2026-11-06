

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
    slug: "kein-ort",
    name: "Book cover",
    sub: "Design & Illustration",
    tags: ["Illustration"],
    cover: `${base}KeinOrt/cover.webp`,
  },
  {
    slug: "album",
    name: "Album Cover",
    sub: "Design & Illustration",
    tags: ["Illustration"],
    featured: true,
    cover: `${base}album/AlbumCover_Mockup.webp`,
  },
  {
    slug: "lumen",
    name: "Lumen",
    sub: "Hotel Website Design",
    tags: ["UI/UX", "Web", "Mobile"],
    featured: true,
    cover: `${base}Lumen/laptop_lumen.webp`,
  },
  {
    slug: "tideup",
    name: "TideUp",
    sub: "3D Game Assets",
    tags: ["3D"],
    featured: true,
    cover: `${base}TideUp/cover_TideUp_new.webp`,
  },
  {
    slug: "ar-map",
    name: "M[A(R)]P",
    sub: "Real Time AR Map",
    tags: ["Creative Coding"],
    cover: `${base}ARMap/cover_Armap.webp`,
  },
  {
    slug: "real-time-engine",
    name: "Real-Time Engine",
    sub: "Shader Programming",
    tags: ["Creative Coding"],
    cover: `${base}rte/cover_Rte.webp`,
  },
  {
    slug: "arcane-mind",
    name: "Arcane Mind",
    sub: "Tarot App Design & Programming",
    tags: ["UI/UX", "Illustration", "Mobile"],
    cover: `${base}ArcaneMind/cover_arcaneMind.webp`,
  },
  {
    slug: "meet-me",
    name: "MeetMe",
    sub: "Event App Design",
    tags: ["UI/UX", "Mobile"],
    featured: true,
    cover: `${base}MeetMe/iPhone_Mockup.webp`,
  },
  {
    slug: "wunden",
    name: "Wunden (er)zählen",
    sub: "Book Cover & Illustrations",
    tags: ["Illustration"],
    cover: `${base}Wunden/cover_Wunden.webp`,
  },
  {
    slug: "portfolio-website",
    name: "Portfolio",
    sub: "Website Design & Programming",
    tags: ["Web", "UI/UX"],
    cover: `${base}Portfolio/project7.webp`,
  },
  {
    slug: "chronicles",
    name: "Calyx",
    sub: "Blog Website Design & Programming",
    tags: ["UI/UX", "Web"],
    cover: `${base}Chronicles/landingpage_mockup.webp`,
  },
  {
    slug: "charlies",
    name: "Charlies Island",
    sub: "2D Game Assets and Illustrations",
    tags: ["Illustration"],
    cover: `${base}Charlies/charlies_illustration_2.webp`,
  }
];



export { areas, experiences, projects };