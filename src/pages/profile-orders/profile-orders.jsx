import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import FeedList from "../../components/feed-list/feed-list";
import { getModal } from "../../utils";
import OrderPage from "../order/order";
import styles from "./profile-orders.module.css";

function ProfileOrders() {
  const { orders } = useSelector((store) => store.orders);
  const { modal } = useSelector(getModal);
  const { pathname } = useLocation();
  return (
    <>
      {(modal || pathname === "/profile/orders") && (
        <div className={styles.content}>
          <FeedList orders={orders} />
        </div>
      )}
      <Routes>
        <Route path="/:id" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default ProfileOrders;
