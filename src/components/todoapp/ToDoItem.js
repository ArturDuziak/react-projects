import React from "react";

const ToDoItem = ({ id, title, description, isCompleted, status }) => {
  return (
    <div className="todo-item" key={id}>
      <h3>{title}</h3>
      <span>{description}</span>
      <input type="checkbox" name="isCompleted" checked={isCompleted} />
      <span>{status}</span>
    </div>
  );
};

export default ToDoItem;
