import React from "react";
import "./App.css";
import Events from "./components/Events";

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Events />
      </div>
    </div>
  );
}

export default App;
