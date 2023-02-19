import React from "react";
import FormPage from "../../components/form-page/form-page";

function LoginPage() {
  const formSettings = {
    title: "Вход",
    password: {
      placeholder: "Введите новый пароль",
    },
    code: {
      placeholder: "Введите код из письма",
    },
    buttonSettings: {
      text: "Сохранить",
    },
  };
  const footer = [
    {
      text: "Вспомнили пароль?",
      linkText: "Войти",
      linkTo: "/login",
    },
  ];
  return <FormPage formSettings={formSettings} footer={footer} />;
}

export default LoginPage;
