import React, { useState, useContext } from "react";
import styles from "./burger-ingredients.module.css";
import { dataProps } from "../../utils/propTypes";
import BurgerIngredientsNav from "../burger-ingredients-nav/burger-ingredients-nav";
import BurgerIngredientsContent from "../burger-ingredients-content/burger-ingredients-content";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ConstructorContext } from "../../context/constructor-context";

function BurgerIngredients() {
  const [ingredientModal, setIngredientModal] = useState(null);
  const data = useContext(ConstructorContext);

  return (
    <section className={styles.content}>
      <h1 className="text text_type_main-large mt-10">Соберите Бургер</h1>
      <BurgerIngredientsNav />
      <BurgerIngredientsContent
        data={data}
        setIngredientModal={setIngredientModal}
      />
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
