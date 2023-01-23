export const SET_CONSTRUCTOR_DATA = "GET_CONSTRUCTOR_DATA";
export const ADD_CONSTRUCTOR_ELEMENT = "ADD_CONSTRUCTOR_ELEMENT";
export const REMOVE_CONSTRUCTOR_ELEMENT = "REMOVE_CONSTRUCTOR_ELEMENT";
export const SWAP_IN_CONSTRUCTOR = "SWAP_IN_CONSTRUCTOR";

export function deleteHandler(dispatch, { index, price }) {
  dispatch({
    type: REMOVE_CONSTRUCTOR_ELEMENT,
    index,
    price,
  });
}
