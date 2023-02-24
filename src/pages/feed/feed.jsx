import React from "react";
import FeedList from "../../components/feed-list/feed-list";
import styles from "./feed.module.css";
import FeedStatus from "../../components/feed-status/feed-status";
import { useSelector } from "react-redux";

function Feed() {
  const { orders } = useSelector((store) => store.orders);

  const done = orders.filter(({ status }) => {
    return status === "done";
  });

  const inWork = orders.filter(({ status }) => {
    return status === "inWork";
  });
  return (
    <main className={`${styles.main} pt-10`}>
      <div className={styles.container}>
        <h1 className="text text_type_main-large">Лента заказов</h1>
      </div>
      <div className={`${styles.contentContainer} pt-5`}>
        <FeedList orders={orders} />
        <FeedStatus done={done} inWork={inWork} />
      </div>
    </main>
  );
}

export default Feed;
