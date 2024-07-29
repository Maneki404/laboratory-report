import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

export interface HamburgerState {
  value: string;
}

const initialState: HamburgerState = {
  value: "none",
};

export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    none: (state) => {
      state.value = "none";
    },
    open: (state) => {
      state.value = "open";
    },
    close: (state) => {
      state.value = "close";
    },
    still: (state) => {
      state.value = "still";
    },
  },
});

export const { open, close, none, still } = hamburgerSlice.actions;
export const getState = (state: RootState) => state.hamburger.value;

export default hamburgerSlice.reducer;
