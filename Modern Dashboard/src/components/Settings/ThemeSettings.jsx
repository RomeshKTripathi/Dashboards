import React from "react";
import setting from "../../assets/setting.svg";
import CardLayout from "../utilityComponents/CardLayout";

function ThemeSettings() {
  return (
    <CardLayout icon={setting} title={"Theme Settings"} style="w-full">
      <div>Theme Settings</div>
    </CardLayout>
  );
}

export default ThemeSettings;
