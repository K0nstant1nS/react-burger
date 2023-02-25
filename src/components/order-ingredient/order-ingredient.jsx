import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./order-ingredient.module.css";
import IngredientIcon from "../ingredient-icon/ingredient-icon";

function OrderIngredient({ ingredient }) {
  const { type, name, image, price } = ingredient;
  return (
    <article className={styles.container}>
      <IngredientIcon link={image} />
      <span className="pl-4 text text_type_main-default">{name}</span>
      <div className={styles.cost}>
        <span className="text text_type_digits-default pl-4">
          {price}
          {type === "bun" && " x 2"}
          {type !== "bun" && " x 1"}
        </span>
        <CurrencyIcon type="primary" />
      </div>
    </article>
  );
}

export default OrderIngredient;
