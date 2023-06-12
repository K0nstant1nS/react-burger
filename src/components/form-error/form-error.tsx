import React, { FC } from "react";
import styles from "./form-error.module.css";
import { useSelector } from "../../services/hooks";
import { getFormError } from "../../utils";

const FormError: FC = () => {
  const { errorMessage } = useSelector(getFormError);
  return (
    <p className={`text text_type_main-default ${styles.error}`}>
      {errorMessage}
    </p>
  );
}

export default FormError;
