import {
  CLOSE_ORDERS_SOCKET,
  SET_ORDERS_DATA,
  SET_USER_ORDERS_DATA,
  SUCCESS_ORDERS_SOCKET,
} from "../actions/orders";

const initialState = {
  orders: [],
  userOrders: [],
  status: {
    total: null,
    totalToday: null,
  },
  connected: false,
};

export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_ORDERS_SOCKET: {
      return { ...state, connected: true };
    }
    case CLOSE_ORDERS_SOCKET: {
      return { ...state, connected: false };
    }
    case SET_ORDERS_DATA: {
      return {
        ...state,
        orders: action.payload.orders,
        status: {
          total: action.payload.total,
          totalToday: action.payload.totalToday,
        },
      };
    }
    case SET_USER_ORDERS_DATA: {
      return {
        ...state,
        userOrders: action.payload.orders,
      };
    }
    default: {
      return state;
    }
  }
}
