import React, { useState } from "react";
import Header from './Header';
import NavBar from './NavBar'
import NewEvent from './NewEvent'
import { EventList } from './EventList'
// import MyEvents from './MyEvents';
import AddPerson from './AddPerson'

import { Route } from "react-router-dom";
import { EventContext, UserContext } from '../context/EventContext'
import { useContext } from 'react'





export const MenuApp = (props) => {

  const {events}  = useContext(EventContext)
  const {users}  = useContext(UserContext)

  const[newEvents, setNewEvents] = useState(events);
  const[newUsers, setNewUsers] = useState(users);

  const addNewEvent = e => {
    setNewEvents([...newEvents, e]);
  };

  return(
    <div>

      <div>
        <Header {...props} />

        <NavBar {...props} />
      </div>

      

      <div>
        <Route exact path='/menu' render={() => <NewEvent addNewEvent={addNewEvent} />} />
        
        <Route exact path='/menu/profile' component={AddPerson} />

        {/* <Route exact path='/menu/profile' component={MyEvents} /> */}

        <Route exact path='/menu/events' render={() => <EventList {...events} />} />  

        <Route exact path='/menu/profile' component={EventList} />

      </div>
    
    </div>
  )
    
}


