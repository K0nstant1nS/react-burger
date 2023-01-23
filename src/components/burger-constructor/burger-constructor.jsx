import React, { useState, useContext, useReducer, useEffect } from "react";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ScrollableConstructContainer from "../scrollable-construct-container/scrollable-construct-container";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { MAKE_ORDER, CLOSE_MODAL } from "../../services/actions/order-modal";
import { makeOrder } from "../../services/actions/order-modal";
import { useDrop } from "react-dnd/dist/hooks";
import { ADD_CONSTRUCTOR_ELEMENT } from "../../services/actions/constructor";

function BurgerConstructor() {
  const { constructorData, orderData } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      console.log(1);
      dispatch({ type: ADD_CONSTRUCTOR_ELEMENT, ingredient: item });
    },
  });

  return (
    <section ref={dropTarget} className={`pt-25 ${styles.content}`}>
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
      {orderData.modalOpened && (
        <Modal
          closeModal={() => {
            dispatch({ type: CLOSE_MODAL });
          }}
        >
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
