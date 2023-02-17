import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Loader from "../../components/loader/loader";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import ErrorReport from "../../components/error-report/error-report";
import styles from "./constructor.module.css";
import { getIngredients } from "../../utils";
import { initData } from "../../services/actions/ingredients";

function ConstructorPage() {
  const dispatch = useDispatch();
  const { status } = useSelector(getIngredients);

  useEffect(() => {
    dispatch(initData());
  }, []);

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
  return (
    <main
      className={status === "success" ? `mb-10 ${styles.main}` : styles.main}
    >
      {rednderer(status)}
    </main>
  );
}

export default ConstructorPage;
