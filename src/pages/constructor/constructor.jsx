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
import { Route, Routes, useLocation } from "react-router-dom";
import IngredientPage from "../ingredient/ingredient";
import { getModal } from "../../utils";

function ConstructorPage() {
  const { status } = useSelector(getIngredients);
  const { modal } = useSelector(getModal);
  const { pathname } = useLocation();

  function renderer(status) {
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
    <>
      {(modal || pathname === "/") && (
        <main
          className={
            status === "success" ? `mb-10 ${styles.main}` : styles.main
          }
        >
          {renderer(status)}
        </main>
      )}
      <Routes>
        <Route path="/ingredients/:id" element={<IngredientPage />} />
      </Routes>
    </>
  );
}

export default ConstructorPage;
