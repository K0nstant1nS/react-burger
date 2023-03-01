import { SET_ERROR, REMOVE_ERROR } from "../actions/form-errors";

const initialState = {
  error: false,
  errorMessage: "",
};

export function formErrorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR: {
      return { error: true, errorMessage: action.message };
    }
    case REMOVE_ERROR: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
}
