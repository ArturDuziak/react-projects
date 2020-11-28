import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useToDoAppContext } from "./ToDoAppContext";
import AddToDoModal from "./AddToDoModal";

import "./styles.css";
import { useGlobalContext } from "../GlobalContext";

export const ToDoApp = () => {
  const {
    newToDoTitle,
    createTicketsList,
    addToDo,
    toDos,
    handleTextChange
  } = useToDoAppContext();
  const { openModal, isModalDisplayed } = useGlobalContext();

  const [isInputErrorDisplayed, setIsInputErrorDisplayed] = useState(false);

  useEffect(() => {
    localStorage.setItem("toDosData", JSON.stringify(toDos));
  }, [toDos]);

  const handleAddToDo = e => {
    e.preventDefault();

    if (newToDoTitle) {
      openModal();
    } else {
      setIsInputErrorDisplayed(true);
    }
  };

  return (
    <div>
      <div className="add-todo-form">
        <form onSubmit={handleAddToDo}>
          <input
            type="text"
            placeholder="What do you want to do?"
            value={isModalDisplayed ? "" : newToDoTitle}
            onChange={handleTextChange}
          />
          <button type="submit">
            <GoPlus />
          </button>
          <span className={`input-error ${isInputErrorDisplayed && "show"}`}>
            Value cannot be empty
          </span>
        </form>
      </div>
      <div className="lists-container">
        <div className="ticket-column">
          <h2>TO DO</h2>
          {createTicketsList("to_do")}
        </div>
        <div className="ticket-column">
          <h2>IN PROGRESS</h2>
          {createTicketsList("in_progress")}
        </div>
        <div className="ticket-column">
          <h2>DONE</h2>
          {createTicketsList("done")}
        </div>
      </div>
      <AddToDoModal />
    </div>
  );
};
