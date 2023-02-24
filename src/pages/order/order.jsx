import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./order.module.css";

function OrderPage() {
  const { id } = useParams();
  const { orders } = useSelector((store) => store.orders);
  const { ingredients, status, number, createdAt } = orders.find(({ _id }) => {
    return id === _id;
  });

  return (
    <div>
      <div>
        <span>{number}</span>
        <span>Black Hole Singularity острый бургер</span>
        <span>{status}</span>
        <span>Состав:</span>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default OrderPage;
