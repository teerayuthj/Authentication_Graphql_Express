import React, { Component } from "react";

import Logout from "../Logout";
import withAuth from "../Session/withAuth";

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <Logout />
      </div>
    );
  }
}

export default withAuth(session => session && session.currentUser)(Dashboard);
