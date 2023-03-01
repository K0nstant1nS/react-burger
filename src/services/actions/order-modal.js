import Api from "../../API";
import { getCookie } from "../../utils";
import { CLEAR_CONSTRUCTOR } from "./constructor";
export const MAKE_ORDER = "MAKE_ORDER";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const ORDER_ERROR = "ORDER_ERROR";

export function makeOrder(dataArr, isRecon = false) {
  return (dispatch) => {
    Api.imitMakeOrder(dataArr)
      .then((data) => {
        dispatch({
          type: MAKE_ORDER,
          number: data.order.number,
        });
        dispatch({ type: CLEAR_CONSTRUCTOR });
      })
      .catch((err) => {
        console.log(err);
      });

    Api.makeOrder(dataArr).catch((err) => {
      if (isRecon) {
        Api.refreshTokenRequest(getCookie("refreshToken")).then(() => {
          dispatch(makeOrder(dataArr));
        });
      } else {
        dispatch({ type: ORDER_ERROR, err: err.message });
      }
    });
  };
}
