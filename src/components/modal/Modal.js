import React from "react";
import { useGlobalContext } from "../GlobalContext";
import "./styles.css"

const Modal = ({ children }) => {
  const { isModalDisplayed, closeModal } = useGlobalContext();

  return (
    <div className="modal-container">
      <div className={`${isModalDisplayed ? "modal" : "modal off"}`} id="modal">
        {children}
      </div>
      <div className="modal-overlay" onClick={closeModal} />
    </div>
  );
};

export default Modal;
