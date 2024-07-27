import React from "react";

function SidebarIcon({ icon, classes }) {
  return (
    <div
      className={`size-10 flex justify-center cursor-pointer hover:bg-neutral-700 group ${classes} `}
    >
      <img className="size-6 self-center" src={icon} alt="/" />
    </div>
  );
}

export default SidebarIcon;
