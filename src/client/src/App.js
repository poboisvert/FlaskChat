import React, { useEffect } from 'react';
import './App.css';
import MarketManager from './pages/marketManager';
import Home from './pages/home';
import Account from './pages/account';
import Login from './components/Login/Login';

// API
import AuthService from './Hooks/auth-service';

// Router
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';

function App() {
  // API
  const currentUser = AuthService.getCurrentUser();
  // Redux
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && !user) {
      dispatch(
        login({
          user: currentUser,
        })
      );
    }
  }, []);

  return (
    <>
      <div className='app'>
        <div className='app__body'>
          <Router history={history}>
            {user ? 'OUI' : ''}
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
