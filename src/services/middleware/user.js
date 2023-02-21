import { LOGOUT } from "../actions/user";
import { deleteCookie } from "../../utils";

export const userMiddleware = (store) => (next) => (action) => {
  if (action.type === LOGOUT) {
    deleteCookie("refreshToken");
    deleteCookie("accessToken");
  }
  next(action);
};
