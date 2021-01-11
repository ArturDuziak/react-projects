import React, { useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import { useToDoAppContext } from "./ToDoAppContext";
import Modal from "../modal/Modal";
import "./styles.css";

const AddToDoModal = () => {
  const {
    handleChange,
    addTicket,
    ticket: { title, description, status },
    isTicketEdited,
    editTicket,
    setTicketToDefault,
    setIsTicketEdited,
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
    setTicketToDefault();
  };

  return (
    <Modal onModalCloseAction={onModalCloseAction}>
      <h2 data-cy="modal-title">
        {isTicketEdited ? "Edit ticket" : "Add ticket"}
      </h2>
      <div className="content">
        <form className="ticket-modal-form" onSubmit={handleModalSubmit}>
          <p className="ticket-field-label">Title</p>
          <input
            type="text"
            placeholder="What do you want to do?"
            value={title}
            onChange={handleChange}
            name="title"
            data-cy="modal-title-input"
          />
          <p
            className={`input-error title ${isInputErrorDisplayed && "show"}`}
            data-cy="modal-title-input-error"
          >
            Title is required
          </p>
          <p className="ticket-field-label">Description</p>
          <textarea
            type="textarea"
            placeholder="Add description here"
            value={description}
            onChange={handleChange}
            name="description"
            data-cy="modal-description-textarea"
          />
          <p className="ticket-field-label">Status</p>
          <select
            value={status}
            name="status"
            onChange={handleChange}
            data-cy="modal-status-select"
          >
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </form>
      </div>
      <div className="actions">
        <button
          className="add-ticket-btn"
          onClick={handleModalSubmit}
          data-cy="modal-submit-button"
        >
          {isTicketEdited ? "Update ticket" : "Add ticket"}
        </button>
      </div>
    </Modal>
  );
};

export default AddToDoModal;
