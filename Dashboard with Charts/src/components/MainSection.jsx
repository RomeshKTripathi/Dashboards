import React from "react";
import AreaChart from "./AreaChart";
import MyLineChart from "./MyLineChart";
import MyStackedAreaChart from "./MyStackedAreaChart";
import { covidChart } from "../data/CovidData";
import { salesChart } from "../data/salesData";
import { temperatureChart } from "../data/temperatureData";
import { trafficChart } from "../data/trafficData";

function MainSection() {
  return (
    <div className="w-full h-full *:bg-white *:rounded-md *:shadow-md overflow-scroll rounded-md p-4 mb-4 flex gap-5 flex-wrap">
      {/* <AreaChart chartname={"Line "} classes={"w-60"} Chart={<MyLineChart />} /> */}
      <AreaChart
        chartname={covidChart.name}
        classes={"w-80"}
        Chart={
          <MyLineChart data={covidChart.data} options={covidChart.options} />
        }
      />
      <AreaChart
        chartname={salesChart.name}
        classes={"w-90"}
        Chart={
          <MyLineChart data={salesChart.data} options={salesChart.options} />
        }
      />
      <AreaChart
        chartname={temperatureChart.name}
        classes={"w-90"}
        Chart={
          <MyLineChart
            data={temperatureChart.data}
            options={temperatureChart.options}
          />
        }
      />
      <AreaChart
        chartname={trafficChart.name}
        classes={"w-90"}
        Chart={
          <MyLineChart
            data={trafficChart.data}
            options={trafficChart.options}
          />
        }
      />
      <AreaChart
        chartname={"Stacked Area "}
        classes={"w-80 h-50"}
        Chart={<MyStackedAreaChart />}
      />
    </div>
  );
}

export default MainSection;
