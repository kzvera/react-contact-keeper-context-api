import { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Layout/Navbar'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Alerts from './components/Layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/Routing/PrivateRoute';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home}></PrivateRoute>
                  <Route exact path='/about' component={About}></Route>
                  <Route exact path='/register' component={Register}></Route>
                  <Route exact path='/login' component={Login}></Route>
                </Switch>
              </div>
          </Fragment>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
