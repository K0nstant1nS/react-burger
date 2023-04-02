import {
  GET_CONSTRUCTOR_DATA_SUCCESS,
  GET_CONSTRUCTOR_DATA_ERROR,
  GET_CONSTRUCTOR_DATA_REQUEST,
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
  SWAP_IN_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
} from "../actions/constructor";
import { TConstructorActions } from "../actions/constructor";
import { TIngredient } from "../types/data";
import {Reducer} from "redux"

export type TConstructorState = {
  status: string;
  bun: Partial<TIngredient> & {price: number; name: string; image: string};
  common: Array<TIngredient>;
  sum: number;
}

const initialState:TConstructorState = {
  status: "loading",
  bun: {
    price: 0,
    name: "default",
    image: "default",
  },
  common: [],
  sum: 0,
};

export const constructorReducer: Reducer<TConstructorState,TConstructorActions> = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONSTRUCTOR_DATA_SUCCESS: {
      return {
        ...state,
        status: "success",
        bun: action.bun,
        sum: action.bun.price * 2,
      };
    }
    case GET_CONSTRUCTOR_DATA_ERROR: {
      return { ...initialState, status: "failed" };
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
    case CLEAR_CONSTRUCTOR: {
      return {
        ...state,
        common: [],
        sum: state.bun.price * 2,
      };
    }
    default:
      return state;
  }
};
