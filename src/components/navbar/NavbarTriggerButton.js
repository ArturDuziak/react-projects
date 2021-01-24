import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../GlobalContext";
import "./styles.css";

export const NavbarTriggerButton = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <GiHamburgerMenu
      onClick={openSidebar}
      className="hamburger-btn"
      data-cy="navbar-trigger-btn"
    />
  );
};
