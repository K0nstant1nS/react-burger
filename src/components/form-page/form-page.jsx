import React from "react";
import styles from "./form-page.module.css";
import Form from "../form/form";
import { v4 as uuid } from "uuid";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../services/auth";

function FormPage({ formSettings, footer, onSubmit }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/profile" />;
  }
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

export default FormPage;
