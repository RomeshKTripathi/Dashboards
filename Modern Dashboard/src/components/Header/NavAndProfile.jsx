import React from "react";
import Profile from "./Profile";
import NavIcon from "./NavIcon";
import { switchActiveLink } from "../../store/appSlice";
import {
  BellIcon,
  MessageBoxIcon,
  SettingsIcon,
  ThemeIcon,
} from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";

function NavAndProfile() {
  const dispatch = useDispatch();

  return (
    <div className="self-center flex gap-8 *:self-center">
      <div className="flex gap-3">
        {useSelector((state) => state.custom.quick_access_theme) && (
          <NavIcon Icon={ThemeIcon} />
        )}
        {useSelector((state) => state.custom.quick_access_messages) && (
          <NavIcon
            Icon={MessageBoxIcon}
            notification={true}
            onClick={() => {
              dispatch(switchActiveLink("messages"));
            }}
          />
        )}
        <NavIcon Icon={BellIcon} notification={true} />
        {useSelector((state) => state.custom.quick_access_settings) && (
          <NavIcon Icon={SettingsIcon} />
        )}
      </div>
      <Profile />
    </div>
  );
}

export default NavAndProfile;
