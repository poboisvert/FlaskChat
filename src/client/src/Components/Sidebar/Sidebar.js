import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import SidebarContent from "./SidebarContent";
import AuthService from "../../Hooks/auth-service";
//
import { IconButton } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//
import { useHistory } from "react-router-dom";

function SidebarContainer() {
  const [datas, setDatas] = useState([]);
  //
  const currentUser = AuthService.getCurrentUser();
  //console.log(currentUser);
  const history = useHistory();
  //
  async function logOut() {
    await AuthService.logout();
    history.push("/logout");
  }
  //

  useEffect(() => {
    fetch("/markets").then((res) =>
      res.json().then((data) => {
        setDatas(data.markets);
      })
    );
  }, []);
  //console.log(channels);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <p>Hi! {currentUser}</p>
        <IconButton onClick={logOut}>
          <ExitToAppIcon />
        </IconButton>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Type here to start a new search" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarContent addNewChat />
        {datas.map((data) => (
          //  console.log(channel)
          <SidebarContent key={data.channel} id="roomID" name={data.channel} />
        ))}
      </div>
    </div>
  );
}

export default SidebarContainer;
