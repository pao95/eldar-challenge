import { createSlice } from "@reduxjs/toolkit";

interface SpinnerState {
  show: boolean;
}

const initialState: SpinnerState = {
  show: false,
};

export const spinnerSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showSpinner: (state: SpinnerState) => {
      state.show = true;
    },
    hiddeSpinner: (state: SpinnerState) => {
      state.show = false;
    },
  },
});

export const { showSpinner, hiddeSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
