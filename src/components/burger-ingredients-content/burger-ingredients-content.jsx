import React, { useMemo, useContext } from "react";
import styles from "./burger-ingredients-content.module.css";
import SortedByType from "../sorted-by-type/sorted-by-type";
import PropTypes from "prop-types";
import { IngredientsContext } from "../../context/ingredients-context";

function BurgerIngredientsContent({ setIngredientModal }) {
  const data = useContext(IngredientsContext);
  const [bun, main, sauce] = ["bun", "main", "sauce"];
  const bunsData = useMemo(
    () =>
      data.filter((item) => {
        return item.type === bun;
      }),
    [data]
  );
  const mainsData = useMemo(
    () =>
      data.filter((item) => {
        return item.type === main;
      }),
    [data]
  );
  const saucesData = useMemo(
    () =>
      data.filter((item) => {
        return item.type === sauce;
      }),
    [data]
  );

  return (
    <div className={styles.content}>
      <SortedByType
        indents="mt-10 mb-10"
        data={bunsData}
        header="Булки"
        setIngredientModal={setIngredientModal}
      />
      <SortedByType
        indents="mb-10"
        data={saucesData}
        header="Соусы"
        setIngredientModal={setIngredientModal}
      />
      <SortedByType
        data={mainsData}
        header="Начинки"
        setIngredientModal={setIngredientModal}
      />
    </div>
  );
}

BurgerIngredientsContent.propTypes = {
  setIngredientModal: PropTypes.func.isRequired,
};

export default BurgerIngredientsContent;
