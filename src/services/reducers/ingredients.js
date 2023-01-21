import { SET_INGREDIENTS_DATA } from "../actions/ingredients";

const initialState = [];

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS_DATA: {
      return action.data;
    }
    default:
      return state;
  }
};
