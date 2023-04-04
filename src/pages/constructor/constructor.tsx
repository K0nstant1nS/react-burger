import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
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
import { TStatus } from "../../services/types/data";
import { SCROLL_REFRESH } from "../../services/actions/ingredients-scroll";

const ConstructorPage: FC = () => {
  const { status } = useSelector(getIngredients);
  const { modal } = useSelector(getModal);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(()=>{
    return ()=>{
      dispatch({type: SCROLL_REFRESH})
    }
  })

  function renderer(status: TStatus):JSX.Element {
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
