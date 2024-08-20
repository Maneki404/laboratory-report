import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import Form from "../classes/Form";

export interface FormState {
  value: Form;
}

const initialState: FormState = {
  value: new Form(null, null, null, null, null, null),
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    set: (
      state,
      action: PayloadAction<{
        form: Form;
      }>
    ) => {
      const { form } = action.payload;
      state.value = form;
    },
  },
});

export const { set } = formSlice.actions;
export const getState = (state: RootState) => state.form.value;

export default formSlice.reducer;
