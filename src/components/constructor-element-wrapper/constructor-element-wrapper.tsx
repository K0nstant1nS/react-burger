import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-element-wrapper.module.css";
import React, { FC } from "react";
import { deleteHandler } from "../../utils";
import { useDispatch } from "../../services/hooks";
import { useDrag, useDrop } from "react-dnd/dist/hooks";
import { SWAP_IN_CONSTRUCTOR } from "../../services/actions/constructor";
import { TConstructorElementWrapperProps } from "../../services/types/data";
import { DragSourceMonitor } from "react-dnd";

const ConstructorElementWrapper:FC<TConstructorElementWrapperProps> = ({
  indents,
  type,
  isLocked = false,
  text,
  thumbnail,
  price,
  index,
}) => {

  const dispatch = useDispatch();

  const [{ isDrag }, dragRef] = useDrag({
    type: "constructor",
    item: { index },
    collect: (monitor:DragSourceMonitor) => {
      return {
        isDrag: monitor.isDragging(),
      };
    },
  });

  const [, dropTarget] = useDrop({
    accept: "constructor",
    drop(item: {index:number}) {
      index && dispatch({
        type: SWAP_IN_CONSTRUCTOR,
        dragIndex: item.index,
        dropIndex: index,
      });
    },
  });
  const dragProp = {
    ref: type ? null : dragRef,
  };
  const dropProp = {
    ref: type ? null : dropTarget,
  };
  const style = {
    opacity: isDrag ? "0.5" : "1",
  };
  const handleClose = {
    handleClose: index === 0 || index ? () => deleteHandler(dispatch, { index, price }) : undefined
  }
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
            {...handleClose}
          />
        </div>
      </div>
    </div>
  );
}

export default ConstructorElementWrapper;
