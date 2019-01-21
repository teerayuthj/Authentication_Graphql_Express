import React from "react";
import { Helmet } from "react-helmet";

import withAuth from "../Session/withAuth";

const Dashboard = () => {
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
};

export default withAuth(session => session && session.user)(Dashboard);
