import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { ingredientsReducer } from "../reducers/ingredients";
import { constructorReducer } from "../reducers/constructor";
import { ingredientModalReducer } from "../reducers/ingredient-modal";
import { orderReducer } from "../reducers/order-modal";
import { ingredientsScrollReducer } from "../reducers/ingredients-scroll";
import { userReducer } from "../reducers/user";
import { userMiddleware } from "../middleware/user";

const rootReducer = combineReducers({
  modal: ingredientModalReducer,
  ingredients: ingredientsReducer,
  constructorData: constructorReducer,
  orderData: orderReducer,
  ingredientsScroll: ingredientsScrollReducer,
  user: userReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enchancer = composeEnhancers(applyMiddleware(thunk, userMiddleware));

export const store = createStore(rootReducer, enchancer);
