import {
  SCROLL_ON_BUN,
  SCROLL_ON_SAUCE,
  SCROLL_ON_MAIN,
  SET_STARTS,
  SCROLL_TO,
  TIngredientsScrollActions,
} from "../actions/ingredients-scroll";

export type TIngredientsScrollState = {
  scrolledOn: string;
  bunY: string;
  sauceY: string;
  mainY: string;
  scrollTo: {
    y: string;
  }

}


const initialState:TIngredientsScrollState = {
  scrolledOn: "",
  bunY: "",
  sauceY: "",
  mainY: "",
  scrollTo: { y: "" },
};

export function ingredientsScrollReducer(state = initialState, action:TIngredientsScrollActions) {
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
      return { ...state, scrollTo: { y: action.scrollTo } };
    }
    case SET_STARTS: {
      return {
        ...state,
        [action.containerType + "Y"]: action.y,
      };
    }
    default:
      return state;
  }
}
