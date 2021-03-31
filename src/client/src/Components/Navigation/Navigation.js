import React, { useEffect, useState } from "react";
import "./Navigation.css";
import FaceIcon from "@material-ui/icons/Face";
import AddBoxIcon from "@material-ui/icons/AddBox";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AuthService from "../../Hooks/auth-service";

function Navigation() {
  const currentUser = AuthService.getCurrentUser();
  const [coins, setCoins] = useState(0);
  //console.log(currentUser);

  useEffect(() => {
    fetch(`/user/${currentUser}`).then((res) =>
      res.json().then((data) => {
        // console.log(data.markets);
        setCoins(data.coins);
      })
    );
  }, []);
  return (
    <div className="navigation">
      <FaceIcon />
      <a href="/account">My Account</a>
      <AddBoxIcon /> {coins} Coins
      <NotificationsIcon /> <a href="/listing/add">Manage Listing</a>
      <div className="navigation__box">
        <h1>Trending</h1>
        <p>17</p>
      </div>
    </div>
  );
}

export default Navigation;
