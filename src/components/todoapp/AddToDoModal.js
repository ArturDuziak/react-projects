import React from "react";
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
  } = useToDoAppContext();
  const { closeModal } = useGlobalContext();

  const handleTicketAddition = () => {
    addTicket();
    closeModal();
  };

  const handleTicketEdition = () => {
    editTicket();
    closeModal();
  };

  return (
    <Modal>
      <h2>{isTicketEdited ? "Edit ticket" : "Add ticket"}</h2>
      <div className="content">
        <form className="ticket-modal-form">
          <p>Title {id}</p>
          <input
            type="text"
            placeholder="What do you want to do?"
            value={title}
            onChange={handleChange}
            name="title"
          />
          <p>Description</p>
          <textarea
            type="textarea"
            placeholder="Add description here"
            value={description}
            onChange={handleChange}
            name="description"
          />
          <p>Status</p>
          <select value={status} name="status" onChange={handleChange}>
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </form>
      </div>
      <div className="actions">
        <button
          className="add-ticket-btn"
          onClick={isTicketEdited ? handleTicketEdition : handleTicketAddition}
        >
          {isTicketEdited ? "Update ticket" : "Add ticket"}
        </button>
        <button className="toggle-modal-button" onClick={closeModal}>
          close
        </button>
      </div>
    </Modal>
  );
};

export default AddToDoModal;
