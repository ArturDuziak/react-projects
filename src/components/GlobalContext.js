import React, { useState, useContext } from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState(false);

  const openSidebar = () => {
    setIsSidebarDisplayed(true);
  };

  const closeSidebar = () => {
    setIsSidebarDisplayed(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarDisplayed,
        openSidebar,
        closeSidebar
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
