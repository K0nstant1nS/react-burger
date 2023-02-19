import { SET_USER, SET_LOAD, SET_UNLOAD } from "../actions/auth";

const initialState = { loaded: false, user: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, user: action.user };
    }
    case SET_LOAD: {
      return { ...state, loaded: true };
    }
    case SET_UNLOAD: {
      return { ...state, loaded: false };
    }
    default: {
      return state;
    }
  }
};
