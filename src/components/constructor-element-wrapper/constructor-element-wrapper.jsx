import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-element-wrapper.module.css";
import React from "react";
import { deleteHandler } from "../../utils";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd/dist/hooks";
import { SWAP_IN_CONSTRUCTOR } from "../../services/actions/constructor";

function ConstructorElementWrapper({
  indents,
  type,
  isLocked = false,
  text,
  thumbnail,
  price,
  index,
}) {
  const [{ isDrag }, dragRef] = useDrag({
    type: "constructor",
    item: { index },
    collect: (monitor) => {
      return {
        isDrag: monitor.isDragging(),
      };
    },
  });
  const [, dropTarget] = useDrop({
    accept: "constructor",
    drop(item) {
      dispatch({
        type: SWAP_IN_CONSTRUCTOR,
        dragIndex: item.index,
        dropIndex: index,
      });
    },
  });
  const dispatch = useDispatch();
  const dragProp = {
    ref: type ? null : dragRef,
  };
  const dropProp = {
    ref: type ? null : dropTarget,
  };
  const style = {
    opacity: isDrag ? "0.5" : "1",
  };
  return (
    <div {...dropProp} style={style} className={indents}>
      <div className={styles.wrapperElement} {...dragProp}>
        {!isLocked && <DragIcon type="primary" />}
        <div className={`pl-2 ${styles.constructorElement}`}>
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
    </div>
  );
}

export default ConstructorElementWrapper;
