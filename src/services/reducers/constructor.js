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
      /*const newArr = [
        ...state.common.slice(0, action.payload.dragIndex),
        ...state.common.slice(action.payload.dragIndex + 1),
      ];
      const targetElement = state.common[action.payload.dragIndex];

      newArr.splice(action.payload.dropIndex, 0, targetElement);
      return {
        ...state,
        common: newArr,
      };*/
      const newArr = state.common.map((item, index) => {
        if (index === state.dragIndex) {
          return state.overItem;
        }
        if (index === state.overIndex) {
          return state.dragItem;
        }
        return item;
      });
      console.log(newArr);

      return {
        ...state,
        common: newArr,
        dragItem: null,
        dragIndex: null,
        overItem: {},
        overIndex: null,
      };
    },
    setDragItem: (state, action) => {
      return {
        ...state,
        dragItem: state.common[action.payload],
        dragIndex: action.payload,
      };
    },
    setOverItem: (state, action) => {
      return {
        ...state,
        overItem: state.common[action.payload],
        overIndex: action.payload,
      };
    },
  },
});

export const constructorReducer = constructor.reducer;
export const constructorActions = constructor.actions;
