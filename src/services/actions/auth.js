import { setCookie } from "../../utils";
import Api from "../../API";
export const SET_USER = "SET_USER";
export const SET_LOAD = "SET_LOAD";
export const SET_UNLOAD = "SET_UNLOAD";

export function signUp(form) {
  return (dispatch) => {
    Api.registerUser(form).then((data) => {
      setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", data.refreshToken);
      dispatch({ type: SET_USER, user: data.user });
      dispatch({ type: SET_LOAD });
    });
  };
}

export function signIn(form) {
  return (dispatch) => {
    Api.loginRequest(form).then((data) => {
      setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", data.refreshToken);
      dispatch({ type: SET_USER, user: data.user });
      dispatch({ type: SET_LOAD });
    });
  };
}

export function getUser() {
  return (dispatch) => {
    Api.getUserRequest().then((data) => {
      dispatch({ type: SET_USER, user: data.user });
      dispatch({ type: SET_LOAD });
    });
  };
}
