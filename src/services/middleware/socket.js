import { getCookie } from "../../utils";
import { SET_ORDERS_DATA } from "../actions/orders";

export const socketMiddleware = (url, actions) => {
  return (store) => {
    let socket = null;
    let userSocket = null;
    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const {
        init,
        initWithUser,
        onOpen,
        onClose,
        onMessage,
        onMessageUser,
        onError,
        sendMessage,
      } = actions;
      const { user } = getState().user;
      if (type === init) {
        socket = new WebSocket("wss://norma.nomoreparties.space/orders/all");
      }
      if (type === initWithUser) {
        userSocket = new WebSocket(
          `wss://norma.nomoreparties.space/orders?token=${getCookie(
            "accessToken"
          )}`
        );
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };
        socket.onmessage = (event) => {
          const { total, orders, totalToday } = JSON.parse(event.data);
          dispatch({ type: onMessage, payload: { total, totalToday, orders } });
        };
        socket.onсlose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };
      }
      if (userSocket) {
        userSocket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };
        userSocket.onmessage = (event) => {
          let { orders } = JSON.parse(event.data);
          orders.reverse();
          dispatch({
            type: onMessageUser,
            payload: { orders },
          });
        };
        userSocket.onсlose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
        userSocket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };
      }
      next(action);
    };
  };
};
