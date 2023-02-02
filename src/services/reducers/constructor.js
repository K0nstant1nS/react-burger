import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  bun: {
    price: 0,
    name: "default",
    image: "default",
  },
  common: [],
  beforeDrag: [],
  dragIndex: 0,
  overIndex: 0,
  sum: 0,
};

const constructor = createSlice({
  name: "construector",
  initialState: initialState,
  reducers: {
    getDataSuccess: (state, action) => ({
      ...state,
      status: "success",
      bun: action.payload.bun,
      common: action.payload.common,
      sum:
        action.payload.common.length > 0
          ? action.payload.common.reduce((sum, element) => {
              return (sum += element.price);
            }, 0) +
            action.payload.bun.price * 2
          : action.payload.bun.price * 2,
      beforeDrag: action.payload.common,
    }),
    getDataError: (state, action) => ({ ...initialState, status: "failed" }),
    getDataRequest: (state, action) => ({ ...state, status: "loading" }),
    addElement: (state, action) => {
      if (action.payload.ingredient.type === "bun") {
        return {
          ...state,
          bun: action.payload.ingredient,
          sum:
            state.sum -
            state.bun.price * 2 +
            action.payload.ingredient.price * 2,
        };
      } else {
        return {
          ...state,
          common: [...state.common, action.payload.ingredient],
          sum: state.sum + action.payload.ingredient.price,
        };
      }
    },
    removeElement: (state, action) => ({
      ...state,
      common: [
        ...state.common.slice(0, action.payload.index),
        ...state.common.slice(action.payload.index + 1),
      ],
      sum: state.sum - action.payload.price,
    }),
    swap: (state, action) => {
      const newArr = state.common.map((item, index) => {
        if (index === state.dragIndex) {
          return state.common[state.overIndex];
        }
        if (index === state.overIndex) {
          return state.common[state.dragIndex];
        }
        return item;
      });
      return {
        ...state,
        common: newArr,
        dragIndex: 0,
        overIndex: 0,
      };
    },
    /*setDragItem: (state, action) => {
      return {
        ...state,
        dragItem: state.common[action.payload],
        dragIndex: action.payload,
        beforeDrag: state.common,
      };
    },*/
    setOverItem: (state, action) => {
      return {
        ...state,
        overIndex: action.payload,
      };
    },
    onDragStart: (state, action) => {
      return {
        ...state,
        dragIndex: action.payload,
        overIndex: action.payload,
      };
    },
  },
});

export const constructorReducer = constructor.reducer;
export const constructorActions = constructor.actions;
