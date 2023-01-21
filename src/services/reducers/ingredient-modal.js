import {
  SET_INGREDIENT_DETAILS,
  REMOVE_INGREDIENT_DETAILS,
} from "../actions/ingredient-modal";
const initialState = null;

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS: {
      return { ...action.ingredient };
    }
    case REMOVE_INGREDIENT_DETAILS: {
      return null;
    }
    default:
      return state;
  }
};
