import React from "react";
import IngredientIcon from "../ingredient-icon/ingredient-icon";
import styles from "./images-set.module.css";

function ImagesSet({ links }) {
  const elements = links.map((link, index) => {
    if (index >= 7) {
      return null;
    }
    if (index === 5 && links.length > 6) {
      return (
        <div className={styles.last}>
          <div className={styles.absoluteWrapper}>
            <IngredientIcon link={link} />
          </div>
          <div className={styles.overlay}></div>
          <span className={styles.others}>+{links.length - 5}</span>
        </div>
      );
    }
    return (
      <div className={styles[`default${index}`]}>
        <IngredientIcon link={link} />
      </div>
    );
  });
  return <div className={styles.container}>{elements}</div>;
}

export default ImagesSet;
