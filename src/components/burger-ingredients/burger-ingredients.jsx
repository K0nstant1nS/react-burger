import React from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredientsNav from "../burger-ingredients-nav/burger-ingredients-nav";
import BurgerIngredientsContent from "../burger-ingredients-content/burger-ingredients-content";

function BurgerIngredients() {
  return (
    <section className={styles.content}>
      <h1 className="text text_type_main-large mt-10">Соберите Бургер</h1>
      <BurgerIngredientsNav />
      <BurgerIngredientsContent />
    </section>
  );
}

export default BurgerIngredients;
