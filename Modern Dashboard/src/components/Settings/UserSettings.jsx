import React from "react";
import setting from "../../assets/setting.svg";
import CardLayout from "../utilityComponents/CardLayout";

function UserSettings() {
  return (
    <CardLayout icon={setting} title={"User Settings"} style="w-full">
      <div>User Settings</div>
    </CardLayout>
  );
}

export default UserSettings;
