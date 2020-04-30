import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from "../actions/eventActions";
import { bindActionCreators } from "redux";

class EventForm extends Component {
    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if(this.props.currentIndex === -1)
            return {
                eventname: '',
                date: '',
                time: '',
                description: ''
            }
        else 
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length)
        this.setState({
            ...this.returnStateObject()
        })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.props.currentIndex === -1)
            this.props.insertEvent(this.state)
        else
        this.props.updateEvent(this.state)
    } 
 
    render() {
        return (
            <form onSubmit= {this.handleSubmit} autoComplete= "off">
                <input name= "eventName" placeholder= "Event Name" value= {this.state.eventName} onChange= {this.handleInputChange} /><br />
                <input name= "date" type="Date" placeholder= "Date" value= {this.state.date} onChange= {this.handleInputChange} /><br />
                <input name= "time" type="Time" placeholder= "Time" value= {this.state.time} onChange= {this.handleInputChange} /><br />
                <input name= "description" placeholder= "Description" value= {this.state.description} onChange= {this.handleInputChange} /><br />
                <button type= "submit">Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDiapatchToProps = dispatch => {
    return bindActionCreators({
        insertEvent: actions.insert,
        updateEvent: actions.update
    }, dispatch )
}


export default connect(mapStateToProps, mapDiapatchToProps)(EventForm)
