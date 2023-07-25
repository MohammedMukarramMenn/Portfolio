import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import {
  SiFirebase,
  SiGit,
  SiDart,
  SiCss3,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiLinux,
  SiNextdotjs,
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Desktop Applications</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management & team collaborations</>,
  },
  {
    slug: "node",
    Component: SiNodedotjs,
    title: "Node.js",
    Description: () => <>Back-End code for Business Logic</>,
  },

  {
    slug: "react",
    Component: SiReact,
    title: "React",
    Description: () => <>Interactive and dynamic UI/UX</>,
  },
  {
    slug: "nextjs",
    Component: SiNextdotjs,
    title: "Next.js",
    Description: () => <>React framework for SEO</>,
  },
  {
    slug: "devops",
    Component: SiLinux,
    title: "Server DevOps",
    Description: () => <>Deployment & Management of Application on server</>,
  },
];
