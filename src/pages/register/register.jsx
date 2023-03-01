import React from "react";
import FormPage from "../../components/form-page/form-page";
import { signUp } from "../../services/actions/user";
import { useDispatch } from "react-redux";

function RegisterPage() {
  const dispatch = useDispatch();

  const onSubmit = (form) => {
    dispatch(signUp(form));
  };

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

  return (
    <FormPage formSettings={formSettings} footer={footer} onSubmit={onSubmit} />
  );
}

export default RegisterPage;
