import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./burger-ingredients-nav.module.css";
import {
  SCROLL_ON_BUN,
  SCROLL_ON_SAUCE,
  SCROLL_ON_MAIN,
} from "../../services/actions/ingredients-scroll";

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
              dispatch({ type: SCROLL_ON_BUN });
            }}
          >
            Булки
          </Tab>
        </li>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "sauce"}
            onClick={() => dispatch({ type: SCROLL_ON_SAUCE })}
          >
            Соусы
          </Tab>
        </li>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "main"}
            onClick={() => dispatch({ type: SCROLL_ON_MAIN })}
          >
            Начинки
          </Tab>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerIngredientsNav;
