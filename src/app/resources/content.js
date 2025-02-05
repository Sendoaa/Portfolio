import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Sendoa",
  lastName: "Avedillo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desarrollador Full Stack",
  avatar: "/images/Sendoa_Avedillo.jpg",
  location: "Europe/Madrid", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
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
  label: "Inicio",
  title: `Portfolio de ${person.name}`,
  description: `Sitio web de portfolio que muestra mi trabajo como ${person.role}`,
  headline: <>Sendoa Avedillo</>,
  subheadline: <>{person.role}</>,
  subline: (
    <>
      Soy Sendoa, un Desarrollador Full Stack apasionado por el desarrollo y la
      ciberseguridad. Creo experiencias de usuario intuitivas y estoy empezando a construir mis propios proyectos.
    </>
  ),
};

const about = {
  label: "Sobre mí",
  title: "Sobre mí",
  description: `${person.name}, ${person.role} de ${person.location}`,
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
    title: "Introducción",
    description: (
      <>
        Soy Sendoa, un Desarrollador Full Stack con sede en Bilbao, apasionado por el desarrollo y la ciberseguridad. 
        Disfruto creando experiencias de usuario intuitivas y trabajando en proyectos personales en mi tiempo libre.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "Grupo SCA",
        timeframe: "Enero 2025 - Presente",
        role: "Desarrollador Web",
        achievements: [
          <>
            Desarrollé aplicaciones usando Angular, mejorando el rendimiento y la escalabilidad de los proyectos.
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
    display: true,
    title: "Estudios",
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
    display: true,
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Angular",
        description: (
          <>Listo para empezar a desarrollar aplicaciones con Angular</>
        ),
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <>Actualmente aprendiendo a desarrollar aplicaciones con Next.js.</>
        ),
        images: [],
      },
      {
        title: "Figma",
        description: (
          <>Capaz de prototipar en Figma.</>
        ),
        images: [],
      },
      {
        title: "Laravel",
        description: (
          <>Aprendí a hacer un proyecto con Laravel</>
        ),
        images: [],
      },
      {
        title: "Vue.js",
        description: (
          <>Listo para usar Vue.js como backend</>
        ),
        images: []
      },
      {
        title: "Tailwind CSS y SCSS",
        description: (
          <>Uso de varios tipos de CSS para diseñar una aplicación</>
        ),
        images: [],
      },
    ],
  },
};

const work = {
  label: "Proyectos realizados",
  title: "Mis proyectos",
  description: `Proyectos realizados por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };
