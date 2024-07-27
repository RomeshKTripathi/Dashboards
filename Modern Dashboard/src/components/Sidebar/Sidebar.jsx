import React, { useContext } from "react";
import SidebarLink from "./SidebarLink";
import { sidebarContext } from "../../context/sidemenuContext.js";

function Sidebar({ links }) {
  const { showSidebar } = useContext(sidebarContext);
  console.log(showSidebar);
  return (
    <div
      className={`select-none ${
        !showSidebar ? "min-w-1/6" : ""
      } w-1/6  max-w-1/6  dark:bg-black/40 dark:text-black/80 bg-white/10 border-r dark:border-r-0 border-white/30 min-h-full overflow-scroll no-scrollbar ${
        showSidebar
          ? "transition-[max-width] max-w-0 duration-200"
          : "max-w-48 duration-200"
      }`}
    >
      {links.map((link) => (
        <SidebarLink key={link.id} {...link} />
      ))}
    </div>
  );
}

export default Sidebar;
