import React from 'react';
import EventCard from "./EventCard";
import Data from "./Data";

const MyEvents = (props) => {

      return( 
      <div>
            <h1 className="heading titleH">My Events</h1>
            <div className="myevents">
            
            {
                  Data.map( ( i ) => (
                  
                  <EventCard name={i.name} key={i.id} date={i.date} address={i.address} timestart={i.timestart} timeend={i.timeend} description={i.description} />

                  ))
            }
            </div>
            </div>
      )

}
export default MyEvents