import React, {FC} from "react";
import ErrorReport from "../../components/error-report/error-report";
import styles from "./error.module.css";

const ErrorPage: FC = () => {
  return (
    <div className={styles.container}>
      <ErrorReport />
    </div>
  );
}

export default ErrorPage;
