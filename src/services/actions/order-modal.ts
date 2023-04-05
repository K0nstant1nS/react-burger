import Api from "../../API";
import { getCookie } from "../../utils";
import { AppThunk } from "../types";
import { clearConstructorAction } from "./constructor";
export const MAKE_ORDER_PENDING = "MAKE_ORDER_PENDING" as const;
export const MAKE_ORDER_SUCCESS = "MAKE_ORDER_SUCCESS" as const;
export const CLOSE_MODAL = "CLOSE_MODAL" as const;
export const ORDER_ERROR = "ORDER_ERROR" as const;

export const makeOrder:AppThunk<void> = (dataArr:string[], isRecon:boolean= false) => {
  return (dispatch) => {
    dispatch({ type: MAKE_ORDER_PENDING });
    Api.makeOrder(dataArr)
      .then((data) => {
        dispatch({
          type: MAKE_ORDER_SUCCESS,
          payload:{
            number: data.order.number
          }
        });
        dispatch(clearConstructorAction());
      })
      .catch((err:Error) => {
        if (isRecon) {
          Api.refreshTokenRequest(getCookie("refreshToken"))
            .then(() => {
              dispatch(makeOrder(dataArr));
            })
            .catch(() => {
              dispatch({ type: ORDER_ERROR, payload: {err: err.message} });
            });
        } else {
          dispatch({ type: ORDER_ERROR, payload: {err: err.message} });
        }
      });
  };
}

export interface IMakeOrderPendingAction {
  readonly type: typeof MAKE_ORDER_PENDING;
}

export interface IMakeOrderSuccessAction {
  readonly type: typeof MAKE_ORDER_SUCCESS;
  readonly payload: {
    readonly number: number|string;
  }
}

export interface IMakeOrderErrorAction {
  readonly type: typeof ORDER_ERROR;
  readonly payload: {
    readonly err: string;
  }
}

export interface ICloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}

export type TOrderModalActions = IMakeOrderErrorAction|IMakeOrderPendingAction|IMakeOrderSuccessAction|ICloseModalAction

export const closeModalAction = (): ICloseModalAction => {
  return {type: CLOSE_MODAL}
}