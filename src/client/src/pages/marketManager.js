import React from 'react';
import SidebarContainer from '../components/Sidebar/Sidebar';
import Listing from '../components/Listing/Listing';

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
