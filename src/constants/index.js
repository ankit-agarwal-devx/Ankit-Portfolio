import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  postgreSql,
  git,
  chatApp,
  expenseApp,
  linkedIn,
  github,
  lotusAnalyticsLogo,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "NextJs Developer",
    icon: creator,
  },
  {
    title: "NodeJs Developer",
    icon: web,
  },
  {
    title: "ExpressJs Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSql",
    icon: postgreSql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Junior Fullstack Developer",
    company_name: "Lotus Analytics",
    company_website: "https://lotusanalytics.com/",
    icon: lotusAnalyticsLogo,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "At Lotus Analytics, I led the development of Leasing Pro, a full-stack web application for property leasing operations.",

      "I built responsive and intuitive UIs using React.js, integrated REST APIs, and managed state using Redux and Context API.",

      "Implemented complex forms with Formik and Yup, styled components using MUI and Tailwind CSS, and optimized performance with lazy loading and memoization.",
      "On the backend, I developed scalable APIs using Node.js and Express, and designed PostgreSQL schemas for data management.",

      "I also built robust HR and Inventory modules—handling employee timecards, shift scheduling, inventory dashboards, stock tracking, and vendor management with full-stack support.",
    ],
  },
];

const projects = [
  {
    name: "MERN CHAT APP",
    description:
      "This is a chat app built to learn real-time communication using modern web technologies.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressJs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDb",
        color: "green-text-gradient",
      },
    ],
    image: chatApp,
    hosted_link: "https://threadly-r8kp.onrender.com/",
  },
  {
    name: "Expense Tracker App",
    description:
      "Empowering you to manage your budget efficiently and make confident financial decisions.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressJs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
    ],
    image: expenseApp,
    hosted_link: "https://github.com/itsCoderAnkit/itsExpenseTracker",
  },
];

const personalInfo = {
  name: "Ankit",
  fullName: "Ankit Agarwal",
  email: "itsankitagarwal000@gmail.com",
  mobile: "+91-8368764167",
  role: "Fullstack Developer",
  about: `I'm a full-stack software developer with over 1.5 years of experience 
building dynamic and scalable web applications. 
My expertise spans JavaScript, React.js, Next.js, Node.js, and PostgreSQL. 
I’ve built and shipped real-world platforms in leasing, HR, and inventory management, 
focusing on performance, clean UI, and maintainable code. 
I'm a fast learner who thrives in collaborative environments, 
and I love turning product ideas into efficient, real-world solutions.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1_3K-WJtjLawUqp5_CzlPR1YV9fFJlh5V/view?usp=drive_link",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/iankitagarwal/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/ankit-agarwal-devx",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
