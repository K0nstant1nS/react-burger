import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./order-ingredient.module.css";
import IngredientIcon from "../ingredient-icon/ingredient-icon";
import { ingredientProps } from "../../utils/propTypes";

function OrderIngredient({ ingredient, factor = 1 }) {
  const { name, image, price } = ingredient;
  return (
    <article className={styles.container}>
      <IngredientIcon link={image} />
      <span className="pl-4 text text_type_main-default">{name}</span>
      <div className={styles.cost}>
        <span className="text text_type_digits-default pl-4">
          {price} x {factor}
        </span>
        <CurrencyIcon type="primary" />
      </div>
    </article>
  );
}

OrderIngredient.propTypes = {
  ingredient: ingredientProps,
};

export default OrderIngredient;
