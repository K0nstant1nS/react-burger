import React, { useRef, useEffect, FC } from "react";
import { useDispatch } from "../../services/hooks";
import IngredientElement from "../ingredient-element/ingredient-element";
import styles from "./sorted-by-type.module.css";
import { SET_STARTS } from "../../services/actions/ingredients-scroll";
import { TSortedByTypeProps } from "../../services/types/data";

const SortedByType:FC<TSortedByTypeProps> = ({ type, header, indents = "", data }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && ref.current.parentElement) {
      dispatch({
        type: SET_STARTS,
        containerType: type,
        y:
          ref.current.getBoundingClientRect().top -
          ref.current.parentElement.getBoundingClientRect().top,
      });
    }
  }, []);
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
