import React from 'react';
import Header from './Header';
import NavBar from './NavBar'
import NewEvent from './NewEvent'
import { EventList } from './EventList'
import MyEvents from './MyEvents';
import AddPerson from './AddPerson'



import { Route } from "react-router-dom";


export const MenuApp = props => {
   
  console.log(props)

  return(
    <div>

      <div>
        <Header />

        <NavBar {...props} />
      </div>

      {/* <div>
        <AddPerson />
      </div> */}

      <div>
        <Route exact path='/menu' component={NewEvent} />
        
        <Route exact path='/menu/friends' component={MyEvents} />

        <Route exact path='/menu/profile' component={EventList} />  
      </div>
    
    </div>
  )
    
}


