import {
  GET_CONSTRUCTOR_DATA_SUCCESS,
  GET_CONSTRUCTOR_DATA_ERROR,
  GET_CONSTRUCTOR_DATA_REQUEST,
} from "./constructor";
import Api from "../../API";
import { AppDispatch, AppThunk } from "../types";
import { TIngredient } from "../types/data";
export const GET_INGREDIENTS_DATA_SUCCESS = "GET_INGREDIENTS_DATA_SUCCESS" as const;
export const GET_INGREDIENTS_DATA_ERROR = "GET_INGREDIENTS_DATA_ERROR" as const;
export const GET_INGREDIENTS_DATA_REQUEST = "GET_INGREDIENTS_DATA_REQUEST" as const;

export const initData:AppThunk<void> = () => {
  return (dispatch:AppDispatch) => {
    dispatch({ type: GET_CONSTRUCTOR_DATA_REQUEST });
    dispatch({ type: GET_INGREDIENTS_DATA_REQUEST });
    Api.getIngredients()
      .then((data) => {
        const bun = data.data.filter((item:TIngredient) => item.type === "bun")[0];
        dispatch({ type: GET_INGREDIENTS_DATA_SUCCESS, data: data.data });
        dispatch({
          type: GET_CONSTRUCTOR_DATA_SUCCESS,
          bun: bun,
        });
      })
      .catch((err) => {
        dispatch({ type: GET_INGREDIENTS_DATA_ERROR, err: err.message });
        dispatch({ type: GET_CONSTRUCTOR_DATA_ERROR });
      });
  };
}

export interface IGetIngredientsDataSuccessAction{
  readonly type: typeof GET_INGREDIENTS_DATA_SUCCESS;
  readonly data: TIngredient[];
}

export interface IGetIngredientsDataErrorAction{
  readonly type: typeof GET_INGREDIENTS_DATA_ERROR
  readonly err: string;
}

export interface IGetIngredientsDataRequestAction{
  readonly type: typeof GET_INGREDIENTS_DATA_REQUEST
}

export type TIngredientsActions = IGetIngredientsDataSuccessAction|IGetIngredientsDataErrorAction|IGetIngredientsDataRequestAction

