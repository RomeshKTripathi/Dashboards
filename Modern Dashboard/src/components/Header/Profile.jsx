import React from "react";
import profile from "../../assets/profile.svg";

function Profile() {
  return (
    <div className="flex *:self-center gap-2 mr-2 select-none">
      <span className="uppercase text-base first-letter:text-xl">Romesh</span>
      <img
        className="size-10 rounded-full border border-white/10"
        src={profile}
        alt=""
      />
    </div>
  );
}

export default Profile;
