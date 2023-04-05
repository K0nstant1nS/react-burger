import { SET_ERROR, REMOVE_ERROR, TFormErrorsActions } from "../actions/form-errors";
import {Reducer} from "redux"

export type TFormErrorsState = {
  error: boolean;
  errorMessage: string;
}

const initialState:TFormErrorsState = {
  error: false,
  errorMessage: "",
};

export const formErrorReducer: Reducer<TFormErrorsState, TFormErrorsActions> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return { error: true, errorMessage: action.payload.message };
    }
    case REMOVE_ERROR: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
}
