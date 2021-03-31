import React from "react";
import "./Navigation.css";
import FaceIcon from "@material-ui/icons/Face";
import AddBoxIcon from "@material-ui/icons/AddBox";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Navigation() {
  return (
    <div className="navigation">
      <FaceIcon />
      <a href="/account">My Account</a>
      <AddBoxIcon /> Coins
      <NotificationsIcon /> <a href="/listing/add">Manage Listing</a>
      <div className="navigation__box">
        <h1>Trending</h1>
        <p>17</p>
      </div>
      <div className="navigation__box">
        <h1>You missed</h1>
        <p>26</p>
      </div>
    </div>
  );
}

export default Navigation;
