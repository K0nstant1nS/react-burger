import {
  SCROLL_ON_BUN,
  SCROLL_ON_SAUCE,
  SCROLL_ON_MAIN,
  SET_STARTS,
  SCROLL_TO,
  SCROLL_REFRESH,
  TIngredientsScrollActions,
} from "../actions/ingredients-scroll";
import {Reducer} from "redux"

export type TIngredientsScrollState = {
  scrolledOn: "bun"|"sauce"|"main";
  bunY: number;
  sauceY: number;
  mainY: number;
  scrollTo: {
    y:number;
  }

}


const initialState:TIngredientsScrollState = {
  scrolledOn: "bun",
  bunY: 0,
  sauceY: 0,
  mainY: 0,
  scrollTo: { y: 0 },
};

export const ingredientsScrollReducer: Reducer<TIngredientsScrollState,TIngredientsScrollActions> = (state = initialState, action) => {
  switch (action.type) {
    case SCROLL_ON_BUN: {
      return { ...state, scrolledOn: "bun" };
    }
    case SCROLL_ON_SAUCE: {
      return { ...state, scrolledOn: "sauce" };
    }
    case SCROLL_ON_MAIN: {
      return { ...state, scrolledOn: "main" };
    }
    case SCROLL_TO: {
      return { ...state, scrollTo: { y: action.payload.scrollTo } };
    }
    case SET_STARTS: {
      return {
        ...state,
        [action.payload.containerType + "Y"]: action.payload.y,
      };
    }
    case SCROLL_REFRESH: {
      return  {...state, scrollTo: {y: initialState.scrollTo.y}, scrolledOn: initialState.scrolledOn}
    }
    default:
      return state;
  }
}
