import React from "react";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({ closeModal }) {
  return <div onClick={closeModal} className={styles.overlay}></div>;
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalOverlay;
