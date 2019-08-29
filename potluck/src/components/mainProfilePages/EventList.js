import React from 'react'
import EventCard from './EventCard'

import { EventContext } from '../context/EventContext'
import { useContext } from 'react'

export const EventList = props => {

    const {events}  = useContext(EventContext)

    console.log(events)


    if(props){
        return(
            <div>
                {events.map(item => (<EventCard 
                        address={item.address} 
                        city={item.city} 
                        description={item.description}
                        eventName={item.event_name}
                        state={item.state}
                        time={item.time}
                    />
                ))}
            </div>
        )
    } else {
        return (
          
          <div>
          
            <h3>Loading...</h3>
          
          </div>
    
        );
      }
};