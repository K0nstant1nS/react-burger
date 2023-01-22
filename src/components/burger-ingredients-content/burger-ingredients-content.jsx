import React, { useMemo, useRef, useEffect } from "react";
import {
  SCROLL_ON_BUN,
  SCROLL_ON_SAUCE,
  SCROLL_ON_MAIN,
} from "../../services/actions/ingredients-scroll";
import styles from "./burger-ingredients-content.module.css";
import SortedByType from "../sorted-by-type/sorted-by-type";
import { useSelector, useDispatch } from "react-redux";

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

  useEffect(() => {
    if (ref) {
      ref.current.addEventListener("scroll", (e) => {
        if (
          e.target.scrollTop >= 0 &&
          e.target.scrollTop < ingredientsScroll.sauceY
        ) {
          dispatch({ type: SCROLL_ON_BUN });
        } else if (
          e.target.scrollTop > ingredientsScroll.sauceY &&
          e.target.scrollTop < ingredientsScroll.mainY
        ) {
          dispatch({ type: SCROLL_ON_SAUCE });
        } else {
          dispatch({ type: SCROLL_ON_MAIN });
        }
      });
    }
  }, [ref, ingredients]);

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
