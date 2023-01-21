import React from "react";
import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const { ingredientDetails } = useSelector((store) => store);
  return (
    <>
      <div className={`pl-10 pt-10 ${styles.detailsWrapper}`}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
      </div>
      <img alt={ingredientDetails.name} src={ingredientDetails.image_large} />
      <p className={`text text_type_main-medium pt-4`}>
        {ingredientDetails.name}
      </p>
      <ul
        className={`pt-8 pb-15 text text_type_main-default text_color_inactive ${styles.table}`}
      >
        <li>
          <p>Калории,ккал</p>
          <p className="text text_type_digits-default pt-2">
            {ingredientDetails.calories}
          </p>
        </li>
        <li>
          <p>Белки, г</p>
          <p className="text text_type_digits-default pt-2">
            {ingredientDetails.proteins}
          </p>
        </li>
        <li>
          <p>Жиры, г</p>
          <p className="text text_type_digits-default pt-2">
            {ingredientDetails.fat}
          </p>
        </li>
        <li>
          <p>Углеводы, г</p>
          <p className="text text_type_digits-default pt-2">
            {ingredientDetails.carbohydrates}
          </p>
        </li>
      </ul>
    </>
  );
}

export default IngredientDetails;
