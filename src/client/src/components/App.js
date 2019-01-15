import React from "react";
import { Route, Switch } from "react-router-dom";

import withSession from "./Session/withSession";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Logout from "./Logout";

const Root = ({ refetch, session }) => (
  <Switch>
    <Route
      path="/login"
      render={props => <Login {...props} refetch={refetch} />}
    />
    <Route
      path="/signup"
      render={props => <Signup {...props} refetch={refetch} />}
    />
    <Route
      path="/dashboard"
      render={props => <Dashboard {...props} session={session} />}
    />
    <Route path="/logout" render={props => <Logout {...props} />} />
  </Switch>
);

const App = withSession(Root);

export default App;
