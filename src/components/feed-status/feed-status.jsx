import React from "react";
import styles from "./feed-status.module.css";

function FeedStatus({ done, inWork }) {
  const doneList = done.map(({ number }) => {
    return (
      <p className={`${styles.doneNumbers} text text_type_digits-default pb-2`}>
        {number}
      </p>
    );
  });

  const inWorkList = inWork.map(({ number }) => {
    return <p className="text text_type_digits-default pb-2">{number}</p>;
  });

  return (
    <div className={`${styles.container} pl-15`}>
      <div className={`${styles.ready} pb-15`}>
        <span className="text text_type_main-medium pb-6">Готовы:</span>
        <div className={styles.numbersList}>{doneList}</div>
      </div>
      <div className={`${styles.inWork} pb-15`}>
        <span className="text text_type_main-medium pb-6">В работе:</span>
        <div className={styles.numbersList}>{inWorkList}</div>
      </div>
      <div className={`${styles.all} pb-15`}>
        <span className="text text_type_main-medium">
          Выполнено за все время:
        </span>
        <span className={`text text_type_digits-large ${styles.digits}`}>
          {" "}
          144120
        </span>
      </div>
      <div className={styles.today}>
        <span className="text text_type_main-medium">
          Выполнено за сегодня:
        </span>
        <span className={`text text_type_digits-large ${styles.digits}`}>
          1
        </span>
      </div>
    </div>
  );
}

export default FeedStatus;
