import React, { useMemo } from "react";
import FeedOrder from "../feed-order/feed-order";
import styles from "./feed-list.module.css";

function FeedList({ orders, status }) {
  const feedOrderList = useMemo(
    () =>
      orders.map((item) => {
        const orderStatus = status ? status : item.status;
        return <FeedOrder {...{ ...item, status: orderStatus }} />;
      }),
    [orders]
  );

  return <div className={`${styles.list} pr-2`}>{feedOrderList}</div>;
}

export default FeedList;
