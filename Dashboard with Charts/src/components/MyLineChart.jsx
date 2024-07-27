import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const salesData = [
  {
    name: "January",
    uv: 5000,
    pv: 3200,
    amt: 2900,
  },
  {
    name: "February",
    uv: 4500,
    pv: 2800,
    amt: 2700,
  },
  {
    name: "March",
    uv: 5500,
    pv: 4300,
    amt: 3100,
  },
  {
    name: "April",
    uv: 4000,
    pv: 3500,
    amt: 2800,
  },
  {
    name: "May",
    uv: 6000,
    pv: 4700,
    amt: 3500,
  },
  {
    name: "June",
    uv: 7000,
    pv: 5200,
    amt: 4200,
  },
  {
    name: "July",
    uv: 7500,
    pv: 5600,
    amt: 4500,
  },
];

function MyLineChart({ data, width, height, options }) {
  console.log(data);
  return (
    <LineChart
      width={width ?? 500}
      height={height ?? 300}
      data={data ?? salesData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {options.datakey.map((item) => (
        <Line type="monotone" dataKey={item.key} stroke={item.color} />
      ))}
    </LineChart>
  );
}

export default MyLineChart;
