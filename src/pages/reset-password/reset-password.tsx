import React, {FC} from "react";
import FormPage from "../../components/form-page/form-page";
import { confirmPasswordChange } from "../../services/actions/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../../services/hooks";
import { TFormSubmitData } from "../../services/types/data";

const ResetPasswordPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (form: TFormSubmitData) => {
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
