import React from "react";
import FlexContent from "../Containers/FlexContent";
import CardLayout from "../utilityComponents/CardLayout";
import Home from "../../assets/Home.svg";

function Dashboard() {
  return (
    <FlexContent>
      <CardLayout icon={Home} title={"Dashboard"}>
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore illo
        cum.
      </CardLayout>
    </FlexContent>
  );
}

export default Dashboard;
