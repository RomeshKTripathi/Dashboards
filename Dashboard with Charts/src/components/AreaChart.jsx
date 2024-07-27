import React, { useState } from "react";
import ChartButtons from "./ChartButtons";
import MyLineChart from "./MyLineChart";

function AreaChart({ chartname, classes, Chart }) {
  const [display, setDisplay] = useState(true);
  const closeChart = () => {
    setDisplay(false);
  };
  return display ? (
    <div className={`w-fit h-fit resize ${classes}`}>
      <div className="h-fit bg-gray-50 flex justify-between p-4 rounded-t-md">
        <div className="text-lg uppercase font-bold text-neutral-600 ">
          {chartname ? chartname : "Chart name"}
        </div>
        <ChartButtons handleClose={closeChart} />
      </div>

      <div className="p-4">{Chart}</div>
    </div>
  ) : null;
}

export default AreaChart;
