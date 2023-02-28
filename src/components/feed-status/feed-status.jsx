import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getOrdersData } from "../../utils";
import styles from "./feed-status.module.css";

function FeedStatus({ done, inWork }) {
  const { status } = useSelector(getOrdersData);
  let doneList = useMemo(
    () =>
      done.map(({ number }) => (
        <p
          key={number}
          className={`${styles.doneNumbers} text text_type_digits-default pb-2`}
        >
          {number}
        </p>
      )),
    [done]
  );
  if (doneList.length > 10) {
    doneList = doneList.slice(0, 10);
  }

  let inWorkList = useMemo(
    () =>
      inWork.map(({ number }) => {
        return (
          <p key={number} className="text text_type_digits-default pb-2">
            {number}
          </p>
        );
      }),
    [inWork]
  );

  if (inWorkList.length > 10) {
    inWorkList = inWorkList.slice(0, 10);
  }

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
          {status.total}
        </span>
      </div>
      <div className={styles.today}>
        <span className="text text_type_main-medium">
          Выполнено за сегодня:
        </span>
        <span className={`text text_type_digits-large ${styles.digits}`}>
          {status.totalToday}
        </span>
      </div>
    </div>
  );
}

export default FeedStatus;
