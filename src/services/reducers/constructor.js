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
  dragItem: null,
  dragIndex: null,
  overItem: {},
  overIndex: null,
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
      return {
        ...state,
        dragIndex: null,
        beforeDrag: state.common,
      };
    },
    /*setDragItem: (state, action) => {
      return {
        ...state,
        dragItem: state.common[action.payload],
        dragIndex: action.payload,
        beforeDrag: state.common,
      };
    },
    setOverItem: (state, action) => {
      return {
        ...state,
        overItem: state.common[action.payload],
        overIndex: action.payload,
      };
    },*/
    onOver: (state, action) => {
      const newArr = [
        ...state.beforeDrag.slice(0, state.dragIndex),
        ...state.beforeDrag.slice(state.dragIndex + 1),
      ];

      newArr.splice(action.payload, 0, state.beforeDrag[state.dragIndex]);
      return {
        ...state,
        common: newArr,
      };
    },
    onDragStart: (state, action) => {
      return {
        ...state,
        dragIndex: action.payload,
      };
    },
  },
});

export const constructorReducer = constructor.reducer;
export const constructorActions = constructor.actions;
