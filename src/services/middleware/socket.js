import { getCookie } from "../../utils";
import Api from "../../API";

export const socketMiddleware = (url, actions) => {
  return (store) => {
    let socket = null;
    let userSocket = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        init,
        initWithUser,
        onOpen,
        onOpenUser,
        onClose,
        onCloseUser,
        onMessage,
        onMessageUser,
        onError,
        onErrorUser,
      } = actions;
      if (type === init) {
        socket = new WebSocket(`${url}/all`);
      }
      if (type === initWithUser) {
        userSocket = new WebSocket(`${url}?token=${getCookie("accessToken")}`);
      }
      if (socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen });
        };
        socket.onmessage = (event) => {
          const { total, orders, totalToday } = JSON.parse(event.data);
          dispatch({ type: onMessage, payload: { total, totalToday, orders } });
        };
        socket.onсlose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
        socket.onerror = (event) => {
          console.log(event);
          dispatch({ type: onError });
          socket.close();
        };
      }
      if (userSocket) {
        userSocket.onopen = () => {
          dispatch({ type: onOpenUser });
        };
        userSocket.onmessage = (event) => {
          let { orders } = JSON.parse(event.data);
          if (orders === undefined) {
            userSocket.close();
            return setTimeout(() => {
              Api.refreshTokenRequest(getCookie("refreshToken")).then(() => {
                dispatch({ type: initWithUser });
              });
            }, 5000);
          }
          orders.reverse();
          console.log(orders[0].status);
          dispatch({
            type: onMessageUser,
            payload: { orders },
          });
        };
        userSocket.onсlose = (event) => {
          dispatch({ type: onCloseUser, payload: event });
        };
        userSocket.onerror = (event) => {
          console.log(event);
          dispatch({ type: onErrorUser });
          userSocket.close();
        };
      }
      next(action);
    };
  };
};
