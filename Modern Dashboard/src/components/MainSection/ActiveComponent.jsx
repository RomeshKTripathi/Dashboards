import React from "react";
import Message from "../Message/Message";
import Dashboard from "../Dashboard/Dashboard";
import UserSettings from "../Settings/UserSettings";
import ThemeSettings from "../Settings/ThemeSettings";

function ActiveComponent({ component }) {
  console.log(component);
  switch (component) {
    case "messages":
      return <Message />;
    case "user settings":
      return <UserSettings />;
    case "theme setting":
      return <ThemeSettings />;
    default:
      return <Dashboard />;
  }
}

export default ActiveComponent;
