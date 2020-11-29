import React, { useState } from "react";
import { BiTrash, BiCopyAlt } from "react-icons/bi";
import { useToDoAppContext } from "./ToDoAppContext";

const ToDoItem = ({ id, title, description, isCompleted, status }) => {
  const { deleteToDo } = useToDoAppContext();
  const [displayedMore, setDisplayedMore] = useState(false);
  const { handleTicketEdit } = useToDoAppContext();

  const copyTitle = () => {
    // TO DO: Add toasts or some message here about success
    navigator.clipboard.writeText(title[0].toUpperCase() + title.substring(1));
  };

  return (
    <div className="todo-item">
      <h3 onClick={copyTitle} className="ticket-title">
        {title}
        <BiCopyAlt />
      </h3>
      <p className="ticket-description">
        {displayedMore ? description : `${description.substring(0, 150)}...`}
        <span onClick={() => setDisplayedMore(!displayedMore)}>
          {displayedMore ? " Show less" : " Show more"}
        </span>
        <select
          value={status}
          name="status"
          onChange={e => handleTicketEdit(id, e)}
        >
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
