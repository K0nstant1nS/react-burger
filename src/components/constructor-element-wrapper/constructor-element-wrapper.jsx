import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-element-wrapper.module.css";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { deleteHandler } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd/dist/hooks";
import { constructorActions } from "../../services/reducers/constructor";

function ConstructorElementWrapper({
  indents,
  type,
  isLocked = false,
  text,
  thumbnail,
  price,
  index,
}) {
  const { dragItem, overItem, dragIndex, overIndex } = useSelector(
    (store) => store.constructorData
  );
  const [{ isDrag }, dragRef] = useDrag({
    type: "constructor",
    item: { index },
    collect: (monitor) => {
      return {
        isDrag: monitor.isDragging(),
      };
    },
  });

  const [{ isOver }, dropRef] = useDrop({
    accept: "constructor",
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
      };
    },
    drop(item) {
      dispatch(constructorActions.swap(item));
    },
  });

  useEffect(() => {
    if (isDrag) {
      dispatch(constructorActions.setDragItem(index));
    }
  }, [isDrag]);

  useEffect(() => {
    if (isOver) {
      dispatch(constructorActions.setOverItem(index));
    }
  }, [isOver]);

  const dispatch = useDispatch();
  const dragProp = {
    ref: type ? null : dragRef,
  };

  const dropProp = {
    ref: type ? null : dropRef,
  };

  const style = {
    opacity: isDrag ? "0.5" : "1",
  };
  return (
    <div {...dropProp} style={style} className={indents}>
      <div className={styles.wrapperElement} {...dragProp}>
        {!isLocked && <DragIcon type="primary" />}
        <div className={`pl-2 ${styles.constructorElement}`}>
          {index === dragIndex ? (
            <ConstructorElement
              type={type}
              isLocked={isLocked}
              text={overItem.name}
              thumbnail={overItem.image}
              price={overItem.price}
              handleClose={() => deleteHandler(dispatch, { index, price })}
            />
          ) : index === overIndex ? (
            <ConstructorElement
              type={type}
              isLocked={isLocked}
              text={dragItem.name}
              thumbnail={dragItem.image}
              price={dragItem.price}
              handleClose={() => deleteHandler(dispatch, { index, price })}
            />
          ) : (
            <ConstructorElement
              type={type}
              isLocked={isLocked}
              text={text}
              thumbnail={thumbnail}
              price={price}
              handleClose={() => deleteHandler(dispatch, { index, price })}
            />
          )}
        </div>
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
