import React from "react";
import styles from "./loader.module.css";

function Loader({ className = "" }) {
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
