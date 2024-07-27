import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const dummy = [
  {
    name: "Page X",
    uv: 5200,
    pv: 3500,
    amt: 3200,
  },
  {
    name: "Page Y",
    uv: 4100,
    pv: 2100,
    amt: 2900,
  },
  {
    name: "Page Z",
    uv: 3500,
    pv: 7200,
    amt: 3300,
  },
  {
    name: "Page W",
    uv: 2900,
    pv: 4100,
    amt: 2500,
  },
  {
    name: "Page V",
    uv: 3700,
    pv: 5300,
    amt: 3100,
  },
  {
    name: "Page U",
    uv: 4500,
    pv: 6100,
    amt: 4100,
  },
  {
    name: "Page T",
    uv: 6200,
    pv: 4200,
    amt: 5000,
  },
];

function MyStackedAreaChart({ data, width, height }) {
  return (
    <AreaChart
      width={width ?? 500}
      height={height ?? 300}
      data={data ?? dummy}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}

export default MyStackedAreaChart;
