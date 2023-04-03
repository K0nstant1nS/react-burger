import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { store } from "../store/store";
import { TConstructorActions } from "../actions/constructor";
import { TFormErrorsActions } from "../actions/form-errors";
import { TIngredientsScrollActions } from "../actions/ingredients-scroll";
import { TIngredientsActions } from "../actions/ingredients";
import { TOrderModalActions } from "../actions/order-modal";
import { TOrdersActions } from "../actions/orders";
import { TRouteModalActions } from "../actions/route-modal";
import { TUserActions } from "../actions/user";

export type TApplicationActions = TConstructorActions|TFormErrorsActions|TIngredientsActions|TIngredientsScrollActions|TOrderModalActions|TOrdersActions|TUserActions|TRouteModalActions
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, RootState, Action, TApplicationActions>
>;
export type AppDispatch = typeof store.dispatch;
