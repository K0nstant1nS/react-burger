import React, { useState } from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsNav from "../burger-ingredients-nav/burger-ingredients-nav";
import BurgerIngredientsContent from "../burger-ingredients-content/burger-ingredients-content";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredients() {
  const [ingredientModal, setIngredientModal] = useState(null);

  return (
    <section className={styles.content}>
      <h1 className="text text_type_main-large mt-10">Соберите Бургер</h1>
      <BurgerIngredientsNav />
      <BurgerIngredientsContent setIngredientModal={setIngredientModal} />
      {ingredientModal && (
        <Modal
          closeModal={() => {
            setIngredientModal(false);
          }}
        >
          <IngredientDetails data={ingredientModal} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
