import {
  backend,
  prototyping,
  javascript,
  flask,
  python,
  postman,
  java,
  expressjs,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  aurora,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  simstock,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },

  {
    title: 'Cloud Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'ExpressJS',
    icon: expressjs,
  },
  {
    name: 'Postman',
    icon: postman,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Aurora',
    description: 'An AI-powered quiz generator application.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'pink-text-gradient',
      },
    ],
    image: aurora,
    repo: 'https://github.com/ddamme05/Aurora',
    demo: 'http://ec2-3-210-110-55.compute-1.amazonaws.com/',
    showDemo: true,
  },
  {
    id: 'project-2',
    name: 'SimStock Exchange',
    description: 'Web-based stock market simulator with virtual currency.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'flask',
        color: 'pink-text-gradient',
      },
    ],
    image: simstock,
    repo: 'https://github.com/jawadrada/SimStock-Exchange',
    demo: '',
    showDemo: false,
  },
];

export { services, technologies, experiences, projects };
