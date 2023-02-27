import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ingredientsReducer } from "../reducers/ingredients";
import { constructorReducer } from "../reducers/constructor";
import { ingredientModalReducer } from "../reducers/ingredient-modal";
import { orderReducer } from "../reducers/order-modal";
import { ingredientsScrollReducer } from "../reducers/ingredients-scroll";
import { userReducer } from "../reducers/user";
import { userMiddleware } from "../middleware/user";
import { socketMiddleware } from "../middleware/socket";
import { formErrorReducer } from "../reducers/form-errors";
import { ordersReducer } from "../reducers/orders";
import {
  CLOSE_ORDERS_SOCKET,
  INIT_ORDERS_SOCKET,
  INIT_USER_ORDERS_SOCKET,
  SET_ORDERS_DATA,
  SET_USER_ORDERS_DATA,
  SUCCESS_ORDERS_SOCKET,
} from "../actions/orders";

const socketTypes = {
  init: INIT_ORDERS_SOCKET,
  initWithUser: INIT_USER_ORDERS_SOCKET,
  onOpen: SUCCESS_ORDERS_SOCKET,
  onMessage: SET_ORDERS_DATA,
  onMessageUser: SET_USER_ORDERS_DATA,
  onClose: CLOSE_ORDERS_SOCKET,
};

const rootReducer = combineReducers({
  modal: ingredientModalReducer,
  ingredients: ingredientsReducer,
  constructorData: constructorReducer,
  orderData: orderReducer,
  orders: ordersReducer,
  ingredientsScroll: ingredientsScrollReducer,
  user: userReducer,
  formError: formErrorReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enchancer = composeEnhancers(
  applyMiddleware(
    thunk,
    userMiddleware,
    socketMiddleware("wss://norma.nomoreparties.space/orders/all", socketTypes)
  )
);

export const store = createStore(rootReducer, enchancer);
