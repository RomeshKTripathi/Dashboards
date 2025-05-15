import React from "react";
import SidebarLink from "./SidebarLink";
import { useSelector } from "react-redux";

function Sidebar({ links }) {
  const activeSidebar = useSelector((state) => state.app.active_sidebar);

  return (
    <div
      className={`select-none ${
        activeSidebar ? "min-w-1/6" : ""
      } w-1/6  max-w-1/6  dark:bg-black/40 dark:text-black/80 bg-white/10 border-r dark:border-r-0 border-white/30 min-h-full overflow-scroll no-scrollbar ${
        !activeSidebar
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
