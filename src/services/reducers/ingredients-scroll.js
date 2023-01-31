import { createSlice } from "@reduxjs/toolkit/dist";

const ingredientsScroll = createSlice({
  name: "ingredientsScroll",
  initialState: {
    scrolledOn: "",
    bunY: "",
    sauceY: "",
    mainY: "",
    scrollTo: { y: "" },
  },
  reducers: {
    scrollOnBun: (state, action) => ({ ...state, scrolledOn: "bun" }),
    scrollOnSauce: (state, action) => ({ ...state, scrolledOn: "sauce" }),
    scrollOnMain: (state, action) => ({ ...state, scrolledOn: "main" }),
    scrollTo: (state, action) => ({
      ...state,
      scrollTo: { y: action.payload },
    }),
    setStarts: (state, action) => ({
      ...state,
      [action.payload.containerType + "Y"]: action.payload.y,
    }),
  },
});

export const ingredientsScrollReducer = ingredientsScroll.reducer;
export const ingredientsScrollActions = ingredientsScroll.actions;
