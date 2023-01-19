import React, { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Api from "../../API";
import { ConstructorContext } from "../../context/constructor-context";

function App() {
  /*const [burgerCreation, setBurgerCreation] = useState({
    bun: {
      price: 0,
      name: "default",
      image: "default",
    },
    common: [],
  });*/
  const [data, setData] = useState([]);
  const constructorState = {
    burgerCreation,
    setBurgerCreation,
  };

  useEffect(() => {
    Api.getIngredients()
      .then((data) => {
        setData(data.data);
        const bun = data.data.filter((item) => item.type === "bun")[0];
        const common = data.data.filter((item) => item.type !== "bun");
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <div className={`mb-10 ${styles.main}`}>
        <ConstructorContext.Provider value={constructorState}>
          <BurgerIngredients />
          <BurgerConstructor />
        </ConstructorContext.Provider>
      </div>
    </div>
  );
}

export default App;
