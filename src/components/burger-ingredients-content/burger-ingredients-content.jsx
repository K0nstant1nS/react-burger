import React, { useMemo } from "react";
import styles from "./burger-ingredients-content.module.css";
import SortedByType from "../sorted-by-type/sorted-by-type";
import { statesDataProps, dataProps } from "../../utils/propTypes";
import PropTypes from "prop-types";

function BurgerIngredientsContent({ data, statesData, setIngredientModal }) {
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
        statesData={statesData}
        indents="mt-10 mb-10"
        data={bunsData}
        header="Булки"
        setIngredientModal={setIngredientModal}
      />
      <SortedByType
        statesData={statesData}
        indents="mb-10"
        data={saucesData}
        header="Соусы"
        setIngredientModal={setIngredientModal}
      />
      <SortedByType
        statesData={statesData}
        data={mainsData}
        header="Начинки"
        setIngredientModal={setIngredientModal}
      />
    </div>
  );
}

BurgerIngredientsContent.propTypes = {
  statesData: statesDataProps,
  data: dataProps,
  setIngredientModal: PropTypes.func.isRequired,
};

export default BurgerIngredientsContent;
