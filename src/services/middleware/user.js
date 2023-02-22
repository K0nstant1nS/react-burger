import { LOGOUT, SET_PASSWORD_DEFAULT, STOP_CHANGING } from "../actions/user";
import { deleteCookie, setCookie } from "../../utils";

export const userMiddleware = (store) => (next) => (action) => {
  if (action.type === LOGOUT) {
    deleteCookie("refreshToken");
    deleteCookie("accessToken");
    deleteCookie("password");
  }
  if (action.type === STOP_CHANGING && action.password) {
    setCookie("password", action.password, { path: "/" });
  }
  next(action);
};
