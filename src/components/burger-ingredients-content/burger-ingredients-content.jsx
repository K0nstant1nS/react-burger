import React, { useMemo, useRef, useEffect } from "react";
import styles from "./burger-ingredients-content.module.css";
import SortedByType from "../sorted-by-type/sorted-by-type";
import { useSelector, useDispatch } from "react-redux";
import { handleScrollIniter } from "../../utils";

function BurgerIngredientsContent() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { ingredients, ingredientsScroll } = useSelector((store) => store);
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

  const scrollHandler = handleScrollIniter(ingredientsScroll, dispatch);

  useEffect(() => {
    if (ref) {
      ref.current.addEventListener("scroll", scrollHandler);
    }
    return () => {
      ref.current.removeEventListener("scroll", scrollHandler);
    };
  }, [ref, ingredients]);

  useEffect(() => {
    ref.current.scrollTo(0, ingredientsScroll.scrollTo.y + 1);
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
