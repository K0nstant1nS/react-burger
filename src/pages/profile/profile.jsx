import React from "react";
import styles from "./profile.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

function ProfilePage() {
  return (
    <main className={`${styles.main} pt-30`}>
      <div className={`${styles.buttons} pr-15`}>
        <button
          className={`${styles.button} text text_type_main-medium text_color_inactive`}
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
        <Input placeholder="Имя" icon="EditIcon" />
        <Input placeholder="Логин" icon="EditIcon" />
        <Input placeholder="Пароль" icon="EditIcon" />
      </div>
    </main>
  );
}

export default ProfilePage;
