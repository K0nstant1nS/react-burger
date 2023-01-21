import { SET_INGREDIENT_DETAILS } from "../actions/ingredient-modal";
const initialState = {};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS: {
      return { ...action.ingredient };
    }
    default:
      return state;
  }
};
