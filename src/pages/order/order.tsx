import React, { useCallback, useMemo, FC } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/hooks";
import styles from "./order.module.css";
import { getIngredients, getModal } from "../../utils";
import OrderIngredient from "../../components/order-ingredient/order-ingredient";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../components/modal/modal";
import { REMOVE_ROUTE_MODAL } from "../../services/actions/route-modal";
import { v4 } from "uuid";
import { TIngredient, TOrder, TOrderPageProps } from "../../services/types/data";
import { RootState } from "../../services/types";
import ErrorPage from "../error/error";

const OrderPage: FC<TOrderPageProps>  = ({ storage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector((store) => store.orders[storage].data);
  const { id } = useParams();
  const { data } = useSelector(getIngredients);
  const { pathname } = useLocation();
  const { modal } = useSelector(getModal);
  const order = orders.find((order) => {
    return id === order._id
  });

  if(!order){
    return <ErrorPage />
  }

  const ingredientsArr: Array<TIngredient|undefined> = order.ingredients.map((id) => {
        const item = data.find(({_id}) => {
          return _id === id
        })
        return item 
      })

  const isFeed = pathname.indexOf("/feed") !== -1;
  const sum = ingredientsArr.reduce((sum, item) => {
        return item ? (sum += item.price) : sum;
      }, 0)


  let addedIngredients: Array<string>= [];

  const sortedIngredientsArr = ingredientsArr.reduce((sum: Array<{ingredient: TIngredient, factor:number}>, ingredient) => {
        if(!ingredient){
          return sum
        }
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
      }, [])


  const ingredientsList = sortedIngredientsArr.map((item) => {
        return (
          <OrderIngredient
            key={v4()}
            ingredient={item.ingredient}
            factor={item.factor}
          />
        );
      })

  const closeModal = () => {
    dispatch({ type: REMOVE_ROUTE_MODAL });
    isFeed ? navigate("/feed") : navigate("/profile/orders");
  };

  const renderStatus = () => {
    switch (order.status) {
      case "done": {
        return (
          <span className={`${styles.done} text text_type_main-default pb-15`}>
            выполнен
          </span>
        );
      }
      case "created": {
        return (
          <span className="text text_type_main-default pb-15">Создан</span>
        );
      }
      case "pending": {
        return (
          <span className="text text_type_main-default pb-15">Готовится</span>
        );
      }
    }
  }

  return modal ? (
    <Modal closeModal={closeModal}>
      <div className={styles.page}>
        <div className={styles.container}>
          <span
            className={`${styles.number} text text_type_digits-default pb-10`}
          >
            #{order.number}
          </span>
          <span className="text text_type_main-medium pb-3">
            Black Hole Singularity острый бургер
          </span>
          {renderStatus()}
          <span className="text text_type_main-medium pb-6">Состав:</span>
          <div className={`${styles.ingredients} pr-8`}>{ingredientsList}</div>
          <div className={`${styles.footer} pt-10`}>
            <p className="text text_type_main-default text_color_inactive">
              <FormattedDate date={new Date(order.createdAt)} /> i-GMT+3
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
      <div className={`${styles.container} pt-30 pb-30`}>
        <span
          className={`${styles.number} text text_type_digits-default pb-10`}
        >
          #{order.number}
        </span>
        <span className="text text_type_main-medium pb-3">
          Black Hole Singularity острый бургер
        </span>
        {renderStatus()}
        <span className="text text_type_main-medium pb-6">Состав:</span>
        <div className={`${styles.ingredients} pr-8`}>{ingredientsList}</div>
        <div className={`${styles.footer} pt-10`}>
          <p className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(order.createdAt)} /> i-GMT+3
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
