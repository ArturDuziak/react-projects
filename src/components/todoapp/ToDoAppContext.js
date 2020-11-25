import React, { useState, useContext } from "react";

export const ToDoAppContext = React.createContext();

export const ToDoAppProvider = ({ children }) => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  return (
    <ToDoAppProvider
      value={{
        isModalDisplayed,
        setIsModalDisplayed
      }}
    >
      {children}
    </ToDoAppProvider>
  );
};

export const useToDoAppContext = () => {
  return useContext(ToDoAppContext);
};
