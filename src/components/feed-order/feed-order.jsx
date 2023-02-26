import React from "react";
import styles from "./feed-order.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { SET_INGREDIENT_MODAL } from "../../services/actions/ingredient-modal";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients, getModal } from "../../utils";
import ImagesSet from "../images-set/images-set";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../modal/modal";

function FeedOrder({ status, ingredients, _id, number, createdAt, updatedAt }) {
  const { data } = useSelector(getIngredients);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch({ type: SET_INGREDIENT_MODAL });
    pathname === "/feed"
      ? navigate(`/feed/${_id}`)
      : navigate(`/profile/orders/${_id}`);
  };

  const ingredientsArr = ingredients.map((id) => {
    return data.find(({ _id }) => {
      return _id === id;
    });
  });

  console.log(ingredientsArr);

  const imagesArr = ingredientsArr.map(({ image }) => {
    return image;
  });
  const sum = ingredientsArr.reduce((sum, { price, type }) => {
    if (type === "bun") {
      return (sum += price * 2);
    }
    return (sum += price);
  }, 0);
  return (
    <article
      onClick={onClick}
      to={`/feed/${_id}`}
      className={`${styles.order} mb-4`}
    >
      <div className={`${styles.orderString} pt-6 pr-6 pl-6`}>
        <span className="text text_type_digits-default">#{number}</span>
        <span className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(createdAt)} /> i-GMT+3
        </span>
      </div>
      <div
        className={`${styles.orderString} pt-6 pr-6 pl-6 text text_type_main-medium`}
      >
        Death Star Starship Main бургер
      </div>
      {status && <div></div>}
      <div className={`${styles.orderString} p-6 `}>
        <div>
          <ImagesSet links={imagesArr} />
        </div>
        <div className={styles.cost}>
          <span className="text text_type_digits-default">{sum}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  );
}

export default FeedOrder;
