import React from "react";
import { Route, Router } from "react-router-dom";

import withSession from "./Session/withSession";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import * as routes from "./constants/routes";
import history from "./constants/history";
import Navigation from "./Navigation";

const App = ({ session, refetch }) => (
  <Router history={history}>
    <div>
      <Navigation />
      <hr />

      <Route exact path={routes.DASHBOARD} component={() => <Dashboard />} />
      <Route
        exact
        path={routes.LOG_IN}
        component={() => <Login refetch={refetch} />}
      />
      <Route
        exact
        path={routes.SIGN_UP}
        component={() => <Signup refetch={refetch} />}
      />
    </div>
  </Router>
);

export default withSession(App);
