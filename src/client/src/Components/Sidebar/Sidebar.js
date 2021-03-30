import React from "react";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";
import SidebarContent from "./SidebarContent";
import AuthService from "../../Hooks/auth.service";

function SidebarContainer() {
  const currentUser = AuthService.getCurrentUser();
  //console.log(currentUser);
  console.log(currentUser);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <p>Username</p>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Type here to start a new search" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarContent addNewChat />
        <SidebarContent key="1" id="roomID" name="Aggregate A" />
        <SidebarContent key="1" id="roomID" name="Aggregate B" />
        <SidebarContent key="1" id="roomID" name="Aggregate C" />
      </div>
    </div>
  );
}

export default SidebarContainer;
