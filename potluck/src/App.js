import React from 'react';

import SignUp from './components/loginInfo/SignUp'
import Login from './components/loginInfo/Login'
import { MenuApp } from "./components/mainProfilePages/Menu";
import Links from './components/loginInfo/Links'

import { Route, Redirect} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">

      <Route exact path='/' component={Links} />

        <Route exact path="/users/register" component={SignUp} />

        <Route exact path="/users/login" component={Login} />
        
        <Route exact path="/menu" render={props => {
            const token = localStorage.getItem("token");
            if (!token) {
              return <Redirect to="/" />;
            }
              return <MenuApp {...props} />;
            }} 
        />

        <Route exact path="/menu/friends" render={props => {
            const token = localStorage.getItem("token");
            if (!token) {
              return <Redirect to="/" />;
            }
              return <MenuApp {...props} />;
            }} 
        />

        <Route exact path="/menu/profile" render={props => {
            const token = localStorage.getItem("token");
            if (!token) {
              return <Redirect to="/" />;
            }
              return <MenuApp {...props} />;
            }} 
        />







        {/* <Route exact path="/menu" component={MenuApp}/> */}

    </div>
  );
}

export default App;
