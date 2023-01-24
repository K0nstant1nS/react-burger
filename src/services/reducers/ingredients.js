import {
  GET_INGREDIENTS_DATA_SUCCES,
  GET_INGREDIENTS_DATA_ERROR,
  GET_INGREDIENTS_DATA_REQUEST,
} from "../actions/ingredients";

const initialState = {
  status: null,
  data: [],
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_DATA_SUCCES: {
      return { ...state, status: "success", data: action.data };
    }
    case GET_INGREDIENTS_DATA_ERROR: {
      console.log(action.err);
      return { ...state, status: "failed" };
    }
    case GET_INGREDIENTS_DATA_REQUEST: {
      return { ...state, status: "loading" };
    }
    default:
      return state;
  }
};
