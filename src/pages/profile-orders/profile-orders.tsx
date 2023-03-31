import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { Route, Routes, useLocation } from "react-router-dom";
import FeedList from "../../components/feed-list/feed-list";
import Loader from "../../components/loader/loader";
import {
  CLOSE_USER_ORDERS_SOCKET,
  INIT_USER_ORDERS_SOCKET,
} from "../../services/actions/orders";
import { getModal, getOrdersData } from "../../utils";
import OrderPage from "../order/order";
import styles from "./profile-orders.module.css";

const ProfileOrders: FC = () => {
  const { userOrders } = useSelector(getOrdersData);
  const { modal } = useSelector(getModal);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: INIT_USER_ORDERS_SOCKET });
    return () => {
      dispatch({ type: CLOSE_USER_ORDERS_SOCKET });
    };
  }, []);
  return userOrders.status ? (
    <>
      {(modal || pathname === "/profile/orders") && (
        <div className={styles.content}>
          <FeedList orders={userOrders.data} />
        </div>
      )}
      <Routes>
        <Route path="/:id" element={<OrderPage storage="userOrders" />} />
      </Routes>
    </>
  ) : (
    <div className={styles.loader}>
      <Loader />
    </div>
  );
}

export default ProfileOrders;
