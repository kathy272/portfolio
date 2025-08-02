//import { desc } from "framer-motion/client";
//import { sub } from "maath/dist/declarations/src/vector2";

import { cover } from "three/src/extras/TextureUtils.js";


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
    //icon: web,
  },
  {
    title: "UI/UX Design",
    nr: "02",
    //icon: mobile,
  },
  {
    title: "Creative Coding",
    nr: "03",
    //icon: backend,
  },
  {
    title: "Illustration",
    nr: "04",
    //icon: creator,
  },
  {
    title: "3D Modelling",
    nr: "05",
    //icon: web,
  },
  {
    title: "Mobile Dev",
    nr: "06",
    //icon: mobile,
  },
  {
    title: "Back-End Dev",
    nr: "07",
    //icon: backend,
  },
  {
    title: "Game Dev",
    nr: "08",
    //icon: game,
  },


];

const technologies = [

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
    description: [
      "For 11 weeks in 2025 I was part of a game production group that was tasked to create a game from scratch. We created a game called TideUp, where the player has to clean up the beach from plastic waste. The game is a 3D rpg with a focus on environmental awareness.",
      "My task was to bring the game idea to life by creating concept art, modelling and texturing various assets and create charming dialogue.",
      "TideUp is a cozy 3D game about Re- and Upcycling Trash on an Island to bring change. The Player takes on the role of a traveler who gets washed onto the beach and decides to clean up the island to help the environment and the islanders!",
      "The models and textures I created included: The Player Character, three villagers, the Engineer Marley, the workshop (outside and inside) and pier, the Re-Upcycler, and various smaller environment assets to enrich the island."],
    year: "2025",
    field: "Game Development",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
        icon: "/icons/unity.svg"
      },
      {
        name: "Blender",
        color: "green-text-gradient",
        icon: "/icons/blender.svg"

      },
      {
        name: "Procreate",
        color: "pink-text-gradient",
        icon: "/icons/procreate.svg"

      }, {
        name: "Jira",
        color: "blue-text-gradient",
        icon: "/icons/jira.svg"

      },

    ],
    image: "/TideUp/img00.png",
    cover: "/TideUp/img00.png",
    images: Array.from({ length: 13 }, (_, i) => `/TideUp/img${i + 1}.png`)
  },
  {
    name: "AR Map Creator",
    id: "ARMap",
    sub: " Real Time Map Rendering",
    short: "In the ACME Lab in CU Boulder, I had the opportunity to create a dynamic AR application.",
    description:
      ["In the ACME lab in CU Boulder, I had the opportunity to create an AR storytelling application.",
        "Created an interactive storytelling experience using real-time image generation and a Canvas-to-Oculus drawing pipeline. This practical component, was part of my bachelor thesis about storytelling in Augmented Reality. ",
        "For this application, I first looked into Python to automate 3D model generation, before diving into real-time creation by using an NDI and a ShaderGraph by using the color data of images to render an asset in ar based on a drawing. Furthermore, by enabling AI generated concept art directly inside the application, using an Stable Diffusion API, enhances the user experience.",
        "Participating in the Europe-Colorado Program, I was presented with a stipend and a 6 month internship in the ACME lab at the University of Colorado, Boulder under Professor Ellen Do. Furthermore, I had the chance to participate in various lectures and talks.",
      ],
    year: "2024",
    field: "Creative Coding",
    tags: [
      {
        name: "Unity",
                icon: "/icons/unity.svg"

      },
      {
        name: "Figma",
                icon: "/icons/figma.svg"

      },
      {
        name: "Websocket",
                icon: "/icons/websocket.svg"

      },
    ],
    image: "/ARMap/armap.png",
    cover: "/ARMap/cover.png",
    images: Array.from({ length: 3 }, (_, i) => `/ARMap/img${i + 1}.png`)

  },
  {
    name: "Real-Time Engine",
    id: "RTE",
    sub: "Live Visuals",
    short: "Creating a visual live programming environment for the 69 x 4.5 m display at the House of Digitalization in Tulln.",
    description:
      ["Using the vvvv-Gamma program, a visual live programming environment based on C#, I had the opportunity to bring my project to life on the 69 x 4.5 m display at the House of Digitalization in Tulln.",
        "The live programming environment allowed me to implement my ideas in a simple and intuitive way. The program provides a variety of tools and features that enabled me to create and animate the visual elements of my project.",
        " Overall, it was an incredible experience to bring my project to life on the display at the House of Digitalization.",
        ""],
    year: "2023",
    field: "Creative Coding and Shader Programming",

    tags: [
      {
        name: "vvvv -Gamma",
                icon: "/icons/vvvv.svg"

      },
      {
        name: "Blender",
                icon: "/icons/blender.svg"

      },
    ],
    image: "/rte/rte.mov",
    cover: "/rte/rte.png",
    images: Array.from({ length: 2 }, (_, i) => `/rte/img${i + 1}.png`)

  },
  {
    name: "Arcane Mind",
    id: "ArcaneMind",
    sub: "A Tarot Card Reading App",
    short: "A Tarot Card Reading App that I created in collaboration with a colleague.",
    description:
      ["In the course of two weeks, a colleague and I designed and programmed the Arcane Mind app.",
        "We started with brainstorming sessions to determine the key features and functionalities that the app should have. Once we had a clear idea of what we wanted, we began the development phase. My colleague and I utilized our programming skills in Kotlin to create the app. We made sure that the app was user- friendly and had a simple interface to ensure seamless navigation.",
        "The API we used to fetch the cards also played a crucial role in ensuring that the app delivered accurate results. We also incorporated the card designs from the Rider-Waite deck into the app.",
        "To ensure that the app was visually appealing, we collaborated on creating the logo with my colleague, while I designed the other illustrations. Finally, we put the app to the test by getting feedback from users. We incorporated the feedback we got during user testing, making sure that the app was perfect in every way.",
      ],
    year: "2024",
    field: "Mobile Development",
    tags: [
      {
        name: "Figma",
        icon: "/icons/figma.svg"
      },
      {
        name: "Kotlin",
        icon: "/icons/kotlin.svg"
      },
      {
        name: "Procreate",
        icon: "/icons/procreate.svg"
      },
    ],
    image: "/ArcaneMind/img00.png",
    cover: "/ArcaneMind/img1.png",
    images: Array.from({ length: 4 }, (_, i) => `/ArcaneMind/img${i + 1}.png`)
  },
  {
    name: "MeetMe",
    id: "MeetMe",
    sub: "A Meet-Up App in Figma",
    short: "Design project for an event app for like-minded people.",
    description:
      ["Design project for an event app for like-minded people.",
        "“Connect with others who share the same hobbies or interests with MeetMe!”",
        "In the course of User Interface Design, we were challenged with a design problem about a Meet-Up App for people with the same interests. One of the key features of MeetMe is the ability to create and join groups. Users can create groups based on their interests and invite others to join. ",
        "This fully functioning prototype was created in Figma, and did not require any coding.",
      ],
    year: "2023",
    field: "UI/UX Design",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
                icon: "/icons/figma.svg"

      },
    ],
    image: "/MeetMe/img2.png",
    cover: "/MeetMe/img1.png",
    images: Array.from({ length: 2 }, (_, i) => `/MeetMe/img${i + 1}.png`)

  },
  {
    name: "Wunden (er)zählen",
    id: "Wunden",
    sub: "Cover and Illustrations for a Book",
    short: "Designing 15+ Illustrations and Cover Art for a Book about the personal experience of the author growing up in Austria.",
    description:
      ["Cover and Illustrations for a Book about the personal experience",
        "This project involved creating a cover and illustrations for a book about the personal experience of the author growing up in Austria"
      ],
    year: "2024",
    field: "Illustration and cover design",
    tags: [
      {
        name: "Procreate",
                        icon: "/icons/procreate.svg"

      },

    ],
    image: "/Wunden/wunden.jpg",
    cover: "/Wunden/wunden.jpg",
  }

];


export { areas, experiences, projects };