import React, { useState, useContext } from "react";
import ToDoItem from "./ToDoItem";
import ToDoData from "../../data/ToDoData.json";

export const ToDoAppContext = React.createContext();

export const ToDoAppProvider = ({ children }) => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [toDos, setToDos] = useState(
    JSON.parse(localStorage.getItem("toDosData")) || ToDoData.ToDos
  );
  const [newToDoTitle, setNewToDoTitle] = useState("");

  const addToDo = e => {
    e.preventDefault();

    if (newToDoTitle) {
      const id = new Date().getTime().toString();
      const newToDo = {
        id,
        title: newToDoTitle,
        description: "asd",
        isCompleted: false,
        status: "to_do"
      };
      setToDos(prevState => [newToDo, ...prevState]);
      setNewToDoTitle("");
    }
  };

  const createTicketsList = filter => {
    const ticketList = toDos.filter(item => item.status === filter);
    if (ticketList.length === 0) {
      return <p> Add more ticket to display them here </p>;
    } else {
      return ticketList.map(item => <ToDoItem key={item.id} {...item} />);
    }
  };

  const deleteToDo = index => {
    setToDos(toDos.filter(item => item.id !== index));
  };

  return (
    <ToDoAppContext.Provider
      value={{
        isModalDisplayed,
        newToDoTitle,
        toDos,
        createTicketsList,
        setIsModalDisplayed,
        addToDo,
        setNewToDoTitle
      }}
    >
      {children}
    </ToDoAppContext.Provider>
  );
};

export const useToDoAppContext = () => {
  return useContext(ToDoAppContext);
};
