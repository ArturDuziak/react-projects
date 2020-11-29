import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { useToDoAppContext } from "./ToDoAppContext";
import Modal from "../modal/Modal";
import "./styles.css";

const AddToDoModal = () => {
  const {
    handleChange,
    addTicket,
    ticket: { title, description }
  } = useToDoAppContext();
  const { closeModal } = useGlobalContext();

  const handleTicketAddition = () => {
    addTicket();
    closeModal();
  };

  return (
    <Modal>
      <h2>Add to do</h2>
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
        <button className="add-ticket-btn" onClick={handleTicketAddition}>
          add ticket
        </button>
        <button className="toggle-modal-button" onClick={closeModal}>
          close
        </button>
      </div>
    </Modal>
  );
};

export default AddToDoModal;
