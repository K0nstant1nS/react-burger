import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";

function Form({ formSettings, onSubmit }) {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.dataset.type]: e.target.value });
  };

  function submitHandler(e) {
    e.preventDefault();
    onSubmit(formData);
  }
  return (
    <>
      <h1 className="text text_type_main-medium pb-6">{formSettings.title}</h1>
      <form className={styles.form}>
        {formSettings.name && (
          <Input
            type="text"
            placeholder={formSettings.name.placeholder}
            value={formData.name}
            onChange={onChange}
            data-type={"name"}
          />
        )}
        {formSettings.email && (
          <EmailInput
            placeholder={formSettings.email.placeholder}
            value={formData.email}
            onChange={onChange}
            data-type={"email"}
          />
        )}
        {formSettings.password && (
          <PasswordInput
            placeholder={formSettings.password.placeholder}
            value={formData.password}
            onChange={onChange}
            data-type={"password"}
          />
        )}
        {formSettings.code && (
          <PasswordInput
            placeholder={formSettings.code.placeholder}
            value={formData.code}
            onChange={onChange}
          />
        )}
        <Button onClick={submitHandler} size="medium" htmlType="submit">
          {formSettings.buttonSettings.text}
        </Button>
      </form>
    </>
  );
}

export default Form;
