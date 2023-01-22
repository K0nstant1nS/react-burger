import { MAKE_ORDER, CLOSE_MODAL } from "../actions/order-modal";

const initialState = {
  number: null,
  modalOpened: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER: {
      return { number: action.number, modalOpened: true };
    }
    case CLOSE_MODAL: {
      return { ...state, modalOpened: false };
    }

    default:
      return state;
  }
};
