import { AnyAction } from "redux"
import thunk from "redux-thunk";
import { userMiddleware } from "./user";
import { socketMiddleware } from "./socket";
import {
    CLOSE_ORDERS_SOCKET,
    CLOSE_USER_ORDERS_SOCKET,
    INIT_ORDERS_SOCKET,
    INIT_USER_ORDERS_SOCKET,
    SET_ORDERS_DATA,
    SET_USER_ORDERS_DATA,
    SUCCESS_ORDERS_SOCKET,
    SUCCESS_USER_ORDERS_SOCKET,
    ON_SOCKET_CLOSE,
    ON_USER_SOCKET_CLOSE,
  } from "../actions/orders";

const socketTypes = {
    init: INIT_ORDERS_SOCKET,
    initWithUser: INIT_USER_ORDERS_SOCKET,
    onOpen: SUCCESS_ORDERS_SOCKET,
    onOpenUser: SUCCESS_USER_ORDERS_SOCKET,
    onMessage: SET_ORDERS_DATA,
    onMessageUser: SET_USER_ORDERS_DATA,
    close: CLOSE_ORDERS_SOCKET,
    closeUser: CLOSE_USER_ORDERS_SOCKET,
    onClose: ON_SOCKET_CLOSE,
    onCloseUser: ON_USER_SOCKET_CLOSE,
  };

export const middleware = [thunk, userMiddleware, socketMiddleware("wss://norma.nomoreparties.space/orders", socketTypes)]
