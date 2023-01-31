import { ingredientsScrollActions } from "../services/reducers/ingredients-scroll";
import { constructorActions } from "../services/reducers/constructor";

export const handleScrollIniter = (target, dispatch) => {
  return (e) => {
    if (e.target.scrollTop < (target.sauceY + target.bunY) / 2) {
      dispatch(ingredientsScrollActions.scrollOnBun());
    } else if (
      e.target.scrollTop >= (target.sauceY + target.bunY) / 2 &&
      e.target.scrollTop < (target.mainY + target.sauceY) / 2
    ) {
      dispatch(ingredientsScrollActions.scrollOnSauce());
    } else {
      dispatch(ingredientsScrollActions.scrollOnMain());
    }
  };
};

export function openIngredientModal(dispatch, action, ingredient) {
  dispatch(action(ingredient));
}

export function closeIngredientModal(dispatch, action) {
  dispatch(action());
}

export function deleteHandler(dispatch, { index, price }) {
  dispatch(constructorActions.removeElement({ index, price }));
}

export const getStore = (store) => store;

export const getIngredients = (store) => store.ingredients;

export const getOrderNumber = (store) => store.orderData.number;
