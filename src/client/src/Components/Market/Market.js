import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Market.css";
import { MarketCard } from "./MarketCard";
import AuthService from "../../Hooks/auth.service";
import { useHistory } from "react-router-dom";
import Manager from "../Manager/Manager";

function Market() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/movies").then((response) =>
      response.json().then((data) => {
        // console.log(data.movies);
        setMovies(data.movies);
      })
    );
  }, []);

  async function logOut() {
    await AuthService.logout();
    history.push("/logout");
  }
  return (
    <div className="market">
      <div className="market__header">
        <div className="market__headerInfo">
          <h3>Aggregate A</h3>
          <p>Last updated at ...</p>
        </div>
        <div className="market__headerRight">
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton onClick={logOut}>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className="market__container">
        <div className="market__items">
          <MarketCard movies={movies} />
        </div>
        <Manager />
      </div>
    </div>
  );
}

export default Market;
