import React, { useMemo } from "react";
import PropTypes from "prop-types";
import FeedOrder from "../feed-order/feed-order";
import styles from "./feed-list.module.css";
import { v4 } from "uuid";
import { orderProps } from "../../utils/propTypes";

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
  orders: PropTypes.arrayOf(orderProps).isRequired,
  status: PropTypes.string,
};

export default FeedList;
