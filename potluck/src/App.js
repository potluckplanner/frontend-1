import React, { useState, useEffect } from "react";
import {axiosAuth} from './components/axios/axiosAuth'

import SignUp from './components/loginInfo/SignUp'
import Login from './components/loginInfo/Login'
import { MenuApp } from "./components/mainProfilePages/Menu";
import Links from './components/loginInfo/Links'

import { Route, Redirect} from "react-router-dom";

import './App.css';

function App() {

  const [events, setEvents] = useState([])

  // console.log(events)


  const getEvents = () => {

    axiosAuth().get("https://potluckplanner-be.herokuapp.com/events")
      .then(res => {
        console.log(res.data)
        setEvents(res.data)
      })
      .catch(error => console.log(error.response))
    } 


    useEffect( () => {
      getEvents()
  }, [])




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

        <Route exact path="/menu/profile" render={props => {
            const token = localStorage.getItem("token");
            if (!token) {
              return <Redirect to="/" />;
            }
              return <MenuApp {...props} />;
            }} 
        />

        <Route exact path="/menu/events" render={props => {
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
