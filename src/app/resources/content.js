import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sendoa",
  lastName: "Avedillo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/Sendoa_Avedillo.jpg",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Sendoaa",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sendoa-avedillo/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:sendoave@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Sendoa, a Full Stack Developer passionate about development and
      cybersecurity. I craft intuitive
      <br /> user experiences and I start to build my own projects after hours.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:sendoave@gmail.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Sendoa, a Full Stack Developer based in Bilbao with a passion for
        development and cybersecurity. I enjoy creating intuitive user
        experiences and working on personal projects in my spare time.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Grupo SCA",
        timeframe: "January 2025 - Present",
        role: "Web developer",
        achievements: [
          <>
            Developed applications using Angular, enhancing the overall
            performance and scalability of the projects.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          /*{
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },*/
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "CIFP Txurdinaga",
        description: <>Técnico superior en Desarrollo de Aplicaciones Web</>,
      },
      {
        name: "CIFP SAN JORGE",
        description: <>Técnico en Sistemas Microinformáticos y Redes</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Angular",
        description: (
          <>Ready to start developing apps with Angular</>
        ),
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <>Actually learning how to develop apps with Next.js.</>
        ),
        images: [],
      },
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma.</>
        ),
        images: [],
      },
      {
        title: "Laravel",
        description: (
          <>Learned how to make a project with Laravel</>
        ),
        images: [],
      },
      {
        title: "Vue.js",
        description: (
          <>Ready to use Vue.js as backend</>
        ),
        images: []
      },
      {
        title: "Tailwind CSS and SCSS",
        description: (
          <>Use of various types of CSS to design an app</>
        ),
        images: [],
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
