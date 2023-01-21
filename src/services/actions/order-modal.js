import Api from "../../API";
export const MAKE_ORDER = "MAKE_ORDER";

export function makeOrder(dataArr) {
  return (dispatch) => {
    Api.makeOrder(dataArr)
      .then((data) => {
        dispatch({ type: MAKE_ORDER, order: data.order });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
}
