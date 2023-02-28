import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getOrdersData, composeList } from "../../utils";
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

  return (
    <div className={`${styles.container} pl-15`}>
      <div className={`${styles.ready} pb-15`}>
        <span className="text text_type_main-medium pb-6">Готовы:</span>
        <div className={styles.numbersList}>
          {composeList(doneList, styles.column)}
        </div>
      </div>
      <div className={`${styles.inWork} pb-15`}>
        <span className="text text_type_main-medium pb-6">В работе:</span>
        <div className={styles.numbersList}>
          {composeList(inWorkList, styles.column)}
        </div>
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

FeedStatus.propTypes = {
  done: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string),
      status: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  inWork: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string),
      status: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

export default FeedStatus;
