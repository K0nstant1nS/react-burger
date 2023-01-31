import { createSlice } from "@reduxjs/toolkit";

const drag = createSlice({
  name: "drag",
  initialState: [],
  reducers: {
    setOnDrag: (state, action) => action.payload,
  },
});
