import { Icons } from "@/components/icons";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Bot, Cloud, Database, HomeIcon, Layers, NotebookIcon, Server, Smartphone, Sparkles } from "lucide-react";

/**
 * Profile, skills, and projects.
 *
 * Search this file for "TODO" before publishing. Still open:
 * - TODO: production site URL (`NEXT_PUBLIC_SITE_URL`, see `.env.example`)
 * - TODO: avatar photo
 * - TODO: email address
 * - TODO: GitHub username
 * - TODO: LinkedIn profile URL
 * - TODO: project screenshots (Resume Pure, SwapStack, SmashyKeys, Sujood)
 * - TODO: SwapStack source repository URL
 * - TODO: Sujood public URL
 *
 * Work history and education are intentionally empty. Add real entries later
 * and the homepage sections will show themselves. Do not invent any.
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
  location: string;
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
    "Full stack developer based in Frankfurt, Germany, building agentic workflows in public. Dad.",
  summary:
    "I'm a full stack developer based in Frankfurt, Germany, building agentic workflows in public. Dad. Find me on [X](https://x.com/SMAbdullahAhsan).",
  // TODO: avatar photo. Add a file such as public/avatar.jpg and set this to "/avatar.jpg".
  avatarUrl: "",
  skills: [
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "React Native / Expo", icon: Smartphone },
    { name: "Supabase", icon: Server },
    { name: "Postgres", icon: Database },
    { name: "Vercel", icon: Cloud },
    { name: "FastAPI / Python", icon: Python },
    { name: "Flutter", icon: Layers },
    { name: "Cursor", icon: Sparkles },
    { name: "Claude Code", icon: Bot },
  ] satisfies { name: string; icon: IconComponent }[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    // TODO: email address. Example: "hello@your-domain.com"
    email: "TODO",
    social: {
      GitHub: {
        name: "GitHub",
        // TODO: GitHub username. Example: "https://github.com/your-username"
        url: "TODO",
        icon: Icons.github,
        // TODO: set navbar to true after url is a real profile.
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        // TODO: LinkedIn profile URL.
        url: "TODO",
        icon: Icons.linkedin,
        // TODO: set navbar to true after url is a real profile.
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/SMAbdullahAhsan",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        // TODO: email address. Example: "mailto:hello@your-domain.com"
        url: "TODO",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  // Left empty on purpose. The homepage hides this section until there is a real entry.
  work: [] as Work[],
  // Left empty on purpose. The homepage hides this section until there is a real entry.
  education: [] as Education[],
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
