import React, { Component } from "react";
import { Helmet } from "react-helmet";

import withAuth from "../Session/withAuth";

class Dashboard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <div>
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
}

export default withAuth(
  session => session && session.user && session.user.email === "DASHBOARD"
)(Dashboard);
