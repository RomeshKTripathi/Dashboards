import React from "react";

function NavIcon({ Icon, notification = false, style, ...props }) {
  return (
    <div className="flex group">
      <Icon style={"cursor-pointer"} {...props} />
      {notification ? (
        <div className="size-2 bg-red-500 rounded-full -ml-1.5 animate-pulse group-hover:animate-ping duration-150"></div>
      ) : null}
    </div>
  );
}

export default NavIcon;
