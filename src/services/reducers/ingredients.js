import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: [],
};

const ingredients = createSlice({
  name: "ingredients",
  initialState: initialState,
  reducers: {
    getDataSuccess: (state, action) => ({
      ...state,
      status: "success",
      data: action.payload,
    }),
    getDataError: (state, action) => ({ ...initialState, status: "failed" }),
    getDataRequest: (state, action) => ({ ...state, status: "loading" }),
  },
});

export const ingredientsReducer = ingredients.reducer;
export const ingredientsActions = ingredients.actions;
