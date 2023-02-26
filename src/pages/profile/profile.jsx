import React from "react";
import styles from "./profile.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../services/actions/user";
import ProfileForm from "../profile-form/profile-form";
import ProfileOrders from "../profile-orders/profile-orders";
function ProfilePage({ children, isRoute = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const onLogout = () => {
    dispatch(logout());
  };

  const onOrders = () => {
    navigate("/profile/orders");
  };

  const onProfile = () => {
    navigate("/profile");
  };

  return (
    <main className={`${styles.main} pt-10`}>
      <div className={`${styles.buttons} pr-15 pt-20`}>
        <button
          className={`${
            styles.button
          } text text_type_main-medium text_color_inactive ${
            pathname === "/profile" && styles.buttonActive
          }`}
          onClick={onProfile}
        >
          Профиль
        </button>
        <button
          className={`${
            styles.button
          } text text_type_main-medium text_color_inactive ${
            pathname === "/profile/orders" && styles.buttonActive
          }`}
          onClick={onOrders}
        >
          История заказов
        </button>
        <button
          className={`${styles.button} text text_type_main-medium text_color_inactive`}
          onClick={onLogout}
        >
          Выход
        </button>
        <p className="pt-20 text text_type_main-small text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      {children}
      {isRoute && (
        <Routes>
          <Route path="/" element={<ProfileForm />} />
          <Route path="/orders" element={<ProfileOrders />} />
        </Routes>
      )}
    </main>
  );
}

export default ProfilePage;
