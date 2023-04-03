import { Middleware } from '@reduxjs/toolkit';
import {
  LOGOUT,
  SET_PASSWORD_DEFAULT,
  SET_USER,
} from "../actions/user";
import { deleteCookie } from "../../utils";

export const userMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === SET_USER) {
    store.dispatch({ type: SET_PASSWORD_DEFAULT });
  }
  if (action.type === LOGOUT) {
    deleteCookie("refreshToken");
    deleteCookie("accessToken");
    deleteCookie("password");
  }
  next(action);
};
