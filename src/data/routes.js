import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaHome,
  FaClipboardList
} from "react-icons/fa";
import { MdMovie } from "react-icons/md"
import { SiTesla } from "react-icons/si"

export const pages = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />
  },
  {
    id: 2,
    url: "/todo-app",
    text: "Jira Clone",
    icon: <FaClipboardList />
  },
  {
    id: 3,
    url: "/movie-app",
    text: "Movie app",
    icon: <MdMovie />
  },
  {
    id: 4,
    url: "/tesla-range-calculator",
    text: "Tesla range calculator",
    icon: <SiTesla />
  }
];

export const social = [
  {
    id: 1,
    url: "https://github.com/ArturDuziak",
    icon: <FaGithub />
  },
  {
    id: 2,
    url: "https://www.facebook.com",
    icon: <FaFacebook />
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />
  }
];
