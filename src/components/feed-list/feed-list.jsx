import React, { useMemo } from "react";
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

export default FeedList;
