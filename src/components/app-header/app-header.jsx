import React, { useState } from "react";
import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderButton from "../header-button/header-button";

function AppHeader() {
  const [isActive, setIsActive] = useState({
    constructor: true,
    orders: false,
    profile: false,
  });

  function changeActiveButton(name) {
    return function () {
      setIsActive({
        ...{ constructor: false, orders: false, profile: false },
        [name]: true,
      });
    };
  }

  const [burger, orders, profile] = ["constructor", "orders", "profile"];

  return (
    <header className={styles.header}>
      <nav className={styles.content}>
        <div className={styles.buttons}>
          <HeaderButton
            onClick={changeActiveButton(burger)}
            isActive={isActive.constructor}
            text="Конструктор"
            indents="pl-5 pr-5 mr-2"
            iconType="BurgerIcon"
          />
          <HeaderButton
            onClick={changeActiveButton(orders)}
            isActive={isActive.orders}
            text="Лента Заказов"
            indents="pl-5 pr-5"
            iconType="ListIcon"
          />
        </div>
        <HeaderButton
          onClick={changeActiveButton(profile)}
          isActive={isActive.profile}
          text="Личный кабиет"
          indents="pl-5 pr-5"
          iconType="ProfileIcon"
        />
        <div className={styles.logo}>
          <Logo />
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
