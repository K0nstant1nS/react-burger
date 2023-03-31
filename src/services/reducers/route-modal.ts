import { SET_ROUTE_MODAL, REMOVE_ROUTE_MODAL, TRouteModalActions } from "../actions/route-modal";

export type TRouteModalState = {
  modal: boolean
}

const initialState:TRouteModalState = { modal: false };

export const routeModalReducer = (state = initialState, action:TRouteModalActions) => {
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
