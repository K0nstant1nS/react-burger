import React, {
  useMemo,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ScrollableConstructContainer from "../scrollable-construct-container/scrollable-construct-container";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { ConstructorContext } from "../../context/constructor-context";
import Api from "../../API";

const sumReducer = (state, action) => {
  switch (action.type) {
    case "SET_SUM":
      return { sum: action.sum };

    default:
      return state;
  }
};

const initialState = {
  sum: 0,
};

function BurgerConstructor() {
  const [orderModal, setOrderModal] = useState();
  const { burgerCreation } = useContext(ConstructorContext);
  const [state, dispatch] = useReducer(sumReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "SET_SUM",
      sum:
        burgerCreation.common.length > 0
          ? burgerCreation.common.reduce((sum, element) => {
              return (sum += element.price);
            }, 0) +
            burgerCreation.bun.price * 2
          : burgerCreation.bun.price * 2,
    });
  }, [burgerCreation]);

  function makeOrder() {
    Api.makeOrder([
      ...burgerCreation.common.map((item) => item._id.toString()),
      burgerCreation.bun._id,
      burgerCreation.bun._id,
    ])
      .then((data) => {
        setOrderModal(data.order.number);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <section className={`pt-25 ${styles.content}`}>
      <ScrollableConstructContainer />
      <div className={`pt-10 ${styles.order}`}>
        <div className={`pr-10 ${styles.cost}`}>
          <span className="text text_type_digits-medium pr-3">{state.sum}</span>
          <div className={styles.icon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          disabled={false}
          htmlType="button"
          type="primary"
          size="large"
          onClick={makeOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {orderModal && (
        <Modal
          closeModal={() => {
            setOrderModal(null);
          }}
        >
          <OrderDetails orderNumber={orderModal} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
