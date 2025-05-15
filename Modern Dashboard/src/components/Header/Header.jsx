import React from "react";
import SearchBar from "../utilityComponents/SearchBar";
import NavAndProfile from "./NavAndProfile";
import { toggleSidebar } from "../../store/appSlice.js";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const activeSidebar = useSelector((state) => state.app.active_sidebar);
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="w-full h-16 dark:bg-black/5 dark:text-white/80 dark:border-none border-b  border-white/30 text-white bg-white/20 backdrop-blur-md sticky flex gap-10 justify-between">
      <div className="uppercase text-2xl font-bold self-center ml-4 select-none flex *:self-center gap-4">
        <svg
          onClick={handleMenuToggle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 cursor-pointer ${
            activeSidebar ? "" : "rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
        DASHBOARD
      </div>
      <SearchBar />
      <NavAndProfile />
    </div>
  );
}

export default Header;
