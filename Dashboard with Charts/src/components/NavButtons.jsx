import React from "react";
import chat from "../assets/chat.svg";
import message from "../assets/message.svg";
import bell from "../assets/bell.svg";
import RoundButton from "./RoundButton";
function NavButtons() {
  return (
    <div className="flex self-center ml-4">
      <RoundButton
        notification={9}
        classes={"bg-gray-200 ml-6 hover:bg-transparent duration-100 "}
        icon={chat}
        animation={"animate-[wiggle_0.3s]"}
        notification_style={"bg-sky-600"}
      />
      <RoundButton
        notification={0}
        classes={"bg-gray-200 ml-6 hover:bg-transparent duration-100"}
        icon={message}
        animation={"animate-[wiggle_0.3s]"}
      />
      <RoundButton
        notification={11}
        notification_style={"bg-lime-600"}
        classes={"bg-gray-200 ml-6 hover:bg-transparent duration-100"}
        icon={bell}
        animation={"animate-[wiggle_0.3s]"}
      />
    </div>
  );
}

export default NavButtons;
