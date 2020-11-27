import React from "react";
import { useToDoAppContext } from "./ToDoAppContext";

const AddToDoModal = () => {
  const {
    isModalDisplayed,
    closeModal,
    newToDoTitle,
    handleTextChange,
    createTicketsList,
    addToDo,
    setNewToDoTitle
  } = useToDoAppContext();
  return (
    <div className="modal-container">
      <div class={`${isModalDisplayed ? "modal" : "modal off"}`} id="modal">
        <h2>Add to do</h2>
        <div class="content">
          <form>
            <input
              type="text"
              placeholder="What do you want to do?"
              value={newToDoTitle}
              onChange={handleTextChange}
            />
          </form>
        </div>
        <div class="actions">
          <button class="toggle-button" onClick={closeModal}>
            add the ticket
          </button>
          <button class="toggle-button" onClick={closeModal}>
            close
          </button>
        </div>
      </div>
      <div className="modal-overlay" onClick={closeModal} />
    </div>
  );
};

export default AddToDoModal;
