import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import styles from "./order-details.module.css";

function OrderDetails() {
  const orderNumber = useSelector((store) => store.orderData.number);
  return (
    <>
      <h2 className={`text text_type_digits-large pt-30 ${styles.id}`}>
        {orderNumber}
      </h2>
      <span className={`text text_type_main-medium pt-8 ${styles.idCapt}`}>
        идентификатор заказа
      </span>
      <div className={`mt-15 ${styles.iconSet}`}>
        <div className={styles.icon}>
          <CheckMarkIcon type="primary" />
        </div>
      </div>
      <span className={`mt-15 text text_type_main-default`}>
        Ваш заказ начали готовить
      </span>
      <span
        className={`mt-2 mb-30 text text_type_main-default ${styles.darker}`}
      >
        Дождитесь готовности на орбитальной станции
      </span>
    </>
  );
}

export default OrderDetails;
