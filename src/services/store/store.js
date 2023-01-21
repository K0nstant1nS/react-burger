import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ingredientsReducer } from "../reducers/ingredients";
import { constructorReducer } from "../reducers/constructor";
import { ingredientDetailsReducer } from "../reducers/ingredient-modal";
import { orderReducer } from "../reducers/order-modal";

const rootReducer = combineReducers({
  ingredientDetails: ingredientDetailsReducer,
  ingredients: ingredientsReducer,
  constructorData: constructorReducer,
  orderData: orderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
