import React, { useMemo } from "react";
import PropTypes from "prop-types";
import IngredientIcon from "../ingredient-icon/ingredient-icon";
import styles from "./images-set.module.css";
import { v4 } from "uuid";

function ImagesSet({ links }) {
  const elements = useMemo(
    () =>
      links.map((link, index) => {
        if (index >= 7) {
          return null;
        }
        if (index === 5 && links.length > 6) {
          return (
            <div key={v4()} className={styles.last}>
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
          <div key={v4()} className={styles[`default${index}`]}>
            <IngredientIcon link={link} />
          </div>
        );
      }),
    [links]
  );
  return <div className={styles.container}>{elements}</div>;
}

ImagesSet.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

export default ImagesSet;
