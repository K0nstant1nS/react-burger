import { MAKE_ORDER } from "../actions/order-modal";

const initialState = null;

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER: {
      return action.order;
    }
    default:
      return state;
  }
};
