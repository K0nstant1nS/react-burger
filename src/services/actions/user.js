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
    Api.registerUser(form)
      .then((data) => {
        setCookie("accessToken", data.accessToken.split("Bearer ")[1], {
          path: "/",
        });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
        setCookie("password", form.password, { path: "/" });
        dispatch({ type: SET_USER, user: data.user });
        dispatch({ type: SET_LOADED });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function signIn(form) {
  return (dispatch) => {
    dispatch({ type: SET_ONLOAD });
    Api.loginRequest(form)
      .then((data) => {
        setCookie("accessToken", data.accessToken.split("Bearer ")[1], {
          path: "/",
        });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
        setCookie("password", form.password, { path: "/" });
        dispatch({ type: SET_USER, user: data.user });
        dispatch({ type: SET_LOADED });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getUser(isRefresh = false) {
  return (dispatch) => {
    dispatch({ type: SET_ONLOAD });
    Api.getUserRequest()
      .then((data) => {
        dispatch({ type: SET_USER, user: data.user });
        dispatch({ type: SET_LOADED });
      })
      .catch(() => {
        const refreshToken = getCookie("refreshToken");
        if (isRefresh && refreshToken) {
          Api.refreshTokenRequest(refreshToken)
            .then(() => {
              dispatch(getUser());
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
    Api.resetPasswordRequest(form)
      .then((data) => {
        if (data.success) {
          dispatch({ type: SET_PASSWORD_ONCHANGE });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function confirmPasswordChange(form) {
  return (dispatch) => {
    Api.confirmPasswordResetRequest(form)
      .then(() => {
        dispatch({ type: SET_PASSWORD_DEFAULT });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function patchUser(form, isRefresh = false) {
  return (dispatch) => {
    Api.patchUserRequest(form)
      .then((data) => {
        dispatch({ type: SET_USER, user: data.user });
        dispatch({ type: STOP_CHANGING, password: form.password });
      })
      .catch(() => {
        const refreshToken = getCookie("refreshToken");
        if (isRefresh && refreshToken) {
          Api.refreshTokenRequest(refreshToken).then(() => {
            dispatch(patchUser(form));
          });
        }
      });
  };
}

export function logout() {
  return (dispatch) => {
    Api.logoutRequest(getCookie("refreshToken"))
      .then(() => {
        dispatch({ type: LOGOUT });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
