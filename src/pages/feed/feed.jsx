import React from "react";
import FeedList from "../../components/feed-list/feed-list";
import styles from "./feed.module.css";
import FeedStatus from "../../components/feed-status/feed-status";
import { useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import OrderPage from "../order/order";
import { getModal } from "../../utils";

function Feed() {
  const { orders } = useSelector((store) => store.orders);
  const { pathname } = useLocation();
  const { modal } = useSelector(getModal);

  const done = orders.filter(({ status }) => {
    return status === "done";
  });

  const inWork = orders.filter(({ status }) => {
    return status === "inWork";
  });
  return (
    <>
      {(modal || pathname === "/feed") && (
        <main className={`${styles.main} pt-10`}>
          <div className={styles.container}>
            <h1 className="text text_type_main-large">Лента заказов</h1>
          </div>
          <div className={`${styles.contentContainer} pt-5`}>
            <div className={styles.feedListContainer}>
              <FeedList orders={orders} />
            </div>
            <FeedStatus done={done} inWork={inWork} />
          </div>
        </main>
      )}
      <Routes>
        <Route path="/:id" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default Feed;
