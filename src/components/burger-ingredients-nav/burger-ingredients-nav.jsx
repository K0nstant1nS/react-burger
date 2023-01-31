import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./burger-ingredients-nav.module.css";
import { getStore } from "../../utils";
import { ingredientsScrollActions } from "../../services/reducers/ingredients-scroll";

function BurgerIngredientsNav() {
  const dispatch = useDispatch();
  const { ingredientsScroll } = useSelector(getStore);

  return (
    <nav>
      <ul className={`text text_type_main-default mt-5 ${styles.menuNav}`}>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "bun"}
            onClick={() => {
              dispatch(
                ingredientsScrollActions.scrollTo(ingredientsScroll.bunY)
              );
            }}
          >
            Булки
          </Tab>
        </li>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "sauce"}
            onClick={() => {
              dispatch(
                ingredientsScrollActions.scrollTo(ingredientsScroll.sauceY)
              );
            }}
          >
            Соусы
          </Tab>
        </li>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "main"}
            onClick={() => {
              dispatch(
                ingredientsScrollActions.scrollTo(ingredientsScroll.mainY)
              );
            }}
          >
            Начинки
          </Tab>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerIngredientsNav;
