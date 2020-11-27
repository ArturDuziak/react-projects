import React from "react";
import { BiTrash } from "react-icons/bi";
import { useToDoAppContext } from "./ToDoAppContext";

const ToDoItem = ({ id, title, description, isCompleted, status }) => {
  const { deleteToDo } = useToDoAppContext();

  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <span>{description}</span>
      <span>{status}</span>
      <BiTrash className="delete-ticket-button" onClick={() => deleteToDo(id)} />
    </div>
  );
};

export default ToDoItem;
