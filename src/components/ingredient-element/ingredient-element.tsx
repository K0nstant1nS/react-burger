import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo, FC } from "react";
import styles from "./ingredient-element.module.css";
import { useSelector, useDispatch } from "../../services/hooks";
import { getStore, openIngredientModal } from "../../utils";
import { useDrag } from "react-dnd";
import { useNavigate } from "react-router-dom";
import { TIngredient, TIngredientElementProps } from "../../services/types/data";

const IngredientElement: FC<TIngredientElementProps> = ({ ingredient }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { constructorData } = useSelector(getStore);
  const onClick = () => {
    openIngredientModal(dispatch);
    navigate(`/ingredients/${ingredient._id}`);
  };
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  const counter = useMemo(() => {
    if (constructorData.bun && ingredient._id === constructorData.bun._id) {
      return 1;
    }
    return constructorData.common.reduce((sum:number, item:TIngredient) => {
      if (item._id === ingredient._id) {
        return (sum += 1);
      }
      return sum;
    }, 0);
  }, [constructorData]);

  return (
    <article
      ref={dragRef}
      className={styles.element}
      onClick={onClick}
    >
      <img src={ingredient.image} className="pb-2"></img>
      <div className={`pb-2 text text_type_digits-default ${styles.price}`}>
        {ingredient.price} <CurrencyIcon type="primary"/>
      </div>
      <span className={`text text_type_main-default ${styles.name}`}>
        {ingredient.name}
      </span>
      <div className={styles.counter}>
        {counter !== 0 && <Counter count={counter} size="default" />}
      </div>
    </article>
  );
}

export default IngredientElement;
