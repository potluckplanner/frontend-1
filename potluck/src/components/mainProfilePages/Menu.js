import React from 'react';
import Header from './Header';
import NavBar from './NavBar'
import MyEvents from './MyEvents';
import NewEvent from './NewEvent';



export const MenuApp = () => {
  
  return(
    <div>

      <Header />

      <NavBar />

      {/* <NewEvent /> */}

      <MyEvents />

    
    </div>
  )
    
}


