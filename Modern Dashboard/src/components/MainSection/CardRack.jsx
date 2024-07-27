import React from "react";
import stats from "../../assets/stats.svg";
import users from "../../assets/users.svg";
import eye from "../../assets/eye.svg";
import cart from "../../assets/cart.svg";
import Card from "./Card";
const cardData = [
  {
    id: 1,
    data: "98.5%",
    text: "Stats of the Month",
    icon: stats,
    classes: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
  {
    id: 2,
    data: "24.81%",
    text: "New registrations",
    icon: users,
    classes: "bg-gradient-to-r from-blue-500 to-purple-500",
  },
  {
    id: 3,
    data: "31,124",
    text: "Total visits of Month",
    icon: eye,
    classes: "bg-gradient-to-r from-sky-600 to-blue-400",
  },
  {
    id: 4,
    data: "$2,12,684",
    text: "Total Revenue of Month",
    icon: cart,
    classes: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
];

function CardRack() {
  return (
    <div className="w-full flex gap-5 *:flex-grow flex-wrap">
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default CardRack;
