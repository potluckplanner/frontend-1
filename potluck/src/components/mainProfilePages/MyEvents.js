import React from 'react';
import EventCard from "./EventCard";
import Data from "./Data";

const MyEvents = (props) => {

      return( 
      <div className="myevents">
            {
                  Data.map( ( i ) => (
                  
                  <EventCard name={i.name} date={i.date} address={i.address} timestart={i.timestart} timeend={i.timeend} description={i.description} />

                  ))
            }
            </div>
      )

}
export default MyEvents