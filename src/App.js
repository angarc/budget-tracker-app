import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomePage, RegisterPage, LoginPage } from './pages/'
import FrontendNavbar from './components/FrontendNavbar/FrontendNavbar'

function App() {
  return (
    <Router>
     <div>
        <Switch>
          <Route path="/register">
            <FrontendNavbar/>
            <RegisterPage/>
          </Route>
          <Route path="/login">
            <FrontendNavbar/>
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <h1>Dashboard</h1>
          </Route>
          <Route path="/">
            <FrontendNavbar/>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
