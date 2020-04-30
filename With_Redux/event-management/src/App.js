import React, { Component } from "react";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import EventList from "./components/EventList";



export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
          <EventList />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
