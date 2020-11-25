import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../GlobalContext";
import "./styles.css"

export const NavbarTriggerButton = () => {
  const { isSidebarDisplayed, openSidebar } = useGlobalContext();

  return (
      <GiHamburgerMenu onClick={openSidebar} className="hamburger-btn" />
  );
};
