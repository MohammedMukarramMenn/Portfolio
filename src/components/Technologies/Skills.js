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
  SiNextdotjs
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Android apps and Lambda functions</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
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
    Description: () => <>Code management and open source contributions</>,
  },
  {
    slug: "node",
    Component: SiNodedotjs,
    title: "Node.js",
    Description: () => (
      <>
        Powerful server-side JavaScript runtime environment for building
        scalable and efficient web applications
      </>
    ),
  },

  {
    slug: "react",
    Component: SiReact,
    title: "React",
    Description: () => (
      <>
        JS library for enabling the creation of interactive and dynamic web
        applications
      </>
    ),
  },
  {
    slug: "nextjs",
    Component: SiNextdotjs,
    title: "Next.js",
    Description: () => (
      <>
        A powerful React framework for building server-side rendered and static
        websites with ease, offering enhanced performance and seamless routing
      </>
    ),
  },
  {
    slug: "devops",
    Component: SiLinux,
    title: "Server DevOps",
    Description: () => (
      <>
        Streamlining software development and deployment through efficient
        infrastructure management and automation
      </>
    ),
  },
];
