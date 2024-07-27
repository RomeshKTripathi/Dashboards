import React from "react";
import profile from "../assets/profile.svg";

function RoundProfile({ profileImage, classes }) {
  return (
    <div
      className={`rounded-full self-center bg-gray-200 ${
        classes ? classes : "size-8"
      }`}
    >
      <img src={profileImage ?? profile} alt="/" />
    </div>
  );
}

export default RoundProfile;
