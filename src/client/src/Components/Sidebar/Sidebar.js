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
        //console.log(data);
        setDatas(data.markets);
      })
    );
  }, []);

  // console.log(datas);

  const GroupBy = datas.reduce((uniqueCat, { channel, title }) => {
    if (!uniqueCat[channel]) uniqueCat[channel] = [];
    uniqueCat[channel].push(title);
    return uniqueCat;
  }, {});
  //console.log(Object.keys(GroupBy));

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

        {Object.keys(GroupBy).map((item) => (
          <SidebarContent
            key={item}
            id="roomID"
            name={item}
            url={`markets/${item}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SidebarContainer;
