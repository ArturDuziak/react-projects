import React from "react";
import { FaTimes } from "react-icons/fa";
import { social, pages } from "../../data/routes";
import logo from "../../assets/logo.jpg";
import "./styles.css";
import { useGlobalContext } from "../GlobalContext";

export const Navbar = () => {
  const { isSidebarDisplayed, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarDisplayed && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="website logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {pages.map(item => {
          const { id, url, text, icon } = item;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <span>Hit me up on</span>
      <ul className="social-icons">
        {social.map(item => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url} target="_blank">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
