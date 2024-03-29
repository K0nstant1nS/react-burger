import React, { useEffect, useMemo, FC } from "react";
import FeedList from "../../components/feed-list/feed-list";
import styles from "./feed.module.css";
import FeedStatus from "../../components/feed-status/feed-status";
import { useDispatch, useSelector } from "../../services/hooks";
import { Routes, Route, useLocation } from "react-router-dom";
import OrderPage from "../order/order";
import { getModal, getOrdersData } from "../../utils";
import {
  closeOrdersSocketAction,
  initOrdersSocketAction,
} from "../../services/actions/orders";
import Loader from "../../components/loader/loader";

const Feed: FC = () => {
  const { orders } = useSelector(getOrdersData);
  const { pathname } = useLocation();
  const { modal } = useSelector(getModal);
  const dispatch = useDispatch();


  const done = useMemo(
    () =>
      orders.data.filter(({ status }) => {
        return status === "done";
      }),
    [orders]
  );

  const inWork = useMemo(
    () =>
      orders.data.filter(({ status }) => {
        return status !== "done";
      }),
    [orders]
  );

  useEffect(() => {
    dispatch(initOrdersSocketAction("/all"))
    return () => {
      dispatch(closeOrdersSocketAction());
    };
  }, []);

  return orders.status ? (
    <>
      {(modal || pathname === "/feed") && (
        <main className={`${styles.main} pt-10`}>
          <div className={styles.container}>
            <h1 className="text text_type_main-large">Лента заказов</h1>
          </div>
          <div className={`${styles.contentContainer} pt-5`}>
            <div className={styles.feedListContainer}>
              <FeedList orders={orders.data} status="ignore" />
            </div>
            <FeedStatus done={done} inWork={inWork} />
          </div>
        </main>
      )}
      <Routes>
        <Route path="/:id" element={<OrderPage storage="orders" />} />
      </Routes>
    </>
  ) : (
    <div className={styles.loader}>
      <Loader />
    </div>
  );
}

export default Feed;
