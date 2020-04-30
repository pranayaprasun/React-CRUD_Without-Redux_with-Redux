import React, { Component } from "react";
import EventList from "./components/EventList";



export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <EventList />
        </div>
      </React.Fragment>
    );
  }
}
