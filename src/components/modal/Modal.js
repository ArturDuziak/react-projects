import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { FaTimes } from "react-icons/fa";
import "./styles.css";

const Modal = ({ children, onModalCloseAction }) => {
  const { isModalDisplayed, closeModal } = useGlobalContext();

  const handleModalClose = () => {
    onModalCloseAction?.();
    closeModal();
  };

  return (
    <div className="modal-container">
      <div className={`${isModalDisplayed ? "modal" : "modal off"}`} id="modal">
        {children}
        <FaTimes className="close-modal-button" onClick={handleModalClose} />
      </div>
      <div className="modal-overlay" onClick={handleModalClose} />
    </div>
  );
};

export default Modal;
