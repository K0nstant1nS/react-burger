import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./order.module.css";
import { getIngredients } from "../../utils";
import OrderIngredient from "../../components/order-ingredient/order-ingredient";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

function OrderPage() {
  const { id } = useParams();
  const { orders } = useSelector((store) => store.orders);
  const { data } = useSelector(getIngredients);
  const { ingredients, status, number, createdAt } = orders.find(({ _id }) => {
    return id === _id;
  });
  const ingredientsArr = ingredients.map((id) => {
    return data.find(({ _id }) => {
      return _id === id;
    });
  });
  const sum = ingredientsArr.reduce((sum, { price, type }) => {
    if (type === "bun") {
      return (sum += price * 2);
    }
    return (sum += price);
  }, 0);
  const ingredientsList = ingredientsArr.map((ingredient) => {
    return <OrderIngredient ingredient={ingredient} />;
  });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <span
          className={`${styles.number} text text_type_digits-default pb-10`}
        >
          #{number}
        </span>
        <span className="text text_type_main-medium pb-3">
          Black Hole Singularity острый бургер
        </span>
        {status === "done" && (
          <span className={`${styles.done} text text_type_main-default pb-15`}>
            выполнен
          </span>
        )}
        <span className="text text_type_main-medium pb-6">Состав:</span>
        <div className={`${styles.ingredients} pr-8`}>{ingredientsList}</div>
        <div className={`${styles.footer} pt-10`}>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(createdAt)} /> i-GMT+3
          </p>
          <div className={styles.cost}>
            <span className="text text_type_digits-default">{sum}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
