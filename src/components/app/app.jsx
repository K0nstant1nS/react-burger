import React, { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Api from "../../API";

function App() {
  const [burgerCreation, setBurgerCreation] = useState({
    bun: {
      price: 0,
      name: "default",
      image: "default",
    },
    common: [],
  });
  const [data, setData] = useState([]);
  const statesData = {
    burgerCreation,
    setBurgerCreation,
  };

  useEffect(() => {
    Api.getIngredients()
      .then((data) => {
        setData(data.data);
        const bun = data.data.filter((item) => item.type === "bun")[0];
        const common = data.data.filter((item) => item.type !== "bun");
        setBurgerCreation({ bun: bun, common: common });
      })
      .catch((err) =>
        console.log(`А у вас ошибочка в getIngredients: ${err.message}`)
      );
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <div className={`mb-10 ${styles.main}`}>
        <BurgerIngredients data={data} statesData={statesData} />
        <BurgerConstructor statesData={statesData} />
      </div>
    </div>
  );
}

export default App;
