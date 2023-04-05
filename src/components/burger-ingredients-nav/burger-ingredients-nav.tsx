import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC} from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import styles from "./burger-ingredients-nav.module.css";
import { scrollToAction } from "../../services/actions/ingredients-scroll";
import { getStore } from "../../utils";

const BurgerIngredientsNav:FC = ()=>{
  const dispatch = useDispatch();
  const { ingredientsScroll } = useSelector(getStore);

  return (
    <nav>
      <ul className={`text text_type_main-default mt-5 ${styles.menuNav}`}>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "bun"}
            onClick={() => {
              dispatch(scrollToAction(ingredientsScroll.bunY))
            }}
            value="Булки"
          >
            Булки
          </Tab>
        </li>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "sauce"}
            onClick={() => {
              dispatch(scrollToAction(ingredientsScroll.sauceY))
            }}
            value="Соусы"
          >
            Соусы
          </Tab>
        </li>
        <li>
          <Tab
            active={ingredientsScroll.scrolledOn === "main"}
            onClick={() => {
              dispatch(scrollToAction(ingredientsScroll.mainY))
            }}
            value="Начинки"
          >
            Начинки
          </Tab>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerIngredientsNav;
