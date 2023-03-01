import {
  MAKE_ORDER_SUCCESS,
  CLOSE_MODAL,
  ORDER_ERROR,
  MAKE_ORDER_PENDING,
} from "../actions/order-modal";

const initialState = {
  number: null,
  modalOpened: false,
  status: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER_SUCCESS: {
      return { status: "success", number: action.number, modalOpened: true };
    }
    case ORDER_ERROR: {
      console.log(action.err);
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
