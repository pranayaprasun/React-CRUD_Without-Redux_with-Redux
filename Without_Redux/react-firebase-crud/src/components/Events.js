import React, { useState, useEffect } from "react";
import EventForm from "./EventForm";
import fireBaseDb from "../firebase";

const Events = () => {

    var [eventObjects, setEventObjects] = useState({})
    var[currentId, setCurrentId] = useState('')

    useEffect(()=>{
    fireBaseDb.child('events').on('value', snapshot=>{
        if(snapshot.val()!= null)
            setEventObjects({
                ...snapshot.val()
            })
        else
        setEventObjects({ })
    })
    },[]) //similar to componentDidMount

  const addOrEdit = (obj) => {
    if(currentId === '') 
    fireBaseDb.child('events').push(
        obj,
        err => {
            if(err)
                console.log("err");
            else
                setCurrentId('')
        }
    )
    else
    fireBaseDb.child(`events/${currentId}`).set(
        obj,
        err => {
            if(err)
                console.log("err");
            else
                setCurrentId('')
        }
    ) 
  };

  const onDelete = key => {
    if(window.confirm('Are you sure to delete the record ?')) {
        fireBaseDb.child(`events/${key}`).remove(
            err => {
                if(err)
                    console.log("err");
                else
                    setCurrentId('')
            }
        )        
    }
  }

  return (
    <React.Fragment>
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4 text-center">Event Management</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <EventForm {...({addOrEdit: addOrEdit, currentId, eventObjects})} />
          </div>
          <div className="col-md-7">
            <table className= "table table-borderless table-stripped">
                <thead className= "thead-dark">
                  <tr>
                      <th>Event Name</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Description</th>
                      <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(eventObjects).map(id =>{
                            return <tr key= {id}>
                                <td>{eventObjects[id].eventName}</td>
                                <td>{eventObjects[id].date}</td>
                                <td>{eventObjects[id].time}</td>
                                <td>{eventObjects[id].description}</td>
                                <td>
                                    <a className= "btn text-primary" onClick = {() => { setCurrentId(id) }}>
                                      <i className= "fas fa-pencil-alt" />
                                    </a>
                                    <a className= "btn text-danger" onClick = {() => { onDelete(id)} }>
                                      <i className= "fas fa-trash-alt" />
                                    </a>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Events;
