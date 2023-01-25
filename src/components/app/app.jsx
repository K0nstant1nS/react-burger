import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import { initData } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd/dist/core";
import { HTML5Backend } from "react-dnd-html5-backend";
import Loader from "../loader/loader";
import ErrorReport from "../error-report/error-report";
import { getIngredients } from "../../utils";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector(getIngredients);

  function rednderer(status) {
    switch (status) {
      case "loading": {
        return <Loader />;
      }
      case "success": {
        return (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        );
      }
      case "failed": {
        return <ErrorReport />;
      }
    }
  }

  useEffect(() => {
    dispatch(initData());
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main
        className={status === "success" ? `mb-10 ${styles.main}` : styles.main}
      >
        {rednderer(status)}
      </main>
    </div>
  );
}

export default App;
