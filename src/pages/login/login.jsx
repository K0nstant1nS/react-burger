import React from "react";
import { useNavigate } from "react-router-dom";
import FormPage from "../../components/form-page/form-page";
import { signIn } from "../../services/actions/user";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const onSubmit = (form) => {
    dispatch(signIn(form));
    if (user) {
      navigate("/profile");
    }
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
