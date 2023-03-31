import { Middleware } from '@reduxjs/toolkit';
import { getCookie } from "../../utils";
import Api from "../../API";
import { TsocketMiddlewareActions } from '../types/data';

export const socketMiddleware:(url:string, actions:TsocketMiddlewareActions)=>Middleware = (url, actions) => {
  return (store) => {
    let socket: null | WebSocket = null;
    let userSocket : null | WebSocket = null;
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
        close,
        closeUser,
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

        socket.onclose = (event) => {
          dispatch({ type: onClose });
        };

        socket.onerror = (event) => {
          console.log(event);
          socket && socket.close();
        };
      }

      if (userSocket) {
        userSocket.onopen = () => {
          dispatch({ type: onOpenUser });
        };

        userSocket.onmessage = (event) => {
          let data = JSON.parse(event.data);
          if (!data.success) {
            if (data.message === "Invalid or missing token") {
              userSocket && userSocket.close();
              return Api.refreshTokenRequest(getCookie("refreshToken"))
                .then(() => {
                  dispatch({ type: initWithUser });
                })
                .catch((e) => {
                  console.log(e);
                });
            } else {
              userSocket && userSocket.close();
            }
          }
          let orders = data.orders;
          orders.reverse();
          dispatch({
            type: onMessageUser,
            payload: { orders },
          });
        };

        userSocket.onclose = () => {
          dispatch({ type: onCloseUser });
        };

        userSocket.onerror = (event) => {
          console.log(event);
          userSocket && userSocket.close();
        };
      }

      if (type === close) {
        socket && socket.close();
      }

      if (type === closeUser) {
        userSocket && userSocket.close();
      }

      next(action);
    };
  };
};
