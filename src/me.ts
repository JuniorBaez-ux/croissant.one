import {
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNode,
  FaReact,
} from "react-icons/fa";
import {
  SiC,
  SiCsharp,
  SiCss3,
  SiGooglecloud,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiKotlin,
  SiKubernetes,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiRust,
  SiTypescript,
} from "react-icons/si";

import { IMe } from "./me.interface";

export const me = {
  name: "Junior Baez",
  subtitle: "Computer and systems engineering Student & Backend Web Developer",
  tagline:
    "I am a computer engineering student who loves to build software to create fun experiences and to challenge myself.",
  about:
    "Computer Engineering student who like to build systems for my personal experience and learning. I love making projects in languages that I find interesting. Checkout some of my most liked ones below.",
  location: "San Francisco de Macoris, Prov. Duarte, Republica Domincana",
  image: "/assets/juniorbaez.jpeg",
  education: [
    {
      degree: "Bachelors of Engineering",
      major: "Computer and Systems Engineering",
      school: "Universidad Catolica Nordestana",
      graduation: "January 2025",
      awards: [""],
    },
  ],
  experience: [
    {
      company: "Freelancer",
      location: "Remote",
      position: "JR. Fullstack .NET Developer",
      duration: "September 2021 - September 2022",
      bullets: [
        "My principal activity was the maintenance and develop of various functionalities for different web pages.",
        "Pair programming with a Sr. Full-Stack-Developer.",
        "Implementation of functionalities in C# and JavaScript.",
        "Consuming API to develop clean and functional code.",
        "Implementation of store procedures and various functionalities in SQL.",
        "Implementation of layouts in HTML and CSS.",
        "Implementation of Azure functionalities.",
        "Attend meetings with Agile methodologies.",
        "Work on different tasks with Kanban methodology."
      ],
    },
  ],
  projects: [
    {
      name: "Prestamos JDS SRL",
      description: "A desktop APP to manage loans",
      contribution:
        "My team and I built this project to showcase our abilities in database management and app designing.",
      technologies: [".Net", "C#", "WPF", "SQlite", "Material Design"],
      links: [
        {
          name: "Github",
          uri: "https://github.com/JuniorBaez-ux/Proyecto-Final-AP1",
        },
      ],
      // image: "/assets/croissant.svg",
    },


    // {
    //   name: "Library-Project",
    //   description:
    //     "A website with the basic funcitionalities of an online library",
    //   contribution:
    //     "I built this backend application with server side rendering and authentication in mind to practice these important concepts.",
    //   technologies: [
    //     "Node.js",
    //     "Express",
    //     "MongoDB",
    //     "EJCS",
    //     "Docker",
    //     "OAuth2",
    //   ],
    //   links: [
    //     // {
    //     //   name: "Website",
    //     //   uri: "https://getaudioshelf.com",
    //     // },
    //     {
    //       name: "GitHub",
    //       uri: "https://play.google.com/store/apps/details?id=com.audioshelfapp",
    //     },
    //   ],
    //   image: "https://content.getaudioshelf.com/logo.png",
    // },


    // {
    //   name: "Dad API",
    //   description: "A REST API to get dad jokes and pickup lines",
    //   contribution:
    //     "I built the entire API from scratch using Node.js and Express and deployed it on Google Cloud Run.",
    //   technologies: ["Node.js", "Express", "Google Cloud", "Docker"],
    //   links: [
    //     {
    //       name: "Joke Endpoint",
    //       uri: "https://dad.croissant.one/api/joke",
    //     },
    //     {
    //       name: "Pickup Line Endpoint",
    //       uri: "https://dad.croissant.one/api/pickup",
    //     },
    //     {
    //       name: "Github",
    //       uri: "https://github.com/arhammusheer/dad-api",
    //     },
    //   ],
    //   image: "/assets/dad.png",
    // },
    // {
    //   name: "Loud Noises",
    //   description:
    //     "A web app to play loud noises when you're in the same chat room as them. Press the big red button to play a list of sounds on their device. No registration required.",
    //   contribution:
    //     "Built a full stack app with socket.io and deployed it on Heroku.",
    //   technologies: ["Node.js", "Express", "Socket.io", "Heroku", "Bootstrap"],
    //   links: [
    //     {
    //       name: "Website",
    //       uri: "https://loudnoises.herokuapp.com/",
    //     },
    //   ],
    //   image: "/assets/big-red-button.svg",
    // },
  ],
  skills: [
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "HTML",
      icon: SiHtml5,
    },
    {
      name: "CSS",
      icon: SiCss3,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "SQL server",
      icon: SiMicrosoftsqlserver,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "C#",
      icon: SiCsharp,
    },
    {
      name: "Java",
      icon: SiJava,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Kotlin",
      icon: SiKotlin,
    },
    {
      name: "Rust",
      icon: SiRust,
    },
  ],
  social: [
    // {
    //   name: "Website",
    //   icon: FaGlobe,
    //   uri: "https://croissant.one",
    // },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/JuniorBaez-ux",
      hover: {
        bg: "gray.900",
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/IngJuniorBaez/",
      hover: {
        bg: "blue.500",
        color: "white",
      },
    },
  ],

  contact: {
    email: "juniorbaez1606@gmail.com",
  },
} as IMe;
