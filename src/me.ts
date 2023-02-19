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
  SiJquery,
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
        "Maintenance of legacy jQuery code in the project.",
        "Consuming API to develop clean and functional code.",
        "Implementation of store procedures and various functionalities in SQL.",
        "Implementation of layouts in HTML and CSS.",
        "Implementation of Azure functionalities.",
        "Attend meetings with Agile methodologies.",
        "Work on different tasks with Kanban methodology."
      ],
    },
    {
      company: "Thryv",
      location: "Remote",
      position: "Pager / QA Specialist",
      duration: "January 2023 - Ongoing",
      bullets: [
        "My principal activity is the quality assessment process of the yellow pages distributed in the US.",
        "Usage of the JIRA ticket system to report errors.",
        "Using SQL and MS/SQL server to make consultations and modifications in the database.",
        "Using Excel to analyze and filter high amounts of data.",
        "Attend meetings with Agile methodologies.",
        "Work on different tasks with Kanban methodology."
      ],
    }
  ],
  projects: [
    {
      name: "Library-Project",
      description: "Web based library management system with most of the functionalities of an online library.",
      contribution:
        "This project was made with the objective to test my NodeJs knowledge when building projects.",
      technologies: ["HTML", "CSS", "Pug,js", "Bootstrap", "NodeJS", "ExpressJS", "MongoDB", "Mongoose"],
      links: [
        {
          name: "Live Demo",
          uri: "https://library-form-practice-production.up.railway.app/catalog/",
        },
        {
          name: "Source Code",
          uri: "https://github.com/JuniorBaez-ux/Library-Form-Practice.git",
        },
      ],
       image: "/assets/book.png",
    },

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
       image: "/assets/money.png",
    },

    // {
    //   name: "Next.js Sample Website",
    //   description: "Basic website built with Next.js",
    //   contribution:
    //     "This is a website made to showcase the basic concepts of using Next.js in a project.",
    //   technologies: ["Node.js", "Next.js", "CSS", "React", "JavaScript"],
    //   links: [
    //     {
    //       name: "Live Demo",
    //       uri: "https://nextjs-blog-juniorbaez-ux.vercel.app",
    //     },
    //     {
    //       name: "Source Code",
    //       uri: "https://github.com/JuniorBaez-ux/nextjs-blog.git",
    //     },
    //   ],
    //   //image: "/assets/dad.png",
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
      name: "HTML",
      icon: SiHtml5,
    },
    {
      name: "CSS",
      icon: SiCss3,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
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
      name: "TyeScript",
      icon: SiTypescript,
    },
    {
      name: "jQuery",
      icon: SiJquery,
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
