import React from "react";
import ErrorReport from "../../components/error-report/error-report";
import styles from "./error.module.css";

function ErrorPage() {
  return (
    <div className={styles.container}>
      <ErrorReport />
    </div>
  );
}

export default ErrorPage;
