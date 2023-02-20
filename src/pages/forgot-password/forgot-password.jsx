import React from "react";
import FormPage from "../../components/form-page/form-page";
import styles from "./forgot-password.module.css";
import Api from "../../API";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const onSubmit = (form) => {
    Api.resetPasswordRequest(form).then((data) => {
      if (data.success) {
        navigate("/reset-password");
      } else {
        console.log("Произошла ошибка");
      }
    });
  };
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
  return (
    <FormPage formSettings={formSettings} footer={footer} onSubmit={onSubmit} />
  );
}

export default ForgotPasswordPage;
