import React, { useState } from "react";

const EventForm = () => {

  return(

  
  <div className="form">
    <form onSubmit={event => handleSubmit(event)}>
          <label>Event Name
                <input type="text" name="Name" />
          </label>
      <button>Submit</button>
    </form>
  </div>
  )
};
export default EventForm;
