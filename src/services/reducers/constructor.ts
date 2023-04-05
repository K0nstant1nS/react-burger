import {
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
  SWAP_IN_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
} from "../actions/constructor";
import { TConstructorActions } from "../actions/constructor";
import { TIngredient } from "../types/data";
import {Reducer} from "redux"

export type TConstructorState = {
  bun: TIngredient | undefined;
  common: Array<TIngredient>;
  sum: number;
}

const initialState:TConstructorState = {
  bun: undefined,
  common: [],
  sum: 0,
};

export const constructorReducer: Reducer<TConstructorState,TConstructorActions> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONSTRUCTOR_ELEMENT: {
      if (action.payload.ingredient.type === "bun") {
        const bunPrice = state.bun ? state.bun.price : 0;
        return {
          ...state,
          bun: action.payload.ingredient,
          sum: state.sum - bunPrice * 2 + action.payload.ingredient.price * 2,
        };
      } else {
        return {
          ...state,
          common: [...state.common, {...action.payload.ingredient, keyId: action.payload.keyId}],
          sum: state.sum + action.payload.ingredient.price,
        };
      }
    }
    case REMOVE_CONSTRUCTOR_ELEMENT: {
      return {
        ...state,
        common: [
          ...state.common.slice(0, action.payload.index),
          ...state.common.slice(action.payload.index + 1),
        ],
        sum: state.sum - action.payload.price,
      };
    }
    case SWAP_IN_CONSTRUCTOR: {
      const newArr = [
        ...state.common.slice(0, action.payload.dragIndex),
        ...state.common.slice(action.payload.dragIndex + 1),
      ];
      const targetElement = state.common[action.payload.dragIndex];

      newArr.splice(action.payload.dropIndex, 0, targetElement);
      return {
        ...state,
        common: newArr,
      };
    }
    case CLEAR_CONSTRUCTOR: {
      return initialState
    }
    default:
      return state;
  }
};
