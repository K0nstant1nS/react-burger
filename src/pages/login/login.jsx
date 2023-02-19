import React from "react";
import FormPage from "../../components/form-page/form-page";
import { signIn } from "../../services/actions/auth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const { user } = useSelector((store) => store.auth);
  const onSubmit = signIn;
  const formSettings = {
    title: "Вход",
    email: {
      placeholder: "E-mail",
    },
    password: {
      placeholder: "Пароль",
    },
    buttonSettings: {
      text: "Войти",
    },
  };
  const footer = [
    {
      text: "Вы — новый пользователь?",
      linkText: "Зарегистрироваться",
      linkTo: "/register",
    },
    {
      text: "Забыли пароль?",
      linkText: "Восстановить пароль",
      linkTo: "/forgot-password",
    },
  ];

  return (
    <FormPage formSettings={formSettings} footer={footer} onSubmit={onSubmit} />
  );
}

export default LoginPage;
