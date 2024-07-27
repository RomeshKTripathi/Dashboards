import React from "react";
import SidebarIcon from "./SidebarIcon";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
function Sidebar() {
  return (
    <section className="h-full bg-neutral-800 w-10">
      <SidebarIcon icon={icon1} />
      <SidebarIcon icon={icon2} />
      <SidebarIcon icon={icon3} />
      <SidebarIcon icon={icon4} />
    </section>
  );
}

export default Sidebar;
