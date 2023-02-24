import React from "react";
import FeedOrder from "../feed-order/feed-order";
import styles from "./feed-list.module.css";

function FeedList({ orders }) {
  const feedOrderList = orders.map((item) => {
    return <FeedOrder {...item} status={false} />;
  });

  return <div className={`${styles.list} pr-2`}>{feedOrderList}</div>;
}

export default FeedList;
