import React from "react";
import RoundButton from "./RoundButton";
import hamburger from "../assets/hamburger.svg";

function Logo({ logo, text, classes }) {
  return (
    <div className={`min-w-60 h-full flex group`}>
      <div className={`w-full h-full bg-red-700 flex justify-center`}>
        <div className="self-center uppercase mx-auto text-white font-bold text-lg flex gap-2">
          {logo && (
            <img
              className="size-8 group-hover:-rotate-90 duration-150"
              src={logo}
            ></img>
          )}
          {text ? text : "Brand Logo"}
        </div>
        <RoundButton
          icon={hamburger}
          classes={
            "bg-red-700 -mr-4  cursor-pointer hover:bg-red-500 duration-200 "
          }
        />
      </div>
    </div>
  );
}

export default Logo;
