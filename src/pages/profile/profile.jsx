import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import {
  EmailInput,
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  logout,
  patchUser,
  START_CHANGING,
  STOP_CHANGING,
} from "../../services/actions/user";

function ProfilePage() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { user, onChange } = useSelector((store) => store.user);
  const [userState, setUserState] = useState(null);

  const onLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setUserState({ ...user });
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

  const stopChanging = () => {
    setUserState({ ...user });
    dispatch({ type: STOP_CHANGING });
  };

  const onSave = () => {
    dispatch(patchUser(userState));
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
        >
          Профиль
        </button>
        <button
          className={`${styles.button} text text_type_main-medium text_color_inactive`}
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
      <form className={styles.inputs}>
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
          </>
        )}
        <PasswordInput placeholder="Пароль" icon="EditIcon" />
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
            <Button
              onClick={onSave}
              htmlType="button"
              type="primary"
              size="medium"
            >
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </main>
  );
}

export default ProfilePage;
