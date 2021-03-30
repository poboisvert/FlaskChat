import React from "react";
import AuthService from "../Hooks/auth-service";
import SidebarContainer from "../Components/Sidebar/Sidebar";
import Listing from "../Components/Listing/Listing";

const MarketManager = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <>
      <SidebarContainer />
      <Listing />
    </>
  );
};

export default MarketManager;
