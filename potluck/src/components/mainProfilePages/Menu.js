import React from 'react';
import Header from './Header';
import NavBar from './NavBar'
import NewEvent from './NewEvent'
import { EventList } from './EventList'
import { Route } from "react-router-dom";


export const MenuApp = props => {
   
  console.log(props)

  return(
    <div>

      <div>
        <Header />

        <NavBar {...props} />
      </div>

      <div>
        <Route exact path='/menu' component={NewEvent} />
        
        <Route exact path='/menu/friends' component={EventList} />        
      </div>

    
    </div>
  )
    
}


