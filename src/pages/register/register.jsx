import React from "react";
import FormPage from "../../components/form-page/form-page";

function RegisterPage() {
  const formSettings = {
    title: "Регистрация",
    name: {
      placeholder: "Имя",
    },
    email: {
      placeholder: "E-mail",
    },
    password: {
      placeholder: "Пароль",
    },
    buttonSettings: {
      text: "Зарегистрироваться",
    },
  };

  const footer = [
    { text: "Уже зарегистрированы?", linkText: "Войти", linkTo: "/login" },
  ];

  return <FormPage formSettings={formSettings} footer={footer} />;
}

export default RegisterPage;
