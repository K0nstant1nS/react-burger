import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  logout,
  patchUser,
  START_CHANGING,
  STOP_CHANGING,
} from "../../services/actions/user";
import { getCookie, getUserFromStore } from "../../utils";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { user, onChange } = useSelector(getUserFromStore);
  const [userState, setUserState] = useState(null);

  const onLogout = () => {
    dispatch(logout());
  };

  const onOrders = () => {
    navigate("/profile/orders");
  };

  const onProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    setUserState({ ...user, password: getCookie("password") });
  }, [user]);

  const changeName = (e) => {
    if (!onChange) {
      dispatch({ type: START_CHANGING });
    }
    setUserState({ ...userState, name: e.target.value });
  };

  const changeLogin = (e) => {
    if (!onChange) {
      dispatch({ type: START_CHANGING });
    }
    setUserState({ ...userState, email: e.target.value });
  };

  const changePassword = (e) => {
    if (!onChange) {
      dispatch({ type: START_CHANGING });
    }
    setUserState({ ...userState, password: e.target.value });
  };

  const stopChanging = () => {
    setUserState({ ...user, password: getCookie("password") });
    dispatch({ type: STOP_CHANGING });
  };

  const onSave = (e) => {
    e.preventDefault();
    dispatch(patchUser(userState, true));
  };

  return (
    <main className={`${styles.main} pt-30`}>
      <div className={`${styles.buttons} pr-15`}>
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
      <form className={styles.inputs} onSubmit={onSave}>
        {userState && (
          <>
            <Input
              placeholder="Имя"
              icon="EditIcon"
              value={userState.name}
              onChange={changeName}
            />
            <EmailInput
              icon="EditIcon"
              value={userState.email}
              onChange={changeLogin}
            />

            <PasswordInput
              placeholder="Пароль"
              icon="EditIcon"
              value={userState.password}
              onChange={changePassword}
            />
          </>
        )}
        {onChange && (
          <div className={styles.formButtons}>
            <Button
              onClick={stopChanging}
              htmlType="button"
              type="secondary"
              size="medium"
            >
              Отмена
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </main>
  );
}

export default ProfilePage;
