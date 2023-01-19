import React, { useMemo, useContext } from "react";
import styles from "./scrollable-construct-container.module.css";
import ConstructorElementWrapper from "../constructor-element-wrapper/constructor-element-wrapper";
import { v4 as uuid } from "uuid";
import { ConstructorContext } from "../../context/constructor-context";

function ScrollableConstructContainer() {
  const { burgerCreation, setBurgerCreation } = useContext(ConstructorContext);

  function deleteHandler(itemIndex) {
    setBurgerCreation({
      ...burgerCreation,
      common: [
        ...burgerCreation.common.slice(0, itemIndex),
        ...burgerCreation.common.slice(itemIndex + 1),
      ],
    });
  }

  const burgerElementsArr = useMemo(() => {
    return burgerCreation.common.map((burgerElement, index) => {
      return (
        <ConstructorElementWrapper
          key={uuid()}
          text={burgerElement.name}
          price={burgerElement.price}
          thumbnail={burgerElement.image}
          index={index}
          handleClose={deleteHandler}
        />
      );
    });
  }, [burgerCreation]);

  return (
    <>
      <ConstructorElementWrapper
        indents="pb-4 pl-4"
        type="top"
        isLocked={true}
        text={burgerCreation.bun.name}
        price={burgerCreation.bun.price}
        thumbnail={burgerCreation.bun.image}
      />
      <div className={`pl-4 pr-2 ${styles.constructor}`}>
        {burgerElementsArr}
      </div>
      <ConstructorElementWrapper
        indents="pt-4 pl-4"
        type="bottom"
        isLocked={true}
        text={burgerCreation.bun.name}
        price={burgerCreation.bun.price}
        thumbnail={burgerCreation.bun.image}
      />
    </>
  );
}

export default ScrollableConstructContainer;
