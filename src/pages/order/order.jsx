import React, { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./order.module.css";
import { getIngredients, getModal } from "../../utils";
import OrderIngredient from "../../components/order-ingredient/order-ingredient";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../components/modal/modal";
import { REMOVE_INGREDIENT_MODAL } from "../../services/actions/ingredient-modal";
import Feed from "../feed/feed";
import ProfilePage from "../profile/profile";
import ProfileOrders from "../profile-orders/profile-orders";

function OrderPage({ storage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const orders = useSelector((store) => store.orders[storage]);
  console.log(orders);
  const { data } = useSelector(getIngredients);
  const { ingredients, status, number, createdAt } = orders.find(({ _id }) => {
    return id === _id;
  });
  const { pathname } = useLocation();
  const { modal } = useSelector(getModal);
  let addedIngredients = [];
  let ingredientsArr = useMemo(
    () =>
      ingredients.map((id) => {
        return data.find(({ _id }) => {
          return _id === id;
        });
      }),
    [ingredients]
  );

  const isFeed = pathname.indexOf("/feed") !== -1;
  const sum = useMemo(
    () =>
      ingredientsArr.reduce((sum, { price }) => {
        return (sum += price);
      }, 0),
    [ingredientsArr]
  );

  ingredientsArr = useMemo(
    () =>
      ingredientsArr.reduce((sum, ingredient) => {
        if (addedIngredients.indexOf(ingredient._id) === -1) {
          if (ingredient.type === "bun") {
            addedIngredients.push(ingredient._id);
            return [{ ingredient: ingredient, factor: 1 }, ...sum];
          } else {
            addedIngredients.push(ingredient._id);
            return [...sum, { ingredient: ingredient, factor: 1 }];
          }
        } else {
          return sum.map((item) => {
            if (item.ingredient._id === ingredient._id) {
              return { ...item, factor: item.factor + 1 };
            }
            return item;
          });
        }
      }, []),
    [ingredientsArr]
  );

  const ingredientsList = useMemo(
    () =>
      ingredientsArr.map((item) => {
        return (
          <OrderIngredient ingredient={item.ingredient} factor={item.factor} />
        );
      }),
    [ingredientsArr]
  );

  const closeModal = () => {
    dispatch({ type: REMOVE_INGREDIENT_MODAL });
    isFeed ? navigate("/feed") : navigate("/profile/orders");
  };

  return modal ? (
    <Modal closeModal={closeModal}>
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
            <span
              className={`${styles.done} text text_type_main-default pb-15`}
            >
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
    </Modal>
  ) : (
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
