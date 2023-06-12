import React, { useMemo, FC } from "react";
import IngredientIcon from "../ingredient-icon/ingredient-icon";
import styles from "./images-set.module.css";
import { TImagesSetProps } from "../../services/types/data";

const ImagesSet: FC<TImagesSetProps> = ({ links }) => {
  const images = useMemo(
    () =>
      links.reduce((sum: ReadonlyArray<string>, link) => {
        if(!link){
          return sum
        }
        if (sum.indexOf(link) === -1) {
          return [...sum, link];
        }
        return sum;
      }, []),
    [links]
  );

  const elements = useMemo(
    () =>
      images.map((link, index) => {
        if (index >= 7) {
          return null;
        }
        if (index === 5 && links.length > 6) {
          return (
            <div key={index} className={styles.last}>
              <div className={styles.absoluteWrapper}>
                <IngredientIcon link={link} />
              </div>
              <div className={styles.overlay}></div>
              <span className={`${styles.others} text text_type_main-default`}>
                +{links.length - 5}
              </span>
            </div>
          );
        }
        return (
          <div key={index} className={styles[`default${index}`]}>
            <IngredientIcon link={link} />
          </div>
        );
      }),
    [links]
  );
  return <div className={styles.container}>{elements}</div>;
}

export default ImagesSet;
