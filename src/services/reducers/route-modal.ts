import { SET_ROUTE_MODAL, REMOVE_ROUTE_MODAL, TRouteModalActions } from "../actions/route-modal";
import {Reducer} from "redux"

export type TRouteModalState = {
  modal: boolean
}

const initialState:TRouteModalState = { modal: false };

export const routeModalReducer: Reducer<TRouteModalState, TRouteModalActions> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE_MODAL: {
      return { modal: true };
    }
    case REMOVE_ROUTE_MODAL: {
      return { modal: false };
    }
    default:
      return state;
  }
};
