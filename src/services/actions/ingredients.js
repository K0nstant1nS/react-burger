import { SET_CONSTRUCTOR_DATA } from "./constructor";
import Api from "../../API";
export const SET_INGREDIENTS_DATA = "GET_INGREDIENTS_DATA";

export function initData() {
  return (dispatch) => {
    Api.getIngredients()
      .then((data) => {
        const bun = data.data.filter((item) => item.type === "bun")[0];
        const common = data.data.filter((item) => item.type !== "bun");
        dispatch({ type: SET_INGREDIENTS_DATA, data: data.data });
        dispatch({ type: SET_CONSTRUCTOR_DATA, bun: bun, common: common });
      })
      .catch((err) => console.log(err.message));
  };
}
