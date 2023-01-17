import React, { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Api from "../../API";

function App() {
  const [burgerCreation, setBurgerCreation] = useState([]);
  const [burgerBun, setBurgerBun] = useState({
    price: 0,
    name: "default",
    image: "default",
  });
  const [data, setData] = useState([]);
  const statesData = {
    burgerCreation,
    setBurgerCreation,
    burgerBun,
    setBurgerBun,
  };

  useEffect(() => {
    Api.getIngredients()
      .then((data) => {
        setData(data.data);
        setBurgerBun(
          data.data.reduce((sum, item) => {
            return item.type === "bun" ? (sum = item) : sum;
          }, "")
        );
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
