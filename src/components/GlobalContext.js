import React, { useState, useContext } from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState(false);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const openSidebar = () => {
    setIsSidebarDisplayed(true);
  };

  const closeSidebar = () => {
    setIsSidebarDisplayed(false);
  };

  const closeModal = () => {
    setIsModalDisplayed(false);
  };

  const openModal = () => {
    setIsModalDisplayed(true);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarDisplayed,
        openSidebar,
        closeSidebar,
        setIsModalDisplayed,
        isModalDisplayed,
        openModal,
        closeModal
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
