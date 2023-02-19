import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ingredientsReducer } from "../reducers/ingredients";
import { constructorReducer } from "../reducers/constructor";
import { ingredientDetailsReducer } from "../reducers/ingredient-modal";
import { orderReducer } from "../reducers/order-modal";
import { ingredientsScrollReducer } from "../reducers/ingredients-scroll";
import { authReducer } from "../reducers/auth";

const rootReducer = combineReducers({
  ingredientDetails: ingredientDetailsReducer,
  ingredients: ingredientsReducer,
  constructorData: constructorReducer,
  orderData: orderReducer,
  ingredientsScroll: ingredientsScrollReducer,
  auth: authReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enchancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enchancer);
