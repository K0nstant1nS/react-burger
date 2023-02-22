import React from "react";
import FormPage from "../../components/form-page/form-page";
import { confirmPasswordChange } from "../../services/actions/user";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserFromStore } from "../../utils";

function ResetPasswordPage() {
  const { changingPassword } = useSelector(getUserFromStore);
  const dispatch = useDispatch();
  const onSubmit = (form) => {
    dispatch(confirmPasswordChange(form));
  };
  const formSettings = {
    title: "Вход",
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
  if (!changingPassword) {
    return <Navigate to="/login" />;
  }
  return (
    <FormPage formSettings={formSettings} footer={footer} onSubmit={onSubmit} />
  );
}

export default ResetPasswordPage;
