import Api from "../../API";
import { getCookie } from "../../utils";
import { CLEAR_CONSTRUCTOR } from "./constructor";
export const MAKE_ORDER_PENDING = "MAKE_ORDER_PENDING";
export const MAKE_ORDER_SUCCESS = "MAKE_ORDER_SUCCESS";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const ORDER_ERROR = "ORDER_ERROR";

export function makeOrder(dataArr, isRecon = false) {
  return (dispatch) => {
    dispatch({ type: MAKE_ORDER_PENDING });
    Api.makeOrder(dataArr)
      .then((data) => {
        dispatch({
          type: MAKE_ORDER_SUCCESS,
          number: data.order.number,
        });
        dispatch({ type: CLEAR_CONSTRUCTOR });
      })
      .catch((err) => {
        if (isRecon) {
          Api.refreshTokenRequest(getCookie("refreshToken"))
            .then(() => {
              dispatch(makeOrder(dataArr));
            })
            .catch(() => {
              dispatch({ type: ORDER_ERROR, err: err.message });
            });
        } else {
          dispatch({ type: ORDER_ERROR, err: err.message });
        }
      });
  };
}
