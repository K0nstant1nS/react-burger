import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ingredientsReducer } from "../reducers/ingredients";
import { constructorReducer } from "../reducers/constructor";
import { routeModalReducer } from "../reducers/route-modal";
import { orderReducer } from "../reducers/order-modal";
import { ingredientsScrollReducer } from "../reducers/ingredients-scroll";
import { userReducer } from "../reducers/user";
import { middleware } from "../middleware";
import { formErrorReducer } from "../reducers/form-errors";
import { ordersReducer } from "../reducers/orders";


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  modal: routeModalReducer,
  ingredients: ingredientsReducer,
  constructorData: constructorReducer,
  orderData: orderReducer,
  orders: ordersReducer,
  ingredientsScroll: ingredientsScrollReducer,
  user: userReducer,
  formError: formErrorReducer,
});

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    


const enchancer = composeEnhancers(
  applyMiddleware(...middleware)
);

export const store = createStore(rootReducer, enchancer);
