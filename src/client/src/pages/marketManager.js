import React from "react";
import SidebarContainer from "../Components/Sidebar/Sidebar";
import Listing from "../Components/Listing/Listing";

const MarketManager = ({ match }) => {
  //console.log(match);
  return (
    <>
      <SidebarContainer />
      <Listing id={match.params.id} />
    </>
  );
};

export default MarketManager;
