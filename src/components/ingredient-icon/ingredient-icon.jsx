import React from "react";
import styles from "./ingredient-icon.module.css";

function IngredientIcon({ link }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={link} />
    </div>
  );
}

export default IngredientIcon;
