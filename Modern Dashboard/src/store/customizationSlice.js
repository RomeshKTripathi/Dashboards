import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show_card_rack: true,
  quick_access_settings: true,
  quick_access_messages: true,
  quick_access_theme: true,
};

const customizationSlice = createSlice({
  name: "custom",
  initialState,
  reducers: {
    toggleShowCardRack: (state) => {
      state.show_card_rack = !state.show_card_rack;
    },
    toggleQuickAccessSettings: (state) => {
      state.quick_access_settings = !state.quick_access_settings;
    },
    toggleQuickAccessMessages: (state) => {
      state.quick_access_messages = !state.quick_access_messages;
    },
    toggleQuickAccessTheme: (state) => {
      state.quick_access_theme = !state.quick_access_theme;
    },
  },
});

export default customizationSlice.reducer;
export const {
  toggleShowCardRack,
  toggleQuickAccessMessages,
  toggleQuickAccessSettings,
  toggleQuickAccessTheme,
} = customizationSlice.actions;
