import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaHome,
  FaClipboardList
} from "react-icons/fa";

export const pages = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />
  },
  {
    id: 2,
    url: "/ToDoApp",
    text: "Jira Clone",
    icon: <FaClipboardList />
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
