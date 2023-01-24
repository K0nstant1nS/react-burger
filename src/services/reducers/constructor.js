import {
  GET_CONSTRUCTOR_DATA_SUCCESS,
  GET_CONSTRUCTOR_DATA_ERROR,
  GET_CONSTRUCTOR_DATA_REQUEST,
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
  SWAP_IN_CONSTRUCTOR,
} from "../actions/constructor";

const initialState = {
  status: "loading",
  bun: {
    price: 0,
    name: "default",
    image: "default",
  },
  common: [],
  sum: 0,
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONSTRUCTOR_DATA_SUCCESS: {
      return {
        ...state,
        status: "success",
        bun: action.bun,
        common: action.common,
        sum:
          action.common.length > 0
            ? action.common.reduce((sum, element) => {
                return (sum += element.price);
              }, 0) +
              action.bun.price * 2
            : action.bun.price * 2,
      };
    }
    case GET_CONSTRUCTOR_DATA_ERROR: {
      return { ...state, status: "failed" };
    }
    case GET_CONSTRUCTOR_DATA_REQUEST: {
      return { ...state, status: "loading" };
    }
    case ADD_CONSTRUCTOR_ELEMENT: {
      if (action.ingredient.type === "bun") {
        return {
          ...state,
          bun: action.ingredient,
          sum: state.sum - state.bun.price * 2 + action.ingredient.price * 2,
        };
      } else {
        return {
          ...state,
          common: [...state.common, action.ingredient],
          sum: state.sum + action.ingredient.price,
        };
      }
    }
    case REMOVE_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        common: [
          ...state.common.slice(0, action.index),
          ...state.common.slice(action.index + 1),
        ],
        sum: state.sum - action.price,
      };
    }
    case SWAP_IN_CONSTRUCTOR: {
      const newArr = [
        ...state.common.slice(0, action.dragIndex),
        ...state.common.slice(action.dragIndex + 1),
      ];
      const targetElement = state.common[action.dragIndex];

      newArr.splice(action.dropIndex, 0, targetElement);
      return {
        ...state,
        common: newArr,
      };
    }
    default:
      return state;
  }
};
