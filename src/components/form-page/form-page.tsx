import React, { useEffect, FC } from "react";
import styles from "./form-page.module.css";
import { useDispatch } from "../../services/hooks";
import Form from "../form/form";
import { Link } from "react-router-dom";
import { removeErrorAction } from "../../services/actions/form-errors";
import { TFormPageProps } from "../../services/types/data";

const FormPage:FC<TFormPageProps> = ({ formSettings, footer, onSubmit }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeErrorAction());
  }, []);
  return (
    <main className={styles.formContainer}>
      <Form formSettings={formSettings} onSubmit={onSubmit} />
      {footer && (
        <div className={`pt-20 ${styles.linksContainer}`}>
          {footer.map((item) => {
            return (
              <p
                key={item.text}
                className="pb-4 text text_type_main-default text_color_inactive"
              >
                {item.text}{" "}
                <Link to={item.linkTo} className={styles.link}>
                  {item.linkText}
                </Link>
              </p>
            );
          })}
        </div>
      )}
    </main>
  );
}

export default FormPage;
