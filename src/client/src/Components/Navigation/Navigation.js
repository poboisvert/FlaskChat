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
        setCoins(data.coins);
      })
    );
  }, []);
  return (
    <div className="navigation">
      <div className="navigation__box">
        <a href="/">
          <h3>Trending</h3>
        </a>
      </div>
      <div className="navigation__box">
        <FaceIcon />
        <a href="/account">My Account</a>
      </div>
      <div className="navigation__box">
        <NotificationsIcon /> <a href="/listing">Quick Add</a>
      </div>
      <div className="navigation__box">
        <AddBoxIcon /> {coins} Coins
      </div>
    </div>
  );
}

export default Navigation;
