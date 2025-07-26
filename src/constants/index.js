import { desc } from "framer-motion/client";


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
    title: "Front-end Developer",
    //icon: web,
  },
  {
    title: "Mobile Developer",
    //icon: mobile,
  },
  {
    title: "UI/UX Designer",
    //icon: backend,
  },
  {
    title: "3D Artist",
    //icon: creator,
  },
  {
    title: "Illustrator",
    //icon: web,
  },
  {
    title: "Creative Coder",
    //icon: mobile,
  }


];

const technologies = [
  
];

const experiences = [

  { title:"Research Intern & Traveling Scholar",
    company_name: "ATLAS Institute, University of Colorado, Boulder",
    date: "August- December 2024",
    points: [
      "As one of six students all over Europe and the first one from Austria, I had the opportunity to partake in the Europe-Colorado Program.",
      "I completed a 6 month internship in the ACME Lab under Professor Ellen Do, working on a practical AR project, that enables users to create a 3D map based on color data of a 2D canvas. "
    ]
   },
    {  title: "Creative Computing Student",
    company_name: "University of Applied Sciences Saint Poelten",
    date: "2022 - September 2025",
    points: [
      "Studying Creative Computing with a focus on user-centred design and interactive storytelling.",
      "Developing skills in front-end development, UI/UX design, and creative coding.",
      "Engaging in projects that combine technical development with artistic exploration."
    ]

  },
  { title: "Flight Attendant",
    company_name: "Austrian Airlines",
    date: "2019 - 2022",
    points: [
      "Ensured passenger safety and comfort during flights.",
      "Developed strong communication and problem-solving skills in a fast-paced environment.",
      "Gained experience in customer service and teamwork."
    ]}
];



const projects = [
  {
    name: "AR Map Creator",
    description:
      "In the ACME lab in CU Boulder, I had the opportunity to create an AR storytelling application.",
      description2: "Created an interactive storytelling experience using real-time image generation and a Canvas-to-Oculus drawing pipeline. This practical component, was part of my bachelor thesis about storytelling in Augmented Reality. ",
      description3: "For this application, I first looked into Python to automate 3D model generation, before diving into real-time creation by using an NDI and a ShaderGraph by using the color data of images to render an asset in ar based on a drawing. Furthermore, by enabling AI generated concept art directly inside the application, using an Stable Diffusion API, enhances the user experience.",
      description4: "Participating in the Europe-Colorado Program, I was presented with a stipend and a 6 month internship in the ACME lab at the University of Colorado, Boulder under Professor Ellen Do. Furthermore, I had the chance to participate in various lectures and talks.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "AR Foundation",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      {
        name: "Websocker",
        color: "pink-text-gradient",
      },
    ],
    image: "/armap.png",
  },
  {name: "TideUp",
    description: "For 11 weeks in 2025 I was part of a game production group that was tasked to create a game from scratch. We created a game called TideUp, where the player has to clean up the beach from plastic waste. The game is a 3D rpg with a focus on environmental awareness.",
    description2: "My task was to bring the game idea to life by creating concept art, modelling and texturing various assets and create charming dialogue.",
    description3: "TideUp is a cozy 3D game about Re- and Upcycling Trash on an Island to bring change. The Player takes on the role of a traveler who gets washed onto the beach and decides to clean up the island to help the environment and the islanders!",
    description4: "The models and textures I created included: The Player Character, three villagers, the Engineer Marley, the workshop (outside and inside) and pier, the Re-Upcycler, and various smaller environment assets to enrich the island.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "Procreate",
        color: "pink-text-gradient",
      }, {
        name: "Jira",
        color: "blue-text-gradient",
      },

    ],
    image: "/tideup.png"  ,
      images: Array.from({ length: 15 }, (_, i) => `/TideUp/tu${i + 1}.png`)
  },
  {
    name: "Real-Time Engine",
    description:
      "Using the vvvv-Gamma program, a visual live programming environment based on C#, I had the opportunity to bring my project to life on the 69 x 4.5 m display at the House of Digitalization in Tulln.",
      description2: "The live programming environment allowed me to implement my ideas in a simple and intuitive way. The program provides a variety of tools and features that enabled me to create and animate the visual elements of my project.",
      description3: " Overall, it was an incredible experience to bring my project to life on the display at the House of Digitalization. I am grateful for the opportunity to showcase my project on this platform",
      description4: "",

    tags: [
      {
        name: "vvvv",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
    ],
    image: "/rte.png",
  },
  {
    name:"Arcane Mind",
    description:
      "In the course of two weeks, a colleague and I designed and programmed the Arcane Mind app.",
      description2: "We started with brainstorming sessions to determine the key features and functionalities that the app should have. Once we had a clear idea of what we wanted, we began the development phase. My colleague and I utilized our programming skills in Kotlin to create the app. We made sure that the app was user- friendly and had a simple interface to ensure seamless navigation.",
      description3: "The API we used to fetch the cards also played a crucial role in ensuring that the app delivered accurate results. We also incorporated the card designs from the Rider-Waite deck into the app.",
      description4: "To ensure that the app was visually appealing, we collaborated on creating the logo with my colleague, while I designed the other illustrations. Finally, we put the app to the test by getting feedback from users. We incorporated the feedback we got during user testing, making sure that the app was perfect in every way.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Kotlin",
        color: "green-text-gradient",
      },
      {
        name: "Procreate",
        color: "pink-text-gradient",
      },
    ],
    image: "/arcanemind.png",
  },
    {
    name:"MeetMe",
    description:
      "Design project for an event app for like-minded people.",
     description2: "“Connect with others who share the same hobbies or interests with MeetMe!”",
      description3: "In the course of User Interface Design, we were challenged with a design problem about a Meet-Up App for people with the same interests. One of the key features of MeetMe is the ability to create and join groups. Users can create groups based on their interests and invite others to join. ",
      description4: "This fully functioning prototype was created in Figma, and did not require any coding.",
       tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: "/meetme.png",
  }
 
];


export { areas, experiences, projects };