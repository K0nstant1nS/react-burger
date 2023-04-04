import { NavigateFunction } from "react-router";
import Api from "../../API";
import { setCookie, getCookie, deleteCookie } from "../../utils";
import { AppDispatch, AppThunk } from "../types";
import { TConfirmPasswordResetData, TLoginUserData, TRegisterUserData, TResetPasswordData, TUser } from "../types/data";
import { SET_ERROR, REMOVE_ERROR } from "./form-errors";

export const SET_USER = "SET_USER" as const;
export const SET_ONLOAD = "SET_ONLOAD" as const;
export const SET_LOADED = "SET_LOADED" as const;
export const LOGOUT = "LOGOUT" as const;
export const SET_PASSWORD_ONCHANGE = "SET_PASSWORD_ONCHANGE" as const;
export const SET_PASSWORD_DEFAULT = "SET_PASSWORD_DEFAULT" as const;
export const START_CHANGING = "START_CHANGING" as const;
export const STOP_CHANGING = "STOP_CHANGING" as const;

export const signUp:AppThunk<void> = (form:TRegisterUserData)=>{
  return (dispatch: AppDispatch) => {
    dispatch({ type: SET_ONLOAD });
    Api.registerUser(form)
      .then((data) => {
        setCookie("accessToken", data.accessToken.split("Bearer ")[1], {
          path: "/",
        });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
        dispatch({ type: SET_USER, user: data.user });
        dispatch({ type: SET_LOADED });
      })
      .catch((err:Error) => {
        console.log(err);
        dispatch({
          type: SET_ERROR,
          message:
            "Произошла ошибка при регистрации, проверьте данные или попробуйте позднее",
        });
      });
  };
}

export const signIn:AppThunk<void> = (form:TLoginUserData) => {
  return (dispatch:AppDispatch) => {
    dispatch({ type: SET_ONLOAD });
    Api.loginRequest(form)
      .then((data) => {
        setCookie("accessToken", data.accessToken.split("Bearer ")[1], {
          path: "/",
        });
        setCookie("refreshToken", data.refreshToken, { path: "/" });
        dispatch({ type: SET_USER, user: data.user });
        dispatch({ type: SET_LOADED });
        dispatch({ type: REMOVE_ERROR });
      })
      .catch((err:Error) => {
        console.log(err);
        dispatch({ type: SET_ERROR, message: "Не удается найти пользователя" });
      });
  };
}

export const getUser:AppThunk<void> = (isRefresh = false) => {
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
              deleteCookie("refreshToken")
              dispatch({ type: SET_LOADED });
            });
        } else {
          dispatch({ type: SET_LOADED });
        }
      });
  };
}

export const changePassword:AppThunk<void> = (form:TResetPasswordData, navigate:NavigateFunction) => {
  return (dispatch:AppDispatch) => {
    Api.resetPasswordRequest(form)
      .then((data) => {
        if (data.success) {
          dispatch({ type: SET_PASSWORD_ONCHANGE });
          dispatch({ type: REMOVE_ERROR });
          navigate("/reset-password");
        }
      })
      .catch((err:Error) => {
        console.log(err);
        dispatch({ type: SET_ERROR, message: "Пользователь не найден" });
      });
  };
}

export const confirmPasswordChange:AppThunk<void> = (form:TConfirmPasswordResetData, navigate:NavigateFunction) => {
  return (dispatch:AppDispatch) => {
    Api.confirmPasswordResetRequest(form)
      .then(() => {
        dispatch({ type: SET_PASSWORD_DEFAULT });
        dispatch({ type: REMOVE_ERROR });
        navigate("/login");
      })
      .catch((err:Error) => {
        dispatch({
          type: SET_ERROR,
          message:
            "произошла ошибка, перепроверьте правильность введенных данных",
        });
        console.log(err);
      });
  };
}

export const patchUser:AppThunk<void> = (form:TRegisterUserData, isRefresh:boolean = false) => {
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
          }).catch(()=>{
            deleteCookie("refreshToken")
          })
        }
      });
  };
}

export const logout:AppThunk<void> = () => {
  return (dispatch:AppDispatch) => {
    Api.logoutRequest(getCookie("refreshToken"))
      .then(() => {
        dispatch({ type: LOGOUT });
      })
      .catch((err:Error) => {
        console.log(err);
      });
  };
}

export interface ISetUserAction {
  readonly type: typeof SET_USER;
  readonly user: TUser;
}

export interface ISetOnloadAction {
  readonly type: typeof SET_ONLOAD;
}

export interface ISetLoadedAction {
  readonly type: typeof SET_LOADED;
}

export interface ILogoutAction {
  readonly type: typeof LOGOUT;
}

export interface ISetPasswordOnchangeAction {
  readonly type: typeof SET_PASSWORD_ONCHANGE;
}

export interface ISetPasswordDefaultAction {
  readonly type: typeof SET_PASSWORD_DEFAULT;
}

export interface IStartChangingAction {
  readonly type: typeof START_CHANGING;
}

export interface IStopChangingAction {
  readonly type: typeof STOP_CHANGING;
}

export type TUserActions = ISetUserAction|ISetOnloadAction|ISetLoadedAction|ILogoutAction|ISetPasswordOnchangeAction|ISetPasswordDefaultAction|IStartChangingAction|IStopChangingAction
