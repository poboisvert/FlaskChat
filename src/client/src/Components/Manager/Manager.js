import React from "react";
import "./Manager.css";
import FaceIcon from "@material-ui/icons/Face";
import AddBoxIcon from "@material-ui/icons/AddBox";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Manager() {
  return (
    <div className="manager">
      <FaceIcon />
      <a href="/account">My Account</a>
      <AddBoxIcon /> Coins
      <NotificationsIcon /> <a href="/addListing">Manage Listing</a>
      <div className="manager__box">
        <h1>Trending</h1>
        <p>17</p>
      </div>
      <div className="manager__box">
        <h1>You missed</h1>
        <p>26</p>
      </div>
    </div>
  );
}

export default Manager;
