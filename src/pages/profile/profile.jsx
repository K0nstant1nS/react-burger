import React from "react";
import styles from "./profile.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/actions/user";
import ProfileForm from "../profile-form/profile-form";
import ProfileOrders from "../profile-orders/profile-orders";
import { getModal } from "../../utils";

function ProfilePage({ children, isRoute = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { modal } = useSelector(getModal);

  const isNotOrderPage =
    pathname === "/profile" || pathname === "/profile/orders" || modal;

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
    <main className={`${isNotOrderPage && styles.main} pt-10`}>
      {isNotOrderPage && (
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
              pathname.indexOf("/profile/orders") !== -1 && styles.buttonActive
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
      )}
      {children}
      {isRoute && (
        <Routes>
          <Route path="/" element={<ProfileForm />} />
          <Route path="/orders/*" element={<ProfileOrders />} />
        </Routes>
      )}
    </main>
  );
}

export default ProfilePage;
