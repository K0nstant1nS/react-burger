import React from "react";
import FormPage from "../../components/form-page/form-page";
import styles from "./forgot-password.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../services/actions/user";
import { getUserFromStore } from "../../utils";
import { Navigate } from "react-router-dom";

function ForgotPasswordPage() {
  const { changingPassword } = useSelector(getUserFromStore);
  const dispatch = useDispatch();
  const onSubmit = (form) => {
    dispatch(changePassword(form));
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

  if (changingPassword) {
    return <Navigate to="/reset-password" />;
  }

  return (
    <FormPage formSettings={formSettings} footer={footer} onSubmit={onSubmit} />
  );
}

export default ForgotPasswordPage;
