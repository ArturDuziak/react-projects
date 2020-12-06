import React, { useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import { useToDoAppContext } from "./ToDoAppContext";
import Modal from "../modal/Modal";
import "./styles.css";

const AddToDoModal = () => {
  const {
    handleChange,
    addTicket,
    ticket: { id, title, description, status },
    isTicketEdited,
    editTicket,
    setTicketToDefault,
    setIsTicketEdited
  } = useToDoAppContext();
  const { closeModal } = useGlobalContext();
  const [isInputErrorDisplayed, setIsInputErrorDisplayed] = useState(false);

  const handleModalSubmit = (e) => {
    e.preventDefault();

    if (title) {
      isTicketEdited ? editTicket() : addTicket();
      setIsInputErrorDisplayed(false);
      closeModal();
    } else {
      setIsInputErrorDisplayed(true);
    }
  };

  const onModalCloseAction = () => {
    setIsTicketEdited(false);
    setTicketToDefault()
  }

  return (
    <Modal onModalCloseAction={onModalCloseAction}>
      <h2>{isTicketEdited ? "Edit ticket" : "Add ticket"}</h2>
      <div className="content">
        <form className="ticket-modal-form" onSubmit={handleModalSubmit}>
          <p className="ticket-field-label">Title</p>
          <input
            type="text"
            placeholder="What do you want to do?"
            value={title}
            onChange={handleChange}
            name="title"
          />
          <p className={`input-error title ${isInputErrorDisplayed && "show"}`}>
            Title is required
          </p>
          <p className="ticket-field-label">Description</p>
          <textarea
            type="textarea"
            placeholder="Add description here"
            value={description}
            onChange={handleChange}
            name="description"
          />
          <p className="ticket-field-label">Status</p>
          <select value={status} name="status" onChange={handleChange}>
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </form>
      </div>
      <div className="actions">
        <button className="add-ticket-btn" onClick={handleModalSubmit}>
          {isTicketEdited ? "Update ticket" : "Add ticket"}
        </button>
      </div>
    </Modal>
  );
};

export default AddToDoModal;
