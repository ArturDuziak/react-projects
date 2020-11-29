import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { useToDoAppContext } from "./ToDoAppContext";
import Modal from "../modal/Modal";
import "./styles.css";

const AddToDoModal = () => {
  const {
    handleChange,
    addTicket,
    ticket: { id, title, description },
    isTicketEdited,
    editTicket
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
        <form>
          <label>Title</label>
          <br />
          <input
            type="text"
            placeholder="What do you want to do?"
            value={title}
            onChange={handleChange}
            name="title"
          />
          <br />
          <label>Description</label>
          <br />
          <textarea
            type="textarea"
            placeholder="Add description here"
            value={description}
            onChange={handleChange}
            name="description"
          />
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
