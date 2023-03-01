import { SET_ROUTE_MODAL, REMOVE_ROUTE_MODAL } from "../actions/route-modal";
const initialState = { modal: false };

export const routeModalReducer = (state = initialState, action) => {
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
