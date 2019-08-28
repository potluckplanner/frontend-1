import React from 'react';


const EventCard = (props) => {


      return(
            <div className="eventcard">
                  <h2 className="heading">{props.name}</h2>
                  <p className="text">{props.address}</p>
                  <h3 className="heading">{props.date} </h3>
                  <p className="text">{props.timestart} until</p>
                  <p className="text">{props.timeend}</p>
                  <p><i>{props.description}</i></p>
                  <button className="eventbutton">sign up</button>
            </div>
      )
}

export default EventCard