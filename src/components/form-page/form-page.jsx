import React, { useEffect } from "react";
import styles from "./form-page.module.css";
import { useSelector, useDispatch } from "react-redux";
import Form from "../form/form";
import { v4 as uuid } from "uuid";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { REMOVE_ERROR } from "../../services/actions/form-errors";

function FormPage({ formSettings, footer, onSubmit }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: REMOVE_ERROR });
  }, []);
  return (
    <main className={styles.formContainer}>
      <Form formSettings={formSettings} onSubmit={onSubmit} />
      {footer && (
        <div className={`pt-20 ${styles.linksContainer}`}>
          {footer.map((item) => {
            return (
              <p
                key={uuid()}
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

FormPage.propTypes = {
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
  footer: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
    })
  ),
  onSubmit: PropTypes.func.isRequired,
};

export default FormPage;
