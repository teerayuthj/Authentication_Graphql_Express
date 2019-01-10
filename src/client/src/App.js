import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withSession from "./components/Session/withSession";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";

import "./App.css";

const Root = ({ refetch, session }) => (
  <Router>
    <Switch>
      <Route
        path="/login"
        render={props => <Login {...props} refetch={refetch} />}
      />
      <Route
        path="/Signup"
        render={props => <Signup {...props} refetch={refetch} />}
      />
      <Route
        path="/dashboard"
        render={props => <Dashboard {...props} session={session} />}
      />
    </Switch>
  </Router>
);

const App = withSession(Root);

export default App;
