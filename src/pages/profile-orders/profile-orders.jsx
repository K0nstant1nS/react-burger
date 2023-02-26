import React from "react";
import { useSelector } from "react-redux";
import FeedList from "../../components/feed-list/feed-list";
import styles from "./profile-orders.module.css";

function ProfileOrders() {
  const { orders } = useSelector((store) => store.orders);
  return (
    <div className={styles.content}>
      <FeedList orders={orders} />
    </div>
  );
}

export default ProfileOrders;
