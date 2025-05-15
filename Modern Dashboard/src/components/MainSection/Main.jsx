import React from "react";
import CardRack from "./CardRack";
import ActiveComponent from "./ActiveComponent";
import { useSelector } from "react-redux";

function Main() {
  const activeLink = useSelector((state) => state.app.active_link);
  return (
    <div className="p-5 w-full justify-evenly overflow-hidden scrollbar-hide mb-10">
      <CardRack />
      <div className="w-full h-full justify-evenly overflow-scroll scrollbar-hide scroll-smooth pb-36">
        <ActiveComponent component={activeLink} />
      </div>
    </div>
  );
}

export default Main;
