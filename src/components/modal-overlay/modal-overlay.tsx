import React, { FC } from "react";
import styles from "./modal-overlay.module.css";
import { TModalOverlayProps} from "../../services/types/data";

const ModalOverlay: FC<TModalOverlayProps> = ({ closeModal }) => {
  return <div onClick={closeModal} className={styles.overlay}></div>;
};

export default ModalOverlay;
