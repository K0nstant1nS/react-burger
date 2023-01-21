import React, { useMemo } from "react";
import styles from "./burger-ingredients-content.module.css";
import SortedByType from "../sorted-by-type/sorted-by-type";
import { useSelector } from "react-redux";

function BurgerIngredientsContent() {
  const { ingredients } = useSelector((store) => store);
  const [bun, main, sauce] = ["bun", "main", "sauce"];
  const bunsData = useMemo(
    () =>
      ingredients.filter((item) => {
        return item.type === bun;
      }),
    [ingredients]
  );
  const mainsData = useMemo(
    () =>
      ingredients.filter((item) => {
        return item.type === main;
      }),
    [ingredients]
  );
  const saucesData = useMemo(
    () =>
      ingredients.filter((item) => {
        return item.type === sauce;
      }),
    [ingredients]
  );

  return (
    <div className={styles.content}>
      <SortedByType indents="mt-10 mb-10" data={bunsData} header="Булки" />
      <SortedByType indents="mb-10" data={saucesData} header="Соусы" />
      <SortedByType data={mainsData} header="Начинки" />
    </div>
  );
}

export default BurgerIngredientsContent;
