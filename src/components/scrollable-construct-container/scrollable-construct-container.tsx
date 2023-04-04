import React, { useMemo, FC } from "react";
import styles from "./scrollable-construct-container.module.css";
import ConstructorElementWrapper from "../constructor-element-wrapper/constructor-element-wrapper";
import { useSelector } from "../../services/hooks";
import { getStore } from "../../utils";

const ScrollableConstructContainer: FC = () => {
  const { constructorData } = useSelector(getStore);

  const burgerElementsArr = useMemo(() => {
    return constructorData.common.map((burgerElement, index) => {
      return (
        <ConstructorElementWrapper
          key={burgerElement.keyId}
          text={burgerElement.name}
          price={burgerElement.price}
          thumbnail={burgerElement.image}
          index={index}
          indents={index === 0 ? "" : "pt-4"}
        />
      );
    });
  }, [constructorData]);

  return (
    (constructorData.bun || constructorData.common.length) ?  <>
    {constructorData.bun &&
      <ConstructorElementWrapper
        indents="pl-4 pb-4"
        type="top"
        isLocked={true}
        text={`${constructorData.bun.name}(верх)`}
        price={constructorData.bun.price}
        thumbnail={constructorData.bun.image}
      />}
      <div className={`pl-4 pr-2 ${styles.constructor}`}>
        {burgerElementsArr}
      </div>
    {constructorData.bun && 
      <ConstructorElementWrapper
        indents="pt-4 pl-4"
        type="bottom"
        isLocked={true}
        text={`${constructorData.bun.name}(низ)`}
        price={constructorData.bun.price}
        thumbnail={constructorData.bun.image}
      />}
    </> :
    <div className={styles.empty}>
      <p className={`${styles.emptyMessage} text text_type_main-default`}>Перетащите игредиенты в конструктор</p>
    </div>
  );
}

export default ScrollableConstructContainer;
