import React, { useEffect, useState } from "react";
import AuthService from "../../Hooks/auth-service";
import Navigation from "../Navigation/Navigation";

function Profile() {
  const currentUser = AuthService.getCurrentUser();
  const [username, setUsername] = useState(null);
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    fetch(`/user/${currentUser}`).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setCoins(data.coins);
        setUsername(data.username);
      })
    );
  }, []);

  return (
    <div className="market">
      <div className="market__header">
        <div className="market__headerInfo">
          <h3>Hello</h3>
        </div>
        <div className="market__headerRight"></div>
      </div>
      <div className="market__container">
        <div className="market__items">
          For the moment this page don't offer options, but you are {username}{" "}
          with {coins}
          coins.
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Profile;
