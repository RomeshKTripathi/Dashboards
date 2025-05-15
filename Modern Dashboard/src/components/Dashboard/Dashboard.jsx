import React from "react";
import FlexContent from "../Containers/FlexContent";
import CardLayout from "../utilityComponents/CardLayout";
import Home from "../../assets/Home.svg";
import MyBarChart from "../charts/MyBarChart";
import MyCustomBarChart from "../charts/MyCustomBarChart";
import MySimpleAreaChart from "../charts/MySimpleAreaChart";
import MyLineChart from "../charts/MyLineChart";

function Dashboard() {
  return (
    <FlexContent>
      <CardLayout icon={Home} title={"Global Revenue"}>
        <MyLineChart />
      </CardLayout>
      <CardLayout icon={Home} title={"Global Revenue"}>
        <MyCustomBarChart />
      </CardLayout>
      <CardLayout icon={Home} title={"View Status"}>
        <MyBarChart />
      </CardLayout>
      <CardLayout icon={Home} title={"Sales"}>
        <MySimpleAreaChart />
      </CardLayout>
    </FlexContent>
  );
}

export default Dashboard;
