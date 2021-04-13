import React from 'react';
import './App.css';
import MarketManager from './pages/marketManager';
import Home from './pages/home';
import Account from './pages/account';

// Router
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Login from './components/Login/Login';

function App() {
  return (
    <>
      <div className='app'>
        <div className='app__body'>
          <Router history={history}>
            <Switch>
              <Route path='/listing/:id' exact component={MarketManager} />
              <Route path='/listing' exact component={MarketManager} />
              <Route path='/channel/:name' exact component={Home} />
              <Route path='/account' exact component={Account} />
              <Route path='/logout' exact component={Login} />
              <Route path='/login' exact component={Login} />
              <Route path='/' exact component={Home} />
            </Switch>
          </Router>
        </div>
      </div>

      {/*  <Header /> */}
    </>
  );
}

export default App;
