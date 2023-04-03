import {
  GET_INGREDIENTS_DATA_SUCCESS,
  GET_INGREDIENTS_DATA_ERROR,
  GET_INGREDIENTS_DATA_REQUEST,
  TIngredientsActions,
} from "../actions/ingredients";
import { TIngredient, TStatus } from "../types/data";
import {Reducer} from "redux"

export type TIngredientsState = {
  status: TStatus;
  data: Array<TIngredient>
}

const initialState:TIngredientsState = {
  status: "loading",
  data: [],
};

export const ingredientsReducer: Reducer<TIngredientsState, TIngredientsActions> = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_DATA_SUCCESS: {
      return { ...state, status: "success", data: action.data };
    }
    case GET_INGREDIENTS_DATA_ERROR: {
      console.log(action.err);
      return { ...initialState, status: "failed" };
    }
    case GET_INGREDIENTS_DATA_REQUEST: {
      return { ...state, status: "loading" };
    }
    default:
      return state;
  }
};
