import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import IngredientElement from "../ingredient-element/ingredient-element";
import styles from "./sorted-by-type.module.css";
import PropTypes from "prop-types";
import { dataProps } from "../../utils/propTypes";
import { SET_STARTS } from "../../services/actions/ingredients-scroll";

function SortedByType({ type, header, indents = "", data }) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  useEffect(() => {
    if (ref) {
      dispatch({
        type: SET_STARTS,
        containerType: type,
        y:
          ref.current.getBoundingClientRect().top -
          ref.current.parentNode.getBoundingClientRect().top,
      });
    }
  }, [data]);
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

SortedByType.propTypes = {
  header: PropTypes.string.isRequired,
  indents: PropTypes.string,
  data: dataProps,
  type: PropTypes.string.isRequired,
};

export default SortedByType;
