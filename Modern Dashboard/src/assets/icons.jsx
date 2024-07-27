import React, { useState } from "react";

export const ThemeIcon = ({ style, changeTheme }) => {
  const [isDark, setIsDark] = useState(
    document.getElementsByTagName("body")[0].classList.contains("dark")
  );
  // const animation
  if (!isDark)
    return (
      <svg
        onClick={() => {
          changeTheme();
          setIsDark((prev) => !prev);
        }}
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(-45)"
        viewBox="-1.28 -1.28 34.56 34.56"
        className={`size-5 self-center *:fill-blue stroke-white cursor-pointer  duration-200`}
      >
        <g>
          <g fill="none" fillRule="evenodd" strokeWidth="0">
            <g fill="white" transform="translate(-575 -829)">
              <path d="M586.256 845c0-6.9 4.479-12.764 10.744-15.009a16.63 16.63 0 00-5.628-.991C582.33 829 575 836.164 575 845c0 8.837 7.33 16 16.372 16a16.63 16.63 0 005.628-.991c-6.265-2.245-10.744-8.108-10.744-15.009"></path>
            </g>
          </g>
        </g>
      </svg>
    );
  if (isDark)
    return (
      <svg
        onClick={() => {
          changeTheme();
          setIsDark((prev) => !prev);
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={`size-6 hover:scale-110 duration-200 cursor-pointer`}
      >
        <g fill="#fd0">
          <path d="M17 12a5 5 0 11-10 0 5 5 0 0110 0z"></path>
          <path
            fillRule="evenodd"
            d="M12 1.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V2a.75.75 0 01.75-.75zM3.669 3.716a.75.75 0 011.06-.047L6.95 5.7a.75.75 0 11-1.012 1.107L3.716 4.776a.75.75 0 01-.047-1.06zm16.662 0a.75.75 0 01-.047 1.06l-2.222 2.031A.75.75 0 0117.05 5.7l2.222-2.031a.75.75 0 011.06.047zM1.25 12a.75.75 0 01.75-.75h2a.75.75 0 010 1.5H2a.75.75 0 01-.75-.75zm18 0a.75.75 0 01.75-.75h2a.75.75 0 010 1.5h-2a.75.75 0 01-.75-.75zm-2.224 5.025a.75.75 0 011.06 0l2.222 2.223a.75.75 0 01-1.06 1.06l-2.223-2.222a.75.75 0 010-1.06zm-10.051 0a.75.75 0 010 1.061l-2.223 2.222a.75.75 0 01-1.06-1.06l2.222-2.223a.75.75 0 011.06 0zM12 19.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          ></path>
        </g>
      </svg>
    );
};

export const SettingsIcon = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`size-6 stroke-white/70 fill-white/70 hover:fill-white hover:stroke-white group-hover:stroke-white group-hover:fill-white duration-100 ${style}`}
      viewBox="0 0 1920 1920"
    >
      <path
        fillRule="evenodd"
        d="M1703.534 960c0-41.788-3.84-84.48-11.633-127.172l210.184-182.174-199.454-340.856-265.186 88.433c-66.974-55.567-143.323-99.389-223.85-128.415L1158.932 0h-397.78L706.49 269.704c-81.43 29.138-156.423 72.282-223.962 128.414l-265.073-88.32L18 650.654l210.184 182.174C220.39 875.52 216.55 918.212 216.55 960s3.84 84.48 11.633 127.172L18 1269.346l199.454 340.856 265.186-88.433c66.974 55.567 143.322 99.389 223.85 128.415L761.152 1920h397.779l54.663-269.704c81.318-29.138 156.424-72.282 223.963-128.414l265.073 88.433 199.454-340.856-210.184-182.174c7.793-42.805 11.633-85.497 11.633-127.285m-743.492 395.294c-217.976 0-395.294-177.318-395.294-395.294 0-217.976 177.318-395.294 395.294-395.294 217.977 0 395.294 177.318 395.294 395.294 0 217.976-177.317 395.294-395.294 395.294"
      ></path>
    </svg>
  );
};

export const MessageBoxIcon = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffffbb"
      className={`size-6 stroke-white/70 hover:stroke-white group-hover:stroke-white duration-100 ${style}`}
    >
      <g>
        <g>
          <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.96">
            <path d="M4 8.2L12 14.1 20 8.2"></path>
            <rect width="18" height="14" x="3" y="6.5" rx="2" ry="2"></rect>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const BellIcon = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffffaa"
      viewBox="0 0 512 512"
      className={`size-6 stroke-white/50 hover:stroke-white group-hover:stroke-white duration-100 ${style}`}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      >
        <path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"></path>
      </g>
    </svg>
  );
};

export const CalanderIcon = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffffaa"
      stroke="#ffffffaa"
      viewBox="0 0 24 24"
      className={`size-5 fill-white/70 stroke-white/70 hover:fill-white hover:stroke-white group-hover:fill-white group-hover:stroke-white ${style}`}
    >
      <g>
        <path d="M22 2.25h-3.25V.75a.75.75 0 00-1.5-.001V2.25h-4.5V.75a.75.75 0 00-1.5-.001V2.25h-4.5V.75a.75.75 0 00-1.5-.001V2.25H2a2 2 0 00-2 1.999v17.75a2 2 0 002 2h20a2 2 0 002-2V4.249a2 2 0 00-2-1.999zM22.5 22a.5.5 0 01-.499.5H2a.5.5 0 01-.5-.5V4.25a.5.5 0 01.5-.499h3.25v1.5a.75.75 0 001.5.001V3.751h4.5v1.5a.75.75 0 001.5.001V3.751h4.5v1.5a.75.75 0 001.5.001V3.751H22a.5.5 0 01.499.499z"></path>
        <path d="M5.25 9h3v2.25h-3zM5.25 12.75h3V15h-3zM5.25 16.5h3v2.25h-3zM10.5 16.5h3v2.25h-3zM10.5 12.75h3V15h-3zM10.5 9h3v2.25h-3zM15.75 16.5h3v2.25h-3zM15.75 12.75h3V15h-3zM15.75 9h3v2.25h-3z"></path>
      </g>
    </svg>
  );
};

export const CartIcon = ({ style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`size-6 stroke-white/70 hover:stroke-white group-hover:stroke-white duration-100 ${style}`}
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 5l-2 7H7.377M20 16H8L6 3H3m13 2.5h-2.5m0 0H11m2.5 0V8m0-2.5V3M9 20a1 1 0 11-2 0 1 1 0 012 0zm11 0a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
    </svg>
  );
};
