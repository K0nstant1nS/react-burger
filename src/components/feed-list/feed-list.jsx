import React, { useMemo } from "react";
import PropTypes from "prop-types";
import FeedOrder from "../feed-order/feed-order";
import styles from "./feed-list.module.css";
import { v4 } from "uuid";

function FeedList({ orders, status }) {
  const feedOrderList = useMemo(
    () =>
      orders.map((item) => {
        const orderStatus = status ? status : item.status;
        return <FeedOrder key={v4()} {...{ ...item, status: orderStatus }} />;
      }),
    [orders]
  );

  return <div className={`${styles.list} pr-2`}>{feedOrderList}</div>;
}

FeedList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string),
      status: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      number: PropTypes.number,
    })
  ).isRequired,
  status: PropTypes.string,
};

export default FeedList;
