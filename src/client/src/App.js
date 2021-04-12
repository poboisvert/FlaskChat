import React from 'react';
import './App.css';
import MarketManager from './pages/marketManager';
import Home from './pages/home';
import Account from './pages/account';

// Router
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Login from './components/Login/Login';

// Style
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className='app'>
        <div className='app__body'>
          <Router history={history}>
            <Switch>
              <Route path='/listing/:id' component={MarketManager} />
              <Route exact path='/listing' component={MarketManager} />
              <Route path='/channel/:name' component={Home} />
              <Route exact path='/account' component={Account} />
              <Route exact path='/logout' component={Login} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={Home} />>
            </Switch>
          </Router>
        </div>
      </div>

      {/*  <Header /> */}
    </>
  );
}

export default App;
