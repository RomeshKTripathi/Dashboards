import React, { useContext } from "react";
import CardRack from "./CardRack";
import ActiveComponent from "./ActiveComponent";
import { activeMenuContext } from "../../context/sidemenuContext";

function Main() {
  return (
    <div className="p-5 w-full justify-evenly overflow-scroll no-scrollbar mb-10">
      <CardRack />
      <ActiveComponent component={useContext(activeMenuContext).activeMenu} />
    </div>
  );
}

export default Main;
