import React from 'react';
import Header from './Header';
import NavBar from './NavBar'
import NewEvent from './NewEvent'
import { EventList } from './EventList'
import MyEvents from './MyEvents';
import AddPerson from './AddPerson'

import { Route } from "react-router-dom";
import { EventContext } from '../context/EventContext'
import { useContext } from 'react'





export const MenuApp = (props) => {

  const {events}  = useContext(EventContext)
   
  console.log(events)

  return(
    <div>

      <div>
        <Header {...props} />

        <NavBar {...props} />
      </div>

      <div>
        <Route exact path='/menu' component={NewEvent} />
        
        <Route exact path='/menu/profile' component={AddPerson} />

        <Route exact path='/menu/profile' component={MyEvents} />

        <Route exact path='/menu/events' render={() => <EventList {...events}/>} />  
      </div>
    
    </div>
  )
    
}


