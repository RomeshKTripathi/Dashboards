import React, { useState } from "react";

function CardLayout({ icon, title, children, style }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div
      className={`w-fit h-fit dark:bg-black/30 dark:hover:bg-black/40 dark:border-none bg-white/10 hover:bg-white/20 border border-white/30 rounded-md mt-4   ${style}`}
    >
      <div className="h-8 w-full justify-between flex rounded-t-md dark:bg-black/40 bg-white/40 *:self-center gap-10 px-4 select-none">
        <div className="flex gap-2 *:self-center">
          <img className="size-4" src={icon} alt="" />
          <span className="uppercase text-xs first-letter:text-lg tracking-widest dark:text-white/80 text-black/80">
            {title}
          </span>
        </div>
        <div className="flex dark:*:stroke-white/60 *:stroke-black/60  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="size-5 cursor-pointer dark:hover:stroke-white hover:stroke-black mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <svg
            onClick={() => {
              setVisible(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 cursor-pointer dark:hover:stroke-white hover:stroke-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <img src="" alt="" />
        </div>
      </div>

      <div className="p-4 dark:text-white/80 text-white">{children}</div>
    </div>
  );
}

export default CardLayout;
