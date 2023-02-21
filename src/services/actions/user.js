import Api from "../../API";
import { setCookie, getCookie } from "../../utils";

export const SET_USER = "SET_USER";
export const SET_ONLOAD = "SET_ONLOAD";
export const SET_LOADED = "SET_LOADED";
export const LOGOUT = "LOGOUT";
export const SET_PASSWORD_ONCHANGE = "SET_PASSWORD_ONCHANGE";
export const SET_PASSWORD_DEFAULT = "SET_PASSWORD_DEFAULT";
export const START_CHANGING = "START_CHANGING";
export const STOP_CHANGING = "STOP_CHANGING";

export function signUp(form) {
  return (dispatch) => {
    dispatch({ type: SET_ONLOAD });
    Api.registerUser(form).then((data) => {
      setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", data.refreshToken);
      dispatch({ type: SET_USER, user: data.user });
      dispatch({ type: SET_LOADED });
    });
  };
}

export function signIn(form) {
  return (dispatch) => {
    dispatch({ type: SET_ONLOAD });
    Api.loginRequest(form).then((data) => {
      setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
      setCookie("refreshToken", data.refreshToken);
      dispatch({ type: SET_USER, user: data.user });
      dispatch({ type: SET_LOADED });
    });
  };
}

export function getUser() {
  let isRefresh = true;
  return (dispatch) => {
    dispatch({ type: SET_ONLOAD });
    Api.getUserRequest()
      .then((data) => {
        dispatch({ type: SET_USER, user: data.user });
        dispatch({ type: SET_LOADED });
      })
      .catch(() => {
        if (isRefresh) {
          isRefresh = false;
          const refreshToken = getCookie("refreshToken");
          Api.refreshTokenRequest(refreshToken)
            .then(() => {
              Api.getUserRequest().then((data) => {
                dispatch({ type: SET_USER, user: data.user });
                dispatch({ type: SET_LOADED });
              });
            })
            .catch(() => {
              dispatch({ type: SET_LOADED });
            });
        } else {
          dispatch({ type: SET_LOADED });
        }
      });
  };
}

export function changePassword(form) {
  return (dispatch) => {
    Api.resetPasswordRequest(form).then(() => {
      dispatch({ type: SET_PASSWORD_ONCHANGE });
    });
  };
}

export function confirmPasswordChange(form) {
  return (dispatch) => {
    Api.confirmPasswordResetRequest(form).then(() => {
      dispatch({ type: SET_PASSWORD_DEFAULT });
    });
  };
}

export function patchUser(form) {
  let isRefresh = true;
  return (dispatch) => {
    Api.patchUserRequest(form)
      .then((data) => {
        console.log("patch");
        dispatch({ type: SET_USER, user: data.user });
        dispatch({ type: STOP_CHANGING });
      })
      .catch(() => {
        if (isRefresh) {
          isRefresh = false;
          const refreshToken = getCookie("refreshToken");
          Api.refreshTokenRequest(refreshToken).then(() => {
            Api.patchUserRequest(form).then((data) => {
              dispatch({ type: SET_USER, user: data.user });
              dispatch({ type: STOP_CHANGING });
            });
          });
        }
      });
  };
}

export function logout() {
  return (dispatch) => {
    Api.logoutRequest(getCookie("refreshToken")).then(() => {
      dispatch({ type: LOGOUT });
    });
  };
}
