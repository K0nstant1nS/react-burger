import React, { useRef, useEffect, FC } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import IngredientElement from "../ingredient-element/ingredient-element";
import styles from "./sorted-by-type.module.css";
import { setStartsAction } from "../../services/actions/ingredients-scroll";
import { TSortedByTypeProps } from "../../services/types/data";
import { getIngredientsScroll } from "../../utils";

const SortedByType:FC<TSortedByTypeProps> = ({ type, header, indents = "", data }) => {
  const dispatch = useDispatch();
  const position = useSelector(getIngredientsScroll);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && ref.current.parentElement) {
      dispatch(setStartsAction(type, ref.current.getBoundingClientRect().top - ref.current.parentElement.getBoundingClientRect().top))
    }
  }, [position.bunY, position.mainY, position.sauceY]);
  return (
    <div ref={ref} className={indents}>
      <h1 className="text text_type_main-medium">{header}</h1>
      <div className={`pl-4 pr-2 ${styles.content}`}>
        {data.map((ingredient) => {
          return (
            <IngredientElement key={ingredient._id} ingredient={ingredient} />
          );
        })}
      </div>
    </div>
  );
}

export default SortedByType;
