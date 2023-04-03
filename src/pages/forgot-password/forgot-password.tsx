import React, {FC} from "react";
import FormPage from "../../components/form-page/form-page";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../../services/hooks";
import { changePassword } from "../../services/actions/user";
import { TFormSubmitData } from "../../services/types/data";

const ForgotPasswordPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (form:TFormSubmitData) => {
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
