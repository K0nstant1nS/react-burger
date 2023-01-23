import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-element-wrapper.module.css";
import React from "react";
import PropTypes from "prop-types";
import { deleteHandler } from "../../services/actions/constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd/dist/hooks";

function ConstructorElementWrapper({
  indents,
  type,
  isLocked = false,
  text,
  thumbnail,
  price,
  index,
}) {
  const [, dragRef] = useDrag({
    type: "constructor",
    item: index,
  });
  const [, dropTarget] = useDrop({
    accept: "constructor",
    drop(item) {
      dispatch();
    },
  });
  const dispatch = useDispatch();
  return (
    <div ref={dragRef} className={`${indents} ${styles.wrapperElement}`}>
      {!isLocked && <DragIcon type="primary" />}
      <div ref={dropTarget} className={`pl-2 ${styles.constructorElement}`}>
        <ConstructorElement
          type={type}
          isLocked={isLocked}
          text={text}
          thumbnail={thumbnail}
          price={price}
          handleClose={() => deleteHandler(dispatch, { index, price })}
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
