import React from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-icon.module.css";

function IngredientIcon({ link }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={link} />
    </div>
  );
}

IngredientIcon.propTypes = {
  link: PropTypes.string.isRequired,
};

export default IngredientIcon;
