import React from 'react';

import {axiosAuth} from '../axios/axiosAuth'



const EventCard = (props) => {

      console.log(props.userId)

      return(
            <div className="eventcard">
                  <h2 className="heading">{props.event_name}</h2>
                  <p className="text">{props.address}</p>
                  <h3 className="heading">{props.date} </h3>
                  <p className="text">{props.timestart} until</p>
                  <p className="text">{props.timeend}</p>
                  <p><i>{props.description}</i></p>
                  <button className="eventbutton">sign up</button>
                  <button className="eventbutton" onClick={() => { if(props.userId == localStorage.getItem('id')){
                        return axiosAuth().delete(`https://potluckplanner-be.herokuapp.com/events/${props.id}`)
                              .then(res => console.log(res))
                              .catch(error => console.log(error))
                  }}
                        
                  }>Delete</button>
            </div>
      )
}

export default EventCard

