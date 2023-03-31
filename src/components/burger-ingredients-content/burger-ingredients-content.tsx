import React, { useMemo, useRef, useEffect, FC } from "react";
import styles from "./burger-ingredients-content.module.css";
import SortedByType from "../sorted-by-type/sorted-by-type";
import { useSelector, useDispatch } from "../../services/hooks";
import { getStore, handleScrollIniter } from "../../utils";
import { TIngredient } from "../../services/types/data";

const BurgerIngredientsContent:FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { ingredients, ingredientsScroll } = useSelector(getStore);
  const [bun, main, sauce] = ["bun", "main", "sauce"];
  const bunsData = useMemo(
    () =>
      ingredients.data.filter((item:TIngredient) => {
        return item.type === bun;
      }),
    [ingredients.data]
  );
  const mainsData = useMemo(
    () =>
      ingredients.data.filter((item:TIngredient) => {
        return item.type === main;
      }),
    [ingredients.data]
  );
  const saucesData = useMemo(
    () =>
      ingredients.data.filter((item:TIngredient) => {
        return item.type === sauce;
      }),
    [ingredients.data]
  );

  const scrollHandler = handleScrollIniter(ingredientsScroll, dispatch);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", scrollHandler);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", scrollHandler);
      }
    };
  }, [ingredients, ref.current]);

  useEffect(() => {
    if(ref.current){
    ref.current.scrollTo({
      left: 0,
      top: ingredientsScroll.scrollTo.y + 1,
      behavior: "smooth",
    });
  }
  }, [ingredientsScroll.scrollTo]);

  return (
    <div ref={ref} className={styles.content}>
      <SortedByType
        indents="mt-10 mb-10"
        data={bunsData}
        type="bun"
        header="Булки"
      />
      <SortedByType
        indents="mb-10"
        data={saucesData}
        type="sauce"
        header="Соусы"
      />
      <SortedByType data={mainsData} type="main" header="Начинки" />
    </div>
  );
}

export default BurgerIngredientsContent;
