import { MAKE_ORDER, CLOSE_MODAL, ORDER_ERROR } from "../actions/order-modal";

const initialState = {
  number: null,
  modalOpened: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER: {
      return { number: action.number, modalOpened: true };
    }
    case ORDER_ERROR: {
      console.log(action.err);
      return initialState;
    }
    case CLOSE_MODAL: {
      return { ...state, modalOpened: false };
    }

    default:
      return state;
  }
};
