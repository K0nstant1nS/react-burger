import {
  SCROLL_ON_BUN,
  SCROLL_ON_SAUCE,
  SCROLL_ON_MAIN,
} from "../services/actions/ingredients-scroll";

import {
  SET_INGREDIENT_DETAILS,
  REMOVE_INGREDIENT_DETAILS,
} from "../services/actions/ingredient-modal";

import { REMOVE_CONSTRUCTOR_ELEMENT } from "../services/actions/constructor";

export const handleScrollIniter = (target, dispatch) => {
  return (e) => {
    if (e.target.scrollTop < (target.sauceY + target.bunY) / 2) {
      dispatch({ type: SCROLL_ON_BUN });
    } else if (
      e.target.scrollTop >= (target.sauceY + target.bunY) / 2 &&
      e.target.scrollTop < (target.mainY + target.sauceY) / 2
    ) {
      dispatch({ type: SCROLL_ON_SAUCE });
    } else {
      dispatch({ type: SCROLL_ON_MAIN });
    }
  };
};

export function openIngredientModal(dispatch, ingredient) {
  dispatch({ type: SET_INGREDIENT_DETAILS, ingredient });
}

export function closeIngredientModal(dispatch) {
  dispatch({ type: REMOVE_INGREDIENT_DETAILS });
}

export function deleteHandler(dispatch, { index, price }) {
  dispatch({
    type: REMOVE_CONSTRUCTOR_ELEMENT,
    index,
    price,
  });
}

export const getStore = (store) => store;

export const getIngredients = (store) => store.ingredients;
