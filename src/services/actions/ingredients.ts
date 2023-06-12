import Api from "../../API";
import { AppDispatch, AppThunk } from "../types";
import { TIngredient } from "../types/data";
export const GET_INGREDIENTS_DATA_SUCCESS = "GET_INGREDIENTS_DATA_SUCCESS" as const;
export const GET_INGREDIENTS_DATA_ERROR = "GET_INGREDIENTS_DATA_ERROR" as const;
export const GET_INGREDIENTS_DATA_REQUEST = "GET_INGREDIENTS_DATA_REQUEST" as const;

export const initData:AppThunk<void> = () => {
  return (dispatch:AppDispatch) => {
    dispatch({ type: GET_INGREDIENTS_DATA_REQUEST });
    Api.getIngredients()
      .then((data) => {
        dispatch({ type: GET_INGREDIENTS_DATA_SUCCESS, payload: {data: data.data} });
      })
      .catch((err:Error) => {
        dispatch({ type: GET_INGREDIENTS_DATA_ERROR, payload: {err: err.message} });
      });
  };
}

export interface IGetIngredientsDataSuccessAction{
  readonly type: typeof GET_INGREDIENTS_DATA_SUCCESS;
  readonly payload: {
    readonly data: TIngredient[];
  }
}

export interface IGetIngredientsDataErrorAction{
  readonly type: typeof GET_INGREDIENTS_DATA_ERROR
  readonly payload: {
    readonly err: string;
  }
}

export interface IGetIngredientsDataRequestAction{
  readonly type: typeof GET_INGREDIENTS_DATA_REQUEST
}

export type TIngredientsActions = IGetIngredientsDataSuccessAction|IGetIngredientsDataErrorAction|IGetIngredientsDataRequestAction;

