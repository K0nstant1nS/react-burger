import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import styles from "./ingredient-element.module.css";
import { ingredientProps } from "../../utils/propTypes";
import { useSelector, useDispatch } from "react-redux";
import { getStore, openIngredientModal } from "../../utils";
import { useDrag } from "react-dnd";

function IngredientElement({ ingredient }) {
  const { constructorData } = useSelector(getStore);
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  const counter = useMemo(() => {
    if (ingredient._id === constructorData.bun._id) {
      return 1;
    }
    return constructorData.common.reduce((sum, item) => {
      if (item._id === ingredient._id) {
        return (sum += 1);
      }
      return sum;
    }, 0);
  }, [constructorData]);

  return (
    <article
      ref={dragRef}
      className={styles.element}
      onClick={() => openIngredientModal(dispatch, ingredient)} // () => addBurgerElement(ingredient) openModal
    >
      <img src={ingredient.image} className="pb-2"></img>
      <div className={`pb-2 text text_type_digits-default ${styles.price}`}>
        {ingredient.price} <CurrencyIcon />
      </div>
      <span className={`text text_type_main-default ${styles.name}`}>
        {ingredient.name}
      </span>
      <div className={styles.counter}>
        {counter !== 0 && <Counter count={counter} size="default" />}
      </div>
    </article>
  );
}

IngredientElement.propTypes = {
  ingredient: ingredientProps,
};

export default IngredientElement;
