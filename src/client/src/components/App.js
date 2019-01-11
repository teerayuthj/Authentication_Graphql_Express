import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import withSession from "./Session/withSession";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";

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
