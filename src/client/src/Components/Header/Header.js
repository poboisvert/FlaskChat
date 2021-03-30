import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TheatersIcon from "@material-ui/icons/Theaters";
import InputOption from "../../Shared/InputOption";

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <InputOption Icon={HomeIcon} title="Home" link="/" />
        <InputOption Icon={TheatersIcon} title="My Account" link="" />
        <InputOption Icon={AccountCircleIcon} title="My Account" link="/" />
      </div>
    </div>
  );
}
