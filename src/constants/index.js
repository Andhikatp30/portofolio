import project1 from "../assets/project/lezatara.png";
import project2 from "../assets/project/bold.png";
import project3 from "../assets/project/slog.png";

export const HERO_CONTENT = `I am a final semester student at Esa Unggul University of Jakarta, majoring in Informatics Engineering. I have a strong interest in pursuing a career as a Web Developer.  With possess basic skills in web programming, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Laravel, Node.js, MySQL, and JavaScript. My journey in web development started with a deep curiosity in how things work, and has evolved into a career where I continually strive to learn and adapt to new challenges. I thrive in a collaborative environment and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open source projects.`;

export const EXPERIENCES = [
//   {
//     year: "2024 - Present",
//     role: "Web Development",
//     company: "",
//     description: `Developed web applications using Laravel, Mysql, and PHP. Designed and implemented RESTful APIs for data.`,
//     technologies: ["Laravel", "Mysql", "PHP"],
//   },
  {
    year: "August 2023 - December 2023",
    role: "Front-End Web And Back-End Developer",
    company: "MSIB x Dicoding",
    description: `Learn Web Front-End and Back-End Developer with the final project of creating a website.`,
    technologies: ["HTML", "CSS", "Javascript", "NodeJS"],
  },
  {
    year: "August 2019 - October 2019",
    role: "Enterprise Resources Planning Administrator",
    company: "PT. ASCLAR Indonesia",
    description: `Check and update the stock data of each item and the price of each item.`,
    technologies: [],
  },
  //   {
  //     year: "2020 - 2021",
  //     role: "Software Engineer",
  //     company: "Paypal",
  //     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  //   },
];

export const PROJECTS = [
  {
    title: "Lezatara",
    image: project1,
    description:
      "Lezatara is an Indonesian food recipe website that contains ingredients and cooking procedures.",
    technologies: ["HTML", "CSS", "Javascript", "Node.js"],
    link: "https://lezatara.netlify.app/"
  },
  {
    title: "Bold Invosi Bersama",
    image: project2,
    description:
    "Company profile Bold Innovation Bersama which serves air, land, sea shipping and event organizers.",
    technologies: ["HTML", "CSS"],
    link: "https://boldinovasibersama.netlify.app/ "
  },
  {
    title: "Slog Admin Dashboard",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Laravel", "Mysql", "PHP"],
  },
];

export const CONTACT = {
  address: "Jakarta, Indonesia ",
  phoneNo: "+62 85892471651 ",
  email: "andhikatrisna3002@gmail.com",
};
