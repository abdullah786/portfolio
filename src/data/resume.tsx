import { Icons } from "@/components/icons";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Java } from "@/components/ui/svgs/java";
import { BarChart3, Bot, Brain, Component, FileCode, GitBranch, Hexagon, HomeIcon, NotebookIcon, Radio, Search, Server, Smartphone, Zap } from "lucide-react";

/**
 * Profile, skills, and projects.
 *
 * Search this file for "TODO" before publishing. Still open:
 * - TODO: production site URL (`NEXT_PUBLIC_SITE_URL`, see `.env.example`)
 * - TODO: GitHub username
 * - TODO: project screenshots (Resume Pure, SwapStack, SmashyKeys, Sujood)
 * - TODO: SwapStack source repository URL
 * - TODO: Sujood public URL
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
    "Full stack and ML engineer based in Frankfurt, Germany, building agentic workflows in public. Dad.",
  summary:
    "Full stack and ML engineer by day, and I build products like Resume Pure and SwapStack on the side. Based in Frankfurt, Germany, building agentic workflows in public. Dad. Find me on [X](https://x.com/SMAbdullahAhsan).",
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
    { name: "GitLab CI", icon: GitBranch },
    { name: "Supabase", icon: Server },
    { name: "Expo / React Native", icon: Smartphone },
    { name: "Claude Code", icon: Bot },
    { name: "Java", icon: Java },
    { name: "PL/SQL", icon: FileCode },
    { name: "Elasticsearch", icon: Search },
    { name: "Angular", icon: Component },
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
  work: [
    {
      company: "halm elektronik GmbH",
      href: "",
      badges: [],
      location: "Frankfurt am Main",
      title: "Software Developer / Full-Stack & ML Engineer",
      logoUrl: "",
      start: "Dec 2021",
      end: "Present",
      description:
        "Full-stack work on PVExplore, a data platform for photovoltaic measurements. A system can record up to about 80,000 measurements a day, with roughly 300 data points each. The backend is FastAPI and Python, the frontend is React 18 and TypeScript, and the data path uses ClickHouse and Redis Streams. I also work on machine learning and computer vision for electroluminescence defect detection on solar cells, using PyTorch, ONNX, and MLflow. Shipping covers Docker and Docker Swarm, GitLab CI, Ansible, Windows installers, and a Go updater.",
    },
    {
      company: "halm elektronik GmbH",
      href: "",
      badges: [],
      location: "Frankfurt am Main",
      title: "Working Student, Software Development",
      logoUrl: "",
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
      logoUrl: "",
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
      logoUrl: "",
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
      logoUrl: "",
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
      logoUrl: "",
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
      logoUrl: "",
      start: "2018",
      end: "2022",
    },
    {
      school: "COMSATS University",
      href: "",
      degree: "Bachelor's degree, Electrical Engineering",
      logoUrl: "",
      start: "2010",
      end: "2014",
    },
  ] satisfies Education[],
  projects: [
    {
      title: "Resume Pure",
      href: "https://resumepure.com",
      dates: "",
      active: true,
      status: "",
      description:
        "Web-first resume builder with ATS checks. Next.js web app, FastAPI ATS engine, and Supabase.",
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
      status: "",
      description:
        "Free, open source Expo and React Native starter, published on npm as create-swapstack-app. Agent-friendly, with an AGENTS.md.",
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
      title: "SmashyKeys",
      href: "https://smashykeys.com",
      dates: "",
      active: true,
      status: "",
      description:
        "A keyboard smashing game I built for my kid in about 2 hours.",
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
    {
      title: "Sujood",
      // TODO: Sujood public URL when the app ships.
      href: "",
      dates: "",
      active: false,
      status: "In progress",
      description:
        "A prayer app built with React Native and Expo. No public link yet.",
      technologies: ["React Native", "Expo"],
      links: [],
      // TODO: screenshot. Example: "/projects/sujood.png"
      image: "",
      video: "",
    },
  ] satisfies Project[],
  // Left empty on purpose. The homepage hides this section until there is a real entry.
  hackathons: [] as Hackathon[],
};
