import React, { FC } from "react";
import styles from "./error-report.module.css";

const ErrorReport: FC = () => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-large">
        Произошла ошибка при загрузке данных, попробуйте зайти позднее =)
      </p>
    </div>
  );
}

export default ErrorReport;
