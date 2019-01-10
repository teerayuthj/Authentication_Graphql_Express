import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Head from "./components/Head";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Logout from "./components/Logout";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Head} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
