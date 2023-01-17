import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import styles from "./ingredient-element.module.css";
import { ingredientProps, statesDataProps } from "../../utils/propTypes";
import PropTypes from "prop-types";

function IngredientElement({ ingredient, statesData, setIngredientModal }) {
  const { burgerCreation, setBurgerCreation, burgerBun, setBurgerBun } = {
    ...statesData,
  };

  let counter = useMemo(() => {
    if (ingredient._id === burgerBun._id) {
      return 1;
    }
    return burgerCreation.reduce((sum, item) => {
      if (item._id === ingredient._id) {
        return (sum += 1);
      }
      return sum;
    }, 0);
  }, [burgerCreation, burgerBun]);

  function addBurgerElement(elementData) {
    if (elementData.type === "bun") {
      setBurgerBun(elementData);
    } else {
      setBurgerCreation([...burgerCreation, elementData]);
    }
  }

  function openModal() {
    setIngredientModal(ingredient);
  }

  return (
    <article
      className={styles.element}
      onClick={openModal} // () => addBurgerElement(ingredient) openModal
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
  statesData: statesDataProps,
  setIngredientModal: PropTypes.func.isRequired,
};

export default IngredientElement;
