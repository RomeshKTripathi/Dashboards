import React from "react";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import ProfileButton from "./ProfileButton";
import recycle from "../assets/recycle.svg";

function Header() {
  return (
    <header className="h-16 bg bg-white w-full sticky shadow-sm flex ">
      <Logo logo={recycle} />
      <NavButtons />
      <ProfileButton />
    </header>
  );
}

export default Header;
