import {
  GET_CONSTRUCTOR_DATA_SUCCESS,
  GET_CONSTRUCTOR_DATA_ERROR,
  GET_CONSTRUCTOR_DATA_REQUEST,
} from "./constructor";
import Api from "../../API";
export const GET_INGREDIENTS_DATA_SUCCESS = "GET_INGREDIENTS_DATA_SUCCES";
export const GET_INGREDIENTS_DATA_ERROR = "GET_INGREDIENTS_DATA_ERROR";
export const GET_INGREDIENTS_DATA_REQUEST = "GET_INGREDIENTS_DATA_REQUEST";

export function initData() {
  return (dispatch) => {
    dispatch({ type: GET_CONSTRUCTOR_DATA_REQUEST });
    dispatch({ type: GET_INGREDIENTS_DATA_REQUEST });
    Api.getIngredients()
      .then((data) => {
        const bun = data.data.filter((item) => item.type === "bun")[0];
        const common = data.data.filter((item) => item.type !== "bun");
        dispatch({ type: GET_INGREDIENTS_DATA_SUCCESS, data: data.data });
        dispatch({
          type: GET_CONSTRUCTOR_DATA_SUCCESS,
          bun: bun,
          common: common,
        });
      })
      .catch((err) => {
        dispatch({ type: GET_INGREDIENTS_DATA_ERROR, err: err.message });
        dispatch({ type: GET_CONSTRUCTOR_DATA_ERROR });
      });
  };
}
