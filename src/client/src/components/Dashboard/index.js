import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Logout from "../Logout";
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
        Dashboard
        <Logout />
      </div>
    );
  }
}

export default withAuth(
  session => session && session.user & session.networkStatus
)(Dashboard);
