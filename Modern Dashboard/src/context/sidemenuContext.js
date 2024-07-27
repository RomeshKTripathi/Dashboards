import { createContext } from "react";

export const sidebarContext = createContext();
export const activeMenuContext = createContext();
export const themeContext = createContext();
// replace every thing with reducers.

export const initialState = {
  sidebar: true, // opend
  activeMenuContext: "dashboard", // default window opend
  theme: "dark", // default theme
};
