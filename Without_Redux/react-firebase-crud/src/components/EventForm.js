import React, { useState, useEffect } from "react";

const EventForm = (props) => {
  const intialFieldValues = {
    eventName: "",
    date: "",
    time: "",
    description: "",
  };

  var [values, setValues] = useState(intialFieldValues);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() =>{
    if(props.currentId ==="")
    setValues({
        ...intialFieldValues
    })
    else 
    setValues({
        ...props.eventObjects[props.currentId]
    })  
  }, [props.currentId, props.eventObjects])

  const handleFormSubmit = e => {
    e.preventDefault();
    props.addOrEdit(values)
  }

  return (
    <form autoComplete="off" onSubmit= {handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-task"> </i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Event Name"
          name="eventName"
          value={values.eventName}
          onChange={handleInputChange}
        />
      </div>
      <div className="row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-calendar"> </i>
            </div>
          </div>
          <input
            type= "Date"
            className="form-control"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-clock"> </i>
            </div>
          </div>
          <input
            type= "time"
            className="form-control"
            placeholder="Time"
            name="time"
            value={values.time}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          />
        </div>
        <div className= "form-group">
            <input type= "submit" value= {props.currentId === ''?"Save": "Update" } className= "btn btn-primary btn-block" />
        </div>
    </form>
  );
};

export default EventForm;
