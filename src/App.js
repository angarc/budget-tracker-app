import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { HomePage, RegisterPage, LoginPage } from './pages/Frontend'
import { Dashboard } from './containers/Dashboard/'
import { Navbar } from './components/Frontend/'

function App() {
  return (
    <Router>
     <div>
        <Switch>
          <Route path="/register">
            <Navbar/>
            <RegisterPage/>
          </Route>
          <Route path="/login">
            <Navbar/>
            <LoginPage />
          </Route>

          <Route path="/dashboard" component={Dashboard}/>

          <Route path="/">
            <Navbar/>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
