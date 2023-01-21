export const SET_INGREDIENT_DETAILS = "SET_INGREDIENT_DETAILS";
export const REMOVE_INGREDIENT_DETAILS = "REMOVE_INGREDIENT_DETAILS";

export function openIngredientModal(dispatch, ingredient) {
  dispatch({ type: SET_INGREDIENT_DETAILS, ingredient });
}

export function closeIngredientModal(dispatch) {
  dispatch({ type: REMOVE_INGREDIENT_DETAILS });
}
