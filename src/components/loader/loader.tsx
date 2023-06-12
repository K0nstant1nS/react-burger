import React, {FC} from "react";
import styles from "./loader.module.css";

const Loader: FC<{className?: string}> = ({ className = "" }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.lds}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
