import React from "react";
import FormPage from "../../components/form-page/form-page";
import styles from "./forgot-password.module.css";

function ForgotPasswordPage() {
  const formSettings = {
    title: "Восстановление пароля",
    email: {
      placeholder: "Укажите e-mail",
    },
    buttonSettings: {
      text: "Восстановить",
    },
  };
  const footer = [
    { text: "Вспомнили пароль?", linkText: "Войти", linkTo: "/login" },
  ];
  return <FormPage formSettings={formSettings} footer={footer} />;
}

export default ForgotPasswordPage;
