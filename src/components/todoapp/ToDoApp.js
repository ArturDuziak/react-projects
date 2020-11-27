import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useToDoAppContext } from "./ToDoAppContext";

import "./styles.css";

export const ToDoApp = () => {
  const {
    newToDoTitle,
    createTicketsList,
    addToDo,
    setNewToDoTitle,
    toDos
  } = useToDoAppContext();
  const [isInputErrorDisplayed, setIsInputErrorDisplayed] = useState(false);

  useEffect(() => {
    localStorage.setItem("toDosData", JSON.stringify(toDos));
  }, [toDos]);

  const handleTextChange = e => {
    setIsInputErrorDisplayed(false);
    const text = e.target.value;
    setNewToDoTitle(text);
  };

  const handleAddToDo = (e) => {
    e.preventDefault();

    if (newToDoTitle) {
      addToDo();
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
            value={newToDoTitle}
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
    </div>
  );
};
