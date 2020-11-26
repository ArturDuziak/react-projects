import React from "react";
import { BiTrash } from "react-icons/bi";

const ToDoItem = ({ id, title, description, isCompleted, status }) => {
  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <span>{description}</span>
      {/* <input type="checkbox" name="isCompleted" checked={isCompleted} /> */}
      <span>{status}</span>
      <BiTrash className="delete-ticket-button" />
    </div>
  );
};

export default ToDoItem;
