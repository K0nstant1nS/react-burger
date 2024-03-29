import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC} from "react";
import styles from "./order-ingredient.module.css";
import IngredientIcon from "../ingredient-icon/ingredient-icon";
import { TOrderIngredientProps } from "../../services/types/data";

const OrderIngredient: FC<TOrderIngredientProps> = ({ ingredient, factor = 1 }) => {
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

export default OrderIngredient;
