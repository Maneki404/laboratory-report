import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "@/lib/slices/hamburgerSlice";
import formReducer from "@/lib/slices/formSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      hamburger: hamburgerReducer,
      form: formReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
