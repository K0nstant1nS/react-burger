import React from "react";
import FormPage from "../../components/form-page/form-page";
import styles from "./forgot-password.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../services/actions/user";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (form) => {
    dispatch(changePassword(form, navigate));
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

  return (
    <FormPage formSettings={formSettings} footer={footer} onSubmit={onSubmit} />
  );
}

export default ForgotPasswordPage;
