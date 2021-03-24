import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Home from "./pages/home";
import AuthService from "./Hooks/auth.service";

function App() {
  const currentUser = AuthService.getCurrentUser();
  return (
    <>
      <div className="app">
        <div className="app__body">
          {currentUser ? (
            <>
              <Switch>
                <Route exact path="/logout" component={Login} />
              </Switch>
              <Switch>
                <Route exact path="/login" component={Login} />
              </Switch>
              <Switch>
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
      {/*  <Movies /> */}
    </>
  );
}

export default App;
