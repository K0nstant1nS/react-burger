import React from "react";
import FormPage from "../../components/form-page/form-page";
import { signUp } from "../../services/actions/user";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const onSubmit = (form) => {
    dispatch(signUp(form));
    if (user) {
      navigate("/profile");
    }
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
