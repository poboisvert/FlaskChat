import React from "react";
import AuthService from "../Hooks/auth-service";
import Market from "../Components/Market/Market";
import SidebarContainer from "../Components/Sidebar/Sidebar";

const Home = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <>
      <SidebarContainer />
      <Market />
    </>
  );
};

export default Home;
