import React from "react";
import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderButton from "../header-button/header-button";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.content}>
        <div className={styles.buttons}>
          <HeaderButton
            to="/"
            text="Конструктор"
            indents="pl-5 pr-5 mr-2"
            iconType="BurgerIcon"
          />
          <HeaderButton
            to="/feed"
            text="Лента Заказов"
            indents="pl-5 pr-5"
            iconType="ListIcon"
          />
        </div>
        <HeaderButton
          to="/profile"
          text="Личный кабиет"
          indents="pl-5 pr-5"
          iconType="ProfileIcon"
        />
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
      </nav>
    </header>
  );
}

export default AppHeader;
