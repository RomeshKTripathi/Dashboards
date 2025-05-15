import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import customizationReducer from "./customizationSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
    custom: customizationReducer,
  },
});
