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
    <div
      className={`modal fade${isModalDisplayed ? " show" : ""}`}
      id="modal-container"
      style={isModalDisplayed ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleModalClose}
            >
              <FaTimes className="close-modal-button" />
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
      <div className="modal-overlay" onClick={handleModalClose} />
    </div>
  );
};

export default Modal;
