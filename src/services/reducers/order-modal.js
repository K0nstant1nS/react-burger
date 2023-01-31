import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
  number: null,
  modalOpened: false,
};

const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    makeOrder: (state, action) => ({
      number: action.payload,
      modalOpened: true,
    }),
    orderError: (state, action) => initialState,
    closeModal: (state, action) => ({
      ...state,
      modalOpened: false,
    }),
  },
});

export const orderReducer = order.reducer;
export const orderActions = order.actions;
