import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useToDoAppContext } from "./ToDoAppContext";
import AddToDoModal from "./AddToDoModal";

import "./styles.css";
import { useGlobalContext } from "../GlobalContext";

export const ToDoApp = () => {
  const {
    createTicketsList,
    ticketsList,
    handleChange,
    ticket: { title },
    addTicket,
    setTicketToDefault,
  } = useToDoAppContext();
  const { openModal, isModalDisplayed } = useGlobalContext();

  const [isInputErrorDisplayed, setIsInputErrorDisplayed] = useState(false);

  useEffect(() => {
    localStorage.setItem("ticketsData", JSON.stringify(ticketsList));
  }, [ticketsList]);

  const handleAddToDo = (e) => {
    e.preventDefault();

    if (title) {
      setIsInputErrorDisplayed(false);
      openModal();
    } else {
      setIsInputErrorDisplayed(true);
    }
  };

  const handleQuickAdd = () => {
    if (title) {
      setIsInputErrorDisplayed(false);
      addTicket();
      setTicketToDefault();
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
            name="title"
            value={isModalDisplayed ? "" : title}
            onChange={handleChange}
          />
          <button type="submit">
            <GoPlus />
          </button>
          <button type="button" onClick={handleQuickAdd}>
            Quick add
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
