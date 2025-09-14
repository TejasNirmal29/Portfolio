import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  TrophyOutlined,
  ProjectOutlined,
  ToolOutlined,
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import {
  NavItem,
  SocialLink,
  Skill,
  Project,
  Experience,
} from "@/types/navigation";

export const navItems: NavItem[] = [
  {
    id: 1,
    key: "/",
    label: "Home",
    path: "/",
    icon: React.createElement(HomeOutlined),
  },
  {
    id: 2,
    key: "/about",
    label: "About",
    path: "/about",
    icon: React.createElement(UserOutlined),
  },
  {
    id: 3,
    key: "/experience",
    label: "Experience",
    path: "/experience",
    icon: React.createElement(TrophyOutlined),
  },
  {
    id: 4,
    key: "/projects",
    label: "Projects",
    path: "/projects",
    icon: React.createElement(ProjectOutlined),
  },
  {
    id: 5,
    key: "/skills",
    label: "Skills",
    path: "/skills",
    icon: React.createElement(ToolOutlined),
  },
  {
    id: 6,
    key: "/contact",
    label: "Contact",
    path: "/contact",
    icon: React.createElement(MailOutlined),
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/TejasNirmal29",
    icon: React.createElement(GithubOutlined),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tejas-nirmal-89862b291",
    icon: React.createElement(LinkedinOutlined),
  },
  {
    name: "Instagram",
    url: "#",
    icon: React.createElement(InstagramOutlined),
  },
];

export const personalInfo = {
  name: "Tejas Nirmal",
  title: "Full Stack Developer",
  email: "tejasnirmal252@gmail.com",
  phone: "+91 7719994722",
  location: "Pune, Maharashtra, India",
  bio: "Experienced Full Stack Developer with a passion for creating visually stunning and user-friendly applications. Specializing in modern web technologies and innovative solutions.",
  avatar: "/api/placeholder/350/350",
  logoUrl: "/tejas-logo-large.svg",
};
