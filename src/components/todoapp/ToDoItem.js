import React, { useState } from "react";
import { BiTrash, BiCopyAlt, BiEdit } from "react-icons/bi";
import { useToDoAppContext } from "./ToDoAppContext";
import { useToasts } from "react-toast-notifications";

const ToDoItem = ({ id, title, description, status }) => {
  const { deleteToDo } = useToDoAppContext();
  const [displayedMore, setDisplayedMore] = useState(false);
  const { handleTicketEdit, openEditModal } = useToDoAppContext();
  const { addToast } = useToasts();

  const copyTitle = () => {
    addToast("Title copied to clipboard successfuly", {
      appearance: "success",
    });
    navigator.clipboard.writeText(title[0].toUpperCase() + title.substring(1));
  };

  const descriptionComponent = () => {
    if (description.length < 150) {
      return <span>{description}</span>;
    } else if (description.length > 150) {
      return (
        <span>
          {displayedMore ? description : `${description.substring(0, 150)}...`}
          <span
            onClick={() => setDisplayedMore(!displayedMore)}
            className="text-length-toggle"
          >
            {displayedMore ? " Show less" : " Show more"}
          </span>
        </span>
      );
    }
  };

  return (
    <div className="ticket-item" data-cy="ticket-item">
      <h3 onClick={copyTitle} className="ticket-title" data-cy="ticket-title">
        {title}
        <BiCopyAlt />
      </h3>
      <p className="ticket-description" data-cy="ticket-description">
        {descriptionComponent()}
      </p>
      <select
        value={status}
        name="status"
        onChange={(e) => handleTicketEdit(id, e)}
        className="ticket-status-toggle"
        data-cy="ticket-status-toggle"
      >
        <option value="to_do">To Do</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <BiEdit
        className="edit-ticket-button"
        data-cy="edit-ticket-button"
        onClick={() => openEditModal(id)}
      />
      <BiTrash
        className="delete-ticket-button"
        data-cy="delete-ticket-button"
        onClick={() => deleteToDo(id)}
      />
    </div>
  );
};

export default ToDoItem;
