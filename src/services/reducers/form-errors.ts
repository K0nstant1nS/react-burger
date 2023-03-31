import { SET_ERROR, REMOVE_ERROR, TFormErrorsActions } from "../actions/form-errors";

export type TFormErrorsState = {
  error: boolean;
  errorMessage: string;
}

const initialState:TFormErrorsState = {
  error: false,
  errorMessage: "",
};

export function formErrorReducer(state = initialState, action:TFormErrorsActions) {
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
