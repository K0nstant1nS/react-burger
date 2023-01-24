import React from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsNav from "../burger-ingredients-nav/burger-ingredients-nav";
import BurgerIngredientsContent from "../burger-ingredients-content/burger-ingredients-content";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useSelector, useDispatch } from "react-redux";
import { closeIngredientModal } from "../../utils";

function BurgerIngredients() {
  const { ingredientDetails } = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <section className={styles.content}>
      <h1 className="text text_type_main-large mt-10">Соберите Бургер</h1>
      <BurgerIngredientsNav />
      <BurgerIngredientsContent />
      {ingredientDetails && (
        <Modal closeModal={() => closeIngredientModal(dispatch)}>
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
