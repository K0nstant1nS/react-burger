import {
  SET_INGREDIENT_MODAL,
  REMOVE_INGREDIENT_MODAL,
} from "../actions/ingredient-modal";
const initialState = { modal: false };

export const ingredientModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_MODAL: {
      return { modal: true };
    }
    case REMOVE_INGREDIENT_MODAL: {
      return { modal: false };
    }
    default:
      return state;
  }
};
