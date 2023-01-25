import React, { useMemo } from "react";
import styles from "./scrollable-construct-container.module.css";
import ConstructorElementWrapper from "../constructor-element-wrapper/constructor-element-wrapper";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import { getStore } from "../../utils";

function ScrollableConstructContainer() {
  const { constructorData } = useSelector(getStore);

  const burgerElementsArr = useMemo(() => {
    return constructorData.common.map((burgerElement, index) => {
      return (
        <ConstructorElementWrapper
          key={uuid()}
          text={burgerElement.name}
          price={burgerElement.price}
          thumbnail={burgerElement.image}
          index={index}
          indents="pt-4"
        />
      );
    });
  }, [constructorData]);

  return (
    <>
      <ConstructorElementWrapper
        indents="pl-4"
        type="top"
        isLocked={true}
        text={`${constructorData.bun.name}(верх)`}
        price={constructorData.bun.price}
        thumbnail={constructorData.bun.image}
      />
      <div className={`pl-4 pr-2 ${styles.constructor}`}>
        {burgerElementsArr}
      </div>
      <ConstructorElementWrapper
        indents="pt-4 pl-4"
        type="bottom"
        isLocked={true}
        text={`${constructorData.bun.name}(низ)`}
        price={constructorData.bun.price}
        thumbnail={constructorData.bun.image}
      />
    </>
  );
}

export default ScrollableConstructContainer;
