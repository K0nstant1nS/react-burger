import { Middleware } from '@reduxjs/toolkit';
import {
  LOGOUT,
  SET_USER,
  setPasswordDefaultAction,
} from "../actions/user";
import { deleteCookie } from "../../utils";
import { TApplicationActions } from '../types';

export const userMiddleware: Middleware = (store) => (next) => (action:TApplicationActions) => {
  if (action.type === SET_USER) {
    store.dispatch(setPasswordDefaultAction());
  }
  if (action.type === LOGOUT) {
    deleteCookie("refreshToken");
    deleteCookie("accessToken");
  }
  next(action);
};
