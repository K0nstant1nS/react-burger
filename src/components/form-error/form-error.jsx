import React from "react";
import styles from "./form-error.module.css";
import { useSelector } from "react-redux";
import { getFormError } from "../../utils";

function FormError() {
  const { errorMessage } = useSelector(getFormError);
  return (
    <p className={`text text_type_main-default ${styles.error}`}>
      {errorMessage}
    </p>
  );
}

export default FormError;
