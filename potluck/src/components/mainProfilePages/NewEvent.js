import React, { useState } from "react";


const NewEvent = () => {
  const defaultState = {
    name: ""
  };
  const [form, setForm] = useState(defaultState);
  function handleSubmit() {}
  return (
    <div className="form">
      <h1 className="heading titleH">Create New Event</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <label className="toplabel" >
          Event Name
          <input
            className="nameF"
            type="text"
            name="name"
            placeholder="Event Name"
          />
        </label>
        <label>
          Event Address
          <input
            className="addressF"
            type="text"
            name="address"
            placeholder="Event Address"
          />
        </label>
        <label>
          Event Date  
          <input className="dateF" type="text" name="date" placeholder="Date" />
        </label>
        <label>
          Start Time
          <input
            className="startF"
            type="text"
            name="timestart"
            placeholder="Start Time"
          />
        </label>
        <label>
          End Time
          <input
            className="endF"
            type="text"
            name="timeend"
            placeholder="End Time"
          />
        </label>
        <label>
          Description
          <input
            className="descriptionF"
            type="text"
            name="description"
            placeholder="Description"
          />
        </label>

        <button className="buttonF">Submit</button>
      </form>
    </div>
  );
};
export default NewEvent;
