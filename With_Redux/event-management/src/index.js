import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { eventReducer } from "./reducers/eventReducer";




if (localStorage.getItem("events") === null)
  localStorage.setItem("events", JSON.stringify([]));

let intialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('events'))
}

var store = createStore(eventReducer, intialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}> <App /> </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
