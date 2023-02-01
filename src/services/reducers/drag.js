import { createSlice } from "@reduxjs/toolkit";

const constructorDraggable = createSlice({
  name: "drag",
  initialState: {
    inemOnDrag: null,
    content: [],
    beforeDrag: [],
  },
  reducers: {
    setContent: (state, action) => ({ ...state, content: action.payload }),
    setOnDrag: (state, action) => {
      return {
        ...state,
        indexOnDrag: state.content[action.payload],
        content: [
          ...state.slice(0, action.payload),
          ...state.slice(action.payload + 1),
        ],
        beforeDrag: state.content,
      };
    },
    setOnDropOut: (state, action) => ({
      ...state,
      content: state.beforeDrag,
      indexOnDrag: null,
    }),
    setOnDropIn: (state, action) => ({
      ...state,
      content: [
        ...state.slice(0, action.payload),
        state.inemOnDrag,
        ...state.slice(action.payload + 1),
      ],
    }),
  },
});

export const constructorDraggableReducer = constructorDraggable.reducer;
export const constructorDraggableActions = constructorDraggable.actions;
