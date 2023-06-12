import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import FormError from "../form-error/form-error";
import styles from "./form.module.css";
import React, { useState, FC, FormEventHandler } from "react";
import { initFormState, getFormError } from "../../utils";
import { useSelector } from "../../services/hooks";
import { TFormProps, TFormSubmitData } from "../../services/types/data";

const Form: FC<TFormProps> = ({ formSettings, onSubmit }) => {
  const { error } = useSelector(getFormError);
  const [formData, setFormData] = useState<TFormSubmitData>(initFormState(formSettings));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.dataset.type){
      setFormData({ ...formData, [e.target.dataset.type]: e.target.value });
    }
  };

  const submitHandler:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(formData);
  }
  return (
    <>
      <h1 className="text text_type_main-medium pb-6">{formSettings.title}</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        {(formData.name || formData.name === "") && formSettings.name && (
          <Input
            type="text"
            placeholder={formSettings.name.placeholder}
            value={formData.name}
            onChange={onChange}
            data-type={"name"}
          />
        )}
        {(formData.email || formData.email === "") && formSettings.email && (
          <EmailInput
            placeholder={formSettings.email.placeholder}
            value={formData.email}
            onChange={onChange}
            data-type={"email"}
          />
        )}
        {(formData.password || formData.password === "") && formSettings.password && (
          <PasswordInput
            placeholder={formSettings.password.placeholder}
            value={formData.password}
            onChange={onChange}
            data-type={"password"}
          />
        )}
        {(formData.token || formData.token === "") && formSettings.token && (
          <PasswordInput
            placeholder={formSettings.token.placeholder}
            value={formData.token}
            onChange={onChange}
            data-type={"token"}
          />
        )}
        {error && <FormError />}
        <Button size="medium" htmlType="submit">
          {formSettings.buttonSettings.text}
        </Button>
      </form>
    </>
  );
}

export default Form;
