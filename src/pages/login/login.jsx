import React from "react";
import FormPage from "../../components/form-page/form-page";
import { signIn } from "../../services/actions/user";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const onSubmit = (form) => {
    dispatch(signIn(form));
  };
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
