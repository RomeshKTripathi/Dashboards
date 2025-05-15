import React from "react";
import setting from "../../assets/setting.svg";
import CardLayout from "../utilityComponents/CardLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleQuickAccessSettings,
  toggleQuickAccessTheme,
  toggleQuickAccessMessages,
  toggleShowCardRack,
} from "../../store/customizationSlice.js";

const Lagend = ({ text }) => {
  return (
    <span className="text-lg first-letter:text-xl font-semibold ">{text}</span>
  );
};

function ThemeSettings() {
  const cardRackStatus = useSelector((state) => state.custom.show_card_rack);
  const quickSettings = useSelector(
    (state) => state.custom.quick_access_settings
  );
  const quickMessages = useSelector(
    (state) => state.custom.quick_access_messages
  );
  const quickTheme = useSelector((state) => state.custom.quick_access_theme);
  const dispatch = useDispatch();

  return (
    <CardLayout icon={setting} title={"Theme Settings"} style="w-full">
      <div className={`flex gap-5 font-extralight *:grow`}>
        <div className="*:my-4">
          <Lagend text="Customization" />
          <div
            onClick={() => {
              dispatch(toggleShowCardRack());
            }}
            className={`accent-violet-600 flex gap-2 `}
          >
            <input
              checked={cardRackStatus}
              className={``}
              type="checkbox"
              name=""
              id="hide-cards"
            />
            <label htmlFor="hide-cards">Show Cards Rack</label>
          </div>
          <Lagend text="Quick Access Customization" />
          <div
            onClick={() => {
              dispatch(toggleQuickAccessSettings());
            }}
            className={`accent-violet-600 flex gap-2 `}
          >
            <input
              checked={quickSettings}
              className={``}
              type="checkbox"
              name=""
              id="quick-access-settings"
            />
            <label htmlFor="quick-access-settings">Settings</label>
          </div>
          <div
            onClick={() => {
              dispatch(toggleQuickAccessMessages());
            }}
            className={`accent-violet-600 flex gap-2 `}
          >
            <input
              checked={quickMessages}
              className={``}
              type="checkbox"
              name=""
              id="quick-access-messages"
            />
            <label htmlFor="quick-access-messages">Messages</label>
          </div>
          <div
            onClick={() => {
              dispatch(toggleQuickAccessTheme());
            }}
            className={`accent-violet-600 flex gap-2 `}
          >
            <input
              checked={quickTheme}
              className={``}
              type="checkbox"
              name=""
              id="quick-theme-change"
            />
            <label htmlFor="quick-theme-change">Quick Theme Change</label>
          </div>
        </div>
        <div className="*:my-4">
          <Lagend text={"Style setting"} />
        </div>
      </div>
    </CardLayout>
  );
}

export default ThemeSettings;
