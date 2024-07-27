import React, { useContext } from "react";
import Profile from "./Profile";
import NavIcon from "./NavIcon";
import { themeContext } from "../../context/sidemenuContext";
import {
  BellIcon,
  MessageBoxIcon,
  SettingsIcon,
  ThemeIcon,
} from "../../assets/icons";

function NavAndProfile() {
  const changeTheme = useContext(themeContext);

  return (
    <div className="self-center flex gap-8 *:self-center">
      <div className="flex gap-3">
        <NavIcon changeTheme={changeTheme} Icon={ThemeIcon} />
        <NavIcon Icon={MessageBoxIcon} notification={true} />
        <NavIcon Icon={BellIcon} notification={true} />
        <NavIcon Icon={SettingsIcon} />
      </div>
      <Profile />
    </div>
  );
}

export default NavAndProfile;
