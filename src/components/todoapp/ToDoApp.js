import React, { useEffect, useState } from "react";
import ToDoData from "../../data/ToDoData.json";
import { GoPlus } from "react-icons/go";
import ToDoItem from "./ToDoItem";
import { useToDoAppContext } from "./ToDoAppContext";
import "./styles.css";

export const ToDoApp = () => {
  // const [toDos, setToDos] = useState(
  //   JSON.parse(localStorage.getItem("toDosData")) || ToDoData.ToDos
  // );
  // const [newToDoTitle, setNewToDoTitle] = useState("");
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
    const text = e.target.value;
    setNewToDoTitle(text);
  };

  // const addToDo = e => {
  //   e.preventDefault();

  //   if (newToDoTitle) {
  //     const id = new Date().getTime().toString();
  //     const newToDo = {
  //       id,
  //       title: newToDoTitle,
  //       description: "asd",
  //       isCompleted: false,
  //       status: "to_do"
  //     };
  //     setToDos(prevState => [newToDo, ...prevState]);
  //     setNewToDoTitle("");
  //   } else {
  //     setIsInputErrorDisplayed(true);
  //   }
  // };

  // const createTicketsList = filter => {
  //   const ticketList = toDos.filter(item => item.status === filter);
  //   if (ticketList.length === 0) {
  //     return <p> Add more ticket to display them here </p>;
  //   } else {
  //     return ticketList.map(item => <ToDoItem key={item.id} {...item} />);
  //   }
  // };

  // const deleteToDo = index => {
  //   setToDos(toDos.filter(item => item.id !== index));
  // };

  return (
    <div>
      <div className="add-todo-form">
        <form onSubmit={addToDo}>
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
