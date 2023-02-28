import {
  CLOSE_ORDERS_SOCKET,
  CLOSE_USER_ORDERS_SOCKET,
  SET_ORDERS_DATA,
  SET_USER_ORDERS_DATA,
  SUCCESS_ORDERS_SOCKET,
  SUCCESS_USER_ORDERS_SOCKET,
  SET_SOCKET_ERROR,
  SET_USER_SOCKET_ERROR,
} from "../actions/orders";

const initialState = {
  orders: { data: [], status: false },
  userOrders: { data: [], status: false },
  status: {
    total: null,
    totalToday: null,
  },
  connectedAll: false,
  connectedUser: false,
};

export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_ORDERS_SOCKET: {
      return { ...state, connectedAll: true };
    }
    case SUCCESS_USER_ORDERS_SOCKET: {
      return { ...state, connectedUser: true };
    }
    case CLOSE_ORDERS_SOCKET: {
      return { ...state, connectedAll: false };
    }
    case CLOSE_USER_ORDERS_SOCKET: {
      return { ...state, connectedUser: false };
    }
    case SET_ORDERS_DATA: {
      return {
        ...state,
        orders: { data: action.payload.orders, status: true },
        status: {
          total: action.payload.total,
          totalToday: action.payload.totalToday,
        },
      };
    }
    case SET_USER_ORDERS_DATA: {
      return {
        ...state,
        userOrders: { data: action.payload.orders, status: true },
      };
    }
    case SET_SOCKET_ERROR: {
      return {
        ...state,
        orders: {
          data: [],
          status: true,
        },
        connectedAll: false,
      };
    }
    case SET_USER_SOCKET_ERROR: {
      return {
        ...state,
        userOrders: {
          data: [],
          status: true,
        },
        connectedUser: false,
      };
    }
    default: {
      return state;
    }
  }
}
