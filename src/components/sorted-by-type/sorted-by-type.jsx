import React, { useRef } from "react";
import IngredientElement from "../ingredient-element/ingredient-element";
import styles from "./sorted-by-type.module.css";
import PropTypes from "prop-types";
import { dataProps } from "../../utils/propTypes";

function SortedByType({ header, indents = "", data }) {
  const ref = useRef(null);
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
};

export default SortedByType;
