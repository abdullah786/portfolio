import { Icons } from "@/components/icons";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Java } from "@/components/ui/svgs/java";
import { BarChart3, Bot, Brain, GitBranch, HardDrive, Hexagon, HomeIcon, NotebookIcon, Radio, Search, Server, Smartphone, Workflow, Zap } from "lucide-react";

/**
 * Profile, skills, and projects.
 *
 * Search this file for "TODO" before publishing. Still open:
 * - TODO: production site URL (`NEXT_PUBLIC_SITE_URL`, see `.env.example`)
 * - TODO: GitHub username
 * - TODO: project screenshots (Resume Pure, SwapStack, SmashyKeys, Sujood)
 * - TODO: SwapStack source repository URL
 * - TODO: Sujood public URL
 * - TODO: Medium profile URL (`profileLinks`, hide until it is a real link)
 *
 * Hackathons stay empty. The homepage hides that section while the array is empty.
 */

// TODO: set NEXT_PUBLIC_SITE_URL to the production domain after deploying.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const SITE_TITLE = "Abdullah Ahsan, Full stack developer";

type IconComponent = React.ComponentType<{ className?: string }>;

type Work = {
  company: string;
  href: string;
  badges: string[];
  location?: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
};

type Education = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

type ProjectLink = {
  type: string;
  href: string;
  icon: React.ReactNode;
};

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  status: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  video: string;
  group: "saas" | "apps";
};

type HackathonLink = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  links: HackathonLink[];
};

