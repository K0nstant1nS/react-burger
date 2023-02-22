import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./form.module.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { initFormState } from "../../utils";

function Form({ formSettings, onSubmit }) {
  const [formData, setFormData] = useState(initFormState(formSettings));

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.dataset.type]: e.target.value });
  };

  function submitHandler(e) {
    e.preventDefault();
    onSubmit(formData);
  }
  return (
    <>
      <h1 className="text text_type_main-medium pb-6">{formSettings.title}</h1>
      <form className={styles.form} onSubmit={submitHandler}>
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
        {formSettings.token && (
          <PasswordInput
            placeholder={formSettings.code.placeholder}
            value={formData.token}
            onChange={onChange}
            data-type={"token"}
          />
        )}
        <Button size="medium" htmlType="submit">
          {formSettings.buttonSettings.text}
        </Button>
      </form>
    </>
  );
}

Form.propTypes = {
  formSettings: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.shape({
      placeholder: PropTypes.string,
    }),
    email: PropTypes.shape({
      placeholder: PropTypes.string,
    }),
    password: PropTypes.shape({
      placeholder: PropTypes.string,
    }),
    code: PropTypes.shape({
      placeholder: PropTypes.string,
    }),
    buttonSetting: PropTypes.shape({
      text: PropTypes.string,
    }),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
