import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import FeedList from "../../components/feed-list/feed-list";
import Loader from "../../components/loader/loader";
import { INIT_USER_ORDERS_SOCKET } from "../../services/actions/orders";
import { getModal, getOrdersData } from "../../utils";
import OrderPage from "../order/order";
import styles from "./profile-orders.module.css";

function ProfileOrders() {
  const { userOrders, connectedUser } = useSelector(getOrdersData);
  const { modal } = useSelector(getModal);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: INIT_USER_ORDERS_SOCKET });
  }, []);
  return connectedUser === "success" ? (
    <>
      {(modal || pathname === "/profile/orders") && (
        <div className={styles.content}>
          <FeedList orders={userOrders} />
        </div>
      )}
      <Routes>
        <Route path="/:id" element={<OrderPage storage="userOrders" />} />
      </Routes>
    </>
  ) : (
    <Loader />
  );
}

export default ProfileOrders;
