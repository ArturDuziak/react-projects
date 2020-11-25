import React, { useEffect, useState } from "react";
import ToDoData from "../../data/ToDoData.json";
import { GoPlus } from "react-icons/go";
import ToDoItem from "./ToDoItem";
import "./styles.css";

export const ToDoApp = () => {
  const [toDos, setToDos] = useState(
    JSON.parse(localStorage.getItem("toDosData")) || ToDoData.ToDos
  );
  const [newToDoTitle, setNewToDoTitle] = useState("");
  const [isInputErrorDisplayed, setIsInputErrorDisplayed] = useState(false);

  useEffect(() => {
    localStorage.setItem("toDosData", JSON.stringify(toDos));
  }, [toDos]);

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
    } else {
      setIsInputErrorDisplayed(true);
    }
  };

  const handleTextChange = e => {
    const text = e.target.value;
    setNewToDoTitle(text);
  };

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
          {toDos.map(item => {
            return <ToDoItem {...item} />;
          })}
        </div>
        <div className="ticket-column">
          {toDos.map(item => {
            return <ToDoItem {...item} />;
          })}
        </div>
        <div className="ticket-column">
          {toDos.map(item => {
            return <ToDoItem {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};
