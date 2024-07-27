import React from "react";
import CardLayout from "../utilityComponents/CardLayout";
import chat from "../../assets/chat.svg";

function Message() {
  return (
    <CardLayout icon={chat} title={"Messages"} style="w-full">
      <div>Message</div>
    </CardLayout>
  );
}

export default Message;
