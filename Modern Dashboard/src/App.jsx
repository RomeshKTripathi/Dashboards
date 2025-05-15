import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/MainSection/Main";
import { links } from "./data/SidebarObject";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="dark:backdrop-opacity-10 dark:backdrop-invert dark:bg-black/50 dark:text-white bg-white/30 overflow-hidden w-screen h-screen ">
        <Header />
        <div className="flex h-full ">
          <Sidebar links={links} />
          <Main />
        </div>
      </div>
    </Provider>
  );
}

export default App;
