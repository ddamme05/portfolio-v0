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
  reactjs,
  nodejs,
  docker,
  postgresql,
  springboot,
  datadog,
  aws,
  aurora,
  filesystem,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  ttp,
  headstarter,
  metlife,
  grassroots,
  google,
  nyt,
  simstock,
  blockchainPresentation,
  blockchainPresentationLink,
  vulntriage,
  slackmcpcve,
} from '../../public';

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
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Spring Boot',
    icon: springboot,
  },
  {
    name: 'Datadog',
    icon: datadog,
  },
  {
    name: 'AWS',
    icon: aws,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer Fellow',
    company_name: 'Tech Talent Pipeline',
    icon: ttp,
    iconBg: '#333333',
    date: 'Jun 2023 - Present',
  },
  {
    title: 'Technical Development Intern',
    company_name: 'Grassroots Grocery',
    icon: grassroots,
    iconBg: '#333333',
    date: 'Mar 2024 - Apr 2024',
  },
  {
    title: 'Full Stack Engineer Intern',
    company_name: 'MetLife',
    icon: metlife,
    iconBg: '#333333',
    date: 'June 2024 - August 2024',
  },
  {
    title: 'Headstarter AI Fellow',
    company_name: 'Headstarter ai',
    icon: headstarter,
    iconBg: '#333333',
    date: 'July 2024 - September 2024',
  },
  {
    title: 'Software Engineering Mentee',
    company_name: 'Google',
    icon: google,
    iconBg: '#333333',
    date: 'Feb 2025 - Jun 2025',
  },
  {
    title: 'Backend Engineering Intern',
    company_name: 'The New York Times',
    icon: nyt,
    iconBg: '#333333',
    date: 'Jun 2025 - Oct 2025',
  },
];

const projects = [
  {
    id: 'project-5',
    name: 'VulnTriage',
    description:
      'Reachability-focused vulnerability triage for Python projects. Turns noisy scanner output into actionable findings.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'cli',
        color: 'green-text-gradient',
      },
      {
        name: 'security',
        color: 'pink-text-gradient',
      },
    ],
    image: vulntriage,
    repo: 'https://github.com/ddamme05/VulnTriage',
    demo: '',
    showDemo: false,
  },
  {
    id: 'project-6',
    name: 'CVE Research Bot',
    description:
      'Slack bot for researching CVEs with MCP-powered tool integration.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'slack',
        color: 'green-text-gradient',
      },
      {
        name: 'mcp',
        color: 'pink-text-gradient',
      },
    ],
    image: slackmcpcve,
    repo: 'https://github.com/ddamme05/slack-mcp-cve',
    demo: '',
    showDemo: false,
  },
  {
    id: 'project-1',
    name: 'FileStorage',
    description: 'A secure HTTP/3-enabled file storage application with JWT authentication, AWS S3 backend, and Datadog monitoring.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'spring-boot',
        color: 'green-text-gradient',
      },
      {
        name: 'docker',
        color: 'pink-text-gradient',
      },
    ],
    image: filesystem,
    repo: 'https://github.com/ddamme05/FileSystem',
    demo: 'https://managefiles.duckdns.org/',
    showDemo: true,
  },
  {
    id: 'project-2',
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
    demo: '',
    showDemo: false,
  },
  {
    id: 'project-3',
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
  {
    id: 'project-4',
    name: 'Presentation',
    description: 'Introductory class presentation on the application of blockchain in voting systems.',
    image: blockchainPresentation,
    demo: '',
    showDemo: false,
    downloadLink : blockchainPresentationLink,
    showDownload: true,
  },
];

export { services, technologies, experiences, projects };
