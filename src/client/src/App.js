import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import AuthService from "./Hooks/auth-service";
import MarketManager from "./pages/marketManager";

import Home from "./pages/home";
import Account from "./pages/account";
import Market from "./Components/Market/Market";
import SidebarContainer from "./Components/Sidebar/Sidebar";
import Listing from "./Components/Listing/Listing";
// Style
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const currentUser = AuthService.getCurrentUser();
  return (
    <>
      <div className="app">
        <div className="app__body">
          {currentUser ? (
            <>
              <Switch>
                <Route path="/listing/:id" component={MarketManager} />

                <Route exact path="/listing" component={MarketManager} />

                <Route path="/channel/:name" component={Home}></Route>

                <Route exact path="/account" component={Account} />

                <Route exact path="/logout" component={Login} />

                <Route exact path="/login" component={Login} />

                <Route exact path="/" component={Home}></Route>
              </Switch>
            </>
          ) : (
            <>
              <Switch>
                <Route exact path="/logout" component={Login} />
              </Switch>
              <Switch>
                <Route exact path="/login" component={Login} />
              </Switch>
              <Switch>
                <Route exact path="/" component={Login} />
              </Switch>
            </>
          )}
        </div>
      </div>

      {/*  <Header /> */}
    </>
  );
}

export default App;
