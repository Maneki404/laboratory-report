import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import Form from "../classes/Form";

export interface FormState {
  value: Form;
}

const initialState: FormState = {
  value: new Form("", "", 0, "", "", ""),
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<Form>) => {
      state.value = action.payload;
    },
  },
});

export const { setForm } = formSlice.actions;
export const getState = (state: RootState) => state.form.value;

export default formSlice.reducer;
