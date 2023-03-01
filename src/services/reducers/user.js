import {
  SET_USER,
  SET_ONLOAD,
  SET_LOADED,
  LOGOUT,
  SET_PASSWORD_DEFAULT,
  SET_PASSWORD_ONCHANGE,
  START_CHANGING,
  STOP_CHANGING,
} from "../actions/user";

const initialState = {
  user: null,
  onLoad: false,
  changingPassword: false,
  onChange: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.user };
    }
    case SET_PASSWORD_ONCHANGE: {
      return { ...state, changingPassword: true };
    }
    case SET_PASSWORD_DEFAULT: {
      return { ...state, changingPassword: false };
    }
    case SET_ONLOAD: {
      return { ...state, onLoad: true };
    }
    case SET_LOADED: {
      return { ...state, onLoad: false };
    }
    case START_CHANGING: {
      return { ...state, onChange: true };
    }
    case STOP_CHANGING: {
      return { ...state, onChange: false };
    }
    case LOGOUT: {
      return { ...initialState };
    }

    default: {
      return state;
    }
  }
};
