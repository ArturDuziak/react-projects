import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useToDoAppContext } from "./ToDoAppContext";

const ToDoItem = ({ id, title, description, isCompleted, status }) => {
  const { deleteToDo } = useToDoAppContext();
  const [displayedMore, setDisplayedMore] = useState(false);
  const { handleChangen, handleTicketEdit } = useToDoAppContext();

  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <p>
        {displayedMore ? description : `${description.substring(0, 150)}...`}
        <span onClick={() => setDisplayedMore(!displayedMore)}>
          {displayedMore ? " Show less" : " Show more"}
        </span>
        <select value={status} name="status" onChange={(e) => handleTicketEdit(id, e)}>
          <option value="to_do">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </p>
      <BiTrash
        className="delete-ticket-button"
        onClick={() => deleteToDo(id)}
      />
    </div>
  );
};

export default ToDoItem;
