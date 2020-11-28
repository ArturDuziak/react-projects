import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { useToDoAppContext } from "./ToDoAppContext";
import Modal from "../modal/Modal";
import "./styles.css";

const AddToDoModal = () => {
  const {
    newToDoTitle,
    handleTextChange,
    createTicketsList,
    addToDo,
    setNewToDoTitle
  } = useToDoAppContext();
  const { isModalDisplayed, closeModal } = useGlobalContext();

  const handleTicketAddition = () => {
    addToDo();
    closeModal();
  };

  return (
    <Modal>
      <h2>Add to do</h2>
      <div className="content">
        <form>
          <input
            type="text"
            placeholder="What do you want to do?"
            value={newToDoTitle}
            onChange={handleTextChange}
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
