import React from "react";
import FormPage from "../../components/form-page/form-page";
import styles from "./forgot-password.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../services/actions/user";
import { getUserFromStore } from "../../utils";

function ForgotPasswordPage() {
  const { changingPassword } = useSelector(getUserFromStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (form) => {
    dispatch(changePassword(form));
    if (changingPassword) {
      navigate("/reset-password");
    }
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
