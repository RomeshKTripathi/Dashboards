import React from "react";
import RoundButton from "./RoundButton";
import setting from "../assets/setting.svg";
import RoundProfile from "./RoundProfile";

function ProfileButton() {
  return (
    <div className="h-full flex align-middle ml-auto mr-6 gap-4 cursor-pointer">
      <RoundProfile />
      <RoundButton
        icon={setting}
        classes={"bg-gray-200"}
        animation={"animate-[rotate_0.5s]"}
      />
    </div>
  );
}

export default ProfileButton;
