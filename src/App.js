import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav";
import { Switch } from "antd";
import Public from "./components/public";
import Protected from "./components/protected";
import Profile from "./components/profile";

function App() {
  const [current, setCurrent] = useState("home");

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Public} />
          <Route exact path="/protected" component={Protected} />
          <Route exact path="/profile" component={Profile} />
          <Route component={Public} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
