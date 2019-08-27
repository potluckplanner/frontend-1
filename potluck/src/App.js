import React from 'react';

import SignUp from './components/SignUp'
import {Menu} from './components/Menu'


import { Route, Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        Hello There

        <div>
          <Route exact path="/" component={SignUp} />


          <Route exact path="/Menu" render={props => {
              const token = localStorage.getItem("token");
              if (!token) {
                return <Redirect to="/" />;
              }
                return <Menu {...props} />;
              }} />
        </div>


      </header>
    </div>
  );
}

export default App;
