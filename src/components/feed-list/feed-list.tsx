import React, { useMemo, FC } from "react";
import FeedOrder from "../feed-order/feed-order";
import styles from "./feed-list.module.css";
import { TFeedListProps } from "../../services/types/data";

const FeedList:FC<TFeedListProps> = ({ orders, status }) => {
  const feedOrderList = useMemo(
    () =>
      orders.map((item) => {
        const orderStatus = status ? status : item.status;
        return <FeedOrder key={item.number} {...{ ...item, status: orderStatus }} />;
      }),
    [orders]
  );

  return <div className={`${styles.list} pr-2`}>{feedOrderList}</div>;
}

export default FeedList;
