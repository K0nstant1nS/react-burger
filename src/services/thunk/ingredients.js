import Api from "../../API";
import { constructorActions } from "../reducers/constructor";
import { ingredientsActions } from "../reducers/ingredients";

export function initData() {
  return (dispatch) => {
    dispatch(constructorActions.getDataRequest());
    dispatch(ingredientsActions.getDataRequest());
    Api.getIngredients()
      .then((data) => {
        const bun = data.data.filter((item) => item.type === "bun")[0];
        const common = data.data.filter((item) => item.type !== "bun");
        dispatch(ingredientsActions.getDataSuccess(data.data));
        dispatch(constructorActions.getDataSuccess({ bun, common }));
      })
      .catch((err) => {
        dispatch(ingredientsActions.getDataError());
        dispatch(constructorActions.getDataError());
      });
  };
}
