import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  active_sidebar: true,
  active_link: "dashboard", // which sidebar link is active at current moment.
  dark_theme: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      state.theme = action.payload;
      if (action.payload == "dark") state.dark_theme = true;
      else state.dark_theme = false;
    },
    toggleSidebar: (state) => {
      state.active_sidebar = !state.active_sidebar;
    },
    switchActiveLink: (state, action) => {
      state.active_link = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, switchTheme, switchActiveLink } =
  appSlice.actions;

export default appSlice.reducer;
