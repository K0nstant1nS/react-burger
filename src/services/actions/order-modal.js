import Api from "../../API";
import { getCookie } from "../../utils";
export const MAKE_ORDER = "MAKE_ORDER";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const ORDER_ERROR = "ORDER_ERROR";

export function makeOrder(dataArr, isRecon = false) {
  return (dispatch) => {
    Api.makeOrder(dataArr)
      .then((data) => {
        console.log(data);
        dispatch({ type: MAKE_ORDER, number: data.order.number });
      })
      .catch((err) => {
        dispatch({ type: ORDER_ERROR, err: err.message });
        if (isRecon) {
          Api.refreshTokenRequest(getCookie("refreshToken")).then(() => {
            dispatch(makeOrder(dataArr));
          });
        }
      });
  };
}
