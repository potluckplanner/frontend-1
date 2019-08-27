import React from 'react';

import SignUp from './components/loginInfo/SignUp'
import Login from './components/loginInfo/Login'
import Menu1 from "./components/Menu";
import Links from './components/loginInfo/Links'
// import EventForm from './components/EventForm';

import { Route, Redirect} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">

      <Route exact path='/' component={Links} />

        <Route exact path="/users/register" component={SignUp} />

        <Route exact path="/users/login" component={Login} />

        <Route exact path="/Menu" render={props => {
            const token = localStorage.getItem("token");
            if (!token) {
              return <Redirect to="/" />;
            }
              return <Menu1 {...props} />;
            }} 
        />

        {/* <Route exact path="/Menu" component={Menu1}/> */}

        {/* <EventForm /> */}



    </div>
  );
}

export default App;
