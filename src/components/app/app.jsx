import React from "react";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConstructorPage from "../../pages/constructor/constructor";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import ProfilePage from "../../pages/profile/profile";
import ProtectedRouteElement from "../protected-route-element";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConstructorPage />} />
          <Route
            path="/profile"
            element={<ProtectedRouteElement element={<ProfilePage />} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
