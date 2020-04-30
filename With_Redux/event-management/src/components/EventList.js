import React, { Component } from "react";
import EventForm from "./EventForm";
import { connect } from "react-redux";
import * as actions from "../actions/eventActions";
import { bindActionCreators } from "redux";


class EventList extends Component {

handleEdit = index => {
    this.props.updateEventIndex(index)
}

handleDelete = index => {
    this.props.deleteEvent(index)
}

  render() {
    return (
        <div>
            <EventForm />
            <hr />
            <table draggable>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.list.map((item, index) => {
                            return <tr key= "index">
                                <td>{item.eventName}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button onClick = {() => this.handleEdit(index)}>Edit</button>
                                    <button onClick = {() => this.handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <hr />
        </div>
    );
  }
}


const mapStateToProps = state => {
    return {
        list: state.list
    }
}

const mapDiapatchToProps = dispatch => {
    return bindActionCreators({
        deleteEvent: actions.Delete,
        updateEventIndex: actions.updateIndex
    }, dispatch )
}

export default connect(mapStateToProps, mapDiapatchToProps)(EventList);
