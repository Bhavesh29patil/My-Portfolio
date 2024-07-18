import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LiaSchoolSolid } from "react-icons/lia";
import { RiSchoolLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import Blog from "@/public/Blog.png";
import MediEase from "@/public/MediEase1.jpeg";
import MediVault from "@/public/MediVault.jpg";
import ChatAnalyzer from "@/public/ChatAnalyzer.png";

import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Socials",
    hash: "#socials",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "PICT - Pune Institute of Computer Technology",
    body: "Savitribai Phule Pune University (SPPU)",
    description:
      "I'm a Final year student pursuing Bachelors in Engineeering in Information Technology ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    points: ["CGPA : 9.28 / 10"],
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Kamalnayan Bajaj Jr College, Pune ",
    body: "Maharashtra State Board (HSC)",
    description: "",
    points: [
      "Percentage: 87.17 / 100",
      "MHT-CET Percentile: 99.17",
      "JEE-MAINS Percentile: 95.44",
    ],
    icon: React.createElement(RiSchoolLine),
    date: "2021",
  },
  {
    title: "SNBP International School, Pune",
    body: "Maharashtra State Board (SSC)",
    description: "",

    points: ["Percentage: 92.20 / 100", "Batch Topper"],
    icon: React.createElement(LiaSchoolSolid),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Blog Website",
    description:
      "Developed a dynamic blog website utilizing MongoDB for efficient data storage, featuring a secure user authentication system enabling sign-up, login, & seamless CRUD operations on personalized blogs.",
    tags: ["ReactJs", "NodeJs", "MongoDB"],
    imageUrl: Blog,
    gitlink: "https://github.com/Bhavesh29patil/Blog-Website",
    livelink: "",
  },
  {
    title: "MediEase",
    description:
      "Contributed to a Telemedicine platform integrating SMS medication reminders and lab report analysis through backend development and API integration.",
    tags: ["React", "Tailwind", "NodeJs", "Flask"],
    imageUrl: MediEase,
    gitlink: "https://github.com/Bhavesh29patil/MediEase",
    livelink: "",
  },
  {
    title: "Medi-Vault",
    description:
      "Collaboratively contributed to a group project where I work on React development along with user interface & Firebase Authentication.",
    tags: ["React", "Bootstrap", "Firebase"],
    imageUrl: MediVault,
    gitlink: "https://github.com/Bhavesh29patil/MediVault",
    livelink: "https://medivault-f095c.web.app/home",
  },
  {
    title: "Chat-Analyzer",
    description:
      "Developed a WhatsApp Chat Analyzer providing in-depth analytics on message frequency and user activity patterns in a user-friendly interface.",
    tags: ["Python", "Matplotlib", "Seaborn", "streamlit"],
    imageUrl: ChatAnalyzer,
    gitlink: "https://github.com/Bhavesh29patil/Chat-Analyzer",
    livelink: "https://chat-analyzer-whatsapp.streamlit.app/",
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: React.createElement(FaHtml5),
  },
  {
    name: "CSS",
    icon: React.createElement(FaCss3),
  },
  {
    name: "JavaScript",
    icon: React.createElement(SiJavascript),
  },
  {
    name: "TypeScript",
    icon: React.createElement(SiTypescript),
  },
  {
    name: "React",
    icon: React.createElement(FaReact),
  },
  {
    name: "Next.js",
    icon: React.createElement(TbBrandNextjs),
  },
  {
    name: "Node.js",
    icon: React.createElement(FaNodeJs),
  },
  {
    name: "Flask",
    icon: React.createElement(SiFlask),
  },
  {
    name: "C++",
    icon: React.createElement(SiCplusplus),
  },
  {
    name: "Java",
    icon: React.createElement(FaJava),
  },
  {
    name: "Python",
    icon: React.createElement(FaPython),
  },
  {
    name: "SQL",
    icon: React.createElement(SiMysql),
  },
  {
    name: "MongoDB",
    icon: React.createElement(SiMongodb),
  },
  {
    name: "Git",
    icon: React.createElement(FaGitAlt),
  },
] as const;

export const socialLinks = [
  {
    name: "Codechef",
    url: "https://www.codechef.com/users/patil_bhavesh",
    icon: React.createElement(SiCodechef),
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/bhaveshpatil",
    icon: React.createElement(SiCodeforces),
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/patil_bhavesh/",
    icon: React.createElement(SiLeetcode),
  },
] as const;
