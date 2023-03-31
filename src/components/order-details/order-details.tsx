import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../services/hooks";
import React, { FC } from "react";
import styles from "./order-details.module.css";
import { getOrderData } from "../../utils";
import Loader from "../loader/loader";

const OrderDetails: FC = () => {
  const { number, status } = useSelector(getOrderData);
  return status === "error" ? (
    <>
      <p className={`${styles.errorTop} mt-30 mb-15 text text_type_main-large`}>
        произошла ошибка
      </p>
      <p
        className={`${styles.errorBottom} mb-30 text text_type_main-medium text_color_inactive`}
      >
        поробуйте повторить попытку
      </p>
    </>
  ) : (
    <>
      {status === "success" && (
        <>
          <h2 className={`text text_type_digits-large pt-30 ${styles.id}`}>
            {number}
          </h2>
          <span className={`text text_type_main-medium pt-8 ${styles.idCapt}`}>
            идентификатор заказа
          </span>
          <div className={`mt-15 ${styles.iconSet}`}>
            <div className={styles.icon}>
              <CheckMarkIcon type="primary" />
            </div>
          </div>
        </>
      )}
      {status === "pending" && <Loader className="mt-30 mb-15" />}
      <span className={`mt-15 text text_type_main-default`}>
        {status === "success" && "Ваш заказ готов"}
        {status === "pending" && "Дождитесь подтверждения заказа"}
      </span>
      <span
        className={`mt-2 mb-30 text text_type_main-default ${styles.darker}`}
      >
        {status === "pending" && "Ожидайте готовности на орбитальной станции"}
        {status === "success" && "Получите заказ на орбитальной станции"}
      </span>
    </>
  );
};

export default OrderDetails;
