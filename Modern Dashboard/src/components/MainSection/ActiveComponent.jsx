import React from "react";
import Message from "../Message/Message";
import Dashboard from "../Dashboard/Dashboard";
import UserSettings from "../Settings/UserSettings";
import ThemeSettings from "../Settings/ThemeSettings";

// This component is responsible for rendering the active component based on the current state of the application

const componentObject = {
    messages: <Message />,
    "user settings": <UserSettings />,
    "theme setting": <ThemeSettings />,
    dashboard: <Dashboard />,
};

function ActiveComponent({ component }) {
    return componentObject[component] ?? <Dashboard />;
}

export default ActiveComponent;
