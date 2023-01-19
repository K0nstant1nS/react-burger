import React, { useMemo, useState } from "react";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { statesDataProps } from "../../utils/propTypes";
import ScrollableConstructContainer from "../scrollable-construct-container/scrollable-construct-container";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

function BurgerConstructor({ statesData }) {
  const [orderModal, setOrderModal] = useState(null);

  const sum = useMemo(() => {
    return statesData.burgerCreation.common.length > 0
      ? statesData.burgerCreation.common.reduce((sum, element) => {
          return (sum += element.price);
        }, 0) +
          statesData.burgerCreation.bun.price * 2
      : statesData.burgerCreation.bun.price * 2;
  }, [statesData.burgerCreation]);

  function openOrderPopup() {
    setOrderModal(true);
  }

  return (
    <section className={`pt-25 ${styles.content}`}>
      <ScrollableConstructContainer statesData={statesData} />
      <div className={`pt-10 ${styles.order}`}>
        <div className={`pr-10 ${styles.cost}`}>
          <span className="text text_type_digits-medium pr-3">{sum}</span>
          <div className={styles.icon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          disabled={false}
          htmlType="button"
          type="primary"
          size="large"
          onClick={openOrderPopup}
        >
          Оформить заказ
        </Button>
      </div>
      {orderModal && (
        <Modal
          closeModal={() => {
            setOrderModal(false);
          }}
        >
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

BurgerConstructor.propTypes = {
  statesData: statesDataProps,
};

export default BurgerConstructor;
