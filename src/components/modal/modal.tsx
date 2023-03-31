import React, { useEffect, FC } from "react";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";
import { TModalProps } from "../../services/types/data";

const modalRoot:HTMLElement|null = document.getElementById("modal-root");


const Modal: FC<TModalProps> = ({ children, closeModal }) => {
  const escCloseHandler = (e:KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("keydown", escCloseHandler);
    }, 0);
    return () => {
      document.removeEventListener("keydown", escCloseHandler);
    };
  });

  if(!modalRoot){
    return null
  }

  return (
    <>
      {createPortal(
        <div className={styles.modal}>
          <ModalOverlay closeModal={closeModal} />
          <div
            className={styles.popup} /*onClick={(e) => e.stopPropagation()}*/
          >
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

export default Modal;
