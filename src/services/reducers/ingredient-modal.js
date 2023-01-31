import { createSlice } from "@reduxjs/toolkit/dist";

const ingredientDetails = createSlice({
  name: "ingredientDetails",
  initialState: null,
  reducers: {
    setIngredientDetails: (state, action) => ({ ...action.payload }),
    removeIngredientDetails: (state, action) => null,
  },
});

export const ingredientDetailsReducer = ingredientDetails.reducer;
export const ingredientDetailsActions = ingredientDetails.actions;
