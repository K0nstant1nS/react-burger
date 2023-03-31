import React, {FC} from "react";
import styles from "./ingredient-icon.module.css";

const IngredientIcon: FC<{link: string;}> = ({ link }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={link} />
    </div>
  );
}

export default IngredientIcon;
