import React, { useEffect } from "react";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

function Modal({ children, closeModal }) {
  function escCloseHandler(e) {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", closeModal);
      document.addEventListener("keydown", escCloseHandler);
    }, 0);
    return () => {
      document.removeEventListener("click", closeModal);
      document.removeEventListener("keydown", escCloseHandler);
    };
  });

  return (
    <>
      {createPortal(
        <div className={styles.modal}>
          <ModalOverlay />
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            {children}
            <div className={styles.close} onClick={closeModal}>
              <CloseIcon type="primary" />
            </div>
          </div>
        </div>,
        modalRoot
      )}
    </>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
