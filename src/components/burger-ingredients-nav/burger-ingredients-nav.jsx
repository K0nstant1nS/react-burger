import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./burger-ingredients-nav.module.css";
import { SCROLL_TO } from "../../services/actions/ingredients-scroll";

function BurgerIngredientsNav() {
  const dispatch = useDispatch();
  const { ingredientsScroll } = useSelector((store) => store);

  return (
    <nav>
      <ul className={`text text_type_main-default mt-5 ${styles.menuNav}`}>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "bun"}
            onClick={() => {
              dispatch({ type: SCROLL_TO, scrollTo: ingredientsScroll.bunY });
            }}
          >
            Булки
          </Tab>
        </li>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "sauce"}
            onClick={() =>
              dispatch({ type: SCROLL_TO, scrollTo: ingredientsScroll.sauceY })
            }
          >
            Соусы
          </Tab>
        </li>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "main"}
            onClick={() =>
              dispatch({
                type: SCROLL_TO,
                scrollTo: ingredientsScroll.mainY,
              })
            }
          >
            Начинки
          </Tab>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerIngredientsNav;
