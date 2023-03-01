import React from "react";
import PropTypes from "prop-types";
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

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
