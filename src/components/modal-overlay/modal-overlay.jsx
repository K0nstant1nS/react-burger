import React from "react";
import styles from "./modal-overlay.module.css";

function ModalOverlay({ closeModal }) {
  return <div onClick={closeModal} className={styles.overlay}></div>;
}

export default ModalOverlay;
