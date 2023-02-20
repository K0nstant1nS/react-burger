import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import {
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../services/auth";

function ProfilePage() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    setUserState({ ...user });
  }, [user]);

  const changeName = (e) => {
    setUserState({ ...userState, name: e.target.value });
  };

  const changeLogin = (e) => {
    setUserState({ ...userState, email: e.target.value });
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
        >
          Выход
        </button>
        <p className="pt-20 text text_type_main-small text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.inputs}>
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
      </div>
    </main>
  );
}

export default ProfilePage;
