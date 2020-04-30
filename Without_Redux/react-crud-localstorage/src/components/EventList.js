import React, { Component } from "react";
import EventForm from "./EventForm";

class EventList extends Component {

state = {
    currentIndex: -1,
    list: this.returnList()
}

returnList() {
    if(localStorage.getItem('events') === null)
        localStorage.setItem('events', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('events'))
}

addOrEdit = (data) => {
    var list = this.returnList()
    if(this.state.currentIndex === -1)
        list.push(data)
    else
        list[this.state.currentIndex] = data
    localStorage.setItem('events', JSON.stringify(list))
    this.setState({ list: list, currentIndex: -1 }) /* or you can define only "list" because if key and value both are same, as per ES6 you can define one of them */
}

handleEdit = index => {
    this.setState({
        currentIndex: index
    })
}

handleDelete = index => {
    var list = this.returnList()
    list.splice(index, 1)
    localStorage.setItem('events', JSON.stringify(list))
    this.setState({ list: list, currentIndex: -1 })
}

  render() {
    return (
        <div>
            <EventForm 
                onAddOrEdit = {this.addOrEdit}
                currentIndex = {this.state.currentIndex}
                list = {this.state.list}
            />
            <hr />
            <table>
                {
                    this.state.list.map((item, index) => {
                        return <tr key= "index">
                            <td>{item.eventName}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.description}</td>
                            <td><button onClick = {() => this.handleEdit(index)}>Edit</button></td>
                            <td><button onClick = {() => this.handleDelete(index)}>Delete</button></td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
  }
}

export default EventList;
