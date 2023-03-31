import {
  SET_ORDERS_DATA,
  SET_USER_ORDERS_DATA,
  SUCCESS_ORDERS_SOCKET,
  SUCCESS_USER_ORDERS_SOCKET,
  ON_SOCKET_CLOSE,
  ON_USER_SOCKET_CLOSE,
  TOrdersActions,
} from "../actions/orders";
import { TOrder } from "../types/data";

export type TOrdersState = {
  orders: {
    data: Array<TOrder>;
    status: boolean;
  };
  userOrders:{
    data: Array<TOrder>;
    status: boolean;
  };
  status:{
    total: null|number;
    totalToday: null|number;
  };
  connectedAll: boolean;
  connectedUser: boolean;
}

const initialState: TOrdersState = {
  orders: { data: [], status: false },
  userOrders: { data: [], status: false },
  status: {
    total: null,
    totalToday: null,
  },
  connectedAll: false,
  connectedUser: false,
};

export function ordersReducer(state = initialState, action:TOrdersActions) {
  switch (action.type) {
    case SUCCESS_ORDERS_SOCKET: {
      return { ...state, connectedAll: true };
    }
    case SUCCESS_USER_ORDERS_SOCKET: {
      return { ...state, connectedUser: true };
    }
    case ON_SOCKET_CLOSE: {
      return { ...state, orders: initialState.orders, connectedAll: false };
    }
    case ON_USER_SOCKET_CLOSE: {
      return {
        ...state,
        userOrders: initialState.userOrders,
        connectedUser: false,
      };
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
    default: {
      return state;
    }
  }
}
