import React from "react";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ScrollableConstructContainer from "../scrollable-construct-container/scrollable-construct-container";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { makeOrder } from "../../services/thunk/order-modal";
import { useDrop } from "react-dnd/dist/hooks";
import { constructorActions } from "../../services/reducers/constructor";
import { getStore } from "../../utils";
import { orderActions } from "../../services/reducers/order-modal";

function BurgerConstructor() {
  const { constructorData, orderData } = useSelector(getStore);
  const dispatch = useDispatch();
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      //dispatch({ type: ADD_CONSTRUCTOR_ELEMENT, ingredient: item });
      dispatch(constructorActions.addElement({ ingredient: item }));
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
            dispatch(orderActions.closeModal());
          }}
        >
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
