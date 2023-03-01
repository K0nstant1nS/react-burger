import React from "react";
import FormPage from "../../components/form-page/form-page";
import { confirmPasswordChange } from "../../services/actions/user";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (form) => {
    dispatch(confirmPasswordChange(form, navigate));
  };
  const formSettings = {
    title: "Восстановление пароля",
    password: {
      placeholder: "Введите новый пароль",
    },
    token: {
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

  return (
    <FormPage formSettings={formSettings} footer={footer} onSubmit={onSubmit} />
  );
}

export default ResetPasswordPage;
