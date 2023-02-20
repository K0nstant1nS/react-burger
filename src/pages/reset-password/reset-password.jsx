import React from "react";
import FormPage from "../../components/form-page/form-page";
import Api from "../../API";
import { useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const navigate = useNavigate();
  const onSubmit = (form) => {
    Api.confirmPasswordResetRequest(form).then((data) => {
      if (data.success) {
        navigate("/login");
      }
    });
  };
  const formSettings = {
    title: "Вход",
    password: {
      placeholder: "Введите новый пароль",
    },
    code: {
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
