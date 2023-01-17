import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-element-wrapper.module.css";
import React from "react";
import PropTypes from "prop-types";

function ConstructorElementWrapper({
  indents,
  type,
  isLocked = false,
  text,
  thumbnail,
  price,
  index,
  handleClose,
}) {
  return (
    <div className={`${indents} ${styles.wrapperElement}`}>
      {!isLocked && <DragIcon type="primary" />}
      <div className={`pl-2 ${styles.constructorElement}`}>
        <ConstructorElement
          type={type}
          isLocked={isLocked}
          text={text}
          thumbnail={thumbnail}
          price={price}
          handleClose={() => handleClose(index)}
        />
      </div>
    </div>
  );
}

ConstructorElementWrapper.propTypes = {
  indents: PropTypes.string,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number,
  handleClose: PropTypes.func,
};

export default ConstructorElementWrapper;
