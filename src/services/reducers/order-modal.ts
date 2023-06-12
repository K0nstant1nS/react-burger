import {
  MAKE_ORDER_SUCCESS,
  CLOSE_MODAL,
  ORDER_ERROR,
  MAKE_ORDER_PENDING,
  TOrderModalActions,
} from "../actions/order-modal";
import {Reducer} from "redux"

export type TOrderModalState = {
  number: null | number | string;
  modalOpened: boolean;
  status: boolean|"success"|"error"|"pending";
}

const initialState:TOrderModalState = {
  number: null,
  modalOpened: false,
  status: false,
};

export const orderReducer:Reducer<TOrderModalState, TOrderModalActions> = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER_SUCCESS: {
      return { status: "success", number: action.payload.number, modalOpened: true };
    }
    case ORDER_ERROR: {
      console.log(action.payload.err);
      return { ...initialState, modalOpened: true, status: "error" };
    }
    case MAKE_ORDER_PENDING: {
      return { ...state, modalOpened: true, status: "pending" };
    }
    case CLOSE_MODAL: {
      return { ...state, modalOpened: false };
    }

    default:
      return state;
  }
};
