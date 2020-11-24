import React, { useEffect, useState } from "react";
import ToDoData from "../../data/ToDoData.json";
import { GoPlus } from "react-icons/go";
import "./styles.css"

export const ToDoApp = () => {
  const [toDos, setToDos] = useState(ToDoData.ToDos);
  const [newToDoTitle, setNewToDoTitle] = useState("");
  const [isInputErrorDisplayed, setIsInputErrorDisplayed] = useState(false);

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
      <div>
        {toDos.map(item => {
          const { id, title, description } = item;
          return (
            <span key={id}>
              <br />
              id: {id}
              <br />
              title: {title}
              <br />
              desc: {description}
              <br />
            </span>
          );
        })}
      </div>
    </div>
  );
};
