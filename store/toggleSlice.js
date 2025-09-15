import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false, // start with false
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    turnOn: (state) => {
      state.value = true;
    },
    turnOff: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { turnOn, turnOff, toggle } = toggleSlice.actions;
export default toggleSlice.reducer;