export const DATA = {
  name: "Abdullah Ahsan",
  initials: "AA",
  url: SITE_URL,
  location: "Frankfurt, Germany",
  locationLink: "https://www.google.com/maps/place/Frankfurt",
  description:
    "I build agentic workflows, including Google A2A, and ship side products. Full stack and ML engineer at halm.",
  hook: "i build agentic workflows, including google a2a, and ship side products.",
  blurb:
    "full stack and ml engineer at halm by day, building Resume Pure and SwapStack on the side.",
  summary:
    "i build agentic workflows, including google a2a, and ship side products. full stack and ml engineer at halm by day, building Resume Pure and SwapStack on the side.",
  avatarUrl: "/avatar.webp",
  skills: [
    { name: "Python", icon: Python },
    { name: "FastAPI", icon: Zap },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Go", icon: Golang },
    { name: "ClickHouse", icon: BarChart3 },
    { name: "Redis", icon: Radio },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "PyTorch", icon: Brain },
    { name: "ONNX", icon: Hexagon },
    { name: "Docker", icon: Docker },
    { name: "Proxmox", icon: HardDrive },
    { name: "GitLab CI", icon: GitBranch },
    { name: "Supabase", icon: Server },
    { name: "Expo / React Native", icon: Smartphone },
    { name: "Claude Code", icon: Bot },
    { name: "A2A (Agent2Agent)", icon: Workflow },
    { name: "Java", icon: Java },
    { name: "Elasticsearch", icon: Search },
  ] satisfies { name: string; icon: IconComponent }[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "s.mabdullahahsan@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        // TODO: GitHub username. Example: "https://github.com/your-username"
        url: "TODO",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/smabdullahahsan",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SMAbdullahAhsan",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:s.mabdullahahsan@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  profileLinks: [
    {
      label: "@SMAbdullahAhsan on X, where i build in public",
      href: "https://x.com/SMAbdullahAhsan",
    },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/smabdullahahsan",
    },
    {
      label: "email me",
      href: "mailto:s.mabdullahahsan@gmail.com",
    },
    {
      label: "my writing on Medium",
      // TODO: Medium profile URL. This link stays hidden until href is a real URL.
      href: "TODO",
    },
  ],
  work: [
    {
      company: "halm elektronik GmbH",
      href: "",
      badges: [],
      location: "Frankfurt am Main",
      title: "Software Developer / Full-Stack & ML Engineer",
      logoUrl: "/logos/halm.webp",
      start: "Dec 2021",
      end: "Present",
      description:
        "Full-stack work on PVExplore, a data platform for photovoltaic measurements. A system can record up to about 80,000 measurements a day, with roughly 300 data points each. The backend is FastAPI and Python, the frontend is React 18 and TypeScript, and the data path uses ClickHouse and Redis Streams. I also work on machine learning and computer vision for electroluminescence defect detection on solar cells, using PyTorch, ONNX, and MLflow. Shipping covers Docker and Docker Swarm, Proxmox, GitLab CI, Ansible, Windows installers, and a Go updater.",
    },
    {
      company: "halm elektronik GmbH",
      href: "",
      badges: [],
      location: "Frankfurt am Main",
      title: "Working Student, Software Development",
      logoUrl: "/logos/halm.webp",
      start: "Mar 2019",
      end: "Sep 2021",
      description:
        "Built export services for charts and a Python Apache Thrift service. Imported Excel, Access, and PNG data into Elasticsearch, and ran integration and UI testing.",
    },
    {
      company: "Inbox Consulting",
      href: "",
      badges: [],
      title: "Technical Consultant / Oracle ERP Developer",
      logoUrl: "/logos/inbox.webp",
      start: "Sep 2016",
      end: "Aug 2018",
      description:
        "Customized OAF forms and reports, migrated programs and setup with FNDLOAD, and wrote PL/SQL packages and scripts.",
    },
    {
      company: "Jaffer Brothers",
      href: "",
      badges: [],
      title: "Oracle Cloud Consultant",
      logoUrl: "/logos/jaffer.webp",
      start: "May 2016",
      end: "Sep 2016",
      description:
        "Implemented Oracle Fusion HCM security, loaded data with the file-based loader, and built BI Publisher reports.",
    },
    {
      company: "Inbox Business Technologies",
      href: "",
      badges: [],
      title: "Associate Technical Consultant",
      logoUrl: "/logos/inbox.webp",
      start: "Jun 2015",
      end: "May 2016",
      description:
        "Built custom OAF forms, reports, menus, and value sets, and designed XML Publisher templates.",
    },
    {
      company: "Pakistan Army",
      href: "",
      badges: [],
      title: "J2EE Programmer",
      logoUrl: "/logos/pakistan-army.webp",
      start: "Apr 2015",
      end: "May 2015",
      description:
        "Built Java web applications with Hibernate.",
    },
  ] satisfies Work[],
  education: [
    {
      school: "Frankfurt University of Applied Sciences",
      href: "",
      degree: "Master's degree, Information Technology",
      logoUrl: "/logos/frankfurt-uas.webp",
      start: "2018",
      end: "2022",
    },
    {
      school: "COMSATS University",
      href: "",
      degree: "Bachelor's degree, Electrical Engineering",
      logoUrl: "/logos/comsats.webp",
      start: "2010",
      end: "2014",
    },
  ] satisfies Education[],
  certifications: [
    {
      title: "Model Context Protocol: Advanced Topics",
      issuer: "Anthropic",
      date: "Jun 2026",
      logoUrl: "/logos/anthropic.webp",
      credentialId: "uik3tgu88txp",
    },
    {
      title: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      date: "Jun 2026",
      logoUrl: "/logos/anthropic.webp",
      credentialId: "zmvbdsp9d8z2",
    },
    {
      title: "Python Pandas",
      issuer: "Kaggle",
      date: "Sep 2022",
      logoUrl: "/logos/kaggle.webp",
    },
    {
      title: "Blockchain Essentials",
      issuer: "Cognitive Class (IBM)",
      date: "May 2021",
      logoUrl: "/logos/cognitive-class.webp",
      credentialId: "e1210296ab1c42428d8bf10c5241c9c5",
    },
  ],
  projects: [
    {
      title: "Resume Pure",
      href: "https://resumepure.com",
      dates: "",
      active: true,
      status: "live",
      group: "saas",
      description:
        "a web resume builder with ats checks. next.js, fastapi, and supabase.",
      technologies: ["Next.js", "FastAPI", "Supabase"],
      links: [
        {
          type: "Website",
          href: "https://resumepure.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      // TODO: screenshot. Example: "/projects/resume-pure.png"
      image: "",
      video: "",
    },
    {
      title: "SwapStack",
      href: "https://www.npmjs.com/package/create-swapstack-app",
      dates: "",
      active: true,
      status: "live",
      group: "saas",
      description:
        "a free, open source expo starter, published as create-swapstack-app.",
      technologies: ["Expo", "React Native"],
      links: [
        {
          type: "npm",
          href: "https://www.npmjs.com/package/create-swapstack-app",
          icon: <Icons.globe className="size-3" />,
        },
        // TODO: SwapStack source repository URL, once the GitHub username is known.
      ],
      // TODO: screenshot. Example: "/projects/swapstack.png"
      image: "",
      video: "",
    },
    {
      title: "Sujood",
      // TODO: Sujood public URL when the app ships.
      href: "",
      dates: "",
      active: false,
      status: "in progress",
      group: "apps",
      description:
        "a prayer app in react native and expo. no public link yet.",
      technologies: ["React Native", "Expo"],
      links: [],
      // TODO: screenshot. Example: "/projects/sujood.png"
      image: "",
      video: "",
    },
    {
      title: "SmashyKeys",
      href: "https://smashykeys.com",
      dates: "",
      active: true,
      status: "live",
      group: "apps",
      description:
        "a keyboard smashing game i built for my kid in about 2 hours.",
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://smashykeys.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      // TODO: screenshot. Example: "/projects/smashykeys.png"
      image: "",
      video: "",
    },
  ] satisfies Project[],
  // Left empty on purpose. The homepage hides this section until there is a real entry.
  hackathons: [] as Hackathon[],
};
