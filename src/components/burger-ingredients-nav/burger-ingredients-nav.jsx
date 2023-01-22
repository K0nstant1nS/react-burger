import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import styles from "./burger-ingredients-nav.module.css";

function BurgerIngredientsNav() {
  const [activeButtonNumber, setActiveButtonNumber] = useState(1);
  const [activeButtonBuns, activeButtonSauces, activeButtonMains] = [1, 2, 3]; // Здесь я и выношу значения в константы, не понял замечания

  return (
    <nav>
      <ul className={`text text_type_main-default mt-5 ${styles.menuNav}`}>
        <li>
          <Tab
            active={activeButtonNumber === activeButtonBuns}
            onClick={() => {
              setActiveButtonNumber(1);
            }}
          >
            Булки
          </Tab>
        </li>
        <li>
          <Tab
            active={activeButtonNumber === activeButtonSauces}
            onClick={() => setActiveButtonNumber(2)}
          >
            Соусы
          </Tab>
        </li>
        <li>
          <Tab
            active={activeButtonNumber === activeButtonMains}
            onClick={() => setActiveButtonNumber(3)}
          >
            Начинки
          </Tab>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerIngredientsNav;
