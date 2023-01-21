import React, { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Api from "../../API";
import { useSelector, useDispatch } from "react-redux";
import { initData } from "../../services/actions/ingredients";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initData());
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className={`mb-10 ${styles.main}`}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
