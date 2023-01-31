import Api from "../../API";
import { orderActions } from "../reducers/order-modal";

export function makeOrder(dataArr) {
  return (dispatch) => {
    Api.makeOrder(dataArr)
      .then((data) => {
        dispatch(orderActions.makeOrder(data.order.number));
      })
      .catch((err) => {
        dispatch(orderActions.orderError());
      });
  };
}
