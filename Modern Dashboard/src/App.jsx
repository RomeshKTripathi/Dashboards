import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/MainSection/Main";
import { links } from "./data/SidebarObject";
import {
  sidebarContext,
  activeMenuContext,
  themeContext,
} from "./context/sidemenuContext";

function App() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [showSidebar, setShowSidebar] = useState(false);

  const changeTheme = () => {
    const body = document.getElementsByTagName("body");
    console.log(body[0].classList);
    // return;
    if (body[0].classList.contains("dark")) {
      body[0].classList.remove("dark");
    } else {
      body[0].classList.add("dark");
    }
  };

  return (
    <themeContext.Provider value={changeTheme}>
      <activeMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
        <sidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
          <div className="dark:backdrop-opacity-10 dark:backdrop-invert dark:bg-black/50 dark:text-white bg-white/30 overflow-hidden w-screen h-screen ">
            <Header />
            <div className="flex h-full ">
              <Sidebar links={links} />
              <Main />
            </div>
          </div>
        </sidebarContext.Provider>
      </activeMenuContext.Provider>
    </themeContext.Provider>
  );
}

export default App;
