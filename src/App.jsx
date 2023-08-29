import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
function App() {
  let [contact, setContact] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <h1>Contact App</h1>
        <List contactProp={contact} />
        <Form setContactProp={setContact} contactProp={contact} />
      </div>
    </div>
  );
}

export default App;
