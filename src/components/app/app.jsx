import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import { getIngredients } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { initData } from "../../services/actions/ingredients";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConstructorPage from "../../pages/constructor/constructor";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import ProfilePage from "../../pages/profile/profile";
import ProtectedRouteElement from "../protected-route-element";
import IngredientPage from "../../pages/ingredient/ingredient";
import { useAuth } from "../../services/auth";
import ResetPasswordPage from "../../pages/reset-password/reset-password";

function App() {
  const dispatch = useDispatch();
  const { getUser, user } = useAuth();

  const { status } = useSelector(getIngredients);

  useEffect(() => {
    if (!user) {
      getUser(true);
    }
    dispatch(initData());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        {status === "success" && (
          <Routes>
            <Route path="/" element={<ConstructorPage />} />
            <Route
              path="/profile"
              element={<ProtectedRouteElement element={<ProfilePage />} />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/ingredients/:id" element={<IngredientPage />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
