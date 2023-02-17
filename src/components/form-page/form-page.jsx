import React from "react";
import styles from "./form-page.module.css";
import Form from "../form/form";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

function FormPage({ formSettings, footer }) {
  return (
    <main className={styles.formContainer}>
      <Form formSettings={formSettings} />
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
