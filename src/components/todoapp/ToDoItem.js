import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useToDoAppContext } from "./ToDoAppContext";

const ToDoItem = ({ id, title, description, isCompleted, status }) => {
  const { deleteToDo } = useToDoAppContext();
  const [displayedMore, setDisplayedMore] = useState(false);

  return (
    <div className="todo-item">
      <h3>{title}</h3>
      <p>
        {displayedMore ? description : `${description.substring(0, 150)}...`}
      <span onClick={() => setDisplayedMore(!displayedMore)}>
        {displayedMore ? " Show less" : " Show more"}
      </span>
      </p>
      <BiTrash
        className="delete-ticket-button"
        onClick={() => deleteToDo(id)}
      />
    </div>
  );
};

export default ToDoItem;
