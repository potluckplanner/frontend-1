import React from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const Header = props => {

      // console.log(props)

      return (
            <div className="header">
                  <div className="icon">
                        <i className="fas fa-utensils">
                        </i><h1 className="heading">Potluck Planner</h1>
                  </div>
                  
                  <Button negative onClick={() => {
                        localStorage.removeItem("token");
                        props.history.push("/");
                  }}>Logout</Button>
            </div>
      )
}

export default Header 