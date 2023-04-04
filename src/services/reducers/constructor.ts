import {
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
  SWAP_IN_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
} from "../actions/constructor";
import { TConstructorActions } from "../actions/constructor";
import { TIngredient } from "../types/data";
import {Reducer} from "redux"
import {v4 as uuid} from "uuid"

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
      if (action.ingredient.type === "bun") {
        const bunPrice = state.bun ? state.bun.price : 0;
        return {
          ...state,
          bun: action.ingredient,
          sum: state.sum - bunPrice * 2 + action.ingredient.price * 2,
        };
      } else {
        const keyId = uuid()
        return {
          ...state,
          common: [...state.common, {...action.ingredient, keyId}],
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
      return initialState
    }
    default:
      return state;
  }
};
