import React from "react";

function RoundButton({
  icon,
  notification,
  classes,
  notification_style,
  animation,
}) {
  return (
    <div
      className={`max-w-8 max-h-8 box-border p-[6px] cursor-pointer rounded-full self-center group relative  ${classes} `}
    >
      {icon && (
        <img
          className={`h-full w-full group-hover:${
            !notification ? animation : ""
          }`}
          src={icon}
          alt=""
        />
      )}
      {notification ? (
        <div
          className={`absolute min-h-4 max-h-4 min-w-4 max-w-4 -top-1 -right-1 rounded-full text-center  text-white font-semibold text-[10px] group-hover:-translate-y-1 duration-200 ${notification_style}`}
        >
          {notification}
        </div>
      ) : null}
    </div>
  );
}

export default RoundButton;
