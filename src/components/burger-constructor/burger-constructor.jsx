import React, { useState, useContext, useReducer, useEffect } from "react";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ScrollableConstructContainer from "../scrollable-construct-container/scrollable-construct-container";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import Api from "../../API";
import { useDispatch, useSelector } from "react-redux";
import { MAKE_ORDER } from "../../services/actions/order-modal";
import { makeOrder } from "../../services/actions/order-modal";

function BurgerConstructor() {
  const { constructorData, orderData } = useSelector((store) => store);
  const dispatch = useDispatch();

  /*function makeOrder() {
    Api.makeOrder([
      ...constructorData.common.map((item) => item._id.toString()),
      constructorData.bun._id,
      constructorData.bun._id,
    ])
      .then((data) => {
        dispatch({ type: MAKE_ORDER, order: data.order });
        console.log(orderData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }*/

  return (
    <section className={`pt-25 ${styles.content}`}>
      <ScrollableConstructContainer />
      <div className={`pt-10 ${styles.order}`}>
        <div className={`pr-10 ${styles.cost}`}>
          <span className="text text_type_digits-medium pr-3">
            {constructorData.sum}
          </span>
          <div className={styles.icon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          disabled={false}
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            dispatch(
              makeOrder([
                ...constructorData.common.map((item) => item._id.toString()),
                constructorData.bun._id,
                constructorData.bun._id,
              ])
            );
          }}
        >
          Оформить заказ
        </Button>
      </div>
      {orderData && (
        <Modal
          closeModal={() => {
            dispatch({ type: MAKE_ORDER, order: null });
          }}
        >
          <OrderDetails orderNumber={orderData.number} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
